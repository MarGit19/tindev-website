import type { Metadata } from "next";
import Link from "next/link";
import Nav from "@/components/nav";
import Footer from "@/components/footer";
import { Container, Section } from "@/components/ui";

export const metadata: Metadata = {
  title: "GDPR/CCPA Requests — Tin Dev Studios",
  description: "How to request access, correction, or deletion of your personal data.",
  alternates: { canonical: "/gdpr" },
};

export default function GDPRPage() {
  return (
    <>
      <Nav />

      {/* Header */}
      <Section pad="pt-20 sm:pt-24 md:pt-28 pb-12 sm:pb-16">
        <Container>
          <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-0 text-center">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-display text-white">
              GDPR / CCPA Requests
            </h1>
            <p className="mt-3 sm:mt-4 text-white/70 text-base sm:text-lg max-w-3xl mx-auto">
              How to request access, correction, or deletion of your personal data
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
            <div className="rounded-lg border border-white/10 bg-white/[0.03] p-6 sm:p-8 md:p-10 space-y-8">
              
              {/* How to Submit */}
              <div className="space-y-4">
                <h2 className="text-2xl sm:text-3xl font-display text-white">
                  How to Submit a Request
                </h2>
                <p className="text-white/80 text-base sm:text-lg leading-relaxed">
                  Email{" "}
                  <Link
                    href="mailto:contactus@tindevstudios.com"
                    className="text-mint-green hover:text-electric-blue transition-colors font-semibold"
                  >
                    contactus@tindevstudios.com
                  </Link>{" "}
                  with:
                </p>
                <ul className="space-y-3 text-white/70 text-sm sm:text-base pl-6">
                  <li className="flex items-start gap-3">
                    <span className="text-mint-green mt-1">•</span>
                    <span>Your full name and the email address you used on our site</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-mint-green mt-1">•</span>
                    <span>What you are requesting (access, correction, deletion)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-mint-green mt-1">•</span>
                    <span>Any details that help us locate your data (approximate dates, form used)</span>
                  </li>
                </ul>
                <p className="text-white/70 text-sm sm:text-base leading-relaxed pt-2">
                  We will respond within the time period required by applicable law.
                </p>
              </div>

              {/* Identity Verification */}
              <div className="space-y-4 pt-6 border-t border-white/10">
                <h2 className="text-2xl sm:text-3xl font-display text-white">
                  Identity Verification
                </h2>
                <p className="text-white/70 text-sm sm:text-base leading-relaxed">
                  We may request additional information to verify your identity before processing your request. This helps ensure the security and privacy of your personal data.
                </p>
              </div>

              {/* Your Rights */}
              <div className="space-y-4 pt-6 border-t border-white/10">
                <h2 className="text-2xl sm:text-3xl font-display text-white">
                  Your Rights
                </h2>
                <p className="text-white/80 text-base sm:text-lg leading-relaxed mb-4">
                  Under GDPR and CCPA, you have the right to:
                </p>
                <ul className="space-y-3 text-white/70 text-sm sm:text-base pl-6">
                  <li className="flex items-start gap-3">
                    <span className="text-mint-green mt-1">•</span>
                    <span><strong className="text-white">Access:</strong> Request a copy of your personal data</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-mint-green mt-1">•</span>
                    <span><strong className="text-white">Correction:</strong> Request corrections to inaccurate data</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-mint-green mt-1">•</span>
                    <span><strong className="text-white">Deletion:</strong> Request deletion of your personal data</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-mint-green mt-1">•</span>
                    <span><strong className="text-white">Portability:</strong> Request your data in a machine-readable format</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-mint-green mt-1">•</span>
                    <span><strong className="text-white">Opt-out:</strong> Opt-out of the sale of your personal data (CCPA)</span>
                  </li>
                </ul>
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
              Questions About Privacy?
            </h3>
            <p className="mt-3 sm:mt-4 text-sm sm:text-base text-white/70">
              Read our full Privacy Policy or contact us with any concerns.
            </p>
            <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/privacy" className="btn-primary">
                Privacy Policy →
              </Link>
              <Link href="/contact" className="btn-secondary">
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