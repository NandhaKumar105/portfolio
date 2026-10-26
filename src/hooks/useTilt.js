import { useCallback } from 'react'

// Pointer-driven 3D tilt. Writes --tx/--ty (degrees) and --mx/--my (glare
// position) on the element; CSS turns them into a transform. Mouse only, and
// skipped when the visitor prefers reduced motion.
export default function useTilt(max = 6) {
  const onPointerMove = useCallback(
    (e) => {
      if (e.pointerType !== 'mouse') return
      if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
      const el = e.currentTarget
      const r = el.getBoundingClientRect()
      const px = (e.clientX - r.left) / r.width
      const py = (e.clientY - r.top) / r.height
      el.classList.add('is-tilting')
      el.style.setProperty('--ty', `${((px - 0.5) * 2 * max).toFixed(2)}deg`)
      el.style.setProperty('--tx', `${(-(py - 0.5) * 2 * max).toFixed(2)}deg`)
      el.style.setProperty('--mx', `${(px * 100).toFixed(1)}%`)
      el.style.setProperty('--my', `${(py * 100).toFixed(1)}%`)
    },
    [max],
  )

  const onPointerLeave = useCallback((e) => {
    const el = e.currentTarget
    el.classList.remove('is-tilting')
    el.style.setProperty('--tx', '0deg')
    el.style.setProperty('--ty', '0deg')
  }, [])

  return { onPointerMove, onPointerLeave }
}
