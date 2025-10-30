"use client"

import { useState } from 'react'
import { motion } from 'framer-motion'

export default function ContactForm() {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const form = e.currentTarget
    const formData = new FormData(form)
    const payload = {
      name: String(formData.get('name') || ''),
      email: String(formData.get('email') || ''),
      message: String(formData.get('message') || ''),
    }
    setStatus('loading')
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      })
      if (!res.ok) throw new Error('Request failed')
      setStatus('success')
      form.reset()
    } catch (err) {
      setStatus('error')
    }
  }

  return (
    <section id="contact" className="py-20 bg-surface/40">
      <div className="max-w-3xl mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="font-orbitron text-2xl sm:text-3xl"
        >
          Contact Us
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1, duration: 0.6 }}
          className="mt-4 text-white/80"
        >
          Have questions about mining or consulting? Send us a message.
        </motion.p>

        <motion.form
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.15, duration: 0.6 }}
          onSubmit={onSubmit}
          className="mt-8 grid gap-4 rounded-lg border border-white/5 bg-background/60 p-6"
        >
          <div className="grid sm:grid-cols-2 gap-4">
            <label className="grid gap-2 text-sm">
              <span className="text-white/70">Name</span>
              <input
                required
                name="name"
                placeholder="Satoshi Nakamoto"
                className="rounded-md bg-surface/60 border border-white/10 px-3 py-2 outline-none focus:border-accent-neon/50"
              />
            </label>
            <label className="grid gap-2 text-sm">
              <span className="text-white/70">Email</span>
              <input
                required
                type="email"
                name="email"
                placeholder="you@example.com"
                className="rounded-md bg-surface/60 border border-white/10 px-3 py-2 outline-none focus:border-accent-neon/50"
              />
            </label>
          </div>
          <label className="grid gap-2 text-sm">
            <span className="text-white/70">Message</span>
            <textarea
              required
              name="message"
              rows={5}
              placeholder="Tell us how we can help."
              className="rounded-md bg-surface/60 border border-white/10 px-3 py-2 outline-none focus:border-accent.neon/50"
            />
          </label>
          <div className="flex items-center gap-4">
            <button
              type="submit"
              disabled={status === 'loading'}
              className="inline-flex items-center gap-2 rounded-md border border-accent-neon/40 bg-accent-neon/10 px-6 py-2 text-accent-neon hover:bg-accent-neon/20 transition disabled:opacity-60 disabled:cursor-not-allowed"
            >
              {status === 'loading' ? 'Sending…' : 'Send Message'}
            </button>
            {status === 'success' && (
              <span className="text-sm text-green-400">Message sent! We will reply soon.</span>
            )}
            {status === 'error' && (
              <span className="text-sm text-red-400">Something went wrong. Please try again.</span>
            )}
          </div>
        </motion.form>
      </div>
    </section>
  )
}

