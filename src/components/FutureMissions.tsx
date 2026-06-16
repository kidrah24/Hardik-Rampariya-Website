import { motion } from 'motion/react';
import { Target, ArrowRight } from 'lucide-react';

const missions = [
  "Build products",
  "Learn UI/UX deeply",
  "Explore AI",
  "Build blockchain products",
  "Grow creator brand",
  "Launch startups",
];

export default function FutureMissions() {
  return (
    <section className="py-32 relative max-w-5xl mx-auto px-6" id="level-7">
      <div className="mb-16">
        <h2 className="text-sm font-mono text-orange-500 tracking-widest uppercase mb-2">Level 7</h2>
        <h3 className="text-4xl md:text-5xl font-bold text-white tracking-tight">Future Missions</h3>
        <p className="text-slate-400 mt-4 text-lg">Current active quests on the bounty board.</p>
      </div>

      <div className="bg-slate-900/80 backdrop-blur-md rounded-3xl p-8 md:p-12 border border-slate-700 shadow-2xl relative overflow-hidden">
        {/* Decor */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-orange-500/10 rounded-full blur-[80px]" />
        
        <h4 className="text-2xl font-bold text-white mb-8 flex items-center gap-3">
          <Target className="text-orange-500" />
          Quest Board
        </h4>

        <div className="grid md:grid-cols-2 gap-4 relative z-10">
          {missions.map((mission, i) => (
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              key={i}
              className="group flex items-center justify-between p-4 bg-black/40 rounded-xl border border-slate-800 hover:border-orange-500/50 transition-colors cursor-crosshair"
            >
              <span className="text-slate-300 group-hover:text-white transition-colors">{mission}</span>
              <ArrowRight size={16} className="text-slate-600 group-hover:text-orange-500 transition-colors transform group-hover:translate-x-1" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
