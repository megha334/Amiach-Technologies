import React, { Suspense } from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { MapPin, Mail, Phone, Clock, Globe, ShieldCheck, ArrowLeft } from "lucide-react";
import { ContactForm } from "@/components/contact-form";
import { Navbar } from "@/components/navbar";
import { companyInfo } from "@/lib/data";

export const metadata: Metadata = {
  title: "Contact AMIACH Technologies | Request AV Hardware Quote",
  description:
    "Get in touch with AMIACH Technologies for commercial touch tables, digital podiums, outdoor interactive kiosks, and custom hardware engineering.",
};

export default function ContactPage() {
  return (
    <div className="relative w-full min-h-screen bg-[#08090B] text-white">
      {/* Top Navbar */}
      <Navbar />

      <div className="relative w-full pt-28 pb-20 px-4 sm:px-6 lg:px-12">
        {/* Background Ambient Glows */}
        <div className="absolute top-20 right-10 w-96 h-96 bg-[#FF2B35]/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-[#FF2B35]/5 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto relative z-10 space-y-12">
          {/* Back to Interactive Showcase Link */}
          <div>
            <Link
              href="/"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 text-xs font-semibold text-zinc-300 hover:text-white transition-all shadow-md"
            >
              <ArrowLeft className="w-4 h-4 text-[#FF2B35]" />
              <span>Back to Product Showcase</span>
            </Link>
          </div>

          {/* Page Header */}
          <div className="max-w-3xl space-y-4">
            <div className="flex items-center gap-3">
              <span className="w-10 h-1 bg-[#FF2B35] rounded-full" />
              <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#FF2B35]">
                GET IN TOUCH
              </span>
            </div>

            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold text-white tracking-tight font-display uppercase leading-[1.05]">
              Let&apos;s Build Something <br />
              <span className="text-[#FF2B35]">Interactive.</span>
            </h1>

            <p className="text-base sm:text-lg text-zinc-400 font-light leading-relaxed max-w-2xl">
              Whether you need a custom-built interactive touchscreen installation, a fleet of high-traffic self-service kiosks, or standard digital podiums, our team is ready to assist.
            </p>
          </div>

          {/* Two-Column Grid: Form & Info */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
            {/* Form Column (7 cols) */}
            <div className="lg:col-span-7">
              <Suspense fallback={<div className="h-96 rounded-3xl bg-[#121317] animate-pulse" />}>
                <ContactForm />
              </Suspense>
            </div>

            {/* Info & Map Column (5 cols) */}
            <div className="lg:col-span-5 space-y-8">
              {/* Contact Details Card */}
              <div className="p-8 rounded-3xl bg-[#121317] border border-white/10 space-y-6 shadow-xl">
                <h3 className="text-lg font-bold text-white uppercase tracking-wider font-display border-b border-white/10 pb-4">
                  Corporate Headquarters
                </h3>

                <div className="space-y-5 text-sm">
                  <div className="flex items-start gap-3.5">
                    <div className="p-2.5 rounded-xl bg-white/5 text-[#FF2B35] border border-white/10 flex-shrink-0">
                      <MapPin className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="font-semibold text-white">Main Office & Lab</div>
                      <div className="text-zinc-400 font-light leading-relaxed">
                        {companyInfo.address}
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start gap-3.5">
                    <div className="p-2.5 rounded-xl bg-white/5 text-[#FF2B35] border border-white/10 flex-shrink-0">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="font-semibold text-white">Email Inquiries</div>
                      <a
                        href={`mailto:${companyInfo.email}`}
                        className="text-zinc-400 hover:text-[#FF2B35] transition-colors font-light"
                      >
                        {companyInfo.email}
                      </a>
                      <div className="text-xs text-zinc-500">Sales: {companyInfo.salesEmail}</div>
                    </div>
                  </div>

                  <div className="flex items-start gap-3.5">
                    <div className="p-2.5 rounded-xl bg-white/5 text-[#FF2B35] border border-white/10 flex-shrink-0">
                      <Phone className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="font-semibold text-white">Direct Line</div>
                      <a
                        href={`tel:${companyInfo.phone}`}
                        className="text-zinc-400 hover:text-[#FF2B35] transition-colors font-light"
                      >
                        {companyInfo.phone}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-3.5">
                    <div className="p-2.5 rounded-xl bg-white/5 text-[#FF2B35] border border-white/10 flex-shrink-0">
                      <Clock className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="font-semibold text-white">Operating Hours</div>
                      <div className="text-zinc-400 font-light">{companyInfo.hours}</div>
                    </div>
                  </div>
                </div>

                <div className="pt-4 border-t border-white/10 flex items-center gap-4 text-xs text-zinc-400">
                  <div className="flex items-center gap-1.5 text-emerald-400">
                    <ShieldCheck className="w-4 h-4" />
                    <span>ISO 9001 Certified</span>
                  </div>
                  <div className="flex items-center gap-1.5 text-zinc-400">
                    <Globe className="w-4 h-4 text-[#FF2B35]" />
                    <span>Worldwide Freight</span>
                  </div>
                </div>
              </div>

              {/* Stylized Dark Map */}
              <div className="relative rounded-3xl overflow-hidden border border-white/10 bg-[#101116] h-64 p-6 flex flex-col justify-between shadow-xl">
                <div
                  className="absolute inset-0 opacity-20"
                  style={{
                    backgroundImage: `radial-gradient(circle, #FF2B35 1px, transparent 1px)`,
                    backgroundSize: "24px 24px",
                  }}
                />

                <svg className="absolute inset-0 w-full h-full stroke-white/10 fill-none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M 0 50 Q 150 120 400 80 T 800 180" strokeWidth="2" />
                  <path d="M 120 0 L 180 300" strokeWidth="1.5" />
                  <path d="M 320 0 L 260 300" strokeWidth="2" strokeDasharray="6,6" />
                  <path d="M 0 160 Q 200 140 500 240" strokeWidth="1" />
                </svg>

                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center justify-center">
                  <div className="w-24 h-24 rounded-full bg-[#FF2B35]/15 animate-ping" />
                  <div className="absolute w-8 h-8 rounded-full bg-[#FF2B35]/40 flex items-center justify-center">
                    <div className="w-3.5 h-3.5 rounded-full bg-[#FF2B35] shadow-[0_0_12px_#FF2B35]" />
                  </div>
                </div>

                <div className="relative z-10 flex items-center justify-between">
                  <span className="px-2.5 py-1 rounded-full text-[10px] font-mono font-bold uppercase tracking-wider bg-black/70 backdrop-blur-md text-zinc-300 border border-white/10">
                    Silicon Valley Hub
                  </span>
                  <span className="text-[10px] font-mono text-zinc-500">
                    37.3861° N, 122.0839° W
                  </span>
                </div>

                <div className="relative z-10 bg-black/80 backdrop-blur-md p-3 rounded-2xl border border-white/10 flex items-center justify-between">
                  <div className="text-xs">
                    <div className="font-bold text-white">AMIACH Innovation Center</div>
                    <div className="text-zinc-400 text-[11px]">San Jose, California</div>
                  </div>
                  <span className="text-[10px] text-[#FF2B35] font-bold uppercase tracking-wider">
                    Open for Tours
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
