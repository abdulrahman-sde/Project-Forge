"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Check, ArrowRight, Sparkles } from "lucide-react";

const tiers = [
  {
    name: "Starter",
    price: "15,000",
    description: "For simpler projects with basic documentation needs.",
    features: [
      "Single-module web application",
      "Basic SRS document",
      "ER & Use Case diagrams",
      "Source code with comments",
      "1 revision round",
      "7-day delivery",
    ],
    cta: "Get Started",
    featured: false,
  },
  {
    name: "Professional",
    price: "30,000",
    description: "Complete FYP package — our most popular choice.",
    features: [
      "Multi-module full-stack application",
      "Complete SRS & SDD documents",
      "All UML diagrams (6+ types)",
      "Database design & API docs",
      "Presentation slides (20+ pages)",
      "3 revision rounds",
      "14-day delivery",
      "Defense preparation guide",
    ],
    cta: "Choose Professional",
    featured: true,
  },
  {
    name: "Premium",
    price: "50,000",
    description: "For AI/ML projects or complex requirements.",
    features: [
      "AI/ML model + full-stack app",
      "Research paper quality documentation",
      "Complete diagram set + flowcharts",
      "Video demo & walkthrough",
      "Presentation + viva coaching",
      "Unlimited revisions",
      "21-day delivery",
      "1-on-1 defense prep sessions",
      "Priority WhatsApp support",
    ],
    cta: "Go Premium",
    featured: false,
  },
];

export default function PricingSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="pricing" className="section-padding" ref={ref}>
      <div className="section-wrapper">
        {/* Header */}
        <div className="text-center max-w-150 mx-auto mb-16">
          <motion.span
            initial={{ opacity: 0, y: 15 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="text-label block mb-4"
          >
            Pricing
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-heading-1 mb-4"
          >
            Transparent Pricing, No Hidden Fees
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-body-lg"
          >
            Choose the package that fits your project scope. All prices in PKR.
            Custom quotes available for unique requirements.
          </motion.p>
        </div>

        {/* Pricing grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
          {tiers.map((tier, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.6,
                delay: 0.2 + i * 0.12,
                ease: [0.22, 1, 0.36, 1],
              }}
              className={tier.featured ? "card-featured" : "card"}
            >
              {/* Featured badge */}
              {tier.featured && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                  <span className="badge badge-amber flex items-center gap-1 px-4 py-1.5 text-xs shadow-sm">
                    <Sparkles size={12} />
                    Most Popular
                  </span>
                </div>
              )}

              {/* Tier name and price */}
              <h3 className="font-semibold text-lg text-(--color-ink) mb-2">
                {tier.name}
              </h3>
              <p className="text-sm text-stone mb-5">
                {tier.description}
              </p>
              <div className="flex items-baseline gap-1 mb-6">
                <span className="text-sm text-stone">PKR</span>
                <span className="text-4xl font-bold text-(--color-ink) tracking-tight">
                  {tier.price}
                </span>
              </div>

              {/* Divider */}
              <div className="h-px bg-border mb-6" />

              {/* Features */}
              <ul className="space-y-3 mb-8">
                {tier.features.map((feature, j) => (
                  <li key={j} className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-sage-light flex items-center justify-center shrink-0 mt-0.5">
                      <Check size={11} className="text-sage" />
                    </div>
                    <span className="text-sm text-graphite">
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <a
                href="#contact"
                className={
                  tier.featured
                    ? "btn-primary w-full text-center"
                    : "btn-outline w-full text-center"
                }
              >
                {tier.cta}
                <ArrowRight size={15} />
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
