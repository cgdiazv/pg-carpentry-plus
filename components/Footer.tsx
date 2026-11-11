"use client";

import Link from "next/link";
import { useLanguage } from "./LanguageProvider";

export default function Footer() {
  const { language } = useLanguage();
  const isSpanish = language === "es";
  return (
    <footer className="relative w-full bg-[#181818] border-t border-white/10 text-white">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 pt-16 sm:pt-20 pb-12 sm:pb-16">
        {/* 4 Columns Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12">
          {/* Column 1: Working Hours */}
          <div>
            <h3 className="text-base sm:text-lg font-black uppercase tracking-wider text-white mb-5 sm:mb-6">
              {isSpanish ? "HORARIO" : "WORKING HOURS"}
            </h3>
            <ul className="space-y-3 text-xs sm:text-sm text-white/80 font-medium">
              <li>{isSpanish ? "Lun-Vie: 9 a. m. – 6 p. m." : "Mon-Fri: 9 AM – 6 PM"}</li>
              <li>{isSpanish ? "Sábado: 9 a. m. – 4 p. m." : "Saturday: 9 AM – 4 PM"}</li>
              <li>{isSpanish ? "Domingo: Cerrado" : "Sunday: Closed"}</li>
            </ul>
          </div>

          {/* Column 2: Office */}
          <div>
            <h3 className="text-base sm:text-lg font-black uppercase tracking-wider text-white mb-5 sm:mb-6">
              {isSpanish ? "OFICINA" : "OFFICE"}
            </h3>
            <ul className="space-y-3 text-xs sm:text-sm text-white/80 font-medium">
              <li>
                <a
                  href="tel:9722513979"
                  className="hover:text-[#C5A262] transition-colors inline-block"
                >
                  (972) 251-3979 EN
                </a>
              </li>
              <li>
                <a
                  href="tel:6823304080"
                  className="hover:text-[#C5A262] transition-colors inline-block"
                >
                  (682) 330-4080 ES
                </a>
              </li>
              <li>
                <a
                  href="mailto:info@pgcarpentryplus.com"
                  className="hover:text-[#C5A262] transition-colors inline-block"
                >
                  info@pgcarpentryplus.com
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Links */}
          <div>
            <h3 className="text-base sm:text-lg font-black uppercase tracking-wider text-white mb-5 sm:mb-6">
              {isSpanish ? "ENLACES" : "LINKS"}
            </h3>
            <ul className="space-y-3 text-xs sm:text-sm text-white/80 font-medium">
              <li>
                <Link
                  href="/services"
                  className="hover:text-[#C5A262] transition-colors inline-block"
                >
                  {isSpanish ? "Servicios" : "Services"}
                </Link>
              </li>
              <li>
                <Link
                  href="/gallery"
                  className="hover:text-[#C5A262] transition-colors inline-block"
                >
                  {isSpanish ? "Galería" : "Gallery"}
                </Link>
              </li>
              <li>
                <Link
                  href="/capability-statement"
                  className="hover:text-[#C5A262] transition-colors inline-block"
                >
                  {isSpanish ? "Perfil de la Empresa" : "Capability Statement"}
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="hover:text-[#C5A262] transition-colors inline-block"
                >
                  {isSpanish ? "Contacto" : "Contact"}
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Follow Us */}
          <div>
            <h3 className="text-base sm:text-lg font-black uppercase tracking-wider text-white mb-5 sm:mb-6">
              {isSpanish ? "SÍGANOS" : "FOLLOW US"}
            </h3>
            <div className="flex items-center gap-3">
              {/* Instagram */}
              <a
                href="https://www.instagram.com/pgcarpentryplus"
                target="_blank"
                rel="noopener noreferrer"
                aria-label={isSpanish ? "Síganos en Instagram" : "Follow us on Instagram"}
                className="w-10 h-10 rounded-full bg-white text-black flex items-center justify-center hover:bg-[#C5A262] hover:text-white transition-all duration-200 transform hover:scale-105 shadow-md"
              >
                <svg
                  className="w-5 h-5 fill-current"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>

              {/* TikTok */}
              <a
                href="https://www.tiktok.com/@pgcarpentry"
                target="_blank"
                rel="noopener noreferrer"
                aria-label={isSpanish ? "Síganos en TikTok" : "Follow us on TikTok"}
                className="w-10 h-10 rounded-full bg-white text-black flex items-center justify-center hover:bg-[#C5A262] hover:text-white transition-all duration-200 transform hover:scale-105 shadow-md"
              >
                <svg
                  className="w-4 h-4 fill-current"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path d="M19.589 6.686a4.793 4.793 0 0 1-3.77-4.245V2h-3.445v13.672a2.896 2.896 0 0 1-5.201 1.743l-.002-.001.002.001a2.895 2.895 0 0 1 3.183-4.51v-3.5a6.329 6.329 0 0 0-5.394 10.692 6.33 6.33 0 0 0 10.857-4.424V8.687a8.182 8.182 0 0 0 4.773 1.526V6.79a4.831 4.831 0 0 1-1.003-.104z" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Indeva Websites */}
        <div className="mt-16 sm:mt-24 flex flex-col sm:flex-row items-center justify-between text-xs sm:text-sm text-white/60 font-medium gap-4">
          <p>© 2026 PG Carpentry Plus</p>
          <a
            href="https://indevasa.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition-colors"
          >
            Indeva Websites
          </a>
        </div>
      </div>
    </footer>
  );
}
