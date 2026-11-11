import type { Metadata } from "next";
import Image from "next/image";
import { Check } from "lucide-react";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { siteConfig } from "@/src/config/site";

export const metadata: Metadata = {
  title: `Capability Statement | ${siteConfig.name}`,
  description:
    "PG Carpentry Plus LLC provides custom finish carpentry, distinctive interiors, and tailored solutions in Fort Worth, Texas.",
};

const capabilities = [
  {
    title: "Finish Carpentry",
    description:
      "Crown molding, baseboards, decorative trim, and detailed interior woodwork.",
  },
  {
    title: "Custom Built-ins & Storage",
    description:
      "Built-in cabinetry, shelving, mud benches, and tailored storage solutions.",
  },
  {
    title: "Custom Closets",
    description:
      "Closet layouts and organization systems designed around the available space.",
  },
  {
    title: "Feature Walls & Shiplap",
    description:
      "Accent walls, decorative paneling, and custom wall treatments.",
  },
  {
    title: "Ceiling Details",
    description:
      "Decorative ceiling beams, custom ceiling designs, and stained wood features.",
  },
];

const differentiators = [
  "Custom designs suited to each space",
  "Detail-focused finishing",
  "English and Spanish communication",
  "Local Fort Worth service",
];

const companyData = [
  { label: "Unique Entity ID", value: "MEQKK2LN4995" },
  { label: "CAGE / NCAGE", value: "26C01" },
  { label: "Registration expiration", value: "October 8, 2027" },
];

const address = "4501 Fern Valley DR, Fort Worth, Texas 76244-1848, United States";

const naicsCodes = [
  {
    code: "238350",
    designation: "Primary",
    description: "Finish Carpentry Contractors",
  },
  {
    code: "238320",
    designation: "Additional",
    description: "Painting and Wall Covering Contractors",
  },
];

export default function CapabilityStatementPage() {
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
              PG Carpentry Plus LLC
            </p>
            <h1 className="text-4xl font-black uppercase leading-none tracking-tight sm:text-6xl lg:text-7xl">
              Capability
              <span className="block text-white">Statement</span>
            </h1>
            <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-white/85 sm:text-base">
              Custom finish carpentry. Distinctive interiors. Tailored
              solutions.
            </p>
          </div>
        </div>
      </section>

      <section className="border-y border-white/10 bg-[#202020]">
        <div className="mx-auto grid max-w-[1400px] gap-10 px-4 py-14 sm:px-6 sm:py-16 lg:grid-cols-[1.65fr_0.85fr] lg:gap-12 lg:px-8 lg:py-20">
          <div className="space-y-12 sm:space-y-14">
            <section>
              <p className="mb-3 text-xs font-bold uppercase tracking-[0.25em] text-[#C5A262]">
                Company Overview
              </p>
              <h2 className="text-3xl font-black uppercase tracking-tight sm:text-4xl">
                Thoughtful carpentry, built around your project.
              </h2>
              <p className="mt-4 max-w-3xl text-sm leading-relaxed text-white/70 sm:text-base">
                PG Carpentry Plus LLC is a Fort Worth, Texas-based carpentry and
                home remodeling company focused on custom interior woodwork.
                Services include trim and molding, built-in storage, accent
                walls, custom closets, and decorative ceiling features.
              </p>
            </section>

            <section>
              <p className="mb-3 text-xs font-bold uppercase tracking-[0.25em] text-[#C5A262]">
                Core Capabilities
              </p>
              <h2 className="mb-7 text-3xl font-black uppercase tracking-tight sm:text-4xl">
                Carpentry for the details and the bigger picture.
              </h2>
              <div className="grid gap-x-10 sm:grid-cols-2">
                {capabilities.map((capability, index) => (
                  <article
                    key={capability.title}
                    className={`flex items-start gap-4 py-5 first:pt-0 sm:gap-5 ${
                      index < capabilities.length - 1
                        ? "border-b border-white/10"
                        : ""
                    }`}
                  >
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center bg-[#C5A262] text-sm font-black text-[#181818]">
                      0{index + 1}
                    </span>
                    <div>
                      <h3 className="text-sm font-black uppercase tracking-wide text-white">
                        {capability.title}
                      </h3>
                      <p className="mt-2 text-sm leading-relaxed text-white/65">
                        {capability.description}
                      </p>
                    </div>
                  </article>
                ))}
              </div>
            </section>

          </div>

          <aside className="h-fit border border-white/10 bg-[#181818] p-6 sm:p-8">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <h2 className="text-xl font-black uppercase tracking-tight">
                Company Data
              </h2>
              <span className="rounded-full bg-emerald-100/10 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-emerald-200">
                Active Registration
              </span>
            </div>

            <dl className="mt-6 space-y-4">
              {companyData.map((item) => (
                <div key={item.label} className="border-b border-white/10 pb-3">
                  <dt className="text-[11px] font-bold uppercase tracking-wider text-white/45">
                    {item.label}
                  </dt>
                  <dd className="mt-1 text-sm font-semibold text-white/90">
                    {item.value}
                  </dd>
                </div>
              ))}
            </dl>

            <div className="mt-5 space-y-4">
              <div>
                <h3 className="text-[11px] font-bold uppercase tracking-wider text-white/45">
                  Physical Address
                </h3>
                <p className="mt-1 text-sm leading-relaxed text-white/80">
                  {address}
                </p>
              </div>
              <div>
                <h3 className="text-[11px] font-bold uppercase tracking-wider text-white/45">
                  Mailing Address
                </h3>
                <p className="mt-1 text-sm leading-relaxed text-white/80">
                  {address}
                </p>
              </div>
            </div>

            <div className="mt-6 border-t border-white/10 pt-5">
              <h3 className="text-sm font-bold uppercase tracking-wider text-white/90">
                Registered NAICS
              </h3>
              <ul className="mt-4 space-y-4">
                {naicsCodes.map((item) => (
                  <li key={item.code}>
                    <p className="text-xs font-bold text-[#C5A262]">
                      {item.code}{" "}
                      <span className="font-medium uppercase text-white/45">
                        | {item.designation}
                      </span>
                    </p>
                    <p className="mt-1 text-sm text-white/75">
                      {item.description}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
          </aside>

          <section className="lg:col-span-2">
            <p className="mb-3 text-xs font-bold uppercase tracking-[0.25em] text-[#C5A262]">
              What Sets Us Apart
            </p>
            <h2 className="text-3xl font-black uppercase tracking-tight sm:text-4xl">
              Custom solutions, thoughtfully finished.
            </h2>
            <ul className="mt-7 grid content-start gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {differentiators.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-3 border-b border-white/10 pb-4 text-sm leading-relaxed text-white/80"
                >
                  <Check
                    className="mt-0.5 h-4 w-4 shrink-0 text-[#C5A262]"
                    aria-hidden="true"
                  />
                  {item}
                </li>
              ))}
            </ul>
          </section>
        </div>
      </section>

      <Footer />
    </div>
  );
}
