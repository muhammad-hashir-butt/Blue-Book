
import React from "react";
import { Link } from "react-router-dom";
import {
  Compass,
  ArrowLeft,
  BookOpen,
  ArrowUpRight,
} from "lucide-react";

export default function SportsNaturalPursuits() {

  // ==========================================
  // SPORTS & NATURAL PURSUITS
  // Images: public/Sports/
  // All images: .jpg
  // Titles matched with actual covers
  // No prices
  // Compact cards
  // Georgia font
  // No animations
  // Amazon links included
  // ==========================================

  const books = [
    {
      id: 1,
      title: "Bayesian Sports Models in R",
      author: "Andrew Mack",
      format: "Sports Analytics & Statistical Modeling",
      image: "/Sports/Sports1.jpg",
      amazonUrl:
        "https://www.amazon.com/Bayesian-Sports-Models-Andrew-Mack/dp/B0D9GNZY2B/ref=sr_1_1?dib=eyJ2IjoiMSJ9.px0CgV5Ik3xi_3JlT_Ab_g.DOblhU8VyoI9Xd4TC1HmcjciDxZQ54Xm_h6wxzwmdig&dib_tag=se&keywords=9798333125392&qid=1794418500&sr=8-1",
    },
    {
      id: 2,
      title: "Sports Crossword Puzzle Book: 100 Fun & Challenging Puzzles",
      author: " A. Mayo ",
      format: "Sports Trivia & Crossword Puzzles",
      image: "/Sports/Sports2.jpg",
      amazonUrl:
        "https://www.amazon.com/Sports-Crossword-Puzzle-Book-Challenging/dp/B0GW52S5ZJ/ref=sr_1_1?dib=eyJ2IjoiMSJ9.rZZi4WsuynTqJLhHo8zoqiieQMJsRlIhhiZyVAJeNynmxXghq5j2qBwak3RB4Gu_V-Dw3uPhgGUMjMAa-FG6HRw6URyMnVLQw1J3mBl0FTxaDFSyTDVfgGA-uXyeDd6lWykwtIIDX1qHm7lx1EHgHafJZNaI59UO5hvl2NUFPyHtCpoG465j3TPLOXjcDTgQfpF-XsOeM5deTeCADj8Hij02g0dg8eA-RHt-uMlHlnE.AB7-l1kc4uTaRxBHoCJZx3iJZ6AK4gjVE4SU3YTZbBE&dib_tag=se&keywords=Sports+Crossword+Puzzle+Book+100+Fun+Challenging+Puzzles&nsdOptOutParam=true&qid=1794418526&sr=8-1",
    },
    {
      id: 3,
      title: "The Logic of Sports Betting",
      author: "Ed Miller & Matthew Davidow",
      format: "Sports Betting Theory & Analysis",
      image: "/Sports/Sports3.jpg",
      amazonUrl:
        "https://www.amazon.com/dp/1096805723",
    },
    {
      id: 4,
      title: "Polo: The Complete Guide to the Sport of Kings – Skills, Strategy & Success",
      author: "Sanjay Research Group",
      format: "Polo & Equestrian Sports",
      image: "/Sports/Sports4.jpg",
      amazonUrl:
        "https://www.amazon.com/Polo-Complete-Strategy-Success-Mandavi/dp/B0HD9386H4/ref=sr_1_1?dib=eyJ2IjoiMSJ9.9H2H3dq6ETovgwR-J0xDpBcTDlAw8J7ofTjxX6kEKAlN9c8CAdtfTduNzWBaMGVD2w17GEK-CmXRJaRwZ0bAu7cZdiEC-TqyDoJPYnkWHlLb95Up2eK5TwQq4-zcrMg78E5fk67ZjJmmQ4cUGnh3OiJzCTcgl1bEBkd9qDzcXHoqX8Qh9JvFM8SenvvYwcnuM9b8FXAx7UpDcgzvpswJc1RB03oNrXCuzq2FWuJ6AQ0.wdcfdiJbefK5f9PIo7unwSO0gYvXtryiG-ic2Y6rfUQ&dib_tag=se&keywords=Polo+Complete+Guide+Sport+of+Kings+Sanjay+Research+Group&nsdOptOutParam=true&qid=1794418570&sr=8-1",
    },
    {
      id: 5,
      title: "Epic Sports Stories",
      author: "Gerry Bird",
      format: "Inspirational Sports Stories",
      image: "/Sports/Sports5.jpg",
      amazonUrl:
        "https://www.amazon.com/Sports-Book-Teen-Boys-12-16/dp/B0DL281RLB/ref=sr_1_1?dib=eyJ2IjoiMSJ9.SurCEV_Bklf_LUBm_zLF0tVrBeDj5Lnaq9FEMU_aPfM0L93MQo7cLJAF9yDbpF7r2EYo7cGOjTcXJVfL3_qE0A.5e2KodC1nMUu0geu7QIE4jIlLGfiKF1ckstegj2sZHw&dib_tag=se&keywords=Epic+Sports+Stories+Gerry+Bird&qid=1794418600&sr=8-1",
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
            Sports & Natural Pursuits
          </span>

        </nav>

        {/* ==========================================
            PAGE HEADER
        ========================================== */}

        <header className="bg-[#241a15] text-[#fbf8f2] border border-[#c29b38] px-6 py-6 mb-6">

          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">

            <div className="flex-1">

              <div className="flex items-center gap-2 text-[#c29b38] text-[11px] font-bold tracking-[0.15em] uppercase mb-2">

                <Compass size={16} />

                <span>
                  Sports, Analytics & Athletic Excellence
                </span>

              </div>

              <h1 className="text-3xl sm:text-4xl font-bold leading-tight">
                Sports & Natural Pursuits
              </h1>

              <p className="text-[14px] text-[#cbb9a5] mt-2 max-w-2xl leading-relaxed">
                Explore the exciting world of sports through
                analytical studies, statistical modeling,
                engaging puzzles, competitive strategies,
                and inspirational athletic stories.
                Discover books covering sports analytics,
                recreational activities, polo,
                sporting history, and the remarkable
                achievements of athletes across disciplines.
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
                  alt={
                    book.author
                      ? `${book.title} by ${book.author}`
                      : book.title
                  }
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

                {book.author && (
                  <p className="text-[13px] text-[#8a593f] italic mt-2 leading-snug">
                    by {book.author}
                  </p>
                )}

                {/* ==========================================
                    AMAZON VIEW BOOK BUTTON
                ========================================== */}

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
