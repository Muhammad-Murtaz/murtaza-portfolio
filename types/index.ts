export interface Project {
  id: string
  title: string
  description: string
  longDescription?: string
  media: {
    type: 'video' | 'image'
    src: string
  }[]
  techStack: string[]
  githubUrl?: string
  demoUrl?: string
  featured: boolean
}

export interface SkillCategory {
  category: string
  icon: string
  skills: string[]
}

export interface Experience {
  role: string
  company: string
  location: string
  startDate: string
  endDate: string
  bullets: string[]
  techStack: string[]
}

export interface Certificate {
  title: string
  issuer: string
  date: string
  credentialId?: string
  verifyUrl?: string
  imageSrc: string
}

export interface NavLink {
  label: string
  href: string
}
