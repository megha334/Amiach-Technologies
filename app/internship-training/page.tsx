"use client";

import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { motion, Variants } from "framer-motion";
import {
  Cpu,
  Globe,
  Smartphone,
  Terminal,
  ArrowRight,
  Sparkles,
  CheckCircle2,
  Clock,
  Search,
  ArrowLeft,
  X,
} from "lucide-react";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";

// --- RUST COURSE DATA ---
const RUST_LEVELS = [
  {
    id: 1,
    title: "LEVEL 1 — RUST FUNDAMENTALS",
    subtitle: "Goal: A developer new to Rust can write safe programs and understand ownership.",
    duration: "4–6 weeks",
    outcome: "Write safe, idiomatic Rust",
    badge: "Core Curriculum",
    modules: [
      {
        num: 1,
        title: "Rust & Tooling",
        desc: "Why Rust vs C/C++, Go, Java and TypeScript, rustup, cargo, rustc, crates, Cargo.toml, rustfmt and clippy.",
      },
      {
        num: 2,
        title: "Language Basics",
        desc: "Variables, mutability, primitives, tuples, arrays, functions, expressions, if / match, while and for loops.",
      },
      {
        num: 3,
        title: "Ownership",
        desc: "The core module. Stack vs heap, moves, Copy types, borrowing, references, lifetimes, while and compiler errors.",
      },
      {
        num: 4,
        title: "Structs & Enums",
        desc: "Structs, methods, associated functions, enums, pattern matching, Option, Result, if let and while let.",
      },
      {
        num: 5,
        title: "Collections",
        desc: "Vec, String and &str, HashMap, HashSet, iteration and slices — the everyday standard-library toolkit.",
      },
      {
        num: 6,
        title: "Errors, Traits, Modules",
        desc: "? operator, custom errors, panic vs recoverable errors. Generics, traits, bounds. Modules, pub, crates, workspaces.",
      },
    ],
    projects: [
      "CLI Calculator",
      "CLI Todo Application",
      "File / Text Analyzer",
      "Expense Tracker CLI",
    ],
  },
  {
    id: 2,
    title: "LEVEL 2 — INTERMEDIATE / PROFESSIONAL",
    subtitle: "Goal: Build maintainable, tested, asynchronous, production-style Rust applications.",
    duration: "6–8 weeks",
    outcome: "Build production applications",
    badge: "Core Curriculum",
    modules: [
      {
        num: 1,
        title: "Advanced Rust",
        desc: "Lifetimes and elision, associated types, trait objects, dyn Trait, impl Trait, Box and smart pointers.",
      },
      {
        num: 2,
        title: "Iterators & FP",
        desc: "map, filter, fold, collect. Closures: Fn, FnMut, FnOnce. Designing clean iterator pipelines.",
      },
      {
        num: 3,
        title: "Smart Pointers",
        desc: "Box, Rc, Arc, Cell, RefCell, Weak and interior mutability — sharing state without fighting the checker.",
      },
      {
        num: 4,
        title: "Concurrency",
        desc: "Threads, mpsc channels, Mutex, RwLock, Arc, shared state, Send and Sync.",
      },
      {
        num: 5,
        title: "Async Rust",
        desc: "Futures, async/.await, executors, Tokio tasks, channels, cancellation, timeouts and async errors.",
      },
      {
        num: 6,
        title: "Backend & Prod",
        desc: "TCP/HTTP, Axum, Serde, Reqwest. REST, JWT, PostgreSQL, pooling, tests, tracing, Docker.",
      },
    ],
    projects: [
      "REST API (Task Management API - Axum, Tokio, PostgreSQL, Serde)",
      "Realtime WebSocket Chat Server",
      "Job Queue (Async workers, retry, scheduling & graceful shutdown)",
    ],
  },
  {
    id: 3,
    title: "LEVEL 3 — ADVANCED / SYSTEMS PROGRAMMING",
    subtitle: "Goal: Build high-performance systems software.",
    duration: "8–12 weeks",
    outcome: "Build high-performance systems",
    badge: "Core Curriculum",
    modules: [
      {
        num: 1,
        title: "Advanced Ownership",
        desc: "Higher-ranked trait bounds, variance, subtyping, phantom types, zero-sized types and the type-state pattern.",
      },
      {
        num: 2,
        title: "Advanced Traits",
        desc: "Associated types and GATs, trait objects, static vs dynamic dispatch, blanket impls, coherence and bounds.",
      },
      {
        num: 3,
        title: "Unsafe Rust",
        desc: "Raw pointers, unsafe functions and traits, FFI, safety invariants, and wrapping unsafe code in safe APIs.",
      },
      {
        num: 4,
        title: "Memory & Performance",
        desc: "Layout, alignment, allocation, cache locality, zero-copy, SIMD concepts, profiling and benchmarking.",
      },
      {
        num: 5,
        title: "Advanced Concurrency",
        desc: "Lock-free programming, atomics, memory ordering, data races, concurrent structures, thread pools, work stealing.",
      },
      {
        num: 6,
        title: "Systems + FFI",
        desc: "Processes, filesystems, signals, sockets, syscalls, Linux C ABI, calling C from Rust and Rust from C.",
      },
      {
        num: 7,
        title: "Embedded Rust",
        desc: "Optional track: no_std, embedded HAL, microcontrollers, GPIO, UART, SPI, I2C, interrupts, RTOS ideas.",
      },
      {
        num: 8,
        title: "WebAssembly",
        desc: "Rust + WASM, browser integration, JS interop, WASM performance and application patterns.",
      },
      {
        num: 9,
        title: "Compiler & Macros",
        desc: "Declarative and procedural macros, derive and attribute macros, token streams, compiler architecture intro.",
      },
    ],
    projects: [
      "High-Performance Custom Allocator",
      "System Process Monitor",
      "WASM Image Filter Engine",
    ],
  },
  {
    id: 4,
    title: "LEVEL 4 — CAREER / CAPSTONE (SPECIALISATION TRACKS)",
    subtitle: "Choose a track and ship a portfolio-ready industry project. (Optional Professional Track)",
    duration: "4–6 weeks",
    outcome: "Portfolio + real-world project",
    badge: "Specialisation Track",
    tracks: [
      {
        id: "A",
        title: "BACKEND",
        desc: "High-performance distributed API — Rust, Tokio, Axum, PostgreSQL and Redis.",
      },
      {
        id: "B",
        title: "SYSTEMS",
        desc: "Mini OS components: memory allocator, scheduler simulation, filesystem or networking piece.",
      },
      {
        id: "C",
        title: "NETWORKING",
        desc: "High-performance TCP/HTTP server — async, concurrency, connection management, benchmarks.",
      },
      {
        id: "D",
        title: "EMBEDDED",
        desc: "IoT path: microcontroller, sensors, device comms and a cloud API.",
      },
      {
        id: "E",
        title: "WEBASSEMBLY",
        desc: "Rust handles heavy compute; JavaScript/TypeScript owns the UI.",
      },
    ],
  },
];

