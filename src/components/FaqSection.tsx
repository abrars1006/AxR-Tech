"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: "How long does a project take?",
      answer: "A standard landing page timeline is typically 1-2 weeks. A perfect 3-page site may take 2-4 weeks depending on the required features, content, and rounds of revision.",
    },
    {
      question: "What technologies do you use?",
      answer: "I specialize in modern, high-performance web stacks like React, Next.js, Node.js, and Tailwind CSS. I prioritize clean, accessible code to ensure security and scalability.",
    },
    {
      question: "Do you provide support after launch?",
      answer: "Yes, all my projects include 30 days of free bug-fixing and fine-tuning. Afterwards, I offer affordable monthly maintenance retainers if you need ongoing updates and active site management.",
    },
    {
      question: "How do we start?",
      answer: "Simply book a call or send me a message through the contact form below. We'll discuss your requirements, I'll provide a clear scope, and once accepted, we kick off the design and development phases.",
    },
  ];

  return (
    <section id="faq" className="py-24 bg-subtle">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">Frequently Asked Questions</h2>
          <div className="w-16 h-1 bg-gray-900 mx-auto rounded-full" />
        </motion.div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-sm"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full text-left px-6 py-5 flex items-center justify-between focus:outline-none hover:bg-gray-50 transition-colors"
              >
                <span className="font-semibold text-lg text-gray-900">{faq.question}</span>
                <ChevronDown 
                  className={`text-gray-400 transition-transform duration-300 ${openIndex === index ? "rotate-180 text-gray-900" : ""}`} 
                  size={20} 
                />
              </button>
              
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden bg-gray-50"
                  >
                    <div className="px-6 pb-6 text-gray-600 leading-relaxed pt-2 text-base">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
