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
window.libraryBookCatalog = seedBooks.map(({ id, title, author, category, year, coverUrl }) => ({
  id, title, author, category, year, coverUrl
}));

const translations = {
  en: {
    navHome: "Discover", navBrowse: "Browse books", navAbout: "About", navReviews: "Reviews",
    donate: "Donate", login: "Log in", logout: "Log out", profileLink: "My profile", footerDonate: "Donate a book", heroEyebrow: "YOUR NEXT CHAPTER STARTS HERE",
    heroTitle: "A little more<br><em>wonder,</em> every day.", heroDescription: "Find a quiet corner, discover a new favorite, and let a good book take you somewhere lovely.",
    exploreBooks: "Explore the library", heroNote: "A cozy corner for curious minds", libraryEyebrow: "A SHELF FOR EVERY MOOD",
    libraryTitle: "Find your next favorite", addBook: "Add book + PDF", tabDiscover: "Discover",
    tabWatchlist: "My watchlist", searchPlaceholder: "Search title or author…", allCategories: "All categories",
    emptyTitle: "Nothing on this shelf just yet", emptyDescription: "Try another search, or save a book to your watchlist.",
    showAll: "Show all books ↗", shareEyebrow: "GOOD STORIES GROW WHEN SHARED",
    shareTitle: "Have a book to pass along?", shareDescription: "Add a PDF and its cover to your personal library shelf. Your files stay on this device.",
    assistantTitle: "Book assistant", assistantSubtitle: "Your friendly library guide",
    assistantWelcome: "Hi! Tell me what you enjoy, or ask for a genre, author, or book from our library.",
    assistantInputLabel: "Ask about books", assistantPlaceholder: "Ask me about books…", assistantSend: "Send",
    assistantPrivacy: "Replies use this library's catalog. Your messages stay in this browser.",
    assistantOpen: "Ask the book assistant", assistantMystery: "Mystery",
    assistantAdventure: "Adventure", assistantBrowse: "Browse the library",
    assistantClear: "Clear conversation", assistantClose: "Close chat",
    assistantRegion: "AI book assistant", assistantPanel: "Book assistant chat",
    shareButton: "Upload PDF + cover", footerLine: "Made for slow mornings and one-more-chapter nights."
  },
  hi: {
    navHome: "खोजें", navBrowse: "किताबें देखें", navAbout: "हमारे बारे में", navReviews: "समीक्षाएँ",
    donate: "दान करें", login: "लॉग इन", logout: "लॉग आउट", profileLink: "मेरी प्रोफ़ाइल", footerDonate: "किताब दान करें", heroEyebrow: "आपका अगला अध्याय यहाँ शुरू होता है",
    heroTitle: "हर दिन थोड़ा और<br><em>अचरज।</em>", heroDescription: "एक शांत कोना खोजें, नई पसंदीदा किताब ढूँढ़ें और कहानी के साथ कहीं दूर निकल जाएँ।",
    exploreBooks: "पुस्तकालय देखें", heroNote: "जिज्ञासु मन के लिए एक प्यारा कोना", libraryEyebrow: "हर मन के लिए एक किताब",
    libraryTitle: "अपनी अगली पसंदीदा किताब खोजें", addBook: "किताब + PDF जोड़ें", tabDiscover: "खोजें",
    tabWatchlist: "मेरी सूची", searchPlaceholder: "शीर्षक या लेखक खोजें…", allCategories: "सभी श्रेणियाँ",
    emptyTitle: "इस शेल्फ़ पर अभी कुछ नहीं है", emptyDescription: "दूसरी खोज आज़माएँ या किताब को अपनी सूची में जोड़ें।",
    showAll: "सभी किताबें देखें ↗", shareEyebrow: "अच्छी कहानियाँ बाँटने से बढ़ती हैं",
    shareTitle: "कोई किताब साझा करना चाहेंगे?", shareDescription: "PDF और उसका कवर अपनी लाइब्रेरी में जोड़ें। आपकी फ़ाइलें इसी डिवाइस पर रहेंगी।",
    assistantTitle: "किताब सहायक", assistantSubtitle: "आपकी लाइब्रेरी गाइड",
    assistantWelcome: "नमस्ते! अपनी पसंद बताएँ या हमारी लाइब्रेरी में शैली, लेखक या किताब खोजें।",
    assistantInputLabel: "किताबों के बारे में पूछें", assistantPlaceholder: "किताबों के बारे में पूछें…", assistantSend: "भेजें",
    assistantPrivacy: "जवाब इस लाइब्रेरी की किताबों से मिलते हैं। आपके संदेश इसी ब्राउज़र में रहते हैं।",
    assistantOpen: "किताब सहायक से पूछें", assistantMystery: "रहस्य",
    assistantAdventure: "रोमांच", assistantBrowse: "लाइब्रेरी देखें",
    assistantClear: "बातचीत साफ़ करें", assistantClose: "चैट बंद करें",
    assistantRegion: "किताब सहायक", assistantPanel: "किताब सहायक चैट",
    shareButton: "PDF + कवर अपलोड करें", footerLine: "धीमी सुबहों और एक और अध्याय वाली रातों के लिए।"
  },
  pa: {
    navHome: "ਖੋਜੋ", navBrowse: "ਕਿਤਾਬਾਂ ਵੇਖੋ", navAbout: "ਸਾਡੇ ਬਾਰੇ", navReviews: "ਸਮੀਖਿਆਵਾਂ",
    donate: "ਦਾਨ ਕਰੋ", login: "ਲੌਗ ਇਨ", logout: "ਲੌਗ ਆਉਟ", heroEyebrow: "ਤੁਹਾਡਾ ਅਗਲਾ ਅਧਿਆਇ ਇੱਥੋਂ ਸ਼ੁਰੂ ਹੁੰਦਾ ਹੈ",
    heroTitle: "ਹਰ ਦਿਨ ਥੋੜ੍ਹਾ ਹੋਰ<br><em>ਅਚੰਭਾ।</em>", heroDescription: "ਇੱਕ ਸ਼ਾਂਤ ਕੋਨਾ ਲੱਭੋ, ਨਵੀਂ ਮਨਪਸੰਦ ਕਿਤਾਬ ਖੋਜੋ ਅਤੇ ਕਹਾਣੀ ਨਾਲ ਕਿਸੇ ਸੋਹਣੀ ਦੁਨੀਆ ਵਿੱਚ ਚਲੇ ਜਾਓ।",
    exploreBooks: "ਲਾਇਬ੍ਰੇਰੀ ਵੇਖੋ", heroNote: "ਜਿਗਿਆਸੂ ਮਨਾਂ ਲਈ ਇੱਕ ਨਿੱਘਾ ਕੋਨਾ", libraryEyebrow: "ਹਰ ਮਿਜ਼ਾਜ ਲਈ ਇੱਕ ਸ਼ੈਲਫ਼",
    libraryTitle: "ਆਪਣੀ ਅਗਲੀ ਮਨਪਸੰਦ ਕਿਤਾਬ ਲੱਭੋ", addBook: "ਕਿਤਾਬ + PDF ਜੋੜੋ", tabDiscover: "ਖੋਜੋ",
    tabWatchlist: "ਮੇਰੀ ਸੂਚੀ", searchPlaceholder: "ਸਿਰਲੇਖ ਜਾਂ ਲੇਖਕ ਲੱਭੋ…", allCategories: "ਸਾਰੀਆਂ ਸ਼੍ਰੇਣੀਆਂ",
    emptyTitle: "ਇਸ ਸ਼ੈਲਫ਼ 'ਤੇ ਹਾਲੇ ਕੁਝ ਨਹੀਂ", emptyDescription: "ਕੋਈ ਹੋਰ ਖੋਜ ਅਜ਼ਮਾਓ ਜਾਂ ਕਿਤਾਬ ਆਪਣੀ ਸੂਚੀ ਵਿੱਚ ਸੰਭਾਲੋ।",
    showAll: "ਸਾਰੀਆਂ ਕਿਤਾਬਾਂ ਵੇਖੋ ↗", shareEyebrow: "ਚੰਗੀਆਂ ਕਹਾਣੀਆਂ ਸਾਂਝੀਆਂ ਕਰਨ ਨਾਲ ਵਧਦੀਆਂ ਹਨ",
    shareTitle: "ਕੀ ਤੁਹਾਡੇ ਕੋਲ ਸਾਂਝੀ ਕਰਨ ਲਈ ਕਿਤਾਬ ਹੈ?", shareDescription: "ਆਪਣੀ ਲਾਇਬ੍ਰੇਰੀ ਵਿੱਚ PDF ਅਤੇ ਕਵਰ ਜੋੜੋ। ਤੁਹਾਡੀਆਂ ਫ਼ਾਈਲਾਂ ਇਸੇ ਡਿਵਾਈਸ 'ਤੇ ਰਹਿਣਗੀਆਂ।",
    assistantTitle: "ਕਿਤਾਬ ਸਹਾਇਕ", assistantSubtitle: "ਤੁਹਾਡੀ ਆਪਣੀ ਲਾਇਬ੍ਰੇਰੀ ਗਾਈਡ",
    assistantWelcome: "ਸਤ ਸ੍ਰੀ ਅਕਾਲ! ਆਪਣੀ ਪਸੰਦ ਦੱਸੋ ਜਾਂ ਸਾਡੀ ਲਾਇਬ੍ਰੇਰੀ ਵਿੱਚ ਸ਼ੈਲੀ, ਲੇਖਕ ਜਾਂ ਕਿਤਾਬ ਬਾਰੇ ਪੁੱਛੋ।",
    assistantInputLabel: "ਕਿਤਾਬਾਂ ਬਾਰੇ ਪੁੱਛੋ", assistantPlaceholder: "ਕਿਤਾਬਾਂ ਬਾਰੇ ਪੁੱਛੋ…", assistantSend: "ਭੇਜੋ",
    assistantPrivacy: "ਜਵਾਬ ਇਸ ਲਾਇਬ੍ਰੇਰੀ ਦੀ ਸੂਚੀ ਤੋਂ ਮਿਲਦੇ ਹਨ। ਤੁਹਾਡੇ ਸੁਨੇਹੇ ਇਸੇ ਬ੍ਰਾਊਜ਼ਰ ਵਿੱਚ ਰਹਿੰਦੇ ਹਨ।",
    assistantOpen: "ਕਿਤਾਬ ਸਹਾਇਕ ਨੂੰ ਪੁੱਛੋ", assistantMystery: "ਰਹੱਸ", assistantAdventure: "ਰੋਮਾਂਚ",
    assistantBrowse: "ਲਾਇਬ੍ਰੇਰੀ ਵੇਖੋ", shareButton: "PDF + ਕਵਰ ਅੱਪਲੋਡ ਕਰੋ",
    assistantClear: "ਗੱਲਬਾਤ ਮਿਟਾਓ", assistantClose: "ਚੈਟ ਬੰਦ ਕਰੋ",
    assistantRegion: "ਕਿਤਾਬ ਸਹਾਇਕ", assistantPanel: "ਕਿਤਾਬ ਸਹਾਇਕ ਚੈਟ",
    footerLine: "ਹੌਲੀ ਸਵੇਰਾਂ ਅਤੇ ਇੱਕ ਹੋਰ ਅਧਿਆਇ ਵਾਲੀਆਂ ਰਾਤਾਂ ਲਈ।", footerDonate: "ਕਿਤਾਬ ਦਾਨ ਕਰੋ",
    aboutEyebrow: "ਕਿਤਾਬਾਂ ਦੇ ਪ੍ਰੇਮੀਆਂ ਲਈ ਇੱਕ ਘਰ", aboutTitle: "ਕਹਾਣੀਆਂ ਹੋਰ ਸੋਹਣੀਆਂ ਹੁੰਦੀਆਂ ਹਨ<br><em>ਜਦੋਂ ਸਾਂਝੀਆਂ ਹੋਣ।</em>",
    aboutDescription: "ਅਸੀਂ ਕਿਤਾਬਾਂ ਖੋਜਣ, ਆਪਣੀਆਂ ਪਸੰਦੀਦਾ ਕਿਤਾਬਾਂ ਸੰਭਾਲਣ ਅਤੇ ਚੰਗੀਆਂ ਕਹਾਣੀਆਂ ਸਾਂਝੀਆਂ ਕਰਨ ਲਈ ਇੰਟਰਨੈੱਟ 'ਤੇ ਇੱਕ ਨਿੱਘਾ ਕੋਨਾ ਬਣਾਇਆ ਹੈ।",
    aboutIdea: "ਸਾਡਾ ਛੋਟਾ ਜਿਹਾ ਵਿਚਾਰ", aboutIdeaTitle: "ਘੱਟ ਸਕ੍ਰੋਲਿੰਗ।<br>ਵੱਧ ਪੜ੍ਹਾਈ।",
    aboutCollection: "Online Book Library 60 ਕਲਾਸਿਕ ਅਤੇ ਹਰਮਨਪਿਆਰੀਆਂ ਕਿਤਾਬਾਂ ਦੀ ਇੱਕ ਸਾਦੀ ਤੇ ਸੁਆਗਤਯੋਗ ਸੂਚੀ ਹੈ। ਨਾਮ ਨਾਲ ਖੋਜੋ, ਸ਼੍ਰੇਣੀ ਅਨੁਸਾਰ ਵੇਖੋ ਜਾਂ ਕਿਤਾਬ ਨੂੰ ਬਾਅਦ ਲਈ ਆਪਣੀ ਸੂਚੀ ਵਿੱਚ ਰੱਖੋ।",
    aboutSharing: "ਕੋਈ ਕਿਤਾਬ ਸਾਂਝੀ ਕਰਨੀ ਹੈ? ਆਪਣੀ ਸ਼ੈਲਫ਼ 'ਤੇ PDF ਅਤੇ ਕਵਰ ਜੋੜੋ। ਇਸ ਡੈਮੋ ਵਿੱਚ ਅੱਪਲੋਡ ਇਸੇ ਡਿਵਾਈਸ ਅਤੇ ਬ੍ਰਾਊਜ਼ਰ 'ਤੇ ਰਹਿੰਦੇ ਹਨ।",
    aboutQuote: "ਇੱਕ ਚੰਗੀ ਕਿਤਾਬ ਦੁਨੀਆ ਨੂੰ ਨਵੇਂ ਢੰਗ ਨਾਲ ਵੇਖਣ ਦਾ ਸ਼ਾਂਤ ਸੱਦਾ ਹੈ।", aboutMotto: "ਲਾਇਬ੍ਰੇਰੀ ਦਾ ਛੋਟਾ ਜਿਹਾ ਮੰਤਵ",
    aboutValuesTitle1: "ਕੁਦਰਤੀ ਜਿਗਿਆਸਾ", aboutValuesText1: "ਹਰ ਮਿਜ਼ਾਜ, ਹਰ ਪਲ ਅਤੇ ਹਰ ਪਾਠਕ ਲਈ ਇੱਕ ਕਹਾਣੀ ਹੈ।",
    aboutValuesTitle2: "ਸਾਂਝਾ ਕਰਨ ਲਈ", aboutValuesText2: "ਆਪਣੀ ਸੂਚੀ ਸੰਭਾਲੋ ਜਾਂ ਉਹ ਕਿਤਾਬ ਕਿਸੇ ਨਾਲ ਸਾਂਝੀ ਕਰੋ ਜਿਸਨੂੰ ਉਹ ਪਸੰਦ ਆਵੇਗੀ।",
    aboutValuesTitle3: "ਸੱਚੀ ਨਿੱਜਤਾ", aboutValuesText3: "ਇਹ ਡੈਮੋ ਤੁਹਾਡੀਆਂ ਫ਼ਾਈਲਾਂ ਅਤੇ ਪਸੰਦਾਂ ਇਸੇ ਬ੍ਰਾਊਜ਼ਰ ਵਿੱਚ ਰੱਖਦਾ ਹੈ। ਇਸ ਵਿੱਚ ਕਲਾਉਡ ਖਾਤਾ ਜਾਂ ਭੁਗਤਾਨ ਸੇਵਾ ਨਹੀਂ ਹੈ।",
    aboutCtaEyebrow: "ਨਵੀਂ ਕਹਾਣੀ ਵੱਲ ਚੱਲੀਏ?", aboutCtaTitle: "ਤੁਹਾਡੀ ਅਗਲੀ ਮਨਪਸੰਦ ਕਿਤਾਬ ਉਡੀਕ ਰਹੀ ਹੈ।",
    aboutCtaText: "ਸ਼ੈਲਫ਼ਾਂ ਵਿੱਚ ਵੇਖੋ ਅਤੇ ਜਾਣੋ ਕਿ ਕਹਾਣੀ ਤੁਹਾਨੂੰ ਕਿੱਥੇ ਲੈ ਜਾਂਦੀ ਹੈ।",
    reviewsEyebrow: "ਪੜ੍ਹਨ ਵਾਲੇ ਕੋਨੇ ਤੋਂ ਇੱਕ ਸੁਨੇਹਾ", reviewsTitle: "ਹਰ ਪਾਠਕ ਕੋਲ<br><em>ਸੁਣਾਉਣ ਲਈ ਕਹਾਣੀ ਹੈ।</em>",
    reviewsDescription: "ਲਾਇਬ੍ਰੇਰੀ ਬਾਰੇ ਆਪਣੀ ਰਾਏ ਦਿਓ ਜਾਂ ਕਿਸੇ ਹੋਰ ਕਿਤਾਬ-ਪ੍ਰੇਮੀ ਲਈ ਛੋਟਾ ਜਿਹਾ ਸੁਨੇਹਾ ਛੱਡੋ।",
    reviewsListEyebrow: "ਪਿਆਰੇ ਸ਼ਬਦ ਅਤੇ ਕਿਤਾਬੀ ਵਿਚਾਰ", reviewsListTitle: "ਪਾਠਕਾਂ ਦੇ ਸੁਨੇਹੇ",
    reviewsFormEyebrow: "ਇੱਕ ਛੋਟਾ ਸੁਨੇਹਾ ਲਿਖੋ", reviewsFormTitle: "ਆਪਣੇ ਵਿਚਾਰ ਸਾਂਝੇ ਕਰੋ",
    reviewsName: "ਤੁਹਾਡਾ ਨਾਮ", reviewsNamePlaceholder: "ਅਸੀਂ ਤੁਹਾਨੂੰ ਕੀ ਕਹੀਏ?",
    reviewsRating: "ਤੁਹਾਡੀ ਰੇਟਿੰਗ", reviewsLoved: "★★★★★ — ਬਹੁਤ ਪਸੰਦ ਆਈ",
    reviewsEnjoyed: "★★★★☆ — ਕਾਫ਼ੀ ਚੰਗੀ ਲੱਗੀ", reviewsLovely: "★★★☆☆ — ਸੋਹਣੀ ਹੈ",
    reviewsBetter: "★★☆☆☆ — ਹੋਰ ਚੰਗੀ ਹੋ ਸਕਦੀ ਸੀ", reviewsNotForMe: "★☆☆☆☆ — ਮੇਰੇ ਲਈ ਨਹੀਂ",
    reviewsYourReview: "ਤੁਹਾਡੀ ਸਮੀਖਿਆ", reviewsPlaceholder: "ਕੋਈ ਪਸੰਦੀਦਾ ਗੱਲ, ਲੱਭੀ ਹੋਈ ਕਿਤਾਬ ਜਾਂ ਸਿਰਫ਼ ਸਤ ਸ੍ਰੀ ਅਕਾਲ…",
    reviewsPrivacy: "ਇਸ ਡੈਮੋ ਵਿੱਚ ਸਮੀਖਿਆਵਾਂ ਸਿਰਫ਼ ਇਸ ਬ੍ਰਾਊਜ਼ਰ ਵਿੱਚ ਸੰਭਾਲੀਆਂ ਜਾਂਦੀਆਂ ਹਨ; ਇਹ ਸਾਂਝੀ ਵੈੱਬਸਾਈਟ 'ਤੇ ਪ੍ਰਕਾਸ਼ਿਤ ਨਹੀਂ ਹੁੰਦੀਆਂ।",
    reviewsSubmit: "ਆਪਣਾ ਸੁਨੇਹਾ ਭੇਜੋ", reviewsCtaEyebrow: "ਇੱਕ ਕਹਾਣੀ ਤੁਹਾਡੀ ਉਡੀਕ ਕਰ ਰਹੀ ਹੈ",
    reviewsCtaTitle: "ਆਓ ਤੁਹਾਡੀ ਅਗਲੀ ਕਿਤਾਬ ਲੱਭੀਏ।", reviewsCtaText: "ਸ਼ੈਲਫ਼ਾਂ ਵਿੱਚ ਘੁੰਮੋ ਅਤੇ ਕੋਈ ਕਹਾਣੀ ਬਾਅਦ ਲਈ ਸੰਭਾਲੋ।",
    profileEyebrow: "ਤੁਹਾਡਾ ਆਪਣਾ ਪੜ੍ਹਨ ਵਾਲਾ ਕੋਨਾ", profileTitle: "ਮੇਰੀ <em>ਪ੍ਰੋਫ਼ਾਈਲ।</em>",
    profileDescription: "ਤੁਹਾਡੇ ਖਾਤੇ ਦੇ ਵੇਰਵੇ, ਸੰਭਾਲੀਆਂ ਕਹਾਣੀਆਂ ਅਤੇ ਨਿੱਜੀ ਅੱਪਲੋਡ ਕੀਤੀਆਂ ਕਿਤਾਬਾਂ—ਸਭ ਇੱਕ ਥਾਂ।",
    profileSigninTitle: "ਪ੍ਰੋਫ਼ਾਈਲ ਵੇਖਣ ਲਈ ਲੌਗ ਇਨ ਕਰੋ",
    profileSigninText: "ਤੁਹਾਡੀ ਕਿਤਾਬਾਂ ਦੀ ਸੂਚੀ ਅਤੇ ਅੱਪਲੋਡ ਕੀਤੀਆਂ ਕਿਤਾਬਾਂ ਸਿਰਫ਼ ਤੁਹਾਡੇ ਖਾਤੇ ਲਈ ਹਨ।",
    profileSigninButton: "ਲੌਗ ਇਨ / ਖਾਤਾ ਬਣਾਓ", profileAccount: "ਖਾਤੇ ਦੇ ਵੇਰਵੇ",
    profileSaved: "ਸੰਭਾਲੀਆਂ", profileUploads: "ਅੱਪਲੋਡ", profileSavedEyebrow: "ਬਾਅਦ ਲਈ ਸੰਭਾਲੀਆਂ",
    profileWatchlist: "ਮੇਰੀ ਸੂਚੀ", profileBrowse: "ਕਿਤਾਬਾਂ ਵੇਖੋ ↗", profileLink: "ਮੇਰੀ ਪ੍ਰੋਫ਼ਾਈਲ",
    profilePrivateEyebrow: "ਤੁਹਾਡੀਆਂ ਨਿੱਜੀ ਕਿਤਾਬਾਂ", profileMyUploads: "ਮੇਰੇ ਅੱਪਲੋਡ",
    profileAddBook: "ਕਿਤਾਬ ਜੋੜੋ ↗",
    profilePrivacy: "ਤੁਹਾਡੀਆਂ PDF, ਕਵਰ ਅਤੇ ਕਿਤਾਬਾਂ ਦੀ ਸੂਚੀ ਇਸ ਕੰਪਿਊਟਰ ਦੇ Flask ਸਰਵਰ 'ਤੇ ਤੁਹਾਡੇ ਖਾਤੇ ਲਈ ਨਿੱਜੀ ਹਨ।"
  }
};

