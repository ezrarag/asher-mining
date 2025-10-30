"use client"

import { motion } from 'framer-motion'

export default function About() {
  return (
    <section id="about" className="py-24 bg-gradient-to-b from-background via-surface/20 to-surface/40 relative overflow-hidden">
      {/* Background accent */}
      <div className="absolute inset-0 bg-gradient-radial from-accent-blue/5 via-transparent to-transparent" />
      
      <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-12 items-start relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="font-orbitron text-3xl sm:text-4xl mb-6 tracking-wider">ABOUT ASHER MINING</h2>
          <p className="mt-4 text-white/75 text-lg leading-relaxed">
            Headquartered in Puerto Rico, Asher Mining maintains around-the-clock Bitcoin mining operations. To ensure robust compliance and operational efficiency, we are establishing a subsidiary in Minnesota. Our focus: reliable infrastructure, transparent operations, and long-term alignment with the Bitcoin network.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ delay: 0.2, duration: 0.7 }}
          className="card-glow p-8"
        >
          <ul className="space-y-4 text-white/75 text-lg">
            <li className="flex items-start gap-3">
              <span className="text-accent-neon mt-1">▸</span>
              <span>Puerto Rico HQ</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-accent-neon mt-1">▸</span>
              <span>Minnesota subsidiary for compliance</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-accent-neon mt-1">▸</span>
              <span>24/7 mining operations</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-accent-neon mt-1">▸</span>
              <span>Transparent and security-first approach</span>
            </li>
          </ul>
        </motion.div>
      </div>
    </section>
  )
}
