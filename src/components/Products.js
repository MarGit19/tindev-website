'use client';
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, ExternalLink, CheckCircle, Star, Zap } from 'lucide-react';
import { PRODUCTS } from '@/lib/constants';

const Products = () => {
  const [selectedProduct, setSelectedProduct] = useState(null);

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

  // Filter products by status
  const liveProducts = PRODUCTS.filter(p => p.status === 'live');
  const comingSoonProducts = PRODUCTS.filter(p => p.status === 'coming-soon');

  return (
    <section id="products" className="relative overflow-hidden py-16 sm:py-20 lg:py-24">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/20" />
        <motion.div
          animate={{
            opacity: [0.02, 0.06, 0.02],
          }}
          transition={{ duration: 15, repeat: Infinity }}
          className="absolute -top-40 left-1/4 w-96 h-96 bg-electric-blue/10 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            opacity: [0.02, 0.06, 0.02],
          }}
          transition={{ duration: 18, repeat: Infinity, delay: 0.5 }}
          className="absolute -bottom-40 right-1/4 w-96 h-96 bg-mint-green/10 rounded-full blur-3xl"
        />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-16 sm:mb-20"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 glass-card rounded-full border border-white/20 mb-6">
            <div className="w-2 h-2 bg-mint-green rounded-full animate-pulse" />
            <span className="text-white/80 text-xs sm:text-sm font-medium font-body">
              Our SaaS Products
            </span>
          </div>

          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight gradient-text mb-6 font-display">
            Powerful SaaS Solutions
            <br />
            <span className="text-white">Ready to Use</span>
          </h2>

          <p className="text-base sm:text-lg text-white/75 max-w-3xl mx-auto leading-relaxed font-body">
            From productivity tools to business intelligence, we've built SaaS products designed to solve real problems. Start free, upgrade when you're ready.
          </p>
        </motion.div>

        {/* Live Products */}
        <div className="mb-24 sm:mb-32">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <h3 className="text-2xl sm:text-3xl font-bold text-white mb-8 font-display flex items-center gap-2">
              <Zap className="w-6 h-6 text-mint-green" />
              Available Now
            </h3>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            {liveProducts.map((product) => (
              <motion.div
                key={product.id}
                variants={itemVariants}
                className="glass-card rounded-2xl overflow-hidden border border-white/10 hover:border-mint-green/30 transition-all duration-300 group h-full flex flex-col"
                whileHover={{ y: -5 }}
              >
                {/* Header with gradient */}
                <div className={`bg-gradient-to-r ${product.gradient} p-8 relative overflow-hidden`}>
                  <div className="absolute inset-0 opacity-20" />
                  <div className="relative z-10 space-y-3">
                    <h4 className="text-2xl sm:text-3xl font-bold text-white font-display">
                      {product.name}
                    </h4>
                    <p className="text-white/90 text-sm sm:text-base font-body">
                      {product.tagline}
                    </p>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 sm:p-8 flex-1 flex flex-col space-y-6">
                  {/* Description */}
                  <p className="text-white/70 text-sm sm:text-base leading-relaxed font-body">
                    {product.description}
                  </p>

                  {/* Category */}
                  <div>
                    <span className="text-xs font-semibold uppercase tracking-widest text-mint-green font-body">
                      {product.category}
                    </span>
                  </div>

                  {/* Key Features */}
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

                  {/* CTA Section */}
                  <div className="pt-4 mt-auto border-t border-white/10 space-y-3">
                    <motion.a
                      href={product.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full inline-flex btn-primary justify-center items-center gap-2 text-sm font-semibold"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      Try Free
                      <ArrowRight className="w-4 h-4" />
                    </motion.a>
                    <p className="text-white/50 text-xs text-center font-body">
                      No credit card required
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Coming Soon Products */}
        <div>
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <h3 className="text-2xl sm:text-3xl font-bold text-white mb-8 font-display flex items-center gap-2">
              <Star className="w-6 h-6 text-vivid-coral" />
              Coming Soon
            </h3>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            {comingSoonProducts.map((product) => (
              <motion.div
                key={product.id}
                variants={itemVariants}
                className="glass-card rounded-2xl overflow-hidden border border-white/10 hover:border-vivid-coral/30 transition-all duration-300 group h-full flex flex-col opacity-75 hover:opacity-100"
                whileHover={{ y: -5 }}
              >
                {/* Header with gradient */}
                <div className={`bg-gradient-to-r ${product.gradient} p-8 relative overflow-hidden`}>
                  <div className="absolute inset-0 opacity-20" />
                  <div className="relative z-10 space-y-3 flex items-start justify-between">
                    <div className="space-y-3 flex-1">
                      <h4 className="text-2xl sm:text-3xl font-bold text-white font-display">
                        {product.name}
                      </h4>
                      <p className="text-white/90 text-sm sm:text-base font-body">
                        {product.tagline}
                      </p>
                    </div>
                    <div className="bg-vivid-coral/20 border border-vivid-coral text-vivid-coral text-xs font-bold px-3 py-1.5 rounded-full whitespace-nowrap ml-4">
                      Coming Soon
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 sm:p-8 flex-1 flex flex-col space-y-6">
                  {/* Description */}
                  <p className="text-white/70 text-sm sm:text-base leading-relaxed font-body">
                    {product.description}
                  </p>

                  {/* Category */}
                  <div>
                    <span className="text-xs font-semibold uppercase tracking-widest text-vivid-coral font-body">
                      {product.category}
                    </span>
                  </div>

                  {/* Key Features */}
                  <div className="space-y-3">
                    <p className="text-white/60 text-xs font-semibold uppercase tracking-widest font-body">
                      Key Features
                    </p>
                    <div className="space-y-2">
                      {product.features.slice(0, 3).map((feature, idx) => (
                        <div key={idx} className="flex items-start gap-2">
                          <CheckCircle className="w-4 h-4 text-vivid-coral flex-shrink-0 mt-0.5" />
                          <span className="text-white/70 text-xs sm:text-sm font-body">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* CTA Section */}
                  <div className="pt-4 mt-auto border-t border-white/10 space-y-3">
                    <motion.button
                      className="w-full inline-flex btn-secondary justify-center items-center gap-2 text-sm font-semibold cursor-not-allowed opacity-75"
                      disabled
                    >
                      Coming Soon
                    </motion.button>
                    <p className="text-white/50 text-xs text-center font-body">
                      Be notified when available
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mt-20 sm:mt-24 pt-16 sm:pt-20 border-t border-white/10 text-center space-y-8"
        >
          <h3 className="text-3xl sm:text-4xl font-bold text-white font-display">
            Need a Custom Solution?
          </h3>
          <p className="text-white/70 text-base sm:text-lg font-body max-w-2xl mx-auto">
            Our SaaS products cover many use cases, but if you need something specific, we build custom applications tailored to your exact needs.
          </p>

          <motion.a
            href="#contact"
            className="inline-flex btn-primary gap-2 items-center text-sm sm:text-base px-8 py-4"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Discuss Your Project
            <ArrowRight className="w-5 h-5" />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default Products;