import { useState, useEffect } from 'react'

export function useActiveSection(ids: string[]) {
  const [active, setActive] = useState(ids[0] ?? '')
  useEffect(() => {
    const obs: IntersectionObserver[] = []
    ids.forEach(id => {
      const el = document.getElementById(id)
      if (!el) return
      const o = new IntersectionObserver(
        ([e]) => { if (e.isIntersecting) setActive(id) },
        { rootMargin: '-40% 0px -55% 0px' }
      )
      o.observe(el); obs.push(o)
    })
    return () => obs.forEach(o => o.disconnect())
  }, [ids])
  return active
}
