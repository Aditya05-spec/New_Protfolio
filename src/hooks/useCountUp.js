import { useState, useEffect, useRef } from 'react';

/**
 * Animated counter hook that counts from 0 to `target` when
 * the element scrolls into view (Intersection Observer).
 *
 * @param {number}  target   - The number to count up to.
 * @param {number}  duration - Animation duration in ms.
 * @param {boolean} isDecimal - Whether to display with decimals.
 * @returns {{ count: number, ref: React.RefObject }}
 */
export function useCountUp(target, duration = 2000, isDecimal = false) {
  const [count, setCount] = useState(0);
  const [hasStarted, setHasStarted] = useState(false);
  const ref = useRef(null);

  /* Observe visibility */
  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasStarted) {
          setHasStarted(true);
        }
      },
      { threshold: 0.3 }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [hasStarted]);

  /* Animate count once visible */
  useEffect(() => {
    if (!hasStarted) return;

    const totalSteps = 60;
    const increment = target / totalSteps;
    let current = 0;
    let step = 0;

    const timer = setInterval(() => {
      step++;
      current += increment;

      if (step >= totalSteps) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(isDecimal ? parseFloat(current.toFixed(2)) : Math.floor(current));
      }
    }, duration / totalSteps);

    return () => clearInterval(timer);
  }, [hasStarted, target, duration, isDecimal]);

  return { count, ref };
}
