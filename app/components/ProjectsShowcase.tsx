"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { projects as projectsData, PROJECT_SLUGS } from "../lib/constants";

const projects = PROJECT_SLUGS.map((slug) => {
  const p = projectsData[slug];
  return {
    slug: p.slug,
    title: p.title,
    category: p.category,
    description: p.tagline,
    tags: p.tags.slice(0, 4),
    gradient: p.gradient,
    accent: p.accent,
  };
});

export default function ProjectsShowcase() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="projects" className="section-padding" ref={ref}>
      <div className="section-wrapper">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16">
          <div className="max-w-125">
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
            className="text-body max-w-100"
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
                  className={`relative aspect-4/3 rounded-xl bg-linear-to-br ${project.gradient} mb-5 overflow-hidden`}
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
                  <div className="absolute inset-0 bg-(--color-ink) opacity-0 group-hover:opacity-80 transition-opacity duration-400 flex items-center justify-center">
                    <div className="text-(--color-ivory) flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
                      <span className="text-sm font-semibold">
                        View Case Study
                      </span>
                      <ArrowUpRight size={14} />
                    </div>
                  </div>
                </div>

                {/* Content */}
                <h3 className="font-semibold text-lg text-(--color-ink) mb-2 group-hover:text-amber transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-sm text-graphite leading-relaxed mb-4">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-0.5 text-xs font-medium rounded-full border border-border text-stone"
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
