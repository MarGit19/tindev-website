"use client";

import Link from "next/link";
import { motion } from "framer-motion";

import Nav from "@/components/nav";
import Footer from "@/components/footer";
import { Container, Section } from "@/components/ui";

export default function PricingClient() {
  return (
    <>
      <Nav />

      {/* Header with Starfield Background */}
      <section 
        aria-label="Pricing Header"
        className="relative isolate overflow-hidden pt-20 sm:pt-24 md:pt-28 pb-12 sm:pb-16"
      >
        {/* Starfield Background - Same as Hero */}
        <div className="absolute inset-0 overflow-hidden">
          {/* Static stars layer 1 - Small stars */}
          {[...Array(100)].map((_, i) => (
            <motion.div
              key={`star-s-${i}`}
              className="absolute w-[1px] h-[1px] bg-white rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                opacity: [0.2, 1, 0.2],
                scale: [1, 1.5, 1],
              }}
              transition={{
                duration: Math.random() * 3 + 2,
                repeat: Infinity,
                delay: Math.random() * 5,
              }}
            />
          ))}

          {/* Static stars layer 2 - Medium stars */}
          {[...Array(50)].map((_, i) => (
            <motion.div
              key={`star-m-${i}`}
              className="absolute w-[2px] h-[2px] bg-white rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                opacity: [0.3, 0.9, 0.3],
                scale: [1, 1.3, 1],
              }}
              transition={{
                duration: Math.random() * 4 + 2,
                repeat: Infinity,
                delay: Math.random() * 5,
              }}
            />
          ))}

          {/* Shooting stars */}
          {[...Array(5)].map((_, i) => (
            <motion.div
              key={`shooting-${i}`}
              className="absolute h-[1px] bg-gradient-to-r from-transparent via-white to-transparent"
              style={{
                width: `${Math.random() * 100 + 50}px`,
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                rotate: `${Math.random() * 360}deg`,
              }}
              initial={{ opacity: 0, x: 0 }}
              animate={{
                opacity: [0, 1, 0],
                x: [0, Math.random() * 300 + 200],
                y: [0, Math.random() * 200 + 100],
              }}
              transition={{
                duration: Math.random() * 2 + 1,
                repeat: Infinity,
                repeatDelay: Math.random() * 10 + 5,
                ease: "easeOut",
              }}
            />
          ))}
        </div>

        {/* Subtle animated blobs */}
        <motion.div
          aria-hidden="true"
          initial={{ opacity: 0.05, scale: 0.9 }}
          animate={{ opacity: [0.04, 0.07, 0.04], scale: [0.9, 1, 0.9] }}
          transition={{ duration: 14, repeat: Infinity }}
          className="pointer-events-none absolute -top-40 left-1/3 h-[28rem] w-[28rem] sm:h-[32rem] sm:w-[32rem] lg:h-[40rem] lg:w-[40rem] rounded-full bg-electric-blue/30 blur-3xl"
        />
        <motion.div
          aria-hidden="true"
          initial={{ opacity: 0.05, scale: 0.9 }}
          animate={{ opacity: [0.04, 0.07, 0.04], scale: [0.95, 1.02, 0.95] }}
          transition={{ duration: 16, repeat: Infinity, delay: 0.5 }}
          className="pointer-events-none absolute -bottom-40 right-1/4 h-[30rem] w-[30rem] sm:h-[36rem] sm:w-[36rem] lg:h-[44rem] lg:w-[44rem] rounded-full bg-mint-green/30 blur-3xl"
        />

        <Container>
          <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 md:px-0 text-center">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-display text-white">Pricing</h1>
            <p className="mt-3 sm:mt-4 text-white/70 text-base sm:text-lg">
              Clear starting points. Final quotes are based on features, scope, and timeline.
            </p>
          </div>
        </Container>
      </section>

      {/* Divider */}
      <div className="border-t border-white/10" />

      {/* Tiers */}
      <Section pad="py-12 sm:py-16 md:py-20 lg:py-24">
        <Container>
          <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-0">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 lg:gap-10">
              <Tier
                name="Starter Website"
                price="Starting at $800 – $1,200"
                desc="For personal brands and small businesses."
                bullets={[
                  "Custom one-page or multi-section site",
                  "Responsive, mobile-first build",
                  "Basic integrations (contact, calendar, payments)",
                  "SEO-ready structure",
                ]}
                cta={{ label: "Get a Starter Quote", href: "/contact" }}
              />
              <Tier
                name="Professional Website"
                price="Starting at $1,500 – $3,500"
                desc="For growing teams that need performance and workflows."
                bullets={[
                  "Multi-page custom design",
                  "Lead capture + simple automations",
                  "Booking or payments integration",
                  "Speed & on-page SEO setup",
                  "Launch support & handoff",
                ]}
                cta={{ label: "Request Proposal", href: "/contact" }}
                featured
              />
              <Tier
                name="Custom Web App / SaaS"
                price="Starting at $4,000+"
                desc="For dashboards, portals, or product MVPs."
                bullets={[
                  "Product definition & UX",
                  "Auth, DB, and API integrations",
                  "Testing & documentation",
                  "Scalable architecture",
                ]}
                cta={{ label: "Book Discovery Call", href: "/contact" }}
              />
            </div>

            {/* Automations + Maintenance */}
            <div className="mt-16 sm:mt-20 lg:mt-24 grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-10 lg:gap-12">
              <Block
                title="Automations & Integrations"
                subtitle="Starting at $500 per workflow"
                items={[
                  "Lead → CRM → email nurture",
                  "Payments & invoicing flows",
                  "Calendars, Slack, Airtable, Notion",
                  "Reporting & notifications",
                ]}
                link={{ label: "Request Automation Plan →", href: "/contact" }}
              />
              <Block
                title="Maintenance & Support"
                subtitle="From $75/mo (Basic) • $200/mo (Pro)"
                items={[
                  "Monthly updates & backups",
                  "Security & uptime monitoring",
                  "Content requests",
                  "Performance checks, priority support",
                ]}
                link={{ label: "View Maintenance Options →", href: "/contact" }}
              />
            </div>
          </div>
        </Container>
      </Section>

      {/* How payment works */}
      <Section pad="py-12 sm:py-16 md:py-20 lg:py-24 border-t border-white/10">
        <Container>
          <div className="max-w-4xl mx-auto px-4 sm:px-6 md:px-0">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-display text-white">How Payment Works</h2>
            <ul className="mt-5 sm:mt-6 space-y-2 text-sm sm:text-base text-white/80">
              <li>• 50% deposit to begin</li>
              <li>• 50% due at completion, prior to launch</li>
              <li>• Maintenance is billed monthly or quarterly</li>
            </ul>
            <div className="mt-6 sm:mt-8">
              <Link href="/contact" className="btn-primary">
                Get an Exact Quote
              </Link>
            </div>
          </div>
        </Container>
      </Section>

      {/* FAQ */}
      <Section pad="py-12 sm:py-16 md:py-20 lg:py-24 border-t border-white/10">
        <Container>
          <div className="max-w-4xl mx-auto px-4 sm:px-6 md:px-0 space-y-6 sm:space-y-8">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-display text-white">FAQs</h2>
            
            <details className="rounded-md border border-white/10 bg-white/[0.03] p-4 sm:p-5 group">
              <summary className="cursor-pointer font-medium text-sm sm:text-base text-white list-none flex items-center justify-between">
                <span>How long does a typical website take?</span>
                <span className="text-white/40 group-open:rotate-180 transition-transform">▼</span>
              </summary>
              <div className="mt-3 text-xs sm:text-sm text-white/70 leading-relaxed">
                Most starter and professional sites launch in 2–6 weeks depending on scope and content readiness.
              </div>
            </details>

            <details className="rounded-md border border-white/10 bg-white/[0.03] p-4 sm:p-5 group">
              <summary className="cursor-pointer font-medium text-sm sm:text-base text-white list-none flex items-center justify-between">
                <span>Do you offer copywriting or branding?</span>
                <span className="text-white/40 group-open:rotate-180 transition-transform">▼</span>
              </summary>
              <div className="mt-3 text-xs sm:text-sm text-white/70 leading-relaxed">
                Yes. We can provide light copy guidance and collaborate with brand partners when needed.
              </div>
            </details>

            <details className="rounded-md border border-white/10 bg-white/[0.03] p-4 sm:p-5 group">
              <summary className="cursor-pointer font-medium text-sm sm:text-base text-white list-none flex items-center justify-between">
                <span>What platforms/stack do you use?</span>
                <span className="text-white/40 group-open:rotate-180 transition-transform">▼</span>
              </summary>
              <div className="mt-3 text-xs sm:text-sm text-white/70 leading-relaxed">
                Next.js, React, Tailwind, plus integrations (Stripe, CRMs, Airtable, etc.) based on your needs.
              </div>
            </details>

            <details className="rounded-md border border-white/10 bg-white/[0.03] p-4 sm:p-5 group">
              <summary className="cursor-pointer font-medium text-sm sm:text-base text-white list-none flex items-center justify-between">
                <span>Can you migrate my existing site?</span>
                <span className="text-white/40 group-open:rotate-180 transition-transform">▼</span>
              </summary>
              <div className="mt-3 text-xs sm:text-sm text-white/70 leading-relaxed">
                Yes. We handle safe migration, redirects, and SEO preservation.
              </div>
            </details>
          </div>
        </Container>
      </Section>

      {/* Final CTA */}
      <Section pad="py-16 sm:py-20 md:py-24 lg:py-28 border-t border-white/10">
        <Container>
          <div className="max-w-3xl mx-auto px-4 sm:px-6 md:px-0 text-center">
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-display text-white">Ready to start?</h3>
            <p className="mt-3 sm:mt-4 text-sm sm:text-base text-white/70">
              Tell us your goals. We'll map a focused plan and quote.
            </p>
            <div className="mt-6 sm:mt-8">
              <Link href="/contact" className="btn-primary">
                Start Your Project
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

