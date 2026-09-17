import { PROJECTS } from '@/lib/projects';
import { NEIGHBORHOODS } from '@/lib/neighborhoods';

export default async function sitemap() {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://clayandbricks.com';

  // Core static landing pages with deterministic update timestamps
  const staticRoutes = [
    {
      url: `${baseUrl}`,
      lastModified: '2026-09-17T12:00:00.000Z',
      changeFrequency: 'weekly',
      priority: 1.0,
    },
    {
      url: `${baseUrl}/interior-designing-company-in-bhubaneswar`,
      lastModified: '2026-09-17T12:00:00.000Z',
      changeFrequency: 'weekly',
      priority: 1.0,
    },
    {
      url: `${baseUrl}/expertise`,
      lastModified: '2026-09-14T00:00:00.000Z',
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/projects`,
      lastModified: '2026-09-16T00:00:00.000Z',
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/studio`,
      lastModified: '2026-08-28T00:00:00.000Z',
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: '2026-09-01T00:00:00.000Z',
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/services`,
      lastModified: '2026-09-15T00:00:00.000Z',
      changeFrequency: 'monthly',
      priority: 0.9,
    },
  ];

  // Service landing pages — high-intent commercial keywords
  const serviceRoutes = [
    'interior-design-bhubaneswar',
    'civil-construction-bhubaneswar',
    'modular-kitchen-bhubaneswar',
    'architectural-design-bhubaneswar',
    'duplex-interior-design',
    'commercial-interior-design',
  ].map((slug) => ({
    url: `${baseUrl}/services/${slug}`,
    lastModified: '2026-09-15T00:00:00.000Z',
    changeFrequency: 'monthly',
    priority: 0.9,
  }));

  // Neighborhood landing pages — local long-tail keywords
  const neighborhoodRoutes = NEIGHBORHOODS.map((n) => ({
    url: `${baseUrl}/neighborhoods/${n.slug}`,
    lastModified: '2026-09-14T00:00:00.000Z',
    changeFrequency: 'monthly',
    priority: 0.85,
  }));

  // Deterministic project lastModified lookup based on project scope & recency
  const projectDateLookup = {
    'luxury-villa-shree-vihar': '2026-09-10T00:00:00.000Z',
    '3-bhk-apartment-laxmi-imperial': '2026-08-20T00:00:00.000Z',
    'bibhu-babu-villa': '2026-09-01T00:00:00.000Z',
    'laterite-villa': '2026-07-15T00:00:00.000Z',
    'brass-noir-kitchen': '2026-06-10T00:00:00.000Z',
    'terracotta-sanctuary': '2026-05-18T00:00:00.000Z',
    'stone-office-janpath': '2026-04-22T00:00:00.000Z',
    'forest-pool-villa': '2026-03-30T00:00:00.000Z',
    'konark-boutique-hotel': '2026-02-14T00:00:00.000Z',
  };

  // Dynamic portfolio project detail pages
  const projectRoutes = PROJECTS.map((project) => ({
    url: `${baseUrl}/projects/${project.slug}`,
    lastModified: projectDateLookup[project.slug] || '2026-08-01T00:00:00.000Z',
    changeFrequency: 'monthly',
    priority: 0.8,
  }));

  return [...staticRoutes, ...serviceRoutes, ...neighborhoodRoutes, ...projectRoutes];
}
