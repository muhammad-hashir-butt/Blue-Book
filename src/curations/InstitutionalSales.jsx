import React from 'react';
import { Link } from 'react-router-dom';
import { Landmark, ShieldCheck, Store, Leaf, FileText, ArrowLeft, Mail, PhoneCall } from 'lucide-react';

export default function InstitutionalSales() {
  return (
    <div className="w-full bg-[#fbf8f2] text-[#2c241e] font-serif py-10 px-6">
      <div className="max-w-7xl mx-auto">
        
        {/* Breadcrumb Navigation */}
        <div className="flex items-center gap-2 text-xs font-sans text-[#7a6452] mb-6">
          <Link to="/" className="hover:text-[#8c2d19] hover:underline flex items-center gap-1">
            <ArrowLeft className="w-3.5 h-3.5" /> Back to Home
          </Link>
          <span>/</span>
          <span>Curations</span>
          <span>/</span>
          <span className="text-[#8c2d19] font-bold">Institutional Sales</span>
        </div>

        {/* Page Header Banner */}
        <div className="bg-[#241a15] text-[#fbf8f2] p-8 border-2 border-[#c29b38] shadow-md mb-10 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6">
          <div>
            <div className="flex items-center gap-2 text-[#c29b38] text-[10px] tracking-[0.3em] uppercase font-sans font-bold mb-2">
              <Landmark className="w-4 h-4" />
              <span>Academic, University & Public Library Services</span>
            </div>
            <h1 className="text-3xl sm:text-4xl font-bold font-serif">
              Institutional Acquisitions & Library Sales
            </h1>
            <p className="text-xs text-[#b8a68f] mt-2 max-w-2xl font-serif italic">
              Dedicated archival procurement, tax-exempt institutional ordering, and specialized collections acquisition for academic institutions worldwide.
            </p>
          </div>

          <div className="text-right shrink-0 border-t sm:border-t-0 sm:border-l border-[#3d2c23] pt-4 sm:pt-0 sm:pl-8">
            <span className="text-[10px] text-[#c29b38] font-sans font-bold uppercase tracking-widest block">
              Program Status
            </span>
            <span className="text-sm font-sans font-bold text-white">Active Guild Charter</span>
          </div>
        </div>

        {/* ================= MAIN TWO-COLUMN LAYOUT ================= */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* LEFT COLUMN: Main Article & Details (8 Columns) */}
          <div className="lg:col-span-8 bg-[#fdfbf7] p-8 sm:p-10 border-2 border-[#b8a68f] shadow-sm">
            
            <div className="border-b border-[#e2d7c5] pb-4 mb-6">
              <span className="text-[10px] uppercase font-sans font-bold tracking-widest text-[#8c2d19]">
                Institutional Charter • Revised 2025
              </span>
              <h2 className="text-2xl font-bold text-[#241a15] mt-1">
                BLUE BOOK for Libraries & Academic Archives
              </h2>
            </div>

            {/* Intro Text */}
            <div className="text-xs sm:text-sm text-[#45362b] leading-relaxed space-y-4">
              <p>
                For over two decades, BLUE BOOK has maintained an unwavering commitment to the stewardship of literacy and cultural preservation. We recognize that libraries, historical societies, and academic repositories serve as the sacred guardians of our collective intellectual heritage.
              </p>
              <p>
                To support this noble mission, we extend an automatic <strong>10% Archival Rebate</strong> on all verified institutional acquisitions across our global marketplace of over 100 million used, rare, and out-of-print volumes.
              </p>
            </div>

            {/* Institutional Benefits Callout */}
            <div className="my-8 bg-[#efe8db] p-6 border-l-4 border-[#8c2d19] border-y border-r border-[#d6c7b2]">
              <h3 className="font-bold text-sm text-[#241a15] uppercase tracking-wider font-sans mb-3">
                Key Institutional Privileges:
              </h3>
              <ul className="text-xs text-[#45362b] space-y-2 font-serif list-disc list-inside">
                <li>Immediate <strong>10% discount</strong> on all catalogued volumes.</li>
                <li>Official <strong>Purchase Order (PO) & Net-30</strong> invoice fulfillment.</li>
                <li>Dedicated personal bibliographer assigned to your institution's desiderata lists.</li>
                <li>Complimentary condition inspection reports and archival packing.</li>
              </ul>
            </div>

            {/* Action CTA Button */}
            <div className="my-6">
              <button className="bg-[#8c2d19] hover:bg-[#6e2213] text-[#fbf8f2] font-sans font-bold text-xs uppercase tracking-widest py-3 px-8 shadow">
                ENROLL INSTITUTION TODAY
              </button>
            </div>

            {/* Protocol Steps */}
            <div className="mt-8 pt-6 border-t border-[#e2d7c5]">
              <h4 className="font-bold text-sm text-[#241a15] mb-3">
                How Institutional Purchasing Works:
              </h4>
              <ol className="text-xs text-[#5c4a3e] space-y-2.5 font-sans list-decimal list-inside leading-relaxed">
                <li>Submit your institutional accreditation code or library credentials.</li>
                <li>Receive your permanent Institutional Identification Token.</li>
                <li>Your 10% discount is automatically deducted upon checkout or invoice generation.</li>
              </ol>
            </div>

            {/* Direct Support Contact */}
            <div className="mt-8 pt-6 border-t border-[#e2d7c5] flex flex-wrap items-center justify-between gap-4 text-xs font-sans text-[#7a6452]">
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-[#8c2d19]" />
                <span>institutions@bluebook.org</span>
              </div>
              <div className="flex items-center gap-2">
                <PhoneCall className="w-4 h-4 text-[#8c2d19]" />
                <span>Curator Hotline: 1-800-813-9432</span>
              </div>
            </div>

          </div>

          {/* RIGHT COLUMN: Archival Assurances Sidebar (4 Columns) */}
          <div className="lg:col-span-4 bg-[#fdfbf7] p-6 border-2 border-[#b8a68f] shadow-sm flex flex-col gap-6">
            
            <div className="text-center border-b border-[#e2d7c5] pb-4">
              <span className="text-[9px] tracking-widest uppercase font-sans font-bold text-[#8c7355] block">
                Patron Safeguards
              </span>
              <h3 className="text-lg font-bold text-[#241a15] font-serif mt-1">
                Acquire with Confidence
              </h3>
            </div>

            {/* Item 1: Guarantee */}
            <div className="flex items-start gap-4 pb-4 border-b border-[#e2d7c5]">
              <div className="w-10 h-10 rounded-full bg-[#efe8db] border border-[#c29b38] flex items-center justify-center shrink-0">
                <ShieldCheck className="w-5 h-5 text-[#8c2d19]" />
              </div>
              <div>
                <h4 className="font-bold text-xs text-[#241a15]">The BLUE BOOK Guarantee</h4>
                <p className="text-[11px] text-[#6e5d50] mt-1 leading-relaxed">
                  Every acquisition is guaranteed to match bibliographic descriptions precisely, or your institution receives an immediate refund.
                </p>
              </div>
            </div>

            {/* Item 2: Fiercely Independent */}
            <div className="flex items-start gap-4 pb-4 border-b border-[#e2d7c5]">
              <div className="w-10 h-10 rounded-full bg-[#efe8db] border border-[#c29b38] flex items-center justify-center shrink-0">
                <Store className="w-5 h-5 text-[#8c2d19]" />
              </div>
              <div>
                <h4 className="font-bold text-xs text-[#241a15]">#fiercelyindie</h4>
                <p className="text-[11px] text-[#6e5d50] mt-1 leading-relaxed">
                  Independent, family, and employee-owned since our launch in 2003, championing sovereign bookseller heritage.
                </p>
              </div>
            </div>

            {/* Item 3: Carbon Neutral Transit */}
            <div className="flex items-start gap-4 pb-4 border-b border-[#e2d7c5]">
              <div className="w-10 h-10 rounded-full bg-[#efe8db] border border-[#c29b38] flex items-center justify-center shrink-0">
                <Leaf className="w-5 h-5 text-[#8c2d19]" />
              </div>
              <div>
                <h4 className="font-bold text-xs text-[#241a15]">Carbon Neutral Transit</h4>
                <p className="text-[11px] text-[#6e5d50] mt-1 leading-relaxed">
                  We responsibly calculate and offset 100% of carbon emissions generated on every archival shipment.
                </p>
              </div>
            </div>

            {/* Item 4: Purchase Orders */}
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-full bg-[#efe8db] border border-[#c29b38] flex items-center justify-center shrink-0">
                <FileText className="w-5 h-5 text-[#8c2d19]" />
              </div>
              <div>
                <h4 className="font-bold text-xs text-[#241a15]">Net-30 PO Accounts</h4>
                <p className="text-[11px] text-[#6e5d50] mt-1 leading-relaxed">
                  Seamless procurement terms for accredited schools, universities, and municipal public libraries.
                </p>
              </div>
            </div>

          </div>

        </div>

      </div>
    </div>
  );
}