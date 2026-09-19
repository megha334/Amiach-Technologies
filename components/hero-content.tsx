"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link"; // <--- Added Next.js Link
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowRight,
  CheckCircle,
  Cpu,
  Layers,
  Sparkles,
  ShieldCheck,
  AudioWaveform,
  GraduationCap,
  Code2,
} from "lucide-react";
import { HeroSlide } from "@/lib/types";

interface HeroContentProps {
  currentSlide: HeroSlide;
  onOpenQuoteModal: (product?: string) => void;
}

// 1. Updated CATEGORIES with matching App Router routes
const CATEGORIES = [
  {
    icon: AudioWaveform,
    title: "Audio Video Manufacturing",
    desc: "In-house AV hardware engineering & production",
    href: "/audio-video-manufacturing", // <--- Added route link
  },
  {
    icon: GraduationCap,
    title: "Internship Training / Live Projects",
    desc: "Hands-on industry training with real deliverables",
    href: "/internship-training", // <--- Added route link
  },
  {
    icon: Code2,
    title: "App & Web Development",
    desc: "Custom software for kiosks, dashboards & the web",
    href: "/app-web-development", // <--- Added route link
  },
];

function shorten(text: string, maxLen = 92) {
  if (text.length <= maxLen) return text;
  const cut = text.slice(0, maxLen);
  const lastSpace = cut.lastIndexOf(" ");
  return `${cut.slice(0, lastSpace > 40 ? lastSpace : maxLen)}…`;
}

