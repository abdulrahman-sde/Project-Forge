"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Link from "next/link";
import {
  ArrowLeft,
  ArrowRight,
  ChevronRight,
  Calendar,
  Users,
  Award,
  CheckCircle,
  Code2,
  FileText,
  Database,
  Layers,
  Monitor,
  Cpu,
  Globe,
  Quote,
  Image as ImageIcon,
  BarChart3,
  Smartphone,
  BookOpen,
} from "lucide-react";
import type { ProjectData } from "../../lib/constants";
import Image from "next/image";

/* ═══════════════════════════════════════════
   ICON MAP
   ═══════════════════════════════════════════ */

const iconMap: Record<
  string,
  React.ComponentType<{ size?: number; className?: string }>
> = {
  monitor: Monitor,
  calendar: Calendar,
  database: Database,
  layers: Layers,
  smartphone: Smartphone,
  barchart: BarChart3,
  globe: Globe,
  filetext: FileText,
  cpu: Cpu,
  code: Code2,
  bookopen: BookOpen,
  award: Award,
};

/* ═══════════════════════════════════════════
   PLACEHOLDER IMAGE COMPONENT
   ═══════════════════════════════════════════ */

function PlaceholderImage({
  gradient,
  image,
  label,
  iconKey,
  className = "",
}: {
  gradient: string;
  image: string;
  label: string;
  iconKey?: string;
  className?: string;
}) {
  const Icon = iconKey ? iconMap[iconKey] : ImageIcon;
  return (
    <div
      className={`img-placeholder relative overflow-hidden bg-linear-to-br ${gradient} ${className}`}
    >
      {/* Real Image */}
      <Image
        src={image}
        alt={label}
        width={800}
        height={300}
        className="object-cover"
      />
      
      {/* Decorative shapes */}
      {/* <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-32 h-32 rounded-3xl border-2 border-current opacity-10 rotate-12" />
        <div className="absolute w-20 h-20 rounded-full border-2 border-current opacity-8 -rotate-12 translate-x-12 translate-y-6" />
        <div className="absolute w-10 h-10 rounded-lg border-2 border-current opacity-6 rotate-45 -translate-x-16 -translate-y-8" />
      </div> */}
      {/* Center icon + label */}
      {/* <div className="relative z-10 flex flex-col items-center gap-3">
        {Icon && (
          <Icon size={32} className="text-(--color-ink) opacity-20" />
        )}
        <span className="text-xs font-medium text-stone bg-white/60 backdrop-blur-sm px-3 py-1 rounded-full">
          {label}
        </span>
      </div> */}
    </div>
  );
}

/* ═══════════════════════════════════════════
   CASE STUDY CONTENT (Client Component)
   ═══════════════════════════════════════════ */

