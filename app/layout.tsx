import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import { siteConfig } from "@/src/config/site";
import { LanguageProvider } from "@/components/LanguageProvider";
import "./globals.css";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  display: "swap",
});

export const metadata: Metadata = {
  title: `${siteConfig.name} | Custom Carpentry & Home Remodels in Fort Worth`,
  description: siteConfig.description,
  icons: {
    icon: "/favicon.png",
  },
  openGraph: {
    title: siteConfig.name,
    description: siteConfig.description,
    url: siteConfig.url,
    images: [{ url: siteConfig.ogImage }],
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${montserrat.variable} h-full antialiased font-sans`}
    >
      <body className="min-h-full flex flex-col font-sans">
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}
