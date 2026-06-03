'use client'
import { useTranslations } from 'next-intl'
import Image from 'next/image'
import PageHero from '@/components/sections/PageHero/PageHero'
import AnimatedSection from '@/components/ui/AnimatedSection/AnimatedSection'
import HistorySection from '@/components/sections/shared/HistorySection/HistorySection'
import styles from './page.module.css'

export default function BodegaPage() {
  const t = useTranslations('common')
  return (
    <>
      <PageHero
        title={t('winery.title')}
        highlight="Andeluna"
        subtitle={t('winery.subtitle')}
        imageUrl="/BODEGA-ANDELUNA-NEVADA.jpg"
        imageAlt={t('altTexts.bodegaHero')}
      />

      <HistorySection imageFirst />

      <section className={styles.terroir}>
        <div className={styles.container}>
          <AnimatedSection>
            <span className={styles.eyebrow}>{t('winery.terroirEyebrow')}</span>
            <h2 className={styles.sectionTitle}>
              {t('winery.terroirTitle')}
            </h2>
          </AnimatedSection>
          <div className={styles.terroirGrid}>
            <AnimatedSection>
              <div className={styles.terroirImage}>
                <Image
                  src="/terruno-contenido-1-505x538.png"
                  alt={t('altTexts.terroir')}
                  fill
                  className={styles.image}
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            </AnimatedSection>
            <AnimatedSection delay={200}>
              <div className={styles.terroirContent}>
                <p className={styles.text}>
                  {t('winery.terroirText')}
                </p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      <section className={styles.philosophy}>
        <div className={styles.container}>
          <AnimatedSection>
            <span className={styles.eyebrow}>{t('winery.philosophyEyebrow')}</span>
            <h2 className={styles.sectionTitle}>
              {t('winery.philosophyTitle')}
            </h2>
          </AnimatedSection>
          <div className={styles.philosophyGrid}>
            <AnimatedSection>
              <div className={styles.philosophyContent}>
                <p className={styles.text}>
                  {t('winery.philosophyText')}
                </p>
              </div>
            </AnimatedSection>
            <AnimatedSection delay={200}>
              <div className={styles.philosophyImage}>
                <Image
                  src="/G-009.jpg"
                  alt={t('altTexts.barrels')}
                  fill
                  className={styles.image}
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      <section className={styles.architecture}>
        <div className={styles.container}>
          <AnimatedSection>
            <span className={styles.eyebrow}>{t('winery.architectureEyebrow')}</span>
            <h2 className={styles.sectionTitle}>
              {t('winery.architectureTitle')}
            </h2>
          </AnimatedSection>
          <div className={styles.archGrid}>
            <AnimatedSection>
              <div className={styles.archImage}>
                <Image
                  src="/somos-contenido-4-505x538.png"
                  alt={t('altTexts.bodegaExterior')}
                  fill
                  className={styles.image}
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            </AnimatedSection>
            <AnimatedSection delay={200}>
              <div className={styles.archContent}>
                <p className={styles.text}>
                  {t('winery.architectureText')}
                </p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      <section className={styles.team}>
        <div className={styles.container}>
          <AnimatedSection>
            <span className={styles.eyebrow}>{t('winery.teamEyebrow')}</span>
            <h2 className={styles.sectionTitle}>
              {t('winery.teamTitle')}
            </h2>
          </AnimatedSection>
          <div className={styles.teamGrid}>
            <AnimatedSection>
              <div className={styles.teamImage}>
                <Image
                  src="/G-0023.jpg"
                  alt={t('altTexts.team')}
                  fill
                  className={styles.image}
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>
            </AnimatedSection>
            <AnimatedSection delay={100}>
              <div className={styles.teamImage}>
                <Image
                  src="/G-0027.jpg"
                  alt={t('altTexts.harvest')}
                  fill
                  className={styles.image}
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>
            </AnimatedSection>
            <AnimatedSection delay={200}>
              <div className={styles.teamImage}>
                <Image
                  src="/IMG_1995.jpg"
                  alt={t('altTexts.mistyVineyard')}
                  fill
                  className={styles.image}
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      <section className={styles.iso}>
        <div className={styles.containerSmall}>
          <AnimatedSection>
            <div className={styles.isoCard}>
              <Image
                src="/bodega-contenido-normasISO.jpg"
                alt={t('altTexts.iso')}
                width={200}
                height={100}
                className={styles.isoImage}
              />
              <p className={styles.isoText}>
                {t('winery.isoText')}
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <section className={styles.mapSection}>
        <div className={styles.container}>
          <AnimatedSection>
            <span className={styles.eyebrow}>{t('winery.mapEyebrow')}</span>
            <h2 className={styles.sectionTitle}>
              {t('winery.mapTitle')} <em>{t('winery.mapHighlight')}</em>
            </h2>
          </AnimatedSection>
          <AnimatedSection delay={100}>
            <div className={styles.mapWrapper}>
              <iframe
                src="https://www.google.com/maps?q=Bodega+Andeluna+RP89+Tupungato+Mendoza+Argentina&output=embed"
                width="100%"
                height="450"
                style={{ border: 0, filter: 'grayscale(0.4) contrast(1.05)' }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title={t('altTexts.mapTitle')}
              />
            </div>
            <div className={styles.mapInfo}>
              <p className={styles.mapAddress}>RP89 Km 11, M5561 Tupungato, Mendoza</p>
              <a
                href="https://maps.app.goo.gl/AJEhHEHcZiD4zBYY9"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.mapCta}
              >
                {t('winery.mapButton')}
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6M15 3h6v6M10 14L21 3" />
                </svg>
              </a>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  )
}
