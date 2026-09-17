export default function manifest() {
  return {
    name: 'Clay and Bricks — Luxury Architecture, Turnkey Interiors & Civil Construction',
    short_name: 'Clay & Bricks',
    description:
      'Odisha’s premier turnkey architectural design, luxury interior design, and civil construction studio in Bhubaneswar.',
    start_url: '/',
    display: 'standalone',
    background_color: '#141311',
    theme_color: '#1a1917',
    icons: [
      {
        src: '/icon-192.png',
        sizes: '192x192',
        type: 'image/png',
      },
      {
        src: '/icon-512.png',
        sizes: '512x512',
        type: 'image/png',
      },
      {
        src: '/icon.svg',
        sizes: 'any',
        type: 'image/svg+xml',
      },
    ],
  };
}
