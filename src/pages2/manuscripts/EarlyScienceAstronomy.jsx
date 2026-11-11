
import React from "react";
import { Link } from "react-router-dom";
import {
  ArrowLeft,
  BookOpen,
  ArrowUpRight,
  Compass,
} from "lucide-react";

export default function EarlyScienceAstronomy() {

  // ==========================================
  // EARLY SCIENCE & ASTRONOMY
  // Images: public/EarlyScienceAstronomy/
  // All images: .jpg
  // Titles matched with actual book covers
  // No prices
  // Georgia font
  // Compact five-column cards
  // No hover effects or animations
  // Amazon search links included
  // ==========================================

  const books = [
    {
      id: 1,
      title: "Galaxy Collisions in Deep Time",
      author: "Evan Quorren",
      format: "Galaxy Collisions & Deep Space Astronomy",
      image:
        "/EarlyScienceAstronomy/EarlyScienceAstronomy1.jpg",
      amazonUrl:
        "https://www.amazon.com/Galaxy-Collisions-Deep-Time-Capturing/dp/B0HHY7FLWR/ref=sr_1_1?dib=eyJ2IjoiMSJ9.p_fC8xCJkRgdGQofi54VG-Csfg_OwctOuPt6jtFHDyur3dUrZB9OCYPw7oxq1Awy3CwCzF8R3ZyuR77cZAjSiA.w6lxR3zJ-omdCa6DwYYCdN35oZU36CnkUG8rbImJrtw&dib_tag=se&keywords=Galaxy+Collisions+in+Deep+Time+Evan+Quorren&qid=1794427829&sr=8-1",
    },
    {
      id: 2,
      title:
        "The 2025 Discoveries of the James Webb Space Telescope",
      author: "Burrows Maxwell",
      format: "James Webb Telescope & Space Discoveries",
      image:
        "/EarlyScienceAstronomy/EarlyScienceAstronomy2.jpg",
      amazonUrl:
        "https://www.amazon.com/2025-Discoveries-James-Space-Telescope/dp/B0FM8LZSS6/ref=sr_1_1?dib=eyJ2IjoiMSJ9.9NcJIxcpqBmGQMPVaZh1iA.s8rVQijqHae4xe-MGSG8OUO6lkEAe22hdb0nH5s33LU&dib_tag=se&keywords=9798297817562&qid=1794427853&sr=8-1",
    },
    {
      id: 3,
      title:
"Material Space Theory: The Collapse of the Theories of Einstein, Bohr and Maxwell",      author: "Grzegorz Wasilewicz ",
      format: "Ancient Egyptian Astronomy & Mythology",
      image:
        "/EarlyScienceAstronomy/EarlyScienceAstronomy3.jpg",
      amazonUrl:
        "https://www.amazon.com/dp/B0H4JP333P/ref=sspa_dk_detail_0?psc=1&pd_rd_i=B0H4JP333P&pd_rd_w=t40Ie&content-id=amzn1.sym.ac210bc5-f6e8-418c-8a77-e0c4ca3bcd7f&pf_rd_p=ac210bc5-f6e8-418c-8a77-e0c4ca3bcd7f&pf_rd_r=WSH1N6BCD0YKECE61VJG&pd_rd_wg=jemzf&pd_rd_r=0fc9ddd3-b128-4668-90a6-5392248c465e&sp_csd=d2lkZ2V0TmFtZT1zcF9kZXRhaWw",
    },
    {
      id: 4,
      title:
        "Astronomy Explained for Non-Scientists: How the Universe Works",
      author: "The Practical Atlas",
      format: "Beginner Astronomy & Universe Exploration",
      image:
        "/EarlyScienceAstronomy/EarlyScienceAstronomy4.jpg",
      amazonUrl:
        "https://www.amazon.com/Astronomy-Explained-Non-Scientists-Universe-Scientists/dp/B0H8K9XMH4/ref=sr_1_1?dib=eyJ2IjoiMSJ9.9fWZEzlv8pmmHF9hqUh66EJIo0vUVAnXIbSbrOREoh7KzpK8n74C51XpAOl_85vNprinMNQIaOnreNmhuBBRdasgYa-Mg0qpQxSyZ1Ds7SDTq1c1YwSH2Uuvz1MUICXLVre-5r-Ta6pnnMfVDaO_Oowh5XriCasfZ3oybsKNmg8ih_NoT3KDW1enLum-R-R-P9y9zDHvsr3y9kb8Uw3Gpv70pPTT5toI3A1-pAsk0us.DPvlSoF6P9aaLGRVeKF0kMK3Mfsqzb5fK2bcrhhe3yE&dib_tag=se&keywords=Astronomy+Explained+for+Non-Scientists+The+Practical+Atlas&qid=1794427921&sr=8-1",
    },
    {
      id: 5,
      title:
        "The James Webb Space Telescope: How Does the James Webb Space Telescope Work?",
      author: "YB-Nayon Publishing",
      format: "Space Telescope Technology & Astronomy",
      image:
        "/EarlyScienceAstronomy/EarlyScienceAstronomy5.jpg",
      amazonUrl:
        "https://www.amazon.com/James-Webb-Space-Telescope-Exploration/dp/B0HJLZPYF6/ref=sr_1_1?dib=eyJ2IjoiMSJ9.OEjQk8gVBAxww5d_vTCmcA.H26KYsrZh8LrQWL3O1k-0Zsat2k_QEahhhV4QFFpz8I&dib_tag=se&keywords=9798173600721&qid=1794427945&sr=8-1",
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
            Early Science & Astronomy
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
                  Astronomy, Space Exploration & Scientific Discoveries
                </span>

              </div>

              <h1 className="text-3xl sm:text-4xl font-bold leading-tight">
                Early Science & Astronomy
              </h1>

              <p className="text-[14px] text-[#cbb9a5] mt-2 max-w-2xl leading-relaxed">
                Explore the wonders of the universe
                through remarkable works on galaxy
                collisions, modern space exploration,
                ancient astronomy, and scientific discovery.
                Discover fascinating insights into the
                James Webb Space Telescope, distant
                galaxies, planetary systems, ancient
                Egyptian celestial knowledge, and
                the mysteries of space and time.
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
                  alt={`${book.title} by ${book.author}`}
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

                <p className="text-[13px] text-[#8a593f] italic mt-2 leading-snug">
                  by {book.author}
                </p>

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
