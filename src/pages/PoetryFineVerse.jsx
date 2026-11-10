
import React from "react";
import { Link } from "react-router-dom";
import {
  ArrowLeft,
  ArrowUpRight,
  BookOpen,
} from "lucide-react";

export default function PoetryFineVerse() {

  // POETRY & FINE VERSE
  // Images: public/poetry/
  // Classic Georgia font
  // Compact book cards
  // No prices or hover animations

  const books = [
    {
      id: 1,
      title: "A Life Unseen",
      subtitle: "Part 1",
      author: "Sara Ann Zimmerman",
      format: "Personal Poetry & Life Reflections",
      image: "/poetry/poetry1.jpg",
      amazonUrl:
        "https://www.amazon.com/Life-Unseen-Untold-story-girl/dp/B0F6C9XPSL/ref=sr_1_1?dib=eyJ2IjoiMSJ9.RbgM3uHdqYEqoDh6N3W9GQ.pkiTpttEz4lDaWXyFHhWZlzF29kOrhM7tpQ2fJpZ3ak&dib_tag=se&keywords=A+Life+Unseen+Sara+Ann+Zimmerman&qid=1794332049&sr=8-1",
    },
    {
      id: 2,
      title: "A Softer Life",
      subtitle:
        "A 12-Week Guided Journal for Midlife Women Learning to Stop Carrying Everything and Choose Peace",
      author: "Drift & Bloom Publishing",
      format: "Guided Journal & Self-Reflection",
      image: "/poetry/poetry2.jpg",
      amazonUrl:
        "https://www.amazon.com/Softer-Life-Learning-Carrying-Everything/dp/B0H68Y2SF7/ref=sr_1_1?dib=eyJ2IjoiMSJ9.0um1lFljcK3uJdUY53EqBmWpnUjOgB3CDdZEfah4W94.CPIW1gx9YfQL9B_sZqYABtxGnhBEvME4QrgD6lA1RzY&dib_tag=se&keywords=A+Softer+Life+Drift+Bloom+Publishing&qid=1794332072&sr=8-1",
    },
    {
      id: 3,
      title: "A Little Quiet for Your Heart",
      subtitle:
        "30 Small Poems for Heavy Days, Hopeful Days, and Everything Between",
      author: "Mae Low",
      format: "Inspirational Poetry & Comfort",
      image: "/poetry/poetry3.jpg",
      amazonUrl:
        "https://www.amazon.com/Little-Quiet-Your-Heart-Everything/dp/B0HFFQDLGB/ref=sr_1_1?dib=eyJ2IjoiMSJ9.gZnF7PcpYkIZ7mxp5dzMtA.a5ukoqGX0z958K87c2-PGRomVT9oEeuCOmnWK13dnr0&dib_tag=se&keywords=A+Little+Quiet+for+Your+Heart+Mae+Low&nsdOptOutParam=true&qid=1794332096&sr=8-1",
    },
    {
      id: 4,
      title: "i said i was fine.",
      subtitle:
        "funny thoughts. ugly truths. things I never said out loud.",
      author: "Emily.Empowered",
      format: "Contemporary Poetry & Personal Expression",
      image: "/poetry/poetry4.jpg",
      amazonUrl:
        "https://www.amazon.com/said-was-fine-thoughts-truths/dp/B0GXN2YRF7/ref=sr_1_1?dib=eyJ2IjoiMSJ9.fMdtKX8TF_CpUfw3U9k8aw.R9opwMgNDPwQ05RK373cxLOWNFJA3EAv74lNTX6BdOY&dib_tag=se&keywords=9798257576508&qid=1794332133&sr=8-1",
    },
    {
      id: 5,
      title: "The Love We Let Go",
      subtitle: "",
      author: "Amy Roberts",
      format: "Love, Healing & Emotional Poetry",
      image: "/poetry/poetry5.jpg",
      amazonUrl:
        "https://www.amazon.com/Love-We-Let-Go/dp/B0HDC55G2R/ref=sr_1_1?dib=eyJ2IjoiMSJ9.kx3FzZzURbXVTM4KlJ0VGHTmQ7_P4g7cvwtCSu_VtJkFcri6Kk5g3M0A_ZT15XNymlr2IiH-StFs3BKUWiYG781oc9P2IhYJNxDDO0NvmSch5sf5WqQR2rdrcj74bNtSZ1z_s9DDFG8q6q1TodaCTkJHHnFcQgKOwOksFARcb-5r4pcgK0olC8O9o0nZF15Q.3k5kSWGJUMFT48Yi7SOVBMW6OkemuYs9OPwFbcitR5U&dib_tag=se&keywords=The+Love+We+Let+Go+Amy+Roberts&qid=1794332165&sr=8-1",
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

        {/* BREADCRUMB */}

        <nav className="flex flex-wrap items-center gap-2 text-xs text-[#7a6452] mb-5">
          <Link
            to="/"
            className="flex items-center gap-1 text-[#7a6452] no-underline"
          >
            <ArrowLeft size={14} />
            Back to Home
          </Link>

          <span>/</span>
          <span>Categories</span>
          <span>/</span>

          <span className="font-bold text-[#8c2d19]">
            Poetry & Fine Verse
          </span>
        </nav>

        {/* PAGE HEADER */}

        <header className="bg-[#241a15] text-[#fbf8f2] border border-[#c29b38] px-6 py-6 mb-6">

          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">

            <div className="flex-1">

              <p className="text-[#c29b38] text-[11px] font-bold tracking-[0.15em] uppercase mb-2">
                Personal Reflections, Healing & Meaningful Words
              </p>

              <h1 className="text-3xl sm:text-4xl font-bold leading-tight">
                Poetry & Fine Verse
              </h1>

              <p className="text-[14px] text-[#cbb9a5] mt-2 max-w-2xl leading-relaxed">
                Explore heartfelt poetry, personal reflections,
                inspirational writing, and thoughtful journals
                that celebrate love, healing, emotional growth,
                and the beauty of everyday life. Discover
                meaningful works that offer comfort, encourage
                self-discovery, and give voice to the experiences
                that connect us all.
              </p>

            </div>

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

        {/* BOOK COLLECTION */}

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

              {/* CATEGORY */}

              <div className="mt-3">

                <span className="inline-block text-[10px] font-bold uppercase leading-snug text-[#8c2d19] border border-[#c29b38] px-2 py-1">
                  {book.format}
                </span>

              </div>

              {/* BOOK DETAILS */}

              <div className="flex flex-col flex-1 mt-2">

                <h2 className="text-[17px] font-bold text-[#241a15] leading-[1.35]">
                  {book.title}
                </h2>

                {book.subtitle && (
                  <p className="text-[12px] text-[#756052] mt-1 leading-snug">
                    {book.subtitle}
                  </p>
                )}

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
