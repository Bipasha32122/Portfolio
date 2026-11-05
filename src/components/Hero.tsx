import { useState, useEffect } from 'react'
import { motion } from 'motion/react'
import { Github, Linkedin, MapPin, GraduationCap, Download, ArrowRight } from 'lucide-react'
import { profile } from '../data/profile'
import type { Theme } from '../hooks/useTheme'

function TypingRole() {
  const roles = profile.roles
  const [idx, setIdx] = useState(0)
  const [text, setText] = useState('')
  const [del, setDel] = useState(false)

  useEffect(() => {
    const word = roles[idx]
    let t: ReturnType<typeof setTimeout>
    if (!del && text.length < word.length) {
      t = setTimeout(() => setText(word.slice(0, text.length + 1)), 90)
    } else if (!del && text.length === word.length) {
      t = setTimeout(() => setDel(true), 2000)
    } else if (del && text.length > 0) {
      t = setTimeout(() => setText(text.slice(0, -1)), 50)
    } else {
      setDel(false)
      setIdx(i => (i + 1) % roles.length)
    }
    return () => clearTimeout(t)
  }, [text, del, idx, roles])

  return (
    <span className="text-orange-500">
      {text}<span className="animate-blink border-r-2 border-orange-500 ml-0.5" />
    </span>
  )
}

const up = (delay = 0) => ({
  initial: { opacity: 0, y: 28 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.65, delay, ease: [0.22, 1, 0.36, 1] as const },
})

