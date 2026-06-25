import { useState, useEffect, useCallback } from 'react';

/**
 * Custom hook that produces a typewriter effect — cycling through
 * an array of strings with configurable typing/deleting speeds.
 *
 * @param {string[]} texts - Array of strings to cycle through.
 * @param {number}   typingSpeed  - Milliseconds per character (typing).
 * @param {number}   deletingSpeed - Milliseconds per character (deleting).
 * @param {number}   pauseTime    - Pause at full text before deleting.
 * @returns {string} The current display text.
 */
export function useTypingEffect(
  texts,
  typingSpeed = 80,
  deletingSpeed = 40,
  pauseTime = 2000
) {
  const [displayText, setDisplayText] = useState('');
  const [textIndex, setTextIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [isPaused, setIsPaused] = useState(false);

  const tick = useCallback(() => {
    const currentText = texts[textIndex];

    if (isPaused) return;

    if (!isDeleting) {
      /* Typing forward */
      if (charIndex < currentText.length) {
        setDisplayText(currentText.slice(0, charIndex + 1));
        setCharIndex((c) => c + 1);
      } else {
        /* Finished typing — pause before deleting */
        setIsPaused(true);
        setTimeout(() => {
          setIsPaused(false);
          setIsDeleting(true);
        }, pauseTime);
      }
    } else {
      /* Deleting backward */
      if (charIndex > 0) {
        setDisplayText(currentText.slice(0, charIndex - 1));
        setCharIndex((c) => c - 1);
      } else {
        /* Finished deleting — move to next string */
        setIsDeleting(false);
        setTextIndex((t) => (t + 1) % texts.length);
      }
    }
  }, [charIndex, isDeleting, isPaused, textIndex, texts, pauseTime]);

  useEffect(() => {
    if (isPaused) return;
    const speed = isDeleting ? deletingSpeed : typingSpeed;
    const timer = setTimeout(tick, speed);
    return () => clearTimeout(timer);
  }, [tick, isDeleting, isPaused, typingSpeed, deletingSpeed]);

  return displayText;
}
