import { motion } from 'motion/react';
import { Twitter, Linkedin, Youtube, Paintbrush } from 'lucide-react';
import { playClickSound } from '../utils/audio';

const socials = [
  { name: 'LinkedIn', icon: Linkedin, url: 'https://www.linkedin.com/in/hardik-rampariya-196867324/', color: 'hover:bg-blue-600 hover:border-blue-500' },
  { name: 'Twitter', icon: Twitter, url: 'https://x.com/_kidrah_24', color: 'hover:bg-sky-500 hover:border-sky-400' },
  { name: 'Denizen 492', icon: Youtube, url: 'https://www.youtube.com/@Denizen_492', color: 'hover:bg-red-600 hover:border-red-500' },
  { name: 'Anichess Arena', icon: Youtube, url: 'https://www.youtube.com/@Anichess_Arena', color: 'hover:bg-red-500 hover:border-red-400' },
  { name: 'Behance', icon: Paintbrush, url: 'https://www.behance.net/hardikrampariya', color: 'hover:bg-blue-700 hover:border-blue-500' },
];

export default function SocialHub() {
  return (
    <section className="py-32 relative max-w-5xl mx-auto px-6">
      <div className="mb-16 text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight">Social Hub</h2>
        <p className="text-slate-400 mt-4 text-lg">Connect player-to-player.</p>
      </div>

      <div className="flex flex-wrap justify-center gap-4">
        {socials.map((s, i) => (
          <motion.a
            key={s.name}
            href={s.url}
            target="_blank"
            rel="noreferrer"
            onClick={playClickSound}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            whileHover={{ scale: 1.1, y: -5 }}
            whileTap={{ scale: 0.95 }}
            viewport={{ once: true }}
            transition={{ type: 'spring', delay: i * 0.1 }}
            className={`flex flex-col items-center justify-center p-6 bg-slate-900 border border-slate-700 rounded-2xl w-36 h-36 transition-all duration-300 group ${s.color}`}
          >
            <s.icon size={32} className="text-slate-400 group-hover:text-white transition-colors mb-3" />
            <span className="text-sm font-medium text-slate-300 group-hover:text-white text-center">{s.name}</span>
          </motion.a>
        ))}
      </div>
    </section>
  );
}
