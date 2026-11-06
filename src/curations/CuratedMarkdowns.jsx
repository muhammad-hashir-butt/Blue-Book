
import React, { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  ArrowUpRight,
  BookOpen,
  Check,
  ChevronDown,
  Heart,
  Search,
  ShoppingBag,
  SlidersHorizontal,
  Sparkles,
  Tag,
  Truck,
  ShieldCheck,
  X,
  LibraryBig,
  Bookmark,
} from "lucide-react";

// DEMO INVENTORY
// Replace titles, prices, and stock with actual store data.
// No real inventory or discount claims are implied.

const books = [
  {
    id: 1,
    title: "The Atlas of Forgotten Kingdoms",
    author: "Eleanor Ashcroft",
    category: "History",
    format: "Illustrated Hardcover",
    year: "1924",
    price: 89,
    oldPrice: 145,
    discount: 39,
    stock: 3,
    tag: "Collector's Pick",
    cover: "from-[#263d46] to-[#101f27]",
    accent: "#d3b47b",
    emblem: "✦",
    description:
      "An illustrated historical volume exploring the rise and fall of ancient kingdoms, presented in an elegant collector's format.",
  },
  {
    id: 2,
    title: "Botanical Wonders",
    author: "Clara Whitmore",
    category: "Natural History",
    format: "Illustrated Edition",
    year: "1912",
    price: 65,
    oldPrice: 110,
    discount: 41,
    stock: 5,
    tag: "Limited Offer",
    cover: "from-[#53634b] to-[#233527]",
    accent: "#e1cf95",
    emblem: "❧",
    description:
      "A richly styled botanical study celebrating the intricate beauty of historic plant illustrations.",
  },
  {
    id: 3,
    title: "The Poet's Treasury",
    author: "Edmund Fairchild",
    category: "Literature",
    format: "Clothbound Hardcover",
    year: "1898",
    price: 48,
    oldPrice: 80,
    discount: 40,
    stock: 7,
    tag: "Literary Favorite",
    cover: "from-[#774537] to-[#3e211d]",
    accent: "#e3bb8d",
    emblem: "❦",
    description:
      "A carefully selected collection of classical verse, bound in a traditional literary style.",
  },
  {
    id: 4,
    title: "The Golden Age of Exploration",
    author: "Arthur Pembroke",
    category: "History",
    format: "Vintage Hardcover",
    year: "1907",
    price: 120,
    oldPrice: 195,
    discount: 38,
    stock: 2,
    tag: "Rare Find",
    cover: "from-[#96764d] to-[#49361e]",
    accent: "#f4d7a0",
    emblem: "✺",
    description:
      "A historical account of seafaring journeys, geographical discoveries, and the age of exploration.",
  },
  {
    id: 5,
    title: "Architecture Through the Ages",
    author: "Frederick Bellamy",
    category: "Fine Arts",
    format: "Illustrated Folio",
    year: "1931",
    price: 95,
    oldPrice: 160,
    discount: 41,
    stock: 4,
    tag: "Art & Design",
    cover: "from-[#62606b] to-[#29262e]",
    accent: "#e0c8a6",
    emblem: "✧",
    description:
      "A visual study of architectural traditions, classical structures, and decorative design.",
  },
  {
    id: 6,
    title: "Celestial Observations",
    author: "Henry Alderton",
    category: "Science",
    format: "Scientific Edition",
    year: "1920",
    price: 72,
    oldPrice: 125,
    discount: 42,
    stock: 6,
    tag: "Scholarly Choice",
    cover: "from-[#26375b] to-[#10172c]",
    accent: "#c4c9e7",
    emblem: "☼",
    description:
      "An atmospheric introduction to astronomical observations and the scientific imagination of an earlier era.",
  },
  {
    id: 7,
    title: "Legends of the Ancient World",
    author: "Margaret Ellison",
    category: "Literature",
    format: "Decorative Hardcover",
    year: "1903",
    price: 55,
    oldPrice: 90,
    discount: 39,
    stock: 5,
    tag: "Classic Edition",
    cover: "from-[#704d67] to-[#302032]",
    accent: "#e3b9d8",
    emblem: "✥",
    description:
      "A collection of ancient myths and enduring legends, presented for readers of classical storytelling.",
  },
  {
    id: 8,
    title: "Wildlife of the Northern Lands",
    author: "Charles W. Bennett",
    category: "Natural History",
    format: "Illustrated Hardcover",
    year: "1928",
    price: 78,
    oldPrice: 135,
    discount: 42,
    stock: 3,
    tag: "Nature Collection",
    cover: "from-[#576453] to-[#253126]",
    accent: "#d6c9a5",
    emblem: "❀",
    description:
      "An illustrated exploration of wildlife, natural landscapes, and traditional field observations.",
  },
];

