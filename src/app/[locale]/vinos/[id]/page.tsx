'use client'

import { useTranslations } from 'next-intl'
import { useParams } from 'next/navigation'
import Image from 'next/image'
import { Link } from '@/i18n/navigation'
import AnimatedSection from '@/components/ui/AnimatedSection/AnimatedSection'
import { findWineById } from '@/data/wines'
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
          <p className={styles.notFoundText}>Vino no encontrado.</p>
          <Link href="/vinos" className={styles.backLink}>
            ← {t('wines.viewAll')}
          </Link>
        </div>
      </section>
    )
  }

  const { wine, lineId, subLineId } = result
  const lineName = lineId === 'central' ? t('wines.lineCentral') : t('wines.especial')

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

                {wine.philosophy && (
                  <p className={styles.philosophy}>{wine.philosophy}</p>
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

          {/* Vineyard */}
          {wine.vineyard && (
            <AnimatedSection>
              <div className={styles.sectionBlock}>
                <span className={styles.sectionEyebrow}>Viñedos</span>
                <h3 className={styles.sectionTitle}>Nuestros Viñedos</h3>
                <p className={styles.sectionText}>{wine.vineyard}</p>
              </div>
            </AnimatedSection>
          )}

          {/* Vinification */}
          {wine.vinification && (
            <AnimatedSection>
              <div className={styles.sectionBlock}>
                <span className={styles.sectionEyebrow}>Vinificación</span>
                <h3 className={styles.sectionTitle}>Vinificación</h3>
                <p className={styles.sectionText}>{wine.vinification}</p>
              </div>
            </AnimatedSection>
          )}

          {/* Tasting Notes */}
          {wine.tastingNotes && (
            <AnimatedSection>
              <div className={styles.sectionBlock}>
                <span className={styles.sectionEyebrow}>Notas de Cata</span>
                <h3 className={styles.sectionTitle}>Notas de Cata</h3>
                <p className={styles.sectionText}>{wine.tastingNotes}</p>
                {wine.serveTemp && (
                  <p className={styles.serveTemp}>Servir a {wine.serveTemp}. {wine.aging || ''}</p>
                )}
              </div>
            </AnimatedSection>
          )}

          {/* Winemaker */}
          {wine.winemaker && (
            <AnimatedSection>
              <div className={styles.sectionBlock}>
                <span className={styles.sectionEyebrow}>Enólogo jefe</span>
                <h3 className={styles.sectionTitle}>Enólogo jefe</h3>
                <p className={styles.sectionText}>{wine.winemaker}</p>
              </div>
            </AnimatedSection>
          )}

          {/* Scores */}
          {wine.scores && wine.scores.length > 0 && (
            <AnimatedSection>
              <div className={styles.sectionBlock}>
                <span className={styles.sectionEyebrow}>Puntajes</span>
                <h3 className={styles.sectionTitle}>Puntajes</h3>
                <div className={styles.scoresList}>
                  {wine.scores.map((s, i) => (
                    <div key={i} className={styles.scoreRow}>
                      <span className={styles.scoreCritic}>{s.critic}</span>
                      <span className={styles.scoreDivider}>|</span>
                      <span className={styles.scoreVintage}>Cosecha {s.vintage}</span>
                      <span className={styles.scoreDivider}>|</span>
                      <span className={styles.scoreValue}>{s.score} pts.</span>
                    </div>
                  ))}
                </div>
              </div>
            </AnimatedSection>
          )}

          {/* Single score fallback */}
          {!wine.scores && wine.score && (
            <AnimatedSection>
              <div className={styles.sectionBlock}>
                <span className={styles.sectionEyebrow}>Puntajes</span>
                <h3 className={styles.sectionTitle}>Puntajes</h3>
                <div className={styles.scoresList}>
                  <div className={styles.scoreRow}>
                    <span className={styles.scoreCritic}>{wine.scoreSource}</span>
                    <span className={styles.scoreDivider}>|</span>
                    <span className={styles.scoreValue}>{wine.score} pts.</span>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          )}

        </div>
      </section>
    </>
  )
}
