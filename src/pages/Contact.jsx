import React from 'react';
import { Section } from '../components/Section';
import { Card } from '../components/ui/Card';
import { Button } from '../components/ui/Button';
import { Mail, MapPin, MessageSquare, Send, Globe, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

const Contact = () => {
  return (
    <div className="pt-8 bg-primary-navy min-h-screen text-white overflow-hidden">
       <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />
      {/* --- HERO SECTION --- */}
      <Section className="py-8 text-center relative">
        {/* Background Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary-blue/5 blur-[100px] rounded-full pointer-events-none" />

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm mb-8">
             <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
             <span className="text-xs font-medium tracking-wide text-white/80 uppercase">Support Online</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-display font-bold mb-6 tracking-tight">
            Get in <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-blue to-accent-teal">Touch</span>
          </h1>
          <p className="text-lg text-white/60 mb-10 max-w-xl mx-auto leading-relaxed">
            Whether you have a question about API integration or need help with a transaction, our team is ready.
          </p>
        </motion.div>
      </Section>

      {/* --- MAIN CONTENT --- */}
      <Section className="pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          
          {/* LEFT COLUMN: Contact Options */}
          <div className="space-y-6">
            <h2 className="text-2xl font-display font-bold mb-6">Direct Channels</h2>
            
            {/* Email Card */}
            <Card className="p-6 flex items-start gap-6 group hover:border-primary-blue/40 transition-all cursor-pointer" spotlight={true}>
              <div className="w-12 h-12 bg-primary-blue/10 rounded-xl flex items-center justify-center text-primary-blue group-hover:scale-110 transition-transform">
                <Mail size={24} />
              </div>
              <div className="flex-1">
                <div className="flex justify-between items-start">
                   <h3 className="font-bold text-lg mb-1">Email Support</h3>
                   <ArrowRight size={16} className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-primary-blue" />
                </div>
                <p className="text-white/60 text-sm mb-2">For general inquiries and account issues.</p>
                <div className="flex items-center gap-2 text-xs font-mono text-primary-blue/80 bg-primary-blue/5 w-fit px-2 py-1 rounded">
                   <span>support@bankofcreators.com</span>
                </div>
              </div>
            </Card>

            {/* Live Chat Card */}
            <Card className="p-6 flex items-start gap-6 group hover:border-accent-teal/40 transition-all cursor-pointer" spotlight={true}>
              <div className="w-12 h-12 bg-accent-teal/10 rounded-xl flex items-center justify-center text-accent-teal group-hover:scale-110 transition-transform">
                <MessageSquare size={24} />
              </div>
              <div className="flex-1">
                <div className="flex justify-between items-start">
                   <h3 className="font-bold text-lg mb-1">Live Chat</h3>
                   <ArrowRight size={16} className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-accent-teal" />
                </div>
                <p className="text-white/60 text-sm mb-2">Instant answers from our specialized agents.</p>
                <div className="flex items-center gap-2 text-xs text-white/40">
                   <div className="w-1.5 h-1.5 rounded-full bg-green-500" />
                   <span>Agents Available (Avg wait: 2m)</span>
                </div>
              </div>
            </Card>
            
            {/* Office Locations */}
            <Card className="p-6 relative overflow-hidden group" spotlight={false}>
               <div className="absolute top-0 right-0 p-6 opacity-5 text-white">
                 <Globe size={100} />
               </div>
               <div className="flex items-start gap-6 relative z-10">
                 <div className="w-12 h-12 bg-purple-500/10 rounded-xl flex items-center justify-center text-purple-400">
                   <MapPin size={24} />
                 </div>
                 <div>
                   <h3 className="font-bold text-lg mb-4">Global HQs</h3>
                   <div className="space-y-4">
                      <div className="flex items-start gap-3">
                        <div className="w-1 h-full min-h-[2rem] bg-white/10 rounded-full" />
                        <div>
                          <h4 className="font-bold text-sm">San Francisco</h4>
                          <p className="text-xs text-white/50">548 Market St, CA 94104</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="w-1 h-full min-h-[2rem] bg-white/10 rounded-full" />
                        <div>
                          <h4 className="font-bold text-sm">London</h4>
                          <p className="text-xs text-white/50">145 City Rd, EC1V 1AZ</p>
                        </div>
                      </div>
                   </div>
                 </div>
               </div>
            </Card>
          </div>

          {/* RIGHT COLUMN: Contact Form */}
          <div className="relative">
            {/* Form Glow */}
            <div className="absolute -inset-1 bg-gradient-to-r from-primary-blue via-purple-500 to-primary-blue rounded-2xl opacity-20 blur-lg" />
            
            <Card className="p-8 md:p-10 bg-[#0A0F1C] border-white/10 relative z-10" spotlight={false}>
              <h2 className="text-2xl font-bold mb-6">Send a message</h2>
              <form className="space-y-6">
                <div className="grid grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs font-mono text-white/60 uppercase tracking-wider">First Name</label>
                    <input type="text" className="w-full bg-white/5 border border-white/10 rounded-lg p-3 text-white focus:outline-none focus:border-primary-blue focus:bg-primary-blue/5 transition-all" placeholder="Jane" />
                  </div>
                  <div className="space-y-2">
                     <label className="text-xs font-mono text-white/60 uppercase tracking-wider">Last Name</label>
                     <input type="text" className="w-full bg-white/5 border border-white/10 rounded-lg p-3 text-white focus:outline-none focus:border-primary-blue focus:bg-primary-blue/5 transition-all" placeholder="Doe" />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <label className="text-xs font-mono text-white/60 uppercase tracking-wider">Email Address</label>
                  <input type="email" className="w-full bg-white/5 border border-white/10 rounded-lg p-3 text-white focus:outline-none focus:border-primary-blue focus:bg-primary-blue/5 transition-all" placeholder="jane@example.com" />
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-mono text-white/60 uppercase tracking-wider">Inquiry Type</label>
                  <select className="w-full bg-white/5 border border-white/10 rounded-lg p-3 text-white focus:outline-none focus:border-primary-blue focus:bg-primary-blue/5 transition-all appearance-none">
                    <option>General Support</option>
                    <option>Partnership / Sales</option>
                    <option>Technical Issue</option>
                    <option>Press Inquiry</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-mono text-white/60 uppercase tracking-wider">Message</label>
                  <textarea className="w-full bg-white/5 border border-white/10 rounded-lg p-3 h-32 text-white focus:outline-none focus:border-primary-blue focus:bg-primary-blue/5 transition-all resize-none" placeholder="How can we help you scale?" />
                </div>

                <Button variant="glow" className="w-full h-12 text-base">
                  Send Transmission <Send size={16} className="ml-2" />
                </Button>
                
                <p className="text-center text-xs text-white/30 pt-2">
                  By sending this message, you agree to our <a href="/privacy" className="underline hover:text-white">Privacy Policy</a>.
                </p>
              </form>
            </Card>
          </div>
        </div>
      </Section>
    </div>
  );
};

export default Contact;