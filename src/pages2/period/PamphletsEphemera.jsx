
import React from "react";
import { Link } from "react-router-dom";
import {
  ArrowLeft,
  BookOpen,
  ArrowUpRight,
} from "lucide-react";

export default function PamphletsEphemera() {
  // Book images: public/Pamphlets/
  // Prices removed
  // Amazon search links
  // No hover effects or animations

  const books = [
  {
    id: 1,
    title: "Lizzie Borden: A Victorian True Crime Ephemera Collection",
    author: "Luma Paper Studio",
    format: "Victorian True Crime & Ephemera",
    image: "/Pamphlets/Pamphlets1.webp",
    amazonUrl:
      "https://www.amazon.com/Lizzie-Borden-Victorian-Ephemera-Collection/dp/B0HLDPQL35/ref=sr_1_1?dib=eyJ2IjoiMSJ9.ELDR2BoQOoA14V5rRCO9YpPT1WhOOC6F9G1igAw16Z4Vvyk5QlOQB-PKpFxLrwUZyT1p0ptCew8zfrocWJdVbHp7zE5N2iUpjCJQ2EB0wtdKHjwCI8M_FGSBUzRGDLT983MV8KW-u84gNPZYmu841bGu3jUKxKTcP2FM3WrvFliISpZigpCKQ79WCtV5q5pLbtavX_7oz2bC7hIcyepNlxT6Crk41n5ycQnau4u32L8.9upKWHi4P5kKMsI0hfxCzVC66rIzYivLxsoEFMRW4qc&dib_tag=se&keywords=Lizzie+Borden+A+Victorian+True+Crime+Ephemera+Collection&nsdOptOutParam=true&qid=1794252102&sr=8-1",
  },
  {
    id: 2,
    title: "Loads of Ephemera! An Unforgettable Vintage Sticker Book",
    author: "Peter Pauper Press",
    format: "Vintage Stickers & Paper Collectibles",
    image: "/Pamphlets/Pamphlets2.webp",
    amazonUrl:
      "https://www.amazon.com/Loads-Ephemera-Sticker-Book-stickers/dp/1441338357/ref=sr_1_1?dib=eyJ2IjoiMSJ9.kjEaidjLgPCNcRQnHvByYt8UD_2-JBP2vsaDDr0ly-Q0_wcG277kADl323mX6s-Zki2KddHx92FC_5hnsTnWO20GEJBJ-GRjdEAeilFEa4CKScxlvh7QqbhEa-_bZVEjAgBrhe9niFV3s2o2Xq_IgLQOXH6T4DXxp0MRfXPKBSrojqwEEVsTX0NfbZHJlGIBdvaXWijWuBm27z8TMRB71sDa51qX63vCZbL-SRU844g.j4pDyIvGW78J4hoPZTSJXHe1aRuwRfc7T3jgomIuPrA&dib_tag=se&keywords=Loads+of+Ephemera+An+Unforgettable+Vintage+Sticker+Book&nsdOptOutParam=true&qid=1794252135&sr=8-1",
  },
  {
    id: 3,
    title: "Bibliophilia Ephemera: An Extraordinary Compendium of Literary Stickers",
    author: "Peter Pauper Press",
    format: "Literary Stickers & Bookish Ephemera",
    image: "/Pamphlets/Pamphlets3.webp",
    amazonUrl:
      "https://www.amazon.com/Bibliophelia-Ephemera-Sticker-Book-stickers/dp/1441342052/ref=sr_1_2?dib=eyJ2IjoiMSJ9.CcJQWWojcDOXSa_LaQJNdWH2AWsQnV3OZaO9LBMLBRlB-hkCwrkpZhPWqwmMU9LxGKXYuts7UqbGiMoGlHWv5PrqOez1HJYdOYNH1rt3aQFkgnCH5bSIdDlSyoXhVHzoUaUrmm5QLjD84Krs-9mJ0YN0Y7L6ElHb8ujLTX_vXhLXFaOy0jRDNXHA9ctntyLex3v2pMXTg2saxSX7WjrHPuYkCkWJVQadMrN60lh0c_8.p6opxkebwxSiHqvOZBtXmQu85xUzIjGUkx5ktAi5zbQ&dib_tag=se&keywords=Bibliophilia+Ephemera+Literary+Stickers&qid=1794252157&sr=8-2",
  },
  {
    id: 4,
    title: "Cut & Collage: Vintage Ephemera 1950s",
    author: "Lily Wood",
    format: "1950s Vintage Collage & Ephemera",
    image: "/Pamphlets/Pamphlets4.jpg",
    amazonUrl:
      "https://www.amazon.com/Collage-Vintage-People-Objects-Ephemera/dp/B0D14JJG19/ref=sr_1_4?dib=eyJ2IjoiMSJ9.WGr8ZpwZAJkWE6J8zOai-JhIFkGnWxg_u4EASJFLZSkmuoGvMtmDRC-wW82eIJ6TZx_hSzVw5YuJqDOzGHpCB6cNc0HPWMUWa67_0J25B6oFRRZ3VRMqW0CaA5HHmLK39R0GbeJuEH3DQ1Gtd4yIeS9tOnyl4nmKocfPpkk-hEo7Icrbm-AH8NDffM3XJn8FCls-XnKktiw9CVQSS6Cb_k7xmgkfgkrj9YS8Bi7gH2k.ANeeiILvdqJw-ZRm3BwhoHN484w39raMJJemgPdW7Kw&dib_tag=se&keywords=Cut+Collage+Vintage+Ephemera+1950s+200+Images&qid=1794252188&sr=8-4",
  },
  {
    id: 5,
    title: "Cut & Create: Cozy Corner Houses",
    author: "Nova Everhart Ephemera Art",
    format: "Cozy Houses & Art Journaling",
    image: "/Pamphlets/Pamphlets5.jpg",
    amazonUrl:
      "https://www.amazon.com/Vintage-Corner-Ephemera-Journaling-Scrapbooking/dp/B0DY7MGF4Q/ref=sr_1_1?dib=eyJ2IjoiMSJ9.SscRQfldtA_-YRUuFxCaOsnzZvH6kD-jvF6OCVloeEa53ubarlRFlSWHjrL1Xy3j0OvpXeFeh-vGbie6oUFfqiTX6mFW5KdVQHbpBJdXz5SvFSkkpB7f2muFmT84KSx7DQ-15aUe4z5pIiAKcRmpH52ft1vPCG0f6m1Ea_SbxhXgdD6o_pvLGrFhbeX84CF4JFntIDyO3ezW7em8hZkw1Q0ANdpupyl3dcfDxVXu3pY.3_Suez6i_Vml4J3nXZBY4vcOXc8xV1arV1K6EGoQ2gU&dib_tag=se&keywords=Cut+Create+Cozy+Corner+Houses+Ephemera&qid=1794252244&sr=8-1",
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
          <span>Period Treasures</span>
          <span>/</span>

          <span className="text-[#8c2d19] font-bold">
            Pamphlets & Ephemera
          </span>
        </div>

        {/* PAGE HEADER */}

        <div className="bg-[#241a15] text-[#fbf8f2] p-8 border-2 border-[#c29b38] shadow-md mb-10 text-center sm:text-left flex flex-col sm:flex-row justify-between items-center gap-6">
          <div>
            <div className="text-[#c29b38] text-[10px] tracking-[0.3em] uppercase font-sans font-bold mb-2">
              Vintage Paper Collectibles & Literary Treasures
            </div>

            <h1 className="text-3xl sm:text-4xl font-bold font-serif">
              Pamphlets & Ephemera
            </h1>

            <p className="text-xs text-[#b8a68f] mt-2 max-w-xl font-serif italic leading-relaxed">
              Discover a charming collection of vintage
              ephemera, historic paper treasures, literary
              stickers, Victorian-inspired illustrations,
              and decorative collage materials. Explore
              nostalgic designs, 1950s imagery, bookish
              collectibles, and creative paper collections
              that bring the beauty of the past into
              modern art journaling and storytelling.
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
                  alt={book.title}
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

                {/* AUTHOR / PUBLISHER */}

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
