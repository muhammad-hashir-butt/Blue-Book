
import React from "react";
import { Link } from "react-router-dom";
import {
  Utensils,
  ArrowLeft,
  BookOpen,
  ArrowUpRight,
} from "lucide-react";

export default function HistoricCookeryTreatises() {

  // HISTORIC COOKERY TREATISES
  // Images: public/Historic Cookery/
  // Correct book titles and authors
  // Prices removed
  // Amazon search links
  // No hover effects or animations

  const books = [
    {
      id: 1,
      title: "A Taste of New Mexico Kitchens",
      author: "New Mexico Magazine",
      format: "New Mexican Culinary Heritage",
      image: "/Historic Cookery/Historic Cookery1.webp",
      amazonUrl:
        "https://www.amazon.com/Taste-New-Mexico-Kitchens/dp/B0CVNM5S7F/ref=sr_1_1?dib=eyJ2IjoiMSJ9.ejFFjusi35RE6o5WN4ac4xrFRv9NxCSEw1KfKcoiMcoliMdcqCo0xv2HcbjainETP8kMK-BtfzF_veToCpU6j6XfCG_ZZ-GVFtFLmzXdfw0_cFaeswvHwW7uVH1M3ZwImwXpe68RcXhykbBSz4i0JvdmuzUTITtUlLlYetBNwXJaaRUvHsr-q07ttV7ItenwRUXkizhHwvcQ-fpUiZ03tQaomJhy21bf3K9VtugcSpI.eROiHnVIsylHzQAfWLPRsB61eJqCABa2RExloO4fj3c&dib_tag=se&keywords=A+Taste+of+New+Mexico+Kitchens&qid=1794251330&sr=8-1",
    },
    {
      id: 2,
      title: "The Practice of Cookery, Pastry, Pickling, Preserving, &c.",
      author: "Mrs. Frazer",
      format: "Historic Cookery & Food Preservation",
      image: "/Historic Cookery/Historic Cookery2.jpg",
      amazonUrl:
        "https://www.amazon.sg/Practice-Cookery-Pickling-Preserving-Classic/dp/0999864467",
    },
    {
      id: 3,
      title: "Historic Cookery",
      author: "Fabiola C. Gilbert",
      format: "Traditional Southwestern Cookery",
      image: "/Historic Cookery/Historic Cookery3.webp",
      amazonUrl:
        "https://www.amazon.com/Historic-Cookery-Fabiola-Gilbert/dp/0941270998/ref=sr_1_2?dib=eyJ2IjoiMSJ9.A5RYR9gcc8JaxiBOD9PWA32ELSi1OAQFcUjpaAMVpJz9QSugBXK7d7YFJQGQsp3Sv_ct4T5LNtNVwztuq8EM1xHfOBRNSrhN-3uo4HUuhUBqD-IZaLVHMyo6JxzQaCQD1TkYsTymrs1J57oNU9gXGjk9f9WBsTrnPemnGdGzN5mBX3uVubH83Clgm_rjQO77mwbwtXcbKhJzL6SwbK4omCm1Lf9geTbcf9GbIrPwyKk.m5a9eAsxpNBDWde2qqisrm55B3QCAOlo_Qv8JkgyqIc&dib_tag=se&keywords=Historic+Cookery+Fabiola+Gilbert&qid=1794251433&sr=8-2",
    },
    {
      id: 4,
      title: "The First American Cookbook",
      author: "Amelia Simmons",
      format: "Early American Culinary History",
      image: "/Historic Cookery/Historic Cookery4.webp",
      amazonUrl:
        "https://www.amazon.com/First-American-Cookbook-Facsimile-Cookery/dp/0486247104/ref=sr_1_1?dib=eyJ2IjoiMSJ9.HjAsc7WXNP0JmWZgNOcBprDwObYpimV7ygE28-qQOgxRFGWCXhoEelASiyrR3TdS84Tc1BddlrJEHYIrf29__kYk_wIBtJY6g1GXApAoo8X_U0vlk9RpVmyp8UbXdzvDhF0wskw6vS6HV7BORkpi9bC84CUGplVOmuRNzTdJPbLeJq6tcb4zyAAIuRtvGxya5OrfSwC2PycyNCjhCbEy_6CyyHoBc4kqxUPF6HMY6K4.iPHcyXscQLl667N2gB6gOtNXc2HQaCrsmb4hJJ3UsHI&dib_tag=se&keywords=The+First+American+Cookbook+Amelia+Simmons&qid=1794251455&sr=8-1",
    },
    {
      id: 5,
      title: "Historic Cookery: Authentic New Mexican Food",
      author: "Fabiola Cabeza de Baca Gilbert",
      format: "Authentic New Mexican Cuisine",
      image: "/Historic Cookery/Historic Cookery5.jpg",
      amazonUrl:
        "https://www.amazon.com/Historic-Cookery-Authentic-Mexican-Food-ebook/dp/B07S2B6V1M/ref=sr_1_1?dib=eyJ2IjoiMSJ9.A5RYR9gcc8JaxiBOD9PWA4bEoqQ_mMi9AcfAHdnI7EfKk_pOy7714_rUbciC_WEisaa1njCdauz0uZ38e41RXKJPTmhlM35rlQ2fxnlIsxwtHg-K8kzjODQfyG7UZJtmdN_Rb6kIpImR0jPRJdc1ihsKrw4nF4zMRAZbsLs66eQeLpcej3d7BkKlQ69PBE22-fitTVp-bD6576bJXBtkBnvigV9LQXEd9_hVFaE29Ys.TQi1d66ZPe1DtcODVsM1Rf5Uon1gHQNR6U6AMfIfh-E&dib_tag=se&keywords=Historic+Cookery+Authentic+New+Mexican+Food+Fabiola&qid=1794251480&sr=8-1",
    },
  ];

  return (
    <div className="w-full min-h-screen bg-[#fbf8f2] text-[#2c241e] font-serif py-10 px-6">

      <div className="max-w-7xl mx-auto">

        {/* BREADCRUMB NAVIGATION */}

        <div className="flex flex-wrap items-center gap-2 text-xs font-sans text-[#7a6452] mb-6">

          <Link
            to="/"
            className="flex items-center gap-1"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            Back to Home
          </Link>

          <span>/</span>
          <span>Period Treasures</span>
          <span>/</span>

          <span className="text-[#8c2d19] font-bold">
            Historic Cookery Treatises
          </span>

        </div>

        {/* PAGE HEADER */}

        <div className="bg-[#241a15] text-[#fbf8f2] p-8 border-2 border-[#c29b38] shadow-md mb-10 text-center sm:text-left flex flex-col sm:flex-row justify-between items-center gap-6">

          <div>

            <div className="flex items-center justify-center sm:justify-start gap-2 text-[#c29b38] text-[10px] tracking-[0.3em] uppercase font-sans font-bold mb-2">

              <Utensils className="w-4 h-4" />

              <span>
                Traditional Recipes & Culinary Heritage
              </span>

            </div>

            <h1 className="text-3xl sm:text-4xl font-bold font-serif">
              Historic Cookery Treatises
            </h1>

            <p className="text-xs text-[#b8a68f] mt-2 max-w-xl font-serif italic leading-relaxed">
              Discover the rich history of traditional
              cooking through early American cookbooks,
              historic recipes, classic food preservation
              techniques, and authentic New Mexican cuisine.
              Explore treasured culinary works that preserve
              regional flavors, time-honored ingredients,
              and the cooking traditions of earlier generations.
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
