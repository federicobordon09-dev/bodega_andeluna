'use client'

import { useState, useRef, useEffect } from 'react'
import { useTranslations } from 'next-intl'
import { Link } from '@/i18n/navigation'
import { wineLines } from '@/data/wines'
import styles from './WineMegaMenu.module.css'

export default function WineMegaMenu() {
  const [isOpen, setIsOpen] = useState(false)
  const [activeLine, setActiveLine] = useState<string | null>(null)
  const menuRef = useRef<HTMLDivElement>(null)
  const t = useTranslations('common')

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        setIsOpen(false)
        setActiveLine(null)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  const centralLine = wineLines.find((l) => l.id === 'central')
  const especialLine = wineLines.find((l) => l.id === 'especial')

  return (
    <div
      ref={menuRef}
      className={styles.wrapper}
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => { setIsOpen(false); setActiveLine(null) }}
    >
      <Link href="/vinos" className={styles.trigger}>
        {t('nav.wines')}
        <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M6 9l6 6 6-6" />
        </svg>
      </Link>

      <div className={`${styles.mega} ${isOpen ? styles.open : ''}`}>
        <div className={styles.megaInner}>
          <div className={styles.col}>
            <h4 className={styles.colTitle}>{t('wines.lineCentral')}</h4>
            <ul className={styles.colLinks}>
              {centralLine?.subLines.map((sub) => (
                <li
                  key={sub.id}
                  className={styles.parentItem}
                  onMouseEnter={() => setActiveLine(sub.id)}
                >
                  <span className={styles.parentLink}>{sub.name}</span>
                  {activeLine === sub.id && sub.wines.length > 0 && (
                    <div className={styles.subMenu}>
                      <ul className={styles.subLinks}>
                        {sub.wines.map((wine) => (
                          <li key={wine.id}>
                            <Link
                              href="/vinos"
                              className={styles.subLink}
                              onClick={() => { setIsOpen(false); setActiveLine(null) }}
                            >
                              {wine.name}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </li>
              ))}
            </ul>
          </div>

          <div className={styles.col}>
            <h4 className={styles.colTitle}>{t('wines.especial')}</h4>
            <ul className={styles.colLinks}>
              {especialLine?.subLines.map((sub) => (
                sub.wines.map((wine) => (
                  <li key={wine.id}>
                    <Link
                      href="/vinos"
                      className={styles.parentLink}
                      onClick={() => setIsOpen(false)}
                    >
                      {wine.name}
                    </Link>
                  </li>
                ))
              ))}
            </ul>
          </div>

          <div className={styles.featured}>
            <p className={styles.featuredLabel}>{t('wines.allWines')}</p>
            <Link href="/vinos" className={styles.featuredCta} onClick={() => setIsOpen(false)}>
              {t('wines.viewAll')}
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
