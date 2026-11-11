
import React from "react";
import { Link } from "react-router-dom";
import {
  ArrowLeft,
  BookOpen,
  ArrowUpRight,
} from "lucide-react";

export default function NineteenthCenturyLiterature() {

  // ==========================================
  // NINETEENTH-CENTURY LITERATURE
  // Images: public/Nineteenth/
  // All images: .jpg
  // Titles matched with actual covers
  // No prices
  // Georgia font
  // Compact cards
  // No hover effects or animations
  // Amazon search links
  // ==========================================

  const books = [
    {
      id: 1,
      title:
        "Woman in the Nineteenth Century",
      author: "Margaret Fuller",
      format: "Classic Illustrated Literature",
      image: "/Nineteenth/Nineteenth1.jpg",
      amazonUrl:
        "https://www.amazon.com/Nineteenth-Century-Illustrated-Margaret-Fuller/dp/1687233632/ref=sr_1_2?dib=eyJ2IjoiMSJ9.RUFfFVgbwXcmgBRaJczr0d2JJPVrnxTAmrQasmBSeJ1MYtgqlbn1uN6zIIiq2dGF2DPD3XxWhU6qKEW5T-URg41Ggltf7S0gNwEM5on0TBkW193PsynN16Wcc667-vYwLuDjeMVSlY1Z0wYdR0k5pG92d9E7Wb4wu-e-J2SXTEe4OIPot2jBlARo2JYi3tY-vcW08dSLEs5OEfl6RQg035aOiCSC9pAPb3VntddMPj4.AGkYhSmQ3q29rqjlx1XQkeXUbWCDHzA0N2u_IQgcBcY&dib_tag=se&keywords=Woman+in+the+Nineteenth+Century+Margaret+Fuller+Moncrieff+Classics&nsdOptOutParam=true&qid=1794426352&sr=8-2",
    },
    {
      id: 2,
      title:
        "Woman in the Nineteenth Century",
      author: "Margaret Fuller",
      format: "Nineteenth-Century Feminist Literature",
      image: "/Nineteenth/Nineteenth2.jpg",
      amazonUrl:
        "https://www.amazon.com/Woman-Nineteenth-Century-American-Annotated/dp/B0B7QR591W/ref=pd_sbs_d_sccl_1_3/141-2292669-5146048?pd_rd_w=mEWdQ&content-id=amzn1.sym.0cb10f30-7cd4-4985-9826-58b2c1174c19&pf_rd_p=0cb10f30-7cd4-4985-9826-58b2c1174c19&pf_rd_r=298NMJ6H3B540KF1PBZ2&pd_rd_wg=moGxP&pd_rd_r=22dcff70-5839-4b1d-90e5-9c2ae62cc45a&pd_rd_i=B0B7QR591W&psc=1",
    },
    {
      id: 3,
      title:
        "The General Idea of the Revolution in the 19th Century",
      author: "Pierre-Joseph Proudhon",
      format: "Political Philosophy & Revolutionary History",
      image: "/Nineteenth/Nineteenth3.jpg",
      amazonUrl:
        "https://www.amazon.com/g%C3%A9n%C3%A9rale-R%C3%A9volution-dix-neuvi%C3%A8me-si%C3%A8cle-French/dp/B08DPVZ83X/ref=sr_1_13?dib=eyJ2IjoiMSJ9.HigMICKQ2R5PyYfPdPikdrlYtBzknolGkY8nuvJF3hazZUCH1VVeTBtaUjYkm6PRMfGhM1KpLoP8-XSJKwKG0VMbIpOqVJ59jIxL7oUkMM1jDHfzr7Z9homL_XJ5qmnIVPhUvvRhtrhZstyrfgGqbQOB1vlyCUz-tFXNYi43c3zICPk8ZdAmKOlZhUp3ViPPqfQRc-HVIqo_d8ZjpLhARSyiiTSx9nAzQOhP1GcsgMc.hzogYkXQY4M-_WKNH8zY8KkCEYZcrFaooc3PlF6f8IM&dib_tag=se&keywords=The+General+Idea+of+the+Revolution+in+the+19th+Century+Proudhon&nsdOptOutParam=true&qid=1794426413&sr=8-13",
    },
    {
      id: 4,
      title:
        "Woman in the Nineteenth Century & Kindred Papers Relating to the Sphere, Condition & Duties of Woman",
      author: "Margaret Fuller",
      format: "Women's History & Nineteenth-Century Essays",
      image: "/Nineteenth/Nineteenth4.jpg",
      amazonUrl:
        "https://www.amazon.com/Woman-Nineteenth-Century-Relating-Condition/dp/B09M74Z1WT/ref=sr_1_1?dib=eyJ2IjoiMSJ9.U8DB3lqaWJ6lkOFMp5ErvJAFRXoe-OFoyX-D5xQuD6tBHUHogI8Jw8Zcf3hDg4P4f7Rp2gZOixWnYd2319aYeXEnfJghZeeJIZ12CrKXleYe7FrQfLIBpiEi5NvbXSSHdf0bEhsVTjv8-HlupAnbBSrZUImmKUtbFQ5N5BAc5hrWN9XmUpOgmz-3Uen0sThdCx3J9nPkvpBHaaoAUn0eH0V2oFAppOcfCFlQmSmQ7tU.s0OVWJ3Ku_oVCsmBxGL31TWxm-9H9gscB_pHydw8Vn4&dib_tag=se&keywords=Woman+in+the+Nineteenth+Century+Kindred+Papers+Margaret+Fuller&nsdOptOutParam=true&qid=1794426447&sr=8-1",
    },
    {
      id: 5,
      title:
        "The Mother's Book",
      author: "Lydia Maria Child",
      format: "Nineteenth-Century Parenting & Social History",
      image: "/Nineteenth/Nineteenth5.jpg",
      amazonUrl:
        "https://www.amazon.com/Mothers-Book-Century-Practical-Parenting/dp/B0DL3H5B7G/ref=sr_1_3?dib=eyJ2IjoiMSJ9.CV34htgiwoXVclV0BHUAANd8P-u310SWkXiq7VLSWBTqDfm7p5Aq-g0QtQ_Lbym2W_R8mHt1DUhY8KQhx3rtgnOVuHpBkNpZMBTVV5Lmc1vC96nrIc895A0lnZuau512dl4QwQttAJpY8v9d9-r_sOQoVUBchd-mi-arzmQY5Eva8jfWXBJVm8KNpDIQTgYcqEYLX8_qNw2xuxAeKu-TmsufOoKIWX9_1yqQBridx2Y.oswW23dXz3f6lJiAOFmdy3oqwa8b_31ayLaQSQeWFlk&dib_tag=se&keywords=The+Mothers+Book+Lydia+Maria+Child&qid=1794426468&sr=8-3",
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

        {/* ======================================
            BREADCRUMB NAVIGATION
        ====================================== */}

        <nav className="flex flex-wrap items-center gap-2 text-xs text-[#7a6452] mb-5">

          <Link
            to="/"
            className="flex items-center gap-1 text-[#7a6452] no-underline"
          >
            <ArrowLeft size={14} />
            Back to Home
          </Link>

          <span>/</span>

          <span>Period Treasures</span>

          <span>/</span>

          <span className="font-bold text-[#8c2d19]">
            Nineteenth-Century Literature
          </span>

        </nav>

        {/* ======================================
            PAGE HEADER
        ====================================== */}

        <header className="bg-[#241a15] text-[#fbf8f2] border border-[#c29b38] px-6 py-6 mb-6">

          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">

            <div className="flex-1 min-w-0">

              <div className="text-[#c29b38] text-[11px] font-bold tracking-[0.15em] uppercase mb-2">
                Classic Literature, Women's History & Revolutionary Thought
              </div>

              <h1 className="text-3xl sm:text-4xl font-bold leading-tight">
                Nineteenth-Century Literature
              </h1>

              <p className="text-[14px] text-[#cbb9a5] mt-2 max-w-2xl leading-relaxed">
                Discover influential nineteenth-century
                writings exploring women's rights,
                social reform, political philosophy,
                revolutionary ideas, and family life.
                Explore the remarkable literary legacy
                of Margaret Fuller, Pierre-Joseph
                Proudhon, and Lydia Maria Child through
                classic works that illuminate the
                intellectual, cultural, and social
                transformations of their time.
              </p>

            </div>

            {/* ======================================
                CURATED INDEX
            ====================================== */}

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

        {/* ======================================
            BOOK COLLECTION GRID
        ====================================== */}

        <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 items-stretch">

          {books.map((book) => (

            <article
              key={book.id}
              className="bg-[#fdfbf7] border border-[#b8a68f] p-3 flex flex-col h-full min-w-0"
            >

              {/* ======================================
                  BOOK COVER
              ====================================== */}

              <div className="w-full h-60 bg-[#efe8db] border border-[#c7b8a3] p-2 flex items-center justify-center overflow-hidden">

                <img
                  src={book.image}
                  alt={`${book.title} by ${book.author}`}
                  loading="lazy"
                  className="w-full h-full object-contain"
                />

              </div>

              {/* ======================================
                  CATEGORY BADGE
              ====================================== */}

              <div className="mt-3">

                <span className="inline-block text-[10px] font-bold uppercase leading-snug text-[#8c2d19] border border-[#c29b38] px-2 py-1">
                  {book.format}
                </span>

              </div>

              {/* ======================================
                  BOOK INFORMATION
              ====================================== */}

              <div className="flex flex-col flex-1 mt-2">

                {/* BOOK TITLE */}

                <h2 className="text-[17px] font-bold text-[#241a15] leading-[1.35]">
                  {book.title}
                </h2>

                {/* AUTHOR NAME */}

                <p className="text-[13px] text-[#8a593f] italic mt-2 leading-snug">
                  by {book.author}
                </p>

                {/* ======================================
                    AMAZON VIEW BOOK BUTTON
                ====================================== */}

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

        {/* ======================================
            BOTTOM DIVIDER
        ====================================== */}

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
