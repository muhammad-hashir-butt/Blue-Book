
import React from "react";
import { Link } from "react-router-dom";
import {
  Search,
  ArrowLeft,
  ArrowUpRight,
  BookOpen,
} from "lucide-react";

export default function CrimeThrillerMystery() {

  // ==========================================
  // CRIME, THRILLER & MYSTERY
  // Images: public/crime/
  // Titles matched with actual book covers
  // No prices
  // Compact cards
  // No hover animations
  // Amazon book search / edition links
  // ==========================================

  const books = [
    {
      id: 1,
      title: "The Mother",
      author: "J. E. Clarkson",
      format: "Detective Mystery & Suspense",
      image: "/crime/crime1.jpg",
      amazonUrl:
        "https://www.amazon.com/Mother-Detective-Monroe-Thriller-Monroe-ebook/dp/B09X2G1446/ref=sr_1_1?dib=eyJ2IjoiMSJ9.VClkS1XQhcl15PBot8VXNA.d_xOiBwDZ5lQY6j69MW_ueJGKfJcnLa82WL0Lnix1tA&dib_tag=se&keywords=The+Mother+J+E+Clarkson+Kate+Monroe&qid=1794412065&sr=8-1",
    },
    {
      id: 2,
      title: "Storm Surge",
      author: "B. D. Toms",
      format: "Crime & Mystery Thriller",
      image: "/crime/crime2.jpg",
      amazonUrl:
        "https://www.amazon.com/Storm-Surge-B-D-Toms-ebook/dp/B0HHB65DRG/ref=sr_1_1?dib=eyJ2IjoiMSJ9.xiQtQuNFzB9yN5vsalMOAl0F4MEqJ23jZfjLeRk3sto.GFgfDtOL_LpNdnMrXdo3kWfMrg88VQhdonJesQ6afE0&dib_tag=se&keywords=Storm+Surge+B+D+Toms&qid=1794412094&sr=8-1",
    },
    {
      id: 3,
      title: "Dead Man's Tiles",
      author: "Mary Stowell & Walter A. Cook",
      format: "Mahjong Murder Mystery",
      image: "/crime/crime3.jpg",
      amazonUrl:
        "https://www.amazon.com/Dead-Mans-Tiles-Mahjong-Mystery/dp/B0FXR9X3P5/ref=sr_1_1?dib=eyJ2IjoiMSJ9.I5iuYaZPQtezmB2jeffhzw.RNgUYGD8LahCxJYlrWtaZNvda0gmvBrtf-V3QOYG2w4&dib_tag=se&keywords=dead+man%27s+tiles+mary+stowell+walter+cook&qid=1794412119&sr=8-1",
    },
    {
      id: 4,
      title: "Whitewashed Tombs",
      author: "Russell Jones",
      format: "Psychological Crime Thriller",
      image: "/crime/crime4.jpg",
      amazonUrl:
        "https://www.amazon.com/Whitewashed-Tombs-Psychological-Conspiracy-Thrillers-ebook/dp/B0GTW2536D/ref=sr_1_1?dib=eyJ2IjoiMSJ9.zXcsSG3exbbKKWBlVCk3Pw.hiGuVcaph57vRMdM-G1JmPk-I1HUNJDPdXGXO5H94AU&dib_tag=se&keywords=Whitewashed+Tombs+Russell+Jones&qid=1794412148&sr=8-1",
    },
    {
      id: 5,
      title: "The Lamb",
      author: "J. E. Clarkson",
      format: "Detective Crime & Serial Killer Thriller",
      image: "/crime/crime5.jpg",
      amazonUrl:
        "https://www.amazon.com/dp/B09LGY94SK",
    },
  ];

  return (
    <div
      className="w-full min-h-screen bg-[#fbf8f2] text-[#241a15] px-4 sm:px-6 py-7"
      style={{
        fontFamily: "Georgia, 'Times New Roman', serif",
      }}
    >
      <div className="max-w-7xl mx-auto">

        {/* ==========================================
            BREADCRUMB NAVIGATION
        ========================================== */}

        <nav className="flex flex-wrap items-center gap-2 text-xs text-[#7a6452] mb-5">

          <Link
            to="/"
            className="flex items-center gap-1 text-[#7a6452] no-underline"
          >
            <ArrowLeft size={14} />
            Back to Home
          </Link>

          <span>/</span>

          <span>Thought & Science</span>

          <span>/</span>

          <span className="font-bold text-[#8c2d19]">
            Crime, Thriller & Mystery
          </span>

        </nav>

        {/* ==========================================
            PAGE HEADER
        ========================================== */}

        <header className="bg-[#241a15] text-[#fbf8f2] border border-[#c29b38] px-6 py-6 mb-6">

          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">

            <div className="flex-1">

              <div className="flex items-center gap-2 text-[#c29b38] text-[11px] font-bold tracking-[0.15em] uppercase mb-2">

                <Search size={16} />

                <span>
                  Suspense, Intrigue & Detective Mysteries
                </span>

              </div>

              <h1 className="text-3xl sm:text-4xl font-bold leading-tight">
                Crime, Thriller & Mystery
              </h1>

              <p className="text-[14px] text-[#cbb9a5] mt-2 max-w-2xl leading-relaxed">
                Discover gripping detective investigations,
                psychological suspense, chilling murder
                mysteries, and unforgettable crime thrillers
                from acclaimed contemporary storytellers.
              </p>

            </div>

            {/* CURATED INDEX */}

            <div className="sm:border-l border-[#594638] sm:pl-6 shrink-0">

              <span className="block text-[11px] font-bold uppercase tracking-wider text-[#c29b38]">
                Curated Index
              </span>

              <span className="block text-xl font-bold text-white mt-1">
                {books.length} Volumes
              </span>

            </div>

          </div>

        </header>

        {/* ==========================================
            BOOK COLLECTION GRID
        ========================================== */}

        <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 items-stretch">

          {books.map((book) => (

            <article
              key={book.id}
              className="bg-[#fdfbf7] border border-[#b8a68f] p-3 flex flex-col h-full"
            >

              {/* BOOK COVER */}

              <div className="w-full h-60 bg-[#efe8db] border border-[#c7b8a3] p-2 flex items-center justify-center overflow-hidden">

                <img
                  src={book.image}
                  alt={`${book.title} by ${book.author}`}
                  loading="lazy"
                  className="w-full h-full object-contain"
                />

              </div>

              {/* ==========================================
                  CATEGORY BADGE
              ========================================== */}

              <div className="mt-3">

                <span className="inline-block text-[10px] font-bold uppercase leading-snug text-[#8c2d19] border border-[#c29b38] px-2 py-1">
                  {book.format}
                </span>

              </div>

              {/* ==========================================
                  BOOK DETAILS
              ========================================== */}

              <div className="flex flex-col flex-1 mt-2">

                {/* BOOK TITLE */}

                <h2 className="text-[17px] font-bold text-[#241a15] leading-[1.35]">
                  {book.title}
                </h2>

                {/* AUTHOR NAME */}

                <p className="text-[13px] text-[#8a593f] italic mt-2 leading-snug">
                  by {book.author}
                </p>

                {/* ==========================================
                    AMAZON VIEW BOOK BUTTON
                ========================================== */}

                <div className="mt-auto pt-4">

                  <div className="border-t border-[#e2d7c5] pt-3">

                    <a
                      href={book.amazonUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`Find ${book.title} by ${book.author} on Amazon`}
                      className="w-full bg-[#241a15] text-[#fffaf4] text-[12px] font-bold py-3 px-3 uppercase tracking-wide flex items-center justify-center gap-2 no-underline"
                    >

                      <BookOpen size={15} />

                      View Book

                      <ArrowUpRight size={15} />

                    </a>

                  </div>

                </div>

              </div>

            </article>

          ))}

        </section>

        {/* ==========================================
            BOTTOM DIVIDER
        ========================================== */}

        <div className="flex items-center gap-3 mt-9">

          <span className="h-px flex-1 bg-[#d6c7b2]" />

          <span className="text-[#8c7355] text-xs">
            ♦ ♦ ♦
          </span>

          <span className="h-px flex-1 bg-[#d6c7b2]" />

        </div>

      </div>
    </div>
  );
}
