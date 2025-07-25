import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Head from 'next/head'
import Footer from './components/Footer'
import { Navbar } from './components/Navbar'
import './globals.css'

import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
import Link from 'next/link'
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
      <body className={inter.className}>
              {/* High power cleaning and leading statement */}
      <div className="z-10 w-full items-center justify-between text-left lg:text-center font-mono text-xl p-6 lg:flex bg-blue-500 text-white">
        <Link href="/" className="hover:cursor-pointer"><p>High Power <br></br>Cleaning Service</p></Link>
        <Navbar />
      </div>
        {children}
      <Footer />
      </body>
    </html>
  )
}
