
import React from "react";
import { Link } from "react-router-dom";
import {
  Heart,
  ArrowLeft,
  ArrowUpRight,
  BookOpen,
} from "lucide-react";

export default function RomanceLiterature() {

  // ==========================================
  // ROMANCE BOOKS - ACTUAL COVER DETAILS
  // Images: public/romance/
  // Prices removed.
  // Amazon search links included.
  // ==========================================

  const books = [
    {
      id: 1,
      title: "Yes Sir: An Age Gap Romance",
      author: "Sherrion Marie",
      format: "Age Gap Romance",
      image: "/romance/romance1.webp",
      amazonUrl:
        "https://www.amazon.com/Yes-Sir-Romance-Feeling-Shooting/dp/B0HCY2F557/ref=sr_1_1?dib=eyJ2IjoiMSJ9.TWrgwz2xxFe51PcH5MLemA.q83f5kIu1kEJkvV-3LU2G-9FKghpo1dKqUpONzZg8iw&dib_tag=se&keywords=Yes+Sir+Sherrion+Marie&qid=1794009292&sr=8-1",
    },
    {
      id: 2,
      title: "Can I Join You?: A Why Choose Romance",
      author: "Kyiris Ashley",
      format: "Contemporary Romance",
      image: "/romance/romance2.webp",
      amazonUrl:
        "https://www.amazon.com/Can-Join-You-Choose-Romance-ebook/dp/B0H4YYTFRJ/ref=sr_1_1?dib=eyJ2IjoiMSJ9.spvbbZ2zlIriJjegcyUpDillo4xOPeF4TQefsNfW9sM5fsHPgMgYJWF6IX6I1CnUeARvaLmZNSV0RrTZ_udQCriL1Ha2wksagfHmh60uilvVE8vI_rHnteDyx4RLPEpT54rw7Qo7Yr4Jue-vo69BZh3P48OZtxMbWw042q5sESNMzwfn38jWU-GFJjgKjfJC8BGZwWwhFDzTrJksqxDYe9ymIB5BoUt61O1Q26iMul8.PYn2MMrfvbgmVLFSN6T6ih5Ib0zqk9D3sRMMpuCsKHA&dib_tag=se&keywords=Can+I+Join+You+Kyiris+Ashley&qid=1794009266&sr=8-1",
    },
    {
      id: 3,
      title: "Love Is Never Late",
      author: "Sect Elder Breeze",
      format: "Dark Billionaire Romance",
      image: "/romance/romance3.webp",
      amazonUrl:
        "https://www.amazon.com/Love-Never-Late-Possessive-Romance-ebook/dp/B0D8WLVJ6H/ref=sr_1_1?dib=eyJ2IjoiMSJ9.lXgkuxaDh5qfNjmHsyEMDNcAaahE2nOl5tABATnpBj0oPBn4n58q5N-KJVclDCV7ReCXae4hujA1X61Rsyj0yuAP6F8yfJGh-XGjBQPyg7g.ezwGiLvoA6ugI9g2jPoGuyuoWJD5_fY5mhhVxLru6T4&dib_tag=se&keywords=Love+Is+Never+Late+Sect+Elder+Breeze&qid=1794009242&sr=8-1",
    },
    {
      id: 4,
      title: "Sandcastles",
      author: "Shenaye Suggs",
      format: "Romantic Suspense",
      image: "/romance/romance4.webp",
      amazonUrl:
        "https://www.amazon.com/Sand-Castles-Love-Like-Honey-ebook/dp/B0GQKK3H92/ref=sr_1_1?dib=eyJ2IjoiMSJ9.nZUongjCUczry9kDS1QtaA.TIJzQhYG3EE2LX3ycvOmf-3zb_HqrGN-zkLPvu4kUO0&dib_tag=se&keywords=Sandcastles+Shenaye+Suggs&qid=1794009220&sr=8-1",
    },
    {
      id: 5,
      title: "Second Chances: An African American Romance",
      author: "Nicki Drake",
      format: "Contemporary Romance",
      image: "/romance/romance5.jpg",
      amazonUrl:
        "https://www.amazon.com/Second-Chances-African-American-Romance/dp/B0DV9MFKKN/ref=sr_1_1?dib=eyJ2IjoiMSJ9.z1-6nTXbSxKfwzI_7qfHvw.6iNVT5goEM4k0quLRDQ97gwr9n6myFKOWUwoF7BNvSg&dib_tag=se&keywords=Second+Chances+Nicki+Drake&qid=1794009183&sr=8-1",
    },
  ];

  return (
    <div className="w-full min-h-screen bg-[#fbf8f2] text-[#2c241e] font-serif py-10 px-6">
      <div className="max-w-7xl mx-auto">

        {/* BREADCRUMB NAVIGATION */}

        <div className="flex flex-wrap items-center gap-2 text-xs font-sans text-[#7a6452] mb-6">
          <Link
            to="/"
            className="hover:text-[#8c2d19] hover:underline flex items-center gap-1"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            Back to Home
          </Link>

          <span>/</span>
          <span>Categories</span>
          <span>/</span>

          <span className="text-[#8c2d19] font-bold">
            Romance Literature
          </span>
        </div>

        {/* PAGE HEADER */}

        <div className="bg-[#241a15] text-[#fbf8f2] p-8 border-2 border-[#c29b38] shadow-md mb-10 text-center sm:text-left flex flex-col sm:flex-row justify-between items-center gap-6">

          <div>
            <div className="flex items-center justify-center sm:justify-start gap-2 text-[#c29b38] text-[10px] tracking-[0.3em] uppercase font-sans font-bold mb-2">
              <Heart className="w-4 h-4" />
              <span>
                Passionate Stories & Unforgettable Romance
              </span>
            </div>

            <h1 className="text-3xl sm:text-4xl font-bold font-serif">
              Romance Literature
            </h1>

            <p className="text-xs text-[#b8a68f] mt-2 max-w-xl font-serif italic leading-relaxed">
              Discover captivating romance novels, emotional
              love stories, romantic suspense, complicated
              relationships, and unforgettable journeys
              of passion, heartbreak, and second chances.
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

              {/* BOOK DETAILS */}

              <div className="flex flex-col flex-1">

                {/* GENRE BADGE */}

                <span className="text-[9px] font-sans font-bold text-[#8c2d19] border border-[#c29b38] bg-[#fbf8f2] px-2 py-1 uppercase tracking-wide inline-block self-start mb-3">
                  {book.format}
                </span>

                {/* BOOK TITLE */}

                <h3 className="text-base font-bold text-[#241a15] leading-snug line-clamp-3 min-h-[70px]">
                  {book.title}
                </h3>

                {/* AUTHOR */}

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
