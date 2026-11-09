
import React from "react";
import { Link } from "react-router-dom";
import {
  Compass,
  ArrowLeft,
  BookOpen,
  ArrowUpRight,
} from "lucide-react";

export default function SportsNaturalPursuits() {

  // ==========================================
  // SPORTS & NATURAL PURSUITS
  // Images: public/Sports/
  // Correct book titles and authors
  // Prices removed
  // Amazon search links included
  // No hover effects or animations
  // ==========================================

  const books = [
    {
      id: 1,
      title: "Becoming Odyssa: Adventures on the Appalachian Trail",
      author: "Jennifer Pharr Davis",
      format: "Hiking & Appalachian Adventures",
      image: "/Sports/Sports1.webp",
      amazonUrl:
        "https://www.amazon.com/Becoming-Odyssa-Adventures-Appalachian-Trail/dp/B0868WNMVV/ref=sr_1_1?dib=eyJ2IjoiMSJ9.5W4FEpEWJ7Jz8PnT2_G7PuUNJkUo1xzJ_64i2uPdurcn5hIhhg8UPWChbdIllSFrjXEi9MsCr1r4A9hrtByjwA.YODQDvbwAQySC7O_DnznnXY-PDLHWnsqfBwCf_eYG2w&dib_tag=se&keywords=Becoming+Odyssa+Jennifer+Pharr+Davis&qid=1794245479&sr=8-1",
    },
    {
      id: 2,
      title: "For the Love of the Grind: A Memoir",
      author: "Sara Hall",
      format: "Running & Athletic Memoir",
      image: "/Sports/Sports2.webp",
      amazonUrl:
        "https://www.amazon.com/Audible-Love-Grind-Memoir/dp/B0FN8KG7LF/ref=sr_1_1?dib=eyJ2IjoiMSJ9.wQGGHl3bHCFFymArrGShh2OFp6FYbzsKpdA1--BPXHfifrAPkUd9M5Es285UTe2t.VPnPnoeyO3_gr4YEEUBLGB1WeGSGg904wTap3cFPv7o&dib_tag=se&keywords=For+the+Love+of+the+Grind+Sara+Hall&nsdOptOutParam=true&qid=1794245503&sr=8-1",
    },
    {
      id: 3,
      title: "Nowhere Near First: Ultramarathon Adventures from the Back of the Pack",
      author: "Cory Reese",
      format: "Ultramarathon & Endurance",
      image: "/Sports/Sports3.jpg",
      amazonUrl:
        "https://www.amazon.com/Nowhere-Near-First-Cory-Reese-audiobook/dp/B07D1CFS7H/ref=sr_1_1?dib=eyJ2IjoiMSJ9.dkUMdLOc9HJ5yONCZl-CFw.wMZAAYu41tkGRP5Io_obICYhak710s_9S9SWtg53xDA&dib_tag=se&keywords=Nowhere+Near+First+Cory+Reese+Audiobook&qid=1794245526&sr=8-1",
    },
    {
      id: 4,
      title: "North: Finding My Way While Running the Appalachian Trail",
      author: "Scott Jurek with Jenny Jurek",
      format: "Trail Running & Adventure",
      image: "/Sports/Sports4.jpg",
      amazonUrl:
        "https://www.amazon.com/North-Scott-Jurek-Jenny-Jurek-audiobook/dp/B07BLJDPBN/ref=sr_1_1?dib=eyJ2IjoiMSJ9.A8vwBSdGk4BFSlBzYaFn7ggA8xV06jqoEIIi9yDLEf4.hDHiy_8hTG0zYgou0D2acd6ZTUbg3zqqnu27nnUwIAk&dib_tag=se&keywords=North+Scott+Jurek+Jenny+Jurek&qid=1794245543&sr=8-1",
    },
    {
      id: 5,
      title: "The Pursuit of Endurance",
      author: "Jennifer Pharr Davis",
      format: "Endurance & Outdoor Exploration",
      image: "/Sports/Sports5.jpg",
      amazonUrl:
        "https://www.amazon.com/The-Pursuit-of-Endurance-audiobook/dp/B07BGFLZVP/ref=sr_1_1?dib=eyJ2IjoiMSJ9.WPv3uhGXT2VMWAfeaNbTFuNuROXDRUbjnaZVX2gmcZDt-fwZyIPgxV0eTpi1AKgGdeJrM0meC0y8xmtcUIJGIaWVyIA4Ljf849eZKH28DgYKDk8tIo_E2ZxgifGaTksvXg2IuH9UFT6XTMeOjT_pD9CfOKv267PwM1KyvpnELbtufibBlk9ny6l_JDbOFZkvfgeWnnO5gIeX_ka4uL1x_J_NhyU09R4nr_fU6bfUqPg.IuJVaXlZlsxwUkDuvAQZtholB9qquCzACYxtGIEULkU&dib_tag=se&keywords=The+Pursuit+of+Endurance+Jennifer+Pharr+Davis&qid=1794245566&sr=8-1",
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
          <span>Arts & Special Interests</span>
          <span>/</span>

          <span className="text-[#8c2d19] font-bold">
            Sports & Natural Pursuits
          </span>

        </div>

        {/* PAGE HEADER */}

        <div className="bg-[#241a15] text-[#fbf8f2] p-8 border-2 border-[#c29b38] shadow-md mb-10 text-center sm:text-left flex flex-col sm:flex-row justify-between items-center gap-6">

          <div>

            <div className="flex items-center justify-center sm:justify-start gap-2 text-[#c29b38] text-[10px] tracking-[0.3em] uppercase font-sans font-bold mb-2">

              <Compass className="w-4 h-4" />

              <span>
                Trail Running, Adventure & Human Endurance
              </span>

            </div>

            <h1 className="text-3xl sm:text-4xl font-bold font-serif">
              Sports & Natural Pursuits
            </h1>

            <p className="text-xs text-[#b8a68f] mt-2 max-w-xl font-serif italic leading-relaxed">
              Explore inspiring stories of athletic
              determination, long-distance running,
              Appalachian Trail adventures, ultramarathon
              challenges, and extraordinary feats of
              human endurance. Discover the journeys
              of athletes and explorers who push beyond
              their limits and embrace the natural world.
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