const categoryColors = ["#718568", "#bd8068", "#7c8294", "#b69866", "#6c8a83", "#986f7d", "#8e795e", "#6e7989"];
const databaseName = "online-book-library";
const flaskBackendEnabled = location.protocol !== "file:" && !location.hostname.endsWith(".github.io");
let allBooks = [...seedBooks];
let activeTab = "discover";
let selectedCategory = "all";
let activeLanguage = localStorage.getItem("obl_language") || "en";
let accountMode = "login";
let currentUser = null;
let serverWatchlist = [];

async function apiRequest(path, options = {}) {
  const response = await fetch(path, { credentials: "same-origin", ...options });
  const result = await response.json().catch(() => ({}));
  if (!response.ok) throw new Error(result.error || `Request failed (${response.status}).`);
  return result;
}

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
  return flaskBackendEnabled ? currentUser?.email || "" : localStorage.getItem("obl_session") || "";
}

function getWatchlist() {
  if (flaskBackendEnabled) return serverWatchlist;
  try {
    return JSON.parse(localStorage.getItem(`obl_watchlist_${getAccountEmail() || "guest"}`) || "[]");
  } catch (error) {
    console.error("Could not read the saved watchlist.", error);
    return [];
  }
}

async function setWatchlist(ids) {
  if (flaskBackendEnabled) {
    if (!currentUser) throw new Error("Please log in to save your watchlist.");
    const result = await apiRequest("/api/watchlist", {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ids })
    });
    serverWatchlist = result.ids;
    return;
  }
  localStorage.setItem(`obl_watchlist_${getAccountEmail() || "guest"}`, JSON.stringify(ids));
}

