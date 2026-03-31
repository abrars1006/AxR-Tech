"use client";

import { motion } from "framer-motion";
import { 
  LineChart, 
  Line, 
  ResponsiveContainer, 
  Tooltip,
  XAxis,
  YAxis
} from "recharts";
import { 
  Search, 
  LineChart as LineChartIcon, 
  Smartphone, 
  TrendingUp, 
  ShieldCheck, 
  Zap, 
  Server, 
  Settings
} from "lucide-react";

const chartData = [
  { name: 'Jan', traffic: 300 },
  { name: 'Feb', traffic: 450 },
  { name: 'Mar', traffic: 650 },
  { name: 'Apr', traffic: 900 },
  { name: 'May', traffic: 1400 },
  { name: 'Jun', traffic: 2200 },
];

const features = [
  {
    icon: <Search size={24} className="text-gray-900" />,
    title: "On-Page SEO",
    description: "Ready to be found on Google"
  },
  {
    icon: <LineChartIcon size={24} className="text-gray-900" />,
    title: "Tracking & Analytics",
    description: "Track user behavior and performance"
  },
  {
    icon: <Smartphone size={24} className="text-gray-900" />,
    title: "100% Responsive",
    description: "Optimized for all devices"
  },
  {
    icon: <TrendingUp size={24} className="text-gray-900" />,
    title: "ROI-Focused",
    description: "Built to generate real business results"
  }
];

export default function ResultsSection() {
  return (
    <section id="results" className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">Proven Results</h2>
          <div className="w-16 h-1 bg-gray-900 mx-auto rounded-full" />
          <p className="mt-6 text-gray-500 max-w-2xl mx-auto text-lg">
            Websites optimized for real results.
          </p>
        </motion.div>

        {/* Top Split Area */}
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-center mb-20">
          
          {/* Left: Analytics Graph Card */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="w-full lg:w-1/2 p-6 md:p-8 rounded-[2rem] bg-gradient-to-br from-gray-50 to-gray-100 border border-gray-200 shadow-sm relative overflow-hidden"
          >
            <div className="mb-6 flex justify-between items-end">
              <div>
                <p className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-1">Traffic Growth</p>
                <p className="text-3xl font-bold text-gray-900">+428%</p>
              </div>
              <div className="px-3 py-1 bg-white rounded-full border border-gray-200 text-xs font-semibold text-emerald-600 shadow-sm">
                Last 6 Months
              </div>
            </div>
            
            <div className="w-full h-[250px] relative">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={chartData} margin={{ top: 10, right: 10, left: 0, bottom: 0 }}>
                  <defs>
                    <linearGradient id="gradientLine" x1="0" y1="0" x2="1" y2="0">
                      <stop offset="0%" stopColor="#9CA3AF" />
                      <stop offset="100%" stopColor="#111827" />
                    </linearGradient>
                  </defs>
                  <Line 
                    type="monotone" 
                    dataKey="traffic" 
                    stroke="url(#gradientLine)" 
                    strokeWidth={4} 
                    dot={{ r: 5, fill: "#111827", strokeWidth: 2, stroke: "#fff" }}
                    activeDot={{ r: 8, fill: "#111827", stroke: "#fff", strokeWidth: 2 }}
                    animationDuration={2000}
                    animationEasing="ease-in-out"
                  />
                  <Tooltip 
                    contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }}
                    itemStyle={{ color: '#111827', fontWeight: 600 }}
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </motion.div>

          {/* Right: Features List */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="w-full lg:w-1/2 flex flex-col gap-6"
          >
            {features.map((feat, idx) => (
              <motion.div 
                key={idx}
                whileHover={{ scale: 1.02, x: 4 }}
                className="flex items-center gap-5 p-4 rounded-2xl hover:bg-gray-50 transition-colors border border-transparent hover:border-gray-100 cursor-default"
              >
                <div className="w-14 h-14 shrink-0 rounded-xl bg-white shadow-sm border border-gray-100 flex items-center justify-center">
                  {feat.icon}
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-1">{feat.title}</h3>
                  <p className="text-gray-500 text-sm md:text-base">{feat.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Bottom Feature Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          
          {/* Card 1: Full Service */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="minimal-card p-8 flex flex-col h-full bg-white relative overflow-hidden group"
          >
            <div className="w-12 h-12 rounded-xl bg-gray-50 border border-gray-100 flex items-center justify-center mb-6 shrink-0">
              <Settings className="text-gray-900" size={22} />
            </div>
            <h4 className="text-xl font-bold text-gray-900 mb-2">Full-Service A to Z</h4>
            <p className="text-gray-500 text-sm mb-6 flex-grow">End-to-end website solution.</p>
            
            <div className="flex flex-wrap gap-2 mt-auto">
              {['Design', 'Dev', 'Hosting', 'SEO'].map((tag, i) => (
                <motion.span 
                  key={tag}
                  initial={{ y: 0 }}
                  whileHover={{ y: -3 }}
                  className="px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider bg-gray-100 text-gray-800 rounded-lg border border-gray-200"
                >
                  {tag}
                </motion.span>
              ))}
            </div>
          </motion.div>

          {/* Card 2: Performance */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="minimal-card p-8 flex flex-col h-full bg-gray-900 text-white relative overflow-hidden group"
          >
            <h4 className="text-xl font-bold mb-2 relative z-10">Lightning-Fast</h4>
            <p className="text-gray-400 text-sm mb-6 flex-grow relative z-10">Optimized for maximum speed.</p>
            
            <div className="mt-auto flex justify-center py-4 relative z-10">
              <div className="relative w-24 h-24 flex items-center justify-center">
                <svg className="w-full h-full transform -rotate-90">
                  <circle cx="48" cy="48" r="40" stroke="rgba(255,255,255,0.1)" strokeWidth="8" fill="none" />
                  <motion.circle 
                    cx="48" cy="48" r="40" 
                    stroke="#10b981" 
                    strokeWidth="8" 
                    fill="none" 
                    strokeLinecap="round"
                    initial={{ strokeDasharray: 251, strokeDashoffset: 251 }}
                    whileInView={{ strokeDashoffset: 10 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.5, ease: "easeOut" }}
                  />
                </svg>
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                  <span className="text-2xl font-bold text-white">99</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Card 3: Scale */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="minimal-card p-8 flex flex-col h-full bg-white group"
          >
            <div className="w-12 h-12 rounded-xl bg-gray-50 border border-gray-100 flex items-center justify-center mb-6 shrink-0 group-hover:bg-gray-900 transition-colors duration-300">
              <Server className="text-gray-900 group-hover:text-white transition-colors duration-300" size={22} />
            </div>
            <h4 className="text-xl font-bold text-gray-900 mb-2">Built to Scale</h4>
            <p className="text-gray-500 text-sm mt-auto">Modern code architecture built for handling high traffic.</p>
          </motion.div>

          {/* Card 4: Security */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="minimal-card p-8 flex flex-col h-full bg-white group"
          >
            <div className="w-12 h-12 rounded-xl bg-emerald-50 border border-emerald-100 flex items-center justify-center mb-6 shrink-0 group-hover:bg-emerald-500 transition-colors duration-300">
              <ShieldCheck className="text-emerald-600 group-hover:text-white transition-colors duration-300" size={22} />
            </div>
            <h4 className="text-xl font-bold text-gray-900 mb-2">Secure & Compliant</h4>
            <p className="text-gray-500 text-sm mt-auto">Best practices & security ready for modern web standards.</p>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
