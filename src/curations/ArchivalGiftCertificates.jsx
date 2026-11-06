
import React, { useState } from "react";
import {
  Gift,
  BookOpen,
  Mail,
  CalendarDays,
  ShieldCheck,
  ArrowRight,
  CheckCircle2,
  CreditCard,
  PenLine,
} from "lucide-react";

const amounts = [25, 50, 100, 150, 250, 500];

const initialForm = {
  firstName: "",
  lastName: "",
  email: "",
  confirmEmail: "",
  deliveryDate: "",
  message: "",
  senderName: "",
};

export default function ArchivalGiftCertificates() {
  const [amount, setAmount] = useState(100);
  const [customAmount, setCustomAmount] = useState("");
  const [useCustom, setUseCustom] = useState(false);
  const [form, setForm] = useState(initialForm);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  const today = new Date();
  const todayString = [
    today.getFullYear(),
    String(today.getMonth() + 1).padStart(2, "0"),
    String(today.getDate()).padStart(2, "0"),
  ].join("-");

  const selectedAmount = useCustom
    ? Number(customAmount)
    : amount;

  const updateForm = (event) => {
    const { name, value } = event.target;

    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));

    setError("");
    setSuccess(false);
  };

  const selectAmount = (value) => {
    setAmount(value);
    setUseCustom(false);
    setCustomAmount("");
    setError("");
    setSuccess(false);
  };

  const addToCart = (event) => {
    event.preventDefault();

    if (
      !Number.isFinite(selectedAmount) ||
      selectedAmount < 10 ||
      selectedAmount > 1000
    ) {
      setError("Please choose an amount between $10 and $1,000.");
      return;
    }

    if (
      !form.firstName.trim() ||
      !form.lastName.trim() ||
      !form.email.trim() ||
      !form.confirmEmail.trim() ||
      !form.deliveryDate
    ) {
      setError("Please complete all required recipient details.");
      return;
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailPattern.test(form.email.trim())) {
      setError("Please enter a valid email address.");
      return;
    }

    if (
      form.email.trim().toLowerCase() !==
      form.confirmEmail.trim().toLowerCase()
    ) {
      setError("Recipient email addresses do not match.");
      return;
    }

    if (form.deliveryDate < todayString) {
      setError("Please select a current or future delivery date.");
      return;
    }

    const cartItem = {
      id: crypto.randomUUID(),
      type: "archival-gift-certificate",
      title: "BLUE BOOK Archival Gift Certificate",
      amount: selectedAmount,
      quantity: 1,
      recipient: {
        firstName: form.firstName.trim(),
        lastName: form.lastName.trim(),
        email: form.email.trim(),
      },
      deliveryDate: form.deliveryDate,
      message: form.message.trim(),
      senderName: form.senderName.trim(),
    };

    // Frontend demo cart storage.
    // Replace with your existing cart context/API when available.
    try {
      const existing = JSON.parse(
        localStorage.getItem("bluebook-cart") || "[]"
      );

      const cart = Array.isArray(existing) ? existing : [];

      localStorage.setItem(
        "bluebook-cart",
        JSON.stringify([...cart, cartItem])
      );

      setError("");
      setSuccess(true);
    } catch {
      setError("Unable to save your gift certificate. Please try again.");
    }
  };

  const inputClass =
    "w-full border border-[#d6c7b2] bg-white px-4 py-3 text-sm text-[#241a15] outline-none focus:border-[#8c2d19] rounded-sm";

  const labelClass =
    "block text-sm font-semibold text-[#382b22] mb-2";

  return (
    <div className="min-h-screen bg-[#fbf8f2] text-[#241a15]">

      {/* PAGE TITLE */}
      <section className="border-b border-[#dfd4c3] bg-[#f4eee2]">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 py-12 md:py-16">

          <div className="flex items-center gap-2 text-xs uppercase tracking-[0.18em] text-[#8c2d19] font-sans font-semibold mb-5">
            <Gift size={15} />
            The Art of Giving
          </div>

          <h1
            className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight"
            style={{ fontFamily: "Georgia, serif" }}
          >
            Archival Gift
            <br />
            <span className="text-[#8c2d19]">
              Certificates
            </span>
          </h1>

          <p className="mt-5 text-base md:text-lg text-[#6b584a] leading-relaxed max-w-2xl">
            A thoughtful gift for collectors, scholars, and
            lovers of literature. Let someone special
            discover their next treasured volume.
          </p>

          <div className="mt-7 flex flex-wrap gap-5 text-xs sm:text-sm text-[#6b584a]">
            <span className="flex items-center gap-2">
              <CheckCircle2 size={16} className="text-[#8c2d19]" />
              Personalized Gifting
            </span>

            <span className="flex items-center gap-2">
              <CheckCircle2 size={16} className="text-[#8c2d19]" />
              Email Delivery
            </span>

            <span className="flex items-center gap-2">
              <CheckCircle2 size={16} className="text-[#8c2d19]" />
              Flexible Gift Values
            </span>
          </div>

        </div>
      </section>

      {/* MAIN CONTENT */}
      <section className="max-w-7xl mx-auto px-5 sm:px-8 py-12 md:py-16">

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-9 lg:gap-12 items-start">

          {/* LEFT COLUMN */}
          <div className="lg:col-span-8 space-y-11">

            {/* CERTIFICATE INTRO */}
            <div>
              <div className="flex items-center gap-3 mb-5">
                <span className="w-9 h-9 border border-[#d6c7b2] flex items-center justify-center">
                  <BookOpen size={18} className="text-[#8c2d19]" />
                </span>

                <h2 className="text-2xl md:text-3xl font-bold">
                  A Gift Beyond the Ordinary
                </h2>
              </div>

              <p className="text-[#6b584a] leading-7 max-w-2xl">
                Whether celebrating a milestone or simply
                sharing a passion for the written word,
                a BLUE BOOK gift certificate is an invitation
                to explore distinguished books, rare editions,
                and timeless literary discoveries.
              </p>
            </div>

            {/* AMOUNT SECTION */}
            <div className="border-t border-[#d6c7b2] pt-8">

              <div className="flex items-start gap-4 mb-7">
                <div className="w-10 h-10 bg-[#f0e4d2] flex items-center justify-center shrink-0">
                  <CreditCard size={19} className="text-[#8c2d19]" />
                </div>

                <div>
                  <h2 className="text-2xl font-bold">
                    Choose Your Gift Value
                  </h2>

                  <p className="text-sm text-[#7a6452] mt-1">
                    Select a certificate value or enter your own amount.
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {amounts.map((value) => (
                  <button
                    key={value}
                    type="button"
                    onClick={() => selectAmount(value)}
                    className={`py-4 px-4 border text-lg font-bold rounded-sm ${
                      !useCustom && amount === value
                        ? "bg-[#382b22] border-[#382b22] text-[#e8dfcf]"
                        : "bg-white border-[#d6c7b2] text-[#382b22] hover:border-[#8c2d19]"
                    }`}
                  >
                    ${value}
                  </button>
                ))}
              </div>

              <div className="mt-5">
                <label className="flex items-center gap-3 cursor-pointer text-sm font-semibold">
                  <input
                    type="checkbox"
                    checked={useCustom}
                    onChange={(event) => {
                      setUseCustom(event.target.checked);
                      setError("");
                      setSuccess(false);
                    }}
                    className="accent-[#8c2d19] w-4 h-4"
                  />
                  Enter a Custom Amount
                </label>

                {useCustom && (
                  <div className="mt-3 max-w-sm flex items-center border border-[#d6c7b2] bg-white">
                    <span className="px-4 py-3 text-[#8c2d19] border-r border-[#d6c7b2]">
                      $
                    </span>

                    <input
                      type="number"
                      min="10"
                      max="1000"
                      step="1"
                      value={customAmount}
                      onChange={(event) => {
                        setCustomAmount(event.target.value);
                        setError("");
                        setSuccess(false);
                      }}
                      placeholder="Enter amount (10–1000)"
                      className="w-full px-4 py-3 outline-none bg-transparent text-sm"
                    />
                  </div>
                )}
              </div>

            </div>

            {/* RECIPIENT FORM */}
            <div className="border-t border-[#d6c7b2] pt-8">

              <div className="flex items-start gap-4 mb-7">
                <div className="w-10 h-10 bg-[#f0e4d2] flex items-center justify-center shrink-0">
                  <Mail size={19} className="text-[#8c2d19]" />
                </div>

                <div>
                  <h2 className="text-2xl font-bold">
                    Recipient Information
                  </h2>

                  <p className="text-sm text-[#7a6452] mt-1">
                    Who will be receiving this literary gift?
                  </p>
                </div>
              </div>

              <form id="gift-form" onSubmit={addToCart} noValidate>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-5">
                  <div>
                    <label className={labelClass}>
                      First Name <span className="text-[#8c2d19]">*</span>
                    </label>

                    <input
                      name="firstName"
                      value={form.firstName}
                      onChange={updateForm}
                      className={inputClass}
                      placeholder="Recipient's first name"
                      required
                    />
                  </div>

                  <div>
                    <label className={labelClass}>
                      Last Name <span className="text-[#8c2d19]">*</span>
                    </label>

                    <input
                      name="lastName"
                      value={form.lastName}
                      onChange={updateForm}
                      className={inputClass}
                      placeholder="Recipient's last name"
                      required
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-5">
                  <div>
                    <label className={labelClass}>
                      Recipient Email <span className="text-[#8c2d19]">*</span>
                    </label>

                    <input
                      type="email"
                      name="email"
                      value={form.email}
                      onChange={updateForm}
                      className={inputClass}
                      placeholder="recipient@example.com"
                      required
                    />
                  </div>

                  <div>
                    <label className={labelClass}>
                      Confirm Email <span className="text-[#8c2d19]">*</span>
                    </label>

                    <input
                      type="email"
                      name="confirmEmail"
                      value={form.confirmEmail}
                      onChange={updateForm}
                      className={inputClass}
                      placeholder="Re-enter email address"
                      required
                    />
                  </div>
                </div>

                <div className="mb-5">
                  <label className={labelClass}>
                    <span className="flex items-center gap-2">
                      <CalendarDays size={15} />
                      Preferred Delivery Date
                      <span className="text-[#8c2d19]">*</span>
                    </span>
                  </label>

                  <input
                    type="date"
                    name="deliveryDate"
                    min={todayString}
                    value={form.deliveryDate}
                    onChange={updateForm}
                    className={inputClass}
                    required
                  />

                  <p className="text-xs text-[#7a6452] mt-2">
                    Delivery scheduling will be finalized during checkout.
                  </p>
                </div>

                <div className="mb-5">
                  <label className={labelClass}>
                    Your Name (Optional)
                  </label>

                  <input
                    name="senderName"
                    value={form.senderName}
                    onChange={updateForm}
                    className={inputClass}
                    placeholder="Your name as the gift sender"
                  />
                </div>

                <div>
                  <label className={labelClass}>
                    <span className="flex items-center gap-2">
                      <PenLine size={15} />
                      Personal Message (Optional)
                    </span>
                  </label>

                  <textarea
                    name="message"
                    value={form.message}
                    onChange={updateForm}
                    rows={5}
                    maxLength={500}
                    placeholder="Write a thoughtful message to accompany your gift..."
                    className={`${inputClass} resize-y`}
                  />

                  <div className="text-right text-xs text-[#7a6452] mt-1">
                    {form.message.length}/500 characters
                  </div>
                </div>

                {error && (
                  <div role="alert" className="mt-5 p-4 text-sm border border-red-300 bg-red-50 text-red-800">
                    {error}
                  </div>
                )}

                {success && (
                  <div role="status" className="mt-5 p-4 text-sm border border-[#b6c9ad] bg-[#edf3e8] text-[#36502d] flex items-start gap-2">
                    <CheckCircle2 size={18} className="shrink-0" />
                    Gift certificate added to the demo cart.
                    Checkout and delivery are not yet connected.
                  </div>
                )}

              </form>

            </div>

          </div>

          {/* RIGHT COLUMN */}
          <aside className="lg:col-span-4">

            <div className="border border-[#d6c7b2] bg-[#fdfbf7] p-5 sm:p-7">

              {/* DECORATIVE CERTIFICATE PREVIEW */}
              <div className="bg-[#241a15] p-3 border border-[#c29b38]">
                <div className="border border-[#c29b38] px-5 py-8 text-center">

                  <Gift
                    size={30}
                    strokeWidth={1.3}
                    className="text-[#c29b38] mx-auto mb-5"
                  />

                  <div className="text-[10px] tracking-[0.3em] text-[#c29b38] font-sans">
                    BLUE BOOK
                  </div>

                  <div className="h-px w-16 bg-[#c29b38] mx-auto my-4" />

                  <h3
                    className="text-2xl text-[#f0e7d7] leading-snug"
                    style={{ fontFamily: "Georgia, serif" }}
                  >
                    A Gift of
                    <br />
                    Literary Discovery
                  </h3>

                  <p className="text-[#c29b38] text-3xl font-semibold mt-6">
                    ${Number.isFinite(selectedAmount) && selectedAmount > 0
                      ? selectedAmount.toLocaleString()
                      : "—"}
                  </p>

                  <p className="text-[9px] uppercase tracking-[0.2em] text-[#bcae99] mt-5">
                    Rare Books & Manuscripts
                  </p>
                </div>
              </div>

              <p className="text-center text-xs text-[#7a6452] mt-3 italic">
                Illustrative certificate preview
              </p>

              {/* ORDER SUMMARY */}
              <div className="mt-8">

                <h3 className="text-xl font-bold pb-4 border-b border-[#d6c7b2]">
                  Your Gift Summary
                </h3>

                <div className="space-y-4 py-5 text-sm">

                  <div className="flex justify-between gap-3">
                    <span className="text-[#6b584a]">
                      Gift Certificate
                    </span>

                    <span className="font-semibold text-right">
                      Archival Edition
                    </span>
                  </div>

                  <div className="flex justify-between gap-3">
                    <span className="text-[#6b584a]">
                      Delivery Method
                    </span>

                    <span className="font-semibold">
                      Email
                    </span>
                  </div>

                  <div className="flex justify-between gap-3">
                    <span className="text-[#6b584a]">
                      Quantity
                    </span>

                    <span className="font-semibold">
                      1
                    </span>
                  </div>

                </div>

                <div className="border-t border-[#d6c7b2] pt-5 flex items-center justify-between">
                  <span className="font-bold text-lg">
                    Subtotal
                  </span>

                  <span className="font-bold text-2xl text-[#8c2d19]">
                    ${Number.isFinite(selectedAmount) && selectedAmount > 0
                      ? selectedAmount.toFixed(2)
                      : "0.00"}
                  </span>
                </div>

                <button
                  type="submit"
                  form="gift-form"
                  className="w-full mt-6 flex items-center justify-center gap-3 bg-[#8c2d19] text-white py-4 px-4 font-semibold text-sm hover:bg-[#692013]"
                >
                  Add Gift to Cart
                  <ArrowRight size={17} />
                </button>

                <p className="text-[11px] text-[#7a6452] mt-3 text-center leading-relaxed">
                  Demo cart only. No payment is processed
                  and no certificate email is sent.
                </p>

              </div>

              {/* TRUST DETAILS */}
              <div className="mt-7 pt-6 border-t border-[#d6c7b2]">

                <div className="flex items-start gap-3">
                  <ShieldCheck
                    size={21}
                    className="text-[#8c2d19] shrink-0"
                  />

                  <div>
                    <h4 className="font-bold text-sm mb-1">
                      Thoughtfully Presented
                    </h4>

                    <p className="text-xs text-[#6b584a] leading-5">
                      Personalize your gift with a message
                      and select a preferred delivery date.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3 mt-5">
                  <Mail
                    size={21}
                    className="text-[#8c2d19] shrink-0"
                  />

                  <div>
                    <h4 className="font-bold text-sm mb-1">
                      Digital Convenience
                    </h4>

                    <p className="text-xs text-[#6b584a] leading-5">
                      Designed for email delivery once
                      your ordering system is connected.
                    </p>
                  </div>
                </div>

              </div>

            </div>

          </aside>
        </div>

      </section>

      {/* BOTTOM SECTION */}
      <section className="border-t border-[#dfd4c3] bg-[#f4eee2] py-12">
        <div className="max-w-4xl mx-auto px-5 text-center">

          <Gift size={27} className="text-[#8c2d19] mx-auto mb-4" />

          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            For Every Reader, A New Discovery
          </h2>

          <p className="text-sm md:text-base text-[#6b584a] leading-7">
            From literary classics to remarkable historical
            editions, celebrate someone's love of books with
            a gift chosen especially for the occasion.
          </p>

        </div>
      </section>

    </div>
  );
}
