"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { motion, Variants } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";

interface Product {
  title: string;
  description: string;
  image: string;
  alt: string;
  placeholder: string;
  route: string;
  arcStyle: string;
  imageWidth: number;
  imageHeight: number;
  imageMaxWidth: string;
  imageMaxHeight: string;
  marginTop: string;
  marginLeft: string;
  mobileMarginTop: string;
  mobileMarginLeft: string;
  mobileImageHeight: string;
  textPosition: string;
  mobileTextPosition: string;
  mobileTextAlign: string;
  disableContainerHover?: boolean;
  titleClass?: string;
  descClass?: string;
  containerClass?: string;
  buttonClass?: string;
}

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

const products: Product[] = [
  {
    title: "DIGITAL PODIUM",
    description:
      "Interactive podiums for meetings, events and presentations.",
    image: "/images/digital%20podium.png",
    alt: "Smart Interactive Podium",
    placeholder:
      "https://placehold.co/400x600/transparent/white?text=Smart+Podium",
    route: "/products/podium",
    arcStyle: "lg:-translate-y-10 lg:-translate-x-8 lg:translate-z-[-10px] lg:scale-[0.92]",
    disableContainerHover: true, // Shivering/flickering band karne ke liye add kiya hai
    imageWidth: 480,
    imageHeight: 680,
    imageMaxWidth: "110%",
    imageMaxHeight: "100%",
    marginTop: "-55px",
    marginLeft: "-80px",
    mobileMarginTop: "0px",
    mobileMarginLeft: "0px",
    mobileImageHeight: "h-[210px] lg:h-[390px]",
    textPosition: "lg:top-[58%] lg:left-[73%]",
    mobileTextPosition: "relative top-0 left-0",
    mobileTextAlign: "items-center text-center lg:items-start lg:text-left",
  },

  {
    title: "TOUCH KIOSK",
    description:
      "Self-service kiosks for faster, smarter and hassle-free interactions.",
    image: "/images/Digital%20Kiosk.png",
    alt: "Interactive Touch Kiosk",
    placeholder:
      "https://placehold.co/400x600/transparent/white?text=Touch+Kiosk",
    route: "/products/kiosk",
    arcStyle:
      "lg:-translate-y-24 lg:translate-z-[-120px] lg:scale-[0.76]",
    disableContainerHover: true,
    imageWidth: 540,
    imageHeight: 760,
    imageMaxWidth: "125%",
    imageMaxHeight: "110%",
    marginTop: "-25px",
    marginLeft: "0px",
    mobileMarginTop: "10px",
    mobileMarginLeft: "0px",
    mobileImageHeight: "h-[260px] lg:h-[450px]",
    textPosition: "lg:top-[77%] lg:left-[45%]",
    mobileTextPosition: "relative top-0 left-0",
    mobileTextAlign: "items-center text-center lg:items-start lg:text-left",
    titleClass: "text-base sm:text-lg lg:text-xl font-black",
    descClass: "text-xs sm:text-sm font-normal max-w-[220px]",
    containerClass: "max-w-[250px]",
    buttonClass: "px-3.5 py-1.5 text-xs",
  },

  {
    title: "DIGITAL STANDEE",
    description:
      "Digital standees for high-impact advertising and information.",
    image: "/images/Digital%20Standee.png",
    alt: "Digital Standee",
    placeholder:
      "https://placehold.co/400x600/transparent/white?text=Digital+Standee",
    route: "/products/standee",
    arcStyle:
      "lg:-translate-y-24 lg:translate-z-[-120px] lg:scale-[0.76]",
    disableContainerHover: true,
    imageWidth: 540,
    imageHeight: 760,
    imageMaxWidth: "125%",
    imageMaxHeight: "110%",
    marginTop: "-25px",
    marginLeft: "0px",
    mobileMarginTop: "-110px",
    mobileMarginLeft: "0px",
    mobileImageHeight: "h-[210px] lg:h-[380px]",
    textPosition: "lg:top-[78%] lg:left-[44%]",
    mobileTextPosition: "relative -top-6 left-0",
    mobileTextAlign: "items-center text-center lg:items-start lg:text-left",
    titleClass: "text-base sm:text-lg lg:text-xl font-black",
    descClass: "text-xs sm:text-sm font-normal max-w-[220px]",
    containerClass: "max-w-[250px]",
    buttonClass: "px-3.5 py-1.5 text-xs",
  },

  {
    title: "TOUCH TABLE",
    description:
      "Interactive touch tables for immersive and collaborative experiences.",
    image: "/images/touch%20table.png",
    alt: "Interactive Touch Table",
    placeholder:
      "https://placehold.co/600x400/transparent/white?text=Touch+Table",
    route: "#touch-table",
    arcStyle: "lg:-translate-y-4 lg:translate-z-[-10px] lg:scale-[0.92]",
    disableContainerHover: true, // Shivering/flickering band karne ke liye add kiya hai
    imageWidth: 620,
    imageHeight: 420,
    imageMaxWidth: "100%",
    imageMaxHeight: "92%",
    marginTop: "-25px",
    marginLeft: "0px",
    mobileMarginTop: "-10px",
    mobileMarginLeft: "0px",
    mobileImageHeight: "h-[150px] lg:h-[290px]",
    textPosition: "lg:top-[49%] lg:left-[20%]",
    mobileTextPosition: "relative top-0 left-0",
    mobileTextAlign: "items-center text-center lg:items-start lg:text-left",
  },
];
  const [imgSources, setImgSources] = useState<Record<string, string>>(() =>
    products.reduce((acc, p) => ({ ...acc, [p.route]: p.image }), {}),
  );

  return (
    <div className="relative flex h-screen w-full flex-col overflow-hidden bg-slate-950 font-sans text-white">
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

      <div className="relative z-30 w-full">
        <Navbar variant="category" compact />
      </div>

      <main className="relative z-10 flex min-h-0 flex-1 flex-col justify-between px-4 sm:px-8 lg:px-14 pt-4 pb-2 w-full max-w-[100rem] mx-auto overflow-hidden">
        <div className="flex flex-row items-start justify-between gap-2 lg:pr-3">
          <div className="max-w-xl space-y-1 mt-1 sm:mt-2 -translate-y-3 sm:-translate-y-4 lg:-translate-y-6">
            <p className="text-[9px] sm:text-[11px] font-bold tracking-[0.25em] text-slate-300 uppercase">
              Interactive Solutions for a Smarter Tomorrow
            </p>

            <h1 className="text-2xl sm:text-4xl lg:text-5xl font-black tracking-tight uppercase">
              OUR{" "}
              <span className="text-[#00f1fede] drop-shadow-[0_0_15px_rgba(0,242,254,0.8)]">
                PRODUCTS
              </span>
            </h1>
          </div>

          <div className="flex flex-col items-end gap-2 shrink-0 -translate-y-3 sm:-translate-y-4 lg:-translate-y-6 mt-3">
            <Link
              href="/internship-training"
              className="rounded-full border border-[#00F2FE]/60 bg-black/35 px-3 py-2 text-[9px] font-bold uppercase tracking-[0.2em] text-cyan-300 transition-all duration-300 hover:bg-[#00F2FE] hover:text-black backdrop-blur-sm shadow-[0_0_12px_rgba(0,242,254,0.25)] text-right"
            >
              Internship Training
            </Link>

            <Link
              href="/business-automation"
              className="inline-flex items-center justify-center rounded-full border border-[#00F2FE]/60 bg-black/35 px-3.5 py-2 text-[9px] sm:text-[10px] font-bold uppercase tracking-[0.2em] text-cyan-300 transition-all duration-300 hover:bg-[#00F2FE] hover:text-black backdrop-blur-sm shadow-[0_0_12px_rgba(0,242,254,0.25)] text-right"
            >
              Business Automation
            </Link>

            <Link
              href="/app-web-development"
              className="inline-flex items-center justify-center rounded-full border border-[#00F2FE]/60 bg-black/35 px-3 py-2 text-[9px] font-bold uppercase tracking-[0.2em] text-cyan-300 transition-all duration-300 hover:bg-[#00F2FE] hover:text-black backdrop-blur-sm shadow-[0_0_12px_rgba(0,242,254,0.25)] text-right"
            >
              App &amp; Web Development
            </Link>
          </div>
        </div>

        <motion.div
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
          className="my-auto grid h-auto w-full grid-cols-2 items-start gap-4 sm:gap-6 lg:h-full lg:max-h-[52vh] lg:grid-cols-4 lg:gap-4 -translate-y-5 sm:-translate-y-6 lg:-translate-y-10 lg:perspective-distant lg:transform-3d"
        >
          {products.map((product, index) => (
            <motion.div
              key={index}
              variants={fadeInUp}
              className={`relative group flex flex-col items-center justify-start h-full w-full transition-transform duration-500 lg:transform-3d ${product.arcStyle}`}
            >
              <div
                onClick={() => router.push(product.route)}
                className={`relative flex w-full cursor-pointer items-center justify-center transition-transform duration-500 ${
                  product.disableContainerHover ? "" : "group-hover:scale-105"
                } ${product.mobileImageHeight}`}
                style={
                  {
                    "--mobile-margin-top":
                      product.mobileMarginTop || product.marginTop,
                    "--mobile-margin-left":
                      product.mobileMarginLeft || product.marginLeft,
                    "--desktop-margin-top": product.marginTop,
                    "--desktop-margin-left": product.marginLeft,
                    marginTop: "var(--margin-top)",
                    marginLeft: "var(--margin-left)",
                  } as React.CSSProperties
                }
              >
                <Image
                  src={imgSources[product.route] || product.image}
                  alt={product.alt}
                  width={product.imageWidth}
                  height={product.imageHeight}
                  sizes="(max-width: 639px) 46vw, (max-width: 1023px) 42vw, 25vw"
                  className="scale-[0.9] drop-shadow-[0_25px_35px_rgba(0,0,0,0.85)] transition-transform duration-500 ease-out group-hover:scale-[1.08] sm:scale-[0.95] lg:scale-[0.9]"
                  style={{
                    width: "100%",
                    height: "100%",
                    maxWidth: product.imageMaxWidth,
                    maxHeight: product.imageMaxHeight,
                    objectFit: "contain",
                    objectPosition: "center",
                  }}
                  onError={() => {
                    setImgSources((prev) => ({
                      ...prev,
                      [product.route]: product.placeholder,
                    }));
                  }}
                />
              </div>

              <div
                className={`${product.mobileTextPosition} ${product.textPosition} lg:absolute z-30 pointer-events-auto flex items-center gap-2 mt-2 lg:mt-0 w-full lg:w-max transform-[translateZ(50px)] ${
                  product.containerClass || "max-w-50"
                }`}
              >
                <div className="hidden lg:flex items-center pointer-events-none">
                  <span className="w-2 h-2 rounded-full bg-[#00F2FE] shadow-[0_0_8px_#00F2FE]" />
                  <span className="w-6 h-px bg-[#00F2FE]/70" />
                </div>

                <div
                  className={`flex flex-col ${product.mobileTextAlign} space-y-1 w-full`}
                >
                  <h3
                    className={`tracking-wider uppercase text-white ${
                      product.titleClass ||
                      "text-xs sm:text-sm lg:text-base font-extrabold"
                    }`}
                  >
                    {product.title}
                  </h3>

                  <p
                    className={`text-white leading-snug ${
                      product.descClass ||
                      "text-[10px] sm:text-[11px] font-light max-w-42.5"
                    }`}
                  >
                    {product.description}
                  </p>

                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      router.push(product.route);
                    }}
                    className={`relative z-40 mt-1.5 rounded-full border border-[#00F2FE]/60 bg-black/40 hover:bg-[#00F2FE] hover:text-black text-cyan-300 font-bold tracking-wider transition-all duration-300 flex items-center gap-1.5 cursor-pointer backdrop-blur-sm shadow-[0_0_12px_rgba(0,242,254,0.25)] ${
                      product.buttonClass ||
                      "px-3 py-1 text-[10px] sm:text-[11px]"
                    }`}
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

      <div className="relative z-30 shrink-0">
        <Footer />
      </div>
    </div>
  );
}
