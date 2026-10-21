import { useEffect } from 'react';

// Subtle scroll-in animations with anime.js.
// Mark elements with `data-reveal` (animate the element) or `data-reveal-group`
// (animate each child, staggered left-to-right within a row). Only elements that
// start below the fold are animated, so first paint and LCP are unaffected.
// Nothing runs when the visitor prefers reduced motion.
// @see: https://animejs.com/documentation/events/onscroll
const OFFSET_Y = 16;
const DURATION = 600;
const ROW_STAGGER = 80;

const isBelowFold = (el: Element): boolean => (
  el.getBoundingClientRect().top > window.innerHeight * 0.92
);

// Delay by position within a visual row, so a row of cards reveals left to right.
const rowIndex = (el: HTMLElement): number => {
  const siblings = Array.from(el.parentElement?.children || []) as HTMLElement[];
  const sameRow = siblings.filter((s) => s.offsetTop === el.offsetTop);
  return Math.max(0, sameRow.indexOf(el));
};

const useScrollReveal = (): void => {
  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      return undefined;
    }

    let cancelled = false;
    const observers: { revert: () => void }[] = [];

    // Lazy-loaded after hydration; webpackExports keeps the chunk to what we use.
    import(/* webpackExports: ["animate", "onScroll", "set"] */ 'animejs').then(({ animate, onScroll, set }) => {
      if (cancelled) return;

      const reveal = (el: HTMLElement, delay: number): void => {
        set(el, { opacity: 0, translateY: OFFSET_Y });
        let done = false;
        const observer = onScroll({
          target: el,
          enter: '92% top',
          onEnter: () => {
            if (done) return;
            done = true;
            animate(el, {
              opacity: [0, 1],
              translateY: [OFFSET_Y, 0],
              duration: DURATION,
              delay,
              ease: 'outCubic',
              // Hand control back to CSS (e.g. hover transforms) once finished.
              onComplete: () => {
                el.style.removeProperty('opacity');
                el.style.removeProperty('transform');
              },
            });
          },
        });
        observers.push(observer);
      };

      document.querySelectorAll<HTMLElement>('[data-reveal]').forEach((el) => {
        if (isBelowFold(el)) reveal(el, 0);
      });

      document.querySelectorAll<HTMLElement>('[data-reveal-group]').forEach((group) => {
        Array.from(group.children).forEach((child) => {
          const el = child as HTMLElement;
          if (isBelowFold(el)) reveal(el, rowIndex(el) * ROW_STAGGER);
        });
      });
    });

    return (): void => {
      cancelled = true;
      observers.forEach((observer) => observer.revert());
    };
  }, []);
};

export default useScrollReveal;
