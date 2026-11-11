
import React from "react";
import { Link } from "react-router-dom";
import {
  ArrowLeft,
  BookOpen,
  ArrowUpRight,
} from "lucide-react";

export default function ChildrensIllustrated() {

  // ==========================================
  // CHILDREN'S ILLUSTRATED
  // Images: public/Children/
  // All images: .jpg
  // Actual titles matched with covers
  // No prices
  // Compact cards
  // Georgia font
  // No hover animations
  // Amazon links included
  // ==========================================

  const books = [
    {
      id: 1,
      title: "I Need a Hug Too",
      author: "Shyhrete & Mergime Berisha",
      format: "Children's Emotional Learning",
      image: "/Children/Children1.jpg",
      amazonUrl:
        "https://www.amazon.com/Need-Hug-Too-Childrens-Understand/dp/B0BMX3GCQQ/ref=sr_1_1?dib=eyJ2IjoiMSJ9.GIT4H4eE8db-wcNNHDYh7g.LO6FPC7zk6bCAugjM-flUZ-S6PcnTp1osQ1O_FML_wo&dib_tag=se&keywords=9798365841772&qid=1794418990&sr=8-1",
    },
    {
      id: 2,
      title: "The Day I Felt Left Out",
      author: "Pagewell Co",
      format: "Children's Feelings & Inclusion",
      image: "/Children/Children2.jpg",
      amazonUrl:
        "https://www.amazon.com/Day-Felt-Left-Out-Understanding/dp/B0GD2B348X/ref=sr_1_1?dib=eyJ2IjoiMSJ9.nEUT4iZrpV4enyi6XsewqA.XlegYSbmppnYr6wX_TJgp94isaq1MCFC6j1n66Rj9zE&dib_tag=se&keywords=9798241794611&qid=1794419029&sr=8-1",
    },
    {
      id: 3,
      title: "Illustrating Children's Books",
      author: " Sylvia Gardner ",
      format: "Children's Book Illustration",
      image: "/Children/Children3.jpg",
      amazonUrl:
        "https://www.amazon.com/My-Jealousy-Goblin-Childrens-Confidence/dp/B0FNL9LQR6",
    },
    {
      id: 4,
      title: "Fix My Jealousy: An Interactive Feelings Book for Kids Ages 3–7",
      author: null,
      format: "Social Emotional Learning",
      image: "/Children/Children4.jpg",
      amazonUrl:
        "https://www.amazon.com.au/Fix-My-Jealousy-Interactive-Emotional/dp/B0GVZC62MM",
    },
    {
      id: 5,
      title: "I've Got You!",
      author: "Vicki Jones",
      illustrator: "Jon Foard",
      format: "Children's Illustrated & Emotional Support",
      image: "/Children/Children5.jpg",
      amazonUrl:
        "https://www.amazon.com/Ive-got-you-Vicki-Jones/dp/1036905918/ref=sr_1_1?dib=eyJ2IjoiMSJ9.OWOQl7gNcL43gUTt-B52yg.qHnmqoigTNeCoJ-zVPp7vUQjTAGe8fqpD6-SytjQdns&dib_tag=se&keywords=9781036905910&qid=1794419301&sr=8-1",
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
            Children's Illustrated
          </span>

        </nav>

        {/* PAGE HEADER */}

        <header className="bg-[#241a15] text-[#fbf8f2] border border-[#c29b38] px-6 py-6 mb-6">

          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">

            <div className="flex-1">

              <div className="text-[#c29b38] text-[11px] font-bold tracking-[0.15em] uppercase mb-2">
                Children's Stories, Feelings & Illustrations
              </div>

              <h1 className="text-3xl sm:text-4xl font-bold leading-tight">
                Children's Illustrated
              </h1>

              <p className="text-[14px] text-[#cbb9a5] mt-2 max-w-2xl leading-relaxed">
                Discover beautifully illustrated children's
                books exploring emotions, family relationships,
                friendship, inclusion, and personal growth.
                From heartwarming stories about love and
                belonging to interactive books about feelings,
                explore imaginative works that inspire
                young readers and encourage emotional
                understanding.
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

                {/* AUTHOR NAME */}

                {book.author && (
                  <p className="text-[13px] text-[#8a593f] italic mt-2 leading-snug">
                    by {book.author}
                  </p>
                )}

                {/* ILLUSTRATOR */}

                {book.illustrator && (
                  <p className="text-[12px] text-[#8a593f] italic mt-1 leading-snug">
                    Illustrated by {book.illustrator}
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
