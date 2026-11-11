"use client";

import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import Image from "next/image";
import Link from "next/link";
import { ChevronDown, Menu, X, Phone } from "lucide-react";
import { siteConfig } from "@/src/config/site";
import { useLanguage } from "./LanguageProvider";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [langDropdownOpen, setLangDropdownOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { language, setLanguage } = useLanguage();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (!mobileMenuOpen) return;

    const previousOverflow = document.body.style.overflow;
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setMobileMenuOpen(false);
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [mobileMenuOpen]);

  const navLinks = [
    { name: language === "es" ? "SERVICIOS" : "SERVICES", href: "/services" },
    { name: language === "es" ? "GALERÍA" : "GALLERY", href: "/gallery" },
    {
      name: language === "es" ? "PERFIL DE LA EMPRESA" : "CAPABILITY STATEMENT",
      href: "/capability-statement",
    },
    { name: language === "es" ? "CONTACTO" : "CONTACT", href: "/contact" },
  ];

  const header = (
    <header
      className={`w-full transition-colors duration-300 ${
        isScrolled
          ? "fixed left-0 right-0 top-0 z-[9999] bg-[#C5A262] shadow-lg"
          : "relative z-30 bg-transparent"
      }`}
    >
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
              className={`text-[13px] font-bold tracking-wider transition-colors duration-200 ${
                isScrolled
                  ? "text-[#181818] hover:text-black"
                  : "text-white/90 hover:text-white"
              }`}
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Desktop CTA & Language Switcher */}
        <div className="hidden lg:flex items-center gap-4">
          <Link
            href={`tel:${siteConfig.contact.phone.replace(/[^0-9+]/g, "")}`}
            className={`px-6 py-2 rounded-full border-2 font-bold text-xs tracking-widest transition-colors duration-200 ${
              isScrolled
                ? "border-[#181818]/80 text-[#181818] hover:border-white hover:text-white"
                : "border-white/80 text-white hover:border-[#C5A262] hover:text-[#C5A262]"
            }`}
          >
            CALL NOW
          </Link>

          {/* Language Selector Pill */}
          <div className="relative">
            <button
              onClick={() => setLangDropdownOpen(!langDropdownOpen)}
              className="flex items-center gap-2 bg-[#333333]/90 hover:bg-[#444444] text-white px-3 py-1.5 rounded-full border border-white/10 transition-colors text-xs font-semibold"
              aria-label={language === "es" ? "Seleccionar idioma" : "Select language"}
              aria-expanded={langDropdownOpen}
            >
              {language === "en" ? (
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
                    setLanguage("en");
                    setLangDropdownOpen(false);
                  }}
                  className={`w-full flex items-center gap-2.5 px-3 py-2 text-left hover:bg-white/10 transition-colors ${
                    language === "en" ? "text-white font-bold" : "text-white/70"
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
                    setLanguage("es");
                    setLangDropdownOpen(false);
                  }}
                  className={`w-full flex items-center gap-2.5 px-3 py-2 text-left hover:bg-white/10 transition-colors ${
                    language === "es" ? "text-white font-bold" : "text-white/70"
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
            className={`p-2 rounded-full border-2 transition-colors duration-200 ${
              isScrolled
                ? "border-[#181818]/60 text-[#181818] hover:border-white hover:text-white"
                : "border-white/60 text-white hover:border-[#C5A262] hover:text-[#C5A262]"
            }`}
            aria-label={language === "es" ? "Llamar ahora" : "Call Now"}
          >
            <Phone className="w-4 h-4" />
          </Link>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className={`p-2 transition-colors ${
              isScrolled
                ? "text-[#181818] hover:text-black"
                : "text-white hover:text-white/80"
            }`}
            aria-label={
              language === "es"
                ? mobileMenuOpen
                  ? "Cerrar menú de navegación"
                  : "Abrir menú de navegación"
                : mobileMenuOpen
                  ? "Close navigation menu"
                  : "Open navigation menu"
            }
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-navigation"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      <button
        type="button"
        aria-label={language === "es" ? "Cerrar menú de navegación" : "Close navigation menu"}
        tabIndex={mobileMenuOpen ? 0 : -1}
        aria-hidden={!mobileMenuOpen}
        onClick={() => setMobileMenuOpen(false)}
        className={`fixed inset-0 z-[60] bg-black/60 transition-opacity duration-300 motion-reduce:transition-none lg:hidden ${
          mobileMenuOpen ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
      />
      <aside
        id="mobile-navigation"
        aria-label={language === "es" ? "Navegación móvil" : "Mobile navigation"}
        aria-hidden={!mobileMenuOpen}
        inert={!mobileMenuOpen}
        className={`fixed inset-y-0 left-0 z-[61] flex w-[min(85vw,360px)] flex-col overflow-y-auto border-r border-white/10 bg-[#181818] px-6 py-6 shadow-2xl transition-transform duration-300 ease-in-out motion-reduce:transition-none lg:hidden ${
          mobileMenuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="mb-10 flex items-center justify-between">
          <span className="text-sm font-black uppercase tracking-widest text-[#C5A262]">
            PG Carpentry Plus
          </span>
          <button
            type="button"
            onClick={() => setMobileMenuOpen(false)}
            aria-label={language === "es" ? "Cerrar menú de navegación" : "Close navigation menu"}
            className="rounded-full p-2 text-white/80 transition-colors hover:bg-white/10 hover:text-white"
          >
            <X className="h-5 w-5" />
          </button>
        </div>
        <nav className="flex flex-col gap-5">
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
        <div className="mt-8 flex flex-col gap-4 border-t border-white/10 pt-6">
          <Link
            href={`tel:${siteConfig.contact.phone.replace(/[^0-9+]/g, "")}`}
            onClick={() => setMobileMenuOpen(false)}
            className="w-full rounded-full border-2 border-white/80 py-2.5 text-center text-xs font-bold tracking-widest text-white transition-colors duration-200 hover:border-[#C5A262] hover:text-[#C5A262]"
          >
            {language === "es" ? "LLAMAR AHORA" : "CALL NOW"}
          </Link>
          <div className="flex items-center justify-between pt-2 text-xs text-white/70">
            <span>{language === "es" ? "Idioma:" : "Language:"}</span>
            <button
              onClick={() => setLanguage(language === "en" ? "es" : "en")}
              className="rounded border border-white/10 bg-[#2a2a2a] px-3 py-1 font-bold text-white"
            >
              {language === "en" ? "🇺🇸 English" : "🇲🇽 Español"}
            </button>
          </div>
        </div>
      </aside>
    </header>
  );

  return (
    <div className="relative z-50 h-[76px] w-full sm:h-[84px]">
      {isScrolled && typeof document !== "undefined"
        ? createPortal(header, document.body)
        : header}
    </div>
  );
}