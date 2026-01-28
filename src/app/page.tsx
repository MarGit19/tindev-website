import type { Metadata } from "next";
import Script from "next/script";

import Nav from "@/components/nav";
import Footer from "@/components/footer";
import Hero from "@/components/Hero";
import AboutTeaser from "@/components/AboutTeaser";
import ProductsPreview from "@/components/ProductsPreview";
import PortfolioPreview from "@/components/PortfolioPreview";
import { Section, Container } from "@/components/ui";
import Link from "next/link";

// ✅ Page-level SEO - OPTIMIZED
export const metadata: Metadata = {
  title: "Tin Dev Studios - Modern Web Apps & Practical Software Solutions",
  description:
    "Tin Dev Studios builds modern web apps, SaaS platforms, and automations with clean design and reliable engineering. Milestone-based delivery, zero-fluff approach.",
  keywords: [
    "web development",
    "SaaS development",
    "custom software",
    "web apps",
    "Dallas",
    "Texas",
    "software development",
    "automation",
    "MVP development",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    title: "Tin Dev Studios — Modern Web Apps & Practical Software",
    description:
      "We build applications and systems that are clear, fast, and reliable — not over-engineered.",
    url: "https://tindevstudios.com",
    siteName: "Tin Dev Studios",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    site: "@tindevstudios",
    creator: "@tindevstudios",
    title: "Tin Dev Studios — Modern Web Apps & Practical Software",
    description:
      "We build applications and systems that are clear, fast, and reliable — not over-engineered.",
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

export default function Home() {
  // ✅ JSON-LD for Resulinx (homepage exposure as a SoftwareApplication)
  const resulinxJsonLd = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "Resulinx",
    applicationCategory: "BusinessApplication",
    applicationSubCategory: "Career & Resume Software",
    operatingSystem: "Web",
    url: "https://resulinx.com",
    description:
      "AI-powered resume and career platform that analyzes resumes, profiles, and job descriptions to deliver targeted improvements and streamline job applications.",
    publisher: {
      "@type": "Organization",
      name: "Tin Dev Studios",
      url: "https://tindevstudios.com",
      sameAs: ["https://tindevstudios.com/portfolio/resulinx"],
    },
    image: [
      // Use absolute URLs; swap to your live asset URLs when available
      "https://tindevstudios.com/portfolio/resulinx/dashboard.png",
      "https://tindevstudios.com/portfolio/resulinx/improvements.png",
      "https://tindevstudios.com/portfolio/resulinx/match-insights.png",
    ],
    // Add "offers" or "aggregateRating" later when you have accurate data
    // offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
  };

  return (
    <>
      {/* JSON-LD: Resulinx */}
      <Script
        id="jsonld-resulinx"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(resulinxJsonLd) }}
      />

      <Nav />

      <main>
        {/* Hero (revamped tone) */}
        <Hero />

        {/* About slice (replaces older About) */}
        <AboutTeaser />

        {/* Products (features Resulinx + roadmap) */}
        <ProductsPreview />

        {/* Portfolio preview */}
        <PortfolioPreview />

        {/* CTA to full Contact page (no embedded form on home) */}
        <Section pad="py-24 md:py-28">
          <Container className="max-w-2xl text-center">
            <h2 className="text-3xl md:text-4xl font-light text-white">Build something meaningful.</h2>
            <p className="mt-4 text-graphite">
              Tell us your goals — we'll propose a focused path forward with timeline and budget.
            </p>
            <div className="mt-8">
              <Link
                href="/contact"
                className="btn-primary"
              >
                Start a project
              </Link>
            </div>
          </Container>
        </Section>
      </main>

      <Footer />
    </>
  );
}