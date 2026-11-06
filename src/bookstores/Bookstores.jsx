
import React, { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  ArrowUpRight,
  BookOpen,
  CheckCircle2,
  ChevronDown,
  Globe2,
  Heart,
  LibraryBig,
  MapPin,
  Search,
  ShieldCheck,
  Store,
  Tag,
  X,
} from "lucide-react";

// ===========================================
// IMAGE SETTINGS
// ===========================================
// Put your PNG files inside:
// public/images/bookstores/shops/
// public/images/bookstores/books/
//
// All online fallbacks are temporary.
// Demo sellers, books and prices are illustrative.

const imageRoot = "/images/bookstores";

const onlineImages = {
  bookstore:
    "https://images.unsplash.com/photo-1507842217343-583bb7270b66?auto=format&fit=crop&w=1600&q=85",
  books:
    "https://images.unsplash.com/photo-1495446815901-a7297e633e8d?auto=format&fit=crop&w=800&q=85",
  library:
    "https://images.unsplash.com/photo-1521587760476-6c12a4b040da?auto=format&fit=crop&w=1000&q=85",
  reading:
    "https://images.unsplash.com/photo-1512820790803-83ca734da794?auto=format&fit=crop&w=800&q=85",
  shelf:
    "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?auto=format&fit=crop&w=800&q=85",
};

const sellers = [
  {
    id: "heritage",
    name: "The Heritage Book Room",
    location: "New York, United States",
    country: "United States",
    specialty: "Rare & Antiquarian",
    image: `${imageRoot}/shops/shop-1.png`,
    fallback: onlineImages.bookstore,
    featured: true,
    description:
      "An independent bookshop concept devoted to rare literature, early printed works, and collectible editions. Its thoughtfully organized collection brings together historical fiction, illustrated classics, and traditional bindings for readers who appreciate books with character.",
  },
  {
    id: "quill",
    name: "Atlas & Quill Books",
    location: "London, United Kingdom",
    country: "United Kingdom",
    specialty: "Maps & Manuscripts",
    image: `${imageRoot}/shops/shop-2.png`,
    fallback: onlineImages.library,
    featured: true,
    description:
      "A specialist bookseller concept celebrating historical maps, manuscript traditions, travel literature, and scholarly discoveries. Its collection is designed for collectors interested in the relationship between books, geography, and history.",
  },
  {
    id: "botanical",
    name: "Botanical & Natural Books",
    location: "Toronto, Canada",
    country: "Canada",
    specialty: "Natural History",
    image: `${imageRoot}/shops/shop-3.png`,
    fallback: onlineImages.shelf,
    featured: true,
    description:
      "A carefully presented bookstore concept featuring botanical illustrations, wildlife studies, historic field guides, and natural science publications. An inviting destination for enthusiasts of the natural world and beautifully illustrated books.",
  },
  {
    id: "classics",
    name: "The Literary Archive",
    location: "Paris, France",
    country: "France",
    specialty: "Literature & Classics",
    image: `${imageRoot}/shops/shop-4.png`,
    fallback: onlineImages.reading,
    featured: false,
    description:
      "A literary bookshop concept dedicated to classic novels, poetry, and enduring works of fiction. The collection reflects a love of important writers, timeless storytelling, and elegant editions that deserve a place on the bookshelf.",
  },
  {
    id: "folio",
    name: "The Fine Folio Gallery",
    location: "Melbourne, Australia",
    country: "Australia",
    specialty: "Art & Illustration",
    image: `${imageRoot}/shops/shop-5.png`,
    fallback: onlineImages.books,
    featured: false,
    description:
      "A specialist gallery concept focusing on illustrated books, fine printing, visual culture, and decorative publishing. Its curated selections introduce collectors to the artistic qualities of books as beautiful objects.",
  },
  {
    id: "scholar",
    name: "The Scholar's Cabinet",
    location: "Edinburgh, United Kingdom",
    country: "United Kingdom",
    specialty: "History & Scholarship",
    image: `${imageRoot}/shops/shop-6.png`,
    fallback: onlineImages.library,
    featured: false,
    description:
      "An academic bookseller concept offering historical scholarship, philosophy, classical studies, and specialist reference works. Designed for collectors and researchers interested in preserving intellectual traditions through print.",
  },
];

// ===========================================
// DEMO BOOK COLLECTION
// ===========================================

