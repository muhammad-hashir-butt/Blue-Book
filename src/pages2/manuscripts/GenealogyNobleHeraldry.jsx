
import React from "react";
import { Link } from "react-router-dom";
import {
  Award,
  ArrowLeft,
  BookOpen,
  ArrowUpRight,
} from "lucide-react";

export default function GenealogyNobleHeraldry() {

  // ==========================================
  // GENEALOGY & NOBLE HERALDRY
  // Images: public/Genealogy & Noble/
  // All images: .jpg
  // Correct titles and authors
  // Individual Amazon links
  // No prices or hover animations
  // ==========================================

  const books = [
    {
      id: 1,
      title:
        "Wilde Genealogy: European and Canadian Heritage 1800–1945",
      author: "Kathleen Wilde",
      format: "European & Canadian Family Genealogy",
      image: "/Genealogy & Noble/Genealogy & Noble1.jpg",
      amazonUrl:
        "https://www.amazon.com/Wilde-Genealogy-European-Canadian-1800-1945/dp/1986355926/ref=sr_1_1?dib=eyJ2IjoiMSJ9.uaujLabQircZ8GC84EuhnBZxcJZpFqT2_vMtgvJ_Qb3GjHj071QN20LucGBJIEps.9MHPYiGjxf_8CACoM1VByiOcNxsWlMqW4S4LZo1i7fI&dib_tag=se&keywords=Wilde+Genealogy+European+Canadian+Heritage+Kathleen+Wilde&qid=1794429933&sr=8-1",
    },
    {
      id: 2,
      title: "Our Mixed Nationality Ancestors",
      author: "William McKinney",
      format: "Family Ancestry & Multicultural Heritage",
      image: "/Genealogy & Noble/Genealogy & Noble2.jpg",
      amazonUrl:
        "https://www.amazon.com/Our-Mixed-Nationality-Ancestors-Medieval/dp/B0GT51JHBM/ref=sr_1_1?dib=eyJ2IjoiMSJ9.XmzfkOTu_mCCLfcaIWoH1TTSLJ-KBgWoXC3W2CX8ss60M89kij5jjkZ5K_riVOcyCtHN4AcKNlzJtmn5WWYxayw-HA_V_bHNBuZAvHxG_3Q.vjtH05sxJ-_YRz1TcDLcJX0ZFND7XAFGnQIxoB5mxfE&dib_tag=se&keywords=Our+Mixed+Nationality+Ancestors+William+McKinney&qid=1794429953&sr=8-1",
    },
    {
      id: 3,
      title: "The Noble and Gentle Men of England",
      author: "Evelyn Philip Shirley",
      format: "English Nobility & Historical Genealogy",
      image: "/Genealogy & Noble/Genealogy & Noble3.jpg",
      amazonUrl:
        "https://www.amazon.com/Noble-Gentle-Men-England-Annotated/dp/B09W7LP7LG/ref=sr_1_1?dib=eyJ2IjoiMSJ9.ah-Bf9JWaQWD4V6CbYm83I2a60QwNvsN9EAvTwhlxBTsrTBKSbRgO3wn9C7ejk7FcdXxefYq5c6UIeWaxraR6JiVn6s0R0tHP5klRWKVt7c.DWf5DTshFQjLdKyMP8JT6uZb9ygSebvXy5NqsfENz3I&dib_tag=se&keywords=The+Noble+and+Gentle+Men+of+England+Evelyn+Philip+Shirley&nsdOptOutParam=true&qid=1794429972&sr=8-1",
    },
    {
      id: 4,
      title:
        "Clan Shaw: A Concise History of Scotland’s Clan of Chattan Courage and the Sons of Shaw Mor (The Ancient Clans of Scotland)",
      author: "Bagtown Clans",
      format: "Scottish Clan Charteris & Heraldic History",
      image: "/Genealogy & Noble/Genealogy & Noble4.jpg",
      amazonUrl:
        "https://www.amazon.com/Clan-Shaw-Concise-Scotlands-Scotland/dp/B0F8989M88",
    },
    {
      id: 5,
      title:
        "The Ancient Clans of Scotland: Clan Baird",
      author: null,
      format: "Scottish Clan Baird & Heraldic Traditions",
      image: "/Genealogy & Noble/Genealogy & Noble5.jpg",
      amazonUrl:
        "https://www.amazon.com/Clan-Baird-Concise-Scotlands-Scotland/dp/B0FF55WMWK/ref=sr_1_1?dib=eyJ2IjoiMSJ9.R5xNwkGWm6ysYa7YiI2BOV8TSUOfg-ZR1X4NxeeCjF7ZnN9TAChRlb916w0iE94BgXc21EXeg7iTXc5LjpfnTBCo3LZzaBUujpKJu6Vdopb3_xKkLNfzqP5WV3SoH9ObIazyeK6Yenta_caxDU1R6jRKs_9TeQW4huEwW2YQXUG5wDg7ohc9-RjzWo9OkZR8HiOxmqIkUOR0poH-EF0hkMkZB-T6-WlxI1GOJtJ7QDo.dIqlSvZUCQ11W4r_mBnHRNnjt7dKzTNiho2uTK8_ZFc&dib_tag=se&keywords=The+Ancient+Clans+of+Scotland+Clan+Baird&qid=1794429996&sr=8-1",
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

        {/* BREADCRUMB NAVIGATION */}

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
            Genealogy & Noble Heraldry
          </span>
        </nav>

        {/* PAGE HEADER */}

        <header className="bg-[#241a15] text-[#fbf8f2] border border-[#c29b38] px-6 py-6 mb-6">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">

            <div className="flex-1 min-w-0">

              <div className="flex items-center gap-2 text-[#c29b38] text-[11px] font-bold tracking-[0.15em] uppercase mb-2">
                <Award size={15} />
                <span>
                  Family Ancestry, Noble Lineages & Scottish Clan Heritage
                </span>
              </div>

              <h1 className="text-3xl sm:text-4xl font-bold leading-tight">
                Genealogy & Noble Heraldry
              </h1>

              <p className="text-[14px] text-[#cbb9a5] mt-2 max-w-2xl leading-relaxed">
                Discover the fascinating history of
                family ancestry, European and Canadian
                heritage, English nobility, and Scotland's
                ancient clans. Explore genealogical
                records, multicultural family histories,
                noble lineages, traditional clan tartans,
                heraldic symbols, and ancestral legacies.
                These works celebrate the stories,
                traditions, and identities passed down
                through generations.
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

        {/* BOOK COLLECTION GRID */}

        <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 items-stretch">

          {books.map((book) => (
            <article
              key={book.id}
              className="bg-[#fdfbf7] border border-[#b8a68f] p-3 flex flex-col h-full min-w-0"
            >

              {/* BOOK COVER */}

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

              {/* CATEGORY BADGE */}

              <div className="mt-3">
                <span className="inline-block text-[10px] font-bold uppercase leading-snug text-[#8c2d19] border border-[#c29b38] px-2 py-1">
                  {book.format}
                </span>
              </div>

              {/* BOOK INFORMATION */}

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

                {/* AMAZON VIEW BOOK BUTTON */}

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

        {/* BOTTOM DIVIDER */}

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
