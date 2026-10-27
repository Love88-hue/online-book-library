const seedBooks = [
  ["Pride and Prejudice", "Jane Austen", "Classics", "1813", "#9d7580", "JA"],
  ["Jane Eyre", "Charlotte Brontë", "Classics", "1847", "#87695c", "JE"],
  ["Wuthering Heights", "Emily Brontë", "Classics", "1847", "#60746d", "WH"],
  ["Little Women", "Louisa May Alcott", "Fiction", "1868", "#bb8067", "LW"],
  ["The Secret Garden", "Frances Hodgson Burnett", "Fiction", "1911", "#718564", "SG"],
  ["Anne of Green Gables", "L. M. Montgomery", "Fiction", "1908", "#82926d", "AG"],
  ["Alice's Adventures in Wonderland", "Lewis Carroll", "Fantasy", "1865", "#9d7c58", "AW"],
  ["Through the Looking-Glass", "Lewis Carroll", "Fantasy", "1871", "#78879a", "LG"],
  ["The Wonderful Wizard of Oz", "L. Frank Baum", "Fantasy", "1900", "#637c64", "OZ"],
  ["The Wind in the Willows", "Kenneth Grahame", "Children", "1908", "#708678", "WW"],
  ["Treasure Island", "Robert Louis Stevenson", "Adventure", "1883", "#a2744e", "TI"],
  ["The Call of the Wild", "Jack London", "Adventure", "1903", "#67766d", "CW"],
  ["White Fang", "Jack London", "Adventure", "1906", "#819292", "WF"],
  ["The Jungle Book", "Rudyard Kipling", "Adventure", "1894", "#647a58", "JB"],
  ["Robinson Crusoe", "Daniel Defoe", "Adventure", "1719", "#aa835a", "RC"],
  ["Gulliver's Travels", "Jonathan Swift", "Adventure", "1726", "#827696", "GT"],
  ["Around the World in 80 Days", "Jules Verne", "Adventure", "1873", "#678496", "80"],
  ["Twenty Thousand Leagues Under the Sea", "Jules Verne", "Adventure", "1870", "#587a86", "20"],
  ["Journey to the Center of the Earth", "Jules Verne", "Adventure", "1864", "#8a7560", "JC"],
  ["The Time Machine", "H. G. Wells", "Fantasy", "1895", "#777c8b", "TM"],
  ["The War of the Worlds", "H. G. Wells", "Fantasy", "1898", "#9b6959", "WW"],
  ["Dracula", "Bram Stoker", "Mystery", "1897", "#594d5c", "DR"],
  ["Frankenstein", "Mary Shelley", "Fantasy", "1818", "#66716d", "FR"],
  ["The Picture of Dorian Gray", "Oscar Wilde", "Classics", "1890", "#917060", "DG"],
  ["The Adventures of Sherlock Holmes", "Arthur Conan Doyle", "Mystery", "1892", "#8b7557", "SH"],
  ["The Hound of the Baskervilles", "Arthur Conan Doyle", "Mystery", "1902", "#667568", "HB"],
  ["The Moonstone", "Wilkie Collins", "Mystery", "1868", "#817b91", "MS"],
  ["The Woman in White", "Wilkie Collins", "Mystery", "1859", "#8a8173", "WW"],
  ["The Scarlet Letter", "Nathaniel Hawthorne", "Classics", "1850", "#a65f56", "SL"],
  ["Moby-Dick", "Herman Melville", "Adventure", "1851", "#647b83", "MD"],
  ["The Great Gatsby", "F. Scott Fitzgerald", "Classics", "1925", "#ab8c58", "GG"],
  ["The Adventures of Tom Sawyer", "Mark Twain", "Adventure", "1876", "#708167", "TS"],
  ["Adventures of Huckleberry Finn", "Mark Twain", "Adventure", "1884", "#7d806c", "HF"],
  ["A Tale of Two Cities", "Charles Dickens", "Classics", "1859", "#9b715d", "TC"],
  ["Oliver Twist", "Charles Dickens", "Classics", "1838", "#82796b", "OT"],
  ["David Copperfield", "Charles Dickens", "Classics", "1850", "#826f7c", "DC"],
  ["Great Expectations", "Charles Dickens", "Classics", "1861", "#6f7a74", "GE"],
  ["A Christmas Carol", "Charles Dickens", "Classics", "1843", "#8c7458", "CC"],
  ["The Odyssey", "Homer", "Classics", "c. 700 BC", "#ad8959", "OD"],
  ["The Iliad", "Homer", "Classics", "c. 750 BC", "#9a6f62", "IL"],
  ["The Republic", "Plato", "Non-fiction", "c. 375 BC", "#77806c", "RP"],
  ["Meditations", "Marcus Aurelius", "Non-fiction", "c. 180", "#77877d", "ME"],
  ["The Art of War", "Sun Tzu", "Non-fiction", "c. 500 BC", "#9a765c", "AW"],
  ["Walden", "Henry David Thoreau", "Non-fiction", "1854", "#768873", "WA"],
  ["Leaves of Grass", "Walt Whitman", "Poetry", "1855", "#68816e", "LG"],
  ["The Raven and Other Poems", "Edgar Allan Poe", "Poetry", "1845", "#655b69", "RP"],
  ["The Prophet", "Kahlil Gibran", "Poetry", "1923", "#ad8567", "PR"],
  ["A Room of One's Own", "Virginia Woolf", "Non-fiction", "1929", "#88778d", "RO"],
  ["Siddhartha", "Hermann Hesse", "Fiction", "1922", "#a87a57", "SI"],
  ["The Metamorphosis", "Franz Kafka", "Fiction", "1915", "#718078", "ME"],
  ["The Count of Monte Cristo", "Alexandre Dumas", "Adventure", "1844", "#997254", "MC"],
  ["The Three Musketeers", "Alexandre Dumas", "Adventure", "1844", "#68768a", "TM"],
  ["Les Misérables", "Victor Hugo", "Classics", "1862", "#6c766c", "LM"],
  ["The Hunchback of Notre-Dame", "Victor Hugo", "Classics", "1831", "#8b706a", "HN"],
  ["The Brothers Karamazov", "Fyodor Dostoevsky", "Classics", "1880", "#796f76", "BK"],
  ["Crime and Punishment", "Fyodor Dostoevsky", "Mystery", "1866", "#9a6558", "CP"],
  ["War and Peace", "Leo Tolstoy", "Classics", "1869", "#a18a62", "WP"],
  ["The Adventures of Pinocchio", "Carlo Collodi", "Children", "1883", "#bd795c", "PI"],
  ["Heidi", "Johanna Spyri", "Children", "1881", "#789078", "HE"],
  ["The Little Princess", "Frances Hodgson Burnett", "Children", "1905", "#aa8290", "LP"]
].map(([title, author, category, year, color, initials], index) => ({
  id: `classic-${index + 1}`,
  title,
  author,
  category,
  year,
  color,
  initials,
  coverUrl: `https://covers.openlibrary.org/b/title/${encodeURIComponent(title)}-M.jpg?default=false`,
  uploaded: false
}));

