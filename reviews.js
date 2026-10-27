const reviewsKey = "obl_reviews";

function loadReviews() {
  try {
    const saved = JSON.parse(localStorage.getItem(reviewsKey) || "[]");
    return Array.isArray(saved) ? saved : [];
  } catch (error) {
    console.error("Could not read saved reviews.", error);
    return [];
  }
}

function renderReviews() {
  const list = document.getElementById("reviews-list");
  const count = document.getElementById("review-count");
  if (!list || !count) return;
  const reviews = loadReviews();
  count.textContent = `${reviews.length} ${reviews.length === 1 ? "note" : "notes"}`;
  list.innerHTML = reviews.length ? reviews.map(review => `<article class="review-card"><div class="review-card-top"><h3>${escapeHtml(review.name)}</h3><span class="review-stars" aria-label="${review.rating} out of 5 stars">${"★".repeat(review.rating)}${"☆".repeat(5 - review.rating)}</span></div><p>${escapeHtml(review.message)}</p><div class="review-date">${new Date(review.createdAt).toLocaleDateString()}</div></article>`).join("") : `<div class="review-empty">No notes yet. Be the first reader to leave one.</div>`;
}

document.getElementById("review-form")?.addEventListener("submit", event => {
  event.preventDefault();
  const data = new FormData(event.currentTarget);
  const reviews = loadReviews();
  reviews.unshift({
    name: String(data.get("name")).trim(),
    rating: Number(data.get("rating")),
    message: String(data.get("message")).trim(),
    createdAt: Date.now()
  });
  try {
    localStorage.setItem(reviewsKey, JSON.stringify(reviews.slice(0, 100)));
    event.currentTarget.reset();
    const message = document.getElementById("review-message");
    message.textContent = "Thanks for leaving a note!";
    message.classList.add("success");
    renderReviews();
  } catch (error) {
    console.error("Saving the review failed.", error);
    const message = document.getElementById("review-message");
    message.textContent = "Could not save your note in this browser. Please try again.";
  }
});

renderReviews();
