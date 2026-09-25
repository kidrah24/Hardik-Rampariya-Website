import { motion } from 'motion/react';
import { Youtube, PlaySquare, TrendingUp, Users } from 'lucide-react';

const stats = [
  { label: "Subscribers", value: "4.5K+", icon: Users, color: "text-red-500" },
  { label: "Total Views", value: "2M+", icon: TrendingUp, color: "text-green-500" },
  { label: "Videos", value: "120+", icon: PlaySquare, color: "text-blue-500" },
  { label: "Total Views", value: "100K", icon: Youtube, color: "text-red-400" },
];

const milestones = [
  { step: "01", text: "10+ Shorts Published" },
  { step: "02", text: "Built Web3 Education Channel" },
  { step: "03", text: "Dedicated Anichess Content" },
];

export default function CreatorStats() {
  return (
    <section className="py-32 relative max-w-6xl mx-auto px-6">
      <div className="mb-12 text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight">Content Creator Stats</h2>
      </div>

      <div className="grid lg:grid-cols-3 gap-8">
        {/* Left Col - Dashboard layout */}
        <div className="lg:col-span-2 grid grid-cols-2 gap-4">
          {stats.map((stat, i) => (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              key={`${stat.label}-${i}`}
              className="bg-slate-900 border border-slate-800 p-6 rounded-2xl flex flex-col items-center justify-center text-center relative overflow-hidden"
            >
              <div className={`mb-4 ${stat.color}`}>
                <stat.icon size={32} />
              </div>
              <p className="text-3xl md:text-4xl font-black text-white mb-2">{stat.value}</p>
              <p className="text-sm font-mono text-slate-400 uppercase">{stat.label}</p>
              
              {/* Decorative grid */}
              <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:20px_20px] pointer-events-none"></div>
            </motion.div>
          ))}
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="col-span-2 bg-gradient-to-r from-slate-900 to-slate-800 border border-slate-700 p-6 rounded-2xl mt-4"
          >
             <h4 className="text-lg font-bold text-white mb-4">Channels</h4>
             <div className="flex flex-col sm:flex-row gap-4">
               <a href="https://www.youtube.com/@Denizen_492" target="_blank" rel="noreferrer" className="flex-1 bg-black/40 hover:bg-black/60 transition p-4 rounded-xl border border-red-900/30 flex items-center gap-3">
                 <Youtube className="text-red-500" size={24} />
                 <div>
                   <p className="text-white font-medium">Denizen 492</p>
                   <p className="text-xs text-slate-400">Web3 Education</p>
                 </div>
               </a>
               <a href="https://www.youtube.com/@Anichess_Arena" target="_blank" rel="noreferrer" className="flex-1 bg-black/40 hover:bg-black/60 transition p-4 rounded-xl border border-blue-900/30 flex items-center gap-3">
                 <Youtube className="text-blue-500" size={24} />
                 <div>
                   <p className="text-white font-medium">Anichess Arena</p>
                   <p className="text-xs text-slate-400">Gaming Content</p>
                 </div>
               </a>
             </div>
          </motion.div>
        </div>

        {/* Right Col - Milestones */}
        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="bg-slate-900 border border-slate-700 rounded-2xl p-6"
        >
          <h4 className="text-xl font-bold text-white mb-6 border-b border-slate-800 pb-4">Creator Milestones</h4>
          <div className="space-y-6">
            {milestones.map((milestone, i) => (
              <div key={i} className="flex gap-4 items-start">
                <div className="flex flex-col items-center">
                  <div className="w-10 h-10 rounded-full bg-slate-800 border-2 border-red-500 flex items-center justify-center text-red-500 font-bold text-sm">
                    {milestone.step}
                  </div>
                  {i < milestones.length - 1 && <div className="w-0.5 h-10 bg-slate-800 my-2"></div>}
                </div>
                <div className="pt-2">
                  <p className="text-xs font-mono text-red-400 mb-1">Milestone {milestone.step}</p>
                  <p className="text-slate-200">{milestone.text}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
