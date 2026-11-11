import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import AboutUs from "@/components/AboutUs";
import Footer from "@/components/Footer";
import LocalizedImage from "@/components/LocalizedImage";
import Navbar from "@/components/Navbar";
import LocalizedText from "@/components/LocalizedText";
import { siteConfig } from "@/src/config/site";

export const metadata: Metadata = {
  title: `Services | ${siteConfig.name}`,
  description:
    "Explore custom carpentry services from PG Carpentry Plus, including built-ins, architectural trim, accent walls, ceilings, framing, and more.",
};

const services = [
  {
    title: "Custom Cabinetry & Built-ins",
    spanishTitle: "Gabinetes y Muebles Empotrados a Medida",
    description:
      "Made-to-fit cabinetry, shelving, and built-ins that bring purposeful storage and a polished focal point to your home.",
    spanishDescription:
      "Gabinetes, estantes y muebles empotrados hechos a la medida para ofrecer almacenamiento práctico y un punto focal refinado.",
    image: "/custom-built-ins.webp",
    alt: "Custom built-in cabinetry and shelving",
    spanishAlt: "Gabinetes y estantes empotrados a medida",
  },
  {
    title: "Finish Carpentry & Architectural Trim",
    spanishTitle: "Carpintería de Acabado y Molduras Arquitectónicas",
    description:
      "Crown molding, baseboards, and architectural details finished with precise cuts and clean transitions.",
    spanishDescription:
      "Molduras de corona, zoclos y detalles arquitectónicos con cortes precisos y uniones impecables.",
    image: "/luxury-trim.webp",
    alt: "Architectural trim and wall paneling in a finished interior",
    spanishAlt: "Molduras arquitectónicas y paneles de pared en un interior terminado",
  },
  {
    title: "Accent Walls & Shiplap",
    spanishTitle: "Paredes Decorativas y Revestimientos",
    description:
      "Distinctive wall treatments, from geometric molding to shiplap, that add texture and character to a room.",
    spanishDescription:
      "Diseños distintivos para paredes, desde molduras geométricas hasta revestimientos, que aportan textura y personalidad.",
    image: "/dark-grey-geometric-accent-wall-molding.webp",
    alt: "Geometric accent wall with custom molding",
    spanishAlt: "Pared decorativa geométrica con molduras a medida",
  },
  {
    title: "Ceiling Designs & Beams",
    spanishTitle: "Diseños de Techo y Vigas",
    description:
      "Custom ceiling details, shiplap, and beams that add warmth and architectural interest overhead.",
    spanishDescription:
      "Detalles de techo, revestimientos y vigas a medida que aportan calidez e interés arquitectónico.",
    image: "/ceiling-beams.webp",
    alt: "Vaulted ceiling with exposed wood beams",
    spanishAlt: "Techo abovedado con vigas de madera expuestas",
  },
  {
    title: "Framing & Structural Woodwork",
    spanishTitle: "Estructuras y Carpintería",
    description:
      "Careful framing and structural woodwork to support remodels, new layouts, and the details that complete them.",
    spanishDescription:
      "Estructuras y carpintería realizadas con cuidado para remodelaciones, nuevos espacios y detalles de acabado.",
    image: "/new-home-construction-fireplace-framing-vaulted-ceiling.webp",
    alt: "Interior framing for a new home construction project",
    spanishAlt: "Estructura interior de madera para una casa nueva",
  },
  {
    title: "Decks, Pergolas & Exterior Woodcraft",
    spanishTitle: "Terrazas, Pérgolas y Carpintería Exterior",
    description:
      "Custom exterior woodwork that extends comfortable, functional living space beyond the walls of your home.",
    spanishDescription:
      "Carpintería exterior a medida que amplía el espacio de convivencia y comodidad fuera de su hogar.",
    image: "/custom-hollow-wood-beams-construction.webp",
    alt: "Custom wood beam construction detail",
    spanishAlt: "Detalle de construcción con vigas de madera a medida",
  },
  {
    title: "Door & Window Installations",
    spanishTitle: "Instalación de Puertas y Ventanas",
    description:
      "Careful installation work that completes an update and helps doors and windows fit seamlessly into your home.",
    spanishDescription:
      "Instalaciones cuidadosas que completan la renovación y logran una integración armoniosa de puertas y ventanas.",
    image: "/double-sliding-barn-doors-living-room-entry.webp",
    alt: "Custom sliding barn doors installed in a living room",
    spanishAlt: "Puertas corredizas estilo granero a medida en una sala",
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
              <LocalizedText english="Premium Quality" spanish="Calidad Superior" />
            </p>
            <h1 className="text-4xl font-black uppercase tracking-tight sm:text-6xl lg:text-7xl">
              <LocalizedText english="Services" spanish="Servicios" />
            </h1>
            <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-white/85 sm:text-base">
              <LocalizedText
                english="Thoughtful carpentry and quality craftsmanship for the details that make a house feel like home."
                spanish="Carpintería cuidadosa y trabajo de calidad en los detalles que hacen de una casa un hogar."
              />
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
              <LocalizedText english="What We Do" spanish="Lo Que Hacemos" />
            </p>
            <h2 className="text-3xl font-black uppercase tracking-tight sm:text-4xl">
              <LocalizedText
                english="Custom work, made for your space."
                spanish="Trabajos a medida para su espacio."
              />
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-white/70 sm:text-base">
              <LocalizedText
                english="From a single architectural detail to a larger home improvement project, we bring care and craftsmanship to every part of the work."
                spanish="Desde un detalle arquitectónico hasta una remodelación completa, trabajamos cada proyecto con cuidado y dedicación."
              />
            </p>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service, index) => (
              <article
                key={service.title}
                className="group overflow-hidden border border-white/10 bg-[#202020]"
              >
                <div className="relative aspect-[4/3] overflow-hidden bg-[#111111]">
                  <LocalizedImage
                    src={service.image}
                    englishAlt={service.alt}
                    spanishAlt={service.spanishAlt}
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
                    <LocalizedText
                      english={service.title}
                      spanish={service.spanishTitle}
                    />
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-white/65">
                    <LocalizedText
                      english={service.description}
                      spanish={service.spanishDescription}
                    />
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
                <LocalizedText
                  english="Have a project in mind?"
                  spanish="¿Tiene un proyecto en mente?"
                />
              </p>
              <p className="mt-2 text-sm text-white/65">
                <LocalizedText
                  english="Tell us what you have in mind and let's talk through the details."
                  spanish="Cuéntenos su idea y hablemos de los detalles."
                />
              </p>
            </div>
            <Link
              href="/contact"
              className="inline-flex w-fit items-center gap-2 rounded-full bg-[#C5A262] px-6 py-3 text-sm font-bold text-[#181818] transition-colors hover:bg-[#d8b979]"
            >
              <LocalizedText
                english="Discuss Your Project"
                spanish="Hablemos de su proyecto"
              />
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
