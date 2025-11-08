import type { Metadata } from "next";
import Nav from "@/components/nav";
import Footer from "@/components/footer";
import PortfolioClient from "./PortfolioClient";

// ✅ Page-level SEO metadata - OPTIMIZED
export const metadata: Metadata = {
  title: "Portfolio - Our Work & Case Studies | Tin Dev Studios",
  description:
    "Selected projects showcasing modern web apps, SaaS platforms, and product-focused software development by Tin Dev Studios. View live products and case studies from Dallas, TX.",
  keywords: [
    "portfolio",
    "case studies",
    "web app examples",
    "SaaS projects",
    "software development portfolio",
    "Upplyit",
    "project examples",
    "Dallas software portfolio",
  ],
  alternates: { canonical: "/portfolio" },
  openGraph: {
    title: "Portfolio — Tin Dev Studios",
    description:
      "Modern software designed for clarity, performance, and growth. View selected case studies and live products.",
    url: "https://tindevstudios.com/portfolio",
    siteName: "Tin Dev Studios",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    site: "@tindevstudios",
    creator: "@tindevstudios",
    title: "Portfolio — Tin Dev Studios",
    description:
      "Selected projects showcasing modern web apps and SaaS platforms.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function PortfolioPage() {
  return (
    <>
      <Nav />
      <main>
        <PortfolioClient />
      </main>
      <Footer />
    </>
  );
}