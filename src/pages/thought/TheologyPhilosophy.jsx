
import React from "react";
import { Link } from "react-router-dom";
import {
  Compass,
  ArrowLeft,
  ArrowUpRight,
  BookOpen,
} from "lucide-react";

export default function TheologyPhilosophy() {

  // ==========================================
  // THEOLOGY & PHILOSOPHY
  // Images: public/theology/
  // Correct cover titles and authors
  // No prices
  // Compact cards
  // No hover animations
  // ==========================================

  const books = [
    {
      id: 1,
      title: "Hell to Pay: Discreet Cover Edition (Blackwell Bastards Discreet Editions)",
      author: "Sadie Hunt ",
      format: "Natural Theology & Philosophy",
      image: "/theology/theory1.jpg",
      amazonUrl:
        "https://www.amazon.com/Hell-Pay-Discreet-Blackwell-Bastards/dp/B0FFN5263T/ref=sr_1_3?crid=3HQ5T5D92K4WB&dib=eyJ2IjoiMSJ9.QSFU094QOVTxttHXePmKKn7xpMlwP33LRzxRyTENdjPGMx2uJiVZylDDQxx8YjSWlWsasix0_l3N8BgK-KmyqZ2dsf2iwf-KS9gu3hYXwP-gnemULGKmGT2JSy17iXT4l02t_QUYXbCIQu7ypsqISWHft9LEG6ec8TIwRtRqcekackrE3uiL3dwZuLaDP1JdtCPV5dyGKSqnig3xkOUbTcikqoJ53SAXSs0_5w1pEJE.ISDu8xtq81Zox5iM7kRkmblBCZ-ItOZ-2IOHca4vl3Q&dib_tag=se&keywords=the+blackwell+company+Independent&qid=1794357410&s=books&sprefix=the+blackwell+company+independent%2Cstripbooks-intl-ship%2C1321&sr=1-3-catcorr",
    },
    {
      id: 2,
      title: "Fairy Tales for a Modern Age: Book 2",
      author: "C. R. Beaumont",
      format: "Modern Fairy Tales & Philosophy",
      image: "/theology/theory2.jpg",
      amazonUrl:
        "https://www.amazon.com/Fairy-Tales-Modern-Age-Book-ebook/dp/B0F9FJ52ZP/ref=sr_1_1?dib=eyJ2IjoiMSJ9.mUVsI2N9qX-_yzT_c3zKTw.qzlxxoEQjaYRYnA_TVW6zmsXM_g3Sg80MNbAIML6u4Q&dib_tag=se&keywords=Fairy+Tales+for+a+Modern+Age+Book+2+C+R+Beaumont&nsdOptOutParam=true&qid=1794356545&sr=8-1",
    },
    {
      id: 3,
      title: "Trixi Palone: Siren",
      author: "C. R. Beaumont",
      format: "Fantasy & Mythological Fiction",
      image: "/theology/theory3.jpg",
      amazonUrl:
        "https://www.amazon.com/Trixi-Palone-Siren-Last-Verdant-ebook/dp/B0GL8Y7JB2/ref=sr_1_1?dib=eyJ2IjoiMSJ9.9scqlLFsnPVXQYaxLBXkBQ.9wPhnfqUi8mlOFhZbvuwBrzE25NxHedog-dfU750h3U&dib_tag=se&keywords=trixie+palone+siren+c+r+beaumont&qid=1794356738&sr=8-1",
    },
    {
      id: 4,
      title: "The Stolen Scriptures: How Ancient Myths Became the Bible",
      author: "C. R. Beaumont",
      format: "Comparative Religion & Biblical History",
      image: "/theology/theory4.jpg",
      amazonUrl:
        "https://www.amazon.com/Stolen-Scriptures-Ancient-Philosophy-Sociology-ebook/dp/B0FKMP2HTK/ref=sr_1_1?dib=eyJ2IjoiMSJ9.sgsdn--ABPKVL_2kbVXCnfeQgaYL3cI1CLDhyFH7JgPQH-KNwc_-hOUIxYJH3Ozx.D23RLwN3HJq4mhVKA9gTXY1KS50BABfXcZAGP55_-6w&dib_tag=se&keywords=The+Stolen+Scriptures+C+R+Beaumont&qid=1794356771&sr=8-1",
    },
    {
      id: 5,
      title: "The Old Ways and the Hidden Powers",
      author: "C. R. Beaumont",
      format: "History of Magic & Spiritual Traditions",
      image: "/theology/theory5.jpg",
      amazonUrl:
        "https://www.amazon.com/Old-Ways-Hidden-Powers-Witchcraft/dp/B0HG26MHRJ/ref=sr_1_1?dib=eyJ2IjoiMSJ9.sk0ASPGsH6e1DWUvak75ToegMKQ_9hG0yW6ZbljnlYPB5EMLDngy5sHyyYqJx8yvUNRvOtvuyA2MkHFPJ76d6w.Sy-jwN7yQVYfn1Uc8MBjoXT5wg7f3Of4s-TvgNeaRqw&dib_tag=se&keywords=The+Old+Ways+and+the+Hidden+Powers+C+R+Beaumont&nsdOptOutParam=true&qid=1794356805&sr=8-1",
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
          <span>Thought & Science</span>
          <span>/</span>

          <span className="font-bold text-[#8c2d19]">
            Theology & Philosophy
          </span>

        </nav>

        {/* PAGE HEADER */}

        <header className="bg-[#241a15] text-[#fbf8f2] border border-[#c29b38] px-6 py-6 mb-6">

          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">

            <div className="flex-1">

              <div className="flex items-center gap-2 text-[#c29b38] text-[11px] font-bold tracking-[0.15em] uppercase mb-2">

                <Compass size={16} />

                <span>
                  Faith, Reason & Philosophical Inquiry
                </span>

              </div>

              <h1 className="text-3xl sm:text-4xl font-bold leading-tight">
                Theology & Philosophy
              </h1>

              <p className="text-[14px] text-[#cbb9a5] mt-2 max-w-2xl leading-relaxed">
                Discover thought-provoking works exploring
                philosophy, Christian theology, religious
                understanding, natural theology, and the
                enduring relationship between faith and reason.
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

              {/* BOOK INFORMATION */}

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
