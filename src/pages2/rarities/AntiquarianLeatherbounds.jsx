
import React from "react";
import { Link } from "react-router-dom";
import {
  BookOpen,
  ArrowLeft,
  ArrowUpRight,
} from "lucide-react";

export default function AntiquarianLeatherbounds() {

  // ==========================================
  // ANTIQUARIAN LEATHERBOUNDS
  // Images: public/Antiquarian/
  // Correct book titles and authors
  // Prices removed
  // Amazon search links included
  // No hover effects or animations
  // ==========================================

  const books = [
    {
      id: 1,
      title: "Lifting the Veil: Imagination and the Kingdom of God",
      author: "Malcolm Guite",
      format: "Christian Literature & Imagination",
      image: "/Antiquarian/Antiquarian1.webp",
      amazonUrl:
        "https://www.amazon.com/Lifting-Veil-Imagination-Kingdom-God/dp/1941106226/ref=sr_1_1?dib=eyJ2IjoiMSJ9.1pD32jhVN4Ntn15WUggNYW_f_IKJ7EXo1lxChy2caD0.CDH0raDZaDl15h5HsShduCIvYYLhqpKkdWZNahfp6lY&dib_tag=se&keywords=Lifting+the+Veil+Imagination+and+the+Kingdom+of+God+Malcolm+Guite&nsdOptOutParam=true&qid=1794246769&sr=8-1",
    },
    {
      id: 2,
      title: "The Coming of Arthur",
      author: "Malcolm Guite",
      format: "Arthurian Poetry & Literature",
      image: "/Antiquarian/Antiquarian2.webp",
      amazonUrl:
        "https://www.amazon.com/Coming-Arthur-Merlins-Isle-Arthuriad/dp/1951872479/ref=sr_1_1?dib=eyJ2IjoiMSJ9.MPCoVDFo9sGVJx6UseK7huOcGhEvWGp9XEbVtrIF1vIl2S_axNOYKr4zc-JrtinhcDfp-NDcjD9PpvyrhkqGom9XL5rcyH8dN-CidhYbZJ7GrvDQj3cl7_5Suea0dZ4DWJS9TWHM1jofZvAKpcgCqYS8n4THwEZK-1Nj8TM_mHnsYhXs9-GbnklxzapdZc82pgHFj4oQwVVbIiy6j7DPWZxWANboxgNc16khrw2MxB0.5FfgE-USlJTY0CpSLZx49A6xULQT44j-BCOgHSSLVqo&dib_tag=se&keywords=The+Coming+of+Arthur+Malcolm+Guite&qid=1794246794&sr=8-1",
    },
    {
      id: 3,
      title: "Le Morte d'Arthur: King Arthur and the Knights of the Round Table",
      author: "Sir Thomas Malory",
      format: "Medieval Arthurian Literature",
      image: "/Antiquarian/Antiquarian3.webp",
      amazonUrl:
        "https://www.amazon.com/Morte-dArthur-Knights-Leather-bound-Classics/dp/1667211528/ref=sr_1_1?dib=eyJ2IjoiMSJ9.iQ0xopS2v_tVU3Ui40ae_3kOmb5-iOIfzs4hgwmXiki-RRV5nYGVqP8xCjBGqPVTxHYRuavZl13oCBPCQKzbAn1ZdxeFrb_EpMSZ-eG0_HWxTHzUGPd0g_ZY1RaBAJjWaalxeoyGS-CxovFotllnIDuun7ONNY4DmPXwUnSAHAlLFiEZ_Q4QYJM7xSv67lOVTuht4QvFL0YqD24JJYguYHZu76oSQXmk3o4eVfjJ0i8.2P2CQAAj3LkDbTO_4k6pCpbn2v96WUKxh3PiJJw4lNo&dib_tag=se&keywords=Le+Morte+d+Arthur+Thomas+Malory&qid=1794246831&sr=8-1",
    },
    {
      id: 4,
      title: "Galahad and the Grail",
      author: "Malcolm Guite",
      format: "Arthurian Legend & Poetry",
      image: "/Antiquarian/Antiquarian4.webp",
      amazonUrl:
        "https://www.amazon.com/Galahad-Grail-Merlins-Isle-Arthuriad/dp/1951872703/ref=sr_1_1?dib=eyJ2IjoiMSJ9.pjWKpb9552iunaQl3CIig_YhDYzRDLVbMMUakFBXyNB6QNA6c7GQUoANK-pxktOrUpmCrtofuQC8fBuMo37W6BGK0C3FRwOj9vkWPGD-Om2u-V5MBkXw2-yYI28vwDRoVaDgu6c-ok7_to4TkVLrHTBYhx_l5V3K3q_F8y5FBPv3OOtVhP-B1DpaXEd99GQI4M5WUEwliv1GD1JNan5W8sY4YoPbRbE9DhecboefpHU.ThYKg5QM03T3JAoho0U7UdMytvxhjKCVYZX7EZ49kD8&dib_tag=se&keywords=Galahad+and+the+Grail+Malcolm+Guite&qid=1794246853&sr=8-1",
    },
    {
      id: 5,
      title: "Bulfinch's Mythology",
      author: "Thomas Bulfinch",
      format: "Classical Myths & Legends",
      image: "/Antiquarian/Antiquarian5.jpg",
      amazonUrl:
        "https://www.amazon.com/Bulfinchs-Mythology-Leather-bound-Classics-Bulfinch/dp/1667211595/ref=sr_1_4?dib=eyJ2IjoiMSJ9.rMpXjFgOMeFLzCkzyhf0zhh_xIS8aTRyZEsniSBxtZ3GZqGUYmopgtLgjb4PxeWcoClW9VMALimcEGATXRfO7vKfUBYFGG5y_4mpvpJZc39gKsa-J4qFmBdWTFoqqUUB-dEsPTiNS0cCZQc4SSaeVmbFvE8iEAKNc_Yagkxmnrgh2EQiQZ8WxHzwMt3SMYKynn8wJiLioEpH-E8vCJpJpXQPmrmaShOPWvYbMim0imc.3uFNcwWRWvEuFYMlkjcMJ0iaeLks4OX_6v7IxZBFtZo&dib_tag=se&keywords=Bulfinch%27s+Mythology+Thomas+Bulfinch&qid=1794246941&sr=8-4&utm_source=chatgpt.com",
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
          <span>Classical Rarities</span>
          <span>/</span>

          <span className="text-[#8c2d19] font-bold">
            Antiquarian Leatherbounds
          </span>

        </div>

        {/* ======================================
            PAGE HEADER
        ====================================== */}

        <div className="bg-[#241a15] text-[#fbf8f2] p-8 border-2 border-[#c29b38] shadow-md mb-10 text-center sm:text-left flex flex-col sm:flex-row justify-between items-center gap-6">

          <div>

            <div className="flex items-center justify-center sm:justify-start gap-2 text-[#c29b38] text-[10px] tracking-[0.3em] uppercase font-sans font-bold mb-2">

              <BookOpen className="w-4 h-4" />

              <span>
                Arthurian Legends, Mythology & Literary Heritage
              </span>

            </div>

            <h1 className="text-3xl sm:text-4xl font-bold font-serif">
              Antiquarian Leatherbounds
            </h1>

            <p className="text-xs text-[#b8a68f] mt-2 max-w-xl font-serif italic leading-relaxed">
              Discover timeless Arthurian legends,
              medieval literary traditions, classical
              mythology, Christian imagination, and
              extraordinary works of poetic storytelling.
              Explore influential writings that celebrate
              legendary heroes, ancient myths, spiritual
              themes, and the enduring beauty of literature.
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

              {/* ======================================
                  BOOK INFORMATION
              ====================================== */}

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

                {/* ======================================
                    AMAZON VIEW BOOK BUTTON
                ====================================== */}

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
