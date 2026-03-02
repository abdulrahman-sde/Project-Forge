import CTASection from "./components/CTASection";
import FAQSection from "./components/FAQSection";
import Footer from "./components/Footer";
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import PricingSection from "./components/PricingSection";
import ProcessSection from "./components/ProcessSection";
import ProjectsShowcase from "./components/ProjectsShowcase";
import ServicesSection from "./components/ServicesSection";
import StatsBar from "./components/StatsBar";
import TestimonialsSection from "./components/TestimonialsSection";
import {
  FAQJsonLd,
  ServicesJsonLd,
  WebPageJsonLd,
  PricingJsonLd,
} from "./components/JsonLd";
import { SITE_URL, SITE_NAME, SITE_TAGLINE } from "./lib/seo";

const homepageFaqs = [
  {
    question: "Is this completely confidential?",
    answer:
      "Absolutely. We never share your project details, personal information, or any deliverables with anyone. Every project is built from scratch exclusively for you, and we sign NDAs upon request. Your privacy is our top priority.",
  },
  {
    question: "Will the project pass plagiarism checks?",
    answer:
      "Yes. Every project is developed original from the ground up — no templates, no recycled code. Documentation is written fresh for each client. We can provide plagiarism reports (Turnitin-compatible) upon request before final delivery.",
  },
  {
    question: "How many revisions do I get?",
    answer:
      "This depends on your package. The Starter plan includes 1 revision round, Professional includes 3 rounds, and Premium comes with unlimited revisions. We work with you until your supervisor approves the deliverables.",
  },
  {
    question: "Can you match my university's specific format?",
    answer:
      "Yes — we've worked with 20+ universities and are familiar with various documentation formats, citation styles, and submission guidelines. Just share your university's template or guidelines, and we'll follow them precisely.",
  },
  {
    question: "What if my supervisor asks for changes?",
    answer:
      "That's covered under your revision rounds. Share the feedback, and we'll implement the changes quickly. For Premium clients, we offer direct coordination where we can respond to supervisor comments within 24 hours.",
  },
  {
    question: "How do payments work?",
    answer:
      "We work on a milestone-based payment system: 30% upfront to begin work, and 70% upon delivery and your approval. We accept bank transfers, JazzCash, EasyPaisa, and international payments. No hidden fees.",
  },
  {
    question: "Can I see progress during development?",
    answer:
      "Absolutely. You receive regular progress updates with screenshots, demo links, and milestone check-ins. Professional and Premium clients get access to a shared project board where you can track every task in real-time.",
  },
  {
    question: "Do you provide defense/viva preparation?",
    answer:
      "Yes. All packages include documentation that prepares you for common questions. The Premium package includes dedicated 1-on-1 viva coaching sessions, a list of expected questions with answers, and a mock defense walkthrough.",
  },
];

export default function Home() {
  return (
    <main className="bg-[var(--color-ivory)] min-h-screen text-[var(--color-ink)] overflow-hidden">
      {/* Page-level structured data */}
      <WebPageJsonLd
        title={`${SITE_NAME} — ${SITE_TAGLINE}`}
        description="We build and document complete Final Year Projects for university students. Expert web, AI/ML & mobile development with full SRS, reports, and presentations."
        url={SITE_URL}
      />
      <ServicesJsonLd />
      <FAQJsonLd faqs={homepageFaqs} />
      <PricingJsonLd />

      <Navbar />
      <HeroSection />
      <StatsBar />
      <ServicesSection />
      <ProcessSection />
      <ProjectsShowcase />
      <PricingSection />
      <FAQSection />
      <TestimonialsSection />
      <CTASection />
      <Footer />
    </main>
  );
}
