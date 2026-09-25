import { motion, AnimatePresence } from 'motion/react';
import { Zap } from 'lucide-react';

interface Props {
  level: number;
  xp: number;
  justLeveledUp: boolean;
}

export default function UI({ level, xp, justLeveledUp }: Props) {
  return (
    <>
      {/* Top Bar / HUD */}
      <div className="fixed top-0 left-0 right-0 h-16 flex items-center justify-between px-4 md:px-6 bg-[#0A0A0A]/80 backdrop-blur-md border-b border-[#F27D26]/20 z-50 pointer-events-auto shadow-lg">
        <div className="flex items-center gap-3 md:gap-4">
          <div className="w-10 h-10 rounded bg-[#F27D26] flex items-center justify-center font-bold text-black flex-shrink-0">HR</div>
          <div className="hidden sm:block">
            <div className="text-[10px] text-[#F27D26] uppercase tracking-widest font-bold">Player Status • LVL {level}</div>
            <div className="text-lg font-medium tracking-tight">Hardik Rampariya</div>
          </div>
        </div>
        <div className="flex-1 mx-4 md:mx-12">
          <div className="flex justify-between text-[10px] mb-1 uppercase tracking-widest font-semibold">
            <span className="text-[#F27D26]">Career Progress</span>
            <span className="text-[#F27D26]">{Math.min(Math.floor((xp / 5500) * 100), 100)}%</span>
          </div>
          <div className="w-full h-2 bg-[#1A1A1A] rounded-full border border-white/5 overflow-hidden">
            <motion.div 
              className="h-full bg-gradient-to-r from-[#F27D26] to-[#FF4E00]"
              initial={{ width: 0 }}
              animate={{ width: `${Math.min((xp / 5500) * 100, 100)}%` }}
              transition={{ duration: 0.3 }}
            ></motion.div>
          </div>
        </div>
      </div>

      {/* Level Up Notification */}
      <AnimatePresence>
        {justLeveledUp && (
          <motion.div
            initial={{ opacity: 0, y: -50, scale: 0.8 }}
            animate={{ opacity: 1, y: 20, scale: 1 }}
            exit={{ opacity: 0, y: -50, scale: 0.8 }}
            className="fixed top-20 left-1/2 -translate-x-1/2 z-50 pointer-events-none"
          >
            <div className="bg-yellow-500/10 border border-yellow-500/50 backdrop-blur-md px-6 py-3 rounded-full flex items-center gap-3 shadow-[0_0_30px_rgba(242,125,38,0.3)]">
              <Zap className="text-yellow-500 animate-pulse" />
              <span className="text-yellow-500 font-bold uppercase tracking-widest text-sm">
                Milestone Reached!
              </span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
