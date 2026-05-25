'use client'
import { useEffect, useRef } from 'react'

export function HeroF() {
  const wrapRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    const wrap = wrapRef.current
    if (!wrap) return

    let raf: number
    const onScroll = () => {
      raf = requestAnimationFrame(() => {
        if (wrap) wrap.style.transform = `translateY(${window.scrollY * 0.18}px)`
      })
    }

    window.addEventListener('scroll', onScroll, { passive: true })
    return () => {
      window.removeEventListener('scroll', onScroll)
      cancelAnimationFrame(raf)
    }
  }, [])

  return (
    <div
      ref={wrapRef}
      className="pointer-events-none select-none absolute inset-0 flex items-center justify-center"
      aria-hidden="true"
    >
      {/* Perspective wrapper gives the 3D depth */}
      <div style={{ perspective: '900px', perspectiveOrigin: '50% 50%' }}>
        <span
          className="f-rotate-3d font-serif italic leading-none text-white/[0.055]"
          style={{ fontSize: 'clamp(260px, 52vw, 680px)' }}
        >
          f
        </span>
      </div>
    </div>
  )
}
