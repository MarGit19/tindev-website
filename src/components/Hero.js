'use client';
import React from 'react';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <section 
      id="home" 
      className="min-h-screen relative overflow-hidden flex items-center justify-center"
    >
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-black to-blue-900">
        {/* Floating Orbs */}
        <div className="absolute top-20 left-20 w-72 h-72 bg-electric-blue/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-mint-green/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 w-80 h-80 bg-slate-blue/20 rounded-full blur-3xl animate-pulse delay-2000 transform -translate-x-1/2 -translate-y-1/2"></div>
        
        {/* Mesh Gradient Overlay */}
        <div className="absolute inset-0 mesh-gradient"></div>
        
        {/* Grid Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="w-full h-full" style={{
            backgroundImage: `
              linear-gradient(rgba(46, 224, 172, 0.3) 1px, transparent 1px),
              linear-gradient(90deg, rgba(46, 224, 172, 0.3) 1px, transparent 1px)
            `,
            backgroundSize: '60px 60px'
          }}></div>
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 text-center">
        {/* Floating Glass Card */}
        <div className="glass-card rounded-3xl p-6 sm:p-12 lg:p-16 floating-glow animate-hero-entrance">
          {/* Mobile-Optimized Hero Title */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold leading-tight gradient-text-vibrant mb-6 sm:mb-8 animate-hero-title font-display">
            Practical Software
            <br />
            <span className="bg-gradient-to-r from-mint-green via-electric-blue to-slate-blue bg-clip-text text-transparent">
              Solutions
            </span>
          </h1>
          
          {/* Mobile-Optimized Subtitle */}
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-white/75 max-w-4xl mx-auto mb-8 sm:mb-12 font-body animate-hero-subtitle leading-relaxed px-2">
            We build <span className="text-mint-green font-semibold">efficient tools</span> and applications that help people accomplish tasks, 
            manage their lives, and provide <span className="text-electric-blue font-semibold">accessible solutions</span> online.
          </p>
          
          {/* Mobile-Optimized CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center animate-hero-buttons max-w-md sm:max-w-none mx-auto">
            <button
              className="w-full sm:w-auto btn-primary text-sm sm:text-base px-6 sm:px-8 py-3 sm:py-4 group hover:scale-105 active:scale-95 transition-transform duration-200"
              onClick={() => document.getElementById('products').scrollIntoView({ behavior: 'smooth' })}
            >
              <span>Explore Products</span>
              <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 transition-transform group-hover:translate-x-1" />
            </button>
            
            <button
              className="w-full sm:w-auto btn-secondary text-sm sm:text-base px-6 sm:px-8 py-3 sm:py-4 hover:scale-105 active:scale-95 transition-transform duration-200"
              onClick={() => document.getElementById('about').scrollIntoView({ behavior: 'smooth' })}
            >
              Learn More
            </button>
          </div>
        </div>

        {/* Floating Elements */}
        <div className="absolute -top-10 -left-10 w-20 h-20 bg-gradient-to-r from-mint-green to-electric-blue rounded-full opacity-20 blur-sm animate-float-1"></div>
        <div className="absolute -bottom-5 -right-5 w-16 h-16 bg-gradient-to-r from-slate-blue to-vivid-coral rounded-full opacity-20 blur-sm animate-float-2"></div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-scroll-indicator">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center animate-scroll-mouse">
          <div className="w-1 h-3 bg-white/50 rounded-full mt-2"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;