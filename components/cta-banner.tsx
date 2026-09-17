"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";

export function CtaBanner() {
  return (
    <section className="relative w-full py-24 px-4 sm:px-6 lg:px-12 bg-[#08090B] overflow-hidden border-t border-white/5">
      {/* Red ambient background glow */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#FF2B35]/5 to-transparent pointer-events-none" />

      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.98, y: 20 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="relative rounded-3xl p-8 sm:p-12 lg:p-16 bg-gradient-to-br from-[#14151B] via-[#0F1014] to-[#16171E] border border-white/10 shadow-2xl overflow-hidden text-center sm:text-left flex flex-col lg:flex-row items-center justify-between gap-8"
        >
          {/* Decorative Corner Accent */}
          <div className="absolute top-0 right-0 w-48 h-48 bg-[#FF2B35]/15 rounded-full blur-3xl pointer-events-none" />

          <div className="max-w-2xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FF2B35]/10 border border-[#FF2B35]/20 text-[#FF2B35] text-xs font-bold uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Bespoke Hardware Manufacturing</span>
            </div>

            <h3 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight font-display uppercase leading-tight">
              Ready to elevate your modern space?
            </h3>

            <p className="text-sm sm:text-base text-zinc-300 font-light leading-relaxed">
              Consult with our AV engineering specialists to create custom multi-touch interactive displays, architectural kiosks, or turnkey executive meeting systems.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-4 flex-shrink-0 w-full sm:w-auto">
            <Link
              href="/contact"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full bg-[#FF2B35] hover:bg-[#E0202A] text-white font-bold text-sm tracking-wide shadow-xl shadow-[#FF2B35]/30 transition-all transform hover:-translate-y-0.5 active:translate-y-0"
            >
              <span>Schedule Consultation</span>
              <ArrowRight className="w-4 h-4" />
            </Link>

            <Link
              href="/#products"
              className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-4 rounded-full bg-white/5 hover:bg-white/10 border border-white/15 text-zinc-300 hover:text-white font-medium text-sm transition-colors"
            >
              Browse Catalog
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
