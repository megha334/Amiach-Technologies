"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowLeft,
  ArrowRight,
  AudioWaveform,
  GraduationCap,
  Code2,
} from "lucide-react";
import { Navbar } from "@/components/navbar";

type CategoryType = "av" | "internship" | "development";

const categoryData = {
  av: {
    icon: AudioWaveform,
    eyebrow: "AUDIO VIDEO MANUFACTURING",
    title: "Audio Video",
    highlight: "Manufacturing",
    description:
      "AMIACH Technologies develops interactive AV hardware and commercial display solutions designed for professional environments, enterprise deployments, education, retail, hospitality and public spaces.",
    points: [
      "Interactive Digital Podiums",
      "Self-Service & Interactive Kiosks",
      "Commercial Digital Signage",
      "Custom AV Hardware Solutions",
    ],
  },

  internship: {
    icon: GraduationCap,
    eyebrow: "INTERNSHIP TRAINING / LIVE PROJECTS",
    title: "Industry Training",
    highlight: "& Live Projects",
    description:
      "Practical internship training designed around real development workflows, live projects and industry-oriented deliverables.",
    points: [
      "Web Development Projects",
      "Software Development Training",
      "Real-World Project Experience",
      "Industry-Oriented Deliverables",
    ],
  },

  development: {
    icon: Code2,
    eyebrow: "APP & WEB DEVELOPMENT",
    title: "App & Web",
    highlight: "Development",
    description:
      "Custom websites, web applications, dashboards and software solutions built with modern technologies and responsive user interfaces.",
    points: [
      "Modern React & Next.js Applications",
      "Responsive Business Websites",
      "Interactive Dashboards",
      "Custom Web & Software Solutions",
    ],
  },
};

export function CategoryPage({ type }: { type: CategoryType }) {
  const data = categoryData[type];
  const Icon = data.icon;
  const categoryLinks =
    type === "av"
      ? [
          { href: "/internship-training", label: "Internship Training" },
          { href: "/app-web-development", label: "App & Web Development" },
        ]
      : type === "internship"
        ? [
            {
              href: "/audio-visual-manufacturing",
              label: "Audio Visual Manufacturing",
            },
            { href: "/app-web-development", label: "App & Web Development" },
          ]
        : [
            {
              href: "/audio-visual-manufacturing",
              label: "Audio Visual Manufacturing",
            },
            { href: "/internship-training", label: "Internship Training" },
          ];

  return (
    <div className="min-h-screen w-full bg-[#08090B] text-white">
      <Navbar variant="category" categoryLinks={categoryLinks} />
      <main className="relative min-h-[calc(100svh-8.5rem)] w-full overflow-hidden">
        {/* Ambient background */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-125 h-125 rounded-full bg-[#FF2B35]/10 blur-[130px]" />

          <div className="absolute inset-0 bg-linear-to-r from-[#08090B] via-[#08090B]/95 to-[#101116]" />

          <div
            className="absolute inset-0 opacity-[0.025]"
            style={{
              backgroundImage:
                "radial-gradient(rgba(255,255,255,0.5) 1px, transparent 1px)",
              backgroundSize: "32px 32px",
            }}
          />
        </div>

        <div className="relative z-10 h-full max-w-7xl mx-auto px-4 sm:px-8 lg:px-12 flex flex-col">
          {/* Top */}
          <div className="pt-5 sm:pt-7">
            <Link
              href="/"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 text-xs font-semibold text-zinc-300 hover:text-white transition-all"
            >
              <ArrowLeft className="w-4 h-4 text-[#FF2B35]" />
              Back to Product Showcase
            </Link>
          </div>

          {/* Center */}
          <div className="flex-1 flex items-center justify-center min-h-0">
            <motion.div
              initial={{
                opacity: 0,
                y: 25,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.6,
              }}
              className="w-full grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center"
            >
              {/* Icon */}
              <div className="lg:col-span-4 flex justify-center">
                <div className="relative w-48 h-48 sm:w-64 sm:h-64 rounded-full bg-white/3 border border-white/10 flex items-center justify-center shadow-2xl">
                  <div className="absolute inset-5 rounded-full border border-[#FF2B35]/20" />

                  <div className="w-24 h-24 sm:w-32 sm:h-32 rounded-3xl bg-[#FF2B35]/10 border border-[#FF2B35]/30 flex items-center justify-center">
                    <Icon className="w-12 h-12 sm:w-16 sm:h-16 text-[#FF2B35]" />
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="lg:col-span-8 space-y-5">
                <div className="flex items-center gap-3">
                  <span className="w-10 h-1 bg-[#FF2B35] rounded-full" />

                  <span className="text-[10px] sm:text-xs font-bold uppercase tracking-[0.25em] text-[#FF2B35]">
                    {data.eyebrow}
                  </span>
                </div>

                <h1 className="text-4xl sm:text-5xl lg:text-7xl font-black font-display uppercase tracking-tight leading-none">
                  {data.title}
                  <br />
                  <span className="text-[#FF2B35]">{data.highlight}</span>
                </h1>

                <p className="max-w-2xl text-sm sm:text-base lg:text-lg text-zinc-400 font-light leading-relaxed">
                  {data.description}
                </p>

                <div className="grid grid-cols-2 gap-2 sm:gap-3 max-w-2xl">
                  {data.points.map((point) => (
                    <div
                      key={point}
                      className="px-3 sm:px-4 py-3 rounded-xl bg-white/4 border border-white/10 text-xs sm:text-sm text-zinc-300"
                    >
                      {point}
                    </div>
                  ))}
                </div>

                <Link
                  href="/contact"
                  className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-[#FF2B35] hover:bg-[#E0202A] text-white text-sm font-bold shadow-[0_0_25px_rgba(255,43,53,0.3)] transition-all hover:-translate-y-0.5"
                >
                  Contact AMIACH
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </motion.div>
          </div>

          {/* Bottom */}
          <div className="pb-5 sm:pb-7 flex items-center justify-between border-t border-white/10 pt-3">
            <span className="text-[9px] sm:text-xs text-zinc-500">
              AMIACH Technologies
            </span>

            <span className="text-[9px] sm:text-xs text-zinc-500">
              Smart AV Hardware & Technology Solutions
            </span>
          </div>
        </div>
      </main>
    </div>
  );
}
