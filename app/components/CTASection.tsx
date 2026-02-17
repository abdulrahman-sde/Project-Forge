"use client";

import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Send, MessageCircle, ArrowRight } from "lucide-react";

const projectTypes = [
  "Web Application (MERN / Next.js / Django)",
  "AI / Machine Learning Project",
  "Mobile Application",
  "Desktop Application",
  "Documentation Only",
  "Presentation & Defense Prep Only",
  "Complete Package (Code + Docs + Slides)",
  "Other",
];

export default function CTASection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
  };

  return (
    <section
      id="contact"
      className="section-padding relative overflow-hidden"
      ref={ref}
    >
      {/* Background pattern */}
      <div className="absolute inset-0 geo-pattern" />
      <div className="absolute top-0 right-0 w-[400px] h-[400px] rounded-full bg-[var(--color-amber)] opacity-[0.03] blur-[100px]" />
      <div className="absolute bottom-0 left-0 w-[300px] h-[300px] rounded-full bg-[var(--color-sage)] opacity-[0.04] blur-[80px]" />

      <div className="section-wrapper relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left — heading & info */}
          <div>
            <motion.span
              initial={{ opacity: 0, y: 15 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5 }}
              className="text-label block mb-4"
            >
              Start Your Project
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-heading-1 mb-6"
            >
              Ready to Get Your FYP Done Right?
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-body-lg mb-8"
            >
              Share your requirements and we&apos;ll get back to you within 2
              hours with a custom proposal. No obligation, no pressure.
            </motion.p>

            {/* Quick connect */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col gap-4"
            >
              <a
                href="https://wa.me/923001234567"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-5 py-3.5 bg-[#25D366] text-white rounded-xl font-semibold text-sm hover:bg-[#20BD5A] transition-all duration-300 hover:translate-y-[-2px] hover:shadow-lg w-fit"
              >
                <MessageCircle size={18} />
                Chat on WhatsApp — Instant Response
              </a>
              <p className="text-small">
                Or fill out the form and we&apos;ll email you back.
              </p>
            </motion.div>

            {/* Trust points */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="mt-8 grid grid-cols-2 gap-4"
            >
              {[
                "Free consultation",
                "No upfront commitment",
                "24-hour response",
                "Custom proposals",
              ].map((point, i) => (
                <div key={i} className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-[var(--color-amber)]" />
                  <span className="text-sm text-[var(--color-graphite)]">
                    {point}
                  </span>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right — form */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            <div className="card p-8 bg-white shadow-[0_20px_60px_-15px_rgba(27,27,24,0.08)]">
              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-12"
                >
                  <div className="w-16 h-16 rounded-full bg-[var(--color-sage-light)] flex items-center justify-center mx-auto mb-4">
                    <Send size={24} className="text-[var(--color-sage)]" />
                  </div>
                  <h3 className="font-[var(--font-display)] font-semibold text-xl text-[var(--color-ink)] mb-2">
                    Message Sent!
                  </h3>
                  <p className="text-sm text-[var(--color-stone)]">
                    We&apos;ll get back to you within 2 hours.
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm font-medium text-[var(--color-ink)] mb-1.5">
                        Your Name
                      </label>
                      <input
                        type="text"
                        placeholder="Ahmed Khan"
                        className="input-field"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-[var(--color-ink)] mb-1.5">
                        Email Address
                      </label>
                      <input
                        type="email"
                        placeholder="ahmed@email.com"
                        className="input-field"
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-[var(--color-ink)] mb-1.5">
                      Project Type
                    </label>
                    <select
                      className="input-field appearance-none cursor-pointer"
                      required
                    >
                      <option value="">Select project type...</option>
                      {projectTypes.map((type) => (
                        <option key={type} value={type}>
                          {type}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-[var(--color-ink)] mb-1.5">
                      Project Details
                    </label>
                    <textarea
                      placeholder="Tell us about your FYP — topic, university, deadline, any specific requirements..."
                      className="input-field"
                      rows={4}
                      required
                    />
                  </div>

                  <button type="submit" className="btn-primary w-full py-4">
                    Submit Your Requirements
                    <ArrowRight size={16} />
                  </button>

                  <p className="text-center text-xs text-[var(--color-stone)]">
                    Your information is 100% confidential and never shared.
                  </p>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
