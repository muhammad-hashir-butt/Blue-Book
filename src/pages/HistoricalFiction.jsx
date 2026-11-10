
import React from "react";
import { Link } from "react-router-dom";
import {
  ArrowLeft,
  ArrowUpRight,
  BookOpen,
} from "lucide-react";

export default function HistoricalFiction() {

  const books = [
    {
      id: 1,
      title: "Tender Rot",
      subtitle: "Volume One",
      author: "Morenike Honteuse",
      format: "Historical Gothic & Dark Fiction",
      image: "/history/history1.jpg",
      amazonUrl:
        "https://www.amazon.com/Tender-Rot-Morenike-Honteuse-ebook/dp/B0GX32KLFB/ref=sr_1_1?dib=eyJ2IjoiMSJ9.D07uH9TDfhUkzPILRJOXXQ.ae2Q7_NSpDgscXMe2bAxI7Yr6hthfMeljitc_3hb79M&dib_tag=se&keywords=Tender+Rot+Morenike+Honteuse&qid=1794332703&sr=8-1",
    },
    {
      id: 2,
      title: "Anne Black: Seed of Scotland",
      subtitle: "",
      author: "Rosanne Vaughan",
      format: "Scottish Gothic Fantasy & Romance",
      image: "/history/history2.jpg",
      amazonUrl:
        "https://www.amazon.com/dp/B0FSQWQMC4",
    },
    {
      id: 3,
      title: "Christmas in '45",
      subtitle: "A Novel",
      author: "Mark W. Sasse",
      format: "World War II Historical Fiction",
      image: "/history/history3.jpg",
      amazonUrl:
        "https://www.amazon.com/dp/B0B6RWCN6B",
    },
    {
      id: 4,
      title: "The Mummy's Vengeance",
      subtitle:
        "Case Files from the Nightfall Detective Agency",
      author: "David Alyn Gordon",
      format: "Historical Mystery & Horror",
      image: "/history/history4.jpg",
      amazonUrl:
        "https://www.amazon.com/Mummys-Vengeance-Mystery-Nightfall-Detective-ebook/dp/B0CKLKLK6G/ref=sr_1_1?dib=eyJ2IjoiMSJ9.CduKi_6DQ_MDuvkErUAkTnOIB9e3e3n5g-rQqF58pj7GjHj071QN20LucGBJIEps.ViBPJqUJlsVrq6TG6WlBj3YSL0ynx7B-yPcBOatFnA0&dib_tag=se&keywords=The+Mummys+Vengeance+David+Alyn+Gordon&qid=1794332739&sr=8-1",
    },
    {
      id: 5,
      title: "Beneath the Angels of Mons",
      subtitle:
        "Tales of the Supernatural and Psychological",
      author: "Gregg F. Bartley",
      format: "Historical Supernatural & War Fiction",
      image: "/history/history5.jpg",
      amazonUrl:
        "https://www.amazon.com/dp/B0DJY557WN",
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

        {/* BREADCRUMB */}

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
            Historical Fiction
          </span>
        </nav>

        {/* PAGE HEADER */}

        <header className="bg-[#241a15] text-[#fbf8f2] border border-[#c29b38] px-6 py-6 mb-6">

          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">

            <div className="flex-1">

              <p className="text-[#c29b38] text-[11px] font-bold tracking-[0.15em] uppercase mb-2">
                History, Mystery & Extraordinary Stories
              </p>

              <h1 className="text-3xl sm:text-4xl font-bold leading-tight">
                Historical Fiction
              </h1>

              <p className="text-[14px] text-[#cbb9a5] mt-2 max-w-2xl leading-relaxed">
                Journey through captivating historical
                settings, atmospheric mysteries, Gothic
                romance, wartime experiences, and
                supernatural adventures. Discover
                compelling stories that bring together
                imagination, historical inspiration,
                unforgettable characters, and the
                mysteries of the past.
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
                  alt={`${book.title} by ${book.author}`}
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

              {/* BOOK DETAILS */}

              <div className="flex flex-col flex-1 mt-2">

                <h2 className="text-[17px] font-bold text-[#241a15] leading-[1.35]">
                  {book.title}
                </h2>

                {book.subtitle && (
                  <p className="text-[12px] text-[#756052] mt-1 leading-snug">
                    {book.subtitle}
                  </p>
                )}

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
                      aria-label={`View ${book.title} on Amazon`}
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
