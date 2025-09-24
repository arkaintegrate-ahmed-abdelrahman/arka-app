import './globals.css';
import { NextIntlClientProvider, hasLocale } from 'next-intl';
import { notFound } from 'next/navigation';
import { routing } from '@/i18n/routing';
import Layout from '@/components/molecules/Layout';
import { GlobalProvider } from '@/context/Context';
import { Toaster } from 'react-hot-toast';
import { Inter, Open_Sans } from 'next/font/google';


const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

const openSans = Open_Sans({
  subsets: ['latin'],
  variable: '--font-open-sans',
  weight: ['400', '600', '700'], // adjust as needed
  display: 'swap',
});

export const metadata = {
  title: 'Arka Integrate | Transform Your Ideas into Digital Solutions',
  description: 'Empower your business with smart, scalable digital solutions. From concept to code, we build software that solves real problems and drives growth.',
  openGraph: {
    title: 'Arka Integrate | Digital Transformation Partner',
    description: 'We design, develop, and deliver scalable digital solutions that empower businesses to grow, innovate, and lead in their industries.',
    url: 'https://arkaintegrate.com', // Change to actual domain
    siteName: 'Arka Integrate',
    images: [
      {
        url: '/og-image.png', // You should create this image
        width: 1200,
        height: 630,
        alt: 'Arka Integrate - Digital Solutions Partner',
      },
    ],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Arka Integrate | Digital Transformation Partner',
    description: 'Turning ideas into impactful software solutions with 8+ years of experience in development and design.',
    images: ['/og-image.png'], // Same image as OpenGraph
  },
  icons: {
    icon: '/favicon.ico', // This path is relative to the "public" folder
  },
};

export default async function RootLayout({ children, params }) {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  return (
    <html lang={locale} className={`${inter.variable} ${openSans.variable}`} dir={locale == 'en' ? 'ltr' : 'rtl'}>
      <body className='scroll'>
        <Toaster />
        <NextIntlClientProvider locale={locale}>
          <GlobalProvider>
            <Layout> {children} </Layout>
          </GlobalProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
