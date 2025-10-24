'use client';
import React, { useState, useEffect } from 'react';
import { useRouter, usePathname } from 'next/navigation';
import Logo from './Logo';
import { motion } from 'framer-motion';
import { X } from 'lucide-react';
import { SITE_CONFIG } from '@/lib/constants';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const router = useRouter();
  const pathname = usePathname();

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menu on route change
  useEffect(() => {
    setIsMenuOpen(false);
  }, [pathname]);

  // Handle navigation click
  const handleNavClick = (href) => {
    setIsMenuOpen(false);
    
    // If on home page and href starts with #, scroll to section
    if (pathname === '/' && href.startsWith('#')) {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      // Navigate to page
      router.push(href);
    }
  };

  // Handle logo click - always go to home page
  const handleLogoClick = () => {
    setIsMenuOpen(false);
    router.push('/');
  };

  // Navigation items - SIMPLIFIED (NO DROPDOWNS)
  const navItems = [
    { label: 'Home', href: '/' },
    { label: 'About', href: '/about' },
    { label: 'Services', href: '/services' },
    { label: 'Products', href: '/products' },
    { label: 'Contact', href: '/#contact' },
  ];

  const isActive = (href) => {
    if (href === '/') return pathname === '/';
    return pathname.startsWith(href);
  };

  return (
    <motion.header 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className={`fixed w-full top-0 z-50 transition-all duration-500 ${
        isScrolled 
          ? 'glass-card border-b border-white/10 backdrop-blur-xl' 
          : 'bg-transparent'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex justify-between items-center h-16 sm:h-20">
          
          {/* ===== LOGO ===== */}
          <motion.div
            onClick={handleLogoClick}
            className="cursor-pointer hover:scale-105 transition-transform duration-200 flex-shrink-0"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Logo size={40} showText={true} textColor="text-white" />
          </motion.div>

          {/* ===== DESKTOP NAVIGATION ===== */}
          <ul className="hidden lg:flex items-center space-x-1">
            {navItems.map((link, index) => (
              <motion.li 
                key={link.href}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.08 }}
                className="relative group"
              >
                <button
                  onClick={() => handleNavClick(link.href)}
                  className={`relative px-4 py-2 rounded-lg transition-all duration-300 font-medium text-sm font-body group ${
                    isActive(link.href)
                      ? 'text-mint-green'
                      : 'text-white/90 hover:text-mint-green'
                  }`}
                >
                  {link.label}
                  
                  {/* Active indicator */}
                  {isActive(link.href) && (
                    <span className="absolute -bottom-1 left-4 right-4 h-0.5 bg-gradient-to-r from-mint-green to-electric-blue"></span>
                  )}
                  
                  {/* Hover indicator */}
                  <span className="absolute -bottom-1 left-4 right-4 h-0.5 bg-gradient-to-r from-mint-green to-electric-blue scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
                </button>
              </motion.li>
            ))}
          </ul>

          {/* ===== RIGHT SIDE (CTA + MOBILE MENU) ===== */}
          <div className="flex items-center gap-2 sm:gap-4">

            {/* Desktop CTA Button */}
            <motion.button
              onClick={() => handleNavClick('/#contact')}
              className="hidden lg:block btn-primary text-sm font-semibold transition-all duration-300 hover:scale-105 px-6 py-2.5"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Get Started
            </motion.button>

            {/* Mobile Menu Button */}
            <motion.button
              className="lg:hidden glass-card text-white p-2.5 rounded-lg"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              whileTap={{ scale: 0.95 }}
              aria-label="Toggle menu"
            >
              <div className="w-6 h-5 flex flex-col justify-center items-center space-y-1">
                <span className={`block w-5 h-0.5 bg-white transition-all duration-300 origin-center ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
                <span className={`block w-5 h-0.5 bg-white transition-all duration-300 ${isMenuOpen ? 'opacity-0' : ''}`}></span>
                <span className={`block w-5 h-0.5 bg-white transition-all duration-300 origin-center ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
              </div>
            </motion.button>
          </div>
        </div>

        {/* ===== MOBILE NAVIGATION ===== */}
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="lg:hidden glass-card rounded-2xl mt-3 mb-4 p-4 sm:p-6 border border-white/10"
          >
            <ul className="space-y-2">
              {navItems.map((link, index) => (
                <motion.li 
                  key={link.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05 }}
                >
                  <button
                    onClick={() => handleNavClick(link.href)}
                    className={`w-full text-left px-4 py-2.5 rounded-lg transition-all duration-200 font-body font-medium ${
                      isActive(link.href)
                        ? 'text-mint-green bg-white/10'
                        : 'text-white/90 hover:text-mint-green hover:bg-white/5'
                    }`}
                  >
                    {link.label}
                  </button>
                </motion.li>
              ))}

              {/* Mobile CTA Button */}
              <li className="pt-2 border-t border-white/10">
                <motion.button
                  onClick={() => handleNavClick('/#contact')}
                  className="w-full btn-primary text-sm font-semibold py-3 mt-4"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Get Started
                </motion.button>
              </li>
            </ul>
          </motion.div>
        )}
      </nav>
    </motion.header>
  );
};

export default Header;