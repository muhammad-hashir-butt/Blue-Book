import React from 'react';
import { Link } from 'react-router-dom';
import { Utensils, ArrowLeft } from 'lucide-react';

export default function HistoricCookeryTreatises() {
  const books = [
    {
      id: 1,
      title: "The Forme of Cury",
      author: "Master Cooks of King Richard II (1390)",
      format: "Antiquarian Middle English Vellum",
      price: "$480.00",
      image: "https://images.pexels.com/photos/159711/books-bookstore-book-reading-159711.jpeg?auto=compress&cs=tinysrgb&w=400"
    },
    {
      id: 2,
      title: "Le Viandier de Taillevent",
      author: "Guillaume Tirel (1486)",
      format: "Fifteenth-Century French Folio",
      price: "$520.00",
      image: "https://images.pexels.com/photos/762687/pexels-photo-762687.jpeg?auto=compress&cs=tinysrgb&w=400"
    },
    {
      id: 3,
      title: "Apicius: De Re Coquinaria",
      author: "Ancient Roman Culinary Compendium",
      format: "Renaissance Latin Printing",
      price: "$340.00",
      image: "https://images.pexels.com/photos/904616/pexels-photo-904616.jpeg?auto=compress&cs=tinysrgb&w=400"
    },
    {
      id: 4,
      title: "The English Huswife",
      author: "Gervase Markham (1615)",
      format: "Early Stuart Domestic Calf",
      price: "$290.00",
      image: "https://images.pexels.com/photos/1005324/pexels-photo-1005324.jpeg?auto=compress&cs=tinysrgb&w=400"
    },
    {
      id: 5,
      title: "Opera dell'arte del cucinare",
      author: "Bartolomeo Scappi (1570)",
      format: "Illustrated Papal Banquet Folio",
      price: "$610.00",
      image: "https://images.pexels.com/photos/415071/pexels-photo-415071.jpeg?auto=compress&cs=tinysrgb&w=400"
    }
  ];

  return (
    <div className="w-full bg-[#fbf8f2] text-[#2c241e] font-serif py-10 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center gap-2 text-xs font-sans text-[#7a6452] mb-6">
          <Link to="/" className="hover:text-[#8c2d19] hover:underline flex items-center gap-1">
            <ArrowLeft className="w-3.5 h-3.5" /> Back to Home
          </Link>
          <span>/</span>
          <span>Period Treasures</span>
          <span>/</span>
          <span className="text-[#8c2d19] font-bold">Historic Cookery Treatises</span>
        </div>

        <div className="bg-[#241a15] text-[#fbf8f2] p-8 border-2 border-[#c29b38] shadow-md mb-10 text-center sm:text-left flex flex-col sm:flex-row justify-between items-center gap-6">
          <div>
            <h1 className="text-3xl sm:text-4xl font-bold">Historic Cookery Treatises</h1>
            <p className="text-xs text-[#b8a68f] mt-2 max-w-xl italic">
              Medieval manuscripts, Renaissance banqueting manuals, and early culinary treatises.
            </p>
          </div>
          <div className="text-right shrink-0">
            <span className="text-xs text-[#c29b38] font-sans font-bold uppercase tracking-widest block">Curated Index</span>
            <span className="text-2xl font-bold font-sans text-white">5 Volumes</span>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {books.map((book) => (
            <div key={book.id} className="bg-[#fdfbf7] p-4 border-2 border-[#b8a68f] shadow-sm flex flex-col justify-between hover:border-[#8c2d19]">
              <div>
                <div className="w-full h-56 bg-[#efe8db] p-1 border border-[#c7b8a3] mb-4 overflow-hidden">
                  <img src={book.image} alt={book.title} className="w-full h-full object-cover" />
                </div>
                <span className="text-[9px] font-sans font-bold text-[#8c2d19] border border-[#c29b38] px-2 py-0.5 uppercase block mb-2">{book.format}</span>
                <h3 className="text-sm font-bold text-[#241a15] line-clamp-2">{book.title}</h3>
                <p className="text-xs text-[#7a6452] italic mt-1">by {book.author}</p>
              </div>
              <div className="mt-5 pt-3 border-t border-[#e2d7c5] flex items-center justify-between">
                <span className="text-sm font-bold text-[#241a15] font-sans">{book.price}</span>
                <button className="bg-[#241a15] hover:bg-[#8c2d19] text-[#fbf8f2] text-[10px] font-sans font-bold py-1.5 px-3 uppercase tracking-wider">Acquire</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}