"use client"

import { motion } from 'framer-motion'

export default function About() {
  return (
    <section id="about" className="py-20">
      <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-10 items-start">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-orbitron text-2xl sm:text-3xl">About Asher Mining</h2>
          <p className="mt-4 text-white/80">
            Headquartered in Puerto Rico, Asher Mining maintains around-the-clock Bitcoin mining operations. To ensure robust compliance and operational efficiency, we are establishing a subsidiary in Minnesota. Our focus: reliable infrastructure, transparent operations, and long-term alignment with the Bitcoin network.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1, duration: 0.6 }}
          className="rounded-lg border border-white/5 bg-surface/40 p-6"
        >
          <ul className="space-y-3 text-white/80">
            <li>• Puerto Rico HQ</li>
            <li>• Minnesota subsidiary for compliance</li>
            <li>• 24/7 mining operations</li>
            <li>• Transparent and security-first approach</li>
          </ul>
        </motion.div>
      </div>
    </section>
  )
}

