import React from 'react';
import { cn } from '../lib/utils';

const Section = ({ id, className, children, ...props }) => {
  return (
    <section 
      id={id}
      className={cn("w-full py-20 px-6 md:px-12 lg:px-24", className)}
      {...props}
    >
      <div className="mx-auto max-w-7xl">
        {children}
      </div>
    </section>
  );
};

export { Section };
