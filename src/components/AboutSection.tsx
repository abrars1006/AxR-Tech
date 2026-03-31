"use client";

import { motion } from "framer-motion";
import { User, CheckCircle2, Calendar, Briefcase, Award } from "lucide-react";
import Image from "next/image";

export default function AboutSection() {
  return (
    <section id="about" className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row items-center gap-12 lg:gap-24">
          
          {/* Left Column: Profile Image */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="w-full md:w-5/12 flex justify-center md:justify-end order-1 md:order-1"
          >
            <motion.div 
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
              className="relative w-72 h-72 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-[2.5rem] overflow-hidden shadow-2xl border border-gray-100 bg-white p-2"
            >
              <div className="w-full h-full rounded-[2rem] overflow-hidden relative bg-gray-50">
                <Image 
                  src="/abrar-profile.jpg"
                  alt="Mohamed Abrar S"
                  fill
                  className="object-cover object-top hover:scale-105 transition-transform duration-700"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            </motion.div>
          </motion.div>

          {/* Right Column: Content */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="w-full md:w-7/12 space-y-8 order-2 md:order-2"
          >
            <div className="space-y-6">
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 tracking-tight">About.</h2>
              </motion.div>
              
              <p className="text-lg text-gray-600 leading-relaxed max-w-2xl">
                I’m Mohamed Abrar S, a 20-year-old developer and designer from India. 
                I build modern, high-performing websites that help businesses establish 
                a strong online presence. My focus is on clean design, smooth user 
                experience, and delivering real results through every project.
              </p>
            </div>

            {/* Tags / Skills */}
            <div className="flex flex-wrap gap-3 pt-2">
              <span className="px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-200 rounded-full shadow-sm">
                Web Development
              </span>
              <span className="px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-200 rounded-full shadow-sm">
                UI/UX Design
              </span>
            </div>

            {/* Info Blocks (Stats Style) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-6">
              
              <motion.div 
                whileHover={{ y: -4 }}
                className="flex items-center gap-4 p-4 rounded-2xl bg-gray-50 border border-gray-100 transition-all cursor-default"
              >
                <div className="w-12 h-12 rounded-full bg-white shadow-sm flex items-center justify-center shrink-0 border border-gray-100">
                  <Award className="text-emerald-600" size={20} />
                </div>
                <div>
                  <p className="font-bold text-gray-900 leading-tight">100% Satisfied <br/> Clients</p>
                </div>
              </motion.div>

              <motion.div 
                whileHover={{ y: -4 }}
                className="flex items-center gap-4 p-4 rounded-2xl bg-gray-50 border border-gray-100 transition-all cursor-default"
              >
                <div className="w-12 h-12 rounded-full bg-white shadow-sm flex items-center justify-center shrink-0 border border-gray-100">
                  <Calendar className="text-blue-600" size={20} />
                </div>
                <div>
                  <p className="font-bold text-gray-900 leading-tight">Founded <br/> April 2026</p>
                </div>
              </motion.div>

              <motion.div 
                whileHover={{ y: -4 }}
                className="flex items-center gap-4 p-4 rounded-2xl bg-gray-50 border border-gray-100 transition-all cursor-default sm:col-span-2"
              >
                <div className="w-12 h-12 rounded-full bg-white shadow-sm flex items-center justify-center shrink-0 border border-gray-100">
                  <Briefcase className="text-gray-900" size={20} />
                </div>
                <div>
                  <p className="text-sm text-gray-500 mb-0.5 font-medium">Founder & Developer</p>
                  <p className="font-bold text-gray-900 leading-tight text-lg">AxR Tech</p>
                </div>
              </motion.div>

            </div>

          </motion.div>
        </div>

      </div>
    </section>
  );
}
