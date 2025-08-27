import { motion } from 'framer-motion'
import { fadeUp } from '../utils/animations'

const DAY1 = [
  { time: '09:30', item: 'Inauguration & Welcome' },
  { time: '10:30', item: 'Paper Presentation' },
  { time: '13:30', item: 'Poster Presentation' },
  { time: '16:00', item: 'FunTech Activities' },
]

const DAY2 = [
  { time: '09:00', item: 'Hackathon Kickoff' },
  { time: '11:00', item: 'Technical Quiz (Prelims)' },
  { time: '14:00', item: 'Technical Quiz (Finals)' },
  { time: '17:00', item: 'Hackathon Demos & Valedictory' },
]

function Day({ title, data }) {
  return (
    <div className="card">
      <h3 className="text-xl font-semibold mb-4">{title}</h3>
      <ul className="space-y-2">
        {data.map((d, i) => (
          <li key={i} className="flex items-center gap-3">
            <span className="text-cyan-300 font-mono">{d.time}</span>
            <span className="text-white/80">{d.item}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default function Schedule() {
  return (
    <section id="schedule" className="section bg-gradient-to-b from-slate-900 to-black">
      <div className="max-w-6xl mx-auto">
        <motion.h2 variants={fadeUp(0)} initial="hidden" whileInView="show" viewport={{ once: true }} className="text-3xl md:text-4xl font-bold text-center mb-8">Schedule</motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Day title="Day 1 — 17 Sept 2025" data={DAY1} />
          <Day title="Day 2 — 18 Sept 2025" data={DAY2} />
        </div>
      </div>
    </section>
  )
}