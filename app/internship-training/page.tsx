"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { motion, Variants } from "framer-motion";
import {
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  Cpu,
  GraduationCap,
  Briefcase,
  Users,
  Target,
  X,
} from "lucide-react";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";

type GalleryKey = "rust" | "app-web";

const galleryMap: Record<
  GalleryKey,
  { title: string; subtitle: string; images: string[] }
> = {
  rust: {
    title: "Rust Development",
    subtitle: "Rust training brochure",
    images: ["/images/Rust First page.png", "/images/Rust Second page.png"],
  },
  "app-web": {
    title: "App & Web Development",
    subtitle: "App and web development brochure",
    images: [
      "/images/Web App First Pamplate.png",
      "/images/Web App Second Pamplate.png",
    ],
  },
};

export default function InternshipTrainingPage() {
  const router = useRouter();
  const [selectedGallery, setSelectedGallery] = useState<GalleryKey | null>(
    null,
  );
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [isMobile, setIsMobile] = useState(false);

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
    visible: { opacity: 1, transition: { staggerChildren: 0.12 } },
  };

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (!selectedGallery || !isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentSlide((prev) => {
        const slideCount = galleryMap[selectedGallery].images.length;
        return (prev + 1) % slideCount;
      });
    }, 3200);

    return () => clearInterval(interval);
  }, [selectedGallery, isAutoPlaying]);

  const openGallery = (key: GalleryKey) => {
    setSelectedGallery(key);
    setCurrentSlide(0);
    setIsAutoPlaying(true);
  };

  const closeGallery = () => {
    setSelectedGallery(null);
    setCurrentSlide(0);
    setIsAutoPlaying(true);

    if (document.fullscreenElement) {
      document.exitFullscreen?.();
    }
  };

  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen?.();
      return;
    }

    document.exitFullscreen?.();
  };

  const goToPreviousSlide = () => {
    if (!selectedGallery) return;
    setIsAutoPlaying(false);
    setCurrentSlide((prev) => {
      const slideCount = galleryMap[selectedGallery].images.length;
      return prev === 0 ? slideCount - 1 : prev - 1;
    });
  };

  const goToNextSlide = () => {
    if (!selectedGallery) return;
    setIsAutoPlaying(false);
    setCurrentSlide((prev) => {
      const slideCount = galleryMap[selectedGallery].images.length;
      return (prev + 1) % slideCount;
    });
  };

  const selectedGalleryData = selectedGallery
    ? galleryMap[selectedGallery]
    : null;

  const heroBackground = isMobile
    ? "url('/images/internship mobile bg.png')"
    : "url('/images/internship training bg.png')";

  const programs = [
    {
      id: "rust",
      title: "Rust Development",
      route: "/internship-training/rust",
      gallery: "rust" as GalleryKey,
      image: "/images/internshiprust.png",
      // Semi-circle position transforms
      arcStyle: "lg:rotate-y-[12deg] lg:-translate-y-2 lg:scale-[0.96]",
    },
    {
      id: "web",
      title: "App & Web Development",
      route: "/app-web-development",
      gallery: "app-web" as GalleryKey,
      image: "/images/internshipappweb.png",
      arcStyle: "lg:rotate-y-[4deg] lg:-translate-y-7 lg:scale-[1.02]",
    },
    {
      id: "app",
      title: "iOS & Android App Development",
      route: "/app-web-development",
      gallery: "app-web" as GalleryKey,
      image: "/images/internshipios.png",
      arcStyle: "lg:rotate-y-[-4deg] lg:-translate-y-7 lg:scale-[1.02]",
    },
    {
      id: "languages",
      title: "Live Projects",
      route: "/internship-training/languages",
      gallery: null,
      image: "/images/internshiplive.png",
      arcStyle: "lg:rotate-y-[-12deg] lg:-translate-y-2 lg:scale-[0.96]",
    },
  ];

  return (
    <div className="relative flex h-dvh max-h-dvh w-full flex-col overflow-hidden bg-[#0A0E1A] font-sans text-slate-900">
      <div className="relative z-30 w-full shrink-0">
        <Navbar variant="category" compact />
      </div>

      {/* Main Background Image */}
      <div
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat pointer-events-none"
        style={{
          backgroundImage: heroBackground,
        }}
        aria-hidden="true"
      >
        <div className="absolute inset-0 bg-black/20" />
      </div>

      <main className="relative z-10 mx-auto flex min-h-0 w-full max-w-368 flex-1 flex-col justify-start gap-2 overflow-hidden px-3 py-1 sm:px-8 lg:gap-3 lg:px-12">
        {/* Header Section */}
        <div className="relative flex w-full shrink-0 flex-col items-center justify-between gap-2 py-1 lg:flex-row lg:py-0">
          <div className="w-full lg:w-[55%] flex flex-col justify-center space-y-2 lg:space-y-3">
            <span className="relative top-2 inline-flex items-center w-max gap-2 px-3 py-1 rounded-full text-[10px] font-bold bg-red-500/10 border border-red-500/30 text-red-400 backdrop-blur-md">
              <GraduationCap className="w-3.5 h-3.5" /> Industry-Level Live
              Project Expertise
            </span>

            <h1 className="text-2xl lg:text-4xl font-black tracking-tight leading-tight text-white drop-shadow-md">
              Learn, Build &amp; Grow with <br />
              <span className="text-[#B30E16]">Amiach Technologies</span>
            </h1>

            <div className="grid grid-cols-2 gap-x-3 gap-y-2 pt-1 sm:flex sm:flex-wrap sm:items-center sm:gap-3 lg:gap-6">
              {[
                { label: "Real Projects", icon: Target },
                { label: "Expert Mentors", icon: Users },
                { label: "Hands-on Learning", icon: Cpu },
                { label: "Career Growth", icon: Briefcase },
              ].map((item, i) => (
                <div
                  key={i}
                  className="flex min-w-0 items-center gap-1.5 text-[10px] lg:text-xs font-bold text-slate-200 drop-shadow"
                >
                  <item.icon className="w-4 h-4 text-[#FF4C4C]" /> {item.label}
                </div>
              ))}
            </div>
          </div>

          <div className="w-full lg:w-[45%] flex flex-col items-stretch justify-center lg:items-end">
            <div className="flex flex-wrap items-center justify-start gap-2 sm:gap-3 lg:justify-end">
              <Link
                href="/audio-visual-manufacturing"
                className="rounded-full border border-white/20 bg-black/40 backdrop-blur-md px-3 sm:px-4 py-2 text-[9px] sm:text-[10px] font-bold text-white transition-all duration-300 ease-out shadow-sm hover:-translate-y-0.5 hover:scale-[1.03] hover:bg-[#B30E16] hover:border-[#B30E16] hover:shadow-[0_0_18px_rgba(179,14,22,0.45)] active:translate-y-0 active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FF4C4C] focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950 motion-reduce:transition-none"
              >
                Audio Visual Manufacturing
              </Link>
              <Link
                href="/app-web-development"
                className="rounded-full border border-white/20 bg-black/40 backdrop-blur-md px-3 sm:px-4 py-2 text-[9px] sm:text-[10px] font-bold text-white transition-all duration-300 ease-out shadow-sm hover:-translate-y-0.5 hover:scale-[1.03] hover:bg-[#B30E16] hover:border-[#B30E16] hover:shadow-[0_0_18px_rgba(179,14,22,0.45)] active:translate-y-0 active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FF4C4C] focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950 motion-reduce:transition-none"
              >
                App &amp; Web Development
              </Link>
            </div>
          </div>
        </div>

        {/* 3D Showcase Pods Grid (Shifted Upward, Direct Inclined Text Overlay) */}
        <div className="relative flex min-h-0 w-full flex-1 items-center justify-center overflow-hidden perspective-distant">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="grid h-full w-full grid-cols-2 grid-rows-2 items-center justify-center gap-1.5 sm:gap-6 lg:grid-cols-4 lg:grid-rows-1"
          >
            {programs.map((prog) => (
              <motion.div
                key={prog.id}
                variants={fadeInUp}
                onClick={() => {
                  if (prog.gallery) {
                    openGallery(prog.gallery);
                  } else {
                    router.push(prog.route);
                  }
                }}
                className={`relative group flex h-full min-h-0 cursor-pointer flex-col items-center justify-center rounded-2xl p-1 text-center transition-all duration-500 ease-out sm:p-4 ${prog.arcStyle}`}
              >
                {/* Product Image Showcase Pod */}
                <div className="absolute inset-0 z-0 flex items-center justify-center">
                  <div className="relative h-full w-full -translate-y-1 transition-transform duration-500 group-hover:scale-105 sm:translate-y-0">
                    <Image
                      src={prog.image}
                      alt={prog.title}
                      fill
                      priority
                      sizes="(max-width: 639px) 48vw, (max-width: 1023px) 44vw, 25vw"
                      className="object-contain p-1 sm:p-2 filter "
                      //"object-contain p-1 sm:p-2 filter drop-shadow-[0_10px_20px_rgba(0,0,0,0.5)]"
                    />
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </main>

      {/* Footer Banner */}
      <motion.div
        variants={fadeInUp}
        initial="hidden"
        animate="visible"
        className="relative z-20 flex w-full shrink-0 items-center py-2"
      >
        <div className="relative z-10 flex w-full flex-col items-start justify-between gap-1.5 px-4 sm:flex-row sm:items-center sm:gap-4 sm:px-6 lg:px-12">
          <h2 className="text-xs font-bold text-white tracking-tight leading-snug sm:text-sm lg:text-base">
            Looking for Dedicated Corporate or on-campus workshops?
          </h2>

          <button
            onClick={() => router.push("/contact")}
            className="shrink-0 bg-[#B30E16] hover:bg-red-600 text-white px-3 py-1.5 rounded-full text-[9px] font-bold transition-all duration-300 shadow-[0_0_15px_rgba(255,76,76,0.3)] flex items-center gap-1.5 cursor-pointer whitespace-nowrap"
          >
            Request Details <ArrowRight className="w-3 h-3" />
          </button>
        </div>
      </motion.div>

      <div className="relative z-30 w-full shrink-0">
        <Footer className="relative w-full py-2!" />
      </div>

      {/* Gallery Modal */}
      {selectedGalleryData && (
        <div className="fixed inset-0 z-70 flex items-center justify-center p-3 sm:p-5">
          <div className="absolute inset-0 bg-black/70 backdrop-blur-md" />

          <div
            className="relative z-10 w-full max-w-6xl overflow-hidden rounded-3xl bg-transparent shadow-none"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              type="button"
              aria-label="Close gallery"
              onClick={closeGallery}
              className="absolute right-4 top-4 z-20 rounded-full border border-white/15 bg-black/40 p-2 text-white transition hover:bg-white/10"
            >
              <X className="h-5 w-5" />
            </button>

            <div className="relative h-[80vh] w-full bg-transparent">
              <button
                type="button"
                aria-label="Previous image"
                onClick={goToPreviousSlide}
                className="absolute left-3 top-1/2 z-10 -translate-y-1/2 rounded-full border border-white/15 bg-black/35 p-3 text-white transition hover:bg-black/50"
              >
                <ChevronLeft className="h-6 w-6" />
              </button>

              <button
                type="button"
                aria-label="Next image"
                onClick={goToNextSlide}
                className="absolute right-3 top-1/2 z-10 -translate-y-1/2 rounded-full border border-white/15 bg-black/35 p-3 text-white transition hover:bg-black/50"
              >
                <ChevronRight className="h-6 w-6" />
              </button>

              <div
                className="relative h-full w-full cursor-pointer"
                onClick={() => setIsAutoPlaying(false)}
                onDoubleClick={toggleFullscreen}
              >
                <Image
                  src={selectedGalleryData.images[currentSlide]}
                  alt={selectedGalleryData.title}
                  fill
                  priority
                  sizes="100vw"
                  className="object-contain p-4 sm:p-6 md:p-8"
                />
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
