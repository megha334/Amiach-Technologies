"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, Variants } from "framer-motion";
import { 
  Monitor, 
  Cpu, 
  Sun, 
  Layers, 
  ArrowRight,
  Sparkles,
  CheckCircle2
} from "lucide-react";
import { Navbar } from "@/components/navbar";

export default function AboutSection() {
  // Animation Variants
  const floatUp: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
  };

  const staggerList: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const products = [
    {
      title: "Smart Interactive Podiums",
      desc: "Futuristic digital communication systems for smooth presentation flow.",
      icon: Monitor,
      badge: "Flagship",
    },
    {
      title: "Interactive Touch Tables",
      desc: "Ultra-responsive multitouch surfaces for high-engagement collaboration.",
      icon: Cpu,
      badge: "Multi-Touch",
    },
    {
      title: "NFC Enabled Kiosks",
      desc: "Contactless, instantaneous transaction & media kiosks.",
      icon: Layers,
      badge: "Smart RFID",
    },
    {
      title: "Solar Powered Outdoor Kiosk",
      desc: "Eco-friendly, weather-tested high brightness digital signage.",
      icon: Sun,
      badge: "Eco-Friendly",
    },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-slate-100/80 text-slate-900 font-sans relative overflow-hidden">
      
      {/* Header matching original Navbar style */}
      <header className="sticky top-0 z-50 w-full bg-white border-b-2 border-slate-300 shadow-md transition-all">
        <Navbar />
      </header>

      {/* Main Section */}
      <main className="flex-1 relative w-full pt-40 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        
        {/* Background Animation Orbs (Matching Page 1) */}
        <motion.div 
          animate={{ scale: [1, 1.2, 1], x: [0, 40, 0], y: [0, -30, 0] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-12 left-12 w-[450px] h-[450px] bg-[#B30E16]/10 rounded-full blur-[140px] pointer-events-none" 
        />
        <motion.div 
          animate={{ scale: [1, 1.15, 1], x: [0, -50, 0], y: [0, 40, 0] }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-12 right-12 w-[500px] h-[500px] bg-indigo-500/10 rounded-full blur-[160px] pointer-events-none" 
        />

        <div className="max-w-[90rem] mx-auto relative z-10 space-y-12">
          
          {/* Header Block */}
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={floatUp}
            className="space-y-3 max-w-2xl"
          >
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-semibold bg-[#B30E16]/10 border border-[#B30E16]/20 text-[#B30E16]">
              <Sparkles className="w-3.5 h-3.5" /> Next-Gen Hardware Engineering
            </div>

            <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-slate-900 leading-tight">
              Engineering the{" "}
              <span className="text-[#B30E16]">
                Digital Experience
              </span>
            </h1>

            <p className="text-xs sm:text-sm text-slate-600 font-normal leading-relaxed pt-1">
              A startup manufacturing company producing Smart Interactive Podiums, Touch Tables, and Digital Kiosks tailored to exceed expectations.
            </p>
          </motion.div>

          {/* Main Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Image Card */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.96 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="lg:col-span-6 relative group"
            >
              <div className="relative aspect-[16/10] rounded-3xl overflow-hidden border border-slate-200 bg-white shadow-2xl transition-all duration-300 group-hover:border-[#B30E16]/50">
                <Image
                  src="/images/about-pamphlet.jpg"
                  alt="Amiach Digital Solutions Systems"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/30 to-transparent opacity-85 group-hover:opacity-70 transition-opacity" />
                
                <div className="absolute bottom-4 left-4 right-4 p-4 backdrop-blur-md bg-white/90 rounded-2xl border border-white/20 shadow-lg">
                  <p className="text-[10px] font-mono uppercase text-[#B30E16] font-bold tracking-widest">Custom Designing Available</p>
                  <h3 className="text-sm font-bold text-slate-900">Ergonomic Digital Communication Systems</h3>
                </div>
              </div>
            </motion.div>

            {/* Description & Call to Action */}
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={floatUp}
              className="lg:col-span-6 space-y-5"
            >
              <h2 className="text-xl sm:text-3xl font-bold text-slate-900 leading-snug">
                Redefining Digital Interaction in the Modern Era
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                From basic presentation requirements to advanced enterprise integrations, our systems merge sleek hardware design with robust touch interaction to elevate user engagement across education and corporate setups.
              </p>

              <div className="space-y-2 pt-1">
                {["In-house Hardware R&D and Prototyping", "Interactive Multi-Touch Calibration", "Custom Enclosure Design & Branding"].map((feature, i) => (
                  <div key={i} className="flex items-center gap-2 text-xs text-slate-700 font-medium">
                    <CheckCircle2 className="w-4 h-4 text-[#B30E16] shrink-0" />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>

              <div className="pt-2">
                <Link 
                  href="/contact"
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-2xl bg-[#B30E16] hover:bg-red-700 text-white font-semibold text-xs transition-all duration-300 shadow-lg shadow-red-900/20 hover:scale-105 cursor-pointer"
                >
                  <span>Get Custom Quote</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </motion.div>
          </div>

          {/* Specialty Products Lineup */}
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerList}
            className="space-y-6 pt-6"
          >
            <div className="border-b border-slate-300 pb-3 flex items-center justify-between">
              <div>
                <span className="text-[10px] font-mono uppercase text-[#B30E16] font-bold tracking-widest">Specialty Products</span>
                <h2 className="text-lg sm:text-xl font-bold text-slate-900">Core Hardware Lineup</h2>
              </div>
              <span className="text-xs text-slate-500 hidden sm:inline-block">Hover cards to explore specs</span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {products.map((item, idx) => {
                const IconComponent = item.icon;
                return (
                  <motion.div
                    key={idx}
                    variants={floatUp}
                    whileHover={{ y: -6, scale: 1.02 }}
                    className="p-5 rounded-3xl bg-white border border-slate-200/80 shadow-md hover:border-[#B30E16] hover:shadow-xl transition-all duration-300 group relative flex flex-col justify-between cursor-pointer"
                  >
                    <div>
                      <div className="flex justify-between items-start mb-4">
                        <div className="w-10 h-10 rounded-2xl bg-[#B30E16]/10 border border-[#B30E16]/20 text-[#B30E16] flex items-center justify-center group-hover:bg-[#B30E16] group-hover:text-white transition-colors duration-300 shadow-sm">
                          <IconComponent className="w-5 h-5" />
                        </div>
                        <span className="text-[9px] font-mono font-bold px-2.5 py-1 rounded-full bg-slate-100 text-slate-600 border border-slate-200">
                          {item.badge}
                        </span>
                      </div>

                      <h3 className="text-sm font-bold text-slate-900 mb-2 group-hover:text-[#B30E16] transition-colors">
                        {item.title}
                      </h3>
                      <p className="text-xs text-slate-500 leading-relaxed">
                        {item.desc}
                      </p>
                    </div>

                    <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-[11px] text-[#B30E16] font-bold opacity-0 group-hover:opacity-100 transition-opacity">
                      <span>Inquire Specifications</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>

        </div>
      </main>
    </div>
  );
}