const books = [
  {
    id: 1,
    title: "The Atlas of Forgotten Kingdoms",
    author: "Eleanor Ashcroft",
    category: "History",
    price: 89,
    year: "1924",
    sellerId: "quill",
    image: `${imageRoot}/books/book-1.png`,
    fallback: onlineImages.books,
    description:
      "An illustrated historical volume exploring ancient civilizations, geographical discoveries, and the cultural legacies of forgotten kingdoms. A distinctive addition to a history-focused collection.",
  },
  {
    id: 2,
    title: "Botanical Wonders of the World",
    author: "Clara Whitmore",
    category: "Natural History",
    price: 65,
    year: "1912",
    sellerId: "botanical",
    image: `${imageRoot}/books/book-2.png`,
    fallback: onlineImages.reading,
    description:
      "A richly illustrated botanical study featuring traditional plant observations, intricate natural forms, and the enduring beauty of scientific illustration.",
  },
  {
    id: 3,
    title: "The Poet's Treasury",
    author: "Edmund Fairchild",
    category: "Literature",
    price: 48,
    year: "1898",
    sellerId: "classics",
    image: `${imageRoot}/books/book-3.png`,
    fallback: onlineImages.shelf,
    description:
      "An elegant collection of classical poetry exploring love, memory, nature, and the human experience through carefully selected verse.",
  },
  {
    id: 4,
    title: "The Golden Age of Exploration",
    author: "Arthur Pembroke",
    category: "History",
    price: 120,
    year: "1907",
    sellerId: "heritage",
    image: `${imageRoot}/books/book-4.png`,
    fallback: onlineImages.library,
    description:
      "A study of historic voyages, early navigation, and the remarkable journeys that helped shape humanity's understanding of the world.",
  },
  {
    id: 5,
    title: "Architecture Through the Ages",
    author: "Frederick Bellamy",
    category: "Fine Arts",
    price: 95,
    year: "1931",
    sellerId: "folio",
    image: `${imageRoot}/books/book-5.png`,
    fallback: onlineImages.books,
    description:
      "A visual introduction to architectural traditions, including classical buildings, decorative structures, and the development of historical design.",
  },
  {
    id: 6,
    title: "Celestial Observations",
    author: "Henry Alderton",
    category: "Science",
    price: 72,
    year: "1920",
    sellerId: "scholar",
    image: `${imageRoot}/books/book-6.png`,
    fallback: onlineImages.reading,
    description:
      "An atmospheric introduction to astronomy and the study of the night sky, presenting early scientific observations and celestial discoveries.",
  },
  {
    id: 7,
    title: "Legends of the Ancient World",
    author: "Margaret Ellison",
    category: "Literature",
    price: 55,
    year: "1903",
    sellerId: "classics",
    image: `${imageRoot}/books/book-7.png`,
    fallback: onlineImages.shelf,
    description:
      "A collection of enduring myths, heroic adventures, and legendary narratives drawn from the storytelling traditions of ancient civilizations.",
  },
  {
    id: 8,
    title: "Wildlife of the Northern Lands",
    author: "Charles W. Bennett",
    category: "Natural History",
    price: 78,
    year: "1928",
    sellerId: "botanical",
    image: `${imageRoot}/books/book-8.png`,
    fallback: onlineImages.library,
    description:
      "An illustrated exploration of northern landscapes, wildlife habitats, and the creatures documented in traditional natural history studies.",
  },
  {
    id: 9,
    title: "The Art of Fine Printing",
    author: "Walter H. Sterling",
    category: "Fine Arts",
    price: 110,
    year: "1915",
    sellerId: "folio",
    image: `${imageRoot}/books/book-9.png`,
    fallback: onlineImages.books,
    description:
      "A celebration of typography, craftsmanship, traditional printing techniques, and the artistic development of finely produced books.",
  },
  {
    id: 10,
    title: "Medieval Manuscripts",
    author: "Edward Ravenscroft",
    category: "History",
    price: 140,
    year: "1934",
    sellerId: "quill",
    image: `${imageRoot}/books/book-10.png`,
    fallback: onlineImages.reading,
    description:
      "An illustrated survey of medieval manuscript traditions, decorative lettering, illuminated pages, and the preservation of written knowledge.",
  },
  {
    id: 11,
    title: "Philosophy of the Classical World",
    author: "Richard L. Arden",
    category: "Philosophy",
    price: 68,
    year: "1918",
    sellerId: "scholar",
    image: `${imageRoot}/books/book-11.png`,
    fallback: onlineImages.shelf,
    description:
      "An accessible scholarly overview of classical philosophical traditions and the thinkers whose ideas influenced intellectual history.",
  },
  {
    id: 12,
    title: "The Illustrated Book of Maps",
    author: "Thomas C. Worthington",
    category: "Maps & Atlases",
    price: 125,
    year: "1926",
    sellerId: "heritage",
    image: `${imageRoot}/books/book-12.png`,
    fallback: onlineImages.library,
    description:
      "A visual exploration of antique cartography, mapmaking traditions, and the artistic representation of places across historical periods.",
  },
];

const countries = [
  "All Countries",
  ...new Set(sellers.map((seller) => seller.country)),
];

