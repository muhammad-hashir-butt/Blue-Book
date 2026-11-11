
import React from "react";
import { Link } from "react-router-dom";
import {
  ArrowLeft,
  BookOpen,
  ArrowUpRight,
} from "lucide-react";

export default function TheologyBiblesMissals() {

  // ==========================================
  // THEOLOGY, BIBLES & MISSALS
  // Images: public/Theology, Bibles/
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
      title: "Catholic Missal and Mass Readings 2026",
      author: "Michael Harrington",
      format: "Catholic Missals & Scripture Readings",
      image: "/Theology, Bibles/Theology, Bibles1.jpg",
      amazonUrl:
        "https://www.amazon.com/CATHOLIC-MISSAL-MASS-READINGS-Liturgical/dp/B0GV2H7GVC/ref=sr_1_1?dib=eyJ2IjoiMSJ9.DPcZWeYT1hvtLzCHLexi8LtmhwtMiuMjYLLB3homL2CZWOPjIZ-9_MiMmiRGh_rFZPlMSXMU3G5bxynlRc6zbmPVEqsu_AH-hh3V5DrX4YEfxcWsxnAPNXeEyL7q6kpI29R_xN0fUmAmmwIROpLnQf7q0AJ6gN3VjHNIpkzg1E_c_TBXd2vDdBClAut9mbf9x-mJ7n6yNx4xYlX6J1tqQq840-Mj81nOPDb-2YxLnh0.kNLTcUFhWz_zW7yb4eWxxMZAVkemLqrvsS8G_q7UB3c&dib_tag=se&keywords=Catholic+Missal+and+Mass+Readings+2026+Michael+Harrington&nsdOptOutParam=true&qid=1794427216&sr=8-1",
    },
    {
      id: 2,
      title: "LOS 73 LIBROS DE LA BIBLIA CATÓLICA GUÍA DE ESTUDIO: Una guía para principiantes con resúmenes de las Escrituras, versículos clave, historia de la ... y preparación para (Spanish Edition)",
      author: " Anna T. Sheridan ",
      format: "Catholic Bible & Biblical Study",
      image: "/Theology, Bibles/Theology, Bibles2.webp",
      amazonUrl:
        "https://www.amazon.com/LIBROS-BIBLIA-CAT%C3%93LICA-GU%C3%8DA-ESTUDIO/dp/B0HNCYB7BL/ref=sr_1_70?Adv-Srch-Books-Submit.x=0&Adv-Srch-Books-Submit.y=0&dib=eyJ2IjoiMSJ9.RanaQ9b3eaXLJRxJ20RKXYDF8a_cSU7YahCFM2Yp5NCtkXEt3zwJsm7Libv0y7j5UCo1uj_aGojl2h2JyAUGFAziBfTGnEZ42oGKa7-Arf37FfNt3camUh2Cl1CcTgY2vMD4bZ1mmp8G_Oa2n7JV45050_6GexA1dvupfUnVjRct2GoU0l0qhcMmw3U0Tg2N2A1K-KDKWyZTqLaDg-i282l5ihzkPUDvUafsnrE6zrc.LtDieM0JaDEc_c0VO_l4YPMZORetP5wSe0jFKqBF4Fs&dib_tag=se&keywords=theology+bibles+and+missal+independent&qid=1794429737&sr=8-70&unfiltered=1&xpid=M5lWX1Zhi3eDg",
    },
    {
      id: 3,
      title: "The Pocket Guide to the Holy Mass",
      author: "Thomas Alcott",
      format: "Catholic Mass & Worship Guide",
      image: "/Theology, Bibles/Theology, Bibles3.jpg",
      amazonUrl:
        "https://www.amazon.com/Pocket-Guide-Holy-Step-Step/dp/B0H4571ZW8/ref=sr_1_1?dib=eyJ2IjoiMSJ9.LnJppjNlSiaX4uiWqcfpWn9j4Ez_XEiJ1-ol12TvmAIQJNf8wMBaojASJ0kldxQPCjxAThHW3T0MMMKgGrCla_B-VxaL91qr9xomeM8fCvZbgImAE2zm9iAM4BQytx8weS-YN_noXx8_8yD0HNpiO32icVgV7oi1sTwtEGrRY59cyD8ZP6JWlZi9WTP9r2ij4gQaL_jVlNOAcrYeBFoVIaabGtJdJ3eNahTyPiKoEx0.uFok-UUm1GrpkZrGcSZCcNDO76KQEikCxKBFPHqsEJY&dib_tag=se&keywords=The+Pocket+Guide+to+the+Holy+Mass+Thomas+Alcott&nsdOptOutParam=true&qid=1794427383&sr=8-1",
    },
    {
      id: 4,
      title: "Roman Catholic Sunday Missal 2026/2027",
      author: "Fr. Veritas Ignatius",
      format: "Sunday Missals & Catholic Liturgy",
      image: "/Theology, Bibles/Theology, Bibles4.jpg",
      amazonUrl:
"https://www.amazon.com/Roman-Catholic-Sunday-Missal-2026/dp/B0H6RF63W1/ref=sr_1_1?dib=eyJ2IjoiMSJ9.l5pqh8NBeSz4T9CuksF7iA0CXtau6XNGuPbLXJvDyNeqqIEYnVO7Knxp1Nks2D1u3wHhRLfVa4-uTVg2-orxKHxTFyJMhZN-RD_-pvRLwaRs1CQ1fCTXAhqO3NNj_tQQcPyjbmI0VhgqsY3-4ZuD1orYaVgaaoyu6OixSKXIn_-EA3k5naP6uMuRbTi5NuLx8JbiscRYqykohQMMmcx3xMUzjTto1p828Zi-mPpTEMU.vJ7K3sRRfOw88sjVsPj0TtfZ7mVCn0dJhfq_KCOp-vU&dib_tag=se&keywords=Roman+Catholic+Sunday+Missal+2026+2027+Veritas+Ignatius&nsdOptOutParam=true&qid=1794427459&sr=8-1"    },
    {
      id: 5,
      title:
        "The Illustrated Catholic Bible Companion: All 73 Books, One Story of Salvation",
      author: "Brendan Mulcahy",
      format: "Illustrated Catholic Bible & Study Guide",
      image: "/Theology, Bibles/Theology, Bibles5.jpg",
      amazonUrl:
"https://www.amazon.com/Illustrated-Catholic-Bible-Companion-Book/dp/B0HKD8QN1T/ref=sr_1_1?dib=eyJ2IjoiMSJ9.GuiL-sqyrpWAezw3kk-Sbt1TiOs_pwhxAjKZSmm7Mlf__85lLNKxi-Ctw8jRsjgbFk7eAw9HSa_RPKSip1kZoHm774cST8WhxLrd3tHbOH06PZYCPBlrgKBFSftEEnLG-xt66NZy_BKOt14MH0TPgPg5H5au7-wrnqk2U4c9pDXdf9CPavyTp7YtkLvmP-aHoDnlctq4ReVPM9igdljrc7dOo5e_txd5iyJGTjp_KFY.Ofro7bBmAOiuzlNZhjmDpmgYhYOFLb5MIofDaJ0fo88&dib_tag=se&keywords=The+Illustrated+Catholic+Bible+Companion+Brendan+Mulcahy&qid=1794427486&sr=8-1"    },
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
            Theology, Bibles & Missals
          </span>

        </nav>

        {/* ======================================
            PAGE HEADER
        ====================================== */}

        <header className="bg-[#241a15] text-[#fbf8f2] border border-[#c29b38] px-6 py-6 mb-6">

          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">

            <div className="flex-1 min-w-0">

              <div className="text-[#c29b38] text-[11px] font-bold tracking-[0.15em] uppercase mb-2">
                Catholic Bibles, Sacred Liturgy & Devotional Reading
              </div>

              <h1 className="text-3xl sm:text-4xl font-bold leading-tight">
                Theology, Bibles & Missals
              </h1>

              <p className="text-[14px] text-[#cbb9a5] mt-2 max-w-2xl leading-relaxed">
                Explore a distinguished collection of
                Catholic Bibles, traditional missals,
                scripture readings, devotional guides,
                and illustrated biblical companions.
                Discover meaningful resources for
                understanding the Holy Mass, following
                the liturgical calendar, studying sacred
                scripture, and deepening knowledge of
                Catholic faith, worship, and tradition.
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
