"use client"

import { motion } from 'framer-motion'

export default function MiningExplanation() {
  return (
    <section className="py-20 bg-surface/40">
      <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="font-orbitron text-2xl sm:text-3xl"
          >
            What is Bitcoin Mining?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.6 }}
            className="mt-4 text-white/80"
          >
            Like Visa verifying your purchase, miners verify transactions on the blockchain. Miners use specialized hardware to secure the network, batch transactions into blocks, and receive rewards for their work.
          </motion.p>
        </div>

        {/* Simple SVG flow placeholder: transaction -> block -> reward */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="rounded-lg border border-white/5 bg-background/60 p-6"
        >
          <svg viewBox="0 0 600 180" className="w-full h-auto" role="img" aria-label="Transactions to blocks to rewards diagram">
            <defs>
              <linearGradient id="g1" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stopColor="#ffd166" />
                <stop offset="100%" stopColor="#1e3a8a" />
              </linearGradient>
            </defs>
            {/* Transaction */}
            <rect x="20" y="40" width="150" height="100" rx="10" fill="url(#g1)" opacity="0.2" stroke="#ffd166" />
            <text x="95" y="95" textAnchor="middle" fill="#ffd166" fontSize="16">Transactions</text>

            {/* Arrow */}
            <line x1="190" y1="90" x2="260" y2="90" stroke="#ffd166" strokeWidth="2" />
            <polygon points="260,90 248,84 248,96" fill="#ffd166" />

            {/* Block */}
            <rect x="280" y="40" width="150" height="100" rx="10" fill="#1e293b" stroke="#60a5fa" />
            <text x="355" y="95" textAnchor="middle" fill="#60a5fa" fontSize="16">Block</text>

            {/* Arrow */}
            <line x1="450" y1="90" x2="520" y2="90" stroke="#60a5fa" strokeWidth="2" />
            <polygon points="520,90 508,84 508,96" fill="#60a5fa" />

            {/* Reward */}
            <circle cx="560" cy="90" r="35" fill="#0f172a" stroke="#eab308" strokeWidth="2" />
            <text x="560" y="95" textAnchor="middle" fill="#eab308" fontSize="16">Reward</text>
          </svg>
          {/* Placeholder for Lottie: a container with data attributes for future integration */}
          <div className="sr-only" data-lottie-placeholder>
            Lottie placeholder: transaction -> block -> reward
          </div>
        </motion.div>
      </div>
    </section>
  )
}

