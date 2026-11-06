import React from 'react';
import { Link } from 'react-router-dom';
import { BookOpen, ArrowLeft } from 'lucide-react';

export default function LawFinanceStatecraft() {
  const books = [
    {
      id: 1,
      title: "Commentaries on the Laws of England",
      author: "Sir William Blackstone (1765)",
      format: "Four-Volume First Edition",
      price: "$520.00",
      image: "https://images.pexels.com/photos/159711/books-bookstore-book-reading-159711.jpeg?auto=compress&cs=tinysrgb&w=400"
    },
    {
      id: 2,
      title: "The Federalist Papers",
      author: "Hamilton, Madison & Jay",
      format: "Antiquarian American Binding",
      price: "$480.00",
      image: "https://images.pexels.com/photos/762687/pexels-photo-762687.jpeg?auto=compress&cs=tinysrgb&w=400"
    },
    {
      id: 3,
      title: "The Prince (Il Principe)",
      author: "Niccolò Machiavelli",
      format: "Early Italian Printing",
      price: "$290.00",
      image: "https://images.pexels.com/photos/904616/pexels-photo-904616.jpeg?auto=compress&cs=tinysrgb&w=400"
    },
    {
      id: 4,
      title: "Magna Carta Cum Statutis",
      author: "Richard Tottell Press (1556)",
      format: "Sixteenth-Century Law Calf",
      price: "$600.00",
      image: "https://images.pexels.com/photos/1005324/pexels-photo-1005324.jpeg?auto=compress&cs=tinysrgb&w=400"
    },
    {
      id: 5,
      title: "Theory of Moral Sentiments",
      author: "Adam Smith (1759)",
      format: "First Edition First Issue",
      price: "$420.00",
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
          <span>Classical Rarities</span>
          <span>/</span>
          <span className="text-[#8c2d19] font-bold">Law, Finance & Statecraft</span>
        </div>

        <div className="bg-[#241a15] text-[#fbf8f2] p-8 border-2 border-[#c29b38] shadow-md mb-10 text-center sm:text-left flex flex-col sm:flex-row justify-between items-center gap-6">
          <div>
            <h1 className="text-3xl sm:text-4xl font-bold">Law, Finance & Statecraft</h1>
            <p className="text-xs text-[#b8a68f] mt-2 max-w-xl italic">
              Foundational legal jurisprudence, financial treatises, and early constitutional documents.
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