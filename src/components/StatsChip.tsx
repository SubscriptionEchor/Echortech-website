import React from 'react';
import { motion } from 'framer-motion';
import clsx from 'clsx';

interface StatsChipProps {
  text: string;
  className?: string;
}

const StatsChip: React.FC<StatsChipProps> = ({ text, className }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className={clsx(
        "inline-flex items-center px-3 py-1 rounded-full",
        "bg-gray-800/50 backdrop-blur-sm border border-gray-700",
        "text-sm text-gray-300",
        className
      )}
    >
      <span className="w-2 h-2 bg-green-500 rounded-full mr-2" />
      {text}
    </motion.div>
  );
};

export default StatsChip;