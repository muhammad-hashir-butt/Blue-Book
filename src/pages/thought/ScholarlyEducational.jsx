
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
  // SCHOLARLY & EDUCATIONAL
  // Images: public/scholarly/
  // All images: .jpg
  // Actual cover titles and authors
  // No prices
  // Compact cards
  // No hover animations
  // Amazon search links included
  // ==========================================

  const books = [
    {
      id: 1,
      title: "The Office of the Bishop: From the Book of Acts to the Azusa Street Revival & Beyond",
      author: "Bishop Andy C. Lewter, D. Min.",
      format: "Church History & Religious Leadership",
      image: "/scholarly/scholarly1.jpg",
      amazonUrl:
        "https://www.amazon.com/Office-Bishop-Revival-Academic-Scholarly/dp/B0FPQQDCWK/ref=sr_1_1?dib=eyJ2IjoiMSJ9.pEtBEUSJE0ADj9wjo4gMOVlpF7EH7qeK_hlzBHMkzWR5f7ljPcsOqX-GBidFjwWlSsDrNPFbvfPekXSB1InrpaVVf3UOkPQwphg2BzR4knsMBlLUv5J2IUhfL4N2v1u5s88JZfU40qHT2B8QTslsfw.NsjZx0CLe0lIS1bOJZsiYa-smdliKeRyPOZDaBwedM8&dib_tag=se&keywords=The+Office+of+the+Bishop+Andy+C+Lewter&nsdOptOutParam=true&qid=1794413369&sr=8-1",
    },
    {
      id: 2,
      title: "WAG Your Work: Writing Accountability Groups",
      author: "Kimberly A. Skarupski, PhD, MPH",
      format: "Academic Writing & Research Productivity",
      image: "/scholarly/scholarly2.jpg",
      amazonUrl:
        "https://www.amazon.com/WAG-Your-Work-Accountability-Productivity/dp/1979668485/ref=sr_1_1?dib=eyJ2IjoiMSJ9.Zz-4u-_4C_8c04-Ekd242A.v3RMvZDrZiR8WacSnu94_KW8rcaOzqVjQGvzX9ICfkI&dib_tag=se&keywords=WAG+Your+Work+Kimberly+Skarupski&qid=1794413391&sr=8-1",
    },
    {
      id: 3,
      title: "The Staff and the Scepter: Exploring the Struggle That Led to the Separation of Church and State",
      author: "Bishop Andy C. Lewter, D. Min.",
      format: "Church & State History",
      image: "/scholarly/scholarly3.jpg",
      amazonUrl:
        "https://www.amazon.com/Staff-Scepter-Exploring-Investiture-Controversy/dp/B0G4JH4C14/ref=sr_1_1?dib=eyJ2IjoiMSJ9.5gl0FzszG_iM7VqLpSw6OA.FbhGPqVChTtEV1SlEebBXdp0q2jgKYPcM1T9jdZoaoE&dib_tag=se&keywords=The+Staff+and+the+Scepter+Andy+Lewter&qid=1794413483&sr=8-1",
    },
    {
      id: 4,
      title: "From Apostles to Bishops: A Review of the Early Church's Leadership Positions",
      author: "Bishop Andy C. Lewter, D. Min.",
      format: "Early Christianity & Church Leadership",
      image: "/scholarly/scholarly4.jpg",
      amazonUrl:
        "https://www.amazon.com/Apostles-Bishops-Leadership-Positions-Scholarly/dp/B0FNX6XF13/ref=sr_1_1?dib=eyJ2IjoiMSJ9.Ss_Itc6jKNayyXYMSL0GlFrTq36fUjrMwdeEccEMEO7CNVVnhILY25IznfKvdZpC_HwqsmpKDQU0_7909NTk4xxVpI3eK5IawOB3LHA0bAZ1le3SlVViqjId6nK_0xjKYIgvcOzVzTcyU9e54L4zyw01N4RUDHH9B_30v0kyM32kz-C507YNbEQe-LPgI6xnxFMgHRdL6mUhwIwbSuWPULRj7p3I0PQDF_1iKDUavj0.IDxQ5p9BIvRBL7R3q3IQGomf2miFTMsNM_dUi70GuOg&dib_tag=se&keywords=From+Apostles+to+Bishops+Andy+C+Lewter&qid=1794413523&sr=8-1",
    },
    {
      id: 5,
      title: "Being a Scholar: Reflections on Doctoral Study, Scholarly Writing, and Academic Life",
      author: "David Labaree",
      format: "Doctoral Studies & Academic Life",
      image: "/scholarly/scholarly5.jpg",
      amazonUrl:
        "https://www.amazon.com/Being-Scholar-Reflections-Doctoral-Scholarly/dp/B0BYRC28MH/ref=sr_1_1?dib=eyJ2IjoiMSJ9.7lLibzqq4ZLKYxH9qF1MUQ.W7Xaauax2mW78DCI8iyeqnD0qhtI9Q4wl4cxPEiwLaE&dib_tag=se&keywords=9798365523623&qid=1794413553&sr=8-1",
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

          <span>Thought & Science</span>

          <span>/</span>

          <span className="font-bold text-[#8c2d19]">
            Scholarly & Educational
          </span>

        </nav>

        {/* ==========================================
            PAGE HEADER
        ========================================== */}

        <header className="bg-[#241a15] text-[#fbf8f2] border border-[#c29b38] px-6 py-6 mb-6">

          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">

            <div className="flex-1">

              <div className="flex items-center gap-2 text-[#c29b38] text-[11px] font-bold tracking-[0.15em] uppercase mb-2">

                <GraduationCap size={16} />

                <span>
                  Academic Research, History & Scholarly Studies
                </span>

              </div>

              <h1 className="text-3xl sm:text-4xl font-bold leading-tight">
                Scholarly & Educational
              </h1>

              <p className="text-[14px] text-[#cbb9a5] mt-2 max-w-2xl leading-relaxed">
                Explore distinguished educational works
                covering academic research, scholarly writing,
                doctoral studies, religious history,
                early Christian leadership, and the intellectual
                traditions that continue to shape education
                and society.
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
                  BOOK COVER IMAGE
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
                  BOOK DETAILS
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
