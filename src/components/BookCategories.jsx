import React from 'react';
import { Sparkles, Compass, Bookmark, Award, ArrowUpRight } from 'lucide-react';

export default function BookCategories() {
  
  // 1. DATA: Magical Realism (Spotlight Book + Shelf Books)
  const spotlightBook = {
    title: "God Help the Child",
    author: "Toni Morrison",
    format: "Collector's First Edition",
    price: "$12.50",
    description: "A profound literary exploration of childhood trauma, redemption, and adult consequence by Nobel laureate Toni Morrison.",
    image: "https://images.pexels.com/photos/904616/pexels-photo-904616.jpeg?auto=compress&cs=tinysrgb&w=600"
  };

  const shelfBooks = [
    {
      id: 1,
      title: "Winter's Tales",
      author: "Isak Dinesen",
      format: "Archival Paperback",
      price: "$2.96",
      image: "https://images.pexels.com/photos/762687/pexels-photo-762687.jpeg?auto=compress&cs=tinysrgb&w=400"
    },
    {
      id: 2,
      title: "The Story Of B",
      author: "Daniel Quinn",
      format: "Original Hardcover",
      price: "$5.23",
      image: "https://images.pexels.com/photos/1005324/pexels-photo-1005324.jpeg?auto=compress&cs=tinysrgb&w=400"
    },
    {
      id: 3,
      title: "Villa Incognito",
      author: "Tom Robbins",
      format: "First Paperback",
      price: "$2.49",
      image: "https://images.pexels.com/photos/159711/books-bookstore-book-reading-159711.jpeg?auto=compress&cs=tinysrgb&w=400"
    },
    {
      id: 4,
      title: "What the Wind Knows",
      author: "Amy Harmon",
      format: "Fine Inscribed",
      price: "$6.00",
      image: "https://images.pexels.com/photos/415071/pexels-photo-415071.jpeg?auto=compress&cs=tinysrgb&w=400"
    }
  ];

  // 2. DATA: Philosophy & Wisdom Books (Numbered Ledger)
  const wisdomBooks = [
    {
      entry: "NO. 01",
      title: "You Are a Badass At Making Money",
      author: "Jen Sincero",
      format: "Paperback Edition",
      price: "$2.49",
      image: "https://images.pexels.com/photos/2228561/pexels-photo-2228561.jpeg?auto=compress&cs=tinysrgb&w=400"
    },
    {
      entry: "NO. 02",
      title: "Power Vs Force",
      author: "David R. Hawkins",
      format: "Scholarly Hardcover",
      price: "$3.64",
      image: "https://images.pexels.com/photos/1130980/pexels-photo-1130980.jpeg?auto=compress&cs=tinysrgb&w=400"
    },
    {
      entry: "NO. 03",
      title: "The Paradox Of Choice",
      author: "Barry Schwartz",
      format: "First Impression",
      price: "$4.10",
      image: "https://images.pexels.com/photos/46274/pexels-photo-46274.jpeg?auto=compress&cs=tinysrgb&w=400"
    },
    {
      entry: "NO. 04",
      title: "The Book Of Questions",
      author: "Gregory Stock",
      format: "Original Printing",
      price: "$2.73",
      image: "https://images.pexels.com/photos/1301585/pexels-photo-1301585.jpeg?auto=compress&cs=tinysrgb&w=400"
    },
    {
      entry: "NO. 05",
      title: "Why Men Love Bitches",
      author: "Sherry Argov",
      format: "Trade Paperback",
      price: "$2.51",
      image: "https://images.pexels.com/photos/256450/pexels-photo-256450.jpeg?auto=compress&cs=tinysrgb&w=400"
    }
  ];

  return (
    <section className="max-w-7xl mx-auto px-6 py-12 flex flex-col gap-16 font-serif">
      
      {/* ================= 1. UNIQUE LAYOUT ROW 1: SPOTLIGHT + STUDY SHELF ================= */}
      <div>
        
        {/* Section Header */}
        <div className="flex flex-wrap items-end justify-between border-b-2 border-[#b8a68f] pb-3 mb-8 gap-4">
          <div>
            <div className="flex items-center gap-2 text-[#8c2d19] font-sans font-bold text-[10px] tracking-[0.25em] uppercase">
              <Sparkles className="w-4 h-4" />
              <span>Curated Literary Salon</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-bold text-[#241a15] mt-1 font-serif">
              Masterpieces of Magical Realism & Myth
            </h3>
          </div>
          <a href="#" className="inline-flex items-center gap-1 text-xs text-[#8c2d19] hover:underline font-serif italic">
            <span>Explore Entire Realism Index</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* Asymmetrical Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* LEFT: Grand Feature Book Showcase (5 Columns) */}
          <div className="lg:col-span-5 bg-[#241a15] text-[#fbf8f2] p-8 border-2 border-[#c29b38] shadow-lg flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between border-b border-[#3d2c23] pb-3 mb-6">
                <span className="text-[10px] tracking-[0.25em] text-[#c29b38] uppercase font-sans font-bold">
                  Curator's Choice
                </span>
                <span className="text-xs text-[#b8a68f] font-sans">
                  Vault No. MR-88
                </span>
              </div>

              {/* Big Book Display */}
              <div className="flex flex-col sm:flex-row gap-6 items-center sm:items-start">
                <div className="w-36 h-52 shrink-0 bg-[#efe8db] p-1.5 border-2 border-[#c29b38] shadow-2xl overflow-hidden">
                  <img
                    src={spotlightBook.image}
                    alt={spotlightBook.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <span className="text-[9px] font-sans font-bold text-[#c29b38] border border-[#c29b38] px-2 py-0.5 uppercase tracking-wider">
                    {spotlightBook.format}
                  </span>
                  <h4 className="text-xl font-bold text-[#fbf8f2] mt-2 leading-tight">
                    {spotlightBook.title}
                  </h4>
                  <p className="text-xs text-[#c29b38] italic mt-1">
                    by {spotlightBook.author}
                  </p>
                  <p className="text-xs text-[#b8a68f] mt-3 leading-relaxed font-serif">
                    {spotlightBook.description}
                  </p>
                </div>
              </div>
            </div>

            {/* Price & Action */}
            <div className="mt-8 pt-4 border-t border-[#3d2c23] flex items-center justify-between">
              <div>
                <span className="text-[10px] text-[#b8a68f] uppercase font-sans block">Archival Valuation</span>
                <span className="text-lg font-bold text-[#fbf8f2] font-sans">{spotlightBook.price}</span>
              </div>
              <button className="bg-[#8c2d19] hover:bg-[#6e2213] text-[#fbf8f2] text-xs font-sans font-bold py-2.5 px-6 uppercase tracking-widest shadow">
                Acquire Volume
              </button>
            </div>
          </div>

          {/* RIGHT: 2x2 Thematic Study Shelf (7 Columns) */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-5">
            {shelfBooks.map((book) => (
              <div 
                key={book.id}
                className="bg-[#fdfbf7] p-4 border-2 border-[#b8a68f] shadow-sm flex gap-4 items-center hover:border-[#8c2d19]"
              >
                <div className="w-24 h-32 shrink-0 bg-[#efe8db] p-1 border border-[#c7b8a3] shadow-inner overflow-hidden">
                  <img
                    src={book.image}
                    alt={book.title}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      e.target.src = "https://images.pexels.com/photos/159711/books-bookstore-book-reading-159711.jpeg?auto=compress&cs=tinysrgb&w=400";
                    }}
                  />
                </div>
                <div className="flex-1 flex flex-col justify-between h-full">
                  <div>
                    <span className="text-[8px] font-sans font-bold text-[#8c2d19] border border-[#c29b38] bg-[#fbf8f2] px-1.5 py-0.5 uppercase tracking-wide">
                      {book.format}
                    </span>
                    <h5 className="text-xs font-bold text-[#241a15] mt-1.5 line-clamp-1">
                      {book.title}
                    </h5>
                    <p className="text-[11px] text-[#7a6452] italic">
                      by {book.author}
                    </p>
                  </div>
                  <div className="mt-3 pt-2 border-t border-[#e2d7c5] flex items-center justify-between">
                    <span className="text-xs font-bold text-[#241a15] font-sans">{book.price}</span>
                    <button className="bg-[#241a15] hover:bg-[#8c2d19] text-[#fbf8f2] text-[10px] font-sans font-bold py-1 px-3 uppercase tracking-wider">
                      View
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>

      </div>

      {/* Decorative Filigree Divider */}
      <div className="flex items-center justify-center gap-4">
        <span className="h-[1px] w-full bg-[#d6c7b2]"></span>
        <span className="text-[#8c7355] text-xs">♦ ♦ ♦</span>
        <span className="h-[1px] w-full bg-[#d6c7b2]"></span>
      </div>

      {/* ================= 2. UNIQUE LAYOUT ROW 2: THE ARCHIVAL LEDGER ================= */}
      <div className="bg-[#f4eee2] p-8 border-2 border-[#b8a68f] shadow-md">
        
        {/* Ledger Top Header */}
        <div className="flex flex-wrap items-center justify-between gap-4 border-b-2 border-[#d6c7b2] pb-5 mb-8">
          <div>
            <div className="flex items-center gap-2 text-[#8c2d19] font-sans font-bold text-[10px] tracking-[0.25em] uppercase">
              <Compass className="w-4 h-4" />
              <span>Historical Treatise Registry</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-bold text-[#241a15] mt-1 font-serif">
              Philosophical Wisdom & Human Advice
            </h3>
          </div>
          <p className="text-xs text-[#6e5d50] max-w-md font-serif italic text-right">
            Five distinguished intellectual manuals on strategic discernment, human psychology, and decision architecture.
          </p>
        </div>

        {/* 5-Column Numbered Ledger Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5">
          {wisdomBooks.map((item, index) => (
            <div 
              key={index} 
              className="bg-[#fdfbf7] p-4 border border-[#c7b8a3] shadow-sm flex flex-col justify-between hover:border-[#8c2d19] relative"
            >
              
              {/* Archival Number Badge */}
              <div>
                <div className="flex items-center justify-between border-b border-[#e2d7c5] pb-2 mb-3">
                  <span className="text-[10px] font-sans font-black tracking-widest text-[#8c2d19]">
                    {item.entry}
                  </span>
                  <Bookmark className="w-3.5 h-3.5 text-[#b8a68f]" />
                </div>

                {/* Book Image */}
                <div className="w-full h-44 bg-[#efe8db] p-1 border border-[#c7b8a3] shadow-inner overflow-hidden mb-3">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      e.target.src = "https://images.pexels.com/photos/159711/books-bookstore-book-reading-159711.jpeg?auto=compress&cs=tinysrgb&w=400";
                    }}
                  />
                </div>

                {/* Info */}
                <span className="text-[8px] font-sans font-bold uppercase tracking-wider text-[#7a6452] block">
                  {item.format}
                </span>
                <h5 className="text-xs font-bold text-[#241a15] mt-1 line-clamp-2 leading-tight">
                  {item.title}
                </h5>
                <p className="text-[11px] text-[#7a6452] italic mt-0.5">
                  by {item.author}
                </p>
              </div>

              {/* Bottom Price & Order */}
              <div className="mt-4 pt-3 border-t border-[#e2d7c5] flex items-center justify-between">
                <div>
                  <span className="text-[9px] text-[#8f8174] uppercase font-sans block">Price</span>
                  <span className="text-xs font-bold text-[#241a15] font-sans">{item.price}</span>
                </div>
                <button className="bg-[#241a15] hover:bg-[#8c2d19] text-[#fbf8f2] text-[10px] font-sans font-bold py-1.5 px-3 uppercase tracking-wider">
                  Select
                </button>
              </div>

            </div>
          ))}
        </div>

      </div>

    </section>
  );
}