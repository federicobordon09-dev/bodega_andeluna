'use client'

import { useTranslations } from 'next-intl'
import { useAnimatedCounter } from '@/hooks/useAnimatedCounter'
import styles from './StatsSection.module.css'

export default function StatsSection() {
  const t = useTranslations('common')

  const stats = [
    { value: 1300, label: t('stats.meters'), prefix: '+', suffix: '' },
    { value: 70, label: t('stats.hectares'), prefix: '', suffix: '' },
    { value: 30, label: t('stats.countries'), prefix: '+', suffix: '' },
    { value: 2003, label: t('stats.founded'), prefix: '', suffix: '' },
  ]

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        {stats.map((stat, index) => (
          <StatItem key={index} {...stat} isLast={index === stats.length - 1} />
        ))}
      </div>
    </section>
  )
}

interface StatItemProps {
  value: number
  label: string
  prefix: string
  suffix: string
  isLast: boolean
}

function StatItem({ value, label, prefix, suffix, isLast }: StatItemProps) {
  const { displayValue, ref } = useAnimatedCounter(value, 2000, prefix, suffix)

  return (
    <div className={styles.stat}>
      <span className={styles.value} ref={ref}>
        {displayValue}
      </span>
      <span className={styles.label}>{label}</span>
      {!isLast && <div className={styles.divider} />}
    </div>
  )
}
