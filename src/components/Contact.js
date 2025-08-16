'use client';
import React, { useState } from 'react';
import { Mail, Send, CheckCircle, ArrowRight, Sparkles, HeadphonesIcon } from 'lucide-react';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    inquiryType: 'general',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  // EmailJS Configuration from environment variables
  const EMAILJS_CONFIG = {
    publicKey: process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY,
    serviceId: process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
    templateId: process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
    setError('');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');

    // Check if environment variables are loaded
    if (!EMAILJS_CONFIG.publicKey || !EMAILJS_CONFIG.serviceId || !EMAILJS_CONFIG.templateId) {
      setError('Email service configuration is missing. Please check environment variables.');
      setIsLoading(false);
      return;
    }

    try {
      // Initialize EmailJS
      emailjs.init(EMAILJS_CONFIG.publicKey);

      // Email template parameters
      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        company: formData.company || 'Not specified',
        inquiry_type: formData.inquiryType,
        message: formData.message,
        reply_to: formData.email,
        timestamp: new Date().toLocaleString()
      };

      // Send email
      const result = await emailjs.send(
        EMAILJS_CONFIG.serviceId,
        EMAILJS_CONFIG.templateId,
        templateParams
      );

      console.log('Email sent successfully:', result);
      
      // Success state
      setIsSubmitted(true);
      setIsLoading(false);
      
      // Reset form
      setFormData({ 
        name: '', 
        email: '', 
        company: '', 
        inquiryType: 'general', 
        message: '' 
      });
      
      // Hide success message after 5 seconds
      setTimeout(() => setIsSubmitted(false), 5000);

    } catch (error) {
      console.error('Email send failed:', error);
      setError('Failed to send message. Please try again or email us directly at support@tindevstudios.com');
      setIsLoading(false);
    }
  };

  const contactMethods = [
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Email Support",
      description: "Get technical help and answers",
      contact: "support@tindevstudios.com",
      link: "mailto:support@tindevstudios.com",
      gradient: "from-electric-blue to-mint-green"
    },
    {
      icon: <HeadphonesIcon className="w-6 h-6" />,
      title: "Enterprise Solutions",
      description: "Custom integrations and priority support",
      contact: "enterprise@tindevstudios.com",
      link: "mailto:enterprise@tindevstudios.com",
      gradient: "from-slate-blue to-vivid-coral"
    }
  ];

  const inquiryTypes = [
    { value: 'general', label: 'General Inquiry' },
    { value: 'product', label: 'Product Question' },
    { value: 'enterprise', label: 'Enterprise Support' },
    { value: 'partnership', label: 'Partnership Opportunity' },
    { value: 'technical', label: 'Technical Support' }
  ];

  const getSuccessMessage = () => {
    switch (formData.inquiryType) {
      case 'enterprise':
        return {
          title: "Enterprise Inquiry Received!",
          message: "Thank you for your enterprise inquiry. Our business team will prioritize your request and contact you within 12 hours to discuss custom solutions, pricing, and implementation."
        };
      case 'partnership':
        return {
          title: "Partnership Inquiry Received!",
          message: "We're excited about potential collaboration opportunities. Our partnerships team will review your proposal and get back to you within 24 hours."
        };
      case 'technical':
        return {
          title: "Technical Support Request Received!",
          message: "Our technical support team has received your request. We'll investigate the issue and provide a solution within 24 hours."
        };
      default:
        return {
          title: "Message Sent Successfully!",
          message: "Thank you for reaching out. Our team will review your message and get back to you soon."
        };
    }
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      {/* Premium Dark Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-charcoal-gray via-black to-gray-900">
        {/* Animated Background Elements */}
        <div className="absolute top-20 left-20 w-96 h-96 bg-electric-blue/8 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-mint-green/8 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 w-72 h-72 bg-vivid-coral/8 rounded-full blur-3xl animate-pulse delay-2000 transform -translate-x-1/2 -translate-y-1/2"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16 animate-section-title">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-vivid-coral/20 to-mint-green/20 border border-vivid-coral/30 rounded-full px-6 py-3 mb-8 animate-scaleIn">
            <Sparkles className="w-5 h-5 text-vivid-coral" />
            <span className="text-white/90 font-medium font-body">Get In Touch</span>
          </div>

          <h2 className="text-title text-white mb-6">
            Ready to Transform
            <br />
            <span className="gradient-text-vibrant">Your Workflow?</span>
          </h2>
          
          <p className="text-subtitle text-white/70 max-w-4xl mx-auto font-body">
            Connect with our team to learn how our tools can streamline your processes, 
            boost productivity, and help you achieve your goals faster.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          
          {/* Support Options & Info */}
          <div className="space-y-8 animate-slideInLeft">
            {/* Contact Methods Grid */}
            <div className="space-y-6">
              {contactMethods.map((method, index) => (
                <a
                  key={method.title}
                  href={method.link}
                  className={`glass-card rounded-2xl p-6 luxury-hover group block animate-stagger-${index + 1} transition-all duration-300 hover:scale-105`}
                >
                  <div className="flex items-start gap-4">
                    <div className={`w-14 h-14 bg-gradient-to-br ${method.gradient} rounded-xl flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                      {method.icon}
                    </div>
                    <div className="flex-1">
                      <h3 className="font-display font-bold text-xl text-white mb-2 group-hover:text-mint-green transition-colors">
                        {method.title}
                      </h3>
                      <p className="text-white/60 font-body mb-2">
                        {method.description}
                      </p>
                      <div className="flex items-center gap-2">
                        <span className="text-mint-green font-semibold font-body">
                          {method.contact}
                        </span>
                        <ArrowRight className="w-4 h-4 text-mint-green opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:translate-x-1" />
                      </div>
                    </div>
                  </div>
                </a>
              ))}
            </div>

            {/* Company Info Card */}
            <div className="glass-card rounded-2xl p-8 bg-gradient-to-br from-electric-blue/10 to-mint-green/10 animate-stagger-3">
              <h3 className="font-display font-bold text-2xl text-white mb-6">
                Why Choose TinDev Studios?
              </h3>
              <ul className="space-y-4 text-white/70 font-body">
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-mint-green rounded-full mt-2 flex-shrink-0"></div>
                  <span>Instant access to all tools - no downloads or installations required</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-electric-blue rounded-full mt-2 flex-shrink-0"></div>
                  <span>Enterprise-grade security with 99.9% uptime reliability</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-vivid-coral rounded-full mt-2 flex-shrink-0"></div>
                  <span>Dedicated customer support and continuous product updates</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-slate-blue rounded-full mt-2 flex-shrink-0"></div>
                  <span>Built by developers who understand real-world business needs</span>
                </li>
              </ul>

              <div className="mt-8 pt-6 border-t border-white/10">
                <button 
                  className="btn-secondary w-full group transition-all duration-300 hover:scale-105"
                  onClick={() => document.getElementById('products').scrollIntoView({ behavior: 'smooth' })}
                >
                  <span>Explore Our Products</span>
                  <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                </button>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="glass-card rounded-3xl p-8 relative overflow-hidden animate-slideInRight">
            {/* Form Header */}
            <div className="mb-8 text-center">
              <h3 className="font-display font-bold text-2xl text-white mb-2">
                Start the Conversation
              </h3>
              <p className="text-white/60 font-body">
                Tell us about your needs and we&rsquo;ll get back to you within 24 hours
              </p>
            </div>
            
            {isSubmitted ? (
              <div className="text-center py-12 animate-scaleIn">
                <div className="w-20 h-20 bg-gradient-to-r from-mint-green to-electric-blue rounded-full flex items-center justify-center mx-auto mb-6">
                  <CheckCircle className="w-10 h-10 text-white" />
                </div>
                <h4 className="text-2xl font-display font-bold text-mint-green mb-4">
                  {getSuccessMessage().title}
                </h4>
                <p className="text-white/70 font-body leading-relaxed">
                  {getSuccessMessage().message}
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Error Message */}
                {error && (
                  <div className="bg-vivid-coral/20 border border-vivid-coral/30 rounded-xl p-4 animate-fadeIn">
                    <p className="text-vivid-coral font-body">{error}</p>
                  </div>
                )}

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-white/80 mb-3 font-body">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-4 rounded-xl glass-card text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-mint-green/50 focus:border-mint-green/50 transition-all duration-300 font-body"
                      placeholder="Your full name"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-white/80 mb-3 font-body">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-4 rounded-xl glass-card text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-mint-green/50 focus:border-mint-green/50 transition-all duration-300 font-body"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-white/80 mb-3 font-body">
                    Company {formData.inquiryType === 'enterprise' ? '*' : '(Optional)'}
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    required={formData.inquiryType === 'enterprise'}
                    className="w-full px-4 py-4 rounded-xl glass-card text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-mint-green/50 focus:border-mint-green/50 transition-all duration-300 font-body"
                    placeholder="Your company name"
                  />
                </div>

                <div>
                  <label htmlFor="inquiryType" className="block text-sm font-medium text-white/80 mb-3 font-body">
                    Inquiry Type *
                  </label>
                  <select
                    id="inquiryType"
                    name="inquiryType"
                    value={formData.inquiryType}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-4 rounded-xl glass-card text-white bg-transparent focus:outline-none focus:ring-2 focus:ring-mint-green/50 focus:border-mint-green/50 transition-all duration-300 font-body cursor-pointer"
                  >
                    {inquiryTypes.map((type) => (
                      <option key={type.value} value={type.value} className="bg-charcoal-gray text-white">
                        {type.label}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-white/80 mb-3 font-body">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="6"
                    className="w-full px-4 py-4 rounded-xl glass-card text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-mint-green/50 focus:border-mint-green/50 transition-all duration-300 resize-none font-body"
                    placeholder={
                      formData.inquiryType === 'enterprise' 
                        ? "Tell us about your organization's needs, team size, and specific requirements..."
                        : formData.inquiryType === 'partnership'
                        ? "Describe your partnership proposal and how we can collaborate..."
                        : "Tell us about your project, goals, or how we can help you..."
                    }
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={isLoading}
                  className="btn-accent btn-lg w-full group disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 hover:scale-105 active:scale-95"
                >
                  {isLoading ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                      <span>Sending...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      <span>
                        {formData.inquiryType === 'enterprise' ? 'Request Enterprise Demo' : 'Send Message'}
                      </span>
                    </>
                  )}
                </button>

                <p className="text-center text-white/50 text-sm font-body">
                  {formData.inquiryType === 'enterprise' 
                    ? 'Enterprise inquiries receive priority handling and dedicated account management.'
                    : 'We respect your privacy and will never share your information.'
                  }
                </p>
              </form>
            )}

            {/* Decorative Elements */}
            <div className="absolute top-4 right-4 w-20 h-20 bg-gradient-to-br from-mint-green/10 to-electric-blue/10 rounded-full blur-xl"></div>
            <div className="absolute bottom-4 left-4 w-16 h-16 bg-gradient-to-br from-vivid-coral/10 to-slate-blue/10 rounded-full blur-xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;