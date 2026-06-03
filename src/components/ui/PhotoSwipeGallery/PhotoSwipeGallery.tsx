'use client'

import { useEffect, useRef } from 'react'
import Image from 'next/image'
import PhotoSwipe from 'photoswipe'
import 'photoswipe/style.css'
import styles from './PhotoSwipeGallery.module.css'

interface GalleryImage {
  src: string
  alt: string
  width: number
  height: number
}

interface Props {
  images: GalleryImage[]
}

export default function PhotoSwipeGallery({ images }: Props) {
  const galleryRef = useRef<HTMLDivElement>(null)

  const openGallery = (index: number) => {
    if (!galleryRef.current) return

    const items = images.map((img) => ({
      src: img.src,
      width: img.width,
      height: img.height,
      alt: img.alt,
    }))

    const pswp = new PhotoSwipe({
      dataSource: items,
      index,
      bgOpacity: 0.9,
      showHideOpacity: true,
      closeOnVerticalDrag: true,
      wheelToZoom: true,
    })

    pswp.init()
  }

  return (
    <div ref={galleryRef} className={styles.grid}>
      {images.map((img, i) => (
        <button
          key={i}
          className={styles.item}
          onClick={() => openGallery(i)}
          aria-label={`Ver ${img.alt}`}
        >
          <Image
            src={img.src}
            alt={img.alt}
            fill
            className={styles.image}
            sizes="(max-width: 768px) 50vw, 33vw"
          />
          <div className={styles.overlay}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7" />
            </svg>
          </div>
        </button>
      ))}
    </div>
  )
}
