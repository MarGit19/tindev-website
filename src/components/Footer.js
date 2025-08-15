'use client';
import React from 'react';
import { motion } from 'framer-motion';
import Logo from './Logo';
import { Mail, ExternalLink, ArrowUp } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  const footerLinks = {
    Products: [
      { name: 'AI Resume Builder', href: 'https://resume.tindevstudios.com', external: true },
      { name: 'Habit Tracker Lite', href: '#', external: false, comingSoon: true },
      { name: 'Meeting Summarizer', href: '#', external: false, comingSoon: true },
      { name: 'Social Post Generator', href: '#', external: false, comingSoon: true },
      { name: 'Skill Tracker Mini', href: '#', external: false, comingSoon: true },
    ],
    Company: [
      { name: 'About Us', href: '#about' },
      { name: 'Our Products', href: '#products' },
      { name: 'Contact Us', href: '#contact' },
      { name: 'Enterprise Solutions', href: 'mailto:enterprise@tindevstudios.com', external: true },
    ],
    Legal: [
      { name: 'Privacy Policy', href: '/privacy', external: false },
      { name: 'Terms of Service', href: '/terms', external: false },
      { name: 'Cookie Policy', href: '/cookies', external: false },
      { name: 'GDPR Compliance', href: '/gdpr', external: false },
    ]
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative overflow-hidden">
      {/* Clean Dark Background */}
      <div className="absolute inset-0">
        <div className="bg-gradient-to-br from-charcoal-gray via-black to-gray-900 h-full w-full"></div>
        <div className="absolute top-40 left-40 w-64 h-64 bg-electric-blue/3 rounded-full blur-3xl"></div>
        <div className="absolute bottom-40 right-40 w-80 h-80 bg-mint-green/3 rounded-full blur-3xl"></div>
      </div>

      {/* Main Footer Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          
          {/* LEFT COLUMN - Logo & Email Contacts */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="space-y-6">
              <Logo size={56} showText={true} textColor="text-white" />
              <p className="text-white/70 text-lg leading-relaxed font-body max-w-lg">
                Building practical, innovative software products that make life easier and more productive. 
                Empowering users with accessible technology solutions.
              </p>
            </div>

            <div className="space-y-6">
              <motion.a
                href="mailto:support@tindevstudios.com"
                className="flex items-center gap-4 text-white/60 hover:text-mint-green transition-all duration-300 group glass-card p-6 rounded-2xl"
                whileHover={{ x: 8, scale: 1.02 }}
              >
                <div className="w-14 h-14 bg-gradient-to-r from-electric-blue/20 to-mint-green/20 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <div className="font-body font-bold text-lg text-white">General Support</div>
                  <div className="text-white/60">support@tindevstudios.com</div>
                </div>
              </motion.a>

              <motion.a
                href="mailto:enterprise@tindevstudios.com"
                className="flex items-center gap-4 text-white/60 hover:text-mint-green transition-all duration-300 group glass-card p-6 rounded-2xl"
                whileHover={{ x: 8, scale: 1.02 }}
              >
                <div className="w-14 h-14 bg-gradient-to-r from-slate-blue/20 to-vivid-coral/20 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <div className="font-body font-bold text-lg text-white">Enterprise Solutions</div>
                  <div className="text-white/60">enterprise@tindevstudios.com</div>
                </div>
              </motion.a>
            </div>
          </motion.div>

          {/* RIGHT COLUMN - Navigation Links */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-3 gap-10"
          >
            {Object.entries(footerLinks).map(([category, links], categoryIndex) => (
              <motion.div 
                key={category}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 + categoryIndex * 0.1 }}
                viewport={{ once: true }}
                className="space-y-6"
              >
                <h4 className="font-display font-bold text-xl text-white mb-6">
                  {category}
                </h4>
                <ul className="space-y-4">
                  {links.map((link, index) => (
                    <motion.li 
                      key={link.name}
                      initial={{ opacity: 0, x: -15 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.6, delay: 0.6 + (categoryIndex * 0.1) + (index * 0.05) }}
                      viewport={{ once: true }}
                    >
                      {link.comingSoon ? (
                        <div className="flex items-center gap-3">
                          <span className="text-white/40 font-body hover:text-white/60 transition-colors duration-300 cursor-default text-base">
                            {link.name}
                          </span>
                          <span className="text-xs bg-vivid-coral/20 text-vivid-coral px-3 py-1 rounded-full font-body font-semibold">
                            Soon
                          </span>
                        </div>
                      ) : (
                        <a
                          href={link.href}
                          target={link.external ? '_blank' : '_self'}
                          rel={link.external ? 'noopener noreferrer' : undefined}
                          className="text-white/70 hover:text-mint-green transition-colors duration-300 font-body flex items-center gap-2 group text-base"
                        >
                          <span>{link.name}</span>
                          {link.external && (
                            <ExternalLink className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                          )}
                        </a>
                      )}
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="relative z-10 border-t border-white/10 bg-black/30 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-6 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <motion.p 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-white/50 text-sm font-body"
            >
              © {currentYear} TinDev Studios. All rights reserved.
            </motion.p>
            
            <motion.div 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="flex items-center gap-8 text-sm"
            >
              <a 
                href="/privacy" 
                className="text-white/50 hover:text-mint-green transition-colors font-body"
              >
                Privacy
              </a>
              <a 
                href="/terms" 
                className="text-white/50 hover:text-mint-green transition-colors font-body"
              >
                Terms
              </a>
              <a 
                href="#contact" 
                className="text-white/50 hover:text-mint-green transition-colors font-body"
              >
                Contact
              </a>
            </motion.div>

            <motion.button
              onClick={scrollToTop}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
              className="glass-card w-12 h-12 rounded-full flex items-center justify-center text-white/60 hover:text-mint-green transition-all duration-300 hover:scale-110"
              whileHover={{ y: -3 }}
              whileTap={{ y: 0 }}
            >
              <ArrowUp className="w-5 h-5" />
            </motion.button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;