export function HeroContent({ currentSlide, onOpenQuoteModal }: HeroContentProps) {
  return (
    <div className="w-full h-full max-w-[1780px] mx-auto px-3 sm:px-6 md:px-8 lg:px-10 flex flex-col justify-center select-none py-1 sm:py-2 overflow-y-auto md:overflow-visible">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-3 sm:gap-4 md:gap-5 lg:gap-6 xl:gap-8 items-center h-full">
        
        {/* ================= LEFT: Product Text ================= */}
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide.id}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.35 }}
            className="md:col-span-1 lg:col-span-4 xl:col-span-4 space-y-2 sm:space-y-2.5 z-20 order-1 min-w-0"
          >
            {/* Top Badges Row */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35, delay: 0.05 }}
              className="flex flex-wrap items-center gap-1.5"
            >
              <div
                className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider border"
                style={{
                  backgroundColor: `${currentSlide.accentColor}18`,
                  borderColor: `${currentSlide.accentColor}50`,
                  color: currentSlide.accentColor,
                }}
              >
                <span
                  className="w-1.5 h-1.5 rounded-full animate-pulse"
                  style={{ backgroundColor: currentSlide.accentColor }}
                />
                {currentSlide.badge}
              </div>

              <div className="inline-flex items-center gap-1 px-2 py-1 rounded-full bg-white/5 border border-white/10 text-[10px] font-mono text-zinc-300">
                <Cpu className="w-3 h-3 text-zinc-400" />
                <span>{currentSlide.modelCode}</span>
              </div>

              <div className="hidden sm:inline-flex items-center gap-1 px-2 py-1 rounded-full bg-white/5 border border-white/10 text-[10px] font-medium text-zinc-300">
                <Layers className="w-3 h-3 text-zinc-400" />
                <span>{currentSlide.screenSize}</span>
              </div>
            </motion.div>

            {/* Main Product Heading */}
            <div className="space-y-0.5">
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.1 }}
                className="text-[10px] sm:text-[11px] font-bold uppercase tracking-[0.2em] text-zinc-400"
              >
                {currentSlide.eyebrow}
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45, delay: 0.15 }}
                className="text-xl sm:text-2xl md:text-3xl xl:text-4xl font-black font-display uppercase tracking-tight text-white leading-[1.08]"
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

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.2 }}
              className="text-[11px] sm:text-xs md:text-sm text-zinc-300 font-light leading-relaxed max-w-md line-clamp-2"
            >
              {shorten(currentSlide.description)}
            </motion.p>

            {/* Technical Specs Grid */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.25 }}
              className="grid grid-cols-2 gap-1.5 pt-0.5"
            >
              {currentSlide.specs.slice(0, 4).map((spec, i) => (
                <div
                  key={i}
                  className="px-2.5 py-1 rounded-lg bg-white/4 border border-white/10 hover:border-white/20 transition-colors"
                >
                  <div className="text-[9px] uppercase font-semibold text-zinc-400">
                    {spec.label}
                  </div>
                  <div className="text-[11px] font-bold text-white truncate mt-0.5 font-mono">
                    {spec.value}
                  </div>
                </div>
              ))}
            </motion.div>

            {/* Feature Highlights */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.3 }}
              className="hidden sm:flex flex-wrap gap-1.5 pt-0.5"
            >
              {currentSlide.features.slice(0, 2).map((feat, i) => (
                <div
                  key={i}
                  className="inline-flex items-center gap-1.5 px-2 py-1 rounded-lg bg-black/40 border border-white/10 text-[10px] text-zinc-300"
                >
                  <CheckCircle className="w-3 h-3 shrink-0" style={{ color: currentSlide.accentColor }} />
                  <span>{feat}</span>
                </div>
              ))}
            </motion.div>

            {/* Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.35 }}
              className="flex flex-wrap items-center gap-2 pt-1"
            >
              <button
                type="button"
                onClick={() => onOpenQuoteModal(`${currentSlide.title} (${currentSlide.modelCode})`)}
                className="group relative inline-flex items-center gap-1.5 px-4 sm:px-5 py-2 sm:py-2.5 rounded-full text-white font-bold text-[11px] sm:text-xs uppercase tracking-wider transition-all duration-300 shadow-xl hover:-translate-y-0.5"
                style={{
                  backgroundColor: currentSlide.accentColor,
                  boxShadow: `0 0 20px ${currentSlide.accentGlow}`,
                }}
              >
                <span>Request Quote</span>
                <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1" />
              </button>

              <button
                type="button"
                onClick={() => onOpenQuoteModal(`Datasheet: ${currentSlide.title}`)}
                className="inline-flex items-center gap-1.5 px-3.5 sm:px-4 py-2 sm:py-2.5 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 text-[11px] sm:text-xs font-semibold text-zinc-300 hover:text-white transition-all"
              >
                <ShieldCheck className="w-3.5 h-3.5 text-zinc-400" />
                <span>Datasheet</span>
              </button>
            </motion.div>
          </motion.div>
        </AnimatePresence>

        {/* ================= CENTER: Product Image ================= */}
        <div className="md:col-span-1 lg:col-span-5 xl:col-span-5 relative flex items-center justify-center h-[34vh] sm:h-[44vh] md:h-[42vh] lg:h-[54vh] xl:h-[60vh] 2xl:h-[64vh] max-h-155 min-h-55 order-2">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentSlide.id}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.35 }}
              className="absolute inset-0 flex items-center justify-center"
            >
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 0.45 }}
                transition={{ duration: 0.5 }}
                className="absolute w-[320px] h-80 sm:w-112.5 sm:h-112.5 xl:w-140 xl:h-140 rounded-full blur-[100px] pointer-events-none"
                style={{ backgroundColor: currentSlide.accentColor }}
              />

              <motion.div
                initial={{ scale: 0.9, y: 20, opacity: 0 }}
                animate={{ scale: 1, y: 0, opacity: 1 }}
                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                className="relative w-full h-full flex flex-col items-center justify-center"
              >
                <div className="relative w-full h-full flex items-center justify-center p-1 sm:p-2">
                  <Image
                    src={currentSlide.image}
                    alt={`${currentSlide.title} - ${currentSlide.modelCode}`}
                    fill
                    priority
                    unoptimized
                    className="object-contain filter drop-shadow-[0_25px_35px_rgba(0,0,0,0.85)] animate-float transform-gpu"
                    sizes="(max-width: 1024px) 95vw, 40vw"
                  />
                </div>

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

                <div
                  className="absolute bottom-0 w-3/5 h-5 rounded-full blur-xl opacity-60 pointer-events-none"
                  style={{ backgroundColor: currentSlide.accentColor }}
                />
                <div className="absolute bottom-1 w-2/3 h-4 bg-black/90 blur-lg rounded-full pointer-events-none" />
              </motion.div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* ================= RIGHT: Persistent Categories Rail ================= */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="md:col-span-2 lg:col-span-3 xl:col-span-3 z-20 order-3 flex flex-col gap-2 sm:gap-2.5 min-w-0"
        >
          <div className="text-[9px] sm:text-[10px] font-bold uppercase tracking-[0.2em] text-zinc-500 pl-1 mb-0.5">
            What We Do
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-1 gap-2 sm:gap-2.5">
            {CATEGORIES.map((cat, i) => {
              const Icon = cat.icon;
              return (
                /* 2. Wrapped category box inside Next.js Link */
                <Link key={cat.title} href={cat.href} className="block group">
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.2 + i * 0.08 }}
                    whileHover={{ y: -2 }}
                    className="relative flex items-center gap-2.5 sm:gap-3 px-2.5 sm:px-3 py-2 sm:py-2.5 rounded-xl bg-white/4 border overflow-hidden transition-all duration-300 min-w-0 cursor-pointer group-hover:bg-white/8 group-hover:border-white/30"
                    style={{
                      borderColor: `${currentSlide.accentColor}35`,
                    }}
                  >
                    <motion.div
                      className="absolute inset-0 opacity-[0.08] pointer-events-none"
                      animate={{ backgroundColor: currentSlide.accentColor }}
                      transition={{ duration: 0.6 }}
                    />

                    <div
                      className="relative shrink-0 w-7 h-7 sm:w-8 sm:h-8 rounded-lg flex items-center justify-center transition-colors duration-500"
                      style={{
                        backgroundColor: `${currentSlide.accentColor}1A`,
                      }}
                    >
                      <Icon
                        className="w-3.5 h-3.5 sm:w-4 sm:h-4 transition-colors duration-500"
                        style={{ color: currentSlide.accentColor }}
                      />
                    </div>

                    <div className="relative min-w-0">
                      <div className="text-[10px] sm:text-[11px] lg:text-xs font-bold text-white leading-snug wrap-break-word group-hover:text-white transition-colors">
                        {cat.title}
                      </div>
                      <div className="hidden md:block text-[10px] text-zinc-400 leading-snug mt-0.5 line-clamp-2">
                        {cat.desc}
                      </div>
                    </div>
                  </motion.div>
                </Link>
              );
            })}
          </div>
        </motion.div>
      </div>
    </div>
  );
}