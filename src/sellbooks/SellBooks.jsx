import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function MarketingPage() {
  const [activeTab, setActiveTab] = useState("amazon");
  const [form, setForm] = useState({
    authorOrPublisher: "",
    contactName: "",
    email: "",
    amazonLinkOrAsin: "",
    genre: "Literary Fiction",
    targetMarket: "Amazon US and Global",
    primaryGoal: "Amazon A+ Content and Ads",
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
      setError("Please acknowledge our privacy and marketing terms.");
      return;
    }
    setSubmitted(true);
  };

  const scrollToForm = () => {
    document.getElementById("inquiry-desk")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="bg-[#FAF7F2] text-[#241A15] min-h-screen selection:bg-[#8C2D19] selection:text-white">
      {/* Editorial Google Fonts */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,600;0,700;0,800;1,600;1,700&family=Lora:ital,wght@0,400;0,500;0,600;1,400;1,500&display=swap');
        
        .font-serif-heading {
          font-family: 'Playfair Display', Georgia, serif;
          letter-spacing: -0.015em;
        }
        .font-serif-body {
          font-family: 'Lora', Georgia, serif;
        }
      `}</style>

      {/* =========================================================
          HERO: CLASSIC EDITORIAL HERO (RESTRUCTURED & NATURAL)
      ========================================================= */}
      <section className="border-b border-[#E3D7C5]">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 py-16 sm:py-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* Left Content Side */}
            <div className="lg:col-span-7">
              <div className="flex items-center gap-3 mb-5">
                <span className="w-8 h-px bg-[#8C2D19]" />
                <span className="text-[11px] uppercase tracking-[0.25em] font-bold text-[#8C2D19]">
                  LITERARY MARKETING AND PUBLISHER ACCELERATION
                </span>
              </div>

              <h1 className="text-3xl sm:text-4xl md:text-[46px] font-bold leading-[1.12] font-serif-heading text-[#241A15]">
                Turn Great Books into Bestsellers on Amazon and Beyond.
              </h1>

              <p className="font-serif-body text-sm sm:text-[15px] text-[#5C4A3E] mt-5 leading-7 max-w-xl">
                We combine precision Amazon KDP advertising, custom A+ Content visual design,
                algorithmic category rank optimization, and direct reader discovery to build compounding sales.
              </p>

              {/* Natural Button Placement */}
              <div className="mt-8 flex flex-wrap items-center gap-4">
                <button
                  onClick={scrollToForm}
                  className="bg-[#8C2D19] hover:bg-[#6E2213] text-white py-3.5 px-7 text-xs font-semibold tracking-wider uppercase transition-colors cursor-pointer shadow-sm"
                >
                  Request Campaign Audit
                </button>
                <a
                  href="#channels"
                  className="border border-[#241A15] hover:bg-[#241A15] hover:text-white py-3.5 px-6 text-xs font-semibold tracking-wider uppercase transition-colors text-center"
                >
                  Explore Marketing Channels
                </a>
              </div>

              <div className="mt-8 pt-6 border-t border-[#E8DDCE] flex items-center gap-6 text-xs text-[#7A6758] font-serif-body">
                <span>Serving Independent Authors</span>
                <span>•</span>
                <span>University Presses</span>
                <span>•</span>
                <span>Specialist Imprints</span>
              </div>
            </div>

            {/* Right Editorial Image Frame */}
            <div className="lg:col-span-5">
              <div className="bg-white p-3 border border-[#D8CCBD] shadow-sm">
                <div className="relative h-[320px] sm:h-[380px] overflow-hidden bg-[#E8DECE]">
                  <img
                    src="https://images.unsplash.com/photo-1507842217343-583bb7270b66?auto=format&fit=crop&w=1200&q=85"
                    alt="Fine library and books collection"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1A120E]/80 via-transparent to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <p className="text-[10px] uppercase tracking-[0.2em] text-[#D4A753] font-bold">
                      THE EDITORIAL METHOD
                    </p>
                    <p className="font-serif-heading text-sm sm:text-base font-bold mt-1">
                      Targeting Genuine Readers, Not Empty Clicks.
                    </p>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* =========================================================
          METRICS STRIP (WARM PARCHMENT STYLE - NO HARSH BLACK BAR)
      ========================================================= */}
      <section className="bg-[#F2ECE0] border-b border-[#E3D7C5] py-7">
        <div className="max-w-7xl mx-auto px-6 sm:px-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="border-l border-[#D5C6B3] pl-5">
              <span className="block text-2xl sm:text-[28px] font-bold font-serif-heading text-[#241A15]">
                $2.4M+
              </span>
              <span className="text-[10px] sm:text-[11px] uppercase tracking-wider text-[#735F50] mt-0.5 block font-medium">
                Managed Amazon Ad Spend
              </span>
            </div>

            <div className="border-l border-[#D5C6B3] pl-5">
              <span className="block text-2xl sm:text-[28px] font-bold font-serif-heading text-[#241A15]">
                3.8x
              </span>
              <span className="text-[10px] sm:text-[11px] uppercase tracking-wider text-[#735F50] mt-0.5 block font-medium">
                Conversion Lift via A+ Content
              </span>
            </div>

            <div className="border-l border-[#D5C6B3] pl-5">
              <span className="block text-2xl sm:text-[28px] font-bold font-serif-heading text-[#241A15]">
                430+
              </span>
              <span className="text-[10px] sm:text-[11px] uppercase tracking-wider text-[#735F50] mt-0.5 block font-medium">
                Amazon Number One Bestsellers
              </span>
            </div>

            <div className="border-l border-[#D5C6B3] pl-5">
              <span className="block text-2xl sm:text-[28px] font-bold font-serif-heading text-[#241A15]">
                185,000+
              </span>
              <span className="text-[10px] sm:text-[11px] uppercase tracking-wider text-[#735F50] mt-0.5 block font-medium">
                Direct Newsletter Subscribers
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          SCREENSHOT SECTION: 2-COLUMN A+ CONTENT & FRAMEWORK
      ========================================================= */}
      <section className="max-w-7xl mx-auto px-6 sm:px-10 py-16 md:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* Left Column */}
          <div className="lg:col-span-7">
            <p className="text-[11px] uppercase tracking-[0.2em] font-sans font-bold text-[#8C2D19] mb-3">
              FOR AUTHORS AND PUBLISHING HOUSES
            </p>

            <h2 className="text-2xl sm:text-3xl md:text-[34px] font-bold leading-snug font-serif-heading text-[#241A15]">
              A Marketing Framework Built Around Real Reader Conversion.
            </h2>

            <p className="font-serif-body text-[#5C4A3E] text-sm sm:text-[15px] leading-7 mt-5">
              Most book advertising wastes capital by directing traffic to unoptimized Amazon pages.
              We transform your listing with bespoke Amazon A+ Content, rich editorial reviews,
              and compelling visual comparison charts that persuade hesitant browsers to click Buy Now.
            </p>

            <p className="font-serif-body text-[#5C4A3E] text-sm sm:text-[15px] leading-7 mt-3">
              Behind the visual storefront, we calibrate high-intent Amazon backend search terms,
              clean category taxonomy, and Author Central optimization to unlock continuous organic visibility
              in Amazon’s algorithmic recommendation carousels.
            </p>

            <p className="font-serif-body text-[#5C4A3E] text-sm sm:text-[15px] leading-7 mt-3">
              Whether you are launching a flagship hardcover, managing Kindle Unlimited read-through,
              or reviving an entire publisher backlist, your titles receive the rigorous commercial architecture
              necessary to maintain top bestseller rank.
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

              <div className="absolute bottom-0 inset-x-0 bg-[#241A15]/95 p-5 text-[#F5EADB]">
                <p className="text-[10px] text-[#D4A753] uppercase tracking-[0.2em] font-sans font-bold mb-1.5">
                  VISUAL MERCHANDISING
                </p>
                <h3 className="text-base sm:text-lg font-bold font-serif-heading text-white">
                  Amazon A+ Content and Brand Store Design
                </h3>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* =========================================================
          THE FIVE PILLARS: INTERACTIVE TABS
      ========================================================= */}
      <section id="channels" className="bg-[#F4EEE3] border-y border-[#E2D5C3] py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-6 sm:px-10">
          <div className="border-b border-[#DDD0BF] pb-8 mb-10">
            <p className="text-[11px] uppercase tracking-[0.25em] font-bold text-[#8C2D19] mb-2">
              MARKETING CAPABILITIES
            </p>
            <h2 className="text-2xl sm:text-3xl md:text-[34px] font-bold font-serif-heading text-[#241A15]">
              Full-Spectrum Book Marketing and Discovery
            </h2>
            <p className="font-serif-body text-xs sm:text-sm text-[#614F42] mt-2 max-w-2xl">
              We coordinate algorithmic Amazon targeting with visual page conversion, creator seeding,
              and dedicated editorial distribution.
            </p>
          </div>

          {/* Tabs */}
          <div className="flex flex-wrap gap-2 border-b border-[#DDD0BF] pb-3 mb-8">
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
                    : "bg-transparent text-[#7B695B] hover:text-[#241A15]"
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
                  <h3 className="text-xl sm:text-2xl font-bold font-serif-heading text-[#241A15] mt-1.5 mb-3">
                    Amazon PPC, A+ Content and BSR Ranking
                  </h3>
                  <p className="font-serif-body text-xs sm:text-sm text-[#5A4A3F] leading-relaxed mb-4">
                    Amazon represents over 68% of global book sales. We deploy exact ASIN targeting,
                    negative keyword pruning, and custom visual A+ Content modules to turn passive views
                    into compounding royalty income.
                  </p>
                  <div className="p-4 bg-[#F2ECE0] border-l-2 border-[#8C2D19] text-xs font-serif-body text-[#4D3F35]">
                    "Amazon's algorithm rewards consistent sales velocity. Once your conversion rate exceeds
                    category averages, Amazon begins advertising your book in Customers Also Bought."
                  </div>
                </div>

                <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="border border-[#E2D5C3] p-4 sm:p-5 bg-[#FCFAF6]">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-[#8C2D19] block mb-1">
                      Visual Merchandising
                    </span>
                    <h4 className="text-sm font-bold font-serif-heading mb-1">Amazon A+ Content Production</h4>
                    <p className="font-serif-body text-xs text-[#614F42] leading-relaxed">
                      Custom banner art, comparative title carousels, author spotlights, and quote callouts
                      that transform plain product pages into high-converting storefronts.
                    </p>
                  </div>

                  <div className="border border-[#E2D5C3] p-4 sm:p-5 bg-[#FCFAF6]">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-[#8C2D19] block mb-1">
                      Sponsored Products PPC
                    </span>
                    <h4 className="text-sm font-bold font-serif-heading mb-1">Targeted ASIN and Keyword Bidding</h4>
                    <p className="font-serif-body text-xs text-[#614F42] leading-relaxed">
                      Bidding on competing author names and bestselling titles in your niche with strict ACoS
                      caps to capture buyers right at checkout.
                    </p>
                  </div>

                  <div className="border border-[#E2D5C3] p-4 sm:p-5 bg-[#FCFAF6]">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-[#8C2D19] block mb-1">
                      Category Placement
                    </span>
                    <h4 className="text-sm font-bold font-serif-heading mb-1">Bestseller Rank (BSR) Optimization</h4>
                    <p className="font-serif-body text-xs text-[#614F42] leading-relaxed">
                      Deep category research and backend indexing to secure the Number One New Release and
                      Bestseller orange flags on Amazon.
                    </p>
                  </div>

                  <div className="border border-[#E2D5C3] p-4 sm:p-5 bg-[#FCFAF6]">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-[#8C2D19] block mb-1">
                      Reader Social Proof
                    </span>
                    <h4 className="text-sm font-bold font-serif-heading mb-1">Goodreads and Kindle Deals</h4>
                    <p className="font-serif-body text-xs text-[#614F42] leading-relaxed">
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
                  <h3 className="text-xl sm:text-2xl font-bold font-serif-heading text-[#241A15] mt-1.5 mb-3">
                    Direct Reader Sponsorships and Newsletters
                  </h3>
                  <p className="font-serif-body text-xs sm:text-sm text-[#5A4A3F] leading-relaxed mb-4">
                    Introduce your titles to over 185,000 verified readers who regularly invest in
                    hardcover editions, signed publications, and new literary voices.
                  </p>
                  <div className="p-4 bg-[#F2ECE0] border-l-2 border-[#8C2D19] text-xs font-serif-body text-[#4D3F35]">
                    Our newsletters achieve an authenticated 46.2% open rate, outperforming industry averages.
                  </div>
                </div>

                <div className="lg:col-span-7 space-y-3">
                  <div className="border border-[#E2D5C3] p-4 bg-[#FCFAF6]">
                    <h4 className="text-sm font-bold font-serif-heading mb-1">Solo Dedicated Newsletter Blast</h4>
                    <p className="font-serif-body text-xs text-[#614F42] leading-relaxed">
                      A standalone email feature dedicated exclusively to your title, complete with cover artwork,
                      chapter excerpt, and direct Amazon buy links.
                    </p>
                  </div>
                  <div className="border border-[#E2D5C3] p-4 bg-[#FCFAF6]">
                    <h4 className="text-sm font-bold font-serif-heading mb-1">Category Archive Sponsorship</h4>
                    <p className="font-serif-body text-xs text-[#614F42] leading-relaxed">
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
                  <h3 className="text-xl sm:text-2xl font-bold font-serif-heading text-[#241A15] mt-1.5 mb-3">
                    BookTok, Bookstagram and Creator Seeding
                  </h3>
                  <p className="font-serif-body text-xs sm:text-sm text-[#5A4A3F] leading-relaxed">
                    We seed physical advance reader copies to genuine literary commentators whose reviews
                    spark mass bookstore backorders and sudden Amazon sales velocity.
                  </p>
                </div>

                <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="border border-[#E2D5C3] p-4 bg-[#FCFAF6]">
                    <h4 className="text-sm font-bold font-serif-heading mb-1">ARC Box Experiences</h4>
                    <p className="font-serif-body text-xs text-[#614F42]">
                      Custom unboxing presentation, personalized notes, and reading guides that demand video coverage.
                    </p>
                  </div>
                  <div className="border border-[#E2D5C3] p-4 bg-[#FCFAF6]">
                    <h4 className="text-sm font-bold font-serif-heading mb-1">Paid Social Amplification</h4>
                    <p className="font-serif-body text-xs text-[#614F42]">
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
                  <h3 className="text-xl sm:text-2xl font-bold font-serif-heading text-[#241A15] mt-1.5 mb-3">
                    Literary PR, Essays and Reviews
                  </h3>
                  <p className="font-serif-body text-xs sm:text-sm text-[#5A4A3F] leading-relaxed">
                    Securing authoritative coverage in respected cultural journals, literary columns,
                    and podcasts that establish your long-term literary reputation.
                  </p>
                </div>

                <div className="lg:col-span-7 space-y-3">
                  <div className="border border-[#E2D5C3] p-4 bg-[#FCFAF6]">
                    <h4 className="text-sm font-bold font-serif-heading mb-1">Author Q and A Profiles</h4>
                    <p className="font-serif-body text-xs text-[#614F42]">
                      Thoughtfully crafted long-form interviews distributed through BLUE BOOK digital channels.
                    </p>
                  </div>
                  <div className="border border-[#E2D5C3] p-4 bg-[#FCFAF6]">
                    <h4 className="text-sm font-bold font-serif-heading mb-1">Review Placement Outreach</h4>
                    <p className="font-serif-body text-xs text-[#614F42]">
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
                  <h3 className="text-xl sm:text-2xl font-bold font-serif-heading text-[#241A15] mt-1.5 mb-3">
                    Backlist Awakening and Catalog Audits
                  </h3>
                  <p className="font-serif-body text-xs sm:text-sm text-[#5A4A3F] leading-relaxed">
                    Older titles often stagnate on Amazon due to obsolete keywords and forgotten ad setups.
                    We overhaul backend metadata and launch automated ad filters to revive sales.
                  </p>
                </div>

                <div className="lg:col-span-7 space-y-3">
                  <div className="border border-[#E2D5C3] p-4 bg-[#FCFAF6]">
                    <h4 className="text-sm font-bold font-serif-heading mb-1">Search Term Modernization</h4>
                    <p className="font-serif-body text-xs text-[#614F42]">
                      Rewriting subtitles and backend 250-byte search fields to match current reader queries.
                    </p>
                  </div>
                  <div className="border border-[#E2D5C3] p-4 bg-[#FCFAF6]">
                    <h4 className="text-sm font-bold font-serif-heading mb-1">Defensive Amazon Ad Protection</h4>
                    <p className="font-serif-body text-xs text-[#614F42]">
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
          THE 90-DAY VELOCITY BLUEPRINT
      ========================================================= */}
      <section className="bg-[#FAF7F2] py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-6 sm:px-10">
          <div className="max-w-3xl mb-10">
            <p className="text-[11px] uppercase tracking-[0.25em] font-bold text-[#8C2D19] mb-2">
              THE METHODOLOGY
            </p>
            <h2 className="text-2xl sm:text-3xl md:text-[34px] font-bold font-serif-heading text-[#241A15]">
              The 90-Day Publisher Blueprint
            </h2>
            <p className="font-serif-body text-xs sm:text-sm text-[#614F42] mt-1.5">
              We replace chaotic guessing with a systematic sequence designed to maximize algorithmic momentum.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-[#FCFAF6] border border-[#DDD0BF] p-6 relative">
              <span className="text-3xl font-bold font-serif-heading text-[#D4A753]/35 absolute top-5 right-5">
                01
              </span>
              <span className="text-[10px] uppercase tracking-[0.2em] font-bold text-[#8C2D19] block mb-2">
                WEEKS 1 TO 3
              </span>
              <h3 className="text-base sm:text-lg font-bold font-serif-heading mb-2 text-[#241A15]">
                Foundation and Architecture
              </h3>
              <p className="font-serif-body text-xs text-[#614F42] leading-relaxed">
                ASIN optimization, competitor keyword research, negative phrase harvesting, and production
                of custom Amazon A+ Content modules to prepare for high-volume conversion.
              </p>
            </div>

            <div className="bg-[#FCFAF6] border border-[#DDD0BF] p-6 relative">
              <span className="text-3xl font-bold font-serif-heading text-[#D4A753]/35 absolute top-5 right-5">
                02
              </span>
              <span className="text-[10px] uppercase tracking-[0.2em] font-bold text-[#8C2D19] block mb-2">
                WEEKS 4 TO 7
              </span>
              <h3 className="text-base sm:text-lg font-bold font-serif-heading mb-2 text-[#241A15]">
                Launch Velocity and Surge
              </h3>
              <p className="font-serif-body text-xs text-[#614F42] leading-relaxed">
                Simultaneous activation of Amazon Sponsored Products, newsletter features, and creator unboxings
                to trigger Amazon's organic recommendation carousels.
              </p>
            </div>

            <div className="bg-[#FCFAF6] border border-[#DDD0BF] p-6 relative">
              <span className="text-3xl font-bold font-serif-heading text-[#D4A753]/35 absolute top-5 right-5">
                03
              </span>
              <span className="text-[10px] uppercase tracking-[0.2em] font-bold text-[#8C2D19] block mb-2">
                WEEKS 8 TO 12
              </span>
              <h3 className="text-base sm:text-lg font-bold font-serif-heading mb-2 text-[#241A15]">
                Evergreen Stabilization
              </h3>
              <p className="font-serif-body text-xs text-[#614F42] leading-relaxed">
                Fine-tuning target ACoS, pruning low-converting bids, maintaining Bestseller category rank,
                and setting up automated cross-title funnels.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          CAMPAIGN INQUIRY CONSOLE (CLEAN FORM)
      ========================================================= */}
      <section id="inquiry-desk" className="bg-[#F3EDE2] border-t border-[#DFD3C3] py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-6 sm:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            
            <div className="lg:col-span-5">
              <p className="text-[11px] uppercase tracking-[0.25em] font-bold text-[#8C2D19] mb-2">
                CONSULTATION INTAKE
              </p>
              <h2 className="text-2xl sm:text-3xl md:text-[34px] font-bold font-serif-heading text-[#241A15] leading-tight">
                Begin Your Book’s Campaign.
              </h2>

              <p className="font-serif-body text-xs sm:text-sm text-[#5A4A3F] mt-4 leading-relaxed">
                Every title possesses unique commercial potential. Share your ASIN, current Amazon rank,
                and campaign objectives. Our marketing strategists will audit your listing within 24 hours.
              </p>

              <div className="mt-8 border-t border-[#E3D7C5] pt-6 space-y-3 text-xs font-serif-body">
                <div>
                  <span className="block font-bold text-[#241A15]">Campaign Strategy:</span>
                  <span className="text-[#7A6758]">campaigns@bluebookliterary.com</span>
                </div>
                <div>
                  <span className="block font-bold text-[#241A15]">Amazon A+ and PPC Services:</span>
                  <span className="text-[#7A6758]">ads@bluebookliterary.com</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-7 bg-[#FCFAF6] border border-[#DDD0BF] p-6 sm:p-8">
              <form onSubmit={handleFormSubmit} noValidate>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[11px] font-bold uppercase tracking-wider text-[#382B22] mb-1">
                      Author or Press Name *
                    </label>
                    <input
                      type="text"
                      name="authorOrPublisher"
                      value={form.authorOrPublisher}
                      onChange={update}
                      placeholder="e.g. Oxford Literary Press"
                      className="w-full bg-white border border-[#D5C6B3] px-3.5 py-2.5 text-xs text-[#241A15] outline-none focus:border-[#8C2D19]"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] font-bold uppercase tracking-wider text-[#382B22] mb-1">
                      Lead Contact Name *
                    </label>
                    <input
                      type="text"
                      name="contactName"
                      value={form.contactName}
                      onChange={update}
                      placeholder="Your full name"
                      className="w-full bg-white border border-[#D5C6B3] px-3.5 py-2.5 text-xs text-[#241A15] outline-none focus:border-[#8C2D19]"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] font-bold uppercase tracking-wider text-[#382B22] mb-1">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={form.email}
                      onChange={update}
                      placeholder="editor@press.com"
                      className="w-full bg-white border border-[#D5C6B3] px-3.5 py-2.5 text-xs text-[#241A15] outline-none focus:border-[#8C2D19]"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] font-bold uppercase tracking-wider text-[#382B22] mb-1">
                      Amazon ASIN, ISBN, or Book URL
                    </label>
                    <input
                      type="text"
                      name="amazonLinkOrAsin"
                      value={form.amazonLinkOrAsin}
                      onChange={update}
                      placeholder="B0XXXXXXXX or Amazon URL"
                      className="w-full bg-white border border-[#D5C6B3] px-3.5 py-2.5 text-xs text-[#241A15] outline-none focus:border-[#8C2D19]"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] font-bold uppercase tracking-wider text-[#382B22] mb-1">
                      Target Marketplace
                    </label>
                    <select
                      name="targetMarket"
                      value={form.targetMarket}
                      onChange={update}
                      className="w-full bg-white border border-[#D5C6B3] px-3.5 py-2.5 text-xs text-[#241A15] outline-none focus:border-[#8C2D19]"
                    >
                      <option>Amazon US and Canada</option>
                      <option>Amazon UK and Europe</option>
                      <option>Global Worldwide Rollout</option>
                      <option>Direct Author Store and Amazon</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-[11px] font-bold uppercase tracking-wider text-[#382B22] mb-1">
                      Primary Campaign Objective
                    </label>
                    <select
                      name="primaryGoal"
                      value={form.primaryGoal}
                      onChange={update}
                      className="w-full bg-white border border-[#D5C6B3] px-3.5 py-2.5 text-xs text-[#241A15] outline-none focus:border-[#8C2D19]"
                    >
                      <option>Amazon A+ Content and Page Redesign</option>
                      <option>Amazon BSR Ranking and PPC Ads</option>
                      <option>New Release Launch Velocity</option>
                      <option>Backlist Catalog Revival</option>
                      <option>Full 360 (Amazon, BookTok, PR, and Newsletters)</option>
                    </select>
                  </div>

                  <div className="sm:col-span-2">
                    <label className="block text-[11px] font-bold uppercase tracking-wider text-[#382B22] mb-1">
                      Estimated Monthly Promotion Budget
                    </label>
                    <select
                      name="monthlyBudget"
                      value={form.monthlyBudget}
                      onChange={update}
                      className="w-full bg-white border border-[#D5C6B3] px-3.5 py-2.5 text-xs text-[#241A15] outline-none focus:border-[#8C2D19]"
                    >
                      <option>Test Phase ($750 to $1,500)</option>
                      <option>Standard Growth ($1,500 to $3,500)</option>
                      <option>Bestseller Push ($3,500 to $7,500)</option>
                      <option>Full Publisher Catalog ($7,500+)</option>
                    </select>
                  </div>

                  <div className="sm:col-span-2">
                    <label className="block text-[11px] font-bold uppercase tracking-wider text-[#382B22] mb-1">
                      Book Details and Specific Campaign Vision *
                    </label>
                    <textarea
                      rows={3}
                      name="campaignNotes"
                      value={form.campaignNotes}
                      onChange={update}
                      placeholder="Tell us about your book, comparable titles, current sales history, and your ideal timeline..."
                      className="w-full bg-white border border-[#D5C6B3] px-3.5 py-2.5 text-xs text-[#241A15] outline-none focus:border-[#8C2D19]"
                      required
                    />
                  </div>
                </div>

                <div className="mt-4 pt-3.5 border-t border-[#E8DDCE]">
                  <label className="flex items-start gap-2.5 cursor-pointer">
                    <input
                      type="checkbox"
                      name="termsAccepted"
                      checked={form.termsAccepted}
                      onChange={update}
                      className="accent-[#8C2D19] mt-0.5 w-3.5 h-3.5 shrink-0"
                      required
                    />
                    <span className="text-[11px] font-serif-body text-[#5A4A3F] leading-4">
                      I confirm that I represent this title or publishing catalog and wish to receive a tailored
                      campaign audit from BLUE BOOK Literary.
                    </span>
                  </label>
                </div>

                {error && (
                  <div className="mt-3 p-2.5 bg-red-50 border border-red-200 text-red-800 text-xs">
                    {error}
                  </div>
                )}

                {submitted && (
                  <div className="mt-3 p-3 bg-[#EDF3E8] border border-[#B3C9A7] text-[#2F4A24]">
                    <h4 className="font-bold text-xs">Campaign Proposal Logged</h4>
                    <p className="text-xs mt-0.5 font-serif-body leading-relaxed">
                      Thank you. We have received your title specifications. Our Amazon and campaign specialists
                      will conduct an initial ASIN and competitor analysis and respond within 24 business hours.
                    </p>
                  </div>
                )}

                <button
                  type="submit"
                  className="mt-5 bg-[#8C2D19] hover:bg-[#6F2314] text-white px-7 py-3 text-xs font-semibold tracking-widest uppercase transition-colors cursor-pointer"
                >
                  Submit Campaign Details
                </button>
              </form>
            </div>

          </div>
        </div>
      </section>

      {/* =========================================================
          FOOTER
      ========================================================= */}
      <footer className="bg-[#1A120E] text-[#E8DED1] border-t border-[#0F0A08] py-8">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <div>
            <p className="text-[10px] uppercase tracking-[0.25em] text-[#D4A753] font-bold">
              BLUE BOOK BOOKSELLER AND MARKETING NETWORK
            </p>
            <p className="font-serif-body text-[11px] text-[#8A7869] mt-0.5">
              © {new Date().getFullYear()} BLUE BOOK Literary. Dedicated to exceptional books and enduring readership.
            </p>
          </div>

          <div className="flex gap-5 text-[11px] uppercase tracking-wider text-[#A39281]">
            <Link to="/bookstores" className="hover:text-white transition-colors">
              Directory
            </Link>
            <a href="#channels" className="hover:text-white transition-colors">
              Channels
            </a>
            <button onClick={scrollToForm} className="hover:text-white transition-colors cursor-pointer">
              Book a Campaign
            </button>
          </div>
        </div>
      </footer>
    </div>
  );
}