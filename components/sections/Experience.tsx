'use client'

import { useState } from "react"
import { motion } from "framer-motion"
import { ChevronDown, Building2 } from "lucide-react"
import SectionWrapper from "@/components/shared/SectionWrapper"
import { experiences } from "@/data/experience"

export default function Experience() {
  return (
    <SectionWrapper id="experience" number="03" title="Work Experience" subtitle="Professional journey building production AI systems.">
      <div className="relative">
        <div className="absolute left-4 top-0 h-full w-px bg-gradient-to-b from-violet-600 via-zinc-800 to-transparent lg:left-1/2 lg:-translate-x-px" />

        <div className="space-y-12">
          {experiences.map((exp, i) => (
            <ExperienceCard key={exp.company} exp={exp} index={i} />
          ))}
        </div>
      </div>
    </SectionWrapper>
  )
}

function ExperienceCard({ exp, index }: { exp: typeof experiences[0]; index: number }) {
  const [isExpanded, setIsExpanded] = useState(false)
  const isLeft = index % 2 === 0
  const visibleBullets = exp.bullets.slice(0, 3)
  const hiddenBullets = exp.bullets.slice(3)

  return (
    <motion.div
      initial={{ opacity: 0, x: isLeft ? -40 : 40 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.15 }}
      className={`relative flex flex-col ${isLeft ? "lg:flex-row" : "lg:flex-row-reverse"} gap-6 lg:gap-12`}
    >
      <div className={`flex-1 ${isLeft ? "lg:text-right" : ""}`}>
        <div className="rounded-xl border border-zinc-800 bg-zinc-900/50 p-6 transition-all duration-300 hover:border-violet-500/30">
          <div className="flex items-start gap-4">
            <div className="hidden sm:flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-lg bg-zinc-800">
              <Building2 className="h-5 w-5 text-violet-400" />
            </div>
            <div className={`flex-1 ${isLeft ? "lg:text-right" : ""}`}>
              <h3 className="text-lg font-bold text-white">{exp.role}</h3>
              <p className="text-sm text-violet-400">{exp.company}</p>
              <p className="mt-1 text-xs text-slate-500">
                {exp.location} &middot; {exp.startDate} – {exp.endDate}
              </p>

              <ul className={`mt-4 space-y-2 ${isLeft ? "lg:text-right" : ""}`}>
                {visibleBullets.map((bullet, i) => (
                  <li key={i} className="text-sm text-slate-400 leading-relaxed">
                    {bullet}
                  </li>
                ))}
                {hiddenBullets.length > 0 && (
                  <>
                    {isExpanded && hiddenBullets.map((bullet, i) => (
                      <li key={i + 3} className="text-sm text-slate-400 leading-relaxed">
                        {bullet}
                      </li>
                    ))}
                    <button
                      onClick={() => setIsExpanded(!isExpanded)}
                      className="inline-flex items-center gap-1 text-xs text-violet-400 hover:text-violet-300 transition-colors mt-2"
                    >
                      {isExpanded ? "Show less" : `Show ${hiddenBullets.length} more`}
                      <ChevronDown className={`h-3 w-3 transition-transform ${isExpanded ? "rotate-180" : ""}`} />
                    </button>
                  </>
                )}
              </ul>

              <div className={`mt-4 flex flex-wrap gap-1.5 ${isLeft ? "lg:justify-end" : ""}`}>
                {exp.techStack.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-md bg-zinc-800 px-2 py-0.5 font-mono text-[11px] text-slate-400"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute left-4 top-2 z-10 flex h-7 w-7 items-center justify-center rounded-full border-2 border-violet-600 bg-black lg:left-1/2 lg:-translate-x-1/2">
        <div className="h-2 w-2 rounded-full bg-violet-600" />
      </div>

      <div className="flex-1 hidden lg:block" />
    </motion.div>
  )
}