export default function CategoryPortalPage() {
  const router = useRouter();
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const [selectedLevel, setSelectedLevel] = useState(1);
  const [searchQuery, setSearchQuery] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [seatsLeft, setSeatsLeft] = useState(7);
  const [activeModuleModal, setActiveModuleModal] = useState<any>(null);

  useEffect(() => {
    const timer = setInterval(() => {
      setSeatsLeft((prev) => (prev > 2 ? prev - 1 : 2));
    }, 45000);
    return () => clearInterval(timer);
  }, []);

  const fadeInUp: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
  };

  const staggerContainer: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const courses = [
    {
      id: "rust",
      title: "Rust Training",
      icon: <Cpu className="w-8 h-8 text-white group-hover:scale-110 transition-transform" />,
      desc: "Industry-level live project expertise covering 4 levels and Capstones.",
      tags: ["Ownership", "Async Tokio", "Systems", "WASM"],
      actionText: "Open Curriculum",
    },
    {
      id: "web",
      title: "Web Development",
      icon: <Globe className="w-8 h-8 text-white group-hover:scale-110 transition-transform" />,
      desc: "Master modern full-stack web architectures, APIs, and microservices.",
      tags: ["React", "Next.js", "Node.js", "TypeScript"],
      actionText: "Explore Web Tracks",
    },
    {
      id: "app",
      title: "Application Development",
      icon: <Smartphone className="w-8 h-8 text-white group-hover:scale-110 transition-transform" />,
      desc: "High-performance cross-platform mobile apps for iOS and Android.",
      tags: ["React Native", "Flutter", "iOS/Android"],
      actionText: "Explore App Tracks",
    },
    {
      id: "languages",
      title: "Programming Languages",
      icon: <Terminal className="w-8 h-8 text-white group-hover:scale-110 transition-transform" />,
      desc: "Deep dive into language fundamentals, DSA, memory management.",
      tags: ["Java", "Python", "C++", "Golang"],
      actionText: "Explore Languages",
    },
  ];

  const currentLevelData = RUST_LEVELS.find((l) => l.id === selectedLevel);

  return (
    <div className="flex flex-col min-h-screen bg-slate-100/80 text-slate-900 font-sans">
      {/* Navbar Header (Matching Audio-Video Page Header) */}
      <header className="sticky top-0 z-50 w-full bg-white border-b-2 border-slate-300 shadow-md transition-all">
        <Navbar />
      </header>

      {/* Main Page Content - 'pt-40' padding top for exact spacing */}
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

        <div className="max-w-[90rem] mx-auto w-full relative z-10 space-y-10">
          
          {/* VIEW 1: CATEGORY SELECTION PAGE */}
          {activeCategory === null && (
            <div className="space-y-10">
              
              {/* Hero Banner Section */}
              <div className="text-center space-y-3 max-w-5xl mx-auto">
                <span className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-bold bg-[#B30E16]/10 border border-[#B30E16]/30 text-[#B30E16]">
                  <Sparkles className="w-3.5 h-3.5" /> Industry-Level Live Project Expertise
                </span>
                
                {/* Single Line Headline */}
<h2 className="text-lg sm:text-xl lg:text-2xl font-bold text-slate-900 tracking-tight whitespace-nowrap overflow-hidden text-ellipsis">
  Learn, Build & Grow with{" "}
  <span className="text-[#B30E16]">
    AMIACH Technologies
  </span>
</h2>
                
                
              </div>

              {/* Horizontal 4-Column Grid (Audio-Visual Page Layout & Colors) */}
              <motion.div
                initial="hidden"
                animate="visible"
                variants={staggerContainer}
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 rounded-3xl bg-[#B30E16] divide-y sm:divide-y-0 lg:divide-x divide-white/20 shadow-2xl overflow-hidden border border-red-900/20"
              >
                {courses.map((course) => (
                  <motion.div
                    key={course.id}
                    variants={fadeInUp}
                    onClick={() => setActiveCategory(course.id)}
                    className="p-6 flex flex-col items-center justify-between text-center min-h-[400px] group hover:bg-black/10 transition-all duration-300 cursor-pointer"
                  >
                    {/* Course Title */}
                    <div className="space-y-1.5 w-full">
                      <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-slate-100 transition-colors">
                        {course.title}
                      </h3>
                      <p className="text-xs text-white/80 line-clamp-2 px-2">
                        {course.desc}
                      </p>
                    </div>

                    {/* Icon Container Box */}
                    <div className="relative w-full h-36 my-4 flex items-center justify-center bg-white/10 rounded-2xl p-4 border border-white/10 backdrop-blur-sm">
                      {course.icon}
                    </div>

                    {/* Action Button */}
                    <button className="w-full px-5 py-3 rounded-2xl bg-white hover:bg-slate-100 text-xs font-bold text-[#B30E16] transition-all duration-300 flex items-center justify-center gap-2 shadow-lg group/btn cursor-pointer">
                      <span>{course.actionText}</span>
                      <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform" />
                    </button>
                  </motion.div>
                ))}
              </motion.div>

              {/* Bottom Callout Banner */}
              <motion.div
                initial="hidden"
                animate="visible"
                variants={fadeInUp}
                className="rounded-3xl bg-slate-900 text-white p-8 sm:p-12 relative overflow-hidden shadow-2xl flex flex-col md:flex-row items-center justify-between gap-8"
              >
                <div className="absolute -right-20 -bottom-20 w-80 h-80 bg-[#B30E16]/30 rounded-full blur-3xl pointer-events-none" />

                <div className="space-y-2 relative z-10 text-center md:text-left">
                  <span className="text-xs font-mono text-red-400 uppercase tracking-widest font-bold">
                    Career Advancement & Mentorship
                  </span>
                  <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
                    Looking for Dedicated Corporate or On-Campus Workshops?
                  </h2>
                  <p className="text-xs sm:text-sm text-slate-300 max-w-xl">
                    Get custom live mentorship, dedicated batch scheduling, and hands-on capstone engineering guidance for your team or institution.
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row items-center gap-4 relative z-10 shrink-0">
                  <button
                    onClick={() => router.push("/contact")}
                    className="px-6 py-3.5 rounded-2xl bg-[#B30E16] hover:bg-red-700 text-xs font-semibold text-white transition-all shadow-lg shadow-red-900/30 flex items-center gap-2 cursor-pointer"
                  >
                    <span>Request Details</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </motion.div>
            </div>
          )}

          {/* VIEW 2: RUST TRAINING CURRICULUM VIEW */}
          {activeCategory === "rust" && (
            <div className="space-y-8">
              {/* Back Button Header */}
              <div className="flex items-center justify-between border-b border-slate-300 pb-4">
                <button
                  onClick={() => setActiveCategory(null)}
                  className="inline-flex items-center gap-2 text-slate-700 hover:text-[#B30E16] transition text-sm font-bold cursor-pointer"
                >
                  <ArrowLeft className="w-4 h-4" /> Back to All Programs
                </button>
                <span className="text-xs font-bold text-[#B30E16] bg-red-100 border border-red-200 px-3 py-1 rounded-full">
                  Professional Certification Programme
                </span>
              </div>

              {/* Header Box */}
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center bg-white border border-slate-200 rounded-3xl p-6 sm:p-8 shadow-xl relative overflow-hidden">
                <div className="lg:col-span-2 space-y-3">
                  <div className="inline-flex items-center gap-2 text-xs font-bold text-[#B30E16] uppercase tracking-widest bg-red-50 border border-red-200 px-3 py-1 rounded-md">
                    <Cpu className="w-3.5 h-3.5" /> Rust Training Program
                  </div>
                  <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
                    Industry-Level Live Project Expertise
                  </h1>
                  <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                    From beginner to job-ready systems engineer. Build safe, fast, modern software with real-world impact.
                  </p>
                </div>

                {/* Offer Widget */}
                <div className="bg-[#B30E16] text-white p-5 rounded-2xl space-y-3 shadow-lg">
                  <div className="flex justify-between items-center">
                    <span className="text-xs font-bold uppercase tracking-wide">Early Bird 50% Off</span>
                    <span className="text-[11px] font-medium bg-black/20 px-2 py-0.5 rounded border border-white/20 flex items-center gap-1">
                      <Clock className="w-3 h-3" /> {seatsLeft} seats left
                    </span>
                  </div>
                  <div className="flex items-baseline gap-2">
                    <span className="text-3xl font-black">₹ 50,000/-</span>
                    <span className="text-xs text-white/70 line-through">₹ 100,000/-</span>
                  </div>
                  <p className="text-[10px] text-white/80">GST 18% Extra on Fees • Registration 1000/-</p>
                  <button
                    onClick={() => setIsModalOpen(true)}
                    className="w-full bg-white text-[#B30E16] hover:bg-slate-100 py-2.5 rounded-xl text-xs font-bold transition shadow-md cursor-pointer"
                  >
                    Claim Seat Now
                  </button>
                </div>
              </div>

              {/* Levels Selector */}
              <div className="space-y-6">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div>
                    <h2 className="text-xl font-bold text-slate-900">Structured Learning Path</h2>
                    <p className="text-xs text-slate-500">Levels 1–3 core curriculum + Level 4 optional Capstone track</p>
                  </div>
                  <div className="relative w-full sm:w-64">
                    <Search className="w-4 h-4 absolute left-3 top-3 text-slate-400" />
                    <input
                      type="text"
                      placeholder="Search Rust topics..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="w-full pl-9 pr-4 py-2 bg-white border border-slate-300 rounded-xl text-xs text-slate-900 placeholder-slate-400 focus:outline-none focus:border-[#B30E16]"
                    />
                  </div>
                </div>

                {/* Level Tabs */}
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
                  {RUST_LEVELS.map((lvl) => {
                    const isActive = selectedLevel === lvl.id;
                    return (
                      <button
                        key={lvl.id}
                        onClick={() => setSelectedLevel(lvl.id)}
                        className={`p-4 rounded-xl border text-left transition-all relative overflow-hidden cursor-pointer ${
                          isActive
                            ? "bg-[#B30E16] text-white border-[#B30E16] shadow-lg"
                            : "bg-white text-slate-800 border-slate-200 hover:border-slate-300"
                        }`}
                      >
                        <div className="flex justify-between items-start mb-2">
                          <span className={`w-7 h-7 rounded-lg flex items-center justify-center font-bold text-xs ${isActive ? "bg-white text-[#B30E16]" : "bg-slate-100 text-slate-700"}`}>
                            {lvl.id}
                          </span>
                          <span className={`text-[10px] flex items-center gap-1 ${isActive ? "text-white/80" : "text-slate-500"}`}>
                            <Clock className="w-3 h-3" /> {lvl.duration}
                          </span>
                        </div>
                        <h4 className="text-xs font-bold">Level {lvl.id}</h4>
                        <p className={`text-[11px] line-clamp-1 mt-0.5 ${isActive ? "text-white/80" : "text-slate-500"}`}>
                          {lvl.outcome}
                        </p>
                      </button>
                    );
                  })}
                </div>

                {/* Modules Box */}
                {currentLevelData && (
                  <div className="bg-white border border-slate-200 rounded-2xl p-6 space-y-6 shadow-sm">
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 border-b border-slate-200 pb-4">
                      <div>
                        <span className="text-xs font-bold text-[#B30E16] uppercase tracking-wider">{currentLevelData.badge}</span>
                        <h3 className="text-lg font-bold text-slate-900">{currentLevelData.title}</h3>
                        <p className="text-xs text-slate-600 mt-1">{currentLevelData.subtitle}</p>
                      </div>
                      <span className="text-xs font-semibold px-3 py-1 rounded-full bg-slate-100 text-slate-700 self-start md:self-auto">
                        Duration: {currentLevelData.duration}
                      </span>
                    </div>

                    {/* Modules Grid */}
                    {currentLevelData.modules && (
                      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                        {currentLevelData.modules
                          .filter(
                            (m) =>
                              !searchQuery ||
                              m.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                              m.desc.toLowerCase().includes(searchQuery.toLowerCase())
                          )
                          .map((m) => (
                            <div
                              key={m.num}
                              onClick={() => setActiveModuleModal(m)}
                              className="p-4 rounded-xl bg-slate-50 border border-slate-200 hover:border-[#B30E16] transition cursor-pointer group"
                            >
                              <div className="flex items-center gap-2 mb-2">
                                <span className="w-6 h-6 rounded-md bg-[#B30E16] text-white font-bold text-xs flex items-center justify-center">
                                  {m.num}
                                </span>
                                <h5 className="font-bold text-sm text-slate-900 group-hover:text-[#B30E16] transition-colors">
                                  {m.title}
                                </h5>
                              </div>
                              <p className="text-xs text-slate-600 line-clamp-3 leading-relaxed">{m.desc}</p>
                            </div>
                          ))}
                      </div>
                    )}

                    {/* Live Projects */}
                    {currentLevelData.projects && (
                      <div className="pt-4 border-t border-slate-200">
                        <h5 className="text-xs font-bold text-[#B30E16] uppercase tracking-wider mb-3 flex items-center gap-2">
                          <Terminal className="w-4 h-4" /> Level {currentLevelData.id} Hands-on Projects
                        </h5>
                        <div className="flex flex-wrap gap-2">
                          {currentLevelData.projects.map((proj, idx) => (
                            <span key={idx} className="text-xs bg-slate-100 text-slate-800 border border-slate-200 px-3 py-1.5 rounded-lg flex items-center gap-1.5 font-medium">
                              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" /> {proj}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                )}
              </div>
            </div>
          )}

          {/* VIEW 3: PLACEHOLDER FOR OTHER CATEGORIES */}
          {activeCategory && activeCategory !== "rust" && (
            <div className="bg-white border border-slate-200 rounded-3xl p-8 space-y-6 shadow-xl">
              <div className="flex items-center justify-between border-b border-slate-200 pb-4">
                <button
                  onClick={() => setActiveCategory(null)}
                  className="inline-flex items-center gap-2 text-slate-700 hover:text-[#B30E16] transition text-sm font-bold cursor-pointer"
                >
                  <ArrowLeft className="w-4 h-4" /> Back to Main Categories
                </button>
              </div>
              <div className="text-center py-12 space-y-3">
                <h2 className="text-2xl font-bold text-slate-900 capitalize">{activeCategory} Track Details</h2>
                <p className="text-slate-500 text-sm max-w-md mx-auto">
                  Curriculum details and upcoming live batch schedules for this track are available on request.
                </p>
                <button
                  onClick={() => router.push("/contact")}
                  className="px-6 py-3 rounded-2xl bg-[#B30E16] text-white font-bold text-xs hover:bg-red-700 transition cursor-pointer"
                >
                  Inquire Now
                </button>
              </div>
            </div>
          )}

        </div>
      </main>

      {/* Optional Footer */}
      {/* <Footer /> */}
    </div>
  );
}