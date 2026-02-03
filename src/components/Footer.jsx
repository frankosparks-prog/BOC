import React from 'react';
import { Button } from './ui/Button';
import { Twitter, Instagram, Linkedin, Github, Send, ArrowRight } from 'lucide-react';
import { Logo } from './logo';

const Footer = () => {
  return (
    <footer className="bg-[#050A14] border-t border-white/5 pt-20 pb-10 px-6 relative overflow-hidden">
      
      {/* Decorative Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[2px] bg-gradient-to-r from-transparent via-primary-blue/50 to-transparent opacity-50" />

      <div className="max-w-7xl mx-auto">
        
        {/* --- TOP SECTION: NEWSLETTER --- */}
        <div className="flex flex-col md:flex-row justify-between items-end gap-10 mb-20 border-b border-white/5 pb-12">
          <div className="max-w-md">
            <h3 className="text-2xl font-display font-bold text-white mb-2">Join the inner circle.</h3>
            <p className="text-white/50 text-sm">
              Get the latest financial strategies for creators delivered to your inbox weekly. No spam, just alpha.
            </p>
          </div>
          
          <div className="w-full md:w-auto flex flex-col sm:flex-row gap-4">
            <div className="relative group">
               <input 
                 type="email" 
                 placeholder="Enter your email" 
                 className="w-full sm:w-80 bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-white/30 focus:outline-none focus:border-primary-blue transition-colors"
               />
               <div className="absolute inset-0 rounded-lg bg-primary-blue/5 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
            </div>
            <Button variant="glow" className="whitespace-nowrap">
              Subscribe <Send size={14} className="ml-2" />
            </Button>
          </div>
        </div>

        {/* --- MIDDLE SECTION: LINKS --- */}
        <div className="grid grid-cols-2 md:grid-cols-12 gap-10 md:gap-8 mb-20">
          
          {/* Column 1: Brand (Spans 4 columns) */}
          <div className="col-span-2 md:col-span-4 space-y-6">
            <Logo />
            <p className="text-white/50 text-sm leading-relaxed max-w-xs">
              The first financial operating system built strictly for the creator economy. Track royalties, automate taxes, and scale your empire.
            </p>
            <div className="flex gap-4">
              {[
                { Icon: Twitter, href: "https://twitter.com" },
                { Icon: Instagram, href: "https://instagram.com" },
                { Icon: Linkedin, href: "https://linkedin.com" },
                { Icon: Github, href: "https://github.com" }
              ].map(({ Icon, href }, i) => (
                <a 
                  key={i} 
                  href={href} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white/60 hover:bg-white/10 hover:text-primary-blue transition-all"
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Column 2: Product */}
          <div className="col-span-1 md:col-span-2 md:col-start-6">
            <h4 className="text-white font-bold mb-6">Product</h4>
            <ul className="space-y-4 text-sm text-white/50">
              {[
                { name: 'Creator Account', href: '/get-started' },
                { name: 'Smart Payouts', href: '/products' },
                { name: 'Analytics', href: '/dashbord-preview' },
                { name: 'Tax Vault', href: '/products' },
                { name: 'Pricing', href: '/products' }
              ].map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="hover:text-primary-blue transition-colors flex items-center gap-2 group">
                    {link.name}
                    <ArrowRight size={10} className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Company */}
          <div className="col-span-1 md:col-span-2">
            <h4 className="text-white font-bold mb-6">Company</h4>
            <ul className="space-y-4 text-sm text-white/50">
              {[
                { name: 'About', href: '/about' },
                { name: 'Careers', href: '/about' },
                { name: 'Press Kit', href: '/press' },
                { name: 'Contact', href: '/contact' },
                { name: 'Partners', href: '/about' }
              ].map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="hover:text-primary-blue transition-colors flex items-center gap-2 group">
                    {link.name}
                    <ArrowRight size={10} className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Resources */}
          <div className="col-span-1 md:col-span-2">
            <h4 className="text-white font-bold mb-6">Resources</h4>
            <ul className="space-y-4 text-sm text-white/50">
              {[
                { name: 'Help Center', href: '/resources' },
                { name: 'API Docs', href: '/platforms' },
                { name: 'Community', href: '/resources' },
                { name: 'Status', href: '/status' },
                { name: 'Security', href: '/security' }
              ].map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="hover:text-primary-blue transition-colors flex items-center gap-2 group">
                    {link.name}
                    <ArrowRight size={10} className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* --- BOTTOM SECTION: COMPLIANCE --- */}
        <div className="pt-10 border-t border-white/5">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-8">
            <div className="text-xs text-white/30 flex flex-wrap gap-6">
              <a href="/privacy" className="hover:text-white transition-colors">Privacy Policy</a>
              <a href="/terms" className="hover:text-white transition-colors">Terms of Service</a>
              <a href="/disclosure" className="hover:text-white transition-colors">Electronic Disclosure</a>
            </div>
            
            <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-green-500/5 border border-green-500/10">
              <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
              <span className="text-[10px] font-mono font-medium text-green-500 uppercase tracking-wider">
                All Systems Operational
              </span>
            </div>
          </div>

          <p className="text-[10px] leading-relaxed text-white/20 max-w-5xl">
            Bank of Creators is a financial technology company, not a bank. Banking services are provided by Evolve Bank & Trust, Member FDIC. 
            The Bank of Creators Visa® Commercial Credit Card is issued by Celtic Bank pursuant to a license from Visa U.S.A. Inc. and may be used wherever Visa cards are accepted. 
            *APY (Annual Percentage Yield) is variable and subject to change.
            <br /><br />
            © 2026 Bank of Creators Technologies Inc. San Francisco, CA.
          </p>
        </div>
      </div>
    </footer>
  );
};

export { Footer };