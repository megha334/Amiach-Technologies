"use client";

import React, { useState } from "react";
import { useSearchParams } from "next/navigation";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, Building2, User, Mail, Phone, MessageSquare } from "lucide-react";

export function ContactForm() {
  const searchParams = useSearchParams();
  const prefilledProduct = searchParams?.get("product") || "";

  return <ContactFormFields key={prefilledProduct} prefilledProduct={prefilledProduct} />;
}

function ContactFormFields({ prefilledProduct }: { prefilledProduct: string }) {

  const [formState, setFormState] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    product: prefilledProduct,
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate short submission delay for smooth UI feedback
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 800);
  };

  if (isSubmitted) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="p-8 sm:p-12 rounded-3xl bg-[#121317] border border-[#FF2B35]/40 text-center space-y-6 shadow-2xl"
      >
        <div className="w-16 h-16 mx-auto rounded-full bg-[#FF2B35]/15 border border-[#FF2B35]/40 flex items-center justify-center text-[#FF2B35]">
          <CheckCircle2 className="w-8 h-8" />
        </div>

        <div className="space-y-2">
          <h3 className="text-2xl sm:text-3xl font-bold text-white font-display">
            Inquiry Received
          </h3>
          <p className="text-sm text-zinc-300 max-w-md mx-auto leading-relaxed">
            Thank you, <span className="text-white font-semibold">{formState.name}</span>. An AMIACH AV engineering specialist will review your specifications and get in touch within 24 hours.
          </p>
        </div>

        <button
          onClick={() => {
            setIsSubmitted(false);
            setFormState({
              name: "",
              email: "",
              phone: "",
              company: "",
              product: "",
              message: "",
            });
          }}
          className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white/10 hover:bg-white/15 text-zinc-300 hover:text-white text-xs font-bold uppercase tracking-wider transition-colors"
        >
          Send Another Message
        </button>
      </motion.div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-6 p-6 sm:p-10 rounded-3xl bg-[#121317] border border-white/10 shadow-2xl"
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {/* Name */}
        <div className="space-y-2">
          <label
            htmlFor="name"
            className="block text-xs font-bold uppercase tracking-wider text-zinc-300"
          >
            Full Name <span className="text-[#FF2B35]">*</span>
          </label>
          <div className="relative">
            <User className="absolute left-4 top-3.5 w-4 h-4 text-zinc-500" />
            <input
              id="name"
              type="text"
              required
              value={formState.name}
              onChange={(e) => setFormState({ ...formState, name: e.target.value })}
              placeholder="Alex Henderson"
              className="w-full pl-11 pr-4 py-3 bg-white/[0.04] border border-white/10 rounded-xl text-white placeholder-zinc-500 text-sm focus:outline-none focus:border-[#FF2B35] focus:ring-1 focus:ring-[#FF2B35] transition-all"
            />
          </div>
        </div>

        {/* Email */}
        <div className="space-y-2">
          <label
            htmlFor="email"
            className="block text-xs font-bold uppercase tracking-wider text-zinc-300"
          >
            Work Email <span className="text-[#FF2B35]">*</span>
          </label>
          <div className="relative">
            <Mail className="absolute left-4 top-3.5 w-4 h-4 text-zinc-500" />
            <input
              id="email"
              type="email"
              required
              value={formState.email}
              onChange={(e) => setFormState({ ...formState, email: e.target.value })}
              placeholder="alex@enterprise.com"
              className="w-full pl-11 pr-4 py-3 bg-white/[0.04] border border-white/10 rounded-xl text-white placeholder-zinc-500 text-sm focus:outline-none focus:border-[#FF2B35] focus:ring-1 focus:ring-[#FF2B35] transition-all"
            />
          </div>
        </div>

        {/* Phone */}
        <div className="space-y-2">
          <label
            htmlFor="phone"
            className="block text-xs font-bold uppercase tracking-wider text-zinc-300"
          >
            Phone Number
          </label>
          <div className="relative">
            <Phone className="absolute left-4 top-3.5 w-4 h-4 text-zinc-500" />
            <input
              id="phone"
              type="tel"
              value={formState.phone}
              onChange={(e) => setFormState({ ...formState, phone: e.target.value })}
              placeholder="+1 (555) 019-2834"
              className="w-full pl-11 pr-4 py-3 bg-white/[0.04] border border-white/10 rounded-xl text-white placeholder-zinc-500 text-sm focus:outline-none focus:border-[#FF2B35] focus:ring-1 focus:ring-[#FF2B35] transition-all"
            />
          </div>
        </div>

        {/* Company */}
        <div className="space-y-2">
          <label
            htmlFor="company"
            className="block text-xs font-bold uppercase tracking-wider text-zinc-300"
          >
            Company / Organization
          </label>
          <div className="relative">
            <Building2 className="absolute left-4 top-3.5 w-4 h-4 text-zinc-500" />
            <input
              id="company"
              type="text"
              value={formState.company}
              onChange={(e) => setFormState({ ...formState, company: e.target.value })}
              placeholder="Acme Global Inc."
              className="w-full pl-11 pr-4 py-3 bg-white/[0.04] border border-white/10 rounded-xl text-white placeholder-zinc-500 text-sm focus:outline-none focus:border-[#FF2B35] focus:ring-1 focus:ring-[#FF2B35] transition-all"
            />
          </div>
        </div>
      </div>

      {/* Product of Interest */}
      <div className="space-y-2">
        <label
          htmlFor="product"
          className="block text-xs font-bold uppercase tracking-wider text-zinc-300"
        >
          Product or Solution Focus
        </label>
        <select
          id="product"
          value={formState.product}
          onChange={(e) => setFormState({ ...formState, product: e.target.value })}
          className="w-full px-4 py-3 bg-[#18191E] border border-white/10 rounded-xl text-white text-sm focus:outline-none focus:border-[#FF2B35] focus:ring-1 focus:ring-[#FF2B35] transition-all"
        >
          <option value="">General AV Hardware Inquiry</option>
          <option value="Touch Tables">Interactive Touch Tables</option>
          <option value="Touch Podiums">Smart Touch Podiums</option>
          <option value="Self Service Kiosks">Self Service & Wayfinding Kiosks</option>
          <option value="Outdoor Kiosks">Outdoor Weatherproof Displays</option>
          <option value="Custom Solutions">Custom Bespoke Hardware Integration</option>
        </select>
      </div>

      {/* Message */}
      <div className="space-y-2">
        <label
          htmlFor="message"
          className="block text-xs font-bold uppercase tracking-wider text-zinc-300"
        >
          Project Details / Specifications <span className="text-[#FF2B35]">*</span>
        </label>
        <div className="relative">
          <MessageSquare className="absolute left-4 top-3.5 w-4 h-4 text-zinc-500" />
          <textarea
            id="message"
            required
            rows={4}
            value={formState.message}
            onChange={(e) => setFormState({ ...formState, message: e.target.value })}
            placeholder="Tell us about your installation environment, display size requirements, timeline, and deployment targets..."
            className="w-full pl-11 pr-4 py-3 bg-white/[0.04] border border-white/10 rounded-xl text-white placeholder-zinc-500 text-sm focus:outline-none focus:border-[#FF2B35] focus:ring-1 focus:ring-[#FF2B35] transition-all resize-none"
          />
        </div>
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full group relative inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full bg-[#FF2B35] hover:bg-[#E0202A] text-white font-bold text-sm sm:text-base tracking-wide shadow-xl shadow-[#FF2B35]/30 transition-all duration-300 disabled:opacity-50"
      >
        {isSubmitting ? (
          <div className="flex items-center gap-2">
            <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
            <span>Processing Inquiry...</span>
          </div>
        ) : (
          <>
            <span>Send Inquiry</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </>
        )}
      </button>

      <p className="text-center text-[11px] text-zinc-500">
        By submitting, you agree to our privacy policy and consent to receiving communication regarding your inquiry.
      </p>
    </form>
  );
}
