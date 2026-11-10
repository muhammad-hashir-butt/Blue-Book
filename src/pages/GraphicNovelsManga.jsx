import React from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, ArrowUpRight, BookOpen } from "lucide-react";

export default function GraphicNovelsManga() {
  const books = [
    {
      id: 1,
      title: "Emmanuel Just Wants to Die",
      author: "Talhí Briones & Karina Briones",
      format: "Indie Graphic Novel",
      image: "/comics/comic1.jpg",
      amazonUrl:
        "https://www.amazon.com/Emmanuel-Just-Wants-Talhi-Briones-ebook/dp/B087WXM5T9/ref=sr_1_1?dib=eyJ2IjoiMSJ9.Zus_iJY3WVniE6VxEL1TAG49cB2s9bMpF7HGHsBq7MVqD3DxqxkIf2EsdpBTyEYU.uUzE0Ahsa3tyZBjjschkEAwcz1FYfKailQVv6R-MTS8&dib_tag=se&keywords=Emmanuel+Just+Wants+to+Die&qid=1794333891&sr=8-1",
    },
    {
      id: 2,
      title: "Cyber Fighter",
      author: "William Joseph Hill",
      format: "Sci-Fi Action Graphic Novel",
      image: "/comics/comic2.jpg",
      amazonUrl:
        "https://www.amazon.com/dp/B08ZL6X6W6",
    },
    {
      id: 3,
      title: "1Y1 Son 10",
      author: "Tech Books for Kids",
      format: "Children's Graphic Novel",
      image: "/comics/comic3.jpg",
      amazonUrl:
        "https://www.amazon.in/Makes-10-Teenagers-Understand-Different/dp/1974615286",
    },
    {
      id: 4,
      title: "Lilwickidz Book 2",
      author: "Lilwickidz",
      format: "Children's Comic Book",
      image: "/comics/comic4.jpg",
      amazonUrl:
        "https://www.amazon.in/Lilwickidz-Comic-2-Darrian-Sullivan-ebook/dp/B07LFNZ54S",
    },
    {
      id: 5,
      title: "The Demons of Angels: A Graphic Novel",
      author: "H.C. Gislason & Nick Romario",
      format: "Dark Graphic Novel",
      image: "/comics/comic5.jpg",
      amazonUrl:
        "https://www.amazon.co.uk/Demons-Angels-Graphic-Novel-ebook/dp/B07BCXKMRZ",
    },
  ];

  return (
    <div
      className="w-full min-h-screen bg-[#fbf8f2] text-[#241a15] px-4 sm:px-6 py-7"
      style={{ fontFamily: "Georgia, 'Times New Roman', serif" }}
    >
      <div className="max-w-7xl mx-auto">
        {/* BREADCRUMB */}
        <div className="flex flex-wrap items-center gap-2 text-xs text-[#7a6452] mb-5">
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
            Graphic Novels & Manga
          </span>
        </div>

        {/* PAGE HEADER */}
        <div className="bg-[#241a15] text-[#fbf8f2] border border-[#c29b38] px-6 py-6 mb-6">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div className="flex-1">
              <p className="text-[#c29b38] text-[11px] font-bold tracking-[0.15em] uppercase mb-2">
                Illustrated Adventures & Visual Storytelling
              </p>

              <h1 className="text-3xl sm:text-4xl font-bold leading-tight">
                Graphic Novels & Manga
              </h1>

              <p className="text-[14px] text-[#cbb9a5] mt-2 max-w-2xl leading-relaxed">
                Explore extraordinary graphic novels, illustrated adventures,
                manga titles, and imaginative visual storytelling brought to
                life through expressive artwork and compelling narratives.
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
        </div>

        {/* BOOK GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 items-stretch">
          {books.map((book) => (
            <div
              key={book.id}
              className="bg-[#fdfbf7] border border-[#b8a68f] p-3 flex flex-col h-full"
            >
              {/* BOOK IMAGE */}
              <div className="w-full h-60 bg-[#efe8db] border border-[#c7b8a3] p-2 flex items-center justify-center overflow-hidden">
                <img
                  src={book.image}
                  alt={`${book.title} by ${book.author}`}
                  loading="lazy"
                  className="w-full h-full object-contain"
                />
              </div>

              {/* BADGE */}
              <div className="mt-3">
                <span className="inline-block text-[10px] font-bold uppercase leading-snug text-[#8c2d19] border border-[#c29b38] px-2 py-1">
                  {book.format}
                </span>
              </div>

              {/* DETAILS */}
              <div className="flex flex-col flex-1 mt-2">
                <h2 className="text-[17px] font-bold text-[#241a15] leading-[1.25] min-h-[92px]">
                  {book.title}
                </h2>

                <p className="text-[13px] text-[#8a593f] italic mt-2 leading-snug min-h-[48px]">
                  by {book.author}
                </p>

                <div className="mt-auto pt-4">
                  <div className="border-t border-[#e2d7c5] pt-3">
                    <a
                      href={book.amazonUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full bg-[#241a15] text-[#fffaf4] text-[12px] font-bold py-3 px-3 uppercase tracking-wide flex items-center justify-center gap-2 no-underline"
                    >
                      <BookOpen size={15} />
                      View Book
                      <ArrowUpRight size={15} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* BOTTOM DIVIDER */}
        <div className="flex items-center gap-3 mt-9">
          <span className="h-px flex-1 bg-[#d6c7b2]" />
          <span className="text-[#8c7355] text-xs">♦ ♦ ♦</span>
          <span className="h-px flex-1 bg-[#d6c7b2]" />
        </div>
      </div>
    </div>
  );
}