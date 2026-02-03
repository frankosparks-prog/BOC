import React from 'react';
import { Section } from '../components/Section';
import { Card } from '../components/ui/Card';
import { Button } from '../components/ui/Button';
import { Shield, Lock, FileCheck, Eye, Fingerprint, Activity } from 'lucide-react';
import { motion } from 'framer-motion';

// --- SUB-COMPONENT: ANIMATED SCANNER BAR ---
const ScannerLine = () => (
  <motion.div 
    animate={{ top: ['0%', '100%', '0%'] }}
    transition={{ duration: 3, ease: "linear", repeat: Infinity }}
    className="absolute left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-primary-blue to-transparent opacity-50 shadow-[0_0_10px_#00f0ff]"
  />
);

const SecTrust = () => {
  return (
    <div className="pt-20 bg-primary-navy min-h-screen text-white overflow-hidden">
       <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />
      {/* --- HERO SECTION --- */}
      <Section className="py-4 text-center relative">
        {/* Background Radial Gradient */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary-blue/5 blur-[100px] rounded-full pointer-events-none" />

        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }} 
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-500/10 border border-green-500/20 text-green-400 font-mono text-xs uppercase tracking-widest mb-8">
            <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
            System Operational
          </div>

          <h1 className="text-5xl md:text-7xl font-display font-bold mb-6">
            Uncompromising <br /> <span className="text-primary-blue">Security</span>
          </h1>
          <p className="text-white/60 text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
            We don't just store your money; we defend it. Protected by Tier-1 banking partners and military-grade encryption.
          </p>
        </motion.div>
      </Section>

      {/* --- COMPLIANCE BADGES --- */}
      <div className="w-full border-y border-white/5 bg-white/2 py-10 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 flex flex-wrap justify-center gap-12 md:gap-20 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
           {["SOC2 Type II", "PCI DSS Level 1", "ISO 27001", "GDPR Ready"].map((badge, i) => (
             <div key={i} className="flex items-center gap-3">
               <FileCheck size={24} />
               <span className="font-display font-bold text-lg">{badge}</span>
             </div>
           ))}
        </div>
      </div>

      {/* --- CORE SECURITY GRID --- */}
      <Section className="py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          
          {/* Feature 1: FDIC (Important!) */}
          <Card className="lg:col-span-2 p-10 flex flex-col md:flex-row items-center gap-8 bg-gradient-to-br from-white/5 to-transparent" spotlight={true}>
            <div className="p-6 rounded-full bg-white/5 border border-white/10 shrink-0">
               <Shield size={48} className="text-white" />
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-4">FDIC Insured up to $250k</h3>
              <p className="text-white/60 text-lg leading-relaxed">
                Sleep soundly. Your eligible deposits are held by our regulated banking partner, Evolve Bank & Trust, Member FDIC, and are insured up to $250,000.
              </p>
            </div>
          </Card>

          {/* Feature 2: Biometrics */}
          <Card className="p-8 group" spotlight={true}>
            <div className="relative w-16 h-16 mb-6 mx-auto md:mx-0">
               <Fingerprint size={64} className="text-primary-blue opacity-20" />
               <Fingerprint size={64} className="text-primary-blue absolute inset-0 clip-path-inset-0 animate-pulse" />
            </div>
            <h3 className="text-xl font-bold mb-3">Biometric Auth</h3>
            <p className="text-white/60">FaceID and TouchID integration for instant, secure access to your dashboard.</p>
          </Card>

          {/* Feature 3: Encryption */}
          <Card className="p-8 relative overflow-hidden group" spotlight={true}>
            <div className="mb-6 text-accent-purple">
               <Lock size={32} />
            </div>
            <h3 className="text-xl font-bold mb-3">AES-256 Encryption</h3>
            <p className="text-white/60">Data is encrypted at rest and in transit using the same standards as the NSA.</p>
            <div className="mt-6 font-mono text-xs text-accent-purple/50 break-all bg-black/20 p-2 rounded border border-accent-purple/20">
              0x7f83b2a...e91c
            </div>
          </Card>

          {/* Feature 4: The "AI" Monitor */}
          <Card className="lg:col-span-2 p-0 overflow-hidden bg-[#0A0F1C] border-primary-blue/30" spotlight={false}>
            <div className="p-6 border-b border-white/10 flex justify-between items-center bg-white/5">
               <div className="flex items-center gap-3">
                 <Activity className="text-primary-blue" size={20} />
                 <h3 className="text-lg font-bold">Neural Fraud Detection</h3>
               </div>
               <span className="text-xs font-mono text-green-400 flex items-center gap-2">
                 <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
                 LIVE MONITORING
               </span>
            </div>
            <div className="p-6 font-mono text-xs md:text-sm relative h-48 overflow-hidden">
               <ScannerLine />
               <div className="space-y-3 opacity-70">
                 <div className="flex gap-4 text-green-400/80">
                   <span>[10:42:01]</span>
                   <span>SCANNING TRANSACTION... TX_99281</span>
                   <span className="text-green-400">CLEAN</span>
                 </div>
                 <div className="flex gap-4 text-green-400/80">
                   <span>[10:42:05]</span>
                   <span>VERIFYING LOCATION... TOKYO, JP</span>
                   <span className="text-green-400">MATCH</span>
                 </div>
                 <div className="flex gap-4 text-red-400/90 bg-red-500/10 p-1 -mx-1 rounded">
                   <span>[10:42:12]</span>
                   <span>SUSPICIOUS ATTEMPT BLOCKED (IP 192.168.0.1)</span>
                   <span className="font-bold">DENIED</span>
                 </div>
                 <div className="flex gap-4 text-green-400/80">
                   <span>[10:42:15]</span>
                   <span>SESSION REFRESHED</span>
                   <span className="text-green-400">OK</span>
                 </div>
               </div>
            </div>
          </Card>

        </div>
      </Section>

      {/* --- PRIVACY PROMISE --- */}
      <Section className="pb-24">
        <div className="bg-white/5 rounded-2xl p-8 md:p-12 border border-white/10 text-center relative overflow-hidden">
           <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20" />
           <div className="relative z-10 max-w-2xl mx-auto">
             <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-6 text-white">
                <Eye size={32} />
             </div>
             <h2 className="text-3xl font-bold mb-4">Your data is yours. Period.</h2>
             <p className="text-white/60 text-lg mb-8">
               We are in the business of banking, not advertising. We never sell your transaction history or personal data to third parties.
             </p>
             <Button variant="outline">Read Privacy Policy</Button>
           </div>
        </div>
      </Section>

    </div>
  );
};

export default SecTrust;