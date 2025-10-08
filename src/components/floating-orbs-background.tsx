"use client"

import { useEffect, useRef } from "react"

export function FloatingOrbsBackground() {
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

    // Orb class
    class Orb {
      x: number
      y: number
      radius: number
      vx: number
      vy: number
      color: string
      opacity: number

      constructor(canvasWidth: number, canvasHeight: number) {
        this.x = Math.random() * canvasWidth
        this.y = Math.random() * canvasHeight
        this.radius = Math.random() * 150 + 100
        this.vx = (Math.random() - 0.5) * 0.3
        this.vy = (Math.random() - 0.5) * 0.3

        // Use DocPrep brand colors
        const colors = [
          "61, 61, 143", // Deep indigo #3D3D8F
          "91, 91, 199", // Lighter indigo
          "20, 184, 166", // Teal/cyan
          "255, 127, 80", // Orange/coral accent
        ]
        this.color = colors[Math.floor(Math.random() * colors.length)]
        this.opacity = Math.random() * 0.15 + 0.05
      }

      update(canvasWidth: number, canvasHeight: number) {
        this.x += this.vx
        this.y += this.vy

        if (this.x < -this.radius) this.x = canvasWidth + this.radius
        if (this.x > canvasWidth + this.radius) this.x = -this.radius
        if (this.y < -this.radius) this.y = canvasHeight + this.radius
        if (this.y > canvasHeight + this.radius) this.y = -this.radius
      }

      draw(ctx: CanvasRenderingContext2D) {
        const gradient = ctx.createRadialGradient(this.x, this.y, 0, this.x, this.y, this.radius)
        gradient.addColorStop(0, `rgba(${this.color}, ${this.opacity})`)
        gradient.addColorStop(0.5, `rgba(${this.color}, ${this.opacity * 0.5})`)
        gradient.addColorStop(1, `rgba(${this.color}, 0)`)

        ctx.fillStyle = gradient
        ctx.beginPath()
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2)
        ctx.fill()
      }
    }

    // Create orbs
    const orbs: Orb[] = []
    const orbCount = 8
    for (let i = 0; i < orbCount; i++) {
      orbs.push(new Orb(canvas.width, canvas.height))
    }

    // Animation loop
    let animationFrameId: number
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      orbs.forEach((orb) => {
        orb.update(canvas.width, canvas.height)
        orb.draw(ctx)
      })

      animationFrameId = requestAnimationFrame(animate)
    }

    animate()

    return () => {
      window.removeEventListener("resize", resizeCanvas)
      cancelAnimationFrame(animationFrameId)
    }
  }, [])

  return <canvas ref={canvasRef} className="absolute inset-0 w-full h-full pointer-events-none" />
}
