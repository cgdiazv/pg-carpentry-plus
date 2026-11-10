"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { Check } from "lucide-react";

interface ProgressBarItem {
  label: string;
  percentage: number;
}

const skills: ProgressBarItem[] = [
  {
    label: "SUCCESSFUL DELIVERY",
    percentage: 98,
  },
  {
    label: "CUSTOMER SATISFACTION",
    percentage: 100,
  },
];

export default function WhyChooseUs() {
  const [animate, setAnimate] = useState(false);
  const sectionRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setAnimate(true);
            observer.disconnect();
          }
        });
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    // Fallback timer to ensure animation triggers on direct load
    const timer = setTimeout(() => {
      setAnimate(true);
    }, 300);

    return () => {
      observer.disconnect();
      clearTimeout(timer);
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      id="why-choose-us"
      className="relative w-full bg-[#181818] py-16 sm:py-20 md:py-28 text-white overflow-hidden"
    >
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 sm:gap-12 lg:gap-16 items-center">
          {/* Left Column: Mudroom Bench Image */}
          <div className="relative w-full aspect-[4/3] sm:aspect-[16/10] lg:aspect-[4/5] max-h-[640px] overflow-hidden shadow-2xl bg-[#111111] group">
            <Image
              src="/built-in-mudroom-bench-dark-shiplap-wall.webp"
              alt="Custom built-in mudroom bench with dark shiplap wall and wood accents"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
              priority
            />
            {/* Subtle inner shadow overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
          </div>

          {/* Right Column: Benefits Content & Animated Progress Bars */}
          <div className="flex flex-col justify-center">
            {/* Eyebrow */}
            <p className="text-xs sm:text-sm font-semibold tracking-wide text-[#C5A262] mb-2 sm:mb-3">
              Our Benefits
            </p>

            {/* Main Title */}
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-[46px] font-black uppercase tracking-tight text-white leading-[1.12] mb-5 sm:mb-6">
              WHY CHOOSE US?
            </h2>

            {/* Description */}
            <p className="text-xs sm:text-sm md:text-[14.5px] leading-relaxed text-white/75 font-medium mb-8 sm:mb-9 max-w-xl">
              We combine years of hands-on expertise with a passion for architectural precision and
              uncompromising quality. From initial concept to the final flawless detail, our dedicated
              team delivers bespoke carpentry solutions designed to add lasting value, functionality, and
              elegance to every room in your home.
            </p>

            {/* Feature Badges */}
            <div className="flex flex-wrap gap-3 sm:gap-4 mb-8 sm:mb-10">
              <div className="inline-flex items-center gap-2.5 px-4 sm:px-5 py-2.5 sm:py-3 rounded-full bg-[#222222] border border-white/10 text-white text-xs sm:text-sm font-bold tracking-wide shadow-md">
                <span className="flex items-center justify-center w-5 h-5 rounded-full bg-[#C5A262] text-black">
                  <Check className="w-3.5 h-3.5 stroke-[3] text-black" />
                </span>
                <span>Unmatched Craftsmanship</span>
              </div>

              <div className="inline-flex items-center gap-2.5 px-4 sm:px-5 py-2.5 sm:py-3 rounded-full bg-[#222222] border border-white/10 text-white text-xs sm:text-sm font-bold tracking-wide shadow-md">
                <span className="flex items-center justify-center w-5 h-5 rounded-full bg-[#C5A262] text-black">
                  <Check className="w-3.5 h-3.5 stroke-[3] text-black" />
                </span>
                <span>Bilingual Service</span>
              </div>
            </div>

            {/* Animated Progress Bars */}
            <div className="space-y-6 sm:space-y-7 max-w-xl">
              {skills.map((item, index) => (
                <div key={index} className="space-y-2">
                  <div className="text-xs sm:text-sm font-black tracking-wider uppercase text-white">
                    {item.label}
                  </div>

                  {/* Bar Track */}
                  <div className="h-2.5 sm:h-3 w-full bg-[#262626] rounded-full overflow-hidden p-0.5 border border-white/5">
                    {/* Bar Fill */}
                    <div
                      className="h-full bg-gradient-to-r from-[#b59048] to-[#C5A262] rounded-full transition-all duration-1000 ease-out shadow-sm"
                      style={{
                        width: animate ? `${item.percentage}%` : "0%",
                        transitionDelay: `${index * 150}ms`,
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
