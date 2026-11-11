
import React from "react";
import { Link } from "react-router-dom";
import {
  ArrowLeft,
  BookOpen,
  ArrowUpRight,
} from "lucide-react";

export default function VintageChildrensClassics() {

  // ==========================================
  // VINTAGE CHILDREN'S CLASSICS
  // Images: public/Vintage/
  // All images: .jpg
  // Titles matched with actual book covers
  // No prices
  // Compact cards
  // Georgia font
  // No hover animations
  // Amazon links included
  // ==========================================

  const books = [
    {
      id: 1,
      title:
        "Vintage Christmas Coloring Book for Kids and Adults",
      author: "Alanna Page ",
      format: "Vintage Christmas & Holiday Coloring",
      image: "/Vintage/Vintage1.jpg",
      amazonUrl:
"https://www.amazon.com/Vintage-Christmas-Coloring-Book-Adults/dp/B0G29N5VN2/ref=sr_1_3?dib=eyJ2IjoiMSJ9.M8NN8Wy0HvHaOjRJwhNe_uPLHHEqzrvLjCUMhtwauqoM2FlpxEsFTeG9Ixn1skVkX0eNdqK7MeAOeVlrPHsQPImqEu-6TQLRLRCheRgQuk2oRnHoTQ2wz1JYYLqtIYN8gKEck-D0VGTnVjsjG0gnlUbtQDi5Bx4DzIZ3lPpWXz49IV2vgyuhmj-tgVJukdVmVMCBX-78AjsBrSlF0Y4aOGmf9gTu1vDj2HKvNJfx6g0.XeG7H_loN0-R59yCyueCgHFEyMwkCP0WVTrKWoNxFII&dib_tag=se&keywords=Vintage+Christmas+Coloring+Book+for+Kids+and+Adults&nsdOptOutParam=true&qid=1794424069&sr=8-3"    },
    {
      id: 2,
      title:
        "Old Fashioned Christmas Coloring Book",
      author: "Shiny Lemon Press",
      format: "Nostalgic Christmas Coloring",
      image: "/Vintage/Vintage2.jpg",
      amazonUrl:
"https://www.amazon.com/Old-Fashioned-Christmas-Coloring-Book/dp/B0F2H4C7FS/ref=pd_sbs_d_sccl_1_3/141-2292669-5146048?pd_rd_w=qsInn&content-id=amzn1.sym.0cb10f30-7cd4-4985-9826-58b2c1174c19&pf_rd_p=0cb10f30-7cd4-4985-9826-58b2c1174c19&pf_rd_r=CZBMMM58BZE1DTVGADAC&pd_rd_wg=af4s0&pd_rd_r=bc4a145d-f370-4a73-bf55-2fd083a4662a&pd_rd_i=B0F2H4C7FS&psc=1"    },
    {
      id: 3,
      title:
        "The Classic Tale of Peter Rabbit and Other Cherished Stories",
      author:
        " Shiny Lemon Press",
      format: "Illustrated Children's Classics",
      image: "/Vintage/Vintage3.jpg",
      amazonUrl:
        "https://www.amazon.co.uk/Country-Farm-Coloring-Book-Nostalgic/dp/B0H2PN4CKC",
    },
    {
      id: 4,
      title:
        "Retro Children Coloring Book: Little Homemakers",
      author: "Shiny Lemon Press",
      format: "Retro Children's Coloring & Activities",
      image: "/Vintage/Vintage4.jpg",
      amazonUrl:
        "https://www.amazon.com/Retro-Children-Coloring-Book-Homemakers/dp/B0H2J2QQS4/ref=sr_1_1?dib=eyJ2IjoiMSJ9.GqlTEDTOO3J62lumaPO82nsuCRGlzuKiNmlMLyh5h8Ss44wXFrD81ZkXwqOQvvdX_3UnKBvXnt715NRAGiHnbgnaFDTKrYyb9A9fSyJ27eyYYFyymG0xnR9fbTdVmDLEMbATxlmNAlaF4KDUhloWJ9TAJUA-OEZg1dy6iiEHjHhfBIsrWwspHHqiZ-Svtvc4hxVMl37zi4b4p94c7wfokEWnAE-_k32e61c_fvSVOIs.5eoiv2iZUbASSQ2pU8fCVLaonZz04EoWOG4TSChEQXc&dib_tag=se&keywords=Retro+Children+Coloring+Book+Little+Homemakers&qid=1794424211&sr=8-1",
    },
    {
      id: 5,
      title:
        "1950s Christmas Coloring Book",
      author: "Cozy Claudia Studio",
      format: "1950s Vintage Christmas Coloring",
      image: "/Vintage/Vintage5.jpg",
      amazonUrl:
        "https://www.amazon.com/1950s-Christmas-Coloring-Book-Traditions/dp/B0HJMWJXSS/ref=sr_1_1?dib=eyJ2IjoiMSJ9.SGgDleRiAXPPMK7aXr88HEvYb1qUYU4m6uAgt08gw-9irbe0gU2AK9iUeYNPIZUYySZj9ivgaJMbzNbpKJyN92K1M4uL9JKPLSqDRMMK0jQJSbeVt_t9qRrJT2goExab31tCClg1Ymv2qXFaJATUGR_8nD0-N_i6Paev43qPB7v6fS6ZAsXBJW_5bv4028csBYxZmDNT1gJpC-pUDA8veomXdXAqc8N2nA4AFaNOk10.JoT8fnYpjZBdnVaaW_H00XJIqgxeKWj0oxeEw-IwSu4&dib_tag=se&keywords=1950s+Christmas+Coloring+Book+Cozy+Claudia+Studio&qid=1794424246&sr=8-1",
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

          <span>Classical Rarities</span>

          <span>/</span>

          <span className="font-bold text-[#8c2d19]">
            Vintage Children's Classics
          </span>

        </nav>

        {/* ======================================
            PAGE HEADER
        ====================================== */}

        <header className="bg-[#241a15] text-[#fbf8f2] border border-[#c29b38] px-6 py-6 mb-6">

          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">

            <div className="flex-1">

              <div className="text-[#c29b38] text-[11px] font-bold tracking-[0.15em] uppercase mb-2">
                Timeless Stories, Vintage Christmas & Childhood Treasures
              </div>

              <h1 className="text-3xl sm:text-4xl font-bold leading-tight">
                Vintage Children's Classics
              </h1>

              <p className="text-[14px] text-[#cbb9a5] mt-2 max-w-2xl leading-relaxed">
                Discover nostalgic Christmas coloring books,
                beautifully illustrated childhood classics,
                retro holiday artwork, and timeless
                seasonal treasures. Explore charming
                vintage Santa illustrations, old-fashioned
                Christmas celebrations, beloved children's
                stories, and creative coloring collections
                inspired by the warmth and wonder
                of generations past.
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