export default function CaseStudyContent({
  project,
}: {
  project: ProjectData;
}) {
  const heroRef = useRef(null);
  const challengeRef = useRef(null);
  const solutionRef = useRef(null);
  const galleryRef = useRef(null);
  const statsRef = useRef(null);
  const deliverablesRef = useRef(null);
  const quoteRef = useRef(null);

  const heroInView = useInView(heroRef, { once: true, margin: "-50px" });
  const challengeInView = useInView(challengeRef, {
    once: true,
    margin: "-80px",
  });
  const solutionInView = useInView(solutionRef, {
    once: true,
    margin: "-80px",
  });
  const galleryInView = useInView(galleryRef, { once: true, margin: "-80px" });
  const statsInView = useInView(statsRef, { once: true, margin: "-80px" });
  const deliverablesInView = useInView(deliverablesRef, {
    once: true,
    margin: "-80px",
  });
  const quoteInView = useInView(quoteRef, { once: true, margin: "-80px" });

  return (
    <main className="pt-24 md:pt-28">
      {/* ── Breadcrumb ── */}
      <div className="section-wrapper mb-8" ref={heroRef}>
        <motion.nav
          initial={{ opacity: 0, y: 10 }}
          animate={heroInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.4 }}
          className="breadcrumb"
        >
          <Link href="/">Home</Link>
          <ChevronRight size={12} className="breadcrumb-separator" />
          <Link href="/#projects">Projects</Link>
          <ChevronRight size={12} className="breadcrumb-separator" />
          <span className="breadcrumb-current">
            {project.title.split(" — ")[0]}
          </span>
        </motion.nav>
      </div>

      {/* ── Hero Section ── */}
      <section className="section-wrapper mb-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
          {/* Left: Title & info */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={heroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="mb-4"
            >
              <span className="badge badge-ink">{project.category}</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 25 }}
              animate={heroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="text-heading-1 mb-4"
            >
              {project.title}
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={heroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.25 }}
              className="text-body-lg mb-8 max-w-160"
            >
              {project.tagline}
            </motion.p>

            {/* Quick badges */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={heroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.35 }}
              className="flex flex-wrap gap-3 mb-8"
            >
              <div className="flex items-center gap-2 text-sm text-graphite">
                <Calendar size={14} className="text-amber" />
                {project.duration}
              </div>
              <div className="w-px h-4 bg-border" />
              <div className="flex items-center gap-2 text-sm text-graphite">
                <Award size={14} className="text-amber" />
                Grade: {project.grade}
              </div>
              <div className="w-px h-4 bg-border" />
              <div className="flex items-center gap-2 text-sm text-graphite">
                <Users size={14} className="text-amber" />
                {project.client.university}
              </div>
            </motion.div>
          </div>

          {/* Right: Sidebar */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={heroInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="casestudy-sidebar"
          >
            <div className="card p-6 bg-white shadow-[0_12px_40px_-10px_rgba(27,27,24,0.06)]">
              <h3 className="text-label mb-5">Project Details</h3>

              <div className="space-y-4">
                <div>
                  <span className="text-xs font-medium text-stone uppercase tracking-wider">
                    University
                  </span>
                  <p className="text-sm font-medium text-(--color-ink) mt-0.5">
                    {project.client.university}
                  </p>
                </div>
                <div className="h-px bg-border" />

                <div>
                  <span className="text-xs font-medium text-stone uppercase tracking-wider">
                    Department
                  </span>
                  <p className="text-sm font-medium text-(--color-ink) mt-0.5">
                    {project.client.department}
                  </p>
                </div>
                <div className="h-px bg-border" />

                <div>
                  <span className="text-xs font-medium text-stone uppercase tracking-wider">
                    Semester
                  </span>
                  <p className="text-sm font-medium text-(--color-ink) mt-0.5">
                    {project.client.semester}
                  </p>
                </div>
                <div className="h-px bg-border" />

                <div>
                  <span className="text-xs font-medium text-stone uppercase tracking-wider">
                    Duration
                  </span>
                  <p className="text-sm font-medium text-(--color-ink) mt-0.5">
                    {project.duration}
                  </p>
                </div>
                <div className="h-px bg-border" />

                <div>
                  <span className="text-xs font-medium text-stone uppercase tracking-wider">
                    Grade Achieved
                  </span>
                  <p className="text-lg font-bold text-sage mt-0.5">
                    {project.grade}
                  </p>
                </div>
              </div>

              <a
                href="/#contact"
                className="btn-primary w-full mt-6 text-sm py-3"
              >
                Start a Similar Project
                <ArrowRight size={14} />
              </a>
            </div>
          </motion.div>
        </div>

        {/* Hero Image */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={heroInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="casestudy-hero mt-10"
        >
          <PlaceholderImage
            gradient={project.gradient}
            image={project.image}
            label={`${project.title.split(" — ")[0]} — Main Dashboard`}
            iconKey="monitor"
          />
        </motion.div>
      </section>

      {/* ── Detailed Description ── */}
      <section className="section-wrapper mb-20" ref={challengeRef}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={challengeInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-200"
        >
          <h2 className="text-heading-2 mb-4 mt-5">Project Overview</h2>
          <p className="text-body-lg mb-8">{project.description}</p>
        </motion.div>
      </section>

      {/* ── Challenge Section ── */}
      <section className="section-padding bg-silk">
        <div className="section-wrapper">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={challengeInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <span className="text-label block mb-4">
                Understanding the Problem
              </span>
              <h2 className="text-heading-1 mb-6">{project.challenge.title}</h2>
              <p className="text-body-lg">{project.challenge.description}</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={challengeInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-3"
            >
              {project.challenge.points.map((point, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 15 }}
                  animate={challengeInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.3 + i * 0.08 }}
                  className="flex items-start gap-3 p-4 bg-white rounded-xl border border-border"
                >
                  <div className="w-6 h-6 rounded-full bg-amber-light flex items-center justify-center shrink-0 mt-0.5">
                    <span className="text-xs font-bold text-amber-dark">
                      {i + 1}
                    </span>
                  </div>
                  <p className="text-sm text-graphite leading-relaxed">
                    {point}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Solution Section ── */}
      <section className="section-padding" ref={solutionRef}>
        <div className="section-wrapper">
          <div className="max-w-150 mb-14">
            <motion.span
              initial={{ opacity: 0, y: 15 }}
              animate={solutionInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5 }}
              className="text-label block mb-4"
            >
              How We Built It
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={solutionInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-heading-1 mb-4"
            >
              {project.solution.title}
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={solutionInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-body-lg"
            >
              {project.solution.description}
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {project.solution.highlights.map((highlight, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                animate={solutionInView ? { opacity: 1, y: 0 } : {}}
                transition={{
                  duration: 0.6,
                  delay: 0.3 + i * 0.1,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="card p-6 bg-white"
              >
                <div className="flex items-center gap-3 mb-3">
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center"
                    style={{ backgroundColor: project.accentLight }}
                  >
                    <Code2 size={18} style={{ color: project.accent }} />
                  </div>
                  <h3 className="font-semibold text-(--color-ink) text-base">
                    {highlight.title}
                  </h3>
                </div>
                <p className="text-sm text-graphite leading-relaxed">
                  {highlight.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Gallery Section ── */}
      <section
        className="section-padding bg-silk"
        ref={galleryRef}
      >
        <div className="section-wrapper">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={galleryInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="mb-10"
          >
            <span className="text-label block mb-4">Project Screenshots</span>
            <h2 className="text-heading-1">Visual Walkthrough</h2>
          </motion.div>

          <div className="casestudy-gallery">
            {project.gallery.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 25 }}
                animate={galleryInView ? { opacity: 1, y: 0 } : {}}
                transition={{
                  duration: 0.5,
                  delay: 0.15 + i * 0.1,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="casestudy-gallery-item group"
              >
                <PlaceholderImage
                  gradient={item.gradient}
                  image={item.image}
                  label={item.label}
                  iconKey={item.icon}
                />
                {/* Hover label */}
                <div className="absolute bottom-0 left-0 right-0 p-4 bg-linear-to-t from-[rgba(27,27,24,0.7)] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="text-white text-sm font-semibold">
                    {item.label}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Results & Stats ── */}
      <section className="section-padding" ref={statsRef}>
        <div className="section-wrapper">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={statsInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="text-center max-w-125 mx-auto mb-12"
          >
            <span className="text-label block mb-4">Results</span>
            <h2 className="text-heading-1">Project Impact</h2>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
            {project.stats.map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={statsInView ? { opacity: 1, scale: 1 } : {}}
                transition={{
                  duration: 0.5,
                  delay: 0.15 + i * 0.1,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="casestudy-stat"
              >
                <div className="casestudy-stat-value">{stat.value}</div>
                <div className="casestudy-stat-label">{stat.label}</div>
              </motion.div>
            ))}
          </div>

          {/* ── Tech Stack ── */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={statsInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-center"
          >
            <h3 className="text-heading-2 mb-6">Tech Stack</h3>
            <div className="flex flex-wrap justify-center gap-3">
              {project.tags.map((tag) => (
                <span key={tag} className="tech-tag">
                  <Layers size={13} className="text-stone" />
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── Deliverables ── */}
      <section
        className="section-padding bg-silk"
        ref={deliverablesRef}
      >
        <div className="section-wrapper">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div>
              <motion.span
                initial={{ opacity: 0, y: 15 }}
                animate={deliverablesInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5 }}
                className="text-label block mb-4"
              >
                What Was Delivered
              </motion.span>
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={deliverablesInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="text-heading-1 mb-4"
              >
                Complete Deliverables
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={deliverablesInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-body-lg"
              >
                Every project includes production-ready code, comprehensive
                documentation, and presentation materials — everything needed
                for a successful submission.
              </motion.p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {project.deliverables.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: 20 }}
                  animate={deliverablesInView ? { opacity: 1, x: 0 } : {}}
                  transition={{
                    duration: 0.4,
                    delay: 0.2 + i * 0.06,
                  }}
                  className="deliverable-item"
                >
                  <div className="deliverable-check">
                    <CheckCircle size={13} className="text-white" />
                  </div>
                  <span className="text-sm font-medium text-(--color-ink)">
                    {item}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Testimonial Pull Quote ── */}
      <section className="section-padding" ref={quoteRef}>
        <div className="section-wrapper max-w-200">
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={quoteInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7 }}
          >
            <div className="casestudy-pullquote">
              <Quote
                size={32}
                className="absolute top-6 right-6 text-amber opacity-20"
              />
              <p className="mb-6">&ldquo;{project.testimonial.text}&rdquo;</p>
              <div className="flex items-center gap-3">
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold"
                  style={{
                    backgroundColor: project.testimonial.color,
                  }}
                >
                  {project.testimonial.initials}
                </div>
                <div>
                  <p className="text-sm font-semibold text-(--color-ink) not-italic">
                    {project.testimonial.name}
                  </p>
                  <p className="text-xs text-stone not-italic">
                    {project.testimonial.university}
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── CTA Banner ── */}
      <section className="section-padding bg-(--color-ink) relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-75 h-75 rounded-full bg-amber opacity-[0.06] blur-[100px]" />
        <div className="absolute bottom-0 left-0 w-50 h-50 rounded-full bg-sage opacity-[0.08] blur-[80px]" />

        <div className="section-wrapper relative z-10 text-center">
          <motion.span
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-label block mb-4"
            style={{ color: "var(--color-amber)" }}
          >
            Have a Similar Project?
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-heading-1 mb-6"
            style={{ color: "var(--color-ivory)" }}
          >
            Let&apos;s Build Your Project Together
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-body-lg mb-8 max-w-125 mx-auto"
            style={{ color: "rgba(255,255,255,0.6)" }}
          >
            Share your requirements and get a custom proposal within 24 hours.
            No obligation.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.35 }}
            className="flex flex-wrap justify-center gap-4"
          >
            <a href="/#contact" className="btn-primary">
              Start Your Project
              <ArrowRight size={16} />
            </a>
            <Link
              href="/#projects"
              className="btn-outline border-[rgba(255,255,255,0.2)] text-(--color-ivory) hover:bg-(--color-ivory) hover:text-(--color-ink)"
            >
              View All Projects
            </Link>
          </motion.div>
        </div>
      </section>

      {/* ── Back Navigation ── */}
      <section className="py-12">
        <div className="section-wrapper">
          <Link
            href="/#projects"
            className="inline-flex items-center gap-2 text-sm font-medium text-graphite hover:text-amber transition-colors duration-300 group"
          >
            <ArrowLeft
              size={16}
              className="group-hover:-translate-x-1 transition-transform duration-300"
            />
            Back to All Projects
          </Link>
        </div>
      </section>
    </main>
  );
}
