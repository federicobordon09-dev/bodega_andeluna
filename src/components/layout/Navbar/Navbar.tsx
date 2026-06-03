'use client'

import { useState, useEffect } from 'react'
import { useTranslations } from 'next-intl'
import { usePathname, useRouter, Link } from '@/i18n/navigation'
import { routing } from '@/i18n/routing'
import WineMegaMenu from '@/components/layout/WineMegaMenu/WineMegaMenu'
import styles from './Navbar.module.css'

const navLinks = [
  { href: '/bodega', key: 'winery' },
  { href: '/experiencias', key: 'experiences' },
  { href: '/lodge', key: 'lodge' },
  { href: '/prensa', key: 'press' },
  { href: '/contacto', key: 'contact' },
]

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const pathname = usePathname()
  const router = useRouter()
  const t = useTranslations('common')

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 80)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => { document.body.style.overflow = '' }
  }, [isMenuOpen])

  const handleLogoClick = (e: React.MouseEvent) => {
    if (pathname !== '/') return
    e.preventDefault()
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const handleLocaleChange = (locale: string) => {
    router.replace(pathname, { locale })
  }

  return (
    <header className={`${styles.header} ${isScrolled ? styles.scrolled : ''}`}>
      <nav className={styles.nav}>
        <ul className={styles.leftLinks}>
          <li>
            <WineMegaMenu />
          </li>
          {navLinks.slice(0, 1).map((link) => (
            <li key={link.href}>
              <Link href={link.href} className={styles.link}>
                {t(`nav.${link.key}`)}
              </Link>
            </li>
          ))}
        </ul>

        <Link href="/" className={styles.logo} onClick={handleLogoClick}>
          <span className={styles.logoText}>Andeluna</span>
        </Link>

        <ul className={styles.rightLinks}>
          {navLinks.slice(1).map((link) => (
            <li key={link.href}>
              <Link href={link.href} className={styles.link}>
                {t(`nav.${link.key}`)}
              </Link>
            </li>
          ))}
          <li>
            <a
              href="https://tienda.andeluna.com.ar"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.shopLink}
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4zM3 6h18M16 10a4 4 0 01-8 0" />
              </svg>
            </a>
          </li>
          <li className={styles.langSwitcher}>
            {routing.locales.map((loc) => (
              <button
                key={loc}
                onClick={() => handleLocaleChange(loc)}
                className={styles.langBtn}
              >
                {loc.toUpperCase()}
              </button>
            ))}
          </li>
          <li>
            <a
              href="https://wosbooking.com/mro/andeluna"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.cta}
            >
              {t('nav.reserve')}
            </a>
          </li>
        </ul>

        <button
          className={`${styles.hamburger} ${isMenuOpen ? styles.open : ''}`}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Menu"
        >
          <span />
          <span />
          <span />
        </button>
      </nav>

      <div className={`${styles.mobileMenu} ${isMenuOpen ? styles.active : ''}`}>
        <ul className={styles.mobileLinks}>
          <li
            className={styles.mobileItem}
            style={{ transitionDelay: isMenuOpen ? '0ms' : '0ms' }}
          >
            <Link
              href="/vinos"
              className={styles.mobileLink}
              onClick={() => setIsMenuOpen(false)}
            >
              {t('nav.wines')}
            </Link>
          </li>
          {navLinks.map((link, index) => (
            <li
              key={link.href}
              className={styles.mobileItem}
              style={{ transitionDelay: isMenuOpen ? `${(index + 1) * 60}ms` : '0ms' }}
            >
              <Link
                href={link.href}
                className={styles.mobileLink}
                onClick={() => setIsMenuOpen(false)}
              >
                {t(`nav.${link.key}`)}
              </Link>
            </li>
          ))}
          <li
            className={styles.mobileItem}
            style={{ transitionDelay: isMenuOpen ? `${navLinks.length * 60}ms` : '0ms' }}
          >
            <a
              href="https://tienda.andeluna.com.ar"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.mobileLink}
              onClick={() => setIsMenuOpen(false)}
            >
              {t('nav.shop')}
            </a>
          </li>
          <li
            className={styles.mobileItem}
            style={{ transitionDelay: isMenuOpen ? `${(navLinks.length + 1) * 60}ms` : '0ms' }}
          >
            <div className={styles.mobileLangs}>
              {routing.locales.map((loc) => (
                <button
                  key={loc}
                  onClick={() => { handleLocaleChange(loc); setIsMenuOpen(false) }}
                  className={styles.mobileLangBtn}
                >
                  {loc.toUpperCase()}
                </button>
              ))}
            </div>
          </li>
          <li
            className={styles.mobileItem}
            style={{ transitionDelay: isMenuOpen ? `${(navLinks.length + 2) * 60}ms` : '0ms' }}
          >
            <a
              href="https://wosbooking.com/mro/andeluna"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.mobileCta}
              onClick={() => setIsMenuOpen(false)}
            >
              {t('nav.reserve')}
            </a>
          </li>
        </ul>
      </div>
    </header>
  )
}
