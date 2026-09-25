import { motion } from 'motion/react';
import { ExternalLink } from 'lucide-react';

const projects = [
  { id: 'p1', title: 'Web3 Gaming Assets', cat: 'Motion Graphics', img: 'https://images.unsplash.com/photo-1614729939124-032f0b56c9ce?auto=format&fit=crop&q=80&w=2000' },
  { id: 'p2', title: 'Anichess Community Branding', cat: 'Branding', img: 'https://images.unsplash.com/photo-1558655146-d09347e92766?auto=format&fit=crop&q=80&w=1964' },
  { id: 'p3', title: 'Fitness App UI', cat: 'UI/UX', img: 'https://images.unsplash.com/photo-1526498460520-4c246339dccb?auto=format&fit=crop&q=80&w=2070' },
  { id: 'p4', title: 'Crypto Marketing Posters', cat: 'Graphic Design', img: 'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?auto=format&fit=crop&q=80&w=2832' }
];

export default function Portfolio() {
  return (
    <section className="py-32 relative max-w-7xl mx-auto px-6">
      <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
         <div>
          <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight">Creative Portfolio</h2>
         </div>
         <a href="https://www.behance.net/hardikrampariya" target="_blank" rel="noreferrer" className="flex items-center gap-2 group text-fuchsia-400 hover:text-fuchsia-300">
           <span className="font-mono text-sm uppercase">View full Behance</span>
           <ExternalLink size={16} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
         </a>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        {projects.map((project, i) => (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            key={project.id}
            className="group relative rounded-2xl overflow-hidden aspect-[4/3] bg-slate-900 border border-slate-800"
          >
            <img src={project.img} alt={project.title} className="w-full h-full object-cover opacity-60 group-hover:opacity-40 transition-opacity duration-500 group-hover:scale-105" />
            
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent flex flex-col justify-end p-8 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
              <span className="text-xs font-mono text-fuchsia-400 mb-2 drop-shadow-md">{project.cat}</span>
              <h4 className="text-2xl font-bold text-white mb-2">{project.title}</h4>
              <button className="origin-left scale-0 group-hover:scale-100 transition-transform duration-300 w-fit flex items-center gap-2 text-sm text-slate-300 hover:text-white mt-2">
                Inspect <ExternalLink size={14} />
              </button>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
