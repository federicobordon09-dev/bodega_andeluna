'use client'

import Image from 'next/image'
import { useTranslations } from 'next-intl'
import { Wine } from '@/types/wine'
import styles from './WineCard.module.css'

interface WineCardProps {
  wine: Wine
}

export default function WineCard({ wine }: WineCardProps) {
  const t = useTranslations('common')

  return (
    <article className={styles.card}>
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
      </div>
    </article>
  )
}
