import { motion } from 'motion/react'
import { Download, Eye } from 'lucide-react'
import { profile } from '../data/profile'
import type { Theme } from '../hooks/useTheme'

export default function Resume({ theme }: { theme: Theme }) {
  const isDark = theme === 'dark'
  return (
    <section className={`py-16 sm:py-20 px-6 sm:px-8 lg:px-12 ${isDark ? 'bg-dark-900' : 'bg-slate-50'}`}>
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          className={`relative overflow-hidden rounded-2xl border p-8 sm:p-12 ${isDark ? 'border-orange-500/20 bg-dark-800' : 'border-orange-500/30 bg-white shadow-lg'}`}>
          <div className="absolute -top-16 -right-16 w-64 h-64 bg-orange-500/8 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute inset-x-0 top-0 h-0.5 bg-gradient-to-r from-transparent via-orange-500 to-transparent" />
          <div className="relative z-10 flex flex-col sm:flex-row items-start sm:items-center gap-8">
            <div className="w-16 h-16 rounded-2xl bg-orange-500/15 border border-orange-500/25 flex items-center justify-center text-3xl shrink-0">📄</div>
            <div className="flex-1">
              <h2 className={`text-2xl font-black mb-1 ${isDark ? 'text-white' : 'text-slate-900'}`}>My Resume</h2>
              <p className={isDark ? 'text-slate-400' : 'text-slate-500'}>Download my resume to see the complete picture — projects, skills, and experience.</p>
            </div>
            <div className="flex gap-3 shrink-0">
              <a href={profile.resumePdf} download className="btn-orange inline-flex items-center gap-2 px-6 py-3 text-sm"><Download size={15} /> Download</a>
              <a href={profile.resumePdf} target="_blank" rel="noopener noreferrer" className="btn-outline inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold"><Eye size={15} /> View</a>
            </div>
          </div>
          <div className={`relative z-10 mt-6 pt-5 border-t ${isDark ? 'border-dark-600' : 'border-slate-200'}`}>
            <p className={`text-xs font-mono ${isDark ? 'text-slate-600' : 'text-slate-400'}`}>📋 Place PDF at <code className="text-orange-500">public/resume/Bipasha-Kar-Resume.pdf</code></p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
