"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

const projects = [
  {
    slug: "meditrack",
    title: "MediTrack — Healthcare Management System",
    category: "Web Application",
    description:
      "A full-stack patient management system with appointment scheduling, medical records, and real-time notifications. Built with MERN stack and deployed on AWS.",
    tags: ["React", "Node.js", "MongoDB", "AWS"],
    gradient: "from-[#E8F0E9] to-[#D4E6D6]",
    accent: "var(--color-sage)",
  },
  {
    slug: "sentimentscope",
    title: "SentimentScope — Social Media Analyzer",
    category: "AI / ML Project",
    description:
      "A real-time sentiment analysis tool that processes tweets and reviews using NLP. Features dashboard visualization, trend detection, and exportable reports.",
    tags: ["Python", "TensorFlow", "Flask", "NLP"],
    gradient: "from-[#F5E6C8] to-[#EDD9B0]",
    accent: "var(--color-amber)",
  },
  {
    slug: "educonnect",
    title: "EduConnect — Learning Platform",
    category: "Web Application",
    description:
      "An interactive e-learning platform with video courses, quizzes, progress tracking, and certificate generation. Complete with payment integration and admin panel.",
    tags: ["Next.js", "PostgreSQL", "Stripe", "Tailwind"],
    gradient: "from-[#F5E8E3] to-[#EBDAD3]",
    accent: "var(--color-blush)",
  },
];

export default function ProjectsShowcase() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="projects" className="section-padding" ref={ref}>
      <div className="section-wrapper">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16">
          <div className="max-w-[500px]">
            <motion.span
              initial={{ opacity: 0, y: 15 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5 }}
              className="text-label block mb-4"
            >
              Featured Work
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-heading-1"
            >
              Projects That Got A+ Grades
            </motion.h2>
          </div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-body max-w-[400px]"
          >
            A glimpse of the projects we&apos;ve built. Every project comes with
            complete documentation and presentation-ready materials.
          </motion.p>
        </div>

        {/* Project cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {projects.map((project, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.7,
                delay: 0.2 + i * 0.15,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="group cursor-pointer"
            >
              <Link href={`/projects/${project.slug}`} className="block">
                {/* Card image area */}
                <div
                  className={`relative aspect-[4/3] rounded-xl bg-gradient-to-br ${project.gradient} mb-5 overflow-hidden`}
                >
                  {/* Abstract shapes for visual interest */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div
                      className="w-24 h-24 rounded-2xl border-2 opacity-30 rotate-12 group-hover:rotate-45 transition-transform duration-700"
                      style={{ borderColor: project.accent }}
                    />
                    <div
                      className="absolute w-16 h-16 rounded-full border-2 opacity-20 -rotate-12 group-hover:rotate-12 transition-transform duration-700 translate-x-8 translate-y-4"
                      style={{ borderColor: project.accent }}
                    />
                  </div>

                  {/* Category badge */}
                  <div className="absolute top-4 left-4">
                    <span className="badge badge-ink">{project.category}</span>
                  </div>

                  {/* Hover overlay */}
                  <div className="absolute inset-0 bg-[var(--color-ink)] opacity-0 group-hover:opacity-80 transition-opacity duration-400 flex items-center justify-center">
                    <div className="text-[var(--color-ivory)] flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
                      <span className="text-sm font-semibold font-[var(--font-display)]">
                        View Case Study
                      </span>
                      <ArrowUpRight size={14} />
                    </div>
                  </div>
                </div>

                {/* Content */}
                <h3 className="font-[var(--font-display)] font-semibold text-lg text-[var(--color-ink)] mb-2 group-hover:text-[var(--color-amber)] transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-sm text-[var(--color-graphite)] leading-relaxed mb-4">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-0.5 text-xs font-medium rounded-full border border-[var(--color-border)] text-[var(--color-stone)]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
