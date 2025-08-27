import { motion } from 'framer-motion'
import { fadeUp } from '../utils/animations'

export default function About() {
  return (
    <section id="about" className="section bg-gradient-to-b from-black to-slate-900">
      <div className="max-w-4xl mx-auto text-center">
        <motion.h2 initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.3 }} variants={fadeUp(0)} className="text-3xl md:text-4xl font-bold mb-4">About the Event</motion.h2>
        <motion.p initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.3 }} variants={fadeUp(0.15)} className="text-white/80">
          TechNova 2025 is a celebration of technology and creativity with Paper & Poster Presentations, a thrilling Hackathon, an exciting Technical Quiz,
          and engaging FunTech activities. Explore, experiment, and elevate your ideas.
        </motion.p>
      </div>
    </section>
  )
}