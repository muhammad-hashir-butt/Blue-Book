
import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  ArrowUpRight,
  BookOpen,
  CheckCircle2,
  ChevronDown,
  Eye,
  EyeOff,
  Globe2,
  Landmark,
  LockKeyhole,
  Mail,
  MapPin,
  PackageCheck,
  ShieldCheck,
  Store,
  Upload,
  UserRound,
  Users,
  X,
} from "lucide-react";

// =======================================
// IMAGE SETTINGS
// =======================================
// Replace these with PNG files in:
// public/images/sellbooks/

const images = {
  hero: "/images/sellbooks/sell-hero.png",
  community: "/images/sellbooks/bookseller-community.png",
  collection: "/images/sellbooks/book-collection.png",
};

const fallbacks = {
  hero:
    "https://images.unsplash.com/photo-1507842217343-583bb7270b66?auto=format&fit=crop&w=1800&q=85",
  community:
    "https://images.unsplash.com/photo-1521587760476-6c12a4b040da?auto=format&fit=crop&w=1200&q=85",
  collection:
    "https://images.unsplash.com/photo-1495446815901-a7297e633e8d?auto=format&fit=crop&w=1200&q=85",
};

const countries = [
  "United States",
  "United Kingdom",
  "Canada",
  "Australia",
  "Pakistan",
  "India",
  "Germany",
  "France",
  "Italy",
  "Spain",
  "Japan",
  "United Arab Emirates",
  "Other",
];

const specialties = [
  "Rare & Antiquarian Books",
  "Literature & Classics",
  "History & Manuscripts",
  "Fine Arts & Illustrated Books",
  "Academic & Scholarly Books",
  "Children's & Collectible Books",
  "General Bookselling",
];

const steps = [
  {
    number: "01",
    title: "Create Your Profile",
    description:
      "Introduce your business, contact details, location, and areas of bookselling expertise.",
  },
  {
    number: "02",
    title: "Prepare Your Inventory",
    description:
      "Organize book titles, authors, descriptions, prices, condition notes, and photographs.",
  },
  {
    number: "03",
    title: "Publish Your Listings",
    description:
      "Once a verified seller account and listing tools are available, prepare your books for the marketplace.",
  },
  {
    number: "04",
    title: "Connect With Readers",
    description:
      "Present your collection to interested readers and collectors through a dedicated bookseller presence.",
  },
];

const faqs = [
  {
    question: "Who can become a BLUE BOOK bookseller?",
    answer:
      "The proposed registration is designed for independent bookstores, specialist book dealers, antiquarian sellers, and businesses offering new, used, or collectible books. Actual eligibility requirements must be defined in your seller policy.",
  },
  {
    question: "Does seller registration require a fee?",
    answer:
      "The registration and commission structure has not yet been configured. Any listing charges, membership fees, or commissions should be clearly communicated before a seller agrees to join.",
  },
  {
    question: "Can I sell rare and antiquarian books?",
    answer:
      "The marketplace concept includes rare and antiquarian books. Product listings should contain accurate descriptions, condition notes, provenance information where applicable, and photographs.",
  },
  {
    question: "How do I upload my book inventory?",
    answer:
      "Inventory management and bulk uploads will require a seller dashboard or backend integration. The registration form on this page is currently a frontend demonstration.",
  },
  {
    question: "How are seller payments handled?",
    answer:
      "Payment processing, order management, refunds, commissions, and seller payouts will depend on the ecommerce system and seller agreement implemented for BLUE BOOK.",
  },
];

const initialForm = {
  businessName: "",
  contactName: "",
  email: "",
  phone: "",
  country: "",
  state: "",
  city: "",
  zip: "",
  address: "",
  currency: "USD",
  specialty: "",
  commissionPlan: "standard",
  referralCode: "",
  password: "",
  confirmPassword: "",
  publicProfile: true,
  brickAndMortar: false,
  hideAddress: false,
  agreement: false,
};

function Photo({ src, fallback, alt, className = "" }) {
  const [currentSrc, setCurrentSrc] = useState(src);

  return (
    <img
      src={currentSrc}
      alt={alt}
      loading="lazy"
      onError={() => {
        if (currentSrc !== fallback) setCurrentSrc(fallback);
      }}
      className={`w-full h-full object-cover ${className}`}
    />
  );
}

