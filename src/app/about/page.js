'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Award, Users, Zap, Target, Code, CheckCircle } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { COMPANY_VALUES, TECHNOLOGY_STACK, SITE_CONFIG } from '@/lib/constants';

export default function AboutPage() {
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

  return (
    <main className="min-h-screen bg-black">
      <Header />

      {/* ===== HERO SECTION ===== */}
      <section className="relative min-h-screen flex items-center justify-center pt-24 pb-16 sm:pb-20">
        {/* Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-black to-blue-900">
          <motion.div
            animate={{ opacity: [0.03, 0.08, 0.03] }}
            transition={{ duration: 12, repeat: Infinity }}
            className="absolute top-20 left-20 w-80 h-80 bg-electric-blue/20 rounded-full blur-3xl"
          />
          <motion.div
            animate={{ opacity: [0.03, 0.08, 0.03] }}
            transition={{ duration: 14, repeat: Infinity, delay: 0.5 }}
            className="absolute bottom-20 right-20 w-96 h-96 bg-mint-green/20 rounded-full blur-3xl"
          />
        </div>

        {/* Content */}
        <motion.div
          className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 text-center space-y-8"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div variants={itemVariants}>
            <div className="inline-flex items-center gap-2 px-4 py-2 glass-card rounded-full border border-white/20 mb-6">
              <div className="w-2 h-2 bg-mint-green rounded-full animate-pulse" />
              <span className="text-white/80 text-xs sm:text-sm font-medium font-body">
                About TinDev Studios
              </span>
            </div>
          </motion.div>

          <motion.h1 
            variants={itemVariants}
            className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold leading-tight gradient-text font-display"
          >
            We Build Custom Software
            <br />
            <span className="text-white">That Transforms Businesses</span>
          </motion.h1>

          <motion.p 
            variants={itemVariants}
            className="text-lg sm:text-xl md:text-2xl text-white/75 max-w-3xl mx-auto leading-relaxed font-body"
          >
            Since 2016, we've been delivering world-class custom software solutions to startups, scale-ups, and enterprises worldwide.
          </motion.p>

          <motion.a
            variants={itemVariants}
            href="#mission"
            className="inline-flex btn-primary gap-2 items-center text-sm sm:text-base px-6 sm:px-8 py-3 sm:py-4"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Our Story
            <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
          </motion.a>
        </motion.div>
      </section>

      {/* ===== STATS SECTION ===== */}
      <section className="relative py-16 sm:py-20 lg:py-24 border-t border-white/10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <motion.div
            className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {[
              { num: '8+', label: 'Years Building' },
              { num: '50+', label: 'Projects Delivered' },
              { num: '100+', label: 'Happy Clients' },
              { num: '99.95%', label: 'Uptime' },
            ].map((stat, idx) => (
              <motion.div
                key={idx}
                variants={itemVariants}
                className="glass-card rounded-2xl p-6 sm:p-8 border border-white/10 text-center space-y-2 hover:border-mint-green/30 transition-all"
                whileHover={{ y: -5 }}
              >
                <div className="text-3xl sm:text-4xl md:text-5xl font-bold gradient-text font-display">
                  {stat.num}
                </div>
                <p className="text-white/70 text-sm sm:text-base font-body">{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ===== MISSION & VISION SECTION ===== */}
      <section id="mission" className="relative py-16 sm:py-20 lg:py-24 border-t border-white/10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <motion.div
            className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            {/* Left - Mission */}
            <motion.div variants={itemVariants} className="space-y-8">
              <div>
                <span className="text-mint-green text-sm font-semibold uppercase tracking-widest font-body">Our Mission</span>
                <h2 className="text-4xl sm:text-5xl font-bold text-white mt-4 mb-6 font-display">
                  Build Custom Software That Works
                </h2>
              </div>

              <p className="text-white/75 text-lg leading-relaxed font-body">
                We specialize in creating bespoke software solutions tailored to the unique needs of your business. No templates, no shortcuts—just quality code that scales with you.
              </p>

              <p className="text-white/70 text-lg leading-relaxed font-body">
                From ambitious startups to established enterprises, we partner with organizations to turn their vision into production-ready applications that become core to their operations.
              </p>

              <div className="space-y-4 pt-4">
                {[
                  'Full-stack development expertise',
                  'Agile, transparent communication',
                  'Scalable architecture design',
                  'Dedicated support & maintenance',
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-mint-green flex-shrink-0 mt-0.5" />
                    <span className="text-white/80 text-base font-body">{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Right - Vision */}
            <motion.div variants={itemVariants} className="space-y-8">
              <div>
                <span className="text-electric-blue text-sm font-semibold uppercase tracking-widest font-body">Our Vision</span>
                <h2 className="text-4xl sm:text-5xl font-bold text-white mt-4 mb-6 font-display">
                  Empower Every Business
                </h2>
              </div>

              <p className="text-white/75 text-lg leading-relaxed font-body">
                We envision a world where software development is accessible, transparent, and delivers real business value. Where technology serves the needs of businesses, not the other way around.
              </p>

              <p className="text-white/70 text-lg leading-relaxed font-body">
                We're committed to building long-term partnerships with our clients, supporting them as they grow and adapt to market changes.
              </p>

              <div className="space-y-4 pt-4">
                {[
                  'Innovation through technology',
                  'Partnership-focused approach',
                  'Continuous improvement mindset',
                  'Global impact through software',
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-electric-blue flex-shrink-0 mt-0.5" />
                    <span className="text-white/80 text-base font-body">{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ===== CORE VALUES SECTION ===== */}
      <section className="relative py-16 sm:py-20 lg:py-24 border-t border-white/10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4 font-display">
              Our Core Values
            </h2>
            <p className="text-white/70 text-lg font-body max-w-2xl mx-auto">
              These principles guide everything we do
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            {COMPANY_VALUES.map((value) => (
              <motion.div
                key={value.id}
                variants={itemVariants}
                className="glass-card rounded-2xl p-8 border border-white/10 hover:border-mint-green/30 transition-all space-y-4"
                whileHover={{ y: -5 }}
              >
                <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-mint-green to-electric-blue flex items-center justify-center">
                  <div className="text-white text-xl font-bold">✓</div>
                </div>
                <h3 className="text-2xl font-bold text-white font-display">{value.title}</h3>
                <p className="text-white/70 text-base leading-relaxed font-body">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ===== WHY CHOOSE US SECTION ===== */}
      <section className="relative py-16 sm:py-20 lg:py-24 border-t border-white/10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4 font-display">
              Why Choose TinDev Studios
            </h2>
            <p className="text-white/70 text-lg font-body max-w-2xl mx-auto">
              What sets us apart from other development firms
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            {[
              {
                icon: Code,
                title: 'Expert Team',
                description: 'Experienced developers with expertise across modern tech stacks and frameworks',
              },
              {
                icon: Zap,
                title: 'Agile Process',
                description: 'Transparent communication, regular updates, and flexibility to adapt to changes',
              },
              {
                icon: Target,
                title: 'Results-Focused',
                description: 'We measure success by your business outcomes, not just metrics',
              },
              {
                icon: Users,
                title: 'True Partnership',
                description: 'We work as an extension of your team, invested in your long-term success',
              },
              {
                icon: Award,
                title: 'Quality First',
                description: 'Clean code, best practices, and rigorous testing on every project',
              },
              {
                icon: CheckCircle,
                title: 'Proven Track Record',
                description: 'Trusted by companies across industries for 8+ years',
              },
            ].map((item, idx) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={idx}
                  variants={itemVariants}
                  className="glass-card rounded-2xl p-8 border border-white/10 hover:border-electric-blue/30 transition-all space-y-4"
                  whileHover={{ y: -5 }}
                >
                  <Icon className="w-8 h-8 text-electric-blue" />
                  <h3 className="text-xl font-bold text-white font-display">{item.title}</h3>
                  <p className="text-white/70 text-base leading-relaxed font-body">
                    {item.description}
                  </p>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* ===== TECHNOLOGY STACK SECTION ===== */}
      <section className="relative py-16 sm:py-20 lg:py-24 border-t border-white/10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4 font-display">
              Our Technology Stack
            </h2>
            <p className="text-white/70 text-lg font-body max-w-2xl mx-auto">
              We use modern, battle-tested technologies to build scalable solutions
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            {[
              { label: 'Frontend', color: 'text-mint-green', techs: TECHNOLOGY_STACK.frontend },
              { label: 'Backend', color: 'text-electric-blue', techs: TECHNOLOGY_STACK.backend },
              { label: 'Cloud', color: 'text-slate-blue', techs: TECHNOLOGY_STACK.cloud },
              { label: 'Tools', color: 'text-vivid-coral', techs: TECHNOLOGY_STACK.tools },
            ].map((category, idx) => (
              <motion.div
                key={idx}
                variants={itemVariants}
                className="glass-card rounded-2xl p-6 border border-white/10 space-y-4"
              >
                <h3 className={`font-bold text-lg font-display ${category.color}`}>
                  {category.label}
                </h3>
                <ul className="space-y-2">
                  {category.techs.map((tech, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <CheckCircle className={`w-4 h-4 ${category.color} flex-shrink-0`} />
                      <span className="text-white/70 text-sm font-body">{tech.name}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ===== PROCESS SECTION ===== */}
      <section className="relative py-16 sm:py-20 lg:py-24 border-t border-white/10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4 font-display">
              Our Development Process
            </h2>
            <p className="text-white/70 text-lg font-body max-w-2xl mx-auto">
              A proven methodology for delivering exceptional results
            </p>
          </motion.div>

          <motion.div
            className="space-y-6"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            {[
              { num: '01', title: 'Discovery & Planning', desc: 'Understanding your vision, goals, and requirements' },
              { num: '02', title: 'Design & Architecture', desc: 'Creating scalable, user-centered design solutions' },
              { num: '03', title: 'Development', desc: 'Building with best practices and clean code' },
              { num: '04', title: 'Testing & QA', desc: 'Rigorous testing to ensure quality and performance' },
              { num: '05', title: 'Deployment', desc: 'Seamless launch with zero downtime' },
              { num: '06', title: 'Support & Growth', desc: 'Ongoing maintenance, monitoring, and optimization' },
            ].map((step, idx) => (
              <motion.div
                key={idx}
                variants={itemVariants}
                className="glass-card rounded-2xl p-8 border border-white/10 hover:border-mint-green/30 transition-all"
                whileHover={{ x: 5 }}
              >
                <div className="flex gap-6 items-start">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 rounded-full bg-gradient-to-r from-mint-green to-electric-blue flex items-center justify-center">
                      <span className="font-bold text-xl text-white font-display">{step.num}</span>
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-white mb-2 font-display">{step.title}</h3>
                    <p className="text-white/70 text-base font-body">{step.desc}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ===== CTA SECTION ===== */}
      <section className="relative py-16 sm:py-20 lg:py-24 border-t border-white/10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="glass-card rounded-3xl p-12 sm:p-16 bg-gradient-to-r from-electric-blue/5 via-transparent to-mint-green/5 border border-white/10 text-center space-y-8"
          >
            <h2 className="text-4xl sm:text-5xl font-bold text-white font-display">
              Ready to Build Something Great?
            </h2>
            <p className="text-white/70 text-lg font-body max-w-2xl mx-auto">
              Let's discuss your project and see if we're the right fit for your vision.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.a
                href="/#contact"
                className="inline-flex btn-primary gap-2 items-center text-base px-8 py-4 justify-center"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Start Your Project
                <ArrowRight className="w-5 h-5" />
              </motion.a>
              <motion.a
                href="/#products"
                className="inline-flex btn-secondary gap-2 items-center text-base px-8 py-4 justify-center"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Explore Our SaaS
                <ArrowRight className="w-5 h-5" />
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}