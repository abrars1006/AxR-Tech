"use client";

import { motion } from "framer-motion";
import { Code, Layout, Globe, Search, Database, Smartphone, Zap, Server } from "lucide-react";

const skills = [
  { name: "React", icon: Layout, description: "Building interactive user interfaces" },
  { name: "Next.js", icon: Zap, description: "Scalable server-side rendering" },
  { name: "Node.js", icon: Server, description: "Efficient backend development" },
  { name: "TypeScript", icon: Code, description: "Statically typed JavaScript" },
  { name: "Tailwind CSS", icon: Smartphone, description: "Modern responsive utility-first CSS" },
  { name: "MongoDB", icon: Database, description: "NoSQL database management" },
  { name: "UI/UX Design", icon: Globe, description: "User-centric design principles" },
  { name: "SEO Optimization", icon: Search, description: "Enhancing online visibility" },
];

export default function SkillsSection() {
  return (
    <section id="skills" className="section-padding bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-sm font-bold uppercase tracking-[0.2em] text-[#4A5565] mb-4"
          >
            My Tech Stack
          </motion.h2>
          <motion.h3
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-5xl font-bold text-[#101828]"
          >
            Tools I Use to Build
          </motion.h3>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="group p-8 border border-gray-100 bg-[#F9FAFB] rounded-2xl hover:bg-[#101828] transition-all duration-300 shadow-sm hover:shadow-xl hover:translate-y-[-4px]"
            >
              <div className="mb-4 text-[#101828] group-hover:text-white transition-colors duration-300">
                <skill.icon size={32} />
              </div>
              <h4 className="text-lg font-bold text-[#101828] group-hover:text-white transition-colors duration-300">
                {skill.name}
              </h4>
              <p className="text-sm text-[#4A5565] group-hover:text-gray-400 mt-2 transition-colors duration-300 leading-relaxed">
                {skill.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
