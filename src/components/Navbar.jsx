import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Search, ChevronDown, BookOpen, Gift, Truck, Landmark, Tag } from 'lucide-react';

export default function Navbar() {
  // State for active dropdown
  const [activeDropdown, setActiveDropdown] = useState(null);

  const toggleDropdown = (name) => {
    setActiveDropdown(activeDropdown === name ? null : name);
  };

  return (
    <header className="w-full bg-[#fbf8f2] text-[#2c241e] border-b-2 border-[#d6c7b2] font-serif">
      
      {/* 1. TOP ANNOUNCEMENT BAR */}
      <div className="bg-[#241a15] text-[#e8dfcf] text-[11px] py-1.5 px-6 border-b border-[#c29b38] font-sans">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2">
          <div className="tracking-widest uppercase text-gray-300">
            BLUE BOOK — The World's Premier Rare, Antiquarian & Collectible Marketplace
          </div>
          <div className="flex items-center gap-4 text-xs">
            <Link to="/help" className="hover:text-[#c29b38] hover:underline">
              Collector Support
            </Link>
            <span className="text-gray-500">|</span>
            <div className="flex items-center gap-1 font-semibold text-[#e8dfcf]">
              <span>🇵🇰</span>
              <span>USD ($)</span>
            </div>
          </div>
        </div>
      </div>

      {/* 2. MAIN HEADER (Logo on Left, Search Box on Right) */}
      <div className="max-w-7xl mx-auto px-6 py-4 flex flex-wrap items-center justify-between gap-6">
        
        {/* LOGO (Left Side) */}
        <Link to="/" className="flex items-center gap-3.5 group">
          <div className="w-12 h-12 rounded-sm bg-[#241a15] border-2 border-[#c29b38] shadow flex items-center justify-center text-[#c29b38]">
            <BookOpen className="w-6 h-6 stroke-[1.8]" />
          </div>
          <div className="flex flex-col text-left">
            <span 
              className="text-3xl sm:text-4xl font-black tracking-[0.18em] text-[#241a15] uppercase leading-none drop-shadow-sm group-hover:text-[#8c2d19]"
              style={{ fontFamily: 'Georgia, Cambria, serif' }}
            >
              BLUE BOOK
            </span>
            <div className="flex items-center gap-1.5 mt-1">
              <span className="h-[1px] w-4 bg-[#c29b38]"></span>
              <span className="text-[9px] tracking-[0.22em] text-[#7a6452] uppercase font-sans font-bold">
                Rare Books & Manuscripts • Est. 2003
              </span>
            </div>
          </div>
        </Link>

        {/* RIGHT SIDE: Search Box & Advanced Options */}
        <div className="flex flex-col items-end gap-1 font-sans">
          <div className="flex border-2 border-[#b8a68f] bg-white rounded-none overflow-hidden shadow-inner">
            <input
              type="text"
              placeholder="Search Title, Author, or ISBN..."
              className="px-3 py-1.5 text-xs w-64 sm:w-80 md:w-96 outline-none text-[#241a15] placeholder-stone-400 bg-transparent font-serif"
            />
            <button 
              type="button"
              className="bg-[#382b22] hover:bg-[#241a15] px-4 flex items-center justify-center text-[#e8dfcf]"
            >
              <Search className="w-3.5 h-3.5" />
            </button>
          </div>
          <Link to="/advanced-search" className="text-[11px] text-[#8c2d19] hover:underline font-serif italic pr-1">
            * Advanced Search Options
          </Link>
        </div>

      </div>

      {/* ================= 3. NAVIGATION BAR (CENTERED) ================= */}
      <div className="border-t border-[#dfd4c3] bg-[#f4eee2] relative shadow-sm">
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-center text-xs tracking-wider uppercase font-semibold">
          
          <nav className="flex items-center justify-center gap-6 sm:gap-9">
            
            <Link to="/" className="py-3 text-[#241a15] hover:text-[#8c2d19]">
              Home
            </Link>

            {/* DROPDOWN 1: Browse books */}
            <div 
              className="relative"
              onMouseEnter={() => setActiveDropdown('browse')}
            >
              <button 
                onClick={() => toggleDropdown('browse')}
                className={`py-3 flex items-center gap-1 hover:text-[#8c2d19] ${activeDropdown === 'browse' ? 'text-[#8c2d19] border-b-2 border-[#8c2d19]' : 'text-[#241a15]'}`}
              >
                Browse Books <ChevronDown className="w-3 h-3" />
              </button>
            </div>

            {/* DROPDOWN 2: Rare books */}
            <div 
              className="relative"
              onMouseEnter={() => setActiveDropdown('rare')}
            >
              <button 
                onClick={() => toggleDropdown('rare')}
                className={`py-3 flex items-center gap-1 hover:text-[#8c2d19] ${activeDropdown === 'rare' ? 'text-[#8c2d19] border-b-2 border-[#8c2d19]' : 'text-[#241a15]'}`}
              >
                Rare & Antiquarian <ChevronDown className="w-3 h-3" />
              </button>
            </div>

            {/* DROPDOWN 3: Curations */}
            <div 
              className="relative"
              onMouseEnter={() => setActiveDropdown('promotions')}
            >
              <button 
                onClick={() => toggleDropdown('promotions')}
                className={`py-3 flex items-center gap-1 hover:text-[#8c2d19] ${activeDropdown === 'promotions' ? 'text-[#8c2d19] border-b-2 border-[#8c2d19]' : 'text-[#241a15]'}`}
              >
                Curations <ChevronDown className="w-3 h-3" />
              </button>
            </div>

            <Link to="/bookstores" className="py-3 text-[#241a15] hover:text-[#8c2d19]">
              Bookstores
            </Link>

            <Link to="/sell-books" className="py-3 text-[#241a15] hover:text-[#8c2d19]">
              Sell Books
            </Link>

          </nav>

        </div>

        {/* ================= DROPDOWN PANELS ================= */}

        {/* 1. BROWSE BOOKS PANEL */}
        {activeDropdown === 'browse' && (
          <div 
            onMouseLeave={() => setActiveDropdown(null)}
            className="absolute left-1/2 -translate-x-1/2 top-full w-full max-w-5xl bg-[#fdfbf7] border-2 border-[#b8a68f] shadow-2xl z-50 text-xs normal-case overflow-hidden p-8"
          >
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              
              {/* Column 1: Literature & Classics */}
              <div>
                <h5 className="text-[11px] tracking-wider uppercase font-bold text-[#241a15] pb-2 mb-3 border-b border-[#e2d7c5] font-sans">
                  Literature & Classics
                </h5>
                <div className="flex flex-col gap-2 text-[#45362b]">
                  {/* 👇 YAHAN CONNECT KIYA HAI LINK: */}
                  <Link to="/biography-memoir" className="hover:text-[#8c2d19] hover:underline">
                    Biography & Memoir
                  </Link>
                 <Link to="/literary-classic-fiction" className="hover:text-[#8c2d19] hover:underline">
                 Literary & Classic Fiction</Link>
                  <Link to="/poetry-fine-verse" className="hover:text-[#8c2d19] hover:underline">
                  Poetry & Fine Verse</Link>
                  <Link to="/historical-fiction" className="hover:text-[#8c2d19] hover:underline">
                  Historical Fiction</Link>
                  <Link to="/graphic-novels-manga" className="hover:text-[#8c2d19] hover:underline">
                  Graphic Novels & Manga</Link>
                 <Link to="/romance-literature" className="hover:text-[#8c2d19] hover:underline">
                 Romance Literature</Link>
                </div>
              </div>

              {/* Column 2 */}
              <div>
                <h5 className="text-[11px] tracking-wider uppercase font-bold text-[#241a15] pb-2 mb-3 border-b border-[#e2d7c5] font-sans">
                  Thought & Science
                </h5>
                <div className="flex flex-col gap-2 text-[#45362b]">
                  <Link to="/theology-philosophy" className="hover:text-[#8c2d19] hover:underline">
                   Theology & Philosophy</Link>
                       
                  <Link to="/ancient-world-history" className="hover:text-[#8c2d19] hover:underline">
                  Ancient & World History</Link>
                  <Link to="/science-fiction-fantasy" className="hover:text-[#8c2d19] hover:underline">
                  Science Fiction & Fantasy</Link>
                  <Link to="/crime-thriller-mystery" className="hover:text-[#8c2d19] hover:underline">
                  Crime, Thriller & Mystery</Link>
                  <Link to="/humanities-social-sciences" className="hover:text-[#8c2d19] hover:underline">
                  Humanities & Social Sciences</Link>
                  <Link to="/scholarly-educational" className="hover:text-[#8c2d19] hover:underline">
                  Scholarly & Educational</Link>
                </div>
              </div>

              {/* Column 3 */}
              <div>
                <h5 className="text-[11px] tracking-wider uppercase font-bold text-[#241a15] pb-2 mb-3 border-b border-[#e2d7c5] font-sans">
                  Arts & Special Interests
                </h5>
                <div className="flex flex-col gap-2 text-[#45362b]">
                  <Link to="/fine-arts-photography" className="hover:text-[#8c2d19] hover:underline">
                  Fine Arts & Photography</Link>
                  <Link to="/gastronomy-culinary-arts" className="hover:text-[#8c2d19] hover:underline">
                  Gastronomy & Culinary Arts</Link>
                  <Link to="/natural-history-wildlife" className="hover:text-[#8c2d19] hover:underline">
                  Natural History & Wildlife</Link>
                  <Link to="/hobbies-crafts-guilds" className="hover:text-[#8c2d19] hover:underline">
                  Hobbies, Crafts & Guilds</Link>
                   <Link to="/sports-natural-pursuits" className="hover:text-[#8c2d19] hover:underline">
                   Sports & Natural Pursuits</Link>
                  <Link to="/childrens-illustrated" className="hover:text-[#8c2d19] hover:underline">
                  Children's Illustrated</Link>
                </div>
              </div>

            </div>
          </div>
        )}

        {/* 2. RARE BOOKS PANEL */}
        {activeDropdown === 'rare' && (
          <div 
            onMouseLeave={() => setActiveDropdown(null)}
            className="absolute left-1/2 -translate-x-1/2 top-full w-full max-w-5xl bg-[#fdfbf7] border-2 border-[#b8a68f] shadow-2xl z-50 text-xs normal-case overflow-hidden p-8"
          >
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              
              {/* Column 1: Classical Rarities */}
              <div>
                <h5 className="text-[11px] tracking-wider uppercase font-bold text-[#241a15] pb-2 mb-3 border-b border-[#e2d7c5] font-sans">
                  Classical Rarities
                </h5>
                <div className="flex flex-col gap-2 text-[#45362b]">
                  <Link to="/antiquarian-leatherbounds" className="hover:text-[#8c2d19] hover:underline">
                  Antiquarian Leatherbounds</Link>
                  <Link to="/art-fine-printing" className="hover:text-[#8c2d19] hover:underline">
                  The Art of Fine Printing</Link>
                  <Link to="/fine-arts-folios" className="hover:text-[#8c2d19] hover:underline">
                  Fine Arts & Folios</Link>
                  <Link to="/ancient-medieval-history" className="hover:text-[#8c2d19] hover:underline">
                  Ancient & Medieval History</Link>
                  <Link to="/law-finance-statecraft" className="hover:text-[#8c2d19] hover:underline">
                  Law, Finance & Statecraft</Link>
                  <Link to="/vintage-childrens-classics" className="hover:text-[#8c2d19] hover:underline">
                  Vintage Children's Classics</Link>
                </div>
              </div>

            {/* Column 2: Period Treasures */}
              <div>
                <h5 className="text-[11px] tracking-wider uppercase font-bold text-[#241a15] pb-2 mb-3 border-b border-[#e2d7c5] font-sans">
                  Period Treasures
                </h5>
                <div className="flex flex-col gap-2 text-[#45362b]">
                  <Link to="/historic-cookery-treatises" className="hover:text-[#8c2d19] hover:underline">
                  Historic Cookery Treatises</Link>
                  <Link to="/pamphlets-ephemera" className="hover:text-[#8c2d19] hover:underline">
                  Pamphlets & Ephemera</Link>
                  <Link to="/oddities-curiosa-rarities" className="hover:text-[#8c2d19] hover:underline">
                  Oddities, Curiosa & Rarities</Link>
                  <Link to="/natural-history-animals" className="hover:text-[#8c2d19] hover:underline">
                  Natural History & Animals</Link>
                  <Link to="/nineteenth-century-literature" className="hover:text-[#8c2d19] hover:underline">
                  Nineteenth-Century Literature</Link>
                  <Link to="/wax-cylinders-recordings" className="hover:text-[#8c2d19] hover:underline">
                  Wax Cylinders & Recordings</Link>
                </div>
              </div>

             {/* Column 3: Manuscripts & Science */}
              <div>
                <h5 className="text-[11px] tracking-wider uppercase font-bold text-[#241a15] pb-2 mb-3 border-b border-[#e2d7c5] font-sans">
                  Manuscripts & Science
                </h5>
                <div className="flex flex-col gap-2 text-[#45362b]">
                  <Link to="/theology-bibles-missals" className="hover:text-[#8c2d19] hover:underline">
                  Theology, Bibles & Missals</Link>
                  <Link to="/early-science-astronomy" className="hover:text-[#8c2d19] hover:underline">
                  Early Science & Astronomy</Link>
                  <Link to="/original-hand-signed-letters" className="hover:text-[#8c2d19] hover:underline">
                  Original Hand-Signed Letters</Link>
                  <Link to="/genealogy-noble-heraldry" className="hover:text-[#8c2d19] hover:underline">
                  Genealogy & Noble Heraldry</Link>
                  <Link to="/historic-games-sports" className="hover:text-[#8c2d19] hover:underline">
                  Historic Games & Sports</Link>
                  <Link to="/vintage-maps-atlases" className="hover:text-[#8c2d19] hover:underline">
                  Vintage Maps & Atlases</Link>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* 3. CURATIONS DROPDOWN */}
        {activeDropdown === 'promotions' && (
          <div 
            onMouseLeave={() => setActiveDropdown(null)}
            className="absolute left-1/2 -translate-x-1/2 top-full w-80 bg-[#fdfbf7] border-2 border-[#b8a68f] shadow-2xl z-50 text-xs py-3 px-3 normal-case"
          >
            <div className="flex flex-col gap-1.5">
              
                <Link to="/institutional-sales" className="flex items-start gap-3 p-2.5 rounded-sm hover:bg-[#efe8db]">
  <Landmark className="w-4 h-4 text-[#8c2d19] shrink-0 mt-0.5" />
  <div>
    <span className="font-bold text-[#241a15] block">Institutional Sales</span>
    <span className="text-[11px] text-[#6b584a]">Special acquisition services for public and academic libraries.</span>
  </div>
</Link>
        
              <Link to="/" className="flex items-start gap-3 p-2.5 rounded-sm hover:bg-[#efe8db]">
                <Gift className="w-4 h-4 text-[#8c2d19] shrink-0 mt-0.5" />
                <div>
                  <span className="font-bold text-[#241a15] block">Archival Gift Certificates</span>
                  <span className="text-[11px] text-[#6b584a]">Elegant present certificates for discerning book lovers.</span>
                </div>
              </Link>
              <Link to="/" className="flex items-start gap-3 p-2.5 rounded-sm hover:bg-[#efe8db]">
                <Tag className="w-4 h-4 text-[#8c2d19] shrink-0 mt-0.5" />
                <div>
                  <span className="font-bold text-[#241a15] block">Curated Markdowns</span>
                  <span className="text-[11px] text-[#6b584a]">Exceptional discounts on rare and pre-owned volumes.</span>
                </div>
              </Link>
              <Link to="/" className="flex items-start gap-3 p-2.5 rounded-sm hover:bg-[#efe8db]">
                <Truck className="w-4 h-4 text-[#8c2d19] shrink-0 mt-0.5" />
                <div>
                  <span className="font-bold text-[#241a15] block">Complimentary Shipping</span>
                  <span className="text-[11px] text-[#6b584a]">Free insured shipping on orders over qualifying amounts.</span>
                </div>
              </Link>
            </div>
          </div>
        )}

      </div>
    </header>
  );
}