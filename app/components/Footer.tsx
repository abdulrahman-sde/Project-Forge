"use client";

import { ArrowUp, Mail, Phone, MapPin } from "lucide-react";

const footerLinks = {
  Services: [
    { label: "Web Projects", href: "#services" },
    { label: "AI/ML Projects", href: "#services" },
    { label: "Documentation", href: "#services" },
    { label: "Defense Prep", href: "#services" },
  ],
  Company: [
    { label: "About Us", href: "#" },
    { label: "How It Works", href: "#process" },
    { label: "Pricing", href: "#pricing" },
    { label: "FAQ", href: "#faq" },
  ],
  Resources: [
    { label: "Blog", href: "#" },
    { label: "FYP Guide", href: "#" },
    { label: "Sample Projects", href: "#projects" },
    { label: "Documentation Samples", href: "#" },
  ],
};

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-[var(--color-ink)] text-[rgba(255,255,255,0.7)] pt-16 pb-8">
      <div className="section-wrapper">
        {/* Top row */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-16">
          {/* Brand column */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2.5 mb-5">
              <div className="w-9 h-9 rounded-lg bg-[var(--color-amber)] flex items-center justify-center">
                <span className="text-[var(--color-ink)] font-bold text-sm">
                  PF
                </span>
              </div>
              <span className="font-[var(--font-display)] font-semibold text-lg text-white tracking-tight">
                ProjectForge
              </span>
            </div>
            <p className="text-sm leading-relaxed mb-6 max-w-[320px]">
              Your trusted partner for complete Final Year Project development
              and documentation. Built by experts, delivered on time.
            </p>
            <div className="space-y-3">
              <a
                href="mailto:hello@projectforge.agency"
                className="flex items-center gap-2.5 text-sm hover:text-[var(--color-amber)] transition-colors"
              >
                <Mail size={14} />
                hello@projectforge.agency
              </a>
              <a
                href="tel:+923001234567"
                className="flex items-center gap-2.5 text-sm hover:text-[var(--color-amber)] transition-colors"
              >
                <Phone size={14} />
                +92 300 123 4567
              </a>
              <div className="flex items-center gap-2.5 text-sm">
                <MapPin size={14} />
                Lahore, Pakistan
              </div>
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="font-[var(--font-display)] font-semibold text-white text-sm mb-4 uppercase tracking-wider">
                {title}
              </h4>
              <ul className="space-y-2.5">
                {links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-sm hover:text-[var(--color-amber)] transition-colors duration-300"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Divider */}
        <div className="h-[1px] bg-[rgba(255,255,255,0.08)] mb-8" />

        {/* Bottom row */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-[rgba(255,255,255,0.4)]">
            © {new Date().getFullYear()} ProjectForge. All rights reserved.
          </p>

          <div className="flex items-center gap-6">
            <a
              href="#"
              className="text-xs text-[rgba(255,255,255,0.4)] hover:text-[var(--color-amber)] transition-colors"
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="text-xs text-[rgba(255,255,255,0.4)] hover:text-[var(--color-amber)] transition-colors"
            >
              Terms of Service
            </a>
            <button
              onClick={scrollToTop}
              className="w-10 h-10 rounded-full border border-[rgba(255,255,255,0.15)] flex items-center justify-center hover:bg-[var(--color-amber)] hover:border-[var(--color-amber)] hover:text-[var(--color-ink)] transition-all duration-300"
              aria-label="Back to top"
            >
              <ArrowUp size={16} />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
