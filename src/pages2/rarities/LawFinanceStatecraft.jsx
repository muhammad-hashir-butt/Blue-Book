
import React from "react";
import { Link } from "react-router-dom";
import {
  ArrowLeft,
  BookOpen,
  ArrowUpRight,
} from "lucide-react";

export default function LawFinanceStatecraft() {

  // ==========================================
  // LAW, FINANCE & STATECRAFT
  // Images: public/Law/
  // All image extensions: .jpg
  // Titles matched with actual book covers
  // No prices
  // Compact cards
  // Georgia font
  // No animations or hover effects
  // Amazon links included
  // ==========================================

  const books = [
    {
      id: 1,
      title:
        "THE HONEY BEE DEMOCRACY: The Dance of Democracy: Explore how bees communicate, collaborate, and reach consensus through nature’s most efficient and peaceful decision-making system.",
      author: " ERICA EDWARDS",
      format: "Political Philosophy & Sovereignty",
      image: "/Law/Law1.jpg",
      amazonUrl:
        "https://www.amazon.com/HONEY-BEE-DEMOCRACY-communicate-decision-making/dp/B0G1B7PS52",
    },
    {
      id: 2,
      title:
        "The Bond: The Hidden Financial Instrument That Runs the Courts, Commands Commerce, and Could Be Your Greatest Shield",
      author: "Adrian Shapiro",
      format: "Financial Law & Legal Instruments",
      image: "/Law/Law2.jpg",
      amazonUrl:
"https://www.amazon.com/Bond-Financial-Instrument-Commands-Commerce/dp/B0HC9Q53NQ/ref=sr_1_1?dib=eyJ2IjoiMSJ9.cpfnq-Fl1DhXfs6br0ABZyJtCo6IRkJQtXEbZunfi1hJKB5578UVnzfIHm6J0ZAx.lMTM5Pdw3iN1Fs3NkGlACOAvcKBEvudbyu66uczQWeA&dib_tag=se&keywords=The+Bond+Adrian+Shapiro&qid=1794423536&sr=8-1"    },
    {
      id: 3,
      title:
        "Anarchy and the Law: The Political Economy of Choice",
      author: "Edward P. Stringham (Editor)",
      format: "Political Economy & Legal Philosophy",
      image: "/Law/Law3.jpg",
      amazonUrl:
"https://www.amazon.com/Anarchy-Law-Political-Economy-Choice-ebook/dp/B0G961KPP5/ref=sr_1_1?dib=eyJ2IjoiMSJ9.APwI3xp97nErxuj-LYqV1QoTUOkj4_50oV1Y2r_BR89UtAmjv4dBIfbGk4zwwh2xENszwMLOlkyfIKuYVDuxnRFCS_YIcx9Bp3NvXC5xXm4f29wsvdTscnjn42ZzPXIIpBEaDyf1dMrFiwvGbcHmBsjASbjgse7xCi87cJw2hfZ3eH2WYtbakPo1m9vFCwWLS3r7E84RsGarA1DRPczUeTeKxU29bm2We8jzUyUGmCk.Q3oNqpmYf3Y0CYBw3y2d0w2ZJ33Fb_DmeqnK2w2RE9E&dib_tag=se&keywords=Anarchy+and+the+Law+Edward+P+Stringham&qid=1794423568&sr=8-1"    },
    {
      id: 4,
      title:
        "PACs, Activism & Campaign Finance Law: Super PACs and FARA",
      author: "Dr. Eric Engle, LL.M.",
      format: "Campaign Finance & Political Law",
      image: "/Law/Law4.jpg",
      amazonUrl:
        "https://www.amazon.com/dp/B0DMNYNMKZ",
    },
    {
      id: 5,
      title:
        "The Enterprise of Law: Justice Without the State",
      author: "Bruce L. Benson",
      format: "Law, Justice & Political Economy",
      image: "/Law/Law5.jpg",
      amazonUrl:
"https://www.amazon.com/Enterprise-Law-Justice-Without-State/dp/1598130447/ref=sr_1_1?dib=eyJ2IjoiMSJ9.wMClj05vc6kLdHOyjcB3S_LN8Y66PJz0L3MMRPqt3wVjbKoydEAEecs63tvzVqwaAZs0iDyqZ0eh9_r6JI9GEVgaoIpZHBLPqVwnJzIGWP8.hdNBXiSMs0XGpVYYxg-jhD_cVWS_B6OS_Y_Z05uhZpg&dib_tag=se&keywords=The+Enterprise+of+Law+Bruce+L+Benson&qid=1794423596&sr=8-1"    },
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

          <span>Classical Rarities</span>

          <span>/</span>

          <span className="font-bold text-[#8c2d19]">
            Law, Finance & Statecraft
          </span>

        </nav>

        {/* ======================================
            PAGE HEADER
        ====================================== */}

        <header className="bg-[#241a15] text-[#fbf8f2] border border-[#c29b38] px-6 py-6 mb-6">

          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">

            <div className="flex-1">

              <div className="text-[#c29b38] text-[11px] font-bold tracking-[0.15em] uppercase mb-2">
                Law, Political Economy & Financial Statecraft
              </div>

              <h1 className="text-3xl sm:text-4xl font-bold leading-tight">
                Law, Finance & Statecraft
              </h1>

              <p className="text-[14px] text-[#cbb9a5] mt-2 max-w-2xl leading-relaxed">
                Explore thought-provoking works examining
                legal philosophy, financial instruments,
                political sovereignty, economic freedom,
                campaign finance, and the foundations
                of justice. Discover perspectives on
                the relationship between law, individual
                liberty, financial systems, political
                institutions, and the evolving role
                of government in society.
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

        {/* ======================================
            BOOK COLLECTION GRID
        ====================================== */}

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

                {/* AUTHOR NAME */}

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
