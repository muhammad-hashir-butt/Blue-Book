import React from 'react';
import { Award, BookOpen, ShieldCheck, HeartHandshake, Feather, Sparkles, CheckCircle2 } from 'lucide-react';

export default function RareCollectibles() {

  // 1. DATA: Rare Comic Books Archive
  const comicBooks = [
    {
      vaultId: "VAULT #01",
      title: "Four Color #437 - Edgar Rice Burroughs' John Carter",
      author: "Burroughs, Edgar Rice; Newman, Paul S.",
      badges: ["First Edition"],
      seller: "Parigi Books, Vintage & Rare",
      topSeller: true,
      price: "$1,500.00",
      shipping: "+ $6.50 insured transit",
      image: "https://images.pexels.com/photos/159711/books-bookstore-book-reading-159711.jpeg?auto=compress&cs=tinysrgb&w=400"
    },
    {
      vaultId: "VAULT #02",
      title: "The Adventures of Dick Tracy Detective",
      author: "Chester Gould",
      badges: ["First Edition", "Hardcover"],
      seller: "CraigsClassics",
      topSeller: false,
      price: "$425.00",
      shipping: "+ $5.38 insured transit",
      image: "https://images.pexels.com/photos/1005324/pexels-photo-1005324.jpeg?auto=compress&cs=tinysrgb&w=400"
    },
    {
      vaultId: "VAULT #03",
      title: "A Mad Look at Old Movies",
      author: "DeBartolo, Dick",
      badges: ["First Edition", "Paperback"],
      seller: "BookRanger Archival",
      topSeller: false,
      price: "$300.00",
      shipping: "+ $3.00 insured transit",
      image: "https://images.pexels.com/photos/762687/pexels-photo-762687.jpeg?auto=compress&cs=tinysrgb&w=400"
    },
    {
      vaultId: "VAULT #04",
      title: "Marge's Little Lulu #146 (Dell Four Color)",
      author: "Stanley, John",
      badges: ["Pre-Owned", "Paperback"],
      seller: "Tree Frog Fine Books",
      topSeller: true,
      price: "$325.00",
      shipping: "+ $5.25 insured transit",
      image: "https://images.pexels.com/photos/904616/pexels-photo-904616.jpeg?auto=compress&cs=tinysrgb&w=400"
    },
    {
      vaultId: "VAULT #05",
      title: "The Manara Library & Graphic Folios",
      author: "Milo Manara & Hugo Pratt",
      badges: ["Rare Folio", "Paperback"],
      seller: "Barbed Wire Books",
      topSeller: false,
      price: "$100.00",
      shipping: "+ $6.00 insured transit",
      image: "https://images.pexels.com/photos/415071/pexels-photo-415071.jpeg?auto=compress&cs=tinysrgb&w=400"
    }
  ];

  // 2. DATA: Rare Signed Books Archive
  const signedBooks = [
    {
      id: 1,
      title: "Interview with the Vampire (Signed Easton Press)",
      author: "Rice, Anne",
      badges: ["Author Signed", "First Printing"],
      seller: "Bookcharmed Vault",
      topSeller: false,
      price: "$625.00",
      shipping: "+ $5.60 insured transit",
      image: "https://images.pexels.com/photos/2228561/pexels-photo-2228561.jpeg?auto=compress&cs=tinysrgb&w=400"
    },
    {
      id: 2,
      title: "ROBERTO BURLE MARX Uma Poetica Da Modernidade",
      author: "Lelia Coelho Frota",
      badges: ["Rare Copy", "Hardcover"],
      seller: "Lauren Otis Rare Books",
      topSeller: true,
      price: "$500.00",
      shipping: "+ $5.75 insured transit",
      image: "https://images.pexels.com/photos/1130980/pexels-photo-1130980.jpeg?auto=compress&cs=tinysrgb&w=400"
    },
    {
      id: 3,
      title: "Artists: Portraits from Four Decades",
      author: "Newman, Arnold",
      badges: ["Author Inscribed", "Hardcover"],
      seller: "Orpheus Booksellers",
      topSeller: true,
      price: "$195.00",
      shipping: "+ $6.00 insured transit",
      image: "https://images.pexels.com/photos/46274/pexels-photo-46274.jpeg?auto=compress&cs=tinysrgb&w=400"
    },
    {
      id: 4,
      title: "Stalking the Nightmare (First Signed Edition)",
      author: "Ellison, Harlan",
      badges: ["Author Signed", "First Edition"],
      seller: "Village Lights Antiquarian",
      topSeller: false,
      price: "$100.00",
      shipping: "+ $7.50 insured transit",
      image: "https://images.pexels.com/photos/1301585/pexels-photo-1301585.jpeg?auto=compress&cs=tinysrgb&w=400"
    },
    {
      id: 5,
      title: "Tower of Dawn (Signed 1st Printing)",
      author: "Maas, Sarah J.",
      badges: ["Author Signed", "Hardcover"],
      seller: "Bookcharmed Vault",
      topSeller: false,
      price: "$390.00",
      shipping: "+ $5.60 insured transit",
      image: "https://images.pexels.com/photos/256450/pexels-photo-256450.jpeg?auto=compress&cs=tinysrgb&w=400"
    }
  ];

  return (
    <section className="max-w-7xl mx-auto px-6 py-12 flex flex-col gap-16 font-serif">
      
      {/* ================= 1. UNIQUE LAYOUT: THE PANORAMIC COMIC GALLERY ================= */}
      <div>
        
        {/* Gallery Top Banner */}
        <div className="bg-[#241a15] text-[#fbf8f2] p-6 border-2 border-[#c29b38] shadow-md flex flex-wrap items-center justify-between gap-4 mb-6">
          <div>
            <div className="flex items-center gap-2 text-[#c29b38] text-[10px] tracking-[0.25em] uppercase font-sans font-bold">
              <BookOpen className="w-4 h-4" />
              <span>Illustrated Ephemera & Graphic Antiquities</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-bold mt-1">
              Rare & Collectible Vintage Comic Art
            </h3>
          </div>
          <a href="#" className="border border-[#c29b38] text-[#c29b38] hover:bg-[#c29b38] hover:text-[#241a15] px-4 py-2 text-xs font-sans font-bold uppercase tracking-widest transition-none">
            Browse All Comics Vault
          </a>
        </div>

        {/* 5-Column Pedestal Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5">
          {comicBooks.map((book, idx) => (
            <div 
              key={idx}
              className="bg-[#fdfbf7] p-4 border-2 border-[#b8a68f] shadow-sm flex flex-col justify-between hover:border-[#8c2d19] relative"
            >
              <div>
                {/* Vault Badge */}
                <div className="flex items-center justify-between border-b border-[#e2d7c5] pb-2 mb-3 font-sans">
                  <span className="text-[9px] font-bold tracking-widest text-[#8c2d19]">
                    {book.vaultId}
                  </span>
                  {book.topSeller && (
                    <Award className="w-3.5 h-3.5 text-[#c29b38]" />
                  )}
                </div>

                {/* Comic Cover Display */}
                <div className="w-full h-48 bg-[#efe8db] p-1 border border-[#c7b8a3] shadow-inner overflow-hidden mb-3">
                  <img
                    src={book.image}
                    alt={book.title}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      e.target.src = "https://images.pexels.com/photos/159711/books-bookstore-book-reading-159711.jpeg?auto=compress&cs=tinysrgb&w=400";
                    }}
                  />
                </div>

                {/* Info */}
                <div className="flex flex-wrap gap-1 mb-1.5">
                  {book.badges.map((b, i) => (
                    <span key={i} className="text-[8px] font-sans font-bold text-[#8c2d19] border border-[#c29b38] px-1 py-0.2 uppercase">
                      {b}
                    </span>
                  ))}
                </div>

                <h4 className="text-xs font-bold text-[#241a15] line-clamp-2 leading-snug">
                  {book.title}
                </h4>
                <p className="text-[11px] text-[#7a6452] italic mt-0.5">
                  by {book.author}
                </p>
                <p className="text-[10px] text-[#8f8174] font-sans mt-1 line-clamp-1">
                  Dealer: {book.seller}
                </p>
              </div>

              {/* Price & Cart */}
              <div className="mt-4 pt-3 border-t border-[#e2d7c5]">
                <div className="flex items-baseline justify-between font-sans">
                  <span className="text-sm font-bold text-[#241a15]">{book.price}</span>
                  <span className="text-[9px] text-[#8f8174]">{book.shipping}</span>
                </div>
                <button className="bg-[#241a15] hover:bg-[#8c2d19] text-[#fbf8f2] text-[10px] font-sans font-bold py-1.5 px-3 uppercase tracking-wider mt-2.5 w-full">
                  Acquire Comic
                </button>
              </div>

            </div>
          ))}
        </div>

      </div>

      {/* ================= 2. UNIQUE LAYOUT: THE OPEN ANTIQUE BOOK SPREAD (GUIDES) ================= */}
      <div className="bg-[#f4eee2] p-8 sm:p-10 border-4 border-double border-[#b8a68f] shadow-xl relative">
        
        {/* Book Spine Center Crease Line (Visual Book Effect) */}
        <div className="hidden lg:block absolute left-1/2 top-4 bottom-4 w-[2px] bg-gradient-to-b from-transparent via-[#b8a68f] to-transparent -translate-x-1/2 pointer-events-none"></div>

        {/* Double Page Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-stretch">
          
          {/* LEFT PAGE: Signed Books Field Manual */}
          <div className="lg:pr-6 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between border-b border-[#d6c7b2] pb-2 mb-4">
                <span className="text-[9px] tracking-[0.25em] uppercase font-sans font-bold text-[#8c2d19]">
                  Folio Page • Left Spread
                </span>
                <Feather className="w-4 h-4 text-[#8c2d19]" />
              </div>

              <div className="flex flex-col sm:flex-row gap-5 items-start">
                <div className="w-28 h-36 shrink-0 bg-[#efe8db] border-2 border-[#b8a68f] p-1 shadow-md overflow-hidden">
                  <img
                    src="https://images.pexels.com/photos/1130980/pexels-photo-1130980.jpeg?auto=compress&cs=tinysrgb&w=300"
                    alt="Signed Manual"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-[#241a15] leading-tight">
                    The Art of Collecting Signed Books
                  </h4>
                  <p className="text-xs text-[#5c4a3e] mt-2 leading-relaxed">
                    Editions inscribed by the author's own quill carry personal literary intimacy. Discover provenance verification techniques and how to discern author signatures from inscriptions.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-5 pt-3 border-t border-[#d6c7b2] flex items-center justify-between font-sans">
              <a href="#" className="text-xs font-bold text-[#8c2d19] hover:underline uppercase tracking-wider">
                Read Signature Manual ›
              </a>
              <span className="text-[10px] text-[#8f8174]">Capitulum I</span>
            </div>
          </div>

          {/* RIGHT PAGE: First Edition Identification */}
          <div className="lg:pl-6 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between border-b border-[#d6c7b2] pb-2 mb-4">
                <span className="text-[9px] tracking-[0.25em] uppercase font-sans font-bold text-[#8c2d19]">
                  Folio Page • Right Spread
                </span>
                <ShieldCheck className="w-4 h-4 text-[#8c2d19]" />
              </div>

              <div className="flex flex-col sm:flex-row gap-5 items-start">
                <div className="w-28 h-36 shrink-0 bg-[#efe8db] border-2 border-[#b8a68f] p-1 shadow-md overflow-hidden">
                  <img
                    src="https://images.pexels.com/photos/46274/pexels-photo-46274.jpeg?auto=compress&cs=tinysrgb&w=300"
                    alt="First Edition Identification"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-[#241a15] leading-tight">
                    Identifying True First Edition Printings
                  </h4>
                  <p className="text-xs text-[#5c4a3e] mt-2 leading-relaxed">
                    What constitutes a genuine first impression? Learn to decipher publisher number lines, dust jacket issue points, binding variants, and typographical errata.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-5 pt-3 border-t border-[#d6c7b2] flex items-center justify-between font-sans">
              <a href="#" className="text-xs font-bold text-[#8c2d19] hover:underline uppercase tracking-wider">
                Read First Edition Guide ›
              </a>
              <span className="text-[10px] text-[#8f8174]">Capitulum II</span>
            </div>
          </div>

        </div>

      </div>

      {/* ================= 3. UNIQUE LAYOUT: THE SIGNED BOOKS SALON (2 WIDE + 3 TRIO) ================= */}
      <div>
        
        {/* Salon Header */}
        <div className="flex items-center justify-between border-b-2 border-[#b8a68f] pb-3 mb-6">
          <div className="flex items-center gap-2">
            <Feather className="w-5 h-5 text-[#8c2d19]" />
            <h3 className="text-2xl font-bold text-[#241a15]">
              The Autographed Vault: Verified Signed Copies
            </h3>
          </div>
          <span className="text-xs font-sans text-[#7a6452] hidden sm:inline italic">
            Certified Authentic Author Signatures
          </span>
        </div>

        {/* Top 2 Featured Wide Books */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          {signedBooks.slice(0, 2).map((book) => (
            <div 
              key={book.id}
              className="bg-[#fdfbf7] p-5 border-2 border-[#c29b38] shadow-sm flex flex-col sm:flex-row gap-5 items-center hover:border-[#8c2d19]"
            >
              <div className="w-32 h-44 shrink-0 bg-[#efe8db] p-1 border border-[#c7b8a3] shadow-md overflow-hidden">
                <img
                  src={book.image}
                  alt={book.title}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.target.src = "https://images.pexels.com/photos/159711/books-bookstore-book-reading-159711.jpeg?auto=compress&cs=tinysrgb&w=400";
                  }}
                />
              </div>
              <div className="flex-1 flex flex-col justify-between h-full text-left">
                <div>
                  <div className="flex flex-wrap gap-1 mb-2">
                    {book.badges.map((b, i) => (
                      <span key={i} className="text-[8px] font-sans font-bold text-[#8c2d19] border border-[#c29b38] bg-[#fbf8f2] px-2 py-0.5 uppercase">
                        {b}
                      </span>
                    ))}
                  </div>
                  <h4 className="text-sm font-bold text-[#241a15] leading-snug">
                    {book.title}
                  </h4>
                  <p className="text-xs text-[#7a6452] italic mt-1">
                    by {book.author}
                  </p>
                  <p className="text-[10px] text-[#8f8174] font-sans mt-2">
                    Provenance: {book.seller}
                  </p>
                </div>
                <div className="mt-4 pt-3 border-t border-[#e2d7c5] flex items-center justify-between">
                  <div>
                    <span className="text-sm font-bold text-[#241a15] font-sans">{book.price}</span>
                    <span className="text-[9px] text-[#8f8174] block font-sans">{book.shipping}</span>
                  </div>
                  <button className="bg-[#241a15] hover:bg-[#8c2d19] text-[#fbf8f2] text-xs font-sans font-bold py-2 px-4 uppercase tracking-wider">
                    Inquire / Buy
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom 3 Books Trio */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {signedBooks.slice(2, 5).map((book) => (
            <div 
              key={book.id}
              className="bg-[#fdfbf7] p-4 border border-[#b8a68f] shadow-sm flex flex-col justify-between hover:border-[#8c2d19]"
            >
              <div>
                <div className="w-full h-40 bg-[#efe8db] p-1 border border-[#c7b8a3] shadow-inner overflow-hidden mb-3">
                  <img
                    src={book.image}
                    alt={book.title}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      e.target.src = "https://images.pexels.com/photos/159711/books-bookstore-book-reading-159711.jpeg?auto=compress&cs=tinysrgb&w=400";
                    }}
                  />
                </div>
                <div className="flex flex-wrap gap-1 mb-1.5">
                  {book.badges.map((b, i) => (
                    <span key={i} className="text-[8px] font-sans font-bold text-[#8c2d19] border border-[#c29b38] px-1.5 py-0.2 uppercase">
                      {b}
                    </span>
                  ))}
                </div>
                <h4 className="text-xs font-bold text-[#241a15] line-clamp-1">
                  {book.title}
                </h4>
                <p className="text-[11px] text-[#7a6452] italic">
                  by {book.author}
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-[#e2d7c5] flex items-center justify-between font-sans">
                <span className="text-xs font-bold text-[#241a15]">{book.price}</span>
                <button className="bg-[#241a15] hover:bg-[#8c2d19] text-[#fbf8f2] text-[10px] font-bold py-1 px-3 uppercase tracking-wider">
                  Order
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* ================= 4. HERITAGE & ETHICS CHARTER (BOTTOM PANELS) ================= */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4">
        
        <div className="bg-[#fdfbf7] p-6 border-2 border-[#b8a68f] flex gap-5 items-center">
          <div className="w-24 h-24 shrink-0 bg-[#efe8db] border border-[#c7b8a3] overflow-hidden">
            <img
              src="https://images.pexels.com/photos/1370295/pexels-photo-1370295.jpeg?auto=compress&cs=tinysrgb&w=300"
              alt="Archival Booksellers"
              className="w-full h-full object-cover"
            />
          </div>
          <div>
            <h4 className="font-bold text-sm text-[#241a15]">Uncommonly Good Literature</h4>
            <p className="text-xs text-[#5c4a3e] mt-1 leading-relaxed">
              BLUE BOOK connects collectors with over 100 million antiquarian, used, and rare volumes through independent booksellers worldwide.
            </p>
            <a href="#" className="inline-block text-[10px] font-sans font-bold text-[#8c2d19] hover:underline mt-2 uppercase tracking-wider">
              Explore Our Guild Mission ›
            </a>
          </div>
        </div>

        <div className="bg-[#fdfbf7] p-6 border-2 border-[#b8a68f] flex gap-5 items-center">
          <div className="w-24 h-24 shrink-0 bg-[#efe8db] border border-[#c7b8a3] overflow-hidden">
            <img
              src="https://images.pexels.com/photos/256450/pexels-photo-256450.jpeg?auto=compress&cs=tinysrgb&w=300"
              alt="Social Responsibility"
              className="w-full h-full object-cover"
            />
          </div>
          <div>
            <div className="flex items-center gap-1.5 text-[#8c2d19] mb-0.5">
              <HeartHandshake className="w-3.5 h-3.5" />
              <span className="text-[10px] uppercase font-sans font-bold">Philanthropic Commitment</span>
            </div>
            <h4 className="font-bold text-sm text-[#241a15]">Building Global Community Libraries</h4>
            <p className="text-xs text-[#5c4a3e] mt-1 leading-relaxed">
              Since 2004, BLUE BOOK net proceeds have funded the establishment of 16 rural community libraries across South America.
            </p>
            <a href="#" className="inline-block text-[10px] font-sans font-bold text-[#8c2d19] hover:underline mt-2 uppercase tracking-wider">
              Read Our Social Charter ›
            </a>
          </div>
        </div>

      </div>

    </section>
  );
}