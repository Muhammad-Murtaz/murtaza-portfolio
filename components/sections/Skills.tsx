'use client'

import { motion } from "framer-motion"
import {
  Code2, Bot, Sparkles, Sliders, Search, Gauge,
  Network, Mic, Cloud, Database, Shield,
} from "lucide-react"
import SectionWrapper from "@/components/shared/SectionWrapper"
import { StaggerContainer, StaggerItem } from "@/components/shared/AnimatedText"
import { skillCategories } from "@/data/skills"
import type { LucideIcon } from "lucide-react"

const iconMap: Record<string, LucideIcon> = {
  python: Code2,
  bot: Bot,
  sparkles: Sparkles,
  sliders: Sliders,
  search: Search,
  gauge: Gauge,
  network: Network,
  mic: Mic,
  cloud: Cloud,
  database: Database,
  code: Code2,
  shield: Shield,
}

export default function Skills() {
  return (
    <SectionWrapper id="skills" number="02" title="Technical Skills" subtitle="A comprehensive toolkit for building production AI systems.">
      <StaggerContainer className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {skillCategories.map((category) => {
          const Icon = iconMap[category.icon] || Code2
          return (
            <StaggerItem key={category.category}>
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="group h-full rounded-xl border border-zinc-800 bg-zinc-900/50 p-5 transition-all duration-300 hover:border-violet-500/50 hover:shadow-[0_0_25px_-5px_rgba(124,58,237,0.15)]"
              >
                <div className="mb-4 flex items-center gap-3">
                  <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-zinc-800 group-hover:bg-violet-600/20 transition-colors">
                    <Icon className="h-4 w-4 text-violet-400" />
                  </div>
                  <h3 className="font-semibold text-sm text-white">{category.category}</h3>
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-md bg-zinc-800/80 px-2 py-1 font-mono text-[11px] text-slate-400 transition-colors group-hover:text-slate-300"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            </StaggerItem>
          )
        })}
      </StaggerContainer>
    </SectionWrapper>
  )
}
