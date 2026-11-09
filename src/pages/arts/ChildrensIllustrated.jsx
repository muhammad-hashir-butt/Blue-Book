
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
  // Actual book titles and authors
  // Prices removed
  // Amazon search links
  // No hover effects or animations
  // ==========================================

  const books = [
    {
      id: 1,
      title: "Picture Book Perfection",
      author: "Brooke Van Sickle",
      format: "Children's Picture Book Writing",
      image: "/Children/Children1.webp",
      amazonUrl:
        "https://www.amazon.com/Picture-Book-Perfection-Successfully-Publishers/dp/1965388086/ref=sr_1_1?dib=eyJ2IjoiMSJ9.S_4DulCEB1HPuCqy-QYXRpCmpexbrc702GENK1hMDIM.1VgLyF7OCcI9_R40kZnh6VQ311RJ23UDgasyk0tn03Y&dib_tag=se&keywords=Picture+Book+Perfection+Brooke+Van+Sickle&qid=1794246171&sr=8-1",
    },
    {
      id: 2,
      title: "How to Self-Publish a Children's Book",
      author: "Yvonne Jones (Y. Eevi Jones)",
      format: "Children's Book Self-Publishing",
      image: "/Children/Children2.webp",
      amazonUrl:
        "https://www.amazon.com/How-Self-Publish-Childrens-Book-Everything/dp/0997025492/ref=sr_1_1?dib=eyJ2IjoiMSJ9.ynnEoKTI6qKWVla8rWQ2NdJrC9_wVYjVIJvjRb7iqXQj-WxUCKNh0MRnueoYkltBwtV1-dCv1jCggObpR7vwSdCaJhB4lq3yap2E9SDiqA_bcKY9yhfsi1BVh5NetFdJBw0Z4onlu_H64IBaEkSQSUes2oCU-hHSFbs_4KasGKEuTYzqxByYClZ1OsneAtZ_ThybcyXd8smXVk43nVv64UhY68FwcD1LpIBtwMRi9O8.323fRtLTG0Pa54x7TZPkNzSC3TBiZn35FR-PfmJO7r8&dib_tag=se&keywords=how+to+self+publish+a+children%27s+book+yvonne+jones&nsdOptOutParam=true&qid=1794246193&sr=8-1",
    },
    {
      id: 3,
      title: "Illustrating Children's Books",
      author: "Martin Ursell",
      format: "Children's Book Illustration",
      image: "/Children/Children3.jpg",
      amazonUrl:
        "https://www.amazon.com/Illustrating-Childrens-Books-Martin-Ursell/dp/1847974333/ref=sr_1_1?dib=eyJ2IjoiMSJ9.vb1NQnG1wRtU0tpWW9mQRg.iMiYw9IDDAx24QJAHqgNyIpl1PiJxc9pTqLJq1lJLNc&dib_tag=se&keywords=9781847974334&qid=1794246212&sr=8-1",
    },
    {
      id: 4,
      title: "How to Write a Children's Book and Get It Published",
      author: "Barbara Seuling",
      format: "Children's Writing & Publishing",
      image: "/Children/Children4.webp",
      amazonUrl:
        "https://www.amazon.com/How-Write-Childrens-Book-Published/dp/0471676195/ref=sr_1_1?dib=eyJ2IjoiMSJ9.sqSeB2L-BOV7YVfGsc_UWQ.HhoQuD1eVVdbb9hn2ApaC8SBZq80GaJrp612BLrnNUI&dib_tag=se&keywords=9780471676195&qid=1794246239&sr=8-1",
    },
    {
      id: 5,
      title: "Writing Picture Books: A Hands-On Guide from Story Creation to Publication",
      author: "Ann Whitford Paul",
      format: "Picture Book Writing Guide",
      image: "/Children/Children5.webp",
      amazonUrl:
        "https://www.amazon.com/Writing-Picture-Revised-Expanded-Hands/dp/1440353751/ref=sr_1_1?dib=eyJ2IjoiMSJ9.fBTvSPaQk5A93VO-syLQpQ.7zVFgUYGXIcGQq110lHEh2PW_h5qg08-csEv_T1CMVs&dib_tag=se&keywords=9781440353758&qid=1794246272&sr=8-1",
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
            className="flex items-center gap-1"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            Back to Home
          </Link>

          <span>/</span>
          <span>Arts & Special Interests</span>
          <span>/</span>

          <span className="text-[#8c2d19] font-bold">
            Children's Illustrated
          </span>

        </div>

        {/* ======================================
            PAGE HEADER
        ====================================== */}

        <div className="bg-[#241a15] text-[#fbf8f2] p-8 border-2 border-[#c29b38] shadow-md mb-10 text-center sm:text-left flex flex-col sm:flex-row justify-between items-center gap-6">

          <div>

            <div className="text-[#c29b38] text-[10px] tracking-[0.3em] uppercase font-sans font-bold mb-2">

              <span>
                Children's Book Writing, Illustration & Publishing
              </span>

            </div>

            <h1 className="text-3xl sm:text-4xl font-bold font-serif">
              Children's Illustrated
            </h1>

            <p className="text-xs text-[#b8a68f] mt-2 max-w-xl font-serif italic leading-relaxed">
              Discover practical guides to writing,
              illustrating, publishing, and bringing
              children's books to life. Explore expert
              advice on picture book storytelling,
              character development, creative illustration,
              self-publishing, and preparing manuscripts
              for young readers.
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