const categories = [
  "All Collections",
  "Literature",
  "History",
  "Natural History",
  "Fine Arts",
  "Science",
];

const money = (value) =>
  new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 2,
  }).format(value);

// DECORATIVE BOOK COVER
// CSS illustration rather than external placeholder images.

function BookCover({ book, large = false }) {
  return (
    <div
      className={`relative w-full h-full overflow-hidden bg-gradient-to-br ${book.cover} shadow-[8px_12px_20px_rgba(0,0,0,0.18)]`}
    >
      <div className="absolute inset-y-0 left-[7%] w-[3px] bg-black/20" />

      <div
        className="absolute inset-3 sm:inset-4 border"
        style={{ borderColor: `${book.accent}80` }}
      />

      <div
        className="absolute inset-5 sm:inset-6 border opacity-30"
        style={{ borderColor: book.accent }}
      />

      <div className="relative z-10 h-full flex flex-col items-center justify-between text-center px-7 py-8">
        <div
          className="text-[9px] uppercase tracking-[0.28em] font-semibold"
          style={{ color: book.accent }}
        >
          Blue Book Collection
        </div>

        <div className="flex flex-col items-center gap-4">
          <span
            className={`${large ? "text-6xl" : "text-5xl"} leading-none`}
            style={{ color: book.accent }}
          >
            {book.emblem}
          </span>

          <div
            className="w-12 h-px opacity-70"
            style={{ backgroundColor: book.accent }}
          />

          <h3
            className={`${
              large ? "text-3xl md:text-4xl" : "text-xl"
            } font-bold leading-snug text-[#f5ead6]`}
            style={{ fontFamily: "Georgia, serif" }}
          >
            {book.title}
          </h3>
        </div>

        <div
          className="text-[10px] tracking-[0.13em] uppercase"
          style={{ color: book.accent }}
        >
          {book.author}
        </div>
      </div>
    </div>
  );
}

function ProductCard({
  book,
  isSaved,
  onWishlist,
  onDetails,
  onAddCart,
}) {
  return (
    <article className="group flex flex-col bg-[#fffdfa] border border-[#e0d4c3]">
      {/* COVER AREA */}
      <div className="relative bg-[#eae2d5] p-7 sm:p-9">
        <span className="absolute top-4 left-4 z-10 bg-[#8c2d19] text-white px-3 py-1.5 text-[10px] font-sans font-bold tracking-widest uppercase">
          {book.discount}% Off
        </span>

        <button
          type="button"
          aria-label={
            isSaved ? "Remove from wishlist" : "Add to wishlist"
          }
          onClick={() => onWishlist(book.id)}
          className="absolute top-4 right-4 z-10 w-9 h-9 bg-[#fffdfa] border border-[#d9ccba] flex items-center justify-center"
        >
          <Heart
            size={17}
            className={
              isSaved
                ? "fill-[#8c2d19] text-[#8c2d19]"
                : "text-[#382b22]"
            }
          />
        </button>

        <button
          type="button"
          onClick={() => onDetails(book)}
          className="block mx-auto w-[70%] max-w-[180px] aspect-[3/4]"
          aria-label={`View details of ${book.title}`}
        >
          <BookCover book={book} />
        </button>
      </div>

      {/* BOOK DETAILS */}
      <div className="p-5 flex flex-col flex-1">
        <div className="flex justify-between items-center gap-2 mb-3">
          <span className="text-[10px] font-sans uppercase tracking-[0.14em] font-bold text-[#8c2d19]">
            {book.category}
          </span>

          <span className="text-[11px] text-[#7a6452]">
            {book.year}
          </span>
        </div>

        <h3 className="text-xl font-bold leading-snug text-[#241a15] min-h-[54px]">
          {book.title}
        </h3>

        <p className="text-sm text-[#7a6452] mt-1">
          By {book.author}
        </p>

        <p className="text-xs text-[#7a6452] mt-3">
          {book.format}
        </p>

        <div className="mt-auto pt-6">
          <div className="flex flex-wrap items-end gap-x-3 gap-y-1">
            <span className="text-2xl font-bold text-[#8c2d19]">
              {money(book.price)}
            </span>

            <span className="text-sm line-through text-[#918275]">
              {money(book.oldPrice)}
            </span>
          </div>

          <p className="text-xs text-[#63744b] mt-1 font-semibold">
            Save {money(book.oldPrice - book.price)}
          </p>

          <div className="mt-5 flex gap-2">
            <button
              type="button"
              onClick={() => onAddCart(book)}
              className="flex-1 bg-[#241a15] text-[#f4eee2] px-3 py-3 text-xs sm:text-sm font-semibold flex items-center justify-center gap-2 hover:bg-[#8c2d19]"
            >
              <ShoppingBag size={15} />
              Add to Cart
            </button>

            <button
              type="button"
              onClick={() => onDetails(book)}
              aria-label={`More details about ${book.title}`}
              className="w-11 border border-[#cfc0ae] flex items-center justify-center text-[#241a15] hover:bg-[#f4eee2]"
            >
              <ArrowUpRight size={17} />
            </button>
          </div>
        </div>
      </div>
    </article>
  );
}

