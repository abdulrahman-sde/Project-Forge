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

export default function Home() {
  return (
    <main className="bg-[var(--color-ivory)] min-h-screen text-[var(--color-ink)] overflow-hidden">
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
