
import React from "react";
import { Link } from "react-router-dom";
import {
  ArrowLeft,
  BookOpen,
  ArrowUpRight,
} from "lucide-react";

export default function NineteenthCenturyLiterature() {

  // NINETEENTH-CENTURY LITERATURE
  // Images: public/Nineteenth/
  // Titles and contributors matched to covers
  // Prices removed
  // Amazon search links
  // No hover effects or animations

  const books = [
    {
      id: 1,
      title: "Bestsellers in Nineteenth-Century America",
      author: "Paul C. Gutjahr (Editor)",
      format: "American Literary History",
      image: "/Nineteenth/Nineteenth1.jpg",
      amazonUrl:
        "https://www.amazon.com/Bestsellers-Nineteenth-Century-America-Anthology-Anthem-ebook/dp/B01N3L9TKM/ref=sr_1_1?dib=eyJ2IjoiMSJ9.cqwNN58uAySekuNUyKccdtEUP9JDPPl9Kyn3InMKL-bGjHj071QN20LucGBJIEps.0m99y3ao7c__-ulT8WUatk1ug2epYzLQZdNplxFeFRU&dib_tag=se&keywords=Bestsellers+in+Nineteenth+Century+America+Paul+Gutjahr&qid=1794254626&sr=8-1",
    },
    {
      id: 2,
      title: "Nineteenth-Century Literature in Transition: The 1890s",
      author: "Dustin Friedman & Kristin Mahoney (Editors)",
      format: "Victorian Literature & The 1890s",
      image: "/Nineteenth/Nineteenth2.webp",
      amazonUrl:
        "https://www.amazon.com/Nineteenth-Century-Literature-Transition-Dustin-Friedman-ebook/dp/B0CCJW4D66/ref=sr_1_1?dib=eyJ2IjoiMSJ9.F5kuLcw4rfeswn029OEge-cnAz7JFIieqpUoBOIUr4i0JaWNTLjXtIJoGGPCQeM1HQAQKpOf_COMAsr05lxGc02pi4Ljsmr2oDD1z8LS0mchG_wUqoe8RQlLRLeYHhGPfvUoWl1I2XV64nTCpZlwWkDfIGfjmU2sxfzOscb2HAGqjHVYLZmvEaumYTDyjKJars4sidWChH37MkAQA-s_KYpii1ETDX4PuGf2PVCpDws.qDG0O_0Gnvf9Wjen1sXxVC1FemKF_X3t9inY-rzVWDc&dib_tag=se&keywords=Nineteenth+Century+Literature+in+Transition+The+1890s&qid=1794254650&sr=8-1",
    },
    {
      id: 3,
      title: "Literature and Science in the Nineteenth Century: An Anthology",
      author: "Laura Otis (Editor)",
      format: "Literature & Scientific History",
      image: "/Nineteenth/Nineteenth3.webp",
      amazonUrl:
        "https://www.amazon.com/Literature-Science-Nineteenth-Century-Anthology/dp/019955465X/ref=sr_1_1?dib=eyJ2IjoiMSJ9.lhv5ILTk9uukcJ-pYHCB4JCLXuyy7K8kYFJo5vhQI7GMWCelhNkg4U27gIE0q92hNvfYgaLcbe4YQa_AZZK9-kMR775YfF6MX3Snm5wVzky7vaq3IwGw-BEtT0j75N-EJOzkvrZaXes3FUz7Usz0irHDx8A-xV2mjLNiK2fNoljPbdYzMPsjzLlwx5kJWty7.Ub236Ck7bLzwnl8PtckLhg7XV6X8dHl8f5w9OFRylEU&dib_tag=se&keywords=Literature+and+Science+in+the+Nineteenth+Century+Laura+Otis&nsdOptOutParam=true&qid=1794254676&sr=8-1",
    },
    {
      id: 4,
      title: "England in the Nineteenth Century",
      author: "Elizabeth Wormeley Latimer",
      format: "Nineteenth-Century English History",
      image: "/Nineteenth/Nineteenth4.webp",
      amazonUrl:
        "https://www.amazon.com/England-Nineteenth-Century-Classic-Reprint-ebook/dp/B0F3G424DG/ref=sr_1_1?dib=eyJ2IjoiMSJ9.fOYuO7p_eNdMXG62kGwPjs7M3uhNX4dQ5lf5tz5iaIfdmcasP1iZN_JpRdcMYmgXBlXTGoB5rAcVUtP2Ifj3zZUrzoMb0qjYrWy-K2vhRIwUuSGOj5Z0o662IcJhsvcRVcBxkV9MwjbDPW1lhfrpP-hIpRfgwr3EO5dnWQwjOaW32PfrE1LHylMeCnCHm02mVaKQhHQnacYisHMWL6jatY83w0VvOtxZfzw9RwHf1_0.jRTXVKfnLM1mzjsGzt-sErUnir9SUhMZ3O_aeKD27mc&dib_tag=se&keywords=England+in+the+Nineteenth+Century+Elizabeth+Wormeley+Latimer&nsdOptOutParam=true&qid=1794254695&sr=8-1",
    },
    {
      id: 5,
      title: "Life and Literature in Nineteenth-Century England",
      author: "Joe Giampaolo",
      format: "English Literature & Cultural History",
      image: "/Nineteenth/Nineteenth5.jpg",
      amazonUrl:
        "https://www.amazon.com/Readers-Companion-Hampshire-Stories-Illustrated-ebook/dp/B09MT3Z8PP/ref=sr_1_1?dib=eyJ2IjoiMSJ9.M8jR7G9jaFjxEX-hgGPa-WbMcFCnMnIH_80vJGLznAPPxd6a-G-bddaO-QlBc2bVpzWPl-8cawK39_OSDUKrDdug9Iypu54k4hCoWxcwsWY8X5osEKkybeRyNGe-3YG9-u_ju3oCcIQd9sFTSj_LJGVNPZA2ZLvTDZ0Ur7MEZ73Z6rvORRPrZNdGPb0n2RtPuu31PoVMjIcGUKit2XrkLNGD4L4OoXV80TWk5Ijx7ow.08VJF_4OaATkAFikbRkWFAGXeP07p_cM8IGtOv5EV-8&dib_tag=se&keywords=Life+and+Literature+in+Nineteenth+Century+England+Joe+Giampaolo&nsdOptOutParam=true&qid=1794254719&sr=8-1",
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
            Nineteenth-Century Literature
          </span>

        </div>

        {/* PAGE HEADER */}

        <div className="bg-[#241a15] text-[#fbf8f2] p-8 border-2 border-[#c29b38] shadow-md mb-10 text-center sm:text-left flex flex-col sm:flex-row justify-between items-center gap-6">

          <div>

            <div className="text-[#c29b38] text-[10px] tracking-[0.3em] uppercase font-sans font-bold mb-2">
              Victorian Literature, Cultural History & Literary Scholarship
            </div>

            <h1 className="text-3xl sm:text-4xl font-bold font-serif">
              Nineteenth-Century Literature
            </h1>

            <p className="text-xs text-[#b8a68f] mt-2 max-w-xl font-serif italic leading-relaxed">
              Explore the rich literary and cultural
              heritage of the nineteenth century through
              influential American bestsellers, Victorian
              scholarship, historical accounts, and the
              relationship between literature and science.
              Discover distinguished collections that
              illuminate the intellectual movements,
              social transformations, and literary
              achievements of this remarkable era.
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

                <h3 className="text-base font-bold text-[#241a15] leading-snug line-clamp-4 min-h-[110px]">
                  {book.title}
                </h3>

                {/* AUTHOR / EDITOR NAME */}

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
