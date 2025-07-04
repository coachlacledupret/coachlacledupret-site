

import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Header from '@/components/header'
import Footer from '@/components/footer'
import CookieBanner from '@/components/cookie-banner'
import { ThemeProvider } from '@/components/theme-provider'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Lacledupret - Coach en Financement Immobilier | Nicolas SZEFEROWICZ',
  description: 'Expert en financement immobilier, Nicolas SZEFEROWICZ vous accompagne pour optimiser votre prêt immobilier. Conseils personnalisés, négociation bancaire et coaching complet.',
  keywords: 'crédit immobilier, financement immobilier, coach prêt immobilier, négociation bancaire, conseil financement',
  authors: [{ name: 'Nicolas SZEFEROWICZ' }],
  verification: {
    google: 'RMREXLtmM7bmosTtViE8i2q3f9HTIHAUd-qy9sCyuEs',
  },
  other: {
    'google-site-verification': 'RMREXLtmM7bmosTtViE8i2q3f9HTIHAUd-qy9sCyuEs',
  },
  openGraph: {
    title: 'Lacledupret - Coach en Financement Immobilier',
    description: 'Optimisez votre financement immobilier avec Nicolas SZEFEROWICZ, expert en crédit immobilier.',
    type: 'website',
    locale: 'fr_FR',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr" suppressHydrationWarning>
      <body className={inter.className} suppressHydrationWarning>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem={false}
          disableTransitionOnChange
        >
          <Header />
          <main className="min-h-screen">
            {children}
          </main>
          <Footer />
          <CookieBanner />
        </ThemeProvider>
      </body>
    </html>
  )
}

