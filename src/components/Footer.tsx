"use client";

import { motion } from "framer-motion";
import { FaInstagram, FaLinkedin, FaWhatsapp } from "react-icons/fa";

export default function Footer() {
  const socialLinks = [
    {
      name: "Instagram",
      icon: <FaInstagram size={22} />,
      href: "https://instagram.com/abrar_.md",
    },
    {
      name: "LinkedIn",
      icon: <FaLinkedin size={22} />,
      href: "https://www.linkedin.com/in/mohamed-abrar-s-853821320",
    },
    {
      name: "WhatsApp",
      icon: <FaWhatsapp size={22} />,
      href: "https://wa.me/919361579953?text=Hi,%20I%20saw%20your%20portfolio%20and%20I%E2%80%99m%20interested%20in%20your%20services.",
    },
  ];

  return (
    <footer className="py-8 bg-subtle border-t border-gray-200 px-4 sm:px-6 lg:px-8 w-full">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:items-center md:justify-between gap-6">
        <div className="flex justify-center md:justify-start">
          <span className="text-xl font-bold tracking-tight text-gray-900">
            AxR Tech.
          </span>
        </div>

        <div className="flex justify-center flex-1">
          <p className="text-center text-gray-500 text-sm font-medium">
            &copy; {new Date().getFullYear()} Mohamed Abrar S. All rights reserved.
          </p>
        </div>

        <div className="flex justify-center md:justify-end gap-6">
          {socialLinks.map((link) => (
            <motion.a
              key={link.name}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={link.name}
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="text-gray-400 hover:text-gray-900 transition-colors"
            >
              {link.icon}
            </motion.a>
          ))}
        </div>
      </div>
    </footer>
  );
}
