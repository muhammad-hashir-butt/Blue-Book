
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
  // Correct book titles and authors
  // Prices removed
  // Amazon search links
  // No hover effects or animations
  // ==========================================

  const books = [
    {
      id: 1,
      title: "The Digital Print",
      author: "Jeff Schewe",
      format: "Digital Photographic Printing",
      image: "/The Art of Fine/The Art of Fine1.webp",
      amazonUrl:
        "https://www.amazon.com/Digital-Print-Preparing-Lightroom-Photoshop/dp/0321908457/ref=sr_1_1?dib=eyJ2IjoiMSJ9.pa-o8iBMiPjH6RitMbYhYJs0x9gTy9Lip7C-IG0XpzXGjHj071QN20LucGBJIEps.oBAfJmUNjlt-wdPFHukcjKNaTxMlOJwoJeWSqXiCtn0&dib_tag=se&keywords=The+Digital+Print+Jeff+Schewe&qid=1794247310&sr=8-1",
    },
    {
      id: 2,
      title: "Fine Art Printing for Photographers",
      author: "Uwe Steinmueller & Juergen Gulbins",
      format: "Fine Art Inkjet Printing",
      image: "/The Art of Fine/The Art of Fine2.webp",
      amazonUrl:
        "https://www.amazon.com/Fine-Art-Printing-Photographers-Exhibition/dp/1933952318",
    },
    {
      id: 3,
      title: "How to Print: The Ultimate Guide to Achieving the Perfect Photographic Print",
      author: "Glyn Dewis",
      format: "Professional Photography Printing",
      image: "/The Art of Fine/The Art of Fine3.webp",
      amazonUrl:
        "https://www.amazon.com/How-Print-Ultimate-Achieving-Photographic/dp/B0F42WT621/ref=sr_1_1?dib=eyJ2IjoiMSJ9.CZRC_MloZDApq9LkYChT9w.n39ZqaXI2H7YsY3Oig8yyBSjvc8ZJUSVEye5a3Voqa8&dib_tag=se&keywords=9798888144213&qid=1794247367&sr=8-1",
    },
    {
      id: 4,
      title: "The Digital Negative",
      author: "Jeff Schewe",
      format: "Digital Image Processing",
      image: "/The Art of Fine/The Art of Fine4.webp",
      amazonUrl:
        "https://www.amazon.com/Digital-Negative-Processing-Lightroom-Photoshop/dp/0321839579/ref=sr_1_1?dib=eyJ2IjoiMSJ9.qns2Z0K7SBUvbPJT3D1aIOUv6J2-6WDZH0W6jFT6i6NEX5EPkUpLlhNFw7PyjAZDCJMhul8zB0X6ZeckWQk0q-ISU7do43ZsURb2Jr68hsN_uMWc1JvzA-ZAZ23R-fOa8fw7UfwdlzB-aXXAwuBmwyqAmJfIn0oNycQJ2PA8V-jTYy1VwJ3riuablpGEOSgih2h4a-HrdEjlKz0ujrmuaA.DxPXnq_HoUqv9Odf_IiQW27jN3ZONjyiWR_mZXdQgno&dib_tag=se&keywords=The+Digital+Negative+Jeff+Schewe&qid=1794247388&sr=8-1",
    },
    {
      id: 5,
      title: "Fine Art Inkjet Printing: The Craft and Art of the Fine Digital Print",
      author: "Jim Nickelson",
      format: "Fine Art Photography & Printmaking",
      image: "/The Art of Fine/The Art of Fine5.jpg",
      amazonUrl:
        "https://www.amazon.com/Fine-Art-Inkjet-Printing-Digital/dp/1681982064/ref=sr_1_1?dib=eyJ2IjoiMSJ9.Ft0QAeq1I7ZDOSN-z_5NYafUct-keLCiiKvsGDhHgksthoWrYqdCoa928-RVItgPFo33LGPXeOTFKfbOoIhSvtET2y4pDW_8GO29K0fIFPzYGbfsk0RT9BlknVoKv_SD4jIk8oUPAYfUALgpBSy7Uv1PbI1Ad7510VZ3Y35pQA_WGylSgw6oqL3VUxWdk9J-2yKx8TziXigsI7QlGWlbmZULq3rbP-xCL-IsP9nTS4yzv4aZ1M5cCRT8MBd2BfgN6BEPvGFTVmBoAsu8mph5ryUmIaFWS71bTbDmRqYvNw8.JGTONzCA4C5DHlym-mFXUKOmiSw-WvCl8O44l2XZ3nQ&dib_tag=se&keywords=Fine+Art+Inkjet+Printing+Jim+Nickelson&qid=1794247409&sr=8-1",
    },
  ];

  return (
    <div className="w-full min-h-screen bg-[#fbf8f2] text-[#2c241e] font-serif py-10 px-6">

      <div className="max-w-7xl mx-auto">

        {/* ======================================
            BREADCRUMB NAVIGATION
        ====================================== */}

        <div className="flex flex-wrap items-center gap-2 text-xs font-sans text-[#7a6452] mb-6">

          <Link to="/" className="flex items-center gap-1">
            <ArrowLeft className="w-3.5 h-3.5" />
            Back to Home
          </Link>

          <span>/</span>
          <span>Classical Rarities</span>
          <span>/</span>

          <span className="text-[#8c2d19] font-bold">
            The Art of Fine Printing
          </span>

        </div>

        {/* ======================================
            PAGE HEADER
        ====================================== */}

        <div className="bg-[#241a15] text-[#fbf8f2] p-8 border-2 border-[#c29b38] shadow-md mb-10 text-center sm:text-left flex flex-col sm:flex-row justify-between items-center gap-6">

          <div>

            <div className="text-[#c29b38] text-[10px] tracking-[0.3em] uppercase font-sans font-bold mb-2">
              Photography, Digital Printing & Fine Art Techniques
            </div>

            <h1 className="text-3xl sm:text-4xl font-bold font-serif">
              The Art of Fine Printing
            </h1>

            <p className="text-xs text-[#b8a68f] mt-2 max-w-xl font-serif italic leading-relaxed">
              Explore professional photographic printing,
              fine art inkjet techniques, digital negative
              processing, color management, and creative
              printmaking. Discover practical guides from
              experienced photographers and printing
              specialists dedicated to producing
              exceptional photographic prints.
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
