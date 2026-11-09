
import React from "react";
import { Link } from "react-router-dom";
import {
  ArrowLeft,
  BookOpen,
  ArrowUpRight,
} from "lucide-react";

export default function AncientMedievalHistory() {

  // ==========================================
  // ANCIENT & MEDIEVAL HISTORY
  // Images: public/Ancient & Medieval/
  // Actual titles from book covers
  // No prices or hover animations
  // Amazon search links
  // ==========================================

  const books = [
    {
      id: 1,
      title: "Castles: A Fortified History of the World",
      author: "Dan Jones",
      format: "Castles & World History",
      image: "/Ancient & Medieval/Ancient & Medieval1.webp",
      amazonUrl:
        "https://www.amazon.com/Castles-Fortified-History-Dan-Jones/dp/B0GLG2YYM4/ref=sr_1_1?dib=eyJ2IjoiMSJ9.lvwlfao_aSJX4MW_VesFydJ2Lrw6cKEFDiVRNcya3sNLNu2kfaUiPjYKOJ6LnR_djyOh391VZp6BFhwtIiLsNCwZuwBLXiwTXxyc7SbFYsvufvcskPBg4gH5NPo2MHuEa9RGQMGTddtJRooiDIS_V9MIgXwyCP6SowLWuhFJYVFc95tAiHRQt-WNwk06ZYo13wQINqrO4BLJfANfHKQLzog_Q1tSLCXWUGzL-3qDQJo.vpIN-2Lm1wEpT43-xZoaF_kOBrvx40tWuk1c62Evm4s&dib_tag=se&keywords=Castles+A+Fortified+History+of+the+World+Dan+Jones&nsdOptOutParam=true&qid=1794248776&sr=8-1",
    },
    {
      id: 2,
      title: "Powers and Thrones: A New History of the Middle Ages",
      author: "Dan Jones",
      format: "Medieval European History",
      image: "/Ancient & Medieval/Ancient & Medieval2.webp",
      amazonUrl:
        "https://www.amazon.com/Powers-Thrones-History-Middle-Ages/dp/1984880896/ref=sr_1_1?dib=eyJ2IjoiMSJ9.Q3eDHvj_dWFTcxP6zsUelu-Q9a6fon6CmR5jrsB5FqD9qagO2rsKTVmJZjFAh4v2D3M96uDecW1uHWwAY7Vc5-kvznMvWeQ8Ta9JjA6fUWzv26dxbLJCpG4qlyUDouTYX34E9yuncp1vKxEhXmPwblcJ8-beptZ1Mlvijg4g_Qaa1bkhTbURabCnNGo16fX5j-eIhm7H1KbKjf2kxYzIxC8Ggj5OPjtcyxazeDNJZTU.CH16hBDmXBXvl4DyyXpIuaKoY9OSlcEsv2pe6rR6uCI&dib_tag=se&keywords=Powers+and+Thrones+Dan+Jones&qid=1794248812&sr=8-1",
    },
    {
      id: 3,
      title: "The Book of Ancient Weapons: Weapons, Armor, and Siege Engines of History",
      author: null,
      format: "Ancient Weapons & Warfare",
      image: "/Ancient & Medieval/Ancient & Medieval3.jpg",
      amazonUrl:
        "https://www.amazon.com/Book-Ancient-Weapons-Historical-Encyclopedia/dp/B0H3NT8SD6/ref=sr_1_1?dib=eyJ2IjoiMSJ9.sL1CBw5q3VS8DGpENKZ4TNAULGviIL6d2wcdaL4XCQgv_s6tFpolO40yKjga3vsuLJUeUBi0Pn67hcKLM094uG3f0gZgSMGWSnTU-Ogsk8xmXRPopTs-5avusFVRca6y1BllhwU-qbeUsUwVzJCINZKhL2UIYzrSmk06xXGSUI9KZFk-8ej-lnN2CtkiUickhL2aePje5TogOBEzCyzpBSbtEjSAXJ77k491PS6usho.FhWZsDBYBpdyZVXUss9bpRQRQpKTK96wwR53zOhUbbY&dib_tag=se&keywords=The+Book+of+Ancient+Weapons&qid=1794248953&sr=8-1&utm_source=chatgpt.com",
    },
    {
      id: 4,
      title: "The Plantagenets: The Warrior Kings and Queens Who Made England",
      author: "Dan Jones",
      format: "Medieval English Royalty",
      image: "/Ancient & Medieval/Ancient & Medieval4.jpg",
      amazonUrl:
        "https://www.amazon.com/Plantagenets-Warrior-Kings-Queens-England/dp/B0CF6HS3L8/ref=sr_1_1?dib=eyJ2IjoiMSJ9.nOytkgB4LL3MH6b2-IAbJoUmcAj43KkDr9CAuXwhM_wvUEBQ9atox5OkCk9TxrC9DCCPmGOe7dgimhtXgAYNi0MWWZtJiCQgPFt6qHDwc--Rusck839IITvqRr0eIeNYlhV99TW2VyLowIX4r1RID1yaf1TDoox1_ihXMl5YrwTxACTuLyx4yl85eKNL3z7Mfr-eE8LuuJRRirWRBzOveOnKRAU9WCKqzp0S2tS-T14.x2EHq4joBvMAkjvE936jFFYqKII7WSaNB3mpTcHy3fA&dib_tag=se&keywords=The+Plantagenets+Dan+Jones&qid=1794249021&sr=8-1",
    },
    {
      id: 5,
      title: "The Norman Conquest: The Battle of Hastings and the Fall of Anglo-Saxon England",
      author: "Marc Morris",
      format: "Norman & Anglo-Saxon History",
      image: "/Ancient & Medieval/Ancient & Medieval5.jpg",
      amazonUrl:
        "https://www.amazon.com/The-Norman-Conquest-Marc-Morris-audiobook/dp/B00ET84AIC/ref=sr_1_1?dib=eyJ2IjoiMSJ9.4wB9jMBh9uB3c-k_aN4Zp8QzcGaoAr2Q-nRdx_XRx9LyoRHA2oDYcG1PZNdGLZ2E-xMDJ8KIt3ai_RqXJdT0wVcm024l0LvmGeqYsq2EdP4KsdoQhBK9kJ0Ha2UYyBntyNs1ouKI4yom97VVY_hQ1biTfnRpN8yMIDBmRNjUppVGymi_T5WoxrhPSo7Qm1Nv4g9Q4Nd-L4rRlVS2EYYYHJprCIf-U_7PkPrfei9Ayis.m53ByGnswTWdSCZs8gunwvLiXsO38lqNqd2p6l1xzAE&dib_tag=se&keywords=The+Norman+Conquest+Marc+Morris&qid=1794249045&sr=8-1",
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
          <span>Classical Rarities</span>
          <span>/</span>

          <span className="text-[#8c2d19] font-bold">
            Ancient & Medieval History
          </span>
        </div>

        {/* PAGE HEADER */}

        <div className="bg-[#241a15] text-[#fbf8f2] p-8 border-2 border-[#c29b38] shadow-md mb-10 text-center sm:text-left flex flex-col sm:flex-row justify-between items-center gap-6">

          <div>
            <div className="text-[#c29b38] text-[10px] tracking-[0.3em] uppercase font-sans font-bold mb-2">
              Castles, Medieval Kingdoms & Historical Warfare
            </div>

            <h1 className="text-3xl sm:text-4xl font-bold font-serif">
              Ancient & Medieval History
            </h1>

            <p className="text-xs text-[#b8a68f] mt-2 max-w-xl font-serif italic leading-relaxed">
              Explore the fascinating world of ancient
              warfare, medieval castles, powerful dynasties,
              royal kingdoms, and historic conquests.
              Discover remarkable accounts of the Middle
              Ages, the Plantagenet rulers, Norman England,
              military innovation, and the events that
              shaped European civilization.
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
                  alt={`${book.title}${book.author ? ` by ${book.author}` : ""}`}
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

                {/* AUTHOR */}

                {book.author && (
                  <p className="text-xs text-[#7a6452] italic mt-2 leading-relaxed">
                    by {book.author}
                  </p>
                )}

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
