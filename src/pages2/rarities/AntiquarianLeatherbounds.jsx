import React from "react";
import { Link } from "react-router-dom";
import {
  BookOpen,
  ArrowLeft,
  ArrowUpRight,
} from "lucide-react";

export default function AntiquarianLeatherbounds() {
  // ==========================================
  // ANTIQUARIAN LEATHERBOUNDS
  // Images: public/Antiquarian/
  // Updated according to screenshot covers
  // No prices
  // No hover animations
  // ==========================================

  const books = [
    {
      id: 1,
      title: "The Antiquarian's Folio: Ghosts of Olde England",
      author: "Michael Collins",
      format: "Ghost Stories & Antiquarian Fiction",
      image: "/Antiquarian/Antiquarian1.jpg",
      amazonUrl:
        "https://www.amazon.com/Antiquarians-Folio-Ghosts-Olde-England/dp/B0HK65V6JY/ref=sr_1_1?dib=eyJ2IjoiMSJ9.D4ksw3GkYFxADVKBw3hgEAiXp7VVc5jm7PHAAW8Dc8qgOFJiTK-iB8R1Oyax8UANgZ24v48b3VTKVPsiTjNQI08oT6wyrj9Kg9YR1qZ89UF5cBD7vwsU38Vu4bB4iuAJmiOAxtMZap03hV-wK3kb4rkCEMGKUdzhbfLFnIcsEZMpEK_wBZkohKG23lQfdkuJUfWOQDL4r2vSLSgp-8Nm90k4kIgI963VOE6nkRgdJF4.xh3LBhyiyU1dL-rQumzur0M1YVD6tPi03TyjVGEf50M&dib_tag=se&keywords=The+Antiquarian%27s+Folio+Ghosts+of+Olde+England+Michael+Collins&nsdOptOutParam=true&qid=1794419715&sr=8-1",
    },
    {
      id: 2,
      title: "On the Hooghly",
      author: "Malcolm Beattie",
      format: "Historical Maritime Fiction",
      image: "/Antiquarian/Antiquarian2.jpg",
      amazonUrl:
        "https://www.amazon.com/Hooghly-pilots-worlds-dangerous-waterways/dp/B0HR3H3BQK/ref=sr_1_1?dib=eyJ2IjoiMSJ9.ZnN09J-D7UtYuzKInmtuYQ.8y0lizW4qaeaKvW_BUa2cvkilHVjRL1fMbZLdkz4DYk&dib_tag=se&keywords=On+the+Hooghly+Malcolm+Beattie&qid=1794419741&sr=8-1",
    },
    {
      id: 3,
      title: "The Jack London Classics Collection: The Call of the Wild, White Fang, The Sea-Wolf, Martin Eden, The Iron Heel",
      author: "Jack London",
      format: "Classic Supernatural Literature",
      image: "/Antiquarian/Antiquarian3.jpg",
      amazonUrl:
        "https://www.amazon.com/Jack-London-Classics-Collection-Sea-Wolf/dp/B084WKXP6C/ref=pd_sbs_d_sccl_1_5/144-9673751-9760741?pd_rd_w=F3ilU&content-id=amzn1.sym.0cb10f30-7cd4-4985-9826-58b2c1174c19&pf_rd_p=0cb10f30-7cd4-4985-9826-58b2c1174c19&pf_rd_r=3NTZV07H5ZF596M52JQH&pd_rd_wg=1qCJM&pd_rd_r=4276dba8-3bf9-46b8-86d8-60bd26f13f00&pd_rd_i=B084WKXP6C&psc=1",
    },
    {
      id: 4,
      title: "The Antiquarian's Cabinet: Five Tales of Unearthly Things",
      author: "Michael Collins",
      format: "Antiquarian Legend & Gothic Tales",
      image: "/Antiquarian/Antiquarian4.jpg",
      amazonUrl:
        "https://www.amazon.com/Antiquarians-Cabinet-Tales-Unearthly-Things/dp/B0HGYTQRM7/ref=sr_1_1?dib=eyJ2IjoiMSJ9.53bGlmamWvAsU1RFCOWZ0jntL29aYzkGMYYOhDL5tdnGjHj071QN20LucGBJIEps.LNxVA5qVbA9qy-JWi-EWarfx89qH9sAR3TCxHVUhO-U&dib_tag=se&keywords=The+Antiquarian%27s+Cabinet+Michael+Collins&qid=1794419802&sr=8-1",
    },
    {
      id: 5,
      title: "101 Antiquarian Fairy Tale Illustrations",
      author: "Little Gypsy Press",
      format: "Antique Fairy Tale Art & Illustration",
      image: "/Antiquarian/Antiquarian5.jpg",
      amazonUrl:
        "https://www.amazon.com/101-Antiquarian-Fairy-Tale-Illustrations/dp/B097SRGBJZ/ref=sr_1_1?dib=eyJ2IjoiMSJ9.LJ8JcwgeZCzuYyNFc1kQPWGmnmPlbQ4Zbt4-h2EyEt24XCh3eMrDYiSrwSWJ-_LbE88p20PDdRN6w42SXtslvX_DGob-c9NmROJlqSN9Jyh1lBhEhtpOvT91x2UDfmqLoDiiUgHEUUHZ5_9d3IM8VkYvvpqXxfR5q2_rv4PU1zxSmYSQNEiiq1R-HXLAXsRyhexq86aiYO_j7Vq_yypTaqJvSxymqcz5fTbG-k6M5V4.57MR3kG_OGAK4nYtY5LiY8oIFlTqaWkkTKmcuuMnlTY&dib_tag=se&keywords=101+Antiquarian+Fairy+Tale+Illustrations&qid=1794419872&sr=8-1",
    },
  ];

  return (
    <div className="w-full min-h-screen bg-[#fbf8f2] text-[#2c241e] font-serif py-10 px-6">
      <div className="max-w-7xl mx-auto">
        {/* ======================================
            BREADCRUMB NAVIGATION
        ====================================== */}

        <div className="flex flex-wrap items-center gap-2 text-xs font-sans text-[#7a6452] mb-6">
          <Link to="/" className="flex items-center gap-1">
            <ArrowLeft className="w-3.5 h-3.5" />
            Back to Home
          </Link>

          <span>/</span>
          <span>Classical Rarities</span>
          <span>/</span>

          <span className="text-[#8c2d19] font-bold">
            Antiquarian Leatherbounds
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
                Ghostly Folios, Fairy Tale Art & Literary Curiosities
              </span>
            </div>

            <h1 className="text-3xl sm:text-4xl font-bold font-serif">
              Antiquarian Leatherbounds
            </h1>

            <p className="text-xs text-[#b8a68f] mt-2 max-w-xl font-serif italic leading-relaxed">
              Discover haunting antiquarian tales, rare literary curiosities,
              ghostly collections, maritime fiction, and vintage fairy tale
              imagery. Explore a refined selection of books inspired by old
              libraries, folklore, supernatural storytelling, and the timeless
              beauty of classic printed works.
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
              className="bg-[#fdfbf7] p-4 border-2 border-[#b8a68f] shadow-sm flex flex-col"
            >
              {/* BOOK COVER */}

              <div className="w-full h-64 bg-[#efe8db] p-2 border border-[#c7b8a3] overflow-hidden mb-4 flex items-center justify-center">
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

                <h3 className="text-base font-bold text-[#241a15] leading-snug line-clamp-4 min-h-[110px]">
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
                      aria-label={`Find ${book.title} on Amazon`}
                      className="w-full bg-[#241a15] text-[#fbf8f2] text-xs font-sans font-bold py-3 px-4 uppercase tracking-wider flex items-center justify-center gap-2"
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