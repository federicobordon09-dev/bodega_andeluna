import type { Metadata } from 'next'
import { Cormorant_Garamond, Raleway, Playfair_Display } from 'next/font/google'
import './globals.css'

const cormorantGaramond = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['400', '600', '700'],
  style: ['normal', 'italic'],
  variable: '--font-display',
  display: 'swap',
})

const raleway = Raleway({
  subsets: ['latin'],
  weight: ['300', '400', '600'],
  variable: '--font-body',
  display: 'swap',
})

const playfairDisplay = Playfair_Display({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-data',
  display: 'swap',
})

export const metadata: Metadata = {
  title: {
    default: 'Bodega Andeluna | High Mountain Wines, Valle de Uco',
    template: '%s | Bodega Andeluna',
  },
  description:
    'Bodega Andeluna: high mountain wines in Gualtallary, Tupungato, Valle de Uco. +1,300 masl, 70 hectares, minimal intervention. Founded in 2003.',
  openGraph: {
    title: 'Bodega Andeluna | High Mountain Wines',
    description:
      'Discover our high mountain wines in Gualtallary, Valle de Uco. Experiences, restaurant and lodge at +1,300 masl.',
    url: 'https://andeluna.com.ar',
    siteName: 'Bodega Andeluna',
    locale: 'es_AR',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es" className={`${cormorantGaramond.variable} ${raleway.variable} ${playfairDisplay.variable}`}>
      <body>{children}</body>
    </html>
  )
}
