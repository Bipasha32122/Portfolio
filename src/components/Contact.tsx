import { useState } from 'react'
import { motion } from 'motion/react'
import { Mail, Github, Linkedin, Send, CheckCircle2, AlertCircle, Loader2, MapPin, ArrowUpRight } from 'lucide-react'
import { profile } from '../data/profile'
import type { Theme } from '../hooks/useTheme'

interface F { name: string; email: string; message: string }
interface E { name?: string; email?: string; message?: string }
type S = 'idle' | 'submitting' | 'success' | 'error'

function validate(d: F): E {
  const e: E = {}
  if (!d.name.trim()) e.name = 'Name is required.'
  if (!d.email.trim()) e.email = 'Email is required.'
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(d.email)) e.email = 'Enter a valid email.'
  if (!d.message.trim()) e.message = 'Message is required.'
  else if (d.message.trim().length < 10) e.message = 'At least 10 characters.'
  return e
}

export default function Contact({ theme }: { theme: Theme }) {
  const isDark = theme === 'dark'
  const [form, setForm] = useState<F>({ name: '', email: '', message: '' })
  const [errors, setErrors] = useState<E>({})
  const [status, setStatus] = useState<S>('idle')

  const onChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setForm(p => ({ ...p, [name]: value }))
    if (errors[name as keyof E]) setErrors(p => ({ ...p, [name]: undefined }))
  }

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    const errs = validate(form)
    if (Object.keys(errs).length) { setErrors(errs); return }
    setStatus('submitting')
    try {
      const sub = encodeURIComponent(`Portfolio Contact from ${form.name}`)
      const body = encodeURIComponent(`Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`)
      window.location.href = `mailto:${profile.email}?subject=${sub}&body=${body}`
      await new Promise(r => setTimeout(r, 700))
      setStatus('success')
      setForm({ name: '', email: '', message: '' })
    } catch { setStatus('error') }
  }

  const iCls = `w-full px-4 py-3 rounded-xl text-sm outline-none transition-all border focus:border-orange-500/60 focus:ring-1 focus:ring-orange-500/30 ${
    isDark
      ? 'bg-dark-800 border-dark-600 text-white placeholder:text-slate-600'
      : 'bg-white border-slate-200 text-slate-900 placeholder:text-slate-400'
  }`
  const iErr = `w-full px-4 py-3 rounded-xl text-sm outline-none transition-all border border-red-500/60 focus:ring-1 focus:ring-red-500/30 ${
    isDark ? 'bg-dark-800 text-white placeholder:text-slate-600' : 'bg-white text-slate-900 placeholder:text-slate-400'
  }`

  return (
    <section id="contact" className={`section-pad relative overflow-hidden ${isDark ? 'bg-dark-950' : 'bg-white'}`}>
      <div className="absolute inset-0 bg-grid opacity-30 pointer-events-none" />
      <div className="absolute top-0 right-0 w-96 h-96 bg-orange-500/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="container-xl relative z-10">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="mb-14">
          <span className="section-label">GET IN TOUCH</span>
          <h2 className="section-title">Let's Build Something<br /><span className="text-orange-grad">Amazing Together</span></h2>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-10 lg:gap-14">
          {/* Left: info */}
          <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="lg:col-span-2 flex flex-col gap-5">
            <p className={`leading-relaxed ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>
              I'm currently open to software engineering opportunities, internships, and collaborative projects. Feel free to reach out!
            </p>

            {[
              { icon: <Mail size={18} className="text-orange-500" />, label: 'Email', val: profile.email, href: `mailto:${profile.email}` },
              { icon: <MapPin size={18} className="text-orange-500" />, label: 'Location', val: profile.location, href: undefined },
              { icon: <Github size={18} className="text-orange-500" />, label: 'GitHub', val: 'github.com/Bipasha32122', href: profile.github },
              { icon: <Linkedin size={18} className="text-orange-500" />, label: 'LinkedIn', val: 'Bipasha Kar', href: profile.linkedin },
            ].map(s => (
              <div key={s.label} className="flex items-start gap-4 p-4 card-dark card-dark-hover group">
                <div className="w-10 h-10 rounded-xl bg-orange-500/10 border border-orange-500/20 flex items-center justify-center shrink-0 group-hover:bg-orange-500/20 transition-colors">
                  {s.icon}
                </div>
                <div className="flex-1 min-w-0">
                  <p className={`text-xs font-medium mb-0.5 ${isDark ? 'text-slate-500' : 'text-slate-400'}`}>{s.label}</p>
                  {s.href ? (
                    <a href={s.href} target={s.href.startsWith('mailto') ? undefined : '_blank'} rel="noopener noreferrer"
                      className={`text-sm font-semibold hover:text-orange-500 transition-colors truncate flex items-center gap-1 ${isDark ? 'text-white' : 'text-slate-800'}`}>
                      {s.val} <ArrowUpRight size={12} />
                    </a>
                  ) : (
                    <p className={`text-sm font-semibold truncate ${isDark ? 'text-white' : 'text-slate-800'}`}>{s.val}</p>
                  )}
                </div>
              </div>
            ))}

            <div className={`p-4 rounded-xl border text-xs leading-relaxed ${isDark ? 'bg-dark-800 border-orange-500/15 text-slate-600' : 'bg-orange-50 border-orange-200 text-slate-500'}`}>
              ⚙️ Update <code className="text-orange-500">profile.email</code> in <code className="font-mono">src/data/profile.ts</code>. For real form submission integrate <a href="https://formspree.io" target="_blank" rel="noopener noreferrer" className="text-orange-500 hover:underline">Formspree</a>.
            </div>
          </motion.div>

          {/* Right: form */}
          <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.1 }} className="lg:col-span-3">
            {status === 'success' ? (
              <div className={`flex flex-col items-center justify-center gap-5 p-12 rounded-2xl border text-center min-h-[380px] ${isDark ? 'card-dark' : 'bg-white border-slate-200 shadow-sm'}`}>
                <div className="w-16 h-16 rounded-full bg-green-500/15 border border-green-500/30 flex items-center justify-center">
                  <CheckCircle2 size={28} className="text-green-400" />
                </div>
                <div>
                  <h3 className={`font-bold text-lg mb-1 ${isDark ? 'text-white' : 'text-slate-900'}`}>Message sent!</h3>
                  <p className={`text-sm ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>Your email client opened with the message pre-filled.</p>
                </div>
                <button onClick={() => setStatus('idle')} className="btn-orange px-6 py-2.5 text-sm">Send another</button>
              </div>
            ) : (
              <form onSubmit={onSubmit} noValidate className={`p-6 sm:p-8 rounded-2xl border flex flex-col gap-5 relative ${isDark ? 'card-dark' : 'bg-white border-slate-200 shadow-sm'}`}>
                {/* Orange top accent */}
                <div className="absolute inset-x-0 top-0 h-0.5 bg-gradient-to-r from-transparent via-orange-500/60 to-transparent rounded-t-xl" />

                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="name" className={`block text-xs font-semibold mb-1.5 ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>Your Name</label>
                    <input id="name" name="name" type="text" autoComplete="name" value={form.name} onChange={onChange} placeholder="John Doe" className={errors.name ? iErr : iCls} />
                    {errors.name && <p className="mt-1 text-xs text-red-400 flex items-center gap-1"><AlertCircle size={10} />{errors.name}</p>}
                  </div>
                  <div>
                    <label htmlFor="email" className={`block text-xs font-semibold mb-1.5 ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>Email Address</label>
                    <input id="email" name="email" type="email" autoComplete="email" value={form.email} onChange={onChange} placeholder="john@example.com" className={errors.email ? iErr : iCls} />
                    {errors.email && <p className="mt-1 text-xs text-red-400 flex items-center gap-1"><AlertCircle size={10} />{errors.email}</p>}
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className={`block text-xs font-semibold mb-1.5 ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>Message</label>
                  <textarea id="message" name="message" rows={6} value={form.message} onChange={onChange} placeholder="Tell me about your project or opportunity..." className={`resize-none ${errors.message ? iErr : iCls}`} />
                  {errors.message && <p className="mt-1 text-xs text-red-400 flex items-center gap-1"><AlertCircle size={10} />{errors.message}</p>}
                </div>

                {status === 'error' && (
                  <div className="flex items-center gap-2 p-3 rounded-xl bg-red-500/10 border border-red-500/20 text-red-400 text-sm">
                    <AlertCircle size={14} /> Something went wrong. Try emailing directly.
                  </div>
                )}

                <button type="submit" disabled={status === 'submitting'}
                  className="btn-orange flex items-center justify-center gap-2 px-6 py-3.5 text-sm disabled:opacity-50 disabled:cursor-not-allowed">
                  {status === 'submitting' ? <><Loader2 size={15} className="animate-spin" />Sending…</> : <><Send size={15} />Send Message</>}
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
