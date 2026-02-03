import React from 'react';
import { motion } from 'framer-motion';
import { Card } from '../components/ui/Card';
import { Section } from '../components/Section';
import { Button } from '../components/ui/Button';
import { PieChart, DollarSign, Globe, Zap, Shield, ArrowRight, Layers, Smartphone } from 'lucide-react';

// --- SUB-COMPONENT: HOLOGRAPHIC METAL CARD ---
const MetalCardVisual = () => (
  <motion.div 
    whileHover={{ rotateY: 15, rotateX: -5, scale: 1.05 }}
    transition={{ type: "spring", stiffness: 300 }}
    className="relative w-full max-w-sm aspect-[1.586/1] rounded-xl overflow-hidden shadow-2xl group perspective-1000"
  >
    {/* Metallic Gradient Background */}
    <div className="absolute inset-0 bg-gradient-to-br from-slate-300 via-slate-100 to-slate-400" />
    
    {/* Noise Texture for Realism */}
    <div className="absolute inset-0 opacity-20 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] brightness-100 contrast-150" />
    
    {/* Holographic Sheen */}
    <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 transform translate-x-[-100%] group-hover:translate-x-[100%]" />

    {/* Content */}
    <div className="relative h-full p-6 flex flex-col justify-between z-10">
      <div className="flex justify-between items-start">
        <Smartphone className="text-slate-800 opacity-50 rotate-90" size={24} />
        <span className="font-display font-bold text-slate-800 tracking-widest text-lg">INFINITE</span>
      </div>
      <div className="space-y-4">
        <div className="w-12 h-9 rounded bg-gradient-to-br from-yellow-200 to-yellow-500 shadow-inner border border-yellow-600/20" /> {/* Chip */}
        <div className="font-mono text-slate-800 tracking-widest text-sm opacity-80">
          •••• •••• •••• 4092
        </div>
        <div className="flex justify-between text-slate-800 text-xs font-bold tracking-wider">
          <span>JONATHAN DOE</span>
          <span>12/28</span>
        </div>
      </div>
    </div>
  </motion.div>
);

