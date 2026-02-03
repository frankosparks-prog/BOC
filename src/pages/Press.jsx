import React, { useState } from 'react';
import { Section } from '../components/Section';
import { Card } from '../components/ui/Card';
import { Button } from '../components/ui/Button';
import { Download, Image, FileText, Copy, ExternalLink, Check } from 'lucide-react';
import { motion } from 'framer-motion';

// --- SUB-COMPONENT: ASSET CARD ---
const AssetCard = ({ title, format, size, icon: Icon }) => (
  <Card className="p-6 group cursor-pointer hover:border-primary-blue/50 transition-all" spotlight={true}>
    <div className="flex justify-between items-start mb-6">
      <div className="p-3 bg-white/5 rounded-lg text-white/60 group-hover:text-primary-blue group-hover:bg-primary-blue/10 transition-colors">
        <Icon size={24} />
      </div>
      <div className="p-2 rounded-full border border-white/10 text-white/40 group-hover:text-primary-blue group-hover:border-primary-blue/30 transition-colors">
        <Download size={16} />
      </div>
    </div>
    <h3 className="font-bold text-lg mb-1">{title}</h3>
    <div className="flex gap-3 text-xs text-white/40 font-mono">
      <span>{format}</span>
      <span>•</span>
      <span>{size}</span>
    </div>
  </Card>
);

const PressKit = () => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText("Bank of Creators is the first financial operating system built strictly for the creator economy. Founded in 2024, the platform uses AI to clean broken metadata, track royalties across platforms, and provide borderless banking for digital entrepreneurs.");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="pt-8 bg-primary-navy min-h-screen text-white overflow-hidden">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />
      {/* --- HERO SECTION --- */}
      <Section className="py-8 text-center relative">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-primary-blue/10 blur-[120px] rounded-full pointer-events-none" />
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm mb-8">
             <span className="text-xs font-medium tracking-wide text-white/60 uppercase">Newsroom & Assets</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-display font-bold mb-6 tracking-tight">
            Press <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-blue to-accent-teal">Kit</span>
          </h1>
          <p className="text-lg text-white/60 mb-10 max-w-xl mx-auto leading-relaxed">
            Official brand assets, leadership bios, and latest news for media professionals.
          </p>
          
          <div className="flex justify-center gap-4">
            <Button variant="glow">Download Full Kit (ZIP)</Button>
            <Button variant="outline">Contact PR Team</Button>
          </div>
        </motion.div>
      </Section>

      {/* --- BRAND BOILERPLATE --- */}
      <Section className="py-12">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-sm font-mono uppercase tracking-widest text-white/50">Company Boilerplate</h2>
            <button 
              onClick={handleCopy}
              className="flex items-center gap-2 text-xs text-primary-blue hover:text-white transition-colors"
            >
              {copied ? <Check size={14} /> : <Copy size={14} />}
              {copied ? "Copied to Clipboard" : "Copy Text"}
            </button>
          </div>
          <div className="bg-[#0A0F1C] border border-white/10 rounded-xl p-8 shadow-2xl relative group">
            <div className="absolute top-0 left-0 w-1 h-full bg-primary-blue/50 rounded-l-xl" />
            <p className="text-lg text-white/80 leading-relaxed font-serif">
              "Bank of Creators is the first financial operating system built strictly for the creator economy. Founded in 2024, the platform uses AI to clean broken metadata, track royalties across platforms, and provide borderless banking for digital entrepreneurs. Headquartered in Nairobi and London, the company is backed by Tier-1 fintech investors."
            </p>
          </div>
        </div>
      </Section>

      {/* --- ASSET DOWNLOADS --- */}
      <Section className="py-20">
        <h2 className="text-3xl font-display font-bold mb-10">Brand Assets</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <AssetCard 
            title="Logo Pack" 
            format="SVG, PNG, EPS" 
            size="12 MB" 
            icon={Image} 
          />
          <AssetCard 
            title="Product Mockups" 
            format="Figma, PNG" 
            size="45 MB" 
            icon={FileText} 
          />
          <AssetCard 
            title="Leadership Headshots" 
            format="JPG (High Res)" 
            size="28 MB" 
            icon={Image} 
          />
          <AssetCard 
            title="Brand Guidelines" 
            format="PDF" 
            size="4 MB" 
            icon={FileText} 
          />
        </div>
      </Section>

      {/* --- PRESS RELEASES --- */}
      <Section className="py-20 border-t border-white/5">
        <div className="flex justify-between items-end mb-10">
           <h2 className="text-3xl font-display font-bold">Recent Press</h2>
           <Button variant="ghost" size="sm">View Archive</Button>
        </div>

        <div className="space-y-4">
          {[
            { date: "Oct 24, 2026", source: "TechCrunch", title: "Bank of Creators raises $40M Series B to expand into Middle East" },
            { date: "Sep 12, 2026", source: "Bloomberg", title: "Why the Creator Economy is moving away from traditional banking" },
            { date: "Aug 05, 2026", source: "Variety", title: "Bank of Creators launches 'Royalty Advance' for independent musicians" },
            { date: "Jul 22, 2026", source: "Forbes", title: "Syed Raza on the future of monetizing metadata" },
          ].map((news, i) => (
            <motion.div 
              key={i}
              whileHover={{ x: 10 }}
              className="group flex flex-col md:flex-row md:items-center justify-between p-6 bg-white/5 border border-white/5 hover:border-white/10 rounded-xl cursor-pointer transition-colors"
            >
              <div className="flex flex-col md:flex-row md:items-center gap-4 md:gap-8">
                <span className="text-sm font-mono text-white/40">{news.date}</span>
                <div>
                   <span className="text-xs font-bold text-primary-blue uppercase tracking-wider mb-1 block">{news.source}</span>
                   <h3 className="text-xl font-bold group-hover:text-primary-blue transition-colors">{news.title}</h3>
                </div>
              </div>
              <div className="mt-4 md:mt-0 opacity-0 group-hover:opacity-100 transition-opacity">
                 <ExternalLink size={20} className="text-white/60" />
              </div>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* --- PR CONTACT --- */}
      <Section className="pb-24 pt-10">
         <div className="bg-gradient-to-r from-primary-blue/10 to-transparent border border-primary-blue/20 rounded-2xl p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8">
            <div>
              <h2 className="text-2xl font-bold mb-2">Media Inquiries</h2>
              <p className="text-white/60">For interview requests or additional information, please contact our PR team.</p>
            </div>
            <div className="text-right">
              <a href="mailto:press@bankofcreators.com" className="text-xl font-bold text-white hover:text-primary-blue transition-colors block">
                press@bankofcreators.com
              </a>
              <span className="text-sm text-white/40">Response time: &lt; 12 hours</span>
            </div>
         </div>
      </Section>

    </div>
  );
};

export default PressKit;