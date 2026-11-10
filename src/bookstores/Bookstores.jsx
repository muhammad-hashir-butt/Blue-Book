import React, { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  ArrowUpRight,
  BookOpen,
  CheckCircle2,
  ChevronDown,
  LibraryBig,
  MapPin,
  Search,
  ShieldCheck,
  X,
} from "lucide-react";

// ===========================================
// FRESH & DEDICATED BOOKSTORE IMAGES
// (Completely separate from Marketing Page)
// ===========================================
const imageRoot = "/images/bookstores";

const guaranteedImages = {
  // Section 1 (Hero): Authentic vintage European antiquarian bookshop
  heroAtmosphere:
    "https://images.unsplash.com/photo-1505664194779-8beaceb93744?auto=format&fit=crop&w=1400&q=80",
  // Section 2 (Editorial): Rich archival desk with curated antique volumes
  editorialFeature:
    "https://images.unsplash.com/photo-1533669955142-6a73332af4db?auto=format&fit=crop&w=1200&q=80",
  // Spotlight: Atmospheric book alcove
  spotlightAtmosphere:
    "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?auto=format&fit=crop&w=1200&q=80",
  // Universal backup
  universalFallback:
    "https://images.unsplash.com/photo-1512820790803-83ca734da794?auto=format&fit=crop&w=1200&q=80",
};

