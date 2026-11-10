
import React from "react";
import { Link } from "react-router-dom";
import {
  ArrowLeft,
  ArrowUpRight,
  BookOpen,
} from "lucide-react";

export default function BiographyMemoir() {

  // BIOGRAPHY & MEMOIR COLLECTION
  // Images stored in public/biography/
  // Classic Georgia font throughout
  // Compact cards without hover animations
  // No prices displayed

  const books = [
    {
      id: 1,
      title:
        "Better Late Than Never: Transitioning Late in Life",
      subtitle: "A Transgender Autobiography",
      author: "Kristy McClellan",
      format: "Autobiography & Personal Journey",
      image: "/biography/biography1.jpg",
      amazonUrl:
        "https://www.amazon.com/Better-Late-Than-Never-Transitioning-ebook/dp/B085LV28RK/ref=sr_1_1?dib=eyJ2IjoiMSJ9.aMp1JDx6ojaqy25izulE8w.ljdxXF4O-eM_PjYxwlU-SmyTFd3eanLqeBJ2IZHguFA&dib_tag=se&keywords=Better+Late+Than+Never+Kristy+McClellan&qid=1794329782&sr=8-1",
    },
    {
      id: 2,
      title: "Love Me",
      subtitle:
        "A Memoir of Online Dating, Mental Illness and Redemption",
      author: "Oshun Reed",
      format: "Personal Memoir & Redemption",
      image: "/biography/biography2.jpg",
      amazonUrl:
        "https://www.amazon.com/Love-Me-Memoir-Illness-Redemption-ebook/dp/B0DG655JHW",
    },
    {
      id: 3,
      title:
        "The Corfu Diaries: One Way Ticket to Paradise",
      subtitle: "A Travel Memoir",
      author: "Mike O'Toole",
      format: "Travel Memoir & Adventure",
      image: "/biography/biography3.jpg",
      amazonUrl:
        "https://www.amazon.com/Corfu-Diaries-Travel-Memoir-Starting-ebook/dp/B0GX2YQT2W/ref=sr_1_1?dib=eyJ2IjoiMSJ9.ZsFRtTi9BIFYHqtn8F52NmQ0kpq2hnOq4XbWzkliQM0.Nb73wtG4NuHBYDWmB5PJPcfb2pZU5D7eZHY6v2ZH9-I&dib_tag=se&keywords=The+Corfu+Diaries+Mike+OToole&qid=1794329918&sr=8-1",
    },
    {
      id: 4,
      title: "Good Trouble on the High Seas",
      subtitle: "A Memoir",
      author: null,
      format: "Maritime Memoir & Sea Adventures",
      image: "/biography/biography4.jpg",
      amazonUrl:
        "https://www.amazon.com/Good-Trouble-High-Seas-Memoir-ebook/dp/B0F6BNP924/ref=sr_1_1?dib=eyJ2IjoiMSJ9.0GspD2bsiA9pWv9FvQIeobPsXqAxpjgLFF-QY2T-ax4.QfdHDtUFt0dD-l8RPGAj2k3-wPYfMWDMMGf7CV9HaBY&dib_tag=se&keywords=Good+Trouble+on+the+High+Seas+A+Memoir&nsdOptOutParam=true&qid=1794329948&sr=8-1",
    },
    {
      id: 5,
      title: "Strange Tribe",
      subtitle: "A Family Memoir",
      author: "John Hemingway",
      format: "Family History & Memoir",
      image: "/biography/biography5.jpg",
      amazonUrl:
        "https://www.amazon.co.uk/Strange-Tribe-family-John-Hemingway-ebook/dp/B081ZL8YDJ?ref_=ast_author_mpb",
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
          <span>Categories</span>
          <span>/</span>

          <span className="font-bold text-[#8c2d19]">
            Biography & Memoir
          </span>
        </nav>

        {/* PAGE HEADER */}

        <header className="bg-[#241a15] text-[#fbf8f2] border border-[#c29b38] px-6 py-6 mb-6">

          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">

            <div className="flex-1">

              <p className="text-[#c29b38] text-[11px] font-bold tracking-[0.15em] uppercase mb-2">
                Extraordinary Lives & Personal Stories
              </p>

              <h1 className="text-3xl sm:text-4xl font-bold leading-tight">
                Biography & Memoir
              </h1>

              <p className="text-[14px] text-[#cbb9a5] mt-2 max-w-2xl leading-relaxed">
                Explore remarkable lives, personal memoirs,
                historical biographies, and powerful stories
                of perseverance, faith, and human experience.
              </p>

            </div>

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

        {/* BOOK COLLECTION */}

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
                  alt={book.title}
                  loading="lazy"
                  className="w-full h-full object-contain"
                />

              </div>

              {/* CATEGORY */}

              <div className="mt-3">

                <span className="inline-block text-[10px] font-bold uppercase leading-snug text-[#8c2d19] border border-[#c29b38] px-2 py-1">
                  {book.format}
                </span>

              </div>

              {/* TITLE, SUBTITLE, AUTHOR */}

              <div className="flex flex-col flex-1 mt-2">

                <h2 className="text-[17px] font-bold text-[#241a15] leading-[1.35]">
                  {book.title}
                </h2>

                {book.subtitle && (
                  <p className="text-[12px] text-[#756052] mt-1 leading-snug">
                    {book.subtitle}
                  </p>
                )}

                {book.author && (
                  <p className="text-[13px] text-[#8a593f] italic mt-2 leading-snug">
                    by {book.author}
                  </p>
                )}

                {/* VIEW BOOK */}

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
                      <span>View Book</span>
                      <ArrowUpRight size={15} />
                    </a>

                  </div>

                </div>

              </div>

            </article>

          ))}

        </section>

        {/* BOTTOM DECORATION */}

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
