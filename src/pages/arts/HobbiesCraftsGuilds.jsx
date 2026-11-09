
import React from "react";
import { Link } from "react-router-dom";
import {
  Scissors,
  ArrowLeft,
  BookOpen,
  ArrowUpRight,
} from "lucide-react";

export default function HobbiesCraftsGuilds() {

  // ==========================================
  // HOBBIES, CRAFTS & GUILDS
  // Images: public/Hobbies/
  // Screenshot-matching book titles
  // Prices removed
  // Amazon search links
  // No hover effects or animations
  // ==========================================

  const books = [
    {
      id: 1,
      title: "DIY Crafts for Adults: Creepy (Book 6)",
      author: null,
      format: "Creative DIY & Halloween Crafts",
      image: "/Hobbies/Hobbies1.webp",
      amazonUrl:
        "https://www.amazon.com/DIY-Crafts-Adults-Projects-Materials/dp/B0HHXKTCX5/ref=sr_1_1?dib=eyJ2IjoiMSJ9.vWlQmsIlpjQy8FK0Kgott1zPpj068Z4f2pOyFWFjMMsSQcvjjFyBJ_irSe2wEhXUrVwQLv2xmOwuwJ4CwmT3GcDnPoKOKWv9i2um2TVKvZC9YNpuLQjOjkGpcbAYpe_c3CeKUeUZPXnBp1mHqeiCGoyfm8Q7lxm9LfStWA_m5n5AzxC5-abwYDqnwdciwHM2pxIQ24Z_9ubLi8GPU-9ZDKJMrgYf9jYeprCo0ZcJwvQ.E10WjOWfJXSsoHaNXwEM-XKxof5XS6dBOYRPOEV9Pjk&dib_tag=se&keywords=DIY+Crafts+for+Adults+Creepy+Book+6&qid=1794244624&sr=8-1",
    },
    {
      id: 2,
      title: "DIY Crafts for Adults (Book One)",
      author: null,
      format: "DIY Projects & Handmade Crafts",
      image: "/Hobbies/Hobbies2.webp",
      amazonUrl:
        "https://www.amazon.com/DIY-Crafts-Adults-Projects-Materials/dp/B0HCGNM8GV/ref=sr_1_7?dib=eyJ2IjoiMSJ9.OExnVhDn2G-epbY4q48Ti3xQmei9SHFKvbJQEDS8SvcMVQYaVAu9t7ZFHg7fj5HLmffs-kCXJQtGPX6bER17T9w01TPA01I1_i3_QfyZjtFuIyMp5SPMP03pQAaGr4LLY7HuBuMnWyVWQoA_kTI_YEH9tWmC4DZHTYlKL_vtD6dzeQycTk79i4wxHV4jIAtEfkpnEcHuLoBsIflX6sv-yzmQadguorbZdaPM23RFuKI.7vsSqua_uf9GXW2GXXpEDnwHmKGTchlgrmOTpDxGehc&dib_tag=se&keywords=DIY+Crafts+for+Adults+Book+One&qid=1794244656&sr=8-7",
    },
    {
      id: 3,
      title: "Crafting the Wheel of the Year",
      author: "Claire Gelder & Deb Bowen",
      format: "Seasonal Crafts & Traditions",
      image: "/Hobbies/Hobbies3.webp",
      amazonUrl:
        "https://www.amazon.com/Crafting-Wheel-Year-magical-projects/dp/180092237X/ref=sr_1_1?dib=eyJ2IjoiMSJ9.i1Z76d7cXaPlYm8_MPGbTw.Ry8LXivizKF_f8YyFQJbfHHZDal3qWLY5joYi3OpPy4&dib_tag=se&keywords=9781800922372&qid=1794244679&sr=8-1",
    },
    {
      id: 4,
      title: "Cozy Cottagecore Crafts: 50 Slow-Living DIY Projects Made with Natural and Simple Materials",
      author: "Omar S. Alamad",
      format: "Cottagecore & Natural Crafts",
      image: "/Hobbies/Hobbies4.jpg",
      amazonUrl:
        "https://www.amazon.com/Cozy-Cottagecore-Crafts-Slow-Living-Materials/dp/B0FZ8C8YZT/ref=sr_1_1?dib=eyJ2IjoiMSJ9.uSBVPHKHq-HquZDvgVNEVw.-l0Zt6VgrvAVUcYAgkGqoFzkHGQSbx1SvMFahjROdr4&dib_tag=se&keywords=9798272689788&qid=1794244712&sr=8-1",
    },
    {
      id: 5,
      title: "A Beginners' Guide to the Dolls' House Hobby",
      author: "Jean Nisbett",
      format: "Miniature Crafts & Dollhouses",
      image: "/Hobbies/Hobbies5.jpg",
      amazonUrl:
        "https://www.amazon.co.uk/Beginners-Guide-Dolls-House-Hobby/dp/1861080379",
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
            Hobbies, Crafts & Guilds
          </span>

        </div>

        {/* PAGE HEADER */}

        <div className="bg-[#241a15] text-[#fbf8f2] p-8 border-2 border-[#c29b38] shadow-md mb-10 text-center sm:text-left flex flex-col sm:flex-row justify-between items-center gap-6">

          <div>

            <div className="flex items-center justify-center sm:justify-start gap-2 text-[#c29b38] text-[10px] tracking-[0.3em] uppercase font-sans font-bold mb-2">

              <Scissors className="w-4 h-4" />

              <span>
                Creative Hobbies & Handmade Traditions
              </span>

            </div>

            <h1 className="text-3xl sm:text-4xl font-bold font-serif">
              Hobbies, Crafts & Guilds
            </h1>

            <p className="text-xs text-[#b8a68f] mt-2 max-w-xl font-serif italic leading-relaxed">
              Discover creative hobbies, inspiring DIY
              projects, seasonal decorations, traditional
              crafting techniques, miniature dollhouse
              designs, and handmade creations.
              Explore books that celebrate imagination,
              craftsmanship, and the joy of making
              something beautiful by hand.
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
                  alt={book.title}
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
                  {book.author
                    ? `by ${book.author}`
                    : "Creative DIY Craft Collection"}
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
