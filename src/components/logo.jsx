import React from 'react';
import { motion } from 'framer-motion';

export const Logo = () => {
  return (
    <a href="/" className="group flex items-center gap-3 z-50">
      {/* Animated Icon Container */}
      <motion.div 
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="relative flex items-center justify-center w-10 h-10"
      >
        <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full drop-shadow-[0_0_8px_rgba(0,240,255,0.5)]">
          {/* Hexagon Base (Trust/Bank) */}
          <path 
            d="M20 2L37.3205 12V32L20 42L2.67949 32V12L20 2Z" 
            className="fill-primary-navy stroke-primary-blue stroke-[1.5]"
          />
          {/* Spark/Bolt (Creativity/Action) */}
          <path 
            d="M19 10L16 21H22L19 32" 
            className="stroke-white stroke-[2] stroke-linecap-round stroke-linejoin-round"
          />
        </svg>
        {/* Glow effect behind */}
        <div className="absolute inset-0 bg-primary-blue/20 blur-xl rounded-full -z-10 group-hover:bg-primary-blue/40 transition-all duration-500" />
      </motion.div>

      {/* Text Branding */}
      <div className="flex flex-col justify-center">
        <span className="font-display font-bold text-xl text-white tracking-tight leading-none">
          Bank of <span className="text-primary-blue">Creators</span>
        </span>
        <span className="text-[10px] uppercase tracking-widest text-white/50 font-medium">
          Member FDIC
        </span>
      </div>
    </a>
  );
};