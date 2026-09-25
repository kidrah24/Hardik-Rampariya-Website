import { motion } from 'motion/react';
import { ExternalLink, Gamepad2, Play } from 'lucide-react';
import { playClickSound } from '../utils/audio';

interface GameItem {
  id: string;
  title: string;
  url: string;
  image: string;
  tagline: string;
  status: 'live' | 'in-development';
}

const games: GameItem[] = [
  {
    id: 'tank-and-tackle',
    title: 'Tank & Tackle',
    url: 'https://www.tankandtackle.fun/',
    image: '/tank-and-tackle.jpg',
    tagline: 'The 60s aquarium challenge. Catch rare exotic fish, dodge underwater hazards, and hook high-value treasure in a fast-paced race against the clock.',
    status: 'live',
  },
  {
    id: 'bottle-blitz',
    title: 'Bottle Blitz',
    url: 'https://www.bottelblitz.fun/',
    image: '/bottelblitz.jpg',
    tagline: 'Fast-paced arcade reflex challenge testing reaction speed, precision timing, and rapid-fire target acquisition.',
    status: 'live',
  },
];

export default function GamesBuilt() {
  return (
    <section className="py-32 relative max-w-7xl mx-auto px-6">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
        <div>
          <div className="flex items-center gap-3 mb-2">
            <Gamepad2 className="text-[#F27D26]" size={26} />
            <span className="text-xs font-mono text-[#F27D26] uppercase tracking-widest font-semibold">Playable Experiences</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight">Games Built</h2>
          <p className="text-slate-400 mt-4 max-w-xl text-lg">
            Interactive 2D games built from scratch. Designed for competitive gameplay, smooth mechanics, and high replayability.
          </p>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        {games.map((game, i) => (
          <motion.div
            key={game.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.15, duration: 0.5 }}
            className="group relative bg-slate-900/90 border border-slate-800 hover:border-[#F27D26]/50 rounded-2xl overflow-hidden transition-all duration-300 shadow-xl hover:shadow-[0_0_30px_rgba(242,125,38,0.15)] flex flex-col"
          >
            {/* Clickable Image Preview Container */}
            <a
              href={game.url}
              target="_blank"
              rel="noreferrer"
              onClick={playClickSound}
              className="relative aspect-video w-full overflow-hidden bg-black/80 block cursor-pointer"
            >
              <img
                src={game.image}
                alt={game.title}
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  if (game.id === 'tank-and-tackle' && !target.src.includes('tank-and-tackle.png')) {
                    target.src = '/tank-and-tackle.png';
                  } else if (game.id === 'bottle-blitz' && !target.src.includes('bottelblitz.jpg')) {
                    target.src = '/bottelblitz.jpg';
                  }
                }}
                className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500 opacity-90 group-hover:opacity-100"
              />

              {/* Status Badge */}
              <div className="absolute top-4 left-4 z-10 flex items-center gap-2 px-3 py-1 rounded-full bg-black/70 backdrop-blur-md border border-emerald-500/30 text-xs font-mono text-emerald-400 shadow-lg pointer-events-none">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                <span className="capitalize">{game.status}</span>
              </div>

              {/* Centered Play Button Overlay */}
              <div className="absolute inset-0 bg-black/30 group-hover:bg-black/10 transition-colors duration-300 flex items-center justify-center">
                <div className="w-16 h-16 rounded-full bg-black/70 backdrop-blur-md border border-white/20 flex items-center justify-center text-white group-hover:scale-110 group-hover:bg-[#F27D26] group-hover:text-black group-hover:border-[#F27D26] transition-all duration-300 shadow-2xl">
                  <Play size={24} className="fill-current translate-x-0.5" />
                </div>
              </div>
            </a>

            {/* Content Details */}
            <div className="p-6 md:p-8 flex-1 flex flex-col justify-between bg-gradient-to-b from-slate-900/60 to-slate-950/80">
              <div>
                <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-[#F27D26] transition-colors">
                  <a
                    href={game.url}
                    target="_blank"
                    rel="noreferrer"
                    onClick={playClickSound}
                    className="flex items-center justify-between w-full hover:underline"
                  >
                    <span>{game.title}</span>
                    <ExternalLink size={18} className="text-slate-500 group-hover:text-[#F27D26] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                  </a>
                </h3>
                <p className="text-slate-400 text-sm leading-relaxed mb-6">
                  {game.tagline}
                </p>
              </div>

              <div className="pt-4 border-t border-slate-800/80 flex items-center justify-between">
                <span className="text-xs font-mono text-slate-500 uppercase tracking-wider">Web & Desktop</span>
                <a
                  href={game.url}
                  target="_blank"
                  rel="noreferrer"
                  onClick={playClickSound}
                  className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-[#F27D26] hover:text-[#ff9245] transition-colors font-semibold"
                >
                  <span>Launch Experience</span>
                  <ExternalLink size={13} />
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
