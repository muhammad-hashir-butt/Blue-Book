
import React from "react";
import { Link } from "react-router-dom";
import {
  ArrowLeft,
  BookOpen,
  ArrowUpRight,
} from "lucide-react";

export default function NaturalHistoryAnimals() {

  // ==========================================
  // NATURAL HISTORY & ANIMALS
  // Images: public/Natural History & Animals/
  // All images: .jpg
  // Titles matched with actual book covers
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
        "Puerto Rican Land Snails: Diversity and Natural History",
      author: "Julio De Jesus Aponte",
      format: "Land Snails & Caribbean Natural History",
      image:
        "/Natural History & Animals/Natural History & Animals1.jpg",
      amazonUrl:
        "https://www.amazon.com/Puerto-Rican-Land-Snails-Diversity/dp/B0GTR1JK82/ref=sr_1_1?dib=eyJ2IjoiMSJ9.kLTCyCFvD_3bHGDjUOHHrINjRmwqEAFYQKM28VzctWte0jnT6nP2Ex5znWQwOPcPXz9cix5cjihFxCHbQa0vKYATwJ8nlfMAJ5svuKeY_hPrQu24ENl_-p9pcBGbFYCfi8npUrF8JxHjdTkNBL0kkX1TtBPG7Nb5INtzOJgTpp4.h7iDu-nc-j-XagG3vJ70_UCxkTisYUOwg_EDwhayopE&dib_tag=se&keywords=Puerto+Rican+Land+Snails+Julio+De+Jesus+Aponte&nsdOptOutParam=true&qid=1794425994&sr=8-1",
    },
    {
      id: 2,
      title:
        "NHP Natural History Publications: Biodiversity Edition, Issue 02 (2026)",
      author: "NHP Natural History Publications",
      format: "Biodiversity & Natural History Magazine",
      image:
        "/Natural History & Animals/Natural History & Animals2.jpg",
      amazonUrl:
        "https://www.amazon.com/Natural-History-Publications-Becket-Daniel/dp/B0H1BP336B/ref=sr_1_1?dib=eyJ2IjoiMSJ9.ugIiUhDRBrsx6KHHetb8d3IwpmlJw0CNaWbDKaBZH9agvfjswko7JgYqNNXY-I-Xadn71nLWha-q28pwuH-ifmj8KTdguo4Jxf2m9mgh17c.XFOTKDVFgmzTe04iGhJsmxMF7-GpT2_uxVlwE-0QUwY&dib_tag=se&keywords=NHP+Natural+History+Publications+Biodiversity+Edition+2026&qid=1794426019&sr=8-1",
    },
    {
      id: 3,
      title:
        "Birds of Mexico: A Natural History of Fifty Extraordinary Species",
      author: "Owen Hartley",
      format: "Mexican Birdlife & Ornithology",
      image:
        "/Natural History & Animals/Natural History & Animals3.jpg",
      amazonUrl:
        "https://www.amazon.com/BIRDS-MEXICO-Natural-History-Extraordinary/dp/B0H8M2CKB5/ref=sr_1_1?dib=eyJ2IjoiMSJ9.rjGoFpxsivtmnxEKe1jcZw.mm2xYDDgOl7ysp6zkmvXZ4RsFY0WhgDKv3swW8Lgsb4&dib_tag=se&keywords=9798186944782&qid=1794426042&sr=8-1",
    },
    {
      id: 4,
      title:
        "Leaf Sheep Sea Slug: Natural History Guide",
      author: "Jordan Blake",
      format: "Marine Biology & Unusual Sea Creatures",
      image:
        "/Natural History & Animals/Natural History & Animals4.jpg",
      amazonUrl:
        "https://www.amazon.com/Leaf-Sheep-Natural-History-Guide/dp/B0GW4LYH97/ref=sr_1_1?dib=eyJ2IjoiMSJ9.h_ZfLLNSKWfWzDb2VpQ03A.lMf3US6L6M2g4uVr6t5UEil7OrdOMtVRN79uTvRSJa4&dib_tag=se&keywords=9798253891414&qid=1794426059&sr=8-1",
    },
    {
      id: 5,
      title:
        "Birds of Panama: An Adult Coloring Book",
      author: "Wind, Water & Wrenches",
      format: "Tropical Birds & Wildlife Coloring",
      image:
        "/Natural History & Animals/Natural History & Animals5.jpg",
      amazonUrl:
        "https://www.amazon.com/Birds-Panama-Adult-Coloring-Wrenches/dp/B0HQZXB7JX/ref=sr_1_1?dib=eyJ2IjoiMSJ9.blZ4N5AoLzA-GYiVJaRRZ0LdabRmBICHHhXyxw7fg0QaaSXGXw1cfEy-JTGxslWDiPbZdECjjsOGHQNCftr6jV5_cekmVPY5lpMGd2KKqc8EEB2IqnACirbu5d-rV7u_5ZxiL4LOxsHJXFULD4OY2iB1vD3ZAL0rsAtzfZ0AwDegoJoh4ZvjzBy7jw6-zugVoiLPCNWWv94SjeBbPyPWrZeYG6GuSXdnF6s6p_GVGJw.gLs4CPfPXAQ1K0gqJuM12B4opqP-3B90MoYvjhkqEWw&dib_tag=se&keywords=Birds+of+Panama+Adult+Coloring+Book&qid=1794426082&sr=8-1",
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
            Natural History & Animals
          </span>

        </nav>

        {/* ======================================
            PAGE HEADER
        ====================================== */}

        <header className="bg-[#241a15] text-[#fbf8f2] border border-[#c29b38] px-6 py-6 mb-6">

          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">

            <div className="flex-1 min-w-0">

              <div className="text-[#c29b38] text-[11px] font-bold tracking-[0.15em] uppercase mb-2">
                Biodiversity, Wildlife & Natural Discoveries
              </div>

              <h1 className="text-3xl sm:text-4xl font-bold leading-tight">
                Natural History & Animals
              </h1>

              <p className="text-[14px] text-[#cbb9a5] mt-2 max-w-2xl leading-relaxed">
                Discover the extraordinary diversity of
                nature through fascinating studies of
                Caribbean land snails, biodiversity,
                remarkable birds of Mexico, unique marine
                creatures, and the colorful wildlife of
                Panama. Explore engaging natural history
                publications, wildlife guides, and
                beautifully illustrated collections
                celebrating the wonders of our planet.
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

                {/* AUTHOR / PUBLISHER NAME */}

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