function setMessage(element, message, success = false) {
  if (!element) return;
  element.textContent = message;
  element.classList.toggle("success", success);
}

function applyLanguage(language) {
  activeLanguage = ["hi", "pa"].includes(language) ? language : "en";
  localStorage.setItem("obl_language", activeLanguage);
  document.documentElement.lang = activeLanguage;
  document.querySelectorAll("[data-i18n]").forEach(element => {
    if (!("defaultTranslation" in element.dataset)) element.dataset.defaultTranslation = element.innerHTML;
    const translated = translations[activeLanguage][element.dataset.i18n] || element.dataset.defaultTranslation;
    element.innerHTML = translated;
  });
  document.querySelectorAll("[data-i18n-placeholder]").forEach(element => {
    if (!("defaultPlaceholder" in element.dataset)) element.dataset.defaultPlaceholder = element.placeholder;
    element.placeholder = translations[activeLanguage][element.dataset.i18nPlaceholder] || element.dataset.defaultPlaceholder;
  });
  const select = document.getElementById("language-select");
  if (select) select.value = activeLanguage;
  const clearButton = document.getElementById("assistant-clear");
  if (clearButton) {
    clearButton.title = translations[activeLanguage].assistantClear;
    clearButton.setAttribute("aria-label", translations[activeLanguage].assistantClear);
  }
  const closeButton = document.getElementById("assistant-close");
  if (closeButton) closeButton.setAttribute("aria-label", translations[activeLanguage].assistantClose);
  const sendButton = document.querySelector(".assistant-form button");
  if (sendButton) sendButton.setAttribute("aria-label", translations[activeLanguage].assistantSend);
  const assistantRegion = document.querySelector(".book-assistant");
  if (assistantRegion) assistantRegion.setAttribute("aria-label", translations[activeLanguage].assistantRegion);
  const assistantPanel = document.getElementById("assistant-panel");
  if (assistantPanel) assistantPanel.setAttribute("aria-label", translations[activeLanguage].assistantPanel);
  updateBackendCopy();
  updateProfileLink();
}

