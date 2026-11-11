
import React from "react";
import { Link } from "react-router-dom";
import {
  ArrowLeft,
  BookOpen,
  ArrowUpRight,
  Feather,
} from "lucide-react";

export default function OriginalHandSignedLetters() {

  // ==========================================
  // ORIGINAL HAND-SIGNED LETTERS
  // Images: public/Original Hand/
  // All images: .jpg
  // Titles matched with actual book covers
  // No prices
  // Georgia font
  // Compact five-column cards
  // No hover effects or animations
  // Amazon search links included
  // ==========================================

  const books = [
    {
      id: 1,
      title:
        "Declaration of Independence, Constitution of the United States & Bill of Rights",
      author: "Founding Documents of the United States",
      format: "American Founding Documents & Constitutional History",
      image: "/Original Hand/Original Hand1.jpg",
      amazonUrl:
"https://www.amazon.com/Declaration-Independence-Constitution-United-Amendments/dp/B0FTVM2JNF/ref=sr_1_1?dib=eyJ2IjoiMSJ9.MdNuf5DSRwBWamsWcsVGqyO2LOCNNYxnElvVJ9TOIVe-rY5bwbGQMMAYPPkEKzJ4cQ-KtNqJHZZq-c8Oz5DzjwW_4vpDseULIyp2Bsi_rnZJDEPUukAa5vhy3iTPRzY6120ZjOMraJzM_xzx7Xpgl6HtfhyZ7ikuabjQYliUatVoiUb7IeCy_yS1UIIDLBGoNl1rcMWsYzmV-dQOkWvX04E6jLwzBHNzVLr8jwkqtoA.raFoRaaWdemIUh_HbiO1CYAYkw9LkfxAFWp4eD8BDIU&dib_tag=se&keywords=Declaration+of+Independence+Constitution+Bill+of+Rights+Modern+English+Original+Text&nsdOptOutParam=true&qid=1794428595&sr=8-1"    },
    {
      id: 2,
      title:
        "FE Civil Engineering Exam Study Guide",
      author: "Marcus E. Holloway",
      format: "Civil Engineering & Professional Exam Preparation",
      image: "/Original Hand/Original Hand2.jpg",
      amazonUrl:
        "https://www.amazon.com/Civil-Engineering-Exam-Study-Guide/dp/B0HR2VWM3P/ref=sr_1_15?crid=3A7YVPES20YO3&dib=eyJ2IjoiMSJ9.nIonU17-fpUcLLjMxvvutzZrXSyh9MmdWbWF8wMX_TZpQfWxi3vu1aHTtRcPtLXRaLfHFregcmhIZ0s3SXIFO9BDMgdvtUo4iET88Us1gmbFqOs2XryVfujExE3r9896AHwIIYDZN6Zq7SP1_Xoid126DEFWdCvNlf0ylSGMkRX9GmeOvNABEaHH4ZCtbSkkzurtRAf3A2PGyAcFMXOM2omRSTkqecXQNdiymX2-l2k.BnhWVOAbIUU28RKBwDwSGSrV33eAeBRdoyUN5_arvic&dib_tag=se&keywords=original+handbook+independent&qid=1794429116&sprefix=orignal+handbook+independent%2Caps%2C343&sr=8-15",
    },
    {
      id: 3,
      title:
        "FE Environmental Exam Prep 2027–2028",
      author: "Rene Sandoval",
      format: "Environmental Engineering & Exam Preparation",
      image: "/Original Hand/Original Hand3.jpg",
      amazonUrl:
        "https://www.amazon.com/Environmental-Exam-Prep-2027-Fundamentals/dp/B0HR65YW96/ref=sr_1_1?dib=eyJ2IjoiMSJ9.5ZJbJknqJ-QTX4HP_mMAQbT2JgohHAy5B0-osEBCMTI5kRA5xYOpKB985dWkdjiXjcsQACEN1v6FsLmxfPtX4ioOOJK7OW2ApNsCYtLTDnVrg2nF02BsS87QijdiWal_eJrjsqqy6dGwclTJrxvXEw-xalz4lQyPoW3SM1Scndnkn-PMXRwBi2T98o1G8o_xKISzvBWNW9pFzcxy1z_rv1BzKx4OqSfGLj0zIAoQ2V4.TxVi02hoDhtnWmSLzsflLWYs6eZow0yVg-8fT7s9iOU&dib_tag=se&keywords=FE+Environmental+Exam+Prep+2027+2028+Rene+Sandoval&nsdOptOutParam=true&qid=1794428815&sr=8-1",
    },
    {
      id: 4,
      title:
        "Mandalas: 16 Original Hand-Drawn Designs for Relaxation, Creativity & Mindful Coloring",
      author: null,
      format: "Mandala Art & Mindful Coloring",
      image: "/Original Hand/Original Hand4.jpg",
      amazonUrl:
        "https://www.amazon.com/MEDITERRANEAN-ESCAPE-MANDALAS-RELAXATION-CREATIVITY/dp/B0HR3ZG91M/ref=sr_1_5?crid=20QCLE80SBRNN&dib=eyJ2IjoiMSJ9.Sv23nrFeyP3aFpJJWq1vHkUxdHDuWt2Ma0n9RDtvpnfXO-0MtEK1-CBhqiX1lJZ4iDq7xPdt8TOTnBRerGZFHUBoGFWB97U_xcJNlMeNlqQeeijGKG7FpiCgj5ux5EkdX9qnnjH9garDJoTZPbIwTbMIDE3x8Q3YxDtqH1Z0PKxzMZAqPQXe8EjzKJHJ79Go.XZoBX0TmrJbIxLle_JhgoMPsyQgz6RM4pgByU4m_0Ow&dib_tag=se&keywords=original+hand+Independent&qid=1794429334&s=books&sprefix=original+hand+independent%2Cstripbooks-intl-ship%2C362&sr=1-5",
    },
    {
      id: 5,
      title: "The United States Constitution",
      author: "Delegates of the Constitutional Convention",
      format: "United States Constitution & American History",
      image: "/Original Hand/Original Hand5.jpg",
      amazonUrl:
"https://www.amazon.com/Constitution-United-States-Declaration-Independence/dp/B09JJ98MJR/ref=tmm_pap_swatch_0"    },
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

          <span>Manuscripts & Science</span>

          <span>/</span>

          <span className="font-bold text-[#8c2d19]">
            Original Hand-Signed Letters
          </span>

        </nav>

        {/* ======================================
            PAGE HEADER
        ====================================== */}

        <header className="bg-[#241a15] text-[#fbf8f2] border border-[#c29b38] px-6 py-6 mb-6">

          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">

            <div className="flex-1 min-w-0">

              <div className="flex items-center gap-2 text-[#c29b38] text-[11px] font-bold tracking-[0.15em] uppercase mb-2">

                <Feather size={15} />

                <span>
                  Historic Documents, Engineering & Creative Studies
                </span>

              </div>

              <h1 className="text-3xl sm:text-4xl font-bold leading-tight">
                Original Hand-Signed Letters
              </h1>

              <p className="text-[14px] text-[#cbb9a5] mt-2 max-w-2xl leading-relaxed">
                Explore a diverse collection of historical
                documents, American constitutional texts,
                professional engineering study guides,
                and creative illustrated works. Discover
                foundational writings that shaped
                American history, educational resources
                for civil and environmental engineering,
                and artistic collections designed to
                inspire creativity and mindful expression.
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
            COLLECTION GRID
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
                  alt={`${book.title}${book.author ? ` by ${book.author}` : ""}`}
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

                {/* AUTHOR / CONTRIBUTOR */}

                {book.author && (
                  <p className="text-[13px] text-[#8a593f] italic mt-2 leading-snug">
                    by {book.author}
                  </p>
                )}

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
