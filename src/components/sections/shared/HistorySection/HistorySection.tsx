'use client'

import { useTranslations } from 'next-intl'
import Image from 'next/image'
import { Link } from '@/i18n/navigation'
import AnimatedSection from '@/components/ui/AnimatedSection/AnimatedSection'
import styles from './HistorySection.module.css'

interface HistorySectionProps {
  imageFirst?: boolean
  showCta?: boolean
}

export default function HistorySection({ imageFirst = false, showCta = false }: HistorySectionProps) {
  const t = useTranslations('common')

  return (
    <section className={styles.history}>
      <div className={`${styles.container} ${imageFirst ? styles.reversed : ''}`}>
        <AnimatedSection className={styles.content}>
          <span className={styles.eyebrow}>{t('history.eyebrow')}</span>
          <h2 className={styles.title}>
            {t('history.title')}
          </h2>
          <div className={styles.divider} />
          <p className={styles.text}>
            {t('history.text1')}
          </p>
          <p className={styles.text}>
            {t('history.text2')}
          </p>
          {showCta && (
            <Link href="/bodega" className={styles.cta}>
              {t('history.cta')}
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </Link>
          )}
        </AnimatedSection>
        <AnimatedSection className={styles.imageSection} delay={200}>
          <div className={styles.imageWrapper}>
            <Image
              src="/001-1024x514-1.jpg"
              alt={t('altTexts.sunsetVineyard')}
              fill
              className={styles.image}
              sizes="(max-width: 768px) 100vw, 45vw"
            />
            <div className={styles.imageClip} />
          </div>
          <div className={styles.goldLine} />
        </AnimatedSection>
      </div>
    </section>
  )
}
