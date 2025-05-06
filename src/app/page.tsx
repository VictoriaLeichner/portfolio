"use client"

import { motion } from "framer-motion"
import { Button } from "@/src/components/ui/button"
import { Github, Linkedin, Mail } from "lucide-react"
import { ProjectCard } from "@/src/components/ProjectCard"
import { SkillCard } from "@/src/components/SkillCard"
import { projects } from "@/data/projects"
import Image from "next/image"
import type { IconType } from "react-icons/lib"
import { useEffect } from "react"

export default function Page() {
  // Función para manejar el scroll a la sección correcta cuando se carga la página
  useEffect(() => {
    // Verificar si hay un hash en la URL
    if (window.location.hash) {
      // Esperar un momento para que la página se cargue completamente
      setTimeout(() => {
        const id = window.location.hash
        const element = document.querySelector(id)
        if (element) {
          element.scrollIntoView({ behavior: "smooth" })
        }
      }, 300)
    }
  }, [])

  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="h-screen flex items-center justify-center px-4 relative">
        <div className="max-w-5xl mx-auto text-center mt-[-40px]">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-4"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-2 text-[#b92cad]">Victoria Leichner</h1>
            <h2 className="text-2xl md:text-3xl font-medium text-gray-700 mb-4">Desarrolladora Fullstack</h2>

            <p className="text-lg text-gray-600 mb-6 max-w-2xl mx-auto">
              Creo aplicaciones web completas, combinando frontend y backend para construir experiencias funcionales y
              atractivas.
            </p>

            <div className="flex gap-4 justify-center">
              <Button size="lg" className="bg-[#b92cad] hover:bg-[#a02492]">
                <a href="#projects">Ver Proyectos</a>
              </Button>
              <Button size="lg" variant="outline" className="border-[#b92cad] text-[#b92cad] hover:bg-pink-50">
                <a href="#contact">Contactar</a>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* About Me Section */}
      <section id="about" className="py-20 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-[#b92cad]">Sobre Mí</h2>
          <div className="flex flex-col md:flex-row items-center gap-8">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="w-full md:w-1/3"
            >
              <div className="rounded-full overflow-hidden w-48 h-48 md:w-64 md:h-64">
                <Image
                  src="/fotos/fotoSobreMi4.2.png"
                  alt="Victoria"
                  width={600}
                  height={600}
                  unoptimized
                  className="object-cover w-full h-full"
                />
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="w-full md:w-2/3"
            >
              <p className="text-gray-600 mb-4">
                Soy Ingeniera en Sistemas de Información y Desarrolladora Fullstack. A lo largo de mi formación y
                proyectos personales, he trabajado en el desarrollo de aplicaciones web, abarcando tanto el frontend
                como el backend. Me motiva poder participar en todo el ciclo de creación, desde la concepción de la idea
                hasta su implementación final.
              </p>
              <p className="text-gray-600 mb-4">
                Durante este recorrido, desarrollé sitios web responsivos y aplicaciones web, explorando distintas
                tecnologías y comprendiendo cómo se integran las diferentes partes de un proyecto.
              </p>
              <p className="text-gray-600">
                Hoy en día, continúo perfeccionando mis habilidades, creando proyectos propios y manteniéndome al día
                con nuevas herramientas y tendencias para seguir creciendo como desarrolladora.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-[#b92cad]">Mis Proyectos</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project) => (
              <ProjectCard
                key={project.id}
                id={project.id}
                title={project.title}
                description={project.shortDescription}
                image={project.images[0]}
                tags={project.tags}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-[#b92cad]">Mis Habilidades</h2>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ staggerChildren: 0.1 }}
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
          >
            <SkillCard skill="JavaScript" />
            <SkillCard skill="React.js" />
            <SkillCard skill="Angular" />
            <SkillCard skill="Node.js" />
            <SkillCard skill="HTML/CSS" />
            <SkillCard skill="Python" />
            <SkillCard skill="Java" />
            <SkillCard skill="C#" />
            <SkillCard skill="SQL" />
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-12 text-[#b92cad]">Trabajemos Juntos</h2>
          <p className="text-gray-600 mb-8">
            ¿Tienes un proyecto interesante en mente? ¡Me encantaría escuchar sobre él! Estoy siempre abierta a nuevas
            oportunidades y colaboraciones.
          </p>
          <div className="flex justify-center gap-6">
            <SocialLink href="https://github.com/VictoriaLeichner" icon={Github} />
            <SocialLink href="https://linkedin.com/in/leichner-victoria" icon={Linkedin} />
            <SocialLink href="mailto:victorialeichner15@gmail.com" icon={Mail} />
          </div>
        </div>
      </section>
    </main>
  )
}

function SocialLink({ href, icon: Icon }: { href: string; icon: IconType }) {
  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      className="p-3 rounded-full bg-pink-50 text-[#b92cad] hover:bg-pink-100 transition-colors"
    >
      <Icon className="w-6 h-6" />
    </motion.a>
  )
}
