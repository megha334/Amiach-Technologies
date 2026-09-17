"use client";

import React from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, CheckCircle, Cpu, Layers, Sparkles, ShieldCheck } from "lucide-react";
import { HeroSlide } from "@/lib/types";

interface HeroContentProps {
  currentSlide: HeroSlide;
  onOpenQuoteModal: (product?: string) => void;
}

export function HeroContent({ currentSlide, onOpenQuoteModal }: HeroContentProps) {
  return (
    <div className="w-full h-full max-w-[1780px] mx-auto px-4 sm:px-6 lg:px-12 flex flex-col justify-center select-none py-1 sm:py-2">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentSlide.id}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.35 }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-3 lg:gap-8 items-center h-full"
        >
          {/* Left Column: Product Information & Specifications */}
          <div className="lg:col-span-6 xl:col-span-6 space-y-2.5 sm:space-y-3 xl:space-y-4 z-20">
            {/* Top Badges Row */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35, delay: 0.05 }}
              className="flex flex-wrap items-center gap-2"
            >
              <div
                className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider border"
                style={{
                  backgroundColor: `${currentSlide.accentColor}18`,
                  borderColor: `${currentSlide.accentColor}50`,
                  color: currentSlide.accentColor,
                }}
              >
                <span
                  className="w-2 h-2 rounded-full animate-pulse"
                  style={{ backgroundColor: currentSlide.accentColor }}
                />
                {currentSlide.badge}
              </div>

              <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-mono text-zinc-300">
                <Cpu className="w-3 h-3 text-zinc-400" />
                <span>{currentSlide.modelCode}</span>
              </div>

              <div className="hidden sm:inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-medium text-zinc-300">
                <Layers className="w-3 h-3 text-zinc-400" />
                <span>{currentSlide.screenSize}</span>
              </div>
            </motion.div>

            {/* Main Product Heading */}
            <div className="space-y-0.5 sm:space-y-1">
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.1 }}
                className="text-[11px] sm:text-xs font-bold uppercase tracking-[0.25em] text-zinc-400"
              >
                {currentSlide.eyebrow}
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45, delay: 0.15 }}
                className="text-2xl sm:text-4xl md:text-5xl xl:text-6xl font-black font-display uppercase tracking-tight text-white leading-[1.05]"
              >
                <span className="block">{currentSlide.title}</span>
                <span className="block text-zinc-300 font-bold">{currentSlide.subtitle}</span>
                <span
                  className="block tracking-tight drop-shadow-md"
                  style={{ color: currentSlide.accentColor }}
                >
                  {currentSlide.highlight}
                </span>
              </motion.h1>
            </div>

            {/* Description Paragraph */}
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.2 }}
              className="text-xs sm:text-sm md:text-base text-zinc-300 font-light leading-relaxed max-w-2xl line-clamp-2 sm:line-clamp-3"
            >
              {currentSlide.description}
            </motion.p>

            {/* Technical Specs 4-Pill Grid */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.25 }}
              className="grid grid-cols-2 sm:grid-cols-4 gap-2 pt-0.5"
            >
              {currentSlide.specs.map((spec, i) => (
                <div
                  key={i}
                  className="px-3 py-1.5 sm:py-2 rounded-xl bg-white/[0.04] border border-white/10 hover:border-white/20 transition-colors"
                >
                  <div className="text-[10px] uppercase font-semibold text-zinc-400">
                    {spec.label}
                  </div>
                  <div className="text-xs font-bold text-white truncate mt-0.5 font-mono">
                    {spec.value}
                  </div>
                </div>
              ))}
            </motion.div>

            {/* Feature Highlights Chips */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.3 }}
              className="hidden sm:flex flex-wrap gap-2 pt-0.5"
            >
              {currentSlide.features.slice(0, 3).map((feat, i) => (
                <div
                  key={i}
                  className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-black/40 border border-white/10 text-[11px] text-zinc-300"
                >
                  <CheckCircle className="w-3 h-3 flex-shrink-0" style={{ color: currentSlide.accentColor }} />
                  <span>{feat}</span>
                </div>
              ))}
            </motion.div>

            {/* Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.35 }}
              className="flex items-center gap-3 pt-1"
            >
              <button
                onClick={() => onOpenQuoteModal(`${currentSlide.title} (${currentSlide.modelCode})`)}
                className="group relative inline-flex items-center gap-2 px-5 sm:px-6 py-2.5 sm:py-3 rounded-full text-white font-bold text-xs sm:text-sm uppercase tracking-wider transition-all duration-300 shadow-xl hover:-translate-y-0.5"
                style={{
                  backgroundColor: currentSlide.accentColor,
                  boxShadow: `0 0 25px ${currentSlide.accentGlow}`,
                }}
              >
                <span>Request Quotation</span>
                <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
              </button>

              <button
                onClick={() => onOpenQuoteModal(`Datasheet: ${currentSlide.title}`)}
                className="inline-flex items-center gap-2 px-4 sm:px-5 py-2.5 sm:py-3 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 text-xs sm:text-sm font-semibold text-zinc-300 hover:text-white transition-all"
              >
                <ShieldCheck className="w-4 h-4 text-zinc-400" />
                <span>Datasheet & Specs</span>
              </button>
            </motion.div>
          </div>

          {/* Right Column: Prominent Standalone Floating Product Display */}
          <div className="lg:col-span-6 xl:col-span-6 relative flex items-center justify-center h-[42vh] sm:h-[50vh] md:h-[56vh] xl:h-[62vh] max-h-[620px]">
            {/* Ambient Radial Spotlight Glow */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 0.45 }}
              transition={{ duration: 0.5 }}
              className="absolute w-[320px] h-[320px] sm:w-[450px] sm:h-[450px] xl:w-[560px] xl:h-[560px] rounded-full blur-[100px] pointer-events-none"
              style={{ backgroundColor: currentSlide.accentColor }}
            />

            {/* Standalone Product Figure with Natural Studio Shadow */}
            <motion.div
              initial={{ scale: 0.9, y: 20, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="relative w-full h-full flex flex-col items-center justify-center"
            >
              {/* Massive Standalone Product Image */}
              <div className="relative w-full h-full flex items-center justify-center p-1 sm:p-2">
                <Image
                  src={currentSlide.image}
                  alt={`${currentSlide.title} - ${currentSlide.modelCode}`}
                  fill
                  priority
                  unoptimized
                  className="object-contain filter drop-shadow-[0_25px_35px_rgba(0,0,0,0.85)] animate-float transform-gpu"
                  sizes="(max-width: 1024px) 95vw, 50vw"
                />
              </div>

              {/* Floating Quality Certificate Badge */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: 0.25 }}
                className="absolute top-2 right-2 sm:top-4 sm:right-4 glass-panel px-3 sm:px-4 py-1.5 sm:py-2 rounded-2xl flex items-center gap-2 border border-white/15 shadow-2xl backdrop-blur-xl"
              >
                <Sparkles className="w-3.5 h-3.5" style={{ color: currentSlide.accentColor }} />
                <div className="text-right">
                  <div className="text-[9px] sm:text-[10px] font-mono uppercase text-zinc-400 tracking-wider">AMIACH HARDWARE</div>
                  <div className="text-[11px] sm:text-xs font-bold text-white font-mono">{currentSlide.modelCode}</div>
                </div>
              </motion.div>

              {/* Realistic Grounded Floor Glow Shadow */}
              <div
                className="absolute bottom-0 w-3/5 h-5 rounded-full blur-xl opacity-60 pointer-events-none"
                style={{ backgroundColor: currentSlide.accentColor }}
              />
              <div className="absolute bottom-1 w-2/3 h-4 bg-black/90 blur-lg rounded-full pointer-events-none" />
            </motion.div>
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
