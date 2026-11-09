
import React from "react";
import { Link } from "react-router-dom";
import {
  Sparkles,
  ArrowLeft,
  ArrowUpRight,
  BookOpen,
} from "lucide-react";

export default function ScienceFictionFantasy() {

  // ==========================================
  // SCIENCE FICTION & FANTASY
  // Images: public/sciencefiction/
  // Correct cover titles and authors
  // No prices
  // Amazon search links included
  // ==========================================

  const books = [
    {
      id: 1,
      title: "Red Rising",
      author: "Pierce Brown",
      format: "Dystopian Science Fiction",
      image: "/sciencefiction/sciencefiction1.webp",
      amazonUrl:
        "https://www.amazon.com/Red-Rising-Pierce-Brown-audiobook/dp/B00I3PUCIY/ref=sr_1_1?dib=eyJ2IjoiMSJ9.p1Mle3oCA-LSj-gTC_RtelZpS8gbI34gAidQrPw9WwaDtErovDXbFIs-cfisKroY7NJc8TY2JFx3WoZoI1t_b2lnape_Oe1T1uC9znJkuwHByQgj9GKRw1iEU8rGxeIX2RW5EYDCs22F0XTjjSsflJ01YK3KwxQx6NVv1XjyYEjaarHAQrVtTcjS5htajTyMmjOKUEb3P7wE9b7-qhukIY3_mYOLqbGsI1duYyf8Y_8.o7TKgnmFKyB_nwTKWdUpTvl-tpYKvGESx2m_MOcfz5M&dib_tag=se&keywords=Red+Rising+Pierce+Brown+Audiobook&qid=1794014212&sr=8-1",
    },
    {
      id: 2,
      title: "Children of Time",
      author: "Adrian Tchaikovsky",
      format: "Epic Science Fiction",
      image: "/sciencefiction/sciencefiction2.webp",
      amazonUrl:
        "https://www.amazon.com/Children-of-Time-audiobook/dp/B06ZXTHNSJ/ref=sr_1_1?dib=eyJ2IjoiMSJ9.rmy4dt_y3QTGVp3D3mf_59UC5b95PG0A2A2KU1pPNd6naqnx1MaRz-XWLWqsXi0T4mi_jDMLFbwkRis6et830qOsOBp6jUcSsnOKUdMGK20DKpMHZed2ktlnlphmln8NAEgDATMWSGACyUSB14gUzKrRb52Z_7R740WTlG-LjJLdyIXGNGyIeN-Cr3GyOUHZ9cZXNKI-UQE4NwP6wqrP5AN6z8AKCbNF-KxKCDtudtU.WUwFDYp_V2Bi7FzNFd7dy14bHrvjKj7d89By8_puIUM&dib_tag=se&keywords=Children+of+Time+Adrian+Tchaikovsky+Audiobook&qid=1794014240&sr=8-1",
    },
    {
      id: 3,
      title: "We Are Legion (We Are Bob)",
      author: "Dennis E. Taylor",
      format: "Space Exploration Science Fiction",
      image: "/sciencefiction/sciencefiction3.jpg",
      amazonUrl:
        "https://www.amazon.com/We-Are-Legion-We-Are-Bob-audiobook/dp/B01L082SCI/ref=sr_1_1?dib=eyJ2IjoiMSJ9.mkv-fDmeHYWzKC7mooI_xbASeek8jcP_mTFwTP_uK2S7d8IhewbWTokkHUxkEJim-SIdyvak2ND4d3svZPNbV-uRVo_arCht5_ivDxss_TE.qsd_gt1inidtfkx6XVsmKtUXV-C3pFqluhHqmxrTvuE&dib_tag=se&keywords=We+Are+Legion+We+Are+Bob+Dennis+E+Taylor+Audiobook&nsdOptOutParam=true&qid=1794014509&sr=8-1",
    },
    {
      id: 4,
      title: "Project Hail Mary",
      author: "Andy Weir",
      format: "Science Fiction Adventure",
      image: "/sciencefiction/sciencefiction4.jpg",
      amazonUrl:
        "https://www.amazon.com/Project-Hail-Mary/dp/B08GB58KD5/ref=sr_1_1?dib=eyJ2IjoiMSJ9.SKL97oqkS-7Dnb8yQFEgmVmRqZo4twckl5q9S-2ZGo58hhl_CSnWtXNYl3UW3He4oQNs4WShnfBAJSNPfv3w-HfipyU-QopP5D48GH_zVB_hUDRLz-AKRW54I7rLEJYW6W6lq1ZHEJQoKxIRdwvWXRTVWP0aJLnwDI5asy59sbXCAnG1ubpsyfwCbGXszLgicSHUyh5108H62ToVTRRqdbBrhLS34tpC8wQ-HAZuRBY.4MBsD3G0ol1JaNLPyUIp4oyU25Uvm5tnLsKnFJDJHms&dib_tag=se&keywords=Project+Hail+Mary+Andy+Weir+Ray+Porter+Audiobook&nsdOptOutParam=true&qid=1794014312&sr=8-1",
    },
    {
      id: 5,
      title: "Service Model",
      author: "Adrian Tchaikovsky",
      format: "Robotics & Artificial Intelligence",
      image: "/sciencefiction/sciencefiction5.webp",
      amazonUrl:
        "https://www.amazon.com/Audible-Service-Model/dp/B0CMYJRJPB/ref=sr_1_1?dib=eyJ2IjoiMSJ9.fOFI-Ql5CZIaGKLWd4kCOipuLNOnh8EriBH4Ni2kl841JjBj82PzV2P9B6loKfLnAa8gAb2HxwfDXcNk4WQ7pTo_riHDS6yLU26PmxHrXcNPUwUqEsBW3PyBDw4AQvXyaZWruyaFFsD_ODKYLBczspYWH44E6H_MxwqgrjKBBRDyosSqEwKrB2eBuXQEfLU0J_X4lRCj3bKcT-XIGbqMrhrT4xJS82Kl_TZNw8232_w.-3SyEJwQDOsiJM4CuTu66oajXoK2DY6az3XSJka3VAU&dib_tag=se&keywords=Service+Model+Adrian+Tchaikovsky&qid=1794014359&sr=8-1",
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
            Science Fiction & Fantasy
          </span>

        </div>

        {/* ======================================
            PAGE HEADER
        ====================================== */}

        <div className="bg-[#241a15] text-[#fbf8f2] p-8 border-2 border-[#c29b38] shadow-md mb-10 text-center sm:text-left flex flex-col sm:flex-row justify-between items-center gap-6">

          <div>

            <div className="flex items-center justify-center sm:justify-start gap-2 text-[#c29b38] text-[10px] tracking-[0.3em] uppercase font-sans font-bold mb-2">

              <Sparkles className="w-4 h-4" />

              <span>
                Extraordinary Worlds & Imagined Futures
              </span>

            </div>

            <h1 className="text-3xl sm:text-4xl font-bold font-serif">
              Science Fiction & Fantasy
            </h1>

            <p className="text-xs text-[#b8a68f] mt-2 max-w-xl font-serif italic leading-relaxed">
              Explore extraordinary science fiction,
              distant galaxies, futuristic civilizations,
              artificial intelligence, interstellar adventures,
              and imaginative worlds created by celebrated
              speculative fiction authors.
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
