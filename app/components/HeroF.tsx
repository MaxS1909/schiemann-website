'use client'

import { useEffect, useRef } from 'react'

const CHARS = '{}()[]=>./;:`$&|!?abcdefghijklmnopqrstuvwxyz0123456789'
const RAIN_FS = 11
const TRAIL = 16
const RAIN_MAX = 0.28
const EXTRUSION = 55
const LAYERS = 36
const PERIOD_MS = 22000
const R = 96, G = 165, B = 250

export function HeroF() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    type Col = { y: number; speed: number; chars: string[]; shimmer: Float32Array }
    let cols: Col[] = []
    let animId = 0
    let angle = 0
    let lastTime = 0
    let cx = 0, cy = 0
    let fontStr = ''

    const off = document.createElement('canvas')
    let offCtx: CanvasRenderingContext2D | null = null

    function rndChar() {
      return CHARS[Math.floor(Math.random() * CHARS.length)]
    }

    function makeCol(): Col {
      return {
        y: Math.random() * -(TRAIL + 20),
        speed: 0.2 + Math.random() * 0.45,
        chars: Array.from({ length: TRAIL }, rndChar),
        shimmer: new Float32Array(TRAIL),
      }
    }

    function init() {
      canvas!.width = canvas!.offsetWidth
      canvas!.height = canvas!.offsetHeight
      cx = canvas!.width / 2

      const fs = Math.min(Math.max(260, canvas!.width * 0.52), 680)
      fontStr = `italic ${fs}px Georgia, serif`

      ctx.font = fontStr
      const m = ctx.measureText('f')
      cy = canvas!.height / 2 + (m.actualBoundingBoxAscent - m.actualBoundingBoxDescent) / 2

      cols = Array.from({ length: Math.floor(canvas!.width / RAIN_FS) }, makeCol)

      off.width = canvas!.width
      off.height = canvas!.height
      offCtx = off.getContext('2d')
    }

    function drawFrame(now: number) {
      animId = requestAnimationFrame(drawFrame)
      const dt = Math.min(now - (lastTime || now), 80)
      lastTime = now

      // angle increases forever — cosA/sinA cycle naturally, no resets
      angle += (Math.PI * 2 * dt) / PERIOD_MS
      const cosA = Math.cos(angle)
      const sinA = Math.sin(angle)

      ctx.clearRect(0, 0, canvas!.width, canvas!.height)
      ctx.font = fontStr
      ctx.textAlign = 'center'

      // Extrusion side layers — opacity fixed per depth, not per angle
      for (let i = LAYERS; i >= 1; i--) {
        const t = i / LAYERS
        const xOff = t * EXTRUSION * sinA
        const alpha = (0.055 * (1 - t * 0.6) * Math.abs(sinA)).toFixed(3)
        ctx.save()
        ctx.translate(cx + xOff, 0)
        ctx.scale(cosA || 0.01, 1)
        ctx.fillStyle = `rgba(${R},${G},${B},${alpha})`
        ctx.fillText('f', 0, cy)
        ctx.restore()
      }

      // Face — completely fixed opacity and blur, zero pulsing
      ctx.save()
      ctx.shadowColor = `rgba(${R},${G},${B},0.45)`
      ctx.shadowBlur = 18
      ctx.translate(cx, 0)
      ctx.scale(cosA || 0.01, 1)
      ctx.fillStyle = `rgba(${R},${G},${B},0.38)`
      ctx.fillText('f', 0, cy)
      ctx.restore()
      ctx.shadowBlur = 0

      // Matrix rain clipped to "f"
      if (offCtx) {
        offCtx.clearRect(0, 0, off.width, off.height)
        offCtx.font = `${RAIN_FS}px monospace`
        offCtx.textAlign = 'center'

        for (let i = 0; i < cols.length; i++) {
          const col = cols[i]
          col.y += col.speed * (dt / 16)

          if (Math.random() < 0.03) col.chars[Math.floor(Math.random() * TRAIL)] = rndChar()
          if (Math.random() < 0.025) {
            col.shimmer[Math.floor(Math.random() * TRAIL)] = 0.18 + Math.random() * 0.12
          }

          const x = i * RAIN_FS + RAIN_FS / 2
          for (let j = 0; j < TRAIL; j++) {
            const row = Math.floor(col.y) - j
            if (row < 0) continue
            const y = row * RAIN_FS
            if (y > off.height) continue
            col.shimmer[j] *= 0.88
            const opacity = Math.min(((TRAIL - j) / TRAIL) * RAIN_MAX + col.shimmer[j], 0.55)
            offCtx.fillStyle = `rgba(${R},${G},${B},${opacity.toFixed(3)})`
            offCtx.fillText(col.chars[j], x, y)
          }

          if (col.y * RAIN_FS > off.height + TRAIL * RAIN_FS) cols[i] = makeCol()
        }

        offCtx.globalCompositeOperation = 'destination-in'
        offCtx.save()
        offCtx.font = fontStr
        offCtx.textAlign = 'center'
        offCtx.translate(cx, 0)
        offCtx.scale(cosA || 0.01, 1)
        offCtx.fillStyle = 'white'
        offCtx.fillText('f', 0, cy)
        offCtx.restore()
        offCtx.globalCompositeOperation = 'source-over'

        ctx.drawImage(off, 0, 0)
      }
    }

    init()

    if (reduced) {
      ctx.font = fontStr
      ctx.textAlign = 'center'
      ctx.shadowColor = `rgba(${R},${G},${B},0.45)`
      ctx.shadowBlur = 18
      ctx.fillStyle = `rgba(${R},${G},${B},0.38)`
      ctx.fillText('f', cx, cy)
      ctx.shadowBlur = 0
    } else {
      animId = requestAnimationFrame(drawFrame)
    }

    let scrollRaf = 0
    const onScroll = () => {
      scrollRaf = requestAnimationFrame(() => {
        if (canvas) canvas.style.transform = `translateY(${window.scrollY * 0.18}px)`
      })
    }
    window.addEventListener('scroll', onScroll, { passive: true })

    const ro = new ResizeObserver(init)
    ro.observe(canvas)

    return () => {
      cancelAnimationFrame(animId)
      cancelAnimationFrame(scrollRaf)
      ro.disconnect()
      window.removeEventListener('scroll', onScroll)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="pointer-events-none select-none absolute inset-0 w-full h-full"
      style={{ zIndex: 0 }}
      aria-hidden="true"
    />
  )
}
