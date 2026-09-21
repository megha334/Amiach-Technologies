"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";

export function Navbar() {
  return (
    <header className="absolute top-0 left-0 right-0 z-30 px-6 sm:px-12 py-4 select-none pointer-events-auto flex items-start justify-between">
      {/* Brand Logo */}
      <Link
        href="/"
        className="group flex items-center focus:outline-none pt-1"
      >
        <div className="relative">
          <Image
            src="/images/logo.png"
            alt="AMIACH Technologies Logo"
            width={120}
            height={32}
            priority
            style={{ width: "auto", height: "auto" }}
            className="h-6 sm:h-7 object-contain transition-transform duration-300 group-hover:scale-105 filter drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]"
          />
        </div>
      </Link>

      {/* Action Buttons: Vertical Circular Style */}
      <div className="flex flex-col items-end gap-2">
        <Link
          href="/about"
          className="w-14 h-14 flex items-center justify-center rounded-full bg-slate-900/30 hover:bg-slate-900/60 border border-white/15 hover:border-red-500/60 text-white/90 hover:text-white font-medium text-[9px] uppercase leading-none backdrop-blur-md shadow-md transition-all duration-300 hover:scale-105 text-center"
        >
          About
        </Link>
        <Link
          href="/contact"
          className="w-14 h-14 flex items-center justify-center rounded-full bg-slate-900/30 hover:bg-slate-900/60 border border-white/15 hover:border-red-500/60 text-white/90 hover:text-white font-medium text-[9px] uppercase leading-none backdrop-blur-md shadow-md transition-all duration-300 hover:scale-105 text-center"
        >
          Contact
        </Link>
      </div>
    </header>
  );
}