const translations = {
  en: {
    navHome: "Discover", navBrowse: "Browse books", navAbout: "About", navReviews: "Reviews",
    donate: "Donate", login: "Log in", logout: "Log out", heroEyebrow: "YOUR NEXT CHAPTER STARTS HERE",
    heroTitle: "A little more<br><em>wonder,</em> every day.", heroDescription: "Find a quiet corner, discover a new favorite, and let a good book take you somewhere lovely.",
    exploreBooks: "Explore the library", heroNote: "A cozy corner for curious minds", libraryEyebrow: "A SHELF FOR EVERY MOOD",
    libraryTitle: "Find your next favorite", addBook: "Add book + PDF", tabDiscover: "Discover",
    tabWatchlist: "My watchlist", searchPlaceholder: "Search title or author…", allCategories: "All categories",
    emptyTitle: "Nothing on this shelf just yet", emptyDescription: "Try another search, or save a book to your watchlist.",
    showAll: "Show all books ↗", shareEyebrow: "GOOD STORIES GROW WHEN SHARED",
    shareTitle: "Have a book to pass along?", shareDescription: "Add a PDF and its cover to your personal library shelf. Your files stay on this device.",
    shareButton: "Upload PDF + cover", footerLine: "Made for slow mornings and one-more-chapter nights."
  },
  hi: {
    navHome: "खोजें", navBrowse: "किताबें देखें", navAbout: "हमारे बारे में", navReviews: "समीक्षाएँ",
    donate: "दान करें", login: "लॉग इन", logout: "लॉग आउट", heroEyebrow: "आपका अगला अध्याय यहाँ शुरू होता है",
    heroTitle: "हर दिन थोड़ा और<br><em>अचरज।</em>", heroDescription: "एक शांत कोना खोजें, नई पसंदीदा किताब ढूँढ़ें और कहानी के साथ कहीं दूर निकल जाएँ।",
    exploreBooks: "पुस्तकालय देखें", heroNote: "जिज्ञासु मन के लिए एक प्यारा कोना", libraryEyebrow: "हर मन के लिए एक किताब",
    libraryTitle: "अपनी अगली पसंदीदा किताब खोजें", addBook: "किताब + PDF जोड़ें", tabDiscover: "खोजें",
    tabWatchlist: "मेरी सूची", searchPlaceholder: "शीर्षक या लेखक खोजें…", allCategories: "सभी श्रेणियाँ",
    emptyTitle: "इस शेल्फ़ पर अभी कुछ नहीं है", emptyDescription: "दूसरी खोज आज़माएँ या किताब को अपनी सूची में जोड़ें।",
    showAll: "सभी किताबें देखें ↗", shareEyebrow: "अच्छी कहानियाँ बाँटने से बढ़ती हैं",
    shareTitle: "कोई किताब साझा करना चाहेंगे?", shareDescription: "PDF और उसका कवर अपनी लाइब्रेरी में जोड़ें। आपकी फ़ाइलें इसी डिवाइस पर रहेंगी।",
    shareButton: "PDF + कवर अपलोड करें", footerLine: "धीमी सुबहों और एक और अध्याय वाली रातों के लिए।"
  }
};

