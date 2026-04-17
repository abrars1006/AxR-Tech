"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";

export default function PricingSection() {
  const plans = [
    {
      name: "Landing Page",
      price: "₹1,599/-",
      description: "Perfect for single page campaigns",
      features: ["Single beautiful landing page", "Responsive design", "SEO Optimized", "Contact Form Integration"],
      isPopular: false,
    },
    {
      name: "3 Pages Site",
      price: "₹3,999/-",
      description: "Ideal for growing businesses",
      features: ["Up to 3 distinct pages", "Basic backend functionality", "CMS Integration", "Performance Optimized"],
      isPopular: true,
    },
  ];

  return (
    <section id="pricing" className="py-24 bg-white border-y border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">Pricing Plans</h2>
          <div className="w-16 h-1 bg-gray-900 mx-auto rounded-full" />
          <p className="mt-6 text-gray-500 max-w-2xl mx-auto text-lg">
            Transparent pricing for high-quality development. Choose a plan that fits your needs.
          </p>
        </motion.div>

        <div className="flex flex-col md:flex-row justify-center items-center gap-8 max-w-5xl mx-auto">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className={`relative flex flex-col p-8 rounded-2xl w-full md:w-[400px] transition-all duration-300 ${plan.isPopular
                  ? "bg-white border-2 border-gray-900 shadow-xl scale-100 md:scale-105 z-10"
                  : "bg-white border border-gray-200 shadow-sm"
                }`}
            >
              {plan.isPopular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-gray-900 text-white text-xs font-bold tracking-wide uppercase">
                  Most Popular
                </div>
              )}

              <div className="mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                <p className="text-gray-500 text-sm">{plan.description}</p>
              </div>

              <div className="mb-8">
                <span className="text-4xl font-extrabold text-gray-900">
                  {plan.price}
                </span>
                <span className="text-gray-500 text-sm ml-2 font-medium">starting</span>
              </div>

              <ul className="space-y-4 mb-8 flex-grow">
                {plan.features.map((feature, fIndex) => (
                  <li key={fIndex} className="flex items-center gap-3">
                    <div className="flex-shrink-0 w-5 h-5 rounded-full bg-gray-100 flex items-center justify-center">
                      <Check size={14} className="text-gray-900" />
                    </div>
                    <span className="text-gray-600 text-sm font-medium">{feature}</span>
                  </li>
                ))}
              </ul>

              <motion.a
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                href="#contact"
                className={`w-full py-3.5 rounded-xl text-center font-medium transition-all ${plan.isPopular
                    ? "btn-primary shadow-md"
                    : "btn-secondary"
                  }`}
              >
                Get Started
              </motion.a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
