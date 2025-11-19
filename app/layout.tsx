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
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
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