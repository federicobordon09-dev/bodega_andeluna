'use client'

import { useTranslations } from 'next-intl'
import Image from 'next/image'
import AnimatedSection from '@/components/ui/AnimatedSection/AnimatedSection'
import styles from './InstagramGrid.module.css'

const instagramPhotos = [
  { src: '/G-0012.jpg', alt: 'Interior de bodega con barricas' },
  { src: '/G-0023.jpg', alt: 'Equipo de vendimia' },
  { src: '/G-0027.jpg', alt: 'Cosecha de uvas' },
  { src: '/G-0029.jpg', alt: 'Vendimia en la neblina' },
  { src: '/G-0021.jpg', alt: 'Viñedos con Andes' },
  { src: '/IMG_1995.jpg', alt: 'Trabajador en viñedo' },
]

export default function InstagramGrid() {
  const t = useTranslations('common')

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <AnimatedSection>
          <span className={styles.eyebrow}>{t('instagram.handle')}</span>
          <h2 className={styles.title}>
            {t('instagram.title')} <em>Instagram</em>
          </h2>
        </AnimatedSection>
        <div className={styles.grid}>
          {instagramPhotos.map((photo, index) => (
            <AnimatedSection key={index} delay={index * 80}>
              <a
                href="https://www.instagram.com/bodegaandeluna/"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.item}
              >
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  fill
                  className={styles.image}
                  sizes="(max-width: 768px) 33vw, 16vw"
                />
                <div className={styles.overlay}>
                  <svg className={styles.icon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <rect x="2" y="2" width="20" height="20" rx="5" />
                    <circle cx="12" cy="12" r="5" />
                    <circle cx="17.5" cy="6.5" r="1.5" fill="currentColor" stroke="none" />
                  </svg>
                </div>
              </a>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  )
}
