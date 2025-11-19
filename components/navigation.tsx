"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X } from 'lucide-react'
import { DiscordStatus } from "@/components/discord-status"
import Image from "next/image"

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
      setIsMobileMenuOpen(false)
    }
  }

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-background/95 backdrop-blur-lg border-b border-border" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-3">
            <Image src="/logo.png" alt="Hi Optimizations" width={40} height={40} className="brightness-100" />
            <div className="text-xl font-bold">
              <span className="text-purple-400">Hi</span>Optimizations
            </div>
            <DiscordStatus />
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <button onClick={() => scrollToSection("home")} className="text-muted-foreground hover:text-foreground transition-colors">
              Home
            </button>
            <button onClick={() => scrollToSection("about")} className="text-muted-foreground hover:text-foreground transition-colors">
              About
            </button>
            <button onClick={() => scrollToSection("services")} className="text-muted-foreground hover:text-foreground transition-colors">
              Services
            </button>
            <button onClick={() => scrollToSection("results")} className="text-muted-foreground hover:text-foreground transition-colors">
              Results
            </button>
            <button onClick={() => scrollToSection("contact")} className="text-muted-foreground hover:text-foreground transition-colors">
              Contact
            </button>
            <Button onClick={() => scrollToSection("services")} className="bg-purple-500 hover:bg-purple-600 text-white">
              Get Started
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden py-4 space-y-4 border-t border-border">
            <button onClick={() => scrollToSection("home")} className="block w-full text-left py-2 text-muted-foreground hover:text-foreground transition-colors">
              Home
            </button>
            <button onClick={() => scrollToSection("about")} className="block w-full text-left py-2 text-muted-foreground hover:text-foreground transition-colors">
              About
            </button>
            <button onClick={() => scrollToSection("services")} className="block w-full text-left py-2 text-muted-foreground hover:text-foreground transition-colors">
              Services
            </button>
            <button onClick={() => scrollToSection("results")} className="block w-full text-left py-2 text-muted-foreground hover:text-foreground transition-colors">
              Results
            </button>
            <button onClick={() => scrollToSection("contact")} className="block w-full text-left py-2 text-muted-foreground hover:text-foreground transition-colors">
              Contact
            </button>
            <Button onClick={() => scrollToSection("services")} className="w-full bg-purple-500 hover:bg-purple-600 text-white">
              Get Started
            </Button>
          </div>
        )}
      </div>
    </nav>
  )
}
