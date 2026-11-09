
import React from "react";
import { Link } from "react-router-dom";

// =====================================================
// BLUE BOOK - RARE COLLECTIBLES HOMEPAGE
// Images: Existing public folders
// No prices, hover effects, animations, or icons
// =====================================================

// SECTION 1 - GRAPHIC NOVELS & MANGA

const comicBooks = [
  {
    id: 1,
    entry: "COLLECTION 01",
    title: "Dungeon Crawler Carl: The Graphic Novel",
    author: "Matt Dinniman & Laurel Pursuit Studios",
    format: "Fantasy Graphic Novel",
    image: "/comics/comic1.webp",
    description:
      "An action-packed illustrated adaptation filled with dangerous dungeons, imaginative creatures, and extraordinary adventures.",
    amazonUrl:
        "https://www.amazon.com/Dungeon-Crawler-Carl-Graphic-Novel/dp/1638494819/ref=sr_1_1?dib=eyJ2IjoiMSJ9.SL6WKRpkjBvQ0YECnkBJ0vOwebbkbSzxV8bbfH02bGfKgOSPYCTLLNq9_CSbt4w00dHbasPaDSXqq8ZsMkobaG5Dpz5ZPoCoqH7JRjp5eGK2GgXY2ksrshKGCJDstOPhaTI1SReuviSJnUADkDtltLbK6NS7ZWdsc2Dw4WeKNW5_AVZQhP5SL7HaCFG6qR0r6p0Mm3PLS4cSeufFQpuUxRc63JLC9jywSif5aFeEULg.QF--rDTf_keYeHdGVhhg-u7Pc-TnhKduxGbRVXX_TO4&dib_tag=se&keywords=Dungeon+Crawler+Carl+Graphic+Novel+Matt+Dinniman&qid=1794009678&sr=8-1",
  },
  {
    id: 2,
    entry: "COLLECTION 02",
    title: "The Hobbit: A Graphic Novel",
    author: "J. R. R. Tolkien, Charles Dixon & David Wenzel",
    format: "Illustrated Fantasy Classic",
    image: "/comics/comic2.webp",
    description:
      "The beloved fantasy adventure brought to life through detailed illustrations and a carefully adapted graphic narrative.",
    amazonUrl:
        "https://www.amazon.com/Hobbit-Graphic-J-R-Tolkien-ebook/dp/B0CKT929N4",
  },
  {
    id: 3,
    entry: "COLLECTION 03",
    title: "Dungeon Crawler Carl, Vol. 1",
    author: "Matt Dinniman & Laurel Pursuit Studios",
    format: "LitRPG Graphic Adventure",
    image: "/comics/comic3.webp",
    description:
      "A visually striking graphic presentation of the Dungeon Crawler Carl universe, combining fantasy, action, and dark humor.",
    amazonUrl:
      "https://www.amazon.com/dp/1638493650",
  },
  {
    id: 4,
    entry: "COLLECTION 04",
    title: "Dog Man: A Sprinkle in Time",
    author: "Dav Pilkey",
    format: "Children's Graphic Novel",
    image: "/comics/comic4.jpg",
    description:
      "A lively illustrated adventure featuring the humor, imagination, and playful storytelling of the Dog Man series.",
    amazonUrl:
      "https://www.amazon.com/dp/1546199357",
  },
  {
    id: 5,
    entry: "COLLECTION 05",
    title: "One Piece: East Blue 1-2-3",
    author: "Eiichiro Oda",
    format: "Japanese Adventure Manga",
    image: "/comics/comic5.jpg",
    description:
      "Discover the beginning of Monkey D. Luffy's legendary pirate adventure in this collected manga edition.",
    amazonUrl:
      "https://www.amazon.com/dp/1421536250",
  },
];

// SECTION 2 - BIOGRAPHY & MEMOIR COLLECTION

