import ProjectGrid from '@/components/projects/ProjectGrid';
import BreadcrumbSchema from '@/components/seo/BreadcrumbSchema';

export const metadata = {
  title: 'Curated Architecture & Luxury Interior Portfolio',
  description:
    'Explore selected luxury villas, duplex residences, turnkey apartments, and commercial architecture projects across Bhubaneswar and Odisha by Clay and Bricks.',
  alternates: {
    canonical: '/projects',
  },
};

export default function ProjectsPage() {
  return (
    <div style={{ paddingTop: 'clamp(80px, 12vh, 120px)' }}>
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: '/' },
          { name: 'Portfolio of Works', url: '/projects' },
        ]}
      />
      <ProjectGrid />
    </div>
  );
}
