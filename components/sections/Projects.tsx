'use client'

import SectionWrapper from "@/components/shared/SectionWrapper"
import ProjectCard from "@/components/shared/ProjectCard"
import { projects } from "@/data/projects"

export default function Projects() {
  return (
    <SectionWrapper id="projects" number="04" title="Projects" subtitle="Real-world AI systems built for production scale.">
      <div className="grid gap-6 sm:grid-cols-2">
        {projects.map((project, i) => (
          <ProjectCard key={project.id} project={project} index={i} />
        ))}
      </div>
    </SectionWrapper>
  )
}
