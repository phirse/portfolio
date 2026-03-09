import { useEffect, useRef } from 'react'

const PARTICLE_COUNT = 80
const CONNECT_DISTANCE = 100
const MOUSE_REPEL_DISTANCE = 120
const MOUSE_CONNECT_DISTANCE = 150

function createParticle(width, height) {
  return {
    x: Math.random() * width,
    y: Math.random() * height,
    vx: (Math.random() - 0.5) * 0.4,
    vy: (Math.random() - 0.5) * 0.4,
    radius: Math.random() * 1.5 + 1,
    opacity: Math.random() * 0.3 + 0.3,
  }
}

export default function ParticleBackground() {
  const canvasRef = useRef(null)
  const particlesRef = useRef([])
  const mouseRef = useRef({ x: -9999, y: -9999 })
  const animIdRef = useRef(null)
  const accentRef = useRef('#6366f1')

  useEffect(() => {
    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d')

    function resize() {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    function initParticles() {
      particlesRef.current = Array.from({ length: PARTICLE_COUNT }, () =>
        createParticle(canvas.width, canvas.height)
      )
    }

    function readAccent() {
      const style = getComputedStyle(document.documentElement)
      const accent = style.getPropertyValue('--color-accent').trim()
      if (accent) accentRef.current = accent
    }

    function hexToRgb(hex) {
      const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex)
      if (!result) return '99, 102, 241'
      return `${parseInt(result[1], 16)}, ${parseInt(result[2], 16)}, ${parseInt(result[3], 16)}`
    }

    function animate() {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      readAccent()
      const rgb = hexToRgb(accentRef.current)
      const particles = particlesRef.current
      const mouse = mouseRef.current

      for (const p of particles) {
        // Mouse repulsion
        const dx = p.x - mouse.x
        const dy = p.y - mouse.y
        const dist = Math.sqrt(dx * dx + dy * dy)
        if (dist < MOUSE_REPEL_DISTANCE && dist > 0) {
          const force = (MOUSE_REPEL_DISTANCE - dist) / MOUSE_REPEL_DISTANCE
          p.vx += (dx / dist) * force * 0.8
          p.vy += (dy / dist) * force * 0.8
        }

        // Damping
        p.vx *= 0.98
        p.vy *= 0.98

        // Move
        p.x += p.vx
        p.y += p.vy

        // Bounce
        if (p.x < 0 || p.x > canvas.width) p.vx *= -1
        if (p.y < 0 || p.y > canvas.height) p.vy *= -1
        p.x = Math.max(0, Math.min(canvas.width, p.x))
        p.y = Math.max(0, Math.min(canvas.height, p.y))

        // Draw particle
        ctx.beginPath()
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(${rgb}, ${p.opacity})`
        ctx.fill()
      }

      // Lines between particles
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x
          const dy = particles[i].y - particles[j].y
          const dist = Math.sqrt(dx * dx + dy * dy)
          if (dist < CONNECT_DISTANCE) {
            const alpha = (1 - dist / CONNECT_DISTANCE) * 0.15
            ctx.beginPath()
            ctx.moveTo(particles[i].x, particles[i].y)
            ctx.lineTo(particles[j].x, particles[j].y)
            ctx.strokeStyle = `rgba(${rgb}, ${alpha})`
            ctx.lineWidth = 0.5
            ctx.stroke()
          }
        }
      }

      // Lines from cursor to nearby particles
      for (const p of particles) {
        const dx = p.x - mouse.x
        const dy = p.y - mouse.y
        const dist = Math.sqrt(dx * dx + dy * dy)
        if (dist < MOUSE_CONNECT_DISTANCE) {
          const alpha = (1 - dist / MOUSE_CONNECT_DISTANCE) * 0.25
          ctx.beginPath()
          ctx.moveTo(mouse.x, mouse.y)
          ctx.lineTo(p.x, p.y)
          ctx.strokeStyle = `rgba(${rgb}, ${alpha})`
          ctx.lineWidth = 0.6
          ctx.stroke()
        }
      }

      animIdRef.current = requestAnimationFrame(animate)
    }

    function onMouseMove(e) {
      mouseRef.current = { x: e.clientX, y: e.clientY }
    }

    function onMouseLeave() {
      mouseRef.current = { x: -9999, y: -9999 }
    }

    resize()
    initParticles()
    animate()

    window.addEventListener('resize', resize)
    window.addEventListener('mousemove', onMouseMove)
    document.addEventListener('mouseleave', onMouseLeave)

    return () => {
      cancelAnimationFrame(animIdRef.current)
      window.removeEventListener('resize', resize)
      window.removeEventListener('mousemove', onMouseMove)
      document.removeEventListener('mouseleave', onMouseLeave)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: -1,
        pointerEvents: 'none',
      }}
    />
  )
}
