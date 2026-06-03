'use client'

import { useCallback } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'
import Image from 'next/image'
import { Link } from '@/i18n/navigation'
import { useTranslations } from 'next-intl'
import { allWines } from '@/data/wines'
import AnimatedSection from '@/components/ui/AnimatedSection/AnimatedSection'
import styles from './FeaturedWines.module.css'

const carouselWines = [
  'emblema', 'francs', 'pasionado-malbec', 'blanc-de-franc',
  'torrontes', 'rose', 'extra-brut', 'raices-malbec',
  'altitud-malbec', '1300-cs', 'blanc-de-malbec', 'ensamble-otonal',
]

const wines = carouselWines.map((id) => allWines.find((w) => w.id === id)).filter(Boolean) as typeof allWines

export default function FeaturedWines() {
  const t = useTranslations('common')
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true, align: 'start', slidesToScroll: 1 },
    [Autoplay({ delay: 2500, stopOnInteraction: false })]
  )

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi])
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi])

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <AnimatedSection>
          <span className={styles.eyebrow}>{t('featuredWines.eyebrow')}</span>
          <h2 className={styles.title}>
            {t('featuredWines.title')}
          </h2>
          <p className={styles.subtitle}>{t('featuredWines.subtitle')}</p>
        </AnimatedSection>

        <div className={styles.carouselWrapper}>
          <div className={styles.carousel} ref={emblaRef}>
            <div className={styles.track}>
              {wines.map((wine) => (
                <div className={styles.slide} key={wine.id}>
                  <Link href="/vinos" className={styles.wineItem}>
                    <div className={styles.imageWrap}>
                      <Image
                        src={wine.image}
                        alt={wine.name}
                        fill
                        className={styles.wineImage}
                        sizes="(max-width: 768px) 50vw, 16vw"
                      />
                    </div>
                    <span className={styles.wineName}>{wine.name}</span>
                  </Link>
                </div>
              ))}
            </div>
          </div>

          <button className={`${styles.arrow} ${styles.prev}`} onClick={scrollPrev} aria-label="Previous">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button className={`${styles.arrow} ${styles.next}`} onClick={scrollNext} aria-label="Next">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        <AnimatedSection>
          <div className={styles.ctaWrap}>
            <Link href="/vinos" className={styles.cta}>
              {t('featuredWines.viewAll')}
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
