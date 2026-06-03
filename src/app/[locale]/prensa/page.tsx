'use client'
import { useTranslations } from 'next-intl'
import PageHero from '@/components/sections/PageHero/PageHero'
import AnimatedSection from '@/components/ui/AnimatedSection/AnimatedSection'
import styles from './page.module.css'

const pressSources = [
  { source: 'Tim Atkin MW', date: '2024', url: '#' },
  { source: 'Decanter World Wine Awards', date: '2024', url: '#' },
  { source: 'Descorchados', date: '2024', url: '#' },
  { source: 'Revista Club de Vinos', date: '2023', url: '#' },
  { source: 'Wine Spectator', date: '2023', url: '#' },
  { source: 'EcoVino', date: '2023', url: '#' },
]

export default function PrensaPage() {
  const t = useTranslations('common')
  const articles = t.raw('press.articles') as Array<{ title: string; description: string }>

  return (
    <>
      <PageHero
        title={t('press.title')}
        highlight="Andeluna"
        subtitle={t('press.subtitle')}
        imageUrl="/G-0012.jpg"
        imageAlt={t('altTexts.heroAwards')}
      />

      <section className={styles.section}>
        <div className={styles.container}>
          <div className={styles.grid}>
            {articles.map((article, index) => (
              <AnimatedSection key={index} delay={index * 100}>
                <a href={pressSources[index].url} target="_blank" rel="noopener noreferrer" className={styles.card}>
                  <div className={styles.cardHeader}>
                    <span className={styles.source}>{pressSources[index].source}</span>
                    <span className={styles.date}>{pressSources[index].date}</span>
                  </div>
                  <h3 className={styles.cardTitle}>{article.title}</h3>
                  <p className={styles.cardDesc}>{article.description}</p>
                  <span className={styles.readMore}>
                    {t('press.readMore')}
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                  </span>
                </a>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
