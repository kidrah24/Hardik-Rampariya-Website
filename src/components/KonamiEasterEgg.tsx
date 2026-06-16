import { motion, AnimatePresence } from 'motion/react';
import { useKonamiCode } from '../hooks/useKonamiCode';
import { Trophy, X } from 'lucide-react';
import { useState, useEffect } from 'react';

export default function KonamiEasterEgg() {
  const { konamiSuccess } = useKonamiCode();
  const [show, setShow] = useState(false);

  useEffect(() => {
    if (konamiSuccess) {
      setShow(true);
    }
  }, [konamiSuccess]);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 backdrop-blur-sm p-4"
        >
          <motion.div 
            initial={{ scale: 0.5, y: 50 }}
            animate={{ scale: 1, y: 0 }}
            transition={{ type: "spring", bounce: 0.5 }}
            className="bg-slate-900 border-2 border-yellow-500 max-w-sm w-full p-8 rounded-3xl relative flex flex-col items-center text-center shadow-[0_0_50px_rgba(242,125,38,0.3)]"
          >
            <button 
              onClick={() => setShow(false)}
              className="absolute top-4 right-4 text-slate-500 hover:text-white transition-colors"
            >
               <X size={24} />
            </button>
            
            <div className="w-20 h-20 bg-yellow-500/20 rounded-full flex items-center justify-center mb-6">
              <Trophy size={40} className="text-yellow-500" />
            </div>
            
            <h3 className="text-2xl font-black text-white mb-2 text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-amber-600">SECRET UNLOCKED</h3>
            <p className="text-slate-300 mb-6">Achievement Unlocked: Early Believer in Web3.</p>
            
            <p className="text-xs text-yellow-500/70 font-mono">You found the Konami Code.</p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
