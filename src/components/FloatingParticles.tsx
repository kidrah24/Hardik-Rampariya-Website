import { useMemo } from 'react';

export default function FloatingParticles() {
  const particles = useMemo(() => {
    return Array.from({ length: 16 }).map((_, i) => ({
      id: i,
      left: `${(i * 6.25 + 2).toFixed(1)}%`,
      top: `${((i * 19) % 90 + 5).toFixed(1)}%`,
      size: (i % 3) + 2,
      duration: 18 + (i % 5) * 4,
      delay: -(i % 7) * 3,
    }));
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden opacity-25">
      {particles.map((p) => (
        <span
          key={p.id}
          className="absolute rounded-full bg-[#F27D26] animate-float-up pointer-events-none"
          style={{
            width: `${p.size}px`,
            height: `${p.size}px`,
            left: p.left,
            top: p.top,
            animationDuration: `${p.duration}s`,
            animationDelay: `${p.delay}s`,
          }}
        />
      ))}
    </div>
  );
}
