import type { SkillBar, SkillCategory } from '../types'

export const skillBars: SkillBar[] = [
  { name: 'Python / Flask / FastAPI', level: 88 },
  { name: 'Java / Spring Boot',       level: 82 },
  { name: 'Flutter / Dart',           level: 80 },
  { name: 'React / TypeScript',       level: 75 },
  { name: 'AWS / Cloud',              level: 72 },
  { name: 'Machine Learning',         level: 78 },
  { name: 'Docker / DevOps',          level: 70 },
  { name: 'SQL / PostgreSQL',         level: 76 },
]

export const skills: SkillCategory[] = [
  {
    category: 'Programming Languages',
    icon: '⌨️',
    items: ['Python', 'Java', 'JavaScript', 'TypeScript', 'C++', 'Dart', 'Go'],
  },
  {
    category: 'Frameworks & Libraries',
    icon: '🧩',
    items: ['FastAPI', 'Flask', 'Spring Boot', 'Flutter', 'React', 'Node.js', 'NestJS'],
  },
  {
    category: 'AI & Machine Learning',
    icon: '🧠',
    items: ['scikit-learn', 'XGBoost', 'Pandas', 'NumPy', 'Qiskit', 'Model Evaluation'],
  },
  {
    category: 'Cloud & DevOps',
    icon: '☁️',
    items: ['AWS Lambda', 'CloudWatch', 'API Gateway', 'IAM', 'Docker', 'GitHub Actions', 'Kafka'],
  },
  {
    category: 'Databases',
    icon: '🗄️',
    items: ['PostgreSQL', 'MySQL', 'Firebase', 'Redis', 'MongoDB', 'CouchDB'],
  },
  {
    category: 'Tools',
    icon: '🛠️',
    items: ['Git', 'GitHub', 'Postman', 'VS Code', 'Figma', 'Docker', 'Hyperledger Fabric'],
  },
]
