'use client';
import React from 'react';
import { ExternalLink, Clock, CheckCircle, ArrowRight, Brain, Calendar, MessageSquare, TrendingUp, Zap } from 'lucide-react';

const Products = () => {
  const products = [
    {
      title: 'AI Resume Web App',
      description: 'Create professional, ATS-friendly resumes with AI assistance. Streamlined interface for quick resume building and optimization.',
      status: 'completed',
      link: 'https://resume.tindevstudios.com',
      icon: <Brain className="w-8 h-8" />,
      gradient: 'from-mint-green to-electric-blue',
      features: ['AI-Powered Writing', 'ATS Optimization', 'Multiple Templates', 'Real-time Preview'],
      category: 'Productivity'
    },
    {
      title: 'Habit Tracker Lite',
      description: 'Track daily habits and goals with smart reminders and progress charts. Simple, effective habit building made easy.',
      status: 'upcoming',
      link: '#',
      icon: <Calendar className="w-8 h-8" />,
      gradient: 'from-slate-blue to-vivid-coral',
      features: ['Daily Tracking', 'Smart Reminders', 'Progress Charts', 'Goal Setting'],
      category: 'Wellness'
    },
    {
      title: 'Meeting & Note Summarizer',
      description: 'Paste your meeting notes, emails, or documents and get instant AI-generated summaries. Save time and stay organized.',
      status: 'upcoming',
      link: '#',
      icon: <MessageSquare className="w-8 h-8" />,
      gradient: 'from-electric-blue to-slate-blue',
      features: ['AI Summarization', 'Multiple Formats', 'Quick Processing', 'Export Options'],
      category: 'Productivity'
    },
    {
      title: 'AI Social Post Generator',
      description: 'Generate engaging social media captions and post ideas based on your topics or keywords. Never run out of content ideas.',
      status: 'upcoming',
      link: '#',
      icon: <TrendingUp className="w-8 h-8" />,
      gradient: 'from-vivid-coral to-mint-green',
      features: ['Content Ideas', 'Multiple Platforms', 'Trending Topics', 'Custom Tone'],
      category: 'Marketing'
    },
    {
      title: 'Skill Tracker Mini',
      description: 'Track your skills and course progress with AI-powered suggestions for improvement. Personal development made simple.',
      status: 'upcoming',
      link: '#',
      icon: <Zap className="w-8 h-8" />,
      gradient: 'from-slate-blue to-electric-blue',
      features: ['Skill Assessment', 'Progress Tracking', 'AI Recommendations', 'Learning Path'],
      category: 'Education'
    }
  ];

  return (
    <section id="products" className="py-24 relative overflow-hidden">
      {/* Dark Premium Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-charcoal-gray via-gray-900 to-black">
        {/* Animated Orbs */}
        <div className="absolute top-40 left-20 w-96 h-96 bg-electric-blue/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-40 right-20 w-80 h-80 bg-mint-green/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 w-72 h-72 bg-slate-blue/10 rounded-full blur-3xl animate-pulse delay-2000 transform -translate-x-1/2 -translate-y-1/2"></div>
        
        {/* Grid Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="w-full h-full" style={{
            backgroundImage: `
              linear-gradient(rgba(46, 224, 172, 0.3) 1px, transparent 1px),
              linear-gradient(90deg, rgba(46, 224, 172, 0.3) 1px, transparent 1px)
            `,
            backgroundSize: '80px 80px'
          }}></div>
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-20 animate-section-title">
          <h2 className="text-title text-white mb-6">
            Powerful Tools for
            <br />
            <span className="gradient-text-vibrant">Modern Life</span>
          </h2>
          
          <p className="text-subtitle text-white/70 max-w-4xl mx-auto font-body">
            Discover our suite of practical software solutions designed to enhance productivity, 
            streamline workflows, and simplify your daily tasks.
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <div
              key={product.title}
              className={`group animate-stagger-${Math.min(index + 1, 5)}`}
            >
              <div className="glass-card rounded-3xl p-8 luxury-hover h-full flex flex-col relative overflow-hidden animate-card-hover transition-all duration-300">
                {/* Gradient Border Animation */}
                <div className="absolute inset-0 bg-gradient-to-r opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl p-[1px]">
                  <div className={`absolute inset-[1px] bg-gray-900/90 rounded-3xl bg-gradient-to-br ${product.gradient} opacity-10`}></div>
                </div>

                {/* Content */}
                <div className="relative z-10 flex-1 flex flex-col">
                  {/* Header */}
                  <div className="flex items-start justify-between mb-6">
                    {/* Icon & Category */}
                    <div>
                      <div className={`w-16 h-16 bg-gradient-to-br ${product.gradient} rounded-2xl flex items-center justify-center text-white mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                        {product.icon}
                      </div>
                      <span className="text-xs font-medium text-white/50 uppercase tracking-wider font-body">
                        {product.category}
                      </span>
                    </div>

                    {/* Status Badge */}
                    <div className="flex items-center gap-2">
                      {product.status === 'completed' ? (
                        <>
                          <CheckCircle className="w-5 h-5 text-mint-green" />
                          <span className="bg-gradient-to-r from-mint-green to-electric-blue text-white px-3 py-1 rounded-full text-sm font-semibold">
                            Live
                          </span>
                        </>
                      ) : (
                        <>
                          <Clock className="w-5 h-5 text-vivid-coral" />
                          <span className="bg-gradient-to-r from-vivid-coral to-slate-blue text-white px-3 py-1 rounded-full text-sm font-semibold">
                            Soon
                          </span>
                        </>
                      )}
                    </div>
                  </div>

                  {/* Product Info */}
                  <h3 className="text-2xl font-display font-bold text-white mb-4 group-hover:text-mint-green transition-colors duration-300">
                    {product.title}
                  </h3>
                  
                  <p className="text-white/70 mb-6 leading-relaxed font-body flex-1">
                    {product.description}
                  </p>

                  {/* Features */}
                  <div className="space-y-3 mb-8">
                    {product.features.map((feature, i) => (
                      <div key={i} className="flex items-center gap-3">
                        <div className={`w-2 h-2 bg-gradient-to-r ${product.gradient} rounded-full`}></div>
                        <span className="text-sm text-white/60 font-body">{feature}</span>
                      </div>
                    ))}
                  </div>

                  {/* Action Button */}
                  <button 
                    className={`btn-${product.status === 'completed' ? 'accent' : 'secondary'} w-full group transition-all duration-300 hover:scale-105 active:scale-95`}
                    onClick={() => {
                      if (product.status === 'completed' && product.link !== '#') {
                        window.open(product.link, '_blank');
                      }
                    }}
                  >
                    <span>{product.status === 'completed' ? 'Launch App' : 'Get Notified'}</span>
                    <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                  </button>
                </div>

                {/* Hover Glow Effect */}
                <div className={`absolute inset-0 bg-gradient-to-br ${product.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500 rounded-3xl pointer-events-none`}></div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA Section */}
        <div className="mt-20 text-center animate-stagger-5">
          <div className="glass-card rounded-3xl p-12 bg-gradient-to-r from-electric-blue/10 to-mint-green/10">
            <h3 className="text-3xl md:text-4xl font-display font-bold mb-6 text-white">
              Ready to Transform Your Workflow?
            </h3>
            
            <p className="text-xl text-white/70 max-w-3xl mx-auto mb-8 font-body">
              Join thousands of users who have already discovered the power of our tools. 
              Start with our AI Resume Builder and experience the difference.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                className="btn-primary btn-lg hover:scale-105 active:scale-95 transition-transform duration-200"
                onClick={() => window.open('https://resume.tindevstudios.com', '_blank')}
              >
                <span>Start Building Your Resume</span>
                <ArrowRight className="w-5 h-5" />
              </button>
              
              <button 
                className="btn-secondary btn-lg hover:scale-105 active:scale-95 transition-transform duration-200"
                onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
              >
                Contact Us
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Products;