import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { Header } from './Header';
import { Footer } from './Footer';

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "LUXE - Premium Fashion Collection",
  description:
    "Discover extraordinary pieces that define elegance and sophistication. Shop our curated collection of premium fashion.",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      
      <body className={inter.className}>
        <Header />
        {children}
         <Footer />
        </body>
     


    </html>
  )
}
