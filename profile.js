const profileBackendEnabled = ["localhost", "127.0.0.1"].includes(location.hostname) && location.port === "5000";

async function profileRequest(path, options = {}) {
  const response = await fetch(path, { credentials: "same-origin", ...options });
  const result = await response.json().catch(() => ({}));
  if (!response.ok) throw new Error(result.error || `Request failed (${response.status}).`);
  return result;
}

function profileEscape(value) {
  return String(value).replace(/[&<>"']/g, char => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[char]);
}

function profileEmpty(message) {
  return `<div class="profile-empty">${profileEscape(message)}</div>`;
}

function profileBookCard(book, kind) {
  const actions = kind === "upload"
    ? `<a class="book-action" href="${profileEscape(book.pdfUrl)}" target="_blank" rel="noopener noreferrer">Read PDF ↗</a><button class="book-action delete-action" type="button" data-profile-delete="${profileEscape(book.id)}">Remove</button>`
    : `<button class="book-action" type="button" data-profile-unsave="${profileEscape(book.id)}">Remove from list</button>`;
  const cover = book.coverUrl || book.cover || "";
  return `<article class="profile-book-card"><img src="${profileEscape(cover)}" alt="Cover of ${profileEscape(book.title)}" loading="lazy"><div><h3>${profileEscape(book.title)}</h3><p>${profileEscape(book.author || "")}</p><div class="profile-book-actions">${actions}</div></div></article>`;
}

async function renderProfile() {
  const status = document.getElementById("profile-status");
  const signIn = document.getElementById("profile-signin");
  const dashboard = document.getElementById("profile-dashboard");
  if (!profileBackendEnabled) {
    status.innerHTML = `Your profile page is available, but online account data needs the Flask backend.<br><br><a class="button button-dark" href="index.html">Back to the library</a>`;
    return;
  }
  status.classList.remove("hidden");
  status.textContent = "Loading your profile…";
  signIn.classList.add("hidden");
  dashboard.classList.add("hidden");
  try {
    const { user } = await profileRequest("/api/me");
    if (!user) {
      status.classList.add("hidden");
      signIn.classList.remove("hidden");
      return;
    }
    const [watchlistResult, uploadsResult] = await Promise.all([
      profileRequest("/api/watchlist"),
      profileRequest("/api/uploads")
    ]);
    const watchlistIds = watchlistResult.ids;
    const uploads = uploadsResult.books;
    const catalog = window.libraryBookCatalog || [];
    const allBooks = [...catalog, ...uploads];
    const booksById = new Map(allBooks.map(book => [book.id, book]));
    const savedBooks = watchlistIds.map(id => booksById.get(id) || { id, title: "Saved book", author: "Library collection" });
    document.getElementById("profile-name").textContent = user.name;
    document.getElementById("profile-email").textContent = user.email;
    document.getElementById("profile-avatar").textContent = user.name.trim().charAt(0).toUpperCase() || "✳";
    document.getElementById("watchlist-count").textContent = String(savedBooks.length);
    document.getElementById("uploads-count").textContent = String(uploads.length);
    document.getElementById("profile-watchlist").innerHTML = savedBooks.length
      ? savedBooks.map(book => profileBookCard(book, "saved")).join("")
      : profileEmpty("Your watchlist is empty. Save a book from Discover to find it here.");
    document.getElementById("profile-uploads").innerHTML = uploads.length
      ? uploads.map(book => profileBookCard(book, "upload")).join("")
      : profileEmpty("You haven't uploaded any books yet. Add a PDF and cover from the library.");
    status.classList.add("hidden");
    dashboard.classList.remove("hidden");
  } catch (error) {
    console.error("Could not load your profile.", error);
    status.textContent = error.message || "Could not load your profile. Please try again.";
    status.classList.remove("hidden");
  }
}

document.getElementById("profile-login")?.addEventListener("click", () => {
  document.getElementById("account-button")?.click();
});

document.getElementById("profile-dashboard")?.addEventListener("click", async event => {
  const unsave = event.target.closest("[data-profile-unsave]");
  const remove = event.target.closest("[data-profile-delete]");
  try {
    if (unsave) {
      const { ids } = await profileRequest("/api/watchlist");
      await profileRequest("/api/watchlist", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ids: ids.filter(id => id !== unsave.dataset.profileUnsave) })
      });
    } else if (remove) {
      await profileRequest(`/api/uploads/${encodeURIComponent(remove.dataset.profileDelete)}`, { method: "DELETE" });
    } else {
      return;
    }
    await renderProfile();
  } catch (error) {
    console.error("Updating your profile failed.", error);
    const status = document.getElementById("profile-status");
    status.textContent = error.message || "Could not update your profile.";
    status.classList.remove("hidden");
  }
});

window.addEventListener("obl-auth-changed", renderProfile);
renderProfile();
