'use client'

import { useTranslations } from 'next-intl'
import AnimatedSection from '@/components/ui/AnimatedSection/AnimatedSection'
import styles from './AwardsSection.module.css'

const icons = [
  <svg key="star" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.2">
    <path d="M24 4l6 12 13 2-9.5 9 2.5 13L24 33l-12 7 2.5-13L5 18l13-2z" />
  </svg>,
  <svg key="medal" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.2">
    <circle cx="24" cy="20" r="12" />
    <path d="M18 32h12v4H18z" />
    <path d="M20 36h8v4H20z" />
    <path d="M16 20h16" />
    <path d="M24 8v-4M14 12l-3-3M34 12l3-3" />
  </svg>,
  <svg key="report" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.2">
    <path d="M24 4v40M16 8l8 4 8-4M12 16h24M14 24h20M16 32h16" />
    <circle cx="24" cy="42" r="2" fill="currentColor" stroke="none" />
  </svg>,
]

export default function AwardsSection() {
  const t = useTranslations('common')

  const awards = [
    { title: t('awards.luxury'), description: t('awards.luxurySource'), icon: icons[0] },
    { title: t('awards.decanter'), description: t('awards.decanterSource'), icon: icons[1] },
    { title: t('awards.timAtkin'), description: t('awards.timAtkinSource'), icon: icons[2] },
  ]

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <AnimatedSection>
          <span className={styles.eyebrow}>{t('awards.eyebrow')}</span>
          <h2 className={styles.title}>
            {t('awards.title')}
          </h2>
        </AnimatedSection>
        <div className={styles.grid}>
          {awards.map((award, index) => (
            <AnimatedSection key={index} delay={index * 150}>
              <div className={styles.card}>
                <div className={styles.iconWrap}>{award.icon}</div>
                <h3 className={styles.cardTitle}>{award.title}</h3>
                <p className={styles.cardDescription}>{award.description}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  )
}
