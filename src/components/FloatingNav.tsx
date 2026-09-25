import { motion } from 'motion/react';
import { User, BarChart, BookOpen, Target, Share2 } from 'lucide-react';
import { playClickSound } from '../utils/audio';

const navItems = [
  { id: 'origin-story', icon: User, label: 'Origin' },
  { id: 'creator-stats', icon: BarChart, label: 'Stats' },
  { id: 'skill-tree', icon: BookOpen, label: 'Skills' },
  { id: 'impact-dashboard', icon: Target, label: 'Impact' },
  { id: 'social-hub', icon: Share2, label: 'Social' },
];

export default function FloatingNav() {
  const scrollToSection = (id: string) => {
    playClickSound();
    const element = document.getElementById(id);
    if (element) {
      // Adding a slight offset for the fixed header/UI if needed, but smooth scrolling to element works decently well. 
      // We can use standard scrollIntoView.
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <motion.div 
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.5, duration: 0.5 }}
      className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 flex items-center gap-2 bg-[#050505]/80 backdrop-blur-md p-2 rounded-full border border-white/10 shadow-2xl shadow-black/80"
    >
      {navItems.map((item) => (
        <button
          key={item.id}
          onClick={() => scrollToSection(item.id)}
          className="p-3 rounded-full hover:bg-white/10 text-gray-400 hover:text-white transition-colors relative group"
          title={item.label}
        >
          <item.icon size={20} />
          <span className="absolute -top-10 left-1/2 -translate-x-1/2 bg-[#1A1A1A] text-[#E0E0E0] text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap border border-white/5 font-mono">
            {item.label}
          </span>
        </button>
      ))}
    </motion.div>
  );
}
