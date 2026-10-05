import { PROJECTS } from '@/lib/projects';
import { NEIGHBORHOODS } from '@/lib/neighborhoods';

export default async function sitemap() {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://clayandbricks.com';
  const CURRENT_DATE = '2026-09-20T20:00:00.000Z';

  // Core static landing pages with fresh update timestamps
  const staticRoutes = [
    {
      url: `${baseUrl}`,
      lastModified: CURRENT_DATE,
      changeFrequency: 'daily',
      priority: 1.0,
    },
    {
      url: `${baseUrl}/services`,
      lastModified: CURRENT_DATE,
      changeFrequency: 'weekly',
      priority: 0.95,
    },
    {
      url: `${baseUrl}/projects`,
      lastModified: CURRENT_DATE,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/expertise`,
      lastModified: CURRENT_DATE,
      changeFrequency: 'monthly',
      priority: 0.85,
    },
    {
      url: `${baseUrl}/studio`,
      lastModified: CURRENT_DATE,
      changeFrequency: 'monthly',
      priority: 0.85,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: CURRENT_DATE,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
  ];

  // Service landing pages — high-intent commercial keywords
  const serviceRoutes = [
    { slug: 'interior-design-bhubaneswar', priority: 1.0 },
    { slug: 'civil-construction-bhubaneswar', priority: 0.95 },
    { slug: 'architectural-design-bhubaneswar', priority: 0.95 },
    { slug: 'modular-kitchen-bhubaneswar', priority: 0.9 },
    { slug: 'duplex-interior-design', priority: 0.9 },
    { slug: 'commercial-interior-design', priority: 0.9 },
  ].map(({ slug, priority }) => ({
    url: `${baseUrl}/services/${slug}`,
    lastModified: CURRENT_DATE,
    changeFrequency: 'weekly',
    priority,
  }));

  // Neighborhood landing pages — local long-tail keywords
  const neighborhoodRoutes = NEIGHBORHOODS.map((n) => ({
    url: `${baseUrl}/neighborhoods/${n.slug}`,
    lastModified: CURRENT_DATE,
    changeFrequency: 'weekly',
    priority: 0.88,
  }));

  // Dynamic portfolio project detail pages
  const projectRoutes = PROJECTS.map((project) => ({
    url: `${baseUrl}/projects/${project.slug}`,
    lastModified: CURRENT_DATE,
    changeFrequency: 'weekly',
    priority: 0.82,
  }));

  return [...staticRoutes, ...serviceRoutes, ...neighborhoodRoutes, ...projectRoutes];
}
