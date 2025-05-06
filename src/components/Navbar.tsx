"use client"

import { motion } from "framer-motion"
import { useEffect, useState } from "react"
import { usePathname } from "next/navigation"

const navItems = [
  { name: "Sobre Mí", href: "#about" },
  { name: "Proyectos", href: "#projects" },
  { name: "Habilidades", href: "#skills" },
  { name: "Contacto", href: "#contact" },
]

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()
  const isHomePage = pathname === "/"

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <motion.nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-white/90 backdrop-blur-sm shadow-sm py-3" : "bg-white/80 py-4"
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-end">
          <div className="flex items-center space-x-8">
            {navItems.map((item) => (
              <motion.div key={item.name} whileHover={{ y: -2 }} whileTap={{ scale: 0.95 }}>
                {isHomePage ? (
                  // Si estamos en la página principal, usamos scroll suave con anchor
                  <a
                    href={item.href}
                    className="text-gray-700 hover:text-[#b92cad] transition-colors font-medium"
                    onClick={(e) => {
                      e.preventDefault()
                      const target = document.querySelector(item.href)
                      if (target) {
                        target.scrollIntoView({ behavior: "smooth" })
                      }
                    }}
                  >
                    {item.name}
                  </a>
                ) : (
                  // Si estamos en otra página, usamos un enlace directo a la página principal con el anchor
                  <a
                    href={`/${item.href}`}
                    className="text-gray-700 hover:text-[#b92cad] transition-colors font-medium"
                  >
                    {item.name}
                  </a>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </motion.nav>
  )
}