function updateBackendCopy() {
  if (!flaskBackendEnabled) return;
  const copy = activeLanguage === "hi"
    ? {
        account: "आपका खाता और पासवर्ड सुरक्षित रूप से इस कंप्यूटर के Flask सर्वर में रखे जाते हैं।",
        upload: "आपकी PDF और कवर इस कंप्यूटर पर रखे जाते हैं और केवल आपके खाते को दिखाई देते हैं।",
        share: "PDF और कवर अपलोड करें। आपकी फ़ाइलें केवल आपके खाते के लिए निजी रहेंगी।",
        footnote: "अपलोड की गई पुस्तकें और फ़ाइलें केवल उस खाते को दिखाई देती हैं जिसने उन्हें जोड़ा है।",
        donate: "भुगतान सेवा अभी सेट नहीं है। आप अपनी निजी लाइब्रेरी में पुस्तक PDF और कवर जोड़ सकते हैं।",
        privacy: "अपलोड की गई फ़ाइलें निजी हैं और केवल आपके खाते को उपलब्ध हैं।",
        aboutUpload: "अपलोड की गई PDF और कवर इस कंप्यूटर के Flask सर्वर में रखे जाते हैं और केवल आपके खाते को दिखाई देते हैं।",
        aboutPrivacy: "इस Flask सर्वर पर खाते password hashing और सुरक्षित session cookies के साथ चलते हैं। अपलोड केवल मालिक के खाते को दिखाई देते हैं।"
      }
    : activeLanguage === "pa"
      ? {
        account: "ਤੁਹਾਡਾ ਖਾਤਾ ਇਸ ਕੰਪਿਊਟਰ ਦੇ Flask ਸਰਵਰ 'ਤੇ ਸੁਰੱਖਿਅਤ ਰੱਖਿਆ ਜਾਂਦਾ ਹੈ।",
        upload: "ਤੁਹਾਡੀ PDF ਅਤੇ ਕਵਰ ਇਸ ਕੰਪਿਊਟਰ 'ਤੇ ਸੰਭਾਲੇ ਜਾਂਦੇ ਹਨ ਅਤੇ ਸਿਰਫ਼ ਤੁਹਾਡੇ ਖਾਤੇ ਨੂੰ ਦਿਖਾਈ ਦਿੰਦੇ ਹਨ।",
        share: "PDF ਅਤੇ ਕਵਰ ਅੱਪਲੋਡ ਕਰੋ। ਤੁਹਾਡੀਆਂ ਫ਼ਾਈਲਾਂ ਸਿਰਫ਼ ਤੁਹਾਡੇ ਖਾਤੇ ਲਈ ਨਿੱਜੀ ਰਹਿਣਗੀਆਂ।",
        footnote: "ਅੱਪਲੋਡ ਕੀਤੀਆਂ ਕਿਤਾਬਾਂ ਅਤੇ ਫ਼ਾਈਲਾਂ ਸਿਰਫ਼ ਜੋੜਨ ਵਾਲੇ ਖਾਤੇ ਨੂੰ ਦਿਖਾਈ ਦਿੰਦੀਆਂ ਹਨ।",
        donate: "ਆਨਲਾਈਨ ਭੁਗਤਾਨ ਹਾਲੇ ਤਿਆਰ ਨਹੀਂ ਹਨ। ਤੁਸੀਂ ਆਪਣੀ ਨਿੱਜੀ ਲਾਇਬ੍ਰੇਰੀ ਵਿੱਚ ਕਿਤਾਬ ਦੀ PDF ਅਤੇ ਕਵਰ ਜੋੜ ਸਕਦੇ ਹੋ।",
        privacy: "ਅੱਪਲੋਡ ਕੀਤੀਆਂ ਫ਼ਾਈਲਾਂ ਨਿੱਜੀ ਹਨ ਅਤੇ ਸਿਰਫ਼ ਤੁਹਾਡੇ ਖਾਤੇ ਲਈ ਉਪਲਬਧ ਹਨ।",
        aboutUpload: "ਅੱਪਲੋਡ ਕੀਤੀਆਂ PDF ਅਤੇ ਕਵਰ ਇਸ ਕੰਪਿਊਟਰ ਦੇ Flask ਸਰਵਰ 'ਤੇ ਸੰਭਾਲੇ ਜਾਂਦੇ ਹਨ ਅਤੇ ਸਿਰਫ਼ ਤੁਹਾਡੇ ਖਾਤੇ ਨੂੰ ਦਿਖਾਈ ਦਿੰਦੇ ਹਨ।",
        aboutPrivacy: "ਇਹ Flask ਸਰਵਰ ਹੈਸ਼ ਕੀਤੇ ਪਾਸਵਰਡ ਅਤੇ ਦਸਤਖ਼ਤ ਕੀਤੀਆਂ ਸੈਸ਼ਨ ਕੂਕੀਜ਼ ਵਰਤਦਾ ਹੈ। ਅੱਪਲੋਡ ਸਿਰਫ਼ ਮਾਲਕ ਦੇ ਖਾਤੇ ਲਈ ਨਿੱਜੀ ਹਨ।"
      }
    : {
        account: "Your account is stored securely by the Flask server on this computer.",
        upload: "Your PDF and cover are stored on this computer and are private to your account.",
        share: "Upload a PDF and cover. Your files stay private to your account.",
        footnote: "Uploaded books and files are private to the account that added them.",
        donate: "Online payments are not set up. You can add a book PDF and cover to your private library.",
        privacy: "Uploaded files are private and available only to your account.",
        aboutUpload: "Uploaded PDFs and covers are stored on this computer's Flask server and are visible only to your account.",
        aboutPrivacy: "This Flask server uses hashed passwords and signed session cookies. Uploaded files are private to their owner's account."
      };
  const text = (selector, value) => {
    const element = document.querySelector(selector);
    if (element) element.textContent = value;
  };
  text("#account-dialog .dialog-intro", copy.account);
  text("#upload-dialog .dialog-intro", copy.upload);
  text('[data-i18n="shareDescription"]', copy.share);
  text("#library-footnote", copy.footnote);
  text("#donate-dialog .dialog-intro", copy.donate);
  text("#donate-dialog .privacy-note", copy.privacy);
  text(".about-content article p:nth-of-type(2)", copy.aboutUpload);
  text(".about-values > div:nth-child(3) p", copy.aboutPrivacy);
}

