'use client'

import Image from 'next/image'
import { useTranslations } from 'next-intl'
import { Link } from '@/i18n/navigation'
import { Wine } from '@/types/wine'
import styles from './WineCard.module.css'

interface WineCardProps {
  wine: Wine
}

export default function WineCard({ wine }: WineCardProps) {
  const t = useTranslations('common')

  return (
    <Link href={`/vinos/${wine.id}`} className={styles.card}>
      <div className={styles.bottleWrap}>
        <Image
          src={wine.image}
          alt={`${t('ui.bottleOf')} ${wine.name}`}
          width={100}
          height={320}
          className={styles.bottle}
          sizes="100px"
        />
        <div className={styles.bottleGlow} />
      </div>

      <div className={styles.content}>
        {wine.award && <span className={styles.award}>{wine.award}</span>}
        {wine.score && (
          <span className={styles.score}>
            {wine.score} pts · {wine.scoreSource}
          </span>
        )}
        <h4 className={styles.name}>{wine.name}</h4>
        <p className={styles.varietals}>{wine.varietals.join(' · ')}</p>
        <p className={styles.description}>{wine.description}</p>
        <span className={styles.viewDetail}>
          {t('wines.viewDetails')}
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M5 12h14M12 5l7 7-7 7" />
          </svg>
        </span>
      </div>
    </Link>
  )
}
