import React from 'react';
import { motion } from 'framer-motion';

const DotMatrix: React.FC = () => {
  const rows = 30;
  const dotsPerRow = 60;
  const dots = Array.from({ length: rows * dotsPerRow });

  return (
    <div className="absolute inset-0 overflow-hidden opacity-20">
      <div className="grid grid-cols-[repeat(60,1fr)] gap-4">
        {dots.map((_, i) => (
          <motion.div
            key={i}
            className="w-1 h-1 bg-white rounded-full"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ 
              scale: Math.random() > 0.5 ? 1 : 0,
              opacity: Math.random() > 0.5 ? 1 : 0
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              repeatType: "reverse",
              delay: Math.random() * 2
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default DotMatrix;