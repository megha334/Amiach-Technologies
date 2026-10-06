"use client";

import React from "react";
import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  BarChart3,
  CheckCircle2,
  Code2,
  FileText,
  Lightbulb,
  MessageSquare,
  Rocket,
  Sparkles,
  TrendingUp,
  Database,
  Server,
  Network,
  Radio,
  Gauge,
  ShieldCheck,
  Workflow,
  Layers3,
} from "lucide-react";

import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";

/* =========================================================
   ORIGINAL CONTENT — PRESERVED
========================================================= */

const steps = [
  {
    number: "01",
    title: "Tell Us What You Need",
    text: "Share your idea, requirements, or business challenge in your own words. No technical knowledge or complicated terminology needed.",
    accent: "#4969FF",
    icon: MessageSquare,
    visual: "idea",
  },
  {
    number: "02",
    title: "Visualize Your Solution",
    text: "We turn your requirements into a functional preview of your website, dashboard, or digital product — so you can experience the concept before development begins.",
    accent: "#7257E8",
    icon: FileText,
    visual: "design",
  },
  {
    number: "03",
    title: "Build It Right",
    text: "Using reliable, reusable components and proven development practices, we transform the approved concept into a robust working product.",
    accent: "#27B68A",
    icon: Code2,
    visual: "code",
  },
  {
    number: "04",
    title: "Launch, Support & Scale",
    text: "Once your product is live, we're still here — improving features, supporting users, and helping the solution grow with your business.",
    accent: "#F5A623",
    icon: Rocket,
    visual: "launch",
  },
];

/* =========================================================
   SMALL UI COMPONENTS
========================================================= */

function BrowserDots() {
  return (
    <div className="flex items-center gap-1.5">
      <span className="h-2 w-2 rounded-full bg-[#C9CCE0]" />
      <span className="h-2 w-2 rounded-full bg-[#C9CCE0]" />
      <span className="h-2 w-2 rounded-full bg-[#C9CCE0]" />
    </div>
  );
}

/* =========================================================
   PROCESS VISUALS
========================================================= */

function StepVisual({
  type,
  accent,
}: {
  type: string;
  accent: string;
}) {
  if (type === "idea") {
    return (
      <div className="relative h-26 overflow-hidden rounded-xl border border-[#E9EAF2] bg-white p-3">
        <div className="flex items-center justify-between border-b border-[#F0F1F6] pb-2">
          <BrowserDots />

          <span className="text-[7px] font-medium text-[#969AAA]">
            project-brief
          </span>
        </div>

        <div className="mt-3 flex gap-2.5">
          <div
            className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg"
            style={{
              backgroundColor: `${accent}12`,
              color: accent,
            }}
          >
            <Lightbulb className="h-4 w-4" />
          </div>

          <div className="flex-1 space-y-1.5 pt-1">
            <div className="h-1.5 w-3/4 rounded-full bg-[#E4E6EF]" />
            <div className="h-1.5 w-full rounded-full bg-[#F0F1F6]" />
            <div className="h-1.5 w-1/2 rounded-full bg-[#F0F1F6]" />
          </div>
        </div>

        <div
          className="absolute bottom-2 right-2 rounded-md px-2 py-1 text-[6px] font-bold text-white"
          style={{ backgroundColor: accent }}
        >
          Idea captured
        </div>
      </div>
    );
  }

  if (type === "design") {
    return (
      <div className="relative h-26 overflow-hidden rounded-xl border border-[#E7E2FA] bg-white p-3">
        <div className="mb-2 flex items-center justify-between">
          <div className="h-1.5 w-16 rounded-full bg-[#E7E2FA]" />
          <div className="h-4 w-4 rounded-full bg-[#F0EDFF]" />
        </div>

        <div className="grid grid-cols-[1fr_35px] gap-2">
          <div className="rounded-md border border-[#ECE8FB] p-1.5">
            <div className="mb-2 h-6 rounded bg-linear-to-r from-[#F1EEFF] to-[#EEF4FF]" />

            <div className="space-y-1">
              <div className="h-1 w-full rounded bg-[#E8E3FA]" />
              <div className="h-1 w-4/5 rounded bg-[#E8E3FA]" />
            </div>
          </div>

          <div className="rounded-md border-2 border-[#DDD6FE] p-1">
            <div className="h-full rounded bg-[#F4F1FF]" />
          </div>
        </div>

        <div className="absolute bottom-2 left-3 rounded-md bg-[#7257E8] px-2 py-1 text-[6px] font-bold text-white">
          Preview
        </div>
      </div>
    );
  }

  if (type === "code") {
    return (
      <div className="relative h-26 overflow-hidden rounded-xl bg-[#0D1530] p-3">
        <div className="flex items-center justify-between border-b border-white/10 pb-2">
          <BrowserDots />

          <span className="text-[7px] text-slate-500">
            build-ready
          </span>
        </div>

        <div className="mt-3 space-y-1.5 font-mono text-[7px]">
          <div>
            <span className="text-violet-300">const</span>{" "}
            <span className="text-white">product</span>{" "}
            <span className="text-slate-500">=</span>{" "}
            <span className="text-emerald-300">true</span>
          </div>

          <div className="pl-3 text-slate-400">
            components.map(render)
          </div>

          <div>
            <span className="text-blue-300">deploy</span>
            <span className="text-slate-400">();</span>
          </div>
        </div>

        <div
          className="absolute bottom-2 right-2 flex items-center gap-1 rounded-md px-2 py-1 text-[6px] font-bold text-white"
          style={{ backgroundColor: accent }}
        >
          <CheckCircle2 className="h-2.5 w-2.5" />
          Built
        </div>
      </div>
    );
  }

  return (
    <div className="relative h-26 overflow-hidden rounded-xl border border-[#F1E6C9] bg-white p-3">
      <div className="flex items-center justify-between">
        <span className="rounded-full bg-[#E9F8F1] px-2 py-1 text-[6px] font-bold text-[#17855F]">
          LIVE
        </span>

        <TrendingUp className="h-3.5 w-3.5 text-[#F5A623]" />
      </div>

      <div className="mt-4 flex h-11 items-end gap-1.5">
        {[35, 52, 44, 68, 58, 82].map((height, index) => (
          <div
            key={index}
            className="flex-1 rounded-t-md bg-gradient-to-t from-[#F9DCA0] to-[#F5A623]"
            style={{ height: `${height / 2}px` }}
          />
        ))}
      </div>

      <div className="absolute bottom-2 right-2 rounded-lg border border-[#EEF0F5] bg-white px-2 py-1 shadow-sm">
        <span className="text-[7px] font-bold text-[#333746]">
          +248%
        </span>

        <span className="ml-1 text-[6px] text-[#999DAD]">
          growth
        </span>
      </div>
    </div>
  );
}

