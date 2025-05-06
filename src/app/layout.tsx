import "./globals.css"
import { Navbar } from "@/src/components/Navbar"
import { Inter } from "next/font/google"
import type React from "react"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "Victoria | Fullstack Developer",
  description: "Portfolio personal de desarrollo web",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es" className={`${inter.className} scroll-smooth`}>
      <body className="antialiased">
        <Navbar />
        {children}
      </body>
    </html>
  )
}

