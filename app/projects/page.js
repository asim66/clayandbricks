import ProjectGrid from '@/components/projects/ProjectGrid';

export const metadata = {
  title: 'Works & Architecture Portfolio | Clay and Bricks',
  description: 'Selected luxury residential and commercial architecture projects across Bhubaneswar and Odisha.',
};

export default function ProjectsPage() {
  return (
    <div style={{ paddingTop: 'clamp(80px, 12vh, 120px)' }}>
      <ProjectGrid />
    </div>
  );
}
