"use client"

import { Suspense, useState } from "react"
import { useSearchParams, useRouter } from 'next/navigation'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { ArrowLeft, AlertCircle, ShieldCheck, Cpu } from 'lucide-react'
import { motion } from "framer-motion"

// --- PAYPAL CONFIGURATION ---
const PAYPAL_BUTTONS: Record<string, { buttonId: string }> = {
  "Tier 1 Session": { buttonId: "6AYJK7H93TVRG" },
  "Tier 2 Session": { buttonId: "K7EPS8JX6N3H2" },
  "BIOS Tuning": { buttonId: "8XFAUPFFQGR64" },
  "CPU Overclock": { buttonId: "BQZ3EDJPLBQRG" },
  "GPU Overclock": { buttonId: "VLRE36T3G3X28" },
  "RAM Overclock (DDR4)": { buttonId: "DGV8WA2W242TG" },
  "RAM Overclock (DDR5)": { buttonId: "P4FWPY3BHMRRL" },
  "Full Bundle": { buttonId: "GBDAKH6BQCEL8" }, 
  "Full Overclock": { buttonId: "J6A95KPGCNENW" },
}

function CheckoutContent() {
  const searchParams = useSearchParams()
  const router = useRouter()
   
  const service = searchParams.get("service") || "Unknown Service"
  const price = searchParams.get("price") || "€0"

  const [formData, setFormData] = useState({
    cpu: "",
    gpu: "",
    ram: "",
    motherboard: "",
    discordUsername: "",
  })

  const [hasJoinedDiscord, setHasJoinedDiscord] = useState(false)

  // --- PLACEHOLDER CONFIGURATION ---
  // specific placeholders for each field type
  const placeholders: Record<string, string> = {
    cpu: "e.g., Ryzen 7 7800X3D / Intel i9-14900K",
    gpu: "e.g., RTX 4090 / RX 7900 XTX",
    ram: "e.g., 2x16GB DDR5 6000MHz CL30",
    motherboard: "e.g., ASUS ROG Strix B650E-F",
    discordUsername: "e.g., username (or username#1234)",
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  // CRITICAL: Save order data to local storage BEFORE going to PayPal
  const handlePayment = () => {
    const orderData = {
        service,
        price,
        ...formData
    }
    localStorage.setItem('pendingOrder', JSON.stringify(orderData))
  }

  const isFormValid = formData.cpu && formData.gpu && formData.ram && formData.motherboard && formData.discordUsername && hasJoinedDiscord
   
  // Match service name to button ID (fuzzy match supported)
  const paypalConfig = PAYPAL_BUTTONS[service] || 
                       Object.entries(PAYPAL_BUTTONS).find(([key]) => service.includes(key))?.[1];

  return (
    <div className="min-h-screen py-24 px-4 relative overflow-hidden">
      {/* Background FX */}
      <div className="absolute inset-0 bg-grid-pattern opacity-20 -z-10" />
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-purple-900/20 blur-[120px] -z-10 pointer-events-none" />

      <div className="container mx-auto max-w-2xl relative z-10">
        <Button onClick={() => router.back()} variant="ghost" className="mb-8 hover:bg-white/5">
          <ArrowLeft size={20} className="mr-2" />
          Back to Services
        </Button>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <h1 className="text-4xl font-bold mb-2">Secure Checkout</h1>
          <p className="text-muted-foreground mb-8">Finalize your order for <span className="text-purple-400 font-semibold">{service}</span></p>

          <div className="grid gap-6">
             
            {/* --- 1. Order Summary (Glass Card) --- */}
            <div className="p-6 bg-white/5 backdrop-blur-md border border-white/10 rounded-xl shadow-lg">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl font-semibold flex items-center gap-2">
                    <ShieldCheck size={20} className="text-purple-400" /> Order Summary
                </h2>
                <span className="text-3xl font-bold text-white text-glow">{price}</span>
              </div>
              <div className="p-4 bg-black/20 rounded-lg border border-white/5">
                  <p className="text-gray-300 font-medium">{service}</p>
                  <p className="text-sm text-muted-foreground mt-1">One-time payment • Private 1-on-1 support included</p>
              </div>
            </div>

            {/* --- 2. Discord Requirement --- */}
            <div className={`p-6 backdrop-blur-md border rounded-xl transition-colors ${hasJoinedDiscord ? "bg-white/5 border-white/10" : "bg-purple-900/10 border-purple-500/30"}`}>
              <div className="flex items-start gap-4">
                <div className="p-3 bg-[#5865F2]/20 rounded-lg">
                    <AlertCircle className="text-[#5865F2]" size={24} />
                </div>
                <div className="flex-1">
                  <h2 className="text-xl font-semibold mb-2">Step 1: Join Discord</h2>
                  <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
                    Communication happens via Discord. You <strong>must</strong> be in the server so we can contact you.
                  </p>
                  <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
                    <Button className="bg-[#5865F2] hover:bg-[#4752C4] text-white shadow-lg shadow-[#5865F2]/20" asChild>
                      <a href="https://discord.gg/S5m6PsyBvU" target="_blank" rel="noopener noreferrer">
                        Join Server
                      </a>
                    </Button>
                    <label className="flex items-center gap-3 cursor-pointer select-none group">
                      <div className={`w-6 h-6 rounded border flex items-center justify-center transition-colors ${hasJoinedDiscord ? "bg-green-500 border-green-500" : "bg-transparent border-white/30 group-hover:border-purple-400"}`}>
                          <input
                            type="checkbox"
                            checked={hasJoinedDiscord}
                            onChange={(e) => setHasJoinedDiscord(e.target.checked)}
                            className="hidden"
                          />
                          {hasJoinedDiscord && <ArrowLeft className="rotate-180 text-white" size={14} strokeWidth={4} />}
                      </div>
                      <span className={hasJoinedDiscord ? "text-white" : "text-muted-foreground"}>I have joined the server</span>
                    </label>
                  </div>
                </div>
              </div>
            </div>

            {/* --- 3. PC Specs Form --- */}
            <div className="p-6 bg-white/5 backdrop-blur-md border border-white/10 rounded-xl">
              <h2 className="text-xl font-semibold mb-6 flex items-center gap-2">
                 <Cpu size={20} className="text-purple-400" /> System Specs
              </h2>
              <div className="space-y-5">
                {["cpu", "gpu", "ram", "motherboard", "discordUsername"].map((field) => (
                  <div key={field}>
                    <Label htmlFor={field} className="mb-2 block text-xs uppercase tracking-wider text-muted-foreground">
                        {field === "discordUsername" ? "Discord Username" : field} <span className="text-red-400">*</span>
                    </Label>
                    <Input
                      id={field}
                      name={field}
                      // Mapped placeholders used here
                      placeholder={placeholders[field] || `Enter your ${field}`}
                      value={formData[field as keyof typeof formData]}
                      onChange={handleInputChange}
                      className="bg-black/20 border-white/10 focus:border-purple-500/50 h-12 text-base placeholder:text-white/20"
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* --- 4. Payment --- */}
            <div className="p-6 bg-gradient-to-b from-white/5 to-black/20 backdrop-blur-md border border-white/10 rounded-xl">
              <h2 className="text-xl font-semibold mb-4">Final Step: Payment</h2>
               
              <div className="space-y-4">
                {/* Error Message */}
                {!isFormValid && (
                  <div className="bg-red-500/10 border border-red-500/20 rounded-lg p-4 text-center">
                    <p className="text-sm text-red-300 font-medium">
                      {!hasJoinedDiscord 
                        ? "Please confirm you have joined the Discord server above."
                        : "Please fill in all hardware fields to proceed."}
                    </p>
                  </div>
                )}

                {/* Missing Button Error */}
                {!paypalConfig && isFormValid && (
                    <div className="bg-red-500/10 border border-red-500/20 rounded-lg p-4">
                        <p className="text-sm text-red-300">
                            Error: Payment link not found for "{service}". Please contact support.
                        </p>
                    </div>
                )}

                {/* PayPal Form */}
                {isFormValid && paypalConfig && (
                  <form
                    action="https://www.paypal.com/cgi-bin/webscr"
                    method="post"
                    target="_top"
                    className="w-full"
                  >
                    <input type="hidden" name="cmd" value="_s-xclick" />
                    <input type="hidden" name="hosted_button_id" value={paypalConfig.buttonId} />
                    <input type="hidden" name="currency_code" value="EUR" />
                     
                    <Button
                      type="submit"
                      onClick={handlePayment}
                      className="w-full h-16 text-lg font-bold bg-[#0070ba] hover:bg-[#005ea6] text-white transition-all shadow-[0_0_20px_rgba(0,112,186,0.3)] hover:shadow-[0_0_30px_rgba(0,112,186,0.5)]"
                    >
                      Pay {price} via PayPal
                    </Button>
                  </form>
                )}

                <p className="text-xs text-center text-muted-foreground mt-4">
                  Secure payment processed by PayPal. No account required for credit card payments.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default function CheckoutPage() {
  return (
    <Suspense fallback={<div className="min-h-screen flex items-center justify-center bg-background text-purple-400">Loading Secure Checkout...</div>}>
      <CheckoutContent />
    </Suspense>
  )
}
