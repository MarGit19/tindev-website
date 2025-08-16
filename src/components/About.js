'use client';
import React from 'react';
import { Zap, Shield, Users, Rocket, ArrowRight } from 'lucide-react';

const About = () => {
  const features = [
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Instant Access",
      description: "No downloads, no installations. Access our tools directly through your browser with zero setup time."
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Reliable & Secure",
      description: "Enterprise-grade security and 99.9% uptime ensure your data is safe and tools are always available."
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "User-Centric Design",
      description: "Every tool is crafted with real user needs in mind, ensuring intuitive interfaces and powerful functionality."
    },
    {
      icon: <Rocket className="w-8 h-8" />,
      title: "Boost Productivity",
      description: "Save hours every week with AI-powered tools that automate repetitive tasks and streamline workflows."
    }
  ];

  return (
    <section id="about" className="py-16 sm:py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-100 via-white to-blue-50">
        {/* Subtle pattern overlay */}
        <div className="absolute inset-0 opacity-30">
          <div className="w-full h-full" style={{
            backgroundImage: `
              radial-gradient(circle at 25% 25%, rgba(41, 121, 255, 0.1) 0%, transparent 50%),
              radial-gradient(circle at 75% 75%, rgba(46, 224, 172, 0.1) 0%, transparent 50%)
            `
          }}></div>
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* Content Side */}
          <div className="space-y-6 sm:space-y-8 animate-slideInLeft">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-charcoal-gray animate-section-title font-display leading-tight">
              Empowering Your Digital Life
            </h2>
            
            <div className="space-y-4 sm:space-y-6 text-base sm:text-lg text-gray-600 leading-relaxed font-body animate-section-content">
              <p>
                At <strong className="text-charcoal-gray font-semibold">TinDev Studios</strong>, we build practical, innovative software products designed to make life easier and more productive. As a tech company, we focus on creating <strong className="text-electric-blue font-semibold">useful, accessible tools</strong> that people can use directly on our website or through dedicated links—no complicated setups required.
              </p>
              
              <p>
                Our first completed product, the <strong className="text-mint-green font-semibold">AI Resume Web App</strong>, helps users craft optimized resumes and cover letters with AI-powered guidance. We are also developing additional tools like habit trackers, AI meeting summarizers, social media content generators, and skill trackers—all designed to be simple, effective, and monetizable.
              </p>
              
              <p>
                Our mission is to <strong className="text-charcoal-gray font-semibold">empower users with technology that saves time, enhances productivity, and supports personal and professional growth</strong>. At TinDev Studios, we believe that software should work for you, not the other way around.
              </p>
            </div>

            {/* Mobile-Optimized CTA Button */}
            <div className="animate-stagger-3">
              <button 
                className="w-full sm:w-auto btn-accent text-sm sm:text-base px-6 sm:px-8 py-3 sm:py-4 group hover:scale-105 active:scale-95 transition-transform duration-200"
                onClick={() => document.getElementById('products').scrollIntoView({ behavior: 'smooth' })}
              >
                <span>Discover Our Products</span>
                <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 transition-transform group-hover:translate-x-1" />
              </button>
            </div>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 animate-slideInRight">
            {features.map((feature, index) => (
              <div
                key={feature.title}
                className={`glass-card rounded-2xl p-4 sm:p-6 luxury-hover bg-white/60 backdrop-blur-sm border border-white/40 animate-stagger-${index + 1}`}
              >
                <div className="w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br from-electric-blue to-mint-green rounded-xl flex items-center justify-center text-white mb-3 sm:mb-4 shadow-lg">
                  {feature.icon}
                </div>
                
                <h3 className="font-display font-bold text-lg sm:text-xl text-charcoal-gray mb-2 sm:mb-3">
                  {feature.title}
                </h3>
                
                <p className="text-sm sm:text-base text-gray-600 font-body leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Section - Value Proposition */}
        <div className="mt-16 sm:mt-24 text-center animate-stagger-5">
          <div className="glass-card rounded-3xl p-8 sm:p-12 bg-gradient-to-r from-charcoal-gray to-gray-800 text-white">
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-display font-bold mb-4 sm:mb-6 gradient-text">
              Why Choose TinDev Studios?
            </h3>
            
            <p className="text-lg sm:text-xl text-white/80 max-w-4xl mx-auto font-body leading-relaxed">
              We&rsquo;re not just building software&mdash;we&rsquo;re crafting solutions that integrate seamlessly into your daily workflow. 
              Every product is designed with one goal: to make your life more efficient, productive, and enjoyable. 
              <span className="text-mint-green font-semibold"> Experience the difference of tools built for real people, real needs.</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;