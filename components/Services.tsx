"use client";

import Image from "next/image";
import { useLanguage } from "./LanguageProvider";

export default function Services() {
  const { language } = useLanguage();
  const isSpanish = language === "es";
  const services = [
    {
      icon: "/bulding.svg",
      title: "CUSTOM TRIM &\nMOLDING",
      spanishTitle: "MOLDURAS Y\nACABADOS",
      singleLineTitle: "CUSTOM TRIM & MOLDING",
      description:
        "Precision-Crafted Crown Molding And Baseboards For A Polished, High-End Finish.",
      spanishDescription:
        "Molduras de corona y zoclos elaborados con precisión para lograr un acabado refinado.",
    },
    {
      icon: "/layout.svg",
      title: "ACCENT WALLS",
      spanishTitle: "PAREDES DECORATIVAS",
      singleLineTitle: "ACCENT WALLS",
      description:
        "Bold Textures And Custom Designs That Bring Character And Style To Any Room.",
      spanishDescription:
        "Texturas y diseños a medida que aportan personalidad y estilo a cualquier espacio.",
    },
    {
      icon: "/assembly.svg",
      title: "CEILING DESIGNS &\nSHIPLAP",
      spanishTitle: "DISEÑOS DE TECHO Y\nREVESTIMIENTO",
      singleLineTitle: "CEILING DESIGNS & SHIPLAP",
      description:
        "Structural Elegance For Your Ceilings With A Wide Array Of Custom Stain Options.",
      spanishDescription:
        "Diseños elegantes para techos, con una amplia variedad de acabados y tintes a medida.",
    },
    {
      icon: "/framesolution.svg",
      title: "CUSTOM CLOSETS",
      spanishTitle: "CLOSETS A MEDIDA",
      singleLineTitle: "CUSTOM CLOSETS",
      description:
        "Tailored Storage And Organization Systems Designed To Maximize Your Space.",
      spanishDescription:
        "Sistemas de almacenamiento y organización diseñados para aprovechar cada espacio.",
    },
  ];

  return (
    <section id="services" className="relative w-full bg-[#181818] text-white pt-6 sm:pt-8 md:pt-10 pb-12 sm:pb-16 md:pb-20">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16 md:mb-20">
          <p className="text-xs sm:text-sm font-semibold tracking-wide text-[#C5A262] mb-1.5 sm:mb-2">
            {isSpanish ? "Calidad Superior" : "Premium Quality"}
          </p>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-black uppercase tracking-tight text-white">
            {isSpanish ? "SERVICIOS" : "SERVICES"}
          </h2>
        </div>

        {/* 4 Service Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10 lg:gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center group cursor-pointer"
            >
              {/* Service Icon */}
              <div className="relative w-16 h-16 sm:w-[70px] sm:h-[70px] mb-5 sm:mb-6 transition-transform duration-300 group-hover:scale-110">
                <Image
                  src={service.icon}
                  alt={isSpanish ? service.spanishTitle.replace("\n", " ") : service.singleLineTitle}
                  fill
                  className="object-contain"
                />
              </div>

              {/* Service Title */}
              <h3 className="text-base sm:text-lg font-black tracking-wide text-white mb-2.5 sm:mb-3 min-h-[44px] sm:min-h-[48px] flex items-center justify-center whitespace-pre-line leading-snug">
                {isSpanish ? service.spanishTitle : service.title}
              </h3>

              {/* Service Description */}
              <p className="text-xs sm:text-[13.5px] leading-relaxed text-white/75 max-w-[270px] mx-auto group-hover:text-white/90 transition-colors">
                {isSpanish ? service.spanishDescription : service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
