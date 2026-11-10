"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronDown, Menu, X, Phone } from "lucide-react";
import { siteConfig } from "@/src/config/site";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [currentLang, setCurrentLang] = useState<"EN" | "ES">("EN");
  const [langDropdownOpen, setLangDropdownOpen] = useState(false);

  const navLinks = [
    { name: "HOME", href: "/" },
    { name: "SERVICES", href: "#services" },
    { name: "GALLERY", href: "#gallery" },
    { name: "CONTACT", href: "#contact" },
  ];

  return (
    <header className="relative z-30 w-full">
      <div className="max-w-[1440px] mx-auto px-6 sm:px-8 lg:px-12 py-5 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="relative z-10 flex items-center">
          <Image
            src="/cropped-pgcarpentryplus-logo.webp"
            alt="PG Carpentry Plus"
            width={240}
            height={52}
            className="h-9 sm:h-11 w-auto object-contain"
            priority
          />
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-8 xl:gap-10">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-[13px] font-bold tracking-wider text-white/90 hover:text-white transition-colors duration-200"
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Desktop CTA & Language Switcher */}
        <div className="hidden lg:flex items-center gap-4">
          <Link
            href={`tel:${siteConfig.contact.phone.replace(/[^0-9+]/g, "")}`}
            className="px-6 py-2 rounded-full border-2 border-white/80 text-white font-bold text-xs tracking-widest hover:border-[#C5A262] hover:text-[#C5A262] transition-colors duration-200"
          >
            CALL NOW
          </Link>

          {/* Language Selector Pill */}
          <div className="relative">
            <button
              onClick={() => setLangDropdownOpen(!langDropdownOpen)}
              className="flex items-center gap-2 bg-[#333333]/90 hover:bg-[#444444] text-white px-3 py-1.5 rounded-full border border-white/10 transition-colors text-xs font-semibold"
              aria-label="Select language"
              aria-expanded={langDropdownOpen}
            >
              {currentLang === "EN" ? (
                <span className="w-5 h-3.5 flex items-center justify-center overflow-hidden rounded-[2px] shadow-sm">
                  {/* US Flag SVG */}
                  <svg
                    viewBox="0 0 640 480"
                    className="w-full h-full object-cover"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g fillRule="evenodd">
                      <path fill="#bd3d44" d="M0 0h640v480H0z" />
                      <path
                        stroke="#fff"
                        strokeWidth="37"
                        d="M0 55.4h640M0 129.2h640M0 203h640M0 277h640M0 350.8h640M0 424.6h640"
                      />
                      <path fill="#192f5d" d="M0 0h296v258.5H0z" />
                      <g fill="#fff">
                        <circle cx="40" cy="35" r="8" />
                        <circle cx="100" cy="35" r="8" />
                        <circle cx="160" cy="35" r="8" />
                        <circle cx="220" cy="35" r="8" />
                        <circle cx="70" cy="65" r="8" />
                        <circle cx="130" cy="65" r="8" />
                        <circle cx="190" cy="65" r="8" />
                        <circle cx="250" cy="65" r="8" />
                        <circle cx="40" cy="95" r="8" />
                        <circle cx="100" cy="95" r="8" />
                        <circle cx="160" cy="95" r="8" />
                        <circle cx="220" cy="95" r="8" />
                        <circle cx="70" cy="125" r="8" />
                        <circle cx="130" cy="125" r="8" />
                        <circle cx="190" cy="125" r="8" />
                        <circle cx="250" cy="125" r="8" />
                        <circle cx="40" cy="155" r="8" />
                        <circle cx="100" cy="155" r="8" />
                        <circle cx="160" cy="155" r="8" />
                        <circle cx="220" cy="155" r="8" />
                        <circle cx="70" cy="185" r="8" />
                        <circle cx="130" cy="185" r="8" />
                        <circle cx="190" cy="185" r="8" />
                        <circle cx="250" cy="185" r="8" />
                        <circle cx="40" cy="215" r="8" />
                        <circle cx="100" cy="215" r="8" />
                        <circle cx="160" cy="215" r="8" />
                        <circle cx="220" cy="215" r="8" />
                      </g>
                    </g>
                  </svg>
                </span>
              ) : (
                <span className="w-5 h-3.5 flex items-center justify-center overflow-hidden rounded-[2px] shadow-sm">
                  {/* Mexican / Spanish flag */}
                  <svg
                    viewBox="0 0 640 480"
                    className="w-full h-full object-cover"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path fill="#006847" d="M0 0h213.3v480H0z" />
                    <path fill="#fff" d="M213.3 0h213.4v480H213.3z" />
                    <path fill="#ce1126" d="M426.7 0H640v480H426.7z" />
                    <circle cx="320" cy="240" r="28" fill="#896d38" />
                  </svg>
                </span>
              )}
              <ChevronDown className="w-3.5 h-3.5 text-white/70" />
            </button>

            {/* Dropdown Menu */}
            {langDropdownOpen && (
              <div className="absolute right-0 mt-2 w-32 bg-[#222222] border border-white/10 rounded-xl shadow-2xl py-1 text-xs z-50 overflow-hidden">
                <button
                  onClick={() => {
                    setCurrentLang("EN");
                    setLangDropdownOpen(false);
                  }}
                  className={`w-full flex items-center gap-2.5 px-3 py-2 text-left hover:bg-white/10 transition-colors ${
                    currentLang === "EN" ? "text-white font-bold" : "text-white/70"
                  }`}
                >
                  <span className="w-4 h-3 rounded-xs overflow-hidden inline-block bg-red-600">
                    <svg viewBox="0 0 640 480" className="w-full h-full object-cover">
                      <path fill="#bd3d44" d="M0 0h640v480H0z" />
                      <path
                        stroke="#fff"
                        strokeWidth="37"
                        d="M0 55.4h640M0 129.2h640M0 203h640M0 277h640M0 350.8h640M0 424.6h640"
                      />
                      <path fill="#192f5d" d="M0 0h296v258.5H0z" />
                    </svg>
                  </span>
                  <span>English (US)</span>
                </button>
                <button
                  onClick={() => {
                    setCurrentLang("ES");
                    setLangDropdownOpen(false);
                  }}
                  className={`w-full flex items-center gap-2.5 px-3 py-2 text-left hover:bg-white/10 transition-colors ${
                    currentLang === "ES" ? "text-white font-bold" : "text-white/70"
                  }`}
                >
                  <span className="w-4 h-3 rounded-xs overflow-hidden inline-block">
                    <svg viewBox="0 0 640 480" className="w-full h-full object-cover">
                      <path fill="#006847" d="M0 0h213.3v480H0z" />
                      <path fill="#fff" d="M213.3 0h213.4v480H213.3z" />
                      <path fill="#ce1126" d="M426.7 0H640v480H426.7z" />
                    </svg>
                  </span>
                  <span>Español</span>
                </button>
              </div>
            )}
          </div>
        </div>

        {/* Mobile Hamburger Button */}
        <div className="flex items-center gap-3 lg:hidden">
          <Link
            href={`tel:${siteConfig.contact.phone.replace(/[^0-9+]/g, "")}`}
            className="p-2 rounded-full border-2 border-white/60 text-white hover:border-[#C5A262] hover:text-[#C5A262] transition-colors duration-200"
            aria-label="Call Now"
          >
            <Phone className="w-4 h-4" />
          </Link>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-white hover:text-white/80 transition-colors"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#161616]/95 backdrop-blur-md border-b border-white/10 px-6 py-6 transition-all">
          <nav className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-sm font-bold tracking-wider text-white/90 hover:text-white py-1"
              >
                {link.name}
              </Link>
            ))}
          </nav>
          <div className="pt-6 mt-4 border-t border-white/10 flex flex-col gap-3">
            <Link
              href={`tel:${siteConfig.contact.phone.replace(/[^0-9+]/g, "")}`}
              className="w-full text-center py-2.5 rounded-full border-2 border-white/80 text-white font-bold text-xs tracking-widest hover:border-[#C5A262] hover:text-[#C5A262] transition-colors duration-200"
            >
              CALL NOW
            </Link>
            <div className="flex items-center justify-between text-xs text-white/70 pt-2">
              <span>Language:</span>
              <button
                onClick={() => setCurrentLang(currentLang === "EN" ? "ES" : "EN")}
                className="font-bold text-white px-3 py-1 rounded bg-[#2a2a2a] border border-white/10"
              >
                {currentLang === "EN" ? "🇺🇸 English" : "🇲🇽 Español"}
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}