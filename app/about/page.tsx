"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, Variants } from "framer-motion";
import {
  Lightbulb,
  ShieldCheck,
  Users,
  TrendingUp,
  ArrowRight,
} from "lucide-react";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";

export default function AboutSection() {
  // Animation Variants
  const floatUp: Variants = {
    hidden: { opacity: 0, y: 15 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4, ease: "easeOut" },
    },
  };

  const staggerList: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const coreValues = [
    {
      title: "Innovation",
      desc: "Smart & future-ready solutions.",
      icon: Lightbulb,
    },
    {
      title: "Quality",
      desc: "Reliable and durable systems.",
      icon: ShieldCheck,
    },
    {
      title: "Customer Focus",
      desc: "Your vision, our priority.",
      icon: Users,
    },
    {
      title: "Growth",
      desc: "Building a smarter digital future.",
      icon: TrendingUp,
    },
  ];

  return (
    <div className="relative w-full h-screen overflow-y-auto lg:overflow-hidden bg-slate-50 text-slate-800 font-sans flex flex-col justify-between">
      {/* Background Image Setup */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 z-0 pointer-events-none">
          <Image
            src="/images/bgAbout.png"
            alt="Background Overlay"
            fill
            priority
            className="object-cover object-center opacity-100"
          />
        </div>
        {/* Light Overlay for Crisp Contrast */}
        <div className="absolute inset-0 bg-white/70 backdrop-blur-[2px]" />
      </div>

      {/* 1. Header / Navbar */}
      <header className="sticky top-0 z-50 w-full bg-white/80 backdrop-blur-md border-b border-slate-200/80 shadow-sm shrink-0">
        <Navbar />
      </header>

      {/* 2. Main Hero Section */}
      <main className="relative z-10 flex-1 flex flex-col justify-center px-4 sm:px-8 lg:px-16 py-4 lg:py-0 max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12 items-center">
          {/* Left Column: Content */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={floatUp}
            className="lg:relative lg:top-8 lg:col-span-6 space-y-3 sm:space-y-4"
          >
            {/* About Us Sub-heading */}
            <div className="flex items-center gap-2">
              <span className="text-xs font-bold uppercase tracking-widest text-[#D9232D]">
                ABOUT THE COMPANY
              </span>
              <div className="w-8 h-[2px] bg-[#D9232D]" />
            </div>

            {/* Main Title */}
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 leading-tight tracking-tight">
              Innovative Digital Solutions <br className="hidden sm:inline" />
              for a <span className="text-[#D9232D]">Smarter Tomorrow</span>
            </h1>

            {/* Content Paragraphs */}
            <div className="space-y-2 text-xs sm:text-sm text-slate-600 font-normal leading-relaxed">
              <p>
                <strong className="text-slate-800">
                  Amiach Technologies Private Limited
                </strong>
                , a StartUp Manufacturing Company producing Digital
                Communication Tools like Smart Interactive Podiums, Interactive
                Touch Tables, and various kinds of Digital Kiosks, is devoted to
                Designing & Creating solutions that exceed Market Expectations.
              </p>
              <p className="hidden sm:block text-slate-500">
                From basic needs to more advanced requirements, our exquisitely
                designed, ergonomic Digital Systems are an essential
                communication commodity for the Digital Age we&apos;re in.
              </p>
            </div>

            {/* CTA Button */}
            <div className="pt-2">
              <Link
                href="/vision"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#D9232D] hover:bg-red-700 text-white font-medium text-xs sm:text-sm transition-all duration-300 shadow-md shadow-red-500/20 hover:scale-105 cursor-pointer"
              >
                <span>Our Vision</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </motion.div>
        </div>

        {/* 4 Core Features Cards */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerList}
          className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 mt-6 sm:mt-8"
        >
          {coreValues.map((card, idx) => {
            const Icon = card.icon;
            return (
              <motion.div
                key={idx}
                variants={floatUp}
                whileHover={{ y: -3 }}
                className="p-3 sm:p-4 rounded-xl bg-white/90 backdrop-blur-md border border-slate-200/80 shadow-sm hover:shadow-md transition-all duration-300 flex items-center space-x-3"
              >
                <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg bg-red-50 text-[#D9232D] flex items-center justify-center shrink-0">
                  <Icon className="w-4 h-4 sm:w-5 sm:h-5 stroke-[2]" />
                </div>
                <div className="overflow-hidden">
                  <h3 className="text-xs sm:text-sm font-bold text-slate-900 truncate">
                    {card.title}
                  </h3>
                  <p className="text-[10px] sm:text-xs text-slate-500 truncate">
                    {card.desc}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </main>

      {/* 3. Root Default Footer */}
      <Footer />
    </div>
  );
}
