'use client'
import { useTranslations } from 'next-intl'
import Image from 'next/image'
import PageHero from '@/components/sections/PageHero/PageHero'
import AnimatedSection from '@/components/ui/AnimatedSection/AnimatedSection'
import styles from './page.module.css'

const galleryImageSrcs = [
  '/1745069398064a502e848672a4305d9ba3c1773732e.jpg',
  '/2617604155515e958ac7813e87db05ba3a08660f33d.jpg',
  '/17450694030066ec036fb2edefc272b35445d25a644.jpg',
  '/5235208257cb029f8cf9d17ab8ef2057c5be97bc5b.jpg',
  '/139605552409ce2d1176724c0e68365296f8a280748.jpg',
  '/22685902291141aad6ffd0cdf2c7a689b73dfa54014.jpg',
]

export default function LodgePage() {
  const t = useTranslations('common')

  const galleryImages = galleryImageSrcs.map((src, i) => ({
    src,
    alt: t(`lodgePage.galleryAlt${i + 1}`),
  }))

  const amenities = [
    { icon: 'Wi-Fi', label: 'Wi-Fi' },
    { icon: 'Spa', label: 'Spa' },
    { icon: 'Bici', label: t('lodgePage.amenity1') },
    { icon: 'Deck', label: t('lodgePage.amenity2') },
    { icon: 'AC', label: t('lodgePage.amenity3') },
    { icon: 'Minibar', label: t('lodgePage.amenity4') },
  ]

  return (
    <>
      <PageHero
        title={t('lodgePage.title')}
        highlight={t('lodgePage.subtitle').split(' ')[1]}
        subtitle={t('lodgePage.subtitle')}
        imageUrl="/1745069398064a502e848672a4305d9ba3c1773732e.jpg"
        imageAlt={t('altTexts.heroLodge')}
      />

      <section className={styles.about}>
        <div className={styles.container}>
          <AnimatedSection>
            <span className={styles.eyebrow}>{t('lodgePage.aboutEyebrow')}</span>
            <h2 className={styles.sectionTitle}>
              {t('lodgePage.aboutTitle')}
            </h2>
          </AnimatedSection>
          <div className={styles.aboutGrid}>
            <AnimatedSection>
              <div className={styles.aboutContent}>
                <p className={styles.text}>
                  {t('lodgePage.aboutText1')}
                </p>
                <p className={styles.text}>
                  {t('lodgePage.aboutText2')}
                </p>
              </div>
            </AnimatedSection>
            <AnimatedSection delay={200}>
              <div className={styles.aboutImage}>
                <Image
                  src="/22685902291141aad6ffd0cdf2c7a689b73dfa54014.jpg"
                  alt={t('altTexts.lodgeView')}
                  fill
                  className={styles.image}
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      <section className={styles.gallery}>
        <div className={styles.container}>
          <AnimatedSection>
            <span className={styles.eyebrow}>{t('lodgePage.galleryEyebrow')}</span>
            <h2 className={styles.sectionTitle}>
              {t('lodgePage.galleryTitle')}
            </h2>
          </AnimatedSection>
          <div className={styles.galleryGrid}>
            {galleryImages.map((img, index) => (
              <AnimatedSection key={index} delay={index * 80}>
                <div className={styles.galleryItem}>
                  <Image
                    src={img.src}
                    alt={img.alt}
                    fill
                    className={styles.galleryImage}
                    sizes="(max-width: 768px) 50vw, 33vw"
                  />
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.amenities}>
        <div className={styles.containerSmall}>
          <AnimatedSection>
            <span className={styles.eyebrow}>{t('lodgePage.amenitiesEyebrow')}</span>
            <h2 className={styles.sectionTitle}>
              {t('lodgePage.amenitiesTitle')}
            </h2>
          </AnimatedSection>
          <div className={styles.amenitiesGrid}>
            {amenities.map((amenity, index) => (
              <AnimatedSection key={index} delay={index * 60}>
                <div className={styles.amenityCard}>
                  <span className={styles.amenityLabel}>{amenity.label}</span>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.rating}>
        <div className={styles.containerSmall}>
          <AnimatedSection>
            <div className={styles.ratingCard}>
              <span className={styles.ratingNumber}>9.6</span>
              <span className={styles.ratingOutOf}>/ 10</span>
              <p className={styles.ratingText}>{t('lodgePage.ratingText')}</p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <section className={styles.ctaSection}>
        <div className={styles.containerSmall}>
          <AnimatedSection>
            <div className={styles.ctaCard}>
              <h3 className={styles.ctaTitle}>{t('lodgePage.ctaTitle')}</h3>
              <p className={styles.ctaText}>
                {t('lodgePage.ctaText')}
              </p>
              <a
                href="https://andelunawinerylodge.com"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.cta}
              >
                {t('lodgePage.ctaButton')}
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
