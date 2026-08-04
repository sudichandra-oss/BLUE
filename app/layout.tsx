import React from "react"
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { generateSeoMetadata, generateJsonLdSchema } from '@/lib/seo-config'

const inter = Inter({ subsets: ["latin"], variable: '--font-inter' });

export function generateMetadata(): Metadata {
  return {
    ...generateSeoMetadata(),
    generator: 'BLUE Interiors',
    icons: {
      icon: [
        {
          url: '/icon.svg',
          type: 'image/svg+xml',
        },
        {
          url: '/icon-light-32x32.png',
          media: '(prefers-color-scheme: light)',
        },
        {
          url: '/icon-dark-32x32.png',
          media: '(prefers-color-scheme: dark)',
        },
      ],
      apple: '/apple-icon.png',
    },
  };
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const jsonLd = generateJsonLdSchema();

  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${inter.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  )
}