const categoryColors = ["#718568", "#bd8068", "#7c8294", "#b69866", "#6c8a83", "#986f7d", "#8e795e", "#6e7989"];
const databaseName = "online-book-library";
let allBooks = [...seedBooks];
let activeTab = "discover";
let selectedCategory = "all";
let activeLanguage = localStorage.getItem("obl_language") || "en";
let accountMode = "login";

function escapeHtml(value) {
  return String(value).replace(/[&<>"']/g, char => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[char]);
}

function makeFallbackCover(book) {
  const color = book.color || categoryColors[Math.abs(book.title.length + book.author.length) % categoryColors.length];
  const accent = book.accent || "#e8d6ad";
  const title = escapeHtml(book.title);
  const author = escapeHtml(book.author);
  const lines = title.match(/.{1,19}(\s|$)/g) || [title];
  const titleLines = lines.slice(0, 4).map((line, index) => `<text x="30" y="${143 + index * 29}" font-size="21">${escapeHtml(line.trim())}</text>`).join("");
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="360" height="500" viewBox="0 0 360 500"><rect width="360" height="500" fill="${color}"/><rect x="17" y="17" width="326" height="466" rx="3" fill="none" stroke="${accent}" stroke-opacity=".62"/><circle cx="288" cy="85" r="48" fill="${accent}" fill-opacity=".26"/><path d="M22 382 Q176 298 340 384V483H22Z" fill="${accent}" fill-opacity=".18"/><text x="30" y="63" fill="${accent}" font-family="Georgia,serif" font-size="12" letter-spacing="3">ONLINE BOOK LIBRARY</text><text x="30" y="103" fill="${accent}" font-family="Georgia,serif" font-size="14">${escapeHtml(book.initials || "✳")}</text><g fill="#fff9e9" font-family="Georgia,serif" font-weight="bold">${titleLines}</g><text x="30" y="434" fill="#fff9e9" font-family="Arial,sans-serif" font-size="12" letter-spacing="1">${author}</text><text x="314" y="463" fill="${accent}" font-family="Georgia,serif" font-size="19">✳</text></svg>`;
  return `data:image/svg+xml;charset=UTF-8,${encodeURIComponent(svg)}`;
}

function makeCover(book) {
  return book.cover || book.coverUrl || makeFallbackCover(book);
}

function bindCoverFallback(image, book) {
  if (!book.coverUrl || book.cover) return;
  const useFallback = () => {
    image.removeEventListener("error", useFallback);
    image.src = makeFallbackCover(book);
  };
  image.addEventListener("error", useFallback, { once: true });
  if (image.complete && image.naturalWidth === 0) useFallback();
}

function openDatabase() {
  return new Promise((resolve, reject) => {
    if (!("indexedDB" in window)) {
      reject(new Error("This browser doesn't support local book storage."));
      return;
    }
    const request = indexedDB.open(databaseName, 1);
    request.onupgradeneeded = () => {
      const database = request.result;
      if (!database.objectStoreNames.contains("uploads")) database.createObjectStore("uploads", { keyPath: "id" });
    };
    request.onsuccess = () => resolve(request.result);
    request.onerror = () => reject(request.error || new Error("Could not open local book storage."));
  });
}

async function getUploads() {
  const database = await openDatabase();
  return new Promise((resolve, reject) => {
    const transaction = database.transaction("uploads", "readonly");
    const request = transaction.objectStore("uploads").getAll();
    request.onsuccess = () => {
      database.close();
      resolve(request.result);
    };
    request.onerror = () => {
      database.close();
      reject(request.error || new Error("Could not load your saved books."));
    };
  });
}

async function saveUpload(book) {
  const database = await openDatabase();
  return new Promise((resolve, reject) => {
    const transaction = database.transaction("uploads", "readwrite");
    transaction.objectStore("uploads").put(book);
    transaction.oncomplete = () => {
      database.close();
      resolve();
    };
    transaction.onerror = () => {
      database.close();
      reject(transaction.error || new Error("Could not save this book."));
    };
  });
}

async function deleteUpload(id) {
  const database = await openDatabase();
  return new Promise((resolve, reject) => {
    const transaction = database.transaction("uploads", "readwrite");
    transaction.objectStore("uploads").delete(id);
    transaction.oncomplete = () => {
      database.close();
      resolve();
    };
    transaction.onerror = () => {
      database.close();
      reject(transaction.error || new Error("Could not delete this book."));
    };
  });
}

function getAccountEmail() {
  return localStorage.getItem("obl_session") || "";
}

function getWatchlist() {
  try {
    return JSON.parse(localStorage.getItem(`obl_watchlist_${getAccountEmail() || "guest"}`) || "[]");
  } catch (error) {
    console.error("Could not read the saved watchlist.", error);
    return [];
  }
}

function setWatchlist(ids) {
  localStorage.setItem(`obl_watchlist_${getAccountEmail() || "guest"}`, JSON.stringify(ids));
}

function setMessage(element, message, success = false) {
  if (!element) return;
  element.textContent = message;
  element.classList.toggle("success", success);
}

function applyLanguage(language) {
  activeLanguage = language === "hi" ? "hi" : "en";
  localStorage.setItem("obl_language", activeLanguage);
  document.documentElement.lang = activeLanguage;
  document.querySelectorAll("[data-i18n]").forEach(element => {
    const translated = translations[activeLanguage][element.dataset.i18n];
    if (translated) element.innerHTML = translated;
  });
  document.querySelectorAll("[data-i18n-placeholder]").forEach(element => {
    const translated = translations[activeLanguage][element.dataset.i18nPlaceholder];
    if (translated) element.placeholder = translated;
  });
  const select = document.getElementById("language-select");
  if (select) select.value = activeLanguage;
}

function getVisibleBooks() {
  const query = document.getElementById("search-input")?.value.trim().toLocaleLowerCase() || "";
  const ids = getWatchlist();
  return allBooks.filter(book => {
    const isInWatchlist = activeTab !== "watchlist" || ids.includes(book.id);
    const matchesCategory = selectedCategory === "all" || book.category === selectedCategory;
    const matchesQuery = !query || `${book.title} ${book.author} ${book.category}`.toLocaleLowerCase().includes(query);
    return isInWatchlist && matchesCategory && matchesQuery;
  });
}

function renderCategories() {
  const select = document.getElementById("category-select");
  const chips = document.getElementById("category-chips");
  if (!select || !chips) return;
  const categories = [...new Set(allBooks.map(book => book.category))].sort();
  const current = selectedCategory;
  select.innerHTML = `<option value="all">${escapeHtml(translations[activeLanguage].allCategories)}</option>${categories.map(category => `<option value="${escapeHtml(category)}">${escapeHtml(category)}</option>`).join("")}`;
  select.value = categories.includes(current) ? current : "all";
  selectedCategory = select.value;
  chips.innerHTML = `<button class="category-chip ${selectedCategory === "all" ? "selected" : ""}" type="button" data-category="all">${escapeHtml(activeLanguage === "hi" ? "सभी" : "All")}</button>${categories.map(category => `<button class="category-chip ${selectedCategory === category ? "selected" : ""}" type="button" data-category="${escapeHtml(category)}">${escapeHtml(category)}</button>`).join("")}`;
}

function renderBooks() {
  const grid = document.getElementById("book-grid");
  if (!grid) return;
  const visible = getVisibleBooks();
  const saved = getWatchlist();
  grid.innerHTML = visible.map(book => `<article class="book-card">
    <div class="book-cover-wrap"><span class="book-category">${escapeHtml(book.category)}</span><button class="watch-toggle ${saved.includes(book.id) ? "is-saved" : ""}" type="button" data-watch="${escapeHtml(book.id)}" aria-label="${saved.includes(book.id) ? "Remove from" : "Add to"} watchlist" title="${saved.includes(book.id) ? "Remove from" : "Add to"} watchlist">${saved.includes(book.id) ? "♥" : "♡"}</button><img class="book-cover" src="${makeCover(book)}" alt="Cover of ${escapeHtml(book.title)}" loading="lazy"></div>
    <div class="book-info"><h3 title="${escapeHtml(book.title)}">${escapeHtml(book.title)}</h3><p>${escapeHtml(book.author)} · ${escapeHtml(book.year || (book.uploaded ? "Your library" : ""))}</p><div class="book-actions"><button class="book-action" type="button" data-read="${escapeHtml(book.id)}">${book.uploaded ? "Read PDF ↗" : "Read ↗"}</button><button class="book-action" type="button" data-details="${escapeHtml(book.id)}">Details</button>${book.uploaded ? `<button class="book-action delete-action" type="button" data-delete="${escapeHtml(book.id)}">Remove</button>` : ""}</div></div>
  </article>`).join("");
  grid.querySelectorAll(".book-cover").forEach(image => {
    const book = visible.find(item => item.id === image.closest(".book-card").querySelector("[data-watch]").dataset.watch);
    if (book) bindCoverFallback(image, book);
  });
  document.getElementById("empty-state")?.classList.toggle("hidden", visible.length > 0);
  const count = document.getElementById("watch-count");
  if (count) count.textContent = String(saved.length);
  renderCategories();
}

function setActiveTab(tab) {
  activeTab = tab;
  const discover = document.getElementById("discover-tab");
  const watchlist = document.getElementById("watchlist-tab");
  if (discover && watchlist) {
    discover.classList.toggle("selected", tab === "discover");
    watchlist.classList.toggle("selected", tab === "watchlist");
    discover.setAttribute("aria-selected", String(tab === "discover"));
    watchlist.setAttribute("aria-selected", String(tab === "watchlist"));
  }
  renderBooks();
}

function readBook(book) {
  if (book.pdf instanceof Blob) {
    const url = URL.createObjectURL(book.pdf);
    const link = document.createElement("a");
    link.href = url;
    link.target = "_blank";
    link.rel = "noopener noreferrer";
    link.click();
    window.setTimeout(() => URL.revokeObjectURL(url), 60000);
    return;
  }
  const url = `https://www.gutenberg.org/ebooks/search/?query=${encodeURIComponent(book.title)}`;
  window.open(url, "_blank", "noopener,noreferrer");
}

function openBookDetails(book) {
  const dialog = document.getElementById("book-dialog");
  const content = document.getElementById("book-detail");
  if (!dialog || !content) return;
  content.innerHTML = `<div class="book-detail-content"><img class="book-detail-cover" src="${makeCover(book)}" alt="Cover of ${escapeHtml(book.title)}"><div><span class="eyebrow">${escapeHtml(book.category)}</span><h2>${escapeHtml(book.title)}</h2><p class="book-detail-author">by ${escapeHtml(book.author)}${book.year ? ` · ${escapeHtml(book.year)}` : ""}</p><p class="book-detail-description">${book.uploaded ? "A book shared to your personal library. Its PDF and cover are stored in this browser only." : "A much-loved title from the library's starter collection. Search for a copy to read online."}</p><div class="book-detail-actions"><button class="button button-dark" type="button" data-read="${escapeHtml(book.id)}">Read ${book.uploaded ? "PDF" : "online"} ↗</button><button class="button button-outline" type="button" data-watch="${escapeHtml(book.id)}">♡ Save for later</button></div></div></div>`;
  bindCoverFallback(content.querySelector(".book-detail-cover"), book);
  dialog.showModal();
}

function readFileAsDataUrl(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(reader.result);
    reader.onerror = () => reject(reader.error || new Error("Could not read the selected cover image."));
    reader.readAsDataURL(file);
  });
}

