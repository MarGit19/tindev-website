"use client";

import React, { useRef, useEffect, useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  Award,
  Users,
  Zap,
  Target,
  Code,
  CheckCircle,
  ArrowRight,
} from "lucide-react";
import { Container, Section } from "@/components/ui";
import { COMPANY_VALUES, TECHNOLOGY_STACK } from "@/lib/constants";

export default function AboutClient() {
  return (
    <>
      {/* Header with Starfield Background */}
      <section
        aria-label="About Header"
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

        {/* Header Content */}
        <div className="relative z-10">
          <Container>
            <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-0 text-center">
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-display text-white">
                About Tin Dev Studios
              </h1>
              <p className="mt-3 sm:mt-4 text-white/70 text-base sm:text-lg max-w-3xl mx-auto">
                We partner with startups and small teams to ship modern web apps, APIs, and automations — with clear scope and dependable delivery.
              </p>
            </div>
          </Container>
        </div>
      </section>

      {/* Divider */}
      <div className="border-t border-white/10" />

      {/* Stats */}
      <Section pad="py-12 sm:py-16 md:py-20 lg:py-24">
        <Container>
          <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-0">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 lg:gap-10">
              <StatCard num="MVPs" label="Shipped pragmatically" />
              <StatCard num="APIs" label="Designed for scale" />
              <StatCard num="Automations" label="Hours saved weekly" />
              <StatCard num="Uptime" label="Monitored & reliable" />
            </div>
          </div>
        </Container>
      </Section>

      {/* Divider */}
      <div className="border-t border-white/10" />

      {/* Mission & Vision */}
      <Section pad="py-12 sm:py-16 md:py-20 lg:py-24">
        <Container>
          <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-0">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
              {/* Mission */}
              <div className="space-y-6">
                <div>
                  <span className="text-mint-green text-xs sm:text-sm font-semibold uppercase tracking-widest">
                    Our Mission
                  </span>
                  <h2 className="text-2xl sm:text-3xl md:text-4xl font-display text-white mt-3 sm:mt-4">
                    Build Custom Software That Works
                  </h2>
                </div>

                <p className="text-white/75 text-base sm:text-lg leading-relaxed">
                  We create bespoke software tailored to the real needs of your business. Clear interfaces, sensible architecture, and maintainable code.
                </p>

                <p className="text-white/70 text-base sm:text-lg leading-relaxed">
                  From MVP to production, we ship in small, testable increments so you can validate quickly and reduce risk.
                </p>

                <ul className="space-y-3 pt-2">
                  <CheckItem text="Full-stack product development" />
                  <CheckItem text="Transparent, iterative delivery" />
                  <CheckItem text="Scalable, well-documented systems" />
                  <CheckItem text="Ongoing support & maintenance" />
                </ul>
              </div>

              {/* Vision */}
              <div className="space-y-6">
                <div>
                  <span className="text-electric-blue text-xs sm:text-sm font-semibold uppercase tracking-widest">
                    Our Vision
                  </span>
                  <h2 className="text-2xl sm:text-3xl md:text-4xl font-display text-white mt-3 sm:mt-4">
                    Empower Every Team
                  </h2>
                </div>

                <p className="text-white/75 text-base sm:text-lg leading-relaxed">
                  Software should be understandable, reliable, and genuinely useful. We design for clarity — so teams can move faster with fewer mistakes.
                </p>

                <p className="text-white/70 text-base sm:text-lg leading-relaxed">
                  We build long-term partnerships and keep your stack healthy as you grow.
                </p>

                <ul className="space-y-3 pt-2">
                  <CheckItem text="Pragmatic use of technology" color="electric-blue" />
                  <CheckItem text="Partnership over handoff" color="electric-blue" />
                  <CheckItem text="Continuous improvement" color="electric-blue" />
                  <CheckItem text="Sensible cost & performance" color="electric-blue" />
                </ul>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* Divider */}
      <div className="border-t border-white/10" />

      {/* Core Values */}
      <Section pad="py-12 sm:py-16 md:py-20 lg:py-24">
        <Container>
          <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-0">
            <div className="text-center mb-12 sm:mb-16">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-display text-white">
                Our Core Values
              </h2>
              <p className="mt-3 sm:mt-4 text-sm sm:text-base text-white/70">
                Principles that guide our work
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 lg:gap-10">
              {COMPANY_VALUES.map((value) => (
                <ValueCard key={value.id} title={value.title} description={value.description} />
              ))}
            </div>
          </div>
        </Container>
      </Section>

      {/* Divider */}
      <div className="border-t border-white/10" />

      {/* Why Choose Us */}
      <Section pad="py-12 sm:py-16 md:py-20 lg:py-24">
        <Container>
          <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-0">
            <div className="text-center mb-12 sm:mb-16">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-display text-white">
                Why Choose Tin Dev Studios
              </h2>
              <p className="mt-3 sm:mt-4 text-sm sm:text-base text-white/70">
                What sets us apart
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 lg:gap-10">
              <FeatureCard
                icon={Code}
                title="Expert Team"
                description="Experienced across modern web stacks. We pick sensible tools, not trendy ones."
              />
              <FeatureCard
                icon={Zap}
                title="Agile Process"
                description="Transparent communication, regular updates, and adaptable scope."
              />
              <FeatureCard
                icon={Target}
                title="Results-Focused"
                description="We measure success by shipped features and business outcomes."
              />
              <FeatureCard
                icon={Users}
                title="True Partnership"
                description="We work as an extension of your team — long after launch."
              />
              <FeatureCard
                icon={Award}
                title="Quality First"
                description="Clean code, best practices, and thoughtful reviews."
              />
              <FeatureCard
                icon={CheckCircle}
                title="Proven Approach"
                description="Small batches, fast feedback, and steady delivery."
              />
            </div>
          </div>
        </Container>
      </Section>

      {/* Divider */}
      <div className="border-t border-white/10" />

      {/* Technology Stack */}
      <Section pad="py-12 sm:py-16 md:py-20 lg:py-24">
        <Container>
          <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-0">
            <div className="text-center mb-12 sm:mb-16">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-display text-white">
                Our Technology Stack
              </h2>
              <p className="mt-3 sm:mt-4 text-sm sm:text-base text-white/70">
                Modern, battle-tested tooling for scalable systems
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 lg:gap-10">
              <TechStackCard
                label="Frontend"
                color="text-mint-green"
                techs={TECHNOLOGY_STACK.frontend}
              />
              <TechStackCard
                label="Backend"
                color="text-electric-blue"
                techs={TECHNOLOGY_STACK.backend}
              />
              <TechStackCard
                label="Cloud"
                color="text-slate-blue"
                techs={TECHNOLOGY_STACK.cloud}
              />
              <TechStackCard
                label="Tools"
                color="text-vivid-coral"
                techs={TECHNOLOGY_STACK.tools}
              />
            </div>
          </div>
        </Container>
      </Section>

      {/* Divider */}
      <div className="border-t border-white/10" />

      {/* Development Process */}
      <Section pad="py-12 sm:py-16 md:py-20 lg:py-24">
        <Container>
          <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-0">
            <div className="text-center mb-12 sm:mb-16">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-display text-white">
                Our Development Process
              </h2>
              <p className="mt-3 sm:mt-4 text-sm sm:text-base text-white/70">
                A small-batch, feedback-driven way of working
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10">
              <ProcessStep
                num="01"
                title="Discovery & Planning"
                desc="Understand goals, users, constraints, and risks."
              />
              <ProcessStep
                num="02"
                title="Design & Architecture"
                desc="Shape flows and select a sensible, scalable stack."
              />
              <ProcessStep
                num="03"
                title="Development"
                desc="Ship iteratively with tests, monitoring, and docs."
              />
              <ProcessStep
                num="04"
                title="Testing & QA"
                desc="Exercise critical paths and performance early."
              />
              <ProcessStep
                num="05"
                title="Deployment"
                desc="Zero-downtime releases with rollbacks ready."
              />
              <ProcessStep
                num="06"
                title="Support & Growth"
                desc="Maintenance, observability, and small continuous wins."
              />
            </div>
          </div>
        </Container>
      </Section>

      {/* Divider */}
      <div className="border-t border-white/10" />

      {/* Final CTA */}
      <Section pad="py-16 sm:py-20 md:py-24 lg:py-28">
        <Container>
          <div className="max-w-3xl mx-auto px-4 sm:px-6 md:px-0 text-center">
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-display text-white">
              Ready to Build Something Great?
            </h3>
            <p className="mt-3 sm:mt-4 text-sm sm:text-base text-white/70">
              Let's discuss your project and see if we're the right fit.
            </p>
            <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="btn-primary">
                Start Your Project
              </Link>
              <Link href="/portfolio" className="btn-secondary">
                See Our Work
              </Link>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}

