import React from 'react';
import { Section } from '../components/Section';
import { Button } from '../components/ui/Button';
import { motion } from 'framer-motion';
import { Home, ArrowLeft, AlertTriangle } from 'lucide-react';

// --- SUB-COMPONENT: GLITCH TEXT EFFECT ---
const GlitchText = ({ text }) => {
  return (
    <div className="relative inline-block">
      {/* Main Text */}
      <span className="relative z-10">{text}</span>
      
      {/* Cyan Offset Layer */}
      <motion.span 
        className="absolute top-0 left-0 -z-10 text-primary-blue opacity-70"
        animate={{ x: [-2, 2, -1, 0], opacity: [0.5, 0.8, 0.5] }}
        transition={{ duration: 0.2, repeat: Infinity, repeatDelay: 3 }}
      >
        {text}
      </motion.span>
      
      {/* Red Offset Layer */}
      <motion.span 
        className="absolute top-0 left-0 -z-10 text-red-500 opacity-70"
        animate={{ x: [2, -2, 1, 0], opacity: [0.5, 0.8, 0.5] }}
        transition={{ duration: 0.2, repeat: Infinity, repeatDelay: 3.1 }}
      >
        {text}
      </motion.span>
    </div>
  );
};

const NotFound = () => {
  return (
    <div className="min-h-screen bg-primary-navy flex items-center justify-center relative overflow-hidden">
      
      {/* --- BACKGROUND FX --- */}
      <div className="absolute inset-0 z-0">
         {/* Noise Texture */}
         <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10" />
         
         {/* Grid Pattern */}
         <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:50px_50px]" />
         
         {/* Animated Spotlight */}
         <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary-blue/5 blur-[120px] rounded-full pointer-events-none" />
      </div>

      <Section className="relative z-10 text-center px-6">
        <motion.div
           initial={{ opacity: 0, scale: 0.95 }}
           animate={{ opacity: 1, scale: 1 }}
           transition={{ duration: 0.5 }}
           className="max-w-2xl mx-auto"
        >
          {/* Status Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-500/10 border border-red-500/20 text-red-400 font-mono text-xs uppercase tracking-widest mb-8">
            <AlertTriangle size={12} />
            Signal Lost
          </div>

          {/* Huge Glitch Number */}
          <h1 className="text-8xl md:text-[10rem] font-display font-bold leading-none mb-2 tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white to-white/10 select-none">
            <GlitchText text="404" />
          </h1>

          <h2 className="text-2xl md:text-3xl font-bold mb-6 text-white">
            Coordinates not found.
          </h2>
          
          <p className="text-white/50 text-lg mb-10 max-w-md mx-auto leading-relaxed">
            The financial node you are looking for has been moved, deleted, or never existed in this timeline.
          </p>

          {/* Terminal Error Code Box */}
          <div className="mb-10 bg-[#0A0F1C] border border-white/10 rounded-lg p-4 font-mono text-xs text-left max-w-sm mx-auto shadow-2xl overflow-hidden relative group">
             {/* Scanline */}
             <div className="absolute top-0 left-0 right-0 h-[1px] bg-primary-blue/50 animate-scanline" />
             
             <div className="flex gap-1.5 mb-3 border-b border-white/5 pb-2">
               <div className="w-2 h-2 rounded-full bg-red-500" />
               <div className="w-2 h-2 rounded-full bg-yellow-500" />
               <div className="w-2 h-2 rounded-full bg-green-500" />
             </div>
             <div className="space-y-1 opacity-70">
               <p className="text-red-400">{`> Error: PAGE_NOT_FOUND`}</p>
               <p className="text-white/50">{`> Path: /undefined`}</p>
               <p className="text-white/50">{`> Status: 404`}</p>
               <p className="text-primary-blue animate-pulse">{`> _`}</p>
             </div>
          </div>

          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a href="/">
              <Button variant="glow" size="lg" className="w-full sm:w-auto">
                <Home size={16} className="mr-2" /> Return to Base
              </Button>
            </a>
            <button onClick={() => window.history.back()}>
              <Button variant="secondary" size="lg" className="w-full sm:w-auto">
                <ArrowLeft size={16} className="mr-2" /> Go Back
              </Button>
            </button>
          </div>
        </motion.div>
      </Section>
    </div>
  );
};

export default NotFound;