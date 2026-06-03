'use client'

import { useCallback, useEffect, useState } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'
import Image from 'next/image'
import { Link } from '@/i18n/navigation'
import { useTranslations } from 'next-intl'
import styles from './HeroSection.module.css'

export default function HeroSection() {
  const [loaded, setLoaded] = useState(false)
  const [activeSlide, setActiveSlide] = useState(0)
  const t = useTranslations('common')

  const slidesData = t.raw('slides') as Array<{eyebrow: string; titleLine1: string; titleHighlight: string; subtitle: string; cta1Label: string; cta2Label?: string}>
  const altTexts = t.raw('altTexts') as Record<string, string>

  const slides = [
    {
      id: 'altitud',
      image: '/G-0021.jpg',
      alt: altTexts.heroWinery,
      ...slidesData[0],
      cta1Href: '/vinos',
      cta2Href: '/experiencias',
      bottleImage: null,
      external: false,
    },
    {
      id: 'organic',
      image: '/BODEGA-ANDELUNA-NEVADA.jpg',
      alt: altTexts.heroOrganic,
      ...slidesData[1],
      cta1Href: '/vinos',
      cta2Href: null,
      bottleImage: '/andeluna-Altitud-malbec-100x320.png',
      external: false,
    },
    {
      id: 'wine-not',
      image: '/IMG_1995.jpg',
      alt: altTexts.heroWineNot,
      ...slidesData[2],
      cta1Href: '/vinos',
      cta2Href: null,
      bottleImage: '/wine-not.png',
      external: false,
    },
    {
      id: '1300-torrontes',
      image: '/G-0027.jpg',
      alt: altTexts.heroTorrontes,
      ...slidesData[3],
      cta1Href: '/vinos',
      cta2Href: null,
      bottleImage: '/1300-Torrontes-dulce-1-100x320.png',
      external: false,
    },
    {
      id: 'lodge',
      image: '/139605552409ce2d1176724c0e68365296f8a280748.jpg',
      alt: altTexts.heroLodge,
      ...slidesData[4],
      cta1Href: 'https://andelunawinerylodge.com',
      cta2Href: null,
      bottleImage: null,
      external: true,
    },
    {
      id: 'top100',
      image: '/G-0029.jpg',
      alt: altTexts.heroAwards,
      ...slidesData[5],
      cta1Href: '/bodega',
      cta2Href: null,
      bottleImage: null,
      external: false,
    },
  ]

  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true, duration: 40 },
    [Autoplay({ delay: 5000, stopOnInteraction: false })]
  )

  useEffect(() => {
    setLoaded(true)
  }, [])

  useEffect(() => {
    if (!emblaApi) return
    const onSelect = () => setActiveSlide(emblaApi.selectedScrollSnap())
    emblaApi.on('select', onSelect)
    return () => { emblaApi.off('select', onSelect) }
  }, [emblaApi])

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi])
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi])

  const slide = slides[activeSlide]

  return (
    <section className={styles.hero}>
      <div className={styles.embla} ref={emblaRef}>
        <div className={styles.track}>
          {slides.map((s) => (
            <div className={styles.slide} key={s.id}>
              <div className={styles.imageWrapper}>
                <Image
                  src={s.image}
                  alt={s.alt}
                  fill
                  priority
                  className={styles.image}
                  sizes="100vw"
                />
                <div className={styles.overlay} />
              </div>
              {s.bottleImage && (
                <div className={styles.bottleWrap}>
                  <Image
                    src={s.bottleImage}
                    alt={s.titleHighlight}
                    fill
                    className={styles.bottleImage}
                    sizes="(max-width: 768px) 30vw, 15vw"
                  />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      <div className={`${styles.content} ${loaded ? styles.visible : ''}`}>
        <span className={styles.eyebrow}>{slide.eyebrow}</span>
        <h1 className={styles.title}>
          {slide.titleLine1}<br />
          <em>{slide.titleHighlight}</em>
        </h1>
        <p className={styles.subtitle}>{slide.subtitle}</p>
        <div className={styles.ctas}>
          {slide.external ? (
            <a href={slide.cta1Href} target="_blank" rel="noopener noreferrer" className={styles.ctaPrimary}>
              {slide.cta1Label}
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </a>
          ) : (
            <Link href={slide.cta1Href} className={styles.ctaPrimary}>
              {slide.cta1Label}
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </Link>
          )}
          {slide.cta2Label && slide.cta2Href && (
            <Link href={slide.cta2Href} className={styles.ctaSecondary}>
              {slide.cta2Label}
            </Link>
          )}
        </div>
      </div>

      <div className={styles.controls}>
        <button className={styles.controlArrow} onClick={scrollPrev} aria-label="Previous">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <path d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <div className={styles.dots}>
          {slides.map((_, i) => (
            <button
              key={i}
              className={`${styles.dot} ${i === activeSlide ? styles.activeDot : ''}`}
              onClick={() => emblaApi?.scrollTo(i)}
              aria-label={`Slide ${i + 1}`}
            />
          ))}
        </div>
        <button className={styles.controlArrow} onClick={scrollNext} aria-label="Next">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <path d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>

      <div className={styles.scrollIndicator}>
        <div className={styles.scrollLine} />
      </div>
    </section>
  )
}
