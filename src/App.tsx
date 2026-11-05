import { useTheme } from './hooks/useTheme'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Experience from './components/Experience'
import Resume from './components/Resume'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  const { theme, toggle } = useTheme()
  return (
    <>
      <Navbar theme={theme} onToggleTheme={toggle} />
      <main>
        <Hero       theme={theme} />
        <About      theme={theme} />
        <Skills     theme={theme} />
        <Projects   theme={theme} />
        <Experience theme={theme} />
        <Resume     theme={theme} />
        <Contact    theme={theme} />
      </main>
      <Footer theme={theme} />
    </>
  )
}
