import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Globe, Shield, Users, Zap, TrendingUp, Layers } from 'lucide-react';
import { Button } from '../components/ui/Button';
import { Card } from '../components/ui/Card';
import { Section } from '../components/Section';
import { Hero3D } from '../components/Hero3D';
import { useNavigate } from 'react-router-dom';
  
const Home = () => {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col min-h-screen bg-primary-navy text-white selection:bg-primary-blue/30 selection:text-primary-blue overflow-x-hidden">
      
      {/* --- HERO SECTION --- */}
      <section className="relative h-screen min-h-[800px] flex items-center justify-center overflow-hidden">
        {/* Background Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />
        
        <Hero3D />
        
        <div className="container mx-auto px-6 relative z-10 text-center mb-40">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="max-w-5xl mx-auto"
          >
            {/* Pill Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm mb-8">
              <span className="flex h-2 w-2 rounded-full bg-primary-blue animate-pulse"></span>
              <span className="text-xs font-medium tracking-wide text-white/80 uppercase">Now in Early Access</span>
            </div>

            <h1 className="text-6xl md:text-8xl font-display font-bold leading-[0.9] tracking-tighter mb-8">
              Banking for the <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-primary-blue to-primary-blue">
                Next Generation
              </span>
            </h1>
            
            <p className="text-lg md:text-xl text-white/50 mb-10 max-w-2xl mx-auto leading-relaxed">
              The first financial OS built to track royalties, monetize metadata, and scale your creative empire.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button variant="glow" size="lg">
                Open Account
                <ArrowRight className="w-4 h-4" />
              </Button>
              <Button variant="secondary" size="lg">View Demo</Button>
            </div>
          </motion.div>
        </div>
        
        {/* Scroll Indicator */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, y: [0, 10, 0] }}
          transition={{ delay: 1, duration: 2, repeat: Infinity }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/30 flex flex-col items-center gap-2"
        >
          <span className="text-[10px] uppercase tracking-widest">Scroll</span>
          <div className="w-[1px] h-12 bg-gradient-to-b from-primary-blue/0 via-primary-blue/50 to-primary-blue/0" />
        </motion.div>
      </section>

      {/* --- TRUST SIGNALS --- */}
      <div className="w-full border-y border-white/5 bg-black/20 backdrop-blur-sm overflow-hidden py-8">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-8 opacity-60">
          <span className="text-sm font-medium uppercase tracking-widest text-white/40 whitespace-nowrap">
            Powering creators 
          </span>
          <div className="flex flex-wrap justify-center gap-8 md:gap-12 grayscale hover:grayscale-0 transition-all duration-500">
             {/* Replace text with SVG logos for real project */}
             {["YouTube", "Spotify", "Twitch", "Patreon", "TikTok"].map(brand => (
               <h3 key={brand} className="text-xl font-display font-bold text-white/80">{brand}</h3>
             ))}
          </div>
        </div>
      </div>

      {/* --- VALUE PROPOSITION --- */}
      <Section className="relative">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
           {[
             { title: "AI + Data Layer", icon: Zap, desc: "We clean broken metadata to track your royalties in real-time across the web." },
             { title: "Borderless Payouts", icon: Globe, desc: "Receive funds in USD, GBP, or EUR and spend locally with zero hidden fees." },
             { title: "Bank-Grade Shield", icon: Shield, desc: "Your funds are FDIC insured up to $250k through our partner banks." },
           ].map((item, i) => (
             <Card key={i} className="flex flex-col items-start p-8 h-full" spotlight={true}>
               <div className="h-12 w-12 rounded-lg bg-gradient-to-br from-primary-blue/20 to-transparent flex items-center justify-center mb-6 text-primary-blue ring-1 ring-white/10">
                 <item.icon size={24} />
               </div>
               <h3 className="text-2xl font-display font-bold mb-3">{item.title}</h3>
               <p className="text-white/50 leading-relaxed">{item.desc}</p>
             </Card>
           ))}
        </div>
      </Section>

      {/* --- PRODUCTS PREVIEW --- */}
      <Section>
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
              Everything you need <br />
              <span className="text-white/40">to scale your craft.</span>
            </h2>
            <p className="text-white/60 text-lg">Financial tools that finally understand the creator economy.</p>
          </div>
          <Button variant="outline" onclick={() => navigate('/products')}>View All Products</Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { title: "Creator Wallet", desc: "Multi-currency accounts designed for irregular income streams.", icon: Layers },
            { title: "Smart Splits", desc: "Automate payouts to your editors, managers, and collaborators.", icon: Users },
            { title: "Royalty Analytics", desc: "Visualize your earnings across platforms in one dashboard.", icon: TrendingUp },
            { title: "Tax Vault", desc: "Auto-save a percentage of every payout for tax season.", icon: Shield },
          ].map((product, i) => (
            <Card key={i} className="group cursor-pointer min-h-[280px] flex flex-col justify-between p-8 hover:bg-white/5 transition-colors" spotlight={true}>
              <div>
                <div className="mb-6 text-white/40 group-hover:text-primary-blue transition-colors">
                  <product.icon size={28} />
                </div>
                <h3 className="text-xl font-bold mb-3">{product.title}</h3>
                <p className="text-white/50 text-sm leading-relaxed">{product.desc}</p>
              </div>
              <div className="flex items-center text-primary-blue text-sm font-bold opacity-0 translate-x-[-10px] group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">
                Explore <ArrowRight size={16} className="ml-2" />
              </div>
            </Card>
          ))}
        </div>
      </Section>

      {/* --- CTA SECTION --- */}
      <Section className="py-4">
        <div className="relative rounded-3xl bg-gradient-to-b from-primary-navy to-black border border-white/10 overflow-hidden text-center py-24 px-6 md:px-12">
          
          {/* Background Glows */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-primary-blue/20 blur-[120px] rounded-full pointer-events-none" />
          
          <div className="relative z-10 max-w-3xl mx-auto">
            <h2 className="text-5xl md:text-6xl font-display font-bold mb-8 tracking-tight">
              Ready to professionalize <br/> your passion?
            </h2>
            <p className="text-xl text-white/50 mb-10">
              Join 50,000+ creators who are taking control of their financial future.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button variant="glow" size="lg" className="w-full sm:w-auto h-14 text-base">
                Get Started Now
              </Button>
              <Button variant="outline" size="lg" className="w-full sm:w-auto h-14 text-base border-white/10 hover:bg-white/5">
                Talk to Sales
              </Button>
            </div>
          </div>
        </div>
      </Section>
    </div>
  );
};

export default Home;