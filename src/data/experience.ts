import type { ExperienceItem, Certification, Achievement } from '../types'

export const experiences: ExperienceItem[] = [
  {
    role: 'Flutter Development Intern',
    company: 'Technical Hub',
    period: 'May 2025 – Jun 2025',
    bullets: [
      'Built Flutter mobile app screens using Dart with Material Design',
      'Worked with widget tree, routing, and state management patterns',
      'Collaborated on small application projects end-to-end',
    ],
    tech: ['Flutter', 'Dart', 'Material Design'],
  },
]

export const certifications: Certification[] = [
  { name: 'MongoDB Associate Developer', issuer: 'MongoDB University',  description: 'JavaScript, Express.js, and REST APIs with MongoDB.' },
  { name: 'GitHub Foundations',          issuer: 'Microsoft Learn',     description: 'Git workflows, Actions, and GitHub collaboration.' },
  { name: 'Chatbot Development',         issuer: 'IBM SkillsBuild',     description: 'Conversational AI design and chatbot fundamentals.' },
]

export const achievements: Achievement[] = [
  { icon: '🌐', title: 'Google Student Ambassador',       description: 'Selected to represent Google programs on campus.' },
  { icon: '🏆', title: 'Top 20 — Project Space Hackathon', description: 'Top 20 of 150 teams for best use of AI.' },
  { icon: '🥈', title: '2nd Place — VEDA Tech Fest',       description: '"Breaking Barriers: Women in Entrepreneurship" PPT.' },
  { icon: '👥', title: 'SIH Team Lead — STHARIYA',         description: 'Led six-member Smart India Hackathon team.' },
  { icon: '⭐', title: '2-Star Coder — CodeChef',          description: '400+ problems on CodeChef, 100+ on LeetCode.' },
  { icon: '🎓', title: 'Class Representative',             description: 'First-year class representative, ACET.' },
]
