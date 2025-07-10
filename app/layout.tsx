import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'SVEN AI - Terminal Portfolio',
  description: 'AI Consulting & Business Automation Expert',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}