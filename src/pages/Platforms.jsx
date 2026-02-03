import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Section } from '../components/Section';
import { Card } from '../components/ui/Card';
import { Button } from '../components/ui/Button';
import { Share2, Globe, Database, Terminal, Check, Copy, Server, Lock, Cpu } from 'lucide-react';

// --- SUB-COMPONENT: INTERACTIVE CODE TERMINAL ---
const CodeTerminal = () => {
  const [activeTab, setActiveTab] = useState('request');
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const codeSnippet = activeTab === 'request' 
    ? `const session = await bank.payouts.create({
  amount: 5000,
  currency: 'usd',
  recipient: 'acct_123456789',
  metadata: {
    creator_id: 'user_8899',
    campaign: 'Summer_Launch'
  }
});` 
    : `{
  "id": "po_1Ne8X2H",
  "status": "pending",
  "amount": 5000,
  "arrival_date": 1692823,
  "method": "instant_rail"
}`;

  return (
    <div className="w-full max-w-2xl mx-auto md:mx-0 rounded-xl overflow-hidden bg-[#0A0F1C] border border-white/10 shadow-2xl shadow-primary-blue/10 font-mono text-sm relative group">
      {/* Terminal Header */}
      <div className="flex items-center justify-between px-4 py-3 bg-white/5 border-b border-white/5">
        <div className="flex items-center gap-2">
          <div className="flex gap-1.5">
            <div className="w-3 h-3 rounded-full bg-red-500/80" />
            <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
            <div className="w-3 h-3 rounded-full bg-green-500/80" />
          </div>
          <div className="ml-4 flex bg-black/40 rounded-lg p-1">
            <button 
              onClick={() => setActiveTab('request')}
              className={`px-3 py-1 rounded-md text-xs transition-colors ${activeTab === 'request' ? 'bg-primary-blue/20 text-primary-blue' : 'text-white/40 hover:text-white'}`}
            >
              Request
            </button>
            <button 
              onClick={() => setActiveTab('response')}
              className={`px-3 py-1 rounded-md text-xs transition-colors ${activeTab === 'response' ? 'bg-accent-teal/20 text-accent-teal' : 'text-white/40 hover:text-white'}`}
            >
              Response
            </button>
          </div>
        </div>
        <button 
          onClick={handleCopy}
          className="text-white/40 hover:text-white transition-colors"
        >
          {copied ? <Check size={14} className="text-green-400" /> : <Copy size={14} />}
        </button>
      </div>

      {/* Code Body */}
      <div className="p-6 overflow-x-auto">
        <pre className="text-left">
          <code className="language-javascript">
            {codeSnippet.split('\n').map((line, i) => (
              <div key={i} className="table-row">
                <span className="table-cell select-none text-white/20 w-8 pr-4 text-right">{i + 1}</span>
                <span className="table-cell" dangerouslySetInnerHTML={{ 
                  __html: line
                    .replace(/const|await/g, '<span class="text-purple-400">$&</span>')
                    .replace(/bank|payouts/g, '<span class="text-primary-blue">$&</span>')
                    .replace(/create/g, '<span class="text-yellow-300">$&</span>')
                    .replace(/'[^']*'/g, '<span class="text-green-400">$&</span>')
                    .replace(/:/g, '<span class="text-white/60">$&</span>')
                    .replace(/[0-9]+/g, '<span class="text-orange-400">$&</span>')
                }} />
              </div>
            ))}
          </code>
        </pre>
      </div>
      
      {/* Glowing Border Effect */}
      <div className="absolute inset-0 border border-primary-blue/0 group-hover:border-primary-blue/20 transition-colors pointer-events-none rounded-xl" />
    </div>
  );
};

