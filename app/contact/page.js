import ContactForm from '@/components/contact/ContactForm';
import LocationMap from '@/components/contact/LocationMap';

export const metadata = {
  title: 'Inquire & Contact | Clay and Bricks',
  description: 'Initiate a bespoke luxury interior or turnkey construction consultation with Clay and Bricks in Bhubaneswar.',
};

export default function ContactPage() {
  return (
    <div
      style={{
        background: 'var(--charcoal)',
        padding: 'clamp(100px, 14vh, 180px) clamp(24px, 6vw, 96px)',
      }}
    >
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))',
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
