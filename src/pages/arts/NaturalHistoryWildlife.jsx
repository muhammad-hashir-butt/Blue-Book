
import React from "react";
import { Link } from "react-router-dom";
import {
  Leaf,
  ArrowLeft,
  BookOpen,
  ArrowUpRight,
} from "lucide-react";

export default function NaturalHistoryWildlife() {

  // ==========================================
  // NATURAL HISTORY & WILDLIFE
  // Images: public/Natural History/
  // All images: .jpg
  // Correct titles matched with covers
  // No prices
  // Compact cards
  // Georgia font
  // No hover animations
  // Amazon links included
  // ==========================================

  const books = [
    {
      id: 1,
      title: "A Moment in Time: A Journey from 1956–1958 to Record the Status of African Wildlife",
      author: "George & Jeanie Treichel",
      format: "African Wildlife & Natural History",
      image: "/Natural History/Natural History1.jpg",
      amazonUrl:
        "https://www.amazon.com/Moment-Time-Journey-African-Wildlife/dp/B0HQQ97RT9/ref=sr_1_8?Adv-Srch-Books-Submit.x=0&Adv-Srch-Books-Submit.y=0&dib=eyJ2IjoiMSJ9.Tn6aqi9UBIntpIK-qhDX5N5O-1VxXrudndHfXHIsvO_2SKuAqzdXyzxjvMYHDUafZXOmcGMnWC-jIDCS_j_8MXM073LQze41MNRFsWb_MzPyXIHGyu6Rs8BUmm0GH6hE55PzBwHOMQU0RLv-2NjOtiNq8bs9ilx2IwutH974kODHB2sQfWZS9gSrF53pr8gx8Kl78YNBitcKAvADgNFYAgwvg-ex4GfNQp81oIMBfCY.uGRXoEmFPDoHD_drR6iVgdZkvY3X-U6a9vDQ7XKNSC8&dib_tag=se&keywords=African+Wildlife+%26+Natural+History+Independent&qid=1794416983&s=books&sr=1-8&unfiltered=1",
    },
    {
      id: 2,
      title: "Connecticut Wildlife: Biodiversity, Natural History, and Conservation",
      author: "Geoffrey A. Hammerson",
      format: "Wildlife Conservation & Biodiversity",
      image: "/Natural History/Natural History2.jpg",
      amazonUrl:
        "https://www.amazon.com/Connecticut-Wildlife-Biodiversity-Natural-Conservation/dp/B0B6L4SWL1/ref=sr_1_1?dib=eyJ2IjoiMSJ9.mrR7yHOK_IVt-WIAqc1tuFBJX-O2tyMcyDhSFMS0gIoCBN-tGkLqs106axRKhMJRi7fCsAMSQiV4H2VeLmYtURV3I0mNUBz7p7NxJHLe0TboVOz2T7dzRAXKijDLwWdvtyyBYoNMY7XbI9L3JQon89LOg_YvSuuxDBCyIYf1yDOaSgmwjrB_KBEcdFcLwGjtFGMvLuUPtgdrZkvkC793B0zliXOfbIl8Ya0DkDwuhB0.8dpkPKuCRX2R1UZyqLkZWhWkAcIDSTrpZmaKBhMhW5Q&dib_tag=se&keywords=Connecticut+Wildlife+Geoffrey+A+Hammerson&qid=1794416563&sr=8-1",
    },
    {
      id: 3,
      title: "The Complete Bat Bible",
      author: "Arden Wythe",
      format: "Bat Identification & Natural History",
      image: "/Natural History/Natural History3.jpg",
      amazonUrl:
        "https://www.amazon.com/COMPLETE-BAT-BIBLE-Identification-Conservation/dp/B0H7FG4KLT/ref=sr_1_1?dib=eyJ2IjoiMSJ9.A5eEmaKX6sPLgWqc5nPCxw.i-ZtgwvAPUxkNz86ChrJg-tQVC9Eo15sU7hNWgPAba8&dib_tag=se&keywords=The+Complete+Bat+Bible+Arden+Wythe&qid=1794416589&sr=8-1",
    },
    {
      id: 4,
      title: "Squirrels: Wildlife Rehabilitation & Natural History",
      author: "Ame Vanorio",
      format: "Wildlife Rehabilitation & Animal Care",
      image: "/Natural History/Natural History4.jpg",
      amazonUrl:
        "https://www.amazon.com/Squirrels-Wildlife-Rehabilitation-Natural-History/dp/B0DC5BGC45/ref=sr_1_1?dib=eyJ2IjoiMSJ9.jBs0HNxu070j9YR3_QCsYw.EmFs_1aEzzrW25qs99pE2CyhS5BebyXK22r5s5mrprg&dib_tag=se&keywords=9798334952669&qid=1794416611&sr=8-1",
    },
    {
      id: 5,
      title: "Fox Tales: The Folklore and Natural History of the Fox",
      author: "Brian Fox Ellis",
      format: "Fox Folklore & Natural History",
      image: "/Natural History/Natural History5.jpg",
      amazonUrl:
        "https://www.amazon.com/Fox-Tales-Folklore-Natural-History/dp/B08C9CYZX9/ref=sr_1_1?dib=eyJ2IjoiMSJ9.FJrz8fxmBdxnk6OI48sDvg.F0Z8zZIUxRTWdWdbRZh4YKg2VPaQx8BqgY-Nwmun-GE&dib_tag=se&keywords=9798652744809&qid=1794416633&sr=8-1",
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

          <span>Arts & Special Interests</span>

          <span>/</span>

          <span className="font-bold text-[#8c2d19]">
            Natural History & Wildlife
          </span>

        </nav>

        {/* ==========================================
            PAGE HEADER
        ========================================== */}

        <header className="bg-[#241a15] text-[#fbf8f2] border border-[#c29b38] px-6 py-6 mb-6">

          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">

            <div className="flex-1">

              <div className="flex items-center gap-2 text-[#c29b38] text-[11px] font-bold tracking-[0.15em] uppercase mb-2">

                <Leaf size={16} />

                <span>
                  Wildlife, Biodiversity & Natural Conservation
                </span>

              </div>

              <h1 className="text-3xl sm:text-4xl font-bold leading-tight">
                Natural History & Wildlife
              </h1>

              <p className="text-[14px] text-[#cbb9a5] mt-2 max-w-2xl leading-relaxed">
                Discover fascinating works exploring wildlife,
                biodiversity, animal behavior, and the natural
                world. From African wildlife expeditions and
                Connecticut ecosystems to bats, squirrels,
                and foxes, explore the beauty of nature,
                wildlife rehabilitation, conservation,
                and the history of our planet's remarkable
                animal species.
              </p>

            </div>

            {/* ==========================================
                CURATED INDEX
            ========================================== */}

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

              {/* ==========================================
                  BOOK COVER IMAGE
              ========================================== */}

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
