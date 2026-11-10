import Image from "next/image";

export default function Craftsmanship() {
  const items = [
    {
      title: "CUSTOM BUILT-INS",
      image: "/custom-built-ins.webp",
      alt: "Custom built-in entertainment center and cabinetry",
    },
    {
      title: "FEATURE WALLS",
      image: "/feature-walls.webp",
      alt: "Geometric decorative accent wall molding in luxury living room",
    },
    {
      title: "LUXURY TRIM",
      image: "/luxury-trim.webp",
      alt: "Elegant hallway with architectural wainscoting and luxury trim",
    },
    {
      title: "CEILING BEAMS",
      image: "/ceiling-beams.webp",
      alt: "Rustic vaulted ceiling with natural wood exposed beams",
    },
  ];

  return (
    <section className="relative w-full bg-[#181818] text-white pt-10 sm:pt-14 md:pt-16 pb-24 sm:pb-28 md:pb-36">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-10 sm:mb-14 md:mb-16">
          <p className="text-xs sm:text-sm font-semibold tracking-wide text-[#C5A262] mb-1.5 sm:mb-2">
            What We Offer
          </p>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-black uppercase tracking-tight text-white">
            CUSTOM CRAFTSMANSHIP
          </h2>
        </div>

        {/* 4 Vertical Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-6">
          {items.map((item, index) => (
            <div key={index} className="flex flex-col group cursor-pointer">
              {/* Card Image */}
              <div className="relative aspect-[351/576] w-full overflow-hidden shadow-2xl bg-[#111111]">
                <Image
                  src={item.image}
                  alt={item.alt}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  className="object-cover object-center transition-transform duration-500 ease-out group-hover:scale-105"
                />
                {/* Subtle hover overlay */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/15 transition-colors duration-300" />
              </div>

              {/* Title Below Image */}
              <h3 className="mt-4 sm:mt-5 text-center text-sm sm:text-base md:text-lg font-black uppercase tracking-wider text-white transition-colors duration-300 group-hover:text-[#C5A262]">
                {item.title}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
