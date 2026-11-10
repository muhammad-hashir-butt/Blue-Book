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
    specialty: "Rare and Antiquarian",
    image: `${imageRoot}/shops/shop-1.png`,
    fallback: onlineImages.bookstore,
    featured: true,
    description:
      "An independent bookshop concept devoted to rare literature, early printed works, and collectible editions. Its thoughtfully organized collection brings together historical fiction, illustrated classics, and traditional bindings for readers who appreciate books with character.",
  },
  {
    id: "quill",
    name: "Atlas and Quill Books",
    location: "London, United Kingdom",
    country: "United Kingdom",
    specialty: "Maps and Manuscripts",
    image: `${imageRoot}/shops/shop-2.png`,
    fallback: onlineImages.library,
    featured: true,
    description:
      "A specialist bookseller concept celebrating historical maps, manuscript traditions, travel literature, and scholarly discoveries. Its collection is designed for collectors interested in the relationship between books, geography, and history.",
  },
  {
    id: "botanical",
    name: "Botanical and Natural Books",
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
    specialty: "Literature and Classics",
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
    specialty: "Art and Illustration",
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
    specialty: "History and Scholarship",
    image: `${imageRoot}/shops/shop-6.png`,
    fallback: onlineImages.library,
    featured: false,
    description:
      "An academic bookseller concept offering historical scholarship, philosophy, classical studies, and specialist reference works. Designed for collectors and researchers interested in preserving intellectual traditions through print.",
  },
];

const books = [
  {
    id: 1,
    title: "The Atlas of Forgotten Kingdoms",
    author: "Eleanor Ashcroft",
    category: "History",
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
    category: "Maps and Atlases",
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
      <div className="h-52 relative overflow-hidden bg-[#e8dfd1]">
        <StoreImage
          src={seller.image}
          fallback={seller.fallback}
          alt={`${seller.name} bookstore`}
        />

        {seller.featured && (
          <span className="absolute left-4 top-4 bg-[#8c2d19] text-white px-2.5 py-1.5 text-[10px] font-bold uppercase tracking-wider font-sans">
            Featured Seller
          </span>
        )}
      </div>

      <div className="p-6 flex flex-col flex-1">
        <span className="text-[11px] font-sans font-bold uppercase tracking-[0.18em] text-[#8c2d19]">
          {seller.specialty}
        </span>

        <h3 className="text-xl sm:text-2xl font-bold font-serif-heading text-[#241a15] mt-2.5 leading-snug">
          {seller.name}
        </h3>

        <p className="flex items-center gap-2 text-xs font-serif-body text-[#7a6452] mt-2.5">
          <MapPin size={15} className="text-[#8c2d19] shrink-0" />
          {seller.location}
        </p>

        <p className="text-xs sm:text-sm leading-relaxed font-serif-body text-[#6b584a] mt-4 flex-1">
          {seller.description}
        </p>

        <button
          onClick={() => onView(seller)}
          className="mt-6 pt-4 border-t border-[#e3d8c9] flex justify-between items-center gap-3 text-xs font-bold text-[#8c2d19] text-left uppercase tracking-wider cursor-pointer"
        >
          Explore Bookseller
          <ArrowUpRight size={16} />
        </button>
      </div>
    </article>
  );
}

// ===========================================
// BOOK CARD (PRICES REMOVED, NO HOVER)
// ===========================================
function BookCard({ book, onView }) {
  const seller = sellers.find((s) => s.id === book.sellerId);

  return (
    <article className="bg-[#fffdfa] border border-[#e0d5c7] flex flex-col">
      <div className="relative h-60 sm:h-64 p-4 bg-[#ece5da]">
        <div className="w-full h-full overflow-hidden bg-[#ded2c1]">
          <StoreImage
            src={book.image}
            fallback={book.fallback}
            alt={`Illustrative image for ${book.title}`}
          />
        </div>

        <span className="absolute left-6 top-6 bg-[#241a15] text-[#f4eadb] text-[10px] uppercase tracking-wider font-sans px-2.5 py-1">
          {book.category}
        </span>
      </div>

      <div className="p-5 flex flex-col flex-1">
        <p className="text-[10px] uppercase tracking-[0.2em] font-sans text-[#8c2d19] font-bold">
          {book.year} Edition
        </p>

        <h3 className="text-lg font-bold font-serif-heading text-[#241a15] mt-2 leading-snug min-h-[48px]">
          {book.title}
        </h3>

        <p className="text-xs font-serif-body text-[#7a6452] mt-1.5">
          By {book.author}
        </p>

        <p className="text-xs leading-relaxed font-serif-body text-[#6b584a] mt-3 line-clamp-3 flex-1">
          {book.description}
        </p>

        <div className="border-t border-[#e3d8ca] mt-4 pt-3.5 flex items-center justify-between gap-3">
          <p className="text-[11px] font-serif-body text-[#7a6452]">
            {seller?.name}
          </p>

          <button
            onClick={() => onView(book)}
            className="bg-[#241a15] text-white px-3.5 py-2 text-xs font-semibold flex items-center gap-1.5 cursor-pointer"
          >
            View Details
            <ArrowUpRight size={14} />
          </button>
        </div>
      </div>
    </article>
  );
}

