/**
 * SectionLabel — reusable "NN / Title" eyebrow with gold dash accent.
 * Used consistently across all pages for section numbering.
 */
export default function SectionLabel({ number, label, color = 'var(--gold)' }) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
      <span
        style={{
          fontFamily:    'var(--font-sans)',
          fontSize:      '0.6rem',
          letterSpacing: '0.32em',
          textTransform: 'uppercase',
          color,
        }}
      >
        {number}
      </span>
      <span
        style={{
          display:    'block',
          width:      '32px',
          height:     '1px',
          background: color,
          opacity:    0.5,
        }}
        aria-hidden="true"
      />
      <span
        style={{
          fontFamily:    'var(--font-sans)',
          fontSize:      '0.6rem',
          letterSpacing: '0.28em',
          textTransform: 'uppercase',
          color:         'rgba(242,237,232,0.38)',
        }}
      >
        {label}
      </span>
    </div>
  );
}
