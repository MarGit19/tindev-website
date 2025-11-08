"use client";

import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, X } from "lucide-react";
import upplyitDashboard from "@/components/assets/upplyitdashboard.png";
import { useState, useEffect } from "react";
import { createPortal } from "react-dom";

export default function PortfolioPreview() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isModalOpen]);

  const modalContent = (
    <AnimatePresence>
      {isModalOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setIsModalOpen(false)}
          className="fixed inset-0 z-[99999] flex items-center justify-center bg-black/95 backdrop-blur-sm p-4"
        >
          <button
            onClick={() => setIsModalOpen(false)}
            className="absolute top-4 right-4 z-10 p-2 rounded-full bg-black/80 hover:bg-black text-white transition-colors border border-white/30 shadow-lg"
            aria-label="Close modal"
          >
            <X className="h-6 w-6" />
          </button>
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ type: "spring", duration: 0.5 }}
            onClick={(e) => e.stopPropagation()}
            className="relative w-full h-full flex items-center justify-center"
          >
            <Image
              src={upplyitDashboard}
              alt="Upplyit Platform Dashboard"
              className="object-contain max-w-full max-h-full rounded-lg shadow-2xl"
              style={{ width: 'auto', height: 'auto', maxWidth: '95vw', maxHeight: '95vh' }}
              priority
            />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );

  return (
    <section className="relative isolate overflow-hidden py-12 sm:py-16 md:py-20 lg:py-24 border-t border-white/10">
      <div className="container">
        <div className="max-w-6xl mx-auto">
          <div className="mb-6 sm:mb-8 flex flex-col sm:flex-row items-start sm:items-end justify-between gap-4 px-4 sm:px-6 md:px-0">
            <div>
              <h2 className="font-display text-2xl sm:text-3xl md:text-4xl text-white">Selected Work</h2>
              <p className="mt-2 text-xs sm:text-sm text-white/70">A quick look at what we build and how we deliver.</p>
            </div>
            <Link
              href="/portfolio"
              className="inline-flex items-center gap-1.5 text-xs sm:text-sm text-white/80 hover:text-white transition-colors"
            >
              View all <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </div>

          <div className="grid gap-4 sm:gap-6 md:grid-cols-5 px-4 sm:px-6 md:px-0">
            {/* Featured: Upplyit - Takes 3 columns */}
            <motion.article
              initial={{ y: 6, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5 }}
              className="md:col-span-3 rounded-lg border border-white/10 bg-white/[0.03] p-5 sm:p-6"
            >
              <div className="flex flex-col gap-4 lg:flex-row">
                <div 
                  onClick={() => setIsModalOpen(true)}
                  className="relative w-full overflow-hidden rounded-md border border-white/10 bg-white/5 lg:w-72 cursor-pointer hover:border-white/20 transition-colors"
                >
                  <Image
                    src={upplyitDashboard}
                    alt="Upplyit Platform Dashboard"
                    className="object-contain w-full h-auto"
                    priority
                  />
                </div>
                <div className="flex-1">
                  <div className="text-xs uppercase tracking-wide text-white/60">Featured Case Study</div>
                  <h3 className="mt-1 text-base sm:text-lg text-white font-display">Upplyit — AI-Powered Resume & Career Platform</h3>
                  <p className="mt-2 text-xs sm:text-sm text-white/70">
                    Complete SaaS platform that helps job seekers beat ATS systems with AI resume optimization, smart cover letters, and job matching — all for $9.99/month.
                  </p>
                  <ul className="mt-3 grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs sm:text-sm text-white/80">
                    {[
                      "85% interview success rate", 
                      "OpenAI + Adzuna API", 
                      "Stripe subscriptions", 
                      "12-week MVP delivery"
                    ].map((i) => (
                      <li key={i} className="flex items-center gap-2">
                        <span className="h-1.5 w-1.5 rounded-full bg-electric-blue flex-shrink-0" />
                        <span>{i}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="mt-4 flex flex-col sm:flex-row gap-3">
                    <Link href="/portfolio/upplyit" className="btn-primary">
                      Read case study
                    </Link>
                    <Link 
                      href="https://upplyit.com" 
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-secondary"
                    >
                      View live →
                    </Link>
                  </div>
                </div>
              </div>
            </motion.article>

            {/* Principles / What we value - Takes 2 columns */}
            <motion.div
              initial={{ y: 6, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: 0.05 }}
              className="md:col-span-2 rounded-lg border border-white/10 bg-white/[0.03] p-5 sm:p-6"
            >
              <h4 className="text-base sm:text-lg text-white font-display">How We Deliver Success</h4>
              <ul className="mt-3 sm:mt-4 space-y-3 text-xs sm:text-sm text-white/80">
                <li className="flex gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-mint-green mt-2 flex-shrink-0" />
                  <span>Ship in small, testable increments to validate quickly and reduce risk.</span>
                </li>
                <li className="flex gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-mint-green mt-2 flex-shrink-0" />
                  <span>Design for clarity with intuitive flows and obvious next steps.</span>
                </li>
                <li className="flex gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-mint-green mt-2 flex-shrink-0" />
                  <span>Build with modern, scalable stacks that are maintainable long-term.</span>
                </li>
                <li className="flex gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-mint-green mt-2 flex-shrink-0" />
                  <span>Partner through launch and beyond with ongoing support.</span>
                </li>
              </ul>

              <div className="mt-5">
                <Link href="/services" className="btn-secondary">
                  Our services →
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Image Modal - Rendered via Portal */}
      {mounted && createPortal(modalContent, document.body)}
    </section>
  );
}