/* =========================================================
   HERO / PROCESS
========================================================= */

function ProcessSection() {
  return (
    <section
      id="process"
      className="relative overflow-hidden"
    >
      {/* ambient background */}
      <div className="pointer-events-none absolute left-[20%] top-0 h-[100px] w-[100px] rounded-full bg-[#E8E7FF]/60 blur-[120px]" />

      <div className="pointer-events-none absolute -right-32 top-[35%] h-[350px] w-[350px] rounded-full bg-[#EEE8FF]/70 blur-[110px]" />

      {/* Added pt-28 sm:pt-32 lg:pt-36 to prevent navbar overlap on mobile */}
      <div className="relative mx-auto max-w-[1400px] px-6 pb-12 pt-28 sm:pt-32 lg:pt-36 sm:px-8 lg:px-10">
        {/* Eyebrow & Hero Container */}
        <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-8">
          <div className="max-w-4xl lg:ml-[8%]">
            {/* eyebrow */}
            <div className="mb-5 flex items-center gap-3 text-[9px] font-bold uppercase tracking-[0.23em] text-[#4969FF]">
              <span className="h-px w-8 bg-[#4969FF]" />
              Your idea
              <span className="text-[#C5C7D4]">→</span>
              <span className="text-[#F27C72]">
                Our process
              </span>
            </div>

            {/* hero */}
            <div className="grid gap-8 lg:grid-cols-[1.15fr_0.85fr] lg:items-end">
              <div>
                <h1 className="max-w-[720px] text-[23px] font-black leading-[0.98] tracking-[-0.045em] text-[#101529] sm:text-[30px] lg:text-[38px]">
                  From Idea to
                  <span className="block bg-gradient-to-r from-[#236BFF] via-[#5366E8] to-[#9A57E8] bg-clip-text text-transparent">
                    Solution
                  </span>
                  <span className="block">
                    for your Process
                  </span>
                </h1>
              </div>

              <div className="max-w-[470px]">
                <p className="text-[13px] leading-6 text-[#383d53] sm:text-[14px]">
                  From your initial requirements to a working prototype — without
                  long proposals or endless meetings.
                </p>

                <div className="mt-4 flex items-center gap-2 text-[10px] font-semibold text-[#3F4354]">
                  <span className="h-2 w-2 rounded-full bg-emerald-400" />
                  Four clear stages. One continuous flow.
                </div>
              </div>
            </div>
          </div>

          {/* Action buttons shifted top-rightward on mobile and made smaller */}
          <div className="flex flex-col items-end gap-1.5 sm:gap-2 shrink-0 self-end sm:self-start lg:self-center -mt-8 sm:mt-12 -translate-y-3 sm:-translate-y-4 lg:-translate-y-6">
            <Link
              href="/internship-training"
              className="rounded-full border border-[#00F2FE]/60 bg-black/35 px-2.5 py-1.5 sm:px-3 sm:py-2 text-[8px] sm:text-[9px] font-bold uppercase tracking-[0.15em] sm:tracking-[0.2em] text-cyan-300 transition-all duration-300 hover:bg-[#00F2FE] hover:text-black backdrop-blur-sm shadow-[0_0_12px_rgba(0,242,254,0.25)] text-right"
            >
              Internship Training
            </Link>          
            <Link
              href="/app-web-development"
              className="inline-flex items-center justify-center rounded-full border border-[#00F2FE]/60 bg-black/35 px-2.5 py-1.5 sm:px-3 sm:py-2 text-[8px] sm:text-[9px] font-bold uppercase tracking-[0.15em] sm:tracking-[0.2em] text-cyan-300 transition-all duration-300 hover:bg-[#00F2FE] hover:text-black backdrop-blur-sm shadow-[0_0_12px_rgba(0,242,254,0.25)] text-right"
            >
              App &amp; Web Development
            </Link>
             <Link
              href="/audio-visual-manufacturing"
              className="inline-flex items-center justify-center rounded-full border border-[#00F2FE]/60 bg-black/35 px-2.5 py-1.5 sm:px-3.5 sm:py-2 text-[8px] sm:text-[10px] font-bold uppercase tracking-[0.15em] sm:tracking-[0.2em] text-cyan-300 transition-all duration-300 hover:bg-[#00F2FE] hover:text-black backdrop-blur-sm shadow-[0_0_12px_rgba(0,242,254,0.25)] text-right"
            >
              Audio Visual Manufacturing
            </Link>
          </div>
        </div>

        {/* process cards */}
        {/* process cards — editorial 4-column layout */}
<div className="relative mt-9 bg-[#151b2b7a]">
  <div className="grid grid-cols-1 md:grid-cols-4 xl:grid-cols-4">
    {steps.map((step, index) => {
      return (
        <article
          key={step.number}
          className="group relative min-h-[195px] border-t border-[#D9DCE6] px-4 pt-5 pb-6 sm:pb-0 transition-all duration-500 xl:px-5 flex flex-col items-center text-center sm:items-start sm:text-left"
        >
          {/* subtle hover background */}
          <div
            className="pointer-events-none absolute inset-x-0 top-0 h-full -z-10 opacity-0 transition-all duration-500 group-hover:opacity-100"
            style={{
              background: `linear-gradient(to bottom, ${step.accent}08, transparent 65%)`,
            }}
          />

          {/* White vertical divider between columns */}
          {index !== steps.length - 1 && (
            <div className="absolute right-0 top-0 hidden h-full w-px bg-white md:block" />
          )}

          {/* Step label */}
          {/* <div className="flex w-full items-center justify-between">
            <span
              className="text-[9px] font-bold uppercase tracking-[0.18em] transition-all duration-300 group-hover:tracking-[0.24em] text-[#00F2FE]"
            >
              SITE-{step.number}
            </span> */}

            {/* Step label / Arrow */}
<div className="flex w-full items-center justify-between">
  <div className="flex items-center gap-1.5 text-[#00F2FE]">
    {/* Solid animated arrow */}
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
    >
      <path d="M13.172 12l-4.95-4.95 1.414-1.414L16 12l-6.364 6.364-1.414-1.414z" />
    </svg>
  </div>


            {/* small arrow appears on hover */}
            <span
              className="translate-x-[-6px] text-[14px] opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100 text-[#00F2FE]"
            >
              ↗
            </span>
          </div>

          {/* Title (centered on mobile) */}
          <h2 className="mt-4 max-w-[220px] mx-auto sm:mx-0 text-[15px] font-extrabold leading-[1.25] tracking-[-0.02em] text-[#11162A] transition-transform duration-300 group-hover:translate-x-1">
            {step.title}
          </h2>

          {/* Description (centered on mobile) */}
          <p className="mt-3 max-w-[250px] mx-auto sm:mx-0 text-[11px] leading-[1.7] text-white transition-colors duration-300 group-hover:text-white/90">
            {step.text}
          </p>

          {/* Bottom accent line */}
          <div
            className="absolute bottom-0 left-1/2 -translate-x-1/2 sm:left-0 sm:translate-x-0 h-[2px] w-0 transition-all duration-500 group-hover:w-12"
            style={{ backgroundColor: step.accent }}
          />
        </article>
      );
    })}
  </div>
</div>
        
      </div>
    </section>
  );
}

