"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  CheckCircle,
  Zap,
  Code,
  Smartphone,
  Database,
  Cog,
  Users,
} from "lucide-react";
import { Container, Section } from "@/components/ui";

type Service = {
  id: number;
  title: string;
  subtitle: string;
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  color: string;
  description: string;
  benefits: string[];
  technologies: string[];
  useCases: string[];
  timeline: string;
  price: string;
};

type Star = {
  left: string;
  top: string;
  duration: number;
  delay: number;
};

type ShootingStar = {
  width: string;
  left: string;
  top: string;
  rotate: string;
  duration: number;
  repeatDelay: number;
  translateX: number;
  translateY: number;
};

export default function ServicesClient() {
  const [smallStars, setSmallStars] = React.useState<Star[]>([]);
  const [mediumStars, setMediumStars] = React.useState<Star[]>([]);
  const [shootingStars, setShootingStars] = React.useState<ShootingStar[]>([]);

  React.useEffect(() => {
    // Generate star positions only on client
    setSmallStars(
      [...Array(100)].map(() => ({
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`,
        duration: Math.random() * 3 + 2,
        delay: Math.random() * 5,
      }))
    );

    setMediumStars(
      [...Array(50)].map(() => ({
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`,
        duration: Math.random() * 4 + 2,
        delay: Math.random() * 5,
      }))
    );

    setShootingStars(
      [...Array(5)].map(() => ({
        width: `${Math.random() * 100 + 50}px`,
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`,
        rotate: `${Math.random() * 360}deg`,
        duration: Math.random() * 2 + 1,
        repeatDelay: Math.random() * 10 + 5,
        translateX: Math.random() * 300 + 200,
        translateY: Math.random() * 200 + 100,
      }))
    );
  }, []);

  const services: Service[] = [
    {
      id: 1,
      title: "Web Application Development",
      subtitle: "Scalable, Modern Web Apps",
      icon: Code,
      color: "text-mint-green",
      description:
        "Custom web applications built with modern frameworks and best practices. From simple websites to complex enterprise systems.",
      benefits: [
        "Responsive design for all devices",
        "Optimized performance and SEO",
        "Secure and scalable architecture",
        "Integrated payment systems",
        "Real-time data synchronization",
        "Advanced user authentication",
      ],
      technologies: ["React", "Next.js", "Node.js", "Python", "PostgreSQL"],
      useCases: [
        "SaaS platforms",
        "E-commerce",
        "CMS",
        "Analytics dashboards",
        "Social platforms",
        "Collaboration tools",
      ],
      timeline: "8–16 weeks",
      price: "Custom Quote",
    },
    {
      id: 2,
      title: "Mobile App Development",
      subtitle: "iOS & Android Solutions",
      icon: Smartphone,
      color: "text-electric-blue",
      description:
        "Native and cross-platform mobile applications designed for performance and user experience. iOS, Android, and cross-platform solutions.",
      benefits: [
        "Native performance on iOS & Android",
        "Offline functionality support",
        "Push notifications & real-time updates",
        "App Store optimization",
        "Cloud synchronization",
        "Biometric authentication",
      ],
      technologies: ["Swift", "Kotlin", "React Native", "Flutter", "Firebase", "AWS"],
      useCases: [
        "On-demand services",
        "Fitness & health",
        "Banking",
        "Travel & booking",
        "Messaging",
        "AR/VR",
      ],
      timeline: "10–20 weeks",
      price: "Custom Quote",
    },
    {
      id: 3,
      title: "API & Backend Development",
      subtitle: "Robust Server-Side Solutions",
      icon: Database,
      color: "text-slate-blue",
      description:
        "Powerful backend systems and APIs that power your applications. RESTful, GraphQL, and microservices architectures.",
      benefits: [
        "RESTful & GraphQL APIs",
        "Microservices architecture",
        "Database design & optimization",
        "Real-time data processing",
        "Scalable cloud infrastructure",
        "Advanced security protocols",
      ],
      technologies: ["Node.js", "Python", "Go", "PostgreSQL", "MongoDB", "Redis"],
      useCases: [
        "Microservices",
        "Real-time apps",
        "Data analytics",
        "IoT backends",
        "Payments",
        "ML pipelines",
      ],
      timeline: "6–14 weeks",
      price: "Custom Quote",
    },
    {
      id: 4,
      title: "DevOps & Cloud Infrastructure",
      subtitle: "Deployment & Scaling",
      icon: Cog,
      color: "text-vivid-coral",
      description:
        "Cloud infrastructure setup, deployment pipelines, and DevOps solutions. AWS, Azure, Google Cloud, and more.",
      benefits: [
        "CI/CD pipeline automation",
        "Kubernetes orchestration",
        "Infrastructure as Code (IaC)",
        "Auto-scaling & load balancing",
        "Monitoring & alerting",
        "99.99% uptime SLA",
      ],
      technologies: ["AWS", "GCP", "Azure", "Kubernetes", "Docker", "Terraform"],
      useCases: [
        "High-traffic apps",
        "Global CDN",
        "Disaster recovery",
        "Cost optimization",
        "Security hardening",
        "Perf tuning",
      ],
      timeline: "3–8 weeks",
      price: "Custom Quote",
    },
    {
      id: 5,
      title: "Integration & Third-Party Services",
      subtitle: "Connect Your Systems",
      icon: Zap,
      color: "text-electric-blue",
      description:
        "Seamless integration with third-party services, payment gateways, and existing systems. Connect anything to everything.",
      benefits: [
        "Payment gateways",
        "CRM & ERP connectivity",
        "Email & SMS services",
        "Social media APIs",
        "Analytics platforms",
        "Custom webhooks",
      ],
      technologies: ["Stripe", "PayPal", "Salesforce", "HubSpot", "Slack", "Zapier"],
      useCases: [
        "Payments",
        "Marketing automation",
        "Customer data sync",
        "Notifications",
        "Workflows",
        "Data pipelines",
      ],
      timeline: "2–6 weeks",
      price: "Custom Quote",
    },
    {
      id: 6,
      title: "Consulting & Technical Strategy",
      subtitle: "Expert Guidance",
      icon: Users,
      color: "text-mint-green",
      description:
        "Expert consulting for technology strategy, architecture review, and technical guidance. Leverage practical, battle-tested experience.",
      benefits: [
        "Tech stack selection",
        "Architecture review & optimization",
        "Security audit & hardening",
        "Performance optimization",
        "Team training & mentoring",
        "Roadmap planning",
      ],
      technologies: ["All stacks supported"],
      useCases: [
        "CTO advisory",
        "Tech debt remediation",
        "Scaling strategies",
        "Security assessments",
        "Team augmentation",
        "Legacy modernization",
      ],
      timeline: "On-demand",
      price: "Custom Quote",
    },
  ];

  return (
    <>
      {/* Header with Starfield Background */}
      <section
        aria-label="Services Header"
        className="relative isolate overflow-hidden pt-20 sm:pt-24 md:pt-28 pb-12 sm:pb-16"
      >
        {/* Starfield Background - Same as Hero */}
        <div className="absolute inset-0 overflow-hidden">
          {/* Static stars layer 1 - Small stars */}
          {smallStars.map((star, i) => (
            <motion.div
              key={`star-s-${i}`}
              className="absolute w-[1px] h-[1px] bg-white rounded-full"
              style={{
                left: star.left,
                top: star.top,
              }}
              animate={{
                opacity: [0.2, 1, 0.2],
                scale: [1, 1.5, 1],
              }}
              transition={{
                duration: star.duration,
                repeat: Infinity,
                delay: star.delay,
              }}
            />
          ))}

          {/* Static stars layer 2 - Medium stars */}
          {mediumStars.map((star, i) => (
            <motion.div
              key={`star-m-${i}`}
              className="absolute w-[2px] h-[2px] bg-white rounded-full"
              style={{
                left: star.left,
                top: star.top,
              }}
              animate={{
                opacity: [0.3, 0.9, 0.3],
                scale: [1, 1.3, 1],
              }}
              transition={{
                duration: star.duration,
                repeat: Infinity,
                delay: star.delay,
              }}
            />
          ))}

          {/* Shooting stars */}
          {shootingStars.map((star, i) => (
            <motion.div
              key={`shooting-${i}`}
              className="absolute h-[1px] bg-gradient-to-r from-transparent via-white to-transparent"
              style={{
                width: star.width,
                left: star.left,
                top: star.top,
                rotate: star.rotate,
              }}
              initial={{ opacity: 0, x: 0 }}
              animate={{
                opacity: [0, 1, 0],
                x: [0, star.translateX],
                y: [0, star.translateY],
              }}
              transition={{
                duration: star.duration,
                repeat: Infinity,
                repeatDelay: star.repeatDelay,
                ease: "easeOut",
              }}
            />
          ))}
        </div>

        {/* Subtle animated blobs */}
        <motion.div
          aria-hidden="true"
          initial={{ opacity: 0.05, scale: 0.9 }}
          animate={{ opacity: [0.04, 0.07, 0.04], scale: [0.9, 1, 0.9] }}
          transition={{ duration: 14, repeat: Infinity }}
          className="pointer-events-none absolute -top-40 left-1/3 h-[28rem] w-[28rem] sm:h-[32rem] sm:w-[32rem] lg:h-[40rem] lg:w-[40rem] rounded-full bg-electric-blue/30 blur-3xl"
        />
        <motion.div
          aria-hidden="true"
          initial={{ opacity: 0.05, scale: 0.9 }}
          animate={{ opacity: [0.04, 0.07, 0.04], scale: [0.95, 1.02, 0.95] }}
          transition={{ duration: 16, repeat: Infinity, delay: 0.5 }}
          className="pointer-events-none absolute -bottom-40 right-1/4 h-[30rem] w-[30rem] sm:h-[36rem] sm:w-[36rem] lg:h-[44rem] lg:w-[44rem] rounded-full bg-mint-green/30 blur-3xl"
        />

        <div className="relative z-10">
          <Container>
            <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-0 text-center">
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-display text-white">
                Our Services
              </h1>
              <p className="mt-3 sm:mt-4 text-white/70 text-base sm:text-lg max-w-3xl mx-auto">
                From web applications to mobile apps, cloud infrastructure to technical consulting — we provide comprehensive services to bring your vision to life.
              </p>
            </div>
          </Container>
        </div>
      </section>

      {/* Divider */}
      <div className="border-t border-white/10" />

      {/* Services Grid */}
      <Section pad="py-12 sm:py-16 md:py-20 lg:py-24">
        <Container>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-0">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10">
              {services.map((service) => {
                const Icon = service.icon;
                return (
                  <ServiceCard key={service.id} service={service} Icon={Icon} />
                );
              })}
            </div>
          </div>
        </Container>
      </Section>

      {/* Divider */}
      <div className="border-t border-white/10" />

      {/* Why Choose Our Services */}
      <Section pad="py-12 sm:py-16 md:py-20 lg:py-24">
        <Container>
          <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-0">
            <div className="text-center mb-12 sm:mb-16">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-display text-white">
                Why Choose Our Services
              </h2>
              <p className="mt-3 sm:mt-4 text-sm sm:text-base text-white/70">
                Built on experience, delivered with precision
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 lg:gap-10">
              <BenefitCard
                title="Pragmatic Approach"
                description="We focus on what works, not what's trendy. Every technology choice is justified by your actual needs."
              />
              <BenefitCard
                title="Clear Communication"
                description="Regular updates, transparent timelines, and honest assessments throughout the entire project lifecycle."
              />
              <BenefitCard
                title="Long-term Partnership"
                description="We don't just deliver and disappear. Ongoing support and maintenance to keep your systems healthy."
              />
            </div>
          </div>
        </Container>
      </Section>

      {/* Divider */}
      <div className="border-t border-white/10" />

      {/* Final CTA */}
      <Section pad="py-16 sm:py-20 md:py-24 lg:py-28">
        <Container>
          <div className="max-w-3xl mx-auto px-4 sm:px-6 md:px-0 text-center">
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-display text-white">
              Ready to Get Started?
            </h3>
            <p className="mt-3 sm:mt-4 text-sm sm:text-base text-white/70">
              Let's discuss which service is right for your project. Schedule a free consultation with our team.
            </p>
            <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="btn-primary">
                Schedule Consultation →
              </Link>
              <Link href="/portfolio" className="btn-secondary">
                View Case Studies →
              </Link>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}

/* ---------- Components ---------- */

function ServiceCard({
  service,
  Icon,
}: {
  service: Service;
  Icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
}) {
  return (
    <div className="rounded-lg border border-white/10 bg-white/[0.03] overflow-hidden flex flex-col h-full">
      {/* Header */}
      <div className="p-6 sm:p-8 border-b border-white/10">
        <Icon className={`w-8 h-8 ${service.color} mb-4`} />
        <h3 className="text-lg sm:text-xl font-display text-white mb-2">
          {service.title}
        </h3>
        <p className="text-white/60 text-xs sm:text-sm">{service.subtitle}</p>
      </div>

      {/* Content */}
      <div className="p-6 sm:p-8 flex-1 flex flex-col space-y-6">
        <p className="text-white/70 text-sm sm:text-base leading-relaxed">
          {service.description}
        </p>

        {/* Benefits preview */}
        <div className="space-y-3">
          <p className="text-white/60 text-xs font-semibold uppercase tracking-widest">
            Key Benefits
          </p>
          <div className="space-y-2">
            {service.benefits.slice(0, 3).map((benefit, idx) => (
              <div key={idx} className="flex items-start gap-2">
                <CheckCircle className={`w-4 h-4 ${service.color} flex-shrink-0 mt-0.5`} />
                <span className="text-white/70 text-xs sm:text-sm">{benefit}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Timeline & Price */}
        <div className="pt-4 border-t border-white/10 grid grid-cols-2 gap-4">
          <div>
            <p className="text-white/60 text-xs font-semibold uppercase tracking-widest mb-1">
              Timeline
            </p>
            <p className="text-white text-sm font-semibold">{service.timeline}</p>
          </div>
          <div>
            <p className="text-white/60 text-xs font-semibold uppercase tracking-widest mb-1">
              Starting
            </p>
            <p className="text-white text-sm font-semibold">{service.price}</p>
          </div>
        </div>

        {/* CTA */}
        <Link
          href="/contact"
          className="mt-auto btn-primary text-sm py-3 text-center"
        >
          Discuss This Service →
        </Link>
      </div>
    </div>
  );
}

function BenefitCard({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <div className="rounded-lg border border-white/10 bg-white/[0.03] p-6 sm:p-8">
      <h3 className="text-lg sm:text-xl font-display text-white mb-3">{title}</h3>
      <p className="text-white/70 text-sm sm:text-base leading-relaxed">{description}</p>
    </div>
  );
}