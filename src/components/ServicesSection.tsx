"use client";

import { motion } from "framer-motion";
import { MonitorSmartphone, ShoppingCart, LayoutTemplate, Zap } from "lucide-react";

export default function ServicesSection() {
  const services = [
    {
      title: "Full Stack Web Development",
      description: "Custom-built, scalable, and secure web applications tailored to your business needs.",
      icon: <MonitorSmartphone size={28} className="text-gray-900" />,
      delay: 0.1,
    },
    {
      title: "E-commerce Development",
      description: "High-converting online stores with seamless payment gateways and inventory management.",
      icon: <ShoppingCart size={28} className="text-gray-900" />,
      delay: 0.2,
    },
    {
      title: "UI/UX Design",
      description: "User-centric designs with modern aesthetics, ensuring an engaging and intuitive experience.",
      icon: <LayoutTemplate size={28} className="text-gray-900" />,
      delay: 0.3,
    },
    {
      title: "Website Optimization",
      description: "Performance enhancements, SEO best practices, and fast load times to boost conversions.",
      icon: <Zap size={28} className="text-gray-900" />,
      delay: 0.4,
    },
  ];

  return (
    <section id="services" className="py-24 bg-white border-y border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">Services</h2>
          <div className="w-16 h-1 bg-gray-900 mx-auto rounded-full" />
          <p className="mt-6 text-gray-500 max-w-2xl mx-auto text-lg">
            Comprehensive digital solutions to help your brand stand out and succeed online.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: service.delay }}
              className="minimal-card p-8 flex flex-col h-full hover:-translate-y-1"
            >
              <div className="w-14 h-14 rounded-xl bg-gray-50 border border-gray-100 flex items-center justify-center mb-6">
                {service.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {service.title}
              </h3>
              <p className="text-gray-500 leading-relaxed flex-grow text-sm">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
