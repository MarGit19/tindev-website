import type { Metadata } from "next";
import Script from "next/script";
import Nav from "@/components/nav";
import Footer from "@/components/footer";
import ContactClient from "./ContactClient";

// ✅ Page-level SEO metadata - OPTIMIZED
export const metadata: Metadata = {
  title: "Contact Us - Start Your Project | Tin Dev Studios",
  description:
    "Tell us about your project, timeline, and goals. We'll reply with next steps within 24 hours. Dallas, TX-based software development team.",
  keywords: [
    "contact Tin Dev Studios",
    "start a project",
    "software development inquiry",
    "web development contact",
    "Dallas software developers",
    "get a quote",
    "project consultation",
  ],
  alternates: { canonical: "/contact" },
  openGraph: {
    title: "Contact — Tin Dev Studios",
    description:
      "Start a project conversation with Tin Dev Studios. Pragmatic web apps, APIs, and automations.",
    url: "https://tindevstudios.com/contact",
    siteName: "Tin Dev Studios",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    site: "@tindevstudios",
    creator: "@tindevstudios",
    title: "Contact — Tin Dev Studios",
    description:
      "Tell us about your project and goals. We'll reply with next steps within 24 hours.",
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

export default function ContactPage() {
  // ✅ schema.org FAQPage (matches the on-page FAQ below the form)
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "How do you scope projects?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text":
            "We start with a short discovery call to define goals, constraints, and risks. From there we propose a small, testable first milestone (1–2 weeks) so you can validate direction with minimal risk. We then expand in clearly priced increments."
        }
      },
      {
        "@type": "Question",
        "name": "How do you price and bill?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text":
            "Most work is milestone-based with a fixed price per milestone, invoiced at kickoff. Ongoing support can be hourly or a monthly maintenance plan. We'll recommend the simplest model for your situation."
        }
      },
      {
        "@type": "Question",
        "name": "What's a typical timeline?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text":
            "Small sites: 2–4 weeks. MVP web apps: 4–10 weeks depending on scope. We ship in small batches so you see progress weekly, not just at the end."
        }
      },
      {
        "@type": "Question",
        "name": "Who owns the code and IP?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text":
            "You do. On payment, all work-for-hire IP transfers to you. We may reuse internal tooling or boilerplate, but your product code and assets are yours."
        }
      },
      {
        "@type": "Question",
        "name": "Do you provide post-launch support?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text":
            "Yes — from ad-hoc support blocks to monthly maintenance plans that cover updates, monitoring, and small enhancements."
        }
      }
    ]
  };

  return (
    <>
      {/* JSON-LD for FAQ rich results */}
      <Script
        id="contact-faq-jsonld"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      
      <Nav />
      <main>
        <ContactClient />
      </main>
      <Footer />
    </>
  );
}