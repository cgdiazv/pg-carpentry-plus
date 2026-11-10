"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

const galleryImages = [
  {
    src: "/img01.webp",
    alt: "Exclusive custom woodwork and luxury interior finish",
  },
  {
    src: "/img02.webp",
    alt: "Architectural ceiling beams and custom carpentry design",
  },
  {
    src: "/img03.webp",
    alt: "Custom decorative wall paneling and trim craftsmanship",
  },
  {
    src: "/img04.webp",
    alt: "Bespoke built-in cabinetry and interior transformations",
  },
  {
    src: "/img05.webp",
    alt: "Master suite custom woodwork and modern trim installation",
  },
  {
    src: "/img06.webp",
    alt: "Precision finish carpentry and architectural detailing",
  },
];

export default function ExclusiveWork() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleCount, setVisibleCount] = useState(3);
  const [isPaused, setIsPaused] = useState(false);

  // Update visible items based on responsive viewport
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setVisibleCount(1);
      } else if (window.innerWidth < 1024) {
        setVisibleCount(2);
      } else {
        setVisibleCount(3);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const maxIndex = Math.max(0, galleryImages.length - visibleCount);
  const safeIndex = Math.min(currentIndex, maxIndex);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  }, [maxIndex]);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev <= 0 ? maxIndex : prev - 1));
  };

  // Auto-play carousel
  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);
    return () => clearInterval(interval);
  }, [isPaused, nextSlide]);

  return (
    <section
      id="exclusive-work"
      className="relative w-full bg-[#181818] py-16 sm:py-20 md:py-28 text-white overflow-hidden"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Anchor for Navbar GALLERY link */}
      <div id="gallery" className="absolute -top-24" />

      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-10 sm:mb-14 md:mb-16">
          <p className="text-xs sm:text-sm font-semibold tracking-wide text-[#C5A262] mb-1.5 sm:mb-2">
            Premium Qulity
          </p>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-black uppercase tracking-tight text-white">
            EXCLUSIVE WORKS
          </h2>
        </div>

        {/* Carousel Wrapper */}
        <div className="relative">
          {/* Slides Viewport */}
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-out"
              style={{
                transform: `translateX(-${safeIndex * (100 / visibleCount)}%)`,
              }}
            >
              {galleryImages.map((item, index) => (
                <div
                  key={index}
                  className="px-2 sm:px-3 flex-shrink-0"
                  style={{ width: `${100 / visibleCount}%` }}
                >
                  <div className="relative aspect-square w-full overflow-hidden shadow-2xl bg-[#111111] group cursor-pointer">
                    <Image
                      src={item.src}
                      alt={item.alt}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
                      priority={index < 3}
                    />
                    {/* Dark gradient & border on hover */}
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
                    <div className="absolute inset-0 border-2 border-transparent group-hover:border-[#C5A262]/80 transition-colors duration-300 pointer-events-none" />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Controls (Left & Right Buttons) */}
          <button
            onClick={prevSlide}
            aria-label="Previous Slide"
            className="absolute -left-3 sm:-left-5 top-1/2 -translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-[#181818]/90 border border-white/20 text-white flex items-center justify-center hover:border-[#C5A262] hover:text-[#C5A262] transition-colors duration-200 shadow-xl z-10"
          >
            <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
          </button>

          <button
            onClick={nextSlide}
            aria-label="Next Slide"
            className="absolute -right-3 sm:-right-5 top-1/2 -translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-[#181818]/90 border border-white/20 text-white flex items-center justify-center hover:border-[#C5A262] hover:text-[#C5A262] transition-colors duration-200 shadow-xl z-10"
          >
            <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
          </button>
        </div>

        {/* Indicator Dots */}
        <div className="flex justify-center items-center gap-2.5 mt-8 sm:mt-12">
          {Array.from({ length: maxIndex + 1 }).map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              aria-label={`Go to slide ${index + 1}`}
              className={`h-2.5 rounded-full transition-all duration-300 ${
                safeIndex === index
                  ? "w-8 bg-[#C5A262]"
                  : "w-2.5 bg-white/30 hover:bg-white/60"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