/* =========================================================
   PROJECT / PRODUCTION SECTION
========================================================= */

function ProjectsSection() {
  return (
    <section id="works" className="">
      <div className="mx-auto max-w-350 px-6 py-12 sm:px-8 lg:px-10 lg:py-16">
        {/* heading */}
        <div className="grid gap-8 lg:grid-cols-[0.72fr_1.28fr] lg:items-start -mt-4 lg:-mt-10">
          <div>
            <div className="mt-8 ml-7 flex items-center gap-3 text-[9px] font-bold uppercase tracking-[0.23em] text-[#4969FF]">
              <span className="h-px w-8 bg-[#4969FF]" />
              Projects
            </div>

            <h2 className="mt-6 text-[25px] font-black leading-[0.98] tracking-[-0.045em] text-[#101529] sm:text-[35px]">
              Application that Performs -
          
              <span className="bg-linear-to-r from-[#236BFF] to-[#865BEA] bg-clip-text text-transparent">
                
                &nbsp;Not just a Concept.
              </span>
            </h2>

            <p className="mt-[20px] max-w-[420px] text-[15px] leading-5 text-[#11162A]">
              Real systems built around real operational problems — from
              warehouse workflows and marketplace analytics to financial
              platforms and high-conversion websites.
            </p>
          </div>

          {/* production dashboard */}
          <div className="relative">
  {/* Background blur glow */}
  <div className="absolute -right-8 -top-8 h-32 w-32 rounded-full bg-[#DDE2FF] blur-3xl" />

  {/* Outer window frame */}
  <div className="relative rounded-[18px] border border-[#DFE1ED] bg-white/90 backdrop-blur-md p-2 shadow-[0_22px_60px_rgba(35,45,95,0.12)]">
    {/* Browser header bar */}
    <div className="flex h-8 items-center justify-between border-b border-[#ECEEF4] px-3">
      <div className="flex items-center gap-3">
        <BrowserDots />

        <span className="hidden text-[7px] font-semibold text-[#979AAA] sm:block">
          production-app-v2.1
        </span>
      </div>

      <span className="rounded-full bg-[#EAF8F2] px-2 py-1 text-[6px] font-bold text-[#14805D]">
        LIVE
      </span>
    </div>

    {/* Image container matching exact min-height and bounds */}
    <div className="relative min-h-[310px] w-full overflow-hidden rounded-b-[12px]">
      <img
        src="/images/businessproject.jpeg"
        alt="Business Project Dashboard"
        className="absolute inset-0 h-full w-full object-cover"
      />
    </div>
  </div>

  {/* Floating project indicators */}
  <div className="absolute -bottom-4 -left-4 rounded-xl border border-[#E4E5EE] bg-white px-3 py-2 shadow-xl sm:-left-7">
    <div className="flex items-center gap-2">
      <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />

      <span className="text-[7px] font-bold text-[#555A6B]">
        Real project
      </span>
    </div>

    <div className="mt-1 text-[6px] text-[#999DAC]">
      Built & deployed
    </div>
  </div>

  <div className="absolute -right-2 top-7 rounded-xl border border-[#E4E5EE] bg-white px-3 py-2 shadow-xl sm:-right-5">
    <div className="flex items-center gap-2">
      <TrendingUp className="h-3.5 w-3.5 text-[#4969FF]" />

      <span className="text-[8px] font-bold">
        +24%
      </span>
    </div>

    <div className="mt-1 text-[6px] text-[#999DAC]">
      monthly growth
    </div>
  </div>
</div>
        </div>
      </div>
    </section>
  );
}

/* =========================================================
   MAIN PAGE
========================================================= */

export default function ProcessShowcasePage() {
  return (
    <main
      className="min-h-screen overflow-x-hidden font-sans text-[#0B142B] selection:bg-[#4969FF] selection:text-white bg-cover bg-center bg-no-repeat bg-fixed"
      style={{ backgroundImage: "url('/images/businesss%20bg.png')" }}
    >
      {/* Sticky / Fixed Top Navbar */}
      <div className="fixed top-0 left-0 right-0 z-50 w-full bg-[#060b19]/90 backdrop-blur-md border-b border-slate-800/50">
        <Navbar />
      </div>

      {/* REDESIGNED PAGE */}
      <ProcessSection />

      <ProjectsSection />

      {/* YOUR EXISTING DEFAULT FOOTER */}
      <Footer className="relative mt-auto w-full z-20" tone="dark" />
    </main>
  );
}