const specialties = [
  "All Specialties",
  ...new Set(sellers.map((seller) => seller.specialty)),
];

const formatPrice = (value) => `$${value.toFixed(2)}`;

// ===========================================
// IMAGE COMPONENT
// ===========================================

function StoreImage({ src, fallback, alt, className = "" }) {
  return (
    <img
      key={src}
      src={src}
      alt={alt}
      loading="lazy"
      onError={(event) => {
        if (event.currentTarget.src !== fallback) {
          event.currentTarget.onerror = null;
          event.currentTarget.src = fallback;
        }
      }}
      className={`w-full h-full object-cover ${className}`}
    />
  );
}

// ===========================================
// SELLER CARD
// ===========================================

function SellerCard({ seller, onView }) {
  return (
    <article className="bg-[#fffdfa] border border-[#ded2c2] flex flex-col overflow-hidden">
      <div className="h-56 relative overflow-hidden bg-[#e8dfd1]">
        <StoreImage
          src={seller.image}
          fallback={seller.fallback}
          alt={`${seller.name} bookstore`}
        />

        {seller.featured && (
          <span className="absolute left-4 top-4 bg-[#8c2d19] text-white px-3 py-2 text-[10px] font-bold uppercase tracking-wider font-sans">
            Featured Seller
          </span>
        )}
      </div>

      <div className="p-6 flex flex-col flex-1">
        <span className="text-xs font-sans font-bold uppercase tracking-wider text-[#8c2d19]">
          {seller.specialty}
        </span>

        <h3 className="text-2xl font-bold mt-3 leading-tight">
          {seller.name}
        </h3>

        <p className="flex items-center gap-2 text-sm text-[#7a6452] mt-3">
          <MapPin size={16} className="text-[#8c2d19] shrink-0" />
          {seller.location}
        </p>

        <p className="text-sm leading-7 text-[#6b584a] mt-5 flex-1">
          {seller.description}
        </p>

        <button
          onClick={() => onView(seller)}
          className="mt-6 pt-4 border-t border-[#e3d8c9] flex justify-between items-center gap-3 text-sm font-bold text-[#8c2d19] text-left"
        >
          Explore Bookseller
          <ArrowUpRight size={18} />
        </button>
      </div>
    </article>
  );
}

// ===========================================
// BOOK CARD
// ===========================================

function BookCard({ book, onView }) {
  const seller = sellers.find((s) => s.id === book.sellerId);

  return (
    <article className="bg-[#fffdfa] border border-[#e0d5c7] flex flex-col">
      <div className="relative h-64 sm:h-72 p-5 bg-[#ece5da]">
        <div className="w-full h-full overflow-hidden bg-[#ded2c1]">
          <StoreImage
            src={book.image}
            fallback={book.fallback}
            alt={`Illustrative image for ${book.title}`}
          />
        </div>

        <span className="absolute left-7 top-7 bg-[#241a15] text-[#f4eadb] text-[10px] uppercase tracking-wider font-sans px-3 py-1.5">
          {book.category}
        </span>
      </div>

      <div className="p-5 flex flex-col flex-1">
        <p className="text-[11px] uppercase tracking-wider font-sans text-[#8c2d19] font-bold">
          {book.year} Edition
        </p>

        <h3 className="text-xl font-bold mt-3 leading-snug min-h-[52px]">
          {book.title}
        </h3>

        <p className="text-sm text-[#7a6452] mt-2">
          By {book.author}
        </p>

        <p className="text-sm leading-6 text-[#6b584a] mt-4 line-clamp-3 flex-1">
          {book.description}
        </p>

        <div className="border-t border-[#e3d8ca] mt-5 pt-4">
          <p className="text-xs text-[#7a6452] mb-3">
            Bookseller: {seller?.name}
          </p>

          <div className="flex items-center justify-between gap-3">
            <span className="text-xl font-bold text-[#8c2d19]">
              {formatPrice(book.price)}
            </span>

            <button
              onClick={() => onView(book)}
              className="bg-[#241a15] text-white px-4 py-3 text-xs font-semibold flex items-center gap-2 hover:bg-[#8c2d19]"
            >
              View Details
              <ArrowUpRight size={15} />
            </button>
          </div>
        </div>
      </div>
    </article>
  );
}

// ===========================================
// MAIN PAGE
// ===========================================

