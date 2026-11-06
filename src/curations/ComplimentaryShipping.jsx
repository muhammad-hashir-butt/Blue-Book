
import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  ArrowUpRight,
  BookOpen,
  Box,
  Check,
  CheckCircle2,
  ChevronDown,
  Clock3,
  Gift,
  Globe2,
  Heart,
  HelpCircle,
  Landmark,
  LockKeyhole,
  MapPin,
  Package,
  PackageCheck,
  Search,
  ShieldCheck,
  Sparkles,
  Truck,
  Warehouse,
} from "lucide-react";

// DEMONSTRATION SETTINGS
// Replace with actual store shipping policy before launch.
const DEMO_FREE_SHIPPING_THRESHOLD = 150;

const shippingSteps = [
  {
    number: "01",
    title: "Order Received",
    description:
      "Your order enters the preparation process. Its details can be reviewed before the books are packed.",
    icon: BookOpen,
  },
  {
    number: "02",
    title: "Careful Packaging",
    description:
      "Books are prepared using packaging appropriate to their size, format, and condition.",
    icon: Package,
  },
  {
    number: "03",
    title: "Ready for Dispatch",
    description:
      "After preparation, the parcel can be handed over to the selected delivery service.",
    icon: Warehouse,
  },
  {
    number: "04",
    title: "At Your Doorstep",
    description:
      "Your books complete their journey from our collection to your personal library.",
    icon: MapPin,
  },
];

const faqs = [
  {
    question: "How do I qualify for complimentary shipping?",
    answer:
      "Complimentary shipping is intended for orders that meet the store's qualifying requirements. The $150 amount shown in the calculator is a demonstration only. Confirm the actual order threshold, eligible destinations, and exclusions before making this page live.",
  },
  {
    question: "Can rare and antiquarian books be shipped?",
    answer:
      "Yes, rare and antiquarian books can be shipped when suitable packaging and delivery arrangements are available. Particularly fragile, oversized, or high-value items may require special handling.",
  },
  {
    question: "Are international orders eligible?",
    answer:
      "International shipping eligibility depends on the destination, order contents, carrier availability, and your published store policy. Any applicable customs duties and import taxes should be disclosed at checkout.",
  },
  {
    question: "Will I receive a tracking number?",
    answer:
      "Tracking information can be provided for shipments booked with a tracked carrier service. The actual tracking process will depend on the fulfillment system connected to your store.",
  },
  {
    question: "What happens if a book is damaged during delivery?",
    answer:
      "Damage claims should be reviewed under the store's published shipping, returns, and insurance terms. Customers should retain the packaging and contact support with photos of any damage.",
  },
  {
    question: "How long does delivery take?",
    answer:
      "Delivery estimates depend on the destination, parcel preparation requirements, and selected shipping service. Verified delivery timeframes should be displayed at checkout or in the order confirmation.",
  },
];

function SectionHeading({ eyebrow, title, description, center = false }) {
  return (
    <div className={center ? "text-center max-w-3xl mx-auto" : "max-w-2xl"}>
      <div
        className={`flex items-center gap-3 mb-5 ${
          center ? "justify-center" : ""
        }`}
      >
        <span className="w-9 h-px bg-[#8c2d19]" />
        <span className="text-[11px] sm:text-xs font-sans font-bold uppercase tracking-[0.2em] text-[#8c2d19]">
          {eyebrow}
        </span>
        {center && <span className="w-9 h-px bg-[#8c2d19]" />}
      </div>

      <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
        {title}
      </h2>

      {description && (
        <p className="text-[#6b584a] mt-5 text-base leading-8">
          {description}
        </p>
      )}
    </div>
  );
}

