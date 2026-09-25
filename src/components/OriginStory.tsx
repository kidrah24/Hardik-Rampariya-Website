import { motion } from 'motion/react';
import { timelineData } from '../data';
import { Award } from 'lucide-react';

export default function OriginStory() {
  return (
    <section className="py-32 relative max-w-5xl mx-auto px-6">
      <div className="mb-16">
        <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight">Career Arc</h2>
      </div>

      <div className="relative border-l-2 border-slate-800 ml-4 md:ml-8 space-y-20">
        {timelineData.map((item, index) => (
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            key={item.id} 
            className="relative pl-10 md:pl-16"
          >
            {/* Timeline Node */}
            <div className="absolute -left-[11px] top-1 w-5 h-5 rounded-full bg-slate-900 border-2 border-cyan-500 shadow-[0_0_15px_rgba(242,125,38,0.5)]"></div>
            
            <div className="mb-2 flex flex-wrap items-center gap-3">
              <span className="text-cyan-400 font-mono text-sm border border-cyan-900/50 bg-cyan-950/30 px-3 py-1 rounded-full">
                {item.year}
              </span>
              {'company' in item && (
                <span className="text-[#F27D26] font-mono text-xs uppercase tracking-widest mt-1 sm:mt-0">
                  {item.company}
                </span>
              )}
            </div>
            
            <h4 className="text-2xl font-semibold text-slate-100 mb-3">{item.title}</h4>
            <p className="text-slate-400 leading-relaxed max-w-2xl mb-6 text-sm md:text-base">
              {item.description}
            </p>

            {/* Achievement Card */}
            <motion.div 
              whileHover={{ scale: 1.02, y: -2 }}
              className="inline-flex items-center gap-4 bg-slate-900/50 border border-yellow-500/30 p-4 rounded-xl backdrop-blur-sm"
            >
              <div className="bg-yellow-500/20 p-2 rounded-lg text-yellow-500">
                <Award size={24} />
              </div>
              <div>
                <p className="text-xs font-mono text-yellow-500/80 uppercase">Achievement Unlocked</p>
                <p className="text-sm font-medium text-slate-200">{item.achievement}</p>
              </div>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
