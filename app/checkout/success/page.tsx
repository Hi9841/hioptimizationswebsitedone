"use client"

import { Suspense, useEffect, useState } from "react"
import { useRouter } from 'next/navigation'
import { Button } from "@/components/ui/button"
import { Check, Loader2 } from 'lucide-react'
import { motion } from "framer-motion"
import { sendOrderToDiscord } from "@/app/actions/discord"

function SuccessContent() {
  const router = useRouter()
  const [status, setStatus] = useState<'processing' | 'success' | 'error'>('processing')

  useEffect(() => {
    const sendOrderDetails = async () => {
      try {
        const pendingOrderData = localStorage.getItem('pendingOrder')
        
        if (pendingOrderData) {
          const orderData = JSON.parse(pendingOrderData)
          
          // Send order to Discord
          await sendOrderToDiscord(orderData)
          
          // Clear the pending order
          localStorage.removeItem('pendingOrder')
          
          setStatus('success')
        } else {
          setStatus('error')
        }
      } catch (error) {
        console.error("Error processing order:", error)
        setStatus('error')
      }
    }

    sendOrderDetails()
  }, [])

  if (status === 'processing') {
    return (
      <div className="min-h-screen flex items-center justify-center px-4">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="max-w-md w-full text-center"
        >
          <Loader2 size={60} className="mx-auto mb-6 animate-spin text-cyan-400" />
          <h1 className="text-3xl font-bold mb-4">Processing Your Order...</h1>
          <p className="text-muted-foreground leading-relaxed">
            Please wait while we confirm your payment and send your order details.
          </p>
        </motion.div>
      </div>
    )
  }

  if (status === 'error') {
    return (
      <div className="min-h-screen flex items-center justify-center px-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="max-w-md w-full text-center"
        >
          <div className="w-20 h-20 bg-destructive rounded-full flex items-center justify-center mx-auto mb-6">
            <span className="text-4xl text-white">!</span>
          </div>
          <h1 className="text-3xl font-bold mb-4">Something Went Wrong</h1>
          <p className="text-muted-foreground mb-8 leading-relaxed">
            There was an issue processing your order. Please contact support on Discord with your PayPal transaction details.
          </p>
          <div className="flex gap-4 justify-center">
            <Button onClick={() => router.push("/")} variant="outline">
              Return to Home
            </Button>
            <Button className="bg-[#5865F2] hover:bg-[#4752C4] text-white" asChild>
              <a href="https://discord.gg/S5m6PsyBvU" target="_blank" rel="noopener noreferrer">
                Contact Support
              </a>
            </Button>
          </div>
        </motion.div>
      </div>
    )
  }

  return (
    <div className="min-h-screen flex items-center justify-center px-4 pt-16">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="max-w-md w-full text-center"
      >
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
          className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6"
        >
          <Check size={40} className="text-white" />
        </motion.div>
        <h1 className="text-3xl font-bold mb-4">Payment Successful!</h1>
        <p className="text-muted-foreground mb-8 leading-relaxed">
          Thank you for your purchase! I've received your order details and payment confirmation. I'll contact you on Discord within 24 hours to get started with your optimization.
        </p>
        <div className="bg-muted/50 border border-border rounded-lg p-4 mb-8">
          <p className="text-sm text-muted-foreground mb-2">Next Steps:</p>
          <ul className="text-sm text-left space-y-1">
            <li>✓ Payment confirmed</li>
            <li>✓ Order details sent to Discord</li>
            <li>→ Waiting for Hi Optimizations to contact you</li>
          </ul>
        </div>
        <Button onClick={() => router.push("/")} className="bg-cyan-500 hover:bg-cyan-600 text-black">
          Return to Home
        </Button>
      </motion.div>
    </div>
  )
}

export default function SuccessPage() {
  return (
    <Suspense fallback={<div className="min-h-screen flex items-center justify-center">Loading...</div>}>
      <SuccessContent />
    </Suspense>
  )
}
