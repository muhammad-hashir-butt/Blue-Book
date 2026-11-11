
import React from "react";
import { Link } from "react-router-dom";
import {
  ArrowLeft,
  BookOpen,
  ArrowUpRight,
  Disc,
} from "lucide-react";

export default function WaxCylindersRecordings() {

  // ==========================================
  // WAX CYLINDERS & RECORDINGS
  // Images: public/Wax Cylinders/
  // Image 1: .webp
  // Images 2-5: .jpg
  // Actual titles matched with book covers
  // No prices
  // Georgia font
  // Compact cards
  // No hover effects or animations
  // Amazon search links included
  // ==========================================

  const books = [
    {
      id: 1,
      title: "The Cat Who Wouldn't Stay Put",
      author: "Tessa Hart",
      format: "Cozy Cat Mystery Fiction",
      image: "/Wax Cylinders/Wax Cylinders1.webp",
      amazonUrl:
        "https://www.amazon.com/Cat-Who-Wouldnt-Stay-Put/dp/B0H45XFBH1/ref=sr_1_1?dib=eyJ2IjoiMSJ9.cL8yy_G0Ko1jSwA1CihYnUcE4mw0zOud_WylYBJZujVAYXpkAdf2PyaORiaLAcz2FYctknPqhzK4E5PRyK-Og0BNjLPBGio5JQq8sqCN8zYo4BwryyzCarOpZY54EPqx90kGPeM66O1z_jnbJMtVj6rItpvmmgeTlLo-LKXWe98.rteHvbk8QA8FelMmgc09Kelb9s03eRqEJe3vbk550Gw&dib_tag=se&keywords=the+cat+who+wouldn%27t+stay+put+tessa+hart&nsdOptOutParam=true&qid=1794426837&sr=8-1",
    },
    {
      id: 2,
      title:
        "No Longer Even a Memory: Early Recorded Voices and the Wish to Be Remembered",
      author: "Rodney L. Kelley",
      format: "Early Recorded Voices & Sound History",
      image: "/Wax Cylinders/Wax Cylinders2.jpg",
      amazonUrl:
        "https://www.amazon.com/No-Longer-Even-Memory-Remembered/dp/B0HQY61LCZ/ref=sr_1_1?dib=eyJ2IjoiMSJ9.m40y_RJjm5-SQahTHjAMJA.jHSHf2jUNl8ZNLBS1rmoT5HwoVHiVI1pb2GB-NDTWdU&dib_tag=se&keywords=No+Longer+Even+a+Memory+Rodney+L+Kelley&nsdOptOutParam=true&qid=1794426860&sr=8-1",
    },
    {
      id: 3,
      title:
        "The Silent Song of Maple Hollow",
      author: "Tessa Hart",
      format: "Cozy Mystery & Historic Recordings",
      image: "/Wax Cylinders/Wax Cylinders3.jpg",
      amazonUrl:
        "https://www.amazon.com/Silent-Maple-Hollow-Crumpet-Mysteries/dp/B0HK33ZGPD/ref=sr_1_1?dib=eyJ2IjoiMSJ9.AQggMwOdjllJEHuk1Ar5MA.Zt3zgGvA66Y2xXCZE7Ij5UEvYza0GQnMx1_vHU_Z1X0&dib_tag=se&keywords=The+Silent+Song+of+Maple+Hollow+Tessa+Hart&nsdOptOutParam=true&qid=1794426884&sr=8-1",
    },
    {
      id: 4,
      title: "The Singer Who Vanished",
      author: "Taryn Ashbourne",
      format: "Historical Music Mystery",
      image: "/Wax Cylinders/Wax Cylinders4.jpg",
      amazonUrl:
        "https://www.amazon.com/Singer-Who-Vanished-Phantom-Opera/dp/B0HPZZ3RST/ref=sr_1_1?dib=eyJ2IjoiMSJ9.omDezHmJ0opUduD0ixdXIw.mDyuTRRqo9V4_oRSS2pagd6c2x1HrLPMHJERMxWiqqI&dib_tag=se&keywords=The+Singer+Who+Vanished+Taryn+Ashbourne&qid=1794426904&sr=8-1",
    },
    {
      id: 5,
      title: "The Borrowed Voice",
      author: "Taryn Ashbourne",
      format: "Historical Fiction & Musical Mystery",
      image: "/Wax Cylinders/Wax Cylinders5.jpg",
      amazonUrl:
        "https://www.amazon.com/Borrowed-Voice-Phantom-Opera-Book-ebook/dp/B0HQXK72V4/ref=sr_1_1?dib=eyJ2IjoiMSJ9.JymV8g01buwH8L6kIBN0XQ.JfpikNlqo1lRF7xi68YwvWd_oG7L10r3VuLmcpHobtI&dib_tag=se&keywords=The+Borrowed+Voice+Taryn+Ashbourne&qid=1794426933&sr=8-1",
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
            Wax Cylinders & Recordings
          </span>

        </nav>

        {/* ======================================
            PAGE HEADER
        ====================================== */}

        <header className="bg-[#241a15] text-[#fbf8f2] border border-[#c29b38] px-6 py-6 mb-6">

          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">

            <div className="flex-1 min-w-0">

              <div className="flex items-center gap-2 text-[#c29b38] text-[11px] font-bold tracking-[0.15em] uppercase mb-2">

                <Disc size={15} />

                <span>
                  Early Recorded Voices, Musical Mysteries & Historic Sound
                </span>

              </div>

              <h1 className="text-3xl sm:text-4xl font-bold leading-tight">
                Wax Cylinders & Recordings
              </h1>

              <p className="text-[14px] text-[#cbb9a5] mt-2 max-w-2xl leading-relaxed">
                Discover fascinating stories inspired by
                early sound recordings, forgotten voices,
                historic phonographs, and the mysteries
                of musical history. Explore captivating
                cozy mysteries, historical fiction,
                and remarkable reflections on the
                preservation of recorded sound.
                Journey through forgotten melodies,
                mysterious disappearances, and the
                enduring legacy of voices captured
                across generations.
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

                {/* AUTHOR NAME */}

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
