'use client'

import { motion } from "framer-motion"
import SectionWrapper from "@/components/shared/SectionWrapper"
import { MapPin, Clock, Globe, Briefcase } from "lucide-react"

const quickFacts = [
  { icon: Briefcase, label: "Experience", value: "4+ Years" },
  { icon: MapPin, label: "Location", value: "Islamabad, PK" },
  { icon: Globe, label: "Languages", value: "English, Urdu" },
  { icon: Clock, label: "Availability", value: "Remote Global" },
]

const timeline = [
  { year: "2021", role: "ML Engineer", company: "Dot Coder" },
  { year: "2023", role: "GenAI Engineer", company: "Vision Byte" },
  { year: "2026", role: "Open to New Roles", company: "" },
]

export default function About() {
  return (
    <SectionWrapper id="about" number="01" title="About Me" subtitle="A passionate AI engineer building systems that matter.">
      <div className="grid gap-12 lg:grid-cols-5">
        <div className="lg:col-span-3 space-y-5">
          <motion.p
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-base sm:text-lg leading-relaxed text-slate-300"
          >
            I&apos;m a Senior Python AI Engineer based in Islamabad, Pakistan (UTC+5), with over 4 years of experience
            designing and deploying production-grade AI systems. My expertise spans the full AI stack — from
            fine-tuning large language models and building multi-agent orchestration systems to architecting
            high-performance RAG pipelines and speech AI solutions.
          </motion.p>
          <motion.p
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-base sm:text-lg leading-relaxed text-slate-400"
          >
            At Vision Byte Technologies, I architected AI systems handling 100K+ daily requests and built
            HIPAA-compliant healthcare platforms. I&apos;m passionate about bridging the gap between cutting-edge
            AI research and real-world production systems that deliver measurable business impact.
          </motion.p>
          <motion.p
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-base sm:text-lg leading-relaxed text-slate-400"
          >
            I&apos;m open to remote roles, freelance projects, and consulting opportunities worldwide. Let&apos;s build
            something extraordinary together.
          </motion.p>
        </div>

        <div className="lg:col-span-2 space-y-6">
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="grid grid-cols-2 gap-3"
          >
            {quickFacts.map((fact) => (
              <div key={fact.label} className="rounded-xl border border-zinc-800 bg-zinc-900/50 p-4">
                <fact.icon className="mb-2 h-4 w-4 text-violet-400" />
                <p className="text-xs text-slate-500">{fact.label}</p>
                <p className="text-sm font-medium text-white">{fact.value}</p>
              </div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="rounded-xl border border-zinc-800 bg-zinc-900/50 p-5"
          >
            <p className="mb-4 text-xs font-medium uppercase tracking-wider text-slate-500">Journey</p>
            <div className="space-y-4">
              {timeline.map((item, i) => (
                <div key={item.year} className="flex items-center gap-3">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full border border-zinc-700 bg-zinc-800">
                    <span className="text-xs font-bold text-violet-400">{item.year.slice(-2)}</span>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-white">{item.role}</p>
                    {item.company && <p className="text-xs text-slate-500">{item.company}</p>}
                  </div>
                  {i < timeline.length - 1 && (
                    <div className="ml-2 h-px flex-1 bg-gradient-to-r from-violet-600/50 to-transparent" />
                  )}
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </SectionWrapper>
  )
}
