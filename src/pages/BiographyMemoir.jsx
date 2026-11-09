
import React from "react";
import { Link } from "react-router-dom";
import {
  Sparkles,
  ArrowLeft,
  ArrowUpRight,
  BookOpen,
} from "lucide-react";

export default function BiographyMemoir() {

  // ========================================================
  // 5 REAL BOOKS - TITLES, AUTHORS & AMAZON LINKS
  //
  // Images located in: public/biography/
  // No prices displayed.
  // Amazon links use identified book edition IDs.
  // ========================================================

  const books = [
    {
      id: 1,
      title: "Communion: Finding My Way Back to Faith",
      author: "J. D. Vance",
      format: "Biography & Faith",
      image: "/biography/biography1.webp",
      amazonUrl: "https://www.amazon.com/dp/B0GTQMJ53N",
    },
    {
      id: 2,
      title: "Hillbilly Elegy: A Memoir of a Family and Culture in Crisis",
      author: "J. D. Vance",
      format: "Personal Memoir",
      image: "/biography/biography2.webp",
      amazonUrl: "https://www.amazon.com/dp/0062300555",
    },
    {
      id: 3,
      title: "Uniting the States: Six Crucial Moments That Forged the American Miracle",
      author: "Brian Kilmeade",
      format: "Historical Biography",
      image: "/biography/biography3.webp",
      amazonUrl: "https://www.amazon.com/dp/006349003X",
    },
    {
      id: 4,
      title: "The Case for America: An Argument on Behalf of Our Nation",
      author: "Bret Baier with Catherine Whitney",
      format: "History & National Identity",
      image: "/biography/biography4.webp",
      amazonUrl: "https://www.amazon.com/dp/0063360802",
    },
    {
      id: 5,
      title: "The Steps: A Memoir",
      author: "Sylvester Stallone",
      format: "Autobiography & Memoir",
      image: "/biography/biography5.jpg",
      amazonUrl: "https://www.amazon.com/dp/0063443910",
    },
  ];

  return (
    <div className="w-full min-h-screen bg-[#fbf8f2] text-[#2c241e] font-serif py-10 px-6">

      <div className="max-w-7xl mx-auto">

        {/* =======================================
            BREADCRUMB
        ======================================= */}

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
            Biography & Memoir
          </span>

        </div>

        {/* =======================================
            PAGE HEADER
        ======================================= */}

        <div className="bg-[#241a15] text-[#fbf8f2] p-8 border-2 border-[#c29b38] shadow-md mb-10 text-center sm:text-left flex flex-col sm:flex-row justify-between items-center gap-6">

          <div>
            <div className="flex items-center justify-center sm:justify-start gap-2 text-[#c29b38] text-[10px] tracking-[0.3em] uppercase font-sans font-bold mb-2">

              <Sparkles className="w-4 h-4" />

              <span>
                Extraordinary Lives & Personal Stories
              </span>

            </div>

            <h1 className="text-3xl sm:text-4xl font-bold font-serif">
              Biography & Memoir
            </h1>

            <p className="text-xs text-[#b8a68f] mt-2 max-w-xl font-serif italic leading-relaxed">
              Explore remarkable lives, personal memoirs,
              historical biographies, and powerful stories
              of perseverance, faith, and human experience.
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

        {/* =======================================
            BOOK COLLECTION GRID
        ======================================= */}

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">

          {books.map((book) => (

            <div
              key={book.id}
              className="bg-[#fdfbf7] p-4 border-2 border-[#b8a68f] shadow-sm flex flex-col hover:border-[#8c2d19]"
            >

              {/* BOOK COVER IMAGE */}

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

                {/* FORMAT BADGE */}

                <span className="text-[9px] font-sans font-bold text-[#8c2d19] border border-[#c29b38] bg-[#fbf8f2] px-2 py-1 uppercase tracking-wide inline-block self-start mb-3">
                  {book.format}
                </span>

                {/* BOOK TITLE */}

                <h3 className="text-base font-bold text-[#241a15] leading-snug line-clamp-3 min-h-[70px]">
                  {book.title}
                </h3>

                {/* AUTHOR NAME */}

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

        {/* =======================================
            BOTTOM DIVIDER
        ======================================= */}

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
