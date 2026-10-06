"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
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
      category: "iOS Application",
      description: "",
    });
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#060b19] text-slate-800 font-sans selection:bg-[#ff2a5f] selection:text-white">
      {/* 1. Static Navbar */}
      <div className="sticky top-0 z-50 w-full bg-[#060b19]/95 backdrop-blur-md border-b border-slate-800/50">
        <Navbar />
      </div>

      {/* 2. Custom Applications & Web Solutions (Hero Section) */}
      <section className="relative py-12 px-4 sm:px-8 lg:px-14 bg-[#060b19] text-white overflow-hidden">
        {/* Background Image Layer */}
        <div className="absolute inset-0 z-0 pointer-events-none">
          <Image
            src="/images/custon Application Web solution.png"
            alt="Custom Application Web Solution Background"
            fill
            priority
            sizes="100vw"
            className="object-cover object-center opacity-30 mix-blend-screen"
          />
          <div className="absolute inset-0 bg-linear-to-r from-[#122461] via-[#060b19]/90 to-transparent" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
          {/* Left Side Content */}
          <div className="flex-1 space-y-4">
            <div className="inline-flex items-center gap-1.5 px-2.5 py-1 mt-12 rounded-full bg-white/10 backdrop-blur-md border border-white/15 text-[11px] font-medium tracking-wide">
              <Code2 className="w-3.5 h-3.5 text-[#ff2a5f]" />
              <span>Application &amp; Web Development</span>
            </div>

            <h1 className="text-xl sm:text-2xl lg:text-3xl font-extrabold tracking-tight leading-tight">
              Custom Applications <br />
              <span className="text-transparent bg-clip-text bg-linear-to-r from-[#ff2a5f] to-rose-400">
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
                onClick={() => router.push("/contact")}
                className="px-5 py-2.5 rounded-full bg-[#ff2a5f] hover:bg-rose-600 text-white font-bold text-xs tracking-wide shadow-md transition-all duration-300 flex items-center gap-2 cursor-pointer"
              >
                <span>Start Your Project</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Right Top Action Buttons */}
          <div className="flex flex-col items-end gap-2 shrink-0 self-end lg:self-center w-full lg:w-auto -translate-y-2 sm:-translate-y-4 lg:-translate-y-6">
            <Link
              href="/audio-visual-manufacturing"
              className="inline-flex items-center justify-center rounded-full border border-[#00F2FE]/60 bg-black/35 px-3.5 py-2 text-[9px] sm:text-[10px] font-bold uppercase tracking-[0.2em] text-cyan-300 transition-all duration-300 hover:bg-[#00F2FE] hover:text-black backdrop-blur-sm shadow-[0_0_12px_rgba(0,242,254,0.25)] text-right"
            >
              Audio Visual Manufacturing
            </Link>
             <Link
              href="/business-automation"
              className="inline-flex items-center justify-center rounded-full border border-[#00F2FE]/60 bg-black/35 px-3.5 py-2 text-[9px] sm:text-[10px] font-bold uppercase tracking-[0.2em] text-cyan-300 transition-all duration-300 hover:bg-[#00F2FE] hover:text-black backdrop-blur-sm shadow-[0_0_12px_rgba(0,242,254,0.25)] text-right"
            >
              Business Automation
            </Link>
            <Link
              href="/internship-training"
              className="inline-flex items-center justify-center rounded-full border border-[#00F2FE]/60 bg-black/35 px-3.5 py-2 text-[9px] sm:text-[10px] font-bold uppercase tracking-[0.2em] text-cyan-300 transition-all duration-300 hover:bg-[#00F2FE] hover:text-black backdrop-blur-sm shadow-[0_0_12px_rgba(0,242,254,0.25)] text-right"
            >
              Internship Training
            </Link>
          </div>
        </div>
      </section>

      {/* 3. End-to-End Application Services */}
     <section className="py-9 px-4 sm:px-8 lg:px-14 bg-[#f8fafc] text-slate-900 border-t border-slate-200">
  <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-start justify-between gap-8">
    <div className="lg:w-1/3 space-y-3">
      <p className="text-[11px] font-bold tracking-[0.2em] text-[#ff2a5f] uppercase">
        WHY CHOOSE AMIACH
      </p>

      <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 leading-tight">
        End-to-End Application <br /> Development Services
      </h2>

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

    <div className="lg:w-2/3 grid grid-cols-1 sm:grid-cols-2 gap-4 w-full">
      <div className="group bg-white border border-pink-100 rounded-xl p-4 shadow-sm flex items-start gap-3 transition-all duration-300 hover:-translate-y-1.5 hover:border-pink-300 hover:shadow-[0_10px_30px_rgba(236,72,153,0.15)] cursor-pointer">
        <div className="w-10 h-10 rounded-lg bg-pink-100 text-pink-600 flex items-center justify-center shrink-0">
          <Globe className="w-5 h-5" />
        </div>
        <div>
          <h3 className="text-xs font-bold text-slate-900">
            Custom Web Applications
          </h3>
          <p className="text-slate-500 text-[11px] mt-1 leading-snug">
            Modern, responsive and user-friendly web applications tailored
            to your business needs.
          </p>
        </div>
      </div>

      <div className="group bg-white border border-purple-100 rounded-xl p-4 shadow-sm flex items-start gap-3 transition-all duration-300 hover:-translate-y-1.5 hover:border-purple-300 hover:shadow-[0_10px_30px_rgba(168,85,247,0.15)] cursor-pointer">
        <div className="w-10 h-10 rounded-lg bg-purple-100 text-purple-600 flex items-center justify-center shrink-0">
          <Smartphone className="w-5 h-5" />
        </div>
        <div>
          <h3 className="text-xs font-bold text-slate-900">
            Mobile App Development
          </h3>
          <p className="text-slate-500 text-[11px] mt-1 leading-snug">
            iOS &amp; Android apps with seamless performance and great
            user experience.
          </p>
        </div>
      </div>

      <div className="group bg-white border border-blue-100 rounded-xl p-4 shadow-sm flex items-start gap-3 transition-all duration-300 hover:-translate-y-1.5 hover:border-blue-300 hover:shadow-[0_10px_30px_rgba(59,130,246,0.15)] cursor-pointer">
        <div className="w-10 h-10 rounded-lg bg-blue-100 text-blue-600 flex items-center justify-center shrink-0">
          <Layers className="w-5 h-5" />
        </div>
        <div>
          <h3 className="text-xs font-bold text-slate-900">
            Enterprise Solutions
          </h3>
          <p className="text-slate-500 text-[11px] mt-1 leading-snug">
            Scalable and secure solutions for enterprise-grade operations.
          </p>
        </div>
      </div>

      <div className="group bg-white border border-emerald-100 rounded-xl p-4 shadow-sm flex items-start gap-3 transition-all duration-300 hover:-translate-y-1.5 hover:border-emerald-300 hover:shadow-[0_10px_30px_rgba(16,185,129,0.15)] cursor-pointer">
        <div className="w-10 h-10 rounded-lg bg-emerald-100 text-emerald-600 flex items-center justify-center shrink-0">
          <Layout className="w-5 h-5" />
        </div>
        <div>
          <h3 className="text-xs font-bold text-slate-900">
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

      {/* Tech Stack Banner */}
      <section className="py-0 px-0 sm:px-8 lg:px-14">
        <div className="max-w-7xl mx-auto flex items-center justify-center">
          <Image
            src="/images/tech stackk.png"
            alt="Tech Stack"
            width={1024}
            height={400}
            className="w-full h-auto max-w-xs sm:max-w-xl lg:max-w-5xl object-contain rounded-lg"
          />
        </div>
      </section>

      {/* 5. From Idea to Impact */}
      <section className="py-14 px-4 sm:px-8 lg:px-14 bg-[#f8fafc] text-slate-900 border-t border-slate-200">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-start justify-between gap-10">
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

      {/* 6. Choose What Works for You */}
      <section className="py-14 px-4 sm:px-8 lg:px-14 bg-[#060b19] text-white">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-10">
          <div className="w-full lg:w-5/12 relative h-56 sm:h-64 rounded-lg overflow-hidden bg-transparent">
            <Image
              src="/images/choose what.png"
              alt="Choose What Works For You"
              fill
              sizes="(max-width: 1023px) 100vw, 42vw"
              className="object-contain object-left"
            />
          </div>

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
                <p className="text-slate-300 text-[10px] leading-snug">
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
                <p className="text-slate-300 text-[10px] leading-snug">
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
                <p className="text-slate-300 text-[10px] leading-snug">
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
            onClick={() => router.push("/contact")}
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
                <label className="block text-[11px] font-medium text-slate-300 mb-1">
                  Full Name
                </label>
                <input
                  type="text"
                  name="fullName"
                  required
                  value={formData.fullName}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 bg-[#101b3b] border border-slate-700/60 rounded-lg text-xs text-white placeholder-slate-500 focus:outline-none focus:border-[#ff2a5f]"
                  placeholder="John Doe"
                />
              </div>

              <div>
                <label className="block text-[11px] font-medium text-slate-300 mb-1">
                  Company Name
                </label>
                <input
                  type="text"
                  name="companyName"
                  value={formData.companyName}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 bg-[#101b3b] border border-slate-700/60 rounded-lg text-xs text-white placeholder-slate-500 focus:outline-none focus:border-[#ff2a5f]"
                  placeholder="Acme Inc."
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-[11px] font-medium text-slate-300 mb-1">
                    Mobile Number
                  </label>
                  <input
                    type="tel"
                    name="mobileNumber"
                    required
                    value={formData.mobileNumber}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 bg-[#101b3b] border border-slate-700/60 rounded-lg text-xs text-white placeholder-slate-500 focus:outline-none focus:border-[#ff2a5f]"
                    placeholder="+1 234 567 890"
                  />
                </div>

                <div>
                  <label className="block text-[11px] font-medium text-slate-300 mb-1">
                    Email Address
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 bg-[#101b3b] border border-slate-700/60 rounded-lg text-xs text-white placeholder-slate-500 focus:outline-none focus:border-[#ff2a5f]"
                    placeholder="john@example.com"
                  />
                </div>
              </div>

              <div>
                <label className="block text-[11px] font-medium text-slate-300 mb-1">
                  Category
                </label>
                <select
                  name="category"
                  value={formData.category}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 bg-[#101b3b] border border-slate-700/60 rounded-lg text-xs text-white focus:outline-none focus:border-[#ff2a5f]"
                >
                  <option value="iOS Application">iOS Application</option>
                  <option value="Android Application">
                    Android Application
                  </option>
                  <option value="Web Application">Web Application</option>
                  <option value="Custom Software">Custom Software</option>
                  <option value="UI/UX Design">UI/UX Design</option>
                </select>
              </div>

              <div>
                <label className="block text-[11px] font-medium text-slate-300 mb-1">
                  Project Description
                </label>
                <textarea
                  name="description"
                  rows={3}
                  value={formData.description}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 bg-[#101b3b] border border-slate-700/60 rounded-lg text-xs text-white placeholder-slate-500 focus:outline-none focus:border-[#ff2a5f] resize-none"
                  placeholder="Tell us a bit about your project requirements..."
                />
              </div>

              <button
                type="submit"
                className="w-full py-2.5 rounded-lg bg-[#ff2a5f] hover:bg-rose-600 text-white font-bold text-xs tracking-wide transition-colors duration-300 cursor-pointer shadow-md"
              >
                Submit Project Request
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
