"use server"

interface OrderData {
  service: string
  price: string
  cpu: string
  gpu: string
  ram: string
  motherboard: string
  discordUsername: string
}

export async function sendOrderToDiscord(orderData: OrderData) {
  console.log("------------------------------------------------")
  console.log("🚀 SERVER ACTION STARTED: sendOrderToDiscord")
  console.log("📦 Data Received:", orderData)

  const webhookUrl = process.env.DISCORD_WEBHOOK_URL

  // DEBUG: Check if URL exists (Don't log the full URL for security)
  if (!webhookUrl) {
    console.error("❌ ERROR: DISCORD_WEBHOOK_URL is missing from .env.local file!")
    throw new Error("Discord webhook URL is not configured")
  } else {
    console.log("✅ Webhook URL found.")
  }

  const embed = {
    title: "🛒 New Order Received!",
    color: 0x00d9ff, // Cyan color
    fields: [
      { name: "Service Package", value: orderData.service, inline: true },
      { name: "Price", value: orderData.price, inline: true },
      { name: "Discord Username", value: orderData.discordUsername, inline: false },
      { name: "CPU", value: orderData.cpu, inline: true },
      { name: "GPU", value: orderData.gpu, inline: true },
      { name: "RAM", value: orderData.ram, inline: true },
      { name: "Motherboard", value: orderData.motherboard, inline: true },
    ],
    timestamp: new Date().toISOString(),
    footer: { text: "PCOptimize Order System" },
  }

  try {
    console.log("📡 Sending request to Discord...")
    
    const response = await fetch(webhookUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        embeds: [embed],
      }),
    })

    if (!response.ok) {
      const errorText = await response.text()
      console.error(`❌ Discord API Error: ${response.status} - ${errorText}`)
      throw new Error(`Discord webhook failed: ${response.status}`)
    }

    console.log("✅ SUCCESS: Message sent to Discord!")
    console.log("------------------------------------------------")
    return { success: true }
  } catch (error) {
    console.error("❌ CRITICAL ERROR in sendOrderToDiscord:", error)
    throw error
  }
}