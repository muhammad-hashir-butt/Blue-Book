
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
  // All images: .jpg
  // Titles matched with actual covers
  // No prices
  // Compact cards
  // Georgia font
  // No hover animations
  // Amazon links included
  // ==========================================

  const books = [
    {
      id: 1,
      title:
        "Naxos – Paros: The Hidden Greek Islands of Ancient Wonders, Marble Masterpieces, and Medieval Treasures",
      author: "Denis Roubien",
      format: "Ancient Greek History & Cultural Heritage",
      image: "/Ancient & Medieval/Ancient & Medieval1.jpg",
      amazonUrl:
        "https://www.amazon.com/Naxos-Islands-different-architecture-landscape-ebook/dp/B08Z8957BJ/ref=sr_1_1?dib=eyJ2IjoiMSJ9.DIfLoZesGhbj0XKdDO3kW8sKDcdiKWlGUKopOCm-oH41v2wCfXiSNnvkl8sOfJ_CCXw0M5HQh3tHaabi-NQrTyjyFREZPQEFrpKvVLB2GKjKzGqh2CvNdV5SYLKHPTXJ5Nj2K_RUpL2doO66MM0v0YIsgTZDj2ZOl3p4jHH4Npvl5ukRea42DflM0mAx0gQR9i8c6lsqHxAXesudqnlxUWDDmoSIYux468RjLN_RkvQ.9guzrKKHQzpoucOJALtp5utdUEloq8OQ7qfizCAoDaw&dib_tag=se&keywords=Naxos+Paros+Denis+Roubien+Hidden+Greek+Islands&qid=1794423100&sr=8-1",
    },
    {
      id: 2,
      title:
        "Ancient and Medieval Conspiracy Theories: The History of the World's Most Persistent Conspiracy Theories",
      author: "Charles River Editors",
      format: "Ancient & Medieval Historical Mysteries",
      image: "/Ancient & Medieval/Ancient & Medieval2.jpg",
      amazonUrl:
"https://www.amazon.com/Ancient-Medieval-Conspiracy-Theories-Persistent/dp/B0CQXM5T19/ref=sr_1_1?dib=eyJ2IjoiMSJ9.B9my3aR9KegQzMb43_SBjgkn-Lh-5G9kVQl1UU_Dqrf_UmVdlsRaJ-17gi1fUbBUH-LoL7iY1lRmHYbclFy0N-jb75VSciakscoj8_su5swyvsb2kiAfrfCwIcp5808cDzu92UFBhnN_LWuQeXtjNfrp_9-1fH-6fR79k6cZ_UI8WGsHzUJy7GEJUk6rfTlwrU4d850fo4gza02Z-hmppU7XxIXMSbeRJ17jw2K77OA.kfVwAev0uHSO17C6EklvymqEoU3rDW3LZvh_dusjKtA&dib_tag=se&keywords=Ancient+and+Medieval+Conspiracy+Theories+Charles+River+Editors&nsdOptOutParam=true&qid=1794423126&sr=8-1"    },
    {
      id: 3,
      title:
        "The Roman Empire & the Medieval World: Volume III – The Thales Canon",
      author: "Thales Press",
      format: "Roman Empire & Medieval World History",
      image: "/Ancient & Medieval/Ancient & Medieval3.jpg",
      amazonUrl:
"https://www.amazon.com/Roman-Empire-Medieval-World/dp/B0H692MS3G/ref=sr_1_1?dib=eyJ2IjoiMSJ9.spY6_lnF2OVCC8RuM-dIYystoADQZ6IKZFVFWHH4QdJrreE2QSsSgl3ldId607yOfWJGjt-1nlEbg4TNxyvhWzl_IUbCkBjDKtUtLEsrzolfdALedaz8wP6H71Ex497hDn_-qNLjcCSPCzLNSbJCCDpK8pC4UOVpm5SEma_rg8kAG_d0D34OMk1B8l0_MtXiN4_l0XXUoSOMqC4M-J5ZhNCuXlRkCv4PgrBNRe_YH8A.R_Kd2wD96J_8n3n4kiO6TqKP2dBP9apZy9ovtTjyPCQ&dib_tag=se&keywords=The+Roman+Empire+and+the+Medieval+World+Thales+Canon&nsdOptOutParam=true&qid=1794423149&sr=8-1"    },
    {
      id: 4,
      title:
        "The Aethelred Cipher: A Medieval Conspiracy Shepherding the Black Death",
      author: "Randy Pellegrini",
      format: "Medieval Historical Mystery & Fiction",
      image: "/Ancient & Medieval/Ancient & Medieval4.jpg",
      amazonUrl:
        "https://www.amazon.com/dp/B0GJTGCHS2",
    },
    {
      id: 5,
      title:
        "Mechanical Computers of the Ancient Cosmos: Astronomicum Caesareum",
      author: "Petrus Apianus (Original Work)",
      format: "Historical Astronomy & Ancient Scientific Instruments",
      image: "/Ancient & Medieval/Ancient & Medieval5.jpg",
      amazonUrl:
"https://www.amazon.com/Mechanical-Computers-Ancient-Cosmos-Astronomicum/dp/B0H226K7K2/ref=sr_1_1?dib=eyJ2IjoiMSJ9.cIW0_sBJ6bO5KK_epiyvpm5tl3e8KnZ1H9xOqFnS9RrLezo1qsDowpBRPBdw2m928iztZuBFPMgzdHnGYI0FtFqpcc74NP3TI4zePogzIsjq8DwWoyApAo7qcXgc9eiTRuLqDCSH7_d-cLltc9U7Y4IrOEu2oIrg41G5qaf5kHA0Up_d3Gcr0tyQjFPoMMNOrwpBlngZpyO1LvkX1WBNlgmZnSG3dMsbLsIZmDq6nwE.0nstC31cK7bXHqRY1sjgC1dLsUPyL7otshvT347sd60&dib_tag=se&keywords=Mechanical+Computers+of+the+Ancient+Cosmos+Astronomicum+Caesareum&nsdOptOutParam=true&qid=1794423183&sr=8-1"    },
  ];

  return (
    <div
      className="w-full min-h-screen bg-[#fbf8f2] text-[#241a15] px-4 sm:px-6 py-7"
      style={{
        fontFamily: "Georgia, 'Times New Roman', serif",
      }}
    >
      <div className="max-w-7xl mx-auto">

        {/* ==========================================
            BREADCRUMB NAVIGATION
        ========================================== */}

        <nav className="flex flex-wrap items-center gap-2 text-xs text-[#7a6452] mb-5">

          <Link
            to="/"
            className="flex items-center gap-1 text-[#7a6452] no-underline"
          >
            <ArrowLeft size={14} />
            Back to Home
          </Link>

          <span>/</span>

          <span>Classical Rarities</span>

          <span>/</span>

          <span className="font-bold text-[#8c2d19]">
            Ancient & Medieval History
          </span>

        </nav>

        {/* ==========================================
            PAGE HEADER
        ========================================== */}

        <header className="bg-[#241a15] text-[#fbf8f2] border border-[#c29b38] px-6 py-6 mb-6">

          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">

            <div className="flex-1">

              <div className="text-[#c29b38] text-[11px] font-bold tracking-[0.15em] uppercase mb-2">
                Ancient Civilizations, Medieval Mysteries & Historical Discoveries
              </div>

              <h1 className="text-3xl sm:text-4xl font-bold leading-tight">
                Ancient & Medieval History
              </h1>

              <p className="text-[14px] text-[#cbb9a5] mt-2 max-w-2xl leading-relaxed">
                Explore the extraordinary heritage of
                ancient civilizations and the medieval world.
                Discover the cultural treasures of Greece,
                fascinating historical conspiracy theories,
                the rise of the Roman Empire, medieval
                mysteries surrounding the Black Death,
                and remarkable astronomical inventions.
                Journey through influential periods of
                history and uncover the discoveries,
                traditions, and ideas that shaped
                human civilization.
              </p>

            </div>

            {/* ==========================================
                CURATED INDEX
            ========================================== */}

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

        {/* ==========================================
            BOOK COLLECTION GRID
        ========================================== */}

        <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 items-stretch">

          {books.map((book) => (

            <article
              key={book.id}
              className="bg-[#fdfbf7] border border-[#b8a68f] p-3 flex flex-col h-full"
            >

              {/* ==========================================
                  BOOK COVER
              ========================================== */}

              <div className="w-full h-60 bg-[#efe8db] border border-[#c7b8a3] p-2 flex items-center justify-center overflow-hidden">

                <img
                  src={book.image}
                  alt={`${book.title} by ${book.author}`}
                  loading="lazy"
                  className="w-full h-full object-contain"
                />

              </div>

              {/* ==========================================
                  CATEGORY BADGE
              ========================================== */}

              <div className="mt-3">

                <span className="inline-block text-[10px] font-bold uppercase leading-snug text-[#8c2d19] border border-[#c29b38] px-2 py-1">
                  {book.format}
                </span>

              </div>

              {/* ==========================================
                  BOOK INFORMATION
              ========================================== */}

              <div className="flex flex-col flex-1 mt-2">

                {/* BOOK TITLE */}

                <h2 className="text-[17px] font-bold text-[#241a15] leading-[1.35]">
                  {book.title}
                </h2>

                {/* AUTHOR NAME */}

                <p className="text-[13px] text-[#8a593f] italic mt-2 leading-snug">
                  by {book.author}
                </p>

                {/* ==========================================
                    AMAZON VIEW BOOK BUTTON
                ========================================== */}

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

        {/* ==========================================
            BOTTOM DIVIDER
        ========================================== */}

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
