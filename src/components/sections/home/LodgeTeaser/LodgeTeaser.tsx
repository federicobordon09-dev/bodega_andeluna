'use client'

import { useTranslations } from 'next-intl'
import Image from 'next/image'
import AnimatedSection from '@/components/ui/AnimatedSection/AnimatedSection'
import styles from './LodgeTeaser.module.css'

export default function LodgeTeaser() {
  const t = useTranslations('common')

  return (
    <section className={styles.section}>
      <AnimatedSection>
        <div className={styles.wrapper}>
          <div className={styles.imageSide}>
            <Image
              src="/26318749305c52ba95fe2ad274e95dadb25be83024a.jpg"
              alt="Andeluna Winery Lodge"
              fill
              className={styles.image}
              sizes="(max-width: 768px) 100vw, 50vw"
            />
            <div className={styles.imageOverlay} />
          </div>
          <div className={styles.contentSide}>
            <span className={styles.eyebrow}>{t('lodgeTeaser.eyebrow')}</span>
            <h2 className={styles.title}>
              {t('lodgeTeaser.title')}
            </h2>
            <p className={styles.text}>
              {t('lodgeTeaser.text')}
            </p>
            <div className={styles.rating}>
              <span className={styles.ratingValue}>9.6</span>
              <span className={styles.ratingLabel}>/ 10</span>
            </div>
            <a
              href="https://andelunawinerylodge.com"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.cta}
            >
              {t('lodgeTeaser.cta')}
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </a>
          </div>
        </div>
      </AnimatedSection>
    </section>
  )
}
