import type { Metadata } from "next";
import Nav from "@/components/nav";
import Footer from "@/components/footer";
import AboutClient from "./AboutClient";

// ✅ Page-level SEO metadata - OPTIMIZED
export const metadata: Metadata = {
  title: "About Tin Dev Studios - Custom Software Development in Dallas, TX",
  description:
    "We design and build pragmatic web apps, APIs, and automations. Clear scope, clean execution, and dependable delivery. Small product-focused studio in Dallas, Texas.",
  keywords: [
    "about Tin Dev Studios",
    "software development company",
    "Dallas software developers",
    "custom web development",
    "software engineering",
    "SaaS development team",
    "agile development",
    "MVP development",
  ],
  alternates: { canonical: "/about" },
  openGraph: {
    title: "About — Tin Dev Studios",
    description:
      "A small product-focused studio building clear, maintainable software for startups and small teams.",
    url: "https://tindevstudios.com/about",
    siteName: "Tin Dev Studios",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    site: "@tindevstudios",
    creator: "@tindevstudios",
    title: "About — Tin Dev Studios",
    description:
      "A small product-focused studio building clear, maintainable software for startups and small teams.",
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

export default function AboutPage() {
  return (
    <>
      <Nav />
      <main>
        <AboutClient />
      </main>
      <Footer />
    </>
  );
}