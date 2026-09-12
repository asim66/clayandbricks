'use client';
import { useEffect } from 'react';
import Lenis from 'lenis';

/**
 * SmoothScrollProvider
 * Mounts Lenis and wires it into GSAP's ticker for frame-perfect sync.
 * Wrap around any subtree — typically the root layout body.
 */
export default function SmoothScrollProvider({ children }) {
  useEffect(() => {
    let lenis;
    let animFrameId;

    const init = async () => {
      lenis = new Lenis({
        duration: 1.4,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        orientation: 'vertical',
        smoothWheel: true,
        touchMultiplier: 2,
      });

      // Wire Lenis into GSAP ScrollTrigger if available
      try {
        const { default: gsap } = await import('gsap');
        const { ScrollTrigger }  = await import('gsap/ScrollTrigger');
        gsap.registerPlugin(ScrollTrigger);
        lenis.on('scroll', ScrollTrigger.update);
        gsap.ticker.add((time) => lenis.raf(time * 1000));
        gsap.ticker.lagSmoothing(0);
      } catch {
        // Fallback: native rAF loop
        const raf = (time) => {
          lenis.raf(time);
          animFrameId = requestAnimationFrame(raf);
        };
        animFrameId = requestAnimationFrame(raf);
      }
    };

    init();

    return () => {
      lenis?.destroy();
      if (animFrameId) cancelAnimationFrame(animFrameId);
    };
  }, []);

  return <>{children}</>;
}
