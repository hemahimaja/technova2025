import { motion } from 'framer-motion'
import { fadeUp } from '../utils/animations'

export default function Contact() {
  return (
    <section id="contact" className="section">
      <div className="max-w-4xl mx-auto text-center">
        <motion.h2 variants={fadeUp(0)} initial="hidden" whileInView="show" viewport={{ once: true }} className="text-3xl md:text-4xl font-bold mb-6">
          Contact
        </motion.h2>
        <motion.div variants={fadeUp(0.15)} initial="hidden" whileInView="show" viewport={{ once: true }} className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
          <div className="card">
            <h3 className="text-xl font-semibold">Faculty Coordinator</h3>
            <p className="text-white/80 mt-2">Dr. A. Sharma<br/>📧 ash@example.com<br/>📞 +91 90000 00000</p>
          </div>
          <div className="card">
            <h3 className="text-xl font-semibold">Student Coordinator</h3>
            <p className="text-white/80 mt-2">jhon<br/>📧 jhon@example.com<br/>📞 +91 90000 00001</p>
          </div>
        </motion.div>
        <motion.p variants={fadeUp(0.3)} initial="hidden" whileInView="show" viewport={{ once: true }} className="text-white/60 mt-6">
          Venue: Narayana Engineering College, Nellore 
        </motion.p>
      </div>
    </section>
  )
}