import React from 'react';
import { Link } from 'react-router-dom';
import { BookOpen, ArrowLeft } from 'lucide-react';

export default function AntiquarianLeatherbounds() {

  // ========================================================
  // 5 BOOKS DATA (Change Title, Author, Price and Images here)
  // ========================================================
  const books = [
    {
      id: 1,
      title: "The Works of William Shakespeare",
      author: "William Shakespeare",
      format: "Victorian Full Calf Leather",
      price: "$240.00",
      // Change image here (e.g., "/rare/leather1.png"):
      image: "https://images.pexels.com/photos/159711/books-bookstore-book-reading-159711.jpeg?auto=compress&cs=tinysrgb&w=400"
    },
    {
      id: 2,
      title: "Paradise Lost & Regained",
      author: "John Milton",
      format: "Gilt-Tooled Morocco Leather",
      price: "$190.00",
      // Change image here (e.g., "/rare/leather2.png"):
      image: "https://images.pexels.com/photos/762687/pexels-photo-762687.jpeg?auto=compress&cs=tinysrgb&w=400"
    },
    {
      id: 3,
      title: "The Rubaiyat of Omar Khayyam",
      author: "Edward FitzGerald Translation",
      format: "Hand-Bound Crimson Suede",
      price: "$110.00",
      // Change image here (e.g., "/rare/leather3.png"):
      image: "https://images.pexels.com/photos/904616/pexels-photo-904616.jpeg?auto=compress&cs=tinysrgb&w=400"
    },
    {
      id: 4,
      title: "Gulliver's Travels",
      author: "Jonathan Swift",
      format: "Antique Marbled Calfskin",
      price: "$135.00",
      // Change image here (e.g., "/rare/leather4.png"):
      image: "https://images.pexels.com/photos/1005324/pexels-photo-1005324.jpeg?auto=compress&cs=tinysrgb&w=400"
    },
    {
      id: 5,
      title: "Don Quixote de la Mancha",
      author: "Miguel de Cervantes",
      format: "Two-Volume Spanish Leather",
      price: "$210.00",
      // Change image here (e.g., "/rare/leather5.png"):
      image: "https://images.pexels.com/photos/415071/pexels-photo-415071.jpeg?auto=compress&cs=tinysrgb&w=400"
    }
  ];

  return (
    <div className="w-full bg-[#fbf8f2] text-[#2c241e] font-serif py-10 px-6">
      <div className="max-w-7xl mx-auto">
        
        {/* Breadcrumb Navigation */}
        <div className="flex items-center gap-2 text-xs font-sans text-[#7a6452] mb-6">
          <Link to="/" className="hover:text-[#8c2d19] hover:underline flex items-center gap-1">
            <ArrowLeft className="w-3.5 h-3.5" /> Back to Home
          </Link>
          <span>/</span>
          <span>Classical Rarities</span>
          <span>/</span>
          <span className="text-[#8c2d19] font-bold">Antiquarian Leatherbounds</span>
        </div>

        {/* Page Header Banner */}
        <div className="bg-[#241a15] text-[#fbf8f2] p-8 border-2 border-[#c29b38] shadow-md mb-10 text-center sm:text-left flex flex-col sm:flex-row justify-between items-center gap-6">
          <div>
            <div className="flex items-center justify-center sm:justify-start gap-2 text-[#c29b38] text-[10px] tracking-[0.3em] uppercase font-sans font-bold mb-2">
              <BookOpen className="w-4 h-4" />
              <span>Gilt-Tooled Bindings & Mastercraft Folios</span>
            </div>
            <h1 className="text-3xl sm:text-4xl font-bold font-serif">
              Antiquarian Leatherbounds
            </h1>
            <p className="text-xs text-[#b8a68f] mt-2 max-w-xl font-serif italic">
              Examine extraordinary calfskin, crushed levant morocco, and hand-tooled antique bindings preserving historic literary monuments for centuries.
            </p>
          </div>

          <div className="text-right shrink-0 border-t sm:border-t-0 sm:border-l border-[#3d2c23] pt-4 sm:pt-0 sm:pl-8">
            <span className="text-xs text-[#c29b38] font-sans font-bold uppercase tracking-widest block">
              Curated Index
            </span>
            <span className="text-2xl font-bold font-sans text-white">5 Volumes</span>
          </div>
        </div>

        {/* ================= 5 BOOKS COLLECTION GRID ================= */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {books.map((book) => (
            <div
              key={book.id}
              className="bg-[#fdfbf7] p-4 border-2 border-[#b8a68f] shadow-sm flex flex-col justify-between hover:border-[#8c2d19]"
            >
              <div>
                {/* Book Cover Image Container */}
                <div className="w-full h-56 bg-[#efe8db] p-1 border border-[#c7b8a3] shadow-inner overflow-hidden mb-4 flex items-center justify-center">
                  <img
                    src={book.image}
                    alt={book.title}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      e.target.src = "https://images.pexels.com/photos/159711/books-bookstore-book-reading-159711.jpeg?auto=compress&cs=tinysrgb&w=400";
                    }}
                  />
                </div>

                {/* Format Badge */}
                <span className="text-[9px] font-sans font-bold text-[#8c2d19] border border-[#c29b38] bg-[#fbf8f2] px-2 py-0.5 uppercase tracking-wide inline-block mb-2">
                  {book.format}
                </span>

                {/* Book Title Heading */}
                <h3 className="text-sm font-bold text-[#241a15] leading-snug line-clamp-2">
                  {book.title}
                </h3>

                {/* Author Name */}
                <p className="text-xs text-[#7a6452] italic mt-1">
                  by {book.author}
                </p>
              </div>

              {/* Price & Action Button */}
              <div className="mt-5 pt-3 border-t border-[#e2d7c5] flex items-center justify-between">
                <div>
                  <span className="text-[9px] text-[#8f8174] uppercase font-sans block">Price</span>
                  <span className="text-sm font-bold text-[#241a15] font-sans">{book.price}</span>
                </div>
                <button className="bg-[#241a15] hover:bg-[#8c2d19] text-[#fbf8f2] text-[10px] font-sans font-bold py-1.5 px-3 uppercase tracking-wider">
                  Acquire
                </button>
              </div>

            </div>
          ))}
        </div>

        {/* Bottom Filigree Divider */}
        <div className="flex items-center justify-center gap-4 mt-16">
          <span className="h-[1px] w-full bg-[#d6c7b2]"></span>
          <span className="text-[#8c7355] text-xs">♦ ♦ ♦</span>
          <span className="h-[1px] w-full bg-[#d6c7b2]"></span>
        </div>

      </div>
    </div>
  );
}