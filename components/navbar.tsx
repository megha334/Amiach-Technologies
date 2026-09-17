"use client";

import React from "react";
import Link from "next/link";
import { Phone, Sparkles, Mail } from "lucide-react";
import { companyInfo } from "@/lib/data";

interface NavbarProps {
  onOpenQuoteModal?: (product?: string) => void;
  currentProductTitle?: string;
  currentModelCode?: string;
}

export function Navbar({ onOpenQuoteModal, currentProductTitle, currentModelCode }: NavbarProps) {
  return (
    <header className="fixed top-0 left-0 right-0 z-40 bg-[#08090B]/85 backdrop-blur-xl border-b border-white/10 px-4 sm:px-6 lg:px-10 py-3.5 select-none">
      <div className="max-w-[1700px] mx-auto flex items-center justify-between">
        {/* Brand Logo */}
        <div className="flex items-center gap-4">
          <Link
            href="/"
            className="group flex items-baseline tracking-tighter font-black text-2xl sm:text-3xl font-display focus:outline-none"
            aria-label="AMIACH Technologies"
          >
            <span className="text-[#FF2B35] transition-transform duration-300 group-hover:scale-105 inline-block">
              AMI
            </span>
            <span className="text-white tracking-widest text-xl sm:text-2xl font-light ml-0.5">
              ACH
            </span>
            <span className="hidden sm:inline-block text-[10px] tracking-[0.28em] text-zinc-400 uppercase font-semibold ml-3 pl-3 border-l border-white/20">
              TECHNOLOGIES
            </span>
          </Link>

          {/* Active Product Tag */}
          {currentProductTitle && (
            <div className="hidden xl:flex items-center gap-2 pl-4 border-l border-white/10">
              <span className="w-2 h-2 rounded-full bg-[#FF2B35] animate-pulse" />
              <span className="text-xs font-mono font-medium text-zinc-300">
                {currentModelCode}
              </span>
              <span className="text-xs text-zinc-500">•</span>
              <span className="text-xs font-semibold text-zinc-200">
                {currentProductTitle}
              </span>
            </div>
          )}
        </div>

        {/* Center Badge: Manufacturing Excellence */}
        <div className="hidden md:flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.04] border border-white/10 text-xs text-zinc-300">
          <Sparkles className="w-3.5 h-3.5 text-[#FF2B35]" />
          <span>Interactive Displays & AV Hardware Manufacturing</span>
        </div>

        {/* Right Actions: Phone + Contact Button */}
        <div className="flex items-center gap-3 sm:gap-4">
          <a
            href={`tel:${companyInfo.phone}`}
            className="hidden lg:flex items-center gap-2 text-xs font-medium text-zinc-400 hover:text-white transition-colors px-3 py-2 rounded-lg hover:bg-white/5"
          >
            <Phone className="w-3.5 h-3.5 text-[#FF2B35]" />
            <span>{companyInfo.phone}</span>
          </a>

          <Link
            href="/contact"
            className="group relative inline-flex items-center gap-2 px-5 sm:px-6 py-2 sm:py-2.5 rounded-full bg-[#FF2B35] hover:bg-[#E0202A] text-white font-bold text-xs uppercase tracking-wider transition-all duration-300 shadow-[0_0_20px_rgba(255,43,53,0.35)] hover:shadow-[0_0_30px_rgba(255,43,53,0.55)] hover:-translate-y-0.5 active:translate-y-0"
          >
            <Mail className="w-3.5 h-3.5" />
            <span>Contact</span>
          </Link>
        </div>
      </div>
    </header>
  );
}
