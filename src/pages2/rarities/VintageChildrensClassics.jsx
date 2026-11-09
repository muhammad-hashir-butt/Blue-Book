
import React from "react";
import { Link } from "react-router-dom";
import {
  ArrowLeft,
  BookOpen,
  ArrowUpRight,
} from "lucide-react";

export default function VintageChildrensClassics() {

  // Vintage Children's Classics
  // Local images: public/Vintage/
  // Prices removed
  // Amazon search links
  // No hover effects or animations

  const books = [
    {
      id: 1,
      title: "The Velveteen Rabbit",
      author: "Margery Williams",
      format: "Classic Children's Literature",
      image: "/Vintage/Vintage1.webp",
      amazonUrl:
"https://www.amazon.com/Velveteen-Rabbit-Margery-Williams/dp/0385375662/ref=sr_1_1?dib=eyJ2IjoiMSJ9.yJ6wFzOdJ4YeJlJ_8BR2FFAw9mBlvqDQbtZLoiBvBzD8Cb8zyjOS-YOHXmB-v060uGUPAEnaDdXrIWD1HrgyyVek8aWybaUUyfP1HGLrr8YuRgTemJKSmjXeGciX6Q0bS258LD_OvnQlxIuvLxAktrD157ynulfiDCXr48V_cN5FSsfnsisqijuenI-GWH-HuUVhHldTupMmNBMxYfemoIrZ5JpjkumRHjXEQZRsYcs.7iNAEDn-kNSW_Fw0ZUY2TqpGtpEUylsxifnDS85x27Y&dib_tag=se&keywords=The+Velveteen+Rabbit+Margery+Williams&qid=1794250588&sr=8-1",    },
    {
      id: 2,
      title: "Aesop's Fables: The Classic Edition",
      author: "Aesop, illustrated by Charles Santore",
      format: "Classic Fables & Illustrated Stories",
      image: "/Vintage/Vintage2.webp",
      amazonUrl:
        "https://www.amazon.com/Aesops-Fables-Classic-Charles-Santore/dp/1604338105/ref=sr_1_1?dib=eyJ2IjoiMSJ9.o4I7S0S3VU6QlfHg17uuQP8oqaYJFoCuyME-MuO5Hb2GA2fbJvdy10BG_mRRgvztUja7e5JKCm-YKPbeSYHWfSWEVnjxBEAb2VBldphjZeG1BUY5RwMgcYk4X9y2tsykhXYnsbr9DDiDUcavReVukI8fHN78ozLq11168dJ323VHTTVLBIq-2k9_BrbX4-2aMpvWYJ87ajanLaVt6O1c2FbCciKrqUdjhyvzzI5Jxr8.ZCip3WL8hnYGObmDdszKix5BVUL09trLkVkjnsaX2rk&dib_tag=se&keywords=aesop%27s+fables+classic+edition+charles+santore&qid=1794250629&sr=8-1",
    },
    {
      id: 3,
      title: "The Classic Tale of Peter Rabbit and Other Cherished Stories",
      author: "Beatrix Potter, illustrated by Charles Santore",
      format: "Illustrated Children's Classics",
      image: "/Vintage/Vintage3.jpg",
      amazonUrl:
        "https://www.amazon.com/Classic-Tale-Peter-Rabbit-Cherished/dp/1604333766/ref=sr_1_1?dib=eyJ2IjoiMSJ9.2c39zYoK8qJmupE1h8A_KJXMr1ogUX7ni1lk5oHOP4AGZgUEaCMJ6cNBLkfvUcjAgTQm6bHJgwyD0X3pXqd-piZyMFkzbnMyYwb8MQXaE1eWzAkSu0R7hBEFX0VFmwmhO6Q9ACZxD40SFDzLyK0PLBPMe53kbtbbnf-3LmLAju5kK5tDB8omFlZ2XYE2z8W3VnGIpTuzrZmKXlyaSHpIdUj_ViHsejG-VFk_7wgkXuU.lw195Rm__tNWceZlz2PJf5SKCJQxer-69RUX3RzFdRU&dib_tag=se&keywords=Classic+Tale+of+Peter+Rabbit+Charles+Santore&qid=1794250659&sr=8-1",
    },
    {
      id: 4,
      title: "The Fuzzy Duckling",
      author: "Jane Werner Watson",
      format: "Little Golden Book Classic",
      image: "/Vintage/Vintage4.webp",
      amazonUrl:
        "https://www.amazon.com/Fuzzy-Duckling-Little-Golden-Book/dp/0553522132/ref=sr_1_1?dib=eyJ2IjoiMSJ9.UCs2szUSLOmT5BO9x0seE6aWvQm53wW5DA7-o6XXkYTFBrZw2MmtpQgdA6arpw6yUNz4NCoi8pQBXPEK1L7hDfOw8MWFCBGV3u3mSfZzFvn86OgRbrugsErGd4UssosTzcNnuCpKRyakrF31gfrVIVWxi6xAuJhDAx7W594G-Ks0iOiD0lLJOU1TCCqzK8NSsWOXgv-WpgxFUA4FEpf2NyjEDXoybYrspU2RzCRCWAs.WsQT2wICrFwAcO3O_zC18fNfZE58XsYHybsrmv0EbPA&dib_tag=se&keywords=The+Fuzzy+Duckling+Jane+Werner+Watson&qid=1794250686&sr=8-1",
    },
    {
      id: 5,
      title: "Mother Goose Treasury",
      author: "Traditional Nursery Rhymes",
      format: "Nursery Rhymes & Poetry",
      image: "/Vintage/Vintage5.webp",
      amazonUrl:
        "https://www.amazon.com/Mother-Goose-Treasury-Beautiful-Collection/dp/1680524615/ref=sr_1_1?dib=eyJ2IjoiMSJ9.CSpUTNdn79em34HkDvIDAhAGuaQcd9XStpWwaxMMZCJqUlIA_h2KAgx2bQt67x8bLTrFJvs6k44mmmbhuGEhtgc6u2y7DFzSbVIJZ0lDSsVoKQkpkGLtFVBMFzVII7Yu_ckgpYwGHqFcUw8VUf1whr_RbP6B-ErYq52WT68xn2zQP4yQxpyc1j3zmhi5QPua8pdhG82KqKdb8EGWnxOZYxErp8IpBsbSTpZK-IEK1Bk.Cs5nd15s_eVGPDaV7rti9A4rsaBYN_hGXfalEfPqo64&dib_tag=se&keywords=Mother+Goose+Treasury+Timeless+Collection+Favorite+Nursery+Rhymes&nsdOptOutParam=true&qid=1794250713&sr=8-1",
    },
  ];

  return (
    <div className="w-full min-h-screen bg-[#fbf8f2] text-[#2c241e] font-serif py-10 px-6">
      <div className="max-w-7xl mx-auto">

        {/* BREADCRUMB */}

        <div className="flex flex-wrap items-center gap-2 text-xs font-sans text-[#7a6452] mb-6">
          <Link
            to="/"
            className="flex items-center gap-1"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            Back to Home
          </Link>

          <span>/</span>
          <span>Classical Rarities</span>
          <span>/</span>

          <span className="text-[#8c2d19] font-bold">
            Vintage Children's Classics
          </span>
        </div>

        {/* PAGE HEADER */}

        <div className="bg-[#241a15] text-[#fbf8f2] p-8 border-2 border-[#c29b38] shadow-md mb-10 text-center sm:text-left flex flex-col sm:flex-row justify-between items-center gap-6">

          <div>
            <div className="text-[#c29b38] text-[10px] tracking-[0.3em] uppercase font-sans font-bold mb-2">
              Timeless Stories, Fables & Childhood Treasures
            </div>

            <h1 className="text-3xl sm:text-4xl font-bold font-serif">
              Vintage Children's Classics
            </h1>

            <p className="text-xs text-[#b8a68f] mt-2 max-w-xl font-serif italic leading-relaxed">
              Discover beloved childhood stories,
              beautifully illustrated fables, classic
              nursery rhymes, and timeless picture books.
              Explore cherished tales of friendship,
              imagination, kindness, and adventure
              that have delighted generations of
              children and families.
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

        {/* BOOK COLLECTION */}

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">

          {books.map((book) => (
            <article
              key={book.id}
              className="bg-[#fdfbf7] p-4 border-2 border-[#b8a68f] shadow-sm flex flex-col"
            >

              {/* BOOK IMAGE */}

              <div className="w-full h-64 bg-[#efe8db] p-2 border border-[#c7b8a3] overflow-hidden mb-4 flex items-center justify-center">
                <img
                  src={book.image}
                  alt={`${book.title} by ${book.author}`}
                  loading="lazy"
                  className="w-full h-full object-contain"
                />
              </div>

              {/* BOOK DETAILS */}

              <div className="flex flex-col flex-1">

                <span className="text-[9px] font-sans font-bold text-[#8c2d19] border border-[#c29b38] bg-[#fbf8f2] px-2 py-1 uppercase tracking-wide inline-block self-start mb-3">
                  {book.format}
                </span>

                <h3 className="text-base font-bold text-[#241a15] leading-snug line-clamp-4 min-h-[110px]">
                  {book.title}
                </h3>

                <p className="text-xs text-[#7a6452] italic mt-2 leading-relaxed">
                  by {book.author}
                </p>

                {/* AMAZON BUTTON */}

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
