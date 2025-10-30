"use client"

import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      {/* Glow accents */}
      <div className="pointer-events-none absolute -top-24 right-0 h-72 w-72 rounded-full bg-accent-neon/20 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-24 -left-12 h-80 w-80 rounded-full bg-accent-blue/30 blur-3xl" />

      <div className="max-w-6xl mx-auto px-4 pt-16 pb-24 text-center">
        {/* Logo placeholder */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="mx-auto mb-6 h-16 w-16 rounded-md bg-gradient-to-br from-accent-neon to-accent-blue shadow-glow"
        />

        <motion.h1
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.6 }}
          className="font-orbitron text-3xl sm:text-5xl font-semibold tracking-wide"
        >
          Powering the Future of Bitcoin Mining
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="mt-4 text-white/80 max-w-2xl mx-auto"
        >
          Asher Mining operates 24/7 infrastructure and provides expert consulting to help you understand, invest in, and partner within the Bitcoin mining ecosystem.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="mt-8"
        >
          <a
            href="#about"
            className="inline-flex items-center gap-2 rounded-md border border-accent-neon/40 bg-accent-neon/10 px-6 py-3 text-accent-neon hover:bg-accent-neon/20 transition shadow-glow"
          >
            Learn More
          </a>
        </motion.div>
      </div>
    </section>
  )
}

