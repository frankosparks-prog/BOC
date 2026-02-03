import React from 'react';
import { Section } from '../components/Section';
import { Button } from '../components/ui/Button';
import { 
  TrendingUp, ArrowUpRight, ArrowDownRight, Download, 
  Bell, Home, Wallet, PieChart, Settings, 
 
} from 'lucide-react';
import { motion } from 'framer-motion';

// --- SUB-COMPONENT: MOCK SIDEBAR ---
const SidebarItem = ({ icon: Icon, active = false }) => (
  <div className={`p-3 rounded-xl mb-2 cursor-pointer transition-all ${active ? 'bg-primary-blue text-black shadow-[0_0_15px_rgba(0,240,255,0.4)]' : 'text-white/40 hover:text-white hover:bg-white/5'}`}>
    <Icon size={20} />
  </div>
);

// --- SUB-COMPONENT: CUSTOM SVG CHART ---
const AreaChart = () => (
  <div className="relative w-full h-full">
    <svg viewBox="0 0 100 40" className="w-full h-full overflow-visible">
      <defs>
        <linearGradient id="gradient" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#00f0ff" stopOpacity="0.2" />
          <stop offset="100%" stopColor="#00f0ff" stopOpacity="0" />
        </linearGradient>
      </defs>
      {/* Grid Lines */}
      <line x1="0" y1="10" x2="100" y2="10" stroke="white" strokeOpacity="0.05" strokeWidth="0.5" />
      <line x1="0" y1="20" x2="100" y2="20" stroke="white" strokeOpacity="0.05" strokeWidth="0.5" />
      <line x1="0" y1="30" x2="100" y2="30" stroke="white" strokeOpacity="0.05" strokeWidth="0.5" />
      
      {/* The Line */}
      <motion.path 
        initial={{ pathLength: 0 }}
        whileInView={{ pathLength: 1 }}
        transition={{ duration: 2, ease: "easeInOut" }}
        d="M0 30 Q 10 25 20 28 T 40 20 T 60 15 T 80 22 T 100 10" 
        fill="none" 
        stroke="#00f0ff" 
        strokeWidth="1" 
        vectorEffect="non-scaling-stroke"
      />
      
      {/* The Fill */}
      <motion.path 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
        d="M0 30 Q 10 25 20 28 T 40 20 T 60 15 T 80 22 T 100 10 V 40 H 0 Z" 
        fill="url(#gradient)" 
      />
    </svg>
    
    {/* Floating Tooltip Mock */}
    <motion.div 
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: 1.5 }}
      className="absolute top-[20%] right-[20%] bg-[#0A0F1C] border border-white/10 p-2 rounded-lg shadow-xl"
    >
      <div className="text-[10px] text-white/40">Revenue</div>
      <div className="text-sm font-bold text-white">$12,402</div>
    </motion.div>
  </div>
);