export default function Hero({ theme }: { theme: Theme }) {
  const isDark = theme === 'dark'

  return (
    <section id="home" className={`relative min-h-screen flex items-center overflow-hidden ${isDark ? 'bg-dark-950' : 'bg-white'}`}>
      {/* Grid bg */}
      <div className="absolute inset-0 bg-grid pointer-events-none opacity-60" />

      {/* Glow orbs */}
      <div className="absolute top-1/4 left-0 w-[500px] h-[500px] bg-orange-500/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-orange-600/4 rounded-full blur-[100px] pointer-events-none" />

      {/* Bottom fade */}
      <div className={`absolute bottom-0 inset-x-0 h-32 bg-gradient-to-t ${isDark ? 'from-dark-950' : 'from-white'} to-transparent pointer-events-none`} />

      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-20 lg:py-24 w-full">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-center">

          {/* ── LEFT ── */}
          <div className="flex flex-col gap-6 order-2 lg:order-1">

            {/* Hello label */}
            <motion.div {...up(0.05)}>
              <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-mono font-medium border border-orange-500/30 bg-orange-500/10 text-orange-400">
                <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
                HELLO, I'M
              </span>
            </motion.div>

            <motion.div {...up(0.12)}>
              <h1 className={`text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-black leading-[1.0] tracking-tight ${isDark ? 'text-white' : 'text-slate-900'}`}>
                {profile.firstName}{' '}
                <span className="text-orange-grad">{profile.lastName}</span>
              </h1>
            </motion.div>

            <motion.div {...up(0.2)}>
              <p className={`text-2xl sm:text-3xl font-semibold ${isDark ? 'text-slate-300' : 'text-slate-700'}`}>
                <TypingRole />
              </p>
            </motion.div>

            {/* Bio */}
            <motion.p {...up(0.27)} className={`text-base sm:text-lg leading-relaxed max-w-xl ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>
              To build exceptional digital experiences with modern technologies. Passionate about clean code, scalable solutions, and turning ideas into reality.
            </motion.p>

            {/* Meta pills */}
            <motion.div {...up(0.33)} className="flex flex-wrap gap-3">
              <span className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium ${isDark ? 'bg-dark-800 border border-dark-600 text-slate-300' : 'bg-slate-100 border border-slate-200 text-slate-600'}`}>
                <MapPin size={14} className="text-orange-500" /> Surampalem, AP
              </span>
              <span className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium ${isDark ? 'bg-dark-800 border border-dark-600 text-slate-300' : 'bg-slate-100 border border-slate-200 text-slate-600'}`}>
                <GraduationCap size={14} className="text-orange-500" /> ACET · CGPA {profile.cgpa}
              </span>
            </motion.div>

            {/* CTAs */}
            <motion.div {...up(0.4)} className="flex flex-wrap gap-4">
              <button
                onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
                className="btn-orange inline-flex items-center gap-2 px-7 py-3.5 text-base"
              >
                View My Work <ArrowRight size={17} />
              </button>
              <a href={profile.resumePdf} download
                className="btn-outline inline-flex items-center gap-2 px-7 py-3.5 text-base font-semibold">
                <Download size={17} /> Download CV
              </a>
            </motion.div>

            {/* Socials */}
            <motion.div {...up(0.46)} className="flex items-center gap-3">
              {[
                { href: profile.github,   icon: <Github size={18} />,   label: 'GitHub' },
                { href: profile.linkedin, icon: <Linkedin size={18} />, label: 'LinkedIn' },
              ].map(s => (
                <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer"
                  className={`p-2.5 rounded-lg border transition-all duration-200 hover:text-orange-500 hover:border-orange-500/40 ${isDark ? 'bg-dark-800 border-dark-600 text-slate-400' : 'bg-slate-100 border-slate-200 text-slate-500'}`}
                  aria-label={s.label}>
                  {s.icon}
                </a>
              ))}
              <span className={`text-sm ml-1 ${isDark ? 'text-slate-600' : 'text-slate-400'}`}>{profile.location}</span>
            </motion.div>

            {/* Availability badge */}
            <motion.div {...up(0.52)}>
              <span className={`inline-flex items-center gap-2 text-xs ${isDark ? 'text-slate-500' : 'text-slate-400'}`}>
                <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                {profile.availability}
              </span>
            </motion.div>
          </div>

          {/* ── RIGHT: PHOTO ── */}
          <motion.div
            initial={{ opacity: 0, scale: 0.85, x: 30 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="flex justify-center lg:justify-end order-1 lg:order-2"
          >
            <div className="relative">
              {/* Background hex glow */}
              <div className="absolute -inset-8 bg-gradient-to-tr from-orange-500/15 via-transparent to-orange-600/10 rounded-full blur-3xl" />

              {/* Spinning ring */}
              <div className="absolute -inset-3 rounded-full border border-dashed border-orange-500/20 animate-spin-slow pointer-events-none" />

              {/* Orange corner accents */}
              <div className="absolute top-4 left-4 w-8 h-8 border-t-2 border-l-2 border-orange-500 rounded-tl-lg" />
              <div className="absolute bottom-4 right-4 w-8 h-8 border-b-2 border-r-2 border-orange-500 rounded-br-lg" />

              {/* Photo */}
              <div className="relative w-80 h-96 sm:w-96 sm:h-[28rem] lg:w-[400px] lg:h-[480px] rounded-2xl overflow-hidden border-2 border-orange-500/30 shadow-[0_0_60px_rgba(249,115,22,0.2)]">
                <img
                  src="/images/bipasha.jpg"
                  alt="Bipasha Kar"
                  className="w-full h-full object-cover object-top"
                  onError={e => {
                    const img = e.currentTarget
                    img.style.display = 'none'
                    const parent = img.parentElement!
                    parent.style.background = 'linear-gradient(135deg,#1A1A1A,#0A0A0A)'
                    const ph = document.createElement('div')
                    ph.className = 'absolute inset-0 flex flex-col items-center justify-center gap-3 p-6'
                    ph.innerHTML = `
                      <div style="font-size:4rem">👩‍💻</div>
                      <div style="background:linear-gradient(135deg,#F97316,#EA580C);-webkit-background-clip:text;-webkit-text-fill-color:transparent;font-weight:800;font-size:1.5rem">Bipasha Kar</div>
                      <p style="color:#6B7280;font-size:0.75rem;text-align:center;font-family:monospace">Add photo:<br/>public/images/bipasha.jpg</p>
                    `
                    parent.appendChild(ph)
                  }}
                />
                {/* Bottom overlay */}
                <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-dark-950/80 to-transparent" />
              </div>

              {/* Floating tech badges */}
              {profile.techBadges.slice(0, 4).map((badge, i) => {
                const positions = [
                  '-top-4 -left-12',
                  '-top-4 -right-12',
                  'top-1/3 -left-14',
                  'top-1/3 -right-14',
                ]
                return (
                  <motion.div
                    key={badge.label}
                    animate={{ y: [0, i % 2 === 0 ? -6 : 6, 0] }}
                    transition={{ duration: 3 + i * 0.5, repeat: Infinity, ease: 'easeInOut' }}
                    className={`absolute ${positions[i]} flex items-center gap-2 px-3 py-2 rounded-xl border shadow-xl ${isDark ? 'bg-dark-800 border-dark-600' : 'bg-white border-slate-200 shadow-md'}`}
                    style={{ borderColor: `${badge.color}30` }}
                  >
                    <div className="w-2 h-2 rounded-full" style={{ background: badge.color }} />
                    <span className={`text-xs font-mono font-semibold ${isDark ? 'text-white' : 'text-slate-800'}`}>{badge.label}</span>
                  </motion.div>
                )
              })}

              {/* Stat card bottom */}
              <motion.div
                animate={{ y: [0, -5, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
                className={`absolute -bottom-5 left-1/2 -translate-x-1/2 flex items-center gap-3 px-5 py-3 rounded-xl border shadow-[0_0_20px_rgba(249,115,22,0.15)] whitespace-nowrap ${isDark ? 'bg-dark-800 border-orange-500/30' : 'bg-white border-orange-500/40 shadow-lg'}`}
              >
                <span className="text-orange-500 text-lg font-black">8.42</span>
                <div className={`w-px h-6 ${isDark ? 'bg-dark-600' : 'bg-slate-200'}`} />
                <div>
                  <p className={`text-xs font-bold ${isDark ? 'text-white' : 'text-slate-900'}`}>CGPA</p>
                  <p className={`text-[10px] ${isDark ? 'text-slate-500' : 'text-slate-400'}`}>B.Tech CSE</p>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Stats row */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className={`mt-16 pt-10 border-t grid grid-cols-2 sm:grid-cols-4 gap-8 ${isDark ? 'border-dark-700' : 'border-slate-200'}`}
        >
          {profile.stats.map((s) => (
            <div key={s.label} className="text-center">
              <p className="text-4xl sm:text-5xl font-black text-orange-grad">{s.value}</p>
              <p className={`text-sm sm:text-base mt-2 font-medium ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>{s.label}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
