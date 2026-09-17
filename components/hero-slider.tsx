"use client";

import React, { useState, useEffect, useCallback, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { heroSlides } from "@/lib/data";
import { HeroContent } from "./hero-content";
import { SlideNav } from "./slide-nav";
import { QuoteModal } from "./quote-modal";
import { Navbar } from "./navbar";

const AUTOPLAY_DURATION = 2000; // 3.0 seconds per slide as requested

export function HeroSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isHovered, setIsHovered] = useState(false);
  const [progressKey, setProgressKey] = useState(0);
  const [quoteModalOpen, setQuoteModalOpen] = useState(false);
  const [modalProduct, setModalProduct] = useState("");
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const totalSlides = heroSlides.length;
  const currentSlide = heroSlides[currentIndex];

  const handleNext = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % totalSlides);
    setProgressKey((prev) => prev + 1);
  }, [totalSlides]);

  const handlePrev = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + totalSlides) % totalSlides);
    setProgressKey((prev) => prev + 1);
  }, [totalSlides]);

  const handleSelectSlide = (index: number) => {
    if (index !== currentIndex) {
      setCurrentIndex(index);
      setProgressKey((prev) => prev + 1);
    }
  };

  const togglePlayPause = () => {
    setIsPlaying((prev) => !prev);
  };

  const handleOpenQuoteModal = (productTitle?: string) => {
    setModalProduct(productTitle || `${currentSlide.title} (${currentSlide.modelCode})`);
    setQuoteModalOpen(true);
  };

  // 3-Second Autoplay Loop
  useEffect(() => {
    if (isPlaying && !isHovered && !quoteModalOpen) {
      timerRef.current = setTimeout(() => {
        handleNext();
      }, AUTOPLAY_DURATION);
    }

    return () => {
      if (timerRef.current) {
        clearTimeout(timerRef.current);
      }
    };
  }, [currentIndex, isPlaying, isHovered, quoteModalOpen, handleNext]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") {
        handleNext();
      } else if (e.key === "ArrowLeft") {
        handlePrev();
      } else if (e.key === " " && !quoteModalOpen) {
        e.preventDefault();
        setIsPlaying((p) => !p);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [handleNext, handlePrev, quoteModalOpen]);

  return (
    <div
      className="relative w-screen h-screen max-h-[100dvh] overflow-hidden bg-[#08090B] flex flex-col justify-between select-none"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      aria-roledescription="carousel"
      aria-label="AMIACH Product Solutions Showcase"
    >
      {/* Dynamic Ambient Background with Color Blending */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <AnimatePresence initial={false} mode="sync">
          <motion.div
            key={currentSlide.id}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8 }}
            className="absolute inset-0"
          >
            {/* Ambient Radial Spotlight matching current product accent */}
            <div
              className="absolute top-1/2 right-[20%] -translate-y-1/2 w-[700px] h-[700px] rounded-full blur-[140px] opacity-20 pointer-events-none"
              style={{ backgroundColor: currentSlide.accentColor }}
            />
            {/* Dark Studio Base Gradients */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#08090B] via-[#08090B]/90 to-[#0A0C10]/80" />
            <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[#08090B] to-transparent" />
            <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-[#08090B]/90 to-transparent" />
          </motion.div>
        </AnimatePresence>

        {/* Subtle Luxury Mesh Grid Pattern */}
        <div
          className="absolute inset-0 opacity-[0.03] pointer-events-none"
          style={{
            backgroundImage: `radial-gradient(rgba(255, 255, 255, 0.4) 1px, transparent 1px)`,
            backgroundSize: "32px 32px",
          }}
        />
      </div>

      {/* Top Navbar */}
      <Navbar
        onOpenQuoteModal={handleOpenQuoteModal}
        currentProductTitle={currentSlide.title}
        currentModelCode={currentSlide.modelCode}
      />

      {/* Main Single-Screen Hero Content Area */}
      <main className="relative z-10 flex-1 flex flex-col justify-center pt-14 sm:pt-16 pb-1 sm:pb-2 min-h-0 overflow-hidden">
        <HeroContent
          currentSlide={currentSlide}
          onOpenQuoteModal={handleOpenQuoteModal}
        />
      </main>

      {/* Bottom Dock: Slide Navigation & Live 3-Second Progress Bar */}
      <footer className="relative z-20">
        <SlideNav
          slides={heroSlides}
          currentIndex={currentIndex}
          onSelectSlide={handleSelectSlide}
          isPlaying={isPlaying}
          onTogglePlayPause={togglePlayPause}
          onPrev={handlePrev}
          onNext={handleNext}
          autoplayDuration={AUTOPLAY_DURATION}
          progressKey={progressKey}
          isHovered={isHovered}
        />
      </footer>

      {/* In-Page Glassmorphic Quote & Specification Request Modal */}
      <QuoteModal
        isOpen={quoteModalOpen}
        onClose={() => setQuoteModalOpen(false)}
        selectedProduct={modalProduct}
      />
    </div>
  );
}
