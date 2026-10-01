"use client";

import React, { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { heroSlides, whatWeDoCategories } from "@/lib/data";

export function HeroSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [mobileImageIndex, setMobileImageIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const [glowingIndex, setGlowingIndex] = useState(0);

  const handleNext = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % heroSlides.length);
    setMobileImageIndex(0);
  }, []);

  const handlePrev = useCallback(() => {
    setCurrentIndex((prev) => (prev === 0 ? heroSlides.length - 1 : prev - 1));
    setMobileImageIndex(0);
  }, []);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 767px)");

    const updateScreenType = () => {
      setIsMobile(mediaQuery.matches);
      setMobileImageIndex(0);
    };

    updateScreenType();
    mediaQuery.addEventListener("change", updateScreenType);

    return () => mediaQuery.removeEventListener("change", updateScreenType);
  }, []);

  useEffect(() => {
    if (!isMobile) {
      const timer = setInterval(() => {
        setCurrentIndex((current) => (current + 1) % heroSlides.length);
      }, 5000);

      return () => clearInterval(timer);
    }

    const activeSlide = heroSlides[currentIndex];
    const mobileImages = Array.isArray(activeSlide.mobileImages)
      ? activeSlide.mobileImages
      : activeSlide.mobileImage
      ? [activeSlide.mobileImage]
      : [activeSlide.image];

    if (mobileImages.length <= 1) {
      const timer = setInterval(() => {
        setCurrentIndex((current) => (current + 1) % heroSlides.length);
        setMobileImageIndex(0);
      }, 1800);

      return () => clearInterval(timer);
    }

    const timer = setInterval(() => {
      setMobileImageIndex((prev) => {
        const nextIndex = (prev + 1) % mobileImages.length;

        if (nextIndex === 0) {
          setCurrentIndex((current) => (current + 1) % heroSlides.length);
        }

        return nextIndex;
      });
    }, 1800);

    return () => clearInterval(timer);
  }, [currentIndex, isMobile]);

  useEffect(() => {
    const glowTimer = setInterval(() => {
      setGlowingIndex((prev) => (prev + 1) % whatWeDoCategories.length);
    }, 1500);

    return () => clearInterval(glowTimer);
  }, []);

  const getSlideImage = (slide: (typeof heroSlides)[number], index: number) => {
    if (!isMobile) return slide.image;

    if (Array.isArray(slide.mobileImages) && slide.mobileImages.length > 0) {
      if (index === currentIndex) {
        return slide.mobileImages[mobileImageIndex % slide.mobileImages.length];
      }

      return slide.mobileImages[0];
    }

    return slide.mobileImage ?? slide.image;
  };

  return (
    <div
      id="hero-slider"
      className="relative w-full min-h-screen lg:h-screen overflow-hidden select-none bg-slate-950 font-sans flex flex-col justify-between"
    >
      {/* Background Images */}
      {heroSlides.map((slide, idx) => (
        <div
          key={slide.image || idx}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            idx === currentIndex ? "opacity-100 z-0" : "opacity-0 -z-10"
          }`}
        >
          <Image
            src={getSlideImage(slide, idx)}
            alt="Hero Visual"
            fill
            priority={idx === 0}
            sizes="100vw"
            className="object-cover scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950/50 via-slate-950/20 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-slate-950/40" />
        </div>
      ))}

      {/* Center / Bottom Content Section */}
      <div className="relative z-20 flex-1 flex items-end justify-center pb-24 lg:pb-0 lg:items-center lg:justify-end px-4 sm:px-16 md:px-24 py-10 lg:py-20 lg:pt-28">
        {/* Container: Tilted towards right on mobile with gaps */}
        <div className="flex w-full sm:w-auto flex-row lg:flex-col items-end lg:items-stretch justify-center gap-6 sm:gap-8 lg:gap-3 lg:max-w-60 lg:translate-y-25 overflow-x-auto lg:overflow-visible px-2 py-4">
          {whatWeDoCategories.map((cat, idx) => {
            const isGlowing = isMobile && idx === glowingIndex;

            return (
              <Link
                key={cat.href}
                href={cat.href}
                className="group relative transition-all duration-300 bg-transparent border-none shadow-none p-2 lg:p-3.5 transform -skew-x-12 lg:skew-x-0 lg:overflow-hidden lg:rounded-2xl lg:border lg:border-white/10 lg:bg-white/5 lg:shadow-[0_12px_30px_rgba(15,23,42,0.28)] lg:backdrop-blur-md lg:hover:scale-100 lg:hover:-translate-x-2 lg:hover:border-[#DC2626]/60 lg:hover:bg-white/10"
              >
                {/* Desktop Overlay Background */}
                <div className="hidden lg:block absolute inset-0 bg-gradient-to-r from-white/5 via-transparent to-[#DC2626]/5 opacity-70" />

                <div className="relative z-10">
                  <h3
                    style={isMobile ? { writingMode: "vertical-rl" } : undefined}
                    className={`flex items-center justify-center lg:justify-between text-[10px] sm:text-xs lg:text-[0.72rem] font-bold uppercase tracking-widest lg:tracking-wider transition-all duration-500 ${
                      isMobile ? "rotate-180 whitespace-nowrap" : ""
                    } ${
                      isGlowing
                        ? "text-[#38bdf8] drop-shadow-[0_0_14px_rgba(56,189,248,1)] scale-105"
                        : "text-[#67e3ec] opacity-90"
                    } lg:hover:text-[#F87171] lg:scale-100`}
                  >
                    <span>{cat.title}</span>
                  </h3>
                </div>
              </Link>
            );
          })}
        </div>
      </div>

      {/* Navigation Controls */}
      <button
        onClick={handlePrev}
        aria-label="Previous Slide"
        className="absolute left-2 sm:left-8 top-1/2 -translate-y-1/2 z-30 text-white/70 hover:text-white transition-all duration-200 hover:scale-125 focus:outline-none drop-shadow-[0_2px_10px_rgba(0,0,0,0.8)]"
      >
        <ChevronLeft className="w-8 h-8 sm:w-10 sm:h-10 stroke-[1.5]" />
      </button>

      <button
        onClick={handleNext}
        aria-label="Next Slide"
        className="absolute right-2 sm:right-8 top-1/2 -translate-y-1/2 z-30 text-white/70 hover:text-white transition-all duration-200 hover:scale-125 focus:outline-none drop-shadow-[0_2px_10px_rgba(0,0,0,0.8)]"
      >
        <ChevronRight className="w-8 h-8 sm:w-10 sm:h-10 stroke-[1.5]" />
      </button>

      {/* Make In India Image */}
      {/* <div className="absolute bottom-4 sm:bottom-8 left-4 sm:left-8 z-20 pointer-events-none opacity-90 hover:opacity-100 transition-opacity">
        <Image
          src="/images/make-in-india.png"
          alt="Make in India"
          width={100}
          height={50}
          className="h-8 sm:h-12 w-auto object-contain drop-shadow-[0_4px_12px_rgba(0,0,0,0.8)]"
        />
      </div> */}

      {/* Make In India Image */}
<div className="absolute bottom-10 left-4 sm:bottom-10 sm:left-8 lg:bottom-14 lg:left-12 z-20 pointer-events-none opacity-90 hover:opacity-100 transition-opacity">
  <Image
    src="/images/make-in-india.png"
    alt="Make in India"
    width={160}
    height={80}
    className="h-12 sm:h-16 lg:h-20 w-auto object-contain drop-shadow-[0_4px_12px_rgba(0,0,0,0.8)]"
  />
</div>
    </div>
  );
}