import { NextIntlClientProvider } from 'next-intl'
import { getMessages } from 'next-intl/server'
import { notFound } from 'next/navigation'
import { routing } from '@/i18n/routing'
import Navbar from '@/components/layout/Navbar/Navbar'
import Footer from '@/components/layout/Footer/Footer'
import LoadingScreen from '@/components/ui/LoadingScreen/LoadingScreen'

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params
  if (!routing.locales.includes(locale as 'es' | 'en' | 'pt')) {
    notFound()
  }

  const messages = await getMessages()

  return (
    <NextIntlClientProvider messages={messages}>
      <LoadingScreen />
      <Navbar />
      <main>{children}</main>
      <Footer />
    </NextIntlClientProvider>
  )
}