function Tier({
  name,
  price,
  desc,
  bullets,
  cta,
  featured = false,
}: {
  name: string;
  price: string;
  desc: string;
  bullets: string[];
  cta: { label: string; href: string };
  featured?: boolean;
}) {
  return (
    <div
      className={`p-6 sm:p-8 rounded-lg border ${
        featured ? "border-accent ring-2 ring-accent/20" : "border-white/10"
      } bg-white/[0.03]`}
    >
      <div className="text-xs sm:text-sm uppercase tracking-wide text-white/60">{name}</div>
      <div className="mt-2 text-lg sm:text-xl font-display text-white">{price}</div>
      <p className="mt-3 text-sm sm:text-base text-white/70">{desc}</p>
      <ul className="mt-5 sm:mt-6 space-y-2 text-xs sm:text-sm text-white/80">
        {bullets.map((b, i) => (
          <li key={i} className="flex items-start gap-2">
            <span className="text-mint-green mt-0.5">•</span>
            <span>{b}</span>
          </li>
        ))}
      </ul>
      <div className="mt-6 sm:mt-8">
        <Link href={cta.href} className="btn-primary w-full">
          {cta.label}
        </Link>
      </div>
    </div>
  );
}

function Block({
  title,
  subtitle,
  items,
  link,
}: {
  title: string;
  subtitle?: string;
  items?: string[];
  link?: { label: string; href: string };
}) {
  return (
    <div className="rounded-lg border border-white/10 bg-white/[0.03] p-6 sm:p-8">
      <h3 className="text-lg sm:text-xl md:text-2xl font-display text-white">{title}</h3>
      {subtitle && <div className="text-white/60 mt-2 text-sm sm:text-base">{subtitle}</div>}
      {items && (
        <ul className="mt-4 sm:mt-5 space-y-2 text-xs sm:text-sm text-white/80">
          {items.map((i, idx) => (
            <li key={idx} className="flex items-start gap-2">
              <span className="text-mint-green mt-0.5">•</span>
              <span>{i}</span>
            </li>
          ))}
        </ul>
      )}
      {link && (
        <div className="mt-5 sm:mt-6">
          <Link
            href={link.href}
            className="text-accent text-sm sm:text-base underline underline-offset-4 hover:text-accent/80 transition-colors"
          >
            {link.label}
          </Link>
        </div>
      )}
    </div>
  );
}