import ExpertiseHero from '@/components/expertise/ExpertiseHero';
import ExpertiseCapabilities from '@/components/expertise/ExpertiseCapabilities';
import ConsultationCTA from '@/components/home/ConsultationCTA';

export const metadata = {
  title: 'Expertise & Capabilities | Clay and Bricks',
  description: 'Full-spectrum interior architecture, 3D visualization, structural civil engineering, and turnkey construction in Bhubaneswar.',
};

export default function ExpertisePage() {
  return (
    <>
      <ExpertiseHero />
      <ExpertiseCapabilities />
      <ConsultationCTA />
    </>
  );
}
