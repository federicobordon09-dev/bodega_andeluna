import styles from './CtaBanner.module.css'

interface CtaBannerProps {
  title: string
  highlight?: string
  text?: string
  ctaLabel: string
  ctaHref: string
  external?: boolean
}

export default function CtaBanner({
  title,
  highlight,
  text,
  ctaLabel,
  ctaHref,
  external = false,
}: CtaBannerProps) {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <h2 className={styles.title}>
          {title}
          {highlight && <em> {highlight}</em>}
        </h2>
        {text && <p className={styles.text}>{text}</p>}
        <a
          href={ctaHref}
          target={external ? '_blank' : undefined}
          rel={external ? 'noopener noreferrer' : undefined}
          className={styles.cta}
        >
          {ctaLabel}
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M5 12h14M12 5l7 7-7 7" />
          </svg>
        </a>
      </div>
    </section>
  )
}
