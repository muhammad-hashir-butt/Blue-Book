
import React from "react";
import { Link } from "react-router-dom";

// ======================================================
// BLUE BOOK - HOMEPAGE BOOK CATEGORIES
// Images are loaded directly from the public folder.
// Prices, decorative icons and animations removed.
// ======================================================

// ======================================================
// SECTION 1 - LITERARY CLASSICS
// Featured Book + 4 Shelf Books
// ======================================================

const spotlightBook = {
  title: "East of Eden",
  author: "John Steinbeck",
  format: "Literary Classic",
  image: "/fiction/fiction1.webp",
      amazonUrl: "https://www.amazon.com/East-Eden-John-Steinbeck-ebook/dp/B001BC5HXG?ref_=ast_author_dp_rw&th=1&psc=1&dib=eyJ2IjoiMSJ9.eAx_2kWpGNTsZCRGqw2U4g9xKLCyb_NPXGhnlmF0s-cErnOG21a3KETUbv1005dHUz5daVhAwyq6B203JLEUGSbB-hP9b0ntkBduFk2LXJ95CHAqRMFDA-cfr2u9CnW-qFI6YkmLhgxvABviMEqJcx0uL14c1GmH5nmQVbUFqe4WYZesOrEkrjbTAIyW7FuKV14dhu7iQbbvWHom_ki_wch8N78034ban4xAYgkl36M.J7-f3Nz5GDRrNAvScmvy-lD4TXGztjngWMilb-a6Um0&dib_tag=AUTHOR",
  description:
    "Set in California's Salinas Valley, East of Eden is John Steinbeck's sweeping exploration of family, identity, love, jealousy, and the enduring struggle between good and evil. A remarkable American literary classic that continues to captivate generations of readers.",
};

const shelfBooks = [
  {
    id: 1,
    title: "A Tree Grows in Brooklyn",
    author: "Betty Smith",
    format: "Coming-of-Age Fiction",
    image: "/fiction/fiction2.webp",
    amazonUrl: "https://www.amazon.com/dp/0060736267",
    description:
      "An unforgettable story of family, resilience, and growing up in Brooklyn.",
  },
  {
    id: 2,
    title: "Animal Farm",
    author: "George Orwell",
    format: "Political Satire",
    image: "/fiction/fiction3.webp",
    amazonUrl: "https://www.amazon.de/Animal-Farm-zv%C3%AD%C5%99at-Signet-Classics/dp/0451526341",
    description:
      "A powerful allegorical novel exploring power, revolution, and corruption.",
  },
  {
    id: 3,
    title: "The Complete Novels of Jane Austen",
    author: "Jane Austen",
    format: "Classic Literature Collection",
    image: "/fiction/fiction4.webp",
   amazonUrl: "https://www.amazon.com/Complete-Novels-Austen-Knickerbocker-Classics/dp/1631066439",
    description:
      "A treasured collection of Austen's celebrated novels of love, society, and human relationships.",
  },
  {
    id: 4,
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    format: "American Literary Fiction",
    image: "/fiction/fiction5.jpg",
    amazonUrl: "https://www.amazon.com/dp/0060935464",
    description:
      "A landmark novel examining justice, compassion, prejudice, and moral courage.",
  },
];

// ======================================================
// SECTION 2 - PHILOSOPHY & THEOLOGY
// Five Books from Your Existing Theology Collection
// ======================================================

