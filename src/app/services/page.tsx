import type { Metadata } from "next";
import Nav from "@/components/nav";
import Footer from "@/components/footer";
import ServicesClient from "./ServicesClient";

// ✅ Page-level SEO metadata - OPTIMIZED
export const metadata: Metadata = {
  title: "Services - Web Development, Mobile Apps & Cloud Solutions | Tin Dev Studios",
  description:
    "Comprehensive software development services including web applications, mobile apps, API development, DevOps, integrations, and technical consulting. Custom solutions built to scale.",
  keywords: [
    "web application development",
    "mobile app development",
    "API development",
    "backend development",
    "DevOps services",
    "cloud infrastructure",
    "software consulting",
    "custom software development",
    "SaaS development",
    "integration services",
  ],
  alternates: { canonical: "/services" },
  openGraph: {
    title: "Services — Tin Dev Studios",
    description:
      "Web applications, mobile apps, APIs, cloud infrastructure, integrations, and technical consulting. Comprehensive development services for modern businesses.",
    url: "https://tindevstudios.com/services",
    siteName: "Tin Dev Studios",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    site: "@tindevstudios",
    creator: "@tindevstudios",
    title: "Services — Tin Dev Studios",
    description:
      "Web applications, mobile apps, APIs, cloud infrastructure, integrations, and technical consulting. Comprehensive development services for modern businesses.",
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

export default function ServicesPage() {
  return (
    <>
      <Nav />
      <main>
        <ServicesClient />
      </main>
      <Footer />
    </>
  );
}