import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
// Removed unnecessary imports for cleaner terminal interface

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'SVEN AI - Terminal Portfolio | AI Consulting & Automation Expert',
  description: 'AI-powered terminal portfolio showcasing 48-hour delivery AI consulting services, automation solutions, and live business intelligence demonstrations by Sven Arnarsson (HARKA.dk)',
  keywords: [
    'AI consultant',
    'business automation',
    'HARKA',
    'AI portfolio',
    'Sven Arnarsson',
    'terminal interface',
    'AI consulting Denmark',
    '48-hour delivery',
    'business intelligence',
    'automation tools'
  ],
  authors: [{ name: 'Sven Arnarsson', url: 'https://linkedin.com/in/svenarnarsson' }],
  creator: 'Sven Arnarsson (HARKA.dk)',
  publisher: 'HARKA.dk',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://sven-ai.vercel.app',
    title: 'SVEN AI - Terminal Portfolio | AI Consulting Expert',
    description: 'Experience the future of AI consulting through an interactive terminal portfolio. Live demonstrations of business automation, 48-hour delivery promise, and cutting-edge AI solutions.',
    siteName: 'SVEN AI Terminal Portfolio',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'SVEN AI Terminal Portfolio - AI Consulting Interface',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'SVEN AI - Terminal Portfolio | AI Consulting Expert',
    description: 'Interactive terminal portfolio showcasing AI consulting expertise with live demonstrations and 48-hour delivery promise.',
    creator: '@sven_ai',
    images: ['/og-image.jpg'],
  },
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 1,
  },
  themeColor: '#00ff41',
  manifest: '/manifest.json',
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon-16x16.png',
    apple: '/apple-touch-icon.png',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link 
          href="https://fonts.googleapis.com/css2?family=Courier+Prime:wght@400;700&display=swap" 
          rel="stylesheet" 
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                // Load theme preference
                const theme = localStorage.getItem('terminal-theme') || 'matrix';
                document.documentElement.classList.add('theme-' + theme);
                
                // Performance monitoring
                if (typeof window !== 'undefined') {
                  window.performance.mark('layout-start');
                }
              })();
            `,
          }}
        />
      </head>
      <body className="bg-black text-green-400 font-mono min-h-screen overflow-hidden">
        {children}
        
        {/* Performance monitoring script */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              if (typeof window !== 'undefined') {
                window.addEventListener('load', function() {
                  window.performance.mark('layout-end');
                  
                  // Measure Core Web Vitals
                  if ('web-vitals' in window) {
                    import('web-vitals').then(({ getCLS, getFID, getFCP, getLCP, getTTFB }) => {
                      getCLS(console.log);
                      getFID(console.log);
                      getFCP(console.log);
                      getLCP(console.log);
                      getTTFB(console.log);
                    });
                  }
                });
              }
            `,
          }}
        />
      </body>
    </html>
  )
}