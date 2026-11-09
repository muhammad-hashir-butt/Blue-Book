
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
  // Correct titles and authors
  // No prices
  // Amazon links included
  // No hover animations
  // ==========================================

  const books = [
    {
      id: 1,
      title: "Documents and Dreams (Photography and Art)",
      author: "Marina Vaizey",
      format: "Photography & Art",
      image: "/Fine Arts/Fine Arts1.webp",
      amazonUrl:
        "https://www.amazon.com/Documents-Dreams-Photography-Cv-Visual-Research/dp/B073XTQKPL/ref=sr_1_1?dib=eyJ2IjoiMSJ9.lIp3yV72L6533KJk0uTZXflLC43Ikn-V8bnmrc2eZhOZwrqvdBQ23tPKH9RKTmlCnS1XYTbKJ1CthbaDBdM4niXzwWDLIPud3VizIYYviUZewxdEKRWjbKUSWUCFPqNI4t_77OVfyi1UJjwfTMPMoA.Y0WT5nnJ8ITZfSvASyCpSi4iCXTFaUbg-YZnCB4tFAo&dib_tag=se&keywords=Marina+Vaizey+Documents+and+Dreams+Photography+and+Art&nsdOptOutParam=true&qid=1794241760&sr=8-1",
    },
    {
      id: 2,
      title: "The Queer Art of Failure",
      author: "Jack Halberstam",
      format: "Visual Arts & Cultural Criticism",
      image: "/Fine Arts/Fine Arts2.jpg",
      amazonUrl:
        "https://www.amazon.com/The-Queer-Art-of-Failure-audiobook/dp/B07PB29273"
    },
    {
      id: 3,
      title: "The Art of Cruelty: A Reckoning",
      author: "Maggie Nelson",
      format: "Art Criticism & Aesthetics",
      image: "/Fine Arts/Fine Arts3.jpg",
      amazonUrl:
        "https://www.amazon.com/The-Art-of-Cruelty-Maggie-Nelson-audiobook/dp/B06WRR46HH",
    },
    {
      id: 4,
      title: "Photography and Art: Documents and Dreams",
      author: "Marina Vaizey & Anne Blood",
      format: "Photography & Art History",
      image: "/Fine Arts/Fine Arts4.jpg",
      amazonUrl:
        "https://www.amazon.com/Photography-Art-Documents-Dreams-Research/dp/B08Y5YS9L6/ref=sr_1_1?dib=eyJ2IjoiMSJ9.p_ze12nzkvTYm4AxzsuECe4UQP4wX9PlllLv1lK64FKa7EGNtcOWDEnlt47kUJ9Vhce8BKhJ62LG5uGsalou-Mr-CSv8FC5ch7lKE98FGLONi3lO8xe-D48MK3knNLWNrvLX3ZowgiX06If7wA5i9li-tZxZ_KIiA9hoF50Wamxfup4yqoY10v1wDkE678UtdRRDepV41paOjl-SuFrkDQfB5_pDm6CGdyyQFHTPSyA.W1DIXrUh165GxvST5OVhUZE3Q2oqzTdFkV36ZOq0HCE&dib_tag=se&keywords=Photography+and+Art+Documents+and+Dreams+Marina+Vaizey+Anne+Blood&nsdOptOutParam=true&qid=1794241918&sr=8-1",
    },
    {
      id: 5,
      title: "Eight Girls Taking Pictures",
      author: "Whitney Otto",
      format: "Photography & Literary Fiction",
      image: "/Fine Arts/Fine Arts5.jpg",
      amazonUrl:
        "https://www.amazon.com/Eight-Girls-Taking-Pictures-Novel/dp/B00A2BUQTW/ref=sr_1_1?dib=eyJ2IjoiMSJ9.uo5jDmcrIupIQRMPwr4aMJc176if8PdYUPOxdWo9RgM.6z1Dt8OmgFz5FbgBZnGZpT50SUTJQhI_0amObfDK6gM&dib_tag=se&keywords=Eight+Girls+Taking+Pictures+Whitney+Otto+Audiobook&qid=1794241945&sr=8-1",
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
            Fine Arts & Photography
          </span>

        </div>

        {/* PAGE HEADER */}

        <div className="bg-[#241a15] text-[#fbf8f2] p-8 border-2 border-[#c29b38] shadow-md mb-10 text-center sm:text-left flex flex-col sm:flex-row justify-between items-center gap-6">

          <div>

            <div className="flex items-center justify-center sm:justify-start gap-2 text-[#c29b38] text-[10px] tracking-[0.3em] uppercase font-sans font-bold mb-2">

              <Palette className="w-4 h-4" />

              <span>
                Photography, Visual Culture & Artistic Expression
              </span>

            </div>

            <h1 className="text-3xl sm:text-4xl font-bold font-serif">
              Fine Arts & Photography
            </h1>

            <p className="text-xs text-[#b8a68f] mt-2 max-w-xl font-serif italic leading-relaxed">
              Discover thought-provoking works exploring
              photography, visual arts, artistic criticism,
              cultural expression, and the relationship
              between creativity, identity, and society.
              Explore compelling perspectives from
              influential writers, artists, and scholars.
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

                <h3 className="text-base font-bold text-[#241a15] leading-snug line-clamp-4 min-h-[90px]">
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
                      aria-label={`View ${book.title} on Amazon`}
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
