import { useState, useEffect } from 'react'

export type Theme = 'dark' | 'light'

function getInitialTheme(): Theme {
  try {
    const stored = localStorage.getItem('theme') as Theme | null
    if (stored === 'dark' || stored === 'light') return stored
  } catch { /* ignore */ }
  return 'dark'
}

export function useTheme() {
  const [theme, setTheme] = useState<Theme>(getInitialTheme)

  useEffect(() => {
    const root = document.documentElement
    if (theme === 'dark') {
      root.classList.add('dark')
      root.classList.remove('light')
      document.body.style.backgroundColor = '#0A0A0A'
      document.body.style.color = '#E2E8F0'
    } else {
      root.classList.add('light')
      root.classList.remove('dark')
      document.body.style.backgroundColor = '#FFFFFF'
      document.body.style.color = '#1E293B'
    }
    try { localStorage.setItem('theme', theme) } catch { /* ignore */ }
  }, [theme])

  return { theme, toggle: () => setTheme(t => t === 'dark' ? 'light' : 'dark') }
}
