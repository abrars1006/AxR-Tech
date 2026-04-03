import { motion } from "framer-motion";
import { Mail, Phone, Link as LinkIcon, ExternalLink } from "lucide-react";

export default function ContactSection() {
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
                <LinkIcon size={22} className="text-gray-900" />
              </div>
              <div>
                <p className="text-gray-500 text-sm font-medium">LinkedIn</p>
                <p className="text-gray-900 font-semibold">Mohamed Abrar S</p>
              </div>
            </a>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="w-full lg:w-2/3 minimal-card p-10 md:p-16 flex flex-col justify-center items-center text-center space-y-8 bg-gray-50"
          >
            <div className="bg-white p-4 rounded-full shadow-sm mb-2">
              <ExternalLink size={32} className="text-gray-900" />
            </div>
            <h3 className="text-3xl font-bold text-gray-900">Ready to Start?</h3>
            <p className="text-gray-600 text-lg max-w-md leading-relaxed">
              Skip the back-and-forth emails. Submit your project details securely and book a consultation directly through the form.
            </p>
            <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="https://docs.google.com/forms/d/e/1FAIpQLSeP0gWggpESObmrun9AnIqsykPZlfYhtQtMO2XfqmcOXnNIDA/viewform"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary px-8 py-4 rounded-full font-semibold flex items-center justify-center gap-2 text-lg shadow-md transition-all w-full md:w-auto"
              >
                Book a Call
            </motion.a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
