"use client";

import Image from "next/image";
import Link from "next/link";
import Navbar from "./Navbar";
import { useLanguage } from "./LanguageProvider";

export default function Hero() {
  const { language } = useLanguage();
  const isSpanish = language === "es";
  const cards = [
    {
      title: "Coffered Ceilings & Beams",
      spanishTitle: "Plafones Artesonados y Vigas",
      hoverText: "BRINGING YOUR VISION TO LIFE",
      spanishHoverText: "Hacemos Realidad Su Visión",
      image: "/ceiling-beams-white.webp",
      alt: "Elegant living room with coffered ceiling beams and fireplace",
      spanishAlt: "Sala elegante con plafón artesonado y chimenea",
    },
    {
      title: "Geometric Feature Walls",
      spanishTitle: "Paredes Decorativas Geométricas",
      hoverText: "ARTISTRY IN THE DETAILS",
      spanishHoverText: "Arte en Cada Detalle",
      image: "/wall-design.webp",
      alt: "Custom decorative wall molding with elegant entryway console",
      spanishAlt: "Molduras decorativas a medida y consola en una entrada elegante",
    },
    {
      title: "Master Carpentry & Trim",
      spanishTitle: "Carpintería y Molduras",
      hoverText: "CUSTOM INTERIOR TRANSFORMATIONS",
      spanishHoverText: "Transformaciones de Interiores a Medida",
      image: "/carpenter.webp",
      alt: "Professional carpenter installing custom wall molding with nail gun",
      spanishAlt: "Carpintero profesional instalando molduras decorativas en una pared",
    },
    {
      title: "Custom Built-Ins & Cabinetry",
      spanishTitle: "Gabinetes y Muebles Empotrados",
      hoverText: "CRAFTMANSHIP WITHOUT BORDERS",
      spanishHoverText: "Artesanía Sin Límites",
      image: "/desk-tan.webp",
      alt: "Handcrafted natural wood built-in desk and wall shelving unit",
      spanishAlt: "Escritorio empotrado y estantes de madera natural hechos a mano",
    },
  ];

  return (
    <section className="relative w-full bg-[#181818] overflow-hidden text-white">
      {/* Hero Upper Section with Background Image */}
      <div className="relative w-full min-h-[640px] sm:min-h-[700px] md:min-h-[760px] lg:min-h-[800px] flex flex-col justify-between">
        {/* Background Image with Dark Overlay */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/luxury-home-interior-showcasing-premium-carpentry-e1773331074469.webp"
            alt={
              isSpanish
                ? "Interior de lujo con carpintería fina a medida"
                : "Luxury home interior showcasing premium custom carpentry"
            }
            fill
            priority
            className="object-cover object-center"
            sizes="100vw"
          />
          {/* Subtle dark gradient overlay to ensure text contrast while retaining room details */}
          <div className="absolute inset-0 bg-black/25" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-transparent to-black/70 pointer-events-none" />
        </div>

        {/* Top Navbar */}
        <Navbar />

        {/* Hero Headline & CTA in Center - positioned in the middle between navbar and cards */}
        <div className="relative z-10 flex-1 flex flex-col items-center justify-center max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-2 sm:pt-4 pb-20 sm:pb-24 md:pb-28 lg:pb-32">
          <h1 className="text-3xl sm:text-4xl md:text-[44px] lg:text-[50px] font-black uppercase tracking-tight text-white leading-[1.12] drop-shadow-md">
            <span className="block">
              {isSpanish ? "CARPINTERÍA Y REMODELACIÓN" : "CUSTOM CARPENTRY & HOME"}
            </span>
            <span className="block">
              {isSpanish ? "EN FORT WORTH" : "REMODELS IN FORT WORTH"}
            </span>
          </h1>

          <p className="mt-3 text-xs sm:text-[13px] md:text-[14px] font-semibold text-white/90 tracking-wide drop-shadow-sm max-w-2xl mx-auto">
            {isSpanish
              ? "PG Carpentry Plus ofrece carpintería a medida y remodelaciones en Fort Worth"
              : "PG Carpentry Plus offers custom carpentry and home remodels in Fort Worth"}
          </p>

          <div className="mt-5 sm:mt-6 flex justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-7 sm:px-9 py-2.5 sm:py-3 rounded-full bg-[#C5A262] hover:bg-[#b59253] active:bg-[#a68345] text-white font-bold text-xs tracking-widest uppercase shadow-xl transition-all duration-200 transform hover:scale-[1.02]"
            >
              {isSpanish ? "SOLICITE UNA COTIZACIÓN" : "GET FREE QUOTE"}
            </Link>
          </div>
        </div>
      </div>

      {/* 4 Featured Project Cards (overlapping bottom of hero into the dark background) */}
      <div className="relative z-20 -mt-16 sm:-mt-20 md:-mt-24 lg:-mt-28 pb-10 sm:pb-14 md:pb-16">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 lg:gap-4">
            {cards.map((card, index) => (
              <div
                key={index}
                className="group relative aspect-square w-full overflow-hidden shadow-2xl bg-[#111111] cursor-pointer"
              >
                <Image
                  src={card.image}
                  alt={isSpanish ? card.spanishAlt : card.alt}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  className="object-cover object-center transition-transform duration-500 ease-out group-hover:scale-110"
                />
                {/* Gold overlay and revealed text on hover */}
                <div className="absolute inset-0 bg-[#C5A262]/85 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center p-6 text-center">
                  <span className="text-white font-black text-sm sm:text-base md:text-[17px] tracking-wider uppercase leading-snug drop-shadow-md transform translate-y-3 group-hover:translate-y-0 transition-transform duration-300">
                    {isSpanish ? card.spanishHoverText : card.hoverText}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
