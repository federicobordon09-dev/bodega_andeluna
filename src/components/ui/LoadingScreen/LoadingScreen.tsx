'use client'

import { useEffect, useState } from 'react'
import styles from './LoadingScreen.module.css'

export default function LoadingScreen() {
  const [visible, setVisible] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => setVisible(false), 600)
    return () => clearTimeout(timer)
  }, [])

  if (!visible) return null

  return (
    <div className={`${styles.loader} ${!visible ? styles.hidden : ''}`}>
      <div className={styles.spinner}>
        <div className={styles.ring} />
        <div className={styles.ringBg} />
      </div>
    </div>
  )
}
