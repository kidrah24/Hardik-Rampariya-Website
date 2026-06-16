import { motion } from 'motion/react';

const skills = [
  { name: "Community Building", progress: 70 },
  { name: "Content Marketing", progress: 70 },
  { name: "Social Growth", progress: 60 },
  { name: "Web3 & AI Research", progress: 90 },
  { name: "Motion Graphics", progress: 40 },
];

export default function SkillTree() {
  return (
    <section className="py-32 relative max-w-4xl mx-auto px-6" id="level-4">
      <div className="mb-16">
        <h2 className="text-sm font-mono text-emerald-500 tracking-widest uppercase mb-2">Level 4</h2>
        <h3 className="text-4xl md:text-5xl font-bold text-white tracking-tight">Community Builder</h3>
        <p className="text-slate-400 mt-4 text-lg">2+ Years in Web3. Building tribes, not just audiences.</p>
      </div>

      <div className="bg-slate-900 border border-slate-800 rounded-2xl p-8 md:p-12">
        <h4 className="text-xl font-bold text-white mb-8 border-b border-slate-800 pb-4">RPG Skill Tree</h4>
        
        <div className="space-y-8">
          {skills.map((skill, i) => (
            <div key={skill.name}>
              <div className="flex justify-between items-end mb-2">
                <span className="text-sm md:text-base font-mono text-slate-300 uppercase">{skill.name}</span>
                <span className="text-xs font-mono text-emerald-500">LVL {Math.floor(skill.progress / 10)}</span>
              </div>
              <div className="h-3 w-full bg-slate-950 rounded-full overflow-hidden border border-slate-800">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.progress}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.5, delay: i * 0.1, ease: "easeOut" }}
                  className="h-full bg-emerald-500 relative"
                >
                  <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(255,255,255,0.2)_50%,transparent_75%)] bg-[length:20px_20px] animate-[slide_1s_linear_infinite]"></div>
                </motion.div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
