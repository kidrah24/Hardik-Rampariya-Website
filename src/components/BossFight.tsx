import { motion } from 'motion/react';
import { bossData } from '../data';
import { Skull } from 'lucide-react';

export default function BossFight() {
  return (
    <section className="py-32 relative max-w-7xl mx-auto px-6" id="level-8">
      <div className="mb-16 text-center flex flex-col items-center">
        <Skull size={40} className="text-rose-500 mb-4" />
        <h2 className="text-4xl md:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-br from-rose-400 to-red-600 uppercase tracking-tighter">
          Bosses Defeated
        </h2>
        <p className="text-slate-400 mt-4 text-lg">The hardest levels I've cleared so far.</p>
      </div>

      <div className="flex flex-wrap justify-center gap-6">
        {bossData.map((boss, i) => (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
            whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.05, y: -10, rotate: i % 2 === 0 ? 2 : -2 }}
            transition={{ type: 'spring', stiffness: 300 }}
            key={boss.id}
            className="w-72 bg-gradient-to-b from-slate-900 to-black rounded-2xl border-2 border-slate-800 hover:border-rose-500 p-2 relative group overflow-hidden shadow-2xl flex-shrink-0"
          >
             <div className="absolute inset-0 bg-rose-500/10 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"></div>
             
             <div className="h-40 rounded-xl overflow-hidden mb-4 relative">
               <div className="absolute inset-0 bg-black/40 z-10"></div>
               <img src={boss.image} alt={boss.name} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" />
               <div className="absolute bottom-2 right-2 px-2 py-1 bg-rose-600 text-white text-[10px] font-mono uppercase font-bold rounded z-20">
                 DEFEATED
               </div>
             </div>
             
             <div className="px-3 pb-4">
               <h4 className="text-lg font-bold text-slate-100 mb-2 leading-tight">{boss.name}</h4>
               <p className="text-xs text-slate-400 font-mono italic">{boss.description}</p>
             </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
