
import React, { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  ShieldCheck,
  Mail,
  Feather,
  PhoneCall,
} from "lucide-react";

import footerLogo from "../assets/footer logo.png";
// ================================================
// FOOTER NAVIGATION - 4 COLUMNS, 5 LINKS EACH
// ================================================

const footerSections = [
  {
    heading: "Literature & Classics",
    links: [
      {
        name: "Biography & Memoir",
        path: "/biography-memoir",
      },
      {
        name: "Literary & Classic Fiction",
        path: "/literary-classic-fiction",
      },
      {
        name: "Poetry & Fine Verse",
        path: "/poetry-fine-verse",
      },
      {
        name: "Historical Fiction",
        path: "/historical-fiction",
      },
      {
        name: "Romance Literature",
        path: "/romance-literature",
      },
    ],
  },
  {
    heading: "Thought, Science & Arts",
    links: [
      {
        name: "Theology & Philosophy",
        path: "/theology-philosophy",
      },
      {
        name: "Ancient & World History",
        path: "/ancient-world-history",
      },
      {
        name: "Science Fiction & Fantasy",
        path: "/science-fiction-fantasy",
      },
      {
        name: "Fine Arts & Photography",
        path: "/fine-arts-photography",
      },
      {
        name: "Natural History & Wildlife",
        path: "/natural-history-wildlife",
      },
    ],
  },
  {
    heading: "Rare & Antiquarian",
    links: [
      {
        name: "Antiquarian Leatherbounds",
        path: "/antiquarian-leatherbounds",
      },
      {
        name: "The Art of Fine Printing",
        path: "/art-fine-printing",
      },
      {
        name: "Fine Arts & Folios",
        path: "/fine-arts-folios",
      },
      {
        name: "Ancient & Medieval History",
        path: "/ancient-medieval-history",
      },
      {
        name: "Law, Finance & Statecraft",
        path: "/law-finance-statecraft",
      },
    ],
  },
  {
    heading: "Special Collections",
    links: [
      {
        name: "Hobbies, Crafts & Guilds",
        path: "/hobbies-crafts-guilds",
      },
      {
        name: "Sports & Natural Pursuits",
        path: "/sports-natural-pursuits",
      },
      {
        name: "Wax Cylinders & Recordings",
        path: "/wax-cylinders-recordings",
      },
      {
        name: "Historic Cookery Treatises",
        path: "/historic-cookery-treatises",
      },
      {
        name: "Vintage Maps & Atlases",
        path: "/vintage-maps-atlases",
      },
    ],
  },
];

