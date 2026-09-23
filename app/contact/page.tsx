import React, { Suspense } from "react";
import type { Metadata } from "next";
import Link from "next/link";
import {
  MapPin,
  Mail,
  Phone,
  Clock,
  Globe,
  ArrowLeft,
} from "lucide-react";
import { ContactForm } from "@/components/contact-form";
import { Navbar } from "@/components/navbar";
import { companyInfo } from "@/lib/data";

export const metadata: Metadata = {
  title: "Contact AMIACH Technologies",
  description:
    "Get in touch with AMIACH Technologies for commercial touch tables, digital podiums, outdoor interactive kiosks, and custom hardware engineering.",
};

export default function ContactPage() {
  return (
    <div className="relative w-full min-h-screen bg-[#08090B] text-white">
      {/* Top Navbar */}
      <Navbar />

      <div className="relative w-full pt-24 pb-12 px-4 sm:px-6 lg:px-8">
        {/* Background Ambient Glows */}
        <div className="absolute top-20 right-10 w-72 h-72 bg-[#FF2B35]/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-20 left-10 w-72 h-72 bg-[#FF2B35]/5 rounded-full blur-3xl pointer-events-none" />

        {/* Outer Container (Reduced from max-w-7xl to max-w-4xl) */}
        <div className="max-w-4xl mx-auto relative z-10 space-y-6">
          {/* Header Bar */}
          <div className="flex flex-wrap items-center justify-between gap-4">
            <Link
              href="/"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 text-xs font-semibold text-zinc-300 hover:text-white transition-all shadow-md"
            >
              <ArrowLeft className="w-3.5 h-3.5 text-[#FF2B35]" />
              <span>Back to Showcase</span>
            </Link>

            <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#FF2B35]">
              GET IN TOUCH
            </span>
          </div>

          {/* Two-Column Grid: Balanced 6 / 6 Split with Smaller Gap */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-start">
            {/* Form Column (6 cols) */}
            <div className="lg:col-span-6">
              <Suspense
                fallback={
                  <div className="h-80 rounded-2xl bg-[#121317] animate-pulse" />
                }
              >
                <ContactForm />
              </Suspense>
            </div>

            {/* Info Column (6 cols) */}
            <div className="lg:col-span-6">
              {/* Contact Details Card (Reduced Padding & Icon Sizes) */}
              <div className="p-5 sm:p-6 rounded-2xl bg-[#121317] border border-white/10 space-y-4 shadow-xl">
                <h3 className="text-base font-bold text-white uppercase tracking-wider font-display border-b border-white/10 pb-2.5">
                  Corporate Headquarters
                </h3>

                <div className="space-y-3.5 text-xs">
                  {/* Location */}
                  <div className="flex items-start gap-2.5">
                    <div className="p-2 rounded-lg bg-white/5 text-[#FF2B35] border border-white/10 flex-shrink-0">
                      <MapPin className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="font-semibold text-white text-sm">
                        Main Office & Lab
                      </div>
                      <div className="text-zinc-400 font-light leading-snug">
                        {companyInfo.address}
                      </div>
                    </div>
                  </div>

                  {/* Email */}
                  <div className="flex items-start gap-2.5">
                    <div className="p-2 rounded-lg bg-white/5 text-[#FF2B35] border border-white/10 flex-shrink-0">
                      <Mail className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="font-semibold text-white text-sm">
                        Email Inquiries
                      </div>
                      <a

href="mailto:info@amiach.com"
                        className="text-zinc-400 hover:text-[#FF2B35] transition-colors font-light block"
                      >
                        info@amiach.com
                      </a>
                      <div className="text-[11px] text-zinc-500">
                        Sales inquiries welcome
                      </div>
                    </div>
                  </div>

                  {/* Phone */}
                  <div className="flex items-start gap-2.5">
                    <div className="p-2 rounded-lg bg-white/5 text-[#FF2B35] border border-white/10 flex-shrink-0">
                      <Phone className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="font-semibold text-white text-sm">
                        Direct Line
                      </div>
                      <div className="text-zinc-400 font-light">
                        Available upon request
                      </div>
                    </div>
                  </div>

                  {/* Hours */}
                  <div className="flex items-start gap-2.5">
                    <div className="p-2 rounded-lg bg-white/5 text-[#FF2B35] border border-white/10 flex-shrink-0">
                      <Clock className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="font-semibold text-white text-sm">
                        Operating Hours
                      </div>
                      <div className="text-zinc-400 font-light">
                        Monday - Friday, 9:00 AM - 5:00 PM
                      </div>
                    </div>
                  </div>
                </div>

                {/* Badges */}
                <div className="pt-3 border-t border-white/10 flex items-center justify-between text-[11px] text-zinc-400">
                  
                  <div className="flex items-center gap-1 text-zinc-400">
                    <Globe className="w-3.5 h-3.5 text-[#FF2B35]" />
                    <span>Worldwide Freight</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