const Platforms = () => {
  return (
    <div className="pt-20 bg-primary-navy min-h-screen text-white overflow-hidden">
      
      {/* --- HERO SECTION: SPLIT LAYOUT --- */}
      <Section className="py-0">
         <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Left: Content */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }} 
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center gap-2 mb-6">
               <span className="px-2 py-1 rounded bg-primary-blue/10 border border-primary-blue/20 text-primary-blue text-xs font-mono font-bold uppercase tracking-wider">
                 API v2.1 Live
               </span>
               <div className="h-px w-10 bg-white/10" />
            </div>

            <h1 className="text-5xl md:text-6xl font-display font-bold mb-6 leading-tight">
              The infrastructure for <br /> 
              <span className="text-white">creator platforms.</span>
            </h1>
            
            <p className="text-white/60 text-xl mb-8 leading-relaxed">
              Don't build banking from scratch. Embed wallets, instant payouts, and royalty splits directly into your app with a few lines of code.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <Button variant="glow" size="lg">
                 <Terminal size={16} className="mr-2" />
                 Read Documentation
              </Button>
              <Button variant="outline" size="lg">Contact Sales</Button>
            </div>

            <div className="mt-12 flex items-center gap-8 text-sm text-white/40 font-mono">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                99.99% Uptime
              </div>
              <div className="flex items-center gap-2">
                <Lock size={14} />
                SOC2 Certified
              </div>
            </div>
          </motion.div>

          {/* Right: Code Terminal */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }} 
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            {/* Abstract Background Decoration */}
            <div className="absolute -inset-10 bg-gradient-to-r from-primary-blue/20 to-purple-500/20 blur-3xl opacity-30 rounded-full" />
            <CodeTerminal />
          </motion.div>
        </div>
      </Section>

      {/* --- FEATURES: BENTO GRID --- */}
      <Section className="py-20">
        <div className="mb-12">
          <h2 className="text-3xl font-display font-bold mb-4">Complete financial stack</h2>
          <p className="text-white/50 text-lg">One integration. Endless possibilities.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* Feature 1: White Label (Span 2) */}
          <Card className="md:col-span-2 p-10 flex flex-col md:flex-row items-center justify-between gap-8 group" spotlight={true}>
            <div className="max-w-sm">
               <div className="w-12 h-12 bg-purple-500/10 rounded-lg flex items-center justify-center mb-6 text-purple-400">
                 <Cpu size={24} />
               </div>
               <h3 className="text-2xl font-bold mb-3">White-label Banking</h3>
               <p className="text-white/60 mb-6">
                 Offer branded bank accounts to your users. They see your logo, not ours. You own the experience; we handle the compliance.
               </p>
               <div className="flex gap-2 text-xs font-mono text-purple-300">
                 <span className="bg-purple-500/10 px-2 py-1 rounded">/v1/accounts</span>
                 <span className="bg-purple-500/10 px-2 py-1 rounded">/v1/cards</span>
               </div>
            </div>
            
            {/* Visual: Branded Card Transformation */}
            <div className="relative w-64 h-40">
               {/* Back Card (Bank) */}
               <div className="absolute inset-0 bg-primary-navy border border-white/10 rounded-xl transform rotate-6 scale-95 opacity-50 z-0" />
               
               {/* Front Card (Branded) */}
               <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent backdrop-blur-md border border-white/20 rounded-xl p-5 flex flex-col justify-between z-10 group-hover:-translate-y-2 transition-transform duration-500">
                  <div className="flex justify-between items-start">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-purple-500 to-primary-blue animate-pulse" /> {/* Logo Placeholder */}
                    <Globe size={16} className="text-white/50" />
                  </div>
                  <div className="space-y-2">
                    <div className="w-24 h-2 bg-white/20 rounded-full" />
                    <div className="w-16 h-2 bg-white/10 rounded-full" />
                  </div>
               </div>
            </div>
          </Card>

          {/* Feature 2: Instant Payouts */}
          <Card className="p-8 group hover:bg-white/5" spotlight={true}>
             <div className="w-12 h-12 bg-green-500/10 rounded-lg flex items-center justify-center mb-6 text-green-400">
              <Share2 size={24} />
            </div>
            <h3 className="text-xl font-bold mb-3">Global Rails</h3>
            <p className="text-white/60 text-sm mb-6">
              Pay creators in 150+ currencies. Route funds via ACH, Wire, SEPA, or Crypto Rails instantly.
            </p>
            <div className="mt-auto pt-4 border-t border-white/5 flex justify-between items-center text-xs text-white/40">
               <span>Latency</span>
               <span className="text-green-400 font-mono"> 200ms</span>
            </div>
          </Card>

          {/* Feature 3: Webhooks */}
          <Card className="md:col-span-1 p-8 group hover:bg-white/5" spotlight={true}>
            <div className="w-12 h-12 bg-blue-500/10 rounded-lg flex items-center justify-center mb-6 text-blue-400">
              <Database size={24} />
            </div>
            <h3 className="text-xl font-bold mb-3">Events & Webhooks</h3>
            <p className="text-white/60 text-sm mb-6">
              Listen for deposit events, card swipes, or balance updates in real-time.
            </p>
            <div className="font-mono text-[10px] text-blue-300 bg-blue-900/20 p-3 rounded border border-blue-500/20">
               {`{ "type": "payout.success" }`}
            </div>
          </Card>

          {/* Feature 4: Compliance (Full Width) */}
          <Card className="md:col-span-2 p-8 flex items-center justify-between bg-white/2 border-dashed border-white/10" spotlight={false}>
             <div className="flex items-center gap-4">
                <div className="p-3 bg-white/5 rounded-full">
                  <Server size={20} className="text-white/70" />
                </div>
                <div>
                  <h4 className="text-lg font-bold">Regulatory Shield</h4>
                  <p className="text-white/50 text-sm">We handle KYC, AML, and sanctions screening so you don't have to.</p>
                </div>
             </div>
             <Button variant="secondary" size="sm">View Certificates</Button>
          </Card>

        </div>
      </Section>
    </div>
  );
};

export default Platforms;