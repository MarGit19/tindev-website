"use client";

import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Sparkles, ExternalLink, X } from "lucide-react";
import upplyitSignup from "@/components/assets/upplyitsignup.png";
import { useState, useEffect } from "react";
import { createPortal } from "react-dom";

export default function ProductsPreview() {
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
              src={upplyitSignup}
              alt="Upplyit signup and dashboard interface"
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
    <section id="products" className="relative isolate overflow-hidden py-12 sm:py-16 md:py-20 lg:py-24 border-t border-white/10">
      <div className="container">
        <div className="max-w-6xl mx-auto">
          <div className="mb-6 sm:mb-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 px-4 sm:px-6 md:px-0">
            <h2 className="font-display text-2xl sm:text-3xl md:text-4xl text-white">Our Products</h2>
            <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1.5 text-xs sm:text-sm text-white/80">
              <Sparkles className="h-3.5 w-3.5" /> Built & maintained by us
            </span>
          </div>

          <div className="grid items-stretch gap-4 sm:gap-6 md:grid-cols-3 px-4 sm:px-6 md:px-0">
            {/* Upplyit */}
            <motion.article
              initial={{ y: 6, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5 }}
              className="col-span-1 md:col-span-2 rounded-lg border border-white/10 bg-white/[0.03] p-5 sm:p-6"
            >
              <div className="flex flex-col gap-5 sm:gap-6 lg:flex-row">
                <div className="flex-1">
                  <div className="text-xs uppercase tracking-wide text-white/60">SaaS Platform • $9.99/mo</div>
                  <h3 className="mt-1 text-lg sm:text-xl text-white font-display">Upplyit — AI-Powered Resume & Career Platform</h3>
                  <p className="mt-2 text-sm sm:text-base text-white/70">
                    Beat ATS systems with AI resume optimization, real-time scoring (0-100), smart cover letters, and automatic job matching powered by Adzuna API.
                  </p>
                  <ul className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs sm:text-sm text-white/80">
                    {[
                      "AI resume optimization",
                      "Real-time ATS scoring",
                      "Smart cover letter generator",
                      "Job matching (Adzuna API)",
                      "Application tracking",
                      "Free tier: 3 reviews + letters",
                    ].map((f) => (
                      <li key={f} className="flex items-center gap-2">
                        <span className="h-1.5 w-1.5 rounded-full bg-mint-green flex-shrink-0" />
                        <span>{f}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-5 flex flex-col sm:flex-row flex-wrap gap-3">
                    <Link href="/portfolio/upplyit" className="btn-primary">
                      Case Study
                    </Link>
                    <a 
                      href="https://upplyit.com" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="btn-secondary"
                    >
                      View Live
                      <ExternalLink className="h-3.5 w-3.5 ml-1" />
                    </a>
                  </div>
                </div>

                {/* Screenshot */}
                <div 
                  onClick={() => setIsModalOpen(true)}
                  className="relative w-full overflow-hidden rounded-md border border-white/10 bg-white/5 lg:w-80 cursor-pointer hover:border-white/20 transition-colors"
                >
                  <Image
                    src={upplyitSignup}
                    alt="Upplyit signup and dashboard interface"
                    className="object-contain w-full h-auto"
                    priority
                  />
                </div>
              </div>
            </motion.article>

            {/* Roadmap card */}
            <motion.div
              initial={{ y: 6, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: 0.05 }}
              className="rounded-lg border border-white/10 bg-white/[0.03] p-5 sm:p-6"
            >
              <div className="text-xs uppercase tracking-wide text-white/60">Coming Soon</div>
              <h3 className="mt-1 text-base sm:text-lg text-white font-display">More Products on the Way</h3>
              <p className="mt-2 text-xs sm:text-sm text-white/70 leading-relaxed">
                We're building tools for service professionals and small teams. Want early access or to collaborate?
              </p>
              <div className="mt-4 space-y-3 text-xs text-white/60">
                <div className="flex items-start gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-electric-blue flex-shrink-0 mt-1.5" />
                  <span>BookFlow — Client booking & intake system (Nov 2026)</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-electric-blue flex-shrink-0 mt-1.5" />
                  <span>Playbook — Team SOP & workflow manager (Mar 2027)</span>
                </div>
              </div>
              <div className="mt-5">
                <Link href="/contact" className="btn-secondary">
                  Get Early Access →
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