async function refreshBooks() {
  const uploads = await getUploads();
  allBooks = [...seedBooks, ...uploads.sort((a, b) => b.createdAt - a.createdAt)];
  renderBooks();
}

function showAccountDialog() {
  const dialog = document.getElementById("account-dialog");
  if (!dialog) return;
  const sessionEmail = getAccountEmail();
  const accountButton = document.getElementById("account-button");
  if (accountButton) accountButton.textContent = sessionEmail ? translations[activeLanguage].logout : translations[activeLanguage].login;
  if (sessionEmail) {
    localStorage.removeItem("obl_session");
    if (accountButton) accountButton.textContent = translations[activeLanguage].login;
    setActiveTab(activeTab);
    return;
  }
  accountMode = "login";
  updateAccountMode();
  document.getElementById("account-message").textContent = "";
  dialog.showModal();
}

function updateAccountMode() {
  const isSignup = accountMode === "signup";
  const title = document.getElementById("account-title");
  const submit = document.getElementById("account-submit");
  const switchButton = document.getElementById("account-switch");
  const nameField = document.querySelector(".account-name-field");
  const password = document.querySelector('#account-form input[name="password"]');
  if (title) title.textContent = isSignup ? "Create your account" : "Welcome back";
  if (submit) submit.innerHTML = `${isSignup ? "Create account" : "Log in"} <span aria-hidden="true">↗</span>`;
  if (switchButton) switchButton.textContent = isSignup ? "Already have an account? Log in" : "New here? Create an account";
  nameField?.classList.toggle("hidden", !isSignup);
  if (password) password.autocomplete = isSignup ? "new-password" : "current-password";
}

