'use client'

import { useEffect, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"
import { ExternalLink, FileText, Play, X } from "lucide-react"
import { FaGithub } from "react-icons/fa"
import type { Project } from "@/types"
import { cn } from "@/lib/utils"

interface ProjectCardProps {
  project: Project
  index: number
}

export default function ProjectCard({ project, index }: ProjectCardProps) {
  const [isHovered, setIsHovered] = useState(false)
  const [isVideoOpen, setIsVideoOpen] = useState(false)

  const videoMedia = project.media.find((m) => m.type === "video")
  const hasVideo = !!videoMedia
  const thumbnail = project.media.find((m) => m.type === "image")

  useEffect(() => {
    if (!isVideoOpen) return

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsVideoOpen(false)
    }

    document.addEventListener("keydown", onKeyDown)
    document.body.style.overflow = "hidden"

    return () => {
      document.removeEventListener("keydown", onKeyDown)
      document.body.style.overflow = ""
    }
  }, [isVideoOpen])

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: index * 0.1 }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className="group relative overflow-hidden rounded-xl border border-zinc-800 bg-zinc-900/50 transition-all duration-300 hover:border-violet-500/50 hover:shadow-[0_0_30px_-5px_rgba(124,58,237,0.3)]"
      >
        {project.featured && (
          <div className="absolute top-3 right-3 z-10 rounded-full bg-gradient-to-r from-violet-600 to-cyan-500 px-3 py-1 text-xs font-semibold text-white">
            Featured
          </div>
        )}

        <div className="relative aspect-video overflow-hidden bg-zinc-800">
          {hasVideo && (
            <button
              type="button"
              onClick={() => setIsVideoOpen(true)}
              aria-label={`Play ${project.title} demo`}
              className="absolute inset-0 z-10 flex items-center justify-center bg-black/40 opacity-0 transition-opacity group-hover:opacity-100"
            >
              <span className="flex h-12 w-12 items-center justify-center rounded-full bg-violet-600/90 backdrop-blur-sm transition-transform hover:scale-110">
                <Play className="h-5 w-5 text-white" />
              </span>
            </button>
          )}
          {thumbnail ? (
            <Image
              src={thumbnail.src}
              alt={project.title}
              fill
              className={cn(
                "object-cover transition-transform duration-500",
                isHovered && "scale-105"
              )}
            />
          ) : (
            <div className="flex h-full items-center justify-center bg-gradient-to-br from-violet-900/30 to-cyan-900/30">
              <span className="text-4xl font-bold text-zinc-700">{project.title.charAt(0)}</span>
            </div>
          )}
          {hasVideo && (
            <div className="absolute top-3 left-3 rounded bg-black/60 px-2 py-0.5 text-xs text-zinc-400">
              Demo
            </div>
          )}
        </div>

        <div className="p-5">
          <h3 className="text-lg font-bold text-white">{project.title}</h3>
          <p className="mt-2 text-sm text-slate-400 line-clamp-2">{project.description}</p>

          <div className="mt-4 flex flex-wrap gap-1.5">
            {project.techStack.slice(0, 5).map((tech) => (
              <span
                key={tech}
                className="rounded-md bg-zinc-800 px-2 py-0.5 font-mono text-[11px] text-slate-300"
              >
                {tech}
              </span>
            ))}
            {project.techStack.length > 5 && (
              <span className="rounded-md bg-zinc-800 px-2 py-0.5 font-mono text-[11px] text-slate-500">
                +{project.techStack.length - 5}
              </span>
            )}
          </div>

          <div className="mt-4 flex items-center gap-3">
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-xs text-slate-400 transition-colors hover:text-violet-400"
              >
                <FaGithub className="h-3.5 w-3.5" />
                GitHub
              </a>
            )}
            {project.demoUrl && (
              <a
                href={project.demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-xs text-slate-400 transition-colors hover:text-cyan-400"
              >
                <ExternalLink className="h-3.5 w-3.5" />
                Live Demo
              </a>
            )}
            {hasVideo && (
              <button
                type="button"
                onClick={() => setIsVideoOpen(true)}
                className="flex items-center gap-1.5 text-xs text-slate-400 transition-colors hover:text-violet-400"
              >
                <Play className="h-3.5 w-3.5" />
                Watch Demo
              </button>
            )}
            {project.longDescription && (
              <span className="flex items-center gap-1.5 text-xs text-slate-500">
                <FileText className="h-3.5 w-3.5" />
                Case Study
              </span>
            )}
          </div>
        </div>
      </motion.div>

      <AnimatePresence>
        {isVideoOpen && videoMedia && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={() => setIsVideoOpen(false)}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4 backdrop-blur-sm"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-[80vw] max-w-5xl overflow-hidden rounded-xl border border-zinc-800 bg-zinc-900 shadow-2xl"
            >
              <div className="flex items-center justify-between border-b border-zinc-800 px-4 py-3">
                <h3 className="text-sm font-semibold text-white">{project.title} — Demo</h3>
                <button
                  type="button"
                  onClick={() => setIsVideoOpen(false)}
                  aria-label="Close video"
                  className="flex h-8 w-8 items-center justify-center rounded-full text-slate-400 transition-colors hover:bg-zinc-800 hover:text-white"
                >
                  <X className="h-4 w-4" />
                </button>
              </div>
              <video
                src={videoMedia.src}
                controls
                autoPlay
                playsInline
                className="aspect-video w-full bg-black"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}