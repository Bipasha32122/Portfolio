import { Github, Linkedin, Mail } from 'lucide-react'
import { profile } from '../data/profile'
import type { Theme } from '../hooks/useTheme'

export default function Footer({ theme }: { theme: Theme }) {
  const isDark = theme === 'dark'
  return (
    <footer className={`border-t py-8 px-6 sm:px-8 lg:px-12 ${isDark ? 'border-dark-700 bg-dark-950' : 'border-slate-200 bg-white'}`}>
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-5">

        {/* Brand */}
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-orange-500 flex items-center justify-center shadow-[0_0_12px_rgba(249,115,22,0.4)]">
            <span className="text-white font-black text-xs font-mono">BK</span>
          </div>
          <span className={`font-bold text-sm ${isDark ? 'text-white' : 'text-slate-900'}`}>
            Bipasha<span className="text-orange-500">Kar</span>
          </span>
        </div>

        {/* Copyright */}
        <p className={`text-xs text-center ${isDark ? 'text-slate-600' : 'text-slate-400'}`}>
          © {new Date().getFullYear()} Bipasha Kar · Built with React, TypeScript & Tailwind CSS
        </p>

        {/* Social icons */}
        <div className="flex items-center gap-1">
          {[
            { href: profile.github,              icon: <Github size={15} />,   label: 'GitHub' },
            { href: profile.linkedin,            icon: <Linkedin size={15} />, label: 'LinkedIn' },
            { href: `mailto:${profile.email}`,   icon: <Mail size={15} />,     label: 'Email' },
          ].map(s => (
            <a
              key={s.label}
              href={s.href}
              target={s.href.startsWith('mailto') ? undefined : '_blank'}
              rel="noopener noreferrer"
              className={`p-2.5 rounded-lg transition-all hover:text-orange-500 hover:bg-orange-500/10 ${isDark ? 'text-slate-500' : 'text-slate-400'}`}
              aria-label={s.label}
            >
              {s.icon}
            </a>
          ))}
        </div>
      </div>
    </footer>
  )
}
