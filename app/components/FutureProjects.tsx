"use client"

import { motion } from 'framer-motion'

export default function FutureProjects() {
  return (
    <section id="future" className="py-20">
      <div className="max-w-6xl mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="font-orbitron text-2xl sm:text-3xl"
        >
          Future Expansion
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1, duration: 0.6 }}
          className="mt-4 text-white/80 max-w-3xl"
        >
          We are exploring adjacent ventures including real estate projects and a vehicle rental platform (Family Thing). These initiatives aim to complement our core mining operations with sustainable, revenue-generating services.
        </motion.p>
      </div>
    </section>
  )
}

