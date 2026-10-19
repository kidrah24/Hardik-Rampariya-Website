import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { timelineData } from '../data';
import { Award, ChevronDown, ChevronUp, CheckCircle2 } from 'lucide-react';
import { playClickSound } from '../utils/audio';

export default function OriginStory() {
  const [expandedIds, setExpandedIds] = useState<Record<string, boolean>>({
    t7: true, // Multipli.fi
    t6: true, // Seedify
    t5: true, // Navigate AI
    t4: true, // KOKODI Games
    t3: true, // WhyNot Advertising (Motion Graphic Artist)
    t2: true, // Another Idea Productions
    t1: true  // Freelance Graphic Designer
  });

  const toggleExpand = (id: string) => {
    playClickSound();
    setExpandedIds(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  return (
    <section className="py-32 relative max-w-5xl mx-auto px-6">
      <div className="mb-16">
        <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight">Career Arc</h2>
      </div>

      <div className="relative border-l-2 border-slate-800 ml-4 md:ml-8 space-y-20">
        {timelineData.map((item, index) => {
          const hasDetails = 'details' in item && Array.isArray((item as any).details) && (item as any).details.length > 0;
          const isExpanded = !!expandedIds[item.id];

          return (
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
                {'company' in item && (
                  <span className="text-cyan-400 font-mono text-xs uppercase tracking-widest border border-cyan-900/50 bg-cyan-950/30 px-3 py-1 rounded-full font-semibold">
                    {item.company}
                  </span>
                )}
              </div>
              
              <div className="flex flex-wrap items-center gap-3 mb-3">
                <h4 
                  onClick={() => hasDetails && toggleExpand(item.id)}
                  className={`text-2xl font-semibold text-slate-100 ${hasDetails ? 'cursor-pointer hover:text-[#F27D26] transition-colors flex items-center gap-2' : ''}`}
                >
                  <span>{item.title}</span>
                  {hasDetails && (
                    <span className="text-xs font-mono font-normal text-slate-400 border border-slate-700 bg-slate-800/80 px-2 py-0.5 rounded-full">
                      {isExpanded ? 'Click to hide details' : 'Click to view details'}
                    </span>
                  )}
                </h4>
              </div>

              {'description' in item && Boolean(item.description) && (
                <p className="text-slate-400 leading-relaxed max-w-2xl mb-4 text-sm md:text-base">
                  {item.description}
                </p>
              )}

              {/* Interactive Details Accordion */}
              {hasDetails && (
                <div className="mb-6 max-w-2xl">
                  <button
                    onClick={() => toggleExpand(item.id)}
                    className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-lg text-xs font-mono font-semibold uppercase tracking-wider text-[#F27D26] bg-[#F27D26]/10 hover:bg-[#F27D26]/20 border border-[#F27D26]/30 transition-all cursor-pointer group mb-2 shadow-sm"
                  >
                    <span>{isExpanded ? 'Hide Key Responsibilities' : 'View Key Responsibilities'}</span>
                    {isExpanded ? (
                      <ChevronUp size={14} className="group-hover:-translate-y-0.5 transition-transform" />
                    ) : (
                      <ChevronDown size={14} className="group-hover:translate-y-0.5 transition-transform" />
                    )}
                  </button>

                  <AnimatePresence>
                    {isExpanded && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <div className="p-5 md:p-6 rounded-2xl bg-slate-900/90 border border-slate-700/80 shadow-xl backdrop-blur-md">
                          <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-slate-300 font-bold mb-4 pb-2 border-b border-slate-800">
                            <CheckCircle2 size={16} className="text-[#F27D26]" />
                            <span>Responsibilities & Impact · {item.company}</span>
                          </div>
                          <ul className="space-y-3">
                            {((item as any).details as string[]).map((detail, idx) => (
                              <li key={idx} className="flex items-start gap-3 text-sm text-slate-300 leading-relaxed">
                                <span className="w-1.5 h-1.5 rounded-full bg-[#F27D26] mt-2 flex-shrink-0 shadow-[0_0_8px_rgba(242,125,38,0.8)]" />
                                <span>{detail}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              )}

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
          );
        })}
      </div>
    </section>
  );
}
