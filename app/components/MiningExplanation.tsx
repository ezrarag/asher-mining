"use client"

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

export default function MiningExplanation() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section className="py-24 bg-gradient-to-b from-surface/60 via-surface/40 to-background relative overflow-hidden">
      {/* Subtle background glow */}
      <div className="absolute inset-0 bg-gradient-radial from-accent-blue/10 via-transparent to-transparent opacity-50" />
      
      <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-12 items-center relative z-10">
        <div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="font-orbitron text-3xl sm:text-4xl mb-6 tracking-wider"
          >
            WHAT IS BITCOIN MINING?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ delay: 0.1, duration: 0.6 }}
            className="mt-4 text-white/80 text-lg leading-relaxed"
          >
            Like Visa verifying your purchase, miners verify transactions on the blockchain. Miners use specialized hardware to secure the network, batch transactions into blocks, and receive rewards for their work.
          </motion.p>
        </div>

        {/* Animated SVG flow diagram */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="card-glow p-8"
        >
          <svg viewBox="0 0 600 180" className="w-full h-auto" role="img" aria-label="Transactions to blocks to rewards diagram">
            <defs>
              <linearGradient id="g1" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stopColor="#ffd166" />
                <stop offset="100%" stopColor="#1e3a8a" />
              </linearGradient>
              {/* Animated gradient for flowing effect */}
              <linearGradient id="flowGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#ffd166" stopOpacity="0">
                  {isInView && (
                    <animate attributeName="stop-opacity" values="0;1;0" dur="2s" repeatCount="indefinite" />
                  )}
                </stop>
                <stop offset="50%" stopColor="#60a5fa" stopOpacity="0">
                  {isInView && (
                    <animate attributeName="stop-opacity" values="0;1;0" dur="2s" begin="0.5s" repeatCount="indefinite" />
                  )}
                </stop>
                <stop offset="100%" stopColor="#eab308" stopOpacity="0">
                  {isInView && (
                    <animate attributeName="stop-opacity" values="0;1;0" dur="2s" begin="1s" repeatCount="indefinite" />
                  )}
                </stop>
              </linearGradient>
            </defs>
            
            {/* Transaction box with animation */}
            <motion.rect
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 0.2, x: 0 } : {}}
              transition={{ duration: 0.5 }}
              x="20"
              y="40"
              width="150"
              height="100"
              rx="10"
              fill="url(#g1)"
              stroke="#ffd166"
              strokeWidth="2"
            />
            <motion.text
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ delay: 0.2, duration: 0.5 }}
              x="95"
              y="95"
              textAnchor="middle"
              fill="#ffd166"
              fontSize="16"
              fontWeight="600"
            >
              Transactions
            </motion.text>

            {/* Animated arrow */}
            <motion.g
              initial={{ opacity: 0, pathLength: 0 }}
              animate={isInView ? { opacity: 1, pathLength: 1 } : {}}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              <line x1="190" y1="90" x2="260" y2="90" stroke="#ffd166" strokeWidth="3" />
              <polygon points="260,90 248,84 248,96" fill="#ffd166" />
              {/* Glow effect */}
              <line x1="190" y1="90" x2="260" y2="90" stroke="#ffd166" strokeWidth="5" opacity="0.3" className="animate-pulse" />
            </motion.g>

            {/* Block box with animation */}
            <motion.rect
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 0.6, duration: 0.5 }}
              x="280"
              y="40"
              width="150"
              height="100"
              rx="10"
              fill="#1e293b"
              stroke="#60a5fa"
              strokeWidth="2"
            />
            <motion.text
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ delay: 0.8, duration: 0.5 }}
              x="355"
              y="95"
              textAnchor="middle"
              fill="#60a5fa"
              fontSize="16"
              fontWeight="600"
            >
              Block
            </motion.text>

            {/* Second animated arrow */}
            <motion.g
              initial={{ opacity: 0, pathLength: 0 }}
              animate={isInView ? { opacity: 1, pathLength: 1 } : {}}
              transition={{ delay: 1, duration: 0.8 }}
            >
              <line x1="450" y1="90" x2="520" y2="90" stroke="#60a5fa" strokeWidth="3" />
              <polygon points="520,90 508,84 508,96" fill="#60a5fa" />
              {/* Glow effect */}
              <line x1="450" y1="90" x2="520" y2="90" stroke="#60a5fa" strokeWidth="5" opacity="0.3" className="animate-pulse" />
            </motion.g>

            {/* Reward circle with pulsing animation */}
            <motion.circle
              initial={{ opacity: 0, scale: 0 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 1.2, duration: 0.5, type: "spring" }}
              cx="560"
              cy="90"
              r="35"
              fill="#0f172a"
              stroke="#eab308"
              strokeWidth="2"
              className="animate-glow-pulse"
            />
            <motion.circle
              animate={isInView ? { r: [35, 40, 35], opacity: [0.3, 0.6, 0.3] } : {}}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              cx="560"
              cy="90"
              fill="none"
              stroke="#eab308"
              strokeWidth="1"
              opacity="0.5"
            />
            <motion.text
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ delay: 1.4, duration: 0.5 }}
              x="560"
              y="95"
              textAnchor="middle"
              fill="#eab308"
              fontSize="14"
              fontWeight="600"
            >
              Reward
            </motion.text>
          </svg>
          
          {/* Placeholder for Lottie */}
          <div className="sr-only" data-lottie-placeholder>
            Lottie placeholder: transaction → block → reward
          </div>
        </motion.div>
      </div>
    </section>
  )
}
