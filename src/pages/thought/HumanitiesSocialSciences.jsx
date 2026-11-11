
import React from "react";
import { Link } from "react-router-dom";
import {
  BookOpen,
  ArrowLeft,
  ArrowUpRight,
} from "lucide-react";

export default function HumanitiesSocialSciences() {

  // ==========================================
  // HUMANITIES & SOCIAL SCIENCES
  // Images: public/humanities/
  // Correct cover titles and authors
  // No prices
  // Compact cards
  // No hover animations
  // ==========================================

  const books = [
    {
      id: 1,
      title: "What's Your Frequency?: Introducing the Four Frequencies of Humanity",
      author: "Dr. Philippe SHOCK Matthews ",
      format: "Science Fiction & Human Civilization",
      image: "/humanities/humanities1.jpg",
      amazonUrl:
        "https://www.amazon.com/Whats-Your-Frequency-Introducing-Frequencies-ebook/dp/B0HC4DLY8H/ref=sr_1_25?Adv-Srch-Books-Submit.x=0&Adv-Srch-Books-Submit.y=0&dib=eyJ2IjoiMSJ9.T8HCXOfCRsni1Ym6xoRIcKbjdHf8SZoOF2Uc6EywllGZIxfnx-KjOQ65mHKlYBFdYTu3thiePgc_CU9cQ9AT8dqz5JEiao0P-XkrP5UMGVMFNdshCRoKElKkF_3pbFb3Xto9QBu_f8jOmnZToP_0UAL7kOyJvvAJZCQpMvF5dBXOyRa6pQMfIBE45QSqcwMxYWn1x8YmY8qF9wh9pVr0exVN6YU8QuXvpYz4bFeh0hs.idcjj5hzQfy3oQzUmIt3cSHFhK-w5GXSqpfKago5xQY&dib_tag=se&keywords=humanities+and+social+science+independent&qid=1794413384&sr=8-25&unfiltered=1&xpid=lGKL7YlXfKjx3",
    },
    {
      id: 2,
      title: "Humanity in the Age of AI: What It Means to Be Human When Machines Can Think",
      author: "Dr. Sean Tobin ",
      format: "Science Fiction & Human Civilization",
      image: "/humanities/humanities2.jpg",
      amazonUrl:
        "https://www.amazon.com/Humanity-Age-AI-Means-Machines/dp/B0HK2KQ8HM/ref=sr_1_16?Adv-Srch-Books-Submit.x=0&Adv-Srch-Books-Submit.y=0&dib=eyJ2IjoiMSJ9.Yl91KJt3XACG65NRpmFQUze4fupQRu3T64pvNBDA6BoctS9Z_En2X0BGjsD5N1GjjQ0gF-qknGmM4QLEm_7-EelPnKzi8IVP4kX6HcVZD5wX6Y4jb6qjIkPLKHf2nTULaZE2z0snoz-Gla9N4Uo4WOjSrNEIFwBdXixLb6TRj1ycl9hIeIB-AnOBaOSujh8LeFxs7x9GeFdP4khHZ5e9DBUG6puQBdP7qQs-h43f0D4.uv_hUEK9t4yLBum83wU7eESQOeyG6x7gAUwc1sJVeWA&dib_tag=se&keywords=humanities+and+social+science+independent&qid=1794413209&s=books&sr=1-16&unfiltered=1",
    },
    {
      id: 3,
      title: "The Peopling of the World: A Journey from African Origins to Global Humanity",
      author: "Mario Arland",
      format: "Human Origins & World Migration",
      image: "/humanities/humanities3.jpg",
      amazonUrl:
        "https://www.amazon.com/Peopling-World-Journey-African-Humanity-ebook/dp/B0FP12JWKV/ref=sr_1_1?dib=eyJ2IjoiMSJ9.FGTaA-8xNWID4MJPCUmhMZuZgcDmSnHiRT16V6bJ4asHDgnJMqhM6djIFeQ7Xvdrg0HKfUPjGqmibfyBq8SoyYqQeFYmxkSJv2YOtbdPwIWutc8pVKqyf3S2iUMW4aY_pPn39m1J6hO2i3HmNDgEPGDz5VJhk9L0wVy700OYnGCC_SI0s9uQI33wOJ8RGRe9.tKAIq7rXY6xdfqhwwBOnmt1r5xkuskFvZ4dRdkIIVi4&dib_tag=se&keywords=The+Peopling+of+the+World+Mario+Arland&qid=1794412780&sr=8-1",
    },
    {
      id: 4,
      title: "The Secret Power of Humanity: A New World Model for Human Transformation, Unity, Peaceful Prosperity and Sustainable Development",
      author: "Ijigban Daniel Oketa",
      format: "Human Development & Social Transformation",
      image: "/humanities/humanities4.jpg",
      amazonUrl:
        "https://www.amazon.com/SECRET-POWER-HUMANITY-Transformation-Sustainable-ebook/dp/B0CTHR59Q4/ref=sr_1_1?dib=eyJ2IjoiMSJ9.dTq--5oDmeA7fKLyzTLUQg.qjUnLoUU8elT6NlRSDoKyh6ttgAlN9705icWoJDd7nM&dib_tag=se&keywords=9798882835414&qid=1794412810&sr=8-1",
    },
    {
      id: 5,
      title: "Intelligence Evolved: The Algorithm Upgraded",
      author: "Glenn Anthony Vaags",
      format: "Artificial Intelligence & Society",
      image: "/humanities/humanities5.jpg",
      amazonUrl:
        "https://www.amazon.com/Intelligence-Evolved-Algorithm-Upgraded-Singularity-ebook/dp/B0DTGQCQXX/ref=sr_1_1?dib=eyJ2IjoiMSJ9.UQZJakXehF_sgNe8kekcLA.q9r5ogZ4c_f0fT5JzIN1ALsrDjReQhVC0Tq7Rc9aGfU&dib_tag=se&keywords=9798307570326&qid=1794412831&sr=8-1",
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
          <span>Thought & Science</span>
          <span>/</span>

          <span className="font-bold text-[#8c2d19]">
            Humanities & Social Sciences
          </span>

        </nav>

        {/* PAGE HEADER */}

        <header className="bg-[#241a15] text-[#fbf8f2] border border-[#c29b38] px-6 py-6 mb-6">

          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">

            <div className="flex-1">

              <div className="flex items-center gap-2 text-[#c29b38] text-[11px] font-bold tracking-[0.15em] uppercase mb-2">

                <BookOpen size={16} />

                <span>
                  Society, Culture & Human Understanding
                </span>

              </div>

              <h1 className="text-3xl sm:text-4xl font-bold leading-tight">
                Humanities & Social Sciences
              </h1>

              <p className="text-[14px] text-[#cbb9a5] mt-2 max-w-2xl leading-relaxed">
                Explore influential works examining human
                civilization, digital society, artificial
                intelligence, economics, cultural change,
                environmental challenges, and the ideas
                shaping our modern world.
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
