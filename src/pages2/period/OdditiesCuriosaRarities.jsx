
import React from "react";
import { Link } from "react-router-dom";
import {
  ArrowLeft,
  BookOpen,
  ArrowUpRight,
} from "lucide-react";

export default function OdditiesCuriosaRarities() {

  const books = [
    {
      id: 1,
      title: "Oddities in Print: A Multitude of Bizarre Occurrences, Peculiar People, & Unexplained Events from Newspapers of Yore",
      author: "Adam Benedict",
      format: "Historical Oddities & Newspaper Archives",
      image: "/Oddities/Oddities1.webp",
      amazonUrl:
        "https://www.amazon.com/Oddities-Print-Occurrences-Unexplained-Newspapers/dp/B09MG6FSYW/ref=sr_1_1?dib=eyJ2IjoiMSJ9._-chmlD5IHuW97Df820IcQ.0SjnNNkzM1KcTZzq2jGMDkA2MkOU3cU60Zgk2hRIJqM&dib_tag=se&keywords=Oddities+in+Print+Adam+Benedict&qid=1794252729&sr=8-1",
    },
    {
      id: 2,
      title: "Alphabet of Oddities: A Gothic Bestiary",
      author: "Ronald Porcelli",
      format: "Gothic Art & Unusual Creatures",
      image: "/Oddities/Oddities2.webp",
      amazonUrl:
        "https://www.amazon.com/Alphabet-Oddities-Bestiary-Ronald-Porcelli/dp/B0GM5B37C1/ref=sr_1_1?dib=eyJ2IjoiMSJ9.ndkvx99IZ6wjdcQ9HHDlAAP75y3emLmzujLZpKNZdNo8vnF2b4sYcZTmOAoj1xff8BjV4GHuUrPUG2TL5yfMPjC92vuYvnRWClToMKZaC8x3EMMwclsIm2mlttipGoSCQ2HZb_ztYg_jprRdSU2bRrA7iq3IguC-rp_6v8w1Nbu1DxxQHT3YqhTr7n5m4iWu7ZoZKX9zqNshZ-VnLX17U43DamazSOYucL3d84TjCEs.C09ozb_ImHrh1ig11-cV3vjIMKsldu3HGeICJ6ae2J4&dib_tag=se&keywords=Alphabet+of+Oddities+A+Gothic+Bestiary&qid=1794252759&sr=8-1",
    },
    {
      id: 3,
      title: "Morbid Curiosities: Collections of the Uncommon and the Bizarre",
      author: "Paul Gambino",
      format: "Morbid Collections & Curious Objects",
      image: "/Oddities/Oddities3.jpg",
      amazonUrl:
        "https://www.amazon.com/Morbid-Curiosities-Collections-Uncommon-Bizarre/dp/1780678665/ref=sr_1_1?dib=eyJ2IjoiMSJ9.mw2TxHQNyMPkDWGnVeivTKjb-e5JB6OXgmBWqnaPl1sLAPnzq6JlNf3UbjRydp2B.UG_G5c9q0x0ruSF2bSuKaGAM7zBEexeGVsk-lqAi4gw&dib_tag=se&keywords=Morbid+Curiosities+Paul+Gambino&qid=1794252780&sr=8-1",
    },
    {
      id: 4,
      title: "Ghosts in Print: An Assemblage of Spirits, Spooks, & Spectres from Newspapers of Old",
      author: "Adam Benedict",
      format: "Ghost Stories & Historical Newspapers",
      image: "/Oddities/Oddities4.jpg",
      amazonUrl:
        "https://www.amazon.com/Ghosts-Print-Assemblage-Specters-Newspapers/dp/B08KYJTTT9/ref=sr_1_1?dib=eyJ2IjoiMSJ9.-j6H7Y9Z1bY5HTePfdM50SPirzoxCycCbcJFzr0_sTnGjHj071QN20LucGBJIEps.FzhhQJEa-QlogXqy8p3-ZEzI6O4ItTcD4NEQVWchOHs&dib_tag=se&keywords=Ghosts+in+Print+Adam+Benedict&qid=1794252809&sr=8-1",
    },
    {
      id: 5,
      title: "Oddities & Curiosities: A Beginner's Collector's Guide",
      author: "Thomas Creek",
      format: "Oddities Collecting & Curiosities",
      image: "/Oddities/Oddities5.jpg",
      amazonUrl:
        "https://www.amazon.com/Oddities-Curiosities-Beginners-Collectors-Darkness-ebook/dp/B0GFPP9XM5/ref=sr_1_1?dib=eyJ2IjoiMSJ9.-MEyjKMQD8OOPdkQ1b-vRZt6M3ArFNj-34KaGowVX9tOeHsMGA_YXIsJqJcx3TXsJee5XpNV9eDG9YsD1CV3tKEC1CZKFd0S3yRo2KXGhbvIn82kc4TdtETWNO2sSDxVKXKe0VLNDfROvXY_j50wheHQSWYh9_P0kQkqJI64IU92vU8f1y6BrTrXO_1m1hpD.j9P5czmzSlLmi3XNSpexLHXMR-hMQIDgrSKwaEkHnAE&dib_tag=se&keywords=Oddities+Curiosities+Thomas+Creek&qid=1794252830&sr=8-1",
    },
  ];

  return (
    <div className="w-full min-h-screen bg-[#fbf8f2] text-[#2c241e] font-serif py-10 px-6">
      <div className="max-w-7xl mx-auto">

        {/* BREADCRUMB */}

        <div className="flex flex-wrap items-center gap-2 text-xs font-sans text-[#7a6452] mb-6">
          <Link to="/" className="flex items-center gap-1">
            <ArrowLeft className="w-3.5 h-3.5" />
            Back to Home
          </Link>

          <span>/</span>
          <span>Period Treasures</span>
          <span>/</span>

          <span className="text-[#8c2d19] font-bold">
            Oddities, Curiosa & Rarities
          </span>
        </div>

        {/* PAGE HEADER */}

        <div className="bg-[#241a15] text-[#fbf8f2] p-8 border-2 border-[#c29b38] shadow-md mb-10 text-center sm:text-left flex flex-col sm:flex-row justify-between items-center gap-6">

          <div>
            <div className="text-[#c29b38] text-[10px] tracking-[0.3em] uppercase font-sans font-bold mb-2">
              Strange Histories, Gothic Curiosities & Rare Collections
            </div>

            <h1 className="text-3xl sm:text-4xl font-bold font-serif">
              Oddities, Curiosa & Rarities
            </h1>

            <p className="text-xs text-[#b8a68f] mt-2 max-w-xl font-serif italic leading-relaxed">
              Discover a fascinating collection of
              historical oddities, mysterious newspaper
              accounts, gothic illustrations, unusual
              artifacts, and extraordinary curiosities.
              Explore forgotten tales of strange events,
              ghostly encounters, peculiar people,
              and remarkable collections that reveal
              the unusual side of history and culture.
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

              {/* BOOK IMAGE */}

              <div className="w-full h-64 bg-[#efe8db] p-2 border border-[#c7b8a3] overflow-hidden mb-4 flex items-center justify-center">
                <img
                  src={book.image}
                  alt={`${book.title} by ${book.author}`}
                  loading="lazy"
                  className="w-full h-full object-contain"
                />
              </div>

              {/* BOOK DETAILS */}

              <div className="flex flex-col flex-1">

                <span className="text-[9px] font-sans font-bold text-[#8c2d19] border border-[#c29b38] bg-[#fbf8f2] px-2 py-1 uppercase tracking-wide inline-block self-start mb-3">
                  {book.format}
                </span>

                <h3 className="text-base font-bold text-[#241a15] leading-snug line-clamp-4 min-h-[110px]">
                  {book.title}
                </h3>

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
