'use client'

import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import Image from "next/image"
import { Mail, ArrowDown, Download } from "lucide-react"
import { FaGithub, FaLinkedin } from "react-icons/fa"

const titles = [
  "Senior Python AI Engineer",
  "AI Agents & LLM Systems Architect",
  "RAG Pipeline Specialist",
  "LLM Fine-Tuning Engineer",
]

const stats = [
  { value: "100K+", label: "Daily Requests" },
  { value: "2M+", label: "Docs Processed" },
  { value: "50K+", label: "Monthly Users" },
  { value: "35%", label: "LLM Perf Gains" },
]

const techBadges = ["Python", "LangChain", "GPT-4", "FastAPI", "AWS"]

export default function Hero() {
  const [titleIndex, setTitleIndex] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)
  const [text, setText] = useState("")
  const [showCursor, setShowCursor] = useState(true)

  useEffect(() => {
    const currentTitle = titles[titleIndex]
    let timeout: ReturnType<typeof setTimeout>

    if (!isDeleting) {
      if (text.length < currentTitle.length) {
        timeout = setTimeout(() => setText(currentTitle.slice(0, text.length + 1)), 80)
      } else {
        timeout = setTimeout(() => setIsDeleting(true), 2000)
      }
    } else {
      if (text.length > 0) {
        timeout = setTimeout(() => setText(text.slice(0, -1)), 40)
      } else {
        setIsDeleting(false)
        setTitleIndex((prev) => (prev + 1) % titles.length)
      }
    }

    return () => clearTimeout(timeout)
  }, [text, isDeleting, titleIndex])

  useEffect(() => {
    const cursorInterval = setInterval(() => setShowCursor((prev) => !prev), 530)
    return () => clearInterval(cursorInterval)
  }, [])

  return (
    <section id="hero" className="relative min-h-screen flex items-center overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(124,58,237,0.15),transparent_50%),radial-gradient(ellipse_at_bottom_left,rgba(6,182,212,0.1),transparent_50%)]" />

      <div className="absolute inset-0 opacity-[0.03]">
        <div className="h-full w-full bg-[linear-gradient(rgba(255,255,255,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:60px_60px] animate-grid-scroll" />
      </div>

      <div className="relative mx-auto flex w-full max-w-7xl flex-col-reverse items-center gap-12 px-4 sm:px-8 lg:px-16 lg:flex-row lg:gap-16 pt-28 pb-16 lg:pt-0">
        <div className="flex-1 text-center lg:text-left">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-emerald-500/20 bg-emerald-500/10 px-4 py-1.5"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
            </span>
            <span className="text-sm text-emerald-400">Available for Remote Work</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-5xl font-bold leading-tight sm:text-6xl lg:text-7xl"
          >
            <span className="bg-gradient-to-r from-violet-400 via-violet-300 to-cyan-400 bg-clip-text text-transparent">
              Muhammad Murtaza
            </span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-4 h-10"
          >
            <span className="text-2xl font-medium text-slate-300 sm:text-3xl">
              {text}
              <span className={`ml-0.5 inline-block h-8 w-[3px] bg-violet-400 ${showCursor ? "opacity-100" : "opacity-0"}`} />
            </span>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mt-6 max-w-xl text-lg text-slate-400 lg:text-xl"
          >
            4+ years building production AI systems that scale.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="mt-6 flex flex-wrap justify-center gap-3 lg:justify-start"
          >
            {stats.map((stat) => (
              <span
                key={stat.label}
                className="inline-flex items-center gap-1.5 rounded-full border border-zinc-800 bg-zinc-900/60 px-3 py-1 text-xs sm:text-sm"
              >
                <span className="font-semibold text-violet-400">{stat.value}</span>
                <span className="text-slate-500">{stat.label}</span>
              </span>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="mt-8 flex flex-wrap items-center justify-center gap-4 lg:justify-start"
          >
            <a
              href="#projects"
              onClick={(e) => { e.preventDefault(); document.querySelector("#projects")?.scrollIntoView({ behavior: "smooth" }) }}
              className="inline-flex items-center gap-2 rounded-full bg-violet-600 px-6 py-3 text-sm font-medium text-white transition-all hover:bg-violet-500 hover:shadow-[0_0_25px_-5px_rgba(124,58,237,0.5)]"
            >
              View My Work
              <ArrowDown className="h-4 w-4" />
            </a>
            <a
              href="/resume/Resume_New.pdf" target="_blank"
              className="inline-flex items-center gap-2 rounded-full border border-zinc-700 px-6 py-3 text-sm font-medium text-slate-300 transition-all hover:border-violet-500 hover:text-white"
            >
              <Download className="h-4 w-4" />
              Download Resume
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.7 }}
            className="mt-8 flex items-center justify-center gap-5 lg:justify-start"
          >
            <a href="https://github.com/Muhammad-Murtaz" target="_blank" rel="noopener noreferrer" className="text-slate-500 transition-colors hover:text-violet-400">
              <FaGithub className="h-5 w-5" />
            </a>
            <a href="https://www.linkedin.com/in/muhammad-murtaza-144a3a223/" target="_blank" rel="noopener noreferrer" className="text-slate-500 transition-colors hover:text-violet-400">
              <FaLinkedin className="h-5 w-5" />
            </a>
            <a href="mailto:muhammadmurtaza6211@gmail.com" className="text-slate-500 transition-colors hover:text-violet-400">
              <Mail className="h-5 w-5" />
            </a>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="relative flex-shrink-0"
        >
          <div className="relative h-64 w-64 sm:h-80 sm:w-80">
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-violet-600 to-cyan-500 opacity-20 blur-3xl animate-pulse" />
            <div className="absolute inset-2 rounded-full border border-zinc-800 bg-zinc-900 flex items-center justify-center overflow-hidden">
              <span className="text-6xl font-bold bg-gradient-to-br from-violet-400 to-cyan-400 bg-clip-text text-transparent">
                MM
              </span>
            </div>
            {techBadges.map((tech, i) => {
              const angle = (i / techBadges.length) * 360
              const radius = 160
              const x = Math.cos((angle * Math.PI) / 180) * radius
              const y = Math.sin((angle * Math.PI) / 180) * radius
              return (
                <motion.span
                  key={tech}
                  className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
                  animate={{ x: x - 40, y: y - 12 }}
                  transition={{ duration: 0.8, delay: 0.8 + i * 0.1, ease: "easeOut" }}
                >
                  <span className="whitespace-nowrap rounded-full border border-zinc-800 bg-black/80 px-3 py-1 font-mono text-xs text-slate-300 backdrop-blur-sm">
                    {tech}
                  </span>
                </motion.span>
              )
            })}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
