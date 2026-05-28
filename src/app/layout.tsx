import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Christopher Santangelo - Technical Support Engineer',
  description:
    'Portfolio and resume for Christopher Santangelo, a technical support engineer working across SaaS, IAM, cloud, endpoint, VoIP, documentation, automation, and product builds.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
