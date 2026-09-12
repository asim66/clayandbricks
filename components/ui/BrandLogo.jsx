/**
 * BrandLogo — Vector crisp official Clay and Bricks brand emblem.
 * Infinite resolution, zero pixelation on Retina/4K displays.
 */
export default function BrandLogo({ size = 52, className = '' }) {
  return (
    <div
      className={className}
      style={{
        position:     'relative',
        width:        `${size}px`,
        height:       `${size}px`,
        borderRadius: '50%',
        overflow:     'hidden',
        boxShadow:    '0 4px 16px rgba(0,0,0,0.35)',
        border:       '1.5px solid rgba(184,151,90,0.4)',
        flexShrink:   0,
        background:   '#e8ebec',
      }}
    >
      <svg
        viewBox="0 0 400 400"
        width="100%"
        height="100%"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Circular Base */}
        <circle cx="200" cy="200" r="200" fill="#e8ebec" />

        {/* Main Right Gable Wall (Warm Beige/Cream) */}
        <polygon points="248,88 346,134 346,270 248,270" fill="#eedcb7" />

        {/* Left Slanted Wall (Pure White) */}
        <polygon points="54,208 248,88 248,270 54,270" fill="#ffffff" />

        {/* Main Slanted Roof Beam Line (Slate Teal) */}
        <polygon points="54,196 248,74 248,88 54,208" fill="#1e4e52" />
        <polygon points="248,74 346,122 346,134 248,88" fill="#1e4e52" />

        {/* Entrance Feature / Modern Door Frame (Deep Slate) */}
        <polygon points="175,124 266,172 266,270 175,270" fill="#173436" />

        {/* Window Glass Panes & Reflections */}
        <polygon points="207,162 227,172 227,204 207,188" fill="#ec9a43" />
        <polygon points="207,188 227,204 227,224 207,224" fill="#326c70" />

        <polygon points="231,174 259,188 259,224 231,224" fill="#326c70" />
        <polygon points="242,194 259,202 259,224 242,224" fill="#ec9a43" />

        <polygon points="207,227 227,227 227,270 207,270" fill="#326c70" />
        <polygon points="231,227 259,227 259,270 231,270" fill="#326c70" />
        <polygon points="242,227 259,227 259,270 242,270" fill="#ec9a43" />

        {/* Window Framing Cross Lines */}
        <line x1="207" y1="225" x2="259" y2="225" stroke="#173436" strokeWidth="3" />
        <line x1="229" y1="172" x2="229" y2="270" stroke="#173436" strokeWidth="3" />

        {/* Typography Inside Emblem */}
        <text
          x="200"
          y="298"
          textAnchor="middle"
          fill="#13363a"
          style={{
            fontFamily:    'var(--font-sans)',
            fontSize:      '26px',
            fontWeight:    800,
            letterSpacing: '2.5px',
          }}
        >
          CLAY AND BRICKS
        </text>

        <text
          x="200"
          y="322"
          textAnchor="middle"
          fill="#13363a"
          style={{
            fontFamily:    'var(--font-sans)',
            fontSize:      '14px',
            fontWeight:    600,
            letterSpacing: '0.6px',
          }}
        >
          We Build Your Dream House
        </text>
      </svg>
    </div>
  );
}
