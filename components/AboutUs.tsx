import Image from "next/image";
import Link from "next/link";
import { Check } from "lucide-react";

export default function AboutUs({
  showHighlights = false,
}: {
  showHighlights?: boolean;
}) {
  return (
    <section id="about" className="relative w-full bg-[#181818] py-14 sm:py-20 md:py-24 text-white">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 overflow-hidden shadow-2xl">
          {/* Left Column: Gold Information Box */}
          <div className="bg-[#C5A262] p-8 sm:p-12 md:p-16 lg:p-20 flex flex-col justify-center items-start">
            <span className="text-xs sm:text-sm font-semibold text-white/90 tracking-wide mb-3 sm:mb-4">
              Who We Are
            </span>

            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-[50px] font-black uppercase text-white leading-[1.08] tracking-tight mb-5 sm:mb-6">
              <span className="block">WE PROVIDE</span>
              <span className="block">TAILORED</span>
              <span className="block">DESIGNS</span>
            </h2>

            <p className={`text-xs sm:text-sm md:text-[14px] leading-relaxed font-medium text-white/95 max-w-xl ${showHighlights ? "mb-5 sm:mb-6" : "mb-8 sm:mb-10"}`}>
              Our Mission Is To Enhance Your Home Through Beautifully Crafted Carpentry Designs.
              With A Commitment To Quality Workmanship, Integrity, And Efficient Service, We Take
              Pride In Delivering Trim Solutions That Bring Lasting Value And Character To Every Space.
            </p>

            {showHighlights && (
              <div className="mb-8 grid w-full grid-cols-1 gap-5 sm:grid-cols-[0.9fr_1.1fr] sm:items-center sm:gap-4 lg:mb-10">
                <div className="relative aspect-[4/3] w-full overflow-hidden">
                  <Image
                    src="/video-img-1.jpg"
                    alt="Carpenter hand-planing wood in a workshop"
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 35vw, 18vw"
                    className="object-cover"
                  />
                </div>
                <ul className="space-y-3 text-xs font-semibold leading-relaxed text-white sm:text-sm">
                  {[
                    "Bringing Your Vision To Life",
                    "Artistry In The Details",
                    "Custom Interior Transformations",
                    "Craftsmanship Without Borders",
                  ].map((highlight) => (
                    <li key={highlight} className="flex items-center gap-2">
                      <span className="flex h-3.5 w-3.5 shrink-0 items-center justify-center rounded-full bg-white">
                        <Check
                          className="h-2.5 w-2.5 text-[#C5A262]"
                          strokeWidth={3}
                          aria-hidden="true"
                        />
                      </span>
                      {highlight}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            <Link
              href="#quote"
              className="inline-flex items-center justify-center px-8 sm:px-9 py-3.5 sm:py-4 rounded-full bg-white text-[#C5A262] hover:bg-neutral-100 hover:text-[#b18d4d] active:bg-neutral-200 font-bold text-xs sm:text-sm tracking-widest uppercase shadow-lg transition-all duration-200 transform hover:scale-[1.02]"
            >
              GET FREE QUOTE
            </Link>
          </div>

          {/* Right Column: Fireplace & Built-ins Image */}
          <div className="relative min-h-[380px] sm:min-h-[460px] lg:min-h-[580px] w-full bg-[#222222]">
            <Image
              src="/white-brick-fireplace.webp"
              alt="White brick fireplace with reclaimed wood mantel and custom built-in shelves"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover object-center"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
