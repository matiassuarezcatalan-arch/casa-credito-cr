import { useEffect, useRef, useState, type RefObject } from "react";

/**
 * Returns a ref and a boolean indicating whether the element is in view.
 * Triggers once. Respects prefers-reduced-motion.
 */
export function useAnimateOnScroll<T extends HTMLElement = HTMLDivElement>(
  threshold = 0.15
): [RefObject<T | null>, boolean] {
  const ref = useRef<T | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReduced) {
      setVisible(true);
      return;
    }

    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.unobserve(el);
        }
      },
      { threshold }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold]);

  return [ref, visible];
}

/** CSS classes for fade-in-up effect */
export const fadeUpClass = (visible: boolean, delay = 0) =>
  `transition-all duration-500 ease-out ${
    visible
      ? "opacity-100 translate-y-0"
      : "opacity-0 translate-y-6"
  }` + (delay ? ` [transition-delay:${delay}ms]` : "");

/** Stagger helper: returns delay in ms for index i */
export const stagger = (i: number, base = 100) => i * base;
