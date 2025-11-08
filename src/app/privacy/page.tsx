import type { Metadata } from "next";
import Link from "next/link";
import Nav from "@/components/nav";
import Footer from "@/components/footer";
import { Container, Section } from "@/components/ui";
import { Calendar } from "lucide-react";

export const metadata: Metadata = {
  title: "Privacy Policy — Tin Dev Studios",
  description: "How we collect, use, and protect your information.",
  alternates: { canonical: "/privacy" },
};

export default function PrivacyPage() {
  const effective = "November 6, 2025";

  return (
    <>
      <Nav />

      {/* Header - NO ICON */}
      <Section pad="pt-20 sm:pt-24 md:pt-28 pb-12 sm:pb-16">
        <Container>
          <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-0 text-center">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-display text-white">
              Privacy Policy
            </h1>
            <div className="flex items-center justify-center gap-2 mt-4 text-white/60 text-sm">
              <Calendar className="w-4 h-4" />
              <span>Effective {effective}</span>
            </div>
          </div>
        </Container>
      </Section>

      {/* Divider */}
      <div className="border-t border-white/10" />

      {/* Main Content */}
      <Section pad="py-12 sm:py-16 md:py-20 lg:py-24">
        <Container>
          <div className="max-w-4xl mx-auto px-4 sm:px-6 md:px-0 space-y-8">
            {/* Introduction */}
            <div className="rounded-lg border border-white/10 bg-white/[0.03] p-6 sm:p-8 md:p-10">
              <p className="text-white/80 text-base sm:text-lg leading-relaxed">
                Tin Dev Studios Inc. ("Tin Dev Studios", "we", "us") respects your privacy. This policy explains what we collect, how we use it, and your choices. If you have questions, contact{" "}
                <Link
                  href="mailto:contactus@tindevstudios.com"
                  className="text-mint-green hover:text-electric-blue transition-colors font-semibold"
                >
                  contactus@tindevstudios.com
                </Link>
                .
              </p>
            </div>

            {/* Information We Collect */}
            <div className="rounded-lg border border-white/10 bg-white/[0.03] p-6 sm:p-8 md:p-10 space-y-4">
              <h2 className="text-2xl sm:text-3xl font-display text-white">
                Information We Collect
              </h2>
              <p className="text-white/70 text-sm sm:text-base leading-relaxed">
                We collect the following types of information:
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <span className="text-mint-green mt-1">•</span>
                  <span className="text-white/70 text-sm sm:text-base">
                    <strong className="text-white">Contact data:</strong> Name, email, and message content collected via our contact form
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-mint-green mt-1">•</span>
                  <span className="text-white/70 text-sm sm:text-base">
                    <strong className="text-white">Project preferences:</strong> Project type, budget, and timeline you submit
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-mint-green mt-1">•</span>
                  <span className="text-white/70 text-sm sm:text-base">
                    <strong className="text-white">Usage data:</strong> Basic analytics (page views, device type, referrer) if Analytics is enabled
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-mint-green mt-1">•</span>
                  <span className="text-white/70 text-sm sm:text-base">
                    <strong className="text-white">Cookies:</strong> See our{" "}
                    <Link href="/cookies" className="text-electric-blue hover:text-mint-green transition-colors">
                      Cookie Policy
                    </Link>{" "}
                    for details
                  </span>
                </li>
              </ul>
            </div>

            {/* How We Use Information */}
            <div className="rounded-lg border border-white/10 bg-white/[0.03] p-6 sm:p-8 md:p-10 space-y-4">
              <h2 className="text-2xl sm:text-3xl font-display text-white">
                How We Use Information
              </h2>
              <p className="text-white/70 text-sm sm:text-base leading-relaxed">
                We use your information to:
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <span className="text-electric-blue mt-1">•</span>
                  <span className="text-white/70 text-sm sm:text-base">
                    Respond to inquiries and provide proposals
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-electric-blue mt-1">•</span>
                  <span className="text-white/70 text-sm sm:text-base">
                    Operate, maintain, and improve our website and services
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-electric-blue mt-1">•</span>
                  <span className="text-white/70 text-sm sm:text-base">
                    Security, fraud prevention, and legal compliance
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-electric-blue mt-1">•</span>
                  <span className="text-white/70 text-sm sm:text-base">
                    Communicate with you about projects, updates, and services
                  </span>
                </li>
              </ul>
            </div>

            {/* Sharing */}
            <div className="rounded-lg border border-white/10 bg-white/[0.03] p-6 sm:p-8 md:p-10 space-y-4">
              <h2 className="text-2xl sm:text-3xl font-display text-white">
                Sharing & Third Parties
              </h2>
              <p className="text-white/70 text-sm sm:text-base leading-relaxed">
                <strong className="text-white">We do not sell personal data.</strong> We may share limited data with trusted service providers who help us operate our site:
              </p>
              <div className="bg-white/[0.02] border border-white/10 rounded-lg p-6 space-y-3">
                <div className="flex items-start gap-3">
                  <span className="text-mint-green mt-1">•</span>
                  <div>
                    <span className="text-white font-semibold">EmailJS</span>
                    <span className="text-white/60 text-sm"> — Contact form delivery</span>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-mint-green mt-1">•</span>
                  <div>
                    <span className="text-white font-semibold">Google reCAPTCHA</span>
                    <span className="text-white/60 text-sm"> — Spam protection</span>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-mint-green mt-1">•</span>
                  <div>
                    <span className="text-white font-semibold">Vercel</span>
                    <span className="text-white/60 text-sm"> — Website hosting</span>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-mint-green mt-1">•</span>
                  <div>
                    <span className="text-white font-semibold">Google Analytics</span>
                    <span className="text-white/60 text-sm"> — Optional traffic insights</span>
                  </div>
                </div>
              </div>
              <p className="text-white/60 text-xs sm:text-sm leading-relaxed italic">
                These providers act as processors on our behalf and are bound by agreements to protect your data.
              </p>
            </div>

            {/* Data Retention */}
            <div className="rounded-lg border border-white/10 bg-white/[0.03] p-6 sm:p-8 md:p-10 space-y-4">
              <h2 className="text-2xl sm:text-3xl font-display text-white">
                Data Retention
              </h2>
              <p className="text-white/70 text-sm sm:text-base leading-relaxed">
                We keep form submissions and contact information for as long as needed to serve you and meet legal obligations. After that period, we delete or anonymize your data.
              </p>
              <p className="text-white/60 text-xs sm:text-sm leading-relaxed italic">
                Typical retention period: 3-5 years or as required by law
              </p>
            </div>

            {/* Your Rights */}
            <div className="rounded-lg border border-white/10 bg-white/[0.03] p-6 sm:p-8 md:p-10 space-y-4">
              <h2 className="text-2xl sm:text-3xl font-display text-white">
                Your Rights
              </h2>
              <p className="text-white/70 text-sm sm:text-base leading-relaxed">
                Depending on your location (GDPR, CCPA, etc.), you may have rights to:
              </p>
              <ul className="space-y-2">
                <li className="flex items-start gap-3">
                  <span className="text-electric-blue mt-1">•</span>
                  <span className="text-white/70 text-sm sm:text-base">
                    Access your personal data
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-electric-blue mt-1">•</span>
                  <span className="text-white/70 text-sm sm:text-base">
                    Correct inaccurate information
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-electric-blue mt-1">•</span>
                  <span className="text-white/70 text-sm sm:text-base">
                    Delete your data (right to be forgotten)
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-electric-blue mt-1">•</span>
                  <span className="text-white/70 text-sm sm:text-base">
                    Restrict or object to data processing
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-electric-blue mt-1">•</span>
                  <span className="text-white/70 text-sm sm:text-base">
                    Data portability
                  </span>
                </li>
              </ul>
              <p className="text-white/70 text-sm sm:text-base leading-relaxed pt-4">
                To exercise your rights, email{" "}
                <Link
                  href="mailto:contactus@tindevstudios.com"
                  className="text-mint-green hover:text-electric-blue transition-colors font-semibold"
                >
                  contactus@tindevstudios.com
                </Link>{" "}
                or visit our{" "}
                <Link href="/gdpr" className="text-electric-blue hover:text-mint-green transition-colors">
                  GDPR/CCPA page
                </Link>
                .
              </p>
            </div>

            {/* International Transfers */}
            <div className="rounded-lg border border-white/10 bg-white/[0.03] p-6 sm:p-8 md:p-10 space-y-4">
              <h2 className="text-2xl sm:text-3xl font-display text-white">
                International Transfers
              </h2>
              <p className="text-white/70 text-sm sm:text-base leading-relaxed">
                We are based in the <strong className="text-white">United States</strong>. By using our site, you understand your data may be transferred to and processed in the U.S., which may have different data protection laws than your country.
              </p>
            </div>

            {/* Security */}
            <div className="rounded-lg border border-white/10 bg-white/[0.03] p-6 sm:p-8 md:p-10 space-y-4">
              <h2 className="text-2xl sm:text-3xl font-display text-white">
                Security
              </h2>
              <p className="text-white/70 text-sm sm:text-base leading-relaxed">
                We use reasonable technical and organizational measures to protect your data, including encryption, secure hosting, and access controls. However, no system is 100% secure, and we cannot guarantee absolute security.
              </p>
            </div>

            {/* Children */}
            <div className="rounded-lg border border-white/10 bg-white/[0.03] p-6 sm:p-8 md:p-10 space-y-4">
              <h2 className="text-2xl sm:text-3xl font-display text-white">
                Children's Privacy
              </h2>
              <p className="text-white/70 text-sm sm:text-base leading-relaxed">
                Our website is not directed to children under 13, and we do not knowingly collect their data. If we learn we have collected data from a child under 13, we will delete it promptly.
              </p>
            </div>

            {/* Changes */}
            <div className="rounded-lg border border-white/10 bg-white/[0.03] p-6 sm:p-8 md:p-10 space-y-4">
              <h2 className="text-2xl sm:text-3xl font-display text-white">
                Changes to This Policy
              </h2>
              <p className="text-white/70 text-sm sm:text-base leading-relaxed">
                We may update this policy from time to time. We'll change the "Effective" date above and, when appropriate, provide additional notice of significant changes via email or a prominent notice on our website.
              </p>
            </div>

            {/* Contact */}
            <div className="rounded-lg border border-white/10 bg-white/[0.03] p-6 sm:p-8 md:p-10 space-y-4">
              <h2 className="text-2xl sm:text-3xl font-display text-white">
                Contact Us
              </h2>
              <div className="text-white/70 text-sm sm:text-base leading-relaxed">
                <p className="mb-2">
                  <strong className="text-white">Tin Dev Studios Inc.</strong>
                </p>
                <p className="mb-2">Dallas, TX</p>
                <Link
                  href="mailto:contactus@tindevstudios.com"
                  className="inline-flex items-center text-mint-green hover:text-electric-blue transition-colors font-semibold"
                >
                  contactus@tindevstudios.com →
                </Link>
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
              We're committed to protecting your data. Reach out with any concerns.
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