"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Check, Star, Zap } from 'lucide-react'
import { useRouter } from 'next/navigation'

const services = [
  {
    name: "Tier 2 Session",
    price: "€30",
    priceValue: "30",
    description: "Essential optimization for casual gaming and stability.",
    features: [
      "Windows Debloating",
      "Startup Management",
      "Driver Cleanup",
      "Basic Latency Fixes",
      "Discord Support",
    ],
  },
  {
    name: "BIOS Tuning",
    price: "€20",
    priceValue: "20",
    description: "Deep hardware configuration for stability.",
    features: [
      "RAM Timings",
      "PBO/Curve Optimizer",
      "Fan Curves",
      "Boot Time Speedup",
      "Safe Voltages",
    ],
  },
  {
    name: "Tier 1 Session",
    price: "€50",
    priceValue: "50",
    description: "The complete overhaul. Maximum frames, minimum delay.",
    features: [
      "Everything in Tier 2",
      "Network Optimization",
      "Registry Tweaks",
      "Input Lag Reduction",
      "Detailed Report",
      "Priority Support",
    ],
    popular: true,
  },
  {
    name: "Full Overclock",
    price: "€100",
    priceValue: "100",
    description: "Pushing your hardware to its absolute safe limits.",
    features: [
      "CPU & GPU Overclock",
      "DDR4/DDR5 Tuning",
      "Stability Testing (24h)",
      "Thermal Analysis",
      "Benchmark Validation",
    ],
  },
  {
    name: "GPU Overclock",
    price: "€20",
    priceValue: "20",
    description: "Extract every last frame from your graphics card.",
    features: [
      "Core & Memory Tuning",
      "Undervolting",
      "Custom Fan Curves",
      "Benchmark Validation",
      "Safe Limits Only"
    ]
  },
  {
    name: "CPU Overclock",
    price: "€25",
    priceValue: "25",
    description: "Maximize processing power for CPU-bound games.",
    features: [
      "Voltage Optimization",
      "Thermal Testing",
      "Per-Core Tuning",
      "Stability Guarantee",
      "Bios Configuration"
    ]
  },
  {
    name: "RAM Overclock",
    price: "€45",
    priceValue: "45",
    description: "The biggest impact on 1% low FPS and smoothness.",
    features: [
      "Tightened Subtimings",
      "Frequency Boost",
      "Voltage Safety",
      "Latency Reduction",
      "Error Checking"
    ]
  },
  {
    name: "Full Bundle",
    price: "€100",
    priceValue: "100",
    description: "Complete system tuning + full hardware overclocking.",
    features: [
      "Tier 1 Optimization",
      "CPU + GPU + RAM OC",
      "Full Stress Test",
      "Lifetime Support",
      "Best Value Deal"
    ],
    popular: true
  }
]

export function Services() {
  const router = useRouter()

  return (
    <section id="services" className="py-24 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-6xl bg-purple-900/10 blur-[120px] -z-10 rounded-full pointer-events-none" />

      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-balance">Optimization Packages</h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Transparent pricing. No hidden fees. <span className="text-purple-400 font-semibold">100% manual tuning</span> via AnyDesk.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-6 max-w-8xl mx-auto">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05, duration: 0.5 }}
              viewport={{ once: true }}
              className={`relative group flex flex-col p-6 rounded-2xl border transition-all duration-300 ${
                service.popular 
                  ? "bg-purple-950/10 border-purple-500/50 shadow-[0_0_30px_rgba(168,85,247,0.1)] scale-[1.02] z-10" 
                  : "bg-white/5 border-white/10 hover:border-purple-500/30 hover:bg-white/10"
              }`}
            >
              {service.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gradient-to-r from-purple-600 to-indigo-600 text-white text-xs font-bold px-3 py-1 rounded-full flex items-center gap-1 shadow-lg border border-white/20">
                  <Star size={10} fill="currentColor" /> POPULAR
                </div>
              )}
              
              <div className="mb-6">
                <h3 className={`text-lg font-semibold mb-2 ${service.popular ? "text-purple-300" : "text-gray-200"}`}>
                    {service.name}
                </h3>
                <div className="flex items-baseline gap-1">
                    <span className={`text-4xl font-bold ${service.popular ? "text-white text-glow" : "text-white"}`}>
                      {service.price}
                    </span>
                </div>
                <p className="text-sm text-muted-foreground mt-3 min-h-[40px] leading-relaxed">
                  {service.description}
                </p>
              </div>
              
              <div className="space-y-3 mb-8 flex-grow">
                {service.features.map((feature, i) => (
                  <div key={i} className="flex items-start gap-3 group-hover:translate-x-1 transition-transform duration-300">
                    <div className={`mt-0.5 min-w-4 min-h-4 rounded-full flex items-center justify-center ${service.popular ? "bg-purple-500/20" : "bg-white/10"}`}>
                       <Check size={10} className={service.popular ? "text-purple-400" : "text-gray-400"} />
                    </div>
                    <span className="text-sm text-gray-300 leading-tight">{feature}</span>
                  </div>
                ))}
              </div>

              <Button
                onClick={() => router.push(`/checkout?service=${encodeURIComponent(service.name)}&price=${service.price}&priceValue=${service.priceValue}`)}
                className={`w-full py-6 text-base font-semibold transition-all duration-300 shadow-lg ${
                    service.popular 
                    ? "bg-purple-600 hover:bg-purple-500 hover:shadow-purple-500/25 text-white" 
                    : "bg-secondary hover:bg-white/10 hover:text-white border border-white/5"
                }`}
                variant={service.popular ? "default" : "outline"}
              >
                {service.popular ? "Select Plan" : "Choose Plan"}
              </Button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}