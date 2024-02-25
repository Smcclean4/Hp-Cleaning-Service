import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Head from 'next/head'
import './globals.css'

import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
config.autoAddCss = false

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'High Power Cleaning Service',
  description: 'High Power Cleaning To All',
  icons: {
    icon: "/favicon-32x32.png",
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <Head>
        <meta name="theme-color" content="#3b82f6" />
      </Head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
