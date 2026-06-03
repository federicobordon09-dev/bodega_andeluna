'use client'

import { useTranslations } from 'next-intl'
import { Link } from '@/i18n/navigation'
import styles from './Footer.module.css'

const footerLinks = [
  { href: '/vinos', key: 'wines' },
  { href: '/bodega', key: 'winery' },
  { href: '/experiencias', key: 'experiences' },
  { href: '/lodge', key: 'lodge' },
  { href: '/prensa', key: 'press' },
  { href: '/contacto', key: 'contact' },
]

export default function Footer() {
  const t = useTranslations('common')

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.grid}>
          <div className={styles.brand}>
            <h3 className={styles.logo}>Andeluna</h3>
            <p className={styles.tagline}>
              {t('footer.brand')}<br />
              {t('footer.region')}
            </p>
            <div className={styles.social}>
              <a
                href="https://www.facebook.com/bodegaandeluna"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.socialLink}
              >
                Facebook
              </a>
              <a
                href="https://www.youtube.com/@bodegaandeluna"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.socialLink}
              >
                YouTube
              </a>
              <a
                href="https://www.instagram.com/bodegaandeluna/"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.socialLink}
              >
                Instagram
              </a>
              <a
                href="https://tienda.andeluna.com.ar"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.socialLink}
              >
                {t('nav.shop')}
              </a>
            </div>
          </div>

          <div className={styles.col}>
            <h4 className={styles.colTitle}>{t('footer.navigation')}</h4>
            <ul className={styles.colLinks}>
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className={styles.colLink}>
                    {t(`nav.${link.key}`)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className={styles.col}>
            <h4 className={styles.colTitle}>{t('footer.contact')}</h4>
            <ul className={styles.colLinks}>
              <li className={styles.contactItem}>
                <span className={styles.contactLabel}>{t('footer.address')}</span>
                <a
                  href="https://maps.app.goo.gl/AJEhHEHcZiD4zBYY9"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.contactLink}
                >
                  {t('footer.addressValue')}
                </a>
              </li>
              <li className={styles.contactItem}>
                <span className={styles.contactLabel}>{t('footer.tourism')}</span>
                <a href="https://wa.me/5492614616901" target="_blank" rel="noopener noreferrer" className={styles.contactLink}>
                  +54 9 261 461-6901
                </a>
              </li>
              <li className={styles.contactItem}>
                <span className={styles.contactLabel}>{t('footer.visits')}</span>
                <a href="https://wa.me/5492615089525" target="_blank" rel="noopener noreferrer" className={styles.contactLink}>
                  +54 9 261 508-9525
                </a>
              </li>
              <li className={styles.contactItem}>
                <span className={styles.contactLabel}>{t('footer.email')}</span>
                <a href="mailto:turismo@andeluna.com.ar" className={styles.contactLink}>
                  turismo@andeluna.com.ar
                </a>
              </li>
            </ul>
          </div>

          <div className={styles.col}>
            <h4 className={styles.colTitle}>{t('footer.hours')}</h4>
            <ul className={styles.colLinks}>
              <li className={styles.contactItem}>
                <span className={styles.contactLabel}>{t('footer.winery')}</span>
                {t('footer.wineryHours')}
              </li>
              <li className={styles.contactItem}>
                <span className={styles.contactLabel}>{t('footer.reservations')}</span>
                {t('footer.reservationHours')}
              </li>
              <li className={styles.contactItem}>
                <span className={styles.contactLabel}>{t('nav.lodge')}</span>
                <a
                  href="https://andelunawinerylodge.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.contactLink}
                >
                  andelunawinerylodge.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className={styles.divider} />

        <div className={styles.bottom}>
          <p className={styles.copy}>
            &copy; {new Date().getFullYear()} Bodega Andeluna. {t('footer.copyright')}
          </p>
          <p className={styles.credit}>
            {t('footer.founded')}
          </p>
        </div>
      </div>
    </footer>
  )
}
