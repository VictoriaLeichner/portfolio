"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { useRouter } from "next/navigation"
import { Card } from "@/src/components/ui/card"

interface ProjectCardProps {
  id: string
  title: string
  description: string
  image: string
  tags: string[]
}

export function ProjectCard({ id, title, description, image, tags }: ProjectCardProps) {
  const router = useRouter()

  const handleClick = () => {
    router.push(`/projects/${id}`)
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      onClick={handleClick}
      className="cursor-pointer"
    >
      <Card className="overflow-hidden group hover:shadow-lg transition-shadow">
        <div className="relative h-48">
          <Image
            src={image || "/placeholder.svg"}
            alt={title}
            fill
            quality={100}
            className="object-contain transition-transform duration-300 group-hover:scale-110"
          />
        </div>
        <div className="p-6">
          <h3 className="text-xl font-semibold mb-2">{title}</h3>
          <p className="text-gray-600 mb-4">{description}</p>
          <div className="flex flex-wrap gap-2 mb-4">
            {tags.map((tag) => (
              <span key={tag} className="px-3 py-1 rounded-full text-sm bg-pink-100 text-pink-600">
                {tag}
              </span>
            ))}
          </div>
          </div>
      </Card>
    </motion.div>
  )
}
