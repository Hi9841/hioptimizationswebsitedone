"use client"

import { motion } from "framer-motion"
import { TrendingUp, TrendingDown } from 'lucide-react'

const portfolioItems = [
  {
    title: "HiOS Optimization - r5 5600 + rx 5500xt",
    specs: "r5 5600, rx 5500xt, 16gb 3200mhz ddr4",
    game: "Apex Legends",
    isMultiMetric: true,
    metrics: [
      { metric: "1% Low FPS", before: "18.8 FPS", after: "94.4 FPS", improvement: "+402.1%", isIncrease: true },
      { metric: "0.1% Low FPS", before: "18.1 FPS", after: "59.5 FPS", improvement: "+228.7%", isIncrease: true },
      { metric: "Average FPS", before: "140.4 FPS", after: "144.9 FPS", improvement: "+3.2%", isIncrease: true },
    ]
  },

  {
    title: "HiOS Optimization - 9800X3D + RTX 4060",
    specs: "Ryzen 7 9800X3D, RTX 4060, 32GB 6000MHz DDR5",
    game: "CS2",
    isMultiMetric: true,
    metrics: [
      { metric: "Average FPS", before: "540 FPS", after: "594 FPS", improvement: "+10.0%", isIncrease: true },
      { metric: "1% Low", before: "218.1 FPS", after: "279 FPS", improvement: "+27.9%", isIncrease: true },
      { metric: "0.1% Low", before: "50.4 FPS", after: "89.6 FPS", improvement: "+78.0%", isIncrease: true },
    ]
  },

  {
    title: "HiOS Optimization - 7800X3D + 7800XT",
    specs: "Ryzen 7 7800X3D, 7800XT, 32GB 5600MHz DDR5",
    game: "Multi-Metric Test",
    isMultiMetric: true,
    metrics: [
      { metric: "Average FPS", before: "556.6 FPS", after: "594.7 FPS", improvement: "+6.8%", isIncrease: true },
      { metric: "1% Low", before: "260.3 FPS", after: "279.4 FPS", improvement: "+7.3%", isIncrease: true },
      { metric: "0.1% Low", before: "76.6 FPS", after: "89.2 FPS", improvement: "+16.4%", isIncrease: true },
    ]
  },
]
export function Portfolio() {
  return (
    <section id="results" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-balance">Proven Results</h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Real performance improvements from actual clients. See the difference professional optimization makes.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {portfolioItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-card border border-border rounded-lg p-6 hover:border-indigo-500/50 transition-colors"
            >
              <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
              <p className="text-sm text-muted-foreground mb-1">{item.specs}</p>
              <p className="text-xs text-purple-400 mb-4">{item.game}</p>

              {item.isMultiMetric
                ? item.metrics.map((metric, mIndex) => (
                    // Apply top border for separation of metrics, except for the first one
                    <div key={mIndex} className={mIndex > 0 ? "pt-4 mt-4 border-t border-border/50" : ""}>
                      <h4 className="text-base font-semibold text-purple-300 mb-3">{metric.metric}</h4>
                      <div className="grid grid-cols-3 gap-4 text-center"> {/* Centered text for values */}
                        {/* Before Column */}
                        <div>
                          <div className="text-xs text-muted-foreground mb-1">Before</div>
                          <div className="text-xl font-bold text-gray-200">{metric.before}</div> {/* Larger and bolder */}
                        </div>
                        {/* After Column */}
                        <div>
                          <div className="text-xs text-muted-foreground mb-1">After</div>
                          <div className="text-xl font-bold text-purple-400">{metric.after}</div> {/* Larger and bolder */}
                        </div>
                        {/* Gain Column */}
                        <div>
                          <div className="text-xs text-muted-foreground mb-1">Gain</div>
                          <div 
                            // Conditional styling for gain/reduction
                            className={`text-xl font-bold flex items-center justify-center gap-1 
                              ${metric.isIncrease ? 'text-green-400' : 'text-green-400'}`} 
                          >
                            {/* Icon logic: TrendingUp for increase, TrendingDown for reduction (which is good for stutter) */}
                            {metric.isIncrease ? <TrendingUp size={18} /> : <TrendingDown size={18} />}
                            {metric.improvement}
                          </div>
                        </div>
                      </div>
                    </div>
                  ))
                : (
                  // Original rendering for single-metric cards
                  <div className="grid grid-cols-3 gap-4 text-center">
                    <div>
                      <div className="text-xs text-muted-foreground mb-1">Before</div>
                      <div className="text-xl font-bold text-gray-200">{item.before}</div>
                    </div>
                    <div>
                      <div className="text-xs text-muted-foreground mb-1">After</div>
                      <div className="text-xl font-bold text-purple-400">{item.after}</div>
                    </div>
                    <div>
                      <div className="text-xs text-muted-foreground mb-1">Gain</div>
                      <div className={`text-xl font-bold flex items-center justify-center gap-1 ${item.isIncrease ? 'text-green-400' : 'text-red-400'}`}>
                        {item.isIncrease ? <TrendingUp size={18} /> : <TrendingDown size={18} />}
                        {item.improvement}
                      </div>
                    </div>
                  </div>
                )
              }
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
