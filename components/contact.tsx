"use client"

import { motion } from "framer-motion"
import { MessageCircle } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { FaXTwitter, FaTiktok, FaDiscord } from 'react-icons/fa6'

export function Contact() {
  return (
    <section id="contact" className="py-24">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto text-center"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-balance">Get In Touch</h2>
          <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
            Have questions about my services? Want to discuss a custom optimization package? Join my Discord community or follow me on social media for updates.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Button size="lg" className="bg-[#5865F2] hover:bg-[#4752C4] text-white" asChild>
              <a href="https://discord.gg/S5m6PsyBvU" target="_blank" rel="noopener noreferrer">
                <FaDiscord size={20} className="mr-2" />
                Join Discord Community
              </a>
            </Button>
          </div>

          <div className="flex gap-4 justify-center">
            <Button size="lg" variant="outline" asChild>
              <a href="https://x.com/HiTweaks" target="_blank" rel="noopener noreferrer">
                <FaXTwitter size={20} className="mr-2" />
                Follow on X
              </a>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <a href="https://www.tiktok.com/@hi_tweaks" target="_blank" rel="noopener noreferrer">
                <FaTiktok size={20} className="mr-2" />
                Follow on TikTok
              </a>
            </Button>
          </div>
        </motion.div>
      </div>

      <div className="container mx-auto px-4 mt-24 pt-8 border-t border-border">
        <div className="text-center text-muted-foreground text-sm">
          <p>© 2025 HiOptimizations. All rights reserved.</p>
          <p className="mt-2">Professional PC optimization and overclocking services.</p>
        </div>
      </div>
    </section>
  )
}