function ParcelArtwork() {
  return (
    <div className="relative bg-[#e8dece] border border-[#d0bfa7] p-6 sm:p-10">
      <div className="border border-[#b9a98e] px-5 py-9 sm:px-10 sm:py-12 relative overflow-hidden">

        <div className="text-center mb-10">
          <p className="text-[#8c2d19] text-[10px] font-sans font-bold uppercase tracking-[0.3em]">
            The Blue Book Experience
          </p>

          <h3 className="text-2xl sm:text-3xl font-bold mt-3">
            Treasures in Transit
          </h3>
        </div>

        <div className="relative mx-auto max-w-[320px] h-[260px] flex items-center justify-center">

          {/* Parcel shadow */}
          <div className="absolute bottom-5 w-56 h-5 bg-[#baa991]/40 rounded-[50%]" />

          {/* Decorative books */}
          <div className="absolute left-[3%] bottom-11 w-[76px] h-[165px] bg-[#354a43] border-l-[8px] border-[#26352f] shadow-lg">
            <div className="absolute inset-2 border border-[#c29b38]/70 flex items-center justify-center">
              <BookOpen size={23} className="text-[#c29b38]" />
            </div>
          </div>

          <div className="absolute right-[5%] bottom-11 w-[65px] h-[145px] bg-[#8c2d19] border-l-[7px] border-[#622014] shadow-lg">
            <div className="absolute inset-2 border border-[#e0bd80]/70 flex items-center justify-center">
              <Sparkles size={21} className="text-[#e0bd80]" />
            </div>
          </div>

          {/* Main parcel */}
          <div className="relative z-10 w-[185px] h-[165px] bg-[#c7a67b] border-2 border-[#997850] shadow-[12px_15px_0_rgba(62,43,28,0.16)]">

            <div className="absolute inset-y-0 left-1/2 -translate-x-1/2 w-[37px] bg-[#ead4ae] border-x border-[#ab8a5e]" />

            <div className="absolute inset-x-0 top-[35px] h-[31px] bg-[#e4cda7] border-y border-[#ab8a5e]" />

            <div className="absolute top-[76px] left-1/2 -translate-x-1/2 w-[106px] h-[74px] bg-[#fbf8f2] border border-[#96785a] flex flex-col items-center justify-center text-center">
              <BookOpen size={18} className="text-[#8c2d19] mb-2" />
              <p className="text-[12px] font-black tracking-[0.18em]">
                BLUE BOOK
              </p>
              <p className="text-[7px] uppercase tracking-[0.1em] mt-1 text-[#7a6452]">
                Books & Manuscripts
              </p>
            </div>
          </div>

        </div>

        <div className="text-center mt-10 flex justify-center items-center gap-2 text-[#6b584a]">
          <ShieldCheck size={17} className="text-[#8c2d19]" />
          <span className="text-xs font-sans font-semibold tracking-wider uppercase">
            Handled With Consideration
          </span>
        </div>

      </div>

      <div className="absolute -bottom-4 right-4 sm:right-8 bg-[#241a15] text-[#f0e6d6] px-5 py-3 border border-[#c29b38]">
        <div className="flex items-center gap-2">
          <Gift size={15} className="text-[#c29b38]" />
          <span className="text-[11px] font-sans font-bold uppercase tracking-wider">
            Made for Book Lovers
          </span>
        </div>
      </div>
    </div>
  );
}

