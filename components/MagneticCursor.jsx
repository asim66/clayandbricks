'use client';
import { useEffect, useRef } from 'react';
import gsap from 'gsap';

/**
 * MagneticCursor
 * A high-performance, ultra-responsive dual-layer luxury cursor:
 * - Instant zero-latency tracking for the core dot
 * - Fluid, agile trailing ring with smooth magnetic expansion
 * - Immediate initialization upon first mouse movement (no slow lerp from 0,0)
 */
export default function MagneticCursor() {
  const dotRef  = useRef(null);
  const ringRef = useRef(null);

  useEffect(() => {
    // Disable custom cursor on touch/mobile devices
    if (typeof window === 'undefined' || window.matchMedia('(pointer: coarse)').matches) {
      return;
    }

    const dot  = dotRef.current;
    const ring = ringRef.current;
    if (!dot || !ring) return;

    let mouseX = -100;
    let mouseY = -100;
    let ringX  = -100;
    let ringY  = -100;
    let isInitialized = false;
    let raf;

    // High performance GSAP quickSetters for 60fps/120fps direct hardware transforms
    const setDotX = gsap.quickSetter(dot, 'x', 'px');
    const setDotY = gsap.quickSetter(dot, 'y', 'px');
    const setRingX = gsap.quickSetter(ring, 'x', 'px');
    const setRingY = gsap.quickSetter(ring, 'y', 'px');

    const onMouseMove = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;

      if (!isInitialized) {
        // Snap immediately to mouse position on first movement — prevent slow crawl from (0,0)
        ringX = mouseX;
        ringY = mouseY;
        setDotX(mouseX);
        setDotY(mouseY);
        setRingX(ringX);
        setRingY(ringY);
        dot.style.opacity = '1';
        ring.style.opacity = '1';
        isInitialized = true;
        return;
      }

      // Zero-latency instant tracking for the central pointer dot
      setDotX(mouseX);
      setDotY(mouseY);
    };

    // Smooth & responsive lerp (0.18 gives snappy, fluid inertia without feeling sluggish)
    const lerp = (a, b, n) => a + (b - a) * n;
    const loop = () => {
      if (isInitialized) {
        ringX = lerp(ringX, mouseX, 0.18);
        ringY = lerp(ringY, mouseY, 0.18);
        setRingX(ringX);
        setRingY(ringY);
      }
      raf = requestAnimationFrame(loop);
    };
    raf = requestAnimationFrame(loop);

    // Event delegation: instant expand for any links, buttons, or custom expand targets
    const onMouseOver = (e) => {
      const target = e.target;
      if (target && target.closest('a, button, [data-cursor-expand], input, textarea, select')) {
        ring.classList.add('expanded');
      } else {
        ring.classList.remove('expanded');
      }
    };

    const onMouseLeave = () => {
      dot.style.opacity = '0';
      ring.style.opacity = '0';
    };

    const onMouseEnter = () => {
      if (isInitialized) {
        dot.style.opacity = '1';
        ring.style.opacity = '1';
      }
    };

    window.addEventListener('mousemove', onMouseMove, { passive: true });
    document.addEventListener('mouseover', onMouseOver, { passive: true });
    document.addEventListener('mouseleave', onMouseLeave);
    document.addEventListener('mouseenter', onMouseEnter);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseover', onMouseOver);
      document.removeEventListener('mouseleave', onMouseLeave);
      document.removeEventListener('mouseenter', onMouseEnter);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <>
      <div ref={dotRef}  className="cursor-dot"  aria-hidden="true" />
      <div ref={ringRef} className="cursor-ring" aria-hidden="true" />
    </>
  );
}
