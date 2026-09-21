import StudioNarrative from '@/components/studio/StudioNarrative';
import ProcessTimeline from '@/components/studio/ProcessTimeline';
import TeamGrid from '@/components/studio/TeamGrid';
import BreadcrumbSchema from '@/components/seo/BreadcrumbSchema';

export const metadata = {
  title: 'Architecture Studio & Design Philosophy',
  description:
    '15 years of luxury architectural practice and interior craft rooted in the material vernacular of Odisha. Meet the architects and civil engineers behind Clay and Bricks in Bhubaneswar.',
  alternates: {
    canonical: '/studio',
  },
};

export default function StudioPage() {
  return (
    <div style={{ paddingTop: 'clamp(80px, 12vh, 120px)' }}>
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: '/' },
          { name: 'Studio & Philosophy', url: '/studio' },
        ]}
      />
      <StudioNarrative />
      <ProcessTimeline />
      <TeamGrid />
    </div>
  );
}
