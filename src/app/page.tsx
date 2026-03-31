import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ServicesSection from "@/components/ServicesSection";
import PortfolioSection from "@/components/PortfolioSection";
import PricingSection from "@/components/PricingSection";
import FaqSection from "@/components/FaqSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="relative bg-white text-gray-900">
      <Navbar />
      <HeroSection />
      <div className="bg-gray-50 border-y border-gray-200">
        <AboutSection />
      </div>
      <ServicesSection />
      <div className="bg-gray-50 border-y border-gray-200">
        <PortfolioSection />
      </div>
      <PricingSection />
      <div className="bg-gray-50 border-y border-gray-200">
        <FaqSection />
      </div>
      <ContactSection />
      <Footer />
    </main>
  );
}
