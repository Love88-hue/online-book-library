const reviewsKey = "obl_reviews";
const flaskReviewsEnabled = ["localhost", "127.0.0.1"].includes(location.hostname) && location.port === "5000";

function loadReviews() {
  try {
    const saved = JSON.parse(localStorage.getItem(reviewsKey) || "[]");
    return Array.isArray(saved) ? saved : [];
  } catch (error) {
    console.error("Could not read saved reviews.", error);
    return [];
  }
}

async function renderReviews() {
  const list = document.getElementById("reviews-list");
  const count = document.getElementById("review-count");
  if (!list || !count) return;
  let reviews;
  try {
    if (flaskReviewsEnabled) {
      const response = await fetch("/api/reviews");
      const result = await response.json();
      if (!response.ok) throw new Error(result.error || "Could not load reviews.");
      reviews = result.reviews;
    } else {
      reviews = loadReviews();
    }
  } catch (error) {
    console.error("Could not load reviews.", error);
    list.innerHTML = `<div class="review-empty">${escapeHtml(error.message || "Could not load reviews.")}</div>`;
    return;
  }
  count.textContent = `${reviews.length} ${reviews.length === 1 ? "note" : "notes"}`;
  list.innerHTML = reviews.length ? reviews.map(review => `<article class="review-card"><div class="review-card-top"><h3>${escapeHtml(review.name)}</h3><span class="review-stars" aria-label="${review.rating} out of 5 stars">${"★".repeat(review.rating)}${"☆".repeat(5 - review.rating)}</span></div><p>${escapeHtml(review.message)}</p><div class="review-date">${new Date(review.createdAt).toLocaleDateString()}</div></article>`).join("") : `<div class="review-empty">No notes yet. Be the first reader to leave one.</div>`;
}

document.getElementById("review-form")?.addEventListener("submit", async event => {
  event.preventDefault();
  const form = event.currentTarget;
  const data = new FormData(form);
  const review = {
    name: String(data.get("name")).trim(),
    rating: Number(data.get("rating")),
    message: String(data.get("message")).trim()
  };
  const message = document.getElementById("review-message");
  try {
    if (flaskReviewsEnabled) {
      const response = await fetch("/api/reviews", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(review)
      });
      const result = await response.json();
      if (!response.ok) throw new Error(result.error || "Could not post your note.");
    } else {
      const reviews = loadReviews();
      reviews.unshift({ ...review, createdAt: Date.now() });
      localStorage.setItem(reviewsKey, JSON.stringify(reviews.slice(0, 100)));
    }
    form.reset();
    message.textContent = "Thanks for leaving a note!";
    message.classList.add("success");
    await renderReviews();
  } catch (error) {
    console.error("Saving the review failed.", error);
    message.textContent = error.message || (flaskReviewsEnabled
      ? "Could not post your note. Please try again."
      : "Could not save your note in this browser. Please try again.");
  }
});

function escapeHtml(value) {
  return String(value).replace(/[&<>"']/g, char => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[char]);
}

if (flaskReviewsEnabled) {
  const note = document.querySelector(".review-storage-note");
  if (note) note.textContent = "Reviews are stored on this computer's Flask server and shared with its visitors.";
}
renderReviews();
