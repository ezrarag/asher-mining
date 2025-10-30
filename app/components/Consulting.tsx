"use client"

import { motion } from 'framer-motion'

const cards = [
  {
    title: 'Mining Education',
    body: 'Understand hardware, energy considerations, network dynamics, and risk management with clear, actionable guidance.',
  },
  {
    title: 'Investment Advisory',
    body: 'Evaluate mining opportunities, capital allocation, and operational tradeoffs aligned with your strategy and risk profile.',
  },
  {
    title: 'Partnership Consulting',
    body: 'Structure partnerships, vendor relations, and compliance workflows for long-term operational success.',
  },
]

export default function Consulting() {
  return (
    <section id="consulting" className="py-24 bg-gradient-to-b from-surface/40 via-surface/60 to-background relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute inset-0 bg-gradient-radial from-accent-neon/5 via-transparent to-transparent opacity-50" />
      
      <div className="max-w-6xl mx-auto px-4 relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="font-orbitron text-3xl sm:text-4xl mb-12 tracking-wider text-center"
        >
          CONSULTING SERVICES
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-8">
          {cards.map((card, idx) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: 0.1 * idx, duration: 0.6 }}
              className="card-glow p-8 hover:border-accent-neon/30 transition-all duration-300 group"
            >
              <h3 className="font-orbitron text-xl mb-4 text-accent-neon tracking-wide">{card.title.toUpperCase()}</h3>
              <p className="text-white/70 leading-relaxed text-base">{card.body}</p>
              {/* Hover accent line */}
              <div className="mt-6 h-0.5 w-0 bg-gradient-to-r from-accent-neon to-accent-blue group-hover:w-full transition-all duration-500" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
