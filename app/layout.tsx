import type { Metadata } from "next"
import { Inter } from "next/font/google"
// import { Analytics } from '@vercel/analytics/next' 
import "./globals.css"

// We use Inter to fix the "Unknown font Geist" error
const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: 'HiOptimizations - Professional PC Optimization & Overclocking',
  description: 'Boost your system with Hi Optimizations. Lower latency, better FPS, deeper tuning. Private 1-on-1 custom sessions trusted by high-level players and creators.',
  icons: {
    icon: [
      {
        url: '/logo.ico',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/logo.ico',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/logo.ico',
        type: 'image/svg+xml',
      },
    ],
    apple: '/logo.ico',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="dark">
      <body className={inter.className}>
        {children}
        {/* <Analytics /> */} 
      </body>
    </html>
  )
}