export default function Bookstores() {
  const [search, setSearch] = useState("");
  const [country, setCountry] = useState("All Countries");
  const [specialty, setSpecialty] = useState("All Specialties");
  const [selectedSeller, setSelectedSeller] = useState(null);
  const [selectedBook, setSelectedBook] = useState(null);
  const [bookCategory, setBookCategory] = useState("All Books");
  const [bookSearch, setBookSearch] = useState("");
  const [showAllBooks, setShowAllBooks] = useState(false);
  const [openFaq, setOpenFaq] = useState(0);

  const filteredSellers = useMemo(() => {
    const query = search.toLowerCase().trim();

    return sellers.filter((seller) => {
      const text = `${seller.name} ${seller.location} ${seller.specialty}`.toLowerCase();

      return (
        (!query || text.includes(query)) &&
        (country === "All Countries" || seller.country === country) &&
        (specialty === "All Specialties" ||
          seller.specialty === specialty)
      );
    });
  }, [search, country, specialty]);

  const bookCategories = [
    "All Books",
    ...new Set(books.map((book) => book.category)),
  ];

  const filteredBooks = useMemo(() => {
    const query = bookSearch.toLowerCase().trim();

    return books.filter((book) => {
      const text =
        `${book.title} ${book.author} ${book.category}`.toLowerCase();

      return (
        (bookCategory === "All Books" ||
          book.category === bookCategory) &&
        (!query || text.includes(query))
      );
    });
  }, [bookCategory, bookSearch]);

  const visibleBooks = showAllBooks
    ? filteredBooks
    : filteredBooks.slice(0, 8);

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView();
  };

  const viewCountry = (value) => {
    setCountry(value);
    scrollTo("bookseller-directory");
  };

  const faqItems = [
    {
      question: "What is an independent bookseller?",
      answer:
        "An independent bookseller is an independently operated bookshop or specialist book dealer. These businesses may focus on general reading, rare editions, academic publications, or particular collecting interests.",
    },
    {
      question: "Can I search by country or specialty?",
      answer:
        "Yes. The bookseller directory includes country and specialty filters, while the book collection supports searching and category browsing.",
    },
    {
      question: "Are the books available for purchase?",
      answer:
        "The current books and prices are demonstration listings. Verified product records, inventory, and checkout integration are required before accepting orders.",
    },
    {
      question: "How can a bookstore join BLUE BOOK?",
      answer:
        "A bookseller onboarding form and registration requirements can be added when the store's membership process and policies are finalized.",
    },
  ];

  return (
    <div className="min-h-screen bg-[#fbf8f2] text-[#241a15]">

      {/* HERO - KEEP EXISTING BACKGROUND */}

      <section
        className="relative min-h-[600px] bg-cover bg-center flex items-center"
        style={{
          backgroundImage: `linear-gradient(90deg,rgba(25,17,12,.94),rgba(25,17,12,.65),rgba(25,17,12,.25)),url('${onlineImages.bookstore}')`,
        }}
      >
        <div className="max-w-7xl mx-auto w-full px-5 sm:px-8 py-20">
          <div className="max-w-3xl text-[#f8f0e6]">
            <div className="flex items-center gap-3 mb-7">
              <span className="w-10 h-px bg-[#c29b38]" />
              <span className="text-xs uppercase tracking-[0.2em] text-[#e0bc7d] font-sans font-bold">
                BLUE BOOK BOOKSELLER DIRECTORY
              </span>
            </div>

            <h1
              className="text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.08]"
              style={{ fontFamily: "Georgia, serif" }}
            >
              Where Great Books
              <br />
              Find Their
              <span className="italic text-[#e0bc7d]"> Readers.</span>
            </h1>

            <p className="text-lg text-[#e6d9c9] leading-8 mt-7 max-w-2xl">
              Discover independent bookstores, specialist dealers,
              and collections shaped by a passion for literature,
              history, craftsmanship, and the written word.
            </p>

            <div className="flex flex-wrap gap-4 mt-9">
              <button
                onClick={() => scrollTo("bookseller-directory")}
                className="bg-[#c29b38] text-[#241a15] px-7 py-4 font-bold text-sm flex items-center gap-3"
              >
                Find a Bookstore
                <ArrowRight size={17} />
              </button>

              <button
                onClick={() => scrollTo("books-collection")}
                className="border border-[#d4b985] px-7 py-4 font-semibold text-sm flex items-center gap-3"
              >
                Explore Books
                <BookOpen size={17} />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* INTRO / FEATURED EDITORIAL */}

      <section className="max-w-7xl mx-auto px-5 sm:px-8 py-16 md:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-7">
            <p className="text-xs font-sans font-bold tracking-[0.2em] uppercase text-[#8c2d19] mb-5">
              The Independent Bookselling Tradition
            </p>

            <h2 className="text-3xl md:text-5xl font-bold leading-tight">
              More Than a Bookshop.
              <br />
              <span className="italic text-[#8c2d19]">
                A Place of Discovery.
              </span>
            </h2>

            <p className="text-[#6b584a] leading-8 mt-6">
              Independent bookstores offer a distinctive experience.
              They bring together knowledgeable booksellers,
              carefully selected titles, and the pleasure of
              discovering something unexpected.
            </p>

            <p className="text-[#6b584a] leading-8 mt-4">
              Whether searching for an early literary edition,
              an illustrated natural history volume, or a classic
              work of philosophy, collectors value bookshops
              that understand the stories behind their books.
            </p>
          </div>

          <div className="lg:col-span-5">
            <div className="relative h-[340px] bg-[#e6dac8]">
              <StoreImage
                src={`${imageRoot}/shops/editorial.png`}
                fallback={onlineImages.library}
                alt="Traditional library bookshelves"
              />

              <div className="absolute bottom-0 left-0 right-0 bg-[#241a15]/95 p-6 text-[#f4eadb]">
                <p className="text-xs uppercase tracking-[0.2em] text-[#c29b38] font-sans mb-2">
                  Curated Discoveries
                </p>
                <p className="text-xl font-bold">
                  Every Shelf Has a Story
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* BOOKSELLER DIRECTORY */}

      <section
        id="bookseller-directory"
        className="bg-[#f4eee2] border-y border-[#ded2c2] py-16 md:py-20"
      >
        <div className="max-w-7xl mx-auto px-5 sm:px-8">
          <div className="flex flex-col md:flex-row md:justify-between md:items-end gap-5 mb-9">
            <div>
              <p className="text-[#8c2d19] text-xs uppercase tracking-[0.2em] font-sans font-bold mb-4">
                Discover the Booksellers
              </p>
              <h2 className="text-3xl md:text-5xl font-bold">
                Independent Bookstore Directory
              </h2>
              <p className="text-[#6b584a] mt-4 leading-7 max-w-2xl">
                Browse specialist bookstore concepts and
                discover the different literary interests
                represented within this sample directory.
              </p>
            </div>
            <span className="text-sm text-[#7a6452]">
              {filteredSellers.length} sample booksellers
            </span>
          </div>

          {/* SEARCH FILTERS */}

          <div className="bg-[#fffdfa] border border-[#d6c7b2] p-5 sm:p-7 mb-9">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
              <div className="md:col-span-5">
                <label className="block text-sm font-bold mb-2">
                  Bookstore Name or City
                </label>
                <div className="relative">
                  <Search
                    size={17}
                    className="absolute left-4 top-1/2 -translate-y-1/2 text-[#8c2d19]"
                  />
                  <input
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    placeholder="Search independent bookstores..."
                    className="w-full pl-11 pr-4 py-3.5 bg-white border border-[#d6c7b2] outline-none focus:border-[#8c2d19] text-sm"
                  />
                </div>
              </div>

              <div className="md:col-span-3">
                <label className="block text-sm font-bold mb-2">
                  Country
                </label>
                <select
                  value={country}
                  onChange={(e) => setCountry(e.target.value)}
                  className="w-full px-3 py-3.5 border border-[#d6c7b2] bg-white text-sm"
                >
                  {countries.map((value) => (
                    <option key={value}>{value}</option>
                  ))}
                </select>
              </div>

              <div className="md:col-span-4">
                <label className="block text-sm font-bold mb-2">
                  Specialization
                </label>
                <select
                  value={specialty}
                  onChange={(e) => setSpecialty(e.target.value)}
                  className="w-full px-3 py-3.5 border border-[#d6c7b2] bg-white text-sm"
                >
                  {specialties.map((value) => (
                    <option key={value}>{value}</option>
                  ))}
                </select>
              </div>
            </div>

            <div className="flex justify-end mt-4">
              <button
                onClick={() => {
                  setSearch("");
                  setCountry("All Countries");
                  setSpecialty("All Specialties");
                }}
                className="text-sm font-bold text-[#8c2d19]"
              >
                Clear Filters
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
            {filteredSellers.map((seller) => (
              <SellerCard
                key={seller.id}
                seller={seller}
                onView={setSelectedSeller}
              />
            ))}
          </div>

          {filteredSellers.length === 0 && (
            <div className="py-14 text-center bg-[#fffdfa] border border-[#ded2c2]">
              <Search size={30} className="mx-auto text-[#8c2d19]" />
              <h3 className="text-2xl font-bold mt-4">
                No Booksellers Found
              </h3>
              <p className="mt-3 text-[#7a6452]">
                Try another location or specialization.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* BOOK COLLECTION */}

      <section
        id="books-collection"
        className="max-w-7xl mx-auto px-5 sm:px-8 py-16 md:py-24"
      >
        <div className="text-center max-w-3xl mx-auto mb-11">
          <BookOpen size={29} className="mx-auto text-[#8c2d19] mb-5" />
          <p className="text-xs uppercase tracking-[0.2em] text-[#8c2d19] font-sans font-bold mb-4">
            Explore the Books
          </p>

          <h2 className="text-3xl md:text-5xl font-bold">
            Books Worth Discovering
          </h2>

          <p className="text-[#6b584a] leading-8 mt-5">
            From historic literature and illustrated natural
            history to academic studies and remarkable atlases,
            explore a sample of the kinds of titles an
            independent bookstore marketplace could feature.
          </p>
        </div>

        {/* BOOK SEARCH */}

        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-5 mb-8">
          <div className="flex gap-2 flex-wrap">
            {bookCategories.map((item) => (
              <button
                key={item}
                onClick={() => {
                  setBookCategory(item);
                  setShowAllBooks(false);
                }}
                className={`px-4 py-2.5 text-xs font-semibold border ${
                  bookCategory === item
                    ? "bg-[#241a15] text-white border-[#241a15]"
                    : "bg-[#fffdfa] border-[#d6c7b2] text-[#58483b]"
                }`}
              >
                {item}
              </button>
            ))}
          </div>

          <div className="relative w-full lg:w-64 shrink-0">
            <Search
              size={17}
              className="absolute left-3 top-1/2 -translate-y-1/2 text-[#8c2d19]"
            />
            <input
              value={bookSearch}
              onChange={(e) => {
                setBookSearch(e.target.value);
                setShowAllBooks(false);
              }}
              placeholder="Search books..."
              className="w-full border border-[#d6c7b2] bg-white py-3 pl-10 pr-3 text-sm outline-none"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {visibleBooks.map((book) => (
            <BookCard
              key={book.id}
              book={book}
              onView={setSelectedBook}
            />
          ))}
        </div>

        {filteredBooks.length === 0 && (
          <p className="text-center text-[#7a6452] py-12">
            No books match your search.
          </p>
        )}

        {filteredBooks.length > 8 && (
          <div className="text-center mt-10">
            <button
              onClick={() => setShowAllBooks(!showAllBooks)}
              className="bg-[#8c2d19] text-white px-8 py-4 text-sm font-semibold inline-flex items-center gap-3"
            >
              {showAllBooks ? "Show Fewer Books" : "Explore More Books"}
              <ArrowRight size={17} />
            </button>
          </div>
        )}
      </section>

      {/* FEATURED BOOKSTORE SPOTLIGHT */}

      <section className="bg-[#241a15] text-[#f7eddf] py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="h-[380px] md:h-[450px] bg-[#382b22]">
            <StoreImage
              src={`${imageRoot}/shops/spotlight.png`}
              fallback={onlineImages.bookstore}
              alt="Beautiful independent bookstore interior"
            />
          </div>

          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-[#c29b38] font-sans font-bold mb-5">
              Bookseller Spotlight
            </p>
            <h2 className="text-3xl md:text-5xl font-bold leading-tight">
              Celebrating the Spirit of Independent Bookselling
            </h2>

            <p className="text-[#d7c6b4] leading-8 mt-7">
              The most memorable bookshops invite readers to
              slow down, explore the shelves, and discover titles
              that may never appear on a conventional shopping list.
              From knowledgeable recommendations to carefully
              assembled collections, independent bookselling
              remains an important part of literary culture.
            </p>

            <p className="text-[#d7c6b4] leading-8 mt-4">
              BLUE BOOK's directory concept brings attention
              to these specialist interests and creates a
              dedicated space for collectors to discover
              bookstores and the books they celebrate.
            </p>

            <button
              onClick={() => scrollTo("bookseller-directory")}
              className="mt-8 bg-[#c29b38] text-[#241a15] px-7 py-4 text-sm font-bold inline-flex items-center gap-3"
            >
              Discover Booksellers
              <ArrowRight size={17} />
            </button>
          </div>
        </div>
      </section>

      {/* BROWSE BY COUNTRY */}

      <section className="max-w-7xl mx-auto px-5 sm:px-8 py-16 md:py-20">
        <p className="text-[#8c2d19] text-xs uppercase tracking-[0.2em] font-sans font-bold mb-4">
          A World of Bookshops
        </p>
        <h2 className="text-3xl md:text-5xl font-bold">
          Browse Booksellers by Country
        </h2>
        <p className="mt-5 text-[#6b584a] leading-8 max-w-2xl">
          Explore independent bookseller listings across
          different countries and discover the diversity
          of specialist bookselling traditions.
        </p>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 mt-10">
          {countries.slice(1).map((value) => (
            <button
              key={value}
              onClick={() => viewCountry(value)}
              className="bg-[#fffdfa] p-5 border border-[#ded2c2] text-left min-h-[140px] flex flex-col justify-between"
            >
              <div className="flex justify-between items-center">
                <Globe2 size={23} className="text-[#8c2d19]" />
                <ArrowUpRight size={16} className="text-[#8c2d19]" />
              </div>
              <div>
                <h3 className="font-bold">{value}</h3>
                <p className="text-xs text-[#7a6452] mt-1">
                  {sellers.filter((s) => s.country === value).length} sample listings
                </p>
              </div>
            </button>
          ))}
        </div>
      </section>

      {/* WHY INDEPENDENTS MATTER */}

      <section className="bg-[#f4eee2] border-y border-[#ded2c2] py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-5 sm:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <p className="text-xs text-[#8c2d19] uppercase tracking-[0.2em] font-sans font-bold mb-4">
              The Independent Advantage
            </p>
            <h2 className="text-3xl md:text-4xl font-bold">
              Why Independent Booksellers Matter
            </h2>
            <p className="text-[#6b584a] mt-5 leading-8">
              Independent bookstores support the cultural
              value of books through specialist knowledge,
              carefully selected collections, and a more
              personal approach to reading and collecting.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {[
              {
                icon: BookOpen,
                title: "Curated Literary Collections",
                description:
                  "Independent booksellers often develop expertise in particular authors, genres, historical periods, or collectible editions, helping readers find books that closely match their interests.",
              },
              {
                icon: ShieldCheck,
                title: "Knowledge & Book Heritage",
                description:
                  "Specialist bookshops contribute to the appreciation of printing history, bindings, provenance, and the preservation of older publications.",
              },
              {
                icon: Heart,
                title: "Personal Connections",
                description:
                  "Bookshops create opportunities for meaningful conversations between collectors, booksellers, researchers, and people who share a genuine love of reading.",
              },
            ].map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.title}
                  className="bg-[#fffdfa] border border-[#ded2c2] p-8"
                >
                  <div className="w-12 h-12 bg-[#f0e3d3] flex items-center justify-center mb-6">
                    <Icon size={24} className="text-[#8c2d19]" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4">
                    {item.title}
                  </h3>
                  <p className="text-[#6b584a] text-sm leading-7">
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* SELLER JOIN SECTION */}

      <section className="max-w-7xl mx-auto px-5 sm:px-8 py-16 md:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 border border-[#d6c7b2] bg-[#fffdfa]">
          <div className="p-8 sm:p-12 lg:p-14">
            <p className="text-xs text-[#8c2d19] uppercase tracking-[0.2em] font-sans font-bold mb-5">
              For Professional Booksellers
            </p>
            <h2 className="text-3xl md:text-5xl font-bold leading-tight">
              Bring Your Bookstore to a Wider Audience
            </h2>
            <p className="text-[#6b584a] leading-8 mt-6">
              An independent bookseller profile can introduce
              your store, areas of specialization, and literary
              collections to readers searching for distinctive
              books and knowledgeable dealers.
            </p>

            <div className="space-y-4 mt-7">
              {[
                "Introduce your bookstore and its history",
                "Highlight specialist subjects and collections",
                "Present your books to interested collectors",
                "Share location and business information",
              ].map((item) => (
                <div className="flex gap-3 items-start text-sm" key={item}>
                  <CheckCircle2
                    size={18}
                    className="text-[#8c2d19] shrink-0"
                  />
                  {item}
                </div>
              ))}
            </div>

            <div className="mt-9 inline-flex bg-[#382b22] text-white px-6 py-4 text-sm font-semibold">
              Bookseller Registration Coming Soon
            </div>
          </div>

          <div className="min-h-[340px] bg-[#e7dac6]">
            <StoreImage
              src={`${imageRoot}/shops/join-booksellers.png`}
              fallback={onlineImages.shelf}
              alt="Shelves of collectible books"
            />
          </div>
        </div>
      </section>

      {/* FAQ */}

      <section className="bg-[#f4eee2] border-t border-[#ded2c2] py-16">
        <div className="max-w-4xl mx-auto px-5 sm:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-10">
            Frequently Asked Questions
          </h2>

          {faqItems.map((faq, index) => (
            <div key={faq.question} className="border-b border-[#d3c4b2]">
              <button
                className="w-full py-6 flex justify-between items-center text-left gap-5"
                onClick={() => setOpenFaq(openFaq === index ? -1 : index)}
                aria-expanded={openFaq === index}
              >
                <span className="font-bold text-lg">{faq.question}</span>
                <ChevronDown
                  size={18}
                  className={`shrink-0 text-[#8c2d19] ${
                    openFaq === index ? "rotate-180" : ""
                  }`}
                />
              </button>

              {openFaq === index && (
                <p className="pb-6 text-[#6b584a] leading-8 text-sm">
                  {faq.answer}
                </p>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* FINAL CTA */}

      <section className="py-16 md:py-20 text-center px-5">
        <LibraryBig size={34} className="mx-auto text-[#8c2d19] mb-6" />
        <h2 className="text-3xl md:text-5xl font-bold">
          Your Next Literary Discovery Awaits.
        </h2>
        <p className="mt-5 text-[#6b584a] leading-8 max-w-2xl mx-auto">
          Explore independent booksellers, discover
          interesting books, and appreciate the tradition
          of collecting works worth keeping.
        </p>
        <button
          onClick={() => scrollTo("books-collection")}
          className="mt-8 bg-[#8c2d19] text-white px-8 py-4 font-semibold text-sm inline-flex items-center gap-3"
        >
          Explore the Book Collection
          <ArrowRight size={17} />
        </button>
      </section>

      {/* SELLER DETAIL MODAL */}

      {selectedSeller && (
        <div
          className="fixed inset-0 z-[100] bg-black/70 flex items-center justify-center p-4"
          onMouseDown={(e) => {
            if (e.target === e.currentTarget) setSelectedSeller(null);
          }}
        >
          <div
            role="dialog"
            aria-modal="true"
            aria-label={selectedSeller.name}
            className="bg-[#fbf8f2] w-full max-w-2xl max-h-[90vh] overflow-y-auto relative"
          >
            <button
              onClick={() => setSelectedSeller(null)}
              className="absolute top-4 right-4 bg-white p-2 z-10"
              aria-label="Close"
            >
              <X size={20} />
            </button>

            <div className="h-64">
              <StoreImage
                src={selectedSeller.image}
                fallback={selectedSeller.fallback}
                alt={selectedSeller.name}
              />
            </div>

            <div className="p-8">
              <p className="text-xs uppercase tracking-wider text-[#8c2d19] font-bold">
                {selectedSeller.specialty}
              </p>
              <h2 className="text-3xl font-bold mt-3">
                {selectedSeller.name}
              </h2>
              <p className="text-sm text-[#7a6452] mt-3">
                {selectedSeller.location}
              </p>
              <p className="text-[#6b584a] leading-8 mt-6">
                {selectedSeller.description}
              </p>

              <div className="border-t border-[#d6c7b2] mt-7 pt-6">
                <h3 className="text-lg font-bold mb-4">
                  Books in This Sample Collection
                </h3>

                {books
                  .filter((book) => book.sellerId === selectedSeller.id)
                  .map((book) => (
                    <button
                      key={book.id}
                      onClick={() => {
                        setSelectedSeller(null);
                        setSelectedBook(book);
                      }}
                      className="w-full flex justify-between items-center gap-3 text-left py-3 border-b border-[#e3d8ca] text-sm"
                    >
                      <span>{book.title}</span>
                      <span className="font-bold text-[#8c2d19]">
                        {formatPrice(book.price)}
                      </span>
                    </button>
                  ))}
              </div>

              <p className="text-xs text-[#7a6452] mt-5">
                Demonstration profile, not a verified business listing.
              </p>
            </div>
          </div>
        </div>
      )}

      {/* BOOK DETAIL MODAL */}

      {selectedBook && (
        <div
          className="fixed inset-0 z-[100] bg-black/70 flex items-center justify-center p-4"
          onMouseDown={(e) => {
            if (e.target === e.currentTarget) setSelectedBook(null);
          }}
        >
          <div
            role="dialog"
            aria-modal="true"
            aria-label={selectedBook.title}
            className="bg-[#fbf8f2] w-full max-w-4xl max-h-[90vh] overflow-y-auto relative"
          >
            <button
              onClick={() => setSelectedBook(null)}
              className="absolute top-4 right-4 bg-white p-2 z-10"
              aria-label="Close"
            >
              <X size={20} />
            </button>

            <div className="grid grid-cols-1 md:grid-cols-2">
              <div className="h-[320px] md:h-full md:min-h-[440px] bg-[#e8dfd1]">
                <StoreImage
                  src={selectedBook.image}
                  fallback={selectedBook.fallback}
                  alt={selectedBook.title}
                />
              </div>

              <div className="p-8 sm:p-10">
                <span className="text-[#8c2d19] uppercase tracking-wider text-xs font-bold">
                  {selectedBook.category}
                </span>

                <h2 className="text-3xl font-bold mt-4">
                  {selectedBook.title}
                </h2>

                <p className="text-[#7a6452] mt-3">
                  By {selectedBook.author}
                </p>

                <p className="text-sm text-[#7a6452] mt-2">
                  Illustrative edition: {selectedBook.year}
                </p>

                <p className="text-[#6b584a] leading-8 mt-6">
                  {selectedBook.description}
                </p>

                <p className="mt-7 text-3xl font-bold text-[#8c2d19]">
                  {formatPrice(selectedBook.price)}
                </p>

                <div className="mt-6 p-4 bg-[#f0e5d7] text-sm leading-6 text-[#6b584a]">
                  Demo book listing. Real availability,
                  product photographs and checkout will
                  require verified inventory integration.
                </div>

                <button
                  onClick={() => setSelectedBook(null)}
                  className="mt-6 bg-[#241a15] text-white px-7 py-3 text-sm font-semibold"
                >
                  Close Details
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}
