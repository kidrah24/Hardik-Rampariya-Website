import { useEffect, useState } from 'react';
import { playLevelUpSound } from '../utils/audio';

const LEVEL_THRESHOLDS = [0, 100, 300, 600, 1000, 1500, 2100, 2800, 3600, 4500, 5500];

export function useScrollXP() {
  const [xp, setXp] = useState(0);
  const [level, setLevel] = useState(1);
  const [justLeveledUp, setJustLeveledUp] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      
      const scrollPercentage = scrollPosition / (documentHeight - windowHeight);
      const calculatedXp = Math.floor(scrollPercentage * 5500); // Max XP reachable
      
      setXp(Math.max(calculatedXp, 0));
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    let currentLevel = 1;
    for (let i = 0; i < LEVEL_THRESHOLDS.length; i++) {
      if (xp >= LEVEL_THRESHOLDS[i]) {
        currentLevel = i + 1;
      }
    }
    
    if (currentLevel > level) {
      playLevelUpSound();
      setJustLeveledUp(true);
      setLevel(currentLevel);
      setTimeout(() => setJustLeveledUp(false), 3000); // hide notification after 3s
    }
  }, [xp, level]);

  return { xp, level, justLeveledUp };
}
