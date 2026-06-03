'use client'

import { useTranslations } from 'next-intl'
import Image from 'next/image'
import styles from './PageHero.module.css'

interface PageHeroProps {
  title: string
  highlight?: string
  subtitle?: string
  imageUrl: string
  imageAlt: string
}

export default function PageHero({
  title,
  highlight,
  subtitle,
  imageUrl,
  imageAlt,
}: PageHeroProps) {
  return (
    <section className={styles.hero}>
      <div className={styles.imageWrapper}>
        <Image
          src={imageUrl}
          alt={imageAlt}
          fill
          priority
          className={styles.image}
          sizes="100vw"
        />
        <div className={styles.overlay} />
      </div>
      <div className={styles.content}>
        <span className={styles.eyebrow}>Andeluna</span>
        <h1 className={styles.title}>
          {title}
          {highlight && <em> {highlight}</em>}
        </h1>
        {subtitle && <p className={styles.subtitle}>{subtitle}</p>}
      </div>
    </section>
  )
}
