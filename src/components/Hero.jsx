
import React, { useMemo, useState, useRef, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  Search,
  Compass,
  BookMarked,
  BookOpen,
  ArrowUpRight,
  X,
  ChevronRight,
} from "lucide-react";

// ======================================================
// VERIFIED COLLECTION DATA
// Latest 15 books supplied by you.
// No old or invented books.
// ======================================================

const BOOKS = [
  // ================= FICTION =================
  {
    id: "fiction-1",
    title: "Vesta and Her Children",
    subtitle: "A Tale of the Fall of Rome",
    author: "Marcia Twain",
    image: "/fiction/fiction1.webp",
    category: "Literary & Classic Fiction",
    route: "/literary-classic-fiction",
  },
  {
    id: "fiction-2",
    title: "The Illustrated Catholic Bible Companion",
    subtitle: "All 73 Books — One Story of Salvation",
    author: "Brendan Mulcahy",
    image: "/Theology, Bibles/Theology, Bibles5.jpg",
    category: "Literary & Classic Fiction",
    route: "/literary-classic-fiction",
  },
  {
    id: "fiction-3",
    title: "Mansfield Park",
    author: "Jane Austen",
    image: "/fiction/fiction3.jpg",
    category: "Literary & Classic Fiction",
    route: "/literary-classic-fiction",
  },
  {
    id: "fiction-4",
    title: "The Tenth Symphony",
    author: "Dean Evans",
    image: "/fiction/fiction4.jpg",
    category: "Literary & Classic Fiction",
    route: "/literary-classic-fiction",
  },
  {
    id: "fiction-5",
    title: "El collar de diamantes / The Diamond Necklace",
    author: "Guy de Maupassant",
    image: "/fiction/fiction5.jpg",
    category: "Literary & Classic Fiction",
    route: "/literary-classic-fiction",
  },

  // ================= COMICS =================
  {
    id: "comic-1",
    title: "Emmanuel Just Wants to Die",
    author: "Talhí Briones & Karina Briones",
    image: "/comics/comic1.jpg",
    category: "Graphic Novels & Manga",
    route: "/graphic-novels-manga",
  },
  {
    id: "comic-2",
    title: "Cyber Fighter",
    author: "William Joseph Hill",
    image: "/comics/comic2.jpg",
    category: "Graphic Novels & Manga",
    route: "/graphic-novels-manga",
  },
  {
    id: "comic-3",
    title: "1Y1 Son 10",
    author: "Tech Books for Kids",
    image: "/comics/comic3.jpg",
    category: "Graphic Novels & Manga",
    route: "/graphic-novels-manga",
  },
  {
    id: "comic-4",
    title: "Lilwickidz Book 2",
    author: "Lilwickidz",
    image: "/comics/comic4.jpg",
    category: "Graphic Novels & Manga",
    route: "/graphic-novels-manga",
  },
  {
    id: "comic-5",
    title: "The Demons of Angels: A Graphic Novel",
    author: "H.C. Gislason & Nick Romario",
    image: "/comics/comic5.jpg",
    category: "Graphic Novels & Manga",
    route: "/graphic-novels-manga",
  },

  // ================= BIOGRAPHY =================
  {
    id: "biography-1",
    title: "Better Late Than Never: Transitioning Late in Life",
    author: "Kristy McClellan",
    image: "/biography/biography1.jpg",
    category: "Biography & Memoir",
    route: "/biography-memoir",
  },
  {
    id: "biography-2",
    title: "Love Me",
    subtitle: "A Memoir of Online Dating, Mental Illness and Redemption",
    author: "Oshun Reed",
    image: "/biography/biography2.jpg",
    category: "Biography & Memoir",
    route: "/biography-memoir",
  },
  {
    id: "biography-3",
    title: "The Corfu Diaries: One Way Ticket to Paradise",
    author: "Mike O'Toole",
    image: "/biography/biography3.jpg",
    category: "Biography & Memoir",
    route: "/biography-memoir",
  },
  {
    id: "biography-4",
    title: "Good Trouble on the High Seas",
    author: "",
    image: "/biography/biography4.jpg",
    category: "Biography & Memoir",
    route: "/biography-memoir",
  },
  {
    id: "biography-5",
    title: "Strange Tribe",
    author: "John Hemingway",
    image: "/biography/biography5.jpg",
    category: "Biography & Memoir",
    route: "/biography-memoir",
  },
];

// ======================================================
// SEARCH HELPERS
// ======================================================

function normalize(value = "") {
  return String(value)
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, " ")
    .trim();
}

