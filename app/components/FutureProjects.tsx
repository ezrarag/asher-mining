"use client"

import { motion } from 'framer-motion'

export default function FutureProjects() {
  return (
    <section id="future" className="py-24 bg-gradient-to-b from-background via-surface/20 to-surface/40 relative overflow-hidden">
      {/* Background accent */}
      <div className="absolute inset-0 bg-gradient-radial from-accent-blue/5 via-transparent to-transparent" />
      
      <div className="max-w-6xl mx-auto px-4 relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="font-orbitron text-3xl sm:text-4xl mb-6 tracking-wider"
        >
          FUTURE EXPANSION
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ delay: 0.1, duration: 0.6 }}
          className="mt-4 text-white/75 text-lg leading-relaxed max-w-4xl"
        >
          We are exploring adjacent ventures including real estate projects and a vehicle rental platform (Family Thing). These initiatives aim to complement our core mining operations with sustainable, revenue-generating services.
        </motion.p>
      </div>
    </section>
  )
}
