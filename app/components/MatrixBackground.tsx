'use client'

import { useEffect, useRef } from 'react'

const CHARS = '{}()[]=>./;:`$&|!?abcdefghijklmnopqrstuvwxyz0123456789'
const FONT_SIZE = 13
const TRAIL = 18
const MAX_OPACITY = 0.09
// emerald-400 green — subtle, not garish
const R = 52
const G = 211
const B = 153

export function MatrixBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    type Col = {
      y: number
      speed: number
      chars: string[]
      shimmer: Float32Array // per-char shimmer boost, decays each frame
    }
    let cols: Col[] = []
    let animId: number

    function rndChar() {
      return CHARS[Math.floor(Math.random() * CHARS.length)]
    }

    function makeCol(startBelow = false): Col {
      return {
        y: startBelow ? -Math.floor(Math.random() * 60) : Math.random() * -(TRAIL + 10),
        speed: 0.18 + Math.random() * 0.42,
        chars: Array.from({ length: TRAIL }, rndChar),
        shimmer: new Float32Array(TRAIL),
      }
    }

    function init() {
      canvas!.width = canvas!.offsetWidth
      canvas!.height = canvas!.offsetHeight
      const count = Math.floor(canvas!.width / FONT_SIZE)
      cols = Array.from({ length: count }, () => makeCol(false))
    }

    let last = 0
    function draw(now: number) {
      animId = requestAnimationFrame(draw)
      const dt = Math.min(now - last, 64)
      last = now

      ctx.clearRect(0, 0, canvas!.width, canvas!.height)
      ctx.font = `${FONT_SIZE}px monospace`
      ctx.textAlign = 'center'

      for (let i = 0; i < cols.length; i++) {
        const col = cols[i]
        col.y += col.speed * (dt / 16)

        // randomly mutate a trail char for flicker
        if (Math.random() < 0.04) {
          col.chars[Math.floor(Math.random() * TRAIL)] = rndChar()
        }

        // randomly trigger a shimmer burst on a character
        if (Math.random() < 0.025) {
          const idx = Math.floor(Math.random() * TRAIL)
          col.shimmer[idx] = 0.18 + Math.random() * 0.14
        }

        const x = i * FONT_SIZE + FONT_SIZE / 2

        for (let j = 0; j < TRAIL; j++) {
          const row = Math.floor(col.y) - j
          if (row < 0) continue
          const y = row * FONT_SIZE
          if (y > canvas!.height) continue

          // decay shimmer
          col.shimmer[j] *= 0.88

          const base = ((TRAIL - j) / TRAIL) * MAX_OPACITY
          const opacity = Math.min(base + col.shimmer[j], 0.38)
          ctx.fillStyle = `rgba(${R},${G},${B},${opacity.toFixed(3)})`
          ctx.fillText(col.chars[j], x, y)
        }

        if (col.y * FONT_SIZE > canvas!.height + TRAIL * FONT_SIZE) {
          cols[i] = makeCol(true)
        }
      }
    }

    init()
    animId = requestAnimationFrame(draw)

    const ro = new ResizeObserver(init)
    ro.observe(canvas)

    return () => {
      cancelAnimationFrame(animId)
      ro.disconnect()
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none"
      style={{ zIndex: 0 }}
      aria-hidden="true"
    />
  )
}
