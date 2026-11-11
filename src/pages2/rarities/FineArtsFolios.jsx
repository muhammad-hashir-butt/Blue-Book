
import React from "react";
import { Link } from "react-router-dom";
import {
  ArrowLeft,
  BookOpen,
  ArrowUpRight,
} from "lucide-react";

export default function FineArtsFolios() {

  // ==========================================
  // FINE ARTS & FOLIOS
  // Images: public/Folios/
  // All images: .jpg
  // Actual titles matched with covers
  // No prices
  // Compact cards
  // Georgia font
  // No hover animations
  // Amazon links included
  // ==========================================

  const books = [
    {
      id: 1,
      title: "Folio: Columns 2003–2014",
      author: "Luca Turin",
      format: "Literary Essays & Cultural Commentary",
      image: "/Folios/Folios1.jpg",
      amazonUrl:
        "https://www.amazon.com/dp/B016A53RMG",
    },
    {
      id: 2,
      title: "10 Minute Plays for Kids of All Ages",
      author: "Carlene Griffith",
      format: "Children's Theatre & Short Plays",
      image: "/Folios/Folios2.jpg",
      amazonUrl:
        "https://www.amazon.com/Minute-Plays-Kids-All-Ages/dp/1537297112/ref=sr_1_1?dib=eyJ2IjoiMSJ9.UjVC0u7ruX3uYQeISshb8QZtUMj_boSxHjfFIvATg3iVsrxK045eI4X_bV8Vy4ThnDV2yFfGCkHfOfUhos31UxvUXj7aZiXYTZ-Xj82LyO16gfPkMv9n9HDUZT6eMNnPglGkejVIm3cQWga5Xcejn0ofRhnX5yeAWnpZiqDJpwhwftkHr0VW2JvuQxOCT4MGDGx4NGPP10muX1d5RLNWmZKp5Q7ZAbZp7Upf49zWJGI.pBEdeXa-5uFIPbj8L-zGEOMqcakUWSOn1vam2P6-3jY&dib_tag=se&keywords=10+Minute+Plays+For+Kids+Of+All+Ages+Carlene+Griffith&nsdOptOutParam=true&qid=1794422501&sr=8-1",
    },
    {
      id: 3,
      title: "The S.H.T.F. Art of War",
      author: "Jeffrey M. Olson",
      format: "Survival Strategy & Preparedness",
      image: "/Folios/Folios3.jpg",
      amazonUrl:
"https://www.amazon.com/S-H-T-F-Art-War-Jeffrey-Olson/dp/1495326578/ref=sr_1_1?dib=eyJ2IjoiMSJ9.8ngILwjtKywmyCJmJuyoboYeN3X1pd8f5UjPQAabY7hbmDB1QHpyGBEnb0medPVpFaE8xca1fucIeiCnwToAW9F93BMSbV8fuLJC8VvYEkaQH1gaEIAEdohxHksottrCm0eR-sB0JfqYb8p21D7aJf6XwljA5xii5sCm-_TTpjtoo0K7CnLuG46XuwjveuOXwJH1YnXFznf5D6bqYgHLZQ.ibB9czDFD2lH113-xeZ5Vs6OXAb5f3rwa12At7xnycI&dib_tag=se&keywords=The+SHTF+Art+of+War+Jeffrey+M+Olson&nsdOptOutParam=true&qid=1794422600&sr=8-1"    },
    {
      id: 4,
      title: "A Moment Past: L. F. Tantillo Paints New York History",
      author: "L. F. Tantillo",
      format: "Historical Art & New York Heritage",
      image: "/Folios/Folios4.jpg",
      amazonUrl:
"https://www.amazon.com/Moment-Past-Tantillo-Paints-History/dp/1484947444/ref=sr_1_1?dib=eyJ2IjoiMSJ9.Vh82geLqLPZZ2AY9jqqyyA.RvPsHR0AuiD3yAoM7-MzWlY1LvuuSccSMYNBYdPdRY4&dib_tag=se&keywords=A+Moment+Past+L+F+Tantillo+Paints+New+York+History&nsdOptOutParam=true&qid=1794422681&sr=8-1"    },
    {
      id: 5,
      title: "Julia Flock Fine Art: Portfolio 2025",
      author: "Julia Flock",
      format: "Fine Art & Artist Portfolio",
      image: "/Folios/Folios5.jpg",
      amazonUrl:
        "https://www.amazon.com/Julia-Flock-Fine-Portfolio-2025/dp/B0FJ7BNRLQ/ref=sr_1_1?dib=eyJ2IjoiMSJ9.HX3sgiT7cvKLGIIkewp4kfRmgsD6zq7iAs6ktfkCMiI.xawVfWl6sgQ_6iPVCJBiNHEIgEdRVtNtO7XLv8Y2YWo&dib_tag=se&keywords=Julia+Flock+Fine+Art+Portfolio+2025&qid=1794422567&sr=8-1",
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

        {/* ==========================================
            BREADCRUMB NAVIGATION
        ========================================== */}

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
            Fine Arts & Folios
          </span>

        </nav>

        {/* ==========================================
            PAGE HEADER
        ========================================== */}

        <header className="bg-[#241a15] text-[#fbf8f2] border border-[#c29b38] px-6 py-6 mb-6">

          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">

            <div className="flex-1">

              <div className="text-[#c29b38] text-[11px] font-bold tracking-[0.15em] uppercase mb-2">
                Fine Art, Literary Collections & Cultural Heritage
              </div>

              <h1 className="text-3xl sm:text-4xl font-bold leading-tight">
                Fine Arts & Folios
              </h1>

              <p className="text-[14px] text-[#cbb9a5] mt-2 max-w-2xl leading-relaxed">
                Discover a distinctive collection of
                literary essays, theatrical works,
                strategic writings, historical paintings,
                and fine art portfolios. Explore
                fascinating works celebrating creative
                expression, cultural commentary,
                visual storytelling, artistic heritage,
                and the enduring value of printed literature.
              </p>

            </div>

            {/* ==========================================
                CURATED INDEX
            ========================================== */}

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

        {/* ==========================================
            BOOK COLLECTION GRID
        ========================================== */}

        <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 items-stretch">

          {books.map((book) => (

            <article
              key={book.id}
              className="bg-[#fdfbf7] border border-[#b8a68f] p-3 flex flex-col h-full"
            >

              {/* ==========================================
                  BOOK COVER
              ========================================== */}

              <div className="w-full h-60 bg-[#efe8db] border border-[#c7b8a3] p-2 flex items-center justify-center overflow-hidden">

                <img
                  src={book.image}
                  alt={`${book.title} by ${book.author}`}
                  loading="lazy"
                  className="w-full h-full object-contain"
                />

              </div>

              {/* ==========================================
                  CATEGORY BADGE
              ========================================== */}

              <div className="mt-3">

                <span className="inline-block text-[10px] font-bold uppercase leading-snug text-[#8c2d19] border border-[#c29b38] px-2 py-1">
                  {book.format}
                </span>

              </div>

              {/* ==========================================
                  BOOK INFORMATION
              ========================================== */}

              <div className="flex flex-col flex-1 mt-2">

                {/* BOOK TITLE */}

                <h2 className="text-[17px] font-bold text-[#241a15] leading-[1.35]">
                  {book.title}
                </h2>

                {/* AUTHOR NAME */}

                <p className="text-[13px] text-[#8a593f] italic mt-2 leading-snug">
                  by {book.author}
                </p>

                {/* ==========================================
                    AMAZON VIEW BOOK BUTTON
                ========================================== */}

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

        {/* ==========================================
            BOTTOM DIVIDER
        ========================================== */}

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
