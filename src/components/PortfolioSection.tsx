"use client";

import { motion } from "framer-motion";
import { ExternalLink, Code2 } from "lucide-react";
import Image from "next/image";

export default function PortfolioSection() {
  const projects = [
    {
      title: "Diamond Construction",
      description: "A premium, bespoke web application for a high-end commercial and residential construction company, emphasizing striking visuals and strong business conversions.",
      techStack: ["React", "Next.js", "Tailwind CSS", "Framer Motion"],
      demoUrl: "https://diamond-construction.vercel.app",
      image: "/diamond-construction.png",
    }
  ];

  return (
    <section id="portfolio" className="py-24 bg-subtle relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">My Work</h2>
          <div className="w-16 h-1 bg-gray-900 mx-auto rounded-full" />
          <p className="mt-6 text-gray-500 max-w-2xl mx-auto text-lg">
            A selection of my recent projects. Demonstrating high-quality code and beautiful design.
          </p>
        </motion.div>

        <div className="space-y-16">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7 }}
              className={`flex flex-col ${index % 2 === 1 ? 'md:flex-row-reverse' : 'md:flex-row'} gap-8 md:gap-16 items-center`}
            >
              {/* Project Image */}
              <a href={project.demoUrl} target="_blank" rel="noopener noreferrer" className="w-full md:w-1/2 block">
                <div className="relative aspect-[4/3] rounded-2xl overflow-hidden minimal-card group">
                  <Image 
                    src={project.image} 
                    alt={`${project.title} Preview`}
                    fill
                    className="object-cover object-top transform group-hover:scale-[1.02] transition-transform duration-700"
                  />
                </div>
              </a>

              {/* Project Info */}
              <div className="w-full md:w-1/2 space-y-6">
                <a href={project.demoUrl} target="_blank" rel="noopener noreferrer" className="inline-block hover:opacity-80 transition-opacity">
                  <h3 className="text-3xl font-bold text-gray-900">{project.title}</h3>
                </a>
                
                <div className="p-6 bg-white border border-gray-100 rounded-xl shadow-sm">
                  <p className="text-gray-600 leading-relaxed text-base">
                    {project.description}
                  </p>
                </div>

                <div className="flex flex-wrap gap-2">
                  {project.techStack.map((tech, techIdx) => (
                    <span 
                      key={techIdx} 
                      className="px-3 py-1 rounded-full bg-gray-100 text-gray-700 text-xs font-semibold uppercase tracking-wider border border-gray-200"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex flex-col sm:flex-row gap-4 pt-4">
                  <motion.a
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    href={project.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-6 py-3 rounded-xl btn-primary flex items-center justify-center gap-2"
                  >
                    <ExternalLink size={18} />
                    View Project
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
