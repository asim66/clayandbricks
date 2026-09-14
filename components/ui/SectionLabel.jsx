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
          fontSize:      '0.75rem',
          fontWeight:    600,
          letterSpacing: '0.24em',
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
          opacity:    0.7,
        }}
        aria-hidden="true"
      />
      <span
        style={{
          fontFamily:    'var(--font-sans)',
          fontSize:      '0.75rem',
          fontWeight:    500,
          letterSpacing: '0.22em',
          textTransform: 'uppercase',
          color:         'rgba(242,237,232,0.72)',
        }}
      >
        {label}
      </span>
    </div>
  );
}
