import { useState, useEffect } from 'react';

/**
 * ScrollProgress — A thin, gradient progress bar fixed at the top
 * of the viewport, indicating how far the user has scrolled.
 */
export default function ScrollProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      const scrollPos = window.scrollY;
      setProgress(totalHeight > 0 ? (scrollPos / totalHeight) * 100 : 0);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="fixed top-0 left-0 w-full h-[3px] z-[100] bg-transparent">
      <div
        className="h-full bg-gradient-to-r from-primary via-secondary to-accent transition-[width] duration-150 ease-out"
        style={{ width: `${progress}%` }}
      />
    </div>
  );
}
