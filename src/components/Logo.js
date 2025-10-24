'use client';
import React from 'react';
import { motion } from 'framer-motion';

const Logo = ({ 
  size = 40, 
  showText = true, 
  textColor = 'text-white',
  animated = true,
  className = ''
}) => {
  const iconVariants = {
    initial: { opacity: 0, scale: 0.8 },
    animate: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const textVariants = {
    initial: { opacity: 0, x: -10 },
    animate: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
        delay: 0.2,
      },
    },
  };

  const floatVariants = {
    animate: {
      y: [0, -3, 0],
      transition: {
        duration: 3,
        repeat: Infinity,
        ease: 'easeInOut',
      },
    },
  };

  return (
    <div className={`flex items-center gap-2 sm:gap-3 ${className}`}>
      {/* Logo Icon Container */}
      <motion.div
        initial="initial"
        animate={animated ? "animate" : "initial"}
        variants={iconVariants}
        className="relative flex-shrink-0"
        style={{ width: size, height: size }}
      >
        <motion.svg
          viewBox="0 0 120 120"
          width={size}
          height={size}
          className="w-full h-full"
          xmlns="http://www.w3.org/2000/svg"
          animate={animated ? "animate" : "initial"}
          variants={floatVariants}
        >
          {/* Gradients */}
          <defs>
            <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#2ee0ac" />
              <stop offset="100%" stopColor="#00d9ff" />
            </linearGradient>
            <linearGradient id="grad2" x1="100%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#00d9ff" />
              <stop offset="100%" stopColor="#667eea" />
            </linearGradient>
          </defs>

          {/* Outer hexagon frame */}
          <polygon
            points="60,10 105,35 105,85 60,110 15,85 15,35"
            fill="none"
            stroke="url(#grad1)"
            strokeWidth="2"
            opacity="0.3"
          />

          {/* Inner hexagon - filled */}
          <polygon
            points="60,20 100,45 100,80 60,100 20,80 20,45"
            fill="none"
            stroke="url(#grad1)"
            strokeWidth="2.5"
          />

          {/* Center circle - primary */}
          <circle
            cx="60"
            cy="60"
            r="18"
            fill="url(#grad1)"
          />

          {/* Top accent - smaller circle */}
          <circle
            cx="60"
            cy="35"
            r="4"
            fill="url(#grad2)"
            opacity="0.8"
          />

          {/* Right accent - smaller circle */}
          <circle
            cx="85"
            cy="60"
            r="4"
            fill="url(#grad2)"
            opacity="0.8"
          />

          {/* Left accent - smaller circle */}
          <circle
            cx="35"
            cy="60"
            r="4"
            fill="url(#grad1)"
            opacity="0.6"
          />

          {/* Connecting lines - circuit aesthetic */}
          <line
            x1="60"
            y1="38"
            x2="60"
            y2="42"
            stroke="url(#grad2)"
            strokeWidth="1.5"
            opacity="0.6"
          />
          <line
            x1="77"
            y1="63"
            x2="80"
            y2="60"
            stroke="url(#grad2)"
            strokeWidth="1.5"
            opacity="0.6"
          />
          <line
            x1="43"
            y1="57"
            x2="40"
            y2="60"
            stroke="url(#grad1)"
            strokeWidth="1.5"
            opacity="0.6"
          />

          {/* Inner decorative elements */}
          <polygon
            points="60,42 72,50 72,66 60,74 48,66 48,50"
            fill="none"
            stroke="url(#grad1)"
            strokeWidth="1"
            opacity="0.4"
          />
        </motion.svg>
      </motion.div>

      {/* Brand Text */}
      {showText && (
        <motion.div
          initial="initial"
          animate={animated ? "animate" : "initial"}
          variants={textVariants}
          className="flex flex-col leading-none"
        >
          {/* Main text */}
          <span className="font-display font-black text-sm sm:text-base md:text-lg bg-gradient-to-r from-mint-green to-electric-blue bg-clip-text text-transparent">
            TinDev
          </span>
          
          {/* Subtext */}
          <span className={`font-body font-semibold text-xs ${textColor} opacity-60 tracking-widest uppercase`}>
            Studios
          </span>
        </motion.div>
      )}
    </div>
  );
};

export default Logo;