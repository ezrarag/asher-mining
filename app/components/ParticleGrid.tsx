"use client"

import { useEffect, useRef } from 'react'

// Simple particle grid background component
export default function ParticleGrid() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    // Set canvas size
    canvas.width = canvas.offsetWidth
    canvas.height = canvas.offsetHeight

    // Particle grid configuration
    const gridSize = 50
    const particles: Array<{ x: number; y: number; opacity: number; pulse: number }> = []
    
    const cols = Math.ceil(canvas.width / gridSize)
    const rows = Math.ceil(canvas.height / gridSize)

    // Initialize particles
    for (let i = 0; i < cols * rows; i++) {
      particles.push({
        x: (i % cols) * gridSize,
        y: Math.floor(i / cols) * gridSize,
        opacity: Math.random() * 0.3 + 0.1,
        pulse: Math.random() * Math.PI * 2,
      })
    }

    let animationFrame: number
    let time = 0

    function animate() {
      if (!ctx || !canvas) return
      
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      ctx.strokeStyle = 'rgba(255, 209, 102, 0.15)'
      ctx.lineWidth = 0.5

      // Draw grid lines
      for (let i = 0; i <= cols; i++) {
        ctx.beginPath()
        ctx.moveTo(i * gridSize, 0)
        ctx.lineTo(i * gridSize, canvas.height)
        ctx.stroke()
      }
      for (let i = 0; i <= rows; i++) {
        ctx.beginPath()
        ctx.moveTo(0, i * gridSize)
        ctx.lineTo(canvas.width, i * gridSize)
        ctx.stroke()
      }

      // Draw particles with pulsing glow
      particles.forEach((particle) => {
        const pulse = Math.sin(time * 0.001 + particle.pulse) * 0.5 + 0.5
        const currentOpacity = particle.opacity * pulse

        ctx.fillStyle = `rgba(255, 209, 102, ${currentOpacity})`
        ctx.beginPath()
        ctx.arc(particle.x, particle.y, 1.5, 0, Math.PI * 2)
        ctx.fill()
      })

      time += 16
      animationFrame = requestAnimationFrame(animate)
    }

    animate()

    // Handle resize
    const handleResize = () => {
      canvas.width = canvas.offsetWidth
      canvas.height = canvas.offsetHeight
    }
    window.addEventListener('resize', handleResize)

    return () => {
      cancelAnimationFrame(animationFrame)
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full opacity-30"
      style={{ mixBlendMode: 'screen' }}
    />
  )
}

