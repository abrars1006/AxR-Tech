"use client";

import { motion } from "framer-motion";
import { User, Code2, Database, Layout } from "lucide-react";
import Image from "next/image";

export default function AboutSection() {
  return (
    <section id="about" className="py-24 bg-subtle relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">About Me</h2>
          <div className="w-16 h-1 bg-gray-900 mx-auto rounded-full" />
        </motion.div>

        <div className="flex flex-col md:flex-row items-center gap-12 lg:gap-20">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="w-full md:w-1/2 flex justify-center"
          >
            <div className="relative w-64 h-80 md:w-80 md:h-[400px] rounded-2xl overflow-hidden shadow-xl border border-gray-200 bg-white p-2">
              <div className="w-full h-full rounded-xl overflow-hidden relative">
                <Image 
                  src="/profile-new.jpg"
                  alt="Mohamed Abrar S"
                  fill
                  className="object-cover object-top"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="w-full md:w-1/2 space-y-6"
          >
            <h3 className="text-2xl md:text-3xl font-semibold text-gray-900 leading-tight">
              Building modern, high-performance websites that drive results.
            </h3>
            
            <p className="text-lg text-gray-600 leading-relaxed">
              I am a passionate full-stack developer focused on building modern, 
              high-performance websites. I help businesses grow by creating scalable 
              and user-friendly digital experiences.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-6">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-lg bg-white border border-gray-100 text-gray-900 shadow-sm">
                  <Layout size={24} />
                </div>
                <div>
                  <h4 className="text-gray-900 font-semibold mb-1">Frontend</h4>
                  <p className="text-sm text-gray-500">React, Next.js, Tailwind</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-lg bg-white border border-gray-100 text-gray-900 shadow-sm">
                  <Database size={24} />
                </div>
                <div>
                  <h4 className="text-gray-900 font-semibold mb-1">Backend</h4>
                  <p className="text-sm text-gray-500">Node.js, Express, MongoDB</p>
                </div>
              </div>

              <div className="flex items-start gap-4 sm:col-span-2">
                <div className="p-3 rounded-lg bg-white border border-gray-100 text-gray-900 shadow-sm">
                  <Code2 size={24} />
                </div>
                <div>
                  <h4 className="text-gray-900 font-semibold mb-1">Clean Code</h4>
                  <p className="text-sm text-gray-500">Scalable & Maintainable Architecture</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