const wisdomBooks = [
  {
    id: 1,
    entry: "NO. 01",
    title: "Philosophy & Theology: A Lutheran Perspective",
    author: "Nathan Greeley",
    format: "Lutheran Philosophy & Theology",
    image: "/theology/theory1.webp",
    amazonUrl:
      "https://www.amazon.com/Philosophy-Theology-Perspective-Nathan-Greeley/dp/1952295793/ref=sr_1_1?dib=eyJ2IjoiMSJ9.hG-gRiRIlp2BYUf5Sz32nbJgpbjvZXcLu91AZHNY43x2OeVFcU6SqMQwwLSlsBilIiuITWLNdJMe2YkrT2ftztlatpihtyrtFSY-BhzkD2qiNBXaKyYp7XdAb4JIFth-fFmR9XoxY2D9I_GZdEXZxmjRef3ubLOR0PGyN4gKOD4zrWp92tS0zlpLokKEbHfvdM0T-oMPuz7HaK56mLeQ-881fFEiJZDo4VZxfeXfTM8.mc6ADVyT1DLVDAN9goDQkKqyesKLexinSV308YHDKnk&dib_tag=se&keywords=Philosophy+Theology+Nathan+Greeley&qid=1794239586&sr=8-1",
  },
  {
    id: 2,
    entry: "NO. 02",
    title: "Philosophy and Theology",
    author: "John D. Caputo",
    format: "Philosophy of Religion",
    image: "/theology/theory2.webp",
    amazonUrl: "https://www.amazon.com/dp/0687331269",
  },
  {
    id: 3,
    entry: "NO. 03",
    title: "101 Key Terms in Philosophy and Their Importance for Theology",
    author: "Kelly James Clark, Richard Lints & James K. A. Smith",
    format: "Philosophical Reference",
    image: "/theology/theory3.webp",
    amazonUrl: "https://www.amazon.com/dp/0664225241",
  },
  {
    id: 4,
    entry: "NO. 04",
    title: "The Blackwell Companion to Natural Theology",
    author: "William Lane Craig & J. P. Moreland (Editors)",
    format: "Natural Theology",
    image: "/theology/theory4.webp",
    amazonUrl: "https://www.amazon.com/dp/1405176571",
  },
  {
    id: 5,
    entry: "NO. 05",
    title: "Primary Readings in Philosophy for Understanding Theology",
    author: "Diogenes Allen & Eric O. Springsted (Editors)",
    format: "Philosophy & Christian Theology",
    image: "/theology/theory5.webp",
    amazonUrl: "https://www.amazon.com/dp/0664252087",
  },
];

// ======================================================
// REUSABLE VIEW BOOK BUTTON
// No hover styling or animations
// ======================================================

function ViewBookButton({ url, light = false, compact = false }) {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className={`
        inline-flex items-center justify-center
        font-sans font-bold uppercase tracking-wider
        text-center no-underline rounded-none
        ${compact ? "px-4 py-2 text-[10px]" : "px-6 py-3 text-xs"}
        ${
          light
            ? "bg-[#c29b38] text-[#241a15]"
            : "bg-[#241a15] text-[#fbf8f2]"
        }
      `}
    >
      View Book
    </a>
  );
}

// ======================================================
// MAIN HOMEPAGE COMPONENT
// ======================================================

