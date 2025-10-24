'use client';
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle, Star, Users, TrendingUp, Zap, Clock, Shield } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function ProductsPage() {
  const [hoveredProduct, setHoveredProduct] = useState(null);

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
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  // Products data
  const products = [
    {
      id: 1,
      name: 'AI Resume Builder',
      tagline: 'Create Professional Resumes in Minutes',
      icon: '📄',
      color: 'from-mint-green to-electric-blue',
      description: 'Powered by AI, create ATS-optimized resumes instantly. Get hired faster with smart suggestions and templates.',
      features: [
        'AI-powered content generation',
        'ATS-optimized formats',
        '50+ professional templates',
        'Real-time preview',
        'Cover letter builder',
        'LinkedIn integration',
      ],
      stats: [
        { label: 'Users', value: '50K+' },
        { label: 'Resumes Created', value: '500K+' },
        { label: 'Job Placements', value: '15K+' },
      ],
      pricing: '$9.99/month',
      cta: 'Start Building',
      highlights: ['Industry Leading', 'High Conversion', 'AI Powered'],
    },
    {
      id: 2,
      name: 'E-Commerce Platform',
      tagline: 'Launch Your Online Store Instantly',
      icon: '🛒',
      color: 'from-electric-blue to-slate-blue',
      description: 'All-in-one e-commerce solution with payments, inventory, and marketing tools. No coding required.',
      features: [
        'Drag-and-drop builder',
        'Integrated payment gateway',
        'Inventory management',
        'Multi-channel selling',
        'Marketing automation',
        'Analytics dashboard',
      ],
      stats: [
        { label: 'Stores Created', value: '5K+' },
        { label: 'Monthly Sales', value: '$50M+' },
        { label: 'Active Merchants', value: '3K+' },
      ],
      pricing: '$29.99/month',
      cta: 'Launch Store',
      highlights: ['No Code', 'Multi-Channel', 'Complete Suite'],
    },
    {
      id: 3,
      name: 'Project Management',
      tagline: 'Organize Teams & Deliver On Time',
      icon: '📊',
      color: 'from-slate-blue to-vivid-coral',
      description: 'Collaborative project management tool with tasks, timelines, and team communication.',
      features: [
        'Kanban boards',
        'Gantt charts',
        'Real-time collaboration',
        'Time tracking',
        'Resource allocation',
        'Milestone tracking',
      ],
      stats: [
        { label: 'Teams', value: '2K+' },
        { label: 'Projects', value: '50K+' },
        { label: 'Tasks Completed', value: '5M+' },
      ],
      pricing: '$19.99/month',
      cta: 'Organize Team',
      highlights: ['Team Collaboration', 'Real-time', 'Smart Planning'],
    },
    {
      id: 4,
      name: 'Real Estate Portal',
      tagline: 'Modern Property Listing Platform',
      icon: '🏠',
      color: 'from-vivid-coral to-mint-green',
      description: 'Complete real estate solution with listings, CRM, and lead management for agents and brokers.',
      features: [
        'Advanced search filters',
        'Virtual tours & 3D',
        'Lead management system',
        'Document signing',
        'Agent CRM',
        'Market analytics',
      ],
      stats: [
        { label: 'Listings', value: '100K+' },
        { label: 'Properties Sold', value: '$2B+' },
        { label: 'Active Agents', value: '1K+' },
      ],
      pricing: '$49.99/month',
      cta: 'List Property',
      highlights: ['Virtual Tours', 'Lead Management', 'Analytics'],
    },
    {
      id: 5,
      name: 'Analytics Dashboard',
      tagline: 'Visualize Your Data, Grow Your Business',
      icon: '📈',
      color: 'from-electric-blue to-mint-green',
      description: 'Powerful analytics platform with real-time insights, custom reports, and predictive analysis.',
      features: [
        'Real-time dashboards',
        'Custom reports',
        'Predictive analytics',
        'Data integration',
        'Team collaboration',
        'API access',
      ],
      stats: [
        { label: 'Data Points', value: '1B+' },
        { label: 'Daily Queries', value: '10M+' },
        { label: 'Connected Services', value: '200+' },
      ],
      pricing: '$39.99/month',
      cta: 'View Analytics',
      highlights: ['Real-time', 'Predictive', 'Integrations'],
    },
    {
      id: 6,
      name: 'Support Ticketing System',
      tagline: 'Manage Customer Support Efficiently',
      icon: '🎫',
      color: 'from-slate-blue to-electric-blue',
      description: 'Customer support platform with ticketing, knowledge base, and AI-powered responses.',
      features: [
        'Multi-channel support',
        'AI chatbot',
        'Knowledge base',
        'Ticket automation',
        'Performance metrics',
        'Customer satisfaction tracking',
      ],
      stats: [
        { label: 'Tickets Resolved', value: '10M+' },
        { label: 'Response Time', value: '<2 mins' },
        { label: 'Customer Satisfaction', value: '98%' },
      ],
      pricing: '$24.99/month',
      cta: 'Get Support',
      highlights: ['AI Powered', 'Multi-Channel', 'Automated'],
    },
  ];

  return (
    <main className="min-h-screen bg-black">
      <Header />

      {/* ===== HERO SECTION ===== */}
      <section className="relative min-h-screen flex items-center justify-center pt-24 pb-16 sm:pb-20">
        {/* Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-black to-blue-900">
          <motion.div
            animate={{ opacity: [0.03, 0.08, 0.03] }}
            transition={{ duration: 12, repeat: Infinity }}
            className="absolute top-20 left-20 w-80 h-80 bg-electric-blue/20 rounded-full blur-3xl"
          />
          <motion.div
            animate={{ opacity: [0.03, 0.08, 0.03] }}
            transition={{ duration: 14, repeat: Infinity, delay: 0.5 }}
            className="absolute bottom-20 right-20 w-96 h-96 bg-mint-green/20 rounded-full blur-3xl"
          />
        </div>

        {/* Content */}
        <motion.div
          className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 text-center space-y-8"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div variants={itemVariants}>
            <div className="inline-flex items-center gap-2 px-4 py-2 glass-card rounded-full border border-white/20 mb-6">
              <div className="w-2 h-2 bg-mint-green rounded-full animate-pulse" />
              <span className="text-white/80 text-xs sm:text-sm font-medium font-body">
                Our SaaS Products
              </span>
            </div>
          </motion.div>

          <motion.h1 
            variants={itemVariants}
            className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold leading-tight gradient-text font-display"
          >
            Powerful Tools
            <br />
            <span className="text-white">for Modern Businesses</span>
          </motion.h1>

          <motion.p 
            variants={itemVariants}
            className="text-lg sm:text-xl md:text-2xl text-white/75 max-w-3xl mx-auto leading-relaxed font-body"
          >
            6 production-ready SaaS products built with cutting-edge technology. Scale your business with confidence.
          </motion.p>

          <motion.a
            variants={itemVariants}
            href="#products"
            className="inline-flex btn-primary gap-2 items-center text-sm sm:text-base px-6 sm:px-8 py-3 sm:py-4"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Explore Products
            <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
          </motion.a>
        </motion.div>
      </section>

      {/* ===== PRODUCTS GRID ===== */}
      <section id="products" className="relative py-16 sm:py-20 lg:py-24 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            {products.map((product) => (
              <motion.div
                key={product.id}
                variants={itemVariants}
                className="group relative glass-card rounded-2xl overflow-hidden border border-white/10 hover:border-mint-green/30 transition-all h-full flex flex-col"
                whileHover={{ y: -10 }}
                onMouseEnter={() => setHoveredProduct(product.id)}
                onMouseLeave={() => setHoveredProduct(null)}
              >
                {/* Background gradient */}
                <div className={`absolute inset-0 opacity-0 group-hover:opacity-5 transition-opacity duration-300 bg-gradient-to-r ${product.color}`} />

                {/* Header with gradient */}
                <div className={`bg-gradient-to-r ${product.color} p-8 relative overflow-hidden`}>
                  <div className="absolute inset-0 opacity-10" />
                  <div className="relative z-10 space-y-3">
                    <div className="text-4xl">{product.icon}</div>
                    <h3 className="text-2xl font-bold text-white font-display">
                      {product.name}
                    </h3>
                    <p className="text-white/90 text-sm font-body">
                      {product.tagline}
                    </p>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 sm:p-8 flex-1 flex flex-col space-y-6">
                  {/* Description */}
                  <p className="text-white/70 text-base leading-relaxed font-body">
                    {product.description}
                  </p>

                  {/* Features */}
                  <div className="space-y-3">
                    <p className="text-white/60 text-xs font-semibold uppercase tracking-widest font-body">
                      Key Features
                    </p>
                    <div className="space-y-2">
                      {product.features.slice(0, 3).map((feature, idx) => (
                        <div key={idx} className="flex items-start gap-2">
                          <CheckCircle className="w-4 h-4 text-mint-green flex-shrink-0 mt-0.5" />
                          <span className="text-white/70 text-xs sm:text-sm font-body">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Highlights */}
                  <div className="flex flex-wrap gap-2">
                    {product.highlights.map((highlight, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 bg-white/5 border border-mint-green/20 rounded-full text-white/60 text-xs font-body"
                      >
                        {highlight}
                      </span>
                    ))}
                  </div>

                  {/* Stats */}
                  <div className="pt-4 border-t border-white/10 grid grid-cols-3 gap-3">
                    {product.stats.map((stat, idx) => (
                      <div key={idx} className="text-center">
                        <p className="text-mint-green text-sm font-bold font-display">{stat.value}</p>
                        <p className="text-white/50 text-xs font-body">{stat.label}</p>
                      </div>
                    ))}
                  </div>

                  {/* Pricing & CTA */}
                  <div className="pt-4 border-t border-white/10 space-y-3 mt-auto">
                    <div>
                      <p className="text-white/60 text-xs font-semibold uppercase tracking-widest font-body mb-1">Pricing</p>
                      <p className="text-white text-lg font-bold font-display">{product.pricing}</p>
                    </div>

                    <motion.a
                      href="/#contact"
                      className="block w-full btn-primary text-sm font-semibold py-3 text-center"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      {product.cta}
                      <ArrowRight className="w-4 h-4 inline-block ml-2" />
                    </motion.a>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ===== FEATURES COMPARISON ===== */}
      <section className="relative py-16 sm:py-20 lg:py-24 border-t border-white/10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4 font-display">
              Why Choose Our Products
            </h2>
            <p className="text-white/70 text-lg font-body max-w-2xl mx-auto">
              Built with enterprise-grade quality, security, and support
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            {[
              {
                icon: Shield,
                title: 'Enterprise Security',
                description: 'SOC 2 Type II certified with end-to-end encryption',
              },
              {
                icon: TrendingUp,
                title: 'Proven Scalability',
                description: 'Handle millions of transactions with 99.99% uptime',
              },
              {
                icon: Users,
                title: '24/7 Support',
                description: 'Dedicated support team available around the clock',
              },
              {
                icon: Zap,
                title: 'Lightning Fast',
                description: 'Sub-second response times and optimized performance',
              },
            ].map((feature, idx) => {
              const Icon = feature.icon;
              return (
                <motion.div
                  key={idx}
                  variants={itemVariants}
                  className="glass-card rounded-2xl p-6 border border-white/10 text-center space-y-4"
                  whileHover={{ y: -5 }}
                >
                  <Icon className="w-8 h-8 text-mint-green mx-auto" />
                  <h3 className="text-lg font-bold text-white font-display">{feature.title}</h3>
                  <p className="text-white/70 text-sm font-body">{feature.description}</p>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* ===== PRICING PLANS ===== */}
      <section className="relative py-16 sm:py-20 lg:py-24 border-t border-white/10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4 font-display">
              Flexible Pricing Plans
            </h2>
            <p className="text-white/70 text-lg font-body max-w-2xl mx-auto">
              Start free, upgrade when you scale. No credit card required.
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            {[
              {
                name: 'Starter',
                price: 'Free',
                description: 'Perfect to get started',
                features: [
                  'Up to 3 products',
                  'Basic features',
                  'Email support',
                  'Community access',
                ],
                cta: 'Get Started',
              },
              {
                name: 'Professional',
                price: '$99',
                period: '/month',
                description: 'For growing teams',
                features: [
                  'All 6 products',
                  'Advanced features',
                  'Priority support',
                  'Custom integrations',
                  'Analytics & reports',
                ],
                cta: 'Start Free Trial',
                highlighted: true,
              },
              {
                name: 'Enterprise',
                price: 'Custom',
                description: 'For large organizations',
                features: [
                  'Everything in Pro',
                  'Dedicated account manager',
                  'SLA guarantee',
                  'Custom deployment',
                  'Advanced security',
                ],
                cta: 'Contact Sales',
              },
            ].map((plan, idx) => (
              <motion.div
                key={idx}
                variants={itemVariants}
                className={`glass-card rounded-2xl p-8 border transition-all ${
                  plan.highlighted
                    ? 'border-mint-green/50 ring-2 ring-mint-green/20'
                    : 'border-white/10'
                }`}
                whileHover={{ y: -5 }}
              >
                {plan.highlighted && (
                  <div className="mb-4 inline-flex items-center gap-2 px-3 py-1 bg-mint-green/20 border border-mint-green/50 rounded-full">
                    <Star className="w-4 h-4 text-mint-green" />
                    <span className="text-mint-green text-xs font-semibold">Most Popular</span>
                  </div>
                )}

                <h3 className="text-2xl font-bold text-white mb-2 font-display">{plan.name}</h3>
                <div className="mb-4">
                  <span className="text-4xl font-bold text-white font-display">{plan.price}</span>
                  {plan.period && <span className="text-white/70 ml-2">{plan.period}</span>}
                </div>
                <p className="text-white/70 text-sm font-body mb-6">{plan.description}</p>

                <div className="space-y-3 mb-8">
                  {plan.features.map((feature, i) => (
                    <div key={i} className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-mint-green flex-shrink-0 mt-0.5" />
                      <span className="text-white/70 text-sm font-body">{feature}</span>
                    </div>
                  ))}
                </div>

                <motion.a
                  href="/#contact"
                  className={`w-full py-3 rounded-lg font-semibold text-sm text-center transition-all ${
                    plan.highlighted
                      ? 'btn-primary'
                      : 'btn-secondary'
                  }`}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  {plan.cta}
                </motion.a>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ===== CTA SECTION ===== */}
      <section className="relative py-16 sm:py-20 lg:py-24 border-t border-white/10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="glass-card rounded-3xl p-12 sm:p-16 bg-gradient-to-r from-electric-blue/5 via-transparent to-mint-green/5 border border-white/10 text-center space-y-8"
          >
            <h2 className="text-4xl sm:text-5xl font-bold text-white font-display">
              Ready to Transform Your Business?
            </h2>
            <p className="text-white/70 text-lg font-body max-w-2xl mx-auto">
              Join thousands of companies using our products. Start free, no credit card required.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.a
                href="/#contact"
                className="inline-flex btn-primary gap-2 items-center text-base px-8 py-4 justify-center"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Start Free Trial
                <ArrowRight className="w-5 h-5" />
              </motion.a>
              <motion.a
                href="/services"
                className="inline-flex btn-secondary gap-2 items-center text-base px-8 py-4 justify-center"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                View Services
                <ArrowRight className="w-5 h-5" />
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}