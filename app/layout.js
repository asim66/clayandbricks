import './globals.css';
import { Cormorant_Garamond, DM_Sans } from 'next/font/google';
import { ViewTransition } from 'react';
import SmoothScrollProvider from '@/components/SmoothScrollProvider';
import MagneticCursor from '@/components/MagneticCursor';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

const cormorant = Cormorant_Garamond({
  subsets:  ['latin'],
  weight:   ['300', '400', '500', '600'],
  style:    ['normal', 'italic'],
  variable: '--font-cormorant',
  display:  'swap',
});

const dmSans = DM_Sans({
  subsets:  ['latin'],
  weight:   ['300', '400', '500'],
  variable: '--font-dm-sans',
  display:  'swap',
});

export const metadata = {
  title: {
    template: '%s | Clay and Bricks — Luxury Interiors, Bhubaneswar',
    default:  'Clay and Bricks Pvt Ltd | Luxury Interiors & Construction — Bhubaneswar',
  },
  description:
    'Award-winning luxury interior design and premium construction services in Bhubaneswar, Odisha. Spaces crafted for those who demand perfection.',
  keywords: 'luxury interior design Bhubaneswar, premium construction Odisha, Clay and Bricks, interior designer Odisha',
  openGraph: {
    title:       'Clay and Bricks Pvt Ltd | Luxury Interiors',
    description: 'We Build Your Dream House · Crafted spaces. Curated lives.',
    locale:      'en_IN',
    type:        'website',
    images:      ['/logo.png'],
  },
  icons: {
    icon:  '/logo.svg',
    apple: '/logo.svg',
  },
};

export const viewport = { themeColor: '#1a1917' };

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${cormorant.variable} ${dmSans.variable}`}
      suppressHydrationWarning
    >
      <body>
        <MagneticCursor />
        <Header />

        <SmoothScrollProvider>
          {/*
           * ViewTransition wraps page content so Next.js 16's native
           * view-transition API fires on every route change.
           * The laterite-red curtain wipe is defined in globals.css.
           */}
          <ViewTransition>
            <main style={{ paddingTop: 0 }}>
              {children}
            </main>
          </ViewTransition>

          <Footer />
        </SmoothScrollProvider>
      </body>
    </html>
  );
}
