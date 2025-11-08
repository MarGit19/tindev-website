import type { Metadata } from "next";
import Link from "next/link";
import Nav from "@/components/nav";
import Footer from "@/components/footer";
import { Container, Section } from "@/components/ui";

export const metadata: Metadata = {
  title: "Accessibility — Tin Dev Studios",
  description: "Our commitment to an accessible experience for all users.",
  alternates: { canonical: "/accessibility" },
  openGraph: {
    title: "Accessibility — Tin Dev Studios",
    description: "Our commitment to an accessible experience for all users.",
    url: "https://tindevstudios.com/accessibility",
    type: "website",
  },
};

export default function AccessibilityPage() {
  return (
    <>
      <Nav />

      {/* Header */}
      <Section pad="pt-20 sm:pt-24 md:pt-28 pb-12 sm:pb-16">
        <Container>
          <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-0 text-center">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-display text-white">
              Accessibility
            </h1>
            <p className="mt-3 sm:mt-4 text-white/70 text-base sm:text-lg max-w-3xl mx-auto">
              Our commitment to an accessible experience for all users
            </p>
          </div>
        </Container>
      </Section>

      {/* Divider */}
      <div className="border-t border-white/10" />

      {/* Content */}
      <Section pad="py-12 sm:py-16 md:py-20 lg:py-24">
        <Container>
          <div className="max-w-4xl mx-auto px-4 sm:px-6 md:px-0">
            <div className="rounded-lg border border-white/10 bg-white/[0.03] p-6 sm:p-8 md:p-10 space-y-6">
              <div>
                <h2 className="text-xl sm:text-2xl font-display text-white mb-4">
                  Our Commitment
                </h2>
                <p className="text-white/80 text-base sm:text-lg leading-relaxed">
                  We aim to provide an accessible experience for all users and follow best practices aligned with WCAG 2.1 AA standards. We believe that everyone should have equal access to information and functionality on our website.
                </p>
              </div>

              <div>
                <h2 className="text-xl sm:text-2xl font-display text-white mb-4">
                  Accessibility Features
                </h2>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <span className="text-mint-green mt-1">•</span>
                    <span className="text-white/80 text-sm sm:text-base">
                      Semantic HTML structure for screen reader compatibility
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-mint-green mt-1">•</span>
                    <span className="text-white/80 text-sm sm:text-base">
                      Keyboard navigation support throughout the site
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-mint-green mt-1">•</span>
                    <span className="text-white/80 text-sm sm:text-base">
                      Sufficient color contrast ratios for text readability
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-mint-green mt-1">•</span>
                    <span className="text-white/80 text-sm sm:text-base">
                      Alternative text for images and visual content
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-mint-green mt-1">•</span>
                    <span className="text-white/80 text-sm sm:text-base">
                      Responsive design that works across devices and screen sizes
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-mint-green mt-1">•</span>
                    <span className="text-white/80 text-sm sm:text-base">
                      Clear and descriptive link text
                    </span>
                  </li>
                </ul>
              </div>

              <div>
                <h2 className="text-xl sm:text-2xl font-display text-white mb-4">
                  Ongoing Improvements
                </h2>
                <p className="text-white/80 text-base sm:text-lg leading-relaxed">
                  We continuously work to improve the accessibility of our website and services. Our development process includes regular accessibility audits and testing to identify and address potential barriers.
                </p>
              </div>

              <div className="pt-6 border-t border-white/10">
                <h2 className="text-xl sm:text-2xl font-display text-white mb-4">
                  Feedback
                </h2>
                <p className="text-white/80 text-base sm:text-lg leading-relaxed">
                  If you encounter any accessibility barriers or have suggestions for improvement, please contact us at{" "}
                  <a 
                    href="mailto:contactus@tindevstudios.com" 
                    className="text-mint-green underline underline-offset-4 hover:text-mint-green/80 transition-colors"
                  >
                    contactus@tindevstudios.com
                  </a>
                  . We welcome your feedback and are committed to making our website accessible to everyone.
                </p>
              </div>

              <div className="pt-6 border-t border-white/10">
                <h2 className="text-xl sm:text-2xl font-display text-white mb-4">
                  Third-Party Content
                </h2>
                <p className="text-white/80 text-base sm:text-lg leading-relaxed">
                  While we strive to ensure accessibility across our entire website, some third-party content or embedded services may be outside our direct control. We work with vendors who share our commitment to accessibility.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* Divider */}
      <div className="border-t border-white/10" />

      {/* CTA */}
      <Section pad="py-16 sm:py-20 md:py-24 lg:py-28">
        <Container>
          <div className="max-w-3xl mx-auto px-4 sm:px-6 md:px-0 text-center">
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-display text-white">
              Questions or Concerns?
            </h3>
            <p className="mt-3 sm:mt-4 text-sm sm:text-base text-white/70">
              We're here to help ensure you have the best experience possible.
            </p>
            <div className="mt-6 sm:mt-8">
              <Link href="/contact" className="btn-primary">
                Contact Us →
              </Link>
            </div>
          </div>
        </Container>
      </Section>

      <Footer />
    </>
  );
}