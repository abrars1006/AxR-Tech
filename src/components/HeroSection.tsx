"use client";

import { motion } from "framer-motion";
import { ArrowRight, MessageCircle, Code2, Bot, Braces, Binary } from "lucide-react";

export default function HeroSection() {
  return (
    <section id="home" className="relative pt-32 pb-20 md:pt-48 md:pb-32 flex items-center min-h-screen bg-gray-50/50 overflow-hidden">
      {/* Animated Background Icons */}
      <div className="absolute inset-0 z-0 opacity-5 pointer-events-none text-gray-900 overflow-hidden">
        <motion.div
          animate={{ y: [0, -20, 0], x: [0, 10, 0], rotate: [0, 5, 0] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-[15%] left-[10%]"
        >
          <Code2 size={64} />
        </motion.div>
        <motion.div
          animate={{ y: [0, 20, 0], x: [0, -10, 0], rotate: [0, -5, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute top-[20%] right-[15%]"
        >
          <Bot size={72} /> {/* ChatGPT icon representation */}
        </motion.div>
        <motion.div
          animate={{ y: [0, 15, 0], x: [0, 15, 0], rotate: [0, 10, 0] }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          className="absolute bottom-[25%] left-[20%]"
        >
          <Braces size={56} /> {/* JS/Syntax representation */}
        </motion.div>
        <motion.div
          animate={{ y: [0, -15, 0], x: [0, -15, 0], rotate: [0, -10, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
          className="absolute bottom-[30%] right-[25%]"
        >
          <Binary size={80} /> {/* React/Tech representation */}
        </motion.div>
      </div>

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
              Elevating brands with
              <span className="block mt-2 text-gray-400">custom web solutions.</span>
            </h1>
            
            <p className="mt-6 text-xl md:text-2xl text-gray-500 mb-10 max-w-2xl mx-auto font-light leading-relaxed">
              Professional, confident, and focused on building modern business websites that outpace the competition.
            </p>
  
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-6 relative z-10"
            >
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="#portfolio"
                className="w-full sm:w-auto px-8 py-4 rounded-full btn-primary flex items-center justify-center gap-2 group"
              >
                View My Work
                <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
              </motion.a>
              
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="https://docs.google.com/forms/d/e/1FAIpQLSeP0gWggpESObmrun9AnIqsykPZlfYhtQtMO2XfqmcOXnNIDA/viewform"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-8 py-4 rounded-full btn-secondary flex items-center justify-center gap-2 bg-white/80 backdrop-blur-sm"
              >
                <MessageCircle size={20} />
                Book a Call
              </motion.a>
            </motion.div>
          </motion.div>
        </div>
      </section>
  );
}
