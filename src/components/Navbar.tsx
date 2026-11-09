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
    { name: "About", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Projects", href: "#portfolio" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? "bg-black/85 backdrop-blur-xl border-b border-white/10 shadow-2xl" : "bg-transparent"
        }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex-shrink-0 flex flex-col justify-center">
            <motion.a
              href="#home"
              whileHover={{ scale: 1.02, opacity: 0.9 }}
              whileTap={{ scale: 0.98 }}
              className="text-2xl font-bold tracking-wider text-white leading-none transition-all duration-300"
            >
              AxR Tech.
            </motion.a>

            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
              className="h-[1px] w-full bg-white/20 origin-left mt-1.5"
            />
          </div>

          <div className="hidden md:flex flex-1 justify-center items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-white/65 hover:text-[#caff4a] transition-colors text-sm font-medium"
              >
                {link.name}
              </a>
            ))}
          </div>

          <div className="hidden md:flex items-center">
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="#contact"
              className="btn-primary px-6 py-2.5 rounded-full text-sm"
            >
              Let&apos;s Connect
            </motion.a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white focus:outline-none"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden absolute top-20 left-0 w-full bg-[#080909] border-b border-white/10 shadow-xl">
          <div className="px-4 pt-2 pb-6 space-y-1 sm:px-3 flex flex-col pt-4">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="block px-3 py-4 text-base font-medium text-white/75 hover:text-[#caff4a] border-b border-white/5"
              >
                {link.name}
              </a>
            ))}
            <a
              href="#contact"
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
        className="h-[2px] bg-[#caff4a] origin-left"
        style={{ scaleX }}
      />
    </nav>
  );
}
