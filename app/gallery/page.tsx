import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Footer from "@/components/Footer";
import LocalizedImage from "@/components/LocalizedImage";
import LocalizedText from "@/components/LocalizedText";
import Navbar from "@/components/Navbar";
import { siteConfig } from "@/src/config/site";

export const metadata: Metadata = {
  title: `Gallery | ${siteConfig.name}`,
  description:
    "Browse custom carpentry projects by PG Carpentry Plus, including built-ins, architectural trim, accent walls, ceilings, and more.",
};

const galleryItems = [
  {
    image: "built-in-mudroom-bench-dark-shiplap-wall.webp",
    title: "Dark Shiplap Mudroom Bench",
    spanishTitle: "Banca para Recibidor con Revestimiento Oscuro",
    alt: "Built-in mudroom bench with dark shiplap and storage",
    spanishAlt: "Banca empotrada para recibidor con revestimiento oscuro y almacenamiento",
  },
  {
    image: "cream-beaded-wainscoting-wall-living-room-detail.webp",
    title: "Cream Beaded Wainscoting",
    spanishTitle: "Revestimiento Decorativo Color Crema",
    alt: "Cream beaded wainscoting detail in a living room",
    spanishAlt: "Detalle de revestimiento decorativo color crema en una sala",
  },
  {
    image: "custom-hollow-wood-beams-construction.webp",
    title: "Custom Hollow Wood Beams",
    spanishTitle: "Vigas Huecas de Madera a Medida",
    alt: "Custom hollow wood beams during construction",
    spanishAlt: "Vigas huecas de madera a medida durante su construcción",
  },
  {
    image: "custom-olive-green-mudroom-lockers-bench.webp",
    title: "Olive Green Mudroom Lockers",
    spanishTitle: "Casilleros Verde Oliva para Recibidor",
    alt: "Olive green built-in mudroom lockers and bench",
    spanishAlt: "Casilleros empotrados verde oliva y banca para recibidor",
  },
  {
    image: "dark-grey-geometric-accent-wall-molding.webp",
    title: "Geometric Accent Wall",
    spanishTitle: "Pared Decorativa Geométrica",
    alt: "Dark grey geometric accent wall with custom molding",
    spanishAlt: "Pared decorativa geométrica gris oscuro con molduras a medida",
  },
  {
    image: "double-sliding-barn-doors-living-room-entry.webp",
    title: "Sliding Barn Doors",
    spanishTitle: "Puertas Corredizas Estilo Granero",
    alt: "Double sliding barn doors in a living room entry",
    spanishAlt: "Puertas dobles corredizas estilo granero en la entrada de una sala",
  },
  {
    image: "floating-shelves.webp",
    title: "Floating Shelves",
    spanishTitle: "Estantes Flotantes",
    alt: "Custom floating shelves",
    spanishAlt: "Estantes flotantes a medida",
  },
  {
    image: "grey-shiplap-vaulted-ceiling-installation.webp",
    title: "Grey Shiplap Vaulted Ceiling",
    spanishTitle: "Techo Abovedado con Revestimiento Gris",
    alt: "Grey shiplap installed on a vaulted ceiling",
    spanishAlt: "Revestimiento gris instalado en un techo abovedado",
  },
  {
    image: "home-office-desk-nook-blue-shiplap-accent-wall.webp",
    title: "Blue Shiplap Office Nook",
    spanishTitle: "Rincón de Oficina con Revestimiento Azul",
    alt: "Home office desk nook with a blue shiplap accent wall",
    spanishAlt: "Escritorio de oficina en casa con pared decorativa azul",
  },
  {
    image: "lumber-whiteoak.webp",
    title: "White Oak Lumber",
    spanishTitle: "Madera de Roble Blanco",
    alt: "White oak lumber prepared for custom carpentry",
    spanishAlt: "Madera de roble blanco preparada para carpintería a medida",
  },
  {
    image: "luxury-living-room-vaulted-ceiling-dark-wood-beams.webp",
    title: "Vaulted Ceiling & Dark Wood Beams",
    spanishTitle: "Techo Abovedado y Vigas de Madera Oscura",
    alt: "Luxury living room with a vaulted ceiling and dark wood beams",
    spanishAlt: "Sala de lujo con techo abovedado y vigas de madera oscura",
  },
  {
    image: "minimalist-bedroom-natural-wood-ceiling-chandelier.webp",
    title: "Natural Wood Bedroom Ceiling",
    spanishTitle: "Techo de Madera Natural en Recámara",
    alt: "Minimalist bedroom with a natural wood ceiling and chandelier",
    spanishAlt: "Recámara minimalista con techo de madera natural y candelabro",
  },
  {
    image: "modern-diy-wood-slat-accent-wall.webp",
    title: "Wood Slat Accent Wall",
    spanishTitle: "Pared Decorativa de Listones de Madera",
    alt: "Modern wood slat accent wall",
    spanishAlt: "Pared decorativa moderna de listones de madera",
  },
  {
    image: "modern-entryway-wood-slat-accent-wall.webp",
    title: "Modern Slat Entryway",
    spanishTitle: "Entrada Moderna con Listones",
    alt: "Modern entryway with a wood slat accent wall",
    spanishAlt: "Entrada moderna con pared decorativa de listones de madera",
  },
  {
    image: "modern-farmhouse-home-office-white-barn-door.webp",
    title: "Farmhouse Home Office",
    spanishTitle: "Oficina en Casa Estilo Campestre",
    alt: "Modern farmhouse home office with a white barn door",
    spanishAlt: "Oficina moderna estilo campestre con puerta blanca tipo granero",
  },
  {
    image: "modern-hallway-archway-exposed-wood-header-beam.webp",
    title: "Exposed Wood Header Beam",
    spanishTitle: "Viga de Madera Expuesta",
    alt: "Modern hallway archway with an exposed wood header beam",
    spanishAlt: "Arco moderno en pasillo con una viga de madera expuesta",
  },
  {
    image: "modern-white-kitchen-vaulted-ceiling-natural-beams.webp",
    title: "White Kitchen & Natural Beams",
    spanishTitle: "Cocina Blanca y Vigas Naturales",
    alt: "Modern white kitchen with a vaulted ceiling and natural beams",
    spanishAlt: "Cocina blanca moderna con techo abovedado y vigas naturales",
  },
  {
    image: "natural-wood-floating-shelves-installation.webp",
    title: "Natural Wood Floating Shelves",
    spanishTitle: "Estantes Flotantes de Madera Natural",
    alt: "Natural wood floating shelves installation",
    spanishAlt: "Instalación de estantes flotantes de madera natural",
  },
  {
    image: "new-home-construction-fireplace-framing-vaulted-ceiling.webp",
    title: "Fireplace & Ceiling Framing",
    spanishTitle: "Estructura para Chimenea y Techo",
    alt: "New home construction with fireplace framing and a vaulted ceiling",
    spanishAlt: "Casa nueva en construcción con estructura para chimenea y techo abovedado",
  },
  {
    image: "open-concept-living-room-kitchen-exposed-beams.webp",
    title: "Open-Concept Beamed Interior",
    spanishTitle: "Interior Abierto con Vigas Expuestas",
    alt: "Open-concept living room and kitchen with exposed beams",
    spanishAlt: "Sala y cocina de concepto abierto con vigas expuestas",
  },
  {
    image: "reclaimed-wood-wall-plank-color-samples.webp",
    title: "Reclaimed Wood Plank Samples",
    spanishTitle: "Muestras de Tablas de Madera Recuperada",
    alt: "Reclaimed wood wall plank color samples",
    spanishAlt: "Muestras de colores para revestimiento con madera recuperada",
  },
  {
    image: "shiplap-ceiling.webp",
    title: "Shiplap Ceiling",
    spanishTitle: "Techo con Revestimiento de Madera",
    alt: "Custom shiplap ceiling",
    spanishAlt: "Techo con revestimiento de madera a medida",
  },
  {
    image: "white-brick-fireplace-reclaimed-wood-mantel-decor.webp",
    title: "Brick Fireplace & Reclaimed Wood Mantel",
    spanishTitle: "Chimenea de Ladrillo y Repisa de Madera Recuperada",
    alt: "White brick fireplace with a reclaimed wood mantel",
    spanishAlt: "Chimenea de ladrillo blanco con repisa de madera recuperada",
  },
  {
    image: "white-built-in-mudroom-bench-storage.webp",
    title: "White Built-in Mudroom Bench",
    spanishTitle: "Banca Blanca Empotrada para Recibidor",
    alt: "White built-in mudroom bench with storage",
    spanishAlt: "Banca blanca empotrada para recibidor con almacenamiento",
  },
  {
    image: "white-shiplap-fireplace-surround-built-ins.webp",
    title: "Shiplap Fireplace & Built-ins",
    spanishTitle: "Chimenea con Revestimiento y Muebles Empotrados",
    alt: "White shiplap fireplace surround with built-in shelves",
    spanishAlt: "Marco de chimenea con revestimiento blanco y estantes empotrados",
  },
];

