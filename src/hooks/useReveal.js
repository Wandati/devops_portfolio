import { useEffect, useRef, useState } from 'react';

/**
 * Reveal-on-scroll, as a ref + boolean. Replaces framer-motion's whileInView.
 *
 * The animation itself lives in CSS (.reveal / .is-visible in index.css) so
 * prefers-reduced-motion is honoured by the same media query that neutralises
 * every other animation, rather than by a second code path here.
 *
 * Triggering is threshold: 0 plus a negative bottom rootMargin, not a
 * fractional threshold. A fraction is measured against the target's own size,
 * so a section taller than the viewport can struggle to satisfy it and would
 * stay stuck at opacity 0 — the margin approach fires as soon as the element's
 * leading edge clears the trigger line, at any element or viewport size.
 *
 * @param {{once?: boolean, offset?: string}} options
 * @returns {[React.RefObject, boolean]}
 */
export default function useReveal({ once = true, offset = '-12%' } = {}) {
  const ref = useRef(null);
  // Browsers without IntersectionObserver start visible, so content is never
  // gated behind an observer that will not run. Resolved in the initial state
  // rather than an effect, which would trigger a cascading render.
  const [visible, setVisible] = useState(() => typeof IntersectionObserver === 'undefined');

  useEffect(() => {
    const node = ref.current;
    if (!node || typeof IntersectionObserver === 'undefined') return undefined;

    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setVisible(true);
            if (once) observer.disconnect();
          } else if (!once) {
            setVisible(false);
          }
        });
      },
      { threshold: 0, rootMargin: `0px 0px ${offset} 0px` }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [once, offset]);

  return [ref, visible];
}