/* ---------- Components ---------- */

function StatCard({ num, label }: { num: string; label: string }) {
  const textRef = useRef<HTMLDivElement>(null);
  const [shouldScroll, setShouldScroll] = useState(false);

  useEffect(() => {
    if (textRef.current) {
      const isOverflowing = textRef.current.scrollWidth > textRef.current.clientWidth;
      setShouldScroll(isOverflowing);
    }
  }, [num]);

  return (
    <div className="p-6 sm:p-8 rounded-lg border border-white/10 bg-white/[0.03] text-center">
      <div className="overflow-hidden" ref={textRef}>
        <div className={`text-3xl sm:text-4xl md:text-5xl font-display gradient-text whitespace-nowrap inline-block ${shouldScroll ? 'animate-marquee' : ''}`}>
          {num}
        </div>
      </div>
      <p className="mt-2 text-white/70 text-sm sm:text-base">
        {label}
      </p>
    </div>
  );
}

function CheckItem({ text, color = "mint-green" }: { text: string; color?: string }) {
  return (
    <li className="flex items-start gap-3">
      <CheckCircle className={`w-5 h-5 text-${color} flex-shrink-0 mt-0.5`} />
      <span className="text-white/80 text-sm sm:text-base">{text}</span>
    </li>
  );
}

