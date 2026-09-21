"use client";

import React from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { motion, Variants } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";

export default function AudioVideoManufacturingPage() {
  const router = useRouter();

  const fadeInUp: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
  };

  const staggerContainer: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const products = [
    {
      title: "Podium",
      image: "/images/Podium.png",
      // image: "/images/podium.png",
      alt: "Smart Interactive Podium",
      placeholder: "https://placehold.co/400x300/f1f5f9/cbd5e1?text=Smart+Podium",
      route: "/products/podium",
    },
    {
      title: "Touch Kiosk",
      image: "/images/Touch kiosk.png",
      alt: "Interactive Touch Kiosk",
      placeholder: "https://placehold.co/400x300/f1f5f9/cbd5e1?text=Touch+Kiosk",
      route: "/products/kiosk",
    },
    {
      title: "Standee",
      image: "/images/standee.png",
      alt: "Digital Standee",
      placeholder: "https://placehold.co/400x300/f1f5f9/cbd5e1?text=Digital+Standee",
      route: "/products/standee",
    },
    {
      title: "Touch Table",
      image: "/images/touch table.png",
      alt: "Interactive Touch Table",
      placeholder: "https://placehold.co/400x300/f1f5f9/cbd5e1?text=Touch+Table",
      route: "/products/touch-table",
    },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-slate-100/80 text-slate-900 font-sans">
      
      {/* Navbar Header */}
      {/* Navbar Header with Distinct Border and Solid BG */}
<header className="sticky top-0 z-50 w-full bg-white border-b-2 border-slate-300 shadow-md transition-all">
  <Navbar />
</header>

{/* Main Page Content - Added 'pt-20' padding top to prevent overlap */}
<main className="flex-1 relative w-full overflow-hidden pt-40 pb-10 px-4 sm:px-6 lg:px-8">
        
        {/* Background Animation Orbs */}
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

        <div className="max-w-[90rem] mx-auto w-full relative z-10 space-y-12">
          
          {/* Horizontal Product Grid (4 Columns in a Single Row) */}
          <motion.div 
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 rounded-3xl bg-[#B30E16] divide-y sm:divide-y-0 lg:divide-x divide-white/20 shadow-2xl overflow-hidden border border-red-900/20"
          >
            {products.map((product, index) => (
              <motion.div 
                key={index}
                variants={fadeInUp}
                className="p-6 flex flex-col items-center justify-between text-center min-h-[380px] group hover:bg-black/10 transition-all duration-300"
              >
                {/* Title */}
                <div className="space-y-1.5 w-full">
                  <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-slate-100 transition-colors">
                    {product.title}
                  </h3>
                </div>

                {/* Product Image Box */}
                <div className="relative w-full h-44 my-4 flex items-center justify-center bg-white/10 rounded-2xl p-2 border border-white/10 backdrop-blur-sm">
                  <Image 
                    src={product.image}
                    alt={product.alt}
                    fill
                    className="object-contain p-2 group-hover:scale-105 transition-transform duration-500 drop-shadow-xl"
                    onError={(e) => {
                      e.currentTarget.src = product.placeholder;
                    }}
                  />
                </div>

                {/* Action Button */}
                <button 
                  onClick={() => router.push(product.route)}
                  className="w-full px-5 py-3 rounded-2xl bg-white hover:bg-slate-100 text-xs font-bold text-[#B30E16] transition-all duration-300 flex items-center justify-center gap-2 shadow-lg group/btn cursor-pointer"
                >
                  <span>Explore {product.title}</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform" />
                </button>
              </motion.div>
            ))}
          </motion.div>

          {/* Bottom CTA Card */}
          <motion.div 
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
            className="rounded-3xl bg-slate-900 text-white p-8 sm:p-12 relative overflow-hidden shadow-2xl flex flex-col md:flex-row items-center justify-between gap-8"
          >
            <div className="absolute -right-20 -bottom-20 w-80 h-80 bg-[#B30E16]/30 rounded-full blur-3xl pointer-events-none" />
            
            <div className="space-y-3 relative z-10 text-center md:text-left">
              <span className="text-xs font-mono text-red-400 uppercase tracking-widest font-bold">OEM / ODM Custom Manufacturing</span>
              <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight">Need Custom AV Enclosures or High-Volume Manufacturing?</h2>
              <p className="text-sm text-slate-300 max-w-xl">
                Our hardware engineering lab produces rapid 3D prototypes, custom sheet metal cabinetry, custom logo silhouetting, and specialized port lockouts.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-4 relative z-10 shrink-0">
              <button 
                onClick={() => router.push("/contact")}
                className="px-6 py-3.5 rounded-2xl bg-[#B30E16] hover:bg-red-700 text-xs font-semibold text-white transition-all shadow-lg shadow-red-900/30 flex items-center gap-2 cursor-pointer"
              >
                <span>Schedule Engineering Call</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </motion.div>

        </div>
      </main>

      {/* Footer */}
      {/* <Footer /> */}

    </div>
  );
}