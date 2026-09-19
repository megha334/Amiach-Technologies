"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";

export function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-6 sm:px-12 py-6 select-none bg-transparent">
      <div className="max-w-[1800px] mx-auto flex items-center justify-between">
        {/* Brand Logo */}
        <Link href="/" className="group flex items-center focus:outline-none">
          <Image
            src="/images/logo.png"
            alt="AMIACH Technologies Logo"
            width={190}
            height={55}
            priority
            className="h-10 sm:h-12 w-auto object-contain transition-transform duration-300 group-hover:scale-105 filter drop-shadow-lg"
          />
        </Link>

        {/* Right Stacked Translucent Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center gap-3">
          <Link
            href="/contact"
            className="px-5 py-2 rounded-full bg-black/30 backdrop-blur-md border border-white/15 text-white font-medium text-xs tracking-wider uppercase hover:bg-white/10 hover:border-white/30 transition-all duration-300 shadow-lg"
          >
            About Us
          </Link>
          <Link
            href="/contact"
            className="px-5 py-2 rounded-full bg-[#DC2626] hover:bg-[#B91C1C] text-white font-bold text-xs uppercase tracking-wider transition-all duration-300 shadow-[0_0_20px_rgba(220,38,38,0.5)] hover:scale-105"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </header>
  );
}