function ValueCard({ title, description }: { title: string; description: string }) {
  return (
    <div className="p-6 sm:p-8 rounded-lg border border-white/10 bg-white/[0.03]">
      <div className="flex items-start gap-4 mb-4">
        <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg bg-gradient-to-r from-mint-green to-electric-blue flex items-center justify-center flex-shrink-0">
          <div className="text-white text-lg sm:text-xl font-bold">✓</div>
        </div>
        <h3 className="text-lg sm:text-xl md:text-2xl font-display text-white flex-1 pt-1">{title}</h3>
      </div>
      <p className="text-white/70 text-sm sm:text-base leading-relaxed">{description}</p>
    </div>
  );
}

function FeatureCard({
  icon: Icon,
  title,
  description,
}: {
  icon: any;
  title: string;
  description: string;
}) {
  return (
    <div className="p-6 sm:p-8 rounded-lg border border-white/10 bg-white/[0.03]">
      <Icon className="w-7 h-7 sm:w-8 sm:h-8 text-electric-blue mb-4" />
      <h3 className="text-lg sm:text-xl font-display text-white mb-3">{title}</h3>
      <p className="text-white/70 text-sm sm:text-base leading-relaxed">{description}</p>
    </div>
  );
}

function TechStackCard({
  label,
  color,
  techs,
}: {
  label: string;
  color: string;
  techs: any[];
}) {
  return (
    <div className="rounded-lg border border-white/10 bg-white/[0.03] p-6">
      <h3 className={`font-bold text-base sm:text-lg font-display ${color} mb-4`}>{label}</h3>
      <ul className="space-y-2">
        {techs.map((tech: any, i: number) => (
          <li key={i} className="flex items-center gap-2">
            <CheckCircle className={`w-4 h-4 ${color} flex-shrink-0`} />
            <span className="text-white/70 text-xs sm:text-sm">{tech.name}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

function ProcessStep({ num, title, desc }: { num: string; title: string; desc: string }) {
  return (
    <div className="rounded-lg border border-white/10 bg-white/[0.03] p-6 sm:p-8">
      <div className="flex flex-col items-center text-center space-y-4">
        <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-gradient-to-r from-mint-green to-electric-blue flex items-center justify-center flex-shrink-0">
          <span className="font-bold text-xl sm:text-2xl text-white font-display">{num}</span>
        </div>
        <div>
          <h3 className="text-lg sm:text-xl font-display text-white mb-2">{title}</h3>
          <p className="text-white/70 text-sm sm:text-base">{desc}</p>
        </div>
      </div>
    </div>
  );
}