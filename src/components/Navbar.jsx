// import React, { useState, useEffect } from 'react';
// import { motion, AnimatePresence } from 'framer-motion';
// import { Menu, X, ChevronRight } from 'lucide-react';
// import { Button } from './ui/Button';
// import { Logo } from './logo'; // Importing the new Logo
// import { cn } from '../lib/utils';
// import { useNavigate } from 'react-router-dom';

// const Navbar = () => {
//   const navigate = useNavigate();
//   const [isScrolled, setIsScrolled] = useState(false);
//   const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => {
//       setIsScrolled(window.scrollY > 20);
//     };
//     window.addEventListener('scroll', handleScroll);
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);

//   const navLinks = [
//     { name: 'About', href: '/about' },
//     { name: 'Products', href: '/products' },
//     { name: 'For Creators', href: '/creators' },
//     { name: 'For Businesses', href: '/platforms' },
//     { name: 'Resources', href: '/resources' },
//     { name: 'Security', href: '/security' },
//   ];

//   // Animation variants for the mobile menu stagger effect
//   const menuVariants = {
//     closed: { opacity: 0, height: 0 },
//     open: { 
//       opacity: 1, 
//       height: '100vh',
//       transition: { staggerChildren: 0.1, delayChildren: 0.1 }
//     }
//   };

//   const itemVariants = {
//     closed: { opacity: 0, x: -20 },
//     open: { opacity: 1, x: 0 }
//   };

//   return (
//     <>
//       <nav
//         className={cn(
//           "fixed top-0 left-0 right-0 z-50 transition-all duration-500 border-b",
//           isScrolled 
//             ? "bg-primary-navy/80 backdrop-blur-xl border-white/10 py-3 shadow-lg shadow-primary-blue/5" 
//             : "bg-transparent border-transparent py-5"
//         )}
//       >
//         <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
          
//           {/* 1. BRAND LOGO */}
//           <Logo />

//           {/* 2. DESKTOP NAV */}
//           <div className="hidden md:flex items-center gap-8">
//             {navLinks.map((link) => (
//               <a 
//                 key={link.name} 
//                 href={link.href}
//                 className="text-sm font-medium text-white/70 hover:text-white transition-colors relative group"
//               >
//                 {link.name}
//                 {/* Futuristic hover underline */}
//                 <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-primary-blue transition-all duration-300 group-hover:w-full" />
//               </a>
//             ))}
            
//             <div className="flex items-center gap-4 ml-4">
//                <a href="/get-started" className="text-sm font-medium text-white hover:text-primary-blue transition-colors">
//                 Log In
//               </a>
//               <Button variant="glow" size="sm" className="rounded-full" onClick={() => navigate('/get-started')}>
//                 Get Started
//               </Button>
//             </div>
//           </div>

//           {/* 3. MOBILE TOGGLE */}
//           <button 
//             className="md:hidden text-white p-2 hover:bg-white/10 rounded-full transition-colors"
//             onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
//           >
//             {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
//           </button>
//         </div>
//       </nav>

//       {/* 4. MOBILE MENU OVERLAY */}
//       <AnimatePresence>
//         {mobileMenuOpen && (
//           <motion.div
//             initial="closed"
//             animate="open"
//             exit="closed"
//             variants={menuVariants}
//             className="fixed inset-0 top-0 z-40 bg-primary-navy md:hidden pt-24 px-6 overflow-y-auto"
//           >
//             <div className="flex flex-col gap-6">
//               {navLinks.map((link) => (
//                 <motion.a 
//                   variants={itemVariants}
//                   key={link.name} 
//                   href={link.href}
//                   className="flex items-center justify-between text-2xl font-display font-medium text-white/90 border-b border-white/10 pb-4 active:text-primary-blue"
//                   onClick={() => setMobileMenuOpen(false)}
//                 >
//                   {link.name}
//                   <ChevronRight className="text-primary-blue opacity-50" size={20} />
//                 </motion.a>
//               ))}
              
