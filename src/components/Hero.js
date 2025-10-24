'use client';
import React, { useState, useEffect } from 'react';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

const Hero = () => {
  const [scrollY, setScrollY] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  // Parallax effect
  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Mouse tracking for gradient effect
  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({
        x: e.clientX / window.innerWidth,
        y: e.clientY / window.innerHeight,
      });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

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
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  return (
    <section 
      id="home" 
      className="relative min-h-screen overflow-hidden flex items-center justify-center pt-20 sm:pt-24 pb-16 sm:pb-20"
    >
      {/* ===== ANIMATED BACKGROUND ===== */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-black to-blue-900 overflow-hidden">
        {/* Gradient orbs with mouse tracking */}
        <motion.div
          animate={{
            x: mousePosition.x * 100,
            y: mousePosition.y * 100,
          }}
          transition={{ type: "spring", stiffness: 50, damping: 20 }}
          className="absolute top-20 left-20 w-72 h-72 bg-electric-blue/20 rounded-full blur-3xl opacity-60"
          style={{ willChange: 'transform' }}
        />
        
        <motion.div
          animate={{
            x: -mousePosition.x * 80,
            y: -mousePosition.y * 80,
          }}
          transition={{ type: "spring", stiffness: 50, damping: 20 }}
          className="absolute bottom-20 right-20 w-96 h-96 bg-mint-green/20 rounded-full blur-3xl opacity-60"
          style={{ willChange: 'transform' }}
        />
        
        <motion.div
          animate={{
            y: scrollY * 0.5,
          }}
          className="absolute top-1/2 left-1/2 w-80 h-80 bg-slate-blue/20 rounded-full blur-3xl opacity-40 transform -translate-x-1/2 -translate-y-1/2"
          style={{ willChange: 'transform' }}
        />
        
        {/* Mesh Gradient Overlay */}
        <div className="absolute inset-0 mesh-gradient" />
        
        {/* Animated Grid Pattern */}
        <motion.div
          animate={{
            backgroundPosition: ['0px 0px', '100px 100px'],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            repeatType: 'loop',
          }}
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: `
              linear-gradient(rgba(46, 224, 172, 0.3) 1px, transparent 1px),
              linear-gradient(90deg, rgba(46, 224, 172, 0.3) 1px, transparent 1px)
            `,
            backgroundSize: '60px 60px',
            backgroundPosition: '0px 0px',
          }}
        />
      </div>

      {/* ===== MAIN CONTENT ===== */}
      <motion.div
        className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 w-full"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Hero Glass Card */}
        <motion.div
          className="glass-card rounded-3xl sm:rounded-4xl lg:rounded-5xl p-6 sm:p-12 lg:p-16 floating-glow"
          variants={itemVariants}
          whileHover={{ y: -5 }}
          transition={{ duration: 0.3 }}
        >
          {/* Main Headline */}
          <motion.h1
            variants={itemVariants}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold leading-tight gradient-text-vibrant mb-6 sm:mb-8 font-display text-center"
          >
            We Build Custom Apps
            <br />
            <span className="bg-gradient-to-r from-mint-green via-electric-blue to-slate-blue bg-clip-text text-transparent">
              Your Way
            </span>
          </motion.h1>

          {/* Subheadline - Direct messaging about what we do */}
          <motion.p
            variants={itemVariants}
            className="text-base sm:text-lg md:text-xl lg:text-2xl text-white/75 max-w-4xl mx-auto mb-8 sm:mb-12 font-body leading-relaxed text-center px-2"
          >
            Custom <span className="text-mint-green font-semibold">web applications</span>, <span className="text-electric-blue font-semibold">mobile apps</span>, <span className="text-vivid-coral font-semibold">APIs</span>, and <span className="text-slate-blue font-semibold">SaaS products</span> built to your exact specifications. From concept to launch, we deliver production-ready software that scales with your business.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center max-w-md sm:max-w-none mx-auto"
          >
            {/* Primary CTA - Custom Dev */}
            <motion.button
              className="w-full sm:w-auto btn-primary text-sm sm:text-base px-6 sm:px-8 py-3 sm:py-4 group hover:scale-105 active:scale-95 transition-transform duration-200 flex items-center justify-center gap-2"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              whileHover={{ scale: 1.05, boxShadow: '0 20px 40px rgba(255, 90, 95, 0.3)' }}
              whileTap={{ scale: 0.95 }}
            >
              <span>Get a Free Consultation</span>
              <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 transition-transform group-hover:translate-x-1" />
            </motion.button>

            {/* Secondary CTA - Products */}
            <motion.button
              className="w-full sm:w-auto btn-secondary text-sm sm:text-base px-6 sm:px-8 py-3 sm:py-4 group hover:scale-105 active:scale-95 transition-transform duration-200 flex items-center justify-center gap-2"
              onClick={() => document.getElementById('products')?.scrollIntoView({ behavior: 'smooth' })}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span>Explore SaaS Products</span>
              <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 transition-transform group-hover:translate-x-1" />
            </motion.button>
          </motion.div>
        </motion.div>
      </motion.div>

      {/* ===== FLOATING ELEMENTS ===== */}
      <motion.div
        className="absolute -top-10 -left-10 w-20 h-20 bg-gradient-to-r from-mint-green to-electric-blue rounded-full opacity-20 blur-sm pointer-events-none"
        animate={{ y: [0, -30, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute -bottom-5 -right-5 w-16 h-16 bg-gradient-to-r from-slate-blue to-vivid-coral rounded-full opacity-20 blur-sm pointer-events-none"
        animate={{ y: [0, 30, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
      />

      {/* ===== SCROLL INDICATOR ===== */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-scroll-indicator"
        animate={{ opacity: [0.3, 1, 0.3], y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
      >
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <motion.div
            className="w-1 h-2 bg-white/50 rounded-full mt-2"
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          />
        </div>
      </motion.div>

      {/* ===== FLOATING ACCENT SHAPES ===== */}
      <div className="absolute top-1/3 -right-20 w-40 h-40 border border-mint-green/20 rounded-3xl rotate-45 opacity-20" />
      <div className="absolute bottom-1/4 -left-20 w-32 h-32 border border-electric-blue/20 rounded-full opacity-20" />
    </section>
  );
};

export default Hero;