function updateProfileLink() {
  const link = document.getElementById("profile-link");
  const name = getSignedInName();
  if (link) {
    link.classList.remove("hidden");
    link.textContent = name ? `${translations[activeLanguage].profileLink} · ${name}` : translations[activeLanguage].profileLink;
  }
  updateHomeGreeting(name);
}

function formatDisplayName(name) {
  const trimmedName = String(name || "").trim();
  return trimmedName ? trimmedName[0].toLocaleUpperCase() + trimmedName.slice(1) : "";
}

function getSignedInName() {
  const email = getAccountEmail();
  if (!email) return "";
  if (flaskBackendEnabled) return formatDisplayName(currentUser?.name || email.split("@")[0]);
  try {
    const accounts = JSON.parse(localStorage.getItem("obl_accounts") || "{}");
    return formatDisplayName(accounts[email]?.name || email.split("@")[0]);
  } catch (error) {
    console.error("Could not read the signed-in account name.", error);
  }
  return "";
}

function updateHomeGreeting(name = getSignedInName()) {
  const greeting = document.getElementById("personal-greeting");
  if (!greeting) return;
  if (!name) {
    greeting.textContent = "";
    greeting.classList.add("hidden");
    return;
  }
  const hour = new Date().getHours();
  const timeOfDay = hour < 12 ? "morning" : hour < 17 ? "afternoon" : hour < 21 ? "evening" : "night";
  greeting.textContent = `Good ${timeOfDay}, ${name}!`;
  greeting.classList.remove("hidden");
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
  if (book.pdfUrl) {
    window.open(book.pdfUrl, "_blank", "noopener,noreferrer");
    return;
  }
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
  const uploadDescription = flaskBackendEnabled
    ? "This uploaded book and its files are private to the account that added them."
    : "A book saved in this browser. Its PDF and cover are stored on this device only.";
  content.innerHTML = `<div class="book-detail-content"><img class="book-detail-cover" src="${makeCover(book)}" alt="Cover of ${escapeHtml(book.title)}"><div><span class="eyebrow">${escapeHtml(book.category)}</span><h2>${escapeHtml(book.title)}</h2><p class="book-detail-author">by ${escapeHtml(book.author)}${book.year ? ` · ${escapeHtml(book.year)}` : ""}</p><p class="book-detail-description">${book.uploaded ? uploadDescription : "A much-loved title from the library's starter collection. Search for a copy to read online."}</p><div class="book-detail-actions"><button class="button button-dark" type="button" data-read="${escapeHtml(book.id)}">Read ${book.uploaded ? "PDF" : "online"} ↗</button><button class="button button-outline" type="button" data-watch="${escapeHtml(book.id)}">♡ Save for later</button></div></div></div>`;
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
  if (!document.getElementById("book-grid")) return;
  const uploads = flaskBackendEnabled
    ? currentUser ? (await apiRequest("/api/uploads")).books : []
    : await getUploads();
  allBooks = [...seedBooks, ...uploads.sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime())];
  renderBooks();
}

