import ContactForm from '@/components/contact/ContactForm';
import LocationMap from '@/components/contact/LocationMap';
import BreadcrumbSchema from '@/components/seo/BreadcrumbSchema';

export const metadata = {
  title: 'Contact & Studio Consultation',
  description:
    'Initiate a bespoke luxury interior or turnkey civil construction consultation with Clay and Bricks in Bhubaneswar, Odisha. Schedule an architectural consultation.',
  alternates: {
    canonical: '/contact',
  },
};

export default function ContactPage() {
  return (
    <div
      style={{
        background: 'var(--charcoal)',
        padding: 'clamp(90px, 12vh, 180px) clamp(16px, 4.5vw, 96px)',
      }}
    >
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: '/' },
          { name: 'Contact & Consultation', url: '/contact' },
        ]}
      />
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 300px), 1fr))',
          gap: 'clamp(48px, 8vw, 100px)',
          alignItems: 'flex-start',
        }}
      >
        <ContactForm />
        <LocationMap />
      </div>
    </div>
  );
}
