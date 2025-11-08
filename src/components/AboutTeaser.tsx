"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { CheckCircle2, Workflow, ShieldCheck, Gauge } from "lucide-react";

export default function AboutTeaser() {
  return (
    <section className="relative isolate overflow-hidden py-12 sm:py-16 md:py-20 lg:py-24 border-t border-white/10">
      {/* Subtle back glow */}
      <motion.div
        aria-hidden="true"
        initial={{ opacity: 0.04, scale: 0.95 }}
        animate={{ opacity: [0.04, 0.07, 0.04], scale: [0.95, 1, 0.95] }}
        transition={{ duration: 16, repeat: Infinity }}
        className="pointer-events-none absolute -top-32 left-1/2 h-[26rem] w-[26rem] sm:h-[30rem] sm:w-[30rem] lg:h-[36rem] lg:w-[36rem] -translate-x-1/2 rounded-full bg-mint-green/30 blur-3xl"
      />

      <div className="relative z-10 container">
        <div className="max-w-6xl mx-auto">
          <div className="grid items-center gap-8 sm:gap-10 lg:gap-12 xl:gap-14 md:grid-cols-2">
          {/* Left Column */}
          <div className="px-4 sm:px-6 md:px-0">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1.5 text-xs sm:text-sm text-white/80 backdrop-blur">
              Purpose-built software, not templates
            </div>

            <h2 className="mt-4 sm:mt-5 font-display text-2xl sm:text-3xl md:text-3xl lg:text-4xl leading-tight text-white">
              Calm execution. <span className="gradient-text">Zero fluff.</span>
            </h2>
            
            <p className="mt-3 sm:mt-4 max-w-prose text-sm sm:text-base md:text-base text-white/70">
              We build clean, reliable products that do exactly what your business needs.
              Small, testable milestones. Clear communication. Measurable outcomes.
            </p>

            <ul className="mt-5 sm:mt-6 space-y-3 text-xs sm:text-sm md:text-sm text-white/80">
              <Bullet icon={<Workflow className="h-4 w-4" />} text="Milestone-based planning & weekly progress" />
              <Bullet icon={<ShieldCheck className="h-4 w-4" />} text="Best practices for security & durability" />
              <Bullet icon={<Gauge className="h-4 w-4" />} text="Performance-first builds with maintainable code" />
            </ul>

            <div className="mt-6 sm:mt-8 flex flex-col gap-3 sm:flex-row">
              <Link href="/about" className="btn-primary">
                How we work
              </Link>
              <Link href="/contact" className="btn-secondary">
                Start a project →
              </Link>
            </div>
          </div>

          {/* Right card */}
          <div className="rounded-lg border border-white/10 bg-white/[0.03] p-5 sm:p-6 lg:p-8 mx-4 sm:mx-6 md:mx-0">
            <h3 className="text-base sm:text-lg md:text-xl text-white font-display">Where we're strongest</h3>
            <ul className="mt-4 sm:mt-5 grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm md:text-sm text-white/75">
              {[
                "Web apps & dashboards",
                "SaaS MVPs",
                "Process automations",
                "Integrations (Stripe/CRMs)",
                "Client portals",
                "Analytics & reporting",
              ].map((t) => (
                <li key={t} className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 flex-shrink-0 text-mint-green" />
                  <span>{t}</span>
                </li>
              ))}
            </ul>
            <p className="mt-4 sm:mt-5 text-xs sm:text-xs text-white/50">
              Tech we love: Next.js, React, Tailwind, Node, PostgreSQL, Firebase, Stripe, and modern APIs.
            </p>
          </div>
                  </div>
        </div>
      </div>
    </section>
  );
}

function Bullet({ icon, text }: { icon: React.ReactNode; text: string }) {
  return (
    <li className="flex items-center gap-2">
      <span className="grid place-items-center rounded-md bg-white/10 p-1.5 flex-shrink-0">{icon}</span>
      <span>{text}</span>
    </li>
  );
}