
import React from "react";
import { Link } from "react-router-dom";
import {
  Utensils,
  ArrowLeft,
  BookOpen,
  ArrowUpRight,
} from "lucide-react";

export default function GastronomyCulinaryArts() {

  // ==========================================
  // GASTRONOMY & CULINARY ARTS
  // Images: public/Gastronomy/
  // Correct books and authors
  // Prices removed
  // Amazon search links included
  // No hover animations
  // ==========================================

  const books = [
    {
      id: 1,
      title: "Molecular Gastronomy Secrets",
      author: "GABA CHEF",
      format: "Modern Culinary Techniques",
      image: "/Gastronomy/Gastronomy1.jpg",
      amazonUrl:
        "https://www.amazon.com/Molecular-Gastronomy-Secrets-Discovering-Experiments/dp/B0CVNKMJY5/ref=sr_1_1?dib=eyJ2IjoiMSJ9.rZ43p4OhXGAp71sflyH_0w.K8J0u-tJlmdnnoTJ7mshkOrQ0_Ef3g8OzG0sVVHuosc&dib_tag=se&keywords=9798879537185&qid=1794243190&sr=8-1",
    },
    {
      id: 2,
      title: "The Flavor Bible",
      author: "Karen Page and Andrew Dornenburg",
      format: "Culinary Reference / Food Pairing Guide",
      image: "/Gastronomy/Gastronomy2.jpg",
      amazonUrl:
        "https://www.amazon.com/dp/0316118400?lv=shuf&utm_source=chatgpt.com&channelId=480&plpRedirect=mhFallback",
    },
    {
      id: 3,
      title: "Molecular Gastronomy: For Chefs and Curious Minds",
      author: "Dr. Bhaskar Bora",
      format: "Culinary Science & Innovation",
      image: "/Gastronomy/Gastronomy3.jpg",
      amazonUrl:
        "https://www.amazon.com/Molecular-Gastronomy-Curious-Culinary-Science-ebook/dp/B0FLWJYB74/ref=sr_1_1?dib=eyJ2IjoiMSJ9.oplAZ7m-MSNUJ58OEh3lda7M6Vt_SMEPG6bdFBHV3m07skVN1uBPNvtsGVNaYMtt2BFe2ITXFDwtuoozLoW52bi1LNNWbQPdUbMXoiv5UTSwNQF_CvknZQe0Z29P7xBOrUHtM2tVphM-McLiNuMSY-JsOSnC2_MqEB0BjqBIcg7t6DkpIpr0PmqanUMliPRCvYSTQ2pGZ2T3dnvoiNxlIHi8c68JL85YKUw_gMRrdtk.5WMw4cHL6AKnnen9gB0cpOt4x-MTci7BIzYJqCAIbLQ&dib_tag=se&keywords=Molecular+Gastronomy+Bhaskar+Bora&qid=1794242656&sr=8-1",
    },
    {
      id: 4,
      title: "Molecular Gastronomy: Exploring the Science of Flavor",
      author: "Hervé This",
      format: "Food Science & Gastronomy",
      image: "/Gastronomy/Gastronomy4.jpg",
      amazonUrl:
        "https://www.amazon.com/Molecular-Gastronomy-Exploring-Traditions-Perspectives/dp/0231133138/ref=sr_1_1?dib=eyJ2IjoiMSJ9.ipM7OmPmXrQJfXiAY2RNJKIi__vRTUGUPyqclS09cAXQeqdrawyJLjEBocs_H9XphWdiVfbnWOVWgl_07QfQt_p4DPameW1bmnLAQW9dDj_DDHMYQJvfEESBWmxSGq-OXqca-t0qxiuyQBbOcgiRIa8EqC1eaPCBGcM_uWqH7ZY0bmNLECplBCBVogV3JNt3e2umUJr7LgoW9goCV5NkLKOWKC9ujBcgBoRam7wFYRo.cJO0_PpQMgSC3oJDQUnsPYswPsjxbi4Fh9EvNYiprIA&dib_tag=se&keywords=Molecular+Gastronomy+Exploring+the+Science+of+Flavor+Herve+This&nsdOptOutParam=true&qid=1794242628&sr=8-1",
    },
    {
      id: 5,
      title: "Molecular Gastronomy by Molecule-R",
      author: "Molecule-R Flavors",
      format: "Molecular Cooking & Recipes",
      image: "/Gastronomy/Gastronomy5.jpg",
      amazonUrl:
        "https://www.amazon.com/Molecular-Gastronomy-Molecule-R-Introduction-Spectacular/dp/0992111013/ref=sr_1_1?dib=eyJ2IjoiMSJ9.DTzwEurApSRz07s9NOpDNQ.tsNAqQHWoZqDMqJSg7ElSa3xHvQAz0DMzf7LB1DHgdc&dib_tag=se&keywords=9780992111014&qid=1794242581&sr=8-1",
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
            className="flex items-center gap-1"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            Back to Home
          </Link>

          <span>/</span>
          <span>Arts & Special Interests</span>
          <span>/</span>

          <span className="text-[#8c2d19] font-bold">
            Gastronomy & Culinary Arts
          </span>

        </div>

        {/* ======================================
            PAGE HEADER
        ====================================== */}

        <div className="bg-[#241a15] text-[#fbf8f2] p-8 border-2 border-[#c29b38] shadow-md mb-10 text-center sm:text-left flex flex-col sm:flex-row justify-between items-center gap-6">

          <div>

            <div className="flex items-center justify-center sm:justify-start gap-2 text-[#c29b38] text-[10px] tracking-[0.3em] uppercase font-sans font-bold mb-2">

              <Utensils className="w-4 h-4" />

              <span>
                Molecular Gastronomy & Culinary Innovation
              </span>

            </div>

            <h1 className="text-3xl sm:text-4xl font-bold font-serif">
              Gastronomy & Culinary Arts
            </h1>

            <p className="text-xs text-[#b8a68f] mt-2 max-w-xl font-serif italic leading-relaxed">
              Explore the fascinating relationship between
              food, science, and creativity. Discover
              innovative molecular gastronomy techniques,
              experimental cooking methods, flavor chemistry,
              modern culinary presentations, and the
              scientific principles behind extraordinary cuisine.
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

                <h3 className="text-base font-bold text-[#241a15] leading-snug line-clamp-4 min-h-[90px]">
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
