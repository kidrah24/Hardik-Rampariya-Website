import { motion } from 'motion/react';
import { useEffect, useState } from 'react';
import { playClickSound } from '../utils/audio';

const ROLES = [
  "Graphic Designer",
  "Motion Designer",
  "Community Manager",
  "Web3 Marketer",
  "Content Creator",
  "Future Founder"
];

export default function Hero({ onStart }: { onStart: () => void }) {
  const [roleIndex, setRoleIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % ROLES.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  const handleClick = () => {
    playClickSound();
    onStart();
  };

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden">
      {/* Background City/Grid */}
      <div className="absolute inset-0 z-0 opacity-20 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:4rem_4rem]">
        <div className="absolute bottom-0 left-0 right-0 top-0 bg-[radial-gradient(circle_800px_at_50%_50%,#000_0%,transparent_100%)]"></div>
         {/* Cyberpunk Ground */}
         <div className="absolute bottom-0 w-full h-[30vh] bg-gradient-to-t from-cyan-900/30 to-transparent transform perspective-[1000px] rotate-x-[60deg] scale-150 transform-origin-bottom"></div>
      </div>

      <div className="relative z-10 flex flex-col items-center max-w-4xl px-4 text-center">
        <motion.h1
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, type: "spring" }}
          className="text-6xl md:text-8xl lg:text-[140px] font-black text-white tracking-tighter mb-4"
          style={{ textShadow: "0 0 40px rgba(242, 125, 38, 0.4)" }}
        >
          HARDIK <br className="md:hidden" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-white/70">
            RAMPARIYA
          </span>
        </motion.h1>

        <div className="h-12 mb-8 mt-4">
          <motion.div
            key={roleIndex}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="text-xl md:text-3xl text-white/80 font-mono"
          >
            &gt; {ROLES[roleIndex]}_
          </motion.div>
        </div>

        <p className="text-white/60 max-w-2xl text-lg md:text-xl font-light mb-12">
          Builder • Creator • Designer • Web3 Explorer
        </p>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={handleClick}
          className="group relative px-8 py-3 bg-[#F27D26] text-black font-black uppercase tracking-widest text-sm shadow-[0_0_30px_rgba(242,125,38,0.4)] cursor-pointer"
        >
          <span className="relative flex items-center justify-center gap-2">
            Press Start
          </span>
        </motion.button>
      </div>
      
      <div className="absolute top-4 md:top-24 right-4 md:right-10 text-[10px] text-[#F27D26] font-mono opacity-30 mt-16 md:mt-0 tracking-widest z-10">REGION: WEB3_CITY_CENTER</div>
      <div className="absolute bottom-10 md:bottom-20 left-4 md:left-10 flex gap-1 z-10 hidden md:flex">
        <div className="w-2 h-2 bg-[#F27D26] rounded-full"></div>
        <div className="w-2 h-2 bg-[#F27D26]/40 rounded-full"></div>
        <div className="w-2 h-2 bg-[#F27D26]/20 rounded-full"></div>
      </div>
    </section>
  );
}
