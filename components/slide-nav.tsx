"use client";

import { companyInfo } from "@/lib/data";
import { HeroSlide } from "@/lib/types";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import {
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  Mail,
  MapPin,
  Pause,
  Phone,
  Play
} from "lucide-react";
import Link from "next/link";
import { useEffect, useRef } from "react";

function LinkedInIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.2V10.9H6.46M7.83 6.25c-.9 0-1.63.73-1.63 1.63s.73 1.63 1.63 1.63 1.63-.73 1.63-1.63-.73-1.63-1.63-1.63Z" />
    </svg>
  );
}

function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
    </svg>
  );
}

function FacebookIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
    </svg>
  );
}

function TwitterIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}

interface SlideNavProps {
  slides: HeroSlide[];
  currentIndex: number;
  onSelectSlide: (index: number) => void;
  isPlaying: boolean;
  onTogglePlayPause: () => void;
  onPrev: () => void;
  onNext: () => void;
  autoplayDuration: number;
  progressKey: number;
  isHovered: boolean;
}

export function SlideNav({
  slides,
  currentIndex,
  onSelectSlide,
  isPlaying,
  onTogglePlayPause,
  onPrev,
  onNext,
  autoplayDuration,
  progressKey,
  isHovered,
}: SlideNavProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const activeItemRef = useRef<HTMLButtonElement>(null);

  // Auto-scroll the active item into view on smaller screens
  useEffect(() => {
    if (activeItemRef.current && containerRef.current) {
      const container = containerRef.current;
      const item = activeItemRef.current;
      const scrollLeft =
        item.offsetLeft - container.offsetWidth / 2 + item.offsetWidth / 2;
      container.scrollTo({ left: scrollLeft, behavior: "smooth" });
    }
  }, [currentIndex]);

  return (
    <div className="w-full bg-[#08090B]/95 backdrop-blur-2xl border-t border-white/10 px-3 sm:px-6 lg:px-8 py-2.5 select-none shadow-[0_-10px_30px_rgba(0,0,0,0.8)]">
      <div className="max-w-[1760px] mx-auto space-y-2">
        {/* Tier 1: Main Product Slide Navigation & Telemetry Dock (as shown in image) */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-2.5">
          {/* Left Control Group: Monogram Logo, Play/Pause, Prev/Next & Counter */}
          <div className="flex items-center gap-2.5 w-full md:w-auto justify-between md:justify-start">
           
            {/* Play/Pause & Nav Arrows */}
            <div className="flex items-center gap-1.5">
              <button
                onClick={onTogglePlayPause}
                className="p-1.5 sm:p-2 rounded-full bg-white/5 hover:bg-white/15 text-zinc-300 hover:text-white transition-all border border-white/10 shadow-sm"
                aria-label={isPlaying ? "Pause 3s autoplay" : "Start autoplay"}
                title={isPlaying ? "Pause auto-slide" : "Start auto-slide"}
              >
                {isPlaying ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5" />}
              </button>

              <button
                onClick={onPrev}
                className="p-1.5 sm:p-2 rounded-full bg-white/5 hover:bg-[#FF2B35] hover:border-[#FF2B35] text-zinc-300 hover:text-white transition-all border border-white/10 shadow-sm"
                aria-label="Previous product slide"
                title="Previous slide"
              >
                <ChevronLeft className="w-3.5 h-3.5" />
              </button>

              <button
                onClick={onNext}
                className="p-1.5 sm:p-2 rounded-full bg-white/5 hover:bg-[#FF2B35] hover:border-[#FF2B35] text-zinc-300 hover:text-white transition-all border border-white/10 shadow-sm"
                aria-label="Next product slide"
                title="Next slide"
              >
                <ChevronRight className="w-3.5 h-3.5" />
              </button>
            </div>

            {/* Slide Counter */}
            <div className="flex items-center gap-1.5 font-mono text-xs text-zinc-400 pl-2 border-l border-white/10">
              <span className="font-bold text-white text-sm">
                {String(currentIndex + 1).padStart(2, "0")}
              </span>
              <span>/</span>
              <span>{String(slides.length).padStart(2, "0")}</span>
              <span className="text-[10px] text-[#FF2B35] font-semibold uppercase tracking-wider ml-0.5">
                (3S AUTO)
              </span>
            </div>
          </div>

          {/* Center: 5 Interactive Product Tabs */}
          <div
            ref={containerRef}
            className="flex items-center gap-2 overflow-x-auto no-scrollbar w-full md:w-auto justify-start md:justify-center py-0.5 scroll-smooth"
          >
            {slides.map((slide, index) => {
              const isActive = index === currentIndex;
              return (
                <button
                  key={slide.id}
                  ref={isActive ? activeItemRef : null}
                  onClick={() => onSelectSlide(index)}
                  className={cn(
                    "group relative flex-shrink-0 flex flex-col justify-between px-3 py-1.5 sm:py-2 rounded-xl transition-all duration-300 border text-left min-w-[125px] sm:min-w-[145px] overflow-hidden",
                    isActive
                      ? "bg-white/[0.09] border-white/30 text-white shadow-[0_0_20px_rgba(0,0,0,0.5)]"
                      : "bg-white/[0.03] border-white/5 text-zinc-400 hover:text-white hover:bg-white/[0.06] hover:border-white/15"
                  )}
                  aria-label={`Jump to slide ${slide.categoryNumber} - ${slide.category}`}
                >
                  {/* Header row in tab */}
                  <div className="flex items-center justify-between gap-1.5 w-full">
                    <span
                      className={cn(
                        "text-[10px] font-mono font-bold tracking-tight",
                        isActive ? "text-white" : "text-zinc-500"
                      )}
                      style={{ color: isActive ? slide.accentColor : undefined }}
                    >
                      {slide.categoryNumber} • {slide.modelCode}
                    </span>
                  </div>

                  {/* Category title */}
                  <div className="text-xs font-semibold tracking-wide whitespace-nowrap text-white mt-0.5">
                    {slide.category}
                  </div>

                  {/* Live 3-Second Progress Bar for Active Slide */}
                  {isActive && (
                    <div className="absolute inset-x-0 bottom-0 h-1 bg-white/10 overflow-hidden">
                      {isPlaying && !isHovered ? (
                        <motion.div
                          key={progressKey}
                          initial={{ width: "0%" }}
                          animate={{ width: "100%" }}
                          transition={{ duration: autoplayDuration / 1000, ease: "linear" }}
                          className="h-full shadow-[0_0_8px_currentColor]"
                          style={{
                            backgroundColor: slide.accentColor,
                            color: slide.accentColor,
                          }}
                        />
                      ) : (
                        <div
                          className="h-full w-full"
                          style={{ backgroundColor: slide.accentColor }}
                        />
                      )}
                    </div>
                  )}
                </button>
              );
            })}
          </div>

          {/* Right Info: Live Telemetry */}
          <div className="hidden xl:flex items-center gap-3 text-xs text-zinc-400">
            <div className="flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              <span>Industrial 24/7 Grade</span>
            </div>
            <span className="text-zinc-600">•</span>
            <span className="text-zinc-400">Sub-5ms PCAP</span>
          </div>
        </div>

        {/* Tier 2: Company Information, Address & Direct Contact Bar */}
        <div className="pt-2 border-t border-white/[0.08] flex flex-wrap items-center justify-between gap-x-6 gap-y-2 text-xs text-zinc-400">
          {/* Left: Company Name & Tagline */}
          <div className="flex items-center gap-2.5">
            <Link
              href="/"
              className="inline-flex items-baseline font-display font-extrabold tracking-tight group"
              aria-label="AMIACH Technologies"
            >
              <span className="text-[#FF2B35] font-black text-sm group-hover:brightness-125 transition-all">
                AM
              </span>
              <span className="text-white font-medium text-xs tracking-widest ml-0.5">
                IACH
              </span>
            </Link>
            <span className="text-zinc-200 font-semibold text-xs tracking-tight">
              Technologies
            </span>
            <span className="hidden lg:inline-block text-zinc-600">•</span>
            <span className="hidden lg:inline-block text-[11px] text-zinc-400 font-light">
              Smart AV Hardware, Kiosks & Digital Podiums
            </span>
          </div>

          {/* Center: Address */}
          <div className="flex items-center gap-2 text-[11px] sm:text-xs text-zinc-300 font-light">
            <MapPin className="w-3.5 h-3.5 text-[#FF2B35] flex-shrink-0" />
            <span className="hover:text-white transition-colors cursor-default">
              {companyInfo.address}
            </span>
          </div>

          {/* Right: Contact Numbers & Quick Link */}
          <div className="flex items-center gap-2.5 sm:gap-3.5 text-[11px] sm:text-xs">
            <a
              href={`tel:${companyInfo.phone}`}
              className="flex items-center gap-1.5 text-zinc-300 hover:text-white transition-colors group"
              title="Call Sales & Support"
            >
              <Phone className="w-3.5 h-3.5 text-[#FF2B35] group-hover:scale-110 transition-transform" />
              <span className="font-mono">{companyInfo.phone}</span>
            </a>

            <span className="hidden sm:inline-block text-zinc-700">|</span>

            <a
              href={`mailto:${companyInfo.email}`}
              className="hidden md:flex items-center gap-1.5 text-zinc-300 hover:text-white transition-colors group"
              title="Send Inquiry Email"
            >
              <Mail className="w-3.5 h-3.5 text-[#FF2B35] group-hover:scale-110 transition-transform" />
              <span>{companyInfo.email}</span>
            </a>

            <div className="flex items-center gap-1.5 sm:gap-2">
              {[
                { Icon: LinkedInIcon, href: companyInfo.socials.linkedin, label: "LinkedIn" },
                { Icon: InstagramIcon, href: companyInfo.socials.instagram, label: "Instagram" },
                { Icon: FacebookIcon, href: companyInfo.socials.facebook, label: "Facebook" },
                { Icon: TwitterIcon, href: companyInfo.socials.twitter, label: "Twitter" },
              ].map(({ Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex h-7 w-7 items-center justify-center rounded-full border border-white/10 bg-white/5 text-zinc-300 transition-all hover:border-[#FF2B35]/50 hover:bg-[#FF2B35] hover:text-white"
                  aria-label={label}
                  title={label}
                >
                  <Icon className="w-3.5 h-3.5" />
                </a>
              ))}
            </div>

            <Link
              href="/contact"
              className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-[#FF2B35]/10 hover:bg-[#FF2B35] text-[#FF2B35] hover:text-white border border-[#FF2B35]/30 hover:border-[#FF2B35] text-[11px] font-semibold transition-all duration-200 shadow-sm"
            >
              <span>Contact</span>
              <ArrowRight className="w-3 h-3" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}