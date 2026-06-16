import { motion } from 'motion/react';
import { Send } from 'lucide-react';
import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  return (
    <section className="py-32 relative max-w-3xl mx-auto px-6" id="level-10">
      <div className="mb-16 text-center">
        <h2 className="text-sm font-mono text-cyan-500 tracking-widest uppercase mb-2">Final Level</h2>
        <h3 className="text-4xl md:text-5xl font-bold text-white tracking-tight mb-6">Let's Build Something Together</h3>
        
        <div className="flex flex-col items-center justify-center mb-10">
           <div className="w-full max-w-md bg-slate-900 h-2 rounded-full overflow-hidden border border-slate-800">
             <motion.div 
               initial={{ width: 0 }}
               whileInView={{ width: '10%' }}
               viewport={{ once: true }}
               transition={{ duration: 2, ease: "easeOut" }}
               className="h-full bg-cyan-500 relative"
             >
                <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(255,255,255,0.4)_50%,transparent_75%)] bg-[length:10px_10px] animate-[slide_1s_linear_infinite]"></div>
             </motion.div>
           </div>
           <p className="text-xs font-mono text-slate-400 mt-3 uppercase tracking-widest">
             Status: Still loading... The journey is only 10% complete.
           </p>
        </div>
      </div>

      <motion.form 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        onSubmit={(e) => e.preventDefault()} 
        className="space-y-4 bg-slate-900 border border-slate-700 p-8 rounded-3xl"
      >
        <div className="grid md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <label className="text-xs font-mono text-slate-400 uppercase">Name</label>
            <input 
              type="text" 
              className="w-full bg-black/50 border border-slate-700 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-cyan-500 transition-colors"
              placeholder="Player 1"
              value={formData.name}
              onChange={e => setFormData({...formData, name: e.target.value})}
            />
          </div>
          <div className="space-y-2">
            <label className="text-xs font-mono text-slate-400 uppercase">Email</label>
            <input 
              type="email" 
              className="w-full bg-black/50 border border-slate-700 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-cyan-500 transition-colors"
              placeholder="p1@example.com"
              value={formData.email}
              onChange={e => setFormData({...formData, email: e.target.value})}
            />
          </div>
        </div>
        <div className="space-y-2">
          <label className="text-xs font-mono text-slate-400 uppercase">Message</label>
          <textarea 
            rows={4}
            className="w-full bg-black/50 border border-slate-700 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-cyan-500 transition-colors resize-none"
            placeholder="Ready for the next quest..."
            value={formData.message}
            onChange={e => setFormData({...formData, message: e.target.value})}
          />
        </div>
        
        <button className="w-full py-4 bg-cyan-600 hover:bg-cyan-500 text-white rounded-xl font-bold uppercase tracking-widest flex items-center justify-center gap-2 transition-colors">
          Send Message <Send size={18} />
        </button>
      </motion.form>
      
      <div className="mt-32 w-[100vw] h-12 bg-[#0A0A0A] border-t border-white/10 flex items-center justify-between px-6 gap-6 absolute left-[50%] -translate-x-1/2 bottom-0">
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
          <span className="text-[10px] uppercase font-bold tracking-widest text-[#F27D26] hidden sm:block">Network Stable</span>
        </div>
        <div className="flex gap-4">
          <a href="https://linkedin.com/in/hardik-rampariya-196867324/" className="text-[10px] text-white/50 hover:text-[#F27D26] transition-colors font-mono">LINKEDIN</a>
          <a href="https://x.com/_kidrah_24" className="text-[10px] text-white/50 hover:text-[#F27D26] transition-colors font-mono">TWITTER</a>
          <a href="https://behance.net/hardikrampariya" className="text-[10px] text-white/50 hover:text-[#F27D26] transition-colors font-mono">BEHANCE</a>
        </div>
        <div className="text-[10px] text-white/40 italic font-mono hidden md:block">
          Press ⬆ ⬆ ⬇ ⬇ ⬅ ➡ ⬅ ➡ B A
        </div>
      </div>
    </section>
  );
}