const Products = () => {
  return (
    <div className="bg-primary-navy text-white overflow-hidden">
      
      {/* --- HERO SECTION --- */}
      <Section className="text-center py-16 relative">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-primary-blue/10 blur-[100px] rounded-full -z-10" />
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm mb-8">
             <span className="text-xs font-medium tracking-wide text-primary-blue uppercase">Product Ecosystem V2.0</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-display font-bold mb-6 tracking-tight">
            The Financial OS for <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-blue to-white">
              Digital Empires
            </span>
          </h1>
          <p className="text-white/60 text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
            We replaced the bank branch with a dashboard. Manage your entire creative business from one powerful interface.
          </p>
        </motion.div>
      </Section>

      {/* --- SECTION 1: BANKING INFRASTRUCTURE (The Hardware) --- */}
      <Section className="">
        <div className="flex flex-col md:flex-row items-end justify-between mb-12 border-b border-white/10 pb-6">
          <div>
            <h2 className="text-3xl font-display font-bold mb-2">Banking Infrastructure</h2>
            <p className="text-white/50">Global accounts and physical cards built for creators.</p>
          </div>
          <div className="hidden md:block text-sm text-primary-blue font-mono">
            STATUS: OPERATIONAL
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          
          {/* FEATURE 1: METAL CARD (Visual Heavy) */}
          <Card className="p-10 flex flex-col items-center text-center bg-gradient-to-b from-white/5 to-transparent border-white/10" spotlight={true}>
            <div className="mb-10 w-full flex justify-center perspective-1000">
              <MetalCardVisual />
            </div>
            <h3 className="text-3xl font-bold mb-4">The Infinite Metal Card</h3>
            <p className="text-white/60 mb-8 max-w-md">
              Machined from a single sheet of reinforced steel. 3% cashback on camera gear, software subscriptions, and travel.
            </p>
            <div className="flex gap-4 text-sm font-medium text-white/80">
              <span className="flex items-center gap-2"><Shield size={16} className="text-primary-blue"/> Zero FX Fees</span>
              <span className="flex items-center gap-2"><Zap size={16} className="text-primary-blue"/> Contactless</span>
            </div>
          </Card>

          {/* FEATURE 2: GLOBAL ACCOUNTS (Data Heavy) */}
          <div className="grid grid-rows-2 gap-8">
            <Card className="p-8 flex flex-col justify-center" spotlight={true}>
               <div className="w-12 h-12 bg-primary-blue/10 rounded-lg flex items-center justify-center mb-6 text-primary-blue">
                <Globe size={24} />
              </div>
              <h3 className="text-2xl font-bold mb-2">Borderless Accounts</h3>
              <p className="text-white/60 mb-6">Hold 30+ currencies. Get local US, UK, and EU bank details to get paid like a local, no matter where you live.</p>
              <div className="flex gap-3">
                 {['USD', 'EUR', 'GBP', 'JPY', 'CAD'].map(curr => (
                   <span key={curr} className="px-3 py-1 rounded-md bg-white/5 border border-white/10 text-xs font-mono text-white/70">{curr}</span>
                 ))}
              </div>
            </Card>

            <Card className="p-8 flex items-center justify-between group cursor-pointer hover:bg-white/5" spotlight={true}>
              <div>
                <h3 className="text-xl font-bold mb-1">Business Credit Line</h3>
                <p className="text-white/50 text-sm">Up to $50k revolving credit based on your channel stats.</p>
              </div>
              <div className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center group-hover:bg-primary-blue group-hover:text-black group-hover:border-primary-blue transition-all">
                <ArrowRight size={20} />
              </div>
            </Card>
          </div>
        </div>
      </Section>

      {/* --- SECTION 2: CREATOR OS (The Software) --- */}
      <Section className="mb-20">
        <div className="flex flex-col md:flex-row items-end justify-between mb-12 border-b border-white/10 pb-6">
          <div>
            <h2 className="text-3xl font-display font-bold mb-2">Creator OS</h2>
            <p className="text-white/50">Software to automate your backend.</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* SMART PAYOUTS */}
          <Card className="p-8 md:col-span-1 hover:border-accent-teal/50 transition-colors group" spotlight={true}>
            <div className="w-12 h-12 bg-accent-teal/10 rounded-lg flex items-center justify-center mb-6 text-accent-teal">
              <DollarSign size={24} />
            </div>
            <h3 className="text-2xl font-bold mb-4">Smart Splits</h3>
            <p className="text-white/60 mb-8 h-12">Automatically route 20% to your editor and 10% to your manager on every payout.</p>
            
            {/* Visualizing the split */}
            <div className="space-y-3 bg-black/20 p-4 rounded-lg border border-white/5">
              <div className="flex justify-between text-xs mb-1">
                <span>Incoming: $10,000</span>
              </div>
              <div className="flex h-2 w-full rounded-full overflow-hidden">
                <div className="w-[70%] bg-primary-blue" />
                <div className="w-[20%] bg-accent-teal" />
                <div className="w-[10%] bg-purple-500" />
              </div>
              <div className="flex gap-4 text-[10px] text-white/50 pt-1">
                <span className="flex items-center gap-1"><div className="w-2 h-2 rounded-full bg-primary-blue"/> You (70%)</span>
                <span className="flex items-center gap-1"><div className="w-2 h-2 rounded-full bg-accent-teal"/> Editor (20%)</span>
              </div>
            </div>
          </Card>

          {/* AI ANALYTICS */}
          <Card className="p-8 md:col-span-1 group" spotlight={true}>
             <div className="w-12 h-12 bg-purple-500/10 rounded-lg flex items-center justify-center mb-6 text-purple-400">
              <PieChart size={24} />
            </div>
            <h3 className="text-2xl font-bold mb-4">Net Worth Analytics</h3>
            <p className="text-white/60 mb-8 h-12">Connect broken metadata. Track royalties and digital income in real-time.</p>
            
            {/* Visualizing Chart */}
            <div className="h-24 flex items-end justify-between gap-2 px-2 pb-2 border-b border-l border-white/10 opacity-70 group-hover:opacity-100 transition-opacity">
               {[40, 65, 50, 80, 55, 90, 100].map((h, i) => (
                 <div key={i} className="w-full bg-purple-500/50 rounded-t-sm" style={{ height: `${h}%` }} />
               ))}
            </div>
          </Card>

          {/* TAX VAULT */}
          <Card className="p-8 md:col-span-1 group" spotlight={true}>
            <div className="w-12 h-12 bg-orange-500/10 rounded-lg flex items-center justify-center mb-6 text-orange-400">
              <Layers size={24} />
            </div>
            <h3 className="text-2xl font-bold mb-4">Auto-Tax Vault</h3>
            <p className="text-white/60 mb-8 h-12">Never fear April 15th. We automatically set aside your estimated taxes.</p>
            <div className="mt-auto">
               <div className="flex justify-between items-center bg-white/5 p-3 rounded-lg border border-white/10 group-hover:border-orange-500/30 transition-colors">
                  <span className="text-sm font-medium">Safe to Spend</span>
                  <span className="text-lg font-bold font-mono text-primary-blue">$8,420</span>
               </div>
            </div>
          </Card>

        </div>
      </Section>

      {/* --- CTA --- */}
      <Section className="py-4 text-center">
         <div className="p-12 rounded-3xl bg-gradient-to-r from-primary-navy to-primary-blue/10 border border-primary-blue/20 relative overflow-hidden">
            <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10" />
            <h2 className="text-3xl md:text-5xl font-display font-bold mb-6">Stop using tools built for 2010.</h2>
            <p className="text-white/60 mb-8 max-w-xl mx-auto">Join the new standard of financial creativity.</p>
            <Button variant="glow" size="lg">Get Started Now</Button>
         </div>
      </Section>
    </div>
  );
};

export default Products;