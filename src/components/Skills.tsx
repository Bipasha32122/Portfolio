import { useEffect, useRef, useState } from 'react'
import { motion } from 'motion/react'
import { skills, skillBars } from '../data/skills'
import type { Theme } from '../hooks/useTheme'

function SkillBarItem({ name, level, isDark }: { name: string; level: number; isDark: boolean }) {
  const [width, setWidth] = useState(0)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const obs = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) { setWidth(level); obs.disconnect() }
    }, { threshold: 0.3 })
    obs.observe(el)
    return () => obs.disconnect()
  }, [level])

  return (
    <div ref={ref} className="flex flex-col gap-1.5">
      <div className="flex justify-between items-center">
        <span className={`text-sm font-medium ${isDark ? 'text-slate-300' : 'text-slate-700'}`}>{name}</span>
        <span className="text-sm font-bold text-orange-500">{level}%</span>
      </div>
      <div className="skill-bar-track">
        <div className="skill-bar-fill" style={{ width: `${width}%` }} />
      </div>
    </div>
  )
}

const SERVICE_CARDS = [
  { icon: '🌐', title: 'Full-Stack Development',  desc: 'Building end-to-end applications with modern frameworks and clean architecture.' },
  { icon: '🧠', title: 'AI / ML Engineering',      desc: 'Designing and deploying intelligent ML pipelines and AI-driven automation.' },
  { icon: '☁️', title: 'Cloud & DevOps',           desc: 'AWS infrastructure, Docker containerisation, and CI/CD automation with GitHub Actions.' },
  { icon: '📱', title: 'Mobile Development',       desc: 'Cross-platform Flutter apps for iOS, Android, and web with Firebase backend.' },
]

export default function Skills({ theme }: { theme: Theme }) {
  const isDark = theme === 'dark'

  return (
    <>
      {/* ── SERVICES ── */}
      <section id="skills" className={`section-pad relative overflow-hidden ${isDark ? 'bg-dark-950' : 'bg-white'}`}>
        <div className="absolute inset-0 bg-grid opacity-40 pointer-events-none" />
        <div className="absolute left-0 top-1/2 w-80 h-80 bg-orange-500/5 rounded-full blur-[100px] pointer-events-none" />

        <div className="container-xl relative z-10">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="mb-14">
            <span className="section-label">WHAT I DO</span>
            <h2 className="section-title">My <span className="text-orange-grad">Services</span></h2>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {SERVICE_CARDS.map((s, i) => (
              <motion.div key={s.title}
                initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: 0.08 * i }}
                className="card-dark card-dark-hover p-6 flex flex-col gap-4 group">
                <div className="w-12 h-12 rounded-xl bg-orange-500/10 border border-orange-500/20 flex items-center justify-center text-2xl group-hover:bg-orange-500/20 transition-colors">
                  {s.icon}
                </div>
                <h3 className={`font-bold ${isDark ? 'text-white' : 'text-slate-900'}`}>{s.title}</h3>
                <p className={`text-sm leading-relaxed ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>{s.desc}</p>
                <button className="text-orange-500 text-sm font-semibold hover:text-orange-400 transition-colors mt-auto flex items-center gap-1 group-hover:gap-2 transition-all">
                  Learn More →
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SKILL BARS ── */}
      <section id="skillbars" className={`section-pad relative overflow-hidden ${isDark ? 'bg-dark-900' : 'bg-slate-50'}`}>
        <div className="container-xl">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="mb-14">
            <span className="section-label">MY EXPERTISE</span>
            <h2 className="section-title">Skills & <span className="text-orange-grad">Technologies</span></h2>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-14">
            {/* Skill bars */}
            <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="flex flex-col gap-5">
              {skillBars.map(s => <SkillBarItem key={s.name} name={s.name} level={s.level} isDark={isDark} />)}
            </motion.div>

            {/* Skill tag grid */}
            <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.1 }} className="flex flex-col gap-8">
              {skills.slice(0, 4).map((cat, ci) => (
                <div key={cat.category}>
                  <div className="flex items-center gap-2 mb-3">
                    <span>{cat.icon}</span>
                  <h4 className={`text-sm font-bold ${isDark ? 'text-white' : 'text-slate-900'}`}>{cat.category}</h4>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {cat.items.map(item => (
                      <span key={item} className="tag">{item}</span>
                    ))}
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>
    </>
  )
}
