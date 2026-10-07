import './globals.css';
import { Cormorant_Garamond, DM_Sans } from 'next/font/google';
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
  weight:   ['300', '400', '500', '600', '700'],
  variable: '--font-dm-sans',
  display:  'swap',
});

import LocalBusinessSchema from '@/components/seo/LocalBusinessSchema';

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://clayandbricks.com';

export const metadata = {
  metadataBase: new URL(baseUrl),
  alternates: {
    canonical: '/',
    types: {
      'text/markdown': [
        { url: '/llms.txt', title: 'LLMs.txt' },
        { url: '/llms-full.txt', title: 'LLMs-Full.txt' },
      ],
    },
  },
  title: {
    template: '%s | Clay and Bricks — Interior Designers in Bhubaneswar',
    default:  'Clay and Bricks | Best Interior Designing Company in Bhubaneswar',
  },
  description:
    'Award-winning interior designing company in Bhubaneswar, Odisha. We deliver 100% turnkey luxury home interiors, modular kitchens, 2/3 BHK flats, duplexes & villa architecture with factory millwork & 10-year warranty.',
  keywords: [
    'best interior designing company in bhubaneswar',
    'interior designing company in bhubaneswar',
    'best interior designer in bhubaneswar',
    'top interior designers in bhubaneswar',
    'interior designers in bhubaneswar',
    'luxury interior design bhubaneswar',
    'home interior designers in bhubaneswar',
    'modular kitchen in bhubaneswar',
    'turnkey interior contractor bhubaneswar',
    '2 bhk interior design cost bhubaneswar',
    '3 bhk interior design cost in bhubaneswar',
    'duplex interior design bhubaneswar',
    'interior designers in Patia',
    'interior designers in Saheed Nagar',
    'interior designers in Jayadev Vihar',
    'Clay and Bricks',
    'turnkey architecture Bhubaneswar',
    'residential construction Bhubaneswar',
  ],
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    title:       'Clay and Bricks | Best Interior Designing Company in Bhubaneswar',
    description: 'Odisha’s premier interior designing company & turnkey studio. Bespoke home interiors, German CNC modular kitchens, and turnkey residences in Bhubaneswar.',
    url:         baseUrl,
    siteName:    'Clay and Bricks',
    locale:      'en_IN',
    type:        'website',
    images: [
      {
        url:    '/hero-bg.jpg',
        width:  1200,
        height: 630,
        alt:    'Clay and Bricks Best Interior Designing Company in Bhubaneswar',
      },
    ],
  },
  twitter: {
    card:        'summary_large_image',
    title:       'Clay and Bricks | Best Interior Designing Company in Bhubaneswar',
    description: 'Odisha’s premier interior designing company & turnkey studio in Bhubaneswar. Bespoke luxury living.',
    images:      ['/hero-bg.jpg'],
  },
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/icon.svg', type: 'image/svg+xml' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
    shortcut: '/favicon.ico',
  },
  verification: {
    google: 'google1670fbf50bec096b',
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
      <head>
        <link rel="alternate" type="text/markdown" href="/llms.txt" title="LLMs.txt" />
        <link rel="alternate" type="text/markdown" href="/llms-full.txt" title="LLMs-Full.txt" />
      </head>
      <body>
        <LocalBusinessSchema />
        <MagneticCursor />
        <Header />

        <SmoothScrollProvider>
          <main style={{ paddingTop: 0 }}>
            {children}
          </main>

          <Footer />
        </SmoothScrollProvider>
      </body>
    </html>
  );
}
