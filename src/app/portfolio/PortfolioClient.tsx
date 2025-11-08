"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import Nav from "@/components/nav";
import Footer from "@/components/footer";
import { Container, Section } from "@/components/ui";
import upplyitHome from "@/components/assets/upplyithome.png";

export default function PortfolioClient() {
  return (
    <>
      <Nav />

      {/* Header with Starfield Background */}
      <section className="relative isolate overflow-hidden pt-20 sm:pt-24 md:pt-28 pb-12 sm:pb-16">
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
                Selected Work
              </h1>
              <p className="mt-3 sm:mt-4 text-white/70 text-base sm:text-lg max-w-3xl mx-auto">
                We design and build clear, maintainable, performance-focused software — not over-engineered systems.
              </p>
            </div>
          </Container>
        </div>
      </section>

      {/* Divider */}
      <div className="border-t border-white/10" />

      {/* Featured Project: Upplyit */}
      <Section pad="py-12 sm:py-16 md:py-20 lg:py-24">
        <Container>
          <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-0">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              {/* Content */}
              <div className="space-y-6">
                <div>
                  <span className="text-mint-green text-xs sm:text-sm font-semibold uppercase tracking-widest">
                    Featured Project
                  </span>
                  <h2 className="text-2xl sm:text-3xl md:text-4xl font-display text-white mt-3 sm:mt-4">
                    Upplyit — AI Resume & Career Tools
                  </h2>
                </div>

                <p className="text-white/75 text-base sm:text-lg leading-relaxed">
                  A streamlined platform for improving job applications through automated resume analysis, job alignment scoring, and optimized application workflows.
                </p>

                <div className="space-y-3 pt-2">
                  <div className="flex items-start gap-3">
                    <span className="text-mint-green text-sm sm:text-base font-semibold min-w-[80px]">Role:</span>
                    <span className="text-white/80 text-sm sm:text-base">Product Definition, UX/UI, Full-Stack Development</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-mint-green text-sm sm:text-base font-semibold min-w-[80px]">Type:</span>
                    <span className="text-white/80 text-sm sm:text-base">SaaS MVP</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-mint-green text-sm sm:text-base font-semibold min-w-[80px]">Stack:</span>
                    <span className="text-white/80 text-sm sm:text-base">Next.js, Firebase/Auth, Tailwind, OpenAI API</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-mint-green text-sm sm:text-base font-semibold min-w-[80px]">Outcome:</span>
                    <span className="text-white/80 text-sm sm:text-base">Faster job applications & stronger interview conversion</span>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 pt-4">
                  <Link 
                    href="https://upplyit.com" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary"
                  >
                    View Live →
                  </Link>
                  <Link href="/contact" className="btn-secondary">
                    Request Walkthrough →
                  </Link>
                </div>
              </div>

              {/* Screenshot */}
              <div className="relative w-full rounded-md overflow-hidden">
                <Image
                  src={upplyitHome}
                  alt="Upplyit Platform Homepage"
                  className="w-full h-auto object-contain"
                  priority
                />
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* Divider */}
      <div className="border-t border-white/10" />

      {/* Positioning Content */}
      <Section pad="py-12 sm:py-16 md:py-20 lg:py-24">
        <Container>
          <div className="max-w-4xl mx-auto px-4 sm:px-6 md:px-0">
            <div className="rounded-lg border border-white/10 bg-white/[0.03] p-6 sm:p-8 md:p-10 space-y-4">
              <p className="text-white/80 text-base sm:text-lg leading-relaxed">
                We build software intentionally — clear user experience, maintainable architecture, and scalable foundations.
              </p>
              <p className="text-white/80 text-base sm:text-lg leading-relaxed">
                Each project is structured into small, testable stages that reduce risk and accelerate delivery.
              </p>
            </div>
          </div>
        </Container>
      </Section>

      {/* Divider */}
      <div className="border-t border-white/10" />

      {/* Coming Soon */}
      <Section pad="py-12 sm:py-16 md:py-20 lg:py-24">
        <Container>
          <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-0">
            <div className="text-center mb-12 sm:mb-16">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-display text-white">
                Coming Soon
              </h2>
              <p className="mt-3 sm:mt-4 text-sm sm:text-base text-white/70">
                Projects in development
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 lg:gap-10">
              <ComingSoonCard
                title="BookFlow — Client Booking & Intake System"
                status="Planned Launch • November 2026"
                desc="Automated appointment scheduling, intake forms, and client management for therapists, trainers, barbers, and service professionals. Replaces manual booking chaos with streamlined automation."
              />
              <ComingSoonCard
                title="Playbook — Team SOP & Workflow Manager"
                status="Planned Launch • March 2027"
                desc="Centralized operations playbook for small businesses and teams. Document procedures, assign tasks, track progress, and onboard staff with structured accountability."
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
              Have a project in mind?
            </h3>
            <p className="mt-3 sm:mt-4 text-sm sm:text-base text-white/70">
              Tell us your goals — we'll create a clear, realistic path forward.
            </p>
            <div className="mt-6 sm:mt-8">
              <Link href="/contact" className="btn-primary">
                Start a Conversation →
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

function ComingSoonCard({
  title,
  status,
  desc,
}: {
  title: string;
  status: string;
  desc: string;
}) {
  return (
    <div className="rounded-lg border border-white/10 bg-white/[0.03] p-6 sm:p-8">
      <h3 className="text-lg sm:text-xl font-display text-white">{title}</h3>
      <div className="text-xs sm:text-sm text-electric-blue mt-2">{status}</div>
      <p className="mt-4 text-white/70 text-sm sm:text-base leading-relaxed">{desc}</p>
    </div>
  );
}