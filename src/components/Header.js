'use client';
import React, { useState, useEffect } from 'react';
import { useRouter, usePathname } from 'next/navigation';
import Logo from './Logo';
import { motion } from 'framer-motion';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // REMOVED HOME LINK - Only About, Products, Contact
  const navLinks = [
    { href: '#about', label: 'About' },
    { href: '#products', label: 'Products' },
    { href: '#contact', label: 'Contact' },
  ];

  const handleNavClick = (href) => {
    setIsMenuOpen(false);
    
    // If we're on a legal page, go to home first then scroll
    if (pathname !== '/') {
      if (href.startsWith('#')) {
        router.push(`/${href}`);
      } else {
        router.push(href);
      }
    } else {
      // We're on home page, just scroll to section
      if (href.startsWith('#')) {
        const element = document.querySelector(href);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      } else {
        router.push(href);
      }
    }
  };

  // Handle logo click - always go to home page
  const handleLogoClick = () => {
    setIsMenuOpen(false);
    router.push('/');
  };

  const getLabelFromHref = (href) => {
    switch(href) {
      case '#about': return 'About';
      case '#products': return 'Products';
      case '#contact': return 'Contact';
      default: return '';
    }
  };

  return (
    <motion.header 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className={`fixed w-full top-0 z-50 transition-all duration-500 ${
        isScrolled 
          ? 'glass-card border-b border-white/10' 
          : 'bg-transparent'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6">
        <div className="flex justify-between items-center h-20">
          {/* Logo - Clickable to go home */}
          <div
            onClick={handleLogoClick}
            className="cursor-pointer hover:scale-105 transition-transform duration-200"
          >
            <Logo size={44} showText={true} textColor="text-white" />
          </div>

          {/* Desktop Navigation - NO HOME LINK */}
          <ul className="hidden md:flex items-center space-x-8">
            {navLinks.map((link, index) => (
              <motion.li 
                key={link.href}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <button
                  onClick={() => handleNavClick(link.href)}
                  className="relative text-white/90 hover:text-mint-green transition-all duration-300 font-medium text-lg group"
                >
                  {getLabelFromHref(link.href)}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-mint-green to-electric-blue transition-all duration-300 group-hover:w-full"></span>
                </button>
              </motion.li>
            ))}
          </ul>

          {/* Premium Contact Button */}
          <motion.button
            onClick={() => handleNavClick('#contact')}
            className="hidden md:block btn-primary font-semibold transition-all duration-300 hover:scale-105"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Get Started
          </motion.button>

          {/* Mobile Menu Button */}
          <motion.button
            className="md:hidden glass-card text-white p-3 rounded-full"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            whileTap={{ scale: 0.95 }}
          >
            <div className="w-6 h-6 flex flex-col justify-center items-center space-y-1">
              <span className={`block w-5 h-0.5 bg-white transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-1.5' : ''}`}></span>
              <span className={`block w-5 h-0.5 bg-white transition-all duration-300 ${isMenuOpen ? 'opacity-0' : ''}`}></span>
              <span className={`block w-5 h-0.5 bg-white transition-all duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></span>
            </div>
          </motion.button>
        </div>

        {/* Mobile Navigation - NO HOME LINK */}
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden glass-card rounded-2xl mt-4 p-6 border border-white/10"
          >
            <ul className="space-y-4">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <button
                    onClick={() => handleNavClick(link.href)}
                    className="block w-full text-left text-white/90 hover:text-mint-green transition-colors duration-300 font-medium text-lg py-2"
                  >
                    {getLabelFromHref(link.href)}
                  </button>
                </li>
              ))}
              <li className="pt-4">
                <button
                  onClick={() => handleNavClick('#contact')}
                  className="block w-full btn-primary text-center font-semibold"
                >
                  Get Started
                </button>
              </li>
            </ul>
          </motion.div>
        )}
      </nav>
    </motion.header>
  );
};

export default Header;