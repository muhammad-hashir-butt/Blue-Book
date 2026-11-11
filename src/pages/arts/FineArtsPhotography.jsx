
import React from "react";
import { Link } from "react-router-dom";
import {
  Palette,
  ArrowLeft,
  BookOpen,
  ArrowUpRight,
} from "lucide-react";

export default function FineArtsPhotography() {

  // ==========================================
  // FINE ARTS & PHOTOGRAPHY
  // Images: public/Fine Arts/
  // Actual titles and authors
  // All images: .jpg
  // No prices
  // Compact cards
  // Georgia font
  // No hover animations
  // Amazon links included
  // ==========================================

  const books = [
    {
      id: 1,
      title: "The Art of Photography: Fine Art Portraits",
      author: "Miodrag Stanojlović",
      format: "Fine Art & Portrait Photography",
      image: "/Fine Arts/Fine Arts1.jpg",
      amazonUrl:
        "https://www.amazon.com/Art-Photography-Fine-Portraits/dp/B0DLJ7XNHG/ref=sr_1_4?Adv-Srch-Books-Submit.x=0&Adv-Srch-Books-Submit.y=0&dib=eyJ2IjoiMSJ9.QnyYJyDTA-UG-BU-Lk3MGwbH0xI1OIeuW23JlAfcpgovuUUYN0Mj92KPSSWc-6A5tT-MGLZkDoq56xpj_GD7JneI0m3kvNVmrqMoHylHHBg6IXCseiHWtyAplK1osLV_X0yTzzIE7l-xRNqfhe92fk2pWtUG9uen1WLNUmeMlkLP0T3TAtF1vk6F0nRHmDjG1gdihbc2ywNKf1QiaTPFi-clnFl3__CmgzDpJNXsM9A.1BasiAwvIVNUc6ImydOq57hKXEgl5WOXDVk5r8taE7w&dib_tag=se&keywords=fine+arts+of+photography+Independent&qid=1794415302&s=books&sr=1-4&unfiltered=1",
    },
    {
      id: 2,
      title: "Photographic Artist's Guide: Obtaining Magical Results",
      author: "MG Stough",
      format: "Creative Photography & Techniques",
      image: "/Fine Arts/Fine Arts2.jpg",
      amazonUrl:
        "https://www.amazon.com/Photographic-Artists-Guide-Photography-Professional-ebook/dp/B0HJP5WNNY/ref=sr_1_1?dib=eyJ2IjoiMSJ9.k9GvKbn4yLuP8IPTCNwEiEBMU2j0dqlEVF4aS9uipmfwnsFrPhUdgYesRd4uPm0RF1SN4fNq2MNg1jRNOh6Mu0RTVwsibiLDXMXIEl8nFVJB7dF9wQrzzPbaopl_0LX62pbwEdSRAGUyNUo82bv5zG5Uj4WzDy5wijvrBNS4ij-UVQxCCxrZofuuhlXgFPvpSPtz6Ymj6iOLgzULR3vC-oEkW_YSxxuXjQetDT_LD60.w3ijXKnOpKX_FYTI_Ys8t3LsDdKxKlxHTpUKlY74JmY&dib_tag=se&keywords=Photographic+Artists+Guide+Obtaining+Magical+Results+MG+Stough&nsdOptOutParam=true&qid=1794414970&sr=8-1",
    },
    {
      id: 3,
      title: "How to Play Erhu, the Chinese Violin: The Basic Skills",
      author: "H. H. Lee",
      format: "Music & Traditional Chinese Arts",
      image: "/Fine Arts/Fine Arts3.jpg",
      amazonUrl:
        "https://www.amazon.com/How-Play-Erhu-Chinese-Violin/dp/1520785550/ref=sr_1_1?dib=eyJ2IjoiMSJ9.xiBl6STIVxKtAHuZ0XE887mbkP6n_xte7k19ogZBH6QabmHYaBJz667JBFqvzhOF-zZ4uMtJcNjIi6dTO-rfe0w869R2gYpt4etoV35eIo0TvkHFRkqhRxPStm_3ssgKRYDNSp8fxtMjlaCiKfyjTLTtZfpMR59JMKWF9OeIzlD7lyAlm8rhux2yAjhDiWbcDr0bQToh4hiuIkzrDBUmrMKyEqhUkjK6JeAOURmZ-q0.GS5xjD88WB1jkHiL6EQL7uMxaKvHAPyrpQ1KKt6ZEak&dib_tag=se&keywords=How+to+Play+Erhu+the+Chinese+Violin+The+Basic+Skills+HH+Lee&nsdOptOutParam=true&qid=1794415008&sr=8-1",
    },
    {
      id: 4,
      title: "Fine Art",
      author: "Joe Bruce",
      format: "Fine Art & Photography",
      image: "/Fine Arts/Fine Arts4.jpg",
      amazonUrl:
        "https://www.amazon.com/Fine-Art-Joe-Bruce/dp/B0HP4Q1XJR/ref=sr_1_1?dib=eyJ2IjoiMSJ9.ThraOseEQQ6Jb5dzKtqvkXaFBpmu8o-tsrcRxnPdZTLGjHj071QN20LucGBJIEps.Lgo7jYQG_hjr2XcVGE6blsWI9thRWmrbUjEJU_XI3U0&dib_tag=se&keywords=Fine+Art+Joe+Bruce+book&qid=1794415035&sr=8-1",
    },
    {
      id: 5,
      title: "Landscape Photography from First Frame to Fine Art",
      author: "Melissa J. Frick",
      format: "Landscape Photography & Visual Storytelling",
      image: "/Fine Arts/Fine Arts5.jpg",
      amazonUrl:
        "https://www.amazon.com/Landscape-Photography-First-Frame-Fine/dp/B0HH8X1X44/ref=sr_1_1?dib=eyJ2IjoiMSJ9.Y0tmSV91jWeN9lP3nF1_cQ.IMMZy2iYPICNnD4zigkMs-eVnBPwMNOlDIgvl5luQ2E&dib_tag=se&keywords=9798170641475&qid=1794415057&sr=8-1",
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

          <span>Arts & Special Interests</span>

          <span>/</span>

          <span className="font-bold text-[#8c2d19]">
            Fine Arts & Photography
          </span>

        </nav>

        {/* PAGE HEADER */}

        <header className="bg-[#241a15] text-[#fbf8f2] border border-[#c29b38] px-6 py-6 mb-6">

          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">

            <div className="flex-1">

              <div className="flex items-center gap-2 text-[#c29b38] text-[11px] font-bold tracking-[0.15em] uppercase mb-2">

                <Palette size={16} />

                <span>
                  Photography, Visual Culture & Artistic Expression
                </span>

              </div>

              <h1 className="text-3xl sm:text-4xl font-bold leading-tight">
                Fine Arts & Photography
              </h1>

              <p className="text-[14px] text-[#cbb9a5] mt-2 max-w-2xl leading-relaxed">
                Discover thought-provoking works exploring
                photography, visual arts, artistic criticism,
                cultural expression, and the relationship
                between creativity, identity, and society.
                Explore compelling perspectives from
                influential writers, artists, and scholars.
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

                {/* AUTHOR */}

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
                      aria-label={`Find ${book.title} by ${book.author} on Amazon`}
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
