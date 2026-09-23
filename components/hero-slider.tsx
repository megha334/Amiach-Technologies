"use client";

import React, { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { heroSlides, whatWeDoCategories } from "@/lib/data";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";

export function HeroSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % heroSlides.length);
  }, []);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? heroSlides.length - 1 : prev - 1));
  };

  useEffect(() => {
    const timer = setInterval(() => {
      handleNext();
    }, 7000);

    return () => clearInterval(timer);
  }, [handleNext]);

  return (
    <div
      id="hero-slider"
      className="relative w-full min-h-screen lg:h-screen overflow-hidden select-none bg-slate-950 font-sans flex flex-col justify-between"
    >
      {/* Dynamic Background Images */}
      {heroSlides.map((slide, idx) => (
        <div
          key={slide.image || idx}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            idx === currentIndex ? "opacity-100 z-0" : "opacity-0 -z-10"
          }`}
        >
          <Image
            src={slide.image}
            alt="Hero Visual"
            fill
            priority={idx === 0}
            sizes="100vw"
            className="object-cover scale-105"
          />
          {/* Subtle Dark Gradient Overlay */}
          <div className="absolute inset-0 bg-linear-to-r from-slate-950/50 via-slate-950/20 to-transparent" />
          <div className="absolute inset-0 bg-linear-to-t from-slate-950 via-transparent to-slate-950/40" />
        </div>
      ))}

      {/* Render imported Navbar component */}
      <Navbar />

      {/* Center Content Section */}
      <div className="relative z-20 flex-1 flex items-center justify-end px-6 sm:px-16 md:px-24 py-20 pt-28">
        {/* Interactive Floating Category Cards */}
        <div className="hidden lg:flex flex-col gap-3 max-w-[15rem] w-full translate-y-25">
          {whatWeDoCategories.map((cat) => (
            <Link
              key={cat.href}
              href={cat.href}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-3 shadow-[0_12px_30px_rgba(15,23,42,0.28)] backdrop-blur-md transition-all duration-300 hover:-translate-x-2 hover:border-[#DC2626]/60 hover:bg-white/10"
            >
              <div className="absolute inset-0 bg-linear-to-r from-white/5 via-transparent to-[#DC2626]/5 opacity-70" />
              <div className="relative z-10">
                <h3 className="mt-1 flex items-center justify-between text-[0.72rem] font-bold uppercase tracking-wide text-[#67e3ec] transition-colors group-hover:text-[#F87171]">
                  <span>{cat.title}</span>
                </h3>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* Navigation Controls */}
      <button
        onClick={handlePrev}
        aria-label="Previous Slide"
        className="absolute left-4 sm:left-8 top-1/2 -translate-y-1/2 z-30 text-white/70 hover:text-white transition-all duration-200 hover:scale-125 focus:outline-none filter drop-shadow-[0_2px_10px_rgba(0,0,0,0.8)]"
      >
        <ChevronLeft className="w-10 h-10 stroke-[1.5]" />
      </button>

      <button
        onClick={handleNext}
        aria-label="Next Slide"
        className="absolute right-4 sm:right-8 top-1/2 -translate-y-1/2 z-30 text-white/70 hover:text-white transition-all duration-200 hover:scale-125 focus:outline-none filter drop-shadow-[0_2px_10px_rgba(0,0,0,0.8)]"
      >
        <ChevronRight className="w-10 h-10 stroke-[1.5]" />
      </button>

      {/* Make In India Image */}
      <div className="absolute bottom-20 left-8 sm:left-14 z-20 pointer-events-none opacity-90 hover:opacity-100 transition-opacity">
        <Image
          src="/images/make-in-india.png"
          alt="Make in India"
          width={100}
          height={50}
          className="h-15 sm:h-18 w-auto object-contain filter drop-shadow-[0_4px_12px_rgba(0,0,0,0.8)]"
        />
      </div>

      {/* Extracted Footer Component */}
      <Footer />
    </div>
  );
}
