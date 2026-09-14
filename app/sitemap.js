import { PROJECTS } from '@/lib/projects';
import { NEIGHBORHOODS } from '@/lib/neighborhoods';

export default async function sitemap() {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://clayandbricks.com';
  const currentDate = new Date().toISOString();

  // Core static landing pages
  const staticRoutes = [
    { url: `${baseUrl}`,           lastModified: currentDate, changeFrequency: 'weekly',  priority: 1.0 },
    { url: `${baseUrl}/expertise`, lastModified: currentDate, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${baseUrl}/projects`,  lastModified: currentDate, changeFrequency: 'weekly',  priority: 0.9 },
    { url: `${baseUrl}/studio`,    lastModified: currentDate, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/contact`,   lastModified: currentDate, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/services`,  lastModified: currentDate, changeFrequency: 'monthly', priority: 0.9 },
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
    lastModified: currentDate,
    changeFrequency: 'monthly',
    priority: 0.9,
  }));

  // Neighborhood landing pages — local long-tail keywords
  const neighborhoodRoutes = NEIGHBORHOODS.map((n) => ({
    url: `${baseUrl}/neighborhoods/${n.slug}`,
    lastModified: currentDate,
    changeFrequency: 'monthly',
    priority: 0.85,
  }));

  // Dynamic portfolio project detail pages
  const projectRoutes = PROJECTS.map((project) => ({
    url: `${baseUrl}/projects/${project.slug}`,
    lastModified: currentDate,
    changeFrequency: 'monthly',
    priority: 0.8,
  }));

  return [...staticRoutes, ...serviceRoutes, ...neighborhoodRoutes, ...projectRoutes];
}
