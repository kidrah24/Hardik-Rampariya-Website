import { motion } from 'motion/react';
import { web3Quests } from '../data';
import { CheckCircle2, Circle } from 'lucide-react';

export default function Web3Quest() {
  return (
    <section className="py-32 relative max-w-5xl mx-auto px-6" id="level-2">
      <div className="mb-16">
        <h2 className="text-sm font-mono text-purple-500 tracking-widest uppercase mb-2">Level 2</h2>
        <h3 className="text-4xl md:text-5xl font-bold text-white tracking-tight">Discovering Web3</h3>
        <p className="text-slate-400 mt-4 max-w-2xl text-lg">
          One day Hardik saw a friend sell Blender art for internet money. Curiosity triggered.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {web3Quests.map((quest, index) => (
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.15 }}
            whileHover={{ y: -5 }}
            key={quest.id}
            className="bg-slate-900/60 border border-slate-700 hover:border-purple-500/50 rounded-2xl p-6 backdrop-blur-md relative overflow-hidden group"
          >
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-purple-600 to-cyan-500 opacity-0 group-hover:opacity-100 transition-opacity"></div>
            
            <div className="flex justify-between items-start mb-4">
              <div className="bg-purple-900/30 p-3 rounded-xl text-purple-400">
                {quest.completed ? <CheckCircle2 size={24} /> : <Circle size={24} />}
              </div>
              <span className="text-xs font-mono text-purple-400 bg-purple-900/20 px-2 py-1 rounded">
                QUEST COMPLETED
              </span>
            </div>
            
            <h4 className="text-xl font-bold text-slate-100 mb-2">{quest.title}</h4>
            <p className="text-slate-400 text-sm">{quest.description}</p>
          </motion.div>
        ))}
      </div>
      
      {/* Decorative RPG elements */}
      <motion.div 
        animate={{ rotate: 360 }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        className="absolute right-10 top-20 w-64 h-64 border border-purple-500/10 rounded-full border-dashed hidden lg:block pointer-events-none"
      />
    </section>
  );
}
