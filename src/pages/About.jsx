import React from 'react';
import { Section } from '../components/Section';
import { Card } from '../components/ui/Card';
import { Button } from '../components/ui/Button';
import { Globe, TrendingUp, MapPin, Linkedin, ArrowUpRight, Building2, Network } from 'lucide-react';
import { motion } from 'framer-motion';

// --- SUB-COMPONENT: FOUNDER PROFILE ---
const FounderProfile = () => (
  <div className="relative group">
    <div className="absolute inset-0 bg-gradient-to-r from-primary-blue to-accent-purple blur-2xl opacity-20 group-hover:opacity-40 transition-opacity duration-500" />
    <Card className="relative p-0 overflow-hidden border-primary-blue/30" spotlight={false}>
      <div className="grid grid-cols-1 md:grid-cols-2">
        {/* Image Side (Placeholder style) */}
        <div className="relative h-96 md:h-auto bg-[#050A14] flex items-center justify-center overflow-hidden">
           {/* Abstract Profile Placeholder */}
           <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=2544&auto=format&fit=crop')] bg-cover bg-center opacity-60 grayscale group-hover:grayscale-0 transition-all duration-700" />
           <div className="absolute inset-0 bg-gradient-to-t from-[#0A0F1C] via-transparent to-transparent" />
           
           <div className="relative z-10 text-center">
             <div className="inline-block px-3 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-xs font-mono mb-2">
               FOUNDER & CEO
             </div>
           </div>
        </div>

        {/* Content Side */}
        <div className="p-8 md:p-12 flex flex-col justify-center bg-primary-navy/90 backdrop-blur-xl">
          <h3 className="text-3xl font-display font-bold mb-2">Syed Raza</h3>
          <p className="text-primary-blue font-mono text-sm mb-6">Ex-Barclays MD • 25+ Years Experience</p>
          
          <div className="space-y-6 text-white/70 leading-relaxed mb-8">
            <p>
              "I spent decades scaling traditional banks globally. I saw firsthand how the legacy financial system fails the modern creator."
            </p>
            <p>
              "We aren't building a bank for hobbyists. We are building the financial nervous system for the next generation of media empires."
            </p>
          </div>

          <div className="flex gap-4">
             <Button variant="outline" size="sm" className="gap-2">
               <Linkedin size={16} /> Connect
             </Button>
             <div className="h-px flex-1 bg-white/10 self-center" />
             <div className="w-2 h-2 bg-primary-blue rounded-full self-center animate-pulse" />
          </div>
        </div>
      </div>
    </Card>
  </div>
);

