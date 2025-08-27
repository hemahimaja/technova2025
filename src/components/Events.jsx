import { useState } from 'react'
import { motion } from 'framer-motion'
import { fadeUp, stagger } from '../utils/animations'

const EVENT_DATA = [
  { title: 'Paper Presentation', desc: 'Showcase research, novel ideas, and impactful solutions.', details: ['Team: 1-2 members', 'Time: 8 mins + 2 mins Q&A', 'Judging: originality, clarity, impact'] },
  { title: 'Poster Presentation', desc: 'Visual storytelling of your project or concept.', details: ['Team: 1-2 members', 'Size: A1 portrait', 'Judging: design, clarity, innovation'] },
  { title: 'Technical Quiz', desc: 'Battle of brains across CS, ECE, AI/ML basics.', details: ['Team: 2-3 members', 'Prelims + Finals', 'Judging: accuracy, speed'] },
  { title: 'Hackathon', desc: 'Build prototypes that matter in 12 hours.', details: ['Team: 2-4 members', 'Theme released on spot', 'Judging: utility, UX, completeness'] },
  { title: 'FunTech Activities', desc: 'Mini-games: Code Golf, Bug Hunt, Tech Pictionary.', details: ['Team: Solo/duo', 'Multiple rounds', 'Win goodies & badges!'] },
]

export default function Events() {
  const [open, setOpen] = useState(null)
  const active = typeof open === 'number' ? EVENT_DATA[open] : null

  return (
    <section id="events" className="section">
      <div className="max-w-6xl mx-auto">
        <motion.h2 variants={fadeUp(0)} initial="hidden" whileInView="show" viewport={{ once: true }} className="text-3xl md:text-4xl font-bold text-center mb-8">
          Sub‑Events
        </motion.h2>

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {EVENT_DATA.map((e, i) => (
            <motion.button
              key={i}
              variants={fadeUp(0)}
              onClick={() => setOpen(i)}
              className="card text-left"
            >
              <h3 className="text-xl font-semibold mb-1">{e.title}</h3>
              <p className="text-white/70">{e.desc}</p>
            </motion.button>
          ))}
        </motion.div>
      </div>

      {/* Modal */}
      {active && (
        <div className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50">
          <div className="card max-w-lg w-[90%]">
            <div className="flex items-start justify-between">
              <h3 className="text-2xl font-bold">{active.title}</h3>
              <button onClick={() => setOpen(null)} className="px-3 py-1 rounded-lg border border-white/15 hover:bg-white/10">Close</button>
            </div>
            <p className="mt-2 text-white/80">{active.desc}</p>
            <ul className="mt-4 list-disc list-inside space-y-1 text-white/80">
              {active.details.map((d, idx) => <li key={idx}>{d}</li>)}
            </ul>
          </div>
        </div>
      )}
    </section>
  )
}