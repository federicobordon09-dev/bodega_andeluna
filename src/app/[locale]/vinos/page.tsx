'use client'
import { useTranslations } from 'next-intl'
import Image from 'next/image'
import PageHero from '@/components/sections/PageHero/PageHero'
import WineCard from '@/components/ui/WineCard/WineCard'
import AnimatedSection from '@/components/ui/AnimatedSection/AnimatedSection'
import { wineLines } from '@/data/wines'
import styles from './page.module.css'

export default function VinosPage() {
  const t = useTranslations('common')
  const centralLine = wineLines.find((l) => l.id === 'central')!
  const especialLine = wineLines.find((l) => l.id === 'especial')!

  return (
    <>
      <PageHero
        title={t('wines.title')}
        highlight={t('wines.subtitle').split(' ')[1]}
        subtitle={t('wines.subtitle')}
        imageUrl="/G-009.jpg"
        imageAlt={t('altTexts.barrels')}
      />

      {/* Intro */}
      <section className={styles.intro}>
        <div className={styles.container}>
          <AnimatedSection>
            <div className={styles.introGrid}>
              <div className={styles.introImage}>
                <Image
                  src="/bodega-contenido-3-505x538.png"
                  alt={t('altTexts.barrelsDetail')}
                  fill
                  className={styles.image}
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
              <div className={styles.introContent}>
                <span className={styles.eyebrow}>{t('wines.introEyebrow')}</span>
                <h2 className={styles.introTitle}>
                  {t('wines.introTitle')} <em>{t('wines.introHighlight')}</em>
                </h2>
                <p className={styles.introText}>
                  {t('wines.introText')}
                </p>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Línea Central */}
      <section className={styles.mainLine}>
        <div className={styles.container}>
          <AnimatedSection>
            <div className={styles.lineHeader}>
              <span className={styles.eyebrow}>{t('wines.lineCentral')}</span>
              <h2 className={styles.lineTitle}>
                {t('wines.collectionTitle')} <em>{t('wines.collectionHighlight')}</em>
              </h2>
            </div>
          </AnimatedSection>

          {centralLine.subLines.map((subLine) => (
            <AnimatedSection key={subLine.id}>
              <div className={styles.subLine}>
                <div className={styles.subLineHeader}>
                  <h3 className={styles.subLineTitle}>{subLine.name}</h3>
                  <span className={styles.wineCount}>{subLine.wines.length} {t('wines.wineCount')}</span>
                </div>
                <div className={styles.wineGrid}>
                  {subLine.wines.map((wine) => (
                    <WineCard key={wine.id} wine={wine} />
                  ))}
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </section>

      {/* Edición Especial */}
      <section className={styles.specialLine}>
        <div className={styles.container}>
          <AnimatedSection>
            <div className={styles.lineHeader}>
              <span className={styles.eyebrow}>{t('wines.especial')}</span>
              <h2 className={styles.lineTitle}>
                {t('wines.limitedTitle')} <em>{t('wines.limitedHighlight')}</em>
              </h2>
            </div>
          </AnimatedSection>

          {especialLine.subLines.map((subLine) => (
            <AnimatedSection key={subLine.id}>
              <div className={styles.wineGrid}>
                {subLine.wines.map((wine) => (
                  <WineCard key={wine.id} wine={wine} />
                ))}
              </div>
            </AnimatedSection>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className={styles.ctaSection}>
        <div className={styles.containerSmall}>
          <AnimatedSection>
            <div className={styles.ctaCard}>
              <span className={styles.eyebrow}>{t('wines.tastingEyebrow')}</span>
              <h2 className={styles.ctaTitle}>
                {t('wines.tastingTitle')} <em>{t('wines.tastingHighlight')}</em>
              </h2>
              <p className={styles.ctaText}>
                {t('wines.tastingText')}
              </p>
              <a
                href="https://wosbooking.com/mro/andeluna"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.cta}
              >
                {t('wines.tastingButton')}
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </a>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  )
}
