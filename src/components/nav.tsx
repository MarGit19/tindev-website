"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const links = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/about", label: "About" },
  { href: "/pricing", label: "Pricing" },
  { href: "/contact", label: "Contact" },
];

export default function Nav() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-page/90 backdrop-blur-md border-b border-white/10">
      <div className="container">
        <div className="flex items-center justify-between py-6">
          {/* Logo */}
          <Link
            href="/"
            className="tracking-[0.08em] text-sm md:text-base text-white font-display"
            onClick={() => setMobileMenuOpen(false)}
          >
            TIN DEV STUDIOS
          </Link>

          {/* Desktop Navigation - Hidden on mobile/tablet */}
          <nav className="hidden lg:flex items-center gap-6 text-sm">
            {links.map((l) => {
              const active = l.href === "/" ? pathname === "/" : pathname.startsWith(l.href);
              return (
                <Link
                  key={l.href}
                  href={l.href}
                  className={`text-white/80 hover:text-white transition-colors underline-offset-8 ${
                    active ? "underline decoration-accent" : "decoration-transparent"
                  }`}
                >
                  {l.label}
                </Link>
              );
            })}
          </nav>

          {/* Mobile Menu Button - Visible on mobile/tablet only */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-white hover:text-accent transition-colors"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation Menu - Slides in from top */}
        {mobileMenuOpen && (
          <nav className="lg:hidden py-4 border-t border-white/10 animate-fadeIn">
            <div className="flex flex-col space-y-4">
              {links.map((l) => {
                const active = l.href === "/" ? pathname === "/" : pathname.startsWith(l.href);
                return (
                  <Link
                    key={l.href}
                    href={l.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`text-white/80 hover:text-white transition-colors py-2 px-4 rounded-md ${
                      active ? "bg-white/5 text-white font-medium" : ""
                    }`}
                  >
                    {l.label}
                  </Link>
                );
              })}
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}