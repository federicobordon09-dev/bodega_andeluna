import { useTranslations } from 'next-intl'
import HeroSection from '@/components/sections/home/HeroSection/HeroSection'
import StatsSection from '@/components/sections/home/StatsSection/StatsSection'
import HistorySection from '@/components/sections/shared/HistorySection/HistorySection'
import FeaturedWines from '@/components/sections/home/FeaturedWines/FeaturedWines'
import FeaturedExperiences from '@/components/sections/home/FeaturedExperiences/FeaturedExperiences'
import AwardsSection from '@/components/sections/home/AwardsSection/AwardsSection'
import LodgeTeaser from '@/components/sections/home/LodgeTeaser/LodgeTeaser'
import InstagramGrid from '@/components/sections/home/InstagramGrid/InstagramGrid'
import CtaBanner from '@/components/sections/shared/CtaBanner/CtaBanner'

export default function Home() {
  const t = useTranslations('common')

  return (
    <>
      <HeroSection />
      <StatsSection />
      <HistorySection showCta />
      <FeaturedWines />
      <FeaturedExperiences />
      <AwardsSection />
      <LodgeTeaser />
      <CtaBanner
        title={t('cta.title')}
        highlight={t('cta.highlight')}
        text={t('cta.text')}
        ctaLabel={t('cta.button')}
        ctaHref="https://wosbooking.com/mro/andeluna"
        external
      />
      <InstagramGrid />
    </>
  )
}
