
import React from "react";
import { Link } from "react-router-dom";
import {
  ArrowLeft,
  BookOpen,
  ArrowUpRight,
} from "lucide-react";

export default function NaturalHistoryAnimals() {

  // NATURAL HISTORY & ANIMALS
  // Images: public/Natural History & Animals/
  // Titles and authors matched with book covers
  // No prices or hover animations
  // Amazon search links

  const books = [
    {
      id: 1,
      title: "The Truth About Animals",
      author: "Lucy Cooke",
      format: "Wildlife Science & Animal Behavior",
      image: "/Natural History & Animals/Natural History & Animals1.webp",
      amazonUrl:
        "https://www.amazon.ca/Truth-About-Animals-Lovelorn-Wildlife/dp/0465094643",
    },
    {
      id: 2,
      title: "Romp! A Journey Through the Natural History of Otters and Why They Matter",
      author: "Heide Island",
      format: "Otters & Wildlife Conservation",
      image: "/Natural History & Animals/Natural History & Animals2.webp",
      amazonUrl:
        "hhttps://www.amazon.com/Romp-Journey-Through-Natural-History-ebook/dp/B0FK91T4LL/ref=sr_1_1?dib=eyJ2IjoiMSJ9.erA6s5RXewymwC8JLOhIjw.4smDAMyvG6PTgU4s4CcPIhZDoMSlxEHeJAsFh3KjE6s&dib_tag=se&keywords=Romp+Heide+Island+Otters&qid=1794253424&sr=8-1",
    },
    {
      id: 3,
      title: "Animals & Nature: Natural History",
      author: "DK ",
      format: "Hardcover",
      image: "/Natural History & Animals/Natural History & Animals3.jpg",
      amazonUrl:
        "https://www.amazon.com/Natural-History-DK/dp/0744035015/ref=sr_1_1?dib=eyJ2IjoiMSJ9.xFAk3MK9KsxUnlf5JlPwjCOq9rZnwZqJZsVof8E-e4HRJya0ZCLAit3qI-bHlcW-j3zH1zIAKFozUJIOvzoGlWV36n7mID7jJH34S0dvCc69GceA__0pTm-L2NQqJ0MmHngYShz7wWJrg70DXddbk8UhFS41AlucwWdRJR81REhCY3uxr3h9Ho4HHL6DUsDQSg9cv3Zhw2z8a7pJ0el8mAhD70pjTAxJWXZbOKoMDro.YQQhWdkcITQZbzvHaCh0g28AIKdm_Aga2sBKMZuoAQs&dib_tag=se&keywords=Animals+and+Nature+Natural+History&qid=1794253675&sr=8-1",
    },
    {
      id: 4,
      title: "An Immense World: How Animal Senses Reveal the Hidden Realms Around Us",
      author: "Ed Yong",
      format: "Animal Senses & Natural Science",
      image: "/Natural History & Animals/Natural History & Animals4.webp",
      amazonUrl:
        "https://www.amazon.com/Immense-World-Animal-Senses-Reveal/dp/0593133250/ref=sr_1_1?dib=eyJ2IjoiMSJ9.JyFJe8YLMAUe-4v76yY2x88nK8dRpsKZkcikz07d8cypLa9yOYyrmeaxUf-S6j0HbNZ3iu3dlfonujppxkkQfYdHjROWrzAHEvGOLSAf8xpSZaLW_9cCc5Vto1Va2OfDnsgxhLkVV3s2luwtJKr5yBoFevD6BCzRqMRs-_O6PKgAjqezfo8sK8sSL8jMOQBShKWbaCnSsggmuVGtP-hfvoEd_oEJnt6ecM1-LflPti0.RUJIYEnHcny--h49IbuC9ouvlJ_vEgaz55GVEnsnh8c&dib_tag=se&keywords=An+Immense+World+Ed+Yong&qid=1794253903&sr=8-1",
    },
    {
      id: 5,
      title: "The Rise and Fall of the Dinosaurs: A New History of a Lost World",
      author: "Steve Brusatte",
      format: "Dinosaurs & Prehistoric Life",
      image: "/Natural History & Animals/Natural History & Animals5.jpg",
      amazonUrl:
        "https://www.amazon.com/Rise-Fall-Dinosaurs-History-Their/dp/0062490435/ref=sr_1_1?dib=eyJ2IjoiMSJ9.fDC-j8WNGtYPNZHqv2bUcUhrh2oSLBYTP4ZvXnt8YILXs6ruR0SPuIcErwD5D4-2EchKLdASYvHTqS8Szbqhnzgx0_H6KtFJ9E7KLNcUnoBnFxdLGMSngw3iPdAeQK69NV61k9yL8L44qkpNPIFlELf--2fSWBzvlipvUx11jP41W8BYy8AdlmiKjGycR_sMYUr20OojOCHL3-GKaxKyl52NMQx7wA8C8mIK2uhic-Y.J8RxSKz_iMBiweMENyGH4V6mMYyqRMGx5fqgAVJXb-w&dib_tag=se&keywords=The+Rise+and+Fall+of+the+Dinosaurs+Steve+Brusatte&nsdOptOutParam=true&qid=1794253933&sr=8-1",
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
            Natural History & Animals
          </span>
        </div>

        {/* PAGE HEADER */}

        <div className="bg-[#241a15] text-[#fbf8f2] p-8 border-2 border-[#c29b38] shadow-md mb-10 text-center sm:text-left flex flex-col sm:flex-row justify-between items-center gap-6">

          <div>
            <div className="text-[#c29b38] text-[10px] tracking-[0.3em] uppercase font-sans font-bold mb-2">
              Wildlife, Animal Behavior & Natural Discoveries
            </div>

            <h1 className="text-3xl sm:text-4xl font-bold font-serif">
              Natural History & Animals
            </h1>

            <p className="text-xs text-[#b8a68f] mt-2 max-w-xl font-serif italic leading-relaxed">
              Explore the extraordinary diversity of
              the natural world through fascinating
              studies of wildlife, animal behavior,
              sensory perception, ecological history,
              and prehistoric life. Discover engaging
              works that reveal the remarkable lives
              of animals, the importance of conservation,
              and the evolutionary history of our planet.
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
                  alt={`${book.title}${book.author ? ` by ${book.author}` : ""}`}
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
