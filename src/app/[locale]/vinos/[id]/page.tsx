'use client'

import { useTranslations } from 'next-intl'
import { useParams } from 'next/navigation'
import Image from 'next/image'
import { Link } from '@/i18n/navigation'
import AnimatedSection from '@/components/ui/AnimatedSection/AnimatedSection'
import { findWineById } from '@/data/wines'
import type { WineScore } from '@/types/wine'
import styles from './page.module.css'

export default function WineDetailPage() {
  const params = useParams()
  const t = useTranslations('common')
  const id = params.id as string
  const result = findWineById(id)

  if (!result) {
    return (
      <section className={styles.notFound}>
        <div className={styles.container}>
          <h1 className={styles.notFoundTitle}>{t('wines.title')}</h1>
          <p className={styles.notFoundText}>{t('wineDetails.notFound')}</p>
          <Link href="/vinos" className={styles.backLink}>
            ← {t('wines.viewAll')}
          </Link>
        </div>
      </section>
    )
  }

  const { wine, lineId } = result
  const lineName = lineId === 'central' ? t('wines.lineCentral') : t('wines.especial')

  // Get translations from wineDetails
  let details: Record<string, unknown> = {}
  try {
    details = t.raw(`wineDetails.${id}`) as Record<string, unknown>
  } catch {
    // fallback to wine data from wines.ts
  }

  const philosophy = (details.philosophy as string) || wine.philosophy || ''
  const vineyard = (details.vineyard as string) || wine.vineyard || ''
  const vinification = (details.vinification as string) || wine.vinification || ''
  const tastingNotes = (details.tastingNotes as string) || wine.tastingNotes || ''
  const scores = (details.scores as WineScore[]) || wine.scores || []
  const winemaker = (details.winemaker as string) || wine.winemaker || ''
  const serveTemp = (details.serveTemp as string) || wine.serveTemp || ''
  const aging = (details.aging as string) || wine.aging || ''

  return (
    <>
      {/* Hero */}
      <section className={styles.hero}>
        <div className={styles.heroBg}>
          <Image
            src="/G-009.jpg"
            alt={wine.name}
            fill
            priority
            className={styles.heroBgImage}
            sizes="100vw"
          />
          <div className={styles.heroOverlay} />
        </div>
        <div className={styles.heroContent}>
          <AnimatedSection>
            <span className={styles.eyebrow}>{lineName}</span>
            <h1 className={styles.title}>{wine.name}</h1>
            {wine.score && (
              <div className={styles.heroScore}>
                <span className={styles.heroScoreNumber}>{wine.score}</span>
                <span className={styles.heroScoreSource}>{wine.scoreSource}</span>
              </div>
            )}
          </AnimatedSection>
        </div>
      </section>

      {/* Bottle + Info */}
      <section className={styles.detail}>
        <div className={styles.container}>
          <div className={styles.detailGrid}>
            <AnimatedSection>
              <div className={styles.bottleWrap}>
                <Image
                  src={wine.image}
                  alt={wine.name}
                  width={200}
                  height={600}
                  className={styles.bottleImage}
                  priority
                />
              </div>
            </AnimatedSection>

            <AnimatedSection delay={100}>
              <div className={styles.info}>
                <div className={styles.varietals}>
                  {wine.varietals.map((v) => (
                    <span key={v} className={styles.varietal}>{v}</span>
                  ))}
                </div>
                <h2 className={styles.infoTitle}>{wine.name}</h2>

                {philosophy && (
                  <p className={styles.philosophy}>{philosophy}</p>
                )}

                <div className={styles.actions}>
                  <Link href="/vinos" className={styles.backButton}>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M19 12H5M12 19l-7-7 7-7" />
                    </svg>
                    {t('wines.viewAll')}
                  </Link>
                  <a
                    href="https://wosbooking.com/mro/andeluna"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.reserveButton}
                  >
                    {t('wines.tastingButton')}
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                  </a>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Detailed Info Sections */}
      <section className={styles.sections}>
        <div className={styles.container}>

          {vineyard && (
            <AnimatedSection>
              <div className={styles.sectionBlock}>
                <span className={styles.sectionEyebrow}>{t('wineDetails.vineyard')}</span>
                <h3 className={styles.sectionTitle}>{t('wineDetails.vineyardTitle')}</h3>
                <p className={styles.sectionText}>{vineyard}</p>
              </div>
            </AnimatedSection>
          )}

          {vinification && (
            <AnimatedSection>
              <div className={styles.sectionBlock}>
                <span className={styles.sectionEyebrow}>{t('wineDetails.vinification')}</span>
                <h3 className={styles.sectionTitle}>{t('wineDetails.vinificationTitle')}</h3>
                <p className={styles.sectionText}>{vinification}</p>
              </div>
            </AnimatedSection>
          )}

          {tastingNotes && (
            <AnimatedSection>
              <div className={styles.sectionBlock}>
                <span className={styles.sectionEyebrow}>{t('wineDetails.tastingNotes')}</span>
                <h3 className={styles.sectionTitle}>{t('wineDetails.tastingNotesTitle')}</h3>
                <p className={styles.sectionText}>{tastingNotes}</p>
                {serveTemp && (
                  <p className={styles.serveTemp}>{t('wineDetails.serveAt')} {serveTemp}. {aging}</p>
                )}
              </div>
            </AnimatedSection>
          )}

          {winemaker && (
            <AnimatedSection>
              <div className={styles.sectionBlock}>
                <span className={styles.sectionEyebrow}>{t('wineDetails.winemaker')}</span>
                <h3 className={styles.sectionTitle}>{t('wineDetails.winemakerTitle')}</h3>
                <p className={styles.sectionText}>{winemaker}</p>
              </div>
            </AnimatedSection>
          )}

          {scores.length > 0 && (
            <AnimatedSection>
              <div className={styles.sectionBlock}>
                <span className={styles.sectionEyebrow}>{t('wineDetails.scores')}</span>
                <h3 className={styles.sectionTitle}>{t('wineDetails.scoresTitle')}</h3>
                <div className={styles.scoresList}>
                  {scores.map((s, i) => (
                    <div key={i} className={styles.scoreRow}>
                      <span className={styles.scoreCritic}>{s.critic}</span>
                      <span className={styles.scoreDivider}>|</span>
                      <span className={styles.scoreVintage}>{t('wineDetails.vintage')} {s.vintage}</span>
                      <span className={styles.scoreDivider}>|</span>
                      <span className={styles.scoreValue}>{s.score} {t('wineDetails.pts')}</span>
                    </div>
                  ))}
                </div>
              </div>
            </AnimatedSection>
          )}

        </div>
      </section>
    </>
  )
}
