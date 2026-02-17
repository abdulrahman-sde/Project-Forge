"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Globe, Brain, FileText, Presentation } from "lucide-react";

const services = [
  {
    icon: Globe,
    title: "Web-Based Projects",
    description:
      "Full-stack web applications using React, Next.js, MERN, Django, Laravel, and more. Complete with database design, API integration, and deployment-ready code.",
    tags: ["React", "Next.js", "Node.js", "Django", "Laravel"],
    accent: "var(--color-amber)",
    accentLight: "var(--color-amber-light)",
  },
  {
    icon: Brain,
    title: "AI & ML Projects",
    description:
      "Machine learning models, NLP systems, computer vision, recommendation engines, and data science projects. Powered by Python, TensorFlow, PyTorch, and scikit-learn.",
    tags: ["Python", "TensorFlow", "PyTorch", "NLP", "OpenCV"],
    accent: "var(--color-sage)",
    accentLight: "var(--color-sage-light)",
  },
  {
    icon: FileText,
    title: "Complete Documentation",
    description:
      "Professional SRS, SDD, project reports, UML diagrams (use case, class, sequence, ER), test plans, and literature reviews written to university standards.",
    tags: ["SRS", "SDD", "UML", "Reports", "Literature Review"],
    accent: "var(--color-blush)",
    accentLight: "var(--color-blush-light)",
  },
  {
    icon: Presentation,
    title: "Presentation & Defense",
    description:
      "Polished presentation slides, defense preparation guides, demo walkthroughs, and viva coaching. Walk into your defense with complete confidence.",
    tags: ["Slides", "Demo", "Viva Prep", "Walkthrough"],
    accent: "var(--color-amber)",
    accentLight: "var(--color-amber-light)",
  },
];

export default function ServicesSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="services" className="section-padding" ref={ref}>
      <div className="section-wrapper">
        {/* Section header */}
        <div className="max-w-[600px] mb-16">
          <motion.span
            initial={{ opacity: 0, y: 15 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="text-label block mb-4"
          >
            What We Offer
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-heading-1 mb-4"
          >
            Everything Your FYP Needs, Under One Roof
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-body-lg"
          >
            From code to documentation to the final presentation — we deliver
            complete, submission-ready Final Year Projects.
          </motion.p>
        </div>

        {/* Services grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {services.map((service, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.6,
                delay: 0.2 + i * 0.1,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="card group cursor-default"
            >
              {/* Icon */}
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center mb-5 transition-transform duration-300 group-hover:scale-110"
                style={{ backgroundColor: service.accentLight }}
              >
                <service.icon size={22} style={{ color: service.accent }} />
              </div>

              {/* Content */}
              <h3 className="text-heading-2 mb-3 text-[var(--color-ink)]">
                {service.title}
              </h3>
              <p className="text-body mb-5">{service.description}</p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2">
                {service.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 text-xs font-medium rounded-full border border-[var(--color-border)] text-[var(--color-stone)] bg-[var(--color-ivory)]"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
