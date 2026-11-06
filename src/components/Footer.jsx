import React from 'react';
import { BookOpen, ShieldCheck, Mail, Feather, PhoneCall, Globe } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="w-full bg-[#18110e] text-[#e8dfcf] font-serif text-xs border-t-4 border-[#c29b38]">
      
      {/* ================= 1. TOP SPLIT: MANIFESTO & GAZETTE DESK ================= */}
      <div className="max-w-7xl mx-auto px-6 py-12 border-b border-[#302119]">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Left Side: Brand Colophon & Seal (7 Columns) */}
          <div className="lg:col-span-7 flex flex-col sm:flex-row items-center sm:items-start gap-6 text-center sm:text-left">
            <div className="w-24 h-24 shrink-0 bg-[#241a15] border-2 border-[#c29b38] p-2 shadow-xl flex flex-col items-center justify-center text-center">
              <span className="text-[7px] tracking-[0.25em] uppercase text-[#c29b38] font-sans font-bold">
                SEAL OF
              </span>
              <BookOpen className="w-6 h-6 text-[#c29b38] my-1" />
              <span className="text-[8px] font-sans font-black text-[#fbf8f2] tracking-widest uppercase">
                BLUE BOOK
              </span>
            </div>

            <div>
              <span className="text-[10px] tracking-[0.3em] uppercase text-[#c29b38] font-sans font-bold block mb-1">
                The Sovereign Antiquarian Guild • Est. 2003
              </span>
              <h3 className="text-2xl font-bold text-[#fbf8f2] leading-snug">
                Guardians of the Written Legacy
              </h3>
              <p className="text-xs text-[#a89685] mt-2 leading-relaxed max-w-xl font-serif italic">
                Unifying independent antiquarians, private estates, and passionate bibliophiles. Over 100 million verified volumes preserved, catalogued, and delivered worldwide.
              </p>
            </div>
          </div>

          {/* Right Side: The Gazette Subscription Card (5 Columns) */}
          <div className="lg:col-span-5 bg-[#221814] p-6 border-2 border-[#b8a68f] shadow-lg">
            <div className="flex items-center gap-2 text-[#c29b38] mb-1 font-sans font-bold text-[10px] tracking-widest uppercase">
              <Feather className="w-3.5 h-3.5" />
              <span>Private Gazette Dispatch</span>
            </div>
            <h4 className="text-base font-bold text-[#fbf8f2]">
              Join the Bibliophile's Registry
            </h4>
            <p className="text-[11px] text-[#9e8c7c] mt-1 mb-4 font-serif">
              Curated notifications on rare arrivals, signed manuscripts & patron privileges.
            </p>

            <form onSubmit={(e) => e.preventDefault()} className="flex items-center bg-[#fdfbf7] border border-[#b8a68f] overflow-hidden">
              <div className="pl-3 text-[#7a6452]">
                <Mail className="w-4 h-4" />
              </div>
              <input
                type="email"
                placeholder="Enter correspondence email..."
                className="w-full px-3 py-2 text-xs text-[#241a15] bg-transparent outline-none placeholder-[#8f8174] font-serif"
              />
              <button
                type="submit"
                className="bg-[#8c2d19] hover:bg-[#6e2213] text-[#fbf8f2] font-sans font-bold px-4 py-2 uppercase tracking-widest text-[10px] whitespace-nowrap transition-none"
              >
                DISPATCH
              </button>
            </form>
          </div>

        </div>
      </div>

      {/* ================= 2. MAIN BIBLIOGRAPHIC DIRECTORIES (4 COMPARTMENTS) ================= */}
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          
          {/* Compartment 1: Services */}
          <div className="bg-[#1c1410] p-5 border border-[#302119] shadow-inner">
            <h4 className="text-xs font-sans font-bold uppercase tracking-widest text-[#c29b38] border-b border-[#302119] pb-2 mb-3">
              Collector Services
            </h4>
            <div className="flex flex-col gap-2 font-sans text-xs text-[#b8a68f]">
              <a href="#" className="hover:text-[#c29b38] hover:underline flex items-center gap-1.5">
                <span className="text-[#8c2d19]">›</span> Your Patron Account
              </a>
              <a href="#" className="hover:text-[#c29b38] hover:underline flex items-center gap-1.5">
                <span className="text-[#8c2d19]">›</span> Archival Gift Certificates
              </a>
              <a href="#" className="hover:text-[#c29b38] hover:underline flex items-center gap-1.5">
                <span className="text-[#8c2d19]">›</span> The BLUE BOOK Guarantee
              </a>
              <a href="#" className="hover:text-[#c29b38] hover:underline flex items-center gap-1.5">
                <span className="text-[#8c2d19]">›</span> Track Dispatched Orders
              </a>
              <a href="#" className="hover:text-[#c29b38] hover:underline flex items-center gap-1.5">
                <span className="text-[#8c2d19]">›</span> Institutional Purchase Orders
              </a>
              <a href="#" className="hover:text-[#c29b38] hover:underline flex items-center gap-1.5">
                <span className="text-[#8c2d19]">›</span> Bulk Library Sourcing
              </a>
            </div>
          </div>

          {/* Compartment 2: The Press & Heritage */}
          <div className="bg-[#1c1410] p-5 border border-[#302119] shadow-inner">
            <h4 className="text-xs font-sans font-bold uppercase tracking-widest text-[#c29b38] border-b border-[#302119] pb-2 mb-3">
              The Press & Heritage
            </h4>
            <div className="flex flex-col gap-2 font-sans text-xs text-[#b8a68f]">
              <a href="#" className="hover:text-[#c29b38] hover:underline flex items-center gap-1.5">
                <span className="text-[#8c2d19]">›</span> Why Acquire with BLUE BOOK?
              </a>
              <a href="#" className="hover:text-[#c29b38] hover:underline flex items-center gap-1.5">
                <span className="text-[#8c2d19]">›</span> Our Antiquarian Chronicle
              </a>
              <a href="#" className="hover:text-[#c29b38] hover:underline flex items-center gap-1.5">
                <span className="text-[#8c2d19]">›</span> Certified Curators & Staff
              </a>
              <a href="#" className="hover:text-[#c29b38] hover:underline flex items-center gap-1.5">
                <span className="text-[#8c2d19]">›</span> Careers in Bibliophily
              </a>
              <a href="#" className="hover:text-[#c29b38] hover:underline flex items-center gap-1.5">
                <span className="text-[#8c2d19]">›</span> The Antiquarian Gazette Blog
              </a>
              <a href="#" className="hover:text-[#c29b38] hover:underline flex items-center gap-1.5">
                <span className="text-[#8c2d19]">›</span> Curator Inquiries & Contact
              </a>
            </div>
          </div>

          {/* Compartment 3: Philanthropy */}
          <div className="bg-[#1c1410] p-5 border border-[#302119] shadow-inner">
            <h4 className="text-xs font-sans font-bold uppercase tracking-widest text-[#c29b38] border-b border-[#302119] pb-2 mb-3">
              Social Philanthropy
            </h4>
            <div className="flex flex-col gap-2 font-sans text-xs text-[#b8a68f]">
              <a href="#" className="hover:text-[#c29b38] hover:underline flex items-center gap-1.5">
                <span className="text-[#8c2d19]">›</span> The Epic Bottom Line Charter
              </a>
              <a href="#" className="hover:text-[#c29b38] hover:underline flex items-center gap-1.5">
                <span className="text-[#8c2d19]">›</span> Rural Community Libraries
              </a>
              <a href="#" className="hover:text-[#c29b38] hover:underline flex items-center gap-1.5">
                <span className="text-[#8c2d19]">›</span> Carbon Neutral Transit Program
              </a>
              <a href="#" className="hover:text-[#c29b38] hover:underline flex items-center gap-1.5">
                <span className="text-[#8c2d19]">›</span> Literacy Outreach Latin America
              </a>
              <a href="#" className="hover:text-[#c29b38] hover:underline flex items-center gap-1.5">
                <span className="text-[#8c2d19]">›</span> Environmental Balance Report
              </a>
            </div>
          </div>

          {/* Compartment 4: Bibliographical Vault & Social */}
          <div className="bg-[#1c1410] p-5 border border-[#302119] shadow-inner flex flex-col justify-between">
            <div>
              <h4 className="text-xs font-sans font-bold uppercase tracking-widest text-[#c29b38] border-b border-[#302119] pb-2 mb-3">
                Bibliographical Vault
              </h4>
              <div className="flex flex-col gap-2 font-sans text-xs text-[#b8a68f]">
                <a href="#" className="hover:text-[#c29b38] hover:underline flex items-center gap-1.5">
                  <span className="text-[#8c2d19]">›</span> Book Collecting Lexicon
                </a>
                <a href="#" className="hover:text-[#c29b38] hover:underline flex items-center gap-1.5">
                  <span className="text-[#8c2d19]">›</span> Become an Independent Dealer
                </a>
                <a href="#" className="hover:text-[#c29b38] hover:underline flex items-center gap-1.5">
                  <span className="text-[#8c2d19]">›</span> Historic Auction Archive (ABSA)
                </a>
              </div>
            </div>

            {/* Social Icons Box */}
            <div className="pt-4 border-t border-[#302119] mt-4">
              <span className="text-[10px] uppercase font-sans font-bold text-[#7a6452] block mb-2">
                Curator Channels
              </span>
              <div className="flex items-center gap-4 text-[#b8a68f]">
                <a href="#" className="hover:text-[#c29b38]">
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c5.05-.5 9-4.76 9-9.95z"/>
                  </svg>
                </a>
                <a href="#" className="hover:text-[#c29b38]">
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </a>
                <a href="#" className="hover:text-[#c29b38]">
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* ================= 3. MULTI-BAR FOOTNOTE & HOTLINE ================= */}
      <div className="bg-[#120c09] py-6 border-t border-[#291b14] font-sans text-[11px] text-[#7a6452]">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
          
          {/* Accreditation Badge */}
          <div className="flex items-center gap-2 border border-[#c29b38] px-2.5 py-1 text-[#c29b38] text-[10px] font-bold">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>CERTIFIED ACCREDITED GUILD</span>
          </div>

          {/* Legal / Policy Links */}
          <div className="flex flex-wrap items-center justify-center gap-3 text-center">
            <a href="#" className="hover:text-[#c29b38] hover:underline">Privacy Charter</a>
            <span>•</span>
            <a href="#" className="hover:text-[#c29b38] hover:underline">Accessibility Notice</a>
            <span>•</span>
            <a href="#" className="hover:text-[#c29b38] hover:underline">Terms of Trade</a>
            <span>•</span>
            <a href="#" className="hover:text-[#c29b38] hover:underline">Index Sitemap</a>
          </div>

          {/* Hotline / Support */}
          <div className="flex items-center gap-1.5 text-[#b8a68f]">
            <PhoneCall className="w-3.5 h-3.5 text-[#c29b38]" />
            <span>Curator Support: 1-800-813-9432</span>
          </div>

        </div>

        {/* Copyright Line */}
        <div className="max-w-7xl mx-auto px-6 mt-4 pt-3 border-t border-[#1f1510] text-center text-[10px] text-[#5c4a3e] font-serif italic">
          Copyright © 2003–2025 BLUE BOOK International Antiquarians, Inc. All registered rights reserved across all jurisdictions.
        </div>
      </div>

    </footer>
  );
}