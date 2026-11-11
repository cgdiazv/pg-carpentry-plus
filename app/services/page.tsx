import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import AboutUs from "@/components/AboutUs";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { siteConfig } from "@/src/config/site";

export const metadata: Metadata = {
  title: `Services | ${siteConfig.name}`,
  description:
    "Explore custom carpentry services from PG Carpentry Plus, including built-ins, architectural trim, accent walls, ceilings, framing, and more.",
};

const services = [
  {
    title: "Custom Cabinetry & Built-ins",
    description:
      "Made-to-fit cabinetry, shelving, and built-ins that bring purposeful storage and a polished focal point to your home.",
    image: "/custom-built-ins.webp",
    alt: "Custom built-in cabinetry and shelving",
  },
  {
    title: "Finish Carpentry & Architectural Trim",
    description:
      "Crown molding, baseboards, and architectural details finished with precise cuts and clean transitions.",
    image: "/luxury-trim.webp",
    alt: "Architectural trim and wall paneling in a finished interior",
  },
  {
    title: "Accent Walls & Shiplap",
    description:
      "Distinctive wall treatments, from geometric molding to shiplap, that add texture and character to a room.",
    image: "/dark-grey-geometric-accent-wall-molding.webp",
    alt: "Geometric accent wall with custom molding",
  },
  {
    title: "Ceiling Designs & Beams",
    description:
      "Custom ceiling details, shiplap, and beams that add warmth and architectural interest overhead.",
    image: "/ceiling-beams.webp",
    alt: "Vaulted ceiling with exposed wood beams",
  },
  {
    title: "Framing & Structural Woodwork",
    description:
      "Careful framing and structural woodwork to support remodels, new layouts, and the details that complete them.",
    image: "/new-home-construction-fireplace-framing-vaulted-ceiling.webp",
    alt: "Interior framing for a new home construction project",
  },
  {
    title: "Decks, Pergolas & Exterior Woodcraft",
    description:
      "Custom exterior woodwork that extends comfortable, functional living space beyond the walls of your home.",
    image: "/custom-hollow-wood-beams-construction.webp",
    alt: "Custom wood beam construction detail",
  },
  {
    title: "Door & Window Installations",
    description:
      "Careful installation work that completes an update and helps doors and windows fit seamlessly into your home.",
    image: "/double-sliding-barn-doors-living-room-entry.webp",
    alt: "Custom sliding barn doors installed in a living room",
  },
];

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-[#181818] text-white">
      <section className="relative isolate flex min-h-[360px] flex-col overflow-hidden border-b border-white/10 sm:min-h-[410px] lg:min-h-[450px]">
        <Image
          src="/luxury-home-interior-showcasing-premium-carpentry-e1773331074469.webp"
          alt=""
          fill
          priority
          sizes="100vw"
          className="absolute inset-0 -z-10 object-cover object-center"
        />
        <div className="absolute inset-0 -z-10 bg-black/45" />
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-black/50 via-black/15 to-black/65" />
        <Navbar />
        <div className="mx-auto flex w-full max-w-[1400px] flex-1 flex-col items-center justify-center px-4 pb-12 pt-8 text-center sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="mb-3 text-xs font-bold uppercase tracking-[0.3em] text-[#C5A262] sm:text-sm">
              Premium Quality
            </p>
            <h1 className="text-4xl font-black uppercase tracking-tight sm:text-6xl lg:text-7xl">
              Services
            </h1>
            <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-white/85 sm:text-base">
              Thoughtful carpentry and quality craftsmanship for the details
              that make a house feel like home.
            </p>
          </div>
        </div>
      </section>

      <AboutUs showHighlights />

      <main>
        <section
          id="services"
          className="mx-auto max-w-[1400px] px-4 py-14 sm:px-6 sm:py-20 lg:px-8"
        >
          <div className="mb-9 max-w-2xl sm:mb-12">
            <p className="mb-3 text-xs font-bold uppercase tracking-[0.25em] text-[#C5A262]">
              What We Do
            </p>
            <h2 className="text-3xl font-black uppercase tracking-tight sm:text-4xl">
              Custom work, made for your space.
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-white/70 sm:text-base">
              From a single architectural detail to a larger home improvement
              project, we bring care and craftsmanship to every part of the
              work.
            </p>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service, index) => (
              <article
                key={service.title}
                className="group overflow-hidden border border-white/10 bg-[#202020]"
              >
                <div className="relative aspect-[4/3] overflow-hidden bg-[#111111]">
                  <Image
                    src={service.image}
                    alt={service.alt}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-5 sm:p-6">
                  <span className="text-xs font-bold tracking-[0.2em] text-[#C5A262]">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <h3 className="mt-3 text-lg font-bold leading-snug">
                    {service.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-white/65">
                    {service.description}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="border-y border-white/10 bg-[#202020]">
          <div className="mx-auto flex max-w-[1400px] flex-col gap-6 px-4 py-10 sm:px-6 sm:py-12 md:flex-row md:items-center md:justify-between lg:px-8">
            <div>
              <p className="text-xl font-bold sm:text-2xl">
                Have a project in mind?
              </p>
              <p className="mt-2 text-sm text-white/65">
                Tell us what you have in mind and let&apos;s talk through the
                details.
              </p>
            </div>
            <Link
              href={`mailto:${siteConfig.contact.email}`}
              className="inline-flex w-fit items-center gap-2 rounded-full bg-[#C5A262] px-6 py-3 text-sm font-bold text-[#181818] transition-colors hover:bg-[#d8b979]"
            >
              Discuss Your Project
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