function SectionTitle({ eyebrow, title, description }) {
  return (
    <div className="max-w-3xl">
      <p className="text-xs uppercase tracking-[0.2em] font-sans font-bold text-[#8c2d19] mb-4">
        {eyebrow}
      </p>

      <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
        {title}
      </h2>

      {description && (
        <p className="mt-5 text-[#6b584a] leading-8">
          {description}
        </p>
      )}
    </div>
  );
}

const inputClass =
  "w-full bg-white border border-[#d6c7b2] px-4 py-3.5 text-sm text-[#241a15] outline-none focus:border-[#8c2d19] rounded-sm";

const labelClass =
  "block text-sm font-bold text-[#382b22] mb-2";

export default function SellBooks() {
  const [form, setForm] = useState(initialForm);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const [error, setError] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [openFaq, setOpenFaq] = useState(0);

  const update = (event) => {
    const { name, value, type, checked } = event.target;

    setForm((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));

    setError("");
    setSubmitted(false);
  };

  const scrollToForm = () => {
    document.getElementById("seller-registration")?.scrollIntoView();
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setError("");
    setSubmitted(false);

    const required = [
      "businessName",
      "contactName",
      "email",
      "phone",
      "country",
      "city",
      "zip",
      "address",
      "specialty",
      "password",
      "confirmPassword",
    ];

    if (required.some((key) => !String(form[key]).trim())) {
      setError("Please complete all required fields.");
      return;
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailPattern.test(form.email)) {
      setError("Please provide a valid email address.");
      return;
    }

    if (form.password.length < 8) {
      setError("Your password must contain at least 8 characters.");
      return;
    }

    if (form.password !== form.confirmPassword) {
      setError("Your passwords do not match.");
      return;
    }

    if (!form.agreement) {
      setError("Please accept the seller agreement checkbox.");
      return;
    }

    // FRONTEND DEMO ONLY:
    // No credentials or personal data are sent or saved.
    // Connect a secure backend and approved seller agreement
    // before accepting real registrations.

    setSubmitted(true);
  };

  return (
    <div className="bg-[#fbf8f2] text-[#241a15] min-h-screen">

      {/* ================================
          HERO SECTION
      ================================= */}

      <section className="relative min-h-[590px] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <Photo
            src={images.hero}
            fallback={fallbacks.hero}
            alt="Traditional library interior"
          />
        </div>

        <div className="absolute inset-0 bg-gradient-to-r from-[#1b130f]/95 via-[#241a15]/85 to-[#241a15]/45" />

        <div className="relative z-10 max-w-7xl mx-auto w-full px-5 sm:px-8 py-20">
          <div className="max-w-3xl text-[#f8f0e4]">
            <div className="flex items-center gap-3 mb-7">
              <span className="w-10 h-px bg-[#c29b38]" />
              <span className="text-xs uppercase font-sans tracking-[0.2em] font-bold text-[#e0c18e]">
                BLUE BOOK BOOKSELLER PROGRAM
              </span>
            </div>

            <h1
              className="text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.08]"
              style={{ fontFamily: "Georgia, serif" }}
            >
              Your Books
              <br />
              Deserve a
              <span className="italic text-[#d9b577]"> Wider World.</span>
            </h1>

            <p className="text-lg text-[#e0d1bf] leading-9 mt-7 max-w-2xl">
              Introduce your bookstore, present your
              specialist collections, and explore the
              opportunity to connect with readers
              who value books as much as you do.
            </p>

            <div className="mt-9 flex flex-wrap gap-4">
              <button
                onClick={scrollToForm}
                className="bg-[#c29b38] text-[#241a15] px-7 py-4 text-sm font-bold flex items-center gap-3 hover:bg-[#e0b96e]"
              >
                Become a Bookseller
                <ArrowRight size={18} />
              </button>

              <Link
                to="/bookstores"
                className="border border-[#bfa477] text-[#f7eddd] px-7 py-4 text-sm font-semibold flex items-center gap-3"
              >
                Explore Bookstores
                <ArrowUpRight size={17} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ================================
          INTRODUCTION
      ================================= */}

      <section className="max-w-7xl mx-auto px-5 sm:px-8 py-16 md:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          <div className="lg:col-span-7">
            <SectionTitle
              eyebrow="For Independent Book Professionals"
              title="A Marketplace Built Around the Love of Books."
              description="From rare-book specialists to independent bookstores, BLUE BOOK's proposed seller experience is designed around thoughtful book discovery and the importance of independent bookselling."
            />

            <p className="text-[#6b584a] leading-8 mt-5">
              A well-presented bookseller profile can help
              customers understand your expertise, learn
              about your store, and explore the subjects
              that make your collection distinctive.
            </p>

            <p className="text-[#6b584a] leading-8 mt-4">
              Whether you focus on antiquarian volumes,
              fine bindings, academic publications, or
              general literature, your business deserves
              a professional space to tell its story.
            </p>
          </div>

          <div className="lg:col-span-5">
            <div className="relative h-[370px] bg-[#e8dece]">
              <Photo
                src={images.collection}
                fallback={fallbacks.collection}
                alt="Books and collectible editions"
              />

              <div className="absolute bottom-0 inset-x-0 bg-[#241a15]/95 p-6 text-[#f5eadb]">
                <p className="text-xs text-[#c29b38] uppercase tracking-[0.2em] font-sans mb-2">
                  The Bookseller's Craft
                </p>
                <h3 className="text-xl font-bold">
                  A Collection Worth Sharing
                </h3>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================================
          BENEFITS
      ================================= */}

      <section className="bg-[#f4eee2] border-y border-[#ded2c2] py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-5 sm:px-8">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <SectionTitle
              eyebrow="Why Join BLUE BOOK?"
              title="Designed for the Independent Bookseller."
              description="A considered seller experience brings together professional presentation, book discovery, and the traditions of independent bookselling."
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {[
              {
                icon: Store,
                title: "Professional Storefront",
                description:
                  "Present your bookstore with a dedicated business identity, specialist categories, location information, and a thoughtfully written introduction.",
              },
              {
                icon: BookOpen,
                title: "Showcase Your Inventory",
                description:
                  "Prepare detailed listings featuring book titles, authors, editions, condition notes, photographs, and pricing information.",
              },
              {
                icon: Globe2,
                title: "Reach Interested Collectors",
                description:
                  "Build a bookseller presence designed to help customers discover your collection through subjects, locations, and specialized interests.",
              },
            ].map((item) => {
              const Icon = item.icon;

              return (
                <article
                  key={item.title}
                  className="bg-[#fffdfa] border border-[#ded2c2] p-8"
                >
                  <div className="w-14 h-14 bg-[#f0e4d4] flex items-center justify-center mb-7">
                    <Icon size={26} className="text-[#8c2d19]" />
                  </div>

                  <h3 className="text-2xl font-bold mb-4">
                    {item.title}
                  </h3>

                  <p className="text-sm text-[#6b584a] leading-7">
                    {item.description}
                  </p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* ================================
          HOW IT WORKS
      ================================= */}

      <section className="max-w-7xl mx-auto px-5 sm:px-8 py-16 md:py-20">
        <SectionTitle
          eyebrow="Your Bookselling Journey"
          title="From Registration to Discovery"
          description="A simple overview of the steps involved in building a professional bookseller presence."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mt-12">
          {steps.map((step) => (
            <div
              key={step.number}
              className="border-t-2 border-[#8c2d19] bg-[#fffdfa] p-7"
            >
              <span className="text-4xl font-bold text-[#c29b38]">
                {step.number}
              </span>

              <h3 className="text-xl font-bold mt-6 mb-4">
                {step.title}
              </h3>

              <p className="text-sm text-[#6b584a] leading-7">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ================================
          REGISTRATION FORM
      ================================= */}

      <section
        id="seller-registration"
        className="bg-[#f4eee2] border-y border-[#ded2c2] py-16 md:py-24"
      >
        <div className="max-w-7xl mx-auto px-5 sm:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <p className="text-xs uppercase tracking-[0.2em] font-sans font-bold text-[#8c2d19] mb-5">
              Seller Registration
            </p>

            <h2 className="text-3xl md:text-5xl font-bold">
              Begin Your Bookselling Journey
            </h2>

            <p className="text-[#6b584a] leading-8 mt-5">
              Complete the registration form below to preview
              the proposed BLUE BOOK bookseller onboarding experience.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-7 items-start">

            {/* LEFT FORM */}
            <div className="lg:col-span-8 bg-[#fffdfa] border border-[#d6c7b2]">

              <div className="bg-[#241a15] px-7 sm:px-10 py-7 text-[#f5eadb]">
                <div className="flex gap-3 items-center">
                  <UserRound size={24} className="text-[#c29b38]" />
                  <div>
                    <h3 className="text-2xl font-bold">
                      Bookseller Application
                    </h3>
                    <p className="text-sm text-[#cbbca9] mt-1">
                      Tell us about yourself and your business.
                    </p>
                  </div>
                </div>
              </div>

              <form
                onSubmit={handleSubmit}
                className="p-6 sm:p-9"
                noValidate
              >
                {/* BUSINESS DETAILS */}

                <div className="mb-9">
                  <div className="flex items-center gap-3 mb-6 pb-4 border-b border-[#e0d5c7]">
                    <Store size={19} className="text-[#8c2d19]" />
                    <h4 className="text-xl font-bold">
                      Business Information
                    </h4>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className={labelClass}>
                        Business / Selling Name *
                      </label>
                      <input
                        name="businessName"
                        value={form.businessName}
                        onChange={update}
                        placeholder="Your bookstore name"
                        className={inputClass}
                        required
                      />
                    </div>

                    <div>
                      <label className={labelClass}>
                        Primary Specialty *
                      </label>
                      <select
                        name="specialty"
                        value={form.specialty}
                        onChange={update}
                        className={inputClass}
                        required
                      >
                        <option value="">Select your specialty</option>
                        {specialties.map((item) => (
                          <option key={item}>{item}</option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label className={labelClass}>
                        Contact Person *
                      </label>
                      <input
                        name="contactName"
                        value={form.contactName}
                        onChange={update}
                        placeholder="Full name"
                        className={inputClass}
                        required
                      />
                    </div>

                    <div>
                      <label className={labelClass}>
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={form.phone}
                        onChange={update}
                        placeholder="+1 555 000 0000"
                        className={inputClass}
                        required
                      />
                    </div>

                    <div>
                      <label className={labelClass}>
                        Email Address *
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={form.email}
                        onChange={update}
                        placeholder="you@bookstore.com"
                        className={inputClass}
                        required
                      />
                    </div>

                    <div>
                      <label className={labelClass}>
                        Preferred Currency
                      </label>
                      <select
                        name="currency"
                        value={form.currency}
                        onChange={update}
                        className={inputClass}
                      >
                        <option value="USD">USD - US Dollar</option>
                        <option value="GBP">GBP - British Pound</option>
                        <option value="EUR">EUR - Euro</option>
                        <option value="CAD">CAD - Canadian Dollar</option>
                        <option value="AUD">AUD - Australian Dollar</option>
                        <option value="PKR">PKR - Pakistani Rupee</option>
                      </select>
                    </div>
                  </div>
                </div>

                {/* ADDRESS */}

                <div className="mb-9">
                  <div className="flex items-center gap-3 mb-6 pb-4 border-b border-[#e0d5c7]">
                    <MapPin size={19} className="text-[#8c2d19]" />
                    <h4 className="text-xl font-bold">
                      Business Location
                    </h4>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div className="sm:col-span-2">
                      <label className={labelClass}>
                        Street Address *
                      </label>
                      <input
                        name="address"
                        value={form.address}
                        onChange={update}
                        placeholder="Street address and building information"
                        className={inputClass}
                        required
                      />
                    </div>

                    <div>
                      <label className={labelClass}>
                        Country *
                      </label>
                      <select
                        name="country"
                        value={form.country}
                        onChange={update}
                        className={inputClass}
                        required
                      >
                        <option value="">Select country</option>
                        {countries.map((item) => (
                          <option key={item}>{item}</option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label className={labelClass}>
                        State / Province
                      </label>
                      <input
                        name="state"
                        value={form.state}
                        onChange={update}
                        placeholder="State or province"
                        className={inputClass}
                      />
                    </div>

                    <div>
                      <label className={labelClass}>
                        City *
                      </label>
                      <input
                        name="city"
                        value={form.city}
                        onChange={update}
                        placeholder="City"
                        className={inputClass}
                        required
                      />
                    </div>

                    <div>
                      <label className={labelClass}>
                        ZIP / Postal Code *
                      </label>
                      <input
                        name="zip"
                        value={form.zip}
                        onChange={update}
                        placeholder="Postal code"
                        className={inputClass}
                        required
                      />
                    </div>
                  </div>
                </div>

                {/* SELLING OPTIONS */}

                <div className="mb-9">
                  <div className="flex items-center gap-3 mb-6 pb-4 border-b border-[#e0d5c7]">
                    <BookOpen size={19} className="text-[#8c2d19]" />
                    <h4 className="text-xl font-bold">
                      Selling Preferences
                    </h4>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-6">
                    <div>
                      <label className={labelClass}>
                        Commission Plan
                      </label>
                      <select
                        name="commissionPlan"
                        value={form.commissionPlan}
                        onChange={update}
                        className={inputClass}
                      >
                        <option value="standard">
                          Standard Plan — Details Pending
                        </option>
                      </select>
                      <p className="text-xs text-[#7a6452] mt-2">
                        Commission rates and terms will be confirmed
                        before live registration.
                      </p>
                    </div>

                    <div>
                      <label className={labelClass}>
                        Referral Code (Optional)
                      </label>
                      <input
                        name="referralCode"
                        value={form.referralCode}
                        onChange={update}
                        placeholder="Referral code"
                        className={inputClass}
                      />
                    </div>
                  </div>

                  <div className="bg-[#f5efe6] border border-[#e2d6c6] p-5 space-y-4">
                    <label className="flex items-start gap-3 text-sm cursor-pointer">
                      <input
                        type="checkbox"
                        name="publicProfile"
                        checked={form.publicProfile}
                        onChange={update}
                        className="accent-[#8c2d19] mt-1 w-4 h-4"
                      />
                      Display my business profile in the bookstore directory
                    </label>

                    <label className="flex items-start gap-3 text-sm cursor-pointer">
                      <input
                        type="checkbox"
                        name="brickAndMortar"
                        checked={form.brickAndMortar}
                        onChange={update}
                        className="accent-[#8c2d19] mt-1 w-4 h-4"
                      />
                      I operate a physical bookstore
                    </label>

                    <label className="flex items-start gap-3 text-sm cursor-pointer">
                      <input
                        type="checkbox"
                        name="hideAddress"
                        checked={form.hideAddress}
                        onChange={update}
                        className="accent-[#8c2d19] mt-1 w-4 h-4"
                      />
                      Hide my street address from public listings
                    </label>
                  </div>
                </div>

                {/* SECURITY */}

                <div className="mb-8">
                  <div className="flex items-center gap-3 mb-6 pb-4 border-b border-[#e0d5c7]">
                    <LockKeyhole size={19} className="text-[#8c2d19]" />
                    <h4 className="text-xl font-bold">
                      Account Security
                    </h4>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className={labelClass}>
                        Password *
                      </label>

                      <div className="relative">
                        <input
                          type={showPassword ? "text" : "password"}
                          name="password"
                          value={form.password}
                          onChange={update}
                          placeholder="Minimum 8 characters"
                          autoComplete="new-password"
                          className={`${inputClass} pr-12`}
                          required
                          minLength={8}
                        />

                        <button
                          type="button"
                          aria-label={showPassword ? "Hide password" : "Show password"}
                          onClick={() => setShowPassword(!showPassword)}
                          className="absolute right-3 top-1/2 -translate-y-1/2 text-[#7a6452]"
                        >
                          {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                        </button>
                      </div>
                    </div>

                    <div>
                      <label className={labelClass}>
                        Confirm Password *
                      </label>

                      <div className="relative">
                        <input
                          type={showConfirm ? "text" : "password"}
                          name="confirmPassword"
                          value={form.confirmPassword}
                          onChange={update}
                          placeholder="Re-enter your password"
                          autoComplete="new-password"
                          className={`${inputClass} pr-12`}
                          required
                        />

                        <button
                          type="button"
                          aria-label={showConfirm ? "Hide confirmation" : "Show confirmation"}
                          onClick={() => setShowConfirm(!showConfirm)}
                          className="absolute right-3 top-1/2 -translate-y-1/2 text-[#7a6452]"
                        >
                          {showConfirm ? <EyeOff size={18} /> : <Eye size={18} />}
                        </button>
                      </div>
                    </div>
                  </div>
                </div>

                {/* AGREEMENT */}

                <div className="border-t border-[#e0d5c7] pt-6">
                  <label className="flex items-start gap-3 cursor-pointer">
                    <input
                      type="checkbox"
                      name="agreement"
                      checked={form.agreement}
                      onChange={update}
                      className="accent-[#8c2d19] mt-1 w-4 h-4 shrink-0"
                      required
                    />

                    <span className="text-sm text-[#6b584a] leading-6">
                      I understand that this is a demonstration
                      registration form and that the official
                      bookseller agreement and onboarding process
                      must be made available before live registration.
                    </span>
                  </label>
                </div>

                {error && (
                  <div
                    role="alert"
                    className="mt-6 bg-red-50 text-red-800 border border-red-200 p-4 text-sm"
                  >
                    {error}
                  </div>
                )}

                {submitted && (
                  <div
                    role="status"
                    className="mt-6 bg-[#edf3e8] border border-[#b3c9a7] p-5"
                  >
                    <div className="flex items-start gap-3">
                      <CheckCircle2
                        size={23}
                        className="text-[#4f703e] shrink-0"
                      />
                      <div>
                        <h4 className="font-bold text-[#38542e]">
                          Form Validation Successful
                        </h4>
                        <p className="text-sm text-[#516448] mt-2 leading-6">
                          Your sample registration details passed
                          frontend validation. No account has been
                          created and no information has been submitted.
                        </p>
                      </div>
                    </div>
                  </div>
                )}

                <button
                  type="submit"
                  className="w-full sm:w-auto mt-8 bg-[#8c2d19] text-white px-9 py-4 flex items-center justify-center gap-3 text-sm font-bold hover:bg-[#672013]"
                >
                  Validate Registration
                  <ArrowRight size={18} />
                </button>

                <p className="text-xs text-[#7a6452] mt-4 leading-6">
                  Frontend preview only. Real registration
                  requires a secure authentication service,
                  backend validation, and seller onboarding.
                </p>
              </form>
            </div>

            {/* RIGHT INFO SIDEBAR */}
            <aside className="lg:col-span-4 space-y-6">
              <div className="bg-[#241a15] text-[#f5eadb] p-8">
                <Store
                  size={33}
                  className="text-[#c29b38] mb-6"
                />

                <h3 className="text-2xl font-bold mb-4">
                  Your Store. Your Story.
                </h3>

                <p className="text-sm text-[#d2c3b0] leading-7">
                  A strong bookseller profile helps readers
                  understand what makes your business unique.
                  Share your background, areas of expertise,
                  and the books you love working with.
                </p>

                <div className="border-t border-[#65503d] mt-7 pt-6 space-y-4">
                  {[
                    "Business identity and contact details",
                    "Specialist book categories",
                    "Store location and profile preferences",
                    "An introduction to your collection",
                  ].map((item) => (
                    <div
                      key={item}
                      className="flex gap-3 items-start text-sm text-[#e7d9c6]"
                    >
                      <CheckCircle2
                        size={17}
                        className="text-[#c29b38] shrink-0"
                      />
                      {item}
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-[#fffdfa] border border-[#d6c7b2] overflow-hidden">
                <div className="h-52">
                  <Photo
                    src={images.community}
                    fallback={fallbacks.community}
                    alt="Elegant library interior"
                  />
                </div>

                <div className="p-7">
                  <p className="text-xs font-sans tracking-[0.18em] uppercase text-[#8c2d19] font-bold mb-3">
                    Independent Bookselling
                  </p>
                  <h3 className="text-2xl font-bold">
                    A Community Built on Books
                  </h3>
                  <p className="text-sm text-[#6b584a] leading-7 mt-4">
                    Independent bookstores contribute to
                    literary culture through carefully
                    chosen collections, expertise, and
                    an enduring appreciation for print.
                  </p>
                </div>
              </div>

              <div className="bg-[#f0e5d7] border border-[#d6c7b2] p-7">
                <ShieldCheck
                  size={27}
                  className="text-[#8c2d19] mb-5"
                />
                <h3 className="text-xl font-bold">
                  Before You Apply
                </h3>
                <p className="text-sm text-[#6b584a] leading-7 mt-3">
                  Have your business information ready.
                  Official verification requirements,
                  commission terms, and account security
                  will be configured for live onboarding.
                </p>
              </div>
            </aside>

          </div>
        </div>
      </section>

      {/* ================================
          EDITORIAL SECTION
      ================================= */}

      <section className="max-w-7xl mx-auto px-5 sm:px-8 py-16 md:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="h-[380px] md:h-[460px] bg-[#e6dccd]">
            <Photo
              src={images.community}
              fallback={fallbacks.community}
              alt="Independent bookselling and library collections"
            />
          </div>

          <div>
            <SectionTitle
              eyebrow="The Bookseller Community"
              title="Independent Bookselling Has a Story Worth Telling."
              description="Behind every memorable bookstore is a passion for books, an understanding of readers, and a collection shaped by individual knowledge."
            />

            <p className="text-[#6b584a] leading-8 mt-5">
              A dedicated bookseller marketplace provides
              an opportunity to share that knowledge with
              collectors searching for particular authors,
              subjects, editions, and literary discoveries.
            </p>

            <Link
              to="/bookstores"
              className="inline-flex items-center gap-3 mt-8 bg-[#241a15] text-white px-7 py-4 text-sm font-semibold hover:bg-[#8c2d19]"
            >
              Explore the Bookstore Directory
              <ArrowRight size={17} />
            </Link>
          </div>
        </div>
      </section>

      {/* ================================
          FAQ
      ================================= */}

      <section className="bg-[#f4eee2] border-y border-[#ded2c2] py-16 md:py-20">
        <div className="max-w-4xl mx-auto px-5 sm:px-8">
          <div className="text-center">
            <p className="text-xs uppercase tracking-[0.2em] font-sans font-bold text-[#8c2d19] mb-5">
              Seller Information
            </p>
            <h2 className="text-3xl md:text-4xl font-bold">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="mt-10 border-t border-[#cdbba5]">
            {faqs.map((faq, index) => {
              const expanded = openFaq === index;

              return (
                <div
                  key={faq.question}
                  className="border-b border-[#cdbba5]"
                >
                  <button
                    type="button"
                    onClick={() =>
                      setOpenFaq(expanded ? -1 : index)
                    }
                    aria-expanded={expanded}
                    aria-controls={`seller-faq-${index}`}
                    className="w-full py-6 flex items-start justify-between gap-5 text-left"
                  >
                    <span className="font-bold text-lg md:text-xl">
                      {faq.question}
                    </span>
                    <ChevronDown
                      size={19}
                      className={`text-[#8c2d19] shrink-0 ${
                        expanded ? "rotate-180" : ""
                      }`}
                    />
                  </button>

                  {expanded && (
                    <p
                      id={`seller-faq-${index}`}
                      className="pb-7 text-sm md:text-base text-[#6b584a] leading-8"
                    >
                      {faq.answer}
                    </p>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ================================
          FINAL CTA
      ================================= */}

      <section className="max-w-7xl mx-auto px-5 sm:px-8 py-16 md:py-20 text-center">
        <BookOpen
          size={33}
          className="mx-auto text-[#8c2d19] mb-6"
        />

        <h2 className="text-3xl md:text-5xl font-bold">
          Let Your Collection Be Discovered.
        </h2>

        <p className="text-[#6b584a] leading-8 max-w-2xl mx-auto mt-5">
          Your knowledge, your books, and your bookstore's
          identity deserve a thoughtfully presented
          place in the literary world.
        </p>

        <button
          type="button"
          onClick={scrollToForm}
          className="mt-8 bg-[#8c2d19] text-white px-8 py-4 font-bold text-sm inline-flex items-center gap-3 hover:bg-[#672013]"
        >
          Go to Seller Registration
          <ArrowRight size={18} />
        </button>
      </section>
    </div>
  );
}
