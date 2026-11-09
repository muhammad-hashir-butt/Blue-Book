
import React from "react";
import { Link } from "react-router-dom";
import {
  Leaf,
  ArrowLeft,
  BookOpen,
  ArrowUpRight,
} from "lucide-react";

export default function NaturalHistoryWildlife() {

  // ==========================================
  // NATURAL HISTORY & WILDLIFE
  // Images: public/Natural History/
  // Actual book titles and authors
  // No prices
  // Amazon search links included
  // No hover effects or animations
  // ==========================================

  const books = [
    {
      id: 1,
      title: "Mountains of the Heart: A Natural History of the Appalachians",
      author: "Scott Weidensaul",
      format: "Appalachian Natural History",
      image: "/Natural History/Natural History1.webp",
      amazonUrl:
        "https://www.amazon.com/Mountains-Heart-Natural-History-Appalachians/dp/1555911439/ref=sr_1_2?dib=eyJ2IjoiMSJ9.aI9lWaOlCkPxsijDMRnhZbd_waM-9-gWxKF8wjlpsR6mS7aDyryaqhjcxt-oLjod.ZNYdLcxvDVIEoUTWorc-iEyqborAj6iDU24IL0SCrls&dib_tag=se&keywords=Mountains+of+the+Heart+Scott+Weidensaul&qid=1794243714&sr=8-2",
    },
    {
      id: 2,
      title: "Mountains of the Heart: A Natural History of the Appalachians",
      author: "Scott Weidensaul",
      format: "20th Anniversary Edition",
      image: "/Natural History/Natural History2.webp",
      amazonUrl:
        "https://www.amazon.com/Mountains-Heart-Natural-History-Appalachians-ebook/dp/B01G3KEJGQ/ref=sr_1_1?dib=eyJ2IjoiMSJ9.uta5Gbs1EuA9JuB6_d4U3A.RM6KGOLPuUILg3kdmx1t4t3O7vTqVXoS82jxw59P_f0&dib_tag=se&keywords=9781938486531&qid=1794243753&sr=8-1",
    },
    {
      id: 3,
      title: "Galapagos: A Natural History",
      author: "Michael H. Jackson",
      format: "Revised and Expanded Edition",
      image: "/Natural History/Natural History3.jpg",
      amazonUrl:
        "https://www.amazon.com/Galapagos-Natural-History-Revised-Expanded/dp/1895176409/ref=sr_1_1?dib=eyJ2IjoiMSJ9.hSaWYCCACKTvrioIC47q-A.mljg5xppeSwZWGfLK7-blc2O2uZBLSbKOR7e2bZyasM&dib_tag=se&keywords=1895176409&nsdOptOutParam=true&qid=1794243989&sr=8-1",
    },
    {
      id: 4,
      title: "History of the American Frontier, 1763–1893",
      author: "Frederic L. Paxson",
      format: "American Frontier History",
      image: "/Natural History/Natural History4.jpg",
      amazonUrl:
        "https://www.amazon.com/History-American-Frontier-Frederic-Paxson/dp/B0BNQB48K7/ref=sr_1_1?dib=eyJ2IjoiMSJ9.X_cmNC4HqK-XJGP9h_kbxesBU9Wcy5Y0Y9xG-sj3dmytqPuBylHOeCforXMk8Bft1KHIbqExKzURrNs5aidlEp604giWkdbe3RG_x0uig0FFPaDjP0_0X7azUt40W7TQ8Ma4VGtdaFF__c_AuVgVzoc_PO18I__0SNFhaNg7prmgZdTjiPfji30XRL_l3KGqXHPfYw0RecQcfaDX-E9UmJpgaeYFgeIBDBBafFV0U9U.uNCMJn1JXW5_-xR_uBkOfQTEIqnR0aY4bXnJFDVpCao&dib_tag=se&keywords=History+of+the+American+Frontier+1763+1893+Frederic+Paxson&nsdOptOutParam=true&qid=1794244063&sr=8-1",
    },
    {
      id: 5,
      title: "The First Frontier: The Forgotten History of Struggle, Savagery, and Endurance in Early America",
      author: "Scott Weidensaul",
      format: "Early American History",
      image: "/Natural History/Natural History5.jpg",
      amazonUrl:
        "https://www.amazon.com/First-Frontier-Forgotten-Struggle-Endurance-ebook/dp/B005LVR7FE/ref=sr_1_1?dib=eyJ2IjoiMSJ9.0tG2yvs86CoOkTfAfTpgzg.J_Tq8fzGJ0oREXVlTQrgAmIoR0q10OxVYf55xB3-A0o&dib_tag=se&keywords=9780151015153&qid=1794244094&sr=8-1",
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
            Natural History & Wildlife
          </span>

        </div>

        {/* ======================================
            PAGE HEADER
        ====================================== */}

        <div className="bg-[#241a15] text-[#fbf8f2] p-8 border-2 border-[#c29b38] shadow-md mb-10 text-center sm:text-left flex flex-col sm:flex-row justify-between items-center gap-6">

          <div>

            <div className="flex items-center justify-center sm:justify-start gap-2 text-[#c29b38] text-[10px] tracking-[0.3em] uppercase font-sans font-bold mb-2">

              <Leaf className="w-4 h-4" />

              <span>
                Nature, Appalachian Landscapes & American Heritage
              </span>

            </div>

            <h1 className="text-3xl sm:text-4xl font-bold font-serif">
              Natural History & Wildlife
            </h1>

            <p className="text-xs text-[#b8a68f] mt-2 max-w-xl font-serif italic leading-relaxed">
              Explore the remarkable natural history of the
              Appalachian Mountains, the beauty of America's
              landscapes, and the fascinating stories of
              early frontier exploration. Discover works
              connecting geography, ecology, wildlife,
              and the history of the American wilderness.
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
