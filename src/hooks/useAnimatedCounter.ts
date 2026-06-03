'use client'

import { useState, useEffect, useRef } from 'react'

export function useAnimatedCounter(
  end: number,
  duration: number = 2000,
  prefix: string = '',
  suffix: string = ''
) {
  const [displayValue, setDisplayValue] = useState(`${prefix}0${suffix}`)
  const ref = useRef<HTMLSpanElement>(null)
  const hasAnimated = useRef(false)

  useEffect(() => {
    const element = ref.current
    if (!element) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true
          animateCount()
          observer.unobserve(element)
        }
      },
      { threshold: 0.5 }
    )

    observer.observe(element)
    return () => observer.disconnect()
  }, [end, duration, prefix, suffix])

  function animateCount() {
    const startTime = performance.now()

    function update(currentTime: number) {
      const elapsed = currentTime - startTime
      const progress = Math.min(elapsed / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3)
      const current = Math.floor(eased * end)

      if (end >= 1000) {
        setDisplayValue(`${prefix}${current.toLocaleString('es-AR')}${suffix}`)
      } else {
        setDisplayValue(`${prefix}${current}${suffix}`)
      }

      if (progress < 1) {
        requestAnimationFrame(update)
      }
    }

    requestAnimationFrame(update)
  }

  return { displayValue, ref }
}
