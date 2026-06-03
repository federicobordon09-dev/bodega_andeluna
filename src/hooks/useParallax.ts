'use client'

import { useState, useEffect, useCallback } from 'react'

export function useParallax(speed: number = 0.3) {
  const [offset, setOffset] = useState(0)

  const handleScroll = useCallback(() => {
    requestAnimationFrame(() => {
      setOffset(window.scrollY * speed)
    })
  }, [speed])

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [handleScroll])

  return offset
}
