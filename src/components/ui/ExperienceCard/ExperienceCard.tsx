'use client'

import Image from 'next/image'
import { useTranslations } from 'next-intl'
import { Experience } from '@/types/experience'
import styles from './ExperienceCard.module.css'

interface ExperienceCardProps {
  experience: Experience
}

export default function ExperienceCard({ experience }: ExperienceCardProps) {
  const t = useTranslations('common')

  return (
    <article className={styles.card}>
      <div className={styles.imageWrapper}>
        <Image
          src={experience.imageUrl}
          alt={experience.title}
          fill
          className={styles.image}
          sizes="(max-width: 768px) 100vw, 50vw"
        />
        <div className={styles.overlay} />
      </div>
      <div className={styles.content}>
        <span className={styles.duration}>{experience.duration}</span>
        <h3 className={styles.title}>{experience.title}</h3>
        <p className={styles.description}>{experience.description}</p>
        <div className={styles.highlights}>
          {experience.highlights.map((highlight, i) => (
            <span key={i} className={styles.highlight}>
              {highlight}
            </span>
          ))}
        </div>
        <a
          href={experience.bookingUrl}
          target="_blank"
          rel="noopener noreferrer"
          className={styles.cta}
        >
          {t('ui.reserve')}
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M5 12h14M12 5l7 7-7 7" />
          </svg>
        </a>
      </div>
    </article>
  )
}
