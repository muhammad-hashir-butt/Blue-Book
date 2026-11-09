
import React from "react";
import { Link } from "react-router-dom";
import {
  ArrowLeft,
  BookOpen,
  ArrowUpRight,
  Disc,
} from "lucide-react";

export default function WaxCylindersRecordings() {

  // WAX CYLINDERS & RECORDINGS
  // Images: public/Wax Cylinders/
  // Prices removed
  // Amazon search links
  // No hover effects or animations

  
const books = [
  {
    id: 1,
    title: "Edison Cylinder Phonograph Companion",
    author: "George L. Frow",
    format: "Edison Phonograph History",
    image: "/Wax Cylinders/Wax Cylinders1.jpg",
    amazonUrl:
      "https://www.amazon.com/Edison-Cylinder-Phonograph-Companion-George/dp/0960646612/ref=sr_1_1?dib=eyJ2IjoiMSJ9.jRZgWJDLC2p6JYK4LL-KMF5ppPiFJYaplA66NjZzg5Vz8Aqgkl1GjOlDVP5S2P1XmXaWrBXq9RLxzaGig149KrRbKfRHYA5kKcbKs5Cg4gkr0kSp7BCoHEnitqA9O27p1rGem0KyG1mLQhP8hodrpGA8n8WLIL-9Yl1DjU7xg9dI_HhIKSumvxddHxrtUtJtMHB_2udXCdIW98FrYc_OitUoBadalGwu65CPzxdvLoI.9DVQzvaR0e2flcjFxSforBhW9RMxEecJOMcOJdos6_E&dib_tag=se&keywords=Edison+Cylinder+Phonograph+Companion+George+Frow&qid=1794255385&sr=8-1",
  },
  {
    id: 2,
    title: "The Deaf Inventor's Sound Machine",
    author: "Thomas F. Gillen",
    format: "Sound Invention & Technology",
    image: "/Wax Cylinders/Wax Cylinders2.jpg",
    amazonUrl:
      "https://www.amazon.com/Deaf-Inventors-Sound-Machine-ebook/dp/B00GDQRZAS/ref=sr_1_1?dib=eyJ2IjoiMSJ9.7Gur5grL2RY8G8pFgozVoWMBIJ1tSE9UBllTmEglCxM.R7WBGDhqgq48FXPpieaal_-cXh6m_1uIV9txDoILrP8&dib_tag=se&keywords=The+Deaf+Inventors+Sound+Machine+Thomas+Gillen&qid=1794255410&sr=8-1",
  },
  {
    id: 3,
    title: "Edison Blue Amberol Recordings 1915-1929",
    author: " Ronald Dethlefson",
    format: "Paperback",
    image: "/Wax Cylinders/Wax Cylinders3.webp",
    amazonUrl:
      "https://www.amazon.com/Edison-Blue-Amberol-Recordings-1915-1929/dp/0960646647/ref=sr_1_5?dib=eyJ2IjoiMSJ9.8d_xccTPBY3qVuqk_1jk06HLeyZGBv31OqQqjvLaeeihPTQHdtUSNaYVdAHkqEthmuBzm-3-j8DjT2uzYwKKJA.T0_yQ_-1PzcnE6mgBAScKFBKez0jG9QmMWV4Io67Xao&dib_tag=se&keywords=Edison+Cylinder+Records+1889-1912+Allen+Koenigsberg&qid=1794255565&sr=8-5&utm_source=chatgpt.com",
  },
  {
    id: 4,
    title: "Edison Cylinder Records, 1889–1912",
    author: "Allen Koenigsberg",
    format: "Phonograph Recording Archives",
    image: "/Wax Cylinders/Wax Cylinders4.jpg",
    amazonUrl:
      "https://www.amazon.com/Edison-Cylinder-Records-1889-1912-Illustrated/dp/B0006BZK76/ref=sr_1_1?dib=eyJ2IjoiMSJ9.Q2W-WKV0ecD8F9LzvjXIhTyYgCZfHh0rJzkJqYly4SbGjHj071QN20LucGBJIEps.xiNaJS0Ht4t1Y-dwEBDJN4MSAfAerjjA8jFBaU2OWIk&dib_tag=se&keywords=Edison+Cylinder+Records+1889+1912+Allen+Koenigsberg&qid=1794255787&sr=8-1",
  },
  {
    id: 5,
    title: "The Edison Cylinder Phonographs, 1877–1929",
    author: "George L. Frow & Albert F. Sefl",
    format: "Edison Phonograph Collectors' Reference",
    image: "/Wax Cylinders/Wax Cylinders5.jpg",
    amazonUrl:
      "https://www.amazon.com/Edison-cylinder-phonographs-detailed-entertainment/dp/0950546224/ref=sr_1_1?dib=eyJ2IjoiMSJ9.hKK_AHcgDqH1xa5ad3EG2vFVhzNvKuuAejwaXozbfCbT57pmtWDWMCOykvmxsqt6e7DFO7Q67xbqcT5bzzVwaio9a98OOB8uV4yei6ir3ldtOO13-afwusviV2XCLuHaB9vLk5u6tiApHFfNIkSNwR6azYybgYOeFDBfGGjWea8_Gvsu3orEAGcWvsLYR2e7YE2kYDKz4FCktzH79jCsSmv59qQ3_eRfpqtRMUktUWc.hDRq36_W4CKwP7fSrJpQxr2bc6bckO6gdZaS1JNmPJo&dib_tag=se&keywords=The+Edison+Cylinder+Phonographs+George+Frow+Albert+Sefl&nsdOptOutParam=true&qid=1794255808&sr=8-1",
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
            Wax Cylinders & Recordings
          </span>

        </div>

        {/* PAGE HEADER */}

        <div className="bg-[#241a15] text-[#fbf8f2] p-8 border-2 border-[#c29b38] shadow-md mb-10 text-center sm:text-left flex flex-col sm:flex-row justify-between items-center gap-6">

          <div>

            <div className="flex items-center justify-center sm:justify-start gap-2 text-[#c29b38] text-[10px] tracking-[0.3em] uppercase font-sans font-bold mb-2">

              <Disc className="w-4 h-4" />

              <span>
                Early Sound Technology & Historic Recordings
              </span>

            </div>

            <h1 className="text-3xl sm:text-4xl font-bold font-serif">
              Wax Cylinders & Recordings
            </h1>

            <p className="text-xs text-[#b8a68f] mt-2 max-w-xl font-serif italic leading-relaxed">
              Explore the fascinating beginnings of
              recorded sound through historic wax
              cylinders, early phonograph technology,
              classical music performances, Victorian
              speeches, and pioneering acoustic recordings.
              Discover remarkable artifacts that preserve
              the voices, musical traditions, and
              technological achievements of the
              nineteenth and early twentieth centuries.
            </p>

          </div>

          <div className="text-center sm:text-right shrink-0 border-t sm:border-t-0 sm:border-l border-[#3d2c23] pt-4 sm:pt-0 sm:pl-8">

            <span className="text-xs text-[#c29b38] font-sans font-bold uppercase tracking-widest block">
              Curated Index
            </span>

            <span className="text-2xl font-bold font-sans text-white">
              {books.length} Artifacts
            </span>

          </div>

        </div>

        {/* COLLECTION GRID */}

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">

          {books.map((book) => (

            <article
              key={book.id}
              className="bg-[#fdfbf7] p-4 border-2 border-[#b8a68f] shadow-sm flex flex-col"
            >

              {/* COVER IMAGE */}

              <div className="w-full h-64 bg-[#efe8db] p-2 border border-[#c7b8a3] overflow-hidden mb-4 flex items-center justify-center">

                <img
                  src={book.image}
                  alt={`${book.title} by ${book.author}`}
                  loading="lazy"
                  className="w-full h-full object-contain"
                />

              </div>

              {/* ITEM INFORMATION */}

              <div className="flex flex-col flex-1">

                {/* CATEGORY BADGE */}

                <span className="text-[9px] font-sans font-bold text-[#8c2d19] border border-[#c29b38] bg-[#fbf8f2] px-2 py-1 uppercase tracking-wide inline-block self-start mb-3">
                  {book.format}
                </span>

                {/* ITEM TITLE */}

                <h3 className="text-base font-bold text-[#241a15] leading-snug line-clamp-4 min-h-[110px]">
                  {book.title}
                </h3>

                {/* CREATOR / COMPANY */}

                <p className="text-xs text-[#7a6452] italic mt-2 leading-relaxed">
                  by {book.author}
                </p>

                {/* AMAZON VIEW BUTTON */}

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
