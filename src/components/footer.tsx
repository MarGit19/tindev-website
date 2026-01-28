import { Instagram, Github, Linkedin } from "lucide-react";
import Link from "next/link";

// Custom X (Twitter) SVG Component
function XIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={className}
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}

export default function Footer() {
  const socials = [
    {
      name: "Instagram",
      href: "https://www.instagram.com/tindevstudios/",
      icon: Instagram,
    },
    {
      name: "LinkedIn",
      href: "https://www.linkedin.com/company/106391461/",
      icon: Linkedin,
    },
    {
      name: "X",
      href: "https://x.com/tindevstudios",
      icon: XIcon,
      isCustom: true,
    },
  ];

  const legalLinks = [
    { name: "Privacy", href: "/privacy" },
    { name: "Terms", href: "/terms" },
    { name: "Cookies", href: "/cookies" },
    { name: "GDPR", href: "/gdpr" },
    { name: "Accessibility", href: "/accessibility" },
  ];

  return (
    <footer className="border-t border-white/10 py-16">
      <div className="container text-center space-y-6">
        {/* Company Name */}
        <div className="tracking-[0.08em] text-sm text-white font-display">
          TIN DEV STUDIOS
        </div>

        {/* Social Media Icons */}
        <div className="flex items-center justify-center gap-3">
          {socials.map((social) => {
            const Icon = social.icon;
            return (
              <a
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.name}
                className="inline-flex items-center justify-center w-8 h-8 rounded-full border border-white/20 bg-white/5 text-white/70 hover:text-white hover:border-white/40 hover:bg-white/10 transition-all duration-300 hover:scale-110"
              >
                <Icon className="h-3.5 w-3.5" />
              </a>
            );
          })}
        </div>

        {/* Legal Links */}
        <div className="flex items-center justify-center flex-wrap gap-x-3 gap-y-2 text-xs text-graphite">
          {legalLinks.map((link, index) => (
            <span key={link.href} className="inline-flex items-center">
              <Link
                href={link.href}
                className="hover:text-white transition-colors"
              >
                {link.name}
              </Link>
              {index < legalLinks.length - 1 && (
                <span className="ml-3 text-white/30">•</span>
              )}
            </span>
          ))}
        </div>

        {/* Contact Info */}
        <div className="text-graphite text-sm">
          Dallas, TX • support@tindevstudios.com
        </div>

        {/* Copyright */}
        <div className="text-graphite text-xs">
          © {new Date().getFullYear()} Tin Dev Studios Inc. All rights reserved.
        </div>
      </div>
    </footer>
  );
}