async function hashPassword(password, salt) {
  if (!window.crypto?.subtle) throw new Error("Secure password hashing isn't available in this browser. Open the site in a modern browser over localhost.");
  const encoder = new TextEncoder();
  const key = await crypto.subtle.importKey("raw", encoder.encode(password), "PBKDF2", false, ["deriveBits"]);
  const bits = await crypto.subtle.deriveBits({ name: "PBKDF2", salt: encoder.encode(salt), iterations: 120000, hash: "SHA-256" }, key, 256);
  return Array.from(new Uint8Array(bits), byte => byte.toString(16).padStart(2, "0")).join("");
}

function bindCommonControls() {
  document.getElementById("language-select")?.addEventListener("change", event => {
    applyLanguage(event.target.value);
    renderBooks();
  });
  document.getElementById("search-input")?.addEventListener("input", renderBooks);
  document.getElementById("category-select")?.addEventListener("change", event => {
    selectedCategory = event.target.value;
    renderBooks();
  });
  document.getElementById("category-chips")?.addEventListener("click", event => {
    const button = event.target.closest("[data-category]");
    if (!button) return;
    selectedCategory = button.dataset.category;
    renderBooks();
  });
  document.getElementById("discover-tab")?.addEventListener("click", () => setActiveTab("discover"));
  document.getElementById("watchlist-tab")?.addEventListener("click", () => setActiveTab("watchlist"));
  document.getElementById("show-all-button")?.addEventListener("click", () => {
    selectedCategory = "all";
    const search = document.getElementById("search-input");
    if (search) search.value = "";
    setActiveTab("discover");
  });
  document.getElementById("upload-button")?.addEventListener("click", () => document.getElementById("upload-dialog")?.showModal());
  document.getElementById("share-upload-button")?.addEventListener("click", () => document.getElementById("upload-dialog")?.showModal());
  document.getElementById("donate-button")?.addEventListener("click", () => document.getElementById("donate-dialog")?.showModal());
  document.getElementById("footer-donate")?.addEventListener("click", () => document.getElementById("donate-dialog")?.showModal());
  document.getElementById("donate-upload")?.addEventListener("click", () => {
    document.getElementById("donate-dialog")?.close();
    document.getElementById("upload-dialog")?.showModal();
  });
  document.getElementById("account-button")?.addEventListener("click", showAccountDialog);
  document.getElementById("account-switch")?.addEventListener("click", () => {
    accountMode = accountMode === "login" ? "signup" : "login";
    updateAccountMode();
    setMessage(document.getElementById("account-message"), "");
  });
  document.querySelectorAll("[data-close-dialog]").forEach(button => button.addEventListener("click", () => button.closest("dialog")?.close()));
  document.querySelectorAll("dialog").forEach(dialog => dialog.addEventListener("click", event => {
    if (event.target === dialog) dialog.close();
  }));
  document.getElementById("upload-form")?.addEventListener("submit", async event => {
    event.preventDefault();
    const form = event.currentTarget;
    const message = document.getElementById("upload-message");
    const data = new FormData(form);
    const cover = data.get("cover");
    const pdf = data.get("pdf");
    if (!(cover instanceof File) || !(pdf instanceof File) || !cover.size || !pdf.size) {
      setMessage(message, "Please choose both a cover image and a PDF.");
      return;
    }
    if (!["image/jpeg", "image/png", "image/webp"].includes(cover.type) || cover.size > 5 * 1024 * 1024) {
      setMessage(message, "Choose a JPG, PNG, or WEBP cover image under 5 MB.");
      return;
    }
    if ((pdf.type !== "application/pdf" && !pdf.name.toLowerCase().endsWith(".pdf")) || pdf.size > 30 * 1024 * 1024) {
      setMessage(message, "Choose a PDF file under 30 MB.");
      return;
    }
    setMessage(message, "Saving your book…");
    try {
      const coverUrl = await readFileAsDataUrl(cover);
      await saveUpload({
        id: `upload-${crypto.randomUUID()}`,
        title: String(data.get("title")).trim(),
        author: String(data.get("author")).trim(),
        category: String(data.get("category")),
        cover: coverUrl,
        pdf,
        createdAt: Date.now(),
        uploaded: true
      });
      form.reset();
      setMessage(message, "Book added to your library.", true);
      await refreshBooks();
      window.setTimeout(() => document.getElementById("upload-dialog")?.close(), 500);
    } catch (error) {
      console.error("Saving uploaded book failed.", error);
      setMessage(message, error.message || "Could not save the book. Check browser storage and try again.");
    }
  });
  document.getElementById("account-form")?.addEventListener("submit", async event => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const email = String(data.get("email")).trim().toLowerCase();
    const password = String(data.get("password"));
    const message = document.getElementById("account-message");
    try {
      const accounts = JSON.parse(localStorage.getItem("obl_accounts") || "{}");
      if (accountMode === "signup") {
        if (accounts[email]) throw new Error("An account already exists here for that email.");
        const salt = crypto.randomUUID();
        accounts[email] = { salt, passwordHash: await hashPassword(password, salt), name: String(data.get("name") || "").trim() };
        localStorage.setItem("obl_accounts", JSON.stringify(accounts));
      } else {
        const account = accounts[email];
        if (!account || await hashPassword(password, account.salt) !== account.passwordHash) throw new Error("Email or password doesn't match an account in this browser.");
      }
      localStorage.setItem("obl_session", email);
      document.getElementById("account-dialog").close();
      event.currentTarget.reset();
      const button = document.getElementById("account-button");
      if (button) button.textContent = translations[activeLanguage].logout;
      renderBooks();
    } catch (error) {
      setMessage(message, error.message || "Could not sign in. Please try again.");
    }
  });
  document.getElementById("book-grid")?.addEventListener("click", async event => {
    const watchButton = event.target.closest("[data-watch]");
    if (watchButton) {
      const id = watchButton.dataset.watch;
      const saved = getWatchlist();
      setWatchlist(saved.includes(id) ? saved.filter(bookId => bookId !== id) : [...saved, id]);
      renderBooks();
      return;
    }
    const readButton = event.target.closest("[data-read]");
    if (readButton) {
      const book = allBooks.find(item => item.id === readButton.dataset.read);
      if (book) readBook(book);
      return;
    }
    const detailsButton = event.target.closest("[data-details]");
    if (detailsButton) {
      const book = allBooks.find(item => item.id === detailsButton.dataset.details);
      if (book) openBookDetails(book);
      return;
    }
    const deleteButton = event.target.closest("[data-delete]");
    if (deleteButton) {
      if (!confirm("Remove this uploaded book and its PDF from this browser?")) return;
      try {
        await deleteUpload(deleteButton.dataset.delete);
        setWatchlist(getWatchlist().filter(id => id !== deleteButton.dataset.delete));
        await refreshBooks();
      } catch (error) {
        console.error("Removing uploaded book failed.", error);
        alert(error.message || "Could not remove the book.");
      }
    }
  });
  document.getElementById("book-detail")?.addEventListener("click", event => {
    const watch = event.target.closest("[data-watch]");
    if (watch) {
      const id = watch.dataset.watch;
      const saved = getWatchlist();
      setWatchlist(saved.includes(id) ? saved.filter(bookId => bookId !== id) : [...saved, id]);
      const book = allBooks.find(item => item.id === id);
      if (book) openBookDetails(book);
      renderBooks();
      return;
    }
    const read = event.target.closest("[data-read]");
    if (read) {
      const book = allBooks.find(item => item.id === read.dataset.read);
      if (book) readBook(book);
    }
  });
}

applyLanguage(activeLanguage);
bindCommonControls();
const accountButton = document.getElementById("account-button");
if (accountButton && getAccountEmail()) accountButton.textContent = translations[activeLanguage].logout;
refreshBooks().catch(error => {
  console.error("Loading the book library failed.", error);
  const grid = document.getElementById("book-grid");
  if (grid) grid.innerHTML = `<p class="form-message">${escapeHtml(error.message || "Could not load books from this browser.")}</p>`;
});
