import { useEffect, useState } from 'react'
import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import About from './components/About.jsx'
import Events from './components/Events.jsx'
import Schedule from './components/Schedule.jsx'
import Contact from './components/Contact.jsx'
import Footer from './components/Footer.jsx'

export default function App() {
  const [theme, setTheme] = useState('dark')

  useEffect(() => {
    document.documentElement.classList.toggle('dark', theme === 'dark')
  }, [theme])

  return (
    <div className="text-white bg-black min-h-screen">
      <Navbar
        theme={theme}
        onToggleTheme={() => setTheme(t => t === 'dark' ? 'light' : 'dark')}
      />
      <main className="pt-16">
        <Hero />
        <About />
        <Events />
        <Schedule />
        <Contact />
         {/* ✅ Sponsors carousel added here */}
      </main>
      <Footer />
    </div>
  )
}
