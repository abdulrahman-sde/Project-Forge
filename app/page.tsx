import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import StatsBar from "./components/StatsBar";
import ServicesSection from "./components/ServicesSection";
import ProcessSection from "./components/ProcessSection";
import ProjectsShowcase from "./components/ProjectsShowcase";
import TestimonialsSection from "./components/TestimonialsSection";
import PricingSection from "./components/PricingSection";
import FAQSection from "./components/FAQSection";
import CTASection from "./components/CTASection";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <StatsBar />
        <div className="section-divider" />
        <ServicesSection />
        <ProcessSection />
        <div className="section-divider" />
        <ProjectsShowcase />
        <TestimonialsSection />
        <div className="section-divider" />
        <PricingSection />
        <FAQSection />
        <div className="section-divider" />
        <CTASection />
      </main>
      <Footer />
    </>
  );
}
