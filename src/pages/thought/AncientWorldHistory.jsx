
import React from "react";
import { Link } from "react-router-dom";
import {
  Landmark,
  ArrowLeft,
  ArrowUpRight,
  BookOpen,
} from "lucide-react";

export default function AncientWorldHistory() {

  // ==========================================
  // ANCIENT & WORLD HISTORY
  // Images: public/ancient/
  // Correct book titles and authors
  // No prices
  // Amazon links included
  // ==========================================

  const books = [
    {
      id: 1,
      title: "World Civilizations and Cultures, Grades 5–8",
      author: "Don Blattner",
      format: "World Civilizations",
      image: "/ancient/ancient1.webp",
      amazonUrl:
        "https://www.amazon.com/World-Civilizations-Cultures-Grades-History/dp/1580376347/ref=sr_1_1?dib=eyJ2IjoiMSJ9.Qhn3B0mRfXZT4iF_Nrj7_A.-dVrx8LxVsoldWMZeMoh0Iw4mDaI2DdbHOStKPx-FNE&dib_tag=se&keywords=9781580376341&qid=1794011418&sr=8-1",
    },
    {
      id: 2,
      title: "Ancient History: History of the Ancient World",
      author: "Robert Dean",
      format: "Ancient Empires & History",
      image: "/ancient/ancient2.webp",
      amazonUrl:
        "https://www.amazon.com/Ancient-History-Civilizations-Empires-Mythology-ebook/dp/B01M4FR8V3/ref=sr_1_1?dib=eyJ2IjoiMSJ9.cFoHyLd9GKGUc2UKvrXsTfnL_H2zXu_dITxc33hvXb8R1OsKKpUUoepxe-woYvddEL9BlXWLdr5ozOiWBRTGN1h8YK_1vTHuVMjWxfGFxbPqpMpi-aFl4AxbibAcoNjsQe2hIDpfo73T_ss_LvL3qD1DHKcp8upin9p3YJ8PFtZgI4ksJFcfLtzqhd4rwIH_DPfd09SlrAxT6IQyX40ojrkPwckEbFj9_a2TK5vOLgI.OJ7V4vjmWoeyW-5ptw22FH_q0PJArz5SiV2xcIt-wE0&dib_tag=se&keywords=Ancient+History+Robert+Dean&qid=1794011519&sr=8-1",
    },
    {
      id: 3,
      title: "The History of the Ancient World",
      author: "Susan Wise Bauer",
      format: "Ancient World History",
      image: "/ancient/ancient3.jpeg",
      amazonUrl:
        "https://www.amazon.com/History-of-Ancient-World-audiobook/dp/B00D1YRUL4/ref=sr_1_1?crid=3EPI0NXZOZ7V1&dib=eyJ2IjoiMSJ9.7Mq_q3Zw-P7f7trh7KcllX-Q7NHeFzmim0htNg2UrOB23Dx3hsczwcoU-nQ2qX3VsoNyY48D-JeRpE4dh5rrYSujl0Am2oqAZxEtdHsFZ5YQ7a7dFoTkmv2ziw-zZjK4etu0M_ZVmpLxJ8J69TX_sfzE5gaWlsmkvZQ_riyyULNLWBeQRpb3rcI1AFpmq5atOnNPZqTWtEQcpM3uakWI-E79KnM9ep4yu_Ha7NtRwt0.Xn-euieZ25YJy28jaNpYBGRFPjZKAttKbuuILa2HBic&dib_tag=se&keywords=THE+HISTORY+OF+THE+ANCIENT+WORLD+BOOKS&qid=1794012308&s=audible&sprefix=the+history+of+the+ancient+world+books%2Caudible%2C444&sr=1-1",
    },
    {
      id: 4,
      title: "History: The Ancient Civilizations That Defined World History",
      author: "Roman Collins",
      format: "World Civilizations",
      image: "/ancient/ancient4.jpg",
      amazonUrl:
        "https://www.amazon.com/History-Ancient-Civilizations-Defined-World-ebook/dp/B01AYRJRCK/ref=sr_1_1?dib=eyJ2IjoiMSJ9.7wKnZGghuhT1wmjty065Hg.LxLpasS5gl_SeAtAV1oIcozoFnELq3uifqBCoiXDujA&dib_tag=se&keywords=9781540668974&qid=1794011705&sr=8-1",
    },
    {
      id: 5,
      title: "Ancient Civilizations of the World: An Encyclopedia for Students & Knowledge Seekers",
      author: "U K Tripathi",
      format: "Ancient Civilizations",
      image: "/ancient/ancient5.jpg",
      amazonUrl:
        "https://www.amazon.com/ANCIENT-CIVILIZATIONS-WORLD-Encyclopedia-Knowledge-ebook/dp/B0HFNDLBLK/ref=sr_1_1?dib=eyJ2IjoiMSJ9.1wX92iYc9ftGNR_m5Kee_A.8bT1wkX1hs_ATTPNCZjhBgNw6n1qWxaGItLmS3tuBqg&dib_tag=se&keywords=9798193447665&qid=1794011774&sr=8-1",
    },
  ];

  return (
    <div className="w-full min-h-screen bg-[#fbf8f2] text-[#2c241e] font-serif py-10 px-6">

      <div className="max-w-7xl mx-auto">

        {/* ======================================
            BREADCRUMB NAVIGATION
        ====================================== */}

        <div className="flex flex-wrap items-center gap-2 text-xs font-sans text-[#7a6452] mb-6">

          <Link
            to="/"
            className="hover:text-[#8c2d19] hover:underline flex items-center gap-1"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            Back to Home
          </Link>

          <span>/</span>
          <span>Thought & Science</span>
          <span>/</span>

          <span className="text-[#8c2d19] font-bold">
            Ancient & World History
          </span>

        </div>

        {/* ======================================
            PAGE HEADER
        ====================================== */}

        <div className="bg-[#241a15] text-[#fbf8f2] p-8 border-2 border-[#c29b38] shadow-md mb-10 text-center sm:text-left flex flex-col sm:flex-row justify-between items-center gap-6">

          <div>

            <div className="flex items-center justify-center sm:justify-start gap-2 text-[#c29b38] text-[10px] tracking-[0.3em] uppercase font-sans font-bold mb-2">

              <Landmark className="w-4 h-4" />

              <span>
                Civilizations, Empires & World Heritage
              </span>

            </div>

            <h1 className="text-3xl sm:text-4xl font-bold font-serif">
              Ancient & World History
            </h1>

            <p className="text-xs text-[#b8a68f] mt-2 max-w-xl font-serif italic leading-relaxed">
              Explore fascinating ancient civilizations,
              powerful empires, historical discoveries,
              and the cultural achievements that shaped
              human history across centuries.
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

        {/* ======================================
            BOOK COLLECTION GRID
        ====================================== */}

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">

          {books.map((book) => (

            <div
              key={book.id}
              className="bg-[#fdfbf7] p-4 border-2 border-[#b8a68f] shadow-sm flex flex-col hover:border-[#8c2d19]"
            >

              {/* BOOK COVER */}

              <div className="w-full h-64 bg-[#efe8db] p-2 border border-[#c7b8a3] shadow-inner overflow-hidden mb-4 flex items-center justify-center">

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
                      className="w-full bg-[#241a15] hover:bg-[#8c2d19] text-[#fbf8f2] text-xs font-sans font-bold py-3 px-4 uppercase tracking-wider flex items-center justify-center gap-2"
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

        {/* ======================================
            BOTTOM DIVIDER
        ====================================== */}

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