export default function Footer() {
  const location = useLocation();

  // SCROLL TO TOP ON PAGE CHANGE

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  const handleFooterNavigation = () => {
    window.scrollTo(0, 0);
  };

  return (
    <footer
      className="w-full bg-black text-white text-xs border-t border-[#333333]"
      style={{
        fontFamily: "Georgia, 'Times New Roman', serif",
      }}
    >

      {/* ================================================
          1. LOGO AND BRAND INFORMATION
      ================================================ */}

      <div className="w-full bg-black border-b border-[#333333]">
        <div className="max-w-7xl mx-auto px-6 py-10">

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">

            {/* LOGO AND DESCRIPTION */}

            <div className="lg:col-span-7 flex flex-col sm:flex-row items-center gap-6 text-center sm:text-left">

              {/* BRAND LOGO */}

              <Link
                to="/"
                onClick={handleFooterNavigation}
                aria-label="Longstreet Home"
                className="shrink-0 flex items-center justify-center"
              >
               <img
  src={footerLogo}
  alt="Longstreet - Rare Books & Manuscripts"
  loading="lazy"
  className="block w-auto h-auto max-w-[230px] sm:max-w-[260px] max-h-[110px] object-contain"
/>
              </Link>

              {/* BRAND CONTENT */}

              <div className="flex-1">

                <span className="text-[10px] tracking-[0.2em] uppercase text-white font-sans font-bold block mb-2">
                  Rare Books • Timeless Literature • Collectible Editions
                </span>

                <h3 className="text-2xl font-bold text-white leading-snug">
                  Preserving Stories, Inspiring Generations
                </h3>

                <p className="text-[13px] text-white mt-2 leading-relaxed max-w-xl italic">
                  Discover a thoughtfully curated collection
                  of rare books, timeless literary classics,
                  historical treasures, fine art editions,
                  and extraordinary manuscripts.
                  At LONGSTREET, we celebrate the beauty
                  of literature, the value of knowledge,
                  and the lasting legacy of the written word.
                </p>

              </div>

            </div>

            {/* ================================================
                NEWSLETTER SECTION
            ================================================ */}

            <div className="lg:col-span-5 bg-black p-6 border border-[#444444]">

              <div className="flex items-center gap-2 text-white mb-2 font-sans font-bold text-[10px] tracking-widest uppercase">

                <Feather className="w-3.5 h-3.5" />

                <span>
                  The Literary Newsletter
                </span>

              </div>

              <h4 className="text-base font-bold text-white">
                Discover Your Next Great Read
              </h4>

              <p className="text-[12px] text-white mt-2 mb-4 leading-relaxed">
                Explore new arrivals, timeless classics,
                rare collections, and featured literary
                discoveries from LONGSTREET.
              </p>

              {/* NEWSLETTER FORM */}

              <form
                onSubmit={(e) => e.preventDefault()}
                className="flex items-center bg-white border border-[#666666] overflow-hidden"
              >

                <div className="pl-3 text-black">
                  <Mail className="w-4 h-4" />
                </div>

                <input
                  type="email"
                  required
                  placeholder="Enter your email address..."
                  className="w-full min-w-0 px-3 py-3 text-xs text-black bg-transparent outline-none placeholder-[#666666] font-serif"
                />

                <button
                  type="submit"
                  className="bg-white text-black border-l border-[#cccccc] font-sans font-bold px-4 py-3 uppercase tracking-wider text-[10px] whitespace-nowrap"
                >
                  Subscribe
                </button>

              </form>

            </div>

          </div>

        </div>
      </div>

      {/* ================================================
          2. FOOTER PAGE DIRECTORY
      ================================================ */}

      <div className="w-full bg-black">
        <div className="max-w-7xl mx-auto px-6 py-10">

          {/* FOUR COLUMNS */}

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

            {footerSections.map((section, index) => (

              <div
                key={index}
                className="bg-black p-5 border border-[#333333] flex flex-col"
              >

                {/* COLUMN HEADING */}

                <h4 className="text-[12px] font-sans font-bold uppercase tracking-wider text-white border-b border-[#333333] pb-3 mb-4">
                  {section.heading}
                </h4>

                {/* COLUMN LINKS */}

                <div className="flex flex-col gap-3 font-sans text-[12px] text-white">

                  {section.links.map((item, itemIndex) => (

                    <Link
                      key={itemIndex}
                      to={item.path}
                      onClick={handleFooterNavigation}
                      className="flex items-start gap-2 text-white no-underline leading-relaxed"
                    >

                      <span className="text-white shrink-0">
                        ›
                      </span>

                      <span>
                        {item.name}
                      </span>

                    </Link>

                  ))}

                </div>

              </div>

            ))}

          </div>

          {/* QUICK NAVIGATION SECTION REMOVED */}

        </div>
      </div>

      {/* ================================================
          3. BOTTOM FOOTER
      ================================================ */}

      <div className="bg-black py-6 border-t border-[#333333] font-sans text-[11px] text-white">

        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">

          {/* TRUST MESSAGE */}

          <div className="flex items-center gap-2 border border-[#555555] px-3 py-2 text-white text-[10px] font-bold">

            <ShieldCheck className="w-4 h-4 text-white" />

            <span>
              RARE BOOKS & LITERARY COLLECTIONS
            </span>

          </div>

          {/* BOTTOM LINKS - SUPPORT REMOVED */}

          <div className="flex flex-wrap items-center justify-center gap-3 text-center">

            <Link
              to="/"
              onClick={handleFooterNavigation}
              className="text-white no-underline"
            >
              Home
            </Link>

            <span>•</span>

            <Link
              to="/bookstores"
              onClick={handleFooterNavigation}
              className="text-white no-underline"
            >
              Bookstores
            </Link>

            <span>•</span>

            <Link
              to="/book-marketing"
              onClick={handleFooterNavigation}
              className="text-white no-underline"
            >
              Book Marketing
            </Link>

          </div>

          {/* CUSTOMER SUPPORT */}

          <div className="flex items-center gap-2 text-white">

            <PhoneCall className="w-4 h-4 text-white" />

            <span>
Address: 2974 Hardman Ct NE
Atlanta, GA 30305-3425            </span>

          </div>

        </div>

        {/* ================================================
            COPYRIGHT
        ================================================ */}

        <div className="max-w-7xl mx-auto px-6 mt-5 pt-4 border-t border-[#333333] text-center text-[11px] text-white">

          <p>
            Copyright © {new Date().getFullYear()} LONGSTREET.
            All Rights Reserved.
          </p>

          <p className="mt-2 italic text-white">
            Celebrating Rare Books, Timeless Stories,
            and the Written Legacy.
          </p>

        </div>

      </div>

    </footer>
  );
}
