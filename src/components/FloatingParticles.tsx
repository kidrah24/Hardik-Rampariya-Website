import { useEffect, useState } from 'react';
import { motion } from 'motion/react';

export default function FloatingParticles() {
  const [particles, setParticles] = useState<Array<{ id: number, x: number; y: number; size: number; duration: number }>>([]);

  useEffect(() => {
    const generateParticles = () => {
      const newParticles = Array.from({ length: 20 }).map((_, i) => ({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random() * 2 + 1,
        duration: Math.random() * 30 + 20,
      }));
      setParticles(newParticles);
    };
    generateParticles();
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden opacity-30">
      {particles.map((p) => (
        <motion.div
          key={p.id}
          className="absolute rounded-full bg-[#F27D26]"
          style={{ width: p.size, height: p.size, left: `${p.x}%`, top: `${p.y}%` }}
          animate={{
            y: ['0%', '-100vh'],
            opacity: [0, 1, 0]
          }}
          transition={{
            duration: p.duration,
            repeat: Infinity,
            ease: 'linear',
          }}
        />
      ))}
    </div>
  );
}
