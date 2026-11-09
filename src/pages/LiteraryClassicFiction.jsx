
import React from "react";
import { Link } from "react-router-dom";
import {
  Sparkles,
  ArrowLeft,
  ArrowUpRight,
  BookOpen,
} from "lucide-react";

export default function LiteraryClassicFiction() {

  // ==========================================
  // BOOK DATA
  // Images: public/fiction/
  // Amazon URLs included.
  // No prices.
  // ==========================================

  const books = [
    {
      id: 1,
      title: "East of Eden",
      author: "John Steinbeck",
      format: "Literary Classic",
      image: "/fiction/fiction1.webp",
      amazonUrl: "https://www.amazon.com/East-Eden-John-Steinbeck-ebook/dp/B001BC5HXG?ref_=ast_author_dp_rw&th=1&psc=1&dib=eyJ2IjoiMSJ9.eAx_2kWpGNTsZCRGqw2U4g9xKLCyb_NPXGhnlmF0s-cErnOG21a3KETUbv1005dHUz5daVhAwyq6B203JLEUGSbB-hP9b0ntkBduFk2LXJ95CHAqRMFDA-cfr2u9CnW-qFI6YkmLhgxvABviMEqJcx0uL14c1GmH5nmQVbUFqe4WYZesOrEkrjbTAIyW7FuKV14dhu7iQbbvWHom_ki_wch8N78034ban4xAYgkl36M.J7-f3Nz5GDRrNAvScmvy-lD4TXGztjngWMilb-a6Um0&dib_tag=AUTHOR",
    },
    {
      id: 2,
      title: "A Tree Grows in Brooklyn",
      author: "Betty Smith",
      format: "Coming-of-Age Classic",
      image: "/fiction/fiction2.webp",
      amazonUrl: "https://www.amazon.com/dp/0060736267",
    },
    {
      id: 3,
      title: "Animal Farm",
      author: "George Orwell",
      format: "Political Satire",
      image: "/fiction/fiction3.webp",
      amazonUrl: "https://www.amazon.de/Animal-Farm-zv%C3%AD%C5%99at-Signet-Classics/dp/0451526341",
    },
    {
      id: 4,
      title: "The Complete Novels of Jane Austen",
      author: "Jane Austen",
      format: "Classic Literature Collection",
      image: "/fiction/fiction4.webp",
      amazonUrl: "https://www.amazon.com/Complete-Novels-Austen-Knickerbocker-Classics/dp/1631066439",
    },
    {
      id: 5,
      title: "To Kill a Mockingbird",
      author: "Harper Lee",
      format: "Literary Fiction",
      image: "/fiction/fiction5.jpg",
      amazonUrl: "https://www.amazon.com/dp/0060935464",
    },
  ];

  return (
    <div className="w-full min-h-screen bg-[#fbf8f2] text-[#2c241e] font-serif py-10 px-6">

      <div className="max-w-7xl mx-auto">

        {/* BREADCRUMB */}
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
            Literary & Classic Fiction
          </span>

        </div>

        {/* PAGE HEADER */}
        <div className="bg-[#241a15] text-[#fbf8f2] p-8 border-2 border-[#c29b38] shadow-md mb-10 text-center sm:text-left flex flex-col sm:flex-row justify-between items-center gap-6">

          <div>

            <div className="flex items-center justify-center sm:justify-start gap-2 text-[#c29b38] text-[10px] tracking-[0.3em] uppercase font-sans font-bold mb-2">
              <Sparkles className="w-4 h-4" />
              <span>Timeless Literary Masterpieces</span>
            </div>

            <h1 className="text-3xl sm:text-4xl font-bold font-serif">
              Literary & Classic Fiction
            </h1>

            <p className="text-xs text-[#b8a68f] mt-2 max-w-xl font-serif italic leading-relaxed">
              Discover timeless literary masterpieces,
              unforgettable characters, and celebrated
              works of fiction from influential authors
              across generations.
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

        {/* BOOK COLLECTION */}
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

                {/* AMAZON VIEW BUTTON */}
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