async function showAccountDialog() {
  const dialog = document.getElementById("account-dialog");
  if (!dialog) return;
  const sessionEmail = getAccountEmail();
  const accountButton = document.getElementById("account-button");
  if (accountButton) accountButton.textContent = sessionEmail ? translations[activeLanguage].logout : translations[activeLanguage].login;
  if (sessionEmail) {
    if (flaskBackendEnabled) {
      try {
        await apiRequest("/api/logout", { method: "POST" });
        currentUser = null;
        serverWatchlist = [];
        updateProfileLink();
        window.dispatchEvent(new Event("obl-auth-changed"));
        await refreshBooks();
      } catch (error) {
        console.error("Signing out failed.", error);
        setMessage(document.getElementById("account-message"), error.message);
        return;
      }
    } else {
      localStorage.removeItem("obl_session");
      updateProfileLink();
      window.dispatchEvent(new Event("obl-auth-changed"));
    }
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
  const nameInput = nameField?.querySelector("input");
  const password = document.querySelector('#account-form input[name="password"]');
  if (title) title.textContent = isSignup ? "Create your account" : "Welcome back";
  if (submit) submit.innerHTML = `${isSignup ? "Create account" : "Log in"} <span aria-hidden="true">↗</span>`;
  if (switchButton) switchButton.textContent = isSignup ? "Already have an account? Log in" : "New here? Create an account";
  nameField?.classList.toggle("hidden", !isSignup);
  if (nameInput) nameInput.required = isSignup;
  if (password) password.autocomplete = isSignup ? "new-password" : "current-password";
}

async function hashPassword(password, salt) {
  if (!window.crypto?.subtle) throw new Error("Secure password hashing isn't available in this browser. Open the site in a modern browser over localhost.");
  const encoder = new TextEncoder();
  const key = await crypto.subtle.importKey("raw", encoder.encode(password), "PBKDF2", false, ["deriveBits"]);
  const bits = await crypto.subtle.deriveBits({ name: "PBKDF2", salt: encoder.encode(salt), iterations: 120000, hash: "SHA-256" }, key, 256);
  return Array.from(new Uint8Array(bits), byte => byte.toString(16).padStart(2, "0")).join("");
}

function getBookAssistantReply(message) {
  const hindi = activeLanguage === "hi";
  const punjabi = activeLanguage === "pa";
  const query = message.toLocaleLowerCase();
  const categories = [
    { name: "Mystery", label: hindi ? "रहस्य" : punjabi ? "ਰਹੱਸ" : "Mystery", terms: ["mystery", "detective", "crime", "suspense", "रहस्य", "जासूस", "ਰਹੱਸ", "ਜਾਸੂਸ", "ਭੇਤ"] },
    { name: "Adventure", label: hindi ? "रोमांच" : punjabi ? "ਰੋਮਾਂਚ" : "Adventure", terms: ["adventure", "journey", "travel", "रोमांच", "साहसिक", "ਰੋਮਾਂਚ", "ਸਾਹਸਿਕ", "ਸਫ਼ਰ"] },
    { name: "Fantasy", label: hindi ? "काल्पनिक" : punjabi ? "ਕਲਪਨਾ" : "Fantasy", terms: ["fantasy", "magic", "wonder", "जादू", "काल्पनिक", "ਜਾਦੂ", "ਕਲਪਨਾ"] },
    { name: "Romance", label: hindi ? "रोमांस" : punjabi ? "ਪਿਆਰ" : "Romance", terms: ["romance", "romantic", "प्रेम", "रोमांस", "ਪਿਆਰ", "ਇਸ਼ਕ"] },
    { name: "Poetry", label: hindi ? "कविता" : punjabi ? "ਕਵਿਤਾ" : "Poetry", terms: ["poetry", "poem", "कविता", "काव्य", "ਕਵਿਤਾ", "ਸ਼ਾਇਰੀ"] },
    { name: "Children", label: hindi ? "बच्चों की" : punjabi ? "ਬੱਚਿਆਂ ਦੀਆਂ" : "Children's", terms: ["children", "kids", "child", "बच्चों", "बच्चे", "ਬੱਚਿਆਂ", "ਬੱਚੇ"] },
    { name: "Non-fiction", label: hindi ? "गैर-काल्पनिक" : punjabi ? "ਗ਼ੈਰ-ਗਲਪ" : "Non-fiction", terms: ["non-fiction", "nonfiction", "philosophy", "history", "दर्शन", "इतिहास", "ਗ਼ੈਰ-ਗਲਪ", "ਦਰਸ਼ਨ", "ਇਤਿਹਾਸ"] },
    { name: "Classics", label: hindi ? "क्लासिक" : punjabi ? "ਕਲਾਸਿਕ" : "Classics", terms: ["classic", "classics", "क्लासिक", "ਕਲਾਸਿਕ"] }
  ];
  const category = categories.find(item => item.terms.some(term => query.includes(term)));
  if (/\b(how many|number of|available|what books|which books|catalog|browse)\b/.test(query) || /कितनी|किताबें हैं|किताबें उपलब्ध|ਕਿੰਨੀਆਂ|ਕਿੰਨੀ ਕਿਤਾਬਾਂ|ਕਿਤਾਬਾਂ ਹਨ|ਕਿਤਾਬਾਂ ਕਿਹੜੀਆਂ/.test(query)) {
    return hindi
      ? `हमारी लाइब्रेरी में ${allBooks.length} किताबें हैं। आप किसी शैली, लेखक या किताब का नाम पूछ सकते हैं।`
      : punjabi
        ? `ਸਾਡੀ ਲਾਇਬ੍ਰੇਰੀ ਵਿੱਚ ${allBooks.length} ਕਿਤਾਬਾਂ ਹਨ। ਕਿਸੇ ਸ਼ੈਲੀ, ਲੇਖਕ ਜਾਂ ਕਿਤਾਬ ਦੇ ਨਾਮ ਬਾਰੇ ਪੁੱਛੋ।`
      : `There are ${allBooks.length} books in our library. Ask me about a genre, author, or title.`;
  }

  const words = query.match(/[\p{L}\p{N}]+/gu) || [];
  const ignored = new Set(["recommend", "recommendation", "suggest", "suggestion", "book", "books", "please", "some", "something", "about", "with", "from", "what", "which", "have", "want", "like", "read", "find", "me", "the", "a", "an", "for", "any", "good", "best", "do", "you", "your", "मुझे", "कोई", "किताब", "किताबें", "बताएं", "सुझाएं", "चाहिए", "पढ़ना", "ਕੋਈ", "ਕਿਤਾਬ", "ਕਿਤਾਬਾਂ", "ਦੱਸੋ", "ਸੁਝਾਓ", "ਚਾਹੀਦੀ", "ਪੜ੍ਹਨੀ", "ਮੈਨੂੰ", "ਕਰੋ"]);
  const searchWords = words.filter(word => word.length > 2 && !ignored.has(word));
  let matches = category
    ? allBooks.filter(book => book.category === category.name)
    : allBooks.filter(book => searchWords.some(word => `${book.title} ${book.author} ${book.category}`.toLocaleLowerCase().includes(word)));

  if (!matches.length && (/\b(recommend|suggest|something|book|read)\b/.test(query) || /ਸੁਝਾਓ|ਕਿਤਾਬ|ਪੜ੍ਹਨ ਲਈ/.test(query) || /सुझाएं|किताब|पढ़ने/.test(query))) {
    matches = allBooks.filter(book => ["Fiction", "Classics"].includes(book.category));
  }
  if (!matches.length) {
    return hindi
      ? "इस कैटलॉग में उसका मेल नहीं मिला। किसी शैली (जैसे रहस्य या रोमांच), लेखक या किताब का नाम पूछकर देखें।"
      : punjabi
        ? "ਇਸ ਸੂਚੀ ਵਿੱਚ ਉਹ ਨਹੀਂ ਮਿਲਿਆ। ਰਹੱਸ ਜਾਂ ਰੋਮਾਂਚ ਵਰਗੀ ਸ਼ੈਲੀ, ਲੇਖਕ ਜਾਂ ਕਿਤਾਬ ਦਾ ਨਾਮ ਪੁੱਛ ਕੇ ਵੇਖੋ।"
      : "I couldn't find a match in this catalog. Try a genre like mystery or adventure, or ask about an author or title.";
  }

  const books = matches.slice(0, 3).map(book => `• ${book.title} — ${book.author}`).join("\n");
  if (!category && matches.length === 1 && /\b(who|author|wrote|by)\b/.test(query)) {
    return hindi
      ? `${matches[0].title} के लेखक ${matches[0].author} हैं।`
      : punjabi
        ? `${matches[0].title} ਦੇ ਲੇਖਕ ${matches[0].author} ਹਨ।`
      : `${matches[0].title} was written by ${matches[0].author}.`;
  }
  return hindi
    ? `${category ? `${category.name} शैली` : "आपकी खोज"} के लिए ये किताबें देखें:\n${books}`
    : punjabi
      ? `${category ? `${category.label} ਸ਼ੈਲੀ` : "ਤੁਹਾਡੀ ਖੋਜ"} ਲਈ ਲਾਇਬ੍ਰੇਰੀ ਵਿੱਚੋਂ ਇਹ ਕਿਤਾਬਾਂ ਵੇਖੋ:\n${books}`
      : `${category ? `${category.name} picks` : "Here are some matches"} from our library:\n${books}`;
}

function addBookAssistantMessage(message, sender) {
  const messages = document.getElementById("assistant-messages");
  if (!messages) return;
  const item = document.createElement("p");
  item.className = `assistant-message assistant-message-${sender}`;
  item.textContent = message;
  messages.appendChild(item);
  messages.scrollTop = messages.scrollHeight;
}

function sendBookAssistantMessage(message) {
  const text = message.trim();
  if (!text) return;
  addBookAssistantMessage(text, "user");
  document.getElementById("assistant-suggestions")?.classList.add("hidden");
  addBookAssistantMessage(getBookAssistantReply(text), "bot");
}

function getBookAssistantPrompt(prompt) {
  const prompts = {
    mystery: { en: "Recommend a mystery", hi: "रहस्य की किताब सुझाएं", pa: "ਰਹੱਸ ਦੀ ਕਿਤਾਬ ਸੁਝਾਓ" },
    adventure: { en: "Recommend an adventure", hi: "रोमांचक किताब सुझाएं", pa: "ਰੋਮਾਂਚਕ ਕਿਤਾਬ ਸੁਝਾਓ" },
    browse: { en: "What books do you have?", hi: "आपके पास कौन सी किताबें हैं?", pa: "ਤੁਹਾਡੇ ਕੋਲ ਕਿਹੜੀਆਂ ਕਿਤਾਬਾਂ ਹਨ?" }
  };
  return prompts[prompt]?.[activeLanguage] || prompt;
}

function resetBookAssistant() {
  const messages = document.getElementById("assistant-messages");
  if (!messages) return;
  const welcome = translations[activeLanguage].assistantWelcome;
  const suggestions = messages.querySelector("#assistant-suggestions");
  messages.replaceChildren();
  addBookAssistantMessage(welcome, "bot");
  if (suggestions) {
    suggestions.classList.remove("hidden");
    messages.appendChild(suggestions);
  }
}

function bindCommonControls() {
  const assistantPanel = document.getElementById("assistant-panel");
  const assistantLauncher = document.getElementById("assistant-launcher");
  const closeAssistant = () => {
    assistantPanel?.classList.add("hidden");
    assistantLauncher?.setAttribute("aria-expanded", "false");
  };
  assistantLauncher?.addEventListener("click", () => {
    assistantPanel?.classList.remove("hidden");
    assistantLauncher.setAttribute("aria-expanded", "true");
    document.getElementById("assistant-input")?.focus();
  });
  document.getElementById("assistant-close")?.addEventListener("click", () => {
    closeAssistant();
    assistantLauncher?.focus();
  });
  document.getElementById("assistant-clear")?.addEventListener("click", resetBookAssistant);
  document.getElementById("assistant-form")?.addEventListener("submit", event => {
    event.preventDefault();
    const form = event.currentTarget;
    const input = form.elements.message;
    sendBookAssistantMessage(input.value);
    input.value = "";
    input.focus();
  });
  document.getElementById("assistant-suggestions")?.addEventListener("click", event => {
    const button = event.target.closest("[data-assistant-prompt]");
    if (button) sendBookAssistantMessage(getBookAssistantPrompt(button.dataset.assistantPrompt));
  });
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
  document.getElementById("watchlist-tab")?.addEventListener("click", () => {
    if (flaskBackendEnabled && !currentUser) {
      showAccountDialog();
      setMessage(document.getElementById("account-message"), "Log in to use your private watchlist.");
      return;
    }
    setActiveTab("watchlist");
  });
  document.getElementById("show-all-button")?.addEventListener("click", () => {
    selectedCategory = "all";
    const search = document.getElementById("search-input");
    if (search) search.value = "";
    setActiveTab("discover");
  });
  const openUploadDialog = () => {
    if (flaskBackendEnabled && !currentUser) {
      showAccountDialog();
      setMessage(document.getElementById("account-message"), "Log in to add a private book.");
      return;
    }
    document.getElementById("upload-dialog")?.showModal();
  };
  document.getElementById("upload-button")?.addEventListener("click", openUploadDialog);
  document.getElementById("share-upload-button")?.addEventListener("click", openUploadDialog);
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
      if (flaskBackendEnabled) {
        await apiRequest("/api/uploads", { method: "POST", body: data });
      } else {
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
      }
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
    const form = event.currentTarget;
    const data = new FormData(form);
    const email = String(data.get("email")).trim().toLowerCase();
    const password = String(data.get("password"));
    const message = document.getElementById("account-message");
    try {
      if (flaskBackendEnabled) {
        const path = accountMode === "signup" ? "/api/signup" : "/api/login";
        const payload = {
          email,
          password,
          ...(accountMode === "signup" ? { name: String(data.get("name") || "").trim() } : {})
        };
        const result = await apiRequest(path, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload)
        });
        currentUser = result.user;
        serverWatchlist = (await apiRequest("/api/watchlist")).ids;
        updateProfileLink();
      } else {
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
      }
      updateProfileLink();
      window.dispatchEvent(new Event("obl-auth-changed"));
      document.getElementById("account-dialog").close();
      form.reset();
      const button = document.getElementById("account-button");
      if (button) button.textContent = translations[activeLanguage].logout;
      await refreshBooks();
      const isHomePage = location.pathname === "/" || location.pathname.endsWith("/index.html");
      if (!isHomePage) {
        location.assign(flaskBackendEnabled ? "/" : "index.html");
      }
    } catch (error) {
      setMessage(message, error.message || "Could not sign in. Please try again.");
    }
  });
  document.getElementById("book-grid")?.addEventListener("click", async event => {
    const watchButton = event.target.closest("[data-watch]");
    if (watchButton) {
      if (flaskBackendEnabled && !currentUser) {
        showAccountDialog();
        return;
      }
      const id = watchButton.dataset.watch;
      const saved = getWatchlist();
      try {
        await setWatchlist(saved.includes(id) ? saved.filter(bookId => bookId !== id) : [...saved, id]);
        renderBooks();
      } catch (error) {
        console.error("Updating the watchlist failed.", error);
        alert(error.message);
      }
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
      if (!confirm(flaskBackendEnabled
        ? "Remove this book and its private PDF and cover from the server?"
        : "Remove this uploaded book and its PDF from this browser?")) return;
      try {
        if (flaskBackendEnabled) {
          await apiRequest(`/api/uploads/${encodeURIComponent(deleteButton.dataset.delete)}`, { method: "DELETE" });
          serverWatchlist = serverWatchlist.filter(id => id !== deleteButton.dataset.delete);
        } else {
          await deleteUpload(deleteButton.dataset.delete);
          await setWatchlist(getWatchlist().filter(id => id !== deleteButton.dataset.delete));
        }
        await refreshBooks();
      } catch (error) {
        console.error("Removing uploaded book failed.", error);
        alert(error.message || "Could not remove the book.");
      }
    }
  });
  document.getElementById("book-detail")?.addEventListener("click", async event => {
    const watch = event.target.closest("[data-watch]");
    if (watch) {
      if (flaskBackendEnabled && !currentUser) {
        document.getElementById("book-dialog")?.close();
        showAccountDialog();
        return;
      }
      const id = watch.dataset.watch;
      const saved = getWatchlist();
      try {
        await setWatchlist(saved.includes(id) ? saved.filter(bookId => bookId !== id) : [...saved, id]);
      } catch (error) {
        console.error("Updating the watchlist failed.", error);
        alert(error.message);
        return;
      }
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

async function initializeLibrary() {
  if (flaskBackendEnabled) {
    const result = await apiRequest("/api/me");
    currentUser = result.user;
    if (currentUser) serverWatchlist = (await apiRequest("/api/watchlist")).ids;
    const reviewNote = document.querySelector(".review-storage-note");
    if (reviewNote) reviewNote.textContent = "Reviews are shared with visitors using this Flask server.";
  }
  updateProfileLink();
  applyLanguage(activeLanguage);
  const accountButton = document.getElementById("account-button");
  if (accountButton && getAccountEmail()) accountButton.textContent = translations[activeLanguage].logout;
  await refreshBooks();
}

applyLanguage(activeLanguage);
bindCommonControls();
initializeLibrary().catch(error => {
  console.error("Loading the book library failed.", error);
  const grid = document.getElementById("book-grid");
  if (grid) grid.innerHTML = `<p class="form-message">${escapeHtml(error.message || "Could not connect to the library server. Start it with py app.py and reload this page.")}</p>`;
});
