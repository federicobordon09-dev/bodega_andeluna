'use client'

import { useTranslations } from 'next-intl'
import { useParams } from 'next/navigation'
import Image from 'next/image'
import { Link } from '@/i18n/navigation'
import AnimatedSection from '@/components/ui/AnimatedSection/AnimatedSection'
import { wineLines } from '@/data/wines'
import type { Wine } from '@/types/wine'
import styles from './page.module.css'

function findWine(id: string): { wine: Wine; lineId: string; subLineId: string } | null {
  for (const line of wineLines) {
    for (const sub of line.subLines) {
      const wine = sub.wines.find((w) => w.id === id)
      if (wine) return { wine, lineId: line.id, subLineId: sub.id }
    }
  }
  return null
}

function getWineDescription(id: string, t: ReturnType<typeof useTranslations>): string {
  const key = `wineDescriptions.${id.replace(/-/g, '')}`
  try {
    return t(key)
  } catch {
    return ''
  }
}

export default function WineDetailPage() {
  const params = useParams()
  const t = useTranslations('common')
  const id = params.id as string
  const result = findWine(id)

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
  const description = getWineDescription(wine.id, t) || wine.description

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
              <div className={styles.score}>
                <span className={styles.scoreNumber}>{wine.score}</span>
                <span className={styles.scoreSource}>{wine.scoreSource}</span>
              </div>
            )}
          </AnimatedSection>
        </div>
      </section>

      {/* Detail */}
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
                <span className={styles.eyebrow}>{subLineId}</span>
                <h2 className={styles.infoTitle}>{wine.name}</h2>

                <div className={styles.varietals}>
                  {wine.varietals.map((v) => (
                    <span key={v} className={styles.varietal}>{v}</span>
                  ))}
                </div>

                <p className={styles.description}>{description}</p>

                {wine.award && (
                  <div className={styles.award}>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M12 15l-2 5l9-13h-5l2-5-9 13h5z" />
                    </svg>
                    <span>{wine.award}</span>
                  </div>
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
    </>
  )
}
