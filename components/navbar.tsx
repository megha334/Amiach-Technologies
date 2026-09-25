"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";

type CategoryLink = {
  href: string;
  label: string;
};

type NavbarProps = {
  categoryLinks?: CategoryLink[];
  variant?: "default" | "category";
  compact?: boolean;
};

export function Navbar({
  categoryLinks = [],
  variant = "default",
  compact = false,
}: NavbarProps) {
  const isCategoryNavbar = variant === "category";
  const router = useRouter();
  const pathname = usePathname();
  const isAboutActive = pathname === "/about" || pathname.startsWith("/about/");
  const isContactActive =
    pathname === "/contact" || pathname.startsWith("/contact/");

  const navButtonClass =
    "flex h-10 w-10 items-center justify-center rounded-full bg-slate-900/20 text-center text-[8px] font-medium uppercase leading-none text-white shadow-md backdrop-blur-md transition-all duration-300 hover:scale-105 hover:bg-slate-900/40 hover:text-white sm:h-12 sm:w-12 sm:text-[9px]";

  return (
    <header
      className={
        isCategoryNavbar
          ? compact
            ? "sticky top-0 z-50 min-h-0 bg-transparent px-3 py-2 shadow-none sm:min-h-0 sm:px-6"
            : "sticky top-0 z-50 min-h-0 bg-transparent px-3 py-3 shadow-none sm:px-6"
          : "absolute top-0 left-0 right-0 z-30 px-4 py-3 sm:px-10 sm:py-4"
      }
    >
      <div className="pointer-events-auto flex w-full items-start justify-between gap-2 select-none sm:gap-3">
        <div className="flex min-w-0 items-start gap-2 sm:gap-3">
          {/* Brand Logo */}
          <Link
            href="/"
            aria-label="Go to home page"
            onClick={(event) => {
              event.preventDefault();
              router.push("/");
            }}
            className="group flex shrink-0 items-center focus:outline-none pt-1"
          >
            <div className="relative">
              <Image
                src="/images/logo.png"
                alt="AMIACH Technologies Logo"
                width={120}
                height={32}
                priority
                style={{ width: "auto", height: "auto" }}
                className={`${compact ? "h-5 sm:h-6" : "h-6 sm:h-7"} object-contain transition-transform duration-300 group-hover:scale-105 filter drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]`}
              />
            </div>
          </Link>
        </div>

        <div className="ml-auto flex flex-col items-end gap-1.5 sm:gap-2">
          {/* Action Buttons: Vertical Circular Style */}
          <div className="flex shrink-0 flex-col items-end gap-1.5 sm:gap-2">
            <Link
              href="/about"
              className={`${navButtonClass} ${
                isAboutActive
                  ? "bg-slate-900/50 text-white ring-1 ring-white/80 shadow-[0_0_18px_rgba(255,255,255,0.25)]"
                  : ""
              }`}
            >
              About
            </Link>
            <Link
              href="/contact"
              className={`${navButtonClass} ${
                isContactActive
                  ? "bg-slate-900/50 text-white ring-1 ring-white/80 shadow-[0_0_18px_rgba(255,255,255,0.25)]"
                  : ""
              }`}
            >
              Contact
            </Link>
          </div>

          {categoryLinks.length > 0 && (
            <nav
              aria-label="Other service categories"
              className="flex flex-col items-end gap-1.5 sm:gap-2"
            >
              {categoryLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="flex h-11 w-11 items-center justify-center rounded-full bg-slate-900/20 px-1.5 text-center text-[6.5px] font-medium uppercase leading-[1.1] tracking-wide text-white/90 shadow-md backdrop-blur-md transition-all duration-300 hover:scale-[1.02] hover:bg-slate-900/40 hover:text-white sm:h-12 sm:w-12 sm:text-[7px]"
                >
                  <span className="break-words whitespace-normal">
                    {link.label}
                  </span>
                </Link>
              ))}
            </nav>
          )}
        </div>
      </div>
    </header>
  );
}
