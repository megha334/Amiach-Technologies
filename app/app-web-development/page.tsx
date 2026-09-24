"use client";

import React, { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import {
  ArrowRight,
  Code2,
  Globe,
  Smartphone,
  Layers,
  Layout,
  ShieldCheck,
  Sparkles,
  Clock,
  Users,
  DollarSign,
  X,
  Search,
  PenTool,
  Cpu,
  Rocket,
} from "lucide-react";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";

export default function AppWebDevelopmentPage() {
  const router = useRouter();
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    companyName: "",
    mobileNumber: "",
    email: "",
    category: "iOS Application",
    description: "",
  });

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >,
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Thank you! Your project details have been submitted.");
    setIsFormOpen(false);
    setFormData({
      fullName: "",
      companyName: "",
      mobileNumber: "",
      email: "",
      category: "Select Category",
      description: "",
    });
  };

  // Modern Tech Stack Items - 14 Items arranged in 2 Horizontal Rows of 7
  const techStack = [
    { name: "React", route: "/tech/react" },
    { name: "Angular", route: "/tech/angular" },
    { name: "Vue.js", route: "/tech/vue" },
    { name: "Node.js", route: "/tech/nodejs" },
    { name: "Java", route: "/tech/java" },
    { name: "Spring Boot", route: "/tech/springboot" },
    { name: ".NET", route: "/tech/dotnet" },
    { name: "Python", route: "/tech/python" },
    { name: "PHP", route: "/tech/php" },
    { name: "JavaScript", route: "/tech/javascript" },
    { name: "TypeScript", route: "/tech/typescript" },
    { name: "AWS", route: "/tech/aws" },
    { name: "Azure", route: "/tech/azure" },
    { name: "Firebase", route: "/tech/firebase" },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-[#060b19] text-slate-800 font-sans selection:bg-[#ff2a5f] selection:text-white">
      {/* 1. Static Navbar (Scroll par move nahi karega) */}
      <div className="sticky top-0 z-50 w-full bg-[#060b19]/95 backdrop-blur-md border-b border-slate-800/50">
        <Navbar />
      </div>

      {/* 2. Custom Applications & Web Solutions (Compact Hero Section) */}
      <section className="relative py-12 px-4 sm:px-8 lg:px-14 bg-[#060b19] text-white overflow-hidden">
        {/* Background Image Layer */}
        <div className="absolute inset-0 z-0 pointer-events-none">
          <Image
            src="/images/custon Application Web solution.png"
            alt="Custom Application Web Solution Background"
            fill
            priority
            className="object-cover object-center opacity-30 mix-blend-screen"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#122461] via-[#060b19]/90 to-transparent" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-8">
          {/* Left Side Content (Text Size Made Small & Compact) */}
          <div className="flex-1 space-y-4">
            <div className="inline-flex items-center gap-1.5 px-2.5 py-1 mt-12 rounded-full bg-white/10 backdrop-blur-md border border-white/15 text-[11px] font-medium tracking-wide">
              <Code2 className="w-3.5 h-3.5 text-[#ff2a5f]" />
              <span>Application &amp; Web Development</span>
            </div>

            <h1 className="text-xl sm:text-2xl lg:text-3xl font-extrabold tracking-tight leading-tight">
              Custom Applications <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ff2a5f] to-rose-400">
                &amp; Web Solutions
              </span>{" "}
              <br />
              for Your Business
            </h1>

            <p className="text-slate-300 text-xs sm:text-sm max-w-lg leading-relaxed font-normal">
              At AMIACH Technologies, we build scalable, secure, and
              high-performance web and mobile applications that turn your ideas
              into powerful digital solutions.
            </p>

            {/* Feature Pills */}
            {/* Feature Pills */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-2 max-w-md">
              <div className="group flex items-center gap-2 cursor-pointer transition-all duration-300 hover:-translate-y-1">
                <Sparkles className="w-5 h-5 text-pink-400 transition-all duration-300 group-hover:scale-125 group-hover:text-pink-300 group-hover:drop-shadow-[0_0_8px_rgba(244,114,182,0.8)]" />
                <span className="text-[11px] font-medium transition-colors duration-300 group-hover:text-pink-200">
                  Innovative Solutions
                </span>
              </div>

              <div className="group flex items-center gap-2 cursor-pointer transition-all duration-300 hover:-translate-y-1">
                <Clock className="w-5 h-5 text-rose-400 transition-all duration-300 group-hover:scale-125 group-hover:text-rose-300 group-hover:drop-shadow-[0_0_8px_rgba(251,113,133,0.8)]" />
                <span className="text-[11px] font-medium transition-colors duration-300 group-hover:text-rose-200">
                  Agile Delivery
                </span>
              </div>

              <div className="group flex items-center gap-2 cursor-pointer transition-all duration-300 hover:-translate-y-1">
                <Layers className="w-5 h-5 text-purple-400 transition-all duration-300 group-hover:scale-125 group-hover:text-purple-300 group-hover:drop-shadow-[0_0_8px_rgba(192,132,252,0.8)]" />
                <span className="text-[11px] font-medium transition-colors duration-300 group-hover:text-purple-200">
                  Scalable Architecture
                </span>
              </div>

              <div className="group flex items-center gap-2 cursor-pointer transition-all duration-300 hover:-translate-y-1">
                <ShieldCheck className="w-5 h-5 text-[#ff2a5f] transition-all duration-300 group-hover:scale-125 group-hover:text-[#ff5c83] group-hover:drop-shadow-[0_0_8px_rgba(255,42,95,0.8)]" />
                <span className="text-[11px] font-medium transition-colors duration-300 group-hover:text-pink-200">
                  Dedicated Support
                </span>
              </div>
            </div>

            {/* CTA Button */}
            <div className="pt-2">
              <button
                onClick={() => setIsFormOpen(true)}
                className="px-5 py-2.5 rounded-full bg-[#ff2a5f] hover:bg-rose-600 text-white font-bold text-xs tracking-wide shadow-md transition-all duration-300 flex items-center gap-2 cursor-pointer"
              >
                <span>Start Your Project</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Right Top Specific Page Link Buttons (Working Direct Routes) */}
          <div className="flex flex-col items-end gap-2.5 self-start lg:self-center">
            <button
              onClick={() => router.push("/audio-visual-manufacturing")}
              className="px-4 py-2 rounded-full bg-white/10 hover:bg-[#ff2a5f] hover:text-white border border-white/20 backdrop-blur-md text-[11px] font-bold uppercase tracking-wider text-slate-200 transition-all duration-300 shadow-sm cursor-pointer"
            >
              Audio Visual Manufacturing
            </button>
            <button
              onClick={() => router.push("/internship-training")}
              className="px-4 py-2 rounded-full bg-white/10 hover:bg-[#ff2a5f] hover:text-white border border-white/20 backdrop-blur-md text-[11px] font-bold uppercase tracking-wider text-slate-200 transition-all duration-300 shadow-sm cursor-pointer"
            >
              Internship Training
            </button>
          </div>
        </div>
      </section>

      {/* 3. End-to-End Application Services (White Background Section) */}
      <section className="py-9 px-4 sm:px-8 lg:px-14 bg-[#f8fafc] text-slate-900 border-t border-slate-200">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-start justify-between gap-8">
          {/* Left Side Header */}
          <div className="lg:w-1/3 space-y-3">
            <p className="text-[11px] font-bold tracking-[0.2em] text-[#ff2a5f] uppercase">
              WHY CHOOSE AMIACH
            </p>

            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 leading-tight">
              End-to-End Application <br /> Development Services
            </h2>

            {/* Consultation Button */}
            <button
              onClick={() => setIsFormOpen(true)}
              className="
          mt-1 px-4 py-2 rounded-full
          bg-[#ff2a5f] text-white
          font-bold text-xs tracking-wide
          flex items-center gap-1.5
          shadow-md cursor-pointer
          transition-all duration-300
          hover:bg-rose-600
          hover:scale-105
          hover:shadow-[0_8px_25px_rgba(255,42,95,0.35)]
          active:scale-95
          animate-[pulse_2.5s_ease-in-out_infinite]
        "
            >
              <span>Get a Free Consultation</span>
              <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1" />
            </button>
          </div>

          {/* Right Side 4 Service Cards */}
          <div className="lg:w-2/3 grid grid-cols-1 sm:grid-cols-2 gap-4 w-full">
            {/* Card 1 - Pink */}
            <div
              className="
          group bg-white border border-pink-100
          rounded-xl p-4 shadow-sm
          flex items-start gap-3
          transition-all duration-300
          hover:-translate-y-1.5
          hover:border-pink-300
          hover:shadow-[0_10px_30px_rgba(236,72,153,0.15)]
          cursor-pointer
        "
            >
              <div
                className="
            w-10 h-10 rounded-lg
            bg-pink-100 text-pink-600
            flex items-center justify-center shrink-0
            transition-all duration-300
            group-hover:bg-pink-500
            group-hover:text-white
            group-hover:scale-110
            group-hover:shadow-[0_0_18px_rgba(236,72,153,0.4)]
          "
              >
                <Globe className="w-5 h-5" />
              </div>

              <div>
                <h3 className="text-xs font-bold text-slate-900 group-hover:text-pink-600 transition-colors">
                  Custom Web Applications
                </h3>
                <p className="text-slate-500 text-[11px] mt-1 leading-snug">
                  Modern, responsive and user-friendly web applications tailored
                  to your business needs.
                </p>
              </div>
            </div>

            {/* Card 2 - Purple */}
            <div
              className="
          group bg-white border border-purple-100
          rounded-xl p-4 shadow-sm
          flex items-start gap-3
          transition-all duration-300
          hover:-translate-y-1.5
          hover:border-purple-300
          hover:shadow-[0_10px_30px_rgba(168,85,247,0.15)]
          cursor-pointer
        "
            >
              <div
                className="
            w-10 h-10 rounded-lg
            bg-purple-100 text-purple-600
            flex items-center justify-center shrink-0
            transition-all duration-300
            group-hover:bg-purple-500
            group-hover:text-white
            group-hover:scale-110
            group-hover:shadow-[0_0_18px_rgba(168,85,247,0.4)]
          "
              >
                <Smartphone className="w-5 h-5" />
              </div>

              <div>
                <h3 className="text-xs font-bold text-slate-900 group-hover:text-purple-600 transition-colors">
                  Mobile App Development
                </h3>
                <p className="text-slate-500 text-[11px] mt-1 leading-snug">
                  iOS &amp; Android apps with seamless performance and great
                  user experience.
                </p>
              </div>
            </div>

            {/* Card 3 - Blue */}
            <div
              className="
          group bg-white border border-blue-100
          rounded-xl p-4 shadow-sm
          flex items-start gap-3
          transition-all duration-300
          hover:-translate-y-1.5
          hover:border-blue-300
          hover:shadow-[0_10px_30px_rgba(59,130,246,0.15)]
          cursor-pointer
        "
            >
              <div
                className="
            w-10 h-10 rounded-lg
            bg-blue-100 text-blue-600
            flex items-center justify-center shrink-0
            transition-all duration-300
            group-hover:bg-blue-500
            group-hover:text-white
            group-hover:scale-110
            group-hover:shadow-[0_0_18px_rgba(59,130,246,0.4)]
          "
              >
                <Layers className="w-5 h-5" />
              </div>

              <div>
                <h3 className="text-xs font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                  Enterprise Solutions
                </h3>
                <p className="text-slate-500 text-[11px] mt-1 leading-snug">
                  Scalable and secure solutions for enterprise-grade operations.
                </p>
              </div>
            </div>

            {/* Card 4 - Emerald */}
            <div
              className="
          group bg-white border border-emerald-100
          rounded-xl p-4 shadow-sm
          flex items-start gap-3
          transition-all duration-300
          hover:-translate-y-1.5
          hover:border-emerald-300
          hover:shadow-[0_10px_30px_rgba(16,185,129,0.15)]
          cursor-pointer
        "
            >
              <div
                className="
            w-10 h-10 rounded-lg
            bg-emerald-100 text-emerald-600
            flex items-center justify-center shrink-0
            transition-all duration-300
            group-hover:bg-emerald-500
            group-hover:text-white
            group-hover:scale-110
            group-hover:shadow-[0_0_18px_rgba(16,185,129,0.4)]
          "
              >
                <Layout className="w-5 h-5" />
              </div>

              <div>
                <h3 className="text-xs font-bold text-slate-900 group-hover:text-emerald-600 transition-colors">
                  UI/UX Design &amp; Development
                </h3>
                <p className="text-slate-500 text-[11px] mt-1 leading-snug">
                  Intuitive designs that engage users and drive better results.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Modern Tech Stack (Blueish Dark Background with 2 Horizontal Lines) */}
      <section className="py-9 px-4 sm:px-8 lg:px-14 bg-[#0a1128] text-white">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-start justify-between gap-7">
          <br />

          {/* Left Text Header */}
          <div className="lg:w-1/3 space-y-2">
            <p className="text-[11px] font-bold tracking-[0.2em] text-[#ff2a5f] uppercase">
              TECHNOLOGIES WE WORK WITH
            </p>

            <h2 className="text-xl sm:text-2xl font-extrabold text-white leading-tight">
              Modern Tech Stack for <br /> Powerful Solutions
            </h2>
          </div>

          {/* Right Side: Technologies */}
          <div className="lg:w-2/3 w-full grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-2.5">
            {techStack.map((tech, idx) => (
              <div
                key={idx}
                onClick={() => router.push(tech.route)}
                className="
            group
            bg-[#101b3b]
            border border-slate-700/60
            rounded-lg
            p-2.5
            min-h-[72px]
            flex flex-col
            items-center
            justify-center
            gap-1.5
            cursor-pointer
            text-center
            transition-all
            duration-300
            ease-out
            hover:-translate-y-1.5
            hover:bg-[#16234b]
            hover:border-[#ff2a5f]/60
            hover:shadow-[0_10px_25px_rgba(255,42,95,0.18)]
          "
              >
                {/* Existing Icon */}
                <Cpu
                  className="
              w-6 h-6
              text-cyan-400
              transition-all
              duration-300
              ease-out
              group-hover:text-[#ff2a5f]
              group-hover:scale-125
              group-hover:rotate-6
              group-hover:drop-shadow-[0_0_8px_rgba(255,42,95,0.6)]
            "
                />

                {/* Technology Name */}
                <span
                  className="
              text-[10px]
              font-semibold
              text-slate-300
              transition-all
              duration-300
              group-hover:text-white
              group-hover:scale-105
            "
                >
                  {tech.name}
                </span>

                {/* Subtle Hover Glow */}
                <div
                  className="
              absolute
              inset-0
              rounded-lg
              opacity-0
              group-hover:opacity-100
              transition-opacity
              duration-300
              pointer-events-none
              shadow-[inset_0_0_20px_rgba(255,42,95,0.08)]
            "
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. From Idea to Impact (White Background Section) */}
      <section className="py-14 px-4 sm:px-8 lg:px-14 bg-[#f8fafc] text-slate-900 border-t border-slate-200">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-start justify-between gap-10">
          {/* Left Side Small Text */}
          <div className="lg:w-1/3 space-y-2">
            <p className="text-[11px] font-bold tracking-[0.2em] text-[#ff2a5f] uppercase">
              OUR DEVELOPMENT PROCESS
            </p>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 leading-tight">
              From Idea to Impact
            </h2>
            <p className="text-slate-600 text-xs leading-relaxed max-w-xs">
              We follow a structured and transparent process to ensure your
              project is delivered on time, within budget and meets your
              expectations.
            </p>
          </div>

          {/* Right Side 4 Small Process Step Cards */}
          <div className="lg:w-2/3 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 w-full">
            <div className="bg-white border border-slate-200 rounded-xl p-3.5 space-y-2 shadow-sm">
              <span className="text-xs font-black text-rose-500">01</span>
              <div className="w-7 h-7 rounded-md bg-pink-100 flex items-center justify-center text-pink-600">
                <Search className="w-3.5 h-3.5" />
              </div>
              <h3 className="text-xs font-bold text-slate-900">
                Discovery &amp; Analysis
              </h3>
              <p className="text-slate-500 text-[10px] leading-snug">
                Understand your goals, requirements and users.
              </p>
            </div>

            <div className="bg-white border border-slate-200 rounded-xl p-3.5 space-y-2 shadow-sm">
              <span className="text-xs font-black text-purple-500">02</span>
              <div className="w-7 h-7 rounded-md bg-purple-100 flex items-center justify-center text-purple-600">
                <PenTool className="w-3.5 h-3.5" />
              </div>
              <h3 className="text-xs font-bold text-slate-900">
                Planning &amp; Design
              </h3>
              <p className="text-slate-500 text-[10px] leading-snug">
                Create wireframes, architecture and roadmap.
              </p>
            </div>

            <div className="bg-white border border-slate-200 rounded-xl p-3.5 space-y-2 shadow-sm">
              <span className="text-xs font-black text-blue-500">03</span>
              <div className="w-7 h-7 rounded-md bg-blue-100 flex items-center justify-center text-blue-600">
                <Code2 className="w-3.5 h-3.5" />
              </div>
              <h3 className="text-xs font-bold text-slate-900">
                Development &amp; Testing
              </h3>
              <p className="text-slate-500 text-[10px] leading-snug">
                Build, test and ensure high performance.
              </p>
            </div>

            <div className="bg-white border border-slate-200 rounded-xl p-3.5 space-y-2 shadow-sm">
              <span className="text-xs font-black text-emerald-500">04</span>
              <div className="w-7 h-7 rounded-md bg-emerald-100 flex items-center justify-center text-emerald-600">
                <Rocket className="w-3.5 h-3.5" />
              </div>
              <h3 className="text-xs font-bold text-slate-900">
                Deployment &amp; Support
              </h3>
              <p className="text-slate-500 text-[10px] leading-snug">
                Launch and provide ongoing support.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Choose What Works for You (Image without Box Border + Hover Effects) */}
      <section className="py-14 px-4 sm:px-8 lg:px-14 bg-[#060b19] text-white">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-10">
          {/* Left Side Background Image (No Container Box) */}
          <div className="w-full lg:w-5/12 relative h-56 sm:h-64 rounded-lg overflow-hidden bg-transparent">
            <Image
              src="/images/choose what we do.png"
              alt="Choose What Works For You"
              fill
              className="object-contain object-left"
            />
          </div>

          {/* Right Side Engagement Cards */}
          <div className="w-full lg:w-7/12 space-y-4">
            <div>
              <p className="text-[11px] font-bold tracking-[0.2em] text-[#ff2a5f] uppercase mb-1">
                FLEXIBLE ENGAGEMENT MODELS
              </p>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
                Choose What Works for You
              </h2>
              <p className="text-slate-400 text-xs mt-1">
                We offer flexible engagement models to match your business
                requirements and project goals.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
              <div
                onClick={() => router.push("/engagement/fixed-price")}
                className="bg-[#0b1329] border border-slate-800 rounded-xl p-4 space-y-2 hover:border-[#ff2a5f] transition-all duration-300 hover:-translate-y-1 cursor-pointer group"
              >
                <div className="w-8 h-8 rounded-lg bg-rose-950/80 flex items-center justify-center text-rose-400 group-hover:scale-110 transition-transform">
                  <DollarSign className="w-4 h-4" />
                </div>
                <h3 className="text-xs font-bold text-white">
                  Flexible Pricing
                </h3>
                <p className="text-slate-400 text-[10px] leading-snug">
                  Pricing that suits your requirements.
                </p>
              </div>

              <div
                onClick={() => router.push("/engagement/time-material")}
                className="bg-[#0b1329] border border-slate-800 rounded-xl p-4 space-y-2 hover:border-[#ff2a5f] transition-all duration-300 hover:-translate-y-1 cursor-pointer group"
              >
                <div className="w-8 h-8 rounded-lg bg-purple-950/80 flex items-center justify-center text-purple-400 group-hover:scale-110 transition-transform">
                  <Clock className="w-4 h-4" />
                </div>
                <h3 className="text-xs font-bold text-white">
                  Time Bound Development
                </h3>
                <p className="text-slate-400 text-[10px] leading-snug">
                  Ideal for evolving needs and long-term projects.
                </p>
              </div>

              <div
                onClick={() => router.push("/engagement/dedicated-team")}
                className="bg-[#0b1329] border border-slate-800 rounded-xl p-4 space-y-2 hover:border-[#ff2a5f] transition-all duration-300 hover:-translate-y-1 cursor-pointer group"
              >
                <div className="w-8 h-8 rounded-lg bg-blue-950/80 flex items-center justify-center text-blue-400 group-hover:scale-110 transition-transform">
                  <Users className="w-4 h-4" />
                </div>
                <h3 className="text-xs font-bold text-white">
                  Experienced Team
                </h3>
                <p className="text-slate-400 text-[10px] leading-snug">
                  Dedicated team of experts, aligned with your goals.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom CTA Banner */}
      <section className="py-10 px-4 sm:px-8 lg:px-14 bg-[#090f20] border-t border-slate-800 text-white">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <h3 className="text-xl font-extrabold text-white">
              Let&apos;s Build Your Next{" "}
              <span className="text-[#ff2a5f]">Great Application</span>
            </h3>
            <p className="text-slate-400 text-xs mt-0.5">
              Partner with AMIACH Technologies for reliable, scalable and
              innovative solutions.
            </p>
          </div>
          <button
            onClick={() => setIsFormOpen(true)}
            className="px-5 py-2.5 rounded-full bg-[#ff2a5f] hover:bg-rose-600 text-white font-bold text-xs tracking-wider transition-all duration-300 flex items-center gap-2 cursor-pointer shadow-md shrink-0"
          >
            <span>Start Your Project</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </section>

      <Footer className="relative mt-auto w-full z-20" />

      {/* Discuss Project Dialog Modal */}
      {isFormOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-sm">
          <div className="relative w-full max-w-md bg-[#0b1329] border border-slate-800 rounded-2xl p-6 shadow-2xl space-y-5 text-white">
            <button
              onClick={() => setIsFormOpen(false)}
              className="absolute top-4 right-4 text-slate-400 hover:text-white p-1 rounded-full hover:bg-white/10 transition-colors"
            >
              <X className="w-4 h-4" />
            </button>

            <div>
              <h3 className="text-lg font-extrabold text-white">
                Discuss Your Project
              </h3>
              <p className="text-slate-400 text-xs mt-0.5">
                Fill out the form below and our team will connect with you
                shortly.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-3">
              <div>
                <label className="block text-[11px] font-semibold text-slate-300 mb-1">
                  Full Name *
                </label>
                <input
                  type="text"
                  name="fullName"
                  required
                  value={formData.fullName}
                  onChange={handleInputChange}
                  placeholder="John Doe"
                  className="w-full bg-[#040813] border border-slate-800 rounded-lg px-3 py-2 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-[#ff2a5f]"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-[11px] font-semibold text-slate-300 mb-1">
                    Company Name
                  </label>
                  <input
                    type="text"
                    name="companyName"
                    value={formData.companyName}
                    onChange={handleInputChange}
                    placeholder="Acme Inc."
                    className="w-full bg-[#040813] border border-slate-800 rounded-lg px-3 py-2 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-[#ff2a5f]"
                  />
                </div>
                <div>
                  <label className="block text-[11px] font-semibold text-slate-300 mb-1">
                    Mobile Number *
                  </label>
                  <input
                    type="tel"
                    name="mobileNumber"
                    required
                    value={formData.mobileNumber}
                    onChange={handleInputChange}
                    placeholder="+91 9876543210"
                    className="w-full bg-[#040813] border border-slate-800 rounded-lg px-3 py-2 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-[#ff2a5f]"
                  />
                </div>
              </div>

              <div>
                <label className="block text-[11px] font-semibold text-slate-300 mb-1">
                  Email ID *
                </label>
                <input
                  type="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="john@example.com"
                  className="w-full bg-[#040813] border border-slate-800 rounded-lg px-3 py-2 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-[#ff2a5f]"
                />
              </div>

              <div>
                <label className="block text-[11px] font-semibold text-slate-300 mb-1">
                  Category *
                </label>
                <select
                  name="category"
                  value={formData.category}
                  onChange={handleInputChange}
                  className="w-full bg-[#040813] border border-slate-800 rounded-lg px-3 py-2 text-xs text-white focus:outline-none focus:border-[#ff2a5f]"
                >
                  <option value="iOS Application">iOS Application</option>
                  <option value="Android Application">
                    Android Application
                  </option>
                  <option value="Web Application">Web Application</option>
                  <option value="Other">Other</option>
                </select>
              </div>

              <div>
                <label className="block text-[11px] font-semibold text-slate-300 mb-1">
                  Description of Project
                </label>
                <textarea
                  name="description"
                  rows={2}
                  value={formData.description}
                  onChange={handleInputChange}
                  placeholder="Brief details..."
                  className="w-full bg-[#040813] border border-slate-800 rounded-lg px-3 py-2 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-[#ff2a5f] resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full py-2.5 rounded-lg bg-[#ff2a5f] hover:bg-rose-600 text-white font-bold text-xs tracking-wider transition-colors shadow-md"
              >
                Submit Details
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
