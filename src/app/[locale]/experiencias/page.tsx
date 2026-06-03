'use client'
import { useTranslations } from 'next-intl'
import Image from 'next/image'
import PageHero from '@/components/sections/PageHero/PageHero'
import AnimatedSection from '@/components/ui/AnimatedSection/AnimatedSection'
import CtaBanner from '@/components/sections/shared/CtaBanner/CtaBanner'
import styles from './page.module.css'

export default function ExperienciasPage() {
  const t = useTranslations('common')
  const experiencesList = t.raw('experiences.list') as Array<{
    slug: string
    title: string
    duration: string
    description: string
    highlights: string[]
    imageUrl: string
  }>
  const altTexts = t.raw('altTexts') as Record<string, string>

  return (
    <>
      <PageHero
        title={t('pageHero.experiences.title')}
        highlight="Andeluna"
        subtitle={t('pageHero.experiences.subtitle')}
        imageUrl="/DSC_8926.jpg"
        imageAlt={altTexts.experiencesHero}
      />

      <section className={styles.listSection}>
        <div className={styles.container}>
          {experiencesList.map((experience, index) => (
            <AnimatedSection key={experience.slug}>
              <div className={`${styles.expRow} ${index % 2 !== 0 ? styles.reversed : ''}`}>
                <div className={styles.expImage}>
                  <Image
                    src={experience.imageUrl}
                    alt={altTexts[`experience-${experience.slug}`] || experience.title}
                    fill
                    className={styles.image}
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  <div className={styles.imageOverlay} />
                </div>
                <div className={styles.expContent}>
                  <span className={styles.duration}>{experience.duration}</span>
                  <h3 className={styles.expTitle}>{experience.title}</h3>
                  <p className={styles.expDescription}>{experience.description}</p>
                  <div className={styles.highlights}>
                    {experience.highlights.map((highlight, i) => (
                      <span key={i} className={styles.highlight}>
                        {highlight}
                      </span>
                    ))}
                  </div>
                  <a
                    href="https://wosbooking.com/mro/andeluna"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.cta}
                  >
                    {t('experiences.reserve')}
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                  </a>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </section>

      <CtaBanner
        title={t('cta.title')}
        highlight={t('cta.highlight')}
        text={t('cta.text')}
        ctaLabel={t('cta.button')}
        ctaHref="https://wosbooking.com/mro/andeluna"
        external
      />
    </>
  )
}
