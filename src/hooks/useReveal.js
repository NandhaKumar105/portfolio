import { useEffect, useRef } from 'react'

// Toggles `.is-visible` as the element enters/leaves the viewport, so the
// slide-in replays every time the user scrolls to it.
export default function useReveal() {
  const ref = useRef(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return undefined
    if (!('IntersectionObserver' in window)) {
      el.classList.add('is-visible')
      return undefined
    }
    const io = new IntersectionObserver(
      ([entry]) => el.classList.toggle('is-visible', entry.isIntersecting),
      { threshold: 0.1, rootMargin: '0px 0px -6% 0px' },
    )
    io.observe(el)
    return () => io.disconnect()
  }, [])

  return ref
}
