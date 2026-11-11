
import React from "react";
import { Link } from "react-router-dom";
import {
  ArrowLeft,
  BookOpen,
  ArrowUpRight,
} from "lucide-react";

export default function HistoricCookeryTreatises() {

  // ==========================================
  // HISTORIC COOKERY TREATISES
  // Images: public/Historic Cookery/
  // Image 1: .webp
  // Images 2-5: .jpg
  // Titles matched with actual covers
  // No prices
  // Georgia font
  // Compact cards
  // No animations or hover effects
  // Amazon links included
  // ==========================================

  const books = [
    {
      id: 1,
      title:
        "Historic Thanksgiving Foods: And the People Who Cooked Them, 1607 to 1955",
      author: "Leslie and Dan Landrigan",
      format: "Historic American Thanksgiving & Food",
      image: "/Historic Cookery/Historic Cookery1.webp",
      amazonUrl:
        "https://www.amazon.com/dp/B0CJ45MZXD",
    },
    {
      id: 2,
      title:
        "American Cookery: The Historic Colonial Cookbook First Published in 1796",
      author: "Amelia Simmons",
      format: "Colonial American Cookery & Recipes",
      image: "/Historic Cookery/Historic Cookery2.jpg",
      amazonUrl:
        "https://www.amazon.com/American-Cookery-Historic-Colonial-Published/dp/1494844923/ref=sr_1_2?dib=eyJ2IjoiMSJ9.HjAsc7WXNP0JmWZgNOcBpoN1v1Kheu2GaBGkFpNo02n8Nt2kK2ZkF6qa-WZCmXuWJRbbXE_yLrflDgwvCWZDhLupfa37WL4L2gW4DLI-ns4aEoclb7qNBA1LawFGtpvfAeAi9x7eoo6EBXvYqL47QtPAbddk17RWQL1GlzNu4_rDymcO2kkndCYVf3VmrfKLZDLYw-TNZZWkl9FlErZoauuwplLJz1jghFnYk7gSU4s.iclPPK-Z9McVHcAe-E7hTTh2yn4hk1lrsnTZJKl-zGs&dib_tag=se&keywords=American+Cookery+Amelia+Simmons+1796&qid=1794424743&sr=8-2",
    },
    {
      id: 3,
      title:
        "Cookery and Dining in Imperial Rome: Uncover the Secrets of Ancient Roman Recipes. Delight in the Flavors of Roman Culinary Traditions. The Original Classic (annotated)",
      author: " Apicius",
      format: "Ancient Roman Cookery & Culinary History",
      image: "/Historic Cookery/Historic Cookery3.jpg",
      amazonUrl:
"https://www.amazon.com/Cookery-Dining-Imperial-Rome-Traditions/dp/B0CF4BFCR3"    },
    {
      id: 4,
      title:
        "29 Historic New England Apple Recipes: Apple Recipes From Yesteryear, 1615 to 1960",
      author: "Leslie and Dan Landrigan",
      format: "Historic New England Recipes",
      image: "/Historic Cookery/Historic Cookery4.jpg",
      amazonUrl:
        "https://www.amazon.com/dp/B0BHF6J6ZW",
    },
    {
      id: 5,
      title:
        "Empire Kitchens: The Medieval Table",
      author: "Albert Steel",
      format: "Medieval European Cookery & Recipes",
      image: "/Historic Cookery/Historic Cookery5.jpg",
      amazonUrl:
        "https://www.amazon.com/Empire-Kitchens-Authentic-Monasteries-Techniques/dp/B0H28JP1XP/ref=sr_1_1?dib=eyJ2IjoiMSJ9.ml86gwgMp9YPPJ7upW3dqVyCsImsyFo6aYYkfxmS9LNTKCa9IcfG7U-g3mynDdVa2vQC1VFZbgUJhE61v0dCpin0eVhld4ovw-LzHZki9QdhPcLSzSWKwOCTRuy8UoLR90HE2rXnDg7Zc-CpUlxkd-X8eScGR7khXPusBsU7vqaLsRs89nADuf5PJBz8ZBiKl0yxPKlRrDphW7c9otB3rlgVVnmljw3JUevmy-nCZlE.T-Dvu9k8qWt1_VV8vxf0ItTZDmQvs_WjsnYNv7VQWZM&dib_tag=se&keywords=Empire+Kitchens+The+Medieval+Table+Albert+Steel&qid=1794424833&sr=8-1",
    },
  ];

  return (
    <div
      className="w-full min-h-screen bg-[#fbf8f2] text-[#241a15] px-4 sm:px-6 py-7"
      style={{
        fontFamily: "Georgia, 'Times New Roman', serif",
      }}
    >
      <div className="max-w-7xl mx-auto">

        {/* BREADCRUMB NAVIGATION */}

        <nav className="flex flex-wrap items-center gap-2 text-xs text-[#7a6452] mb-5">

          <Link
            to="/"
            className="flex items-center gap-1 text-[#7a6452] no-underline"
          >
            <ArrowLeft size={14} />
            Back to Home
          </Link>

          <span>/</span>

          <span>Period Treasures</span>

          <span>/</span>

          <span className="font-bold text-[#8c2d19]">
            Historic Cookery Treatises
          </span>

        </nav>

        {/* PAGE HEADER */}

        <header className="bg-[#241a15] text-[#fbf8f2] border border-[#c29b38] px-6 py-6 mb-6">

          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">

            <div className="flex-1">

              <div className="text-[#c29b38] text-[11px] font-bold tracking-[0.15em] uppercase mb-2">
                Historic Recipes, Colonial Kitchens & Medieval Cuisine
              </div>

              <h1 className="text-3xl sm:text-4xl font-bold leading-tight">
                Historic Cookery Treatises
              </h1>

              <p className="text-[14px] text-[#cbb9a5] mt-2 max-w-2xl leading-relaxed">
                Explore the fascinating history of cooking
                through traditional Thanksgiving foods,
                colonial American recipes, ancient Roman
                dining traditions, historic New England
                apple dishes, and authentic medieval cuisine.
                Discover remarkable culinary collections
                that preserve centuries of food heritage,
                regional traditions, and the flavors
                of generations past.
              </p>

            </div>

            {/* CURATED INDEX */}

            <div className="sm:border-l border-[#594638] sm:pl-6 shrink-0">

              <span className="block text-[11px] font-bold uppercase tracking-wider text-[#c29b38]">
                Curated Index
              </span>

              <span className="block text-xl font-bold text-white mt-1">
                {books.length} Volumes
              </span>

            </div>

          </div>

        </header>

        {/* BOOK COLLECTION GRID */}

        <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 items-stretch">

          {books.map((book) => (

            <article
              key={book.id}
              className="bg-[#fdfbf7] border border-[#b8a68f] p-3 flex flex-col h-full"
            >

              {/* BOOK COVER */}

              <div className="w-full h-60 bg-[#efe8db] border border-[#c7b8a3] p-2 flex items-center justify-center overflow-hidden">

                <img
                  src={book.image}
                  alt={`${book.title} by ${book.author}`}
                  loading="lazy"
                  className="w-full h-full object-contain"
                />

              </div>

              {/* CATEGORY BADGE */}

              <div className="mt-3">

                <span className="inline-block text-[10px] font-bold uppercase leading-snug text-[#8c2d19] border border-[#c29b38] px-2 py-1">
                  {book.format}
                </span>

              </div>

              {/* BOOK INFORMATION */}

              <div className="flex flex-col flex-1 mt-2">

                {/* BOOK TITLE */}

                <h2 className="text-[17px] font-bold text-[#241a15] leading-[1.35]">
                  {book.title}
                </h2>

                {/* AUTHOR NAME */}

                <p className="text-[13px] text-[#8a593f] italic mt-2 leading-snug">
                  by {book.author}
                </p>

                {/* AMAZON VIEW BOOK BUTTON */}

                <div className="mt-auto pt-4">

                  <div className="border-t border-[#e2d7c5] pt-3">

                    <a
                      href={book.amazonUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`Find ${book.title} on Amazon`}
                      className="w-full bg-[#241a15] text-[#fffaf4] text-[12px] font-bold py-3 px-3 uppercase tracking-wide flex items-center justify-center gap-2 no-underline"
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

        </section>

        {/* BOTTOM DIVIDER */}

        <div className="flex items-center gap-3 mt-9">

          <span className="h-px flex-1 bg-[#d6c7b2]" />

          <span className="text-[#8c7355] text-xs">
            ♦ ♦ ♦
          </span>

          <span className="h-px flex-1 bg-[#d6c7b2]" />

        </div>

      </div>
    </div>
  );
}
