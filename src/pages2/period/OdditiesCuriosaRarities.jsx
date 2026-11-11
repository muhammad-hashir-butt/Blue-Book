
import React from "react";
import { Link } from "react-router-dom";
import {
  ArrowLeft,
  BookOpen,
  ArrowUpRight,
} from "lucide-react";

export default function OdditiesCuriosaRarities() {

  // ==========================================
  // ODDITIES, CURIOSA & RARITIES
  // Images: public/Oddities/
  // All images: .jpg
  // Titles matched with actual covers
  // No prices
  // Georgia font
  // Compact cards
  // No hover effects or animations
  // Amazon links included
  // ==========================================

  const books = [
    {
      id: 1,
      title:
        "Oddities in Print: A Multitude of Bizarre Occurrences, Peculiar People, & Unexplained Events from Newspapers of Yore",
      author: "Adam Benedict",
      format: "Historical Oddities & Newspaper Archives",
      image: "/Oddities/Oddities1.jpg",
      amazonUrl:
        "https://www.amazon.com/dp/B09MG6FSYW",
    },
    {
      id: 2,
      title:
        "A Curious Compendium of Strange Events, Volume Three",
      author: "Phineas Strange",
      format: "Strange Events & Unexplained Mysteries",
      image: "/Oddities/Oddities2.jpg",
      amazonUrl:
        "https://www.amazon.com/Curious-Compendium-Strange-Events-Three/dp/B0GJF1XQ64/ref=sr_1_1?dib=eyJ2IjoiMSJ9.OB_gsq_n9-PxWGH9nDfIwQ.biiiIjYgqqp4uIs3znnsScBZGRHWjrw9nbNSWiiwvWE&dib_tag=se&keywords=9798244031577&qid=1794425606&sr=8-1",
    },
    {
      id: 3,
      title:
        "Cursed Oddities: True Stories of the World's Most Haunted, Possessed, and Supernatural Objects",
      author: "Lori MacDonald",
      format: "Haunted Objects & Supernatural Mysteries",
      image: "/Oddities/Oddities3.jpg",
      amazonUrl:
        "https://www.amazon.com/CURSED-ODDITIES-Stories-Possessed-Supernatural/dp/B0HCX4866G/ref=sr_1_1?dib=eyJ2IjoiMSJ9.DeOUU0y17NViu3sszfQHL3jJAMuQYN3O0BfOy2oWyGE.qdqcLxB6kx7ArRWuSDC7GGjfQQs6A78xW0iTiWJBtyc&dib_tag=se&keywords=Cursed+Oddities+Lori+MacDonald&qid=1794425633&sr=8-1",
    },
    {
      id: 4,
      title:
        "Ghosts in Print: An Assemblage of Spirits, Spooks, & Spectres from Newspapers of Old",
      author: "Adam Benedict",
      format: "Ghost Stories & Historical Newspapers",
      image: "/Oddities/Oddities4.jpg",
      amazonUrl:
        "https://www.amazon.com/dp/B08KYJTTT9",
    },
    {
      id: 5,
      title:
        "Monsters in Print: A Collection of Curious Creatures Known Mostly from Newspapers",
      author: "Adam Benedict",
      format: "Historical Monsters & Cryptozoological Curiosities",
      image: "/Oddities/Oddities5.jpg",
      amazonUrl:
        "https://www.amazon.com/Monsters-Print-Collection-Creatures-Newspapers-ebook/dp/B07YMYQJLV/ref=sr_1_1?dib=eyJ2IjoiMSJ9.2WnPYgQGrqh7W5DfZiO6Cn0WPVhC1MvxiPBXtV7vUX9gne5t-f0T6jEgixQwsEcd9bLWXc-HItkI4gcgRv24e1gaoIpZHBLPqVwnJzIGWP8.jSF_uVAfbSCjiY_pwE9ClFk_LJu1AFOk5q3gpDY5x2M&dib_tag=se&keywords=Monsters+in+Print+Adam+Benedict&qid=1794425663&sr=8-1",
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
            Oddities, Curiosa & Rarities
          </span>

        </nav>

        {/* ======================================
            PAGE HEADER
        ====================================== */}

        <header className="bg-[#241a15] text-[#fbf8f2] border border-[#c29b38] px-6 py-6 mb-6">

          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">

            <div className="flex-1">

              <div className="text-[#c29b38] text-[11px] font-bold tracking-[0.15em] uppercase mb-2">
                Strange Histories, Supernatural Mysteries & Rare Curiosities
              </div>

              <h1 className="text-3xl sm:text-4xl font-bold leading-tight">
                Oddities, Curiosa & Rarities
              </h1>

              <p className="text-[14px] text-[#cbb9a5] mt-2 max-w-2xl leading-relaxed">
                Discover fascinating collections of
                historical oddities, unexplained mysteries,
                haunted objects, ghostly encounters,
                and strange creatures from forgotten
                newspaper archives. Explore remarkable
                accounts of bizarre events, supernatural
                phenomena, mysterious artifacts, and
                extraordinary stories that reveal
                the unusual side of history and culture.
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
