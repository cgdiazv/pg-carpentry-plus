export const siteConfig = {
  name: "PG Carpentry Plus",
  description: "Custom carpentry, framing, finish trim, cabinetry, and home remodeling services.",
  url: "https://www.pgcarpentryplus.com",
  ogImage: "https://www.pgcarpentryplus.com/og.jpg",
  contact: {
    email: "contact@pgcarpentryplus.com",
    phone: "(832) 555-0199", // Update with official phone
    address: "Houston, TX",
  },
  links: {
    facebook: "https://facebook.com",
    instagram: "https://instagram.com",
  },
  services: [
    { title: "Custom Cabinetry & Built-ins", slug: "custom-cabinetry" },
    { title: "Finish Carpentry & Architectural Trim", slug: "finish-trim" },
    { title: "Framing & Structural Woodwork", slug: "framing" },
    { title: "Decks, Pergolas & Exterior Woodcraft", slug: "outdoor-carpentry" },
    { title: "Door & Window Installations", slug: "doors-windows" },
  ],
};

export type SiteConfig = typeof siteConfig;
