
import React from "react";
import { Link } from "react-router-dom";
import {
  Sparkles,
  ArrowLeft,
  ArrowUpRight,
  BookOpen,
} from "lucide-react";

export default function ScienceFictionFantasy() {

  // ==========================================
  // SCIENCE FICTION & FANTASY
  // Images: public/sciencefiction/
  // Titles and authors matched to covers
  // No prices
  // Compact cards
  // No hover animations
  // ==========================================

  const books = [
    {
      id: 1,
      title: "Vestige",
      author: "M. Kavin Partharuvan",
      format: "Science Fiction & Space Adventure",
      image: "/sciencefiction/sciencefiction1.webp",
      amazonUrl:
        "https://www.amazon.com/Vestige-Kavin-Partharuvan-ebook/dp/B0HN5GMDRZ/ref=sr_1_8?crid=1ES0HBRCDVEG7&dib=eyJ2IjoiMSJ9.CFouIGyEVglzV7ncEAcS4SU3K3nKxKQZ8VmV1OAzLST-lZzcSYSv8CMd5YcoQocXVf3FtrmKMt8a4Vn0doxYa3jyY1ICax8PHCOiHJA3gpDwo7tatJm_v0EkzNBNuRXBtg-7VXzUTr6f9zfjd0vtE5ILPF-tVZatDAr_hhn08wZl49E9J92Swz33-1pAnM95AMIbVxEmWh4trEr0ICYewykPjNizlmbvNts--QPH3ek.Zm0A9doceJLaAy6NKf9UakKJEmM7GHIEf_GPNXhIBso&dib_tag=se&keywords=vestige&qid=1794412684&s=books&sprefix=vestige+%2Cstripbooks-intl-ship%2C2968&sr=1-8",
    },
    {
      id: 2,
      title: "The Blue Race",
      author: "Senan Mahon",
      format: "Epic Space Opera & Alien Civilizations",
      image: "/sciencefiction/sciencefiction2.jpg",
      amazonUrl:
        "https://www.amazon.com/Blue-Race-galaxy-spanning-humanity-enslavement-ebook/dp/B0BY354HTY/ref=sr_1_1?dib=eyJ2IjoiMSJ9.wOmeVBR0S1i_e6en3nS9Iw.smC0y13bH8lwa97CuNKUqaabcPAYKpEom_SK_TSe0YU&dib_tag=se&keywords=The+Blue+Race+Senan+Mahon&qid=1794411401&sr=8-1",
    },
    {
      id: 3,
      title: "The Rings of Jupiter",
      author: "Josef Kainrad",
      format: "Hard Science Fiction & Space Thriller",
      image: "/sciencefiction/sciencefiction3.jpg",
      amazonUrl:
        "https://www.amazon.com/Rings-Jupiter-Science-Fiction-Thriller-ebook/dp/B0FKXS7NY8/ref=sr_1_1?dib=eyJ2IjoiMSJ9.o6YW5FnLfyjtctQ2yAuWMH48gDA8CqBftnVKUUk_sTOj118CgOt-Is375tNR-fkwlBhLAIuL2bgbrFJbd0ZF1cnaRlNRfAVI5G7azyWi8lY.I-Seyw3CVMJL4KO7htuvZTR8ppchHPzd3Qvgp26DSZc&dib_tag=se&keywords=The+Rings+of+Jupiter+Josef+Kainrad&qid=1794411433&sr=8-1",
    },
    {
      id: 4,
      title: "Terminal Velocity",
      author: "Josef Kainrad",
      format: "Military Science Fiction & Adventure",
      image: "/sciencefiction/sciencefiction4.jpg",
      amazonUrl:
        "https://www.amazon.com/Terminal-Velocity-Josef-Kainrad-ebook/dp/B0DHG1VYP6/ref=sr_1_1?dib=eyJ2IjoiMSJ9.GPcX8IF4Y_hiLQ2oJJyx1Q.6XgLdrsEugoLVDpIhBqR8mqqZzkF0fwNC4PTsljei8Y&dib_tag=se&keywords=Terminal+Velocity+Josef+Kainrad&qid=1794411493&sr=8-1",
    },
    {
      id: 5,
      title: "Star Struck: Starlight Chronicles #1",
      author: "Luna Sinclair",
      format: "Science Fantasy & Space Romance",
      image: "/sciencefiction/sciencefiction5.jpg",
      amazonUrl:
        "https://www.amazon.com/Star-Struck-Starlight-Chronicles-Book-ebook/dp/B0HDC5165J/ref=sr_1_1?dib=eyJ2IjoiMSJ9.UxubvZyOaCGxI6hZPDl-TDf6Nr7X2JhksIIFqCAWCMX0q4IHOToXBkU2w0q4Au1uFizCQddyfrEyZHR0IF0X9zMtsg3pGb9iIiMTkGZ8Hys.QVFXn8hq1HHU2m8_RiLxNNP5hiIkoNMwXnTnK1YJCpw&dib_tag=se&keywords=Star+Struck+Starlight+Chronicles+Luna+Sinclair&qid=1794411519&sr=8-1",
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

          <span>Thought & Science</span>

          <span>/</span>

          <span className="font-bold text-[#8c2d19]">
            Science Fiction & Fantasy
          </span>

        </nav>

        {/* PAGE HEADER */}

        <header className="bg-[#241a15] text-[#fbf8f2] border border-[#c29b38] px-6 py-6 mb-6">

          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">

            <div className="flex-1">

              <div className="flex items-center gap-2 text-[#c29b38] text-[11px] font-bold tracking-[0.15em] uppercase mb-2">

                <Sparkles size={16} />

                <span>
                  Extraordinary Worlds & Imagined Futures
                </span>

              </div>

              <h1 className="text-3xl sm:text-4xl font-bold leading-tight">
                Science Fiction & Fantasy
              </h1>

              <p className="text-[14px] text-[#cbb9a5] mt-2 max-w-2xl leading-relaxed">
                Explore extraordinary science fiction,
                distant galaxies, futuristic civilizations,
                artificial intelligence, interstellar adventures,
                and imaginative worlds created by celebrated
                speculative fiction authors.
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
              className="bg-[#fdfbf7] border border-[#b8a68f] p-3 flex flex-col h-full"
            >

              {/* BOOK COVER */}

              <div className="w-full h-60 bg-[#efe8db] border border-[#c7b8a3] p-2 flex items-center justify-center overflow-hidden">

                <img
                  src={book.image}
                  alt={`${book.title} by ${book.author}`}
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

              {/* BOOK DETAILS */}

              <div className="flex flex-col flex-1 mt-2">

                {/* BOOK TITLE */}

                <h2 className="text-[17px] font-bold text-[#241a15] leading-[1.35]">
                  {book.title}
                </h2>

                {/* AUTHOR */}

                <p className="text-[13px] text-[#8a593f] italic mt-2 leading-snug">
                  by {book.author}
                </p>

                {/* AMAZON VIEW BOOK BUTTON */}

                <div className="mt-auto pt-4">

                  <div className="border-t border-[#e2d7c5] pt-3">

                    <a
                      href={book.amazonUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`Find ${book.title} by ${book.author} on Amazon`}
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
