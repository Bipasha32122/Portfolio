import { motion } from 'motion/react'
import { profile } from '../data/profile'
import type { Theme } from '../hooks/useTheme'

const INFO_ROWS = [
  { label: 'Name',         value: profile.name },
  { label: 'Email',        value: profile.email },
  { label: 'Location',     value: profile.location },
  { label: 'Availability', value: '✅ ' + profile.availability },
]

export default function About({ theme }: { theme: Theme }) {
  const isDark = theme === 'dark'

  return (
    <section id="about" className={`section-pad relative overflow-hidden ${isDark ? 'bg-dark-900' : 'bg-slate-50'}`}>
      <div className="absolute top-0 right-0 w-96 h-96 bg-orange-500/4 rounded-full blur-[100px] pointer-events-none" />

      <div className="container-xl relative z-10">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="mb-14">
          <span className="section-label">ABOUT ME</span>
          <h2 className="section-title">Building Digital Solutions<br />That Make a <span className="text-orange-grad">Difference</span></h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-14 items-center">
          {/* Photo side */}
          <motion.div initial={{ opacity: 0, x: -24 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="relative">
            <div className="relative w-full max-w-sm mx-auto">
              <div className="absolute -inset-2 bg-gradient-to-br from-orange-500/20 to-transparent rounded-2xl blur-xl" />
              <div className="relative rounded-2xl overflow-hidden border border-orange-500/20 shadow-[0_0_40px_rgba(249,115,22,0.12)]">
                <img src="/images/bipasha.jpg" alt="Bipasha Kar"
                  className="w-full aspect-[3/4] object-cover object-top"
                  onError={e => {
                    const img = e.currentTarget
                    img.style.display = 'none'
                    const p = img.parentElement!
                    p.style.cssText = 'background:#1A1A1A;min-height:320px;display:flex;align-items:center;justify-content:center'
                    p.innerHTML = '<div style="text-align:center"><div style="font-size:5rem">👩‍💻</div><p style="color:#F97316;font-weight:700;margin-top:8px">Bipasha Kar</p></div>'
                  }}
                />
                <div className={`absolute inset-0 bg-gradient-to-t ${isDark ? 'from-dark-950/60' : 'from-slate-900/20'} via-transparent to-transparent`} />
              </div>
              {/* Orange dot accent */}
              <div className="absolute -top-3 -right-3 w-24 h-24 rounded-full border-4 border-orange-500/20 pointer-events-none" />
            </div>
          </motion.div>

          {/* Text side */}
          <motion.div initial={{ opacity: 0, x: 24 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.1 }} className="flex flex-col gap-6">
            <p className={`leading-relaxed ${isDark ? 'text-slate-300' : 'text-slate-600'}`}>
              {profile.bio}
            </p>
            <p className={`leading-relaxed ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>
              Currently in my final year at <span className="text-orange-500 font-semibold">Aditya College of Engineering & Technology</span>, I've shipped projects spanning AI-powered DevOps tools, quantum ML, enterprise microservices, and gamified mobile apps — always focused on code that actually works in production.
            </p>

            {/* Info table */}
            <div className="grid sm:grid-cols-2 gap-3">
              {INFO_ROWS.map(r => (
                <div key={r.label} className={`flex gap-3 p-3 rounded-xl border ${isDark ? 'bg-dark-800 border-dark-600' : 'bg-white border-slate-200 shadow-sm'}`}>
                  <span className="text-orange-500 font-semibold text-sm shrink-0 w-24">{r.label}:</span>
                  <span className={`text-sm truncate ${isDark ? 'text-slate-300' : 'text-slate-700'}`}>{r.value}</span>
                </div>
              ))}
            </div>

            {/* Signature-style name */}
            <p className="text-3xl font-black text-orange-grad italic mt-2" style={{ fontFamily: 'Georgia, serif' }}>
              Bipasha Kar
            </p>

            <a href={profile.resumePdf} download className="btn-orange inline-flex items-center gap-2 px-6 py-3 text-sm w-fit">
              Download Resume
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
