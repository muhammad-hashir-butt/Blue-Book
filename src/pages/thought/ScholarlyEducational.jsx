
import React from "react";
import { Link } from "react-router-dom";
import {
  GraduationCap,
  ArrowLeft,
  ArrowUpRight,
  BookOpen,
} from "lucide-react";

export default function ScholarlyEducational() {

  // ==========================================
  // SCHOLARLY & EDUCATIONAL COLLECTION
  // Images: public/scholarly/
  // Correct audiobook titles and professors
  // No prices
  // Amazon search links included
  // ==========================================

  const books = [
    {
      id: 1,
      title: "Odyssey of the West III: The Medieval World",
      author: "Timothy B. Shutt, Thomas F. Madden & Monica Brzezinski Potkay",
      format: "Medieval History Lectures",
      image: "/scholarly/scholarly1.jpg",
      amazonUrl:
        "https://www.amazon.com/Modern-Scholar-Odyssey-Education-Medieval/dp/B001JHT88I/ref=sr_1_1?dib=eyJ2IjoiMSJ9.PMlsTXopP24IOziKW4dXopP534INDGrWoQau5as6-xjGjHj071QN20LucGBJIEps.H2m9IY9SaRXhNQiditRiJziX3vkQpW_MISmqq1VHO4E&dib_tag=se&keywords=Odyssey+of+the+West+III+Medieval+World+Timothy+Shutt&nsdOptOutParam=true&qid=1794017143&sr=8-1",
    },
    {
      id: 2,
      title: "Odyssey of the West I: Hebrews and Greeks",
      author: "Timothy B. Shutt (Series Editor)",
      format: "Classical Civilization Lectures",
      image: "/scholarly/scholarly2.webp",
      amazonUrl:
        "https://www.amazon.com/Modern-Scholar-Odyssey-Classic-Education/dp/B001PU0V76/ref=sr_1_1?dib=eyJ2IjoiMSJ9.CYrhSfY181qy8dQrcQs9_WgVjXh4vLUX8xUkIwHvlXgV3P-G5TrSoOvqH0E216bECKwlO2SNEY_ruFf0N6VGPvlxdj6mjIVa0zRIA7v8Grqth-ph8QzrA8zj17xG0vjzcxScJDbIi4hLeSxx9qDBVQAXmf7HNUyKlmeecX_c575pk3djdirUvEFbGSEhoO1qLuRNhqKN0QAXOUoBFV-k1z2PiCyTkit3MdwDLYMcTZI.rphfd601b0Iu1aBP2qWEgBcxpyOK499xtMzblG3Yv1E&dib_tag=se&keywords=Odyssey+of+the+West+I+Hebrews+and+Greeks&nsdOptOutParam=true&qid=1794017180&sr=8-1",
    },
    {
      id: 3,
      title: "Christianity at the Crossroads: The Reformations of the Sixteenth and Seventeenth Centuries",
      author: "Thomas F. Madden",
      format: "Christian History Lectures",
      image: "/scholarly/scholarly3.webp",
      amazonUrl:
        "https://www.amazon.com/Modern-Scholar-Christianity-Reformations-Seventeenth/dp/B001PU0V7Q/ref=sr_1_1?dib=eyJ2IjoiMSJ9._FPDIzhxmVEzGtEAeO0CBz6DyVB70Crs05OQT_3Cd9r0OZO_yOQx-wSAss5c7eLFbPL1VwNSUUQhF0TDgO_vhw2b1k2mciMurjfRVSY1pHQ-cYNRvZNic5ux0Vvmq70NwJw6Efv-1twapQEF7l219iFNyc6DOrOMvgUXL1j5BsYDb2Gpc9QBN9fTle_J2QcMAhTGAzmdhH_kFfsg3RzC_FnVIeXZobz5NYhfTopGmMlZwjeywsZIemp6eciwkUGmVjpSWNZPe_fGFTtZlGjHG-tV8Xnzl96N4MIH3vh1nlA.XW1a6FZ512nqke0m3qiUAdGsFu6LXprDCAn5FEW07yo&dib_tag=se&keywords=Christianity+at+the+Crossroads+Thomas+F+Madden+Audiobook&nsdOptOutParam=true&qid=1794017211&sr=8-1",
    },
    {
      id: 4,
      title: "Odyssey of the West VI: The Twentieth Century",
      author: "Timothy B. Shutt (Series Editor)",
      format: "Twentieth-Century Studies",
      image: "/scholarly/scholarly4.jpg",
      amazonUrl:
        "https://www.amazon.com/Odyssey-West-VI-Education-Twentieth/dp/B0029KM8TA/ref=sr_1_1?dib=eyJ2IjoiMSJ9.5q4ssLAUYW6TYjUnSYLO-w21RMQdWwZ3tXLGHb7DDvdWQB3Uh-Afqhef-cPVQO2C9N9Wote0-kim_M-hVdqAQ0I4-rEL9aszOAITYKrBear4yAHJvL4jzgCzJnAzSzdeH9GSDWCSyVToaDMPZJygmQ.Npi5hkXgwobwLl3l-L_N4yshbt0AJAyUTbjW5DAicG8&dib_tag=se&keywords=Odyssey+of+the+West+VI+Twentieth+Century&qid=1794017239&sr=8-1",
    },
    {
      id: 5,
      title: "Odyssey of the West IV: Toward Enlightenment",
      author: "Timothy B. Shutt (Series Editor)",
      format: "Renaissance & Enlightenment",
      image: "/scholarly/scholarly5.webp",
      amazonUrl:
        "https://www.amazon.com/Modern-Scholar-Odyssey-Education-Enlightenment/dp/B001JHT888/ref=sr_1_1?dib=eyJ2IjoiMSJ9.7TZWcP6aW51WeX6jPe0eX0dT0pmfGtB8Yu2g18xZTp8fLtVVDoRAsb_uvqFZESjppUiHpEEcRacyc7wicnjDE0zECz34dmdA1_R98DQGCnI.pl6-a2jcLGzNfKuzMY8n6ipAt1QjGdJrBrJtI5ko9po&dib_tag=se&keywords=Odyssey+of+the+West+IV+Toward+Enlightenment&qid=1794017266&sr=8-1",
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
            Scholarly & Educational
          </span>
        </div>

        {/* ======================================
            PAGE HEADER
        ====================================== */}

        <div className="bg-[#241a15] text-[#fbf8f2] p-8 border-2 border-[#c29b38] shadow-md mb-10 text-center sm:text-left flex flex-col sm:flex-row justify-between items-center gap-6">

          <div>
            <div className="flex items-center justify-center sm:justify-start gap-2 text-[#c29b38] text-[10px] tracking-[0.3em] uppercase font-sans font-bold mb-2">
              <GraduationCap className="w-4 h-4" />

              <span>
                Academic Lectures & Historical Scholarship
              </span>
            </div>

            <h1 className="text-3xl sm:text-4xl font-bold font-serif">
              Scholarly & Educational
            </h1>

            <p className="text-xs text-[#b8a68f] mt-2 max-w-xl font-serif italic leading-relaxed">
              Explore distinguished academic lecture
              collections covering Western civilization,
              ancient cultures, medieval history,
              religious reformations, and the intellectual
              movements that shaped the modern world.
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
                  alt={`${book.title} - ${book.author}`}
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

                <h3 className="text-base font-bold text-[#241a15] leading-snug line-clamp-4 min-h-[100px]">
                  {book.title}
                </h3>

                {/* PROFESSOR / CONTRIBUTOR */}

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
