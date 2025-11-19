"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Zap, Cpu, Activity } from 'lucide-react'
import { motion } from "framer-motion"

export function Hero() {
  const scrollToServices = () => {
    const element = document.getElementById("services")
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20 pb-10">
      {/* --- Background Elements --- */}
      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 bg-grid-pattern z-0 opacity-30" />
      
      {/* Animated Glowing Orbs */}
      <motion.div 
        animate={{ opacity: [0.4, 0.6, 0.4], scale: [1, 1.1, 1] }}
        transition={{ duration: 8, repeat: Infinity }}
        className="absolute top-[-10%] left-[20%] w-[500px] h-[500px] bg-purple-600/20 rounded-full blur-[120px] pointer-events-none" 
      />
      <div className="absolute bottom-[-10%] right-[10%] w-[400px] h-[400px] bg-blue-600/10 rounded-full blur-[100px] pointer-events-none" />
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-5xl mx-auto"
        >
          {/* --- Badge --- */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 bg-white/5 border border-white/10 backdrop-blur-md rounded-full px-4 py-1.5 mb-8 shadow-[0_0_15px_rgba(168,85,247,0.2)] hover:border-purple-500/50 transition-colors cursor-default"
          >
            <Zap size={14} className="text-purple-400 fill-purple-400" />
            <span className="text-sm font-medium text-purple-100">Elite Custom PC Tuning</span>
          </motion.div>

          {/* --- Main Title --- */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-8 text-balance tracking-tight leading-tight">
            Unlock Your System's <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-fuchsia-400 to-indigo-400 text-glow">
              True Potential
            </span>
          </h1>

          {/* --- Subtitle --- */}
          <p className="text-lg md:text-xl text-muted-foreground mb-12 text-balance leading-relaxed max-w-3xl mx-auto">
            Professional BIOS-level optimization. Lower latency, higher FPS, and zero input delay. 
            <span className="text-gray-200 font-medium"> Stop using generic packs.</span> Get manual tuning tailored to your specific hardware.
          </p>

          {/* --- Action Buttons --- */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-20">
            <Button 
              onClick={scrollToServices} 
              size="lg" 
              className="bg-purple-600 hover:bg-purple-500 text-white text-lg px-10 py-7 rounded-full shadow-[0_0_30px_rgba(147,51,234,0.4)] hover:shadow-[0_0_45px_rgba(147,51,234,0.6)] transition-all duration-300 group relative overflow-hidden"
            >
              <span className="relative z-10 flex items-center gap-2">
                Boost My FPS 
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </span>
            </Button>
            
            <Button 
              onClick={() => document.getElementById("results")?.scrollIntoView({ behavior: "smooth" })} 
              size="lg" 
              variant="outline" 
              className="text-lg px-10 py-7 rounded-full border-white/10 bg-white/5 hover:bg-white/10 backdrop-blur-md transition-all hover:border-purple-500/50"
            >
              View Benchmarks
            </Button>
          </div>

          {/* --- Stats (Glass Cards) --- */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
            {[
              { value: "200+", label: "Optimized Systems", icon: <Cpu size={18} className="text-purple-400" /> },
              { value: "100%", label: "Manual Tuning", icon: <Zap size={18} className="text-yellow-400" /> },
              { value: "-40%", label: "Avg Latency", icon: <Activity size={18} className="text-green-400" /> },
              { value: "5.0", label: "Client Rating", icon: <div className="text-yellow-400 text-lg leading-none">★</div> },
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 + (index * 0.1) }}
                className="bg-white/5 backdrop-blur-sm border border-white/5 p-4 rounded-xl flex flex-col items-center justify-center gap-2 hover:bg-white/10 hover:border-purple-500/30 transition-all duration-300"
              >
                <div className="text-3xl font-bold text-white tracking-tighter text-glow">{stat.value}</div>
                <div className="text-xs uppercase tracking-wider text-muted-foreground flex items-center gap-1.5 font-medium">
                  {stat.icon} {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}