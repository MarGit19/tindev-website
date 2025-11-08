import type { Metadata } from "next";
import Link from "next/link";
import Nav from "@/components/nav";
import Footer from "@/components/footer";
import { Container, Section } from "@/components/ui";

export const metadata: Metadata = {
  title: "Terms of Service — Tin Dev Studios",
  description: "The rules that govern use of our website and services.",
  alternates: { canonical: "/terms" },
};

export default function TermsPage() {
  const effective = "November 6, 2025";

  return (
    <>
      <Nav />

      {/* Header */}
      <Section pad="pt-20 sm:pt-24 md:pt-28 pb-12 sm:pb-16">
        <Container>
          <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-0 text-center">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-display text-white">
              Terms of Service
            </h1>
            <p className="mt-3 sm:mt-4 text-white/60 text-sm sm:text-base">
              Effective {effective}
            </p>
          </div>
        </Container>
      </Section>

      {/* Divider */}
      <div className="border-t border-white/10" />

      {/* Main Content */}
      <Section pad="py-12 sm:py-16 md:py-20 lg:py-24">
        <Container>
          <div className="max-w-4xl mx-auto px-4 sm:px-6 md:px-0">
            <div className="rounded-lg border border-white/10 bg-white/[0.03] p-6 sm:p-8 md:p-10 space-y-8">
              {/* Introduction */}
              <div className="space-y-4">
                <p className="text-white/80 text-base sm:text-lg leading-relaxed">
                  These Terms ("Terms") govern your access to and use of the Tin Dev Studios website and services. By using our site, you agree to these Terms.
                </p>
              </div>

              {/* Use of the Site */}
              <div className="pt-6 border-t border-white/10 space-y-4">
                <h2 className="text-xl sm:text-2xl font-display text-white">
                  Use of the Site
                </h2>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <span className="text-mint-green mt-1">•</span>
                    <span className="text-white/70 text-sm sm:text-base">
                      You will comply with all applicable laws.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-mint-green mt-1">•</span>
                    <span className="text-white/70 text-sm sm:text-base">
                      You won't attempt to disrupt or compromise our site's security or availability.
                    </span>
                  </li>
                </ul>
              </div>

              {/* Proposals & Engagements */}
              <div className="pt-6 border-t border-white/10 space-y-4">
                <h2 className="text-xl sm:text-2xl font-display text-white">
                  Proposals & Engagements
                </h2>
                <p className="text-white/70 text-sm sm:text-base leading-relaxed">
                  Project proposals, statements of work, pricing, and timelines are provided separately and, once agreed, govern the delivery of services in addition to these Terms.
                </p>
              </div>

              {/* Intellectual Property */}
              <div className="pt-6 border-t border-white/10 space-y-4">
                <h2 className="text-xl sm:text-2xl font-display text-white">
                  Intellectual Property
                </h2>
                <p className="text-white/70 text-sm sm:text-base leading-relaxed">
                  Site content is owned by Tin Dev Studios or its licensors. Client deliverables and IP ownership are defined in the applicable agreement or invoice.
                </p>
              </div>

              {/* Disclaimers */}
              <div className="pt-6 border-t border-white/10 space-y-4">
                <h2 className="text-xl sm:text-2xl font-display text-white">
                  Disclaimers
                </h2>
                <p className="text-white/70 text-sm sm:text-base leading-relaxed">
                  The site is provided "as is" without warranties of any kind. We disclaim all implied warranties to the maximum extent permitted by law.
                </p>
              </div>

              {/* Limitation of Liability */}
              <div className="pt-6 border-t border-white/10 space-y-4">
                <h2 className="text-xl sm:text-2xl font-display text-white">
                  Limitation of Liability
                </h2>
                <p className="text-white/70 text-sm sm:text-base leading-relaxed">
                  To the fullest extent permitted by law, Tin Dev Studios will not be liable for any indirect, incidental, or consequential damages. Our total liability related to the site is limited to $100.
                </p>
              </div>

              {/* Third-Party Services */}
              <div className="pt-6 border-t border-white/10 space-y-4">
                <h2 className="text-xl sm:text-2xl font-display text-white">
                  Third-Party Services
                </h2>
                <p className="text-white/70 text-sm sm:text-base leading-relaxed">
                  We use providers like EmailJS, reCAPTCHA, Vercel, and (optionally) Google Analytics. Their terms apply to your use of those features.
                </p>
              </div>

              {/* Governing Law */}
              <div className="pt-6 border-t border-white/10 space-y-4">
                <h2 className="text-xl sm:text-2xl font-display text-white">
                  Governing Law
                </h2>
                <p className="text-white/70 text-sm sm:text-base leading-relaxed">
                  These Terms are governed by the laws of the State of Texas, without regard to conflict of laws rules.
                </p>
              </div>

              {/* Changes */}
              <div className="pt-6 border-t border-white/10 space-y-4">
                <h2 className="text-xl sm:text-2xl font-display text-white">
                  Changes
                </h2>
                <p className="text-white/70 text-sm sm:text-base leading-relaxed">
                  We may update these Terms. Continued use of the site means you accept the changes.
                </p>
              </div>

              {/* Contact */}
              <div className="pt-6 border-t border-white/10 space-y-4">
                <h2 className="text-xl sm:text-2xl font-display text-white">
                  Contact
                </h2>
                <p className="text-white/70 text-sm sm:text-base leading-relaxed">
                  Questions?{" "}
                  <Link
                    href="mailto:contactus@tindevstudios.com"
                    className="text-mint-green hover:text-electric-blue transition-colors font-semibold"
                  >
                    contactus@tindevstudios.com
                  </Link>
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
              Questions About Our Terms?
            </h3>
            <p className="mt-3 sm:mt-4 text-sm sm:text-base text-white/70">
              We're here to clarify any questions you may have.
            </p>
            <div className="mt-6 sm:mt-8">
              <Link href="mailto:contactus@tindevstudios.com" className="btn-primary">
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