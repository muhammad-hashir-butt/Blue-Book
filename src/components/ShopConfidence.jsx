import React from 'react';
import { Leaf, ShieldCheck, Store, CheckCircle2 } from 'lucide-react';

export default function ShopConfidence() {
  
  // Data for the 3 confidence plaques
  const features = [
    {
      id: 1,
      badge: "Environmental Stewardship",
      icon: <Leaf className="w-6 h-6 text-[#241a15]" />,
      title: "Carbon Neutral Transit",
      description: "We conscientiously calculate and completely offset carbon emissions generated on every literary shipment across the globe."
    },
    {
      id: 2,
      badge: "The Archival Standard",
      icon: <ShieldCheck className="w-6 h-6 text-[#c29b38]" />,
      title: "The BLUE BOOK Guarantee",
      description: "Shop with absolute peace of mind. Every volume is guaranteed to match its bibliographic condition notes precisely, or your investment is promptly refunded."
    },
    {
      id: 3,
      badge: "Sovereign Booksellers",
      icon: <Store className="w-6 h-6 text-[#241a15]" />,
      title: "#fiercelyindie",
      description: "BLUE BOOK has remained an independent, family-owned, and employee-guided literary collective since our original founding in 2003."
    }
  ];

  return (
    <section className="max-w-7xl mx-auto px-6 py-12 font-serif">
      
      {/* Decorative Vintage Top Divider */}
      <div className="flex items-center justify-center gap-4 mb-8">
        <span className="h-[1px] w-full bg-[#d6c7b2]"></span>
        <span className="text-[#8c7355] text-xs">♦ ♦ ♦</span>
        <span className="h-[1px] w-full bg-[#d6c7b2]"></span>
      </div>

      {/* Section Header */}
      <div className="text-center max-w-xl mx-auto mb-10">
        <span className="text-[10px] tracking-[0.3em] uppercase font-sans font-bold text-[#8c7355] block">
          Patron Assurances
        </span>
        <h2 className="text-2xl sm:text-3xl font-bold text-[#241a15] mt-1">
          The Collector's Pledge
        </h2>
        <p className="text-xs text-[#6e5d50] mt-2 font-serif italic">
          Every acquisition through BLUE BOOK is governed by our founding principles of bibliographic integrity and ethical trade.
        </p>
      </div>

      {/* 3 Guild Plaques Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center items-stretch">
        {features.map((item) => (
          <div 
            key={item.id} 
            className={`p-7 flex flex-col justify-between items-center bg-[#fdfbf7] border-2 shadow-sm ${
              item.id === 2 
                ? 'border-[#c29b38] bg-[#fbf8f2] shadow-md relative' 
                : 'border-[#b8a68f]'
            }`}
          >
            
            {/* Top Sub-tag */}
            <div>
              <span className="text-[9px] tracking-[0.2em] uppercase font-sans font-bold text-[#8c2d19] block mb-4">
                {item.badge}
              </span>

              {/* Embossed Wax Seal Icon */}
              <div className="mb-4 w-14 h-14 rounded-full bg-[#efe8db] border-2 border-[#c29b38] flex items-center justify-center mx-auto shadow-inner">
                {item.icon}
              </div>

              {/* Feature Title */}
              <h3 className="font-bold text-base text-[#241a15] mb-2 font-serif">
                {item.title}
              </h3>

              {/* Feature Description */}
              <p className="text-xs text-[#5c4a3e] leading-relaxed font-serif">
                {item.description}
              </p>
            </div>

            {/* Bottom Seal Checkmark */}
            <div className="mt-6 pt-4 border-t border-[#e2d7c5] w-full flex items-center justify-center gap-1.5 text-[10px] text-[#7a6452] font-sans uppercase tracking-wider font-semibold">
              <CheckCircle2 className="w-3.5 h-3.5 text-[#8c2d19]" />
              <span>Verified Patron Standard</span>
            </div>

          </div>
        ))}
      </div>

      {/* Decorative Vintage Bottom Divider */}
      <div className="flex items-center justify-center gap-4 mt-12">
        <span className="h-[1px] w-full bg-[#d6c7b2]"></span>
        <span className="text-[#8c7355] text-xs">♦</span>
        <span className="h-[1px] w-full bg-[#d6c7b2]"></span>
      </div>

    </section>
  );
}