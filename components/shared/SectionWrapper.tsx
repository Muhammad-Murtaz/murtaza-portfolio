'use client'

import { useRef } from "react"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

interface SectionWrapperProps {
  id: string
  number: string
  title: string
  subtitle?: string
  children: React.ReactNode
  className?: string
}

export default function SectionWrapper({ id, number, title, subtitle, children, className }: SectionWrapperProps) {
  const ref = useRef(null)

  return (
    <motion.section
      id={id}
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={cn("relative px-4 sm:px-8 lg:px-16 py-24 sm:py-32", className)}
    >
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 sm:mb-16">
          <span className="font-mono text-xs tracking-widest text-violet-400">
            {"// "}{number.padStart(2, "0")} {id.toUpperCase()}
          </span>
          <h2 className="mt-2 text-3xl sm:text-4xl lg:text-5xl font-bold text-white">{title}</h2>
          {subtitle && <p className="mt-4 max-w-2xl text-base sm:text-lg text-slate-400">{subtitle}</p>}
        </div>
        {children}
      </div>
    </motion.section>
  )
}
