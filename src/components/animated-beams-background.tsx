"use client"

import { useEffect, useRef } from "react"

export function AnimatedBeamsBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    const resizeCanvas = () => {
      const parent = canvas.parentElement
      if (parent) {
        canvas.width = parent.offsetWidth
        canvas.height = parent.offsetHeight
      }
    }

    resizeCanvas()
    window.addEventListener("resize", resizeCanvas)

    // Beam particles
    const beams: Array<{
      x: number
      y: number
      length: number
      speed: number
      angle: number
      opacity: number
      color: string
    }> = []

    for (let i = 0; i < 15; i++) {
      beams.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        length: Math.random() * 250 + 200,
        speed: Math.random() * 0.8 + 0.5,
        angle: Math.random() * Math.PI * 2,
        opacity: Math.random() * 0.4 + 0.4,
        color: i % 3 === 0 ? "#FF6B35" : i % 3 === 1 ? "#00D9FF" : "#5B5FFF",
      })
    }

    let animationFrameId: number

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      beams.forEach((beam) => {
        // Update position
        beam.x += Math.cos(beam.angle) * beam.speed
        beam.y += Math.sin(beam.angle) * beam.speed

        // Wrap around edges
        if (beam.x < -beam.length) beam.x = canvas.width + beam.length
        if (beam.x > canvas.width + beam.length) beam.x = -beam.length
        if (beam.y < -beam.length) beam.y = canvas.height + beam.length
        if (beam.y > canvas.height + beam.length) beam.y = -beam.length

        ctx.shadowBlur = 20
        ctx.shadowColor = beam.color

        // Draw beam
        const gradient = ctx.createLinearGradient(
          beam.x,
          beam.y,
          beam.x + Math.cos(beam.angle) * beam.length,
          beam.y + Math.sin(beam.angle) * beam.length,
        )

        gradient.addColorStop(0, `${beam.color}00`)
        gradient.addColorStop(
          0.5,
          `${beam.color}${Math.floor(beam.opacity * 255)
            .toString(16)
            .padStart(2, "0")}`,
        )
        gradient.addColorStop(1, `${beam.color}00`)

        ctx.strokeStyle = gradient
        ctx.lineWidth = 4
        ctx.lineCap = "round"

        ctx.beginPath()
        ctx.moveTo(beam.x, beam.y)
        ctx.lineTo(beam.x + Math.cos(beam.angle) * beam.length, beam.y + Math.sin(beam.angle) * beam.length)
        ctx.stroke()

        ctx.shadowBlur = 0
      })

      animationFrameId = requestAnimationFrame(animate)
    }

    animate()

    return () => {
      window.removeEventListener("resize", resizeCanvas)
      cancelAnimationFrame(animationFrameId)
    }
  }, [])

  return (
    <canvas ref={canvasRef} className="absolute inset-0 w-full h-full pointer-events-none" style={{ opacity: 0.7 }} />
  )
}
