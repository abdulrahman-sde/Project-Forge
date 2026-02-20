"use client";

import { motion } from "framer-motion";
import { ArrowRight, Shield, Clock, CheckCircle } from "lucide-react";

const trustBadges = [
  { icon: CheckCircle, text: "100+ Projects Delivered" },
  { icon: Shield, text: "100% Confidential" },
  { icon: Clock, text: "On-Time Guarantee" },
];

export default function HeroSection() {
  const headingWords = [
    "Complete",
    "FYP",
    "Solutions",
    "—",
    "Built",
    "by",
    "Experts.",
  ];

  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Geometric background pattern */}
      <div className="absolute inset-0 geo-pattern" />

      {/* Decorative elements */}
      <div className="absolute top-[15%] right-[8%] w-75 h-75 rounded-full bg-amber opacity-[0.04] blur-[80px]" />
      <div className="absolute bottom-[20%] left-[5%] w-62.5 h-62.5 rounded-full bg-sage opacity-[0.05] blur-[60px]" />

      {/* Diagonal accent line */}
      <motion.div
        initial={{ scaleY: 0 }}
        animate={{ scaleY: 1 }}
        transition={{ duration: 1.2, delay: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className="absolute top-0 right-[15%] w-px h-[60%] bg-linear-to-b from-transparent via-amber to-transparent origin-top hidden lg:block"
      />

      <div className="section-wrapper relative z-10 w-full">
        <div className="max-w-200">
          {/* Label */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mb-6"
          >
            <span className="text-label">FYP Development Agency</span>
          </motion.div>

          {/* Heading with word-by-word stagger */}
          <h1 className="text-display mb-8">
            {headingWords.map((word, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.5,
                  delay: 0.2 + i * 0.08,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className={`inline-block mr-3 ${
                  word === "FYP" || word === "Experts."
                    ? "text-amber"
                    : ""
                }`}
              >
                {word}
              </motion.span>
            ))}
          </h1>

          {/* Subheading */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="text-body-lg max-w-145 mb-10"
          >
            We design, develop, and document your entire Final Year Project —
            from SRS to source code, presentations to defense prep. You focus on
            your degree; we handle the rest.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1 }}
            className="flex flex-wrap gap-4 mb-16"
          >
            <a href="#contact" className="btn-primary">
              Start Your Project
              <ArrowRight size={16} />
            </a>
            <a href="#services" className="btn-outline">
              View Services
            </a>
          </motion.div>

          {/* Trust Badges */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.3 }}
            className="flex flex-wrap gap-8"
          >
            {trustBadges.map((badge, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 1.4 + i * 0.1 }}
                className="flex items-center gap-2.5"
              >
                <div className="w-8 h-8 rounded-full bg-amber-light flex items-center justify-center">
                  <badge.icon
                    size={15}
                    className="text-amber-dark"
                  />
                </div>
                <span className="text-sm font-medium text-graphite">
                  {badge.text}
                </span>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Right decorative floating card (desktop only) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2, ease: [0.22, 1, 0.36, 1] }}
          className="absolute right-0 top-1/2 -translate-y-1/2 hidden xl:block"
        >
          <motion.div
            animate={{ y: [0, -12, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            className="w-70 bg-white/80 backdrop-blur-lg rounded-2xl border border-border p-6 shadow-[0_20px_60px_-15px_rgba(27,27,24,0.1)]"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-sage-light flex items-center justify-center">
                <CheckCircle size={18} className="text-sage" />
              </div>
              <div>
                <p className="text-sm font-semibold text-(--color-ink)">
                  Project Delivered
                </p>
                <p className="text-xs text-stone">Just now</p>
              </div>
            </div>
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-xs text-stone">
                  Progress
                </span>
                <span className="text-xs font-semibold text-sage">
                  100%
                </span>
              </div>
              <div className="h-1.5 bg-silk rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: "100%" }}
                  transition={{ duration: 2, delay: 1.8, ease: "easeOut" }}
                  className="h-full bg-sage rounded-full"
                />
              </div>
            </div>
            <div className="mt-4 flex gap-2">
              <span className="badge badge-sage">React</span>
              <span className="badge badge-amber">AI/ML</span>
              <span className="badge badge-ink">Docs</span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
