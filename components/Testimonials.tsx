"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import { useLanguage } from "./LanguageProvider";

export default function Testimonials() {
  const { language } = useLanguage();
  const isSpanish = language === "es";
  const testimonials = [
    {
      name: "Sarah Jenkins",
      role: "Homeowner in Fort Worth, TX",
      spanishRole: "Propietaria en Fort Worth, Texas",
      review:
        "We hired PG Carpentry Plus for a custom accent wall and ceiling beams in our main living area. The attention to detail was incredible, and the gold-standard craftsmanship truly brought character to our home. Highly recommend!",
      spanishReview:
        "Contratamos a PG Carpentry Plus para una pared decorativa y vigas de techo en nuestra sala. Su atención al detalle fue increíble y la calidad de su trabajo le dio mucha personalidad a nuestro hogar. ¡Los recomendamos ampliamente!",
    },
    {
      name: "Ricardo Martinez",
      role: "Homeowner in Fort Worth, TX",
      spanishRole: "Propietario en Fort Worth, Texas",
      review:
        "Cristyan and his team built a beautiful custom mud bench for our entryway that blends style and function perfectly. They were efficient, professional, and the bilingual communication made the whole process seamless. We love the lasting value it added to our space!",
      spanishReview:
        "Cristyan y su equipo hicieron una hermosa banca a medida para la entrada de nuestra casa, combinando perfectamente estilo y funcionalidad. Fueron eficientes y profesionales, y la comunicación bilingüe hizo que todo el proceso fuera muy sencillo. ¡Nos encanta el valor que le añadió a nuestro hogar!",
    },
    {
      name: "David Thompson",
      role: "Homeowner in Fort Worth, TX",
      spanishRole: "Propietario en Fort Worth, Texas",
      review:
        "From crown molding to a complete custom closet redesign, PG Carpentry Plus delivered exactly what they promised. Their commitment to quality workmanship and integrity is evident in every corner of our home. Best carpentry team in the area!",
      spanishReview:
        "Desde las molduras de corona hasta el rediseño completo de un closet a medida, PG Carpentry Plus cumplió exactamente lo prometido. Su compromiso con la calidad y la honestidad se nota en cada rincón de nuestro hogar. ¡El mejor equipo de carpintería de la zona!",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const nextTestimonial = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  }, [testimonials.length]);

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      nextTestimonial();
    }, 6000);
    return () => clearInterval(interval);
  }, [isPaused, nextTestimonial]);

  return (
    <section
      id="testimonials"
      className="relative w-full bg-[#181818] py-16 sm:py-20 md:py-28 text-white overflow-hidden"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-10 sm:mb-14 md:mb-16">
          <p className="text-xs sm:text-sm font-semibold tracking-wide text-[#C5A262] mb-1.5 sm:mb-2">
            {isSpanish ? "Lo Que Dicen Nuestros Clientes" : "What Our Clients Say"}
          </p>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-black uppercase tracking-tight text-white">
            {isSpanish ? "RESEÑAS" : "TESTIMONIALS"}
          </h2>
        </div>

        {/* Carousel Container */}
        <div className="relative max-w-4xl mx-auto px-4 sm:px-12">
          {/* Quote Icon */}
          <div className="flex justify-center mb-6 sm:mb-8">
            <div className="relative w-12 h-9 sm:w-14 sm:h-10 opacity-90">
              <Image
                src="/testimonial.svg"
                alt={isSpanish ? "Cita" : "Quote"}
                fill
                className="object-contain"
              />
            </div>
          </div>

          {/* 5-Star Rating */}
          <div className="flex justify-center items-center gap-1.5 mb-6 sm:mb-8">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className="w-4 h-4 sm:w-5 sm:h-5 fill-[#C5A262] text-[#C5A262]"
              />
            ))}
          </div>

          {/* Review Text Slider */}
          <div className="min-h-[160px] sm:min-h-[140px] md:min-h-[120px] flex items-center justify-center text-center">
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-white/95 font-medium leading-relaxed max-w-3xl transition-opacity duration-500 ease-in-out italic">
              &ldquo;
              {isSpanish
                ? testimonials[currentIndex].spanishReview
                : testimonials[currentIndex].review}
              &rdquo;
            </p>
          </div>

          {/* Author Name & Role */}
          <div className="text-center mt-8 sm:mt-10">
            <h3 className="text-lg sm:text-xl font-black uppercase tracking-wide text-white">
              {testimonials[currentIndex].name}
            </h3>
            <p className="text-xs sm:text-sm text-white/60 font-medium mt-1">
              {isSpanish
                ? testimonials[currentIndex].spanishRole
                : testimonials[currentIndex].role}
            </p>
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={prevTestimonial}
            aria-label={isSpanish ? "Reseña anterior" : "Previous Testimonial"}
            className="absolute left-0 top-1/2 -translate-y-1/2 p-2.5 sm:p-3 rounded-full border border-white/20 text-white hover:border-[#C5A262] hover:text-[#C5A262] transition-colors duration-200"
          >
            <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
          </button>

          <button
            onClick={nextTestimonial}
            aria-label={isSpanish ? "Siguiente reseña" : "Next Testimonial"}
            className="absolute right-0 top-1/2 -translate-y-1/2 p-2.5 sm:p-3 rounded-full border border-white/20 text-white hover:border-[#C5A262] hover:text-[#C5A262] transition-colors duration-200"
          >
            <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
          </button>

          {/* Dot Indicators */}
          <div className="flex justify-center items-center gap-2.5 mt-10 sm:mt-12">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                aria-label={
                  isSpanish ? `Ir a la reseña ${index + 1}` : `Go to slide ${index + 1}`
                }
                className={`h-2.5 rounded-full transition-all duration-300 ${
                  currentIndex === index
                    ? "w-8 bg-[#C5A262]"
                    : "w-2.5 bg-white/30 hover:bg-white/60"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
