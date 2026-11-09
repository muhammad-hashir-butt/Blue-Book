
import React from "react";
import { Link } from "react-router-dom";
import {
  BookOpen,
  ArrowLeft,
  ArrowUpRight,
} from "lucide-react";

export default function HumanitiesSocialSciences() {

  // ==========================================
  // HUMANITIES & SOCIAL SCIENCES
  // Images: public/humanities/
  // Actual titles and authors
  // Prices removed
  // Amazon search links included
  // ==========================================

  const books = [
    {
      id: 1,
      title: "Our Biggest Fight",
      author: "Frank H. McCourt Jr. with Michael J. Casey",
      format: "Digital Society & Technology",
      image: "/humanities/humanities1.webp",
      amazonUrl:
        "https://www.amazon.com/Our-Biggest-Fight-Reclaiming-Humanity/dp/B0CRSVH5BL/ref=sr_1_1?dib=eyJ2IjoiMSJ9.w43cI6WXFNc8wh5iw2-zZg.eJiCJko0Q7PBJwQi3GVHthLyvz5CDKUQv640liCxc5I&dib_tag=se&keywords=9780593728512&qid=1794016119&sr=8-1",
    },
    {
      id: 2,
      title: "The Last Book Written by a Human",
      author: "Jeff Burningham",
      format: "Humanity & Artificial Intelligence",
      image: "/humanities/humanities2.webp",
      amazonUrl:
        "https://www.amazon.com/Last-Book-Written-Human-Becoming/dp/B0FQ6B81CJ/ref=sr_1_1?dib=eyJ2IjoiMSJ9.hv3fMMYOapKXdQTl_fEC8Q.1_TmX5ru1t7gx2F-Km6JoLXfVg2VZB2xURG2WcG1nJc&dib_tag=se&keywords=9781637634561&qid=1794016144&sr=8-1",
    },
    {
      id: 3,
      title: "Social Sciences:An Introduction to the Study of Society ",
      author: " Karter White ",
      format: "Social Sciences & Culture",
      image: "/humanities/humanities3.jpg",
      amazonUrl:
        "https://www.amazon.com/Social-Science-Introduction-Study-Society/dp/1635492602",
    },
    {
      id: 4,
      title: "Building Social Business",
      author: "Muhammad Yunus",
      format: "Social Business & Economics",
      image: "/humanities/humanities4.jpg",
      amazonUrl:
        "https://www.amazon.com/Building-Social-Business-audiobook/dp/B003LTOJ5O/ref=sr_1_1?dib=eyJ2IjoiMSJ9.RAPp98AYuzP_WZttHzeSk06i7prvu3lT2ZUXLMSkPLgX-_1YJ-J-cNjoWpd7B8ZvD1zeVXbZQVhVZaWjZzo-CqRiS7yc6RyHHfVAf04_TS0pXHPZWFtiRwItvrJu-v3UZDsjN7-Of1pemu-oHhAxps8LJ-wDcH6rJkyBL3BD7YDkIvR_dSWsqsZ19CEtV5L3uYiDcy3QUnew_f5Y0vHPAM85ZHM0tDjFypIyMfAGSm0.9_kY3kZQG1JAfOJtO9U0OTaL3SCCy3itPvk_alPKo4M&dib_tag=se&keywords=Building+Social+Business+Muhammad+Yunus+Audiobook&qid=1794016356&sr=8-1",
    },
    {
      id: 5,
      title: "The Big Ratchet: How Humanity Thrives in the Face of Natural Crisis",
      author: "Ruth DeFries",
      format: "Humanity & Environmental History",
      image: "/humanities/humanities5.webp",
      amazonUrl:
        "https://www.amazon.com/Big-Ratchet-Humanity-Thrives-Natural-ebook/dp/B00L4FSTC6/ref=sr_1_1?dib=eyJ2IjoiMSJ9.yuDiCGzg6fy6WaCQDXKucg.a_KLQlbbA1N7a3gFedV7PlJkejMa6YmQy-LvWq0R1OE&dib_tag=se&keywords=The+Big+Ratchet+Ruth+DeFries&qid=1794016414&sr=8-1",
    },
  ];

  return (
    <div className="w-full min-h-screen bg-[#fbf8f2] text-[#2c241e] font-serif py-10 px-6">

      <div className="max-w-7xl mx-auto">

        {/* ======================================
            BREADCRUMB NAVIGATION
        ====================================== */}

        <div className="flex flex-wrap items-center gap-2 text-xs font-sans text-[#7a6452] mb-6">

          <Link
            to="/"
            className="hover:text-[#8c2d19] hover:underline flex items-center gap-1"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            Back to Home
          </Link>

          <span>/</span>
          <span>Thought & Science</span>
          <span>/</span>

          <span className="text-[#8c2d19] font-bold">
            Humanities & Social Sciences
          </span>

        </div>

        {/* ======================================
            PAGE HEADER
        ====================================== */}

        <div className="bg-[#241a15] text-[#fbf8f2] p-8 border-2 border-[#c29b38] shadow-md mb-10 text-center sm:text-left flex flex-col sm:flex-row justify-between items-center gap-6">

          <div>

            <div className="flex items-center justify-center sm:justify-start gap-2 text-[#c29b38] text-[10px] tracking-[0.3em] uppercase font-sans font-bold mb-2">

              <BookOpen className="w-4 h-4" />

              <span>
                Society, Culture & Human Understanding
              </span>

            </div>

            <h1 className="text-3xl sm:text-4xl font-bold font-serif">
              Humanities & Social Sciences
            </h1>

            <p className="text-xs text-[#b8a68f] mt-2 max-w-xl font-serif italic leading-relaxed">
              Explore influential works examining human
              civilization, digital society, artificial
              intelligence, economics, cultural change,
              environmental challenges, and the ideas
              shaping our modern world.
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

        {/* ======================================
            BOOK COLLECTION GRID
        ====================================== */}

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">

          {books.map((book) => (

            <article
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

              {/* BOOK INFORMATION */}

              <div className="flex flex-col flex-1">

                {/* CATEGORY BADGE */}

                <span className="text-[9px] font-sans font-bold text-[#8c2d19] border border-[#c29b38] bg-[#fbf8f2] px-2 py-1 uppercase tracking-wide inline-block self-start mb-3">
                  {book.format}
                </span>

                {/* BOOK TITLE */}

                <h3 className="text-base font-bold text-[#241a15] leading-snug line-clamp-4 min-h-[90px]">
                  {book.title}
                </h3>

                {/* AUTHOR NAME */}

                <p className="text-xs text-[#7a6452] italic mt-2 leading-relaxed">
                  by {book.author}
                </p>

                {/* AMAZON VIEW BOOK BUTTON */}

                <div className="mt-auto pt-5">

                  <div className="border-t border-[#e2d7c5] pt-4">

                    <a
                      href={book.amazonUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`View ${book.title} on Amazon`}
                      className="w-full bg-[#241a15] hover:bg-[#8c2d19] text-[#fbf8f2] text-xs font-sans font-bold py-3 px-4 uppercase tracking-wider flex items-center justify-center gap-2"
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

        </div>

        {/* ======================================
            BOTTOM DIVIDER
        ====================================== */}

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
