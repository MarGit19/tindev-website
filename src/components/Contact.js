'use client';
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Mail, Phone, Send, CheckCircle } from 'lucide-react';
import emailjs from '@emailjs/browser';
import { SITE_CONFIG } from '@/lib/constants';

const Contact = () => {
  const [activeTab, setActiveTab] = useState('consultation');
  const [consultationForm, setConsultationForm] = useState({
    name: '',
    email: '',
    company: '',
    projectType: '',
    budget: '',
    timeline: '',
    message: '',
  });
  const [trialForm, setTrialForm] = useState({
    name: '',
    email: '',
    product: 'resume-builder',
    company: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  // EmailJS Configuration from environment variables
  const EMAILJS_CONFIG = {
    publicKey: process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY,
    serviceId: process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
    templateId: process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID
  };

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

  // Handle consultation form
  const handleConsultationSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    // Validate form
    if (!consultationForm.name || !consultationForm.email || !consultationForm.projectType || !consultationForm.message) {
      setError('Please fill in all required fields');
      setLoading(false);
      return;
    }

    // Check if environment variables are loaded
    if (!EMAILJS_CONFIG.publicKey || !EMAILJS_CONFIG.serviceId || !EMAILJS_CONFIG.templateId) {
      setError('Email service configuration is missing. Please check environment variables.');
      setLoading(false);
      return;
    }

    try {
      // Initialize EmailJS
      emailjs.init(EMAILJS_CONFIG.publicKey);

      // Email template parameters - ALL FIELDS MUST BE INCLUDED
      const templateParams = {
        from_name: consultationForm.name,
        from_email: consultationForm.email,
        company: consultationForm.company || 'Not specified',
        inquiry_type: 'consultation',
        project_type: consultationForm.projectType || 'Not specified',
        budget: consultationForm.budget || 'Not specified',
        timeline: consultationForm.timeline || 'Not specified',
        message: consultationForm.message,
        product: 'N/A',
        reply_to: consultationForm.email,
        timestamp: new Date().toLocaleString()
      };

      console.log('Sending email with params:', templateParams);

      // Send email
      const result = await emailjs.send(
        EMAILJS_CONFIG.serviceId,
        EMAILJS_CONFIG.templateId,
        templateParams
      );

      console.log('Email sent successfully:', result);

      // Success state
      setSubmitted('consultation');
      setConsultationForm({
        name: '',
        email: '',
        company: '',
        projectType: '',
        budget: '',
        timeline: '',
        message: '',
      });
      setLoading(false);

      // Hide success message after 5 seconds
      setTimeout(() => setSubmitted(null), 5000);

    } catch (err) {
      console.error('Email send failed:', err);
      setError('Failed to send message. Please try again or email us directly at ' + SITE_CONFIG.email);
      setLoading(false);
    }
  };

  // Handle trial form
  const handleTrialSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    // Validate form
    if (!trialForm.name || !trialForm.email) {
      setError('Please fill in all required fields');
      setLoading(false);
      return;
    }

    // Check if environment variables are loaded
    if (!EMAILJS_CONFIG.publicKey || !EMAILJS_CONFIG.serviceId || !EMAILJS_CONFIG.templateId) {
      setError('Email service configuration is missing. Please check environment variables.');
      setLoading(false);
      return;
    }

    try {
      // Initialize EmailJS
      emailjs.init(EMAILJS_CONFIG.publicKey);

      // Email template parameters - ALL FIELDS MUST BE INCLUDED
      const templateParams = {
        from_name: trialForm.name,
        from_email: trialForm.email,
        company: trialForm.company || 'Not specified',
        inquiry_type: 'trial',
        project_type: 'N/A',
        budget: 'N/A',
        timeline: 'N/A',
        message: trialForm.message || 'No additional info provided',
        product: trialForm.product || 'resume-builder',
        reply_to: trialForm.email,
        timestamp: new Date().toLocaleString()
      };

      console.log('Sending email with params:', templateParams);

      // Send email
      const result = await emailjs.send(
        EMAILJS_CONFIG.serviceId,
        EMAILJS_CONFIG.templateId,
        templateParams
      );

      console.log('Email sent successfully:', result);

      // Success state
      setSubmitted('trial');
      setTrialForm({
        name: '',
        email: '',
        product: 'resume-builder',
        company: '',
        message: '',
      });
      setLoading(false);

      // Hide success message after 5 seconds
      setTimeout(() => setSubmitted(null), 5000);

    } catch (err) {
      console.error('Email send failed:', err);
      setError('Failed to send message. Please try again or email us directly at ' + SITE_CONFIG.email);
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="relative overflow-hidden py-16 sm:py-20 lg:py-24">
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
              Get In Touch
            </span>
          </div>

          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight gradient-text mb-6 font-display">
            Let's Work Together
          </h2>

          <p className="text-base sm:text-lg text-white/75 max-w-3xl mx-auto leading-relaxed font-body">
            Have a project in mind? Want to try one of our SaaS products? Get in touch with our team.
          </p>
        </motion.div>

        {/* Main Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 sm:gap-12">
          {/* Left - Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            {/* Direct Contact */}
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-white font-display">
                Contact Info
              </h3>

              <div className="space-y-4">
                {/* Email */}
                <motion.a
                  href={`mailto:${SITE_CONFIG.email}`}
                  className="flex items-start gap-4 group"
                  whileHover={{ x: 5 }}
                >
                  <div className="w-12 h-12 rounded-lg bg-mint-green/20 border border-mint-green/50 flex items-center justify-center flex-shrink-0 group-hover:bg-mint-green/30 transition-all">
                    <Mail className="w-6 h-6 text-mint-green" />
                  </div>
                  <div className="flex-1">
                    <p className="text-white/60 text-xs font-semibold uppercase tracking-wide font-body">Email</p>
                    <p className="text-white text-sm sm:text-base font-body break-all hover:text-mint-green transition-colors">
                      {SITE_CONFIG.email}
                    </p>
                  </div>
                </motion.a>

                {/* Enterprise Email */}
                {SITE_CONFIG.enterpriseEmail && (
                  <motion.a
                    href={`mailto:${SITE_CONFIG.enterpriseEmail}`}
                    className="flex items-start gap-4 group"
                    whileHover={{ x: 5 }}
                  >
                    <div className="w-12 h-12 rounded-lg bg-electric-blue/20 border border-electric-blue/50 flex items-center justify-center flex-shrink-0 group-hover:bg-electric-blue/30 transition-all">
                      <Mail className="w-6 h-6 text-electric-blue" />
                    </div>
                    <div className="flex-1">
                      <p className="text-white/60 text-xs font-semibold uppercase tracking-wide font-body">Enterprise</p>
                      <p className="text-white text-sm sm:text-base font-body break-all hover:text-electric-blue transition-colors">
                        {SITE_CONFIG.enterpriseEmail}
                      </p>
                    </div>
                  </motion.a>
                )}

                {/* Phone */}
                {SITE_CONFIG.phone && SITE_CONFIG.phone !== '+1 (XXX) XXX-XXXX' && (
                  <motion.a
                    href={`tel:${SITE_CONFIG.phone}`}
                    className="flex items-start gap-4 group"
                    whileHover={{ x: 5 }}
                  >
                    <div className="w-12 h-12 rounded-lg bg-slate-blue/20 border border-slate-blue/50 flex items-center justify-center flex-shrink-0 group-hover:bg-slate-blue/30 transition-all">
                      <Phone className="w-6 h-6 text-slate-blue" />
                    </div>
                    <div className="flex-1">
                      <p className="text-white/60 text-xs font-semibold uppercase tracking-wide font-body">Phone</p>
                      <p className="text-white text-sm sm:text-base font-body hover:text-slate-blue transition-colors">
                        {SITE_CONFIG.phone}
                      </p>
                    </div>
                  </motion.a>
                )}
              </div>
            </div>

            {/* Business Hours / Info */}
            <div className="glass-card rounded-2xl p-6 border border-white/10 space-y-4">
              <h4 className="font-display font-bold text-white">Quick Facts</h4>
              <ul className="space-y-3">
                <li className="flex items-start gap-2 text-white/70 text-sm font-body">
                  <span className="w-1.5 h-1.5 rounded-full bg-mint-green mt-2 flex-shrink-0" />
                  Response time: Within 24 hours
                </li>
                <li className="flex items-start gap-2 text-white/70 text-sm font-body">
                  <span className="w-1.5 h-1.5 rounded-full bg-electric-blue mt-2 flex-shrink-0" />
                  Available for projects worldwide
                </li>
                <li className="flex items-start gap-2 text-white/70 text-sm font-body">
                  <span className="w-1.5 h-1.5 rounded-full bg-slate-blue mt-2 flex-shrink-0" />
                  Flexible engagement models
                </li>
              </ul>
            </div>
          </motion.div>

          {/* Right - Forms */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="lg:col-span-2"
          >
            {/* Tabs */}
            <div className="flex gap-4 mb-8 border-b border-white/10">
              <button
                onClick={() => {
                  setActiveTab('consultation');
                  setError('');
                }}
                className={`px-4 py-3 font-semibold text-sm font-body transition-all border-b-2 ${
                  activeTab === 'consultation'
                    ? 'text-mint-green border-mint-green'
                    : 'text-white/60 border-transparent hover:text-white/80'
                }`}
              >
                Custom Project
              </button>
              <button
                onClick={() => {
                  setActiveTab('trial');
                  setError('');
                }}
                className={`px-4 py-3 font-semibold text-sm font-body transition-all border-b-2 ${
                  activeTab === 'trial'
                    ? 'text-electric-blue border-electric-blue'
                    : 'text-white/60 border-transparent hover:text-white/80'
                }`}
              >
                Try SaaS Product
              </button>
            </div>

            {/* Consultation Form */}
            {activeTab === 'consultation' && (
              <motion.form
                onSubmit={handleConsultationSubmit}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
                className="space-y-5"
              >
                {/* Error Message */}
                {error && (
                  <div className="bg-vivid-coral/20 border border-vivid-coral/30 rounded-lg p-3 sm:p-4">
                    <p className="text-vivid-coral font-body text-sm sm:text-base">{error}</p>
                  </div>
                )}

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  {/* Name */}
                  <div className="space-y-2">
                    <label className="text-white text-sm font-semibold font-body">Name *</label>
                    <input
                      type="text"
                      value={consultationForm.name}
                      onChange={(e) => {
                        setConsultationForm({ ...consultationForm, name: e.target.value });
                        setError('');
                      }}
                      required
                      className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-white/50 focus:outline-none focus:ring-1 focus:ring-mint-green/50 focus:border-mint-green/50 transition-all font-body text-sm"
                      placeholder="Your name"
                    />
                  </div>

                  {/* Email */}
                  <div className="space-y-2">
                    <label className="text-white text-sm font-semibold font-body">Email *</label>
                    <input
                      type="email"
                      value={consultationForm.email}
                      onChange={(e) => {
                        setConsultationForm({ ...consultationForm, email: e.target.value });
                        setError('');
                      }}
                      required
                      className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-white/50 focus:outline-none focus:ring-1 focus:ring-mint-green/50 focus:border-mint-green/50 transition-all font-body text-sm"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  {/* Company */}
                  <div className="space-y-2">
                    <label className="text-white text-sm font-semibold font-body">Company</label>
                    <input
                      type="text"
                      value={consultationForm.company}
                      onChange={(e) => setConsultationForm({ ...consultationForm, company: e.target.value })}
                      className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-white/50 focus:outline-none focus:ring-1 focus:ring-mint-green/50 focus:border-mint-green/50 transition-all font-body text-sm"
                      placeholder="Your company"
                    />
                  </div>

                  {/* Project Type */}
                  <div className="space-y-2">
                    <label className="text-white text-sm font-semibold font-body">Project Type *</label>
                    <select
                      value={consultationForm.projectType}
                      onChange={(e) => {
                        setConsultationForm({ ...consultationForm, projectType: e.target.value });
                        setError('');
                      }}
                      required
                      className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-1 focus:ring-mint-green/50 focus:border-mint-green/50 transition-all font-body text-sm"
                    >
                      <option value="" className="bg-gray-900">Select project type...</option>
                      <option value="web-app" className="bg-gray-900">Web Application</option>
                      <option value="mobile-app" className="bg-gray-900">Mobile App</option>
                      <option value="api" className="bg-gray-900">API & Backend</option>
                      <option value="saas" className="bg-gray-900">SaaS Platform</option>
                      <option value="integration" className="bg-gray-900">Third-party Integration</option>
                      <option value="consulting" className="bg-gray-900">Consulting</option>
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  {/* Budget */}
                  <div className="space-y-2">
                    <label className="text-white text-sm font-semibold font-body">Budget Range</label>
                    <select
                      value={consultationForm.budget}
                      onChange={(e) => setConsultationForm({ ...consultationForm, budget: e.target.value })}
                      className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-1 focus:ring-mint-green/50 focus:border-mint-green/50 transition-all font-body text-sm"
                    >
                      <option value="" className="bg-gray-900">Select budget...</option>
                      <option value="under-10k" className="bg-gray-900">Under $10k</option>
                      <option value="10k-50k" className="bg-gray-900">$10k - $50k</option>
                      <option value="50k-100k" className="bg-gray-900">$50k - $100k</option>
                      <option value="100k-250k" className="bg-gray-900">$100k - $250k</option>
                      <option value="250k+" className="bg-gray-900">$250k+</option>
                    </select>
                  </div>

                  {/* Timeline */}
                  <div className="space-y-2">
                    <label className="text-white text-sm font-semibold font-body">Timeline</label>
                    <select
                      value={consultationForm.timeline}
                      onChange={(e) => setConsultationForm({ ...consultationForm, timeline: e.target.value })}
                      className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-1 focus:ring-mint-green/50 focus:border-mint-green/50 transition-all font-body text-sm"
                    >
                      <option value="" className="bg-gray-900">Select timeline...</option>
                      <option value="asap" className="bg-gray-900">ASAP (1-2 months)</option>
                      <option value="3-months" className="bg-gray-900">3 months</option>
                      <option value="6-months" className="bg-gray-900">6 months</option>
                      <option value="flexible" className="bg-gray-900">Flexible</option>
                    </select>
                  </div>
                </div>

                {/* Message */}
                <div className="space-y-2">
                  <label className="text-white text-sm font-semibold font-body">Tell us about your project *</label>
                  <textarea
                    value={consultationForm.message}
                    onChange={(e) => {
                      setConsultationForm({ ...consultationForm, message: e.target.value });
                      setError('');
                    }}
                    required
                    rows="5"
                    className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-white/50 focus:outline-none focus:ring-1 focus:ring-mint-green/50 focus:border-mint-green/50 transition-all font-body text-sm resize-none"
                    placeholder="Describe your project, goals, and any specific requirements..."
                  />
                </div>

                {/* Submit */}
                <motion.button
                  type="submit"
                  disabled={loading}
                  className="w-full btn-primary text-base font-semibold py-4 flex items-center justify-center gap-2 disabled:opacity-75 disabled:cursor-not-allowed"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  {loading ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                      <span>Sending...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      <span>Send Consultation Request</span>
                    </>
                  )}
                </motion.button>

                {submitted === 'consultation' && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="p-4 bg-mint-green/20 border border-mint-green/50 rounded-lg flex items-center gap-3"
                  >
                    <CheckCircle className="w-5 h-5 text-mint-green flex-shrink-0" />
                    <p className="text-mint-green text-sm font-body">
                      Thank you! We'll be in touch within 24 hours.
                    </p>
                  </motion.div>
                )}
              </motion.form>
            )}

            {/* Trial Form */}
            {activeTab === 'trial' && (
              <motion.form
                onSubmit={handleTrialSubmit}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
                className="space-y-5"
              >
                {/* Error Message */}
                {error && (
                  <div className="bg-vivid-coral/20 border border-vivid-coral/30 rounded-lg p-3 sm:p-4">
                    <p className="text-vivid-coral font-body text-sm sm:text-base">{error}</p>
                  </div>
                )}

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  {/* Name */}
                  <div className="space-y-2">
                    <label className="text-white text-sm font-semibold font-body">Name *</label>
                    <input
                      type="text"
                      value={trialForm.name}
                      onChange={(e) => {
                        setTrialForm({ ...trialForm, name: e.target.value });
                        setError('');
                      }}
                      required
                      className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-white/50 focus:outline-none focus:ring-1 focus:ring-electric-blue/50 focus:border-electric-blue/50 transition-all font-body text-sm"
                      placeholder="Your name"
                    />
                  </div>

                  {/* Email */}
                  <div className="space-y-2">
                    <label className="text-white text-sm font-semibold font-body">Email *</label>
                    <input
                      type="email"
                      value={trialForm.email}
                      onChange={(e) => {
                        setTrialForm({ ...trialForm, email: e.target.value });
                        setError('');
                      }}
                      required
                      className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-white/50 focus:outline-none focus:ring-1 focus:ring-electric-blue/50 focus:border-electric-blue/50 transition-all font-body text-sm"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  {/* Product */}
                  <div className="space-y-2">
                    <label className="text-white text-sm font-semibold font-body">Product *</label>
                    <select
                      value={trialForm.product}
                      onChange={(e) => {
                        setTrialForm({ ...trialForm, product: e.target.value });
                        setError('');
                      }}
                      className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-1 focus:ring-electric-blue/50 focus:border-electric-blue/50 transition-all font-body text-sm"
                    >
                      <option value="resume-builder" className="bg-gray-900">AI Resume Builder</option>
                    </select>
                  </div>

                  {/* Company */}
                  <div className="space-y-2">
                    <label className="text-white text-sm font-semibold font-body">Company</label>
                    <input
                      type="text"
                      value={trialForm.company}
                      onChange={(e) => setTrialForm({ ...trialForm, company: e.target.value })}
                      className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-white/50 focus:outline-none focus:ring-1 focus:ring-electric-blue/50 focus:border-electric-blue/50 transition-all font-body text-sm"
                      placeholder="Your company"
                    />
                  </div>
                </div>

                {/* Message */}
                <div className="space-y-2">
                  <label className="text-white text-sm font-semibold font-body">Additional Info</label>
                  <textarea
                    value={trialForm.message}
                    onChange={(e) => setTrialForm({ ...trialForm, message: e.target.value })}
                    rows="5"
                    className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-white/50 focus:outline-none focus:ring-1 focus:ring-electric-blue/50 focus:border-electric-blue/50 transition-all font-body text-sm resize-none"
                    placeholder="Tell us how you plan to use this product..."
                  />
                </div>

                {/* Submit */}
                <motion.button
                  type="submit"
                  disabled={loading}
                  className="w-full btn-primary text-base font-semibold py-4 flex items-center justify-center gap-2 disabled:opacity-75 disabled:cursor-not-allowed"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  {loading ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                      <span>Sending...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      <span>Start Free Trial</span>
                    </>
                  )}
                </motion.button>

                {submitted === 'trial' && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="p-4 bg-electric-blue/20 border border-electric-blue/50 rounded-lg flex items-center gap-3"
                  >
                    <CheckCircle className="w-5 h-5 text-electric-blue flex-shrink-0" />
                    <p className="text-electric-blue text-sm font-body">
                      Great! Check your email for trial access details.
                    </p>
                  </motion.div>
                )}
              </motion.form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;