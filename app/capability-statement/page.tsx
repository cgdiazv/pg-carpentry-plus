import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { siteConfig } from "@/src/config/site";

export const metadata: Metadata = {
  title: `Capability Statement | ${siteConfig.name}`,
  description:
    "Explore PG Carpentry Plus capabilities in custom cabinetry, finish carpentry, framing, exterior woodwork, and door and window installation in Houston, Texas.",
};

const capabilities = [
  {
    title: "Custom Cabinetry & Built-ins",
    description:
      "Purpose-built cabinetry and built-in storage designed for the space and the way it is used.",
  },
  {
    title: "Finish Carpentry & Architectural Trim",
    description:
      "Detailed trim, molding, accent walls, and finish work that bring cohesion and character to interiors.",
  },
  {
    title: "Framing & Structural Woodwork",
    description:
      "Wood framing and structural carpentry for interior projects and remodels.",
  },
  {
    title: "Decks, Pergolas & Exterior Woodcraft",
    description:
      "Custom outdoor woodwork that extends living and gathering spaces beyond the home.",
  },
  {
    title: "Door & Window Installations",
    description:
      "Careful installation work to complete updates to a home's doors and windows.",
  },
];

const projectTypes = [
  "Custom trim, molding, and finish details",
  "Accent walls, shiplap, and ceiling designs",
  "Closets, cabinetry, and built-in storage",
  "Framing and structural woodwork",
  "Decks, pergolas, and exterior carpentry",
  "Door and window installations",
];

export default function CapabilityStatementPage() {
  return (
    <div className="min-h-screen bg-[#181818] text-white">
      <div className="relative overflow-hidden border-b border-white/10">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(197,162,98,0.16),_transparent_55%)]" />
        <Navbar />
        <main className="relative mx-auto max-w-[1400px] px-4 pb-20 pt-16 sm:px-6 sm:pb-24 sm:pt-24 lg:px-8">
          <div className="max-w-4xl">
            <p className="mb-4 text-xs font-bold uppercase tracking-[0.3em] text-[#C5A262] sm:text-sm">
              PG Carpentry Plus · {siteConfig.contact.address}
            </p>
            <h1 className="text-4xl font-black uppercase leading-tight tracking-tight sm:text-6xl lg:text-7xl">
              Capability
              <span className="block text-[#C5A262]">Statement</span>
            </h1>
            <p className="mt-7 max-w-2xl text-base leading-relaxed text-white/75 sm:text-lg">
              Custom carpentry and remodeling craftsmanship for residential
              projects—from detailed interior finishes to practical built-ins
              and exterior woodwork.
            </p>
            <div className="mt-9 flex flex-wrap gap-4">
              <a
                href={`mailto:${siteConfig.contact.email}`}
                className="inline-flex items-center gap-2 rounded-full bg-[#C5A262] px-6 py-3 text-sm font-bold text-[#181818] transition-colors hover:bg-[#d8b979]"
              >
                Discuss a Project
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </a>
              <Link
                href="/#gallery"
                className="inline-flex items-center rounded-full border border-white/25 px-6 py-3 text-sm font-bold text-white transition-colors hover:border-[#C5A262] hover:text-[#C5A262]"
              >
                View Our Work
              </Link>
            </div>
          </div>
        </main>
      </div>

      <section className="mx-auto grid max-w-[1400px] gap-12 px-4 py-16 sm:px-6 sm:py-20 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20 lg:px-8">
        <div>
          <p className="mb-3 text-xs font-bold uppercase tracking-[0.25em] text-[#C5A262]">
            Company Overview
          </p>
          <h2 className="text-3xl font-black uppercase tracking-tight sm:text-4xl">
            Thoughtful carpentry, built around your project.
          </h2>
        </div>
        <div className="space-y-5 text-sm leading-relaxed text-white/70 sm:text-base">
          <p>
            PG Carpentry Plus is a Houston-based carpentry and remodeling
            company focused on custom woodwork and home improvement. Our
            capabilities span cabinetry, finish carpentry, framing, exterior
            woodwork, and door and window installation.
          </p>
          <p>
            We bring together practical function and considered detail to help
            homeowners and project partners shape spaces that feel complete,
            work well, and reflect the character of the home.
          </p>
        </div>
      </section>

      <section className="border-y border-white/10 bg-[#202020]">
        <div className="mx-auto max-w-[1400px] px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
          <div className="mb-10 max-w-2xl">
            <p className="mb-3 text-xs font-bold uppercase tracking-[0.25em] text-[#C5A262]">
              Core Capabilities
            </p>
            <h2 className="text-3xl font-black uppercase tracking-tight sm:text-4xl">
              Carpentry for the details and the bigger picture.
            </h2>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {capabilities.map((capability, index) => (
              <article
                key={capability.title}
                className="border border-white/10 bg-[#181818] p-6 sm:p-7"
              >
                <span className="text-sm font-bold tracking-widest text-[#C5A262]">
                  0{index + 1}
                </span>
                <h3 className="mt-5 text-lg font-bold">{capability.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-white/65">
                  {capability.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-[1400px] gap-12 px-4 py-16 sm:px-6 sm:py-20 lg:grid-cols-2 lg:gap-20 lg:px-8">
        <div>
          <p className="mb-3 text-xs font-bold uppercase tracking-[0.25em] text-[#C5A262]">
            Project Scope
          </p>
          <h2 className="text-3xl font-black uppercase tracking-tight sm:text-4xl">
            Services for spaces inside and out.
          </h2>
          <p className="mt-5 max-w-xl text-sm leading-relaxed text-white/70 sm:text-base">
            From a single custom feature to a broader home improvement project,
            our work covers a range of carpentry needs.
          </p>
        </div>
        <ul className="grid content-start gap-4 sm:grid-cols-2">
          {projectTypes.map((projectType) => (
            <li
              key={projectType}
              className="flex items-start gap-3 border-b border-white/10 pb-4 text-sm leading-relaxed text-white/80"
            >
              <Check
                className="mt-0.5 h-4 w-4 shrink-0 text-[#C5A262]"
                aria-hidden="true"
              />
              {projectType}
            </li>
          ))}
        </ul>
      </section>

      <section className="border-t border-white/10 bg-[#202020]">
        <div className="mx-auto flex max-w-[1400px] flex-col gap-6 px-4 py-12 sm:px-6 md:flex-row md:items-center md:justify-between lg:px-8">
          <div>
            <p className="text-xl font-bold">Have a project in mind?</p>
            <p className="mt-2 text-sm text-white/65">
              Get in touch to discuss your carpentry needs in {siteConfig.contact.address}.
            </p>
          </div>
          <a
            href={`mailto:${siteConfig.contact.email}`}
            className="inline-flex w-fit items-center gap-2 rounded-full border border-[#C5A262] px-6 py-3 text-sm font-bold text-[#C5A262] transition-colors hover:bg-[#C5A262] hover:text-[#181818]"
          >
            Contact PG Carpentry Plus
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </a>
        </div>
      </section>
      <Footer />
    </div>
  );
}
