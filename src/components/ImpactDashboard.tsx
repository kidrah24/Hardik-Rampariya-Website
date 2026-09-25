import { motion } from 'motion/react';
import { Briefcase, FileVideo, Users2, CalendarDays, ExternalLink } from 'lucide-react';

const impacts = [
  { label: "Projects Worked On", value: "7+", icon: Briefcase },
  { label: "Content Created", value: "500+", icon: FileVideo },
  { label: "Communities Managed", value: "4+", icon: Users2 },
  { label: "Years Experience", value: "4+", icon: CalendarDays },
];

export default function ImpactDashboard() {
  return (
    <section className="py-32 relative max-w-7xl mx-auto px-6">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
        <div>
          <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight">Impact Dashboard & Portfolio</h2>
          <p className="text-slate-400 mt-4 max-w-xl text-lg">Metrics that matter. Designed for recruiters and partners.</p>
        </div>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
        {impacts.map((impact, i) => (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            key={impact.label}
            className="bg-slate-900 border border-slate-700/50 p-6 rounded-2xl group hover:bg-slate-800 transition-colors"
          >
            <impact.icon className="text-blue-500 mb-4" size={28} />
            <p className="text-3xl font-black text-white mb-1">{impact.value}</p>
            <p className="text-xs text-slate-400 uppercase tracking-wider">{impact.label}</p>
          </motion.div>
        ))}
      </div>

      <div className="mb-16 mt-16">
        <h4 className="text-xl font-bold text-white mb-6 flex items-center gap-3">
          <Briefcase className="text-blue-500" />
          Key Partnerships Led (Anichess)
        </h4>
        <div className="grid lg:grid-cols-2 gap-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-slate-900 border border-slate-700/50 p-6 md:p-8 rounded-2xl relative overflow-hidden group hover:border-orange-500/50 transition-colors flex flex-col h-full"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-orange-500/10 rounded-bl-full -mr-16 -mt-16 transition-transform group-hover:scale-110"></div>
            <div className="relative z-10 flex-1 flex flex-col">
              <span className="text-xs font-mono text-orange-500 mb-3 block uppercase tracking-widest">Global Reach</span>
              <h5 className="text-2xl font-bold text-white mb-3">Brave Browser</h5>
              <p className="text-slate-400 mb-6">Spearheaded the strategic partnership between Anichess and Brave Rewards, integrating basic attention tokens and exposing the gaming brand to a massive audience of <strong className="text-slate-200">100M+ Monthly Active Users</strong>.</p>
              
              <div className="mt-auto aspect-video rounded-xl overflow-hidden border border-slate-700/50 bg-slate-800 flex items-center justify-center relative group-hover:border-orange-500/50 transition-colors">
                 <img 
                    src="/brave-tweet.png" 
                    alt="Brave Browser Partnership Announcement"
                    className="w-full h-full object-contain"
                 />
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="bg-slate-900 border border-slate-700/50 p-6 md:p-8 rounded-2xl relative overflow-hidden group hover:border-blue-500/50 transition-colors flex flex-col h-full"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/10 rounded-bl-full -mr-16 -mt-16 transition-transform group-hover:scale-110"></div>
            <div className="relative z-10 flex-1 flex flex-col">
              <span className="text-xs font-mono text-blue-500 mb-3 block uppercase tracking-widest">Web3 IP Collaboration</span>
              <h5 className="text-2xl font-bold text-white mb-3">Moonbirds</h5>
              <p className="text-slate-400 mb-6">Led the collaboration with Moonbirds, a premier leading <strong className="text-slate-200">Web3 IP</strong>, to launch an exclusive Soulbound Token campaign marking the partnership and driving deep community engagement.</p>
              
              <div className="mt-auto aspect-[4/3] sm:aspect-video rounded-xl overflow-hidden border border-slate-700/50 bg-slate-800 flex items-center justify-center relative group-hover:border-blue-500/50 transition-colors">
                 <img 
                    src="/moonbirds-tweet.png" 
                    alt="Anichess x Moonbirds Partnership Announcement"
                    className="w-full h-full object-contain"
                 />
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-8">
         <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-slate-900 border border-[#F27D26]/30 overflow-hidden rounded-2xl relative group"
          >
            <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(242,125,38,0.05)_50%,transparent_75%)] bg-[length:20px_20px] animate-[slide_1s_linear_infinite] opacity-50"></div>
            
            <div className="p-8 md:p-12 relative z-10 flex flex-col items-center justify-center text-center">
              <h4 className="text-2xl font-bold text-white mb-2">Behance Portfolio</h4>
              <p className="text-[#F27D26] font-mono text-sm mb-6 uppercase tracking-widest">Explore Full Creative Showcase</p>
              
              <a 
                href="https://www.behance.net/hardikrampariya" 
                target="_blank" 
                rel="noreferrer"
                 className="inline-flex items-center gap-3 px-8 py-4 bg-[#F27D26] text-black font-black uppercase tracking-widest text-sm shadow-[0_0_30px_rgba(242,125,38,0.4)] hover:scale-105 transition-transform cursor-pointer"
              >
                View on Behance
                <ExternalLink size={20} />
              </a>
            </div>
         </motion.div>
      </div>

    </section>
  );
}