export default function BookCategories() {
  return (
    <section className="w-full bg-[#fbf8f2]">
      <div className="max-w-7xl mx-auto px-5 sm:px-6 py-12 md:py-16 flex flex-col gap-16 font-serif">

        {/* ==================================================
            SECTION 1 - LITERARY CLASSICS
        ================================================== */}

        <section>

          {/* SECTION HEADER */}

          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-5 border-b-2 border-[#b8a68f] pb-5 mb-8">

            <div>
              <p className="text-[#8c2d19] font-sans font-bold text-[10px] tracking-[0.23em] uppercase mb-3">
                The Literary Collection
              </p>

              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#241a15] leading-tight">
                Literary Classics & Timeless Stories
              </h2>

              <p className="text-sm text-[#6e5d50] max-w-2xl leading-7 mt-3">
                Discover extraordinary novels that have shaped
                literature across generations. From deeply
                personal family stories to powerful social
                commentary, explore works by some of the world's
                most celebrated storytellers.
              </p>
            </div>

            <Link
              to="/literary-classic-fiction"
              className="shrink-0 text-xs font-bold text-[#8c2d19] font-sans underline underline-offset-4"
            >
              Explore All Literary Classics
            </Link>

          </div>

          {/* FEATURED BOOK + FOUR BOOKS */}

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-7 items-stretch">

            {/* ===================================
                LEFT - FEATURED BOOK
            =================================== */}

            <article className="lg:col-span-5 bg-[#241a15] text-[#fbf8f2] p-6 sm:p-8 border-2 border-[#c29b38] flex flex-col">

              <div className="flex items-center justify-between gap-3 border-b border-[#514032] pb-4 mb-7">

                <span className="text-[10px] tracking-[0.2em] text-[#c29b38] uppercase font-sans font-bold">
                  Featured Literary Classic
                </span>

                <span className="text-[10px] text-[#b8a68f] font-sans">
                  COLLECTION 01
                </span>

              </div>

              <div className="flex flex-col sm:flex-row lg:flex-col xl:flex-row gap-6 items-center sm:items-start lg:items-center xl:items-start flex-1">

                {/* FEATURED BOOK IMAGE */}

                <div className="w-44 h-64 shrink-0 bg-[#efe8db] p-2 border-2 border-[#c29b38] overflow-hidden flex items-center justify-center">

                  <img
                    src={spotlightBook.image}
                    alt={`${spotlightBook.title} by ${spotlightBook.author}`}
                    loading="lazy"
                    className="w-full h-full object-contain"
                  />

                </div>

                {/* FEATURED BOOK CONTENT */}

                <div className="w-full min-w-0">

                  <span className="inline-block text-[9px] font-sans font-bold text-[#c29b38] border border-[#c29b38] px-2 py-1 uppercase tracking-wide">
                    {spotlightBook.format}
                  </span>

                  <h3 className="text-2xl font-bold text-[#fbf8f2] mt-4 leading-tight">
                    {spotlightBook.title}
                  </h3>

                  <p className="text-sm text-[#c29b38] italic mt-2">
                    by {spotlightBook.author}
                  </p>

                  <p className="text-sm text-[#ded0be] mt-5 leading-7">
                    {spotlightBook.description}
                  </p>

                </div>

              </div>

              {/* FEATURED BOOK BUTTON - NO PRICE */}

              <div className="mt-8 pt-5 border-t border-[#514032]">

                <ViewBookButton
                  url={spotlightBook.amazonUrl}
                  light
                />

              </div>

            </article>

            {/* ===================================
                RIGHT - FOUR BOOKS
            =================================== */}

            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-5">

              {shelfBooks.map((book) => (

                <article
                  key={book.id}
                  className="bg-[#fdfbf7] p-4 border-2 border-[#b8a68f] flex flex-col"
                >

                  <div className="flex flex-col xl:flex-row gap-4 flex-1">

                    {/* BOOK IMAGE */}

                    <div className="w-32 h-44 shrink-0 mx-auto xl:mx-0 bg-[#efe8db] p-1.5 border border-[#c7b8a3] overflow-hidden flex items-center justify-center">

                      <img
                        src={book.image}
                        alt={`${book.title} by ${book.author}`}
                        loading="lazy"
                        className="w-full h-full object-contain"
                      />

                    </div>

                    {/* BOOK CONTENT */}

                    <div className="flex-1 min-w-0">

                      <span className="inline-block text-[9px] font-sans font-bold text-[#8c2d19] border border-[#c29b38] bg-[#fbf8f2] px-2 py-1 uppercase tracking-wide">
                        {book.format}
                      </span>

                      <h3 className="text-base font-bold text-[#241a15] mt-3 leading-snug">
                        {book.title}
                      </h3>

                      <p className="text-xs text-[#7a6452] italic mt-2">
                        by {book.author}
                      </p>

                      <p className="text-xs text-[#6b584a] leading-6 mt-3">
                        {book.description}
                      </p>

                    </div>

                  </div>

                  {/* BOOK BUTTON - NO PRICE */}

                  <div className="mt-5 pt-4 border-t border-[#e2d7c5]">

                    <ViewBookButton
                      url={book.amazonUrl}
                      compact
                    />

                  </div>

                </article>

              ))}

            </div>

          </div>

        </section>

        {/* ==================================================
            SIMPLE DECORATIVE DIVIDER
            No Sparkles / Cloud / Decorative Icons
        ================================================== */}

        <div className="flex items-center gap-5" aria-hidden="true">

          <span className="h-px flex-1 bg-[#d6c7b2]" />

          <span className="w-2 h-2 bg-[#8c2d19] rotate-45" />

          <span className="h-px flex-1 bg-[#d6c7b2]" />

        </div>

        {/* ==================================================
            SECTION 2 - PHILOSOPHY & THEOLOGY
        ================================================== */}

        <section className="bg-[#f4eee2] p-5 sm:p-8 border-2 border-[#b8a68f]">

          {/* SECTION HEADER */}

          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-5 border-b-2 border-[#d6c7b2] pb-6 mb-8">

            <div className="max-w-2xl">

              <p className="text-[#8c2d19] font-sans font-bold text-[10px] tracking-[0.23em] uppercase mb-3">
                The Intellectual Collection
              </p>

              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#241a15] leading-tight">
                Philosophy, Faith & Human Understanding
              </h2>

              <p className="text-sm text-[#6e5d50] leading-7 mt-4">
                Explore thought-provoking books on philosophy,
                theology, faith, reason, and the fundamental
                questions of human existence. This collection
                brings together scholarly perspectives and
                essential works exploring the relationship
                between belief and intellectual inquiry.
              </p>

            </div>

            <Link
              to="/theology-philosophy"
              className="shrink-0 text-xs font-bold text-[#8c2d19] font-sans underline underline-offset-4"
            >
              Explore Theology & Philosophy
            </Link>

          </div>

          {/* ===================================
              FIVE BOOKS GRID
          =================================== */}

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5">

            {wisdomBooks.map((book) => (

              <article
                key={book.id}
                className="bg-[#fdfbf7] p-4 border border-[#c7b8a3] flex flex-col"
              >

                {/* COLLECTION NUMBER */}

                <div className="flex items-center justify-between border-b border-[#e2d7c5] pb-3 mb-4">

                  <span className="text-[10px] font-sans font-bold tracking-widest text-[#8c2d19]">
                    {book.entry}
                  </span>

                  <span className="text-[9px] font-sans uppercase tracking-wide text-[#8f8174]">
                    Curated Book
                  </span>

                </div>

                {/* BOOK IMAGE */}

                <div className="w-full h-56 bg-[#efe8db] p-2 border border-[#c7b8a3] overflow-hidden flex items-center justify-center mb-5">

                  <img
                    src={book.image}
                    alt={`${book.title} by ${book.author}`}
                    loading="lazy"
                    className="w-full h-full object-contain"
                  />

                </div>

                {/* BOOK INFORMATION */}

                <div className="flex-1">

                  <span className="inline-block text-[9px] font-sans font-bold text-[#8c2d19] border border-[#c29b38] px-2 py-1 uppercase leading-4">
                    {book.format}
                  </span>

                  <h3 className="text-sm font-bold text-[#241a15] mt-4 leading-snug">
                    {book.title}
                  </h3>

                  <p className="text-xs text-[#7a6452] italic mt-3 leading-5">
                    by {book.author}
                  </p>

                </div>

                {/* VIEW BOOK BUTTON - NO PRICE */}

                <div className="mt-6 pt-4 border-t border-[#e2d7c5]">

                  <a
                    href={book.amazonUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`View ${book.title} on Amazon`}
                    className="w-full bg-[#241a15] text-[#fbf8f2] text-[10px] font-sans font-bold py-3 px-3 uppercase tracking-wider flex items-center justify-center text-center"
                  >
                    View Book
                  </a>

                </div>

              </article>

            ))}

          </div>

        </section>

      </div>
    </section>
  );
}
