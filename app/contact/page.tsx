"use client";

import React, { useState } from "react";
import {
  MapPin,
  Mail,
  Phone,
  Clock,
  Globe,
  Send,
  CheckCircle2,
  X,
  ShieldCheck,
} from "lucide-react";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { companyInfo } from "@/lib/data";

export default function ContactPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>("");
  const [selectedSubCategory, setSelectedSubCategory] = useState<string>("");
  const [showCaptcha, setShowCaptcha] = useState<boolean>(false);
  const [isVerified, setIsVerified] = useState<boolean>(false);
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);

  // Sub-category mapping based on main selection
  const subCategoriesMap: Record<string, string[]> = {
    "Audio Visual Manufacturing": [
      "Smart Digital Podium",
      "Digital Touch table",
      "Digital Standee",
      "Digital Touch Table",
    ],
    "Internship and Training": [
      "Rust Development",
      "App & Web Development",
      "iOS and Android App Development",
      "Live projects",
    ],
    "Application and Web development": [
      "Custom Web Applications",
      "Mobile App Development",
      "Enterprise Solutions",
      "UI/UX Design & Development",
    ],
  };

  const handleCategoryChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedCategory(e.target.value);
    setSelectedSubCategory("");
  };

  const handleSubmitTrigger = (e: React.FormEvent) => {
    e.preventDefault();
    setShowCaptcha(true);
  };

  const handleCaptchaVerify = () => {
    setIsVerified(true);
    setTimeout(() => {
      setShowCaptcha(false);
      setIsSubmitted(true);
    }, 800);
  };

  return (
    <div className="relative w-full min-h-screen bg-[url('/images/bgContact.png')] bg-cover bg-center text-slate-800 font-sans overflow-hidden flex flex-col justify-between">
      {/* Top Navbar */}
      <header className="sticky top-0 z-50 w-full bg-white border-b border-slate-200/60 shadow-sm flex-shrink-0">
        <Navbar />
      </header>

      {/* Main Container */}
      <main className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 pb-6 flex-1 flex flex-col justify-center overflow-y-auto lg:overflow-hidden">
        <div className="space-y-5 mt-6 lg:mt-20">
          {/* Header Block */}
          <div className="space-y-0.5">
            <div className="flex items-center gap-2">
              <span className="text-[11px] font-bold uppercase tracking-widest text-[#D9232D]">
                CONTACT US
              </span>
              <div className="w-6 h-[2px] bg-[#D9232D]" />
            </div>

            <h1 className="text-lg sm:text-xl lg:text-2xl font-extrabold text-slate-900 tracking-tight leading-snug">
              Let&apos;s Build Something{" "}
              <span className="text-[#D9232D]">Great Together</span>
            </h1>
          </div>

          {/* Two-Column Main Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 items-start">
            {/* Left Column: Form Container */}
            <div className="lg:col-span-7 bg-white p-4 sm:p-5 rounded-2xl border border-slate-200 shadow-lg text-slate-900 lg:mt-4">
              <div className="mb-3 space-y-0.5">
                <h2 className="text-sm font-bold text-slate-900">
                  Send Your Inquiry
                </h2>
                <p className="text-[10px] text-slate-500">
                  Tell us about your project and we&apos;ll get back to you
                  shortly.
                </p>
              </div>

              {isSubmitted ? (
                <div className="p-5 text-center space-y-2 bg-emerald-50/90 border border-emerald-200 rounded-xl">
                  <CheckCircle2 className="w-8 h-8 text-emerald-600 mx-auto" />
                  <h3 className="text-sm font-bold text-emerald-900">
                    Inquiry Sent Successfully!
                  </h3>
                  <p className="text-[11px] text-emerald-700">
                    Thank you for reaching out. Our team will contact you
                    shortly.
                  </p>
                  <button
                    onClick={() => {
                      setIsSubmitted(false);
                      setIsVerified(false);
                      setSelectedCategory("");
                      setSelectedSubCategory("");
                    }}
                    className="mt-1 text-[11px] font-bold text-emerald-800 underline hover:text-emerald-900 cursor-pointer"
                  >
                    Send Another Response
                  </button>
                </div>
              ) : (
                /* Inquiry Form */
                <form
                  onSubmit={handleSubmitTrigger}
                  className="space-y-2.5 text-slate-900"
                >
                  {/* Name & Phone Number */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    <div className="space-y-0.5">
                      <label className="text-[10px] font-bold text-slate-800">
                        Field Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="Enter your name"
                        className="w-full px-2.5 py-1.5 rounded-lg bg-white/80 border border-slate-300 text-xs text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-1 focus:ring-[#D9232D] focus:border-[#D9232D] transition-all"
                      />
                    </div>

                    <div className="space-y-0.5">
                      <label className="text-[10px] font-bold text-slate-800">
                        Phone Number <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="+91 00000 00000"
                        className="w-full px-2.5 py-1.5 rounded-lg bg-white/80 border border-slate-300 text-xs text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-1 focus:ring-[#D9232D] focus:border-[#D9232D] transition-all"
                      />
                    </div>
                  </div>

                  {/* Email & Company Name */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    <div className="space-y-0.5">
                      <label className="text-[10px] font-bold text-slate-800">
                        Email Id <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="example@domain.com"
                        className="w-full px-2.5 py-1.5 rounded-lg bg-white/80 border border-slate-300 text-xs text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-1 focus:ring-[#D9232D] focus:border-[#D9232D] transition-all"
                      />
                    </div>

                    <div className="space-y-0.5">
                      <label className="text-[10px] font-bold text-slate-800">
                        Company Name
                      </label>
                      <input
                        type="text"
                        placeholder="Your company name"
                        className="w-full px-2.5 py-1.5 rounded-lg bg-white/80 border border-slate-300 text-xs text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-1 focus:ring-[#D9232D] focus:border-[#D9232D] transition-all"
                      />
                    </div>
                  </div>

                  {/* Category Selection */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    <div className="space-y-0.5">
                      <label className="text-[10px] font-bold text-slate-800">
                        Select Category <span className="text-red-500">*</span>
                      </label>
                      <select
                        required
                        value={selectedCategory}
                        onChange={handleCategoryChange}
                        className="w-full px-2.5 py-1.5 rounded-lg bg-white/80 border border-slate-300 text-xs text-slate-900 focus:outline-none focus:ring-1 focus:ring-[#D9232D] focus:border-[#D9232D] transition-all cursor-pointer"
                      >
                        <option value="" disabled>
                          Select project category
                        </option>
                        <option value="Audio Visual Manufacturing">
                          Audio Visual Manufacturing
                        </option>
                        <option value="Internship and Training">
                          Internship and Training
                        </option>
                        <option value="Application and Web development">
                          Application and Web development
                        </option>
                      </select>
                    </div>

                    {/* Dynamic Sub-Category Dropdown */}
                    <div className="space-y-0.5">
                      <label className="text-[10px] font-bold text-slate-800">
                        Sub Category <span className="text-red-500">*</span>
                      </label>
                      <select
                        required
                        disabled={!selectedCategory}
                        value={selectedSubCategory}
                        onChange={(e) => setSelectedSubCategory(e.target.value)}
                        className="w-full px-2.5 py-1.5 rounded-lg bg-white/80 border border-slate-300 text-xs text-slate-900 focus:outline-none focus:ring-1 focus:ring-[#D9232D] focus:border-[#D9232D] transition-all cursor-pointer disabled:bg-slate-100 disabled:cursor-not-allowed"
                      >
                        <option value="" disabled>
                          {selectedCategory
                            ? "Select specific area"
                            : "Choose category first"}
                        </option>
                        {selectedCategory &&
                          subCategoriesMap[selectedCategory]?.map((subCat) => (
                            <option key={subCat} value={subCat}>
                              {subCat}
                            </option>
                          ))}
                      </select>
                    </div>
                  </div>

                  {/* Project Description */}
                  <div className="space-y-0.5">
                    <label className="text-[10px] font-bold text-slate-800">
                      Project Description{" "}
                      <span className="text-red-500">*</span>
                    </label>
                    <textarea
                      rows={2.5}
                      required
                      placeholder="Tell us about your project, requirements, or specific details..."
                      className="w-full px-2.5 py-1.5 rounded-lg bg-white/80 border border-slate-300 text-xs text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-1 focus:ring-[#D9232D] focus:border-[#D9232D] transition-all resize-none"
                    />
                  </div>

                  {/* Submit Button (Dark Grey Theme) */}
                  <button
                    type="submit"
                    className="w-full py-2 px-4 rounded-full bg-zinc-800 hover:bg-zinc-900 active:scale-[0.99] text-white font-bold text-xs transition-all duration-200 shadow-sm flex items-center justify-center gap-2 cursor-pointer mt-1"
                  >
                    <span>Send Inquiry</span>
                    <Send className="w-3.5 h-3.5 text-zinc-300" />
                  </button>
                </form>
              )}
            </div>

            {/* Right Column: Contact Details Card (Slightly shifted down & compact) */}
            <div className="lg:col-span-5 lg:mt-8">
              <div className="p-4 sm:p-5 rounded-2xl bg-white border border-slate-200 space-y-3.5 shadow-lg text-slate-800">
                <div>
                  <span className="text-[9px] font-bold uppercase tracking-widest text-[#D9232D]">
                    GET IN TOUCH
                  </span>
                  <h3 className="text-sm font-bold text-slate-900 mt-0.5">
                    We&apos;re Here to Help
                  </h3>
                  <p className="text-[10px] text-slate-500 leading-tight">
                    Reach out to us for any queries or custom digital solutions.
                  </p>
                </div>

                <div className="space-y-2.5 text-[11px]">
                  {/* Location */}
                  <div className="flex items-start gap-2">
                    <div className="p-1.5 rounded-md bg-red-50 text-[#D9232D] flex-shrink-0">
                      <MapPin className="w-3.5 h-3.5" />
                    </div>
                    <div>
                      <div className="font-bold text-slate-900 text-[11px]">
                        Main Office & Lab
                      </div>
                      <div className="text-slate-500 text-[10px] leading-snug">
                        {companyInfo.address || "Agra, Uttar Pradesh, India"}
                      </div>
                    </div>
                  </div>

                  {/* Email */}
                  <div className="flex items-start gap-2">
                    <div className="p-1.5 rounded-md bg-red-50 text-[#D9232D] flex-shrink-0">
                      <Mail className="w-3.5 h-3.5" />
                    </div>
                    <div>
                      <div className="font-bold text-slate-900 text-[11px]">
                        Email Inquiries
                      </div>
                      <a
                        href="mailto:info@amiach.com"
                        className="text-slate-500 hover:text-[#D9232D] transition-colors block text-[10px]"
                      >
                        info@amiach.com
                      </a>
                    </div>
                  </div>

                  {/* Phone */}
                  <div className="flex items-start gap-2">
                    <div className="p-1.5 rounded-md bg-red-50 text-[#D9232D] flex-shrink-0">
                      <Phone className="w-3.5 h-3.5" />
                    </div>
                    <div>
                      <div className="font-bold text-slate-900 text-[11px]">
                        Direct Line
                      </div>
                      <div className="text-slate-500 text-[10px]">
                        Available upon request
                      </div>
                    </div>
                  </div>

                  {/* Hours */}
                  <div className="flex items-start gap-2">
                    <div className="p-1.5 rounded-md bg-red-50 text-[#D9232D] flex-shrink-0">
                      <Clock className="w-3.5 h-3.5" />
                    </div>
                    <div>
                      <div className="font-bold text-slate-900 text-[11px]">
                        Operating Hours
                      </div>
                      <div className="text-slate-500 text-[10px]">
                        Mon - Fri: 9:00 AM - 5:00 PM
                      </div>
                    </div>
                  </div>
                </div>

                {/* Freight Note */}
                <div className="pt-2 border-t border-slate-200/60 flex items-center gap-1.5 text-[10px] text-slate-600 font-medium">
                  <Globe className="w-3 h-3 text-[#D9232D]" />
                  <span>Worldwide Freight</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Google CAPTCHA Validation Modal */}
      {showCaptcha && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-xs p-4">
          <div className="bg-white rounded-2xl p-5 w-full max-w-xs shadow-2xl border border-slate-200 relative space-y-3">
            <button
              onClick={() => setShowCaptcha(false)}
              className="absolute top-3 right-3 text-slate-400 hover:text-slate-600"
            >
              <X className="w-4 h-4" />
            </button>

            <div className="text-center space-y-0.5">
              <h4 className="font-bold text-sm text-slate-800">
                Security Check
              </h4>
              <p className="text-[10px] text-slate-500">
                Please verify that you are not a robot
              </p>
            </div>

            <div className="p-2.5 bg-slate-50 rounded-xl border border-slate-200 flex items-center justify-between">
              <label className="flex items-center gap-2.5 cursor-pointer select-none">
                <input
                  type="checkbox"
                  checked={isVerified}
                  onChange={handleCaptchaVerify}
                  className="w-4 h-4 rounded border-slate-300 text-blue-600 focus:ring-blue-500 cursor-pointer"
                />
                <span className="text-xs font-semibold text-slate-700">
                  I&apos;m not a robot
                </span>
              </label>

              <div className="flex flex-col items-center">
                <ShieldCheck className="w-5 h-5 text-blue-500" />
                <span className="text-[7px] text-slate-400 uppercase font-semibold">
                  reCAPTCHA
                </span>
              </div>
            </div>
          </div>
        </div>
      )}

      <Footer className="relative mt-auto w-full z-20" />
    </div>
  );
}