// ===========================================
// MAIN BOOKSTORES COMPONENT
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
        (specialty === "All Specialties" || seller.specialty === specialty)
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
      const text = `${book.title} ${book.author} ${book.category}`.toLowerCase();

      return (
        (bookCategory === "All Books" || book.category === bookCategory) &&
        (!query || text.includes(query))
      );
    });
  }, [bookCategory, bookSearch]);

  const visibleBooks = showAllBooks ? filteredBooks : filteredBooks.slice(0, 8);

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  const viewCountry = (value) => {
    setCountry(value);
    scrollTo("bookseller-directory");
  };

  const faqItems = [
    {
      question: "What is an independent bookseller?",
      answer:
        "An independent bookseller is an independently operated bookshop or specialist book dealer. These businesses focus on general reading, rare editions, academic publications, and particular collecting interests.",
    },
    {
      question: "Can I search by country or specialty?",
      answer:
        "Yes. The bookseller directory includes country and specialty filters, while the book collection supports searching and category browsing.",
    },
    {
      question: "How can I inquire about a book listing?",
      answer:
        "You can click on any book to review its detailed publication notes, historical edition context, and discover the bookstore presenting the volume.",
    },
    {
      question: "How can a bookstore join BLUE BOOK?",
      answer:
        "A bookseller onboarding form and registration requirements can be completed through the partner program to showcase collections to readers worldwide.",
    },
  ];

  return (
    <div className="min-h-screen bg-[#fbf8f2] text-[#241a15] selection:bg-[#8c2d19] selection:text-white">
      {/* Clean Straightforward Typography (No Swashy Italics) */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@600;700;800&family=Lora:wght@400;500;600&display=swap');
        
        .font-serif-heading {
          font-family: 'Playfair Display', Georgia, serif;
          font-style: normal;
          letter-spacing: -0.015em;
        }
        .font-serif-body {
          font-family: 'Lora', Georgia, serif;
          font-style: normal;
        }
      `}</style>

      {/* ===========================================
          HERO SECTION (CLEAN SIMPLE HEADINGS, NO HOVER)
      ============================================ */}
      <section
        className="relative min-h-[500px] bg-cover bg-center flex items-center border-b border-[#e3d7c5]"
        style={{
          backgroundImage: `linear-gradient(90deg,rgba(25,17,12,.94),rgba(25,17,12,.72),rgba(25,17,12,.35)),url('${onlineImages.bookstore}')`,
        }}
      >
        <div className="max-w-7xl mx-auto w-full px-6 sm:px-10 py-16">
          <div className="max-w-3xl text-[#f8f0e6]">
            <div className="flex items-center gap-3 mb-5">
              <span className="w-8 h-px bg-[#c29b38]" />
              <span className="text-[11px] uppercase tracking-[0.25em] text-[#e0bc7d] font-sans font-bold">
                BLUE BOOK BOOKSELLER DIRECTORY
              </span>
            </div>

            <h1 className="text-3xl sm:text-5xl md:text-[52px] font-bold leading-[1.12] font-serif-heading text-white">
              Where Great Books Find Their Readers.
            </h1>

            <p className="text-sm sm:text-base font-serif-body text-[#e6d9c9] leading-7 mt-5 max-w-2xl">
              Discover independent bookstores, specialist dealers,
              and collections shaped by a passion for literature,
              history, craftsmanship, and the written word.
            </p>

            <div className="flex flex-wrap gap-4 mt-8">
              <button
                onClick={() => scrollTo("bookseller-directory")}
                className="bg-[#c29b38] text-[#241a15] px-6 py-3.5 font-bold text-xs uppercase tracking-wider flex items-center gap-2.5 cursor-pointer"
              >
                Find a Bookstore
                <ArrowRight size={16} />
              </button>

              <button
                onClick={() => scrollTo("books-collection")}
                className="border border-[#d4b985] text-white px-6 py-3.5 font-semibold text-xs uppercase tracking-wider flex items-center gap-2.5 cursor-pointer"
              >
                Explore Books
                <BookOpen size={16} />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ===========================================
          INTRO / EDITORIAL DISCOVERY (SIMPLE HEADING)
      ============================================ */}
      <section className="max-w-7xl mx-auto px-6 sm:px-10 py-16 md:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-7">
            <p className="text-[11px] font-sans font-bold tracking-[0.2em] uppercase text-[#8c2d19] mb-3">
              The Independent Bookselling Tradition
            </p>

            {/* Straight clean title, no italic weirdness */}
            <h2 className="text-2xl sm:text-3xl md:text-[36px] font-bold leading-snug font-serif-heading text-[#241a15]">
              More Than a Bookshop.
              <br />
              <span className="text-[#8c2d19]">A Place of Discovery.</span>
            </h2>

            <p className="font-serif-body text-sm sm:text-[15px] text-[#6b584a] leading-7 mt-5">
              Independent bookstores offer a distinctive experience.
              They bring together knowledgeable booksellers,
              carefully selected titles, and the pleasure of
              discovering something unexpected.
            </p>

            <p className="font-serif-body text-sm sm:text-[15px] text-[#6b584a] leading-7 mt-3">
              Whether searching for an early literary edition,
              an illustrated natural history volume, or a classic
              work of philosophy, collectors value bookshops
              that understand the stories behind their books.
            </p>
          </div>

          <div className="lg:col-span-5">
            <div className="relative h-[320px] sm:h-[360px] bg-[#e6dac8] overflow-hidden border border-[#d8ccbd]">
              <StoreImage
                src={`${imageRoot}/shops/editorial.png`}
                fallback={onlineImages.library}
                alt="Traditional library bookshelves"
              />

              <div className="absolute bottom-0 left-0 right-0 bg-[#241a15]/95 p-5 text-[#f4eadb]">
                <p className="text-[10px] uppercase tracking-[0.2em] text-[#c29b38] font-sans font-bold mb-1.5">
                  Curated Discoveries
                </p>
                <p className="text-lg font-bold font-serif-heading text-white">
                  Every Shelf Has a Story
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===========================================
          BOOKSELLER DIRECTORY
      ============================================ */}
      <section
        id="bookseller-directory"
        className="bg-[#f4eee2] border-y border-[#ded2c2] py-16 md:py-20"
      >
        <div className="max-w-7xl mx-auto px-6 sm:px-10">
          <div className="flex flex-col md:flex-row md:justify-between md:items-end gap-4 mb-8">
            <div>
              <p className="text-[#8c2d19] text-[11px] uppercase tracking-[0.2em] font-sans font-bold mb-2">
                Discover the Booksellers
              </p>
              <h2 className="text-2xl sm:text-3xl md:text-[34px] font-bold font-serif-heading text-[#241a15]">
                Independent Bookstore Directory
              </h2>
              <p className="font-serif-body text-xs sm:text-sm text-[#6b584a] mt-2 max-w-2xl leading-relaxed">
                Browse specialist bookstore concepts and
                discover the different literary interests
                represented within this sample directory.
              </p>
            </div>
            <span className="text-xs font-serif-body text-[#7a6452]">
              {filteredSellers.length} sample booksellers
            </span>
          </div>

          {/* SEARCH FILTERS */}
          <div className="bg-[#fffdfa] border border-[#d6c7b2] p-5 sm:p-6 mb-8 shadow-sm">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
              <div className="md:col-span-5">
                <label className="block text-xs font-bold uppercase tracking-wider text-[#382b22] mb-1.5 font-sans">
                  Bookstore Name or City
                </label>
                <div className="relative">
                  <Search
                    size={16}
                    className="absolute left-3.5 top-1/2 -translate-y-1/2 text-[#8c2d19]"
                  />
                  <input
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    placeholder="Search independent bookstores..."
                    className="w-full pl-10 pr-3.5 py-2.5 bg-white border border-[#d6c7b2] outline-none focus:border-[#8c2d19] text-xs text-[#241a15]"
                  />
                </div>
              </div>

              <div className="md:col-span-3">
                <label className="block text-xs font-bold uppercase tracking-wider text-[#382b22] mb-1.5 font-sans">
                  Country
                </label>
                <select
                  value={country}
                  onChange={(e) => setCountry(e.target.value)}
                  className="w-full px-3 py-2.5 border border-[#d6c7b2] bg-white text-xs text-[#241a15] outline-none focus:border-[#8c2d19]"
                >
                  {countries.map((value) => (
                    <option key={value}>{value}</option>
                  ))}
                </select>
              </div>

              <div className="md:col-span-4">
                <label className="block text-xs font-bold uppercase tracking-wider text-[#382b22] mb-1.5 font-sans">
                  Specialization
                </label>
                <select
                  value={specialty}
                  onChange={(e) => setSpecialty(e.target.value)}
                  className="w-full px-3 py-2.5 border border-[#d6c7b2] bg-white text-xs text-[#241a15] outline-none focus:border-[#8c2d19]"
                >
                  {specialties.map((value) => (
                    <option key={value}>{value}</option>
                  ))}
                </select>
              </div>
            </div>

            <div className="flex justify-end mt-3.5 pt-3 border-t border-[#f0e6d8]">
              <button
                onClick={() => {
                  setSearch("");
                  setCountry("All Countries");
                  setSpecialty("All Specialties");
                }}
                className="text-xs font-bold uppercase tracking-wider text-[#8c2d19] cursor-pointer"
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
            <div className="py-12 text-center bg-[#fffdfa] border border-[#ded2c2]">
              <Search size={26} className="mx-auto text-[#8c2d19]" />
              <h3 className="text-xl font-bold font-serif-heading text-[#241a15] mt-3">
                No Booksellers Found
              </h3>
              <p className="mt-2 text-xs font-serif-body text-[#7a6452]">
                Try another location or specialization.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* ===========================================
          BOOK COLLECTION (ALL PRICES REMOVED)
      ============================================ */}
      <section
        id="books-collection"
        className="max-w-7xl mx-auto px-6 sm:px-10 py-16 md:py-20"
      >
        <div className="text-center max-w-3xl mx-auto mb-10">
          <BookOpen size={26} className="mx-auto text-[#8c2d19] mb-3" />
          <p className="text-[11px] uppercase tracking-[0.2em] text-[#8c2d19] font-sans font-bold mb-2">
            Explore the Books
          </p>

          <h2 className="text-2xl sm:text-3xl md:text-[34px] font-bold font-serif-heading text-[#241a15]">
            Books Worth Discovering
          </h2>

          <p className="font-serif-body text-xs sm:text-sm text-[#6b584a] leading-relaxed mt-3 max-w-2xl mx-auto">
            From historic literature and illustrated natural
            history to academic studies and remarkable atlases,
            explore a curated sample of titles across independent bookstore collections.
          </p>
        </div>

        {/* BOOK CATEGORY PILLS & SEARCH */}
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 mb-8">
          <div className="flex gap-1.5 flex-wrap">
            {bookCategories.map((item) => (
              <button
                key={item}
                onClick={() => {
                  setBookCategory(item);
                  setShowAllBooks(false);
                }}
                className={`px-3.5 py-2 text-xs font-semibold border cursor-pointer ${
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
              size={15}
              className="absolute left-3 top-1/2 -translate-y-1/2 text-[#8c2d19]"
            />
            <input
              value={bookSearch}
              onChange={(e) => {
                setBookSearch(e.target.value);
                setShowAllBooks(false);
              }}
              placeholder="Search books..."
              className="w-full border border-[#d6c7b2] bg-white py-2 pl-9 pr-3 text-xs outline-none focus:border-[#8c2d19]"
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
          <p className="text-center text-xs font-serif-body text-[#7a6452] py-12">
            No books match your search.
          </p>
        )}

        {filteredBooks.length > 8 && (
          <div className="text-center mt-10">
            <button
              onClick={() => setShowAllBooks(!showAllBooks)}
              className="bg-[#8c2d19] text-white px-7 py-3 text-xs font-semibold uppercase tracking-wider inline-flex items-center gap-2.5 cursor-pointer"
            >
              {showAllBooks ? "Show Fewer Books" : "Explore More Books"}
              <ArrowRight size={15} />
            </button>
          </div>
        )}
      </section>

      {/* ===========================================
          FEATURED BOOKSTORE SPOTLIGHT
      ============================================ */}
      <section className="bg-[#241a15] text-[#f7eddf] py-16 md:py-20 border-y border-[#170e0a]">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div className="h-[340px] md:h-[400px] bg-[#382b22] overflow-hidden border border-[#4a3a2e]">
            <StoreImage
              src={`${imageRoot}/shops/spotlight.png`}
              fallback={onlineImages.bookstore}
              alt="Beautiful independent bookstore interior"
            />
          </div>

          <div>
            <p className="text-[11px] uppercase tracking-[0.2em] text-[#c29b38] font-sans font-bold mb-3">
              Bookseller Spotlight
            </p>
            <h2 className="text-2xl sm:text-3xl md:text-[34px] font-bold font-serif-heading text-white leading-snug">
              Celebrating the Spirit of Independent Bookselling
            </h2>

            <p className="font-serif-body text-xs sm:text-sm text-[#d7c6b4] leading-7 mt-5">
              The most memorable bookshops invite readers to
              slow down, explore the shelves, and discover titles
              that may never appear on a conventional shopping list.
              From knowledgeable recommendations to carefully
              assembled collections, independent bookselling
              remains an important part of literary culture.
            </p>

            <p className="font-serif-body text-xs sm:text-sm text-[#d7c6b4] leading-7 mt-3">
              BLUE BOOK's directory concept brings attention
              to these specialist interests and creates a
              dedicated space for collectors to discover
              bookstores and the books they celebrate.
            </p>

            <button
              onClick={() => scrollTo("bookseller-directory")}
              className="mt-7 bg-[#c29b38] text-[#241a15] px-6 py-3.5 text-xs font-bold uppercase tracking-wider inline-flex items-center gap-2.5 cursor-pointer"
            >
              Discover Booksellers
              <ArrowRight size={16} />
            </button>
          </div>
        </div>
      </section>

      {/* ===========================================
          BROWSE BY COUNTRY
      ============================================ */}
      <section className="max-w-7xl mx-auto px-6 sm:px-10 py-16 md:py-20">
        <p className="text-[#8c2d19] text-[11px] uppercase tracking-[0.2em] font-sans font-bold mb-2">
          A World of Bookshops
        </p>
        <h2 className="text-2xl sm:text-3xl md:text-[34px] font-bold font-serif-heading text-[#241a15]">
          Browse Booksellers by Country
        </h2>
        <p className="mt-3 text-xs sm:text-sm font-serif-body text-[#6b584a] leading-relaxed max-w-2xl">
          Explore independent bookseller listings across
          different countries and discover the diversity
          of specialist bookselling traditions.
        </p>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 mt-8">
          {countries.slice(1).map((value) => (
            <button
              key={value}
              onClick={() => viewCountry(value)}
              className="bg-[#fffdfa] p-4 border border-[#ded2c2] text-left min-h-[120px] flex flex-col justify-between cursor-pointer"
            >
              <div className="flex justify-between items-center">
                <Globe2 size={20} className="text-[#8c2d19]" />
                <ArrowUpRight size={15} className="text-[#8c2d19]" />
              </div>
              <div>
                <h3 className="font-bold font-serif-heading text-sm text-[#241a15]">
                  {value}
                </h3>
                <p className="text-[11px] font-serif-body text-[#7a6452] mt-0.5">
                  {sellers.filter((s) => s.country === value).length} sample listings
                </p>
              </div>
            </button>
          ))}
        </div>
      </section>

      {/* ===========================================
          WHY INDEPENDENTS MATTER
      ============================================ */}
      <section className="bg-[#f4eee2] border-y border-[#ded2c2] py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-6 sm:px-10">
          <div className="text-center max-w-3xl mx-auto mb-10">
            <p className="text-[11px] text-[#8c2d19] uppercase tracking-[0.2em] font-sans font-bold mb-2">
              The Independent Advantage
            </p>
            <h2 className="text-2xl sm:text-3xl md:text-[34px] font-bold font-serif-heading text-[#241a15]">
              Why Independent Booksellers Matter
            </h2>
            <p className="font-serif-body text-xs sm:text-sm text-[#6b584a] mt-3 leading-relaxed">
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
                title: "Knowledge and Heritage",
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
                  className="bg-[#fffdfa] border border-[#ded2c2] p-6"
                >
                  <div className="w-10 h-10 bg-[#f0e3d3] flex items-center justify-center mb-5">
                    <Icon size={20} className="text-[#8c2d19]" />
                  </div>
                  <h3 className="text-lg font-bold font-serif-heading text-[#241a15] mb-2">
                    {item.title}
                  </h3>
                  <p className="font-serif-body text-[#6b584a] text-xs leading-relaxed">
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ===========================================
          SELLER JOIN SECTION
      ============================================ */}
      <section className="max-w-7xl mx-auto px-6 sm:px-10 py-16 md:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 border border-[#d6c7b2] bg-[#fffdfa]">
          <div className="p-8 sm:p-10 lg:p-12">
            <p className="text-[11px] text-[#8c2d19] uppercase tracking-[0.2em] font-sans font-bold mb-3">
              For Professional Booksellers
            </p>
            <h2 className="text-2xl sm:text-3xl md:text-[34px] font-bold font-serif-heading text-[#241a15] leading-snug">
              Bring Your Bookstore to a Wider Audience
            </h2>
            <p className="font-serif-body text-xs sm:text-sm text-[#6b584a] leading-relaxed mt-4">
              An independent bookseller profile can introduce
              your store, areas of specialization, and literary
              collections to readers searching for distinctive
              books and knowledgeable dealers.
            </p>

            <div className="space-y-3 mt-6">
              {[
                "Introduce your bookstore and its history",
                "Highlight specialist subjects and collections",
                "Present your books to interested collectors",
                "Share location and business information",
              ].map((item) => (
                <div className="flex gap-2.5 items-start text-xs font-serif-body text-[#58483b]" key={item}>
                  <CheckCircle2
                    size={16}
                    className="text-[#8c2d19] shrink-0 mt-0.5"
                  />
                  {item}
                </div>
              ))}
            </div>

            <div className="mt-8 inline-flex bg-[#382b22] text-white px-5 py-3 text-xs font-semibold uppercase tracking-wider">
              Bookseller Registration Coming Soon
            </div>
          </div>

          <div className="min-h-[300px] bg-[#e7dac6] overflow-hidden">
            <StoreImage
              src={`${imageRoot}/shops/join-booksellers.png`}
              fallback={onlineImages.shelf}
              alt="Shelves of collectible books"
            />
          </div>
        </div>
      </section>

      {/* ===========================================
          FAQ ACCORDION
      ============================================ */}
      <section className="bg-[#f4eee2] border-t border-[#ded2c2] py-14">
        <div className="max-w-4xl mx-auto px-6 sm:px-10">
          <h2 className="text-2xl sm:text-3xl font-bold font-serif-heading text-center text-[#241a15] mb-8">
            Frequently Asked Questions
          </h2>

          {faqItems.map((faq, index) => (
            <div key={faq.question} className="border-b border-[#d3c4b2]">
              <button
                className="w-full py-5 flex justify-between items-center text-left gap-4 cursor-pointer"
                onClick={() => setOpenFaq(openFaq === index ? -1 : index)}
                aria-expanded={openFaq === index}
              >
                <span className="font-bold text-base sm:text-lg font-serif-heading text-[#241a15]">
                  {faq.question}
                </span>
                <ChevronDown
                  size={16}
                  className={`shrink-0 text-[#8c2d19] ${
                    openFaq === index ? "rotate-180" : ""
                  }`}
                />
              </button>

              {openFaq === index && (
                <p className="pb-5 font-serif-body text-[#6b584a] leading-relaxed text-xs sm:text-sm">
                  {faq.answer}
                </p>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* ===========================================
          FINAL CTA
      ============================================ */}
      <section className="py-16 md:py-20 text-center px-6">
        <LibraryBig size={30} className="mx-auto text-[#8c2d19] mb-4" />
        <h2 className="text-2xl sm:text-3xl md:text-[34px] font-bold font-serif-heading text-[#241a15]">
          Your Next Literary Discovery Awaits.
        </h2>
        <p className="mt-3 text-xs sm:text-sm font-serif-body text-[#6b584a] leading-relaxed max-w-xl mx-auto">
          Explore independent booksellers, discover
          interesting books, and appreciate the tradition
          of collecting works worth keeping.
        </p>
        <button
          onClick={() => scrollTo("books-collection")}
          className="mt-6 bg-[#8c2d19] text-white px-7 py-3 font-semibold text-xs uppercase tracking-wider inline-flex items-center gap-2.5 cursor-pointer"
        >
          Explore the Book Collection
          <ArrowRight size={15} />
        </button>
      </section>

      {/* ===========================================
          SELLER DETAIL MODAL (NO PRICES)
      ============================================ */}
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
            className="bg-[#fbf8f2] w-full max-w-2xl max-h-[90vh] overflow-y-auto relative border border-[#d6c7b2]"
          >
            <button
              onClick={() => setSelectedSeller(null)}
              className="absolute top-4 right-4 bg-white p-2 z-10 border border-[#d6c7b2] cursor-pointer"
              aria-label="Close"
            >
              <X size={18} />
            </button>

            <div className="h-56">
              <StoreImage
                src={selectedSeller.image}
                fallback={selectedSeller.fallback}
                alt={selectedSeller.name}
              />
            </div>

            <div className="p-6 sm:p-8">
              <p className="text-[10px] uppercase tracking-[0.2em] text-[#8c2d19] font-bold font-sans">
                {selectedSeller.specialty}
              </p>
              <h2 className="text-2xl sm:text-3xl font-bold font-serif-heading text-[#241a15] mt-2">
                {selectedSeller.name}
              </h2>
              <p className="text-xs font-serif-body text-[#7a6452] mt-1.5 flex items-center gap-1.5">
                <MapPin size={14} className="text-[#8c2d19]" />
                {selectedSeller.location}
              </p>
              <p className="font-serif-body text-xs sm:text-sm text-[#6b584a] leading-relaxed mt-4">
                {selectedSeller.description}
              </p>

              <div className="border-t border-[#d6c7b2] mt-6 pt-5">
                <h3 className="text-base font-bold font-serif-heading text-[#241a15] mb-3">
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
                      className="w-full flex justify-between items-center gap-3 text-left py-2.5 border-b border-[#e3d8ca] text-xs font-serif-body text-[#241a15] cursor-pointer"
                    >
                      <span>{book.title}</span>
                      <span className="text-[11px] text-[#8c2d19] font-semibold uppercase tracking-wider">
                        View Book
                      </span>
                    </button>
                  ))}
              </div>

              <p className="text-[11px] font-serif-body text-[#7a6452] mt-4">
                Demonstration profile, not a verified business listing.
              </p>
            </div>
          </div>
        </div>
      )}

      {/* ===========================================
          BOOK DETAIL MODAL (NO PRICES)
      ============================================ */}
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
            className="bg-[#fbf8f2] w-full max-w-4xl max-h-[90vh] overflow-y-auto relative border border-[#d6c7b2]"
          >
            <button
              onClick={() => setSelectedBook(null)}
              className="absolute top-4 right-4 bg-white p-2 z-10 border border-[#d6c7b2] cursor-pointer"
              aria-label="Close"
            >
              <X size={18} />
            </button>

            <div className="grid grid-cols-1 md:grid-cols-2">
              <div className="h-[280px] md:h-full md:min-h-[400px] bg-[#e8dfd1]">
                <StoreImage
                  src={selectedBook.image}
                  fallback={selectedBook.fallback}
                  alt={selectedBook.title}
                />
              </div>

              <div className="p-6 sm:p-8">
                <span className="text-[#8c2d19] uppercase tracking-[0.2em] text-[10px] font-bold font-sans">
                  {selectedBook.category}
                </span>

                <h2 className="text-2xl sm:text-3xl font-bold font-serif-heading text-[#241a15] mt-2">
                  {selectedBook.title}
                </h2>

                <p className="font-serif-body text-xs text-[#7a6452] mt-2">
                  By {selectedBook.author}
                </p>

                <p className="text-[11px] font-serif-body text-[#7a6452] mt-1">
                  Edition: {selectedBook.year}
                </p>

                <p className="font-serif-body text-xs sm:text-sm text-[#6b584a] leading-relaxed mt-4">
                  {selectedBook.description}
                </p>

                <div className="mt-6 p-3.5 bg-[#f0e5d7] text-xs leading-relaxed text-[#6b584a] font-serif-body">
                  Demonstration catalog entry. Real book availability, dealer provenance, and condition
                  reports will be managed through verified inventory integration.
                </div>

                <button
                  onClick={() => setSelectedBook(null)}
                  className="mt-6 bg-[#241a15] text-white px-6 py-2.5 text-xs font-semibold uppercase tracking-wider cursor-pointer"
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