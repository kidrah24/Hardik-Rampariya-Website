import { useState, useEffect } from 'react';

const KONAMI_CODE = [
  'ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown',
  'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight',
  'b', 'a'
];

export function useKonamiCode() {
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    const sequence: string[] = [];
    const targetSequence = KONAMI_CODE.join(',');

    const handleKeyDown = (e: KeyboardEvent) => {
      sequence.push(e.key);
      if (sequence.length > KONAMI_CODE.length) {
        sequence.shift();
      }
      if (sequence.join(',') === targetSequence) {
        setSuccess(true);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return { konamiSuccess: success };
}
