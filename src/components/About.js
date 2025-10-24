'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle } from 'lucide-react';
import { COMPANY_VALUES, SITE_CONFIG } from '@/lib/constants';

const About = () => {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  // Key points about the company
  const highlights = [
    'Custom software built for your exact needs',
    'No templates, no shortcuts, just quality code',
    'From startups to enterprises',
    'Full-stack solutions from concept to launch',
    'Production-ready applications that scale',
    'Dedicated support and maintenance',
  ];

  return (
    <section id="about" className="relative overflow-hidden py-16 sm:py-20 lg:py-24">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/20" />
        <motion.div
          animate={{
            opacity: [0.02, 0.06, 0.02],
          }}
          transition={{ duration: 15, repeat: Infinity }}
          className="absolute -top-40 left-1/4 w-96 h-96 bg-electric-blue/10 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            opacity: [0.02, 0.06, 0.02],
          }}
          transition={{ duration: 18, repeat: Infinity, delay: 0.5 }}
          className="absolute -bottom-40 right-1/4 w-96 h-96 bg-mint-green/10 rounded-full blur-3xl"
        />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {/* Left - Content */}
          <motion.div variants={itemVariants} className="space-y-8">
            {/* Overline */}
            <div>
              <span className="text-mint-green text-sm font-semibold uppercase tracking-widest font-body">
                About TinDev Studios
              </span>
            </div>

            {/* Headline */}
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight gradient-text font-display">
              Building Custom Software
              <br />
              <span className="text-white">That Works</span>
            </h2>

            {/* Description */}
            <p className="text-base sm:text-lg text-white/75 leading-relaxed font-body">
              We specialize in <span className="text-mint-green font-semibold">custom application development</span>. Every project is built from scratch, tailored to your exact specifications, and designed to become a core part of your business.
            </p>

            {/* Highlights */}
            <div className="space-y-4">
              {highlights.slice(0, 3).map((highlight, idx) => (
                <motion.div
                  key={idx}
                  className="flex items-start gap-3 group"
                  whileHover={{ x: 5 }}
                >
                  <CheckCircle className="w-5 h-5 text-mint-green flex-shrink-0 mt-0.5" />
                  <span className="text-white/80 text-sm sm:text-base font-body">
                    {highlight}
                  </span>
                </motion.div>
              ))}
            </div>

            {/* CTA */}
            <motion.a
              href="#contact"
              className="inline-flex btn-primary gap-2 items-center text-sm sm:text-base px-6 sm:px-8 py-3 sm:py-4 w-fit"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Start Your Project
              <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
            </motion.a>
          </motion.div>

          {/* Right - Values */}
          <motion.div variants={itemVariants} className="space-y-8">
            {/* Core Values */}
            <div className="space-y-4">
              <h3 className="text-white font-display font-bold text-lg">Our Values</h3>
              <div className="space-y-3">
                {COMPANY_VALUES.slice(0, 2).map((value, idx) => (
                  <motion.div
                    key={idx}
                    className="flex items-start gap-3"
                    whileHover={{ x: 3 }}
                  >
                    <div className="w-6 h-6 rounded-full bg-gradient-to-r from-mint-green to-electric-blue flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-xs font-bold text-white">✓</span>
                    </div>
                    <div className="flex-1">
                      <p className="text-white text-sm font-semibold font-body">{value.title}</p>
                      <p className="text-white/60 text-xs font-body mt-0.5">{value.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Additional Info Row */}
        <motion.div
          className="mt-16 sm:mt-20 pt-12 sm:pt-16 border-t border-white/10"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-10">
            {/* What We Do */}
            <motion.div variants={itemVariants} className="space-y-4">
              <h3 className="text-white font-display font-bold text-lg">What We Build</h3>
              <ul className="space-y-2">
                {[
                  'Web Applications',
                  'Mobile Apps',
                  'APIs & Backends',
                  'SaaS Platforms',
                ].map((item, idx) => (
                  <li key={idx} className="flex items-center gap-2 text-white/70 text-sm font-body">
                    <span className="w-1.5 h-1.5 rounded-full bg-mint-green" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Who We Serve */}
            <motion.div variants={itemVariants} className="space-y-4">
              <h3 className="text-white font-display font-bold text-lg">Who We Serve</h3>
              <ul className="space-y-2">
                {[
                  'Startups',
                  'Scale-ups',
                  'SMBs',
                  'Enterprises',
                ].map((item, idx) => (
                  <li key={idx} className="flex items-center gap-2 text-white/70 text-sm font-body">
                    <span className="w-1.5 h-1.5 rounded-full bg-electric-blue" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* How We Deliver */}
            <motion.div variants={itemVariants} className="space-y-4">
              <h3 className="text-white font-display font-bold text-lg">How We Deliver</h3>
              <ul className="space-y-2">
                {[
                  'Agile Development',
                  'Regular Updates',
                  'Your Timeline',
                  'Full Support',
                ].map((item, idx) => (
                  <li key={idx} className="flex items-center gap-2 text-white/70 text-sm font-body">
                    <span className="w-1.5 h-1.5 rounded-full bg-slate-blue" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;