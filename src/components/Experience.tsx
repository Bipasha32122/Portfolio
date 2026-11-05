import { motion } from 'motion/react'
import { Briefcase, Award, Calendar } from 'lucide-react'
import { experiences, certifications, achievements } from '../data/experience'
import type { Theme } from '../hooks/useTheme'

export default function Experience({ theme }: { theme: Theme }) {
  const isDark = theme === 'dark'
  const bg = isDark ? 'bg-dark-900' : 'bg-slate-50'

  return (
    <section id="experience" className={`section-pad relative overflow-hidden ${bg}`}>
      <div className="absolute left-0 bottom-0 w-80 h-80 bg-orange-500/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="container-xl relative z-10">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="mb-14">
          <span className="section-label">JOURNEY</span>
          <h2 className="section-title">Experience & <span className="text-orange-grad">Achievements</span></h2>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-10">
          {/* Experience + Certs */}
          <div className="lg:col-span-1 flex flex-col gap-8">

            <div>
              <div className="flex items-center gap-2 mb-5">
                <div className="w-8 h-8 rounded-lg bg-orange-500/15 border border-orange-500/25 flex items-center justify-center">
                  <Briefcase size={14} className="text-orange-500" />
                </div>
                <h3 className={`text-sm font-bold uppercase tracking-widest ${isDark ? 'text-white' : 'text-slate-900'}`}>Experience</h3>
              </div>

              {experiences.map((exp, i) => (
                <motion.div key={i} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 * i }}
                  className="card-dark p-5 relative overflow-hidden">
                  <div className="absolute left-0 top-4 bottom-4 w-0.5 bg-orange-500/40 rounded-full" />
                  <div className="pl-4">
                    <div className="flex items-start justify-between gap-3 mb-3">
                      <div>
                        <h4 className={`font-bold text-sm ${isDark ? 'text-white' : 'text-slate-900'}`}>{exp.role}</h4>
                        <p className="text-orange-500 text-xs font-semibold mt-0.5">{exp.company}</p>
                      </div>
                      <span className={`flex items-center gap-1 text-xs px-2 py-1 rounded-lg shrink-0 ${isDark ? 'text-slate-500 bg-dark-700' : 'text-slate-400 bg-slate-100'}`}>
                        <Calendar size={9} />{exp.period}
                      </span>
                    </div>
                    <ul className="flex flex-col gap-1.5 mb-3">
                      {exp.bullets.map(b => (
                        <li key={b} className={`flex gap-2 text-xs leading-relaxed ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>
                          <span className="text-orange-500 shrink-0 mt-0.5">›</span>{b}
                        </li>
                      ))}
                    </ul>
                    <div className="flex flex-wrap gap-1.5">
                      {exp.tech.map(t => <span key={t} className="tag text-[10px] py-0.5">{t}</span>)}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            <div>
              <div className="flex items-center gap-2 mb-5">
                <div className="w-8 h-8 rounded-lg bg-orange-500/15 border border-orange-500/25 flex items-center justify-center">
                  <Award size={14} className="text-orange-500" />
                </div>
                <h3 className={`text-sm font-bold uppercase tracking-widest ${isDark ? 'text-white' : 'text-slate-900'}`}>Certifications</h3>
              </div>
              <div className="flex flex-col gap-3">
                {certifications.map((c, i) => (
                  <motion.div key={i} initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.07 * i }}
                    className="card-dark card-dark-hover p-4">
                    <p className={`font-bold text-sm ${isDark ? 'text-white' : 'text-slate-900'}`}>{c.name}</p>
                    <p className="text-orange-500 text-xs font-semibold mt-0.5">{c.issuer}</p>
                    <p className={`text-xs mt-1.5 leading-relaxed ${isDark ? 'text-slate-500' : 'text-slate-400'}`}>{c.description}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>

          {/* Achievements */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-5">
              <div className="w-8 h-8 rounded-lg bg-orange-500/15 border border-orange-500/25 flex items-center justify-center">
                <span className="text-sm">🏆</span>
              </div>
              <h3 className={`text-sm font-bold uppercase tracking-widest ${isDark ? 'text-white' : 'text-slate-900'}`}>Achievements & Activities</h3>
            </div>
            <div className="grid sm:grid-cols-2 gap-4">
              {achievements.map((a, i) => (
                <motion.div key={i} initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.06 * i }}
                  className="card-dark card-dark-hover p-5 group">
                  <div className="w-11 h-11 rounded-xl bg-orange-500/10 border border-orange-500/20 flex items-center justify-center text-xl mb-4 group-hover:bg-orange-500/20 group-hover:scale-110 transition-all">
                    {a.icon}
                  </div>
                  <h4 className={`font-bold text-sm mb-1.5 ${isDark ? 'text-white' : 'text-slate-900'}`}>{a.title}</h4>
                  <p className={`text-xs leading-relaxed ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>{a.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