const About = () => {
  return (
    <div className=" bg-primary-navy text-white min-h-screen overflow-hidden">
      
      {/* --- HERO SECTION --- */}
      <Section className="py-20 relative">
         {/* Background Grid */}
         <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />

         <div className="max-w-5xl mx-auto text-center relative z-10">
           <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
             <h1 className="text-5xl md:text-7xl font-display font-bold mb-8 tracking-tight leading-[1.1]">
               We are the <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-blue to-accent-teal">infrastructure</span> <br />
               for the creator economy.
             </h1>
             <p className="text-xl text-white/60 max-w-3xl mx-auto leading-relaxed">
               Bank of Creators is uniting creator enablement and finance. We use AI to clean broken metadata, track royalties, and unlock wealth for the $80B creator market.
             </p>
           </motion.div>
         </div>
      </Section>

      {/* --- STATS GRID --- */}
      <div className="w-full border-y border-white/5 bg-white/2 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 divide-x divide-white/5">
          {[
            { label: "Market Opportunity", val: "$80B+", icon: TrendingUp },
            { label: "Founded", val: "2024", icon: Building2 },
            { label: "Global HQ", val: "Nairobi", icon: MapPin },
            { label: "Reach", val: "Global", icon: Globe },
          ].map((stat, i) => (
            <div key={i} className="p-8 text-center group hover:bg-white/5 transition-colors cursor-default">
              <stat.icon className="w-6 h-6 mx-auto mb-4 text-white/20 group-hover:text-primary-blue transition-colors" />
              <div className="text-3xl font-display font-bold text-white mb-1 group-hover:scale-110 transition-transform">{stat.val}</div>
              <div className="text-xs font-mono text-white/40 uppercase tracking-widest">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* --- THE FOUNDER STORY --- */}
      <Section className="py-24">
        <div className="flex flex-col md:flex-row items-end justify-between mb-12">
           <div>
             <span className="text-primary-blue font-mono text-sm uppercase tracking-widest mb-2 block">Leadership</span>
             <h2 className="text-4xl font-display font-bold">The Architect</h2>
           </div>
           <p className="text-white/50 max-w-md text-right hidden md:block">
             Built by technologists, designers, and financial experts from the world's top institutions.
           </p>
        </div>
        
        <FounderProfile />
      </Section>

      {/* --- MISSION / VISION (Dark Mode Magazine Style) --- */}
      <Section className="py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div>
             <h2 className="text-3xl md:text-5xl font-display font-bold mb-8 leading-tight">
               Legacy banks don't speak <br/> <span className="text-accent-purple">"Creator"</span>.
             </h2>
             <div className="space-y-6 text-lg text-white/60">
               <p>
                 Musicians, producers, and influencers have irregular income streams that traditional algorithms flag as "high risk."
               </p>
               <p>
                 We built an <strong className="text-white">AI + Data Layer</strong> that understands the value of a viral video, a Spotify stream, or a brand deal contract.
               </p>
               <p>
                 We don't just hold your money. We validate your career.
               </p>
             </div>
             <div className="mt-8 pt-8 border-t border-white/10">
               <div className="flex gap-8">
                 <div>
                   <div className="text-3xl font-bold text-white mb-1">25+</div>
                   <div className="text-xs text-white/40 uppercase">Years Banking Exp.</div>
                 </div>
                 <div>
                   <div className="text-3xl font-bold text-white mb-1">AI</div>
                   <div className="text-xs text-white/40 uppercase">Driven Risk Models</div>
                 </div>
               </div>
             </div>
          </div>
          
          <div className="relative">
             <Card className="p-8 border-dashed border-white/10 bg-transparent">
               <div className="absolute top-0 right-0 p-4 opacity-20 text-accent-purple">
                 <Network size={120} />
               </div>
               <h3 className="text-xl font-bold mb-6">Global Footprint</h3>
               <div className="space-y-6">
                 {/* Nairobi Node */}
                 <div className="flex items-center gap-4 group cursor-pointer">
                    <div className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center border border-white/10 group-hover:border-primary-blue transition-colors">
                      <span className="font-bold">HQ</span>
                    </div>
                    <div>
                      <h4 className="font-bold text-lg">Nairobi, Kenya</h4>
                      <p className="text-sm text-white/40 font-mono">Innovation Hub • GMT+3</p>
                    </div>
                 </div>
                 
                 {/* London Node */}
                 <div className="flex items-center gap-4 group cursor-pointer">
                    <div className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center border border-white/10 group-hover:border-primary-blue transition-colors">
                      <span className="font-bold">LND</span>
                    </div>
                    <div>
                      <h4 className="font-bold text-lg">London, UK</h4>
                      <p className="text-sm text-white/40 font-mono">Financial Operations • GMT+0</p>
                    </div>
                 </div>

                 {/* Connecting Line */}
                 <div className="h-px w-full bg-gradient-to-r from-transparent via-white/20 to-transparent my-4" />
                 
                 <div className="flex justify-between items-center">
                   <span className="text-sm text-white/50">Expansion planned for Dubai & Riyadh (2025)</span>
                   <ArrowUpRight className="text-white/30" size={16} />
                 </div>
               </div>
             </Card>
          </div>
        </div>
      </Section>

      {/* --- CTA --- */}
      <Section className="pb-24 pt-10 text-center">
         <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">Join the revolution.</h2>
            <p className="text-white/60 mb-8">
              We are hiring builders, dreamers, and financial rebels.
            </p>
            <div className="flex justify-center gap-4">
              <Button variant="glow">View Careers</Button>
              <Button variant="outline">Contact Press</Button>
            </div>
         </div>
      </Section>
    </div>
  );
};

export default About;