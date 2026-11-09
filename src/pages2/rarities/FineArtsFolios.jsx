
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
  // Correct titles and contributors
  // Prices removed
  // Amazon search links included
  // No hover animations
  // ==========================================

  const books = [
    {
      id: 1,
      title: "Treasures of the Addison Gallery of American Art",
      author: "Adam D. Weinberg (Editor)",
      format: "American Art & Museum Collections",
      image: "/Folios/Folios1.webp",
      amazonUrl:
        "https://www.amazon.com/Treasures-Addison-Gallery-American-Folio/dp/0789207583/ref=sr_1_1?dib=eyJ2IjoiMSJ9.OIHmg1Ljf3rb2y8l6GxbWQ.uHV5jkOKCbAy54j-AlkNRsey0HBvEmZCMbnQZWGlDJ4&dib_tag=se&keywords=9780789207586&qid=1794247931&sr=8-1",
    },
    {
      id: 2,
      title: "Treasures of Folk Art: The Museum of American Folk Art",
      author: "Museum of American Folk Art",
      format: "American Folk Art",
      image: "/Folios/Folios2.webp",
      amazonUrl:
        "https://www.amazon.com/Treasures-Folk-Art-Museum-American/dp/1558595600/ref=sr_1_1?dib=eyJ2IjoiMSJ9.hrcNtP-zXaYCelCS-b1fgw.OcwcIWaHdA7lcg6iqX_LsVvkIYIlFZjDG9k6Yb8KGxo&dib_tag=se&keywords=9781558595606&qid=1794247955&sr=8-1",
    },
    {
      id: 3,
      title: "The Art of Tarot",
      author: "Christina Olsen",
      format: "Tarot Art & Illustration",
      image: "/Folios/Folios3.webp",
      amazonUrl:
        "https://www.amazon.com/Art-Tarot-Tiny-Folio/dp/0789213060/ref=sr_1_1?dib=eyJ2IjoiMSJ9.rbkdR2MCouJDA0W_Q-uMnw.SXJLmhx93UcES_0tRtF723TKSCyD8AvV3Ez28UEt2vM&dib_tag=se&keywords=9780789213068&qid=1794247989&sr=8-1",
    },
    {
      id: 4,
      title: "Treasures of Impressionism and Post-Impressionism",
      author: "Florence E. Coman",
      format: "Impressionist Art & Museum Collections",
      image: "/Folios/Folios4.jpg",
      amazonUrl:
        "https://www.amazon.com/Treasures-Impressionism-Post-Impressionism-National-Gallery/dp/0789204916/ref=sr_1_1?dib=eyJ2IjoiMSJ9.AQ-ZIjtnJ5gjdWjBS5n6Zg.DCfJURRGQCzmh3Enjb8Oea5hWO3dIlAWu6EhYjkTQiI&dib_tag=se&keywords=9780789204912&qid=1794248012&sr=8-1",
    },
    {
      id: 5,
      title: "Women Artists: National Museum of Women in the Arts",
      author: "National Museum of Women in the Arts",
      format: "Women Artists & Art History",
      image: "/Folios/Folios5.jpg",
      amazonUrl:
        "https://www.amazon.com/Women-Artists-National-Museum-Second/dp/B00ERK5R02/ref=sr_1_1?dib=eyJ2IjoiMSJ9.L0xayV7qnTvxiSdcTCk3yAlJTwUCn2pr3PjEjZBHv2aqGNbepPoHFMIt9WeOthw5MhSZxrILungJBeO60v0WnaYGFtGJyGiPzVZ-e1lmLWVbwWDxQxK96cTmDJkQPiHosOY1d-leXei13HW0Lo-agTUgWHtjzHnmxLT9pIq1gWUzaxQO0VuPq7nv2KxRID_zKB9oVHSFA53Ym5vcvKLGvKllkdosh0bVPXy364UVbKw.jaGeg4WXQMQ3nOYp7-PQPVXb1p4HJTQ8L9GdUjpvVxw&dib_tag=se&keywords=Women+Artists+National+Museum+of+Women+in+the+Arts+Second+Edition&nsdOptOutParam=true&qid=1794248083&sr=8-1&utm_source=chatgpt.com",
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
            className="flex items-center gap-1"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            Back to Home
          </Link>

          <span>/</span>
          <span>Classical Rarities</span>
          <span>/</span>

          <span className="text-[#8c2d19] font-bold">
            Fine Arts & Folios
          </span>

        </div>

        {/* ======================================
            PAGE HEADER
        ====================================== */}

        <div className="bg-[#241a15] text-[#fbf8f2] p-8 border-2 border-[#c29b38] shadow-md mb-10 text-center sm:text-left flex flex-col sm:flex-row justify-between items-center gap-6">

          <div>

            <div className="text-[#c29b38] text-[10px] tracking-[0.3em] uppercase font-sans font-bold mb-2">
              Museum Collections, Fine Art & Visual Heritage
            </div>

            <h1 className="text-3xl sm:text-4xl font-bold font-serif">
              Fine Arts & Folios
            </h1>

            <p className="text-xs text-[#b8a68f] mt-2 max-w-xl font-serif italic leading-relaxed">
              Discover remarkable collections of American
              art, traditional folk art, historical tarot
              illustrations, Impressionist masterpieces,
              and the artistic achievements of women.
              Explore beautifully illustrated volumes
              celebrating the creativity, history, and
              cultural significance of the visual arts.
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

              {/* ======================================
                  BOOK INFORMATION
              ====================================== */}

              <div className="flex flex-col flex-1">

                {/* CATEGORY BADGE */}

                <span className="text-[9px] font-sans font-bold text-[#8c2d19] border border-[#c29b38] bg-[#fbf8f2] px-2 py-1 uppercase tracking-wide inline-block self-start mb-3">
                  {book.format}
                </span>

                {/* BOOK TITLE */}

                <h3 className="text-base font-bold text-[#241a15] leading-snug line-clamp-4 min-h-[110px]">
                  {book.title}
                </h3>

                {/* AUTHOR / CONTRIBUTOR */}

                <p className="text-xs text-[#7a6452] italic mt-2 leading-relaxed">
                  by {book.author}
                </p>

                {/* ======================================
                    AMAZON VIEW BOOK BUTTON
                ====================================== */}

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
