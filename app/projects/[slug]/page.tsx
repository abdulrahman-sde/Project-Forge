"use client";

import { useRef } from "react";
import { useParams } from "next/navigation";
import { motion, useInView } from "framer-motion";
import Link from "next/link";
import {
  ArrowLeft,
  ArrowRight,
  ChevronRight,
  Calendar,
  Users,
  Award,
  Clock,
  CheckCircle,
  Code2,
  FileText,
  Presentation,
  Database,
  Shield,
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
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

/* ═══════════════════════════════════════════
   PROJECT DATA
   ═══════════════════════════════════════════ */

interface ProjectData {
  slug: string;
  title: string;
  category: string;
  tagline: string;
  description: string;
  gradient: string;
  accent: string;
  accentLight: string;
  client: {
    university: string;
    department: string;
    semester: string;
  };
  duration: string;
  grade: string;
  tags: string[];
  challenge: {
    title: string;
    description: string;
    points: string[];
  };
  solution: {
    title: string;
    description: string;
    highlights: { title: string; description: string }[];
  };
  gallery: {
    label: string;
    gradient: string;
    icon: string;
  }[];
  stats: { value: string; label: string }[];
  deliverables: string[];
  testimonial: {
    text: string;
    name: string;
    university: string;
    initials: string;
    color: string;
  };
}

const projects: Record<string, ProjectData> = {
  meditrack: {
    slug: "meditrack",
    title: "MediTrack — Healthcare Management System",
    category: "Web Application",
    tagline:
      "A full-stack patient management system with real-time appointment scheduling and medical records.",
    description:
      "MediTrack is a comprehensive healthcare management solution designed for small to mid-size clinics. It features patient registration, appointment scheduling with conflict detection, medical record management with search, real-time notifications, and role-based access control for administrators, doctors, and staff.",
    gradient: "from-[#E8F0E9] to-[#D4E6D6]",
    accent: "var(--color-sage)",
    accentLight: "var(--color-sage-light)",
    client: {
      university: "COMSATS University Islamabad",
      department: "Computer Science",
      semester: "8th Semester — Final Year Project",
    },
    duration: "4 Weeks",
    grade: "A+",
    tags: [
      "React",
      "Node.js",
      "Express",
      "MongoDB",
      "Socket.io",
      "AWS",
      "JWT",
      "Tailwind CSS",
    ],
    challenge: {
      title: "The Challenge",
      description:
        "The student needed a production-quality healthcare system that demonstrated full-stack proficiency while meeting strict university requirements for documentation and architecture.",
      points: [
        "Complex role-based access control for 3 user types (Admin, Doctor, Staff)",
        "Real-time appointment slot management with conflict detection",
        "HIPAA-inspired data security patterns for medical records",
        "Full SRS documentation with UML, ER diagrams, and test cases",
        "Tight 4-week deadline with mid-project supervisor review",
      ],
    },
    solution: {
      title: "Our Solution",
      description:
        "We designed and built a modular, production-grade architecture that showcased modern web development best practices while being easy for the student to present and defend.",
      highlights: [
        {
          title: "Modular MERN Architecture",
          description:
            "Clean, layered backend with controllers, services, and data access layers. React frontend with reusable component library and centralized state management.",
        },
        {
          title: "Real-Time Notifications",
          description:
            "WebSocket-based notification system using Socket.io for instant appointment updates, status changes, and administrative alerts.",
        },
        {
          title: "Secure Authentication Flow",
          description:
            "JWT-based auth with refresh tokens, role middleware, password hashing with bcrypt, and rate limiting for brute-force protection.",
        },
        {
          title: "Cloud Deployment",
          description:
            "Deployed on AWS EC2 with MongoDB Atlas, S3 for medical document storage, and CloudFront CDN for optimal frontend performance.",
        },
      ],
    },
    gallery: [
      {
        label: "Dashboard Overview",
        gradient: "from-[#E8F0E9] to-[#C8DEC9]",
        icon: "monitor",
      },
      {
        label: "Appointment System",
        gradient: "from-[#F5E6C8] to-[#EDD9B0]",
        icon: "calendar",
      },
      {
        label: "Patient Records",
        gradient: "from-[#E8F0E9] to-[#D4E6D6]",
        icon: "database",
      },
      {
        label: "Admin Panel",
        gradient: "from-[#F5E8E3] to-[#EBDAD3]",
        icon: "layers",
      },
      {
        label: "Mobile Responsive",
        gradient: "from-[#E8F0E9] to-[#C8DEC9]",
        icon: "smartphone",
      },
    ],
    stats: [
      { value: "A+", label: "Final Grade" },
      { value: "47", label: "Pages of Docs" },
      { value: "4 Weeks", label: "Delivered In" },
      { value: "12", label: "API Endpoints" },
    ],
    deliverables: [
      "Complete Source Code (Frontend + Backend)",
      "SRS Document (47 pages)",
      "Database ER Diagrams",
      "UML Diagrams (Use Case, Sequence, Class)",
      "Test Cases & Testing Report",
      "Deployment Guide",
      "PowerPoint Presentation (28 slides)",
      "Viva Preparation Notes",
    ],
    testimonial: {
      text: "They built my entire e-commerce FYP in 3 weeks — React frontend, Node backend, and full documentation. My supervisor was genuinely impressed with the SRS quality. Got an A without a single revision.",
      name: "Ahmed Khurram",
      university: "COMSATS University",
      initials: "AK",
      color: "var(--color-amber-light)",
    },
  },
  sentimentscope: {
    slug: "sentimentscope",
    title: "SentimentScope — Social Media Analyzer",
    category: "AI / ML Project",
    tagline:
      "Real-time sentiment analysis tool that processes tweets and reviews using advanced NLP.",
    description:
      "SentimentScope is an AI-powered social media analytics platform that processes tweets, product reviews, and user feedback in real-time. It uses a fine-tuned BERT model for sentiment classification, provides interactive dashboard visualizations, trend detection, and exportable PDF reports.",
    gradient: "from-[#F5E6C8] to-[#EDD9B0]",
    accent: "var(--color-amber)",
    accentLight: "var(--color-amber-light)",
    client: {
      university: "FAST-NUCES Lahore",
      department: "Artificial Intelligence",
      semester: "8th Semester — Final Year Project",
    },
    duration: "5 Weeks",
    grade: "A",
    tags: [
      "Python",
      "TensorFlow",
      "BERT",
      "Flask",
      "React",
      "PostgreSQL",
      "Redis",
      "Docker",
    ],
    challenge: {
      title: "The Challenge",
      description:
        "The student faced an approaching deadline with a complex AI project requiring both robust ML pipelines and an intuitive user-facing dashboard to impress the evaluation panel.",
      points: [
        "Custom NLP model training on 50K+ labeled tweets dataset",
        "Real-time data streaming from Twitter API with rate limit handling",
        "Interactive data visualization dashboard with multiple chart types",
        "Exportable PDF reports with automated insights generation",
        "Docker-based deployment for reproducible environments",
      ],
    },
    solution: {
      title: "Our Solution",
      description:
        "We built a complete end-to-end ML pipeline with a modern web dashboard, delivering both technical depth for the AI component and visual polish for presentations.",
      highlights: [
        {
          title: "Fine-Tuned BERT Model",
          description:
            "Transfer learning approach using BERT-base with custom classification head, achieving 91.3% accuracy on the test set. Trained on a curated 50K tweet dataset.",
        },
        {
          title: "Real-Time Processing Pipeline",
          description:
            "Redis-backed message queue for streaming tweets, with Flask API serving predictions. Background workers handle batch processing for trend analysis.",
        },
        {
          title: "Interactive Analytics Dashboard",
          description:
            "React dashboard with Recharts visualizations: sentiment distribution pie charts, time-series trend lines, word clouds, and filterable data tables.",
        },
        {
          title: "Automated Report Generation",
          description:
            "PDF report generator using ReportLab with AI-generated insights, charts, statistical summaries, and exportable datasets in CSV format.",
        },
      ],
    },
    gallery: [
      {
        label: "Analytics Dashboard",
        gradient: "from-[#F5E6C8] to-[#E8D4A8]",
        icon: "barchart",
      },
      {
        label: "Sentiment Trends",
        gradient: "from-[#E8F0E9] to-[#D4E6D6]",
        icon: "monitor",
      },
      {
        label: "Word Cloud View",
        gradient: "from-[#F5E6C8] to-[#EDD9B0]",
        icon: "globe",
      },
      {
        label: "Report Generator",
        gradient: "from-[#F5E8E3] to-[#EBDAD3]",
        icon: "filetext",
      },
      {
        label: "Model Metrics",
        gradient: "from-[#F5E6C8] to-[#E8D4A8]",
        icon: "cpu",
      },
    ],
    stats: [
      { value: "A", label: "Final Grade" },
      { value: "91.3%", label: "Model Accuracy" },
      { value: "5 Weeks", label: "Delivered In" },
      { value: "50K+", label: "Training Samples" },
    ],
    deliverables: [
      "Complete Source Code (ML + Backend + Frontend)",
      "Trained ML Model (.h5 weights)",
      "SRS Document (52 pages)",
      "Model Training Documentation",
      "API Documentation",
      "Docker Compose Setup",
      "PowerPoint Presentation (35 slides)",
      "Research Paper Draft",
    ],
    testimonial: {
      text: "I was desperate with my AI project deadline approaching. ProjectForge delivered a complete sentiment analysis system with TensorFlow, plus a 60-page report and presentation deck. Lifesaver!",
      name: "Fatima Noor",
      university: "FAST-NUCES",
      initials: "FN",
      color: "var(--color-sage-light)",
    },
  },
  educonnect: {
    slug: "educonnect",
    title: "EduConnect — Learning Platform",
    category: "Web Application",
    tagline:
      "Interactive e-learning platform with video courses, quizzes, and certificate generation.",
    description:
      "EduConnect is a full-featured learning management system enabling instructors to publish courses with video content, create quizzes, track student progress, and issue verified certificates. It includes Stripe payment integration, an admin analytics dashboard, and a fully responsive design.",
    gradient: "from-[#F5E8E3] to-[#EBDAD3]",
    accent: "var(--color-blush)",
    accentLight: "var(--color-blush-light)",
    client: {
      university: "NUST Islamabad",
      department: "Software Engineering",
      semester: "7th Semester — Final Year Project",
    },
    duration: "6 Weeks",
    grade: "A+",
    tags: [
      "Next.js",
      "PostgreSQL",
      "Prisma",
      "Stripe",
      "Tailwind CSS",
      "AWS S3",
      "NextAuth",
      "Zustand",
    ],
    challenge: {
      title: "The Challenge",
      description:
        "Balancing an internship, the student needed a feature-rich LMS that demonstrated advanced web development skills and could serve as a portfolio piece beyond academic requirements.",
      points: [
        "Multi-role system: Admin, Instructor, and Student with different dashboards",
        "Secure payment processing with Stripe for course purchases",
        "Video streaming with progress tracking and resume functionality",
        "Automated certificate generation with unique verification codes",
        "Comprehensive admin analytics panel with enrollment and revenue metrics",
      ],
    },
    solution: {
      title: "Our Solution",
      description:
        "We delivered a production-ready LMS using Next.js with server-side rendering, Prisma ORM for type-safe database access, and a clean component architecture that the student could easily explain during their viva.",
      highlights: [
        {
          title: "Next.js App Router Architecture",
          description:
            "Leveraged the App Router with server components for optimal performance, parallel routes for dashboards, and middleware for authentication & authorization.",
        },
        {
          title: "Stripe Integration",
          description:
            "Complete checkout flow with webhook-based enrollment confirmation, refund handling, and revenue tracking. Instructor payouts and commission management.",
        },
        {
          title: "Rich Course Builder",
          description:
            "Instructor dashboard with drag-and-drop course builder, Markdown editor for content, video upload to S3 with adaptive streaming, and quiz creator.",
        },
        {
          title: "Certificate Engine",
          description:
            "Automated PDF certificate generation upon course completion using custom templates, with QR code verification and shareable links.",
        },
      ],
    },
    gallery: [
      {
        label: "Course Catalog",
        gradient: "from-[#F5E8E3] to-[#E8D4CC]",
        icon: "bookopen",
      },
      {
        label: "Video Player",
        gradient: "from-[#F5E6C8] to-[#EDD9B0]",
        icon: "monitor",
      },
      {
        label: "Quiz Interface",
        gradient: "from-[#E8F0E9] to-[#D4E6D6]",
        icon: "code",
      },
      {
        label: "Admin Analytics",
        gradient: "from-[#F5E8E3] to-[#EBDAD3]",
        icon: "barchart",
      },
      {
        label: "Certificate View",
        gradient: "from-[#F5E6C8] to-[#E8D4A8]",
        icon: "award",
      },
    ],
    stats: [
      { value: "A+", label: "Final Grade" },
      { value: "63", label: "Pages of Docs" },
      { value: "6 Weeks", label: "Delivered In" },
      { value: "18", label: "API Routes" },
    ],
    deliverables: [
      "Complete Source Code (Full-Stack Next.js)",
      "SRS Document (63 pages)",
      "Database Schema & ER Diagrams",
      "UML Diagrams (Use Case, Activity, Class)",
      "API Documentation (Swagger)",
      "Stripe Integration Guide",
      "PowerPoint Presentation (32 slides)",
      "Deployment & Hosting Guide",
    ],
    testimonial: {
      text: "I was juggling an internship and couldn't handle my FYP. They took my requirements and delivered a fully working Learning Management System. The viva prep sessions gave me all the confidence I needed.",
      name: "Sara Malik",
      university: "LUMS",
      initials: "SM",
      color: "var(--color-amber-light)",
    },
  },
};

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
  label,
  iconKey,
  className = "",
}: {
  gradient: string;
  label: string;
  iconKey?: string;
  className?: string;
}) {
  const Icon = iconKey ? iconMap[iconKey] : ImageIcon;
  return (
    <div
      className={`img-placeholder bg-gradient-to-br ${gradient} ${className}`}
    >
      {/* Decorative shapes */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-32 h-32 rounded-3xl border-2 border-current opacity-10 rotate-12" />
        <div className="absolute w-20 h-20 rounded-full border-2 border-current opacity-8 -rotate-12 translate-x-12 translate-y-6" />
        <div className="absolute w-10 h-10 rounded-lg border-2 border-current opacity-6 rotate-45 -translate-x-16 -translate-y-8" />
      </div>
      {/* Center icon + label */}
      <div className="relative z-10 flex flex-col items-center gap-3">
        {Icon && (
          <Icon size={32} className="text-[var(--color-ink)] opacity-20" />
        )}
        <span className="text-xs font-medium text-[var(--color-stone)] bg-white/60 backdrop-blur-sm px-3 py-1 rounded-full">
          {label}
        </span>
      </div>
    </div>
  );
}

/* ═══════════════════════════════════════════
   CASE STUDY PAGE COMPONENT
   ═══════════════════════════════════════════ */

export default function CaseStudyPage() {
  const params = useParams();
  const slug = params?.slug as string;
  const project = projects[slug];

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

  /* 404 fallback */
  if (!project) {
    return (
      <>
        <Navbar />
        <main className="min-h-screen flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-heading-1 mb-4">Project Not Found</h1>
            <p className="text-body mb-8">
              The project you&apos;re looking for doesn&apos;t exist.
            </p>
            <Link href="/#projects" className="btn-primary">
              <ArrowLeft size={16} />
              Back to Projects
            </Link>
          </div>
        </main>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Navbar />
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
                className="text-body-lg mb-8 max-w-[640px]"
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
                <div className="flex items-center gap-2 text-sm text-[var(--color-graphite)]">
                  <Calendar size={14} className="text-[var(--color-amber)]" />
                  {project.duration}
                </div>
                <div className="w-[1px] h-4 bg-[var(--color-border)]" />
                <div className="flex items-center gap-2 text-sm text-[var(--color-graphite)]">
                  <Award size={14} className="text-[var(--color-amber)]" />
                  Grade: {project.grade}
                </div>
                <div className="w-[1px] h-4 bg-[var(--color-border)]" />
                <div className="flex items-center gap-2 text-sm text-[var(--color-graphite)]">
                  <Users size={14} className="text-[var(--color-amber)]" />
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
                    <span className="text-xs font-medium text-[var(--color-stone)] uppercase tracking-wider">
                      University
                    </span>
                    <p className="text-sm font-medium text-[var(--color-ink)] mt-0.5">
                      {project.client.university}
                    </p>
                  </div>
                  <div className="h-[1px] bg-[var(--color-border)]" />

                  <div>
                    <span className="text-xs font-medium text-[var(--color-stone)] uppercase tracking-wider">
                      Department
                    </span>
                    <p className="text-sm font-medium text-[var(--color-ink)] mt-0.5">
                      {project.client.department}
                    </p>
                  </div>
                  <div className="h-[1px] bg-[var(--color-border)]" />

                  <div>
                    <span className="text-xs font-medium text-[var(--color-stone)] uppercase tracking-wider">
                      Semester
                    </span>
                    <p className="text-sm font-medium text-[var(--color-ink)] mt-0.5">
                      {project.client.semester}
                    </p>
                  </div>
                  <div className="h-[1px] bg-[var(--color-border)]" />

                  <div>
                    <span className="text-xs font-medium text-[var(--color-stone)] uppercase tracking-wider">
                      Duration
                    </span>
                    <p className="text-sm font-medium text-[var(--color-ink)] mt-0.5">
                      {project.duration}
                    </p>
                  </div>
                  <div className="h-[1px] bg-[var(--color-border)]" />

                  <div>
                    <span className="text-xs font-medium text-[var(--color-stone)] uppercase tracking-wider">
                      Grade Achieved
                    </span>
                    <p className="text-lg font-bold text-[var(--color-sage)] mt-0.5">
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
            className="max-w-[800px]"
          >
            <h2 className="text-heading-2 mb-4">Project Overview</h2>
            <p className="text-body-lg">{project.description}</p>
          </motion.div>
        </section>

        {/* ── Challenge Section ── */}
        <section className="section-padding bg-[var(--color-silk)]">
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
                <h2 className="text-heading-1 mb-6">
                  {project.challenge.title}
                </h2>
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
                    className="flex items-start gap-3 p-4 bg-white rounded-xl border border-[var(--color-border)]"
                  >
                    <div className="w-6 h-6 rounded-full bg-[var(--color-amber-light)] flex items-center justify-center shrink-0 mt-0.5">
                      <span className="text-xs font-bold text-[var(--color-amber-dark)]">
                        {i + 1}
                      </span>
                    </div>
                    <p className="text-sm text-[var(--color-graphite)] leading-relaxed">
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
            <div className="max-w-[600px] mb-14">
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
                    <h3 className="font-[var(--font-display)] font-semibold text-[var(--color-ink)] text-base">
                      {highlight.title}
                    </h3>
                  </div>
                  <p className="text-sm text-[var(--color-graphite)] leading-relaxed">
                    {highlight.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Gallery Section ── */}
        <section
          className="section-padding bg-[var(--color-silk)]"
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
                    label={item.label}
                    iconKey={item.icon}
                  />
                  {/* Hover label */}
                  <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-[rgba(27,27,24,0.7)] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <span className="text-white text-sm font-semibold font-[var(--font-display)]">
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
              className="text-center max-w-[500px] mx-auto mb-12"
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
                    <Layers size={13} className="text-[var(--color-stone)]" />
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* ── Deliverables ── */}
        <section
          className="section-padding bg-[var(--color-silk)]"
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
                    transition={{ duration: 0.4, delay: 0.2 + i * 0.06 }}
                    className="deliverable-item"
                  >
                    <div className="deliverable-check">
                      <CheckCircle size={13} className="text-white" />
                    </div>
                    <span className="text-sm font-medium text-[var(--color-ink)]">
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
          <div className="section-wrapper max-w-[800px]">
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              animate={quoteInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7 }}
            >
              <div className="casestudy-pullquote">
                <Quote
                  size={32}
                  className="absolute top-6 right-6 text-[var(--color-amber)] opacity-20"
                />
                <p className="mb-6">&ldquo;{project.testimonial.text}&rdquo;</p>
                <div className="flex items-center gap-3">
                  <div
                    className="w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold font-[var(--font-display)]"
                    style={{ backgroundColor: project.testimonial.color }}
                  >
                    {project.testimonial.initials}
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-[var(--color-ink)] not-italic">
                      {project.testimonial.name}
                    </p>
                    <p className="text-xs text-[var(--color-stone)] not-italic">
                      {project.testimonial.university}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* ── CTA Banner ── */}
        <section className="section-padding bg-[var(--color-ink)] relative overflow-hidden">
          {/* Decorative elements */}
          <div className="absolute top-0 right-0 w-[300px] h-[300px] rounded-full bg-[var(--color-amber)] opacity-[0.06] blur-[100px]" />
          <div className="absolute bottom-0 left-0 w-[200px] h-[200px] rounded-full bg-[var(--color-sage)] opacity-[0.08] blur-[80px]" />

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
              className="text-body-lg mb-8 max-w-[500px] mx-auto"
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
                className="btn-outline border-[rgba(255,255,255,0.2)] text-[var(--color-ivory)] hover:bg-[var(--color-ivory)] hover:text-[var(--color-ink)]"
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
              className="inline-flex items-center gap-2 text-sm font-medium text-[var(--color-graphite)] hover:text-[var(--color-amber)] transition-colors duration-300 group"
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
      <Footer />
    </>
  );
}
