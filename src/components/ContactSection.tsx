"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, Link, MessageCircle, Send, AlertCircle } from "lucide-react";
import emailjs from "@emailjs/browser";

export default function ContactSection() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [isError, setIsError] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setIsSuccess(false);
    setIsError(false);
    
    try {
      await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || "service_placeholder",
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || "template_placeholder",
        {
          from_name: formData.name,
          reply_to: formData.email,
          message: formData.message,
          to_email: "smohamedabrar887@gmail.com",
        },
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || "public_placeholder"
      );
      
      setIsSuccess(true);
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      console.error("EmailJS Error:", error);
      setIsError(true);
    } finally {
      setIsSubmitting(false);
      setTimeout(() => {
        setIsSuccess(false);
        setIsError(false);
      }, 5000);
    }
  };

  return (
    <section id="contact" className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">Book a Call</h2>
          <div className="w-16 h-1 bg-gray-900 mx-auto rounded-full" />
          <p className="mt-6 text-gray-500 max-w-2xl mx-auto text-lg">
            Let's discuss how we can work together to bring your next idea to life.
          </p>
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 max-w-6xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="w-full lg:w-1/3 space-y-8"
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Contact Information</h3>
            
            <a href="tel:+919361579953" className="flex items-center gap-4 group">
              <div className="w-12 h-12 rounded-xl bg-gray-50 flex items-center justify-center border border-gray-200 group-hover:bg-gray-100 transition-colors">
                <Phone size={22} className="text-gray-900" />
              </div>
              <div>
                <p className="text-gray-500 text-sm font-medium">Phone</p>
                <p className="text-gray-900 font-semibold">+91 9361579953</p>
              </div>
            </a>

            <a href="mailto:smohamedabrar887@gmail.com" className="flex items-center gap-4 group">
              <div className="w-12 h-12 rounded-xl bg-gray-50 flex items-center justify-center border border-gray-200 group-hover:bg-gray-100 transition-colors">
                <Mail size={22} className="text-gray-900" />
              </div>
              <div>
                <p className="text-gray-500 text-sm font-medium">Email</p>
                <p className="text-gray-900 font-semibold break-all">smohamedabrar887@gmail.com</p>
              </div>
            </a>

            <a href="https://www.linkedin.com/in/mohamed-abrar-s-853821320" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 group">
              <div className="w-12 h-12 rounded-xl bg-gray-50 flex items-center justify-center border border-gray-200 group-hover:bg-gray-100 transition-colors">
                <Link size={22} className="text-gray-900" />
              </div>
              <div>
                <p className="text-gray-500 text-sm font-medium">LinkedIn</p>
                <p className="text-gray-900 font-semibold">Mohamed Abrar S</p>
              </div>
            </a>
            
            <div className="pt-8 w-full border-t border-gray-100">
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="https://wa.me/919361579953?text=Hi,%20I%20saw%20your%20portfolio%20and%20I%E2%80%99m%20interested%20in%20your%20services."
                target="_blank"
                rel="noopener noreferrer"
                className="w-full px-6 py-4 rounded-xl flex items-center justify-center gap-3 bg-white hover:bg-gray-50 border border-gray-200 text-gray-900 font-semibold transition-colors shadow-sm"
              >
                <MessageCircle size={20} className="text-gray-900" />
                Chat on WhatsApp
              </motion.a>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="w-full lg:w-2/3 minimal-card p-8 md:p-10"
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Send a Message</h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-semibold text-gray-700">Your Name</label>
                  <input
                    type="text"
                    id="name"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent transition-all"
                    placeholder="John Doe"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-semibold text-gray-700">Your Email</label>
                  <input
                    type="email"
                    id="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent transition-all"
                    placeholder="john@example.com"
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-semibold text-gray-700">Message</label>
                <textarea
                  id="message"
                  required
                  rows={5}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent transition-all resize-none"
                  placeholder="How can I help you?"
                />
              </div>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                disabled={isSubmitting}
                className={`w-full py-4 rounded-xl font-semibold flex items-center justify-center gap-2 shadow-md transition-all ${
                  isSuccess ? "bg-emerald-500 text-white hover:bg-emerald-600" : isError ? "bg-red-500 text-white hover:bg-red-600" : "btn-primary"
                } disabled:opacity-70 disabled:cursor-not-allowed`}
              >
                {isSubmitting ? (
                  <span className="flex items-center gap-2">
                    <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Sending...
                  </span>
                ) : isSuccess ? (
                  <span className="flex items-center gap-2 text-white">
                    <Send size={18} />
                    Message Sent Successfully!
                  </span>
                ) : isError ? (
                  <span className="flex items-center gap-2 text-white">
                    <AlertCircle size={18} />
                    Failed to send. Try again.
                  </span>
                ) : (
                  <span className="flex items-center gap-2">
                    <Send size={18} />
                    Send Message
                  </span>
                )}
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
