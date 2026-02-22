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
  image: string;
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
    image: string;
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
  healthpal: {
    slug: "healthpal",
    title: "HealthPal — Healthcare Management System",
    category: "Mobile Application",
    tagline:
      "A full-stack patient management system with real-time appointment scheduling and medical records.",
    description:
      "HealthPal is a comprehensive healthcare management solution designed for small to mid-size clinics. It features patient registration, appointment scheduling with conflict detection, medical record management with search, real-time notifications, and role-based access control for administrators, doctors, and staff.",
    gradient: "from-[#E8F0E9] to-[#D4E6D6]",
    image: "/assets/projects/healthpal.png",
    accent: "var(--color-sage)",
    accentLight: "var(--color-sage-light)",
    client: {
      university: "The University of Faisalabad",
      department: "Computer Science",
      semester: "8th Semester — Final Year Project",
    },
    duration: "3 Weeks",
    grade: "A+",
    tags: [
      "React Native",
      "Expo",
      "Supabase",
      "Redux Toolkit",
      "Backend as service",
    ],
    challenge: {
      title: "The Challenge",
      description:
        "The student needed a production-quality healthcare system that demonstrated full-stack proficiency while meeting strict university requirements for documentation and architecture.",
      points: [
        "Complex role-based access control for 3 user types (Admin, Doctor, Patient)",
        "Real-time appointment slot management with conflict detection",
        "HIPAA-inspired data security patterns for medical records",
        "Full SRS documentation with UML, ER diagrams, and test cases",
        "Tight 3-week deadline with mid-project supervisor review",
      ],
    },
    solution: {
      title: "Our Solution",
      description:
        "We designed and built a modular, production-grade architecture that showcased modern application development best practices while being easy for the student to present and defend.",
      highlights: [
        {
          title: "Modular Architecture",
          description:
            "Clean, layered backend with controllers, services, and data access layers. React Native frontend with reusable component library and centralized state management.",
        },
        {
          title: "Real-Time Notifications",
          description:
            "Real-time notification system using Expo Push Notifications for instant appointment updates, status changes, and administrative alerts.",
        },
        {
          title: "Secure Authentication Flow",
          description:
            "Supabase for serverless auth, password hashing, and rate limiting for brute-force protection.",
        },
        {
          title: "Apk Deployment & Documentation",
          description:
            "Deployed APK with Expo, comprehensive SRS document with 47 pages, UML diagrams, ER diagrams, and detailed test cases for supervisor review.",
        },
      ],
    },
    gallery: [
      {
        label: "Home Screen",
        gradient: "from-[#E8F0E9] to-[#C8DEC9]",
        image:"/assets/projects/healthpal1.png",
        icon: "monitor",
      },
      {
        label: "Doctor's Overview",
        gradient: "from-[#F5E6C8] to-[#EDD9B0]",
        image:"/assets/projects/healthpal2.png",
        icon: "calendar",
      },
      {
        label: "Doctor Details and Notifications",
        gradient: "from-[#E8F0E9] to-[#D4E6D6]",
        image:"/assets/projects/healthpal3.png",
        icon: "database",
      },
      {
        label: "Doctor's Profile",
        gradient: "from-[#F5E8E3] to-[#EBDAD3]",
        image:"/assets/projects/healthpal4.png",
        icon: "layers",
      },
      {
        label: "Appointment System",
        gradient: "from-[#E8F0E9] to-[#C8DEC9]",
        image:"/assets/projects/healthpal5.png",
        icon: "smartphone",
      },
    ],
    stats: [
      { value: "A+", label: "Final Grade" },
      { value: "57", label: "Pages of Docs" },
      { value: "3 Weeks", label: "Delivered In" },
      { value: "12", label: "API Endpoints" },
      { value: "3", label: "User Roles" },
    ],
    deliverables: [
      "Complete Source Code (Frontend + Backend)",
      "SRS Document (57 pages)",
      "Database ER Diagrams",
      "UML Diagrams (Use Case, Sequence, Class)",
      "Test Cases & Testing Report",
      "Deployment Guide",
      "PowerPoint Presentation (28 slides)",
      "Viva Preparation Notes",
    ],
    testimonial: {
      text: "They delivered the entire project in React Native, Supabase backend, and full documentation. My supervisor was genuinely impressed with the SRS quality. Got an A without a single revision.",
      name: "Ahmed Khurram",
      university: "The University of Faisalabad",
      initials: "AK",
      color: "var(--color-amber-light)",
    },
  },
  chatpdf: {
    slug: "chatpdf",
    title: "ChatPdf — AI Chatbot for PDF Question Answering",
    category: "AI & NLP Project",
    tagline:
      "AI-powered chatbot that answers questions from PDF documents using llms and a Next.js dashboard.",
    description:
      "ChatPdf is an AI-driven chatbot application that allows users to upload PDF documents and ask questions about their content. The system uses llms for natural language understanding, a node backend for processing, and a Nextjs dashboard for interactive data visualization of insights extracted from the PDFs.",
    gradient: "from-[#F5E6C8] to-[#EDD9B0]",
    image: "/assets/projects/chatpdf.png",
    accent: "var(--color-amber)",
    accentLight: "var(--color-amber-light)",
    client: {
      university: "GC University Faisalabad",
      department: "Computer Science",
      semester: "8th Semester — Final Year Project",
    },
    duration: "4 Weeks",
    grade: "A",
    tags: [
      "Next.js",
      "Typescript",
      "Vercel SDK",
      "PostgreSQL",
      "LLMs",
      "Clerk",
      "Tailwind CSS",
    ],
    challenge: {
      title: "The Challenge",
      description:
        "The student needed to build a technically impressive AI project that also had a polished frontend for their viva presentation. The project had to demonstrate both ML expertise and modern web development skills.",
      points: [
        "Using prebuild llms for question-answering tasks on custom PDF",
        "Building a  dashboard to visualize insights extracted from PDFs",
        "Implementing secure user authentication and file handling for uploads",
        "Integrating models for accurate information retrieval from documents",
        "Docker-based deployment for reproducible environments",
      ],
    },
    solution: {
      title: "Our Solution",
      description:
        "We developed a full-stack solution that combined llm model for PDF question-answering with a sleek Next.js dashboard for visualizing insights, all while ensuring the student had comprehensive documentation to confidently defend their project.",
      highlights: [
        {
          title: "Memory-Enhanced LLM Architecture",
          description:
            "fine-tuned LLM for PDF question-answering, with a custom context memory layer to handle multi-turn conversations and maintain state across interactions.",
        },
        {
          title: "Secure PDF Handling & Authentication",
          description:
            "Secure handling of PDF uploads with user authentication and file validation. Implemented Clerk for secure authentication and session management.",
        },
        {
          title: "Interactive Dashboard",
          description:
            "Next.js dashboard with dynamic data visualization of insights extracted from PDFs, and summary sections.",
        },
        {
          title: "Comprehensive Documentation & Deployment",
          description:
            "Complete SRS documentation with UML diagrams, API docs, and a Docker-based deployment setup for easy local testing and demonstration during viva.",
        },
      ],
    },
    gallery: [
      {
        label: "Home Screen Hero Section",
        gradient: "from-[#F5E6C8] to-[#E8D4A8]",
        image:"/assets/projects/chatpdf.png",
        icon: "barchart",
      },
      {
        label: "PDF Uploads",
        gradient: "from-[#E8F0E9] to-[#D4E6D6]",
        image:"/assets/projects/chatpdf2.png",
        icon: "monitor",
      },
      {
        label: "Insights Dashboard",
        gradient: "from-[#F5E6C8] to-[#EDD9B0]",
        image:"/assets/projects/chatpdf3.png",
        icon: "globe",
      },
      {
        label: "Chat Interface",
        gradient: "from-[#F5E8E3] to-[#EBDAD3]",
        image:"/assets/projects/chatpdf4.png",
        icon: "filetext",
      },
      {
        label: "Profile & Settings",
        gradient: "from-[#F5E6C8] to-[#E8D4A8]",
        image:"/assets/projects/chatpdf5.png",
        icon: "cpu",
      },
    ],
    stats: [
      { value: "A", label: "Final Grade" },
      { value: "60", label: "Pages Docs" },
      { value: "4 Weeks", label: "Delivered In" },
      { value: "8", label: "API Endpoints" },
    ],
    deliverables: [
      "Complete Source Code (Backend + Frontend)",
      "SRS Document (60 pages)",
      "Database ER Diagrams",
      "UML Diagrams (Use Case, Sequence, Class)",
      "Test Cases & Testing Report",
      "Docker Compose Setup",
      "PowerPoint Presentation (35 slides)",
    ],
    testimonial: {
      text: "They delivered a fully working AI chatbot with a Next.js dashboard. The SRS documentation was so detailed that my supervisor had no questions during the viva. I got an A without any revisions.",
      name: "Fatima Noor",
      university: "GC University Faisalabad",
      initials: "FN",
      color: "var(--color-sage-light)",
    },
  },
  synapse: {
    slug: "synapse",
    title: "SYNAPSE — AI-Powered Job Matching Platform",
    category: "Web Application",
    tagline:
      "A full-featured platform that parses resumes, matches skills, and generates hiring recommendations in seconds.",
    description:
      "EduConnect is a full-featured learning management system enabling instructors to publish courses with video content, create quizzes, track student progress, and issue verified certificates. It includes Stripe payment integration, an admin analytics dashboard, and a fully responsive design.",
    gradient: "from-[#F5E8E3] to-[#EBDAD3]",
    image: "/assets/projects/synapse.png",
    accent: "var(--color-blush)",
    accentLight: "var(--color-blush-light)",
    client: {
      university: "Riphah International University",
      department: "Software Engineering",
      semester: "8th Semester — Final Year Project",
    },
    duration: "4 Weeks",
    grade: "A+",
    tags: [
      "Next.js",
      "FastAPI",
      "Langgraph",
      "PostgreSQL",
      "OpenAI API",
      "Tailwind CSS",
      "NextAuth",
      "Zustand",
    ],
    challenge: {
      title: "The Challenge",
      description:
        "The student needed to refined a technically impressive LMS that also had a polished frontend for their viva presentation. The project had to demonstrate both backend and frontend expertise while meeting strict university documentation requirements.",
      points: [
        "Resume parsing and skill extraction using llms for accurate job matching",
        "Analyzing job descriptions to generate candidate fit scores and hiring recommendations",
        "Building a sleek Next.js dashboard for recruiters to view candidate profiles and insights",
        "Implementing secure authentication for recruiters analyzing sensitive candidate data",
        "Comprehensive SRS documentation with UML diagrams, ER diagrams, and test cases for supervisor review",
      ],
    },
    solution: {
      title: "Our Solution",
      description:
        "We delivered a production-ready AI-powered job matching platform using Next.js with server-side rendering, FastAPI backend, and Langgraph for LLM orchestration. The clean component architecture and comprehensive documentation made it easy for the student to explain during their viva.",
      highlights: [
        {
          title: "Next.js App Router Architecture",
          description:
            "Leveraged the App Router with server components for optimal performance, parallel routes for dashboards, and middleware for authentication & authorization.",
        },
        {
          title: "Resume Parsing & Skill Extraction",
          description:
            "Using OpenAI API to parse resumes and extract relevant skills for accurate job matching.",
        },
        {
          title: "Job Description Analysis & Fit Scoring",
          description:
            "Analyzing job descriptions to generate candidate fit scores and hiring recommendations using LLMs.",
        },
        {
          title: "AI Assistant for Recruiters",
          description:
            "Integrated an AI assistant within the dashboard to provide real-time insights and chat feature on candidate profiles.",
        },
      ],
    },
    gallery: [
      {
        label: "Dashboard Overview",
        gradient: "from-[#F5E8E3] to-[#E8D4CC]",
        image:"/assets/projects/synapse1.png",
        icon: "bookopen",
      },
      {
        label: "Job Creating",
        gradient: "from-[#F5E6C8] to-[#EDD9B0]",
        image:"/assets/projects/synapse2.png",
        icon: "monitor",
      },
      {
        label: "Profile Analysis",
        gradient: "from-[#E8F0E9] to-[#D4E6D6]",
        image:"/assets/projects/synapse3.png",
        icon: "code",
      },
      {
        label: "Profile Analytics",
        gradient: "from-[#F5E8E3] to-[#EBDAD3]",
        image:"/assets/projects/synapse4.png",
        icon: "barchart",
      },
      {
        label: "AI Assistant Insights",
        gradient: "from-[#F5E6C8] to-[#E8D4A8]",
        image:"/assets/projects/synapse5.png",
        icon: "award",
      },
    ],
    stats: [
      { value: "A+", label: "Final Grade" },
      { value: "63", label: "Pages of Docs" },
      { value: "4 Weeks", label: "Delivered In" },
      { value: "18", label: "API Routes" },
    ],
    deliverables: [
      "Complete Source Code (Full-Stack Next.js + FastAPI)",
      "SRS Document (63 pages)",
      "Database Schema & ER Diagrams",
      "UML Diagrams (Use Case, Activity, Class)",
      "PowerPoint Presentation (32 slides)",
      "Deployment & Hosting Guide",
    ],
    testimonial: {
      text: "They delivered a fully working AI job matching platform with a sleek Next.js dashboard. The SRS documentation was so detailed that my supervisor had no questions during the viva. I got an A+ without any revisions.",
      name: "Moiz Khan",
      university: "Riphah International University",
      initials: "MK",
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