const imageRatios = [
  "aspect-[4/3]",
  "aspect-[3/4]",
  "aspect-square",
  "aspect-[5/4]",
];

export default function GalleryPage() {
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
              <LocalizedText english="Our Work" spanish="Nuestros Proyectos" />
            </p>
            <h1 className="text-4xl font-black uppercase tracking-tight sm:text-6xl lg:text-7xl">
              <LocalizedText english="Gallery" spanish="Galería" />
            </h1>
            <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-white/85 sm:text-base">
              <LocalizedText
                english="Explore custom carpentry details and finished spaces, crafted with care by PG Carpentry Plus."
                spanish="Explore los detalles de carpintería a medida y los espacios terminados con esmero por PG Carpentry Plus."
              />
            </p>
          </div>
        </div>
      </section>

      <main>
        <section
          aria-label="Galería de proyectos de carpintería"
          className="mx-auto max-w-[1400px] px-4 py-12 sm:px-6 sm:py-16 lg:px-8 lg:py-20"
        >
          <div className="mb-8 flex flex-col gap-3 sm:mb-10 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="mb-2 text-xs font-bold uppercase tracking-[0.25em] text-[#C5A262]">
                <LocalizedText
                  english="Craftsmanship In Every Detail"
                  spanish="Artesanía en Cada Detalle"
                />
              </p>
              <h2 className="text-2xl font-black uppercase tracking-tight sm:text-3xl">
                <LocalizedText english="Our Work" spanish="Nuestros Proyectos" />
              </h2>
            </div>
            <p className="text-sm text-white/60">
              <LocalizedText
                english={`${galleryItems.length} custom carpentry projects`}
                spanish={`${galleryItems.length} proyectos de carpintería a medida`}
              />
            </p>
          </div>

          <div className="columns-1 gap-4 sm:columns-2 lg:columns-3 xl:columns-4">
            {galleryItems.map((item, index) => (
              <article
                key={item.image}
                className="group mb-4 break-inside-avoid overflow-hidden bg-[#222222]"
              >
                <div
                  className={`relative overflow-hidden ${imageRatios[index % imageRatios.length]}`}
                >
                  <LocalizedImage
                    src={`/gallery/${item.image}`}
                    englishAlt={item.alt}
                    spanishAlt={item.spanishAlt}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, (max-width: 1280px) 33vw, 25vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    priority={index < 4}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent opacity-80 transition-opacity group-hover:opacity-100" />
                  <h3 className="absolute inset-x-0 bottom-0 p-4 text-sm font-bold text-white sm:p-5">
                    <LocalizedText
                      english={item.title}
                      spanish={item.spanishTitle}
                    />
                  </h3>
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
                  english="Ready to plan your project?"
                  spanish="¿Listo para planear su proyecto?"
                />
              </p>
              <p className="mt-2 text-sm text-white/65">
                <LocalizedText
                  english="Let's bring your ideas to life with custom carpentry."
                  spanish="Hagamos realidad sus ideas con carpintería a medida."
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
