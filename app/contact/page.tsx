import type { Metadata } from "next";
import Image from "next/image";
import { Phone } from "lucide-react";
import ContactForm from "./ContactForm";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { siteConfig } from "@/src/config/site";

export const metadata: Metadata = {
  title: `Contact | ${siteConfig.name}`,
  description:
    "Contact PG Carpentry Plus to discuss custom trim, accent walls, built-ins, and your next home project.",
};

export default function ContactPage() {
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
              Have A Question?
            </p>
            <h1 className="text-4xl font-black uppercase tracking-tight sm:text-6xl lg:text-7xl">
              Contact Us
            </h1>
            <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-white/85 sm:text-base">
              Let&apos;s talk about custom trim, accent walls, or your next home
              project.
            </p>
          </div>
        </div>
      </section>

      <main
        id="contact"
        className="mx-auto grid w-full max-w-[1400px] gap-12 px-4 py-10 sm:px-6 sm:py-14 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16 lg:px-8 lg:py-16"
      >
        <section>
          <div className="relative mb-8 aspect-[2.1/1] w-full overflow-hidden sm:mb-10">
            <Image
              src="/blog-03.jpg"
              alt="Modern custom home with distinctive exterior woodwork"
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 40vw"
              className="object-cover"
            />
          </div>

          <p className="max-w-md text-sm leading-relaxed text-white/80">
            Feel free to reach out via phone with any questions about custom
            trim, accent walls, or your next home project.
          </p>

          <a
            href={`tel:${siteConfig.contact.phone.replace(/[^0-9+]/g, "")}`}
            className="mt-6 inline-flex min-w-40 items-center justify-center gap-2 rounded-full bg-[#C5A262] px-7 py-3 text-sm font-bold uppercase text-white transition-colors hover:bg-[#b59253]"
          >
            <Phone className="h-4 w-4" aria-hidden="true" />
            Call Now
          </a>

          <div className="mt-10">
            <h2 className="text-lg font-black uppercase tracking-wide">
              Contact Details
            </h2>
            <ul className="mt-3 space-y-2 text-sm text-white/85">
              <li>
                <a
                  className="transition-colors hover:text-[#C5A262]"
                  href="mailto:info@pgcarpentryplus.com"
                >
                  info@pgcarpentryplus.com
                </a>
              </li>
              <li>
                <a
                  className="transition-colors hover:text-[#C5A262]"
                  href="tel:9722513979"
                >
                  +1 972 251 3979 · English
                </a>
              </li>
              <li>
                <a
                  className="transition-colors hover:text-[#C5A262]"
                  href="tel:6823304080"
                >
                  +1 682 330 4080 · Spanish
                </a>
              </li>
            </ul>
          </div>

          <div className="mt-9">
            <h2 className="text-lg font-black uppercase tracking-wide">
              Working Hours
            </h2>
            <ul className="mt-3 space-y-2 text-sm text-white/85">
              <li>Mon-Fri: 9 AM – 6 PM</li>
              <li>Saturday: 9 AM – 4 PM</li>
              <li>Sunday: Closed</li>
            </ul>
          </div>
        </section>

        <section
          aria-label="Request a carpentry quote"
          className="self-start border border-white/10 bg-[#202020] p-5 sm:p-8 lg:p-10"
        >
          <div className="mb-7">
            <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#C5A262]">
              Start Your Project
            </p>
            <h2 className="mt-2 text-2xl font-black uppercase tracking-tight sm:text-3xl">
              Request A Quote
            </h2>
          </div>
          <ContactForm />
        </section>
      </main>

      <Footer />
    </div>
  );
}
