export const siteConfig = {
  name: "PG Carpentry Plus",
  description: "Custom carpentry, framing, finish trim, cabinetry, and home remodeling services.",
  url: "https://www.pgcarpentryplus.com",
  ogImage: "https://www.pgcarpentryplus.com/og.jpg",
  contact: {
    email: "info@pgcarpentryplus.com",
    phone: "(972) 251-3979",
    address: "Fort Worth, TX",
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
