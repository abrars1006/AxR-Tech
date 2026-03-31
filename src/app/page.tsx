"use client";

import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ServicesSection from "@/components/ServicesSection";
import ResultsSection from "@/components/ResultsSection";
import PortfolioSection from "@/components/PortfolioSection";
import PricingSection from "@/components/PricingSection";
import FaqSection from "@/components/FaqSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <motion.main 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="relative bg-white text-gray-900"
    >
      <Navbar />
      <HeroSection />
      <div className="bg-gray-50 border-y border-gray-200">
        <AboutSection />
      </div>
      <ServicesSection />
      <div className="bg-gray-50 border-y border-gray-200">
        <ResultsSection />
      </div>
      <PortfolioSection />
      <div className="bg-gray-50 border-y border-gray-200">
        <PricingSection />
      </div>
      <div className="bg-gray-50 border-y border-gray-200">
        <FaqSection />
      </div>
      <ContactSection />
      <Footer />
    </motion.main>
  );
}
