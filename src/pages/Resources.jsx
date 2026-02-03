import React, { useState } from 'react';
import { Section } from '../components/Section';
import { Card } from '../components/ui/Card';
import { Button } from '../components/ui/Button';
import { Search, BookOpen, HelpCircle, Users, ArrowRight, FileText, MessageCircle, ExternalLink } from 'lucide-react';
import { motion } from 'framer-motion';

const Resources = () => {
  const [isFocused, setIsFocused] = useState(false);

  const categories = [
    { title: "Academy", icon: BookOpen, desc: "Master your finances with our creator-first curriculum.", color: "text-accent-teal" },
    { title: "Help Center", icon: HelpCircle, desc: "Step-by-step guides for setting up your wallet and API.", color: "text-accent-purple" },
    { title: "Community", icon: Users, desc: "Join 50k+ creators sharing strategies in our Discord.", color: "text-primary-blue" },
    { title: "API Docs", icon: FileText, desc: "Technical references for platforms and developers.", color: "text-orange-400" },
  ];

  const articles = [
    { 
      title: "The 2026 Creator Tax Guide", 
      category: "Finance", 
      readTime: "8 min read",
      image: "bg-gradient-to-br from-purple-900 to-indigo-900"
    },
    { 
      title: "How to diversify income beyond AdSense", 
      category: "Strategy", 
      readTime: "12 min read",
      image: "bg-gradient-to-br from-blue-900 to-cyan-900"
    },
    { 
      title: "Setting up LLCs for Streamers", 
      category: "Legal", 
      readTime: "6 min read",
      image: "bg-gradient-to-br from-emerald-900 to-teal-900"
    }
  ];

  return (
    <div className="pt-20 bg-primary-navy min-h-screen text-white overflow-hidden">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />
      {/* --- HERO SECTION --- */}
      <Section className="py-8 text-center relative">
        {/* Background Mesh */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 opacity-30 pointer-events-none">
           <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-primary-blue/20 blur-[120px] rounded-full" />
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="relative z-10"
        >
          <h1 className="text-5xl md:text-7xl font-display font-bold mb-6 tracking-tight">
            Intelligence <br /> <span className="text-white/40">Center</span>
          </h1>
          <p className="text-lg text-white/60 mb-10 max-w-xl mx-auto">
            Everything you need to navigate the financial side of the creator economy.
          </p>

          {/* Futuristic Search Bar */}
          <div className="max-w-2xl mx-auto relative group">
            <div className={`absolute -inset-0.5 bg-gradient-to-r from-primary-blue via-accent-purple to-primary-blue rounded-full opacity-50 blur transition duration-500 group-hover:opacity-100 ${isFocused ? 'opacity-100' : 'opacity-30'}`}></div>
            <div className="relative flex items-center bg-[#0A0F1C] rounded-full">
              <Search className={`ml-6 transition-colors ${isFocused ? 'text-primary-blue' : 'text-white/40'}`} size={20} />
              <input 
                type="text" 
                placeholder="Ask a question (e.g., 'How do I lower my tax bill?')" 
                className="w-full bg-transparent border-none rounded-full py-4 pl-4 pr-6 text-white placeholder-white/40 focus:outline-none focus:ring-0"
                onFocus={() => setIsFocused(true)}
                onBlur={() => setIsFocused(false)}
              />
              <div className="pr-2">
                 <Button size="sm" className="rounded-full h-8 px-4 text-xs">Search</Button>
              </div>
            </div>
          </div>
          
          <div className="mt-6 flex justify-center gap-4 text-xs text-white/40">
            <span>Popular:</span>
            <button className="hover:text-primary-blue underline decoration-primary-blue/30 underline-offset-4 bg-transparent border-none cursor-pointer p-0 text-xs text-white/40">Taxes</button>
            <button className="hover:text-primary-blue underline decoration-primary-blue/30 underline-offset-4 bg-transparent border-none cursor-pointer p-0 text-xs text-white/40">Global Payouts</button>
            <button className="hover:text-primary-blue underline decoration-primary-blue/30 underline-offset-4 bg-transparent border-none cursor-pointer p-0 text-xs text-white/40">LLC Setup</button>
          </div>
        </motion.div>
      </Section>

      {/* --- CATEGORY GRID --- */}
      <Section className="py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((cat, i) => (
            <Card key={i} className="p-6 group hover:border-white/20 transition-all cursor-pointer" spotlight={true}>
              <div className="flex items-start justify-between mb-4">
                <div className={`p-3 rounded-lg bg-white/5 ${cat.color} group-hover:bg-white/10 transition-colors`}>
                  <cat.icon size={24} />
                </div>
                <ArrowRight size={16} className="text-white/20 group-hover:text-white group-hover:translate-x-1 transition-all" />
              </div>
              <h3 className="text-lg font-bold mb-2">{cat.title}</h3>
              <p className="text-white/50 text-sm leading-relaxed">{cat.desc}</p>
            </Card>
          ))}
        </div>
      </Section>

      {/* --- FEATURED ARTICLES (Magazine Style) --- */}
      <Section className="py-20 border-t border-white/5">
        <div className="flex justify-between items-end mb-10">
          <div>
            <h2 className="text-3xl font-display font-bold mb-2">Latest Insights</h2>
            <p className="text-white/50">Deep dives into the mechanics of wealth.</p>
          </div>
          <Button variant="outline" className="hidden md:flex">View All Articles</Button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Feature Article */}
          <div className="lg:col-span-2 relative group cursor-pointer overflow-hidden rounded-2xl border border-white/10">
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent z-10" />
            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1639322537228-f710d846310a?q=80&w=2532&auto=format&fit=crop')] bg-cover bg-center transition-transform duration-700 group-hover:scale-105" />
            
            <div className="relative z-20 h-full flex flex-col justify-end p-8 md:p-12">
              <span className="inline-block px-3 py-1 bg-primary-blue text-black text-xs font-bold uppercase tracking-wider rounded mb-4 w-fit">
                Featured Report
              </span>
              <h3 className="text-3xl md:text-4xl font-bold mb-4 group-hover:text-primary-blue transition-colors">
                The State of Creator Finance 2026
              </h3>
              <p className="text-white/80 text-lg max-w-xl mb-6">
                We surveyed 10,000 creators to understand how income streams are shifting from ad revenue to direct ownership.
              </p>
              <div className="flex items-center gap-2 text-sm font-medium">
                <span className="text-white">Read Full Report</span>
                <ArrowRight size={16} className="text-primary-blue" />
              </div>
            </div>
          </div>

          {/* Side Articles List */}
          <div className="flex flex-col gap-6">
            {articles.map((article, i) => (
              <Card key={i} className="flex-1 p-6 flex flex-col justify-center group cursor-pointer hover:bg-white/5 transition-colors">
                <div className="flex items-center justify-between mb-3 text-xs uppercase tracking-wider font-medium">
                  <span className="text-primary-blue">{article.category}</span>
                  <span className="text-white/40">{article.readTime}</span>
                </div>
                <h4 className="text-xl font-bold mb-2 group-hover:text-primary-blue transition-colors">
                  {article.title}
                </h4>
                <p className="text-white/50 text-sm mt-auto flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity translate-y-2 group-hover:translate-y-0">
                  Read Article <ArrowRight size={12} />
                </p>
              </Card>
            ))}
          </div>
        </div>
      </Section>

      {/* --- COMMUNITY STATUS --- */}
      <Section className="py-20 mb-20">
        <div className="bg-[#0f172a] border border-white/10 rounded-2xl p-8 md:p-12 relative overflow-hidden">
           <div className="absolute top-0 right-0 p-4 opacity-10">
             <MessageCircle size={150} />
           </div>
           
           <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center relative z-10">
             <div>
               <h2 className="text-3xl font-bold mb-4">Join the hive mind.</h2>
               <p className="text-white/60 mb-8 text-lg">
                 Financial independence is a multiplayer game. Connect with 50,000+ creators sharing real numbers and strategies.
               </p>
               <Button variant="glow">
                 <ExternalLink size={16} className="mr-2" />
                 Join Discord Server
               </Button>
             </div>

             <div className="grid grid-cols-2 gap-4">
               <div className="bg-white/5 rounded-xl p-6 text-center border border-white/5">
                 <div className="text-3xl font-display font-bold text-white mb-1">54,203</div>
                 <div className="text-xs text-white/40 uppercase tracking-widest">Members</div>
               </div>
               <div className="bg-white/5 rounded-xl p-6 text-center border border-white/5">
                 <div className="text-3xl font-display font-bold text-green-400 mb-1 flex items-center justify-center gap-2">
                   <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                   1,842
                 </div>
                 <div className="text-xs text-white/40 uppercase tracking-widest">Online Now</div>
               </div>
               <div className="col-span-2 bg-gradient-to-r from-[#5865F2]/20 to-transparent border border-[#5865F2]/30 rounded-xl p-4 flex items-center gap-4">
                 <div className="bg-[#5865F2] p-2 rounded-lg">
                   <MessageCircle size={20} className="text-white" />
                 </div>
                 <div className="text-sm">
                   <span className="block text-white font-bold">#money-talks</span>
                   <span className="text-white/50">Active discussion: "Best banks for LLCs?"</span>
                 </div>
               </div>
             </div>
           </div>
        </div>
      </Section>

    </div>
  );
};

export default Resources;