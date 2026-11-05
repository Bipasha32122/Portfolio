import { useState, useEffect } from 'react'
import { Menu, X, Sun, Moon } from 'lucide-react'
import { useActiveSection } from '../hooks/useActiveSection'
import type { Theme } from '../hooks/useTheme'

const LINKS = [
  { label: 'Home',       id: 'home' },
  { label: 'About',      id: 'about' },
  { label: 'Services',   id: 'skills' },
  { label: 'Skills',     id: 'skillbars' },
  { label: 'Projects',   id: 'projects' },
  { label: 'Experience', id: 'experience' },
  { label: 'Contact',    id: 'contact' },
]

interface Props { theme: Theme; onToggleTheme: () => void }

export default function Navbar({ theme, onToggleTheme }: Props) {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const active = useActiveSection(LINKS.map(l => l.id))
  const isDark = theme === 'dark'

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', fn, { passive: true })
    return () => window.removeEventListener('scroll', fn)
  }, [])

  const go = (id: string) => {
    setOpen(false)
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <header className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
      scrolled
        ? isDark
          ? 'bg-dark-900/95 backdrop-blur-xl border-b border-white/8 shadow-[0_4px_20px_rgba(0,0,0,0.5)]'
          : 'bg-white/95 backdrop-blur-xl border-b border-slate-200 shadow-[0_4px_20px_rgba(0,0,0,0.08)]'
        : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 flex items-center justify-between h-18 min-h-[4.5rem]">

        {/* Logo */}
        <button onClick={() => go('home')} className="flex items-center gap-2 group">
          <div className="w-8 h-8 rounded-lg bg-orange-500 flex items-center justify-center shadow-[0_0_15px_rgba(249,115,22,0.5)]">
            <span className="text-white font-black text-xs font-mono">BK</span>
          </div>
          <span className={`font-bold text-sm ${isDark ? 'text-white' : 'text-slate-900'}`}>
            Bipasha<span className="text-orange-500">Kar</span>
          </span>
        </button>

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center gap-1">
          {LINKS.map(l => (
            <button key={l.id} onClick={() => go(l.id)}
              className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-all duration-200 ${
                active === l.id
                  ? 'text-orange-500 bg-orange-500/10'
                  : isDark ? 'text-slate-400 hover:text-white hover:bg-white/5' : 'text-slate-500 hover:text-slate-900'
              }`}>
              {l.label}
            </button>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <button onClick={onToggleTheme} aria-label="Toggle theme"
            className={`p-2 rounded-lg transition-colors ${isDark ? 'text-slate-400 hover:text-white hover:bg-white/5' : 'text-slate-500 hover:text-slate-900 hover:bg-slate-100'}`}>
            {isDark ? <Sun size={16} /> : <Moon size={16} />}
          </button>
          <button onClick={() => go('contact')}
            className="hidden lg:flex btn-orange px-4 py-1.5 text-sm">
            Let's Talk
          </button>
          <button onClick={() => setOpen(o => !o)} className={`lg:hidden p-2 rounded-lg transition-colors ${isDark ? 'text-slate-400 hover:text-white' : 'text-slate-600 hover:text-slate-900'}`}>
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {open && (
        <div className={`lg:hidden backdrop-blur-xl border-t ${isDark ? 'bg-dark-900/98 border-white/8' : 'bg-white/98 border-slate-200'}`}>
          <nav className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-3 flex flex-col gap-1">
            {LINKS.map(l => (
              <button key={l.id} onClick={() => go(l.id)}
                className={`text-left px-4 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                  active === l.id ? 'text-orange-500 bg-orange-500/10' : isDark ? 'text-slate-400 hover:text-white hover:bg-white/5' : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
                }`}>{l.label}</button>
            ))}
            <button onClick={() => go('contact')} className="mt-2 btn-orange px-4 py-2.5 text-sm text-center">Let's Talk</button>
          </nav>
        </div>
      )}
    </header>
  )
}
