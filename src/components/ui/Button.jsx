import React from 'react';
import { cn } from '../../lib/utils';
import { motion } from 'framer-motion';

const Button = React.forwardRef(({ 
  className, 
  variant = 'primary', 
  size = 'default', 
  children, 
  ...props 
}, ref) => {
  
  const variants = {
    primary: "bg-primary-blue text-primary-navy font-bold hover:bg-white hover:shadow-[0_0_20px_rgba(255,255,255,0.5)] border-transparent",
    secondary: "bg-white/5 border border-white/10 text-white hover:bg-white/10 backdrop-blur-sm",
    outline: "border border-primary-blue/30 text-primary-blue hover:bg-primary-blue/10",
    ghost: "bg-transparent hover:bg-white/5 text-white/70 hover:text-white",
    // Complex Glow Button
    glow: "relative overflow-hidden bg-gradient-to-r from-primary-blue to-accent-teal text-primary-navy font-bold shadow-[0_0_30px_-5px_rgba(0,240,255,0.4)] hover:shadow-[0_0_50px_-10px_rgba(0,240,255,0.6)] border-transparent group"
  };

  const sizes = {
    default: "h-11 py-2 px-6",
    sm: "h-9 px-4 rounded-md text-xs",
    lg: "h-14 px-10 rounded-lg text-lg",
    icon: "h-10 w-10",
  };

  return (
    <motion.button
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className={cn(
        "inline-flex items-center justify-center rounded-lg text-sm font-medium transition-all duration-300 focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50 border",
        variants[variant],
        sizes[size],
        className
      )}
      ref={ref}
      {...props}
    >
      {/* Shimmer effect for Glow button */}
      {variant === 'glow' && (
        <div className="absolute inset-0 flex h-full w-full justify-center [transform:skew(-12deg)_translateX(-100%)] group-hover:animate-shimmer">
          <div className="relative h-full w-8 bg-white/20" />
        </div>
      )}
      <span className="relative z-10 flex items-center gap-2">{children}</span>
    </motion.button>
  );
});

Button.displayName = "Button";

export { Button };