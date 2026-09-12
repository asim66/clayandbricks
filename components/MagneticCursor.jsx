'use client';
import { useEffect, useRef } from 'react';
import gsap from 'gsap';

/**
 * MagneticCursor
 * A smooth dual-layer cursor: a small dot (gsap-tracked) and a
 * lagging ring that "magnetises" toward interactive elements.
 */
export default function MagneticCursor() {
  const dotRef  = useRef(null);
  const ringRef = useRef(null);

  useEffect(() => {
    const dot  = dotRef.current;
    const ring = ringRef.current;
    if (!dot || !ring) return;

    let mouseX = 0, mouseY = 0;
    let ringX  = 0, ringY  = 0;
    let raf;

    const onMouseMove = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      gsap.to(dot, { x: mouseX, y: mouseY, duration: 0.1, ease: 'power2.out' });
    };

    const lerp = (a, b, n) => a + (b - a) * n;
    const loop = () => {
      ringX = lerp(ringX, mouseX, 0.085);
      ringY = lerp(ringY, mouseY, 0.085);
      gsap.set(ring, { x: ringX, y: ringY });
      raf = requestAnimationFrame(loop);
    };
    raf = requestAnimationFrame(loop);

    // Expand ring on hover of interactive elements
    const expandTargets = document.querySelectorAll(
      'a, button, [data-cursor-expand]'
    );
    const expand  = () => ring.classList.add('expanded');
    const shrink  = () => ring.classList.remove('expanded');

    expandTargets.forEach((el) => {
      el.addEventListener('mouseenter', expand);
      el.addEventListener('mouseleave', shrink);
    });

    window.addEventListener('mousemove', onMouseMove);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      cancelAnimationFrame(raf);
      expandTargets.forEach((el) => {
        el.removeEventListener('mouseenter', expand);
        el.removeEventListener('mouseleave', shrink);
      });
    };
  }, []);

  return (
    <>
      <div ref={dotRef}  className="cursor-dot"  aria-hidden="true" />
      <div ref={ringRef} className="cursor-ring" aria-hidden="true" />
    </>
  );
}
