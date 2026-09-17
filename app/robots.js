export default function robots() {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://clayandbricks.com';
  const hostname = new URL(baseUrl).hostname;

  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/api/'],
      },
      {
        userAgent: [
          'OAI-SearchBot',
          'GPTBot',
          'ClaudeBot',
          'PerplexityBot',
          'Google-Extended',
          'Applebot-Extended',
          'Amazonbot',
          'cohere-ai',
        ],
        allow: '/',
      },
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
    host: hostname,
  };
}

