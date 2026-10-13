import { useEffect, useState, useRef } from 'react';
import { playLevelUpSound } from '../utils/audio';

const LEVEL_THRESHOLDS = [0, 100, 300, 600, 1000, 1500, 2100, 2800, 3600, 4500, 5500];

export function useScrollXP() {
  const [xp, setXp] = useState(0);
  const [level, setLevel] = useState(1);
  const [justLeveledUp, setJustLeveledUp] = useState(false);
  const lastXpRef = useRef(0);
  const levelRef = useRef(1);
  const rafIdRef = useRef<number | null>(null);

  useEffect(() => {
    const updateScroll = () => {
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      const maxScroll = documentHeight - windowHeight;

      if (maxScroll <= 0) return;

      const scrollPercentage = Math.min(Math.max(scrollPosition / maxScroll, 0), 1);
      const calculatedXp = Math.floor(scrollPercentage * 5500);

      // Only update state if change is noticeable to prevent continuous re-rendering
      if (Math.abs(calculatedXp - lastXpRef.current) >= 15 || calculatedXp >= 5500 || calculatedXp === 0) {
        lastXpRef.current = calculatedXp;
        setXp(calculatedXp);

        let currentLevel = 1;
        for (let i = 0; i < LEVEL_THRESHOLDS.length; i++) {
          if (calculatedXp >= LEVEL_THRESHOLDS[i]) {
            currentLevel = i + 1;
          }
        }

        if (currentLevel > levelRef.current) {
          levelRef.current = currentLevel;
          setLevel(currentLevel);
          playLevelUpSound();
          setJustLeveledUp(true);
          setTimeout(() => setJustLeveledUp(false), 2500);
        }
      }
    };

    const handleScroll = () => {
      if (rafIdRef.current !== null) return;
      rafIdRef.current = window.requestAnimationFrame(() => {
        updateScroll();
        rafIdRef.current = null;
      });
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (rafIdRef.current !== null) {
        window.cancelAnimationFrame(rafIdRef.current);
      }
    };
  }, []);

  return { xp, level, justLeveledUp };
}
