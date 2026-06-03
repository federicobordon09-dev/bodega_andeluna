'use client'

import { useTranslations } from 'next-intl'
import { Link } from '@/i18n/navigation'
import AnimatedSection from '@/components/ui/AnimatedSection/AnimatedSection'
import ExperienceCard from '@/components/ui/ExperienceCard/ExperienceCard'
import { experiences } from '@/data/experiences'
import styles from './FeaturedExperiences.module.css'

const featuredExperiences = experiences.slice(0, 4)

export default function FeaturedExperiences() {
  const t = useTranslations('common')

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <AnimatedSection>
          <span className={styles.eyebrow}>{t('featuredExperiences.eyebrow')}</span>
          <h2 className={styles.title}>
            {t('featuredExperiences.title')} <em>{t('featuredExperiences.live')}</em>
          </h2>
        </AnimatedSection>
        <div className={styles.grid}>
          {featuredExperiences.map((experience, index) => (
            <AnimatedSection key={experience.id} delay={index * 100}>
              <ExperienceCard experience={experience} />
            </AnimatedSection>
          ))}
        </div>
        <AnimatedSection>
          <div className={styles.ctaWrap}>
            <Link href="/experiencias" className={styles.cta}>
              {t('featuredExperiences.viewAll')}
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </AnimatedSection>
      </div>
    </section>
  )
}
