'use client';
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Logo from './Logo';
import { Mail, ExternalLink, ArrowUp } from 'lucide-react';
import { SITE_CONFIG, FOOTER_LINKS } from '@/lib/constants';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNewsletterSignup = (e) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail('');
      setTimeout(() => setSubscribed(false), 3000);
    }
  };

  return (
    <footer className="relative overflow-hidden bg-black">
      {/* ===== ANIMATED BACKGROUND ===== */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-b from-gray-950 via-black to-black" />
        
        <motion.div
          animate={{
            opacity: [0.02, 0.05, 0.02],
          }}
          transition={{ duration: 15, repeat: Infinity }}
          className="absolute top-0 left-1/4 w-96 h-96 bg-electric-blue rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            opacity: [0.02, 0.05, 0.02],
          }}
          transition={{ duration: 18, repeat: Infinity, delay: 0.5 }}
          className="absolute bottom-0 right-1/4 w-96 h-96 bg-mint-green rounded-full blur-3xl"
        />
      </div>

      {/* ===== MAIN CONTENT ===== */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* ===== TOP SECTION - MINIMAL HEADER ===== */}
        <div className="py-16 sm:py-20 lg:py-24 border-b border-white/10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-12 lg:gap-16"
          >
            {/* Left - Brand & Contact */}
            <div className="space-y-8 flex-1">
              <Logo size={56} showText={true} textColor="text-white" />
              
              <p className="text-white/70 text-base sm:text-lg leading-relaxed font-body max-w-sm">
                {SITE_CONFIG.description}
              </p>

              {/* Contact Info */}
              <div className="space-y-4">
                <h4 className="text-white font-display font-bold text-sm uppercase tracking-widest">Contact</h4>
                <div className="space-y-3">
                  <a
                    href={`mailto:${SITE_CONFIG.email}`}
                    className="flex items-center gap-3 text-white/70 hover:text-mint-green transition-colors group"
                  >
                    <Mail className="w-5 h-5 flex-shrink-0" />
                    <span className="text-sm sm:text-base font-body break-all">{SITE_CONFIG.email}</span>
                  </a>

                  {SITE_CONFIG.enterpriseEmail && (
                    <a
                      href={`mailto:${SITE_CONFIG.enterpriseEmail}`}
                      className="flex items-center gap-3 text-white/70 hover:text-electric-blue transition-colors group"
                    >
                      <Mail className="w-5 h-5 flex-shrink-0" />
                      <span className="text-sm sm:text-base font-body break-all">{SITE_CONFIG.enterpriseEmail}</span>
                    </a>
                  )}
                </div>
              </div>

              {/* Social Links */}
              <div className="flex items-center gap-4 pt-4">
                {[
                  { url: SITE_CONFIG.social.twitter, icon: 'f', label: 'Twitter' },
                  { url: SITE_CONFIG.social.linkedin, icon: 'in', label: 'LinkedIn' },
                  { url: SITE_CONFIG.social.github, icon: 'gh', label: 'GitHub' },
                  { url: SITE_CONFIG.social.instagram, icon: 'ig', label: 'Instagram' },
                ].map((social, idx) => (
                  <motion.a
                    key={idx}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-lg border border-white/20 hover:border-mint-green/50 flex items-center justify-center text-white/60 hover:text-mint-green transition-all duration-300"
                    whileHover={{ scale: 1.1, y: -2 }}
                    title={social.label}
                  >
                    <ExternalLink className="w-4 h-4" />
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Right - Newsletter */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="flex-1 lg:flex-none lg:w-80"
            >
              <div className="space-y-6">
                <div>
                  <h3 className="text-white font-display font-bold text-xl sm:text-2xl mb-2">
                    Stay in the loop
                  </h3>
                  <p className="text-white/70 text-sm sm:text-base font-body">
                    Get the latest updates on software development, tech trends, and product launches.
                  </p>
                </div>

                <form onSubmit={handleNewsletterSignup} className="space-y-3">
                  <div className="relative">
                    <input
                      type="email"
                      placeholder="Enter your email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3.5 text-white placeholder-white/50 focus:outline-none focus:ring-1 focus:ring-mint-green/50 focus:border-mint-green/50 transition-all duration-300 text-sm font-body"
                      required
                    />
                  </div>

                  <motion.button
                    type="submit"
                    className="w-full btn-primary text-sm font-semibold py-3 rounded-xl"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    Subscribe
                  </motion.button>

                  {subscribed && (
                    <motion.p
                      initial={{ opacity: 0, y: -5 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="text-mint-green text-sm font-body text-center"
                    >
                      ✓ Thanks for subscribing!
                    </motion.p>
                  )}
                </form>

                <p className="text-white/50 text-xs font-body">
                  We respect your privacy. Unsubscribe at any time.
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* ===== MIDDLE SECTION - LINKS GRID ===== */}
        <div className="py-16 sm:py-20">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-10 sm:gap-12 lg:gap-8"
          >
            {/* Products Column */}
            <div className="space-y-6">
              <h4 className="text-white font-display font-bold text-sm uppercase tracking-widest">
                Products
              </h4>
              <ul className="space-y-3">
                {FOOTER_LINKS.Products.slice(0, 5).map((link) => (
                  <li key={link.name}>
                    {link.comingSoon ? (
                      <div className="flex items-center gap-2">
                        <span className="text-white/40 text-sm font-body hover:text-white/60 transition-colors cursor-default">
                          {link.name}
                        </span>
                        <span className="text-xs font-semibold px-2 py-0.5 rounded-full bg-vivid-coral/20 text-vivid-coral">
                          Soon
                        </span>
                      </div>
                    ) : (
                      <motion.a
                        href={link.href}
                        target={link.external ? '_blank' : '_self'}
                        rel={link.external ? 'noopener noreferrer' : undefined}
                        className="text-white/70 hover:text-mint-green transition-colors text-sm font-body"
                        whileHover={{ x: 2 }}
                      >
                        {link.name}
                      </motion.a>
                    )}
                  </li>
                ))}
              </ul>
            </div>

            {/* Company Column */}
            <div className="space-y-6">
              <h4 className="text-white font-display font-bold text-sm uppercase tracking-widest">
                Company
              </h4>
              <ul className="space-y-3">
                {FOOTER_LINKS.Company.map((link) => (
                  <li key={link.name}>
                    <motion.a
                      href={link.href}
                      target={link.external ? '_blank' : '_self'}
                      rel={link.external ? 'noopener noreferrer' : undefined}
                      className="text-white/70 hover:text-electric-blue transition-colors text-sm font-body"
                      whileHover={{ x: 2 }}
                    >
                      {link.name}
                    </motion.a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Legal Column */}
            <div className="space-y-6">
              <h4 className="text-white font-display font-bold text-sm uppercase tracking-widest">
                Legal
              </h4>
              <ul className="space-y-3">
                {FOOTER_LINKS.Legal.map((link) => (
                  <li key={link.name}>
                    <motion.a
                      href={link.href}
                      className="text-white/70 hover:text-slate-blue transition-colors text-sm font-body"
                      whileHover={{ x: 2 }}
                    >
                      {link.name}
                    </motion.a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Resources (if needed) */}
            <div className="space-y-6">
              <h4 className="text-white font-display font-bold text-sm uppercase tracking-widest">
                Resources
              </h4>
              <ul className="space-y-3">
                <li>
                  <motion.a
                    href="/blog"
                    className="text-white/70 hover:text-mint-green transition-colors text-sm font-body"
                    whileHover={{ x: 2 }}
                  >
                    Blog
                  </motion.a>
                </li>
                <li>
                  <motion.a
                    href="/portfolio"
                    className="text-white/70 hover:text-mint-green transition-colors text-sm font-body"
                    whileHover={{ x: 2 }}
                  >
                    Portfolio
                  </motion.a>
                </li>
                <li>
                  <motion.a
                    href="/pricing"
                    className="text-white/70 hover:text-mint-green transition-colors text-sm font-body"
                    whileHover={{ x: 2 }}
                  >
                    Pricing
                  </motion.a>
                </li>
              </ul>
            </div>

            {/* Developers */}
            <div className="space-y-6">
              <h4 className="text-white font-display font-bold text-sm uppercase tracking-widest">
                Developers
              </h4>
              <ul className="space-y-3">
                <li>
                  <motion.a
                    href="#"
                    className="text-white/70 hover:text-electric-blue transition-colors text-sm font-body"
                    whileHover={{ x: 2 }}
                  >
                    Documentation
                  </motion.a>
                </li>
                <li>
                  <motion.a
                    href="#"
                    className="text-white/70 hover:text-electric-blue transition-colors text-sm font-body"
                    whileHover={{ x: 2 }}
                  >
                    API Reference
                  </motion.a>
                </li>
                <li>
                  <motion.a
                    href="#"
                    className="text-white/70 hover:text-electric-blue transition-colors text-sm font-body"
                    whileHover={{ x: 2 }}
                  >
                    Status
                  </motion.a>
                </li>
              </ul>
            </div>
          </motion.div>
        </div>

        {/* ===== BOTTOM SECTION - CLEAN FOOTER ===== */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="py-8 sm:py-10 border-t border-white/10"
        >
          <div className="flex flex-col sm:flex-row items-center justify-between gap-6 w-full">
            {/* Left - Copyright */}
            <p className="text-white/50 text-xs sm:text-sm font-body flex-1">
              © {currentYear} {SITE_CONFIG.name}. All rights reserved.
            </p>

            {/* Right - Quick Links + Scroll Top */}
            <div className="flex items-center gap-4 sm:gap-6">
              <a href="/privacy" className="text-white/50 hover:text-white text-xs sm:text-sm font-body transition-colors">
                Privacy
              </a>
              <a href="/terms" className="text-white/50 hover:text-white text-xs sm:text-sm font-body transition-colors">
                Terms
              </a>
              <motion.button
                onClick={scrollToTop}
                className="w-8 h-8 sm:w-9 sm:h-9 rounded-lg border border-white/20 hover:border-white/40 flex items-center justify-center text-white/60 hover:text-white transition-all"
                whileHover={{ y: -2, scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                aria-label="Scroll to top"
              >
                <ArrowUp className="w-4 h-4" />
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;