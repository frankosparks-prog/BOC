import React from 'react';
import { motion } from 'framer-motion';
import { 
  Twitch, Mic, Zap, Globe, 
  PieChart, ShieldCheck, ArrowRight, 
  Play, Camera 
} from 'lucide-react';
import { Card } from '../components/ui/Card';
import { Section } from '../components/Section';
import { Button } from '../components/ui/Button';

// Helper for the hero floating icons
const FloatingBadge = ({ children, delay = 0, x, y }) => (
  <motion.div
    animate={{ 
      y: [0, -15, 0],
      rotate: [0, 5, -5, 0]
    }}
    transition={{ 
      duration: 6, 
      repeat: Infinity, 
      delay: delay,
      ease: "easeInOut" 
    }}
    className={`absolute ${x} ${y} z-10`}
  >
    {children}
  </motion.div>
);

const Creators = () => {
  return (
    <div className="bg-primary-navy min-h-screen text-white overflow-hidden">
      
      {/* --- HERO SECTION --- */}
      <Section className="py-16 lg:py-20 relative">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />
        {/* Ambient Background Glow */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-accent-purple/20 blur-[120px] rounded-full pointer-events-none" />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Left: Copy */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }} 
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm mb-6">
              <span className="text-primary-blue text-xs font-bold tracking-widest uppercase">For The Creator Class</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-display font-bold mb-6 leading-[1.1]">
              Your creativity, <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-blue to-accent-teal">
                monetized.
              </span>
            </h1>
            
            <p className="text-white/60 text-lg mb-8 leading-relaxed max-w-lg">
              Stop juggling 5 different apps to manage your income. We unify your AdSense, sponsorships, and merch sales into one powerful financial dashboard.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <Button variant="glow" size="lg">Claim Your Handle</Button>
              <Button variant="secondary" size="lg">View Integration List</Button>
            </div>
          </motion.div>

          {/* Right: Abstract UI Visualization */}
          <div className="relative h-[400px] w-full flex items-center justify-center">
            {/* Center Hub */}
            <motion.div 
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="relative z-20 w-40 h-40 bg-gradient-to-b from-white/10 to-white/5 backdrop-blur-xl border border-white/20 rounded-3xl flex flex-col items-center justify-center shadow-2xl shadow-primary-blue/20"
            >
              <span className="text-3xl font-display font-bold text-white">$84.2k</span>
              <span className="text-xs text-primary-blue mt-1 uppercase tracking-wider">Available</span>
            </motion.div>

            {/* Orbiting Platforms */}
            <FloatingBadge delay={0} x="top-0" y="left-10">
              <div className="p-4 bg-[#FF0000]/10 border border-[#FF0000]/30 backdrop-blur-md rounded-2xl">
                <Play className="text-red-500 w-8 h-8 fill-current" />
              </div>
            </FloatingBadge>

            <FloatingBadge delay={2} x="bottom-10" y="right-10">
              <div className="p-4 bg-[#9146FF]/10 border border-[#9146FF]/30 backdrop-blur-md rounded-2xl">
                <Twitch className="text-[#9146FF] w-8 h-8" />
              </div>
            </FloatingBadge>

            <FloatingBadge delay={4} x="top-20" y="right-0">
               <div className="p-4 bg-white/10 border border-white/20 backdrop-blur-md rounded-2xl">
                <Mic className="text-white w-6 h-6" />
              </div>
            </FloatingBadge>
            
            {/* Connecting Lines (SVG) */}
            <svg className="absolute inset-0 w-full h-full -z-10 opacity-30">
               <motion.path 
                 d="M100 80 Q 250 200 250 200" 
                 fill="none" stroke="url(#gradient-line)" strokeWidth="2"
                 initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 2 }}
               />
               <motion.path 
                 d="M400 300 Q 250 200 250 200" 
                 fill="none" stroke="url(#gradient-line)" strokeWidth="2"
                 initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 2, delay: 0.5 }}
               />
               <defs>
                 <linearGradient id="gradient-line" x1="0%" y1="0%" x2="100%" y2="0%">
                   <stop offset="0%" stopColor="transparent" />
                   <stop offset="50%" stopColor="#00f0ff" />
                   <stop offset="100%" stopColor="transparent" />
                 </linearGradient>
               </defs>
            </svg>
          </div>
        </div>
      </Section>

      {/* --- PLATFORM TICKER --- */}
      <div className="w-full bg-white/2 border-y border-white/5 py-6 overflow-hidden relative">
        <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-primary-navy to-transparent z-10" />
        <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-primary-navy to-transparent z-10" />
        
        <div className="flex gap-20 animate-marquee whitespace-nowrap opacity-50">
          {/* Doubled list for infinite scroll illusion */}
          {[...Array(2)].map((_, i) => (
            <React.Fragment key={i}>
              <span className="text-xl font-display font-bold">YOUTUBE</span>
              <span className="text-xl font-display font-bold">TWITCH</span>
              <span className="text-xl font-display font-bold">TIKTOK</span>
              <span className="text-xl font-display font-bold">SUBSTACK</span>
              <span className="text-xl font-display font-bold">PATREON</span>
              <span className="text-xl font-display font-bold">INSTAGRAM</span>
              <span className="text-xl font-display font-bold">SPOTIFY</span>
              <span className="text-xl font-display font-bold">ONLYFANS</span>
            </React.Fragment>
          ))}
        </div>
      </div>

      {/* --- BENTO GRID FEATURES --- */}
      <Section className="py-24">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-display font-bold mb-6">Designed for the <br /> speed of culture.</h2>
          <p className="text-white/60 text-lg">Traditional banks move in business days. We move in real-time.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[minmax(250px,auto)]">
          {/* Card 1: Large Span */}
          <Card className="md:col-span-2 p-8 flex flex-col justify-between bg-gradient-to-br from-white/5 to-transparent hover:border-primary-blue/30 transition-all group">
            <div className="max-w-md">
              <div className="w-12 h-12 rounded-full bg-primary-blue/10 flex items-center justify-center text-primary-blue mb-6 group-hover:scale-110 transition-transform">
                <Globe size={24} />
              </div>
              <h3 className="text-2xl font-bold mb-2">Borderless Creator Payouts</h3>
              <p className="text-white/60">Get paid in USD, EUR, or GBP. We provide you with local bank details in 12+ countries so you can skip the conversion fees.</p>
            </div>
            <div className="mt-8 flex gap-4 opacity-50 group-hover:opacity-100 transition-opacity">
              <img src="https://flagcdn.com/us.svg" className="w-8 h-6 rounded shadow-sm" alt="US" />
              <img src="https://flagcdn.com/eu.svg" className="w-8 h-6 rounded shadow-sm" alt="EU" />
              <img src="https://flagcdn.com/gb.svg" className="w-8 h-6 rounded shadow-sm" alt="UK" />
              <img src="https://flagcdn.com/jp.svg" className="w-8 h-6 rounded shadow-sm" alt="JP" />
            </div>
          </Card>

          {/* Card 2: Vertical */}
          <Card className="md:row-span-2 p-8 bg-gradient-to-b from-accent-purple/5 to-transparent hover:border-accent-purple/40 transition-all group">
            <div className="w-12 h-12 rounded-full bg-accent-purple/10 flex items-center justify-center text-accent-purple mb-6">
              <Zap size={24} />
            </div>
            <h3 className="text-2xl font-bold mb-4">Instant Access</h3>
            <p className="text-white/60 mb-8">No more waiting "Net-30" or "Net-60" for brand deals. We front the money for verified contracts.</p>
            
            {/* Visual indicator */}
            <div className="space-y-3">
               <div className="flex justify-between text-sm">
                 <span className="text-white/40">Brand Deal Payout</span>
                 <span className="text-white/40">30 Days</span>
               </div>
               <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                 <div className="h-full w-1/4 bg-red-500/50" />
               </div>
               <div className="flex justify-between text-sm mt-4">
                 <span className="text-primary-blue font-bold">Bank of Creators</span>
                 <span className="text-primary-blue font-bold">Instant</span>
               </div>
               <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                 <div className="h-full w-full bg-primary-blue shadow-[0_0_10px_#00f0ff]" />
               </div>
            </div>
          </Card>

          {/* Card 3 */}
          <Card className="p-8 group hover:bg-white/5">
             <div className="w-10 h-10 rounded-full bg-green-500/10 flex items-center justify-center text-green-400 mb-4">
              <PieChart size={20} />
            </div>
            <h3 className="text-xl font-bold mb-2">Metadata Analytics</h3>
            <p className="text-white/60 text-sm">Track which video, stream, or song is generating the most revenue in real-time.</p>
          </Card>

          {/* Card 4 */}
          <Card className="p-8 group hover:bg-white/5">
             <div className="w-10 h-10 rounded-full bg-orange-500/10 flex items-center justify-center text-orange-400 mb-4">
              <ShieldCheck size={20} />
            </div>
            <h3 className="text-xl font-bold mb-2">Automated Taxes</h3>
            <p className="text-white/60 text-sm">We automatically set aside a % of every YouTube check into a tax vault.</p>
          </Card>
        </div>
      </Section>

      {/* --- TAILORED USE CASES --- */}
      <Section className="py-20 border-t border-white/5">
        <h2 className="text-3xl font-bold mb-12 text-center">Tailored for your craft</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { 
              name: "Video Creators", 
              icon: Play, 
              color: "text-red-500",
              features: ["AdSense Optimization", "Sponsorship Invoicing", "Equipment Financing"] 
            },
            { 
              name: "Live Streamers", 
              icon: Twitch, 
              color: "text-purple-500",
              features: ["Donation Protection", "Goal Visualizers", "Mod Payouts"] 
            },
            { 
              name: "Influencers", 
              icon: Camera, 
              color: "text-pink-500",
              features: ["Contract Review AI", "Multi-Currency Wallet", "Agency Access"] 
            }
          ].map((type, i) => (
            <Card key={i} className="p-8 relative overflow-hidden group hover:border-white/30 transition-all">
              <div className={`absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity ${type.color}`}>
                <type.icon size={120} />
              </div>
              
              <div className={`w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center mb-6 ${type.color}`}>
                <type.icon size={24} />
              </div>
              
              <h3 className="text-2xl font-bold mb-6">{type.name}</h3>
              <ul className="space-y-4">
                {type.features.map((feat, j) => (
                  <li key={j} className="flex items-center gap-3 text-white/70">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary-blue" />
                    {feat}
                  </li>
                ))}
              </ul>
              
              <div className="mt-8 pt-6 border-t border-white/10">
                <button className="text-sm font-bold flex items-center gap-2 hover:gap-3 transition-all">
                  View Use Case <ArrowRight size={14} />
                </button>
              </div>
            </Card>
          ))}
        </div>
      </Section>

      {/* --- FINAL CTA --- */}
      <Section className="py-4">
        <div className="relative rounded-3xl bg-primary-blue/5 border border-primary-blue/20 overflow-hidden text-center py-20 px-4">
          <div className="relative z-10">
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">Start your financial evolution</h2>
            <p className="text-white/60 mb-8 max-w-xl mx-auto">Join the invite-only beta and secure your creator handle today.</p>
            <Button variant="glow" size="lg">Get Early Access</Button>
          </div>
          {/* Decorative Grid inside CTA */}
          <div className="absolute inset-0 bg-[linear-gradient(rgba(0,240,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(0,240,255,0.05)_1px,transparent_1px)] bg-[size:40px_40px]" />
        </div>
      </Section>
    </div>
  );
};

export default Creators;