
import React from "react";
import { Link } from "react-router-dom";
import {
  Search,
  ArrowLeft,
  ArrowUpRight,
  BookOpen,
} from "lucide-react";

export default function CrimeThrillerMystery() {

  // ==========================================
  // CRIME, THRILLER & MYSTERY
  // Images: public/crime/
  // Correct titles and authors
  // Prices removed
  // Amazon search links included
  // ==========================================

  const books = [
    {
      id: 1,
      title: "The Girl from Silent Lake",
      author: "Leslie Wolfe",
      format: "Detective Crime Thriller",
      image: "/crime/crime1.jpg",
      amazonUrl:
        "https://www.amazon.com/Girl-Silent-Lake-heart-pounding-Detective-ebook/dp/B08P1Z9HZ8/ref=sr_1_1?dib=eyJ2IjoiMSJ9.PFvDyaYr0_2P9w8A-Ql6QNNQ5ZKfspzMLyKSVcIFAtucF_WmVd6zRfWi4isD_-Ku16ApqaegRjQU7Tr58ilOg1rfYskrnC4Hc7LqXbLpvcsW1WiILUQUBhoTB9Epm7yUrDqaq4javsqUvnumHWIwWq7wmFmEkCnT-cWQKJNXh33knMFmWVll7jiNA0LjYvrixrziVe_DRDkFTmfSd-CdqVAWwr3K4ri29r_Ql0JRwrY.AVE7RkAqDmehMnKHH7uZB3Yb6ivAIxTi6pSriMXcni4&dib_tag=se&keywords=The+Girl+from+Silent+Lake+Leslie+Wolfe&qid=1794015327&sr=8-1",
    },
    {
      id: 2,
      title: "His Perfect Crime",
      author: "Alex Sigmore",
      format: "Mystery Thriller",
      image: "/crime/crime2.jpg",
      amazonUrl:
        "https://www.amazon.com/His-Perfect-Crime-Mystery-Thriller/dp/B0DZY3T849/ref=sr_1_1?dib=eyJ2IjoiMSJ9.Ly0-MyQtLUuSWKE1zuXHSliGW5kftZDlR1Mwl_vt6IZlzizNtMajuycrE_PucpL-6gmkDqJx99AFAMSKx__EBgAiPV27ok3Uvk-aTD7w2-YH-w8E-ThqrKESQnGuvVYUCiNgymSHS7P1UVYeX9IwIs0feh8715LK-drbyd62UxOG_qkBqTdj2sxikfie66ZW-oe3L0uylPkbyQfgySgUqv7MYbSM3xc8y5SOl3nWC8U.9aSCjnYDG2daU7eYk91nUKuAx-wHeD2Qg1ISp8cIJt8&dib_tag=se&keywords=His+Perfect+Crime+Alex+Sigmore&qid=1794015360&sr=8-1",
    },
    {
      id: 3,
      title: "Lines of Inquiry",
      author: "Rhys Dylan",
      format: "British Detective Thriller",
      image: "/crime/crime3.jpg",
      amazonUrl:
        "https://www.amazon.com/Lines-Inquiry-Beacons-Mystery-Thriller/dp/B0D98VTFSP/ref=sr_1_1?dib=eyJ2IjoiMSJ9.4rczyitTsPcMmAoleOpSBEuBiDx5jYiEJ6rtv6uSodM.6HaUSA4xKmGIsa2s_ZKnuq4MWTitLAH752mWMw-njUI&dib_tag=se&keywords=Lines+of+Inquiry+Rhys+Dylan+Audiobook&qid=1794015390&sr=8-1",
    },
    {
      id: 4,
      title: "Murder in the Hollows",
      author: "Declan James",
      format: "Crime & Murder Mystery",
      image: "/crime/crime4.jpg",
      amazonUrl:
        "https://www.amazon.com/Murder-Hollows-Cashen-Crime-Thriller/dp/B0BYPK9C79/ref=sr_1_1?dib=eyJ2IjoiMSJ9.-SINxHVspf_Ezo7XcScqaPBiSpxna8JST7B6vTD1SdFt_8WH4L8h8fG2_vxM6BlG0TWB7T0k7qv26NQLJajoA-GslOtgDsEu_2krq-a2Ik6C5nGUvE0ENvfG2siQJU8S8q-Vr5JcC3esLV7oPfeX1SZrkXGsf0Kq89rolnN6TWcrHB-cW2UFcP73AavO7_0WcgeQwJWvXbhQOpwVRY16s4ZRPPB4g8xfqQGmasNBMDI.xniSpipm2L1ksxisiZ_gavsrnqAv0dgOj8A74qnz6UI&dib_tag=se&keywords=Murder+in+the+Hollows+Declan+James+Audiobook&qid=1794015456&sr=8-1",
    },
    {
      id: 5,
      title: "The Bodies on Horse Heaven Hill",
      author: "D. D. Black",
      format: "Detective Crime Thriller",
      image: "/crime/crime5.webp",
      amazonUrl:
        "https://www.amazon.com/Bodies-Horse-Heaven-Hill-Thriller/dp/B0GR6QPS5M/ref=sr_1_1?dib=eyJ2IjoiMSJ9.bg04naliGj_pAiPxf_pqN5R3Z_SWhx0y-l7L7pljDVDxn0iGk67pI3oRybWRiWX7.1-pd9-_fU95NUqk9zxGtJ_w6Q5qtdKJ7_y6_CVcmU28&dib_tag=se&keywords=The+Bodies+on+Horse+Heaven+Hill+D+D+Black&nsdOptOutParam=true&qid=1794015481&sr=8-1",
    },
  ];

  return (
    <div className="w-full min-h-screen bg-[#fbf8f2] text-[#2c241e] font-serif py-10 px-6">
      <div className="max-w-7xl mx-auto">

        {/* ======================================
            BREADCRUMB NAVIGATION
        ====================================== */}

        <div className="flex flex-wrap items-center gap-2 text-xs font-sans text-[#7a6452] mb-6">

          <Link
            to="/"
            className="hover:text-[#8c2d19] hover:underline flex items-center gap-1"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            Back to Home
          </Link>

          <span>/</span>
          <span>Thought & Science</span>
          <span>/</span>

          <span className="text-[#8c2d19] font-bold">
            Crime, Thriller & Mystery
          </span>

        </div>

        {/* ======================================
            PAGE HEADER
        ====================================== */}

        <div className="bg-[#241a15] text-[#fbf8f2] p-8 border-2 border-[#c29b38] shadow-md mb-10 text-center sm:text-left flex flex-col sm:flex-row justify-between items-center gap-6">

          <div>

            <div className="flex items-center justify-center sm:justify-start gap-2 text-[#c29b38] text-[10px] tracking-[0.3em] uppercase font-sans font-bold mb-2">

              <Search className="w-4 h-4" />

              <span>
                Suspense, Intrigue & Detective Mysteries
              </span>

            </div>

            <h1 className="text-3xl sm:text-4xl font-bold font-serif">
              Crime, Thriller & Mystery
            </h1>

            <p className="text-xs text-[#b8a68f] mt-2 max-w-xl font-serif italic leading-relaxed">
              Discover gripping detective investigations,
              psychological suspense, chilling murder
              mysteries, and unforgettable crime thrillers
              from acclaimed contemporary storytellers.
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

        {/* ======================================
            BOOK COLLECTION GRID
        ====================================== */}

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">

          {books.map((book) => (

            <div
              key={book.id}
              className="bg-[#fdfbf7] p-4 border-2 border-[#b8a68f] shadow-sm flex flex-col hover:border-[#8c2d19]"
            >

              {/* BOOK COVER */}

              <div className="w-full h-64 bg-[#efe8db] p-2 border border-[#c7b8a3] shadow-inner overflow-hidden mb-4 flex items-center justify-center">

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

                <h3 className="text-base font-bold text-[#241a15] leading-snug line-clamp-3 min-h-[70px]">
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
                      aria-label={`View ${book.title} on Amazon`}
                      className="w-full bg-[#241a15] hover:bg-[#8c2d19] text-[#fbf8f2] text-xs font-sans font-bold py-3 px-4 uppercase tracking-wider flex items-center justify-center gap-2"
                    >
                      <BookOpen size={15} />
                      View Book
                      <ArrowUpRight size={15} />
                    </a>

                  </div>

                </div>

              </div>

            </div>

          ))}

        </div>

        {/* ======================================
            BOTTOM DIVIDER
        ====================================== */}

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
