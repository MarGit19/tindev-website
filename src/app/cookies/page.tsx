import type { Metadata } from "next";
import Link from "next/link";
import Nav from "@/components/nav";
import Footer from "@/components/footer";
import { Container, Section } from "@/components/ui";

export const metadata: Metadata = {
  title: "Cookie Policy — Tin Dev Studios",
  description: "How and why we use cookies and similar technologies.",
  alternates: { canonical: "/cookies" },
};

export default function CookiesPage() {
  return (
    <>
      <Nav />

      {/* Header */}
      <Section pad="pt-20 sm:pt-24 md:pt-28 pb-12 sm:pb-16">
        <Container>
          <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-0 text-center">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-display text-white">
              Cookie Policy
            </h1>
            <p className="mt-3 sm:mt-4 text-white/70 text-base sm:text-lg max-w-3xl mx-auto">
              How and why we use cookies and similar technologies
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
                  We use essential cookies to make our site work and, with your consent, analytics cookies to understand performance. You can control cookies in your browser settings.
                </p>
              </div>

              {/* Types of Cookies */}
              <div className="pt-6 border-t border-white/10 space-y-4">
                <h2 className="text-2xl sm:text-3xl font-display text-white">
                  Types of Cookies
                </h2>
                <div className="space-y-4">
                  <CookieType
                    title="Essential"
                    description="Required for core functionality (security, load balancing, session management)."
                    color="text-mint-green"
                  />
                  <CookieType
                    title="Analytics"
                    description="Helps us measure traffic and improve the site (e.g., Google Analytics)."
                    color="text-electric-blue"
                  />
                  <CookieType
                    title="Spam Protection"
                    description="reCAPTCHA may set cookies to prevent abuse and protect form submissions."
                    color="text-vivid-coral"
                  />
                </div>
              </div>

              {/* Managing Cookies */}
              <div className="pt-6 border-t border-white/10 space-y-4">
                <h2 className="text-2xl sm:text-3xl font-display text-white">
                  Managing Cookies
                </h2>
                <p className="text-white/70 text-sm sm:text-base leading-relaxed">
                  Most browsers allow you to block or delete cookies through their settings. Please note that blocking essential cookies may impact site functionality and your ability to use certain features.
                </p>
                <div className="bg-white/[0.02] border border-white/10 rounded-lg p-6">
                  <p className="text-white/60 text-xs sm:text-sm leading-relaxed">
                    <strong className="text-white">Browser Settings:</strong> You can typically find cookie controls in your browser's privacy or settings menu. Common browsers include Chrome, Firefox, Safari, and Edge.
                  </p>
                </div>
              </div>

              {/* Third Parties */}
              <div className="pt-6 border-t border-white/10 space-y-4">
                <h2 className="text-2xl sm:text-3xl font-display text-white">
                  Third-Party Services
                </h2>
                <p className="text-white/70 text-sm sm:text-base leading-relaxed mb-4">
                  We work with the following third-party services that may set cookies:
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <span className="text-mint-green mt-1">•</span>
                    <div>
                      <strong className="text-white text-sm sm:text-base">Google Analytics</strong>
                      <span className="text-white/60 text-xs sm:text-sm block mt-1">(Optional) Helps us understand how visitors use our site</span>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-mint-green mt-1">•</span>
                    <div>
                      <strong className="text-white text-sm sm:text-base">Google reCAPTCHA</strong>
                      <span className="text-white/60 text-xs sm:text-sm block mt-1">Protects our forms from spam and abuse</span>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-mint-green mt-1">•</span>
                    <div>
                      <strong className="text-white text-sm sm:text-base">Vercel</strong>
                      <span className="text-white/60 text-xs sm:text-sm block mt-1">Hosting platform that may use cookies for performance optimization</span>
                    </div>
                  </li>
                </ul>
              </div>

              {/* Updates */}
              <div className="pt-6 border-t border-white/10 space-y-4">
                <h2 className="text-2xl sm:text-3xl font-display text-white">
                  Policy Updates
                </h2>
                <p className="text-white/70 text-sm sm:text-base leading-relaxed">
                  We may update this Cookie Policy from time to time. Changes will be posted on this page with an updated revision date.
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
              Questions About Cookies?
            </h3>
            <p className="mt-3 sm:mt-4 text-sm sm:text-base text-white/70">
              If you have any questions about our use of cookies, feel free to reach out.
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

/* ---------- Components ---------- */

function CookieType({
  title,
  description,
  color,
}: {
  title: string;
  description: string;
  color: string;
}) {
  return (
    <div className="bg-white/[0.02] border border-white/10 rounded-lg p-4 sm:p-6">
      <h3 className={`text-base sm:text-lg font-display ${color} mb-2`}>
        {title}
      </h3>
      <p className="text-white/70 text-xs sm:text-sm leading-relaxed">
        {description}
      </p>
    </div>
  );
}