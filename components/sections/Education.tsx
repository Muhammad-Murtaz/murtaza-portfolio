'use client'

import { motion } from "framer-motion"
import { GraduationCap } from "lucide-react"
import SectionWrapper from "@/components/shared/SectionWrapper"

const coursework = [
  "Machine Learning", "Deep Learning", "Natural Language Processing",
  "Computer Vision", "Database Systems", "Software Engineering",
  "Data Structures & Algorithms", "Computer Networks",
]

export default function Education() {
  return (
    <SectionWrapper id="education" number="06" title="Education" subtitle="Academic foundation in Information Technology.">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="mx-auto max-w-2xl"
      >
        <div className="rounded-xl border border-zinc-800 bg-zinc-900/50 p-6 sm:p-8">
          <div className="flex items-start gap-4">
            <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-lg bg-zinc-800">
              <GraduationCap className="h-5 w-5 text-violet-400" />
            </div>
            <div className="flex-1">
              <h3 className="text-lg font-bold text-white">BS Information Technology</h3>
              <p className="mt-1 text-sm text-violet-400">Kohat University of Science & Technology</p>
              <p className="mt-0.5 text-xs text-slate-500">Oct 2021 – Jun 2025</p>

              <div className="mt-5">
                <p className="mb-3 text-xs font-medium uppercase tracking-wider text-slate-500">Relevant Coursework</p>
                <div className="flex flex-wrap gap-2">
                  {coursework.map((course) => (
                    <span
                      key={course}
                      className="rounded-md bg-zinc-800 px-3 py-1 font-mono text-xs text-slate-400"
                    >
                      {course}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </SectionWrapper>
  )
}
