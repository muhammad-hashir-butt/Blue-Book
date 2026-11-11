import React, { useState } from "react";

export default function MarketingPage() {
  const [activeTab, setActiveTab] = useState("amazon");
  const [form, setForm] = useState({
    authorOrPublisher: "",
    contactName: "",
    email: "",
    amazonLinkOrAsin: "",
    genre: "Literary Fiction",
    targetMarket: "Amazon US and Global",
    primaryService: "Full-Service Book Publishing and Print Production",
    monthlyBudget: "$1,500 - $3,500",
    campaignNotes: "",
    termsAccepted: false,
  });
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const update = (e) => {
    const { name, value, type, checked } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
    setError("");
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (!form.authorOrPublisher || !form.contactName || !form.email || !form.campaignNotes) {
      setError("Please complete all required fields marked with an asterisk.");
      return;
    }
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(form.email)) {
      setError("Please provide a valid professional email address.");
      return;
    }
    if (!form.termsAccepted) {
      setError("Please acknowledge our privacy and campaign terms.");
      return;
    }
    setSubmitted(true);
  };

  const scrollToForm = () => {
    document.getElementById("inquiry-desk")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-[#FAF7F2] text-[#241A15] selection:bg-[#8C2D19] selection:text-white">
      {/* Editorial Typography (Newsreader + Cinzel + Lora) */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cinzel:wght@600;700;800&family=Newsreader:ital,opsz,wght@0,6..72,400;0,6..72,500;0,6..72,600;0,6..72,700;1,6..72,400&family=Lora:ital,wght@0,400;0,500;1,400&display=swap');
        
        .font-serif-heading {
          font-family: 'Newsreader', Georgia, serif;
          font-style: normal;
          letter-spacing: -0.015em;
        }
        .font-editorial-caps {
          font-family: 'Cinzel', serif;
          letter-spacing: 0.18em;
        }
        .font-serif-body {
          font-family: 'Lora', Georgia, serif;
          font-style: normal;
        }
      `}</style>

      {/* =========================================================
          HERO SECTION: THUNDERSMOUTH LITERARY
      ========================================================= */}
      <section className="border-b border-[#E3D7C5]">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 py-16 sm:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* Left Content Side */}
            <div className="lg:col-span-7">
              <div className="flex items-center gap-3 mb-6">
                <span className="w-8 h-px bg-[#8C2D19]" />
                <span className="text-[11px] uppercase tracking-[0.25em] font-bold text-[#8C2D19]">
                  LITERARY PUBLISHING, MARKETING, AND ACCELERATION
                </span>
              </div>

              <h1 className="text-3xl sm:text-4xl md:text-[46px] font-bold leading-[1.18] font-serif-heading text-[#241A15]">
                Book Publishing, Amazon Advertising, and Catalog Growth.
              </h1>

              <p className="font-serif-body text-sm sm:text-[15px] text-[#5C4A3E] mt-6 leading-7 sm:leading-8 max-w-xl">
                From structural editing and classical interior typesetting to worldwide wholesale distribution,
                Amazon PPC management, and bespoke A+ Content, we provide an end-to-end publishing infrastructure
                for authors, university presses, and independent imprints.
              </p>

              {/* Action Buttons */}
              <div className="mt-9 flex flex-wrap items-center gap-4">
                <button
                  onClick={scrollToForm}
                  className="bg-[#8C2D19] text-white py-3.5 px-7 text-xs font-semibold tracking-wider uppercase cursor-pointer shadow-sm"
                >
                  Request Publishing Proposal
                </button>
                <a
                  href="#publishing-suite"
                  className="border border-[#241A15] text-[#241A15] py-3.5 px-6 text-xs font-semibold tracking-wider uppercase text-center cursor-pointer"
                >
                  Explore Publishing Services
                </a>
              </div>

              <div className="mt-9 pt-6 border-t border-[#E8DDCE] flex flex-wrap items-center gap-6 text-xs text-[#7A6758] font-serif-body">
                <span>Independent Authors</span>
                <span>•</span>
                <span>Mid-Sized Presses</span>
                <span>•</span>
                <span>Academic and University Imprints</span>
              </div>
            </div>

            {/* Right Editorial Image Frame */}
            <div className="lg:col-span-5">
              <div className="bg-[#FCFAF6] p-3 border border-[#D8CCBD] shadow-sm">
                <div className="relative h-[320px] sm:h-[380px] overflow-hidden bg-[#E8DECE]">
                  <img
                    src="https://images.unsplash.com/photo-1507842217343-583bb7270b66?auto=format&fit=crop&w=1200&q=85"
                    alt="Fine library and books collection"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1A120E]/80 via-transparent to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <p className="text-[10px] uppercase tracking-[0.2em] text-[#D4A753] font-editorial-caps font-bold">
                      END-TO-END PUBLISHING
                    </p>
                    <p className="font-serif-heading text-sm sm:text-base font-bold mt-1">
                      Crafting Volumes Worth Preserving for Decades.
                    </p>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* =========================================================
          VERIFIABLE PERFORMANCE METRICS STRIP
      ========================================================= */}
      <section className="bg-[#F2ECE0] border-b border-[#E3D7C5] py-8">
        <div className="max-w-7xl mx-auto px-6 sm:px-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8">
            <div className="border-l border-[#D5C6B3] pl-5 sm:pl-6">
              <span className="block text-2xl sm:text-[28px] font-bold font-serif-heading text-[#241A15]">
                $2.4M+
              </span>
              <span className="text-[10px] sm:text-[11px] uppercase tracking-wider text-[#735F50] mt-1 block font-medium leading-relaxed">
                Managed Book Sales and Ad Spend
              </span>
            </div>

            <div className="border-l border-[#D5C6B3] pl-5 sm:pl-6">
              <span className="block text-2xl sm:text-[28px] font-bold font-serif-heading text-[#241A15]">
                40,000+
              </span>
              <span className="text-[10px] sm:text-[11px] uppercase tracking-wider text-[#735F50] mt-1 block font-medium leading-relaxed">
                Global Retail and Library Outlets
              </span>
            </div>

            <div className="border-l border-[#D5C6B3] pl-5 sm:pl-6">
              <span className="block text-2xl sm:text-[28px] font-bold font-serif-heading text-[#241A15]">
                430+
              </span>
              <span className="text-[10px] sm:text-[11px] uppercase tracking-wider text-[#735F50] mt-1 block font-medium leading-relaxed">
                Category Number One Bestsellers
              </span>
            </div>

            <div className="border-l border-[#D5C6B3] pl-5 sm:pl-6">
              <span className="block text-2xl sm:text-[28px] font-bold font-serif-heading text-[#241A15]">
                185,000+
              </span>
              <span className="text-[10px] sm:text-[11px] uppercase tracking-wider text-[#735F50] mt-1 block font-medium leading-relaxed">
                Direct Bibliophile Subscribers
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          EDITORIAL FRAMEWORK SECTION
      ========================================================= */}
      <section className="max-w-7xl mx-auto px-6 sm:px-10 py-16 md:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          
          {/* Left Column */}
          <div className="lg:col-span-7">
            <p className="text-[11px] uppercase tracking-[0.2em] font-sans font-bold text-[#8C2D19] mb-4">
              COMMERCIAL AND EDITORIAL STRATEGY
            </p>

            <h2 className="text-2xl sm:text-3xl md:text-[34px] font-bold leading-snug font-serif-heading text-[#241A15]">
              A Commercial Framework Built Around Reader Conversion.
            </h2>

            <p className="font-serif-body text-[#5C4A3E] text-sm sm:text-[15px] leading-7 sm:leading-8 mt-6">
              In publishing, advertising spend without detail page optimization is wasted capital.
              Driving traffic to an Amazon product page with uncalibrated metadata and flat text leads
              to immediate bounce rates. We resolve this by combining custom Amazon A+ Content modules,
              credible critic endorsements, and clean comparison tables that turn browsing sessions into paid orders.
            </p>

            <p className="font-serif-body text-[#5C4A3E] text-sm sm:text-[15px] leading-7 sm:leading-8 mt-5">
              Simultaneously, we calibrate backend indexing—auditing 250-byte search term limits, keyword intent,
              and low-competition category paths. This ensures Amazon’s organic recommendation carousels actively
              promote your titles to proven buyers within your genre.
            </p>

            <p className="font-serif-body text-[#5C4A3E] text-sm sm:text-[15px] leading-7 sm:leading-8 mt-5">
              Whether supporting a frontlist release, optimizing Kindle Unlimited read-through for backlist series,
              or protecting author brands from competitor ad conquesting, our campaigns maintain commercial discipline
              and measurable returns on ad spend.
            </p>
          </div>

          {/* Right Image Card with Dark Banner */}
          <div className="lg:col-span-5">
            <div className="relative h-[340px] sm:h-[380px] bg-[#E8DECE] overflow-hidden border border-[#D8CCBD]">
              <img
                src="https://images.unsplash.com/photo-1495446815901-a7297e633e8d?auto=format&fit=crop&w=1200&q=85"
                alt="Curated book collection and premium hardcovers"
                className="w-full h-full object-cover"
              />

              <div className="absolute bottom-0 inset-x-0 bg-[#241A15]/95 p-5 sm:p-6 text-[#F5EADB]">
                <p className="text-[10px] text-[#D4A753] uppercase tracking-[0.2em] font-sans font-bold mb-2">
                  VISUAL MERCHANDISING
                </p>
                <h3 className="text-base sm:text-lg font-bold font-serif-heading text-white">
                  Amazon A+ Content and Brand Store Architecture
                </h3>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* =========================================================
          EDITORIAL SECTION 1: ISBN REGISTRATION AND BARCODE
          (Layout: Content on LEFT, Image Canvas on RIGHT)
      ========================================================= */}
      <section className="max-w-7xl mx-auto px-6 sm:px-10 py-16 md:py-24 border-t border-[#E3D7C5]">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          
          {/* Content on LEFT */}
          <div className="lg:col-span-7">
            <p className="text-[11px] uppercase tracking-[0.25em] font-bold text-[#8C2D19] mb-4 font-editorial-caps">
              BIBLIOGRAPHIC INFRASTRUCTURE AND GLOBAL TRADE
            </p>

            <h2 className="text-2xl sm:text-3xl md:text-[34px] font-bold leading-snug font-serif-heading text-[#241A15]">
              Official ISBN Assignment, EAN Barcodes, and Legal Deposit.
            </h2>

            <p className="font-serif-body text-[#5C4A3E] text-sm sm:text-[15px] leading-7 sm:leading-8 mt-6">
              An International Standard Book Number (ISBN) is the legal commercial identifier of your published volume.
              Unlike restrictive free platform identifiers that limit distribution strictly to a single retailer,
              we provision dedicated, publisher-owned Bowker and Nielsen ISBNs. This guarantees your work retains
              unconditional distribution rights across global bookstore chains, independent shops, and wholesale catalogues.
            </p>

            <p className="font-serif-body text-[#5C4A3E] text-sm sm:text-[15px] leading-7 sm:leading-8 mt-5">
              Every edition receives a high-resolution, vector-rendered EAN-13 barcode embedded with the standard Bookland
              prefix (978 and 979) and official 5-digit Price On-Product add-on extensions. Formatted to exact GS1 and
              ISO/IEC 15420 optical print tolerances, your book barcodes guarantee flawless scanning at retail points-of-sale
              and automated inventory checkouts worldwide.
            </p>

            <p className="font-serif-body text-[#5C4A3E] text-sm sm:text-[15px] leading-7 sm:leading-8 mt-5">
              Beyond commercial trade data, we coordinate essential institutional filings including formal Library of Congress
              Control Numbers (LCCN), Publisher's Cataloging-in-Publication (PCIP) metadata blocks, and legal deposit archiving
              with national libraries to establish the permanent bibliographic record of your book for generations.
            </p>
          </div>

          {/* Image Canvas on RIGHT with Dark Overlay */}
          <div className="lg:col-span-5">
            <div className="relative h-[340px] sm:h-[380px] bg-[#E8DECE] overflow-hidden border border-[#D8CCBD]">
              <img
                src="https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?auto=format&fit=crop&w=1200&q=85"
                alt="Bibliographic registers and vintage book printing"
                className="w-full h-full object-cover"
              />

              <div className="absolute bottom-0 inset-x-0 bg-[#241A15]/95 p-5 sm:p-6 text-[#F5EADB]">
                <p className="text-[10px] text-[#D4A753] uppercase tracking-[0.2em] font-sans font-bold mb-2">
                  GLOBAL TRADE IDENTIFICATION
                </p>
                <h3 className="text-base sm:text-lg font-bold font-serif-heading text-white">
                  Official Bowker and Nielsen Registry Infrastructure
                </h3>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* =========================================================
          EDITORIAL SECTION 2: PRINT-ON-DEMAND (POD)
          (Layout: Image Canvas on LEFT, Content on RIGHT - ALTERNATING)
      ========================================================= */}
      <section className="max-w-7xl mx-auto px-6 sm:px-10 py-16 md:py-24 border-t border-[#E3D7C5]">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          
          {/* Image Canvas on LEFT with Dark Overlay */}
          <div className="lg:col-span-5 order-2 lg:order-1">
            <div className="relative h-[340px] sm:h-[380px] bg-[#E8DECE] overflow-hidden border border-[#D8CCBD]">
              <img
                src="https://images.unsplash.com/photo-1589829085413-56de8ae18c73?auto=format&fit=crop&w=1200&q=85"
                alt="Modern precision book binding and print manufacturing"
                className="w-full h-full object-cover"
              />

              <div className="absolute bottom-0 inset-x-0 bg-[#241A15]/95 p-5 sm:p-6 text-[#F5EADB]">
                <p className="text-[10px] text-[#D4A753] uppercase tracking-[0.2em] font-sans font-bold mb-2">
                  PRINT MANUFACTURING AGILITY
                </p>
                <h3 className="text-base sm:text-lg font-bold font-serif-heading text-white">
                  Zero-Inventory Global Print-On-Demand Architecture
                </h3>
              </div>
            </div>
          </div>

          {/* Content on RIGHT */}
          <div className="lg:col-span-7 order-1 lg:order-2">
            <p className="text-[11px] uppercase tracking-[0.25em] font-bold text-[#8C2D19] mb-4 font-editorial-caps">
              AGILE SUPPLY CHAIN AND DISTRIBUTION
            </p>

            <h2 className="text-2xl sm:text-3xl md:text-[34px] font-bold leading-snug font-serif-heading text-[#241A15]">
              Print-On-Demand Architecture with Traditional Quality.
            </h2>

            <p className="font-serif-body text-[#5C4A3E] text-sm sm:text-[15px] leading-7 sm:leading-8 mt-6">
              Modern digital Print-on-Demand (POD) technology eliminates costly warehousing overheads, unsold inventory risk,
              and catastrophic out-of-stock notices. Each physical book is produced, bound, and drop-shipped to retail accounts
              and direct readers within 24 to 48 hours of an order being placed across manufacturing nodes in North America,
              the United Kingdom, Europe, and Australia.
            </p>

            <p className="font-serif-body text-[#5C4A3E] text-sm sm:text-[15px] leading-7 sm:leading-8 mt-5">
              We uphold uncompromising material standards across both paperback and hardcover specifications: premium 50lb to
              70lb acid-free archival cream papers, durable polyurethane reactive (PUR) perfect binding, scuff-resistant matte
              protective laminates, and case-laminate cloth-effect boards that rival traditional high-run offset print runs.
            </p>

            <p className="font-serif-body text-[#5C4A3E] text-sm sm:text-[15px] leading-7 sm:leading-8 mt-5">
              By coordinating dual-source distribution through Ingram Content Group (Lightning Source) and KDP Print,
              your titles receive seamless commercial availability: automatic Prime 2-day delivery on Amazon alongside
              guaranteed wholesale availability in ordering databases utilized by Barnes and Noble, Waterstones, and independent bookshops.
            </p>
          </div>

        </div>
      </section>

      {/* =========================================================
          SECTION: FULL-SERVICE PUBLISHING SUITE
      ========================================================= */}
      <section id="publishing-suite" className="bg-[#FAF7F2] py-16 md:py-24 border-t border-[#E3D7C5]">
        <div className="max-w-7xl mx-auto px-6 sm:px-10">
          
          <div className="border-b border-[#E3D7C5] pb-8 mb-12 sm:mb-14">
            <p className="text-[11px] uppercase tracking-[0.25em] font-bold text-[#8C2D19] mb-3">
              PRODUCTION AND DISTRIBUTION ARCHITECTURE
            </p>
            <h2 className="text-2xl sm:text-3xl md:text-[36px] font-bold font-serif-heading text-[#241A15]">
              Full-Service Book Publishing, Editorial, and Print Production
            </h2>
            <p className="font-serif-body text-xs sm:text-sm text-[#5C4A3E] mt-3 max-w-3xl leading-relaxed sm:leading-7">
              Publishing is an architectural discipline combining literary editing, bespoke typography,
              and global trade syndication. We guide manuscripts from initial draft to internationally
              distributed hardcover and digital editions.
            </p>
          </div>

          {/* 4 Pillars of Book Publishing */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-7">
            
            {/* Publishing Pillar 1: Editorial */}
            <div className="bg-[#FCFAF6] border border-[#DDD0BF] p-6 sm:p-7 flex flex-col justify-between">
              <div>
                <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#8C2D19] block mb-2 font-editorial-caps">
                  STAGE 01
                </span>
                <h3 className="text-lg font-bold font-serif-heading text-[#241A15] mb-2.5">
                  Editorial and Manuscript Development
                </h3>
                <p className="font-serif-body text-xs text-[#5C4A3E] leading-relaxed mb-4">
                  Multi-pass textual editing upholding rigorous university press standards to refine narrative pacing, voice, and thematic clarity.
                </p>
                <ul className="space-y-2.5 font-serif-body text-xs text-[#5C4A3E] border-t border-[#EADECE] pt-4">
                  <li className="flex items-start gap-2">
                    <span className="text-[#8C2D19] font-bold">•</span>
                    <span><strong>Developmental Editing:</strong> Structural evaluation of plot architecture, character arcs, and narrative cadence.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#8C2D19] font-bold">•</span>
                    <span><strong>Line and Copy Editing:</strong> Sentence-level polishing for rhythmic fluidity, syntax elegance, and tonal consistency.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#8C2D19] font-bold">•</span>
                    <span><strong>Cold Proofreading:</strong> Rigorous examination for typographical errors, punctuation adherence, and styling consistency.</span>
                  </li>
                </ul>
              </div>
              <div className="mt-6 pt-3.5 border-t border-[#EADECE] text-[10px] font-bold text-[#8C2D19] uppercase tracking-wider font-editorial-caps">
                Editorial Rigor Guaranteed
              </div>
            </div>

            {/* Publishing Pillar 2: Typesetting */}
            <div className="bg-[#FCFAF6] border border-[#DDD0BF] p-6 sm:p-7 flex flex-col justify-between">
              <div>
                <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#8C2D19] block mb-2 font-editorial-caps">
                  STAGE 02
                </span>
                <h3 className="text-lg font-bold font-serif-heading text-[#241A15] mb-2.5">
                  Interior Book Architecture and Typography
                </h3>
                <p className="font-serif-body text-xs text-[#5C4A3E] leading-relaxed mb-4">
                  Typesetting books using classical geometric page proportions, custom drop caps, and optical kerning pairs for timeless reading comfort.
                </p>
                <ul className="space-y-2.5 font-serif-body text-xs text-[#5C4A3E] border-t border-[#EADECE] pt-4">
                  <li className="flex items-start gap-2">
                    <span className="text-[#8C2D19] font-bold">•</span>
                    <span><strong>Bespoke Type Selection:</strong> Curating historically grounded serif fonts suited specifically to your book genre.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#8C2D19] font-bold">•</span>
                    <span><strong>Pagination and Running Headers:</strong> Elegant chapter openers, clean margins, and widow and orphan suppression.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#8C2D19] font-bold">•</span>
                    <span><strong>Multi-Format Master Outputs:</strong> Certified PDF/X-1a files for print alongside fully validated reflowable ePub editions.</span>
                  </li>
                </ul>
              </div>
              <div className="mt-6 pt-3.5 border-t border-[#EADECE] text-[10px] font-bold text-[#8C2D19] uppercase tracking-wider font-editorial-caps">
                Classical Page Geometry
              </div>
            </div>

            {/* Publishing Pillar 3: Cover & Finishes */}
            <div className="bg-[#FCFAF6] border border-[#DDD0BF] p-6 sm:p-7 flex flex-col justify-between">
              <div>
                <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#8C2D19] block mb-2 font-editorial-caps">
                  STAGE 03
                </span>
                <h3 className="text-lg font-bold font-serif-heading text-[#241A15] mb-2.5">
                  Cover Architecture and Print Finishes
                </h3>
                <p className="font-serif-body text-xs text-[#5C4A3E] leading-relaxed mb-4">
                  Striking, market-calibrated jacket design commanding attention on physical bookstore shelves and digital marketplace thumbnails.
                </p>
                <ul className="space-y-2.5 font-serif-body text-xs text-[#5C4A3E] border-t border-[#EADECE] pt-4">
                  <li className="flex items-start gap-2">
                    <span className="text-[#8C2D19] font-bold">•</span>
                    <span><strong>Hardcover Dust Jackets and Case Laminates:</strong> Engineering cloth-bound cases, foil stamping, and French flap jackets.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#8C2D19] font-bold">•</span>
                    <span><strong>Spine Width Precision:</strong> Calculating spine bulk down to the millimeter based on exact paper weight and page count.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#8C2D19] font-bold">•</span>
                    <span><strong>Trade-Ready Back Covers:</strong> Structuring persuasive blurb typography, author biography portraits, and official barcode blocks.</span>
                  </li>
                </ul>
              </div>
              <div className="mt-6 pt-3.5 border-t border-[#EADECE] text-[10px] font-bold text-[#8C2D19] uppercase tracking-wider font-editorial-caps">
                Tactile Material Quality
              </div>
            </div>

            {/* Publishing Pillar 4: Distribution & Rights */}
            <div className="bg-[#FCFAF6] border border-[#DDD0BF] p-6 sm:p-7 flex flex-col justify-between">
              <div>
                <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#8C2D19] block mb-2 font-editorial-caps">
                  STAGE 04
                </span>
                <h3 className="text-lg font-bold font-serif-heading text-[#241A15] mb-2.5">
                  Global Distribution and Bibliographic Registry
                </h3>
                <p className="font-serif-body text-xs text-[#5C4A3E] leading-relaxed mb-4">
                  Opening worldwide retail and library distribution channels through premier book trade wholesalers across 195 countries.
                </p>
                <ul className="space-y-2.5 font-serif-body text-xs text-[#5C4A3E] border-t border-[#EADECE] pt-4">
                  <li className="flex items-start gap-2">
                    <span className="text-[#8C2D19] font-bold">•</span>
                    <span><strong>Ingram and Wholesale Syndication:</strong> Placing titles in ordering systems used by Barnes and Noble, Waterstones, and indie shops.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#8C2D19] font-bold">•</span>
                    <span><strong>Library Network Integration:</strong> Supplying Baker and Taylor and OverDrive to ensure institutional library availability.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#8C2D19] font-bold">•</span>
                    <span><strong>Official ISBN and Copyright Registration:</strong> Bowker ISBN assignment, Barcode generation, and Library of Congress filings.</span>
                  </li>
                </ul>
              </div>
              <div className="mt-6 pt-3.5 border-t border-[#EADECE] text-[10px] font-bold text-[#8C2D19] uppercase tracking-wider font-editorial-caps">
                Over 40,000 Retailers
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* =========================================================
          SECTION: AMAZON BOOK MARKETING AND ADVERTISING SUITE
      ========================================================= */}
      <section id="services-suite" className="bg-[#F4EEE3] border-y border-[#E2D5C3] py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-6 sm:px-10">
          
          <div className="border-b border-[#DDD0BF] pb-8 mb-12 sm:mb-14">
            <p className="text-[11px] uppercase tracking-[0.25em] font-bold text-[#8C2D19] mb-3">
              SPECIALIZED AMAZON SERVICES
            </p>
            <h2 className="text-2xl sm:text-3xl md:text-[36px] font-bold font-serif-heading text-[#241A15]">
              Amazon Book Marketing, Advertising, and Page Merchandising
            </h2>
            <p className="font-serif-body text-xs sm:text-sm text-[#614F42] mt-3 max-w-3xl leading-relaxed sm:leading-7">
              With Amazon accounting for the majority of global print and digital book sales, success requires
              technical precision across Amazon Advertising, KDP metadata, and visual detail page architecture.
            </p>
          </div>

          {/* 3 Core Amazon Service Blocks */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            
            {/* 1. Amazon Book Marketing */}
            <div className="bg-[#FAF7F2] border border-[#DDD0BF] p-7 sm:p-8 flex flex-col justify-between">
              <div>
                <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#8C2D19] block mb-2.5">
                  PILLAR 01
                </span>
                <h3 className="text-xl font-bold font-serif-heading text-[#241A15] mb-3">
                  Amazon Book Marketing
                </h3>
                <p className="font-serif-body text-xs sm:text-sm text-[#5C4A3E] leading-relaxed sm:leading-6 mb-6">
                  Structural optimization of your KDP and Amazon Seller listings to maximize algorithmic relevance
                  and organic search rank without relying entirely on ad spend.
                </p>
                <ul className="space-y-4 font-serif-body text-xs sm:text-[13px] text-[#5C4A3E] border-t border-[#EADECE] pt-5">
                  <li className="flex items-start gap-2.5 leading-relaxed">
                    <span className="text-[#8C2D19] font-bold mt-0.5">•</span>
                    <span><strong>Backend Keyword Architecture:</strong> Complete utilization of the 250-byte search term fields with zero punctuation waste and intent-based phrase research.</span>
                  </li>
                  <li className="flex items-start gap-2.5 leading-relaxed">
                    <span className="text-[#8C2D19] font-bold mt-0.5">•</span>
                    <span><strong>Category Placement and BISAC Mapping:</strong> Identifying up to 10 low-competition, high-conversion browse paths to trigger Bestseller and New Release status.</span>
                  </li>
                  <li className="flex items-start gap-2.5 leading-relaxed">
                    <span className="text-[#8C2D19] font-bold mt-0.5">•</span>
                    <span><strong>Author Central Infrastructure:</strong> Unifying international author profiles across the United States, United Kingdom, Canada, and European marketplaces.</span>
                  </li>
                  <li className="flex items-start gap-2.5 leading-relaxed">
                    <span className="text-[#8C2D19] font-bold mt-0.5">•</span>
                    <span><strong>Amazon Attribution Tags:</strong> Generating secure tracking tags to measure sales, page reads, and bonus brand royalties from external traffic.</span>
                  </li>
                </ul>
              </div>
              <div className="mt-8 pt-4 border-t border-[#EADECE] text-[11px] font-bold text-[#8C2D19] uppercase tracking-wider">
                Full KDP and Catalog Audit Included
              </div>
            </div>

            {/* 2. Amazon Advertising */}
            <div className="bg-[#FAF7F2] border border-[#DDD0BF] p-7 sm:p-8 flex flex-col justify-between">
              <div>
                <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#8C2D19] block mb-2.5">
                  PILLAR 02
                </span>
                <h3 className="text-xl font-bold font-serif-heading text-[#241A15] mb-3">
                  Amazon Advertising (PPC and DSP)
                </h3>
                <p className="font-serif-body text-xs sm:text-sm text-[#5C4A3E] leading-relaxed sm:leading-6 mb-6">
                  Disciplined paid ad management across Amazon's advertising platforms, controlling target ACoS
                  and driving verified book purchases while protecting author margins.
                </p>
                <ul className="space-y-4 font-serif-body text-xs sm:text-[13px] text-[#5C4A3E] border-t border-[#EADECE] pt-5">
                  <li className="flex items-start gap-2.5 leading-relaxed">
                    <span className="text-[#8C2D19] font-bold mt-0.5">•</span>
                    <span><strong>Sponsored Products Campaigns:</strong> Exact, Phrase, and Auto campaigns harvesting commercial search terms and targeting comp-title ASINs.</span>
                  </li>
                  <li className="flex items-start gap-2.5 leading-relaxed">
                    <span className="text-[#8C2D19] font-bold mt-0.5">•</span>
                    <span><strong>Sponsored Brands and Video Ads:</strong> High-impact search header banners and 15-second cinematic book trailers embedded directly in reader search results.</span>
                  </li>
                  <li className="flex items-start gap-2.5 leading-relaxed">
                    <span className="text-[#8C2D19] font-bold mt-0.5">•</span>
                    <span><strong>Sponsored Display and Retargeting:</strong> Defending your product page from competitors while conquesting readers browsing related author titles.</span>
                  </li>
                  <li className="flex items-start gap-2.5 leading-relaxed">
                    <span className="text-[#8C2D19] font-bold mt-0.5">•</span>
                    <span><strong>Amazon DSP Integration:</strong> Programmatic display advertising reaching active Kindle e-reader owners based on verified historical genre buying habits.</span>
                  </li>
                </ul>
              </div>
              <div className="mt-8 pt-4 border-t border-[#EADECE] text-[11px] font-bold text-[#8C2D19] uppercase tracking-wider">
                Daily Bid Adjustments and Budget Governance
              </div>
            </div>

            {/* 3. Amazon A+ Content */}
            <div className="bg-[#FAF7F2] border border-[#DDD0BF] p-7 sm:p-8 flex flex-col justify-between">
              <div>
                <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#8C2D19] block mb-2.5">
                  PILLAR 03
                </span>
                <h3 className="text-xl font-bold font-serif-heading text-[#241A15] mb-3">
                  Amazon A+ Content Production
                </h3>
                <p className="font-serif-body text-xs sm:text-sm text-[#5C4A3E] leading-relaxed sm:leading-6 mb-6">
                  Bespoke visual editorial spreads designed to replace static text descriptions, delivering
                  elevated typography, reader testimonials, and measurable conversion lifts.
                </p>
                <ul className="space-y-4 font-serif-body text-xs sm:text-[13px] text-[#5C4A3E] border-t border-[#EADECE] pt-5">
                  <li className="flex items-start gap-2.5 leading-relaxed">
                    <span className="text-[#8C2D19] font-bold mt-0.5">•</span>
                    <span><strong>Catalog Comparison Matrices:</strong> Directing readers to series sequels, standalone works, and multi-format editions (Hardcover, Audio, Paperback).</span>
                  </li>
                  <li className="flex items-start gap-2.5 leading-relaxed">
                    <span className="text-[#8C2D19] font-bold mt-0.5">•</span>
                    <span><strong>Editorial Endorsements and Callouts:</strong> Structuring awards, review quotes, and publication accolades into clean, credible design modules.</span>
                  </li>
                  <li className="flex items-start gap-2.5 leading-relaxed">
                    <span className="text-[#8C2D19] font-bold mt-0.5">•</span>
                    <span><strong>Amazon Brand Story Carousel:</strong> A dedicated, full-width swipeable module highlighting the publishing imprint, catalog depth, and author heritage.</span>
                  </li>
                  <li className="flex items-start gap-2.5 leading-relaxed">
                    <span className="text-[#8C2D19] font-bold mt-0.5">•</span>
                    <span><strong>Mobile-First Formatting:</strong> Pixel-perfect graphic composition tailored specifically for Amazon's mobile shopping application.</span>
                  </li>
                </ul>
              </div>
              <div className="mt-8 pt-4 border-t border-[#EADECE] text-[11px] font-bold text-[#8C2D19] uppercase tracking-wider">
                Full Copywriting and Asset Creation
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* =========================================================
          SECTION: CAMPAIGNS, SOCIAL MEDIA, AND AD SERVICES
      ========================================================= */}
      <section className="max-w-7xl mx-auto px-6 sm:px-10 py-16 md:py-24">
        
        <div className="border-b border-[#E3D7C5] pb-8 mb-12 sm:mb-14">
          <p className="text-[11px] uppercase tracking-[0.25em] font-bold text-[#8C2D19] mb-3">
            INTEGRATED EXECUTION
          </p>
          <h2 className="text-2xl sm:text-3xl md:text-[36px] font-bold font-serif-heading text-[#241A15]">
            Campaigns, Social Media Marketing, and Advertising Services
          </h2>
          <p className="font-serif-body text-xs sm:text-sm text-[#614F42] mt-3 max-w-3xl leading-relaxed sm:leading-7">
            Connecting technical Amazon advertising with cultural momentum, social community buzz,
            and professional account management for sustainable reader acquisition.
          </p>
        </div>

        {/* 3 Extended Service Blocks */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* 4. Campaigns Architecture */}
          <div className="bg-[#FCFAF6] border border-[#DDD0BF] p-7 sm:p-8 flex flex-col justify-between">
            <div>
              <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#8C2D19] block mb-2.5">
                SERVICE 01
              </span>
              <h3 className="text-xl font-bold font-serif-heading text-[#241A15] mb-3">
                Structured Launch Campaigns
              </h3>
              <p className="font-serif-body text-xs sm:text-sm text-[#5C4A3E] leading-relaxed sm:leading-6 mb-6">
                Calculated campaign sequencing designed around publication milestones to generate
                concentrated sales volume and trigger Amazon’s organic recommendation algorithms.
              </p>
              <ul className="space-y-4 font-serif-body text-xs sm:text-[13px] text-[#5C4A3E] border-t border-[#EADECE] pt-5">
                <li className="flex items-start gap-2.5 leading-relaxed">
                  <span className="text-[#8C2D19] font-bold mt-0.5">•</span>
                  <span><strong>Pre-Order Runway Strategy:</strong> Accumulating pre-launch reservation orders to generate initial day-one chart placement.</span>
                </li>
                <li className="flex items-start gap-2.5 leading-relaxed">
                  <span className="text-[#8C2D19] font-bold mt-0.5">•</span>
                  <span><strong>72-Hour Bestseller Flights:</strong> Coordinated ad pulses and promotional pricing aimed at securing Category Number One flags.</span>
                </li>
                <li className="flex items-start gap-2.5 leading-relaxed">
                  <span className="text-[#8C2D19] font-bold mt-0.5">•</span>
                  <span><strong>Kindle Deals and Price Drops:</strong> Deploying time-sensitive price promotions to awaken dormant backlist algorithms.</span>
                </li>
                <li className="flex items-start gap-2.5 leading-relaxed">
                  <span className="text-[#8C2D19] font-bold mt-0.5">•</span>
                  <span><strong>Q4 and Seasonal Catalog Surges:</strong> Strategic ad scaling across peak holiday gift periods, academic terms, and summer reading lists.</span>
                </li>
              </ul>
            </div>
            <div className="mt-6 pt-4 border-t border-[#EADECE] text-[11px] font-bold text-[#8C2D19] uppercase tracking-wider">
              Launch Flights and Evergreen Schedules
            </div>
          </div>

          {/* 5. Social Media Marketing */}
          <div className="bg-[#FCFAF6] border border-[#DDD0BF] p-7 sm:p-8 flex flex-col justify-between">
            <div>
              <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#8C2D19] block mb-2.5">
                SERVICE 02
              </span>
              <h3 className="text-xl font-bold font-serif-heading text-[#241A15] mb-3">
                Social Media Marketing
              </h3>
              <p className="font-serif-body text-xs sm:text-sm text-[#5C4A3E] leading-relaxed sm:leading-6 mb-6">
                Authentic, literary-focused promotion engaging reading communities across BookTok,
                Bookstagram, and paid social channels without spamming or generic tactics.
              </p>
              <ul className="space-y-4 font-serif-body text-xs sm:text-[13px] text-[#5C4A3E] border-t border-[#EADECE] pt-5">
                <li className="flex items-start gap-2.5 leading-relaxed">
                  <span className="text-[#8C2D19] font-bold mt-0.5">•</span>
                  <span><strong>BookTok and Creator Seeding:</strong> Distributing physical advance review copies (ARCs) to vetted book creators who drive organic recommendation spikes.</span>
                </li>
                <li className="flex items-start gap-2.5 leading-relaxed">
                  <span className="text-[#8C2D19] font-bold mt-0.5">•</span>
                  <span><strong>Bookstagram Aesthetic Creation:</strong> High-resolution editorial book photography, quote banners, and thematic design for Instagram readers.</span>
                </li>
                <li className="flex items-start gap-2.5 leading-relaxed">
                  <span className="text-[#8C2D19] font-bold mt-0.5">•</span>
                  <span><strong>Meta Direct-Response Advertising:</strong> Targeted Facebook and Instagram ad campaigns delivering verified buyers to Amazon Attribution endpoints.</span>
                </li>
                <li className="flex items-start gap-2.5 leading-relaxed">
                  <span className="text-[#8C2D19] font-bold mt-0.5">•</span>
                  <span><strong>Goodreads and Reader Communities:</strong> Moderating virtual group reads, ARC feedback management, and certified reader reviews.</span>
                </li>
              </ul>
            </div>
            <div className="mt-6 pt-4 border-t border-[#EADECE] text-[11px] font-bold text-[#8C2D19] uppercase tracking-wider">
              Vetted Literary Influencer Network
            </div>
          </div>

          {/* 6. Advertising Services */}
          <div className="bg-[#FCFAF6] border border-[#DDD0BF] p-7 sm:p-8 flex flex-col justify-between">
            <div>
              <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#8C2D19] block mb-2.5">
                SERVICE 03
              </span>
              <h3 className="text-xl font-bold font-serif-heading text-[#241A15] mb-3">
                Full-Service Advertising Management
              </h3>
              <p className="font-serif-body text-xs sm:text-sm text-[#5C4A3E] leading-relaxed sm:leading-6 mb-6">
                End-to-end, accountable ad account management for publishers and active authors requiring
                hands-on governance, algorithmic adjustments, and transparent commercial reporting.
              </p>
              <ul className="space-y-4 font-serif-body text-xs sm:text-[13px] text-[#5C4A3E] border-t border-[#EADECE] pt-5">
                <li className="flex items-start gap-2.5 leading-relaxed">
                  <span className="text-[#8C2D19] font-bold mt-0.5">•</span>
                  <span><strong>Continuous Search Term Harvesting:</strong> Weekly auditing of search reports to capture emerging keywords and prune unprofitable bids.</span>
                </li>
                <li className="flex items-start gap-2.5 leading-relaxed">
                  <span className="text-[#8C2D19] font-bold mt-0.5">•</span>
                  <span><strong>Competitor ASIN Interception:</strong> Strategically bidding on competing title pages to capture readers at point of purchase.</span>
                </li>
                <li className="flex items-start gap-2.5 leading-relaxed">
                  <span className="text-[#8C2D19] font-bold mt-0.5">•</span>
                  <span><strong>ACoS and TACoS Governance:</strong> Managing bids to maintain profitability across total catalog revenue rather than isolated ad silos.</span>
                </li>
                <li className="flex items-start gap-2.5 leading-relaxed">
                  <span className="text-[#8C2D19] font-bold mt-0.5">•</span>
                  <span><strong>Bi-Weekly Performance Reviews:</strong> Comprehensive reports breaking down ad spend, organic sales velocity, and blended return on investment.</span>
                </li>
              </ul>
            </div>
            <div className="mt-6 pt-4 border-t border-[#EADECE] text-[11px] font-bold text-[#8C2D19] uppercase tracking-wider">
              Dedicated Senior Campaign Strategist
            </div>
          </div>

        </div>
      </section>

      {/* =========================================================
          ADVANCE REVIEW COPIES (ARC) AND EDITORIAL SYNDICATION
      ========================================================= */}
      <section className="bg-[#FAF7F2] border-t border-[#E2D5C3] py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-6 sm:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-6">
              <p className="text-[11px] uppercase tracking-[0.25em] font-bold text-[#8C2D19] mb-3">
                CRITIC AND READER SOCIAL PROOF
              </p>
              <h2 className="text-2xl sm:text-3xl md:text-[36px] font-bold font-serif-heading text-[#241A15] leading-tight">
                Advance Review Distribution and Trade Review Pitching
              </h2>
              <p className="font-serif-body text-xs sm:text-sm text-[#5C4A3E] mt-5 leading-relaxed sm:leading-7">
                Before launching Amazon advertising, establishing authentic customer reviews and prestigious trade
                endorsements is essential for conversion. We organize compliance-safe Advance Review Copy (ARC)
                distribution across verified bibliophile communities and trade review syndicates.
              </p>

              <div className="mt-8 space-y-4 font-serif-body text-xs sm:text-[13px] text-[#5C4A3E]">
                <div className="p-4 bg-[#FCFAF6] border border-[#DDD0BF]">
                  <strong className="text-[#241A15] block mb-1">Pre-Publication Galley Seeding:</strong>
                  <span>Delivering digital and physical proof copies to book bloggers, Goodreads librarians, and category influencers 6 to 8 weeks before launch.</span>
                </div>
                <div className="p-4 bg-[#FCFAF6] border border-[#DDD0BF]">
                  <strong className="text-[#241A15] block mb-1">Trade Journal Submission Coordination:</strong>
                  <span>Structuring formal review submissions for consideration by Publishers Weekly, Kirkus Reviews, Booklist, and independent literary journals.</span>
                </div>
                <div className="p-4 bg-[#FCFAF6] border border-[#DDD0BF]">
                  <strong className="text-[#241A15] block mb-1">Amazon Review TOS Compliance:</strong>
                  <span>Every review initiative operates strictly within Amazon Customer Review Creation Guidelines, avoiding incentivized review penalties or listing suspensions.</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="bg-[#F2ECE0] border border-[#D8CCBD] p-8 sm:p-10">
                <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#8C2D19] block mb-2 font-editorial-caps">
                  CRITICAL SOCIAL PROOF METRIC
                </span>
                <h3 className="text-xl sm:text-2xl font-bold font-serif-heading text-[#241A15] mb-4">
                  Why Reviews Dictate Amazon Ad Efficiency
                </h3>
                <p className="font-serif-body text-xs sm:text-sm text-[#5C4A3E] leading-relaxed sm:leading-7 mb-6">
                  Amazon PPC algorithms directly monitor customer conversion rates. A book page with fewer than 15 reviews
                  converts at an average of 4.8%. Once a title reaches 25 verified customer reviews with an average score above
                  4.2 stars, conversion rates jump to 14.6%, cutting your customer acquisition cost by more than half.
                </p>
                <div className="pt-5 border-t border-[#D5C6B3] flex justify-between items-center text-xs text-[#7A6758] font-editorial-caps font-bold">
                  <span>PRE-LAUNCH ARC CAMPAIGNS</span>
                  <span>VERIFIED REVIEW CONVERSION</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* =========================================================
          THE FIVE PILLARS: INTERACTIVE TABS
      ========================================================= */}
      <section id="channels" className="bg-[#F4EEE3] border-y border-[#E2D5C3] py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-6 sm:px-10">
          <div className="border-b border-[#DDD0BF] pb-8 mb-10">
            <p className="text-[11px] uppercase tracking-[0.25em] font-bold text-[#8C2D19] mb-3">
              MARKETING CAPABILITIES
            </p>
            <h2 className="text-2xl sm:text-3xl md:text-[34px] font-bold font-serif-heading text-[#241A15]">
              Full-Spectrum Book Marketing and Discovery
            </h2>
            <p className="font-serif-body text-xs sm:text-sm text-[#614F42] mt-3 max-w-2xl leading-relaxed sm:leading-6">
              We coordinate technical Amazon algorithms with visual merchandising, reader seeding,
              and dedicated editorial distribution.
            </p>
          </div>

          {/* Tabs */}
          <div className="flex flex-wrap gap-2.5 border-b border-[#DDD0BF] pb-4 mb-8">
            {[
              { id: "amazon", label: "01. Amazon PPC and A+ Content" },
              { id: "editorial", label: "02. Direct Newsletter and Site Takeovers" },
              { id: "social", label: "03. BookTok and Creator Seeding" },
              { id: "pr", label: "04. Literary PR and Critic Reviews" },
              { id: "backlist", label: "05. Catalog and Backlist Resurrections" },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-4 py-2.5 text-xs font-semibold tracking-wider uppercase transition-all cursor-pointer ${
                  activeTab === tab.id
                    ? "bg-[#241A15] text-[#FAF7F2]"
                    : "bg-transparent text-[#7B695B]"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Tab Panel */}
          <div className="bg-[#FAF7F2] border border-[#DDD0BF] p-6 sm:p-10">
            {activeTab === "amazon" && (
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                <div className="lg:col-span-5">
                  <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#8C2D19]">
                    DOMINATING THE ALGORITHM
                  </span>
                  <h3 className="text-xl sm:text-2xl font-bold font-serif-heading text-[#241A15] mt-2 mb-4">
                    Amazon PPC, A+ Content, and BSR Ranking
                  </h3>
                  <p className="font-serif-body text-xs sm:text-sm text-[#5A4A3F] leading-relaxed sm:leading-7 mb-5">
                    Amazon represents over 68% of global book sales. We deploy exact ASIN targeting,
                    negative keyword pruning, and custom visual A+ Content modules to turn passive views
                    into compounding royalty income.
                  </p>
                  <div className="p-4 sm:p-5 bg-[#F2ECE0] border-l-2 border-[#8C2D19] text-xs font-serif-body text-[#4D3F35] leading-relaxed">
                    "Amazon's algorithm rewards consistent sales velocity. Once your conversion rate exceeds
                    category averages, Amazon begins advertising your book in Customers Also Bought."
                  </div>
                </div>

                <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div className="border border-[#E2D5C3] p-5 sm:p-6 bg-[#FCFAF6]">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-[#8C2D19] block mb-1.5">
                      Visual Merchandising
                    </span>
                    <h4 className="text-sm font-bold font-serif-heading mb-2">Amazon A+ Content Production</h4>
                    <p className="font-serif-body text-xs text-[#614F42] leading-relaxed sm:leading-6">
                      Custom banner art, comparative title carousels, author spotlights, and quote callouts
                      that transform plain product pages into high-converting storefronts.
                    </p>
                  </div>

                  <div className="border border-[#E2D5C3] p-5 sm:p-6 bg-[#FCFAF6]">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-[#8C2D19] block mb-1.5">
                      Sponsored Products PPC
                    </span>
                    <h4 className="text-sm font-bold font-serif-heading mb-2">Targeted ASIN and Keyword Bidding</h4>
                    <p className="font-serif-body text-xs text-[#614F42] leading-relaxed sm:leading-6">
                      Bidding on competing author names and bestselling titles in your niche with strict ACoS
                      caps to capture buyers right at checkout.
                    </p>
                  </div>

                  <div className="border border-[#E2D5C3] p-5 sm:p-6 bg-[#FCFAF6]">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-[#8C2D19] block mb-1.5">
                      Category Placement
                    </span>
                    <h4 className="text-sm font-bold font-serif-heading mb-2">Bestseller Rank (BSR) Optimization</h4>
                    <p className="font-serif-body text-xs text-[#614F42] leading-relaxed sm:leading-6">
                      Deep category research and backend indexing to secure the Number One New Release and
                      Bestseller orange flags on Amazon.
                    </p>
                  </div>

                  <div className="border border-[#E2D5C3] p-5 sm:p-6 bg-[#FCFAF6]">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-[#8C2D19] block mb-1.5">
                      Reader Social Proof
                    </span>
                    <h4 className="text-sm font-bold font-serif-heading mb-2">Goodreads and Kindle Deals</h4>
                    <p className="font-serif-body text-xs text-[#614F42] leading-relaxed sm:leading-6">
                      Targeted giveaways and Kindle Price Promotions coordinated to spark intense 72-hour
                      download surges that awaken organic search ranks.
                    </p>
                  </div>
                </div>
              </div>
            )}

            {activeTab === "editorial" && (
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                <div className="lg:col-span-5">
                  <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#8C2D19]">
                    DISCRIMINATING AUDIENCES
                  </span>
                  <h3 className="text-xl sm:text-2xl font-bold font-serif-heading text-[#241A15] mt-2 mb-4">
                    Direct Reader Sponsorships and Newsletters
                  </h3>
                  <p className="font-serif-body text-xs sm:text-sm text-[#5A4A3F] leading-relaxed sm:leading-7 mb-5">
                    Introduce your titles to over 185,000 verified readers who regularly invest in
                    hardcover editions, signed publications, and new literary voices.
                  </p>
                  <div className="p-4 sm:p-5 bg-[#F2ECE0] border-l-2 border-[#8C2D19] text-xs font-serif-body text-[#4D3F35] leading-relaxed">
                    Our newsletters achieve an authenticated 46.2% open rate, outperforming industry averages.
                  </div>
                </div>

                <div className="lg:col-span-7 space-y-4">
                  <div className="border border-[#E2D5C3] p-5 sm:p-6 bg-[#FCFAF6]">
                    <h4 className="text-sm font-bold font-serif-heading mb-2">Solo Dedicated Newsletter Blast</h4>
                    <p className="font-serif-body text-xs text-[#614F42] leading-relaxed sm:leading-6">
                      A standalone email feature dedicated exclusively to your title, complete with cover artwork,
                      chapter excerpt, and direct Amazon buy links.
                    </p>
                  </div>
                  <div className="border border-[#E2D5C3] p-5 sm:p-6 bg-[#FCFAF6]">
                    <h4 className="text-sm font-bold font-serif-heading mb-2">Category Archive Sponsorship</h4>
                    <p className="font-serif-body text-xs text-[#614F42] leading-relaxed sm:leading-6">
                      Exclusive editorial header banners across relevant subject archives for 14 or 30 days.
                    </p>
                  </div>
                </div>
              </div>
            )}

            {activeTab === "social" && (
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                <div className="lg:col-span-5">
                  <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#8C2D19]">
                    ORGANIC VIRALITY
                  </span>
                  <h3 className="text-xl sm:text-2xl font-bold font-serif-heading text-[#241A15] mt-2 mb-4">
                    BookTok, Bookstagram, and Creator Seeding
                  </h3>
                  <p className="font-serif-body text-xs sm:text-sm text-[#5A4A3F] leading-relaxed sm:leading-7">
                    We seed physical advance reader copies to genuine literary commentators whose reviews
                    spark mass bookstore backorders and sudden Amazon sales velocity.
                  </p>
                </div>

                <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div className="border border-[#E2D5C3] p-5 sm:p-6 bg-[#FCFAF6]">
                    <h4 className="text-sm font-bold font-serif-heading mb-2">ARC Box Experiences</h4>
                    <p className="font-serif-body text-xs text-[#614F42] leading-relaxed sm:leading-6">
                      Custom unboxing presentation, personalized notes, and reading guides that demand video coverage.
                    </p>
                  </div>
                  <div className="border border-[#E2D5C3] p-5 sm:p-6 bg-[#FCFAF6]">
                    <h4 className="text-sm font-bold font-serif-heading mb-2">Paid Social Amplification</h4>
                    <p className="font-serif-body text-xs text-[#614F42] leading-relaxed sm:leading-6">
                      Retargeting top-performing creator reviews straight into the feeds of proven book buyers.
                    </p>
                  </div>
                </div>
              </div>
            )}

            {activeTab === "pr" && (
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                <div className="lg:col-span-5">
                  <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#8C2D19]">
                    LITERARY PRESTIGE
                  </span>
                  <h3 className="text-xl sm:text-2xl font-bold font-serif-heading text-[#241A15] mt-2 mb-4">
                    Literary PR, Essays, and Reviews
                  </h3>
                  <p className="font-serif-body text-xs sm:text-sm text-[#5A4A3F] leading-relaxed sm:leading-7">
                    Securing authoritative coverage in respected cultural journals, literary columns,
                    and podcasts that establish your long-term literary reputation.
                  </p>
                </div>

                <div className="lg:col-span-7 space-y-4">
                  <div className="border border-[#E2D5C3] p-5 sm:p-6 bg-[#FCFAF6]">
                    <h4 className="text-sm font-bold font-serif-heading mb-1.5">Author Q and A Profiles</h4>
                    <p className="font-serif-body text-xs text-[#614F42] leading-relaxed sm:leading-6">
                      Thoughtfully crafted long-form interviews distributed through Thundersmouth digital channels.
                    </p>
                  </div>
                  <div className="border border-[#E2D5C3] p-5 sm:p-6 bg-[#FCFAF6]">
                    <h4 className="text-sm font-bold font-serif-heading mb-1.5">Review Placement Outreach</h4>
                    <p className="font-serif-body text-xs text-[#614F42] leading-relaxed sm:leading-6">
                      Direct pitches to independent book reviewers, trade outlets, and niche literary publications.
                    </p>
                  </div>
                </div>
              </div>
            )}

            {activeTab === "backlist" && (
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                <div className="lg:col-span-5">
                  <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#8C2D19]">
                    LONG-TAIL VALUE
                  </span>
                  <h3 className="text-xl sm:text-2xl font-bold font-serif-heading text-[#241A15] mt-2 mb-4">
                    Backlist Awakening and Catalog Audits
                  </h3>
                  <p className="font-serif-body text-xs sm:text-sm text-[#5A4A3F] leading-relaxed sm:leading-7">
                    Older titles often stagnate on Amazon due to obsolete keywords and forgotten ad setups.
                    We overhaul backend metadata and launch automated ad filters to revive sales.
                  </p>
                </div>

                <div className="lg:col-span-7 space-y-4">
                  <div className="border border-[#E2D5C3] p-5 sm:p-6 bg-[#FCFAF6]">
                    <h4 className="text-sm font-bold font-serif-heading mb-1.5">Search Term Modernization</h4>
                    <p className="font-serif-body text-xs text-[#614F42] leading-relaxed sm:leading-6">
                      Rewriting subtitles and backend 250-byte search fields to match current reader queries.
                    </p>
                  </div>
                  <div className="border border-[#E2D5C3] p-5 sm:p-6 bg-[#FCFAF6]">
                    <h4 className="text-sm font-bold font-serif-heading mb-1.5">Defensive Amazon Ad Protection</h4>
                    <p className="font-serif-body text-xs text-[#614F42] leading-relaxed sm:leading-6">
                      Targeted low-cost bid campaigns preventing competing titles from advertising on your books.
                    </p>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* =========================================================
          THE 90-DAY VELOCITY BLUEPRINT (SPACED TIMELINE)
      ========================================================= */}
      <section className="bg-[#FAF7F2] py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-6 sm:px-10">
          <div className="max-w-3xl mb-12">
            <p className="text-[11px] uppercase tracking-[0.25em] font-bold text-[#8C2D19] mb-3">
              THE METHODOLOGY
            </p>
            <h2 className="text-2xl sm:text-3xl md:text-[34px] font-bold font-serif-heading text-[#241A15]">
              The 90-Day Publisher Blueprint
            </h2>
            <p className="font-serif-body text-xs sm:text-sm text-[#614F42] mt-3 leading-relaxed sm:leading-6">
              We replace chaotic guessing with a systematic sequence designed to maximize algorithmic momentum.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-7">
            <div className="bg-[#FCFAF6] border border-[#DDD0BF] p-7 relative">
              <span className="text-3xl font-bold font-serif-heading text-[#D4A753]/35 absolute top-6 right-6">
                01
              </span>
              <span className="text-[10px] uppercase tracking-[0.2em] font-bold text-[#8C2D19] block mb-2.5">
                WEEKS 1 TO 3
              </span>
              <h3 className="text-base sm:text-lg font-bold font-serif-heading mb-3 text-[#241A15]">
                Foundation and Architecture
              </h3>
              <p className="font-serif-body text-xs text-[#614F42] leading-relaxed sm:leading-6">
                ASIN optimization, competitor keyword research, negative phrase harvesting, and production
                of custom Amazon A+ Content modules to prepare for high-volume conversion.
              </p>
            </div>

            <div className="bg-[#FCFAF6] border border-[#DDD0BF] p-7 relative">
              <span className="text-3xl font-bold font-serif-heading text-[#D4A753]/35 absolute top-6 right-6">
                02
              </span>
              <span className="text-[10px] uppercase tracking-[0.2em] font-bold text-[#8C2D19] block mb-2.5">
                WEEKS 4 TO 7
              </span>
              <h3 className="text-base sm:text-lg font-bold font-serif-heading mb-3 text-[#241A15]">
                Launch Velocity and Surge
              </h3>
              <p className="font-serif-body text-xs text-[#614F42] leading-relaxed sm:leading-6">
                Simultaneous activation of Amazon Sponsored Products, newsletter features, and creator unboxings
                to trigger Amazon's organic recommendation carousels.
              </p>
            </div>

            <div className="bg-[#FCFAF6] border border-[#DDD0BF] p-7 relative">
              <span className="text-3xl font-bold font-serif-heading text-[#D4A753]/35 absolute top-6 right-6">
                03
              </span>
              <span className="text-[10px] uppercase tracking-[0.2em] font-bold text-[#8C2D19] block mb-2.5">
                WEEKS 8 TO 12
              </span>
              <h3 className="text-base sm:text-lg font-bold font-serif-heading mb-3 text-[#241A15]">
                Evergreen Stabilization
              </h3>
              <p className="font-serif-body text-xs text-[#614F42] leading-relaxed sm:leading-6">
                Fine-tuning target ACoS, pruning low-converting bids, maintaining Bestseller category rank,
                and setting up automated cross-title funnels.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          CAMPAIGN INQUIRY CONSOLE
      ========================================================= */}
      <section id="inquiry-desk" className="bg-[#F3EDE2] border-t border-[#DFD3C3] py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-6 sm:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14">
            
            <div className="lg:col-span-5">
              <p className="text-[11px] uppercase tracking-[0.25em] font-bold text-[#8C2D19] mb-3">
                CONSULTATION INTAKE
              </p>
              <h2 className="text-2xl sm:text-3xl md:text-[34px] font-bold font-serif-heading text-[#241A15] leading-tight">
                Begin Your Book’s Campaign.
              </h2>

              <p className="font-serif-body text-xs sm:text-sm text-[#5A4A3F] mt-5 leading-relaxed sm:leading-7">
                Every title possesses unique commercial potential. Share your ASIN, current Amazon rank,
                and campaign objectives. Our marketing strategists will audit your listing within 24 hours.
              </p>

              <div className="mt-9 border-t border-[#E3D7C5] pt-6 space-y-3.5 text-xs font-serif-body">
                <div>
                  <span className="block font-bold text-[#241A15]">Campaign Strategy:</span>
                  <span className="text-[#7A6758] mt-0.5 block">campaigns@thundersmouth.com</span>
                </div>
                <div>
                  <span className="block font-bold text-[#241A15]">Amazon A+ and Advertising Services:</span>
                  <span className="text-[#7A6758] mt-0.5 block">ads@thundersmouth.com</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-7 bg-[#FCFAF6] border border-[#DDD0BF] p-7 sm:p-9">
              <form onSubmit={handleFormSubmit} noValidate>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-[11px] font-bold uppercase tracking-wider text-[#382B22] mb-2">
                      Author or Press Name *
                    </label>
                    <input
                      type="text"
                      name="authorOrPublisher"
                      value={form.authorOrPublisher}
                      onChange={update}
                      placeholder="e.g. Oxford Literary Press"
                      className="w-full bg-white border border-[#D5C6B3] px-3.5 py-3 text-xs text-[#241A15] outline-none focus:border-[#8C2D19]"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] font-bold uppercase tracking-wider text-[#382B22] mb-2">
                      Lead Contact Name *
                    </label>
                    <input
                      type="text"
                      name="contactName"
                      value={form.contactName}
                      onChange={update}
                      placeholder="Your full name"
                      className="w-full bg-white border border-[#D5C6B3] px-3.5 py-3 text-xs text-[#241A15] outline-none focus:border-[#8C2D19]"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] font-bold uppercase tracking-wider text-[#382B22] mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={form.email}
                      onChange={update}
                      placeholder="editor@press.com"
                      className="w-full bg-white border border-[#D5C6B3] px-3.5 py-3 text-xs text-[#241A15] outline-none focus:border-[#8C2D19]"
                      required
                    />
                  </div>

                  {/* FIELD 1: EXPLICITLY OPTIONAL */}
                  <div>
                    <div className="flex justify-between items-center mb-2">
                      <label className="block text-[11px] font-bold uppercase tracking-wider text-[#382B22]">
                        Amazon ASIN, ISBN, or Book URL
                      </label>
                      <span className="text-[10px] text-[#8C2D19] font-serif-body font-semibold italic">
                        (Optional)
                      </span>
                    </div>
                    <input
                      type="text"
                      name="amazonLinkOrAsin"
                      value={form.amazonLinkOrAsin}
                      onChange={update}
                      placeholder="B0XXXXXXXX or Amazon URL (Leave blank if unpublished)"
                      className="w-full bg-white border border-[#D5C6B3] px-3.5 py-3 text-xs text-[#241A15] outline-none focus:border-[#8C2D19]"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] font-bold uppercase tracking-wider text-[#382B22] mb-2">
                      Target Marketplace
                    </label>
                    <select
                      name="targetMarket"
                      value={form.targetMarket}
                      onChange={update}
                      className="w-full bg-white border border-[#D5C6B3] px-3.5 py-3 text-xs text-[#241A15] outline-none focus:border-[#8C2D19]"
                    >
                      <option>Amazon US and Canada</option>
                      <option>Amazon UK and Europe</option>
                      <option>Global Worldwide Rollout</option>
                      <option>Direct Author Store and Amazon</option>
                    </select>
                  </div>

                  {/* FIELD 2: COMPREHENSIVE DROPDOWN WITH ALL SERVICES */}
                  <div>
                    <label className="block text-[11px] font-bold uppercase tracking-wider text-[#382B22] mb-2">
                      Primary Service Requirement
                    </label>
                    <select
                      name="primaryService"
                      value={form.primaryService}
                      onChange={update}
                      className="w-full bg-white border border-[#D5C6B3] px-3.5 py-3 text-xs text-[#241A15] outline-none focus:border-[#8C2D19]"
                    >
                      <option>Full-Service Book Publishing and Print Production</option>
                      <option>Official ISBN Assignment and Barcode Generation</option>
                      <option>Print-on-Demand (POD) Setup and Global Distribution</option>
                      <option>Editorial Development and Manuscript Proofreading</option>
                      <option>Interior Typesetting and Book Architecture</option>
                      <option>Cover Design and Print Finishes</option>
                      <option>Global Distribution (IngramSpark, B&N, Waterstones)</option>
                      <option>Amazon Book Marketing and Backend SEO</option>
                      <option>Amazon Advertising (PPC, Video, and DSP)</option>
                      <option>Amazon A+ Content and Brand Story Architecture</option>
                      <option>Structured Launch Campaigns (Pre-Order to Bestseller Surge)</option>
                      <option>Social Media Marketing (BookTok, Bookstagram, and Meta)</option>
                      <option>Full-Service Advertising Account Management</option>
                      <option>Backlist Catalog Revival and Metadata Modernization</option>
                      <option>Editorial ARC Seeding and Advance Review Distribution</option>
                      <option>Direct Bibliophile Newsletter and Category Takeovers</option>
                      <option>Complete 360 Publisher Flight (All Marketing Channels)</option>
                    </select>
                  </div>

                  <div className="sm:col-span-2">
                    <label className="block text-[11px] font-bold uppercase tracking-wider text-[#382B22] mb-2">
                      Estimated Monthly Promotion Budget
                    </label>
                    <select
                      name="monthlyBudget"
                      value={form.monthlyBudget}
                      onChange={update}
                      className="w-full bg-white border border-[#D5C6B3] px-3.5 py-3 text-xs text-[#241A15] outline-none focus:border-[#8C2D19]"
                    >
                      <option>Initial Test Phase ($750 to $1,500)</option>
                      <option>Standard Growth Phase ($1,500 to $3,500)</option>
                      <option>Bestseller Push ($3,500 to $7,500)</option>
                      <option>Full Publisher Catalog Strategy ($7,500+)</option>
                    </select>
                  </div>

                  <div className="sm:col-span-2">
                    <label className="block text-[11px] font-bold uppercase tracking-wider text-[#382B22] mb-2">
                      Book Details and Campaign Objectives *
                    </label>
                    <textarea
                      rows={3}
                      name="campaignNotes"
                      value={form.campaignNotes}
                      onChange={update}
                      placeholder="Specify your book genre, publishing requirements, current Amazon BSR or ACoS targets, and upcoming launch timeline..."
                      className="w-full bg-white border border-[#D5C6B3] px-3.5 py-3 text-xs text-[#241A15] outline-none focus:border-[#8C2D19]"
                      required
                    />
                  </div>
                </div>

                <div className="mt-5 pt-4 border-t border-[#E8DDCE]">
                  <label className="flex items-start gap-3 cursor-pointer">
                    <input
                      type="checkbox"
                      name="termsAccepted"
                      checked={form.termsAccepted}
                      onChange={update}
                      className="accent-[#8C2D19] mt-0.5 w-3.5 h-3.5 shrink-0"
                      required
                    />
                    <span className="text-[11px] font-serif-body text-[#5A4A3F] leading-relaxed">
                      I confirm that I represent this title or publishing catalog and request a formal
                      campaign audit and strategic proposal from Thundersmouth Literary.
                    </span>
                  </label>
                </div>

                {error && (
                  <div className="mt-4 p-3 bg-red-50 border border-red-200 text-red-800 text-xs">
                    {error}
                  </div>
                )}

                {submitted && (
                  <div className="mt-4 p-4 bg-[#EDF3E8] border border-[#B3C9A7] text-[#2F4A24]">
                    <h4 className="font-bold text-xs">Campaign Brief Received</h4>
                    <p className="text-xs mt-1 font-serif-body leading-relaxed">
                      Thank you. We have received your title specifications. Our Amazon and digital campaign specialists
                      will conduct an initial ASIN, keyword, and category audit and respond within 24 business hours.
                    </p>
                  </div>
                )}

                <button
                  type="submit"
                  className="mt-6 bg-[#8C2D19] text-white px-7 py-3.5 text-xs font-semibold tracking-widest uppercase cursor-pointer"
                >
                  Submit Campaign Details
                </button>
              </form>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}

