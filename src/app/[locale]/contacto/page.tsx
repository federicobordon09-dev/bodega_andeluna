'use client'
import { useTranslations } from 'next-intl'
import PageHero from '@/components/sections/PageHero/PageHero'
import AnimatedSection from '@/components/ui/AnimatedSection/AnimatedSection'
import ContactForm from '@/components/ui/ContactForm/ContactForm'
import styles from './page.module.css'

export default function ContactoPage() {
  const t = useTranslations('common')
  const altTexts = t.raw('altTexts') as Record<string, string>

  return (
    <>
      <PageHero
        title={t('pageHero.contact.title')}
        highlight="Andeluna"
        subtitle={t('pageHero.contact.subtitle')}
        imageUrl="/foto.jpg"
        imageAlt={altTexts.contactoHero}
      />

      <section className={styles.section}>
        <div className={styles.container}>
          <div className={styles.grid}>
            <AnimatedSection>
              <div className={styles.formSide}>
                <span className={styles.eyebrow}>{t('contact.formEyebrow')}</span>
                <h2 className={styles.sectionTitle}>
                  {t('contact.formTitle')}
                </h2>
                <ContactForm />
              </div>
            </AnimatedSection>

            <AnimatedSection delay={200}>
              <div className={styles.infoSide}>
                <span className={styles.eyebrow}>{t('contact.infoEyebrow')}</span>
                <h2 className={styles.sectionTitle}>
                  {t('contact.infoTitle')}
                </h2>

                <div className={styles.infoGroup}>
                  <h3 className={styles.infoLabel}>{t('contact.address')}</h3>
                  <a
                    href="https://maps.app.goo.gl/AJEhHEHcZiD4zBYY9"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.infoLink}
                  >
                    {t('contact.addressValue')}
                  </a>
                </div>

                <div className={styles.infoGroup}>
                  <h3 className={styles.infoLabel}>{t('contact.tourism')}</h3>
                  <a href={`mailto:${t('contact.tourismValue')}`} className={styles.infoLink}>
                    {t('contact.tourismValue')}
                  </a>
                </div>

                <div className={styles.infoGroup}>
                  <h3 className={styles.infoLabel}>{t('contact.visits')}</h3>
                  <a href={`mailto:${t('contact.visitsValue')}`} className={styles.infoLink}>
                    {t('contact.visitsValue')}
                  </a>
                </div>

                <div className={styles.infoGroup}>
                  <h3 className={styles.infoLabel}>{t('contact.hours')}</h3>
                  <p className={styles.infoText}>{t('contact.hoursBodega')}</p>
                  <p className={styles.infoText}>{t('contact.hoursReservas')}</p>
                </div>

                <div className={styles.infoGroup}>
                  <h3 className={styles.infoLabel}>{t('contact.social')}</h3>
                  <div className={styles.socialLinks}>
                    <a
                      href="https://www.instagram.com/bodegaandeluna/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className={styles.socialLink}
                    >
                      Instagram
                    </a>
                  </div>
                </div>

                <div className={styles.infoGroup}>
                  <h3 className={styles.infoLabel}>{t('contact.shop')}</h3>
                  <div className={styles.socialLinks}>
                    <a
                      href="https://tienda.andeluna.com.ar"
                      target="_blank"
                      rel="noopener noreferrer"
                      className={styles.socialLink}
                    >
                      {t('contact.shop')}
                    </a>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      <section className={styles.mapSection}>
        <div className={styles.mapContainer}>
          <iframe
            src="https://www.google.com/maps?q=Bodega+Andeluna+RP89+Tupungato+Mendoza+Argentina&output=embed"
            width="100%"
            height="400"
            style={{ border: 0, filter: 'grayscale(0.4) contrast(1.05)' }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title={altTexts.mapTitle}
          />
        </div>
      </section>
    </>
  )
}
