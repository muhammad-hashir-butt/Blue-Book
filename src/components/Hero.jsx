import React from 'react';
import { Search, Compass, BookMarked } from 'lucide-react';

export default function Hero() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-6 font-serif">
      
      {/* Main Container */}
      <div className="relative">
        
        {/* ================= 1. VINTAGE HERO BANNER ================= */}
        <div className="w-full h-80 sm:h-[420px] lg:h-[450px] bg-[#241a15] rounded-none overflow-hidden border-2 border-[#b8a68f] shadow-md relative">
          <img
            src="https://images.pexels.com/photos/159711/books-bookstore-book-reading-159711.jpeg?auto=compress&cs=tinysrgb&w=1600"
            alt="Classic Antiquarian Library"
            className="w-full h-full object-cover"
            onError={(e) => {
              // Backup image in case network fails
              e.target.src = "https://images.pexels.com/photos/1370295/pexels-photo-1370295.jpeg?auto=compress&cs=tinysrgb&w=1600";
            }}
          />
          {/* Subtle vintage dark vignette overlay */}
          <div className="absolute inset-0 bg-black/25 pointer-events-none"></div>
        </div>

        {/* ================= 2. REDESIGNED ARCHIVAL SEARCH CARD ================= */}
        <div className="lg:absolute lg:right-8 lg:top-8 w-full lg:w-[400px] bg-[#fdfbf7] p-7 shadow-2xl border-2 border-[#b8a68f] rounded-none z-20 mt-6 lg:mt-0">
          
          {/* Card Badge Header */}
          <div className="flex items-center gap-2 mb-2">
            <Compass className="w-4 h-4 text-[#8c2d19]" />
            <span className="text-[10px] tracking-[0.25em] uppercase font-sans font-bold text-[#8c7355]">
              Global Antiquarian Index
            </span>
          </div>

          <h3 className="text-xl font-bold text-[#241a15] leading-snug mb-2 font-serif">
            Search Rare, Antiquarian & Collectible Editions
          </h3>
          <p className="text-xs text-[#6e5d50] mb-4 font-sans leading-relaxed">
            Search catalogues across thousands of independent global booksellers.
          </p>

          {/* Form */}
          <form onSubmit={(e) => e.preventDefault()} className="flex flex-col gap-3 font-sans">
            
            {/* Input: Author */}
            <div>
              <input
                type="text"
                placeholder="Author / Pen Name"
                className="w-full border border-[#c7b8a3] bg-[#fbf8f2] px-3 py-2 text-xs text-[#241a15] outline-none focus:border-[#8c2d19] font-serif placeholder-[#8f8174]"
              />
            </div>

            {/* Input: Title */}
            <div>
              <input
                type="text"
                placeholder="Book Title / Volume"
                className="w-full border border-[#c7b8a3] bg-[#fbf8f2] px-3 py-2 text-xs text-[#241a15] outline-none focus:border-[#8c2d19] font-serif placeholder-[#8f8174]"
              />
            </div>

            {/* Input: Keywords / ISBN */}
            <div>
              <input
                type="text"
                placeholder="Keywords, Publisher, or ISBN..."
                className="w-full border border-[#c7b8a3] bg-[#fbf8f2] px-3 py-2 text-xs text-[#241a15] outline-none focus:border-[#8c2d19] font-serif placeholder-[#8f8174]"
              />
            </div>

            {/* Checkbox Options Grid */}
            <div className="grid grid-cols-2 gap-2.5 mt-1 text-[11px] text-[#45362b]">
              <label className="flex items-center gap-2 cursor-pointer select-none">
                <input type="checkbox" className="accent-[#8c2d19]" />
                <span>Hardcover Only</span>
              </label>

              <label className="flex items-center gap-2 cursor-pointer select-none">
                <input type="checkbox" className="accent-[#8c2d19]" />
                <span>First Edition</span>
              </label>

              <label className="flex items-center gap-2 cursor-pointer select-none">
                <input type="checkbox" className="accent-[#8c2d19]" />
                <span>Author Signed</span>
              </label>

              <label className="flex items-center gap-2 cursor-pointer select-none">
                <input type="checkbox" className="accent-[#8c2d19]" />
                <span>Highest Price First</span>
              </label>
            </div>

            {/* Action Row */}
            <div className="flex items-center justify-between mt-4 pt-3 border-t border-[#e2d7c5]">
              <a href="#" className="text-xs text-[#8c2d19] hover:underline font-serif italic">
                Advanced Criteria ›
              </a>

              <button
                type="submit"
                className="bg-[#8c2d19] hover:bg-[#6e2213] text-[#fbf8f2] text-xs font-bold py-2.5 px-6 uppercase tracking-widest shadow-sm flex items-center gap-2"
              >
                <Search className="w-3.5 h-3.5" />
                <span>FIND BOOKS</span>
              </button>
            </div>

          </form>

        </div>

        {/* ================= 3. EDITORIAL SHOWCASE (BELOW BANNER) ================= */}
        <div className="mt-8 max-w-xl lg:max-w-2xl text-left">
          
          {/* Spotlight Tag */}
          <div className="inline-flex items-center gap-1.5 bg-[#efe8db] text-[#8c2d19] text-[10px] font-sans font-bold tracking-widest uppercase px-2.5 py-1 mb-2.5 border border-[#d6c7b2]">
            <BookMarked className="w-3.5 h-3.5" />
            <span>Curator's Spotlight • Rare Anthology</span>
          </div>

          <h2 className="text-2xl sm:text-3xl font-bold text-[#241a15] leading-tight">
            The Masterpieces of Classic Short Fiction
          </h2>
          
          <p className="text-sm text-[#5c4a3e] mt-2.5 leading-relaxed font-serif">
            Some brief stories hold worlds vast enough to linger for generations. Explore our curated selection of celebrated vintage anthologies, signed manuscripts, and legendary collections from history's most revered wordsmiths.
          </p>

          {/* Read More Link */}
          <div className="mt-4">
            <a
              href="#"
              className="inline-block border-2 border-[#8c2d19] text-[#8c2d19] hover:bg-[#8c2d19] hover:text-white text-xs font-sans font-bold px-5 py-2 uppercase tracking-widest transition-none"
            >
              EXPLORE COLLECTION
            </a>
          </div>

          {/* Vintage Archival Dots */}
          <div className="flex items-center gap-2.5 mt-6">
            <span className="w-3 h-3 rounded-full bg-[#8c2d19]"></span>
            <span className="w-2.5 h-2.5 rounded-full bg-[#b8a68f]"></span>
            <span className="w-2.5 h-2.5 rounded-full bg-[#b8a68f]"></span>
            <span className="w-2.5 h-2.5 rounded-full bg-[#b8a68f]"></span>
            <span className="w-2.5 h-2.5 rounded-full bg-[#b8a68f]"></span>
          </div>

        </div>

      </div>

      {/* Decorative Vintage Divider */}
      <div className="mt-12 flex items-center justify-center gap-4">
        <span className="h-[1px] w-full bg-[#d6c7b2]"></span>
        <span className="text-[#8c7355] text-sm">♦</span>
        <span className="h-[1px] w-full bg-[#d6c7b2]"></span>
      </div>

    </section>
  );
}