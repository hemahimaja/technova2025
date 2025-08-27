import { useEffect, useState } from 'react'

const sections = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'events', label: 'Sub-Events' },
  { id: 'schedule', label: 'Schedule' },
  { id: 'contact', label: 'Contact' },
]

export default function Navbar({ onToggleTheme, theme }) {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className={`fixed top-0 left-0 w-full z-50 transition ${scrolled ? 'bg-black/60 backdrop-blur border-b border-white/10' : 'bg-transparent'}`}>
      <nav className="max-w-6xl mx-auto flex items-center justify-between px-4 py-3">
        <a href="#home" className="flex items-center gap-2">
          <img src="/src/assets/image.jpg" alt="logo" className="h-8 w-8" />
          <span className="font-semibold tracking-wide">TechNova 2025</span>
        </a>
        <ul className="hidden md:flex items-center gap-6 text-sm">
          {sections.map(s => (
            <li key={s.id}><a className="hover:text-cyan-300" href={`#${s.id}`}>{s.label}</a></li>
          ))}
        </ul>
        <button
          onClick={onToggleTheme}
          className="px-3 py-1.5 rounded-xl border border-white/15 hover:bg-white/10 text-xs"
          aria-label="Toggle theme"
        >
          {theme === 'dark' ? '☀️ Light' : '🌙 Dark'}
        </button>
      </nav>
    </header>
  )
}