function fieldMatches(value, query) {
  const text = normalize(value);
  const words = normalize(query).split(" ").filter(Boolean);

  return words.every((word) => text.includes(word));
}

function resultRank(book, query) {
  const q = normalize(query);
  const title = normalize(book.title);
  const author = normalize(book.author);

  if (!q) return 10;
  if (title === q || author === q) return 0;
  if (title.startsWith(q)) return 1;
  if (author.startsWith(q)) return 2;

  if (title.split(" ").some((word) => word.startsWith(q))) {
    return 3;
  }

  if (title.includes(q)) return 4;
  if (author.includes(q)) return 5;

  return 6;
}

// ======================================================
// SEARCH RESULT CARD
// ======================================================

function SearchResult({ book, onClick }) {
  const [imageFailed, setImageFailed] = useState(false);

  return (
    <button
      type="button"
      onClick={() => onClick(book)}
      className="w-full flex items-center gap-3 text-left px-3 py-3 bg-[#fdfbf7] border-b border-[#e2d7c5] hover:bg-[#efe8db]"
    >
      <div className="w-12 h-16 shrink-0 border border-[#c7b8a3] bg-[#efe8db] p-1 flex items-center justify-center overflow-hidden">
        {!imageFailed ? (
          <img
            src={book.image}
            alt={book.title}
            loading="lazy"
            className="w-full h-full object-contain"
            onError={() => setImageFailed(true)}
          />
        ) : (
          <BookOpen size={20} className="text-[#8c7355]" />
        )}
      </div>

      <div className="flex-1 min-w-0">
        <p className="font-serif font-bold text-[13px] leading-snug text-[#241a15]">
          {book.title}
        </p>

        {book.author && (
          <p className="text-[11px] text-[#8a593f] italic mt-1">
            by {book.author}
          </p>
        )}

        <p className="text-[10px] text-[#8c7355] mt-1">
          {book.category}
        </p>
      </div>

      <ChevronRight
        size={16}
        className="text-[#8c2d19] shrink-0"
      />
    </button>
  );
}

// ======================================================
// MAIN HERO
// ======================================================

