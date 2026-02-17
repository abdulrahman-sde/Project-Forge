"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  ClipboardList,
  FileSearch,
  Code2,
  MessageSquare,
  PackageCheck,
} from "lucide-react";

const steps = [
  {
    icon: ClipboardList,
    title: "Submit Your Requirements",
    description:
      "Share your FYP topic, university guidelines, tech preferences, and deadline. We'll review everything in detail.",
  },
  {
    icon: FileSearch,
    title: "Get a Custom Proposal",
    description:
      "Within 24 hours, receive a detailed scope, timeline, pricing, and tech stack proposal tailored to your project.",
  },
  {
    icon: Code2,
    title: "Development Begins",
    description:
      "Our expert developers and writers start building your project and documentation simultaneously, with regular progress updates.",
  },
  {
    icon: MessageSquare,
    title: "Review & Revisions",
    description:
      "Preview your project at key milestones. Request revisions and refinements until you're completely satisfied.",
  },
  {
    icon: PackageCheck,
    title: "Final Delivery",
    description:
      "Receive your complete project — source code, documentation, presentations, and deployment guide. Defense-ready.",
  },
];

export default function ProcessSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      id="process"
      className="section-padding bg-[var(--color-silk)]"
      ref={ref}
    >
      <div className="section-wrapper">
        {/* Header */}
        <div className="text-center max-w-[600px] mx-auto mb-16">
          <motion.span
            initial={{ opacity: 0, y: 15 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="text-label block mb-4"
          >
            Our Process
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-heading-1 mb-4"
          >
            From Idea to Submission in 5 Steps
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-body-lg"
          >
            A clear, structured process so you always know where things stand.
          </motion.p>
        </div>

        {/* Timeline */}
        <div className="relative max-w-[700px] mx-auto">
          {/* Connecting line */}
          <div className="absolute left-[28px] md:left-1/2 top-0 bottom-0 w-[2px] bg-[var(--color-border)] md:-translate-x-[1px]" />

          {steps.map((step, i) => {
            const isLeft = i % 2 === 0;
            return (
              <motion.div
                key={i}
                initial={{
                  opacity: 0,
                  x: isLeft ? -30 : 30,
                }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{
                  duration: 0.6,
                  delay: 0.3 + i * 0.15,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className={`relative flex items-start mb-12 last:mb-0 ${
                  isLeft
                    ? "md:flex-row md:text-right"
                    : "md:flex-row-reverse md:text-left"
                } flex-row text-left`}
              >
                {/* Content */}
                <div
                  className={`flex-1 pl-16 md:pl-0 ${
                    isLeft ? "md:pr-16" : "md:pl-16"
                  }`}
                >
                  <div className="card bg-white py-5 px-6">
                    <div
                      className={`flex items-center gap-3 mb-2 ${
                        isLeft ? "md:flex-row-reverse" : ""
                      }`}
                    >
                      <div className="w-9 h-9 rounded-lg bg-[var(--color-amber-light)] flex items-center justify-center shrink-0">
                        <step.icon
                          size={18}
                          className="text-[var(--color-amber-dark)]"
                        />
                      </div>
                      <h3 className="font-[var(--font-display)] font-semibold text-base text-[var(--color-ink)]">
                        {step.title}
                      </h3>
                    </div>
                    <p className="text-sm text-[var(--color-graphite)] leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>

                {/* Number circle - positioned on the line */}
                <div className="absolute left-0 md:left-1/2 md:-translate-x-1/2 top-4 z-10">
                  <div className="w-14 h-14 rounded-full bg-[var(--color-ink)] flex items-center justify-center border-4 border-[var(--color-silk)]">
                    <span className="text-[var(--color-ivory)] font-[var(--font-display)] font-bold text-sm">
                      0{i + 1}
                    </span>
                  </div>
                </div>

                {/* Empty spacer for alternating layout */}
                <div className="hidden md:block flex-1" />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
