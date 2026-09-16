'use client'

import { useState } from "react"
import { motion } from "framer-motion"
import { Mail, MapPin, Phone, Copy, Check, Send } from "lucide-react"
import { FaLinkedin } from "react-icons/fa"
import SectionWrapper from "@/components/shared/SectionWrapper"

export default function Contact() {
  const [copied, setCopied] = useState(false)
  const [formState, setFormState] = useState({ name: "", email: "", subject: "", message: "" })
  const [submitted, setSubmitted] = useState(false)

  const copyEmail = () => {
    navigator.clipboard.writeText("muhammadmurtaza6211@gmail.com")
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const mailtoLink = `mailto:muhammadmurtaza6211@gmail.com?subject=${encodeURIComponent(formState.subject)}&body=${encodeURIComponent(`Name: ${formState.name}\nEmail: ${formState.email}\n\n${formState.message}`)}`
    window.open(mailtoLink, "_blank")
    setSubmitted(true)
    setFormState({ name: "", email: "", subject: "", message: "" })
    setTimeout(() => setSubmitted(false), 3000)
  }

  return (
    <SectionWrapper id="contact" number="07" title="Contact" subtitle="Available for remote roles, freelance projects & consulting.">
      <div className="grid gap-12 lg:grid-cols-5">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="lg:col-span-2 space-y-6"
        >
          <h3 className="text-2xl font-bold text-white">Let&apos;s Build Something</h3>
          <p className="text-slate-400 leading-relaxed">
            I&apos;m always open to discussing new opportunities, interesting projects, or AI consulting.
            Whether you have a question or just want to say hi — I&apos;ll get back to you.
          </p>

          <div className="space-y-4">
            <button onClick={copyEmail} className="flex w-full items-center gap-3 rounded-lg border border-zinc-800 bg-zinc-900/50 p-4 text-left transition-all hover:border-violet-500/30">
              <Mail className="h-5 w-5 text-violet-400 flex-shrink-0" />
              <div className="flex-1 min-w-0">
                <p className="text-xs text-slate-500">Email</p>
                <p className="text-sm text-white truncate">muhammadmurtaza6211@gmail.com</p>
              </div>
              {copied ? <Check className="h-4 w-4 text-emerald-400 flex-shrink-0" /> : <Copy className="h-4 w-4 text-slate-500 flex-shrink-0" />}
            </button>

            <div className="flex items-center gap-3 rounded-lg border border-zinc-800 bg-zinc-900/50 p-4">
              <Phone className="h-5 w-5 text-violet-400 flex-shrink-0" />
              <div>
                <p className="text-xs text-slate-500">Phone</p>
                <p className="text-sm text-white">+92 317 0924890</p>
              </div>
            </div>

            <div className="flex items-center gap-3 rounded-lg border border-zinc-800 bg-zinc-900/50 p-4">
              <MapPin className="h-5 w-5 text-violet-400 flex-shrink-0" />
              <div>
                <p className="text-xs text-slate-500">Location</p>
                <p className="text-sm text-white">Islamabad, Pakistan (UTC+5)</p>
              </div>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <a href="https://www.linkedin.com/in/muhammad-murtaza-144a3a223/" target="_blank" rel="noopener noreferrer" className="flex h-10 w-10 items-center justify-center rounded-lg border border-zinc-800 text-slate-500 transition-all hover:border-violet-500 hover:text-violet-400">
              <FaLinkedin className="h-4 w-4" />
            </a>
          </div>

          <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/20 bg-emerald-500/10 px-4 py-1.5">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
            </span>
            <span className="text-sm text-emerald-400">Open to Work</span>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="lg:col-span-3"
        >
          <form onSubmit={handleSubmit} className="rounded-xl border border-zinc-800 bg-zinc-900/50 p-6 sm:p-8 space-y-5">
            <div className="grid gap-5 sm:grid-cols-2">
              <div>
                <label htmlFor="name" className="mb-2 block text-xs font-medium text-slate-400">Name</label>
                <input
                  id="name"
                  type="text"
                  required
                  value={formState.name}
                  onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                  className="w-full rounded-lg border border-zinc-800 bg-zinc-950 px-4 py-3 text-sm text-white placeholder-slate-600 outline-none transition-colors focus:border-violet-500"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label htmlFor="email" className="mb-2 block text-xs font-medium text-slate-400">Email</label>
                <input
                  id="email"
                  type="email"
                  required
                  value={formState.email}
                  onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                  className="w-full rounded-lg border border-zinc-800 bg-zinc-950 px-4 py-3 text-sm text-white placeholder-slate-600 outline-none transition-colors focus:border-violet-500"
                  placeholder="your@email.com"
                />
              </div>
            </div>

            <div>
              <label htmlFor="subject" className="mb-2 block text-xs font-medium text-slate-400">Subject</label>
              <select
                id="subject"
                required
                value={formState.subject}
                onChange={(e) => setFormState({ ...formState, subject: e.target.value })}
                className="w-full rounded-lg border border-zinc-800 bg-zinc-950 px-4 py-3 text-sm text-white outline-none transition-colors focus:border-violet-500"
              >
                <option value="" disabled>Select a subject</option>
                <option value="Job Opportunity">Job Opportunity</option>
                <option value="Freelance">Freelance</option>
                <option value="Consultation">Consultation</option>
                <option value="Other">Other</option>
              </select>
            </div>

            <div>
              <label htmlFor="message" className="mb-2 block text-xs font-medium text-slate-400">Message</label>
              <textarea
                id="message"
                required
                rows={5}
                value={formState.message}
                onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                className="w-full resize-none rounded-lg border border-zinc-800 bg-zinc-950 px-4 py-3 text-sm text-white placeholder-slate-600 outline-none transition-colors focus:border-violet-500"
                placeholder="Tell me about your project..."
              />
            </div>

            <button
              type="submit"
              className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-violet-600 px-6 py-3 text-sm font-medium text-white transition-all hover:bg-violet-500 hover:shadow-[0_0_25px_-5px_rgba(124,58,237,0.5)]"
            >
              {submitted ? "Message Sent!" : "Send Message"}
              <Send className="h-4 w-4" />
            </button>
          </form>
        </motion.div>
      </div>
    </SectionWrapper>
  )
}