export default function Hero() {
  const navigate = useNavigate();
  const searchRef = useRef(null);

  const [author, setAuthor] = useState("");
  const [title, setTitle] = useState("");
  const [selectedBook, setSelectedBook] = useState(null);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [showResults, setShowResults] = useState(false);
  const [error, setError] = useState("");

  const hasSearch = Boolean(
    author.trim() || title.trim()
  );

  // SEARCH ONLY ACTUAL LISTED TITLES AND AUTHORS

  const matchingBooks = useMemo(() => {
    if (!hasSearch) return [];

    const found = BOOKS.filter((book) => {
      return (
        fieldMatches(book.title, title) &&
        fieldMatches(book.author, author)
      );
    });

    const query = title.trim() || author.trim();

    return found.sort(
      (a, b) =>
        resultRank(a, query) - resultRank(b, query)
    );
  }, [title, author, hasSearch]);

  // CLOSE DROPDOWN WHEN CLICKING OUTSIDE

  useEffect(() => {
    function handleOutside(event) {
      if (
        searchRef.current &&
        !searchRef.current.contains(event.target)
      ) {
        setShowSuggestions(false);
      }
    }

    document.addEventListener("mousedown", handleOutside);

    return () => {
      document.removeEventListener("mousedown", handleOutside);
    };
  }, []);

  function changeAuthor(value) {
    setAuthor(value);
    setSelectedBook(null);
    setShowResults(false);
    setShowSuggestions(true);
    setError("");
  }

  function changeTitle(value) {
    setTitle(value);
    setSelectedBook(null);
    setShowResults(false);
    setShowSuggestions(true);
    setError("");
  }

  function chooseBook(book) {
    setAuthor(book.author);
    setTitle(book.title);
    setSelectedBook(book);
    setShowSuggestions(false);
    setShowResults(false);
    setError("");
  }

  function navigateToBook(book) {
    setShowSuggestions(false);
    setShowResults(false);

    navigate({
      pathname: book.route,
      search: `?book=${encodeURIComponent(book.title)}`,
    });
  }

  function findBooks(event) {
    event.preventDefault();

    if (selectedBook) {
      navigateToBook(selectedBook);
      return;
    }

    if (!hasSearch) {
      setError("Enter a book title or author name.");
      return;
    }

    if (matchingBooks.length === 0) {
      setError(
        "No matching book in this collection. Check the title or author."
      );
      setShowSuggestions(false);
      setShowResults(false);
      return;
    }

    if (matchingBooks.length === 1) {
      navigateToBook(matchingBooks[0]);
      return;
    }

    setShowSuggestions(false);
    setShowResults(true);
    setError("");
  }

  function clearSearch() {
    setAuthor("");
    setTitle("");
    setSelectedBook(null);
    setShowSuggestions(false);
    setShowResults(false);
    setError("");
  }

  return (
    <section className="max-w-7xl mx-auto px-6 py-6 font-serif">

      <div className="relative">

        {/* HERO IMAGE */}

        <div className="w-full h-80 sm:h-[420px] lg:h-[450px] bg-[#241a15] overflow-hidden border-2 border-[#b8a68f] shadow-md relative">

          <img
            src="https://images.pexels.com/photos/159711/books-bookstore-book-reading-159711.jpeg?auto=compress&cs=tinysrgb&w=1600"
            alt="Classic Antiquarian Library"
            className="w-full h-full object-cover"
            onError={(e) => {
              e.currentTarget.onerror = null;
              e.currentTarget.src =
                "https://images.pexels.com/photos/1370295/pexels-photo-1370295.jpeg?auto=compress&cs=tinysrgb&w=1600";
            }}
          />

          <div className="absolute inset-0 bg-black/25 pointer-events-none" />
        </div>

        {/* SEARCH BOX */}

        <div
          ref={searchRef}
          className="lg:absolute lg:right-8 lg:top-8 w-full lg:w-[420px] bg-[#fdfbf7] p-7 shadow-2xl border-2 border-[#b8a68f] z-20 mt-6 lg:mt-0"
        >

          <div className="flex items-center gap-2 mb-2">
            <Compass className="w-4 h-4 text-[#8c2d19]" />

            <span className="text-[10px] tracking-[0.2em] uppercase font-sans font-bold text-[#8c7355]">
              Curated Book Collection
            </span>
          </div>

          <h3 className="text-xl font-bold text-[#241a15] leading-snug mb-2">
            Find Your Next Book
          </h3>

          <p className="text-xs text-[#6e5d50] mb-5 font-sans leading-relaxed">
            Search our collection by book title or author.
            Select a matching book to open its collection.
          </p>

          <form
            onSubmit={findBooks}
            autoComplete="off"
            className="flex flex-col gap-4 font-sans"
          >

            {/* AUTHOR FIELD */}

            <div>
              <label
                htmlFor="hero-search-author"
                className="block text-[11px] font-bold uppercase text-[#7a6452] mb-2"
              >
                Author Name
              </label>

              <input
                id="hero-search-author"
                type="text"
                value={author}
                onChange={(e) => changeAuthor(e.target.value)}
                onFocus={() => {
                  if (hasSearch) setShowSuggestions(true);
                }}
                placeholder="Enter author name..."
                className="w-full border border-[#c7b8a3] bg-[#fbf8f2] px-3 py-3 text-[13px] text-[#241a15] outline-none focus:border-[#8c2d19] font-serif"
              />
            </div>

            {/* TITLE FIELD */}

            <div>
              <label
                htmlFor="hero-search-title"
                className="block text-[11px] font-bold uppercase text-[#7a6452] mb-2"
              >
                Book Title
              </label>

              <input
                id="hero-search-title"
                type="text"
                value={title}
                onChange={(e) => changeTitle(e.target.value)}
                onFocus={() => {
                  if (hasSearch) setShowSuggestions(true);
                }}
                placeholder="Enter book title..."
                className="w-full border border-[#c7b8a3] bg-[#fbf8f2] px-3 py-3 text-[13px] text-[#241a15] outline-none focus:border-[#8c2d19] font-serif"
              />
            </div>

            {/* LIVE SUGGESTIONS */}

            {showSuggestions && hasSearch && (
              <div className="border border-[#c7b8a3] bg-white shadow-lg">

                <div className="flex items-center justify-between px-3 py-2 bg-[#efe8db] border-b border-[#d6c7b2]">
                  <span className="text-[10px] uppercase font-bold text-[#8c2d19]">
                    {matchingBooks.length} Matching Books
                  </span>

                  <button
                    type="button"
                    aria-label="Close suggestions"
                    onClick={() => setShowSuggestions(false)}
                  >
                    <X size={15} />
                  </button>
                </div>

                <div className="max-h-[280px] overflow-y-auto">

                  {matchingBooks.length ? (
                    matchingBooks.slice(0, 6).map((book) => (
                      <SearchResult
                        key={book.id}
                        book={book}
                        onClick={chooseBook}
                      />
                    ))
                  ) : (
                    <p className="px-3 py-4 text-xs text-[#7a6452]">
                      No matching books found.
                    </p>
                  )}

                </div>

                {matchingBooks.length > 6 && (
                  <p className="text-[10px] px-3 py-2 bg-[#fbf8f2] text-[#7a6452]">
                    Showing 6 suggestions. Click Find Books
                    to see all matches.
                  </p>
                )}

              </div>
            )}

            {/* SELECTED BOOK */}

            {selectedBook && (
              <div className="border border-[#c29b38] bg-[#f4eee2] px-3 py-3">

                <p className="text-[10px] font-bold uppercase text-[#8c2d19]">
                  Selected Book
                </p>

                <p className="text-[13px] font-serif font-bold mt-1">
                  {selectedBook.title}
                </p>

                <p className="text-[11px] text-[#7a6452] mt-1">
                  {selectedBook.category}
                </p>

              </div>
            )}

            {/* ERROR */}

            {error && (
              <p
                role="alert"
                className="text-xs text-[#a02a17] bg-[#fff4ee] border border-[#e1b3a5] px-3 py-2"
              >
                {error}
              </p>
            )}

            {/* BUTTONS */}

            <div className="flex items-center justify-between gap-3 pt-4 mt-1 border-t border-[#e2d7c5]">

              <button
                type="button"
                onClick={clearSearch}
                className="text-xs text-[#8c2d19] underline underline-offset-4"
              >
                Clear Search
              </button>

              <button
                type="submit"
                className="bg-[#8c2d19] text-[#fbf8f2] text-xs font-bold py-3 px-6 uppercase tracking-widest flex items-center gap-2"
              >
                <Search size={15} />
                Find Books
              </button>

            </div>

          </form>

          {/* MULTIPLE RESULTS */}

          {showResults && (
            <div className="mt-5 border-t border-[#d6c7b2] pt-4">

              <div className="flex items-center justify-between mb-3">

                <h4 className="text-sm font-bold">
                  Search Results ({matchingBooks.length})
                </h4>

                <button
                  type="button"
                  aria-label="Close results"
                  onClick={() => setShowResults(false)}
                >
                  <X size={16} />
                </button>

              </div>

              <div className="border border-[#e2d7c5] max-h-[300px] overflow-y-auto">

                {matchingBooks.map((book) => (
                  <SearchResult
                    key={book.id}
                    book={book}
                    onClick={navigateToBook}
                  />
                ))}

              </div>

            </div>
          )}

        </div>

        {/* EDITORIAL SHOWCASE */}

        <div className="mt-8 max-w-xl lg:max-w-2xl text-left">

          <div className="inline-flex items-center gap-1.5 bg-[#efe8db] text-[#8c2d19] text-[10px] font-sans font-bold tracking-widest uppercase px-2.5 py-1 mb-2.5 border border-[#d6c7b2]">
            <BookMarked size={14} />
            <span>Curator's Spotlight • Literary Collection</span>
          </div>

          <h2 className="text-2xl sm:text-3xl font-bold text-[#241a15] leading-tight">
            Discover Stories Worth Remembering
          </h2>

          <p className="text-sm text-[#5c4a3e] mt-2.5 leading-relaxed">
            Discover historical fiction, classic literature,
            illustrated adventures, and compelling personal
            memoirs. Explore books that celebrate imagination,
            storytelling, and remarkable human experiences.
          </p>

          <div className="mt-4">
            <Link
              to="/literary-classic-fiction"
              className="inline-flex items-center gap-2 border-2 border-[#8c2d19] text-[#8c2d19] text-xs font-sans font-bold px-5 py-2 uppercase tracking-widest"
            >
              Explore Collection
              <ArrowUpRight size={14} />
            </Link>
          </div>

          <div className="flex items-center gap-2.5 mt-6">
            <span className="w-3 h-3 rounded-full bg-[#8c2d19]" />
            {[1, 2, 3, 4].map((item) => (
              <span
                key={item}
                className="w-2.5 h-2.5 rounded-full bg-[#b8a68f]"
              />
            ))}
          </div>

        </div>

      </div>

      {/* DIVIDER */}

      <div className="mt-12 flex items-center justify-center gap-4">
        <span className="h-px w-full bg-[#d6c7b2]" />
        <span className="text-[#8c7355] text-sm">♦</span>
        <span className="h-px w-full bg-[#d6c7b2]" />
      </div>

    </section>
  );
}
