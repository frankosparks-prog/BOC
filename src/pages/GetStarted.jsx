import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '../components/ui/Button';
import { Logo } from '../components/logo'; // Assuming you have this from Step 1
import { Mail, Lock, User, ArrowRight, Github, Chrome, CheckCircle } from 'lucide-react';

const GetStarted = () => {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <div className="min-h-screen bg-primary-navy flex relative overflow-hidden text-white">
      
      {/* --- LEFT PANEL: VISUALS (Desktop Only) --- */}
      <div className="hidden lg:flex w-1/2 relative bg-[#050A14] items-center justify-center p-12 overflow-hidden">
        {/* Background FX */}
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20" />
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-primary-blue/10 via-transparent to-purple-500/10" />
        
        {/* Animated Orbs */}
        <motion.div 
          animate={{ y: [0, -20, 0], opacity: [0.5, 0.8, 0.5] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary-blue/20 rounded-full blur-[100px]" 
        />
        <motion.div 
          animate={{ y: [0, 30, 0], opacity: [0.3, 0.6, 0.3] }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-accent-purple/20 rounded-full blur-[80px]" 
        />

        {/* Content */}
        <div className="relative z-10 max-w-lg">
          <div className="mb-12">
             <Logo />
          </div>
          <h1 className="text-5xl font-display font-bold mb-6 leading-tight">
            Stop treating your <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-blue to-white">
               talent like a hobby.
            </span>
          </h1>
          <p className="text-white/60 text-lg mb-8 leading-relaxed">
            Join 50,000+ creators who use Bank of Creators to automate their taxes, track royalties, and scale their empires.
          </p>
          
          {/* Social Proof Pills */}
          <div className="space-y-4">
            {[
              "FDIC Insured up to $250k",
              "Instant Global Payouts",
              "No Hidden Fees"
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-3 text-white/80">
                <CheckCircle size={20} className="text-primary-blue" />
                <span>{item}</span>
              </div>
            ))}
          </div>

          {/* Testimonial */}
          <div className="mt-12 p-6 bg-white/5 border border-white/10 rounded-2xl backdrop-blur-md">
             <div className="flex gap-1 mb-2">
               {[...Array(5)].map((_, i) => <div key={i} className="w-4 h-4 text-yellow-500">★</div>)}
             </div>
             <p className="italic text-white/70 mb-4">"The only bank that actually understands how a Twitch payout works. Game changer."</p>
             <div className="flex items-center gap-3">
               <div className="w-10 h-10 rounded-full bg-white/10" />
               <div className="text-sm">
                 <div className="font-bold">Alex Rivera</div>
                 <div className="text-white/40">Top 1% Creator</div>
               </div>
             </div>
          </div>
        </div>
      </div>

      {/* --- RIGHT PANEL: FORM --- */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-6 md:p-12 relative">
        <div className="w-full max-w-md">
          
          {/* Mobile Logo */}
          <div className="lg:hidden mb-10 flex justify-center">
             <Logo />
          </div>

          <AnimatePresence mode="wait">
             <motion.div
               key={isLogin ? "login" : "signup"}
               initial={{ opacity: 0, x: 20 }}
               animate={{ opacity: 1, x: 0 }}
               exit={{ opacity: 0, x: -20 }}
               transition={{ duration: 0.3 }}
             >
                <div className="text-center mb-10">
                  <h2 className="text-3xl font-display font-bold mb-2">
                    {isLogin ? "Welcome back" : "Create an account"}
                  </h2>
                  <p className="text-white/50">
                    {isLogin ? "Enter your details to access your dashboard." : "Start your 30-day free trial. No credit card required."}
                  </p>
                </div>

                {/* Social Auth */}
                <div className="grid grid-cols-2 gap-4 mb-8">
                  <button className="flex items-center justify-center gap-2 p-3 rounded-lg bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all text-sm font-medium">
                    <Chrome size={18} /> Google
                  </button>
                  <button className="flex items-center justify-center gap-2 p-3 rounded-lg bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all text-sm font-medium">
                    <Github size={18} /> GitHub
                  </button>
                </div>

                <div className="relative mb-8">
                  <div className="absolute inset-0 flex items-center">
                    <div className="w-full border-t border-white/10"></div>
                  </div>
                  <div className="relative flex justify-center text-sm">
                    <span className="px-2 bg-primary-navy text-white/40">Or continue with email</span>
                  </div>
                </div>

                {/* Main Form */}
                <form className="space-y-4">
                  {!isLogin && (
                    <div className="space-y-2">
                      <label className="text-xs font-mono text-white/60 uppercase">Full Name</label>
                      <div className="relative group">
                         <User className="absolute left-3 top-3 text-white/40 group-focus-within:text-primary-blue transition-colors" size={18} />
                         <input type="text" className="w-full bg-[#0A0F1C] border border-white/10 rounded-lg py-2.5 pl-10 pr-4 text-white focus:outline-none focus:border-primary-blue focus:ring-1 focus:ring-primary-blue transition-all" placeholder="John Doe" />
                      </div>
                    </div>
                  )}
                  
                  <div className="space-y-2">
                    <label className="text-xs font-mono text-white/60 uppercase">Email Address</label>
                    <div className="relative group">
                       <Mail className="absolute left-3 top-3 text-white/40 group-focus-within:text-primary-blue transition-colors" size={18} />
                       <input type="email" className="w-full bg-[#0A0F1C] border border-white/10 rounded-lg py-2.5 pl-10 pr-4 text-white focus:outline-none focus:border-primary-blue focus:ring-1 focus:ring-primary-blue transition-all" placeholder="name@example.com" />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <div className="flex justify-between items-center">
                       <label className="text-xs font-mono text-white/60 uppercase">Password</label>
                       {isLogin && <a href="/forgot-password" className="text-xs text-primary-blue hover:text-white transition-colors">Forgot?</a>}
                    </div>
                    <div className="relative group">
                       <Lock className="absolute left-3 top-3 text-white/40 group-focus-within:text-primary-blue transition-colors" size={18} />
                       <input type="password" className="w-full bg-[#0A0F1C] border border-white/10 rounded-lg py-2.5 pl-10 pr-4 text-white focus:outline-none focus:border-primary-blue focus:ring-1 focus:ring-primary-blue transition-all" placeholder="••••••••" />
                    </div>
                  </div>

                  <Button variant="glow" className="w-full mt-6 h-12 text-base">
                    {isLogin ? "Sign In" : "Get Started"} <ArrowRight size={18} className="ml-2" />
                  </Button>
                </form>

                {/* Toggle */}
                <div className="mt-8 text-center text-sm text-white/60">
                  {isLogin ? "Don't have an account?" : "Already have an account?"}{" "}
                  <button 
                    onClick={() => setIsLogin(!isLogin)}
                    className="text-primary-blue font-bold hover:text-white transition-colors ml-1"
                  >
                    {isLogin ? "Sign up" : "Log in"}
                  </button>
                </div>
             </motion.div>
          </AnimatePresence>
        </div>
        
        {/* Footer Note */}
        <div className="absolute bottom-6 text-xs text-white/20 text-center w-full px-6">
           By continuing, you agree to Bank of Creators' Terms of Service and Privacy Policy.
        </div>
      </div>
    </div>
  );
};

export default GetStarted;