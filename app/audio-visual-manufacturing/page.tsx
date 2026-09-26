"use client";

import React from "react";
import Link from "next/link";
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
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  const staggerContainer: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
      },
    },
  };

  const products = [
    {
      title: "DIGITAL PODIUM",
      description:
        "Interactive podiums for meetings, events and presentations.",
      image: "/images/Podium.png",
      alt: "Smart Interactive Podium",
      placeholder:
        "https://placehold.co/400x600/transparent/white?text=Smart+Podium",
      route: "/products/podium",
      imageWidth: 480,
      imageHeight: 680,
      imageMaxWidth: "110%",
      imageMaxHeight: "100%",
      containerHeight: "390px", // Increased container height
      marginTop: "-25px", // Applied to inline styles directly
      marginLeft: "-50px", // Applied to inline styles directly
      mobileImageHeight: "h-[210px] lg:h-[390px]",
      textPosition: "lg:top-[28%] lg:left-[34%]",
    },
    {
      title: "TOUCH KIOSK",
      description:
        "Self-service kiosks for faster, smarter and hassle-free interactions.",
      image: "/images/Touch%20Kiosk.png",
      alt: "Interactive Touch Kiosk",
      placeholder:
        "https://placehold.co/400x600/transparent/white?text=Touch+Kiosk",
      route: "/products/kiosk",
      imageWidth: 430,
      imageHeight: 590,
      imageMaxWidth: "100%",
      imageMaxHeight: "94%",
      containerHeight: "350px",
      marginTop: "0px",
      marginLeft: "0px",
      mobileImageHeight: "h-[190px] lg:h-[350px]",
      textPosition: "lg:top-[34%] lg:left-[42%]",
    },
    {
      title: "STANDEE",
      description:
        "Digital standees for high-impact advertising and information.",
      image: "/images/standee.png",
      alt: "Digital Standee",
      placeholder:
        "https://placehold.co/400x600/transparent/white?text=Digital+Standee",
      route: "/products/standee",
      imageWidth: 540,
      imageHeight: 760,
      imageMaxWidth: "125%",
      imageMaxHeight: "110%",
      containerHeight: "380px",
      marginTop: "0px",
      marginLeft: "0px",
      mobileImageHeight: "h-[210px] lg:h-[380px]",
      textPosition: "lg:top-[25%] lg:left-[44%]",
    },
    {
      title: "TOUCH TABLE",
      description:
        "Interactive touch tables for immersive and collaborative experiences.",
      image: "/images/touch table.png",
      alt: "Interactive Touch Table",
      placeholder:
        "https://placehold.co/600x400/transparent/white?text=Touch+Table",
      route: "/products/touch-table",
      imageWidth: 620,
      imageHeight: 420,
      imageMaxWidth: "100%",
      imageMaxHeight: "92%",
      containerHeight: "290px",
      marginTop: "0px",
      marginLeft: "0px",
      mobileImageHeight: "h-[150px] lg:h-[290px]",
      textPosition: "lg:top-[48%] lg:left-[40%]",
    },
  ];

  return (
    <div className="relative flex min-h-screen w-full flex-col justify-between overflow-x-hidden bg-slate-950 font-sans text-white lg:h-screen lg:overflow-hidden">
      {/* 1. Background Image Base */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/bg%20for%20Audio%20Visual.png"
          alt="Audio Visual Background"
          fill
          priority
          className="pointer-events-none hidden object-cover object-center lg:block"
        />
        <Image
          src="/images/audio%20visual%20bg.png"
          alt="Audio Visual Mobile Background"
          fill
          priority
          className="pointer-events-none object-cover object-center lg:hidden"
        />
        <div className="absolute inset-0 bg-black/15" />
      </div>

      {/* 2. Navbar */}
      <div className="relative z-30 w-full">
        <Navbar variant="category" compact />
      </div>

      {/* 3. Hero Content Section */}
      <main className="relative z-10 flex-1 flex flex-col justify-between px-4 sm:px-8 lg:px-14 pt-1 pb-2 w-full max-w-[100rem] mx-auto overflow-y-auto lg:overflow-visible">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between lg:pr-3">
          <div className="max-w-xl space-y-1 mt-1 sm:mt-2">
            <p className="text-[9px] sm:text-[11px] font-bold tracking-[0.25em] text-slate-300 uppercase">
              Interactive Solutions for a Smarter Tomorrow
            </p>
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight uppercase">
              OUR{" "}
              <span className="text-[#00f1fede] drop-shadow-[0_0_15px_rgba(0,242,254,0.8)]">
                PRODUCTS
              </span>
            </h1>
            <p className="text-[11px] sm:text-xs lg:text-sm text-slate-200 font-light leading-relaxed max-w-md hidden sm:block">
              Explore our range of interactive digital solutions designed to
              engage, inform and elevate your brand experience.
            </p>
          </div>

          <div className="flex flex-col items-start gap-2 sm:items-end">
            <Link
              href="/internship-training"
              className="rounded-full border border-[#00F2FE]/60 bg-black/35 px-3 py-2 text-[9px] font-bold uppercase tracking-[0.2em] text-cyan-300 transition-all duration-300 hover:bg-[#00F2FE] hover:text-black backdrop-blur-sm shadow-[0_0_12px_rgba(0,242,254,0.25)]"
            >
              Internship Training
            </Link>
            <Link
              href="/app-web-development"
              className="inline-flex items-center justify-center rounded-full border border-[#00F2FE]/60 bg-black/35 px-3 py-2 text-[9px] font-bold uppercase tracking-[0.2em] text-cyan-300 transition-all duration-300 hover:bg-[#00F2FE] hover:text-black backdrop-blur-sm shadow-[0_0_12px_rgba(0,242,254,0.25)]"
            >
              App &amp; Web Development
            </Link>
          </div>
        </div>

        {/* 4. Products Grid */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
          className="my-auto grid h-auto w-full grid-cols-2 items-start gap-4 sm:gap-6 lg:h-full lg:max-h-[62vh] lg:grid-cols-4 lg:gap-4"
        >
          {products.map((product, index) => (
            <motion.div
              key={index}
              variants={fadeInUp}
              className="relative group flex flex-col items-center justify-start h-full w-full"
            >
              {/* Product Image Container */}
              <div
                className={`relative flex w-full items-center justify-center transition-transform duration-500 group-hover:scale-105 ${product.mobileImageHeight}`}
                style={{
                  width: "100%",
                  marginTop: product.marginTop,
                  marginLeft: product.marginLeft,
                }}
              >
                <Image
                  src={product.image}
                  alt={product.alt}
                  width={product.imageWidth}
                  height={product.imageHeight}
                  className="scale-[1.15] drop-shadow-[0_25px_35px_rgba(0,0,0,0.85)] sm:scale-[1.2] lg:scale-[1.25]"
                  style={{
                    width: "100%",
                    height: "100%",
                    maxWidth: product.imageMaxWidth,
                    maxHeight: product.imageMaxHeight,
                    objectFit: "contain",
                    objectPosition: "center",
                  }}
                  onError={(e) => {
                    e.currentTarget.src = product.placeholder;
                  }}
                />
              </div>

              {/* Text Pointer Line & Details */}
              <div
                className={`static lg:absolute ${product.textPosition} z-20 flex items-center gap-2 mt-2 lg:mt-0 w-full lg:w-max max-w-[200px]`}
              >
                <div className="hidden lg:flex items-center">
                  <span className="w-2 h-2 rounded-full bg-[#00F2FE] shadow-[0_0_8px_#00F2FE]" />
                  <span className="w-6 h-[1px] bg-[#00F2FE]/70" />
                </div>

                <div className="text-left space-y-1">
                  <h3 className="text-xs sm:text-sm lg:text-base font-extrabold text-white tracking-wider uppercase drop-shadow-md">
                    {product.title}
                  </h3>
                  <p className="text-[10px] sm:text-[11px] text-slate-200 font-light leading-snug drop-shadow-sm max-w-[170px]">
                    {product.description}
                  </p>

                  <button
                    onClick={() => router.push(product.route)}
                    className="mt-1.5 px-3 py-1 rounded-full border border-[#00F2FE]/60 bg-black/40 hover:bg-[#00F2FE] hover:text-black text-cyan-300 text-[10px] sm:text-[11px] font-bold tracking-wider transition-all duration-300 flex items-center gap-1.5 cursor-pointer backdrop-blur-sm shadow-[0_0_12px_rgba(0,242,254,0.25)]"
                  >
                    <span>EXPLORE</span>
                    <ArrowRight className="w-3 h-3" />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </main>

      {/* 5. Footer */}
      <div className="relative z-30 w-full">
        <Footer />
      </div>
    </div>
  );
}