const literaryBooks = [
  {
    id: 1,
    entry: "NO. 01",
    title: "Communion: Finding My Way Back to Faith",
    author: "J. D. Vance",
    format: "Faith & Personal Reflection",
    image: "/biography/biography1.webp",
    amazonUrl:
      "https://www.amazon.com/Communion-Finding-Way-Back-Faith/dp/B0GV215K27/ref=sr_1_1?dib=eyJ2IjoiMSJ9.EuDhw6NFu29hmMy04iqcsy_-X7Wu218xSfxdzvmuRWHTe8v-e9v2RdZ_maRErQy5qTbsiPv12F9mB_KDKyaqPE241rAoxFack_QfpnCmfEKOIpw6U1GjxdhLs-rBCQxmLkHIh5XlBgsg0nLZ8dlFioDVPsUimkBnqfhvRwI-RTfSyksI44ArEeJQvCTRVxmg.D1tkrt3EwUzTkwFeTuerCeDlY3LwhhBOhot7t1jYQGQ&dib_tag=se&keywords=Communion+Finding+My+Way+Back+to+Faith+JD+Vance&nsdOptOutParam=true&qid=1794240253&sr=8-1",
  },
  {
    id: 2,
    entry: "NO. 02",
    title: "Hillbilly Elegy",
    author: "J. D. Vance",
    format: "Family & Cultural Memoir",
    image: "/biography/biography2.webp",
    amazonUrl: "https://www.amazon.com/dp/0062300555",
  },
  {
    id: 3,
    entry: "NO. 03",
    title: "Uniting the States",
    author: "Brian Kilmeade",
    format: "American Historical Nonfiction",
    image: "/biography/biography3.webp",
    amazonUrl:
      "https://www.amazon.com/Uniting-States-American-Revolutionary-Democracy/dp/006349003X/ref=sr_1_1?dib=eyJ2IjoiMSJ9.VUL6rVMNndPZgC9A0Cx3NdWzSiMB9ZULkxXlK_xfE9R_haD0XdwA_cIVuFp_1_XVlNOEbMBwIP5YztsGi1nPGluS4f4RpbA87o9mwgckERcty68nsWWErtwQrd6v8AD6CD2q5-3RHhf1Rjs9ExySb4SLOGaqZLbNkg38LlAAGP6nqwudJhRNzGcG5daYOCOgFgWlRrysVzurR6CdITr9fLfKak71p8WfOqGXE3dCQg0.zYmx2XQIB1zR_ysUCFriqZRGfg8bim-rLN8PHwylP98&dib_tag=se&keywords=Uniting+the+States+Brian+Kilmeade&qid=1794240316&sr=8-1",
  },
  {
    id: 4,
    entry: "NO. 04",
    title: "The Case for America",
    author: "Bret Baier with Catherine Whitney",
    format: "American History & Commentary",
    image: "/biography/biography4.webp",
    amazonUrl:
      "https://www.amazon.com/Case-America-Argument-Thoughtful-Character/dp/0063360802/ref=sr_1_1?dib=eyJ2IjoiMSJ9.OZuMa0rP_6JI6HPybtfG6tmVg8T7-s-1Fa0Z8Atb9-ForZZudTOXia-UcyALE69fxg5Wt9aIlP4cee70eR09pho1umwRMTUjR-6jXA8HZ29LqEl3ZrXNZpzF0aqHbkxoVuGKCOUl4Fvt_K3IgsxRVtlNEmu9bjLd-4_Z9flm8S2INQ-7OHHfokA5u8S_DQqii_MzJ-2kULpsjFPlPtkJYTf7bEmuxcqdX-YXwKzgQqo.bBWmcBBH5uGGZJWQ_OhHDeTnlvIikmX8X6i3czpkMWg&dib_tag=se&keywords=The+Case+for+America+Bret+Baier&qid=1794240347&sr=8-1",
  },
  {
    id: 5,
    entry: "NO. 05",
    title: "The Steps: A Memoir",
    author: "Sylvester Stallone",
    format: "Celebrity Memoir",
    image: "/biography/biography5.jpg",
    amazonUrl:
      "https://www.amazon.com/Steps-Sylvester-Stallone/dp/0063443910/ref=sr_1_1?dib=eyJ2IjoiMSJ9.5U2pK08m48C1ciLTYs5j-z8IRvwLeQPSEJfBJZcaVqlnTmvu7h2zOnV8hJ3Aa7bzQDTJfWoNk4aIDcSJhUpwL11WTYl0cVOGxb1Pu2jkeABBZPtz5eItXJPi6O0xIsHpmgFc2xPLp_7C_zy7SnSixrJyHa8NQcR7i1ttRPKhUHObE_VRDzoTcANrXMnGrIvrhJSfpOh4B9Waq3MxULjnCmd19E9qbdb1eQl3pSRCOog.VLgdJmZMFiQSi9BMaJnDhMc6FFuAnLqluh7rrMzkxz0&dib_tag=se&keywords=The+Steps+A+Memoir+Sylvester+Stallone&qid=1794240373&sr=8-1",
  },
];

// REUSABLE AMAZON BUTTON
// No icons, hover styles, or animations

function ViewBookButton({ url, fullWidth = false }) {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className={`
        inline-flex items-center justify-center
        bg-[#241a15] text-[#fbf8f2]
        text-[11px] font-sans font-bold
        uppercase tracking-wider
        px-5 py-3 text-center
        rounded-none
        ${fullWidth ? "w-full" : ""}
      `}
    >
      View Book
    </a>
  );
}

