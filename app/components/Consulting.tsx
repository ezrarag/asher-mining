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
    <section id="consulting" className="py-20 bg-surface/40">
      <div className="max-w-6xl mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="font-orbitron text-2xl sm:text-3xl mb-8"
        >
          Consulting Services
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-6">
          {cards.map((card, idx) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.05 * idx, duration: 0.5 }}
              className="rounded-lg border border-white/5 bg-background/60 p-6 hover:border-accent-neon/40 transition"
            >
              <h3 className="font-semibold text-lg text-accent-neon">{card.title}</h3>
              <p className="mt-3 text-white/80">{card.body}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

