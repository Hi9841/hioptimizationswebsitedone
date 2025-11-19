"use client"

import { motion } from "framer-motion"
import { Award, Shield, Zap, Target } from 'lucide-react'

export function About() {
  return (
    <section id="about" className="py-24 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-6xl bg-purple-900/5 blur-[120px] -z-10 rounded-full pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-balance">
            Why Choose <span className="text-purple-400">Hi Optimizations?</span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Trusted by high-level players, developers, and content creators. We don't just run scripts—we provide 
            <span className="text-gray-200 font-medium"> deep BIOS-level manual tuning </span> 
            focused on stability and the lowest possible latency.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {
              icon: <Zap className="text-purple-400" size={32} />,
              title: "Private 1-on-1 Tuning",
              description: "No reused packs. Every setting is manually adjusted to fit your specific silicon lottery.",
            },
            {
              icon: <Target className="text-pink-400" size={32} />,
              title: "Low Latency Focus",
              description: "Optimized specifically for competitive gamers seeking every millisecond advantage.",
            },
            {
              icon: <Shield className="text-blue-400" size={32} />,
              title: "Safe & Responsible",
              description: "Zero-risk performance gains. We thoroughly stress-test every configuration.",
            },
            {
              icon: <Award className="text-yellow-400" size={32} />,
              title: "BIOS-Level Expertise",
              description: "We go beyond Windows tweaks. We tune voltages, curves, and memory sub-timings.",
            },
          ].map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
              className="group bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 hover:border-purple-500/30 transition-all duration-300 hover:-translate-y-1 shadow-lg hover:shadow-purple-500/10"
            >
              <div className="mb-4 p-3 bg-white/5 w-fit rounded-xl group-hover:scale-110 group-hover:bg-white/10 transition-all duration-300 border border-white/5">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-100 group-hover:text-purple-300 transition-colors">
                {feature.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed group-hover:text-gray-300 transition-colors">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}