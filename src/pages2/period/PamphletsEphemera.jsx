
import React from "react";
import { Link } from "react-router-dom";
import {
  ArrowLeft,
  BookOpen,
  ArrowUpRight,
} from "lucide-react";

export default function PamphletsEphemera() {

  // ==========================================
  // PAMPHLETS & EPHEMERA
  // Images: public/Pamphlets/
  // All images: .jpg
  // Correct titles based on actual covers
  // No prices
  // Georgia font
  // Compact cards
  // No hover effects or animations
  // Amazon links included
  // ==========================================

  const books = [
    {
      id: 1,
      title: "Vintage Advertising Ephemera",
      author: "White Barn Press",
      format: "Vintage Advertising & Historical Ephemera",
      image: "/Pamphlets/Pamphlets1.jpg",
      amazonUrl:
"https://www.amazon.com/Vintage-Advertising-Ephemera-Collection-Scrapbooking/dp/B0962N5C25/ref=sr_1_5?dib=eyJ2IjoiMSJ9.pnbldxyB0-sg22-Ro_fPGlJ8ECus8Lno9iw-vYbZHfbYiArbPQzdp9WbqFwLrWQGHhqwfKtnk7B-MuRJdMThtrJjutx_INxVpn69DLJGcdoDRwAMGUWEKDVmKWGmIwKa3Pc2t8mwVNxSt7zzQVD8ryUEtMAGny6WcTkCS7RcHKJ3DmSlCbV7MOs_4SOS0H2HLH3DEEYOIi4LiFhMkU46ea5UUKBv8m9g3uW81_y5spNOq9s16m2qptP5DiMR_9ADRsKCThIBrJLn-_lCc6FokGlmyn35MGqdOYaBbML5uyU.D2EbW-Z-V3R7xIMnOVr8vnXTlcB6xP-57uAnvJ4VlRI&dib_tag=se&keywords=Vintage+Advertising+Ephemera+Vintage+Labels&qid=1794425162&sr=8-5"    },
    {
      id: 2,
      title:
        "Vintage Advertising Ephemera: Curated Historical Ads, Labels & Illustrations",
      author: "Leontine Vintage Press ",
      format: "Historical Advertising & Paper Collectibles",
      image: "/Pamphlets/Pamphlets2.jpg",
      amazonUrl:
        "https://www.amazon.com/Vintage-Advertising-Ephemera-Historical-Illustrations/dp/B0GZJP46RS/ref=sr_1_1?dib=eyJ2IjoiMSJ9.hevhZcXwwJdliMfmPoGnDaIp4F3-tfH1uStAR5Dady24mHM957hvZWpMzJablhlQhiUnG5fYitmWgZUZnFkwYFPj1mXhOtea31EybLI9VvxgbHLpRU7yeDU-3FIXHTbbNRgfEyu0WHvbnbPzzh9QHjUjCyGdEslCjd4eXpJkMzO5FO_tiN2qo5IAEbC3V1T-SfaFLZnMH0txKDF4cusalblCFQ1evbwyVnF1w5fVW_g.B8uLVequwGhpsrGePC-KlZLi8y-cfC6RufSCVTtiJUY&dib_tag=se&keywords=Vintage+Advertising+Ephemera+Curated+Historical+Ads&qid=1794425222&sr=8-1",
    },
    {
      id: 3,
      title:
        "Advertisement Ephemera Collection: Antique Advertisements",
      author: "Ilopa Journals",
      format: "Antique Advertising & Vintage Paper Crafts",
      image: "/Pamphlets/Pamphlets3.jpg",
      amazonUrl:
        "https://www.amazon.com/dp/171225944X",
    },
    {
      id: 4,
      title:
        "Advertisement Ephemera Collection: Vintage Colored Advertisements",
      author: "Ilopa Journals",
      format: "Vintage Colored Advertising & Ephemera",
      image: "/Pamphlets/Pamphlets4.jpg",
      amazonUrl:
        "https://www.amazon.com/dp/1711633186",
    },
    {
      id: 5,
      title: "Vintage Travel Ephemera",
      author: " EMMA KRISTEN ",
      format: "Vintage Travel & Historical Paper Collectibles",
      image: "/Pamphlets/Pamphlets5.jpg",
      amazonUrl:
        "https://www.amazon.com/vintage-travel-ephemera-Scrapbooking-Journals/dp/B0D92ZDPPJ/ref=sr_1_11?dib=eyJ2IjoiMSJ9.cC5x51oFIW_QiEtrXnu_F_6D0SzmYakH0nOI2MW9niiLOknmjHeZW1Ma7zOfXjMAhD2p6SQBhWKQN2iFgMjgGoJExoUjd4I22QLjgp961qE4p7nDgLpExnMHt4kh3Ch_Z1I7rob8PveJBxjVmTv3wrc1lyNolR0PHkIvJA97vHPbYLvEwYXp1afMjv-2xcPXCt7zhtNfUi4v5cAIW8sHAK4ITiyWQlpHDkIHTbAlfgg.F-t5QK8Z9qA_a__3tYZ-u3QIMCy0IXs-wfDHgq_Z7PU&dib_tag=se&keywords=vintage+travel+ephemera+pastries&qid=1794425278&sr=8-11",
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

        {/* ======================================
            BREADCRUMB NAVIGATION
        ====================================== */}

        <nav className="flex flex-wrap items-center gap-2 text-xs text-[#7a6452] mb-5">

          <Link
            to="/"
            className="flex items-center gap-1 text-[#7a6452] no-underline"
          >
            <ArrowLeft size={14} />
            Back to Home
          </Link>

          <span>/</span>

          <span>Period Treasures</span>

          <span>/</span>

          <span className="font-bold text-[#8c2d19]">
            Pamphlets & Ephemera
          </span>

        </nav>

        {/* ======================================
            PAGE HEADER
        ====================================== */}

        <header className="bg-[#241a15] text-[#fbf8f2] border border-[#c29b38] px-6 py-6 mb-6">

          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">

            <div className="flex-1">

              <div className="text-[#c29b38] text-[11px] font-bold tracking-[0.15em] uppercase mb-2">
                Vintage Advertisements, Travel Memorabilia & Paper Treasures
              </div>

              <h1 className="text-3xl sm:text-4xl font-bold leading-tight">
                Pamphlets & Ephemera
              </h1>

              <p className="text-[14px] text-[#cbb9a5] mt-2 max-w-2xl leading-relaxed">
                Discover fascinating collections of vintage
                advertising ephemera, historical labels,
                antique advertisements, colorful printed
                memorabilia, and nostalgic travel imagery.
                Explore beautifully curated paper treasures
                featuring classic commercial illustrations,
                traditional advertising designs, historic
                postcards, and decorative materials
                celebrating the visual culture of
                generations past.
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

        {/* ======================================
            BOOK COLLECTION GRID
        ====================================== */}

        <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 items-stretch">

          {books.map((book) => (

            <article
              key={book.id}
              className="bg-[#fdfbf7] border border-[#b8a68f] p-3 flex flex-col h-full"
            >

              {/* ======================================
                  BOOK COVER
              ====================================== */}

              <div className="w-full h-60 bg-[#efe8db] border border-[#c7b8a3] p-2 flex items-center justify-center overflow-hidden">

                <img
                  src={book.image}
                  alt={
                    book.author
                      ? `${book.title} by ${book.author}`
                      : book.title
                  }
                  loading="lazy"
                  className="w-full h-full object-contain"
                />

              </div>

              {/* ======================================
                  CATEGORY BADGE
              ====================================== */}

              <div className="mt-3">

                <span className="inline-block text-[10px] font-bold uppercase leading-snug text-[#8c2d19] border border-[#c29b38] px-2 py-1">
                  {book.format}
                </span>

              </div>

              {/* ======================================
                  BOOK INFORMATION
              ====================================== */}

              <div className="flex flex-col flex-1 mt-2">

                {/* BOOK TITLE */}

                <h2 className="text-[17px] font-bold text-[#241a15] leading-[1.35]">
                  {book.title}
                </h2>

                {/* AUTHOR / PUBLISHER */}

                {book.author && (
                  <p className="text-[13px] text-[#8a593f] italic mt-2 leading-snug">
                    by {book.author}
                  </p>
                )}

                {/* ======================================
                    AMAZON VIEW BOOK BUTTON
                ====================================== */}

                <div className="mt-auto pt-4">

                  <div className="border-t border-[#e2d7c5] pt-3">

                    <a
                      href={book.amazonUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`Find ${book.title} on Amazon`}
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

        {/* ======================================
            BOTTOM DIVIDER
        ====================================== */}

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
