"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Rocket, LineChart } from "lucide-react";

export default function Hero() {
  return (
    <section
      aria-label="Hero"
      className="relative isolate overflow-hidden pt-20 pb-16 sm:pt-24 sm:pb-20 md:pt-28 md:pb-24 lg:pt-32 lg:pb-28"
    >
      {/* Starfield Background - Rolls-Royce Style */}
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

      <div className="relative z-10">
        <div className="container">
          {/* Top micro-badge */}
          <div className="mb-6 flex justify-center">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1.5 sm:px-4 sm:py-2 text-xs sm:text-sm text-white/80 backdrop-blur">
              <span className="inline-block h-1.5 w-1.5 animate-pulse rounded-full bg-mint-green" />
              Pragmatic software. Clean delivery.
            </span>
          </div>

          {/* Core text */}
          <div className="text-center">
            <h1 className="gradient-text font-display text-3xl leading-tight sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl">
              Software that ships —
              <span className="block text-white">and moves your metrics</span>
            </h1>

            <p className="mx-auto mt-4 sm:mt-5 md:mt-6 max-w-4xl text-sm sm:text-base md:text-lg lg:text-xl text-white/75 px-4 sm:px-6 md:px-0">
              Tin Dev Studios builds clear, reliable products: modern websites, custom web apps, and
              automations that reduce busywork and lift KPIs. Milestone-based, zero-fluff delivery.
            </p>

            {/* CTAs */}
            <div className="mt-6 sm:mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-4 px-4 sm:px-0">
              <Link
                href="/contact"
                className="btn-primary"
              >
                Start a project
                <ArrowRight className="h-4 w-4" />
              </Link>

              <Link
                href="/portfolio"
                className="btn-secondary"
              >
                See our work
              </Link>
            </div>

            {/* Proof row */}
            <div className="mx-auto mt-8 sm:mt-10 md:mt-12 grid max-w-5xl grid-cols-1 gap-3 sm:gap-4 px-4 sm:px-6 md:px-0 sm:grid-cols-3">
              <Stat
                icon={<Rocket className="h-4 w-4" />}
                label="MVPs in weeks"
                value="4–10"
              />
              <Stat
                icon={<LineChart className="h-4 w-4" />}
                label="Uptime on managed apps"
                value="99.95%"
              />
              <Stat
                icon={<span className="font-bold">✓</span>}
                label="Delivery model"
                value="Milestone-based"
              />
            </div>

            {/* Social proof / trust bar */}
            <div className="mx-auto mt-8 sm:mt-10 md:mt-12 max-w-5xl px-4 sm:px-6 md:px-0">
              <div className="rounded-md border border-white/10 bg-white/[0.03] px-4 py-3 sm:px-6 sm:py-4 text-center text-xs sm:text-sm text-white/60">
                Trusted for clear execution in HR Tech, Services, and Creator tools.
                <span className="ml-2 hidden sm:inline">References on request.</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ————— Little stat pill ————— */
function Stat({
  icon,
  value,
  label,
}: {
  icon: React.ReactNode;
  value: string;
  label: string;
}) {
  return (
    <div className="flex items-center justify-center gap-2 sm:gap-3 rounded-md border border-white/10 bg-white/[0.03] px-3 py-2.5 sm:px-4 sm:py-3">
      <div className="grid place-items-center rounded-md bg-white/10 p-1.5">{icon}</div>
      <div className="text-left">
        <div className="text-sm sm:text-base font-semibold text-white">{value}</div>
        <div className="text-xs sm:text-sm text-white/60">{label}</div>
      </div>
    </div>
  );
}