export default function CuratedMarkdowns() {
  const [category, setCategory] = useState("All Collections");
  const [search, setSearch] = useState("");
  const [sort, setSort] = useState("featured");
  const [maxPrice, setMaxPrice] = useState(250);
  const [showFilters, setShowFilters] = useState(false);
  const [selectedBook, setSelectedBook] = useState(null);
  const [wishlist, setWishlist] = useState([]);
  const [notice, setNotice] = useState("");

  const featuredBook = books[0];

  const filteredBooks = useMemo(() => {
    let results = books.filter((book) => {
      const matchingCategory =
        category === "All Collections" ||
        book.category === category;

      const query = search.trim().toLowerCase();

      const matchingSearch =
        !query ||
        [book.title, book.author, book.category, book.format]
          .join(" ")
          .toLowerCase()
          .includes(query);

      return (
        matchingCategory &&
        matchingSearch &&
        book.price <= maxPrice
      );
    });

    if (sort === "price-low") {
      results.sort((a, b) => a.price - b.price);
    }

    if (sort === "price-high") {
      results.sort((a, b) => b.price - a.price);
    }

    if (sort === "discount") {
      results.sort((a, b) => b.discount - a.discount);
    }

    if (sort === "title") {
      results.sort((a, b) => a.title.localeCompare(b.title));
    }

    return results;
  }, [category, search, sort, maxPrice]);

  const toggleWishlist = (id) => {
    setWishlist((current) =>
      current.includes(id)
        ? current.filter((item) => item !== id)
        : [...current, id]
    );
  };

  const addToCart = (book) => {
    // Demo localStorage cart.
    // Replace with your real cart context or API later.

    try {
      const stored = JSON.parse(
        localStorage.getItem("bluebook-cart") || "[]"
      );

      const cart = Array.isArray(stored) ? stored : [];

      const newItem = {
        id: crypto.randomUUID(),
        productId: book.id,
        type: "curated-markdown-book",
        title: book.title,
        author: book.author,
        price: book.price,
        quantity: 1,
      };

      localStorage.setItem(
        "bluebook-cart",
        JSON.stringify([...cart, newItem])
      );

      setNotice(`${book.title} added to the demo cart.`);
    } catch {
      setNotice("Unable to save this item. Please try again.");
    }
  };

  const resetFilters = () => {
    setCategory("All Collections");
    setSearch("");
    setSort("featured");
    setMaxPrice(250);
  };

  const scrollToCollection = () => {
    document
      .getElementById("markdown-collection")
      ?.scrollIntoView({ behavior: "instant" });
  };

  return (
    <div className="min-h-screen bg-[#fbf8f2] text-[#241a15]">

      {/* =================================
          SECTION 1 - EDITORIAL HERO
      ================================= */}

      <section className="relative bg-[#241a15] text-[#f5ecdc] overflow-hidden">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 py-16 md:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

            <div>
              <div className="flex items-center gap-3 mb-7">
                <span className="h-px w-9 bg-[#c29b38]" />
                <span className="text-[#d6b36e] text-xs uppercase tracking-[0.25em] font-sans font-bold">
                  The Collector's Edit
                </span>
              </div>

              <h1
                className="text-5xl md:text-6xl xl:text-7xl font-bold leading-[1.08] tracking-tight"
                style={{ fontFamily: "Georgia, serif" }}
              >
                Curated
                <br />
                <span className="italic text-[#d2ad68]">
                  Markdowns.
                </span>
              </h1>

              <p className="mt-8 text-lg text-[#ded0bd] leading-8 max-w-lg">
                Remarkable books. Considered prices.
                Discover thoughtfully selected editions
                that bring literary distinction within
                closer reach.
              </p>

              <p className="mt-5 text-sm leading-7 text-[#b8a997] max-w-lg">
                Explore our illustrative selection of
                vintage literature, scholarly works,
                illustrated editions, and collectible
                volumes at special markdown prices.
              </p>

              <div className="mt-9 flex flex-wrap gap-4">
                <button
                  type="button"
                  onClick={scrollToCollection}
                  className="bg-[#c29b38] text-[#241a15] px-7 py-4 text-xs uppercase tracking-[0.13em] font-sans font-bold flex items-center gap-3 hover:bg-[#e0ba65]"
                >
                  Explore the Collection
                  <ArrowRight size={17} />
                </button>

                <Link
                  to="/"
                  className="border border-[#907a5b] text-[#f5ecdc] px-7 py-4 text-xs uppercase tracking-[0.13em] font-sans font-bold hover:bg-[#382b22]"
                >
                  Discover Blue Book
                </Link>
              </div>

              <div className="mt-12 pt-6 border-t border-[#554638] grid grid-cols-3 gap-5 max-w-lg">
                <div>
                  <p className="text-2xl md:text-3xl font-bold text-[#d2ad68]">
                    8
                  </p>
                  <p className="text-[10px] sm:text-xs text-[#c3b5a0] mt-2 uppercase tracking-wide">
                    Sample Editions
                  </p>
                </div>

                <div>
                  <p className="text-2xl md:text-3xl font-bold text-[#d2ad68]">
                    5
                  </p>
                  <p className="text-[10px] sm:text-xs text-[#c3b5a0] mt-2 uppercase tracking-wide">
                    Categories
                  </p>
                </div>

                <div>
                  <p className="text-2xl md:text-3xl font-bold text-[#d2ad68]">
                    38–42%
                  </p>
                  <p className="text-[10px] sm:text-xs text-[#c3b5a0] mt-2 uppercase tracking-wide">
                    Demo Savings
                  </p>
                </div>
              </div>
            </div>

            {/* HERO EDITORIAL ART */}
            <div className="relative">
              <div className="bg-[#382b22] border border-[#826d4d] p-6 sm:p-10">
                <div className="border border-[#8c754e] p-6 sm:p-8">
                  <div className="text-center mb-8">
                    <Sparkles
                      size={24}
                      className="mx-auto text-[#c29b38] mb-3"
                    />

                    <p className="text-[11px] uppercase tracking-[0.25em] text-[#d2ad68] font-sans">
                      An Invitation to Collect
                    </p>
                  </div>

                  <div className="flex items-end justify-center gap-3 sm:gap-5">
                    <div className="w-[27%] aspect-[3/4]">
                      <BookCover book={books[2]} />
                    </div>

                    <div className="w-[37%] aspect-[3/4]">
                      <BookCover book={books[0]} />
                    </div>

                    <div className="w-[27%] aspect-[3/4]">
                      <BookCover book={books[5]} />
                    </div>
                  </div>

                  <div className="mt-9 text-center">
                    <p className="italic text-xl md:text-2xl text-[#f0e5d4]">
                      Treasures worth discovering.
                    </p>

                    <div className="flex items-center justify-center gap-3 mt-5">
                      <div className="h-px w-12 bg-[#977a47]" />
                      <BookOpen size={17} className="text-[#c29b38]" />
                      <div className="h-px w-12 bg-[#977a47]" />
                    </div>
                  </div>
                </div>
              </div>

              <span className="absolute -bottom-4 -left-3 sm:-left-5 bg-[#8c2d19] text-white px-5 py-4 shadow-lg text-xs uppercase tracking-wider font-sans font-bold">
                Specially Curated
              </span>
            </div>

          </div>
        </div>
      </section>

      {/* =================================
          SECTION 2 - FEATURED BOOK
      ================================= */}

      <section className="max-w-7xl mx-auto px-5 sm:px-8 py-16 md:py-20">
        <div className="flex items-center gap-3 mb-5">
          <span className="w-8 h-px bg-[#8c2d19]" />

          <p className="text-xs uppercase tracking-[0.2em] text-[#8c2d19] font-sans font-bold">
            Featured Selection
          </p>
        </div>

        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-9">
          <h2 className="text-3xl md:text-4xl font-bold">
            The Collector's Highlight
          </h2>

          <p className="text-sm text-[#7a6452] max-w-md">
            A closer look at one of the distinguished
            editions in our sample markdown collection.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 border border-[#d6c7b2] bg-[#f4eee2]">

          <div className="bg-[#e7ddcd] p-10 sm:p-14 flex items-center justify-center">
            <div className="w-[65%] max-w-[275px] aspect-[3/4]">
              <BookCover book={featuredBook} large />
            </div>
          </div>

          <div className="p-8 sm:p-11 lg:p-14 flex flex-col justify-center">
            <span className="text-[#8c2d19] text-xs uppercase font-sans font-bold tracking-[0.17em]">
              {featuredBook.tag}
            </span>

            <h3 className="text-3xl md:text-4xl font-bold mt-5 leading-tight">
              {featuredBook.title}
            </h3>

            <p className="text-[#7a6452] italic mt-3">
              By {featuredBook.author}
            </p>

            <p className="text-[#6b584a] leading-8 mt-6">
              {featuredBook.description}
            </p>

            <div className="flex flex-wrap gap-3 mt-6">
              <span className="border border-[#d6c7b2] px-3 py-2 text-xs text-[#6b584a]">
                {featuredBook.format}
              </span>

              <span className="border border-[#d6c7b2] px-3 py-2 text-xs text-[#6b584a]">
                {featuredBook.year}
              </span>
            </div>

            <div className="mt-8 border-t border-[#d6c7b2] pt-6">
              <div className="flex items-end gap-4 flex-wrap">
                <span className="text-4xl font-bold text-[#8c2d19]">
                  {money(featuredBook.price)}
                </span>

                <span className="text-lg line-through text-[#8d7e70] pb-1">
                  {money(featuredBook.oldPrice)}
                </span>
              </div>

              <p className="text-sm text-[#596e42] font-semibold mt-2">
                Save {money(featuredBook.oldPrice - featuredBook.price)}
              </p>
            </div>

            <button
              type="button"
              onClick={() => setSelectedBook(featuredBook)}
              className="mt-8 w-fit flex gap-3 items-center bg-[#241a15] text-[#f5ecdc] px-8 py-4 text-sm font-semibold hover:bg-[#8c2d19]"
            >
              Discover This Edition
              <ArrowUpRight size={18} />
            </button>
          </div>

        </div>
      </section>

      {/* =================================
          SECTION 3 - COLLECTION
      ================================= */}

      <section
        id="markdown-collection"
        className="bg-[#f5f0e8] border-y border-[#ded2c2] py-16 md:py-20"
      >
        <div className="max-w-7xl mx-auto px-5 sm:px-8">

          {/* COLLECTION HEADING */}
          <div className="text-center max-w-3xl mx-auto mb-12">
            <div className="flex justify-center mb-4">
              <Tag size={25} className="text-[#8c2d19]" />
            </div>

            <p className="text-xs text-[#8c2d19] uppercase font-sans font-bold tracking-[0.2em] mb-4">
              Selected for the Curious
            </p>

            <h2 className="text-4xl md:text-5xl font-bold leading-tight">
              Explore the Markdowns
            </h2>

            <p className="text-[#6b584a] mt-5 leading-8">
              Browse across literature, history, science,
              fine arts, and natural history. Each
              illustrative listing brings together
              timeless subjects and special pricing.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">

            {/* SIDEBAR FILTERS */}
            <aside className="lg:col-span-3">
              <div className="lg:hidden mb-4">
                <button
                  type="button"
                  onClick={() => setShowFilters(!showFilters)}
                  aria-expanded={showFilters}
                  className="w-full flex justify-between items-center p-4 bg-white border border-[#d6c7b2] text-sm font-bold"
                >
                  <span className="flex items-center gap-2">
                    <SlidersHorizontal size={17} />
                    Filter Collection
                  </span>
                  <ChevronDown size={17} />
                </button>
              </div>

              <div
                className={`${
                  showFilters ? "block" : "hidden"
                } lg:block bg-[#fffdfa] border border-[#ded2c2] p-6 lg:sticky lg:top-6`}
              >
                <div className="flex justify-between items-center pb-5 border-b border-[#e5dbce]">
                  <h3 className="text-xl font-bold">
                    Refine Your Search
                  </h3>

                  <SlidersHorizontal
                    size={18}
                    className="text-[#8c2d19]"
                  />
                </div>

                <div className="py-6 border-b border-[#e5dbce]">
                  <h4 className="text-sm font-bold mb-4">
                    Categories
                  </h4>

                  <div className="flex flex-col gap-1">
                    {categories.map((item) => (
                      <button
                        key={item}
                        type="button"
                        onClick={() => setCategory(item)}
                        className={`w-full px-3 py-3 text-sm flex items-center justify-between text-left ${
                          category === item
                            ? "bg-[#f0e5d6] text-[#8c2d19] font-bold"
                            : "text-[#58483b] hover:bg-[#f7f2ea]"
                        }`}
                      >
                        {item}

                        {category === item && (
                          <Check size={15} />
                        )}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="py-6 border-b border-[#e5dbce]">
                  <h4 className="font-bold text-sm mb-4">
                    Maximum Price
                  </h4>

                  <div className="flex justify-between items-center text-xs text-[#7a6452] mb-4">
                    <span>$0</span>
                    <span className="font-bold text-[#8c2d19]">
                      {money(maxPrice)}
                    </span>
                  </div>

                  <input
                    type="range"
                    min="25"
                    max="250"
                    step="5"
                    value={maxPrice}
                    onChange={(event) =>
                      setMaxPrice(Number(event.target.value))
                    }
                    className="w-full accent-[#8c2d19] cursor-pointer"
                    aria-label="Maximum book price"
                  />

                  <p className="text-xs text-[#918275] mt-3">
                    Show books within your preferred budget.
                  </p>
                </div>

                <div className="pt-6">
                  <button
                    type="button"
                    onClick={resetFilters}
                    className="w-full border border-[#bcae9a] py-3 text-xs font-sans font-bold uppercase tracking-wider hover:bg-[#f4eee2]"
                  >
                    Clear All Filters
                  </button>
                </div>
              </div>

              {/* SMALL SIDEBAR NOTE */}
              <div className="mt-6 bg-[#382b22] text-[#f5eadb] p-6">
                <Bookmark
                  size={26}
                  className="text-[#c29b38] mb-5"
                />

                <h3 className="text-xl font-bold leading-snug">
                  The Pleasure of Discovery
                </h3>

                <p className="text-sm leading-7 text-[#d0c2b0] mt-4">
                  A thoughtfully assembled library begins
                  with books that speak to your curiosity.
                </p>
              </div>
            </aside>

            {/* PRODUCT COLLECTION */}
            <div className="lg:col-span-9">

              {/* TOOLBAR */}
              <div className="bg-[#fffdfa] border border-[#ded2c2] p-4 sm:p-5 mb-6">
                <div className="flex flex-col md:flex-row gap-4 md:items-center justify-between">

                  <div className="relative w-full md:max-w-xs">
                    <Search
                      size={17}
                      className="absolute left-3 top-1/2 -translate-y-1/2 text-[#8c7968]"
                    />

                    <input
                      type="search"
                      value={search}
                      onChange={(event) => setSearch(event.target.value)}
                      placeholder="Search books or authors..."
                      aria-label="Search books"
                      className="w-full pl-10 pr-4 py-3 border border-[#d6c7b2] bg-[#fbf8f2] text-sm outline-none focus:border-[#8c2d19]"
                    />
                  </div>

                  <div className="flex items-center gap-3 flex-wrap">
                    <span className="text-xs text-[#7a6452]">
                      {filteredBooks.length} Editions
                    </span>

                    <select
                      value={sort}
                      onChange={(event) => setSort(event.target.value)}
                      aria-label="Sort books"
                      className="px-3 py-3 border border-[#d6c7b2] bg-[#fbf8f2] text-sm text-[#382b22] outline-none"
                    >
                      <option value="featured">Featured</option>
                      <option value="price-low">Price: Low to High</option>
                      <option value="price-high">Price: High to Low</option>
                      <option value="discount">Greatest Savings</option>
                      <option value="title">Title: A to Z</option>
                    </select>
                  </div>
                </div>
              </div>

              {/* BOOK GRID */}
              {filteredBooks.length > 0 ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-5">
                  {filteredBooks.map((book) => (
                    <ProductCard
                      key={book.id}
                      book={book}
                      isSaved={wishlist.includes(book.id)}
                      onWishlist={toggleWishlist}
                      onDetails={setSelectedBook}
                      onAddCart={addToCart}
                    />
                  ))}
                </div>
              ) : (
                <div className="min-h-[350px] flex flex-col items-center justify-center text-center bg-[#fffdfa] border border-[#ded2c2] px-6">
                  <Search
                    size={32}
                    className="text-[#8c2d19] mb-5"
                  />

                  <h3 className="text-2xl font-bold">
                    No Editions Found
                  </h3>

                  <p className="mt-3 text-sm text-[#7a6452] max-w-sm leading-6">
                    No books match your selected filters.
                    Try exploring another category or price range.
                  </p>

                  <button
                    type="button"
                    onClick={resetFilters}
                    className="mt-6 bg-[#241a15] text-white px-6 py-3 text-sm"
                  >
                    Reset Collection
                  </button>
                </div>
              )}

              {/* COLLECTION FOOTER */}
              <div className="mt-8 pt-6 border-t border-[#ded2c2] flex flex-col sm:flex-row items-center justify-between gap-4">
                <p className="text-sm text-[#6b584a]">
                  Showing {filteredBooks.length} of {books.length} demo editions
                </p>

                <div className="flex items-center gap-2 text-sm text-[#8c2d19]">
                  <LibraryBig size={16} />
                  Carefully Curated Selection
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* =================================
          SECTION 4 - COLLECTOR BENEFITS
      ================================= */}

      <section className="max-w-7xl mx-auto px-5 sm:px-8 py-16 md:py-20">

        <div className="text-center mb-12">
          <p className="text-xs uppercase tracking-[0.2em] font-sans font-bold text-[#8c2d19] mb-4">
            The Blue Book Approach
          </p>

          <h2 className="text-3xl md:text-4xl font-bold">
            Considered Books. Considered Value.
          </h2>

          <p className="text-[#6b584a] mt-5 max-w-2xl mx-auto leading-7">
            Our collection concept celebrates the enduring
            appeal of traditional books, distinctive editions,
            and accessible collecting.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">

          <div className="border border-[#dfd4c3] bg-[#fffdfa] p-8">
            <div className="w-12 h-12 bg-[#f0e6d7] flex items-center justify-center mb-6">
              <BookOpen size={23} className="text-[#8c2d19]" />
            </div>

            <h3 className="text-xl font-bold mb-3">
              Distinctive Editions
            </h3>

            <p className="text-sm text-[#6b584a] leading-7">
              Explore works of literary, academic, and
              artistic interest, including classic titles
              and illustrated volumes.
            </p>
          </div>

          <div className="border border-[#dfd4c3] bg-[#fffdfa] p-8">
            <div className="w-12 h-12 bg-[#f0e6d7] flex items-center justify-center mb-6">
              <Tag size={23} className="text-[#8c2d19]" />
            </div>

            <h3 className="text-xl font-bold mb-3">
              Clear Markdown Pricing
            </h3>

            <p className="text-sm text-[#6b584a] leading-7">
              View the listed original price,
              current price, and estimated savings
              directly beside each featured edition.
            </p>
          </div>

          <div className="border border-[#dfd4c3] bg-[#fffdfa] p-8">
            <div className="w-12 h-12 bg-[#f0e6d7] flex items-center justify-center mb-6">
              <ShieldCheck size={23} className="text-[#8c2d19]" />
            </div>

            <h3 className="text-xl font-bold mb-3">
              Thoughtful Collecting
            </h3>

            <p className="text-sm text-[#6b584a] leading-7">
              Discover books by subject, format,
              and price, making it easier to build
              a library around your interests.
            </p>
          </div>

        </div>
      </section>

      {/* =================================
          SECTION 5 - EDITORIAL BANNER
      ================================= */}

      <section className="bg-[#ebe1d2] border-y border-[#d6c7b2]">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 py-14 md:py-20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">

            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-[#8c2d19] font-sans font-bold mb-5">
                Build a Library of Distinction
              </p>

              <h2 className="text-3xl md:text-5xl font-bold leading-tight">
                Every Great Collection
                <span className="italic text-[#8c2d19]">
                  {" "}Begins with Discovery.
                </span>
              </h2>

              <p className="text-[#6b584a] mt-6 leading-8">
                From enduring works of literature to
                fascinating scholarly studies, find
                inspiration in books that encourage a
                deeper appreciation of the written word.
              </p>

              <button
                type="button"
                onClick={scrollToCollection}
                className="mt-8 bg-[#8c2d19] text-white px-7 py-4 inline-flex items-center gap-3 text-sm font-semibold hover:bg-[#682015]"
              >
                Return to the Collection
                <ArrowRight size={17} />
              </button>
            </div>

            <div className="bg-[#382b22] p-7 sm:p-10 border border-[#b49a6b]">
              <div className="border border-[#8b7655] px-7 py-10 text-center">
                <Sparkles
                  size={32}
                  className="mx-auto text-[#c29b38] mb-6"
                />

                <h3 className="text-3xl md:text-4xl text-[#f0e5d4] font-bold leading-tight">
                  The Beauty of
                  <br />
                  a Well-Loved Book
                </h3>

                <div className="w-16 h-px bg-[#c29b38] mx-auto my-7" />

                <p className="text-[#cfbfa9] leading-7 italic">
                  "Some treasures are not discovered
                  by looking for something new,
                  but by finding something timeless."
                </p>

                <p className="mt-7 text-[11px] tracking-[0.22em] uppercase font-sans text-[#c29b38]">
                  Blue Book Editorial
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* =================================
          SECTION 6 - FINAL CTA
      ================================= */}

      <section className="max-w-7xl mx-auto px-5 sm:px-8 py-16 md:py-20 text-center">
        <div className="max-w-3xl mx-auto">
          <BookOpen
            size={29}
            className="text-[#8c2d19] mx-auto mb-6"
          />

          <h2 className="text-3xl md:text-4xl font-bold">
            Your Next Discovery Awaits
          </h2>

          <p className="text-[#6b584a] leading-8 mt-5">
            Explore distinctive titles, rediscover familiar
            classics, and discover the lasting pleasure
            of building a personal library.
          </p>

          <div className="mt-8 flex justify-center flex-wrap gap-4">
            <button
              type="button"
              onClick={scrollToCollection}
              className="bg-[#241a15] text-white px-7 py-4 text-sm font-semibold flex items-center gap-3 hover:bg-[#8c2d19]"
            >
              Shop Curated Markdowns
              <ArrowRight size={17} />
            </button>

            <Link
              to="/"
              className="border border-[#b9a994] px-7 py-4 text-sm font-semibold flex items-center gap-3 hover:bg-[#f4eee2]"
            >
              Explore the Homepage
            </Link>
          </div>
        </div>
      </section>

      {/* =================================
          BOOK DETAILS MODAL
      ================================= */}

      {selectedBook && (
        <div
          className="fixed inset-0 z-[100] bg-black/70 p-4 sm:p-8 flex items-center justify-center"
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) {
              setSelectedBook(null);
            }
          }}
        >
          <div
            role="dialog"
            aria-modal="true"
            aria-label={selectedBook.title}
            className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto bg-[#fbf8f2] border border-[#d6c7b2]"
          >
            <button
              type="button"
              onClick={() => setSelectedBook(null)}
              aria-label="Close book details"
              className="absolute top-4 right-4 z-20 bg-white w-9 h-9 border border-[#d6c7b2] flex items-center justify-center"
            >
              <X size={18} />
            </button>

            <div className="grid grid-cols-1 md:grid-cols-2">
              <div className="bg-[#e8dfd1] p-10 sm:p-12 flex items-center justify-center">
                <div className="w-[70%] max-w-[240px] aspect-[3/4]">
                  <BookCover book={selectedBook} />
                </div>
              </div>

              <div className="p-7 sm:p-10 flex flex-col justify-center">
                <p className="text-[#8c2d19] text-xs font-bold uppercase tracking-[0.16em] font-sans">
                  {selectedBook.category}
                </p>

                <h3 className="text-3xl font-bold mt-4 leading-tight">
                  {selectedBook.title}
                </h3>

                <p className="text-sm text-[#7a6452] mt-3">
                  By {selectedBook.author}
                </p>

                <p className="text-sm leading-7 text-[#6b584a] mt-6">
                  {selectedBook.description}
                </p>

                <div className="mt-6 text-sm space-y-3 border-t border-[#d6c7b2] pt-5">
                  <p>
                    <strong>Format:</strong> {selectedBook.format}
                  </p>

                  <p>
                    <strong>Publication Year:</strong> {selectedBook.year}
                  </p>

                  <p>
                    <strong>Demo Stock:</strong> {selectedBook.stock} copies
                  </p>
                </div>

                <div className="mt-7">
                  <span className="text-3xl font-bold text-[#8c2d19]">
                    {money(selectedBook.price)}
                  </span>

                  <span className="ml-3 line-through text-[#8d7e70]">
                    {money(selectedBook.oldPrice)}
                  </span>

                  <p className="text-xs mt-2 text-[#63744b] font-semibold">
                    Save {money(selectedBook.oldPrice - selectedBook.price)}
                  </p>
                </div>

                <button
                  type="button"
                  onClick={() => {
                    addToCart(selectedBook);
                    setSelectedBook(null);
                  }}
                  className="mt-7 bg-[#241a15] text-white px-5 py-4 flex items-center justify-center gap-3 font-semibold text-sm hover:bg-[#8c2d19]"
                >
                  <ShoppingBag size={17} />
                  Add to Demo Cart
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* =================================
          CART NOTIFICATION
      ================================= */}

      {notice && (
        <div
          role="status"
          className="fixed bottom-5 right-5 z-[110] max-w-sm bg-[#241a15] text-[#f4eee2] border border-[#c29b38] p-4 shadow-xl flex items-start gap-3"
        >
          <Check
            size={19}
            className="text-[#c29b38] shrink-0"
          />

          <p className="text-sm leading-6 flex-1">
            {notice}
          </p>

          <button
            type="button"
            onClick={() => setNotice("")}
            aria-label="Dismiss notification"
            className="text-[#f4eee2]"
          >
            <X size={17} />
          </button>
        </div>
      )}

    </div>
  );
}
