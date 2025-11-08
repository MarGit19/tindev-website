import type { Metadata } from "next";
import Script from "next/script";
import Nav from "@/components/nav";
import Footer from "@/components/footer";
import PricingClient from "./PricingClient";

// ✅ Page-level SEO metadata - OPTIMIZED
export const metadata: Metadata = {
  title: "Pricing - Transparent Software Development Costs | Tin Dev Studios",
  description:
    "Clear starting points for websites, web apps, automations, and maintenance. Transparent, milestone-based quotes aligned to scope and timeline. Dallas, TX.",
  keywords: [
    "software development pricing",
    "web development cost",
    "website pricing",
    "SaaS development pricing",
    "custom app cost",
    "Dallas web development rates",
    "transparent pricing",
    "milestone-based pricing",
  ],
  alternates: { canonical: "/pricing" },
  openGraph: {
    title: "Pricing — Tin Dev Studios",
    description:
      "Transparent pricing for websites, custom web apps, automations, and maintenance plans.",
    url: "https://tindevstudios.com/pricing",
    siteName: "Tin Dev Studios",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    site: "@tindevstudios",
    creator: "@tindevstudios",
    title: "Pricing — Tin Dev Studios",
    description:
      "Clear starting points and milestone-based quotes for pragmatic, production-grade software.",
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

export default function PricingPage() {
  // ✅ JSON-LD: Service + OfferCatalog for the three core tiers
  const serviceJsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Web Development & SaaS Product Development",
    provider: {
      "@type": "Organization",
      name: "Tin Dev Studios",
      url: "https://tindevstudios.com",
    },
    areaServed: "Worldwide",
    serviceType: "Web development, web apps, automations, maintenance",
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Tin Dev Studios Pricing Tiers",
      itemListElement: [
        {
          "@type": "Offer",
          name: "Starter Website",
          description:
            "Custom one-page or multi-section site. Responsive build, basic integrations, SEO-ready.",
          priceSpecification: {
            "@type": "PriceSpecification",
            priceCurrency: "USD",
            minPrice: 800,
            maxPrice: 1200,
          },
          url: "https://tindevstudios.com/pricing",
          availability: "https://schema.org/InStock",
        },
        {
          "@type": "Offer",
          name: "Professional Website",
          description:
            "Multi-page custom design, lead capture, booking/payments, speed & on-page SEO.",
          priceSpecification: {
            "@type": "PriceSpecification",
            priceCurrency: "USD",
            minPrice: 1500,
            maxPrice: 3500,
          },
          url: "https://tindevstudios.com/pricing",
          availability: "https://schema.org/InStock",
        },
        {
          "@type": "Offer",
          name: "Custom Web App / SaaS",
          description:
            "Product definition & UX, auth/DB/API integrations, testing & docs, scalable architecture.",
          priceSpecification: {
            "@type": "PriceSpecification",
            priceCurrency: "USD",
            minPrice: 4000,
          },
          url: "https://tindevstudios.com/pricing",
          availability: "https://schema.org/InStock",
        },
      ],
    },
  };

  // ✅ JSON-LD: Maintenance Plans
  const maintenanceJsonLd = {
    "@context": "https://schema.org",
    "@type": "OfferCatalog",
    name: "Maintenance & Support Plans",
    url: "https://tindevstudios.com/pricing",
    itemListElement: [
      {
        "@type": "Offer",
        name: "Maintenance — Basic",
        description:
          "Monthly updates & backups, security & uptime monitoring, content requests.",
        url: "https://tindevstudios.com/pricing",
        priceSpecification: {
          "@type": "UnitPriceSpecification",
          price: 75,
          priceCurrency: "USD",
          unitText: "MONTH",
        },
        availability: "https://schema.org/InStock",
      },
      {
        "@type": "Offer",
        name: "Maintenance — Pro",
        description:
          "Everything in Basic plus performance checks and priority support.",
        url: "https://tindevstudios.com/pricing",
        priceSpecification: {
          "@type": "UnitPriceSpecification",
          price: 200,
          priceCurrency: "USD",
          unitText: "MONTH",
        },
        availability: "https://schema.org/InStock",
      },
    ],
    category: "Maintenance",
  };

  // ✅ JSON-LD: Automations
  const automationsJsonLd = {
    "@context": "https://schema.org",
    "@type": "Offer",
    name: "Automations & Integrations",
    description:
      "Workflows such as Lead → CRM → email nurture, payments & invoicing, calendars/Slack/Airtable/Notion, reporting & notifications.",
    url: "https://tindevstudios.com/pricing",
    priceSpecification: {
      "@type": "PriceSpecification",
      priceCurrency: "USD",
      minPrice: 500,
    },
    availability: "https://schema.org/InStock",
    category: "Automation",
    seller: {
      "@type": "Organization",
      name: "Tin Dev Studios",
      url: "https://tindevstudios.com",
    },
  };

  // ✅ JSON-LD: FAQ
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "How long does a typical website take?",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            "Most starter and professional sites launch in 2–6 weeks depending on scope and content readiness.",
        },
      },
      {
        "@type": "Question",
        name: "Do you offer copywriting or branding?",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            "Yes. We can provide light copy guidance and collaborate with brand partners when needed.",
        },
      },
      {
        "@type": "Question",
        name: "What platforms/stack do you use?",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            "Next.js, React, Tailwind, plus integrations (Stripe, CRMs, Airtable, etc.) based on your needs.",
        },
      },
      {
        "@type": "Question",
        name: "Can you migrate my existing site?",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            "Yes. We handle safe migration, redirects, and SEO preservation.",
        },
      },
    ],
  };

  return (
    <>
      {/* JSON-LD blocks */}
      <Script
        id="pricing-service-jsonld"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }}
      />
      <Script
        id="pricing-maintenance-jsonld"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(maintenanceJsonLd) }}
      />
      <Script
        id="pricing-automations-jsonld"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(automationsJsonLd) }}
      />
      <Script
        id="pricing-faq-jsonld"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      <Nav />
      <main>
        <PricingClient />
      </main>
      <Footer />
    </>
  );
}