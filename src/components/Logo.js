'use client';
import React from 'react';

const Logo = ({ 
  size = 40, 
  showText = true, 
  className = "", 
  textColor = "text-white", 
  animated = false,
  variant = "default" // "default", "minimal", "geometric", "fluid"
}) => {

  const renderGeometricLogo = () => (
    <svg 
      width={size} 
      height={size} 
      viewBox="0 0 120 120" 
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="drop-shadow-2xl relative z-10"
    >
      <defs>
        {/* Enhanced Gradients */}
        <linearGradient id="primaryFlow" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#2979FF" stopOpacity="1" />
          <stop offset="30%" stopColor="#1E88E5" stopOpacity="0.95" />
          <stop offset="70%" stopColor="#1565C0" stopOpacity="0.9" />
          <stop offset="100%" stopColor="#0D47A1" stopOpacity="0.85" />
        </linearGradient>
        
        <radialGradient id="mintBurst" cx="50%" cy="50%" r="70%">
          <stop offset="0%" stopColor="#2EE0AC" stopOpacity="1" />
          <stop offset="40%" stopColor="#00D4AA" stopOpacity="0.9" />
          <stop offset="80%" stopColor="#00BFA5" stopOpacity="0.8" />
          <stop offset="100%" stopColor="#00A693" stopOpacity="0.7" />
        </radialGradient>
        
        <linearGradient id="slateFlow" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#4A5CFF" stopOpacity="1" />
          <stop offset="50%" stopColor="#667EEA" stopOpacity="0.95" />
          <stop offset="100%" stopColor="#7C3AED" stopOpacity="0.9" />
        </linearGradient>

        {/* Advanced Filters */}
        <filter id="softGlow" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
          <feOffset dx="0" dy="1" result="offsetBlur"/>
          <feFlood floodColor="#2979FF" floodOpacity="0.3"/>
          <feComposite in2="offsetBlur" operator="in"/>
          <feMerge> 
            <feMergeNode/>
            <feMergeNode in="SourceGraphic"/>
          </feMerge>
        </filter>

        <filter id="innerShadow" x="-50%" y="-50%" width="200%" height="200%">
          <feOffset dx="0" dy="2"/>
          <feGaussianBlur stdDeviation="2" result="offset-blur"/>
          <feFlood floodColor="#000000" floodOpacity="0.2"/>
          <feComposite in2="offset-blur" operator="in"/>
          <feComposite in2="SourceGraphic" operator="over"/>
        </filter>

        {/* Animated Gradient for Hover */}
        <linearGradient id="hoverShimmer" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="rgba(255,255,255,0)" />
          <stop offset="50%" stopColor="rgba(255,255,255,0)" />
          <stop offset="100%" stopColor="rgba(255,255,255,0)" />
        </linearGradient>
      </defs>

      {/* Main Hexagonal Shape */}
      <path
        d="M60 10 L95 30 L95 70 L60 90 L25 70 L25 30 Z"
        fill="url(#primaryFlow)"
        filter="url(#softGlow)"
        className="group-hover:drop-shadow-2xl transition-all duration-500 animate-logo-entrance"
      />

      {/* Inner Geometric Pattern */}
      <polygon
        points="45,35 75,35 85,55 75,75 45,75 35,55"
        fill="none"
        stroke="rgba(255,255,255,0.2)"
        strokeWidth="1.5"
        className="group-hover:stroke-white/40 transition-all duration-500 animate-logo-entrance"
        style={{ animationDelay: '0.1s' }}
      />

      {/* Floating Mint Element */}
      <circle
        cx="45"
        cy="45"
        r="15"
        fill="url(#mintBurst)"
        filter="url(#innerShadow)"
        className="group-hover:r-16 transition-all duration-500 animate-logo-entrance"
        style={{ animationDelay: '0.2s' }}
      />

      {/* Inner Mint Highlight */}
      <circle
        cx="42"
        cy="42"
        r="6"
        fill="rgba(255,255,255,0.4)"
        className="group-hover:fill-white/60 transition-all duration-300 animate-logo-entrance"
        style={{ animationDelay: '0.3s' }}
      />

      {/* Slate Accent Triangle */}
      <polygon
        points="75,65 85,80 65,80"
        fill="url(#slateFlow)"
        filter="url(#softGlow)"
        className="transition-all duration-500 animate-logo-entrance"
        style={{ animationDelay: '0.4s' }}
      />

      {/* Dynamic Lines */}
      <line
        x1="35" y1="55" x2="85" y2="55"
        stroke="url(#mintBurst)"
        strokeWidth="2"
        opacity="0.6"
        className="group-hover:opacity-90 transition-opacity duration-500 animate-logo-entrance"
        style={{ animationDelay: '0.5s' }}
      />

      <line
        x1="60" y1="25" x2="60" y2="85"
        stroke="url(#slateFlow)"
        strokeWidth="1.5"
        opacity="0.4"
        className="group-hover:opacity-70 transition-opacity duration-500 animate-logo-entrance"
        style={{ animationDelay: '0.6s' }}
      />

      {/* Hover Shimmer Effect */}
      <rect
        x="0" y="0" width="120" height="120"
        fill="url(#hoverShimmer)"
        opacity="0"
        className="group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
      />

      {/* Floating Particles */}
      <circle
        cx="30" cy="30" r="2"
        fill="#2EE0AC"
        opacity="0.7"
        className={animated ? "animate-float-particle-1" : ""}
      />

      <circle
        cx="90" cy="35" r="1.5"
        fill="#4A5CFF"
        opacity="0.6"
        className={animated ? "animate-float-particle-2" : ""}
      />
    </svg>
  );

  const renderFluidLogo = () => (
    <svg 
      width={size} 
      height={size} 
      viewBox="0 0 120 120" 
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="drop-shadow-2xl relative z-10"
    >
      <defs>
        {/* Fluid Gradients */}
        <radialGradient id="fluidBlue" cx="30%" cy="30%" r="80%">
          <stop offset="0%" stopColor="#2979FF" />
          <stop offset="70%" stopColor="#1565C0" />
          <stop offset="100%" stopColor="#0D47A1" />
        </radialGradient>
        
        <radialGradient id="fluidMint" cx="60%" cy="40%" r="60%">
          <stop offset="0%" stopColor="#2EE0AC" />
          <stop offset="100%" stopColor="#00BFA5" />
        </radialGradient>
        
        <filter id="morphBlur">
          <feGaussianBlur stdDeviation="1" />
          <feColorMatrix values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 19 -9" />
        </filter>
      </defs>

      {/* Fluid Blob Shape */}
      <path
        d="M60 15 Q90 20 105 50 Q100 85 70 100 Q40 95 20 65 Q25 30 60 15 Z"
        fill="url(#fluidBlue)"
        filter="url(#morphBlur)"
        className={`group-hover:drop-shadow-2xl transition-all duration-700 ${animated ? 'animate-fluid-morph' : ''}`}
      />

      {/* Floating Mint Blob */}
      <ellipse
        cx="50" cy="50" rx="18" ry="12"
        fill="url(#fluidMint)"
        opacity="0.9"
        className={`group-hover:opacity-100 transition-opacity duration-500 ${animated ? 'animate-blob-pulse' : ''}`}
      />

      {/* Slate Accent */}
      <circle
        cx="70" cy="70" r="8"
        fill="#4A5CFF"
        opacity="0.8"
        className={animated ? 'animate-accent-pulse' : ''}
      />
    </svg>
  );

  const renderMinimalLogo = () => (
    <svg 
      width={size} 
      height={size} 
      viewBox="0 0 120 120" 
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="drop-shadow-lg relative z-10"
    >
      <defs>
        <linearGradient id="minimalGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#2979FF" />
          <stop offset="100%" stopColor="#1565C0" />
        </linearGradient>
      </defs>

      {/* Clean Square with Rounded Corners */}
      <rect
        x="20" y="20" width="80" height="80" rx="16"
        fill="url(#minimalGrad)"
        className="group-hover:drop-shadow-xl transition-all duration-400 animate-logo-entrance"
      />

      {/* Mint Accent Bar */}
      <rect
        x="30" y="40" width="40" height="6" rx="3"
        fill="#2EE0AC"
        className="animate-logo-entrance"
        style={{ animationDelay: '0.1s' }}
      />

      {/* Slate Dot */}
      <circle
        cx="80" cy="70" r="6"
        fill="#4A5CFF"
        className="animate-logo-entrance"
        style={{ animationDelay: '0.2s' }}
      />

      {/* Minimal Line Pattern */}
      <line
        x1="30" y1="60" x2="70" y2="60"
        stroke="#2EE0AC" strokeWidth="2" opacity="0.6"
        className="animate-logo-entrance"
        style={{ animationDelay: '0.3s' }}
      />
    </svg>
  );

  const renderLogo = () => {
    switch(variant) {
      case "minimal": return renderMinimalLogo();
      case "geometric": return renderGeometricLogo();
      case "fluid": return renderFluidLogo();
      default: return renderGeometricLogo();
    }
  };

  return (
    <div 
      className={`flex items-center gap-4 ${className} group cursor-pointer select-none transition-all duration-500 hover:scale-105`}
    >
      {/* Logo Mark */}
      <div className="relative transform-gpu">
        {renderLogo()}
        
        {/* Ambient Glow */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 via-emerald-400/15 to-indigo-500/20 rounded-full blur-xl opacity-0 group-hover:opacity-60 transition-all duration-700 -z-10 scale-150"></div>
      </div>

      {/* Enhanced Text */}
      {showText && (
        <div className="relative overflow-hidden animate-logo-text">
          <span 
            className={`font-bold ${textColor} relative z-10 tracking-tight transition-all duration-700 bg-gradient-to-r from-current via-current to-current bg-clip-text group-hover:from-emerald-400 group-hover:via-blue-500 group-hover:to-indigo-500 group-hover:text-transparent`}
            style={{ 
              fontSize: size * 0.65, 
              letterSpacing: '-0.025em',
              fontFamily: '"Inter", "SF Pro Display", system-ui, sans-serif'
            }}
          >
            TinDev Studios
          </span>
          
          {/* Text Underline Effect */}
          <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-emerald-400 to-blue-500 group-hover:w-full transition-all duration-700 ease-out"></div>
        </div>
      )}
    </div>
  );
};

// Export with color constants
export const tindevColors = {
  electricBlue: '#2979FF',
  charcoalGray: '#1F1F1F', 
  mintGreen: '#2EE0AC',
  lightGray: '#ECECEC',
  slateBlue: '#4A5CFF'
};

export default Logo;