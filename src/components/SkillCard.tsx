"use client"
import { motion } from "framer-motion"
import * as simpleIcons from "simple-icons"
import type { IconType } from "react-icons"

interface SkillCardProps {
  skill: string
}

interface SkillIconData {
  icon?: simpleIcons.SimpleIcon
  hex?: string
  reactIcon?: IconType
  imgUrl?: string
}

const skillToIcon: Record<string, SkillIconData> = {
  JavaScript: { icon: simpleIcons.siJavascript },
  "React.js": { icon: simpleIcons.siReact },
  Angular: { imgUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/angular/angular-original.svg" },
  "Node.js": { icon: simpleIcons.siNodedotjs },
  "HTML/CSS": { icon: simpleIcons.siHtml5 },
  Python: { icon: simpleIcons.siPython },
  SQL: { icon: simpleIcons.siMysql },
  Java: { imgUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg" },
  "C#": { imgUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/csharp/csharp-original.svg" },
}

export function SkillCard({ skill }: SkillCardProps) {
  const data = skillToIcon[skill]

  if (!data) {
    return null
  }

  const color = data.hex || (data.icon ? `#${data.icon.hex}` : "#000")

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center justify-center"
    >
      {data.imgUrl ? (
        <img src={data.imgUrl || "/placeholder.svg"} alt={skill} className="w-14 h-14 mb-4" />
      ) : data.reactIcon ? (
        <data.reactIcon className="w-14 h-14 mb-4" color={color} />
      ) : (
        data.icon && (
          <svg
            role="img"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            className="w-14 h-14 mb-4"
            fill={color}
          >
            <path d={data.icon.path} />
          </svg>
        )
      )}
      <h3 className="text-lg font-semibold text-gray-800">{skill}</h3>
    </motion.div>
  )
}
