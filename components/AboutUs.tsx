import Image from "next/image";
import Link from "next/link";

export default function AboutUs() {
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

            <p className="text-xs sm:text-sm md:text-[14px] leading-relaxed font-medium text-white/95 mb-8 sm:mb-10 max-w-xl">
              Our Mission Is To Enhance Your Home Through Beautifully Crafted Carpentry Designs.
              With A Commitment To Quality Workmanship, Integrity, And Efficient Service, We Take
              Pride In Delivering Trim Solutions That Bring Lasting Value And Character To Every Space.
            </p>

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
