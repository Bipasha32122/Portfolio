import { useState } from 'react'
import { motion, AnimatePresence } from 'motion/react'
import { Github, ExternalLink, ChevronDown, ChevronUp } from 'lucide-react'
import { projects } from '../data/projects'
import type { Theme } from '../hooks/useTheme'

const EMOJIS = ['⚡', '🏦', '⚛️', '🤖', '🎮', '🧠']

function Card({ p, i, theme }: { p: typeof projects[0]; i: number; theme: Theme }) {
  const [open, setOpen] = useState(false)
  const isDark = theme === 'dark'

  return (
    <motion.article
      initial={{ opacity: 0, y: 26 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.07 * i }}
      className="card-dark card-dark-hover flex flex-col overflow-hidden"
    >
      {/* Orange top bar */}
      <div className="h-1 w-full bg-gradient-to-r from-orange-600 to-orange-400" />

      {/* Preview header */}
      <div className={`relative h-36 bg-gradient-to-br flex items-center justify-between px-6 overflow-hidden ${isDark ? 'from-dark-800 to-dark-700' : 'from-slate-100 to-slate-50'}`}>
        <div className="absolute inset-0 bg-grid opacity-20" />
        <div className="relative z-10">
          <div className="w-14 h-14 rounded-2xl bg-orange-500/15 border border-orange-500/25 flex items-center justify-center text-3xl">
            {EMOJIS[i % EMOJIS.length]}
          </div>
        </div>
        <div className="relative z-10 flex flex-col items-end gap-2">
          <span className="text-xs font-mono font-semibold text-orange-400 px-2.5 py-1 rounded-full bg-orange-500/15 border border-orange-500/20">
            {p.category}
          </span>
          <div className="flex gap-2">
            <a href={p.github} target="_blank" rel="noopener noreferrer"
              className={`p-1.5 rounded-lg border transition-all text-slate-400 hover:text-orange-500 hover:border-orange-500/40 ${isDark ? 'bg-dark-700 border-dark-500' : 'bg-white border-slate-200'}`}
              aria-label="Source code"><Github size={14} /></a>
            {p.demo && (
              <a href={p.demo} target="_blank" rel="noopener noreferrer"
                className={`p-1.5 rounded-lg border transition-all text-slate-400 hover:text-orange-500 hover:border-orange-500/40 ${isDark ? 'bg-dark-700 border-dark-500' : 'bg-white border-slate-200'}`}
                aria-label="Live demo"><ExternalLink size={14} /></a>
            )}
          </div>
        </div>
      </div>

      <div className="p-5 flex flex-col gap-3 flex-1">
        <h3 className={`font-bold text-base ${isDark ? 'text-white' : 'text-slate-900'}`}>{p.title}</h3>
        <p className={`text-sm leading-relaxed ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>{p.description}</p>

        <div className="flex flex-wrap gap-1.5">
          {p.tech.slice(0, 5).map(t => <span key={t} className="tag text-[10px] py-0.5">{t}</span>)}
          {p.tech.length > 5 && <span className="tag text-[10px] py-0.5 opacity-50">+{p.tech.length - 5}</span>}
        </div>

        <button onClick={() => setOpen(o => !o)} className="flex items-center gap-1 text-xs font-semibold text-orange-500 hover:text-orange-400 transition-colors w-fit">
          {open ? <ChevronUp size={12} /> : <ChevronDown size={12} />}
          {open ? 'Hide features' : 'Key features'}
        </button>

        <AnimatePresence>
          {open && (
            <motion.ul initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} exit={{ opacity: 0, height: 0 }} transition={{ duration: 0.2 }} className={`overflow-hidden flex flex-col gap-1.5 pt-2 border-t ${isDark ? 'border-dark-600' : 'border-slate-200'}`}>
              {p.features.map(f => (
                <li key={f} className={`flex gap-2 text-xs ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>
                  <span className="text-orange-500 shrink-0">›</span>{f}
                </li>
              ))}
            </motion.ul>
          )}
        </AnimatePresence>

        <div className={`mt-auto pt-4 border-t flex gap-2 ${isDark ? 'border-dark-600' : 'border-slate-200'}`}>
          <a href={p.github} target="_blank" rel="noopener noreferrer"
            className={`flex-1 flex items-center justify-center gap-1.5 py-2 rounded-lg border text-xs font-semibold transition-all hover:text-orange-500 hover:border-orange-500/40 ${isDark ? 'bg-dark-700 border-dark-500 text-slate-300' : 'bg-slate-50 border-slate-200 text-slate-600'}`}>
            <Github size={12} /> Source Code
          </a>
          {p.demo ? (
            <a href={p.demo} target="_blank" rel="noopener noreferrer"
              className="flex-1 flex items-center justify-center gap-1.5 py-2 rounded-lg btn-orange text-xs font-semibold">
              <ExternalLink size={12} /> Live Demo
            </a>
          ) : (
            <span className={`flex-1 flex items-center justify-center py-2 rounded-lg border text-xs ${isDark ? 'bg-dark-700 border-dark-600 text-slate-600' : 'bg-slate-50 border-slate-200 text-slate-400'}`}>No demo</span>
          )}
        </div>
      </div>
    </motion.article>
  )
}

export default function Projects({ theme }: { theme: Theme }) {
  const isDark = theme === 'dark'
  return (
    <section id="projects" className={`section-pad relative overflow-hidden ${isDark ? 'bg-dark-950' : 'bg-white'}`}>
      <div className="absolute inset-0 bg-grid opacity-30 pointer-events-none" />
      <div className="absolute right-0 bottom-0 w-96 h-96 bg-orange-500/4 rounded-full blur-[100px] pointer-events-none" />

      <div className="container-xl relative z-10">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="mb-14 flex items-end justify-between gap-4 flex-wrap">
          <div>
            <span className="section-label">MY PORTFOLIO</span>
            <h2 className="section-title">Some of My <span className="text-orange-grad">Recent Work</span></h2>
          </div>
          <button className="btn-outline px-4 py-2 text-sm font-semibold">View All Projects</button>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p, i) => <Card key={p.id} p={p} i={i} theme={theme} />)}
        </div>
      </div>
    </section>
  )
}
