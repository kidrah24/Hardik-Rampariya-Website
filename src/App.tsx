/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import Hero from './components/Hero';
import OriginStory from './components/OriginStory';
import Web3Quest from './components/Web3Quest';
import CreatorStats from './components/CreatorStats';
import SkillTree from './components/SkillTree';
import ImpactDashboard from './components/ImpactDashboard';
import SocialHub from './components/SocialHub';
import UI from './components/UI';
import KonamiEasterEgg from './components/KonamiEasterEgg';
import FloatingParticles from './components/FloatingParticles';
import FloatingNav from './components/FloatingNav';
import { useScrollXP } from './hooks/useScrollXP';

export default function App() {
  const [started, setStarted] = useState(false);
  const { xp, level, justLeveledUp } = useScrollXP();

  return (
    <div className="min-h-screen text-[#E0E0E0] selection:bg-cyan-500/30 font-sans overflow-x-hidden relative bg-[#050505]">
      {/* Background Video */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <video 
          autoPlay 
          loop 
          muted 
          playsInline
          className="w-full h-full object-cover"
        >
          <source src="/website-bg-video.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-[#050505]/80"></div>
      </div>

      <div className="relative z-10">
        <div className="absolute inset-0 opacity-10 pointer-events-none fixed" style={{ backgroundImage: 'radial-gradient(#F27D26 1px, transparent 1px)', backgroundSize: '24px 24px' }}></div>
        <FloatingParticles />
        <KonamiEasterEgg />
        
        {started && <UI level={level} xp={xp} justLeveledUp={justLeveledUp} />}
        {started && <FloatingNav />}

        <Hero onStart={() => {
          setStarted(true);
          if (typeof window !== 'undefined') {
            window.scrollTo({
              top: window.innerHeight,
              behavior: 'smooth'
            });
          }
        }} />
        
        {started && (
          <div className="relative z-10 bg-[#050505]/70 backdrop-blur-sm border-t-4 border-[#1A1A1A]">
            <section id="origin-story"><OriginStory /></section>
            <section id="web3-quest"><Web3Quest /></section>
            <section id="creator-stats"><CreatorStats /></section>
            <section id="skill-tree"><SkillTree /></section>
            <section id="impact-dashboard"><ImpactDashboard /></section>
            <section id="social-hub"><SocialHub /></section>
          </div>
        )}
      </div>
    </div>
  );
}

