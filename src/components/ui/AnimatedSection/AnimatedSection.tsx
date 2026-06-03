'use client'

import { useEffect, useRef, ReactNode } from 'react'
import styles from './AnimatedSection.module.css'

interface AnimatedSectionProps {
  children: ReactNode
  className?: string
  delay?: number
}

export default function AnimatedSection({
  children,
  className = '',
  delay = 0,
}: AnimatedSectionProps) {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const element = ref.current
    if (!element) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            element.classList.add(styles.visible)
          }, delay)
          observer.unobserve(element)
        }
      },
      { threshold: 0.1 }
    )

    observer.observe(element)
    return () => observer.disconnect()
  }, [delay])

  return (
    <div ref={ref} className={`${styles.animated} ${className}`}>
      {children}
    </div>
  )
}
