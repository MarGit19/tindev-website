"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import Nav from "@/components/nav";
import Footer from "@/components/footer";
import { Container, Section } from "@/components/ui";
import { CheckCircle, ArrowRight, ExternalLink, Brain, Target, Award, TrendingUp } from "lucide-react";

type Star = {
  left: string;
  top: string;
  duration: number;
  delay: number;
};

type ShootingStar = {
  width: string;
  left: string;
  top: string;
  rotate: string;
  duration: number;
  repeatDelay: number;
  translateX: number;
  translateY: number;
};

export default function ResulinxClient() {
  const [smallStars, setSmallStars] = React.useState<Star[]>([]);
  const [mediumStars, setMediumStars] = React.useState<Star[]>([]);
  const [shootingStars, setShootingStars] = React.useState<ShootingStar[]>([]);

  React.useEffect(() => {
    // Generate star positions only on client
    setSmallStars(
      [...Array(100)].map(() => ({
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`,
        duration: Math.random() * 3 + 2,
        delay: Math.random() * 5,
      }))
    );

    setMediumStars(
      [...Array(50)].map(() => ({
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`,
        duration: Math.random() * 4 + 2,
        delay: Math.random() * 5,
      }))
    );

    setShootingStars(
      [...Array(5)].map(() => ({
        width: `${Math.random() * 100 + 50}px`,
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`,
        rotate: `${Math.random() * 360}deg`,
        duration: Math.random() * 2 + 1,
        repeatDelay: Math.random() * 10 + 5,
        translateX: Math.random() * 300 + 200,
        translateY: Math.random() * 200 + 100,
      }))
    );
  }, []);

  return (
    <>
      <Nav />

      {/* Header with Starfield Background */}
      <section
        aria-label="Case Study Header"
        className="relative isolate overflow-hidden pt-20 sm:pt-24 md:pt-28 pb-12 sm:pb-16"
      >
        {/* Starfield Background - Rolls-Royce Style */}
        <div className="absolute inset-0 overflow-hidden">
          {/* Static stars layer 1 - Small stars */}
          {smallStars.map((star, i) => (
            <motion.div
              key={`star-s-${i}`}
              className="absolute w-[1px] h-[1px] bg-white rounded-full"
              style={{
                left: star.left,
                top: star.top,
              }}
              animate={{
                opacity: [0.2, 1, 0.2],
                scale: [1, 1.5, 1],
              }}
              transition={{
                duration: star.duration,
                repeat: Infinity,
                delay: star.delay,
              }}
            />
          ))}

          {/* Static stars layer 2 - Medium stars */}
          {mediumStars.map((star, i) => (
            <motion.div
              key={`star-m-${i}`}
              className="absolute w-[2px] h-[2px] bg-white rounded-full"
              style={{
                left: star.left,
                top: star.top,
              }}
              animate={{
                opacity: [0.3, 0.9, 0.3],
                scale: [1, 1.3, 1],
              }}
              transition={{
                duration: star.duration,
                repeat: Infinity,
                delay: star.delay,
              }}
            />
          ))}

          {/* Shooting stars */}
          {shootingStars.map((star, i) => (
            <motion.div
              key={`shooting-${i}`}
              className="absolute h-[1px] bg-gradient-to-r from-transparent via-white to-transparent"
              style={{
                width: star.width,
                left: star.left,
                top: star.top,
                rotate: star.rotate,
              }}
              initial={{ opacity: 0, x: 0 }}
              animate={{
                opacity: [0, 1, 0],
                x: [0, star.translateX],
                y: [0, star.translateY],
              }}
              transition={{
                duration: star.duration,
                repeat: Infinity,
                repeatDelay: star.repeatDelay,
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
          <Container>
            <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-0">
              <div className="text-center mb-8">
                <span className="text-mint-green text-xs sm:text-sm font-semibold uppercase tracking-widest">
                  Featured Case Study
                </span>
                <h1 className="text-3xl sm:text-4xl md:text-5xl font-display text-white mt-3 sm:mt-4">
                  Resulinx — AI-Powered Resume & Career Platform
                </h1>
                <p className="mt-3 sm:mt-4 text-white/70 text-base sm:text-lg max-w-3xl mx-auto">
                  A complete SaaS platform that helps job seekers beat ATS filters, optimize resumes with AI, generate smart cover letters, and track applications — all for just $9.99/month.
                </p>
              </div>

              {/* Meta Info */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 mt-12">
                <MetaCard label="Type" value="SaaS Platform • Web Application" />
                <MetaCard label="Industry" value="Careers / HR Tech / AI" />
                <MetaCard label="Launch" value="2025" />
              </div>
            </div>
          </Container>
        </div>
      </section>

      {/* Divider */}
      <div className="border-t border-white/10" />

      {/* Overview */}
      <Section pad="py-12 sm:py-16 md:py-20 lg:py-24">
        <Container>
          <div className="max-w-4xl mx-auto px-4 sm:px-6 md:px-0">
            <div className="rounded-lg border border-white/10 bg-white/[0.03] p-6 sm:p-8 md:p-10 space-y-6">
              <h2 className="text-2xl sm:text-3xl font-display text-white">
                Overview
              </h2>
              <p className="text-white/80 text-base sm:text-lg leading-relaxed">
                Resulinx is a comprehensive AI-powered career platform designed to democratize job search success. The platform helps job seekers overcome the biggest barrier in modern hiring: Applicant Tracking Systems (ATS) that automatically filter out resumes before they reach human recruiters.
              </p>
              <p className="text-white/80 text-base sm:text-lg leading-relaxed">
                We built a complete SaaS solution that analyzes resumes, provides real-time ATS compatibility scoring, generates personalized cover letters, and matches users with relevant job opportunities — all powered by advanced AI technology and made accessible at just $9.99/month.
              </p>
              <p className="text-white/80 text-base sm:text-lg leading-relaxed">
                The platform features a generous free tier (3 resume reviews + 3 cover letters) to let users experience the value before upgrading, alongside a Pro subscription that unlocks unlimited access to all features including application tracking, job matching via Adzuna API, and priority support.
              </p>
            </div>
          </div>
        </Container>
      </Section>

      {/* Divider */}
      <div className="border-t border-white/10" />

      {/* The Problem */}
      <Section pad="py-12 sm:py-16 md:py-20 lg:py-24">
        <Container>
          <div className="max-w-4xl mx-auto px-4 sm:px-6 md:px-0">
            <div className="rounded-lg border border-white/10 bg-white/[0.03] p-6 sm:p-8 md:p-10 space-y-6">
              <h2 className="text-2xl sm:text-3xl font-display text-white">
                The Problem
              </h2>
              <div className="bg-vivid-coral/10 border border-vivid-coral/20 rounded-lg p-6 text-center">
                <div className="text-5xl sm:text-6xl font-bold text-vivid-coral mb-3">75%</div>
                <p className="text-white text-lg font-semibold mb-2">of resumes are rejected</p>
                <p className="text-white/70 text-sm sm:text-base">by ATS systems before humans ever see them</p>
              </div>
              <p className="text-white/80 text-base sm:text-lg leading-relaxed">
                Up to 75% of resumes never reach human eyes due to poor ATS (Applicant Tracking System) optimization. This isn't a reflection of candidate talent — it's a breakdown in technology. Job seekers struggle with missing keywords, weak impact statements, poor structure, and complex formatting that confuses automated systems.
              </p>
            </div>
          </div>
        </Container>
      </Section>

      {/* Divider */}
      <div className="border-t border-white/10" />

      {/* Our Solution */}
      <Section pad="py-12 sm:py-16 md:py-20 lg:py-24">
        <Container>
          <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-0">
            <div className="text-center mb-12 sm:mb-16">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-display text-white">
                Complete Career Toolkit Powered by AI
              </h2>
              <p className="mt-3 sm:mt-4 text-sm sm:text-base text-white/70">
                From resume optimization to cover letters and job matching
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
              <FeatureCard
                icon={Brain}
                title="AI Resume Optimization"
                description="Smart algorithms rewrite content for maximum impact and keyword density. Beat ATS systems automatically with intelligent suggestions."
                color="text-blue-400"
              />
              <FeatureCard
                icon={Target}
                title="Real-Time ATS Scoring"
                description="Live compatibility scoring shows exactly how ATS systems will rate your resume with detailed, actionable feedback."
                color="text-green-400"
              />
              <FeatureCard
                icon={Award}
                title="Smart Cover Letters"
                description="Generate personalized cover letters in seconds that perfectly match job requirements and company culture."
                color="text-purple-400"
              />
              <FeatureCard
                icon={TrendingUp}
                title="Smart Job Matching"
                description="Powered by Adzuna API, automatically find and match relevant job opportunities with your optimized resume profile."
                color="text-orange-400"
              />
            </div>
          </div>
        </Container>
      </Section>

      {/* Divider */}
      <div className="border-t border-white/10" />

      {/* Goals & Role */}
      <Section pad="py-12 sm:py-16 md:py-20 lg:py-24">
        <Container>
          <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-0">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
              {/* Project Goals */}
              <div className="rounded-lg border border-white/10 bg-white/[0.03] p-6 sm:p-8">
                <h2 className="text-2xl sm:text-3xl font-display text-white mb-6">
                  Project Goals
                </h2>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-mint-green flex-shrink-0 mt-0.5" />
                    <span className="text-white/80 text-sm sm:text-base">
                      Democratize career success with affordable AI tools ($9.99/month)
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-mint-green flex-shrink-0 mt-0.5" />
                    <span className="text-white/80 text-sm sm:text-base">
                      Improve resume quality and ATS compatibility scores
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-mint-green flex-shrink-0 mt-0.5" />
                    <span className="text-white/80 text-sm sm:text-base">
                      Reduce application time while increasing interview callbacks
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-mint-green flex-shrink-0 mt-0.5" />
                    <span className="text-white/80 text-sm sm:text-base">
                      Create a freemium model with real value (3 free resume reviews)
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-mint-green flex-shrink-0 mt-0.5" />
                    <span className="text-white/80 text-sm sm:text-base">
                      Build scalable architecture ready for team plans and enterprise
                    </span>
                  </li>
                </ul>
              </div>

              {/* Our Role */}
              <div className="rounded-lg border border-white/10 bg-white/[0.03] p-6 sm:p-8">
                <h2 className="text-2xl sm:text-3xl font-display text-white mb-6">
                  Our Role
                </h2>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-electric-blue flex-shrink-0 mt-0.5" />
                    <span className="text-white/80 text-sm sm:text-base">
                      Complete product definition and strategy
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-electric-blue flex-shrink-0 mt-0.5" />
                    <span className="text-white/80 text-sm sm:text-base">
                      Full UX/UI design system and user flows
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-electric-blue flex-shrink-0 mt-0.5" />
                    <span className="text-white/80 text-sm sm:text-base">
                      Complete full-stack development (frontend & backend)
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-electric-blue flex-shrink-0 mt-0.5" />
                    <span className="text-white/80 text-sm sm:text-base">
                      OpenAI API integration for resume analysis
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-electric-blue flex-shrink-0 mt-0.5" />
                    <span className="text-white/80 text-sm sm:text-base">
                      Adzuna API integration for job matching
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-electric-blue flex-shrink-0 mt-0.5" />
                    <span className="text-white/80 text-sm sm:text-base">
                      Stripe payment integration and subscription management
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* Divider */}
      <div className="border-t border-white/10" />

      {/* Tech Stack & Timeline */}
      <Section pad="py-12 sm:py-16 md:py-20 lg:py-24">
        <Container>
          <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-0">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
              {/* Tech Stack */}
              <div className="rounded-lg border border-white/10 bg-white/[0.03] p-6 sm:p-8">
                <h2 className="text-2xl sm:text-3xl font-display text-white mb-6">
                  Technology Stack
                </h2>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <span className="text-mint-green">•</span>
                    <span className="text-white/80 text-sm sm:text-base"><strong className="text-white">Frontend:</strong> Next.js, React, Tailwind CSS</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-mint-green">•</span>
                    <span className="text-white/80 text-sm sm:text-base"><strong className="text-white">Backend:</strong> Node.js, Firebase (Auth/Firestore)</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-mint-green">•</span>
                    <span className="text-white/80 text-sm sm:text-base"><strong className="text-white">AI:</strong> OpenAI GPT-4 API for content optimization</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-mint-green">•</span>
                    <span className="text-white/80 text-sm sm:text-base"><strong className="text-white">Jobs API:</strong> Adzuna for smart job matching</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-mint-green">•</span>
                    <span className="text-white/80 text-sm sm:text-base"><strong className="text-white">Payments:</strong> Stripe for subscriptions ($9.99/mo)</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-mint-green">•</span>
                    <span className="text-white/80 text-sm sm:text-base"><strong className="text-white">Hosting:</strong> Vercel for seamless deployment</span>
                  </div>
                </div>
              </div>

              {/* Timeline */}
              <div className="rounded-lg border border-white/10 bg-white/[0.03] p-6 sm:p-8">
                <h2 className="text-2xl sm:text-3xl font-display text-white mb-6">
                  Development Timeline
                </h2>
                <div className="space-y-6">
                  <div className="flex items-center justify-center h-full">
                    <div className="text-center">
                      <div className="text-5xl sm:text-6xl font-bold gradient-text font-display mb-3">
                        12 Weeks
                      </div>
                      <p className="text-white/60 text-base sm:text-lg mb-6">From scope to MVP launch</p>
                      <div className="space-y-2 text-left">
                        <div className="flex items-start gap-2">
                          <span className="text-electric-blue text-xs">→</span>
                          <span className="text-white/70 text-xs sm:text-sm">Weeks 1-2: Product definition & UX design</span>
                        </div>
                        <div className="flex items-start gap-2">
                          <span className="text-electric-blue text-xs">→</span>
                          <span className="text-white/70 text-xs sm:text-sm">Weeks 3-8: Full-stack development & AI integration</span>
                        </div>
                        <div className="flex items-start gap-2">
                          <span className="text-electric-blue text-xs">→</span>
                          <span className="text-white/70 text-xs sm:text-sm">Weeks 9-10: Payment system & testing</span>
                        </div>
                        <div className="flex items-start gap-2">
                          <span className="text-electric-blue text-xs">→</span>
                          <span className="text-white/70 text-xs sm:text-sm">Weeks 11-12: Beta launch & refinements</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* Divider */}
      <div className="border-t border-white/10" />

      {/* Key Features */}
      <Section pad="py-12 sm:py-16 md:py-20 lg:py-24">
        <Container>
          <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-0">
            <div className="text-center mb-12 sm:mb-16">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-display text-white">
                Key Features Delivered
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
              <div className="rounded-lg border border-white/10 bg-white/[0.03] p-6">
                <h3 className="text-lg sm:text-xl font-display text-white mb-3">
                  Intelligent Resume Analysis
                </h3>
                <p className="text-white/70 text-sm sm:text-base leading-relaxed">
                  Upload PDF or DOCX files for instant AI-powered analysis. Identifies missing keywords, weak impact statements, poor structure, and ATS compatibility issues.
                </p>
              </div>

              <div className="rounded-lg border border-white/10 bg-white/[0.03] p-6">
                <h3 className="text-lg sm:text-xl font-display text-white mb-3">
                  Real-Time ATS Score (0-100)
                </h3>
                <p className="text-white/70 text-sm sm:text-base leading-relaxed">
                  Live scoring system shows compatibility with applicant tracking systems. Average users see +25 point score improvements after optimization.
                </p>
              </div>

              <div className="rounded-lg border border-white/10 bg-white/[0.03] p-6">
                <h3 className="text-lg sm:text-xl font-display text-white mb-3">
                  AI Cover Letter Generator
                </h3>
                <p className="text-white/70 text-sm sm:text-base leading-relaxed">
                  Generate personalized, professional cover letters in seconds. Automatically matches job requirements and company culture using AI analysis.
                </p>
              </div>

              <div className="rounded-lg border border-white/10 bg-white/[0.03] p-6">
                <h3 className="text-lg sm:text-xl font-display text-white mb-3">
                  Smart Job Matching (Adzuna)
                </h3>
                <p className="text-white/70 text-sm sm:text-base leading-relaxed">
                  Integrated Adzuna API automatically finds and suggests relevant job opportunities that match your optimized resume profile and preferences.
                </p>
              </div>

              <div className="rounded-lg border border-white/10 bg-white/[0.03] p-6">
                <h3 className="text-lg sm:text-xl font-display text-white mb-3">
                  Application & Interview Tracking
                </h3>
                <p className="text-white/70 text-sm sm:text-base leading-relaxed">
                  Complete dashboard to track unlimited job applications, interviews, and follow-ups. Stay organized throughout your job search journey.
                </p>
              </div>

              <div className="rounded-lg border border-white/10 bg-white/[0.03] p-6">
                <h3 className="text-lg sm:text-xl font-display text-white mb-3">
                  Freemium + Pro Subscription Model
                </h3>
                <p className="text-white/70 text-sm sm:text-base leading-relaxed">
                  Free tier: 3 resume reviews + 3 cover letters. Pro tier ($9.99/mo): Unlimited everything with Stripe-powered subscription management.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* Divider */}
      <div className="border-t border-white/10" />

      {/* Results */}
      <Section pad="py-12 sm:py-16 md:py-20 lg:py-24">
        <Container>
          <div className="max-w-4xl mx-auto px-4 sm:px-6 md:px-0">
            <div className="rounded-lg border border-white/10 bg-white/[0.03] p-6 sm:p-8 md:p-10 space-y-6">
              <h2 className="text-2xl sm:text-3xl font-display text-white">
                Results & Impact
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <div className="bg-mint-green/10 border border-mint-green/20 rounded-lg p-6 text-center">
                  <div className="text-4xl font-bold text-mint-green mb-2">85%</div>
                  <p className="text-white/70 text-sm">Interview Success Rate</p>
                </div>
                <div className="bg-electric-blue/10 border border-electric-blue/20 rounded-lg p-6 text-center">
                  <div className="text-4xl font-bold text-electric-blue mb-2">+25</div>
                  <p className="text-white/70 text-sm">Avg ATS Score Boost</p>
                </div>
                <div className="bg-purple-500/10 border border-purple-500/20 rounded-lg p-6 text-center">
                  <div className="text-4xl font-bold text-purple-400 mb-2">2min</div>
                  <p className="text-white/70 text-sm">Time To Get Started</p>
                </div>
              </div>

              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-mint-green flex-shrink-0 mt-0.5" />
                  <span className="text-white/80 text-sm sm:text-base">
                    <strong className="text-white">40-60% reduction</strong> in time spent per application (reported by early testers)
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-mint-green flex-shrink-0 mt-0.5" />
                  <span className="text-white/80 text-sm sm:text-base">
                    <strong className="text-white">Higher interview callback rates</strong> with ATS scores increasing from 45 to 92+ on average
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-mint-green flex-shrink-0 mt-0.5" />
                  <span className="text-white/80 text-sm sm:text-base">
                    <strong className="text-white">Successful freemium model</strong> with 3 free resume reviews converting to Pro subscriptions
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-mint-green flex-shrink-0 mt-0.5" />
                  <span className="text-white/80 text-sm sm:text-base">
                    <strong className="text-white">Scalable architecture</strong> ready for team plans, enterprise features, and continued growth
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-mint-green flex-shrink-0 mt-0.5" />
                  <span className="text-white/80 text-sm sm:text-base">
                    <strong className="text-white">5-star user testimonials</strong> from professionals landing jobs at Microsoft, Spotify, and Netflix
                  </span>
                </li>
              </ul>
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
              Ready to Build Your SaaS Platform?
            </h3>
            <p className="mt-3 sm:mt-4 text-sm sm:text-base text-white/70">
              Let's discuss how we can bring your product vision to life with AI-powered features, modern UX, and scalable architecture.
            </p>
            <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="btn-primary">
                Start Your Project
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              <Link 
                href="https://resulinx.com" 
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary"
              >
                View Live Platform
                <ExternalLink className="w-5 h-5 ml-2" />
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

function MetaCard({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-lg border border-white/10 bg-white/[0.03] p-6 text-center">
      <div className="text-white/60 text-xs sm:text-sm uppercase tracking-widest mb-2">
        {label}
      </div>
      <div className="text-white text-sm sm:text-base font-semibold">
        {value}
      </div>
    </div>
  );
}

function FeatureCard({
  icon: Icon,
  title,
  description,
  color,
}: {
  icon: any;
  title: string;
  description: string;
  color: string;
}) {
  return (
    <div className="rounded-lg border border-white/10 bg-white/[0.03] p-6 sm:p-8">
      <Icon className={`w-8 h-8 ${color} mb-4`} />
      <h3 className="text-lg sm:text-xl font-display text-white mb-3">
        {title}
      </h3>
      <p className="text-white/70 text-sm sm:text-base leading-relaxed">
        {description}
      </p>
    </div>
  );
}