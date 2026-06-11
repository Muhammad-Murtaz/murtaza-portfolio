'use client'

import { Mail, ArrowUp } from "lucide-react"
import { FaGithub, FaLinkedin } from "react-icons/fa"

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <footer className="relative border-t border-zinc-800/60 bg-black px-4 sm:px-8 lg:px-16 py-12">
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-6 sm:flex-row sm:justify-between">
        <div className="flex items-center gap-4">
          <a
            href="https://github.com/Muhammad-Murtaz"
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-500 transition-colors hover:text-violet-400"
          >
            <FaGithub className="h-5 w-5" />
          </a>
          <a
            href="https://www.linkedin.com/in/muhammad-murtaza-144a3a223/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-500 transition-colors hover:text-violet-400"
          >
            <FaLinkedin className="h-5 w-5" />
          </a>
          <a
            href="mailto:muhammadmurtaza6211@gmail.com"
            className="text-slate-500 transition-colors hover:text-violet-400"
          >
            <Mail className="h-5 w-5" />
          </a>
        </div>

        <p className="text-center text-sm text-slate-600">
          &copy; {new Date().getFullYear()} Muhammad Murtaza &middot; Built with Next.js
        </p>

        <button
          onClick={scrollToTop}
          className="flex h-10 w-10 items-center justify-center rounded-full border border-zinc-800 text-slate-500 transition-all hover:border-violet-500 hover:text-violet-400 hover:shadow-[0_0_15px_-3px_rgba(124,58,237,0.4)]"
        >
          <ArrowUp className="h-4 w-4" />
        </button>
      </div>
    </footer>
  )
}
