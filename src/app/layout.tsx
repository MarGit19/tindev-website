import "./globals.css";

import type { Metadata } from "next";
import Script from "next/script";
import { ReactNode } from "react";

import { Inter, Orbitron, Poppins } from "next/font/google";
import ScrollToTop from "@/components/ScrollToTop";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const orbitron = Orbitron({
  subsets: ["latin"],
  variable: "--font-orbitron",
  display: "swap",
  weight: ["400", "500", "600", "700", "800", "900"],
});

const poppins = Poppins({
  subsets: ["latin"],
  variable: "--font-poppins",
  display: "swap",
  weight: ["300", "400", "500", "600", "700", "800"],
});

// ✅ Site-wide defaults (page-level files can override)
export const metadata: Metadata = {
  metadataBase: new URL("https://tindevstudios.com"),
  title: "Tin Dev Studios - Practical Software Solutions",
  description:
    "We build practical, innovative software products designed to make life easier and more productive.",
  applicationName: "Tin Dev Studios",
  openGraph: {
    siteName: "Tin Dev Studios",
    type: "website",
    url: "https://tindevstudios.com",
    title: "Tin Dev Studios — Modern Web Apps & Practical Software",
    description:
      "We build applications and systems that are clear, fast, and reliable — not over-engineered.",
  },
  twitter: {
    card: "summary",
    title: "Tin Dev Studios — Modern Web Apps & Practical Software",
    description:
      "We build applications and systems that are clear, fast, and reliable — not over-engineered.",
  },
  alternates: { canonical: "/" },
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/icon-192.png", type: "image/png", sizes: "192x192" },
      { url: "/icon-512.png", type: "image/png", sizes: "512x512" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" }],
  },
};

// ✅ Viewport configuration (Next.js 15+ best practice)
export const viewport = {
  themeColor: "#111827",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  // Read GA id once (safe for <Script /> string interpolation)
  const GA_ID = process.env.NEXT_PUBLIC_GA_ID || "";

  // Organization JSON-LD (site-wide)
  const orgJsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Tin Dev Studios",
    url: "https://tindevstudios.com",
    logo: "https://tindevstudios.com/icon-512.png", // update if different
    sameAs: ["https://tindevstudios.com/portfolio"],
    contactPoint: [
      {
        "@type": "ContactPoint",
        email: "hello@tindevstudios.com",
        contactType: "customer support",
        availableLanguage: ["English"],
      },
    ],
  };

  return (
    <html lang="en">
      <body className={`${inter.variable} ${orbitron.variable} ${poppins.variable} font-sans antialiased`}>
        {/* GA4 (optional; only loads if NEXT_PUBLIC_GA_ID is set) */}
        {GA_ID && (
          <>
            <Script
              id="ga4"
              strategy="afterInteractive"
              src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
            />
            <Script id="ga4-init" strategy="afterInteractive">
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${GA_ID}', { anonymize_ip: true });
              `}
            </Script>
          </>
        )}

        {/* Organization JSON-LD */}
        <Script
          id="jsonld-organization"
          type="application/ld+json"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(orgJsonLd) }}
        />

        <ScrollToTop />
        {children}
      </body>
    </html>
  );
}