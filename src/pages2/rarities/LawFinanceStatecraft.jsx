
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
  // Correct book titles and authors
  // Prices removed
  // Amazon search links included
  // No hover effects or animations
  // ==========================================

  const books = [
    {
      id: 1,
      title: "Corporate Finance Law: Principles and Policy",
      author: "Louise Gullifer & Jennifer Payne",
      format: "Corporate Finance & Business Law",
      image: "/Law/Law1.webp",
      amazonUrl:
        "https://www.amazon.com/Corporate-Finance-Law-Principles-Policy-ebook/dp/B0FKSGN58X/ref=sr_1_1?dib=eyJ2IjoiMSJ9.2AiIm20dUSvwUBOGNi5kYCXdXij0lSsyiwD2Glu97s9O7FkudTt0kOTKTO4ipFd3_MRsReT36713Gnp6Rcc5RO5z0O4WhfaPYT3oBylwnwg_--M_idNhmI5uto4fu_gEsExGjlPle7okpm10_KIjAC-NyVMNz45OIvSIeZo3IIUrSxFKFyOm1BD7w70BAyfFDMM_95BLKd0cZYc7ql-RB1C-nm8RDikjbk14rV7zImQ.t_XaZSEebTqVT-yXY-wE6M_pZ-TYxzcDoYKZyLHMUaU&dib_tag=se&keywords=Corporate+Finance+Law+Principles+and+Policy+Louise+Gullifer+Jennifer+Payne&nsdOptOutParam=true&qid=1794249930&sr=8-1",
    },
    {
      id: 2,
      title: "Financial Statecraft: The Role of Financial Markets in American Foreign Policy",
      author: "Benn Steil & Robert E. Litan",
      format: "Financial Markets & Foreign Policy",
      image: "/Law/Law2.jpg",
      amazonUrl:
        "https://www.amazon.com/Financial-Statecraft-Markets-American-Foreign/dp/030010975X/ref=sr_1_1?dib=eyJ2IjoiMSJ9.Xb6qrsGZrPYe14VGscCd7uukMoaNMXDdfK_gbC1GTAFo_z7JS_TNPthaGXDDoA-0na98ucCnCcCvHzhsTjkhAwNgPvmTekLy2m8ueYwiAjlQbT-ERa6EiYI7Yx0AlOr4yfsW82eGDoKbFXtOLN08W3IqAvFvFIGeeYLsEqqHSIDESOj-Ew9oqXL4hjfe0vHm6PnAJMwCjCdM_KC7wyOrGdQO8pA2dcLpL83VTRjkb-k.lKnuzHiDe09i4eKXa28Z48QFQevebzkUxkfXJUtIFLM&dib_tag=se&keywords=Financial+Statecraft+Benn+Steil+Robert+Litan&qid=1794249967&sr=8-1",
    },
    {
      id: 3,
      title: "The Political Economy of Financial Regulation",
      author: "Emilios Avgouleas & David C. Donald (Editors)",
      format: "Financial Regulation & Political Economy",
      image: "/Law/Law3.webp",
      amazonUrl:
        "https://www.amazon.com/Political-Financial-Regulation-International-Corporate/dp/1108455913/ref=sr_1_1?dib=eyJ2IjoiMSJ9.e2T-YmRrapTxsS3gOyw8kil6dZSsM0JImlkxf5E9Xg_8vokhzRXL6pbpRtQ5m1Pn4kUa-2GMU1JDpgADn5tLYJnwC7wzBEENm_RsuM3SGKwzgiXc4G8lYSc_-2dl3J2zYy18n63gcYM0wrMI6cYN1I7MAlAAoRRMIelg1xdEdFsyTt7jj_rOImtQOEB4c4d9YaEl76pzbZ2foPVJhUQzNaE6gX-Ixc0vm-81dM1oC8w.1KJYxL9vaGWrQmnJLSB7qnOlfzjBoWTblyGws3IfGdY&dib_tag=se&keywords=The+Political+Economy+of+Financial+Regulation+Avgouleas+Donald&nsdOptOutParam=true&qid=1794249995&sr=8-1",
    },
    {
      id: 4,
      title: "The Law and Business of International Project Finance",
      author: "Scott L. Hoffman",
      format: "International Project Finance Law",
      image: "/Law/Law4.webp",
      amazonUrl:
        "https://www.amazon.com/Law-Business-International-Project-Finance/dp/0521708788/ref=sr_1_1?dib=eyJ2IjoiMSJ9.ivB8eCIRfPJ2qK6oURheHSCXV4dWdJbYinpe-aN9z_ob7QkVJFLMLQA7SSP4VdnbF8Vvk-qvwyTnI681Axl0FaMiuIwdCr0woDw4BzYaNwazMO040LcudDT4srD6w2YJ1YpRxwOTedNKMoMWiemvF5z8IlGa4gs9rAS-NeTsurFln7YxAM3PjFpVWdxgqbvcnW6K51NZd455RFAR-Xv8h4Ju_KPsxtk-yGDYYxu6yqk.I2gC4y1jt23VGmMnN70ToOYz8-oKKHFcQi8tjz01X8c&dib_tag=se&keywords=The+Law+and+Business+of+International+Project+Finance+Scott+Hoffman&nsdOptOutParam=true&qid=1794250107&sr=8-1",
    },
    {
      id: 5,
      title: "The Financial Statecraft of Borrowers: African Governments and External Finance",
      author: "Alexandra O. Zeitz",
      format: "African Finance & Economic Statecraft",
      image: "/Law/Law5.webp",
      amazonUrl:
        "https://www.amazon.com/Financial-Statecraft-Borrowers-Governments-External-ebook/dp/B0DNTH8MD1/ref=sr_1_1?dib=eyJ2IjoiMSJ9.Nh-_ESE8HskiMpF0vxOIZjxsaxur3jlKGiR1qAh_WcF3tDAI7zsez5ZTZvIxGLUBuV106kjcLinFbbCQH0DGJKedi35IISSBfRclVf1XyBU-zJGmay2RtK-aFEcR5CqdXV26PwLt7eHrMBH1msV10AZkZVuMFANzTK0vYcgFRS9xxiIh-zTFxEXOs9UYmcuw.5n72sBY_YVFCZtiVuh3GaBjJNlRsieV6kLDopwpBM-g&dib_tag=se&keywords=The+Financial+Statecraft+of+Borrowers+Alexandra+Zeitz&qid=1794250155&sr=8-1",
    },
  ];

  return (
    <div className="w-full min-h-screen bg-[#fbf8f2] text-[#2c241e] font-serif py-10 px-6">

      <div className="max-w-7xl mx-auto">

        {/* BREADCRUMB NAVIGATION */}

        <div className="flex flex-wrap items-center gap-2 text-xs font-sans text-[#7a6452] mb-6">

          <Link
            to="/"
            className="flex items-center gap-1"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            Back to Home
          </Link>

          <span>/</span>
          <span>Classical Rarities</span>
          <span>/</span>

          <span className="text-[#8c2d19] font-bold">
            Law, Finance & Statecraft
          </span>

        </div>

        {/* PAGE HEADER */}

        <div className="bg-[#241a15] text-[#fbf8f2] p-8 border-2 border-[#c29b38] shadow-md mb-10 text-center sm:text-left flex flex-col sm:flex-row justify-between items-center gap-6">

          <div>

            <div className="text-[#c29b38] text-[10px] tracking-[0.3em] uppercase font-sans font-bold mb-2">
              Corporate Law, Financial Markets & Global Governance
            </div>

            <h1 className="text-3xl sm:text-4xl font-bold font-serif">
              Law, Finance & Statecraft
            </h1>

            <p className="text-xs text-[#b8a68f] mt-2 max-w-xl font-serif italic leading-relaxed">
              Explore influential works examining corporate
              finance law, international financial markets,
              economic governance, regulatory institutions,
              and global financial policy. Discover scholarly
              perspectives on financial statecraft,
              international project finance, political
              economy, and the relationship between
              governments and financial systems.
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

        {/* BOOK COLLECTION GRID */}

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">

          {books.map((book) => (

            <article
              key={book.id}
              className="bg-[#fdfbf7] p-4 border-2 border-[#b8a68f] shadow-sm flex flex-col"
            >

              {/* BOOK COVER */}

              <div className="w-full h-64 bg-[#efe8db] p-2 border border-[#c7b8a3] overflow-hidden mb-4 flex items-center justify-center">

                <img
                  src={book.image}
                  alt={`${book.title} by ${book.author}`}
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

                <h3 className="text-base font-bold text-[#241a15] leading-snug line-clamp-4 min-h-[110px]">
                  {book.title}
                </h3>

                {/* AUTHOR NAME */}

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
                      className="w-full bg-[#241a15] text-[#fbf8f2] text-xs font-sans font-bold py-3 px-4 uppercase tracking-wider flex items-center justify-center gap-2"
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

        {/* BOTTOM DIVIDER */}

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
