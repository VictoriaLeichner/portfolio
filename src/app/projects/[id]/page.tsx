"use client"

import type React from "react"

import { motion } from "framer-motion"
import { ArrowLeft } from "lucide-react"
import Link from "next/link"
import { useParams, useRouter } from "next/navigation"
import { Button } from "@/src/components/ui/button"
import { Carousel } from "@/src/components/ui/carousel"
import { projects } from "@/data/projects"
import { useEffect } from "react"

export default function ProjectPage() {
  const { id } = useParams()
  const router = useRouter()
  const project = projects.find((p) => p.id === id)

  // Asegurarse de que la página se cargue desde arriba
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  if (!project) {
    return (
      <div className="min-h-screen bg-white pt-16">
        <div className="max-w-5xl mx-auto px-4 py-8 text-center">
          <h1 className="text-2xl font-bold text-gray-800">Proyecto no encontrado</h1>
          <Link href="/#projects">
            <Button variant="outline" className="mt-4 border-gray-300 hover:bg-gray-50 hover:text-gray-900">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Volver a Proyectos
            </Button>
          </Link>
        </div>
      </div>
    )
  }

  const handleBack = (e: React.MouseEvent) => {
    e.preventDefault()
    router.push("/#projects")
  }

  return (
    <main className="min-h-screen bg-white pt-16">
      <div className="max-w-5xl mx-auto px-4 py-8">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="space-y-8">
          {/* Back button */}
          <Button
            variant="outline"
            onClick={handleBack}
            className="group mb-4 border-gray-300 hover:bg-gray-50 hover:text-gray-900 hover:border-gray-400"
          >
            <ArrowLeft className="w-4 h-4 mr-2 transition-transform group-hover:-translate-x-1" />
            Volver a Proyectos
          </Button>

          {/* Title */}
          <div className="text-center mb-8">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-[#b92cad]">{project.title}</h1>
            <div className="flex flex-wrap gap-2 justify-center">
              {project.tags.map((tag) => (
                <span key={tag} className="px-3 py-1 rounded-full text-sm bg-pink-100 text-pink-600">
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Carousel */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="rounded-xl overflow-hidden shadow-lg"
          >
            <Carousel images={project.images} />
          </motion.div>

          {/* Description */}
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}>
            <div className="bg-white rounded-xl p-8 shadow-md border border-gray-100">
              <h2 className="text-2xl font-semibold mb-6 text-[#b92cad]">Sobre el Proyecto</h2>
              <div className="prose max-w-none">
                {project.longDescription.split("\n\n").map((paragraph, index) => (
                  <p key={index} className="text-gray-600 mb-4 last:mb-0 leading-relaxed">
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="flex justify-center gap-4"
          >
          </motion.div>
        </motion.div>
      </div>
    </main>
  )
}
