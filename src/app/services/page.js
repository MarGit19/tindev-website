'use client';
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle, Zap, Code, Smartphone, Database, Cog, Users } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function ServicesPage() {
  const [activeService, setActiveService] = useState(null);

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

  // Services data
  const services = [
    {
      id: 1,
      title: 'Web Application Development',
      subtitle: 'Scalable, Modern Web Apps',
      icon: Code,
      color: 'from-mint-green to-electric-blue',
      description: 'Custom web applications built with modern frameworks and best practices. From simple websites to complex enterprise systems.',
      benefits: [
        'Responsive design for all devices',
        'Optimized performance and SEO',
        'Secure and scalable architecture',
        'Integrated payment systems',
        'Real-time data synchronization',
        'Advanced user authentication',
      ],
      technologies: ['React', 'Next.js', 'Vue.js', 'Node.js', 'Python', 'PostgreSQL'],
      useCases: [
        'SaaS platforms',
        'E-commerce stores',
        'Content management systems',
        'Analytics dashboards',
        'Social platforms',
        'Collaboration tools',
      ],
      timeline: '8-16 weeks',
      price: 'Custom Quote',
    },
    {
      id: 2,
      title: 'Mobile App Development',
      subtitle: 'iOS & Android Solutions',
      icon: Smartphone,
      color: 'from-electric-blue to-slate-blue',
      description: 'Native and cross-platform mobile applications designed for performance and user experience. iOS, Android, and cross-platform solutions.',
      benefits: [
        'Native performance on iOS & Android',
        'Offline functionality support',
        'Push notifications & real-time updates',
        'App Store optimization',
        'Cloud synchronization',
        'Biometric authentication',
      ],
      technologies: ['Swift', 'Kotlin', 'React Native', 'Flutter', 'Firebase', 'AWS'],
      useCases: [
        'On-demand services',
        'Fitness & health apps',
        'Banking applications',
        'Travel & booking apps',
        'Messaging platforms',
        'AR/VR experiences',
      ],
      timeline: '10-20 weeks',
      price: 'Custom Quote',
    },
    {
      id: 3,
      title: 'API & Backend Development',
      subtitle: 'Robust Server-Side Solutions',
      icon: Database,
      color: 'from-slate-blue to-vivid-coral',
      description: 'Powerful backend systems and APIs that power your applications. RESTful, GraphQL, and microservices architectures.',
      benefits: [
        'RESTful & GraphQL APIs',
        'Microservices architecture',
        'Database design & optimization',
        'Real-time data processing',
        'Scalable cloud infrastructure',
        'Advanced security protocols',
      ],
      technologies: ['Node.js', 'Python', 'Go', 'Java', 'PostgreSQL', 'MongoDB', 'Redis'],
      useCases: [
        'Microservices platforms',
        'Real-time applications',
        'Data analytics engines',
        'IoT backends',
        'Payment processing systems',
        'Machine learning pipelines',
      ],
      timeline: '6-14 weeks',
      price: 'Custom Quote',
    },
    {
      id: 4,
      title: 'DevOps & Cloud Infrastructure',
      subtitle: 'Deployment & Scaling',
      icon: Cog,
      color: 'from-vivid-coral to-mint-green',
      description: 'Cloud infrastructure setup, deployment pipelines, and DevOps solutions. AWS, Azure, Google Cloud, and more.',
      benefits: [
        'CI/CD pipeline automation',
        'Container orchestration (Kubernetes)',
        'Infrastructure as Code (IaC)',
        'Auto-scaling & load balancing',
        'Monitoring & alerting systems',
        '99.99% uptime SLA',
      ],
      technologies: ['AWS', 'Google Cloud', 'Azure', 'Kubernetes', 'Docker', 'Terraform'],
      useCases: [
        'High-traffic applications',
        'Global content delivery',
        'Disaster recovery setup',
        'Cost optimization',
        'Security hardening',
        'Performance optimization',
      ],
      timeline: '3-8 weeks',
      price: 'Custom Quote',
    },
    {
      id: 5,
      title: 'Integration & Third-Party Services',
      subtitle: 'Connect Your Systems',
      icon: Zap,
      color: 'from-electric-blue to-mint-green',
      description: 'Seamless integration with third-party services, payment gateways, and existing systems. Connect anything to everything.',
      benefits: [
        'Payment gateway integration',
        'CRM & ERP connectivity',
        'Email & SMS services',
        'Social media APIs',
        'Analytics platforms',
        'Custom webhook systems',
      ],
      technologies: ['Stripe', 'PayPal', 'Salesforce', 'HubSpot', 'Slack', 'Zapier'],
      useCases: [
        'Payment processing',
        'Marketing automation',
        'Customer data sync',
        'Notification systems',
        'Workflow automation',
        'Multi-platform data flow',
      ],
      timeline: '2-6 weeks',
      price: 'Custom Quote',
    },
    {
      id: 6,
      title: 'Consulting & Technical Strategy',
      subtitle: 'Expert Guidance',
      icon: Users,
      color: 'from-slate-blue to-electric-blue',
      description: 'Expert consulting for technology strategy, architecture review, and technical guidance. Leverage our 8+ years of experience.',
      benefits: [
        'Technology stack selection',
        'Architecture review & optimization',
        'Security audit & hardening',
        'Performance optimization',
        'Team training & mentoring',
        'Roadmap planning',
      ],
      technologies: ['All stacks supported'],
      useCases: [
        'CTO advisory',
        'Tech debt remediation',
        'Scaling strategies',
        'Security assessments',
        'Team augmentation',
        'Legacy system modernization',
      ],
      timeline: 'On-demand',
      price: 'Custom Quote',
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
                Our Services
              </span>
            </div>
          </motion.div>

          <motion.h1 
            variants={itemVariants}
            className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold leading-tight gradient-text font-display"
          >
            Custom Development
            <br />
            <span className="text-white">Services for Every Need</span>
          </motion.h1>

          <motion.p 
            variants={itemVariants}
            className="text-lg sm:text-xl md:text-2xl text-white/75 max-w-3xl mx-auto leading-relaxed font-body"
          >
            From web applications to mobile apps, cloud infrastructure to technical consulting—we provide comprehensive services to bring your vision to life.
          </motion.p>

          <motion.a
            variants={itemVariants}
            href="#services"
            className="inline-flex btn-primary gap-2 items-center text-sm sm:text-base px-6 sm:px-8 py-3 sm:py-4"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Explore Services
            <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
          </motion.a>
        </motion.div>
      </section>

      {/* ===== SERVICES GRID ===== */}
      <section id="services" className="relative py-16 sm:py-20 lg:py-24 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            {services.map((service) => {
              const Icon = service.icon;
              return (
                <motion.div
                  key={service.id}
                  variants={itemVariants}
                  className="glass-card rounded-2xl overflow-hidden border border-white/10 hover:border-mint-green/30 transition-all h-full flex flex-col cursor-pointer group"
                  whileHover={{ y: -5 }}
                  onClick={() => setActiveService(activeService === service.id ? null : service.id)}
                >
                  {/* Header with gradient */}
                  <div className={`bg-gradient-to-r ${service.color} p-8 relative overflow-hidden`}>
                    <div className="absolute inset-0 opacity-10" />
                    <div className="relative z-10 space-y-3">
                      <Icon className="w-8 h-8 text-white" />
                      <h3 className="text-2xl font-bold text-white font-display">
                        {service.title}
                      </h3>
                      <p className="text-white/90 text-sm font-body">
                        {service.subtitle}
                      </p>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6 sm:p-8 flex-1 flex flex-col space-y-6">
                    <p className="text-white/70 text-base leading-relaxed font-body">
                      {service.description}
                    </p>

                    {/* Benefits preview */}
                    <div className="space-y-3">
                      <p className="text-white/60 text-xs font-semibold uppercase tracking-widest font-body">
                        Key Benefits
                      </p>
                      <div className="space-y-2">
                        {service.benefits.slice(0, 3).map((benefit, idx) => (
                          <div key={idx} className="flex items-start gap-2">
                            <CheckCircle className="w-4 h-4 text-mint-green flex-shrink-0 mt-0.5" />
                            <span className="text-white/70 text-xs sm:text-sm font-body">{benefit}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Timeline & Price */}
                    <div className="pt-4 border-t border-white/10 grid grid-cols-2 gap-4">
                      <div>
                        <p className="text-white/60 text-xs font-semibold uppercase tracking-widest font-body mb-1">Timeline</p>
                        <p className="text-white text-sm font-body font-semibold">{service.timeline}</p>
                      </div>
                      <div>
                        <p className="text-white/60 text-xs font-semibold uppercase tracking-widest font-body mb-1">Starting</p>
                        <p className="text-white text-sm font-body font-semibold">{service.price}</p>
                      </div>
                    </div>

                    {/* CTA */}
                    <motion.button
                      className="mt-auto w-full btn-primary text-sm font-semibold py-3 flex items-center justify-center gap-2"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      Learn More
                      <ArrowRight className="w-4 h-4" />
                    </motion.button>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* ===== EXPANDED SERVICE DETAILS ===== */}
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
              Detailed Service Overview
            </h2>
            <p className="text-white/70 text-lg font-body max-w-2xl mx-auto">
              Click on any service card above to explore detailed information
            </p>
          </motion.div>

          {activeService && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="glass-card rounded-2xl p-8 sm:p-12 border border-white/10 space-y-8"
            >
              {services.map((service) => {
                if (service.id !== activeService) return null;

                return (
                  <div key={service.id} className="space-y-8">
                    {/* Header */}
                    <div className={`bg-gradient-to-r ${service.color} -m-8 sm:-m-12 p-8 sm:p-12`}>
                      <div className="space-y-3">
                        <div className="inline-block p-3 bg-white/10 rounded-lg">
                          {React.createElement(service.icon, { className: 'w-8 h-8 text-white' })}
                        </div>
                        <h2 className="text-3xl sm:text-4xl font-bold text-white font-display">
                          {service.title}
                        </h2>
                        <p className="text-white/90 text-lg font-body">{service.description}</p>
                      </div>
                    </div>

                    {/* Content Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                      {/* Benefits */}
                      <div className="space-y-4">
                        <h3 className="text-xl font-bold text-white font-display">Key Benefits</h3>
                        <div className="space-y-3">
                          {service.benefits.map((benefit, idx) => (
                            <div key={idx} className="flex items-start gap-3">
                              <CheckCircle className="w-5 h-5 text-mint-green flex-shrink-0 mt-0.5" />
                              <span className="text-white/70 text-sm font-body">{benefit}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Technologies */}
                      <div className="space-y-4">
                        <h3 className="text-xl font-bold text-white font-display">Technologies</h3>
                        <div className="space-y-2">
                          {service.technologies.map((tech, idx) => (
                            <div
                              key={idx}
                              className="px-3 py-2 bg-white/5 border border-white/10 rounded-lg text-white/70 text-sm font-body"
                            >
                              {tech}
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Use Cases */}
                      <div className="space-y-4">
                        <h3 className="text-xl font-bold text-white font-display">Use Cases</h3>
                        <div className="space-y-2">
                          {service.useCases.map((useCase, idx) => (
                            <div key={idx} className="flex items-start gap-2">
                              <span className="w-1.5 h-1.5 rounded-full bg-electric-blue mt-2 flex-shrink-0" />
                              <span className="text-white/70 text-sm font-body">{useCase}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </motion.div>
          )}
        </div>
      </section>

      {/* ===== PROCESS SECTION ===== */}
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
              Our Service Process
            </h2>
            <p className="text-white/70 text-lg font-body max-w-2xl mx-auto">
              Consistent, transparent approach across all services
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-4 gap-6"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            {[
              { num: '01', title: 'Consultation', desc: 'Understand your needs and goals' },
              { num: '02', title: 'Proposal', desc: 'Detailed scope and timeline' },
              { num: '03', title: 'Execution', desc: 'Agile development with updates' },
              { num: '04', title: 'Support', desc: 'Ongoing maintenance & growth' },
            ].map((step, idx) => (
              <motion.div
                key={idx}
                variants={itemVariants}
                className="glass-card rounded-2xl p-6 border border-white/10 text-center space-y-4 hover:border-mint-green/30 transition-all"
                whileHover={{ y: -5 }}
              >
                <div className="w-12 h-12 rounded-full bg-gradient-to-r from-mint-green to-electric-blue flex items-center justify-center mx-auto">
                  <span className="font-bold text-lg text-white font-display">{step.num}</span>
                </div>
                <h3 className="text-lg font-bold text-white font-display">{step.title}</h3>
                <p className="text-white/70 text-sm font-body">{step.desc}</p>
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
              Ready to Get Started?
            </h2>
            <p className="text-white/70 text-lg font-body max-w-2xl mx-auto">
              Let's discuss which service is right for your project. Schedule a free consultation with our team.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.a
                href="/#contact"
                className="inline-flex btn-primary gap-2 items-center text-base px-8 py-4 justify-center"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Schedule Consultation
                <ArrowRight className="w-5 h-5" />
              </motion.a>
              <motion.a
                href="/about"
                className="inline-flex btn-secondary gap-2 items-center text-base px-8 py-4 justify-center"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Learn About Us
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