const sellers = [
  {
    id: "heritage",
    name: "The Heritage Book Room",
    location: "New York, United States",
    country: "United States",
    specialty: "Rare and Antiquarian",
    image: `${imageRoot}/shops/shop-1.png`,
    fallback:
      "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?auto=format&fit=crop&w=1200&q=80",
    featured: true,
    description:
      "A distinguished independent bookshop dedicated to scarce early literature, private press imprints, and fine leather bindings. The gallery holds significant works in classical philosophy, historical documentation, and nineteenth-century typography.",
  },
  {
    id: "quill",
    name: "Atlas and Quill Books",
    location: "London, United Kingdom",
    country: "United Kingdom",
    specialty: "Maps and Manuscripts",
    image: `${imageRoot}/shops/shop-2.png`,
    fallback:
      "https://images.unsplash.com/photo-1457369804613-52c61a468e7d?auto=format&fit=crop&w=1200&q=80",
    featured: true,
    description:
      "Specializing in antique cartography, hand-colored celestial atlases, and early manuscript leaves. Each specimen in the collection is evaluated for its provenance, geographical precision, and historical significance.",
  },
  {
    id: "botanical",
    name: "Botanical and Natural Books",
    location: "Toronto, Canada",
    country: "Canada",
    specialty: "Natural History",
    image: `${imageRoot}/shops/shop-3.png`,
    fallback:
      "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=1200&q=80",
    featured: true,
    description:
      "An archival collection focusing on original botanical engravings, ornithological folios, and historical natural science treaties from the eighteenth and nineteenth centuries.",
  },
  {
    id: "classics",
    name: "The Literary Archive",
    location: "Paris, France",
    country: "France",
    specialty: "Literature and Classics",
    image: `${imageRoot}/shops/shop-4.png`,
    fallback:
      "https://images.unsplash.com/photo-1512820790803-83ca734da794?auto=format&fit=crop&w=1200&q=80",
    featured: false,
    description:
      "Curating first editions of monumental European literature, literary criticism, and signed association copies from prominent twentieth-century authors and essayists.",
  },
  {
    id: "folio",
    name: "The Fine Folio Gallery",
    location: "Melbourne, Australia",
    country: "Australia",
    specialty: "Art and Illustration",
    image: `${imageRoot}/shops/shop-5.png`,
    fallback:
      "https://images.unsplash.com/photo-1516979187457-637abb4f9353?auto=format&fit=crop&w=1200&q=80",
    featured: false,
    description:
      "Devoted to the book as an artistic medium. The inventory emphasizes private press monographs, master woodcuts, fine printmaking, and landmark exhibition publications.",
  },
  {
    id: "scholar",
    name: "The Scholar's Cabinet",
    location: "Edinburgh, United Kingdom",
    country: "United Kingdom",
    specialty: "History and Scholarship",
    image: `${imageRoot}/shops/shop-6.png`,
    fallback:
      "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?auto=format&fit=crop&w=1200&q=80",
    featured: false,
    description:
      "Providing institutional libraries and researchers with monumental historical sourcebooks, classical linguistic studies, and authoritative university press reference collections.",
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
    fallback:
      "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?auto=format&fit=crop&w=800&q=80",
    description:
      "An illustrated historical volume exploring ancient civilizations, geographical discoveries, and the cultural legacies of forgotten kingdoms. Bound in quarter morocco with fold-out engraved charts.",
  },
  {
    id: 2,
    title: "Botanical Wonders of the World",
    author: "Clara Whitmore",
    category: "Natural History",
    year: "1912",
    sellerId: "botanical",
    image: `${imageRoot}/books/book-2.png`,
    fallback:
      "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=800&q=80",
    description:
      "A richly illustrated botanical study featuring hand-finished plates, intricate natural observations, and systematic documentation of flora across five continents.",
  },
  {
    id: 3,
    title: "The Poet's Treasury",
    author: "Edmund Fairchild",
    category: "Literature",
    year: "1898",
    sellerId: "classics",
    image: `${imageRoot}/books/book-3.png`,
    fallback:
      "https://images.unsplash.com/photo-1512820790803-83ca734da794?auto=format&fit=crop&w=800&q=80",
    description:
      "An elegant anthology of classical and Victorian verse, presented on handmade laid paper with gilt-tooled spine and custom marbled endpapers.",
  },
  {
    id: 4,
    title: "The Golden Age of Exploration",
    author: "Arthur Pembroke",
    category: "History",
    year: "1907",
    sellerId: "heritage",
    image: `${imageRoot}/books/book-4.png`,
    fallback:
      "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?auto=format&fit=crop&w=800&q=80",
    description:
      "A thorough chronicle of early modern nautical exploration, navigation logs, and the early charting of ocean routes, complete with contemporary sketch maps.",
  },
  {
    id: 5,
    title: "Architecture Through the Ages",
    author: "Frederick Bellamy",
    category: "Fine Arts",
    year: "1931",
    sellerId: "folio",
    image: `${imageRoot}/books/book-5.png`,
    fallback:
      "https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?auto=format&fit=crop&w=800&q=80",
    description:
      "An extensive photographic and illustrated survey of classical proportions, masonry traditions, and architectural evolutions from antiquity to modernism.",
  },
  {
    id: 6,
    title: "Celestial Observations",
    author: "Henry Alderton",
    category: "Science",
    year: "1920",
    sellerId: "scholar",
    image: `${imageRoot}/books/book-6.png`,
    fallback:
      "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=800&q=80",
    description:
      "An astronomical treatise highlighting early twentieth-century telescope developments, stellar measurements, and atmospheric observations.",
  },
  {
    id: 7,
    title: "Legends of the Ancient World",
    author: "Margaret Ellison",
    category: "Literature",
    year: "1903",
    sellerId: "classics",
    image: `${imageRoot}/books/book-7.png`,
    fallback:
      "https://images.unsplash.com/photo-1457369804613-52c61a468e7d?auto=format&fit=crop&w=800&q=80",
    description:
      "A comparative study of Mediterranean mythology and epic narrative cycles, accompanied by archival engravings from classical museum holdings.",
  },
  {
    id: 8,
    title: "Wildlife of the Northern Lands",
    author: "Charles W. Bennett",
    category: "Natural History",
    year: "1928",
    sellerId: "botanical",
    image: `${imageRoot}/books/book-8.png`,
    fallback:
      "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&w=800&q=80",
    description:
      "Field studies and ecological records documenting arctic mammals, subpolar migration routes, and early conservation efforts in Scandinavia and Canada.",
  },
  {
    id: 9,
    title: "The Art of Fine Printing",
    author: "Walter H. Sterling",
    category: "Fine Arts",
    year: "1915",
    sellerId: "folio",
    image: `${imageRoot}/books/book-9.png`,
    fallback:
      "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=800&q=80",
    description:
      "An authoritative manual celebrating hand-cast type, paper-making chemistry, and the legacy of the private press movement across Britain and America.",
  },
  {
    id: 10,
    title: "Medieval Manuscripts",
    author: "Edward Ravenscroft",
    category: "History",
    year: "1934",
    sellerId: "quill",
    image: `${imageRoot}/books/book-10.png`,
    fallback:
      "https://images.unsplash.com/photo-1461360370896-922624d12aa1?auto=format&fit=crop&w=800&q=80",
    description:
      "An analytical survey of scriptorium workshops, manuscript illumination, and the preservation of classical texts in monastic libraries.",
  },
  {
    id: 11,
    title: "Philosophy of the Classical World",
    author: "Richard L. Arden",
    category: "Philosophy",
    year: "1918",
    sellerId: "scholar",
    image: `${imageRoot}/books/book-11.png`,
    fallback:
      "https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?auto=format&fit=crop&w=800&q=80",
    description:
      "A scholarly synthesis of Hellenistic ethical thought, the Socratic tradition, and the intellectual foundations of Western moral philosophy.",
  },
  {
    id: 12,
    title: "The Illustrated Book of Maps",
    author: "Thomas C. Worthington",
    category: "Maps and Atlases",
    year: "1926",
    sellerId: "heritage",
    image: `${imageRoot}/books/book-12.png`,
    fallback:
      "https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?auto=format&fit=crop&w=800&q=80",
    description:
      "A curated review of Renaissance map engraving, cartographic symbology, and the decorative cartouches of early maritime charts.",
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
// ROBUST AUTO-HEALING IMAGE COMPONENT
// ===========================================
function StoreImage({ src, fallback, alt, className = "" }) {
  const [currentSrc, setCurrentSrc] = useState(src || fallback || guaranteedImages.universalFallback);

  return (
    <img
      src={currentSrc}
      alt={alt}
      loading="lazy"
      onError={() => {
        if (currentSrc !== fallback && fallback) {
          setCurrentSrc(fallback);
        } else if (currentSrc !== guaranteedImages.universalFallback) {
          setCurrentSrc(guaranteedImages.universalFallback);
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
    <article className="bg-[#FFFDF8] border border-[#DED2C2] flex flex-col overflow-hidden">
      <div className="h-52 relative overflow-hidden bg-[#E8DFD1]">
        <StoreImage
          src={seller.image}
          fallback={seller.fallback}
          alt={`${seller.name} bookstore`}
        />

        {seller.featured && (
          <span className="absolute left-4 top-4 bg-[#8C2D19] text-white px-2.5 py-1 text-[9px] font-bold uppercase tracking-[0.2em] font-sans">
            Archival Partner
          </span>
        )}
      </div>

      <div className="p-6 flex flex-col flex-1">
        <span className="text-[10px] font-sans font-bold uppercase tracking-[0.2em] text-[#8C2D19]">
          {seller.specialty}
        </span>

        <h3 className="text-xl font-bold font-serif-heading text-[#241A15] mt-2 leading-snug">
          {seller.name}
        </h3>

        <p className="flex items-center gap-2 text-xs font-serif-body text-[#7A6452] mt-2">
          <MapPin size={14} className="text-[#8C2D19] shrink-0" />
          {seller.location}
        </p>

        <p className="text-xs sm:text-[13px] leading-relaxed font-serif-body text-[#6B584A] mt-3.5 flex-1">
          {seller.description}
        </p>

        <button
          onClick={() => onView(seller)}
          className="mt-6 pt-3.5 border-t border-[#E3D8C9] flex justify-between items-center gap-3 text-xs font-bold text-[#8C2D19] text-left uppercase tracking-wider cursor-pointer"
        >
          View Bookshop Holdings
          <ArrowUpRight size={15} />
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
    <article className="bg-[#FFFDF8] border border-[#E0D5C7] flex flex-col">
      <div className="relative h-60 sm:h-64 p-4 bg-[#ECE5DA]">
        <div className="w-full h-full overflow-hidden bg-[#DED2C1]">
          <StoreImage
            src={book.image}
            fallback={book.fallback}
            alt={`Illustrative image for ${book.title}`}
          />
        </div>

        <span className="absolute left-6 top-6 bg-[#241A15] text-[#F4EADB] text-[9px] uppercase tracking-wider font-sans px-2.5 py-1">
          {book.category}
        </span>
      </div>

      <div className="p-5 flex flex-col flex-1">
        <p className="text-[10px] uppercase tracking-[0.2em] font-sans text-[#8C2D19] font-bold">
          {book.year} Edition
        </p>

        <h3 className="text-lg font-bold font-serif-heading text-[#241A15] mt-1.5 leading-snug min-h-[46px]">
          {book.title}
        </h3>

        <p className="text-xs font-serif-body text-[#7A6452] mt-1">
          By {book.author}
        </p>

        <p className="text-xs leading-relaxed font-serif-body text-[#6B584A] mt-3 line-clamp-3 flex-1">
          {book.description}
        </p>

        <div className="border-t border-[#E3D8CA] mt-4 pt-3 flex items-center justify-between gap-3">
          <p className="text-[11px] font-serif-body text-[#7A6452]">
            {seller?.name}
          </p>

          <button
            onClick={() => onView(book)}
            className="bg-[#8C2D19] text-white px-3.5 py-1.5 text-xs font-semibold flex items-center gap-1.5 cursor-pointer"
          >
            Examine Volume
            <ArrowUpRight size={13} />
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

  const faqItems = [
    {
      question: "What constitutes an accredited BLUE BOOK bookseller?",
      answer:
        "Accredited sellers are professionally established independent bookshops, antiquarian dealers, and specialist print galleries. We evaluate catalog accuracy, provenance documentation, and condition reporting to preserve collector trust.",
    },
    {
      question: "How are rare bindings and early editions verified?",
      answer:
        "Holdings listed within the directory are accompanied by precise bibliographic descriptions, noting edition points, collation, binding state, provenance history, and defects where applicable.",
    },
    {
      question: "How can readers and institutions acquire volumes from this directory?",
      answer:
        "Holdings are exhibited directly by the respective independent bookstore. Selecting 'Examine Volume' allows researchers and collectors to review bibliographic specifications and connect with the host bookshop.",
    },
    {
      question: "What are the criteria for an independent bookshop to join?",
      answer:
        "We welcome brick-and-mortar independent booksellers, ABAA/ILAB-aligned antiquarian dealers, and scholarly presses. Interested institutions may submit an onboarding brief through the Bookseller Portal.",
    },
  ];

  return (
    <div className="min-h-screen bg-[#FAF7F2] text-[#241A15] selection:bg-[#8C2D19] selection:text-white">
      {/* Bespoke Architectural Editorial Typography */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cinzel:wght@600;700;800&family=Newsreader:ital,opsz,wght@0,6..72,400;0,6..72,500;0,6..72,600;0,6..72,700;1,6..72,400&family=Lora:ital,wght@0,400;0,500;1,400&display=swap');
        
        .font-serif-heading {
          font-family: 'Newsreader', Georgia, serif;
          font-style: normal;
          letter-spacing: -0.015em;
        }
        .font-editorial-caps {
          font-family: 'Cinzel', serif;
          letter-spacing: 0.18em;
        }
        .font-serif-body {
          font-family: 'Lora', Georgia, serif;
          font-style: normal;
        }
      `}</style>

      {/* =========================================================
          HERO: FRESH UNIQUE VINTAGE BOOKSHOP IMAGE
      ========================================================= */}
      <header className="border-b border-[#E3D7C5]">
        {/* Top Header Tag Strip */}
        <div className="border-b border-[#E3D7C5] bg-[#F3EDE2]/60 py-2.5 px-6 sm:px-10">
          <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-start sm:items-center text-[10px] text-[#7A6758] font-editorial-caps">
            <span>INDEX OF INDEPENDENT BOOKSHOPS AND SPECIALIST ARCHIVES</span>
            <span className="hidden sm:inline">GLOBAL BIBLIOGRAPHIC REGISTRY • VOL. IV</span>
          </div>
        </div>

        {/* Main Hero Split */}
        <div className="max-w-7xl mx-auto px-6 sm:px-10 py-14 sm:py-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* Left Narrative Column */}
            <div className="lg:col-span-7">
              <p className="text-[11px] uppercase tracking-[0.28em] font-bold text-[#8C2D19] mb-4">
                THE PRESERVATION OF PRINT
              </p>

              <h1 className="text-3xl sm:text-5xl md:text-[54px] font-bold leading-[1.08] font-serif-heading text-[#241A15]">
                A Curated Index of the World's Independent Bookshops.
              </h1>

              <p className="font-serif-body text-sm sm:text-base text-[#5C4A3E] mt-5 leading-relaxed max-w-xl">
                Beyond algorithmic marketplaces, independent bookselling remains an enduring art of human curation.
                Explore specialist dealers, antiquarian curators, and private libraries dedicated to significant works
                of literature, geography, and intellectual culture.
              </p>

              {/* Maroon Styled Action Buttons */}
              <div className="mt-8 flex flex-wrap items-center gap-4">
                <button
                  onClick={() => scrollTo("bookseller-directory")}
                  className="bg-[#8C2D19] text-white py-3.5 px-7 text-xs font-semibold tracking-wider uppercase cursor-pointer shadow-sm"
                >
                  Explore Bookseller Directory
                </button>
                <button
                  onClick={() => scrollTo("books-collection")}
                  className="border border-[#8C2D19] text-[#8C2D19] bg-transparent py-3.5 px-6 text-xs font-semibold tracking-wider uppercase cursor-pointer"
                >
                  Examine Curated Holdings
                </button>
              </div>

              {/* Archival Footnote */}
              <div className="mt-8 pt-5 border-t border-[#E8DDCE] flex flex-wrap items-center gap-6 text-[11px] text-[#7A6758] font-serif-body">
                <span>6 Accredited Bookshops</span>
                <span>•</span>
                <span>Rare Bindings</span>
                <span>•</span>
                <span>Historical Provenance</span>
              </div>
            </div>

            {/* Right Architectural Visual Canvas (NEW VINTAGE BOOKSHOP IMAGE) */}
            <div className="lg:col-span-5">
              <div className="bg-[#FCFAF6] border border-[#DDD0BF] p-3.5 shadow-sm">
                <div className="relative h-[340px] sm:h-[400px] overflow-hidden bg-[#E8DECE]">
                  <img
                    src={guaranteedImages.heroAtmosphere}
                    alt="Authentic antiquarian bookshop interior with classic lamps"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1F1713]/85 via-transparent to-transparent" />
                  
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <p className="text-[9px] uppercase tracking-[0.25em] text-[#D4A753] font-bold font-editorial-caps">
                      CURATED DISCOVERY
                    </p>
                    <p className="font-serif-heading text-sm sm:text-base font-bold mt-1">
                      Where Serious Readers and Rare Volumes Converge.
                    </p>
                  </div>
                </div>

                <div className="mt-3 px-1 py-1 flex justify-between items-center text-[10px] text-[#7A6758] font-editorial-caps">
                  <span>OXFORD • LONDON • PARIS</span>
                  <span>EST. BLUE BOOK INDEX</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </header>

      {/* =========================================================
          SECTION 2: EDITORIAL STATEMENT (NEW VINTAGE BOOKS DESK IMAGE)
      ========================================================= */}
      <section className="max-w-7xl mx-auto px-6 sm:px-10 py-16 md:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-7">
            <p className="text-[11px] font-sans font-bold tracking-[0.2em] uppercase text-[#8C2D19] mb-3">
              THE INDEPENDENT BOOKSELLING TRADITION
            </p>

            <h2 className="text-2xl sm:text-3xl md:text-[36px] font-bold leading-snug font-serif-heading text-[#241A15]">
              More Than a Bookshop.
              <br />
              <span className="text-[#8C2D19]">A Sanctuary of Discovery.</span>
            </h2>

            <p className="font-serif-body text-sm sm:text-[15px] text-[#5C4A3E] leading-7 mt-5">
              Independent bookstores represent an essential counterweight to disposable mass-market publishing.
              They bring together knowledgeable dealers, carefully gathered collections, and the rare pleasure of
              encountering books with history, craftsmanship, and intellectual integrity.
            </p>

            <p className="font-serif-body text-sm sm:text-[15px] text-[#5C4A3E] leading-7 mt-3">
              Whether you are tracing an early literary edition, studying hand-colored natural history folios,
              or pursuing foundational texts in classical philosophy, collectors value bookshops that understand
              the provenance behind their holdings.
            </p>
          </div>

          <div className="lg:col-span-5">
            <div className="relative h-[320px] sm:h-[360px] bg-[#E8DECE] overflow-hidden border border-[#D8CCBD]">
              {/* Working NEW image of antique books on reading table */}
              <StoreImage
                src={guaranteedImages.editorialFeature}
                fallback={guaranteedImages.universalFallback}
                alt="Antique leather books and reading desk"
              />

              <div className="absolute bottom-0 left-0 right-0 bg-[#241A15]/95 p-5 text-[#F5EADB]">
                <p className="text-[10px] uppercase tracking-[0.2em] text-[#D4A753] font-sans font-bold mb-1.5">
                  CURATED DISCOVERIES
                </p>
                <p className="text-lg font-bold font-serif-heading text-white">
                  Every Shelf Holds a Cultural Lineage
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          BOOKSELLER DIRECTORY
      ========================================================= */}
      <section
        id="bookseller-directory"
        className="bg-[#F4EEE2] border-y border-[#DED2C2] py-16 md:py-20"
      >
        <div className="max-w-7xl mx-auto px-6 sm:px-10">
          <div className="flex flex-col md:flex-row md:justify-between md:items-end gap-4 mb-8">
            <div>
              <p className="text-[#8C2D19] text-[11px] uppercase tracking-[0.2em] font-sans font-bold mb-2">
                DISCOVER THE PARTICIPATING DEALERS
              </p>
              <h2 className="text-2xl sm:text-3xl md:text-[34px] font-bold font-serif-heading text-[#241A15]">
                Independent Bookstore Directory
              </h2>
              <p className="font-serif-body text-xs sm:text-sm text-[#5C4A3E] mt-2 max-w-2xl leading-relaxed">
                Filter accredited bookshops by geographic territory and field of specialization.
              </p>
            </div>
            <span className="text-xs font-serif-body text-[#7A6452]">
              {filteredSellers.length} Accredited Bookshops Listed
            </span>
          </div>

          {/* SEARCH FILTERS */}
          <div className="bg-[#FFFDF8] border border-[#D6C7B2] p-5 sm:p-6 mb-8 shadow-sm">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
              <div className="md:col-span-5">
                <label className="block text-xs font-bold uppercase tracking-wider text-[#382B22] mb-1.5 font-sans">
                  Bookshop Name or City
                </label>
                <div className="relative">
                  <Search
                    size={15}
                    className="absolute left-3.5 top-1/2 -translate-y-1/2 text-[#8C2D19]"
                  />
                  <input
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    placeholder="Search by store name, city, or specialty..."
                    className="w-full pl-10 pr-3.5 py-2.5 bg-white border border-[#D6C7B2] outline-none focus:border-[#8C2D19] text-xs text-[#241A15]"
                  />
                </div>
              </div>

              <div className="md:col-span-3">
                <label className="block text-xs font-bold uppercase tracking-wider text-[#382B22] mb-1.5 font-sans">
                  Country
                </label>
                <select
                  value={country}
                  onChange={(e) => setCountry(e.target.value)}
                  className="w-full px-3 py-2.5 border border-[#D6C7B2] bg-white text-xs text-[#241A15] outline-none focus:border-[#8C2D19]"
                >
                  {countries.map((value) => (
                    <option key={value}>{value}</option>
                  ))}
                </select>
              </div>

              <div className="md:col-span-4">
                <label className="block text-xs font-bold uppercase tracking-wider text-[#382B22] mb-1.5 font-sans">
                  Specialization
                </label>
                <select
                  value={specialty}
                  onChange={(e) => setSpecialty(e.target.value)}
                  className="w-full px-3 py-2.5 border border-[#D6C7B2] bg-white text-xs text-[#241A15] outline-none focus:border-[#8C2D19]"
                >
                  {specialties.map((value) => (
                    <option key={value}>{value}</option>
                  ))}
                </select>
              </div>
            </div>

            <div className="flex justify-end mt-3.5 pt-3 border-t border-[#F0E6D8]">
              <button
                onClick={() => {
                  setSearch("");
                  setCountry("All Countries");
                  setSpecialty("All Specialties");
                }}
                className="text-xs font-bold uppercase tracking-wider text-[#8C2D19] cursor-pointer"
              >
                Reset Filter Parameters
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
            <div className="py-12 text-center bg-[#FFFDF8] border border-[#DED2C2]">
              <Search size={26} className="mx-auto text-[#8C2D19]" />
              <h3 className="text-xl font-bold font-serif-heading text-[#241A15] mt-3">
                No Participating Bookshops Found
              </h3>
              <p className="mt-2 text-xs font-serif-body text-[#7A6452]">
                Try adjusting your geographic territory or subject category.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* =========================================================
          BOOK COLLECTION
      ========================================================= */}
      <section
        id="books-collection"
        className="max-w-7xl mx-auto px-6 sm:px-10 py-16 md:py-20"
      >
        <div className="text-center max-w-3xl mx-auto mb-10">
          <BookOpen size={24} className="mx-auto text-[#8C2D19] mb-3" />
          <p className="text-[11px] uppercase tracking-[0.2em] text-[#8C2D19] font-sans font-bold mb-2">
            CATALOG PREVIEW
          </p>

          <h2 className="text-2xl sm:text-3xl md:text-[34px] font-bold font-serif-heading text-[#241A15]">
            Notable Volumes and Historical Editions
          </h2>

          <p className="font-serif-body text-xs sm:text-sm text-[#5C4A3E] leading-relaxed mt-3 max-w-2xl mx-auto">
            From monumental historical cartography and eighteenth-century botanical folios to signed literary
            first editions, explore a curated preview of works presented by participating booksellers.
          </p>
        </div>

        {/* Category Filter Pills & Search */}
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
                    ? "bg-[#8C2D19] text-white border-[#8C2D19]"
                    : "bg-[#FFFDF8] border-[#D6C7B2] text-[#58483B]"
                }`}
              >
                {item}
              </button>
            ))}
          </div>

          <div className="relative w-full lg:w-64 shrink-0">
            <Search
              size={14}
              className="absolute left-3 top-1/2 -translate-y-1/2 text-[#8C2D19]"
            />
            <input
              value={bookSearch}
              onChange={(e) => {
                setBookSearch(e.target.value);
                setShowAllBooks(false);
              }}
              placeholder="Search by title, author, or keyword..."
              className="w-full border border-[#D6C7B2] bg-white py-2 pl-9 pr-3 text-xs outline-none focus:border-[#8C2D19]"
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
          <p className="text-center text-xs font-serif-body text-[#7A6452] py-12">
            No volumes match your search query.
          </p>
        )}

        {filteredBooks.length > 8 && (
          <div className="text-center mt-10">
            <button
              onClick={() => setShowAllBooks(!showAllBooks)}
              className="bg-[#8C2D19] text-white px-7 py-3 text-xs font-semibold uppercase tracking-wider inline-flex items-center gap-2.5 cursor-pointer"
            >
              {showAllBooks ? "Display Fewer Volumes" : "Explore Complete Shelf Holdings"}
              <ArrowRight size={14} />
            </button>
          </div>
        )}
      </section>

      {/* =========================================================
          FEATURED SPOTLIGHT
      ========================================================= */}
      <section className="bg-[#241A15] text-[#F7EDDF] py-16 md:py-20 border-y border-[#170E0A]">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div className="h-[340px] md:h-[400px] bg-[#382B22] overflow-hidden border border-[#4A3A2E]">
            <StoreImage
              src={guaranteedImages.spotlightAtmosphere}
              fallback={guaranteedImages.universalFallback}
              alt="Archival antiquarian book stacks and leather volumes"
            />
          </div>

          <div>
            <p className="text-[10px] uppercase tracking-[0.25em] text-[#D4A753] font-editorial-caps font-bold mb-3">
              BOOKSELLER SPOTLIGHT
            </p>
            <h2 className="text-2xl sm:text-3xl md:text-[34px] font-bold font-serif-heading text-white leading-snug">
              Preserving the Material Culture of the Book
            </h2>

            <p className="font-serif-body text-xs sm:text-sm text-[#D7C6B4] leading-7 mt-5">
              The most memorable bookshops invite readers to slow down, explore the shelves, and discover titles
              that may never appear on a conventional commercial algorithm. From knowledgeable recommendations
              to carefully assembled collections, independent bookselling remains an irreplaceable part of literary life.
            </p>

            <p className="font-serif-body text-xs sm:text-sm text-[#D7C6B4] leading-7 mt-3">
              BLUE BOOK's directory brings attention to these specialist practitioners and creates a
              dedicated forum for serious collectors and researchers to connect with the stores keeping print alive.
            </p>

            <button
              onClick={() => scrollTo("bookseller-directory")}
              className="mt-7 bg-[#8C2D19] text-white px-6 py-3.5 text-xs font-bold uppercase tracking-wider inline-flex items-center gap-2.5 cursor-pointer"
            >
              Consult the Bookseller Index
              <ArrowRight size={15} />
            </button>
          </div>
        </div>
      </section>

      {/* =========================================================
          FAQ ACCORDION
      ========================================================= */}
      <section className="bg-[#F4EEE2] border-t border-[#DED2C2] py-14">
        <div className="max-w-4xl mx-auto px-6 sm:px-10">
          <h2 className="text-2xl sm:text-3xl font-bold font-serif-heading text-center text-[#241A15] mb-8">
            Frequently Answered Inquiries
          </h2>

          {faqItems.map((faq, index) => (
            <div key={faq.question} className="border-b border-[#D3C4B2]">
              <button
                className="w-full py-5 flex justify-between items-center text-left gap-4 cursor-pointer"
                onClick={() => setOpenFaq(openFaq === index ? -1 : index)}
                aria-expanded={openFaq === index}
              >
                <span className="font-bold text-base sm:text-lg font-serif-heading text-[#241A15]">
                  {faq.question}
                </span>
                <ChevronDown
                  size={16}
                  className={`shrink-0 text-[#8C2D19] transition-transform duration-200 ${
                    openFaq === index ? "rotate-180" : ""
                  }`}
                />
              </button>

              {openFaq === index && (
                <p className="pb-5 font-serif-body text-[#5C4A3E] leading-relaxed text-xs sm:text-sm">
                  {faq.answer}
                </p>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* =========================================================
          SELLER DETAIL MODAL
      ========================================================= */}
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
            className="bg-[#FAF7F2] w-full max-w-2xl max-h-[90vh] overflow-y-auto relative border border-[#D6C7B2]"
          >
            <button
              onClick={() => setSelectedSeller(null)}
              className="absolute top-4 right-4 bg-white p-2 z-10 border border-[#D6C7B2] cursor-pointer"
              aria-label="Close"
            >
              <X size={17} />
            </button>

            <div className="h-56">
              <StoreImage
                src={selectedSeller.image}
                fallback={selectedSeller.fallback}
                alt={selectedSeller.name}
              />
            </div>

            <div className="p-6 sm:p-8">
              <p className="text-[10px] uppercase tracking-[0.2em] text-[#8C2D19] font-bold font-sans">
                {selectedSeller.specialty}
              </p>
              <h2 className="text-2xl sm:text-3xl font-bold font-serif-heading text-[#241A15] mt-1.5">
                {selectedSeller.name}
              </h2>
              <p className="text-xs font-serif-body text-[#7A6452] mt-1.5 flex items-center gap-1.5">
                <MapPin size={13} className="text-[#8C2D19]" />
                {selectedSeller.location}
              </p>
              <p className="font-serif-body text-xs sm:text-sm text-[#5C4A3E] leading-relaxed mt-4">
                {selectedSeller.description}
              </p>

              <div className="border-t border-[#D6C7B2] mt-6 pt-5">
                <h3 className="text-base font-bold font-serif-heading text-[#241A15] mb-3">
                  Catalog Holdings by This Bookseller
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
                      className="w-full flex justify-between items-center gap-3 text-left py-2.5 border-b border-[#E3D8CA] text-xs font-serif-body text-[#241A15] cursor-pointer"
                    >
                      <span>{book.title}</span>
                      <span className="text-[11px] text-[#8C2D19] font-semibold uppercase tracking-wider">
                        Examine Volume
                      </span>
                    </button>
                  ))}
              </div>

              <p className="text-[11px] font-serif-body text-[#7A6452] mt-4">
                Accredited directory listing. Contact dealer directly for condition reports and acquisition.
              </p>
            </div>
          </div>
        </div>
      )}

      {/* =========================================================
          BOOK DETAIL MODAL
      ========================================================= */}
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
            className="bg-[#FAF7F2] w-full max-w-4xl max-h-[90vh] overflow-y-auto relative border border-[#D6C7B2]"
          >
            <button
              onClick={() => setSelectedBook(null)}
              className="absolute top-4 right-4 bg-white p-2 z-10 border border-[#D6C7B2] cursor-pointer"
              aria-label="Close"
            >
              <X size={17} />
            </button>

            <div className="grid grid-cols-1 md:grid-cols-2">
              <div className="h-[280px] md:h-full md:min-h-[400px] bg-[#E8DFD1]">
                <StoreImage
                  src={selectedBook.image}
                  fallback={selectedBook.fallback}
                  alt={selectedBook.title}
                />
              </div>

              <div className="p-6 sm:p-8">
                <span className="text-[#8C2D19] uppercase tracking-[0.2em] text-[10px] font-bold font-sans">
                  {selectedBook.category}
                </span>

                <h2 className="text-2xl sm:text-3xl font-bold font-serif-heading text-[#241A15] mt-1.5">
                  {selectedBook.title}
                </h2>

                <p className="font-serif-body text-xs text-[#7A6452] mt-2">
                  By {selectedBook.author}
                </p>

                <p className="text-[11px] font-serif-body text-[#7A6452] mt-0.5">
                  Archival Edition: {selectedBook.year}
                </p>

                <p className="font-serif-body text-xs sm:text-sm text-[#5C4A3E] leading-relaxed mt-4">
                  {selectedBook.description}
                </p>

                <div className="mt-6 p-3.5 bg-[#F0E5D7] text-xs leading-relaxed text-[#5C4A3E] font-serif-body">
                  Bibliographic catalog entry. Full collation, paper watermarks, provenance seals, and
                  institutional delivery are coordinated through the host bookstore.
                </div>

                <button
                  onClick={() => setSelectedBook(null)}
                  className="mt-6 bg-[#8C2D19] text-white px-6 py-2.5 text-xs font-semibold uppercase tracking-wider cursor-pointer"
                >
                  Return to Directory
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}