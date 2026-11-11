
import React from "react";
import { Link } from "react-router-dom";
import {
  Compass,
  ArrowLeft,
  BookOpen,
  ArrowUpRight,
} from "lucide-react";

export default function HistoricGamesSports() {

  // ==========================================
  // HISTORIC GAMES & SPORTS
  // Images: public/Historic Games/
  // All images: .jpg
  // Titles matched with actual book covers
  // Individual Amazon links
  // No prices
  // Georgia font
  // Compact five-column cards
  // No hover effects or animations
  // ==========================================

  const books = [
    {
      id: 1,
      title: "Boston's 100 Greatest Games",
      author: "Rob Sneddon",
      format: "Boston Sports History & Greatest Games",
      image: "/Historic Games/Historic Games1.jpg",
      amazonUrl:
        "https://www.amazon.com/Bostons-100-Greatest-Games-FIFTH/dp/1091829942/ref=sr_1_1?dib=eyJ2IjoiMSJ9.2HVtyfTKFtj5pv4TZ7eg8qB5AEdYXcka5VsFiJcIA-erPdZYgfypRCvMAJjb0ouzh3DMZZaBvnWTOIvgTKuXvPIQR_W2BZgJ-i1Fa4O4TglsmE_tFT_3AuUuQiIVMPOkroFzYsLo-okBJtePnsZ6cdy4GjFHpdGB63q6X10CoUrSBY2QrkUO8Pewfsa7olEFihcpfR3NW55dnSP5zZDZCbdl77PHZO54rLI6S7vcW7c.wbV_Bhj8P4G43395cUWz0l96silILSagqgCtUWrQr0Q&dib_tag=se&keywords=boston%27s+100+greatest+games+rob+sneddon&qid=1794430427&sr=8-1",
    },
    {
      id: 2,
      title:
        "The Game: The Unauthorized Complete History of Ohio State vs. Michigan",
      author: "Drew Jupina",
      format: "College Football Rivalries & Sporting History",
      image: "/Historic Games/Historic Games2.jpg",
      amazonUrl:
        "https://www.amazon.com/Game-Unauthorized-Complete-History-Michigan/dp/B0HJB94NBC/ref=sr_1_1?dib=eyJ2IjoiMSJ9.wpGIit9aDhONrWpmoi9CRAwawbhc-VPQlgc0rgSiRJTTQAJ0e0_YsZta5rnVaXvBzHBxLX2U0kdHYSXSaHfklFQzG4P2Og4GeOVtVhOuq9GsdHVYX2TzNU4ncL78FHdvjw3taOvRgAK1E302KozArFIn9S8cU8FUm5ta7O1R_TKLUUhPsSCRoFXBavJ-9okPqgkDLuJ6f_e11bwQeuog5LAvQ2RXI2F2jG8ckaQPox3k5tUnI95QkB3UgywvpDv135Mjxs-2hlsWIGzh_oFLPM21Wz0QbyHZdzngZFbuH8I.zAFzASlYIIOlbfwB3ZqttsA2h_hsxst1Js_Z0rCsIM8&dib_tag=se&keywords=The+Game+Drew+Jupina+Ohio+State+Michigan&qid=1794430450&sr=8-1",
    },
    {
      id: 3,
      title:
        "American Football Trivia: 2500 Questions",
      author: "Troy Oakes",
      format: "American Football Trivia & Sports Knowledge",
      image: "/Historic Games/Historic Games3.jpg",
      amazonUrl:
        "https://www.amazon.com/Big-Book-American-Football-Trivia/dp/B0HJY34PZX/ref=sr_1_1?dib=eyJ2IjoiMSJ9.uXJMtVTR6O2htOGzC7tDT6n2HRvdh9grEjFNODeKvSo3nhdXO7MEXlmTjYZMPu4Q4NvdRFZs0ALVOcfhH2HpcjgaTv3x2dqBCH_QezaWwOEr8D80bg8TK-m6in7UVcOOC9zRfUMnuTjdrwLU1uIL_oSlu-1ohD8sAaHt7LhC3EbK1gfBYi--vWRrWqZgF9pCRBl1EMOV2QZkuuMa0gd7IKzU-iYwy0lyHjrzyFiJxjo.SCpaxZAw-k5_IWjmNc3VhsUsIkj1qOmVBtZ2fx9fUlM&dib_tag=se&keywords=American+Football+Trivia+2500+Questions+Troy+Oakes&qid=1794430467&sr=8-1",
    },
    {
      id: 4,
      title: "The Women in Sports Trivia Game Book",
      author: null,
      format: "Women's Sports & Trivia Challenges",
      image: "/Historic Games/Historic Games4.jpg",
      amazonUrl:
        "https://www.amazon.com/Women-Sports-Trivia-Game-Book/dp/B0BW2C391R/ref=sr_1_1?dib=eyJ2IjoiMSJ9.Gs2ixuldBJKTEFinX4KIqqI5h1GosViEM0kseezxMSfqeuTcpsiUqYKF0klZ1VgIvvkMWq7dh38WrdhCGUJUCgsU3XcPwyK3QBFEmjpSftDnqdMjTCxnnCeatpI97MmttKYEXSHaphxU4VCFYje2ud3BoI4yPnQ78ecfl6O_WiG5OS2fdtD58hG7cW8cmS0zAToz4T2lL8s4q73Wm0uADtsf-mi20LHt_tawkrQ7eAo.48hCCdO9_o8mSJP8TbgDy_VUyjIjSRoU0g3nG4uZd1c&dib_tag=se&keywords=The+Women+in+Sports+Trivia+Game+Book+100+Questions&nsdOptOutParam=true&qid=1794430491&sr=8-1",
    },
    {
      id: 5,
      title:
        "The Big Book of Basketball Trivia: 2500 Questions and Answers",
      author: "Troy Oakes",
      format: "Basketball History, Records & Trivia",
      image: "/Historic Games/Historic Games5.jpg",
      amazonUrl:
        "https://www.amazon.com/Big-Book-Basketball-Trivia-Championships/dp/B0HJSZ2GC2/ref=sr_1_1?dib=eyJ2IjoiMSJ9.MHxmjqDFoqT0-goObzIEtupLVs1nTMbv-5AphTXt2wgmKXz2MYzYpJIdFM2oV8-fyqyUX8cDoGeMekc56YrOne99LNPZQ89bF_W9_RP4mJi15_ySOD50ziE1HseYyGaBeJR4iOapimxM8Lzp-2fdvL4jM5FZqCGqKRvvMk9QdRoDfVmOtzHx46Lcmb2H5nCR89rRNAKcaCv7uL6xNXHsdg0UaMXKr6HMJZCrLXeSfbQ.25mnlFnFmvdBrFG7eS57PgeKxgvZ_fq2Xu_7erQb060&dib_tag=se&keywords=The+Big+Book+of+Basketball+Trivia+2500+Troy+Oakes&nsdOptOutParam=true&qid=1794430517&sr=8-1",
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

          <span>Manuscripts & Science</span>

          <span>/</span>

          <span className="font-bold text-[#8c2d19]">
            Historic Games & Sports
          </span>

        </nav>

        {/* ======================================
            PAGE HEADER
        ====================================== */}

        <header className="bg-[#241a15] text-[#fbf8f2] border border-[#c29b38] px-6 py-6 mb-6">

          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">

            <div className="flex-1 min-w-0">

              <div className="flex items-center gap-2 text-[#c29b38] text-[11px] font-bold tracking-[0.15em] uppercase mb-2">

                <Compass size={15} />

                <span>
                  Legendary Games, Sporting History & Trivia
                </span>

              </div>

              <h1 className="text-3xl sm:text-4xl font-bold leading-tight">
                Historic Games & Sports
              </h1>

              <p className="text-[14px] text-[#cbb9a5] mt-2 max-w-2xl leading-relaxed">
                Explore unforgettable moments in American
                sports history, legendary football rivalries,
                iconic basketball achievements, and
                remarkable athletic performances. Discover
                fascinating collections celebrating Boston's
                greatest games, the historic Ohio State
                versus Michigan rivalry, American football
                trivia, women's sporting achievements,
                and basketball records. These engaging
                works bring together sporting heritage,
                memorable competitions, and entertaining
                trivia for passionate sports enthusiasts.
              </p>

            </div>

            {/* ======================================
                CURATED INDEX
            ====================================== */}

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
              className="bg-[#fdfbf7] border border-[#b8a68f] p-3 flex flex-col h-full min-w-0"
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

                {/* AUTHOR NAME */}

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