export default function ComplimentaryShipping() {
  const [orderValue, setOrderValue] = useState("");
  const [destination, setDestination] = useState("domestic");
  const [hasChecked, setHasChecked] = useState(false);
  const [openFaq, setOpenFaq] = useState(0);

  const amount = Number(orderValue);
  const validAmount =
    orderValue.trim() !== "" &&
    Number.isFinite(amount) &&
    amount >= 0;

  const remaining = validAmount
    ? Math.max(DEMO_FREE_SHIPPING_THRESHOLD - amount, 0)
    : DEMO_FREE_SHIPPING_THRESHOLD;

  const progress = validAmount
    ? Math.min(
        (amount / DEMO_FREE_SHIPPING_THRESHOLD) * 100,
        100
      )
    : 0;

  const eligible =
    validAmount &&
    amount >= DEMO_FREE_SHIPPING_THRESHOLD &&
    destination === "domestic";

  const calculateShipping = (event) => {
    event.preventDefault();
    setHasChecked(true);
  };

  const scrollToCalculator = () => {
    document.getElementById("shipping-calculator")?.scrollIntoView();
  };

  return (
    <div className="min-h-screen bg-[#fbf8f2] text-[#241a15]">

      {/* ======================================
           SECTION 1 - HERO
      ====================================== */}

      <section className="bg-[#f4eee2] border-b border-[#d6c7b2]">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 py-16 md:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

            <div>
              <div className="inline-flex items-center gap-2 text-[#8c2d19] mb-7">
                <Truck size={19} />
                <span className="font-sans text-xs uppercase tracking-[0.22em] font-bold">
                  Blue Book Delivery Services
                </span>
              </div>

              <h1
                className="text-5xl sm:text-6xl xl:text-7xl leading-[1.09] font-bold"
                style={{ fontFamily: "Georgia, serif" }}
              >
                Complimentary
                <br />
                <span className="italic text-[#8c2d19]">
                  Shipping.
                </span>
              </h1>

              <div className="w-20 h-[2px] bg-[#c29b38] mt-8" />

              <p className="mt-7 text-lg md:text-xl text-[#5b493b] leading-9 max-w-xl">
                The pleasure of discovering a remarkable
                book should continue all the way to your
                doorstep.
              </p>

              <p className="mt-5 text-sm md:text-base leading-8 text-[#7a6452] max-w-xl">
                Explore our approach to thoughtful packaging,
                shipping arrangements, and special delivery
                benefits for qualifying book orders.
              </p>

              <div className="mt-9 flex flex-wrap gap-4">
                <button
                  type="button"
                  onClick={scrollToCalculator}
                  className="bg-[#8c2d19] text-white px-7 py-4 text-sm font-semibold flex items-center gap-3 hover:bg-[#6c2416]"
                >
                  Check Shipping Eligibility
                  <ArrowRight size={18} />
                </button>

                <Link
                  to="/curated-markdowns"
                  className="border border-[#ac9680] text-[#382b22] px-7 py-4 text-sm font-semibold flex items-center gap-3 hover:bg-[#eadfcc]"
                >
                  Browse Books
                  <ArrowUpRight size={17} />
                </Link>
              </div>

              <div className="mt-11 pt-7 border-t border-[#d7cab8] flex flex-wrap gap-x-8 gap-y-4">
                <div className="flex items-center gap-2 text-sm text-[#584536]">
                  <PackageCheck size={18} className="text-[#8c2d19]" />
                  Protective Packaging
                </div>

                <div className="flex items-center gap-2 text-sm text-[#584536]">
                  <ShieldCheck size={18} className="text-[#8c2d19]" />
                  Delivery Care
                </div>
              </div>
            </div>

            <ParcelArtwork />

          </div>
        </div>
      </section>

      {/* ======================================
           SECTION 2 - SHIPPING CALCULATOR
      ====================================== */}

      <section
        id="shipping-calculator"
        className="max-w-7xl mx-auto px-5 sm:px-8 py-16 md:py-20"
      >
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">

          <div className="lg:col-span-5 lg:pt-8">
            <SectionHeading
              eyebrow="Shipping Eligibility"
              title="Discover Your Delivery Benefits"
              description="Use our sample shipping calculator to see how complimentary delivery eligibility could work for a qualifying book order."
            />

            <div className="mt-9 space-y-5">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 shrink-0 bg-[#eee2d1] flex items-center justify-center">
                  <CheckCircle2 size={19} className="text-[#8c2d19]" />
                </div>

                <div>
                  <h3 className="font-bold mb-1">
                    Simple Eligibility Check
                  </h3>
                  <p className="text-sm text-[#6b584a] leading-6">
                    Enter an estimated order subtotal
                    to compare it with the demo threshold.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 shrink-0 bg-[#eee2d1] flex items-center justify-center">
                  <Globe2 size={19} className="text-[#8c2d19]" />
                </div>

                <div>
                  <h3 className="font-bold mb-1">
                    Domestic & International Options
                  </h3>
                  <p className="text-sm text-[#6b584a] leading-6">
                    Select a destination category and
                    explore the potential delivery requirements.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 shrink-0 bg-[#eee2d1] flex items-center justify-center">
                  <LockKeyhole size={19} className="text-[#8c2d19]" />
                </div>

                <div>
                  <h3 className="font-bold mb-1">
                    No Checkout Required
                  </h3>
                  <p className="text-sm text-[#6b584a] leading-6">
                    This demonstration does not process payments
                    or create any shipping bookings.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* CALCULATOR PANEL */}
          <div className="lg:col-span-7">
            <div className="border border-[#d6c7b2] bg-[#fffdfa] shadow-[0_12px_35px_rgba(36,26,21,0.06)]">

              <div className="bg-[#241a15] px-6 sm:px-9 py-7 text-[#f0e7d7] flex items-start justify-between gap-5">
                <div>
                  <p className="text-[#c29b38] text-[11px] font-sans uppercase tracking-[0.18em] mb-3">
                    Interactive Demonstration
                  </p>

                  <h3 className="text-2xl md:text-3xl font-bold">
                    Check Your Shipping
                  </h3>
                </div>

                <Truck size={30} className="text-[#c29b38] shrink-0" />
              </div>

              <form onSubmit={calculateShipping} className="p-6 sm:p-9">

                <div className="mb-7">
                  <label
                    htmlFor="shipping-order-value"
                    className="block text-sm font-bold mb-3"
                  >
                    Estimated Order Subtotal (USD)
                  </label>

                  <div className="flex border border-[#cdbfae] bg-[#fbf8f2]">
                    <span className="px-5 py-4 border-r border-[#cdbfae] font-bold text-[#8c2d19]">
                      $
                    </span>

                    <input
                      id="shipping-order-value"
                      type="number"
                      min="0"
                      step="0.01"
                      value={orderValue}
                      onChange={(event) => {
                        setOrderValue(event.target.value);
                        setHasChecked(false);
                      }}
                      placeholder="Enter your cart subtotal"
                      className="w-full px-4 py-4 bg-transparent outline-none text-sm"
                      required
                    />
                  </div>
                </div>

                <div className="mb-8">
                  <label className="block text-sm font-bold mb-3">
                    Shipping Destination
                  </label>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <button
                      type="button"
                      onClick={() => {
                        setDestination("domestic");
                        setHasChecked(false);
                      }}
                      className={`p-4 border flex items-center gap-3 text-left ${
                        destination === "domestic"
                          ? "border-[#8c2d19] bg-[#f5ece2]"
                          : "border-[#d6c7b2] bg-white"
                      }`}
                    >
                      <MapPin size={20} className="text-[#8c2d19]" />

                      <div>
                        <p className="font-bold text-sm">Domestic</p>
                        <p className="text-xs text-[#7a6452] mt-1">
                          Local Country
                        </p>
                      </div>

                      {destination === "domestic" && (
                        <Check size={16} className="ml-auto text-[#8c2d19]" />
                      )}
                    </button>

                    <button
                      type="button"
                      onClick={() => {
                        setDestination("international");
                        setHasChecked(false);
                      }}
                      className={`p-4 border flex items-center gap-3 text-left ${
                        destination === "international"
                          ? "border-[#8c2d19] bg-[#f5ece2]"
                          : "border-[#d6c7b2] bg-white"
                      }`}
                    >
                      <Globe2 size={20} className="text-[#8c2d19]" />

                      <div>
                        <p className="font-bold text-sm">International</p>
                        <p className="text-xs text-[#7a6452] mt-1">
                          Global Delivery
                        </p>
                      </div>

                      {destination === "international" && (
                        <Check size={16} className="ml-auto text-[#8c2d19]" />
                      )}
                    </button>
                  </div>
                </div>

                {/* PROGRESS INDICATOR */}
                <div className="bg-[#f4eee2] p-5 sm:p-6 mb-7">
                  <div className="flex items-center justify-between gap-3 mb-4">
                    <span className="text-sm font-bold">
                      Demo Free Shipping Target
                    </span>

                    <span className="text-sm font-bold text-[#8c2d19]">
                      $150.00
                    </span>
                  </div>

                  <div
                    role="progressbar"
                    aria-label="Progress to demo free shipping target"
                    aria-valuenow={Math.round(progress)}
                    aria-valuemin={0}
                    aria-valuemax={100}
                    className="h-2.5 bg-[#d7c7b3] overflow-hidden"
                  >
                    <div
                      className="h-full bg-[#8c2d19]"
                      style={{ width: `${progress}%` }}
                    />
                  </div>

                  <p className="text-xs text-[#7a6452] mt-4 leading-6">
                    {validAmount
                      ? remaining > 0
                        ? `Add $${remaining.toFixed(2)} to reach the illustrative threshold.`
                        : "The illustrative order-value threshold has been reached."
                      : "Enter your subtotal to calculate progress toward the demo threshold."}
                  </p>
                </div>

                <button
                  type="submit"
                  className="w-full bg-[#8c2d19] text-white py-4 px-6 flex items-center justify-center gap-3 font-semibold text-sm hover:bg-[#692114]"
                >
                  Check My Eligibility
                  <ArrowRight size={17} />
                </button>

                {hasChecked && validAmount && (
                  <div
                    role="status"
                    className={`mt-6 p-5 border ${
                      eligible
                        ? "bg-[#f0f4e9] border-[#afc69c]"
                        : "bg-[#f7f0e5] border-[#d7c4a7]"
                    }`}
                  >
                    <div className="flex items-start gap-3">
                      {eligible ? (
                        <CheckCircle2
                          size={23}
                          className="text-[#4d6b3c] shrink-0"
                        />
                      ) : (
                        <HelpCircle
                          size={23}
                          className="text-[#8c2d19] shrink-0"
                        />
                      )}

                      <div>
                        <h4 className="font-bold text-base">
                          {eligible
                            ? "Qualifies in This Demo!"
                            : destination === "international"
                            ? "Destination Requires Confirmation"
                            : "Almost There!"}
                        </h4>

                        <p className="text-sm text-[#6b584a] mt-2 leading-6">
                          {eligible
                            ? "Your example order meets the illustrative domestic free-shipping threshold. This does not confirm eligibility for a real purchase."
                            : destination === "international"
                            ? "International eligibility and shipping costs depend on the actual destination and store policy."
                            : `Your example order is $${remaining.toFixed(2)} below the illustrative threshold.`}
                        </p>
                      </div>
                    </div>
                  </div>
                )}

                {hasChecked && !validAmount && (
                  <p role="alert" className="text-sm text-red-700 mt-4">
                    Please enter a valid, non-negative order subtotal.
                  </p>
                )}

                <p className="text-xs text-[#7a6452] leading-6 mt-5">
                  Note: $150 is a sample threshold for this
                  frontend demonstration. Actual eligibility,
                  shipping fees, insurance, and exclusions
                  must be confirmed using your store's policy.
                </p>

              </form>
            </div>
          </div>

        </div>
      </section>

      {/* ======================================
           SECTION 3 - DELIVERY VALUES
      ====================================== */}

      <section className="bg-[#f4eee2] border-y border-[#dfd4c3] py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-5 sm:px-8">

          <SectionHeading
            eyebrow="The Delivery Experience"
            title="Care in Every Detail"
            description="From selecting appropriate packaging to preparing a shipment, each stage of the delivery experience matters when transporting books and collectibles."
            center
          />

          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-5">

            <article className="bg-[#fffdfa] border border-[#ded2c2] p-8">
              <div className="w-14 h-14 bg-[#f1e5d5] flex items-center justify-center mb-7">
                <PackageCheck size={28} className="text-[#8c2d19]" />
              </div>

              <span className="text-xs text-[#b69c79] font-sans tracking-widest">
                01 / PACKAGING
              </span>

              <h3 className="text-2xl font-bold mt-3 mb-4">
                Protective Preparation
              </h3>

              <p className="text-sm text-[#6b584a] leading-7">
                Books of different sizes, bindings, and
                conditions benefit from carefully selected
                protective materials and secure parcel preparation.
              </p>
            </article>

            <article className="bg-[#fffdfa] border border-[#ded2c2] p-8">
              <div className="w-14 h-14 bg-[#f1e5d5] flex items-center justify-center mb-7">
                <ShieldCheck size={28} className="text-[#8c2d19]" />
              </div>

              <span className="text-xs text-[#b69c79] font-sans tracking-widest">
                02 / PROTECTION
              </span>

              <h3 className="text-2xl font-bold mt-3 mb-4">
                Valuable Book Care
              </h3>

              <p className="text-sm text-[#6b584a] leading-7">
                High-value and collectible editions may
                require additional protection, suitable
                shipping arrangements, and insurance
                appropriate to the order.
              </p>
            </article>

            <article className="bg-[#fffdfa] border border-[#ded2c2] p-8">
              <div className="w-14 h-14 bg-[#f1e5d5] flex items-center justify-center mb-7">
                <Truck size={28} className="text-[#8c2d19]" />
              </div>

              <span className="text-xs text-[#b69c79] font-sans tracking-widest">
                03 / DELIVERY
              </span>

              <h3 className="text-2xl font-bold mt-3 mb-4">
                Thoughtful Fulfillment
              </h3>

              <p className="text-sm text-[#6b584a] leading-7">
                Transparent delivery arrangements,
                appropriate carrier selection, and clear
                shipping information support a better
                customer experience.
              </p>
            </article>

          </div>
        </div>
      </section>

      {/* ======================================
           SECTION 4 - SHIPPING JOURNEY
      ====================================== */}

      <section className="max-w-7xl mx-auto px-5 sm:px-8 py-16 md:py-24">

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">

          <div className="lg:col-span-4">
            <SectionHeading
              eyebrow="From Shelf to Doorstep"
              title="A Book's Journey to You"
              description="The delivery process can be understood in four straightforward stages, from order receipt to arrival."
            />

            <div className="mt-8 bg-[#382b22] text-[#f4eadb] p-7">
              <Clock3 size={27} className="text-[#c29b38] mb-5" />

              <h3 className="text-xl font-bold">
                Delivery Timing
              </h3>

              <p className="text-sm leading-7 text-[#d4c4b1] mt-3">
                Preparation and transit times vary
                according to destination, book requirements,
                carrier service, and order conditions.
              </p>
            </div>
          </div>

          <div className="lg:col-span-8">
            <div className="space-y-0">

              {shippingSteps.map((step, index) => {
                const StepIcon = step.icon;

                return (
                  <div
                    key={step.number}
                    className={`grid grid-cols-[58px_1fr] sm:grid-cols-[88px_1fr] gap-4 sm:gap-6 py-7 ${
                      index !== shippingSteps.length - 1
                        ? "border-b border-[#ded2c2]"
                        : ""
                    }`}
                  >
                    <div className="w-14 h-14 sm:w-20 sm:h-20 bg-[#eee4d6] flex items-center justify-center">
                      <StepIcon
                        size={26}
                        className="text-[#8c2d19]"
                      />
                    </div>

                    <div>
                      <span className="font-sans text-xs tracking-[0.18em] font-bold text-[#8c2d19]">
                        STEP {step.number}
                      </span>

                      <h3 className="text-2xl font-bold mt-2">
                        {step.title}
                      </h3>

                      <p className="text-[#6b584a] text-sm leading-7 mt-3 max-w-xl">
                        {step.description}
                      </p>
                    </div>
                  </div>
                );
              })}

            </div>
          </div>

        </div>
      </section>

      {/* ======================================
           SECTION 5 - SHIPPING DESTINATIONS
      ====================================== */}

      <section className="bg-[#241a15] text-[#f5ecdc] py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-5 sm:px-8">

          <div className="text-center max-w-3xl mx-auto mb-12">
            <p className="text-[#c29b38] font-sans text-xs uppercase tracking-[0.22em] mb-5">
              Destinations & Delivery
            </p>

            <h2 className="text-3xl md:text-5xl font-bold">
              Books Without Boundaries
            </h2>

            <p className="text-[#cbbca9] leading-8 mt-5">
              Whether a book is traveling locally or
              across borders, the right delivery
              arrangements help preserve the collecting experience.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

            <div className="bg-[#342820] border border-[#6d5741] p-8 sm:p-10">
              <div className="w-14 h-14 border border-[#a58a60] flex items-center justify-center mb-7">
                <MapPin size={27} className="text-[#c29b38]" />
              </div>

              <p className="text-[#c29b38] font-sans uppercase tracking-[0.18em] text-xs mb-4">
                Within Your Country
              </p>

              <h3 className="text-3xl font-bold mb-5">
                Domestic Delivery
              </h3>

              <p className="text-[#d0c1ae] leading-8 text-sm">
                Domestic shipping may offer convenient
                tracked services and qualifying delivery
                promotions, depending on the selected
                carrier and order conditions.
              </p>

              <div className="border-t border-[#65503d] mt-7 pt-6 space-y-4">
                <div className="flex items-center gap-3 text-sm text-[#f0e5d5]">
                  <Check size={17} className="text-[#c29b38]" />
                  Destination-based eligibility
                </div>

                <div className="flex items-center gap-3 text-sm text-[#f0e5d5]">
                  <Check size={17} className="text-[#c29b38]" />
                  Suitable book packaging
                </div>

                <div className="flex items-center gap-3 text-sm text-[#f0e5d5]">
                  <Check size={17} className="text-[#c29b38]" />
                  Carrier-dependent tracking
                </div>
              </div>
            </div>

            <div className="bg-[#342820] border border-[#6d5741] p-8 sm:p-10">
              <div className="w-14 h-14 border border-[#a58a60] flex items-center justify-center mb-7">
                <Globe2 size={27} className="text-[#c29b38]" />
              </div>

              <p className="text-[#c29b38] font-sans uppercase tracking-[0.18em] text-xs mb-4">
                Across International Borders
              </p>

              <h3 className="text-3xl font-bold mb-5">
                International Delivery
              </h3>

              <p className="text-[#d0c1ae] leading-8 text-sm">
                International orders can require additional
                planning based on destination rules,
                shipping restrictions, customs procedures,
                and the value of the book.
              </p>

              <div className="border-t border-[#65503d] mt-7 pt-6 space-y-4">
                <div className="flex items-center gap-3 text-sm text-[#f0e5d5]">
                  <Check size={17} className="text-[#c29b38]" />
                  Country-specific shipping options
                </div>

                <div className="flex items-center gap-3 text-sm text-[#f0e5d5]">
                  <Check size={17} className="text-[#c29b38]" />
                  Customs and import considerations
                </div>

                <div className="flex items-center gap-3 text-sm text-[#f0e5d5]">
                  <Check size={17} className="text-[#c29b38]" />
                  Additional handling when required
                </div>
              </div>
            </div>

          </div>

          <p className="text-center text-xs text-[#b9aa99] mt-8 leading-6">
            Available destinations, prices, complimentary
            shipping rules, and insurance terms are subject
            to your actual store and carrier arrangements.
          </p>

        </div>
      </section>

      {/* ======================================
           SECTION 6 - PACKAGING EXPERIENCE
      ====================================== */}

      <section className="max-w-7xl mx-auto px-5 sm:px-8 py-16 md:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* EDITORIAL VISUAL */}
          <div className="bg-[#e8dece] p-7 sm:p-11 border border-[#d5c5b1]">

            <div className="bg-[#f7f1e7] border border-[#b9a78f] p-6 sm:p-9 text-center">

              <p className="text-xs font-sans uppercase tracking-[0.2em] text-[#8c2d19] mb-8">
                Preservation in Transit
              </p>

              <div className="grid grid-cols-2 gap-4">
                <div className="bg-[#e0d1bb] p-6 min-h-[180px] flex flex-col items-center justify-center">
                  <Box size={48} strokeWidth={1.2} className="text-[#8c2d19]" />

                  <span className="mt-6 text-xs font-bold uppercase tracking-wide">
                    Parcel Protection
                  </span>
                </div>

                <div className="bg-[#382b22] p-6 min-h-[180px] flex flex-col items-center justify-center">
                  <BookOpen
                    size={48}
                    strokeWidth={1.2}
                    className="text-[#c29b38]"
                  />

                  <span className="mt-6 text-xs font-bold uppercase tracking-wide text-[#eee1cf]">
                    Book Preservation
                  </span>
                </div>
              </div>

              <div className="border-t border-[#c9b69c] mt-8 pt-7">
                <p className="text-xl italic leading-8">
                  "Every treasured volume deserves
                  thoughtful handling."
                </p>

                <p className="text-[11px] uppercase tracking-[0.2em] font-sans text-[#8c2d19] mt-4">
                  Blue Book
                </p>
              </div>
            </div>

          </div>

          <div>
            <SectionHeading
              eyebrow="Beyond the Ordinary Parcel"
              title="A Better Way to Prepare Books for Travel"
              description="The right packing process considers more than the parcel dimensions. Bindings, corners, covers, and delicate materials all deserve attention."
            />

            <div className="mt-9 space-y-7">

              <div className="flex items-start gap-4">
                <span className="w-10 h-10 bg-[#f0e5d6] shrink-0 flex items-center justify-center text-[#8c2d19] font-bold">
                  01
                </span>

                <div>
                  <h3 className="font-bold text-lg mb-2">
                    Book-Specific Materials
                  </h3>
                  <p className="text-sm text-[#6b584a] leading-7">
                    Appropriate protective materials can
                    help reduce movement, friction, and
                    pressure during transit.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <span className="w-10 h-10 bg-[#f0e5d6] shrink-0 flex items-center justify-center text-[#8c2d19] font-bold">
                  02
                </span>

                <div>
                  <h3 className="font-bold text-lg mb-2">
                    Consideration for Fragile Editions
                  </h3>
                  <p className="text-sm text-[#6b584a] leading-7">
                    Older bindings, illustrated folios, and
                    delicate manuscripts may require
                    special packing arrangements.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <span className="w-10 h-10 bg-[#f0e5d6] shrink-0 flex items-center justify-center text-[#8c2d19] font-bold">
                  03
                </span>

                <div>
                  <h3 className="font-bold text-lg mb-2">
                    Clear Delivery Information
                  </h3>
                  <p className="text-sm text-[#6b584a] leading-7">
                    Accurate recipient details and
                    appropriate labels help support
                    efficient fulfillment.
                  </p>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* ======================================
           SECTION 7 - FAQ
      ====================================== */}

      <section className="bg-[#f4eee2] border-y border-[#d6c7b2] py-16 md:py-20">
        <div className="max-w-5xl mx-auto px-5 sm:px-8">

          <SectionHeading
            eyebrow="Frequently Asked Questions"
            title="Shipping Questions, Answered"
            description="Useful information about eligibility, destinations, packaging, tracking, and delivery expectations."
            center
          />

          <div className="mt-11 border-t border-[#cbbba8]">

            {faqs.map((faq, index) => {
              const isOpen = openFaq === index;

              return (
                <div
                  key={faq.question}
                  className="border-b border-[#cbbba8]"
                >
                  <button
                    type="button"
                    onClick={() =>
                      setOpenFaq(isOpen ? -1 : index)
                    }
                    aria-expanded={isOpen}
                    aria-controls={`shipping-answer-${index}`}
                    className="w-full py-6 flex items-start justify-between gap-5 text-left"
                  >
                    <span className="flex items-start gap-4">
                      <span className="text-[#8c2d19] text-xs font-sans font-bold mt-1">
                        {String(index + 1).padStart(2, "0")}
                      </span>

                      <span className="text-lg md:text-xl font-bold leading-snug">
                        {faq.question}
                      </span>
                    </span>

                    <span className="w-8 h-8 bg-[#e9dccb] shrink-0 flex items-center justify-center">
                      <ChevronDown
                        size={18}
                        className={`text-[#8c2d19] ${
                          isOpen ? "rotate-180" : ""
                        }`}
                      />
                    </span>
                  </button>

                  {isOpen && (
                    <div
                      id={`shipping-answer-${index}`}
                      className="pb-7 pl-8 sm:pl-10 pr-8"
                    >
                      <p className="text-sm md:text-base leading-8 text-[#6b584a]">
                        {faq.answer}
                      </p>
                    </div>
                  )}
                </div>
              );
            })}

          </div>
        </div>
      </section>

      {/* ======================================
           SECTION 8 - FINAL CTA
      ====================================== */}

      <section className="max-w-7xl mx-auto px-5 sm:px-8 py-16 md:py-24">

        <div className="border border-[#d6c7b2] bg-[#fffdfa] p-8 sm:p-12 lg:p-16">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-9 items-center">

            <div className="md:col-span-8">
              <div className="flex items-center gap-3 mb-6">
                <span className="w-9 h-px bg-[#8c2d19]" />
                <p className="text-xs font-sans tracking-[0.2em] uppercase text-[#8c2d19] font-bold">
                  Explore Your Next Discovery
                </p>
              </div>

              <h2 className="text-3xl md:text-4xl lg:text-5xl leading-tight font-bold">
                A Wonderful Book Is
                <br />
                Worth the Journey.
              </h2>

              <p className="mt-5 text-[#6b584a] leading-8 max-w-2xl">
                Discover distinguished editions, explore
                collectible books, and build a personal
                library of titles that continue to inspire.
              </p>

              <div className="flex flex-wrap gap-4 mt-9">
                <Link
                  to="/curated-markdowns"
                  className="bg-[#8c2d19] text-white px-7 py-4 text-sm font-semibold inline-flex items-center gap-3 hover:bg-[#692114]"
                >
                  Explore Curated Markdowns
                  <ArrowRight size={18} />
                </Link>

                <Link
                  to="/"
                  className="border border-[#b8a68f] px-7 py-4 text-sm font-semibold inline-flex items-center gap-3 hover:bg-[#f4eee2]"
                >
                  Browse Blue Book
                  <ArrowUpRight size={18} />
                </Link>
              </div>
            </div>

            <div className="md:col-span-4 flex justify-center">
              <div className="w-48 h-48 sm:w-56 sm:h-56 rounded-full border border-[#c4b197] flex items-center justify-center">
                <div className="w-[82%] h-[82%] rounded-full bg-[#f2e8da] flex flex-col items-center justify-center text-center">
                  <Truck
                    size={47}
                    strokeWidth={1.3}
                    className="text-[#8c2d19] mb-4"
                  />

                  <p className="text-[11px] uppercase font-sans font-bold tracking-[0.14em]">
                    Books Delivered
                  </p>

                  <p className="text-xs text-[#7a6452] mt-2">
                    With Consideration
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
}
