'use client'

import { useState } from "react"
import { motion } from "framer-motion"
import Image from "next/image"
import { ExternalLink, X } from "lucide-react"
import SectionWrapper from "@/components/shared/SectionWrapper"
import { StaggerContainer, StaggerItem } from "@/components/shared/AnimatedText"
import { certificates } from "@/data/certificates"

export default function Certificates() {
  const [selectedCert, setSelectedCert] = useState<number | null>(null)

  return (
    <SectionWrapper id="certificates" number="05" title="Certificates & Awards" subtitle="Continuous learning and professional development.">
      <div className="flex justify-center">
        <StaggerContainer className="w-full max-w-md">
          {certificates.map((cert, i) => (
            <StaggerItem key={i}>
              <motion.button
                whileHover={{ scale: 1.03, y: -4 }}
                onClick={() => setSelectedCert(i)}
                className="group w-full text-left rounded-xl border border-zinc-800 bg-zinc-900/50 overflow-hidden transition-all duration-300 hover:border-violet-500/50 hover:shadow-[0_0_30px_-5px_rgba(124,58,237,0.2)]"
              >
                <div className="relative aspect-[4/3] overflow-hidden bg-zinc-800">
                  <Image
                    src={cert.imageSrc}
                    alt={cert.title}
                    fill
                    className="object-contain p-2 transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-4">
                  <h3 className="text-sm font-semibold text-white">{cert.title}</h3>
                  <p className="mt-1 text-xs text-slate-500">{cert.issuer}</p>
                  <p className="mt-0.5 text-xs text-slate-600">{cert.date}</p>
                  {cert.verifyUrl && (
                    <a
                      href={cert.verifyUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="mt-2 inline-flex items-center gap-1 text-xs text-violet-400 hover:text-violet-300"
                    >
                      Verify <ExternalLink className="h-3 w-3" />
                    </a>
                  )}
                </div>
              </motion.button>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>

      {selectedCert !== null && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          onClick={() => setSelectedCert(null)}
          className="fixed inset-0 z-[60] flex items-center justify-center bg-black/80 backdrop-blur-sm p-4"
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="relative max-h-[90vh] max-w-3xl rounded-xl overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedCert(null)}
              className="absolute top-3 right-3 z-10 flex h-8 w-8 items-center justify-center rounded-full bg-black/60 text-white hover:bg-black/80"
            >
              <X className="h-4 w-4" />
            </button>
            <Image
              src={certificates[selectedCert].imageSrc}
              alt={certificates[selectedCert].title}
              width={1200}
              height={900}
              className="object-contain"
            />
          </motion.div>
        </motion.div>
      )}
    </SectionWrapper>
  )
}