//               <motion.div variants={itemVariants} className="flex flex-col gap-4 mt-4">
//                 <Button variant="secondary" className="w-full justify-center">
//                   Log In
//                 </Button>
//                 <Button variant="glow" className="w-full justify-center">
//                   Open Creator Account
//                 </Button>
//               </motion.div>
//             </div>
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </>
//   );
// };

// export { Navbar };

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ChevronRight, Lock } from 'lucide-react';
import { Button } from './ui/Button';
import { Logo } from './logo';
import { cn } from '../lib/utils';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
  const navigate = useNavigate();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Products', href: '/products' },
    { name: 'Company', href: '/about' },
    { name: 'Creators', href: '/creators' },
    { name: 'Business', href: '/platforms' },
    { name: 'Resources', href: '/resources' },
    { name: 'Security', href: '/security' },
  ];

  return (
    <>
      <nav
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-out flex justify-center",
          isScrolled 
            ? "py-4" // Float down slightly
            : "py-6"
        )}
      >
        <div 
           className={cn(
             "w-full max-w-7xl mx-auto px-6 flex items-center justify-between transition-all duration-500",
             isScrolled 
               ? "bg-[#0A0F1C]/80 backdrop-blur-xl border border-white/10 rounded-2xl mx-4 md:mx-6 shadow-[0_8px_32px_rgba(0,0,0,0.3)] py-3 pl-6 pr-3" 
               : "bg-transparent border-transparent"
           )}
        >
          
          {/* 1. BRAND LOGO */}
          <div className="flex-shrink-0">
             <Logo />
          </div>

          {/* 2. DESKTOP NAV - CENTERED */}
          <div className="hidden md:flex items-center gap-1 bg-white/5 rounded-full p-1 border border-white/5 backdrop-blur-sm absolute left-1/2 -translate-x-1/2">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href}
                className="px-5 py-2 rounded-full text-sm font-medium text-white/70 hover:text-white hover:bg-white/10 transition-all duration-300 relative group"
              >
                {link.name}
              </a>
            ))}
          </div>
          
          {/* 3. RIGHT ACTIONS */}
          <div className="hidden md:flex items-center gap-6">
             <a href="/get-started" className="text-sm font-medium text-white/60 hover:text-white transition-colors flex items-center gap-2">
                <Lock size={14} className="mb-0.5" /> Log In
             </a>
             <Button variant="glow" size="sm" className="rounded-full shadow-lg" onClick={() => navigate('/get-started')}>
               Get Started
             </Button>
          </div>

          {/* 4. MOBILE TOGGLE */}
          <button 
            className="md:hidden text-white p-2 hover:bg-white/10 rounded-full transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* 5. MOBILE MENU OVERLAY */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 bg-[#050A14] md:hidden pt-32 px-6"
          >
            {/* Background Grain */}
            <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10 pointer-events-none" />
            
            <div className="flex flex-col gap-2 relative z-10">
              {navLinks.map((link, i) => (
                <motion.a 
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 + i * 0.1 }}
                  key={link.name} 
                  href={link.href}
                  className="group flex items-center justify-between p-4 rounded-xl hover:bg-white/5 border border-transparent hover:border-white/10 transition-all"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <span className="text-2xl font-display font-medium text-white group-hover:text-primary-blue transition-colors">
                    {link.name}
                  </span>
                  <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-primary-blue group-hover:text-black transition-all">
                     <ChevronRight size={16} />
                  </div>
                </motion.a>
              ))}
              
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="grid grid-cols-2 gap-4 mt-8 pt-8 border-t border-white/10"
              >
                <Button variant="secondary" className="justify-center w-full" onClick={() => {navigate('/get-started'); setMobileMenuOpen(false)}}>
                  Log In
                </Button>
                <Button variant="glow" className="justify-center w-full" onClick={() => {navigate('/get-started'); setMobileMenuOpen(false)}}>
                  Get Started
                </Button>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export { Navbar };