
import React from "react";
import { Link } from "react-router-dom";
import {
  Feather,
  ArrowLeft,
  ArrowUpRight,
  BookOpen,
} from "lucide-react";

export default function PoetryFineVerse() {

  // ==========================================
  // 5 POETRY BOOKS
  // Images: public/poetry/
  // Prices removed
  // Amazon book links included
  // ==========================================

  const books = [
    {
      id: 1,
      title: "The Universe in Verse: 15 Portals to Wonder through Science & Poetry",
      author: "Maria Popova",
      format: "Science & Poetry",
      image: "/poetry/poetry1.webp",
      amazonUrl: "https://www.amazon.com/dp/1635868831",
    },
    {
      id: 2,
      title: "Classic Poetry for Men: 50 Enduring Poems to Read and Live By",
      author: "Christopher A. Hostettler (Editor)",
      format: "Classic Poetry Anthology",
      image: "/poetry/poetry2.webp",
      amazonUrl: "https://www.amazon.com/s?k=9798991490726",
    },
    {
      id: 3,
      title: "Immortal Poems of the English Language",
      author: "Oscar Williams (Editor)",
      format: "English Poetry Anthology",
      image: "/poetry/poetry3.webp",
      amazonUrl: "https://www.amazon.com/dp/1982191546",
    },
    {
      id: 4,
      title: "The New Oxford Book of Christian Verse",
      author: "Donald Davie (Editor)",
      format: "Christian Poetry",
      image: "/poetry/poetry4.webp",
      amazonUrl: "https://www.amazon.com/s?k=0192134264",
    },
    {
      id: 5,
      title: "The Oxford Book of English Verse",
      author: "Christopher Ricks (Editor)",
      format: "English Verse Collection",
      image: "/poetry/poetry5.jpg",
      amazonUrl: "https://www.amazon.com/dp/0199691029",
    },
  ];

  return (
    <div className="w-full min-h-screen bg-[#fbf8f2] text-[#2c241e] font-serif py-10 px-6">
      <div className="max-w-7xl mx-auto">

        {/* BREADCRUMB NAVIGATION */}
        <div className="flex flex-wrap items-center gap-2 text-xs font-sans text-[#7a6452] mb-6">
          <Link
            to="/"
            className="hover:text-[#8c2d19] hover:underline flex items-center gap-1"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            Back to Home
          </Link>

          <span>/</span>
          <span>Categories</span>
          <span>/</span>

          <span className="text-[#8c2d19] font-bold">
            Poetry & Fine Verse
          </span>
        </div>

        {/* PAGE HEADER */}
        <div className="bg-[#241a15] text-[#fbf8f2] p-8 border-2 border-[#c29b38] shadow-md mb-10 text-center sm:text-left flex flex-col sm:flex-row justify-between items-center gap-6">

          <div>
            <div className="flex items-center justify-center sm:justify-start gap-2 text-[#c29b38] text-[10px] tracking-[0.3em] uppercase font-sans font-bold mb-2">
              <Feather className="w-4 h-4" />
              <span>Timeless Poetry & Literary Anthologies</span>
            </div>

            <h1 className="text-3xl sm:text-4xl font-bold font-serif">
              Poetry & Fine Verse
            </h1>

            <p className="text-xs text-[#b8a68f] mt-2 max-w-xl font-serif italic leading-relaxed">
              Explore distinguished poetry collections,
              celebrated literary anthologies, English verse,
              and extraordinary works that connect literature,
              science, faith, and the human imagination.
            </p>
          </div>

          <div className="text-center sm:text-right shrink-0 border-t sm:border-t-0 sm:border-l border-[#3d2c23] pt-4 sm:pt-0 sm:pl-8">
            <span className="text-xs text-[#c29b38] font-sans font-bold uppercase tracking-widest block">
              Curated Index
            </span>

            <span className="text-2xl font-bold font-sans text-white">
              {books.length} Volumes
            </span>
          </div>
        </div>

        {/* BOOK COLLECTION GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">

          {books.map((book) => (
            <div
              key={book.id}
              className="bg-[#fdfbf7] p-4 border-2 border-[#b8a68f] shadow-sm flex flex-col hover:border-[#8c2d19]"
            >

              {/* BOOK COVER */}
              <div className="w-full h-64 bg-[#efe8db] p-2 border border-[#c7b8a3] shadow-inner overflow-hidden mb-4 flex items-center justify-center">
                <img
                  src={book.image}
                  alt={`${book.title} by ${book.author}`}
                  loading="lazy"
                  className="w-full h-full object-contain"
                />
              </div>

              {/* BOOK DETAILS */}
              <div className="flex flex-col flex-1">

                {/* CATEGORY BADGE */}
                <span className="text-[9px] font-sans font-bold text-[#8c2d19] border border-[#c29b38] bg-[#fbf8f2] px-2 py-1 uppercase tracking-wide inline-block self-start mb-3">
                  {book.format}
                </span>

                {/* BOOK TITLE */}
                <h3 className="text-base font-bold text-[#241a15] leading-snug line-clamp-3 min-h-[70px]">
                  {book.title}
                </h3>

                {/* AUTHOR / EDITOR */}
                <p className="text-xs text-[#7a6452] italic mt-2 leading-relaxed">
                  by {book.author}
                </p>

                {/* AMAZON VIEW BUTTON */}
                <div className="mt-auto pt-5">
                  <div className="border-t border-[#e2d7c5] pt-4">

                    <a
                      href={book.amazonUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full bg-[#241a15] hover:bg-[#8c2d19] text-[#fbf8f2] text-xs font-sans font-bold py-3 px-4 uppercase tracking-wider flex items-center justify-center gap-2"
                    >
                      <BookOpen size={15} />
                      View Book
                      <ArrowUpRight size={15} />
                    </a>

                  </div>
                </div>

              </div>
            </div>
          ))}

        </div>

        {/* BOTTOM DIVIDER */}
        <div className="flex items-center justify-center gap-4 mt-16">
          <span className="h-[1px] w-full bg-[#d6c7b2]" />
          <span className="text-[#8c7355] text-xs whitespace-nowrap">
            ♦ ♦ ♦
          </span>
          <span className="h-[1px] w-full bg-[#d6c7b2]" />
        </div>

      </div>
    </div>
  );
}
