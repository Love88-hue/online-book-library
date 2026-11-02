const profileBackendEnabled = location.protocol !== "file:" && !location.hostname.endsWith(".github.io");
let profilePdfUrls = [];

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
  status.classList.remove("hidden");
  signIn.classList.add("hidden");
  dashboard.classList.add("hidden");
  if (!profileBackendEnabled) {
    try {
      const email = localStorage.getItem("obl_session");
      if (!email) {
        status.classList.add("hidden");
        signIn.classList.remove("hidden");
        return;
      }
      const accounts = JSON.parse(localStorage.getItem("obl_accounts") || "{}");
      const account = accounts[email];
      if (!account) throw new Error("This browser doesn't have an account for the current session. Please log in again.");
      const [watchlistIds, uploads] = await Promise.all([
        Promise.resolve(JSON.parse(localStorage.getItem(`obl_watchlist_${email}`) || "[]")),
        getUploads()
      ]);
      if (!Array.isArray(watchlistIds)) throw new Error("Your saved reading list could not be loaded.");
      profilePdfUrls.forEach(url => URL.revokeObjectURL(url));
      profilePdfUrls = uploads.map(book => URL.createObjectURL(book.pdf));
      const catalog = window.libraryBookCatalog || [];
      const booksById = new Map([...catalog, ...uploads].map(book => [book.id, book]));
      const savedBooks = watchlistIds.map(id => booksById.get(id) || { id, title: "Saved book", author: "Library collection" });
      const localUploads = uploads.map((book, index) => ({ ...book, pdfUrl: profilePdfUrls[index] }));
      document.getElementById("profile-name").textContent = account.name || email;
      document.getElementById("profile-email").textContent = email;
      document.getElementById("profile-avatar").textContent = (account.name || email).trim().charAt(0).toUpperCase() || "✳";
      document.getElementById("watchlist-count").textContent = String(savedBooks.length);
      document.getElementById("uploads-count").textContent = String(localUploads.length);
      document.getElementById("profile-watchlist").innerHTML = savedBooks.length
        ? savedBooks.map(book => profileBookCard(book, "saved")).join("")
        : profileEmpty("Your watchlist is empty. Save a book from Discover to find it here.");
      document.getElementById("profile-uploads").innerHTML = localUploads.length
        ? localUploads.map(book => profileBookCard(book, "upload")).join("")
        : profileEmpty("You haven't uploaded any books yet. Add a PDF and cover from the library.");
      document.querySelector(".profile-privacy").textContent = "This demo saves your account, watchlist, and uploaded books only in this browser. It is not a secure online account.";
      status.classList.add("hidden");
      dashboard.classList.remove("hidden");
    } catch (error) {
      console.error("Could not load your local profile.", error);
      status.textContent = error.message || "Could not load your profile. Please try again.";
    }
    return;
  }
  status.textContent = "Loading your profile…";
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
      if (profileBackendEnabled) {
        const { ids } = await profileRequest("/api/watchlist");
        await profileRequest("/api/watchlist", {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ ids: ids.filter(id => id !== unsave.dataset.profileUnsave) })
        });
      } else {
        await setWatchlist(getWatchlist().filter(id => id !== unsave.dataset.profileUnsave));
      }
    } else if (remove) {
      if (profileBackendEnabled) {
        await profileRequest(`/api/uploads/${encodeURIComponent(remove.dataset.profileDelete)}`, { method: "DELETE" });
      } else {
        await deleteUpload(remove.dataset.profileDelete);
      }
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
