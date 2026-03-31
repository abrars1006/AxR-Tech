"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { motion, useScroll, useSpring } from "framer-motion";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "Services", href: "#services" },
    { name: "Portfolio", href: "#portfolio" },
    { name: "Pricing", href: "#pricing" },
    { name: "About", href: "#about" },
    { name: "FAQ", href: "#faq" },
  ];

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? "bg-white/95 backdrop-blur-md border-b border-gray-200 shadow-sm" : "bg-transparent"
        }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex-shrink-0 flex flex-col justify-center">
            <motion.a
              href="#home"
              whileHover={{ scale: 1.02, opacity: 0.9 }}
              whileTap={{ scale: 0.98 }}
              className="text-2xl font-bold tracking-wider text-[#1F2937] leading-none transition-all duration-300"
            >
              AxR Tech.
            </motion.a>

            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
              className="h-[1px] w-full bg-gray-200 origin-left mt-1.5"
            />
          </div>

          <div className="hidden md:flex flex-1 justify-center items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-gray-600 hover:text-gray-900 transition-colors text-sm font-medium"
              >
                {link.name}
              </a>
            ))}
          </div>

          <div className="hidden md:flex items-center">
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="https://wa.me/919361579953?text=Hi,%20I%20saw%20your%20portfolio%20and%20I%E2%80%99m%20interested%20in%20your%20services."
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary px-6 py-2.5 rounded-full text-sm"
            >
              Book a Call
            </motion.a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-900 focus:outline-none"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden absolute top-20 left-0 w-full bg-white border-b border-gray-100 shadow-xl">
          <div className="px-4 pt-2 pb-6 space-y-1 sm:px-3 flex flex-col pt-4">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="block px-3 py-4 text-base font-medium text-gray-700 hover:text-gray-900 border-b border-gray-50"
              >
                {link.name}
              </a>
            ))}
            <a
              href="https://wa.me/919361579953?text=Hi,%20I%20saw%20your%20portfolio%20and%20I%E2%80%99m%20interested%20in%20your%20services."
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setIsOpen(false)}
              className="mt-6 block text-center btn-primary px-6 py-3 rounded-full font-medium"
            >
              Book a Call
            </a>
          </div>
        </div>
      )}

      {/* Scroll Progress Bar */}
      <motion.div
        className="h-[2px] bg-gray-900 origin-left"
        style={{ scaleX }}
      />
    </nav>
  );
}
