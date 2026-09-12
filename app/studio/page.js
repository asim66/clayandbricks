import StudioNarrative from '@/components/studio/StudioNarrative';
import ProcessTimeline from '@/components/studio/ProcessTimeline';
import TeamGrid from '@/components/studio/TeamGrid';

export const metadata = {
  title: 'Studio & Philosophy | Clay and Bricks',
  description: '15 years of architecture and luxury interior craft rooted in the material vernacular of Odisha.',
};

export default function StudioPage() {
  return (
    <div style={{ paddingTop: 'clamp(80px, 12vh, 120px)' }}>
      <StudioNarrative />
      <ProcessTimeline />
      <TeamGrid />
    </div>
  );
}
