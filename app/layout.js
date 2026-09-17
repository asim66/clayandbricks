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
    template: '%s | Clay and Bricks — Luxury Interiors, Bhubaneswar',
    default:  'Clay and Bricks Pvt Ltd | Luxury Interiors & Construction — Bhubaneswar',
  },
  description:
    'Award-winning luxury interior design, architectural planning, and premium turnkey construction services in Bhubaneswar, Odisha. Spaces crafted for those who demand perfection.',
  keywords: [
    'luxury interior design Bhubaneswar',
    'interior designers in Bhubaneswar',
    'best interior designer in Bhubaneswar',
    'architects in Bhubaneswar',
    'turnkey interior contractor Bhubaneswar',
    'turnkey home construction Bhubaneswar',
    'civil contractors in Bhubaneswar',
    'house construction contractors in Bhubaneswar',
    'modular kitchen design Bhubaneswar',
    'duplex interior designers in Bhubaneswar',
    'villa architecture Bhubaneswar',
    'commercial interior designers Bhubaneswar',
    'Clay and Bricks',
    'interior designer Odisha',
    'Patia interior designers',
    'Saheed Nagar architects',
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
    title:       'Clay and Bricks Pvt Ltd | Luxury Architecture & Turnkey Interiors',
    description: 'We Build Your Dream House · Odisha’s premier turnkey architectural design and civil construction studio in Bhubaneswar.',
    url:         baseUrl,
    siteName:    'Clay and Bricks',
    locale:      'en_IN',
    type:        'website',
    images: [
      {
        url:    '/hero-bg.jpg',
        width:  1200,
        height: 630,
        alt:    'Clay and Bricks Luxury Architecture and Interiors — Bhubaneswar',
      },
    ],
  },
  twitter: {
    card:        'summary_large_image',
    title:       'Clay and Bricks Pvt Ltd | Luxury Architecture & Turnkey Interiors',
    description: 'Odisha’s premier turnkey architectural design and civil construction studio in Bhubaneswar.',
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