const DashboardPreview = () => {
  return (
    <div className="pt-8 min-h-screen bg-primary-navy overflow-hidden">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />
      <Section className="py-8 text-center">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="max-w-4xl mx-auto mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm mb-6">
             <span className="text-xs font-medium tracking-wide text-primary-blue uppercase">Product Demo</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-display font-bold mb-6">
            Your creative empire, <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-blue to-white">
              visualized in 4K.
            </span>
          </h1>
          <p className="text-white/60 text-lg md:text-xl max-w-2xl mx-auto">
            Experience the power of real-time financial tracking. No spreadsheets, just clarity.
          </p>
        </motion.div>
        
        {/* --- DASHBOARD MOCKUP CONTAINER --- */}
        <motion.div 
          initial={{ y: 50, opacity: 0, rotateX: 10 }}
          whileInView={{ y: 0, opacity: 1, rotateX: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-6xl mx-auto perspective-1000"
        >
          <div className="relative border border-white/10 rounded-2xl bg-[#050A14] shadow-2xl overflow-hidden group">
            
            {/* Top Bar (Browser style) */}
            <div className="h-12 border-b border-white/5 bg-[#0A0F1C] flex items-center px-4 gap-2">
               <div className="flex gap-1.5">
                 <div className="w-3 h-3 rounded-full bg-red-500/20" />
                 <div className="w-3 h-3 rounded-full bg-yellow-500/20" />
                 <div className="w-3 h-3 rounded-full bg-green-500/20" />
               </div>
               <div className="ml-4 px-3 py-1 rounded-md bg-black/40 border border-white/5 text-[10px] text-white/30 font-mono w-64 flex justify-between items-center">
                 <span>bankofcreators.com/dashboard</span>
                 <Lock size={10} />
               </div>
            </div>

            {/* App Layout */}
            <div className="flex h-[600px] md:h-[700px]">
              
              {/* SIDEBAR */}
              <div className="w-20 border-r border-white/5 bg-[#0A0F1C] flex flex-col items-center py-6 hidden md:flex">
                <div className="mb-8 text-primary-blue">
                  <div className="w-8 h-8 rounded-lg bg-primary-blue/20 flex items-center justify-center border border-primary-blue/50">
                    <span className="font-display font-bold">B</span>
                  </div>
                </div>
                <SidebarItem icon={Home} active />
                <SidebarItem icon={Wallet} />
                <SidebarItem icon={PieChart} />
                <div className="mt-auto">
                  <SidebarItem icon={Settings} />
                </div>
              </div>

              {/* MAIN CONTENT */}
              <div className="flex-1 bg-[#050A14] p-6 md:p-10 overflow-hidden relative">
                
                {/* Header */}
                <div className="flex justify-between items-center mb-10">
                  <div>
                    <h2 className="text-2xl font-bold text-white mb-1">Welcome back, Alex</h2>
                    <p className="text-white/40 text-sm">Here's what's happening with your royalties.</p>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="relative">
                      <Bell size={20} className="text-white/60" />
                      <div className="absolute top-0 right-0 w-2 h-2 bg-red-500 rounded-full border border-[#050A14]" />
                    </div>
                    <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-primary-blue to-purple-500 border border-white/20" />
                  </div>
                </div>

                {/* Stats Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                   <div className="bg-[#0A0F1C] border border-white/5 p-6 rounded-xl relative overflow-hidden group/card hover:border-white/10 transition-colors">
                      <div className="absolute top-0 right-0 p-4 opacity-10">
                        <TrendingUp size={40} className="text-green-500" />
                      </div>
                      <p className="text-white/40 text-sm mb-2 font-medium">Total Liquidity</p>
                      <div className="text-3xl font-display font-bold text-white mb-2">$124,592<span className="text-white/30">.00</span></div>
                      <div className="flex items-center text-green-400 text-xs font-mono bg-green-500/10 w-fit px-2 py-1 rounded">
                        <ArrowUpRight size={12} className="mr-1" /> +12.5%
                      </div>
                   </div>

                   <div className="bg-[#0A0F1C] border border-white/5 p-6 rounded-xl">
                      <p className="text-white/40 text-sm mb-2 font-medium">Pending Payouts</p>
                      <div className="text-3xl font-display font-bold text-white mb-2">$8,250<span className="text-white/30">.00</span></div>
                      <div className="text-white/30 text-xs font-mono">
                        Clearance: 2 Days
                      </div>
                   </div>

                   <div className="bg-[#0A0F1C] border border-white/5 p-6 rounded-xl flex flex-col justify-center">
                      <Button size="sm" variant="glow" className="w-full mb-3">
                         <Download size={14} className="mr-2" /> Download Report
                      </Button>
                      <Button size="sm" variant="secondary" className="w-full">
                         View Invoices
                      </Button>
                   </div>
                </div>

                {/* Main Chart Section */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 h-full">
                   {/* Chart */}
                   <div className="lg:col-span-2 bg-[#0A0F1C] border border-white/5 rounded-xl p-6 h-[300px] relative">
                      <div className="flex justify-between items-center mb-6">
                        <h3 className="font-bold text-white">Cashflow Analysis</h3>
                        <div className="flex gap-2">
                           {['1D', '1W', '1M', '1Y'].map(t => (
                             <span key={t} className={`text-xs px-2 py-1 rounded cursor-pointer ${t === '1M' ? 'bg-white/10 text-white' : 'text-white/30 hover:text-white'}`}>{t}</span>
                           ))}
                        </div>
                      </div>
                      <div className="h-[200px]">
                        <AreaChart />
                      </div>
                   </div>

                   {/* Transaction List */}
                   <div className="bg-[#0A0F1C] border border-white/5 rounded-xl p-6 h-[300px] overflow-hidden">
                      <h3 className="font-bold text-white mb-6">Recent Activity</h3>
                      <div className="space-y-4">
                        {[
                          { name: "YouTube AdSense", date: "Today", amt: "+ $3,402", type: "income" },
                          { name: "Epidemic Sound", date: "Yesterday", amt: "- $15.00", type: "expense" },
                          { name: "Nike Campaign", date: "Oct 24", amt: "+ $15,000", type: "income" },
                          { name: "Adobe Cloud", date: "Oct 22", amt: "- $54.99", type: "expense" },
                        ].map((tx, i) => (
                          <div key={i} className="flex justify-between items-center group/row cursor-pointer">
                            <div className="flex items-center gap-3">
                              <div className={`w-8 h-8 rounded-full flex items-center justify-center ${tx.type === 'income' ? 'bg-green-500/10 text-green-500' : 'bg-white/5 text-white/40'}`}>
                                 {tx.type === 'income' ? <ArrowDownRight size={14} /> : <ArrowUpRight size={14} />}
                              </div>
                              <div>
                                <div className="text-sm font-medium text-white group-hover/row:text-primary-blue transition-colors">{tx.name}</div>
                                <div className="text-[10px] text-white/30">{tx.date}</div>
                              </div>
                            </div>
                            <div className={`text-sm font-mono ${tx.type === 'income' ? 'text-green-400' : 'text-white/60'}`}>{tx.amt}</div>
                          </div>
                        ))}
                      </div>
                   </div>
                </div>

                {/* --- OVERLAY FADE --- */}
                <div className="absolute inset-x-0 bottom-0 h-64 bg-gradient-to-t from-[#050A14] via-[#050A14]/90 to-transparent pointer-events-none flex flex-col items-center justify-end pb-12 z-20">
                   <h3 className="text-2xl font-bold mb-4">Ready to take control?</h3>
                   <Button variant="glow" size="lg" className="pointer-events-auto shadow-[0_0_40px_rgba(0,240,255,0.3)]">
                     Start your application
                   </Button>
                </div>

              </div>
            </div>
          </div>
        </motion.div>
      </Section>
    </div>
  );
};

// Helper Icon for the top bar
const Lock = ({ size }) => (
  <svg 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round"
  >
    <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
    <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
  </svg>
);

export default DashboardPreview;