
import React from "react";
import { Link } from "react-router-dom";
import {
  ArrowLeft,
  BookOpen,
  ArrowUpRight,
} from "lucide-react";

export default function ArtFinePrinting() {

  // ==========================================
  // THE ART OF FINE PRINTING
  // Images: public/The Art of Fine/
  // All images: .jpg
  // Titles matched with actual book covers
  // No prices
  // Compact cards
  // Georgia font
  // No hover effects or animations
  // Amazon book search links
  // ==========================================

  const books = [
    {
      id: 1,
      title: "The Art of Man - Volumes 1 through 6: Special Soft Cover Collection - Fine Art of the Male Form (The Art of Man - Fine Art of the Male Figure)",
      author: "Daniel Barkley",
      format: "Fine Art & Figurative Illustration",
      image: "/The Art of Fine/The Art of Fine1.jpg",
      amazonUrl:
        "https://www.amazon.com/dp/1484029127/ref=mes-dp?_encoding=UTF8&pd_rd_w=qJgyk&content-id=amzn1.sym.554d6923-441d-464e-b555-abe1a6d1f059&pf_rd_p=554d6923-441d-464e-b555-abe1a6d1f059&pf_rd_r=T2C0Z8RHFGJPN9B4YHQZ&pd_rd_wg=LQbN8&pd_rd_r=08935e06-81e1-4f7e-880d-b59a9564689f",
    },
    {
      id: 2,
      title: "The Art of Fine Punmanship: A Treasury of Original Wordplay",
      author: "Mark Maranowski",
      format: "Creative Writing & Wordplay",
      image: "/The Art of Fine/The Art of Fine2.jpg",
      amazonUrl:
        "https://www.amazon.com/Art-Fine-Punmanship-Treasury-Original/dp/B08Q73NMXQ/ref=sr_1_1?dib=eyJ2IjoiMSJ9.hsa1sevDyXCHBx7oDVVN0w.5kMLOxsjJ9jaq-761cHYlUdYH51-QaVZuI84vcn3k5Y&dib_tag=se&keywords=9798684493034&qid=1794421878&sr=8-1",
    },
    {
      id: 3,
      title: "The Art of Lou Fine: The Original King of Comics",
      author: "Kristopher J. M. Brownlow",
      format: "Comic Book Art & Illustration",
      image: "/The Art of Fine/The Art of Fine3.jpg",
      amazonUrl:
        "https://www.amazon.com/Art-Lou-Fine-original-Comics/dp/B0BCS7K2Z8/ref=sr_1_1?dib=eyJ2IjoiMSJ9.4UeD0JEyKdLOdaX3bVV_qkzMBz25388-hOFcjpxBb2QowK7ypuzuAFdXJ-mRGW1t.QOL6R4P0J7Obv4FhlfuGWIbgC3DjGuxxFPYrygxCl3M&dib_tag=se&keywords=The+Art+of+Lou+Fine+Kristopher+Brownlow&qid=1794421920&sr=8-1",
    },
    {
      id: 4,
      title: "The Fine Art of Illustration",
      author: "James Fox",
      format: "Fine Art & Professional Illustration",
      image: "/The Art of Fine/The Art of Fine4.jpg",
      amazonUrl:
        "https://www.amazon.com/Fine-Art-Illustration-James-Fox/dp/B09KNGDMZS/ref=sr_1_1?dib=eyJ2IjoiMSJ9.StIzTpBk4FOW0X3jH6OlomtOLMBQsQXX3MiwUHPoy4F-3loGnrndRap_emMGv1BlrKUBNAqRWvOVW094trw4frdxdpaJQukMuUwsJ41xVs8nGCh88r95Aq8dJRxmBv6bKQ4EGoJ4-oQuKmAUazTvDKMqvngDB_QhA3_d1B5lg5WXfccWBO2dn5QP16hcTZh92ngt2qwOc0xrnhyXUc850Fy1ipPacw2ETB7RTlmNQ48.qXmPRkbeMCDzfeTgcuJSM72pm4s5HHBcSzOtHqQq0ao&dib_tag=se&keywords=The+Fine+Art+of+Illustration+James+Fox&qid=1794421939&sr=8-1",
    },
    {
      id: 5,
      title: "The Fine Art of Deceit",
      author: "Robert Ferraro",
      format: "Art Crime & Mystery Fiction",
      image: "/The Art of Fine/The Art of Fine5.jpg",
      amazonUrl:
        "https://www.amazon.com/Fine-Art-Deceit-Robert-Ferraro/dp/B0GDM4DT88/ref=sr_1_1?dib=eyJ2IjoiMSJ9.gqhxRuNtr7H8-MH0Jc-1cw.PUw8MIqz7HaqgXUoTSG8UxGKPGDLgA35u1bnVxjPAgE&dib_tag=se&keywords=The+Fine+Art+of+Deceit+Robert+Ferraro&qid=1794421963&sr=8-1",
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

          <span>Classical Rarities</span>

          <span>/</span>

          <span className="font-bold text-[#8c2d19]">
            The Art of Fine Printing
          </span>

        </nav>

        {/* PAGE HEADER */}

        <header className="bg-[#241a15] text-[#fbf8f2] border border-[#c29b38] px-6 py-6 mb-6">

          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">

            <div className="flex-1">

              <div className="text-[#c29b38] text-[11px] font-bold tracking-[0.15em] uppercase mb-2">
                Fine Art, Illustration & Creative Expression
              </div>

              <h1 className="text-3xl sm:text-4xl font-bold leading-tight">
                The Art of Fine Printing
              </h1>

              <p className="text-[14px] text-[#cbb9a5] mt-2 max-w-2xl leading-relaxed">
                Discover exceptional works exploring
                fine art, figurative illustration,
                creative wordplay, comic book artistry,
                and visual storytelling. From classic
                comic illustrations and artistic expression
                to imaginative literature and art-inspired
                mysteries, explore a diverse collection
                celebrating creativity and craftsmanship.
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
                  alt={
                    book.author
                      ? `${book.title} by ${book.author}`
                      : book.title
                  }
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

              {/* BOOK INFORMATION */}

              <div className="flex flex-col flex-1 mt-2">

                {/* BOOK TITLE */}

                <h2 className="text-[17px] font-bold text-[#241a15] leading-[1.35]">
                  {book.title}
                </h2>

                {/* AUTHOR NAME */}

                {book.author && (
                  <p className="text-[13px] text-[#8a593f] italic mt-2 leading-snug">
                    by {book.author}
                  </p>
                )}

                {/* AMAZON VIEW BOOK BUTTON */}

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
