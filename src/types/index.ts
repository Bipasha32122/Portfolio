export interface Project {
  id: string
  title: string
  category: string
  description: string
  features: string[]
  tech: string[]
  github: string
  demo?: string
}

export interface SkillCategory {
  category: string
  icon: string
  items: string[]
}

export interface SkillBar {
  name: string
  level: number
  color?: string
}

export interface ExperienceItem {
  role: string
  company: string
  period: string
  bullets: string[]
  tech: string[]
}

export interface Certification {
  name: string
  issuer: string
  description: string
}

export interface Achievement {
  icon: string
  title: string
  description: string
}
