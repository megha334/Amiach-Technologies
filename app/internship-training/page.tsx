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
  Globe,
  Smartphone,
  Terminal,
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

  const fadeInUp: Variants = {
    hidden: { opacity: 0, y: 15 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4, ease: "easeOut" },
    },
  };

  const staggerContainer: Variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
  };

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

  const programs = [
    {
      id: "rust",
      title: "Rust Development",
      desc: "Industry-level live project expertise covering 4 levels and Capstones.",
      icon: <Cpu className="w-6 h-6 text-white" />,
      bg: "bg-gradient-to-br from-[#9B111E] to-[#500000]",
      route: "/internship-training/rust",
      gallery: "rust" as GalleryKey,
    },
    {
      id: "web",
      title: "App & Web Development",
      desc: "Master modern full-stack web architectures, APIs, and microservices.",
      icon: <Globe className="w-6 h-6 text-white" />,
      bg: "bg-gradient-to-br from-[#0033A0] to-[#001040]",
      route: "/app-web-development",
      gallery: "app-web" as GalleryKey,
    },
    {
      id: "app",
      title: "iOS & Android App Development",
      desc: "High-performance cross-platform mobile apps for iOS and Android.",
      icon: <Smartphone className="w-6 h-6 text-white" />,
      bg: "bg-gradient-to-br from-[#5A2D81] to-[#200040]",
      route: "/app-web-development",
      gallery: "app-web" as GalleryKey,
    },
    {
      id: "languages",
      title: "Live Projects",
      desc: "Deep dive into Language Fundamentals, DSA, memory management.",
      icon: <Terminal className="w-6 h-6 text-white" />,
      bg: "bg-gradient-to-br from-[#007A33] to-[#003010]",
      route: "/internship-training/languages",
      gallery: null,
    },
  ];

  return (
    <div className="relative flex min-h-screen w-full flex-col overflow-x-hidden bg-[#F3F7FF] font-sans text-slate-900 lg:h-screen lg:overflow-hidden">
      <div className="relative z-30 w-full shrink-0">
        <Navbar variant="category" compact />
      </div>

      <div
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat pointer-events-none"
        style={{ backgroundImage: "url('/images/bg for internship training.png')" }}
        aria-hidden="true"
      >
        <div className="absolute inset-0 bg-black/15" />
      </div>

      <main className="relative z-10 flex-1 flex flex-col justify-between w-full max-w-[90rem] mx-auto px-4 sm:px-8 lg:px-12 pt-1 lg:pt-2 pb-3 lg:pb-5 min-h-0 gap-3">
        <div className="relative flex w-full flex-col items-center justify-between gap-4 py-3 lg:h-[35%] lg:flex-row lg:py-0">
          <div className="w-full lg:w-[55%] flex flex-col justify-center space-y-3 lg:space-y-4">
            <span className="inline-flex items-center w-max gap-2 px-3 py-1 rounded-full text-[10px] font-bold bg-red-100/80 border border-red-200 text-[#B30E16]">
              <GraduationCap className="w-3.5 h-3.5" /> Industry-Level Live
              Project Expertise
            </span>

            <h1 className="text-2xl lg:text-4xl font-black tracking-tight leading-tight">
              Learn, Build &amp; Grow with <br />
              <span className="text-[#B30E16]">Amiach Technologies</span>
            </h1>

            <div className="flex items-center gap-2 lg:gap-6 pt-0">
              {[
                { label: "Real Projects", icon: Target },
                { label: "Expert Mentors", icon: Users },
                { label: "Hands-on Learning", icon: Cpu },
                { label: "Career Growth", icon: Briefcase },
              ].map((item, i) => (
                <div
                  key={i}
                  className="flex items-center gap-1.5 text-[10px] lg:text-xs font-bold text-slate-700"
                >
                  <item.icon className="w-4 h-4 text-[#B30E16]" /> {item.label}
                </div>
              ))}
            </div>
          </div>

          <div className="w-full lg:w-[45%] h-full flex flex-col items-end justify-center relative">
            <div className="flex items-center gap-3 absolute top-0 right-0 z-20">
              <Link
                href="/audio-visual-manufacturing"
                className="rounded-full border border-slate-300 bg-white/50 px-4 py-2 text-[10px] font-bold text-slate-700 hover:bg-[#B30E16] hover:text-white hover:border-[#B30E16] transition-all shadow-sm"
              >
                Audio Visual Manufacturing
              </Link>
              <Link
                href="/app-web-development"
                className="rounded-full border border-slate-300 bg-white/50 px-4 py-2 text-[10px] font-bold text-slate-700 hover:bg-[#B30E16] hover:text-white hover:border-[#B30E16] transition-all shadow-sm"
              >
                App &amp; Web Development
              </Link>
            </div>
          </div>
        </div>

        <motion.div
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
          className="grid w-full grid-cols-1 gap-4 sm:grid-cols-2 lg:h-[45%] lg:grid-cols-4"
        >
          {programs.map((prog) => (
            <motion.div
              key={prog.id}
              variants={fadeInUp}
              onClick={() => {
                if (prog.gallery) openGallery(prog.gallery);
              }}
              className={`${prog.bg} rounded-3xl p-5 flex flex-col justify-between text-white relative overflow-hidden group cursor-pointer shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300 ${prog.id === "web" || prog.id === "app" ? "lg:scale-y-[1.04]" : ""}`}
            >
              <div className="absolute -right-4 -top-4 opacity-10 scale-150 pointer-events-none">
                {prog.icon}
              </div>

              <div
                className={
                  prog.id === "web" || prog.id === "app"
                    ? "lg:-translate-y-1"
                    : ""
                }
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 shrink-0 rounded-xl bg-white/10 flex items-center justify-center backdrop-blur-sm border border-white/20">
                    {prog.icon}
                  </div>
                  <h3 className="text-lg lg:text-xl font-bold drop-shadow-sm">
                    {prog.title}
                  </h3>
                </div>
                <p className="text-[10px] lg:text-xs text-white/80 leading-relaxed font-medium line-clamp-3">
                  {prog.desc}
                </p>
              </div>

              <button
                type="button"
                onClick={(event) => {
                  event.stopPropagation();
                  if (prog.gallery) {
                    openGallery(prog.gallery);
                    return;
                  }
                  router.push(prog.route);
                }}
                className={`w-auto mx-1 mt-4 bg-white/10 hover:bg-white text-white hover:text-slate-900 border border-white/20 py-2.5 rounded-full text-[10px] lg:text-xs font-bold transition-colors flex items-center justify-center gap-2 backdrop-blur-sm ${prog.id === "web" || prog.id === "app" ? "lg:-translate-y-1" : ""}`}
              >
                Explore Curriculum <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </motion.div>
          ))}
        </motion.div>
      </main>

      <motion.div
        variants={fadeInUp}
        initial="hidden"
        animate="visible"
        className="relative z-20 flex w-full shrink-0 items-center overflow-hidden border-y border-slate-800 bg-[#101b3b] py-6 lg:h-[18%] lg:py-0"
      >
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[#B30E16]/10 blur-3xl pointer-events-none" />

        <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between w-full max-w-360 mx-auto px-6 lg:px-12 gap-6 lg:gap-8">
          <div className="flex-1 space-y-1 text-left">
            <span className="text-[9px] font-bold text-[#FF4C4C] uppercase tracking-wider block">
              Career Advancement &amp; Mentorship
            </span>
            <h2 className="text-base lg:text-lg font-bold text-white tracking-tight leading-snug">
              Looking for Dedicated{" "}
              <span className="text-[#FF4C4C]">Corporate</span> or{" "}
              <br className="hidden lg:block" />
              On-Campus Workshops?
            </h2>
          </div>

          <div className="flex-1 flex items-center border-l-0 lg:border-l border-white/10 lg:pl-6 gap-3">
            <Users className="w-6 h-6 text-white/50 shrink-0 hidden sm:block" />
            <p className="text-[10px] lg:text-xs text-slate-300 font-medium leading-relaxed">
              Get custom live mentorship, dedicated batch scheduling, and
              hands-on capstone engineering guidance for your team or
              institution.
            </p>
          </div>

          <div className="shrink-0 flex items-center justify-end w-full lg:w-auto">
            <button
              onClick={() => router.push("/contact")}
              className="bg-[#FF4C4C] hover:bg-red-600 text-white px-6 py-3 rounded-full text-xs font-bold transition-all duration-300 shadow-[0_0_15px_rgba(255,76,76,0.3)] flex items-center gap-2 cursor-pointer whitespace-nowrap"
            >
              Request Details <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </motion.div>

      <div className="relative z-30 w-full shrink-0">
        <Footer />
      </div>

      {selectedGalleryData && (
        <div className="fixed inset-0 z-[70] flex items-center justify-center p-3 sm:p-5">
          <div className="absolute inset-0 bg-black/30 backdrop-blur-sm" />

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
