/* ═══════════════════════════════════════════
   PROJECT DATA & TYPES
   ═══════════════════════════════════════════ */

export interface ProjectData {
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

export const projects: Record<string, ProjectData> = {
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

/** All valid project slugs for static generation */
export const PROJECT_SLUGS = Object.keys(projects);

/** Get a project by slug, returns undefined if not found */
export function getProjectBySlug(slug: string): ProjectData | undefined {
  return projects[slug];
}
