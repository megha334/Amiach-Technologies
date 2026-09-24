"use client";

import React from "react";
import { MapPin } from "lucide-react";
import { FaFacebookF, FaLinkedinIn, FaInstagram } from "react-icons/fa";
import { companyInfo } from "@/lib/data";

export function Footer({ className = "" }: { className?: string }) {
  const footerClass = className || "absolute bottom-0 left-0 right-0 z-20";

  return (
    <footer
      className={`${footerClass} px-6 sm:px-12 py-4 flex flex-col sm:flex-row items-center justify-between text-xs text-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)] pointer-events-auto gap-3 sm:gap-0`}
    >
      {/* Social Media Links */}
      <div className="flex items-center gap-3">
        <a
          href={companyInfo.socials.facebook}
          target="_blank"
          rel="noreferrer"
          aria-label="Facebook"
        >
          <FaFacebookF className="w-4 h-4 text-white" />
        </a>

        <a
          href={companyInfo.socials.linkedin}
          target="_blank"
          rel="noreferrer"
          aria-label="LinkedIn"
        >
          <FaLinkedinIn className="w-4 h-4 text-white" />
        </a>
        <a
          href={companyInfo.socials.instagram}
          target="_blank"
          rel="noreferrer"
          aria-label="Instagram"
        >
          <FaInstagram className="w-4 h-4 text-white" />
        </a>
      </div>

      {/* Location & Hero Navigation Link */}
      <div className="flex items-center gap-4">
        <a
          href={companyInfo.googleMapsUrl}
          target="_blank"
          rel="noreferrer"
          className="flex items-center gap-1.5 text-white font-medium"
        >
          <MapPin className="w-3.5 h-3.5 text-white" />
          <span>{companyInfo.address}</span>
        </a>

        {/* Route link back to Hero Slider */}
      </div>

      {/* Copyright Info */}
      <div className="text-[11px] font-mono text-white">
        © {new Date().getFullYear()} {companyInfo.name}
      </div>
    </footer>
  );
}
