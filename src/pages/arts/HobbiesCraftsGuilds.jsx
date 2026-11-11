
import React from "react";
import { Link } from "react-router-dom";
import {
  Scissors,
  ArrowLeft,
  BookOpen,
  ArrowUpRight,
} from "lucide-react";

export default function HobbiesCraftsGuilds() {

  // ==========================================
  // HOBBIES, CRAFTS & GUILDS
  // Images: public/Hobbies/
  // Actual titles matched to screenshots
  // All images: .jpg
  // No prices
  // Compact cards
  // Georgia font
  // No hover animations
  // ==========================================

  const books = [
    {
      id: 1,
      title: "Color Adventures: The Little Lantern Guild",
      author: "E. R. Tazwood",
      format: "Fantasy Coloring & Cozy Adventures",
      image: "/Hobbies/Hobbies1.jpg",
      amazonUrl:
        "https://www.amazon.com/Little-Lantern-Guild-Story-Writing-Adventures/dp/B0HNF16MR9/ref=sr_1_6?Adv-Srch-Books-Submit.x=0&Adv-Srch-Books-Submit.y=0&dib=eyJ2IjoiMSJ9.d8bdEQ7Wib77HtAHYRvmgX7oZrMEq5KTjMoXm5B9fdb0jrvvpHSgsGa5b1pvuZls592ptsv0UYTaEv5voK2Z2XvgbwQkGsXkbnfm6RdSL7IHKS40ygPATrcoP7H61DZ-hsceh1_0ZyJoxMx3SjIe7kcEG7wG3niqt3re7-UD_28uek4irdW7W8rx5eTR-S57zuBD1rUSO22ZxV1vaJRalW7PjLWPADyqZJmzsSzql38.wWWZ2o38IwxBiYH53c-xB9NwTt2AMaLsvYAJRB0Nv2k&dib_tag=se&keywords=hobbies+crafts+guilds+Independent&qid=1794418089&s=books&sr=1-6&unfiltered=1",
    },
    {
      id: 2,
      title: "Stitching Stories: Celebrating Our Heritage",
      author: "African American Quilt & Doll Guild",
      format: "Quilting, Doll Making & Cultural Heritage",
      image: "/Hobbies/Hobbies2.jpg",
      amazonUrl:
        "https://www.amazon.com/Stitching-Stories-Celebrating-Our-Heritage/dp/B0D2RTZ9M6/ref=sr_1_1?dib=eyJ2IjoiMSJ9.ASd0eLT66fOfbhANBWQEPw9ke4IC2C6lSaUnG-LR9FNoWeh20sOubYb3nH5Grth4mvKiztXXPbuQjvxhNkvn2tbAe9ObzewBnVl0smaO1cDDSNBTgpx-MD1ioYtKMIfc32D3mykgmPeaaR4ou-lOcpodyCaRudY-NlctIrNHzbcPqsBVaq0gDBStks4xtcOGZzFfvR0MXgHpH1PFNtbEDpFkBT8ZfwXzxkse_VW9QvM.99BvdtUhame1pqSECPOBsOaU63AWPeS5hEPGVDkgmwk&dib_tag=se&keywords=Stitching+Stories+Celebrating+Our+Heritage+Quilt+Doll+Guild&nsdOptOutParam=true&qid=1794417530&sr=8-1",
    },
    {
      id: 3,
      title: "Christmas at Home: 51 Vintage Scenes for Coloring",
      author: null,
      format: "Christmas Coloring & Seasonal Crafts",
      image: "/Hobbies/Hobbies3.jpg",
      amazonUrl:
        "https://www.amazon.com/Christmas-Home-Illustrated-Vintage-Coloring/dp/B0HR55YSRK/ref=sr_1_7?Adv-Srch-Books-Submit.x=0&Adv-Srch-Books-Submit.y=0&dib=eyJ2IjoiMSJ9.d8bdEQ7Wib77HtAHYRvmgX7oZrMEq5KTjMoXm5B9fdb0jrvvpHSgsGa5b1pvuZls592ptsv0UYTaEv5voK2Z2XvgbwQkGsXkbnfm6RdSL7IHKS40ygPATrcoP7H61DZ-hsceh1_0ZyJoxMx3SjIe7kcEG7wG3niqt3re7-UD_28uek4irdW7W8rx5eTR-S57zuBD1rUSO22ZxV1vaJRalW7PjLWPADyqZJmzsSzql38.wWWZ2o38IwxBiYH53c-xB9NwTt2AMaLsvYAJRB0Nv2k&dib_tag=se&keywords=hobbies+crafts+guilds+Independent&qid=1794418089&s=books&sr=1-7&unfiltered=1",
    },
    {
      id: 4,
      title: "Animal Adventurers Guild",
      author: "Spudbits",
      format: "Fantasy Animals & Creative Coloring",
      image: "/Hobbies/Hobbies4.jpg",
      amazonUrl:
        "https://www.amazon.com/Animal-Adventurers-Guild-Coloring-Costumes/dp/B0HKRWMP1Q/ref=sr_1_1?dib=eyJ2IjoiMSJ9.xOYqOyF-ee4ElrgLrQefHQ.XahHZpcuNgfUIFh5q6MNvxhQA3JdwxI3kmLB2PS3aS4&dib_tag=se&keywords=9798176503784&qid=1794417656&sr=8-1",
    },
    {
      id: 5,
      title: "Glowgarden Guild: A Cozy Coloring Adventure Through a Little World of Wonder",
      author: "Nikhil Singhal",
      format: "Cozy Coloring & Fantasy Gardens",
      image: "/Hobbies/Hobbies5.jpg",
      amazonUrl:
        "https://www.amazon.com/Glowgarden-Guild-Coloring-Adventure-Through/dp/B0HLTNTVK6/ref=sr_1_1?dib=eyJ2IjoiMSJ9.NQKzwv-MpMNdDJkNxnIXaw.GYR0Nn5PvE_J_IUNCbRHSI_KCRWhymHXhN3EqftejXw&dib_tag=se&keywords=Glowgarden+Guild+Nikhil+Singhal&qid=1794417708&sr=8-1",
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
            Hobbies, Crafts & Guilds
          </span>

        </nav>

        {/* PAGE HEADER */}

        <header className="bg-[#241a15] text-[#fbf8f2] border border-[#c29b38] px-6 py-6 mb-6">

          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">

            <div className="flex-1">

              <div className="flex items-center gap-2 text-[#c29b38] text-[11px] font-bold tracking-[0.15em] uppercase mb-2">

                <Scissors size={16} />

                <span>
                  Creative Hobbies & Handmade Traditions
                </span>

              </div>

              <h1 className="text-3xl sm:text-4xl font-bold leading-tight">
                Hobbies, Crafts & Guilds
              </h1>

              <p className="text-[14px] text-[#cbb9a5] mt-2 max-w-2xl leading-relaxed">
                Discover creative hobbies, inspiring
                coloring adventures, traditional quilting,
                handmade crafts, seasonal activities,
                and imaginative artistic projects.
                Explore books celebrating craftsmanship,
                cultural heritage, fantasy illustrations,
                and the joy of creative expression.
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
                  alt={
                    book.author
                      ? `${book.title} by ${book.author}`
                      : book.title
                  }
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

                {/* AUTHOR / ORGANIZATION */}

                {book.author && (
                  <p className="text-[13px] text-[#8a593f] italic mt-2 leading-snug">
                    {book.id === 2 ? "Published by " : "by "}
                    {book.author}
                  </p>
                )}

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
