import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Footer from "@/components/Footer";
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
    alt: "Built-in mudroom bench with dark shiplap and storage",
  },
  {
    image: "cream-beaded-wainscoting-wall-living-room-detail.webp",
    title: "Cream Beaded Wainscoting",
    alt: "Cream beaded wainscoting detail in a living room",
  },
  {
    image: "custom-hollow-wood-beams-construction.webp",
    title: "Custom Hollow Wood Beams",
    alt: "Custom hollow wood beams during construction",
  },
  {
    image: "custom-olive-green-mudroom-lockers-bench.webp",
    title: "Olive Green Mudroom Lockers",
    alt: "Olive green built-in mudroom lockers and bench",
  },
  {
    image: "dark-grey-geometric-accent-wall-molding.webp",
    title: "Geometric Accent Wall",
    alt: "Dark grey geometric accent wall with custom molding",
  },
  {
    image: "double-sliding-barn-doors-living-room-entry.webp",
    title: "Sliding Barn Doors",
    alt: "Double sliding barn doors in a living room entry",
  },
  {
    image: "floating-shelves.webp",
    title: "Floating Shelves",
    alt: "Custom floating shelves",
  },
  {
    image: "grey-shiplap-vaulted-ceiling-installation.webp",
    title: "Grey Shiplap Vaulted Ceiling",
    alt: "Grey shiplap installed on a vaulted ceiling",
  },
  {
    image: "home-office-desk-nook-blue-shiplap-accent-wall.webp",
    title: "Blue Shiplap Office Nook",
    alt: "Home office desk nook with a blue shiplap accent wall",
  },
  {
    image: "lumber-whiteoak.webp",
    title: "White Oak Lumber",
    alt: "White oak lumber prepared for custom carpentry",
  },
  {
    image: "luxury-living-room-vaulted-ceiling-dark-wood-beams.webp",
    title: "Vaulted Ceiling & Dark Wood Beams",
    alt: "Luxury living room with a vaulted ceiling and dark wood beams",
  },
  {
    image: "minimalist-bedroom-natural-wood-ceiling-chandelier.webp",
    title: "Natural Wood Bedroom Ceiling",
    alt: "Minimalist bedroom with a natural wood ceiling and chandelier",
  },
  {
    image: "modern-diy-wood-slat-accent-wall.webp",
    title: "Wood Slat Accent Wall",
    alt: "Modern wood slat accent wall",
  },
  {
    image: "modern-entryway-wood-slat-accent-wall.webp",
    title: "Modern Slat Entryway",
    alt: "Modern entryway with a wood slat accent wall",
  },
  {
    image: "modern-farmhouse-home-office-white-barn-door.webp",
    title: "Farmhouse Home Office",
    alt: "Modern farmhouse home office with a white barn door",
  },
  {
    image: "modern-hallway-archway-exposed-wood-header-beam.webp",
    title: "Exposed Wood Header Beam",
    alt: "Modern hallway archway with an exposed wood header beam",
  },
  {
    image: "modern-white-kitchen-vaulted-ceiling-natural-beams.webp",
    title: "White Kitchen & Natural Beams",
    alt: "Modern white kitchen with a vaulted ceiling and natural beams",
  },
  {
    image: "natural-wood-floating-shelves-installation.webp",
    title: "Natural Wood Floating Shelves",
    alt: "Natural wood floating shelves installation",
  },
  {
    image: "new-home-construction-fireplace-framing-vaulted-ceiling.webp",
    title: "Fireplace & Ceiling Framing",
    alt: "New home construction with fireplace framing and a vaulted ceiling",
  },
  {
    image: "open-concept-living-room-kitchen-exposed-beams.webp",
    title: "Open-Concept Beamed Interior",
    alt: "Open-concept living room and kitchen with exposed beams",
  },
  {
    image: "reclaimed-wood-wall-plank-color-samples.webp",
    title: "Reclaimed Wood Plank Samples",
    alt: "Reclaimed wood wall plank color samples",
  },
  {
    image: "shiplap-ceiling.webp",
    title: "Shiplap Ceiling",
    alt: "Custom shiplap ceiling",
  },
  {
    image: "white-brick-fireplace-reclaimed-wood-mantel-decor.webp",
    title: "Brick Fireplace & Reclaimed Wood Mantel",
    alt: "White brick fireplace with a reclaimed wood mantel",
  },
  {
    image: "white-built-in-mudroom-bench-storage.webp",
    title: "White Built-in Mudroom Bench",
    alt: "White built-in mudroom bench with storage",
  },
  {
    image: "white-shiplap-fireplace-surround-built-ins.webp",
    title: "Shiplap Fireplace & Built-ins",
    alt: "White shiplap fireplace surround with built-in shelves",
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
              Our Work
            </p>
            <h1 className="text-4xl font-black uppercase tracking-tight sm:text-6xl lg:text-7xl">
              Gallery
            </h1>
            <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-white/85 sm:text-base">
              Explore custom carpentry details and finished spaces, crafted
              with care by PG Carpentry Plus.
            </p>
          </div>
        </div>
      </section>

      <main>
        <section
          aria-label="Carpentry project gallery"
          className="mx-auto max-w-[1400px] px-4 py-12 sm:px-6 sm:py-16 lg:px-8 lg:py-20"
        >
          <div className="mb-8 flex flex-col gap-3 sm:mb-10 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="mb-2 text-xs font-bold uppercase tracking-[0.25em] text-[#C5A262]">
                Craftsmanship In Every Detail
              </p>
              <h2 className="text-2xl font-black uppercase tracking-tight sm:text-3xl">
                Our Work
              </h2>
            </div>
            <p className="text-sm text-white/60">
              {galleryItems.length} custom carpentry projects
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
                  <Image
                    src={`/gallery/${item.image}`}
                    alt={item.alt}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, (max-width: 1280px) 33vw, 25vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    priority={index < 4}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent opacity-80 transition-opacity group-hover:opacity-100" />
                  <h3 className="absolute inset-x-0 bottom-0 p-4 text-sm font-bold text-white sm:p-5">
                    {item.title}
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
                Ready to plan your project?
              </p>
              <p className="mt-2 text-sm text-white/65">
                Let&apos;s bring your ideas to life with custom carpentry.
              </p>
            </div>
            <Link
              href="/contact"
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