// REUSABLE BOOK COVER

function BookCover({ image, title, author, className = "" }) {
  return (
    <div
      className={`
        bg-[#efe8db]
        border border-[#c7b8a3]
        p-2 overflow-hidden
        flex items-center justify-center
        ${className}
      `}
    >
      <img
        src={image}
        alt={`${title} by ${author}`}
        loading="lazy"
        className="w-full h-full object-contain"
      />
    </div>
  );
}

// MAIN COMPONENT

export default function RareCollectibles() {
  return (
    <section className="w-full bg-[#fbf8f2] text-[#241a15] font-serif">

      <div className="max-w-7xl mx-auto px-5 sm:px-6 py-12 md:py-16 flex flex-col gap-16">

        {/* ==========================================
            SECTION 1 - GRAPHIC NOVELS
        ========================================== */}

        <section>

          {/* HEADING */}

          <div className="bg-[#241a15] text-[#fbf8f2] p-6 sm:p-8 border-2 border-[#c29b38] mb-7">

            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">

              <div className="max-w-3xl">

                <p className="text-[#c29b38] text-[10px] font-sans font-bold uppercase tracking-[0.22em] mb-3">
                  Illustrated Literature Collection
                </p>

                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold leading-tight">
                  Graphic Novels & Illustrated Adventures
                </h2>

                <p className="text-sm text-[#d1c1ac] leading-7 mt-4">
                  Explore an engaging selection of graphic
                  storytelling, fantasy adaptations, Japanese
                  manga, and illustrated adventures. From
                  extraordinary fictional worlds to memorable
                  characters, discover books that bring stories
                  to life through visual imagination.
                </p>

              </div>

              <Link
                to="/graphic-novels-manga"
                className="shrink-0 border border-[#c29b38] text-[#f3d9a3] px-5 py-3 text-xs font-sans font-bold uppercase tracking-wide text-center"
              >
                Explore All Graphic Novels
              </Link>

            </div>

          </div>

          {/* FIVE COMIC CARDS */}

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5">

            {comicBooks.map((book) => (

              <article
                key={book.id}
                className="bg-[#fdfbf7] p-4 border-2 border-[#b8a68f] flex flex-col"
              >

                {/* COLLECTION NUMBER */}

                <div className="border-b border-[#e2d7c5] pb-3 mb-4">

                  <span className="text-[10px] font-sans font-bold text-[#8c2d19] tracking-widest">
                    {book.entry}
                  </span>

                </div>

                {/* IMAGE */}

                <BookCover
                  image={book.image}
                  title={book.title}
                  author={book.author}
                  className="w-full h-60 mb-5"
                />

                {/* DETAILS */}

                <div className="flex-1">

                  <span className="inline-block text-[9px] font-sans font-bold text-[#8c2d19] border border-[#c29b38] px-2 py-1 uppercase leading-4">
                    {book.format}
                  </span>

                  <h3 className="text-base font-bold text-[#241a15] mt-4 leading-snug">
                    {book.title}
                  </h3>

                  <p className="text-xs text-[#7a6452] italic mt-2 leading-5">
                    by {book.author}
                  </p>

                  <p className="text-xs text-[#5c4a3e] mt-4 leading-6">
                    {book.description}
                  </p>

                </div>

                {/* VIEW BOOK */}

                <div className="mt-6 pt-4 border-t border-[#e2d7c5]">

                  <ViewBookButton
                    url={book.amazonUrl}
                    fullWidth
                  />

                </div>

              </article>

            ))}

          </div>

        </section>

        {/* ==========================================
            SECTION 2 - COLLECTING GUIDES
        ========================================== */}

        <section className="bg-[#f4eee2] border-2 border-[#b8a68f] p-6 sm:p-9">

          <div className="border-b-2 border-[#d6c7b2] pb-5 mb-8">

            <p className="text-[#8c2d19] font-sans font-bold text-[10px] uppercase tracking-[0.22em] mb-3">
              The Collector's Library
            </p>

            <h2 className="text-2xl sm:text-3xl font-bold text-[#241a15]">
              Understanding Books & Collectible Editions
            </h2>

            <p className="text-sm text-[#6e5d50] leading-7 mt-4 max-w-3xl">
              Building a meaningful personal library begins
              with understanding the books themselves.
              Learn what makes different editions
              distinctive, how to assess book condition,
              and why bibliographic details matter
              to collectors and readers.
            </p>

          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10">

            {/* GUIDE 1 */}

            <article className="flex flex-col">

              <div className="flex items-start gap-5 flex-1">

                <BookCover
                  image="/fiction/fiction4.webp"
                  title="The Complete Novels of Jane Austen"
                  author="Jane Austen"
                  className="w-28 h-40 shrink-0"
                />

                <div>

                  <p className="text-[10px] font-sans font-bold uppercase tracking-wide text-[#8c2d19] mb-3">
                    Collector's Guide 01
                  </p>

                  <h3 className="text-xl font-bold leading-tight">
                    Understanding Special & Illustrated Editions
                  </h3>

                  <p className="text-xs sm:text-sm text-[#5c4a3e] mt-3 leading-7">
                    Illustrated and collected editions can
                    bring a distinctive character to a
                    personal library. Explore the importance
                    of publishers, binding styles, illustration,
                    typography, and edition details when
                    comparing different versions of a book.
                  </p>

                </div>

              </div>

              <div className="mt-6 border-t border-[#d6c7b2] pt-4">

                <Link
                  to="/literary-classic-fiction"
                  className="inline-block text-[#8c2d19] font-sans text-xs font-bold uppercase tracking-wide underline underline-offset-4"
                >
                  Explore Literary Editions
                </Link>

              </div>

            </article>

            {/* GUIDE 2 */}

            <article className="flex flex-col">

              <div className="flex items-start gap-5 flex-1">

                <BookCover
                  image="/poetry/poetry5.jpg"
                  title="The Oxford Book of English Verse"
                  author="Christopher Ricks"
                  className="w-28 h-40 shrink-0"
                />

                <div>

                  <p className="text-[10px] font-sans font-bold uppercase tracking-wide text-[#8c2d19] mb-3">
                    Collector's Guide 02
                  </p>

                  <h3 className="text-xl font-bold leading-tight">
                    Appreciating Literary Anthologies
                  </h3>

                  <p className="text-xs sm:text-sm text-[#5c4a3e] mt-3 leading-7">
                    A literary anthology gathers works
                    from different writers into a carefully
                    selected collection. Discover how
                    editorial choices, historical context,
                    and literary themes shape the character
                    of poetry and classic literature
                    collections.
                  </p>

                </div>

              </div>

              <div className="mt-6 border-t border-[#d6c7b2] pt-4">

                <Link
                  to="/poetry-fine-verse"
                  className="inline-block text-[#8c2d19] font-sans text-xs font-bold uppercase tracking-wide underline underline-offset-4"
                >
                  Explore Poetry Collections
                </Link>

              </div>

            </article>

          </div>

        </section>

        {/* ==========================================
            SECTION 3 - BIOGRAPHY & MEMOIR
        ========================================== */}

        <section>

          {/* HEADING */}

          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-5 border-b-2 border-[#b8a68f] pb-5 mb-8">

            <div className="max-w-3xl">

              <p className="text-[#8c2d19] font-sans font-bold text-[10px] uppercase tracking-[0.22em] mb-3">
                Lives, Legacies & Personal Journeys
              </p>

              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#241a15] leading-tight">
                Biographies, Memoirs & Remarkable Lives
              </h2>

              <p className="text-sm text-[#6e5d50] leading-7 mt-4">
                Step into the lives and experiences of
                notable public figures, authors, and
                individuals whose personal journeys offer
                insight into history, culture, ambition,
                identity, and the human experience.
              </p>

            </div>

            <Link
              to="/biography-memoir"
              className="text-xs font-sans font-bold text-[#8c2d19] underline underline-offset-4 shrink-0"
            >
              Explore Biography & Memoir
            </Link>

          </div>

          {/* FIRST TWO LARGE CARDS */}

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">

            {literaryBooks.slice(0, 2).map((book) => (

              <article
                key={book.id}
                className="bg-[#fdfbf7] border-2 border-[#b8a68f] p-5 flex flex-col sm:flex-row gap-6"
              >

                {/* IMAGE */}

                <BookCover
                  image={book.image}
                  title={book.title}
                  author={book.author}
                  className="w-36 h-52 shrink-0 mx-auto sm:mx-0"
                />

                {/* INFORMATION */}

                <div className="flex-1 flex flex-col">

                  <div className="flex-1">

                    <span className="text-[10px] text-[#8c2d19] font-sans font-bold uppercase tracking-widest">
                      {book.entry}
                    </span>

                    <div className="mt-4">

                      <span className="inline-block text-[9px] font-sans font-bold uppercase text-[#8c2d19] border border-[#c29b38] px-2 py-1">
                        {book.format}
                      </span>

                    </div>

                    <h3 className="text-xl font-bold text-[#241a15] mt-4 leading-tight">
                      {book.title}
                    </h3>

                    <p className="text-sm text-[#7a6452] italic mt-2">
                      by {book.author}
                    </p>

                  </div>

                  {/* VIEW BOOK */}

                  <div className="mt-6 pt-4 border-t border-[#e2d7c5]">

                    <ViewBookButton url={book.amazonUrl} />

                  </div>

                </div>

              </article>

            ))}

          </div>

          {/* THREE SMALLER CARDS */}

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

            {literaryBooks.slice(2, 5).map((book) => (

              <article
                key={book.id}
                className="bg-[#fdfbf7] border-2 border-[#b8a68f] p-5 flex flex-col"
              >

                <div className="flex items-center justify-between border-b border-[#e2d7c5] pb-3 mb-5">

                  <span className="text-[10px] font-sans font-bold text-[#8c2d19] tracking-widest">
                    {book.entry}
                  </span>

                  <span className="text-[10px] font-sans uppercase text-[#8f8174]">
                    Featured Reading
                  </span>

                </div>

                {/* IMAGE */}

                <BookCover
                  image={book.image}
                  title={book.title}
                  author={book.author}
                  className="w-full h-52 mb-5"
                />

                <div className="flex-1">

                  <span className="inline-block text-[9px] font-sans font-bold uppercase text-[#8c2d19] border border-[#c29b38] px-2 py-1">
                    {book.format}
                  </span>

                  <h3 className="text-lg font-bold text-[#241a15] mt-4 leading-snug">
                    {book.title}
                  </h3>

                  <p className="text-sm text-[#7a6452] italic mt-2">
                    by {book.author}
                  </p>

                </div>

                {/* VIEW BOOK */}

                <div className="mt-6 pt-4 border-t border-[#e2d7c5]">

                  <ViewBookButton
                    url={book.amazonUrl}
                    fullWidth
                  />

                </div>

              </article>

            ))}

          </div>

        </section>

        {/* ==========================================
            SECTION 4 - LITERARY HERITAGE
        ========================================== */}

        <section className="grid grid-cols-1 md:grid-cols-2 gap-6">

          {/* LITERARY COLLECTIONS */}

          <article className="bg-[#fdfbf7] border-2 border-[#b8a68f] p-6">

            <div className="flex flex-col sm:flex-row gap-5">

              <BookCover
                image="/fiction/fiction2.webp"
                title="A Tree Grows in Brooklyn"
                author="Betty Smith"
                className="w-28 h-36 shrink-0"
              />

              <div>

                <p className="text-[10px] font-sans uppercase tracking-widest font-bold text-[#8c2d19] mb-2">
                  Literary Heritage
                </p>

                <h3 className="text-lg font-bold text-[#241a15]">
                  Discover Timeless Literature
                </h3>

                <p className="text-xs text-[#5c4a3e] mt-3 leading-6">
                  Explore enduring novels, unforgettable
                  stories, and influential works that
                  continue to inspire readers through
                  their characters, language, and themes.
                </p>

                <Link
                  to="/literary-classic-fiction"
                  className="inline-block mt-4 text-xs font-sans font-bold text-[#8c2d19] underline underline-offset-4"
                >
                  Browse Literary Classics
                </Link>

              </div>

            </div>

          </article>

          {/* POETRY COLLECTIONS */}

          <article className="bg-[#fdfbf7] border-2 border-[#b8a68f] p-6">

            <div className="flex flex-col sm:flex-row gap-5">

              <BookCover
                image="/poetry/poetry1.webp"
                title="The Universe in Verse"
                author="Maria Popova"
                className="w-28 h-36 shrink-0"
              />

              <div>

                <p className="text-[10px] font-sans uppercase tracking-widest font-bold text-[#8c2d19] mb-2">
                  Poetry & Literary Expression
                </p>

                <h3 className="text-lg font-bold text-[#241a15]">
                  The Beauty of Poetry & Fine Verse
                </h3>

                <p className="text-xs text-[#5c4a3e] mt-3 leading-6">
                  Discover poetic works and thoughtfully
                  assembled anthologies exploring human
                  emotion, nature, imagination, faith,
                  and the enduring power of language.
                </p>

                <Link
                  to="/poetry-fine-verse"
                  className="inline-block mt-4 text-xs font-sans font-bold text-[#8c2d19] underline underline-offset-4"
                >
                  Browse Poetry Collections
                </Link>

              </div>

            </div>

          </article>

        </section>

      </div>

    </section>
  );
}
