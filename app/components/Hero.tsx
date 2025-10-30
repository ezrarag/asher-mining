"use client"

import { motion } from 'framer-motion'
import ParticleGrid from './ParticleGrid'

export default function Hero() {
  return (
    <section className="relative overflow-hidden min-h-[85vh] flex items-center">
      {/* Enhanced glow accents with animation */}
      <motion.div 
        className="pointer-events-none absolute -top-24 right-0 h-72 w-72 rounded-full bg-accent-neon/20 blur-3xl"
        animate={{ 
          scale: [1, 1.2, 1],
          opacity: [0.2, 0.3, 0.2],
        }}
        transition={{ 
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      <motion.div 
        className="pointer-events-none absolute -bottom-24 -left-12 h-80 w-80 rounded-full bg-accent-blue/30 blur-3xl"
        animate={{ 
          scale: [1, 1.1, 1],
          opacity: [0.3, 0.4, 0.3],
        }}
        transition={{ 
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1
        }}
      />

      {/* Particle grid background */}
      <div className="absolute inset-0 pointer-events-none">
        <ParticleGrid />
      </div>

      {/* Radial gradient overlay */}
      <div className="absolute inset-0 pointer-events-none bg-gradient-radial from-transparent via-background/50 to-background" />

      <div className="relative z-10 max-w-6xl mx-auto px-4 py-24 text-center">
        {/* Logo placeholder with enhanced glow */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 0.8, type: "spring", stiffness: 200 }}
          className="mx-auto mb-8 h-20 w-20 rounded-lg bg-gradient-to-br from-accent-neon via-accent-neon/80 to-accent-blue shadow-glow-lg animate-glow-pulse"
        />

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8, ease: "easeOut" }}
          className="font-orbitron text-4xl sm:text-6xl lg:text-7xl font-bold tracking-wider mb-6 bg-gradient-to-r from-white via-accent-neon/90 to-white bg-clip-text text-transparent"
        >
          POWERING THE FUTURE OF BITCOIN MINING
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="mt-6 text-lg sm:text-xl text-white/70 max-w-3xl mx-auto leading-relaxed font-medium"
        >
          Asher Mining operates 24/7 infrastructure and provides expert consulting to help you understand, invest in, and partner within the Bitcoin mining ecosystem.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="mt-10"
        >
          <a
            href="#about"
            className="group relative inline-flex items-center gap-3 rounded-lg border border-accent-neon/50 bg-accent-neon/10 px-8 py-4 text-lg font-medium text-accent-neon hover:bg-accent-neon/20 transition-all duration-300 shadow-glow hover:shadow-glow-lg"
          >
            <span className="relative z-10">Learn More</span>
            <motion.span
              className="relative z-10"
              animate={{ x: [0, 5, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              →
            </motion.span>
            {/* Hover glow effect */}
            <span className="absolute inset-0 rounded-lg bg-gradient-to-r from-accent-neon/20 to-accent-blue/20 opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-300" />
          </a>
        </motion.div>
      </div>
    </section>
  )
}
