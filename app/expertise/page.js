import ExpertiseHero from '@/components/expertise/ExpertiseHero';
import ExpertiseCapabilities from '@/components/expertise/ExpertiseCapabilities';
import ConsultationCTA from '@/components/home/ConsultationCTA';
import BreadcrumbSchema from '@/components/seo/BreadcrumbSchema';

export const metadata = {
  title: 'Architecture, Interior Design & Civil Construction Capabilities',
  description:
    'Comprehensive interior architecture, 3D photorealistic digital twins, structural civil engineering, and turnkey construction capabilities in Bhubaneswar, Odisha.',
  alternates: {
    canonical: '/expertise',
  },
};

export default function ExpertisePage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: '/' },
          { name: 'Expertise & Capabilities', url: '/expertise' },
        ]}
      />
      <ExpertiseHero />
      <ExpertiseCapabilities />
      <ConsultationCTA />
    </>
  );
}
