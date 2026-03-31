"use client";

import { motion } from "framer-motion";
import { ArrowRight, MessageCircle } from "lucide-react";

export default function HeroSection() {
  return (
    <section id="home" className="relative pt-32 pb-20 md:pt-48 md:pb-32 flex items-center min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 w-full">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-4xl mx-auto"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-gray-200 bg-white shadow-sm mb-8"
          >
            <span className="flex h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
            <span className="text-sm font-medium text-gray-600">Available for freelance work</span>
          </motion.div>

          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-8 text-gray-900 leading-[1.1]">
            I build high-converting websites for
            <span className="block mt-2 text-gray-400">modern brands.</span>
          </h1>
          
          <p className="mt-6 text-xl md:text-2xl text-gray-500 mb-10 max-w-2xl mx-auto font-light leading-relaxed">
            I'm <span className="text-gray-900 font-medium">Abrar</span>, a full-stack developer helping businesses grow with powerful, scalable websites.
          </p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-6"
          >
            <a
              href="#portfolio"
              className="w-full sm:w-auto px-8 py-4 rounded-full btn-primary flex items-center justify-center gap-2 group"
            >
              View My Work
              <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
            </a>
            
            <a
              href="https://wa.me/919361579953"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-8 py-4 rounded-full btn-secondary flex items-center justify-center gap-2"
            >
              <MessageCircle size={20} />
              Book a Call
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
