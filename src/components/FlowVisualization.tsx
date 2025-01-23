import React from 'react';
import { motion } from 'framer-motion';
import { Check, FileText, MessageSquare, File, Tag, Users } from 'lucide-react';

interface FlowItem {
  icon: React.ReactNode;
  label: string;
  lineColor: string;
  iconBg: string;
  position: 'left' | 'right';
  delay: number;
}

const flowItems: FlowItem[] = [
  {
    icon: <Check className="w-3.5 h-3.5 text-[#4ADE80]" />,
    label: 'Tasks',
    lineColor: '#4ADE80',
    iconBg: '#1A1D1A',
    position: 'left',
    delay: 0
  },
  {
    icon: <FileText className="w-3.5 h-3.5 text-[#FFB800]" />,
    label: 'Projects',
    lineColor: '#FFB800',
    iconBg: '#1A1D1A',
    position: 'left',
    delay: 0.1
  },
  {
    icon: <MessageSquare className="w-3.5 h-3.5 text-[#FF4D4D]" />,
    label: 'Chat messages',
    lineColor: '#FF4D4D',
    iconBg: '#1A1D1A',
    position: 'left',
    delay: 0.2
  },
  {
    icon: <File className="w-3.5 h-3.5 text-[#FF00FF]" />,
    label: 'Documents',
    lineColor: '#FF00FF',
    iconBg: '#1A1D1A',
    position: 'left',
    delay: 0.3
  },
  {
    icon: <Tag className="w-3.5 h-3.5 text-[#A78BFA]" />,
    label: 'Attributes',
    lineColor: '#A78BFA',
    iconBg: '#1A1D1A',
    position: 'left',
    delay: 0.4
  },
  {
    icon: <Users className="w-3.5 h-3.5 text-[#60A5FA]" />,
    label: 'Teams',
    lineColor: '#60A5FA',
    iconBg: '#1A1D1A',
    position: 'left',
    delay: 0.5
  }
];

const rightItems = [
  'Triage bugs',
  'De-duplicate tasks',
  'Auto-team',
  'Auto-fill attributes',
  'Live project brief'
];

const FlowVisualization: React.FC = () => {
  return (
    <div className="relative w-full h-[600px] bg-[#0C0D0C] rounded-[32px] border border-[#1A1D1A] overflow-hidden before:absolute before:inset-0 before:bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] before:bg-[size:32px_32px] before:opacity-50">
      {/* Container for visualization */}
      <div className="absolute inset-0 flex items-center justify-center">
        {/* Left side items */}
        <div className="absolute left-24 top-1/2 -translate-y-1/2 space-y-5">
          {flowItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: item.delay, duration: 0.5 }}
              className="flex items-center gap-2 relative"
            >
              <div className="flex items-center gap-2 text-sm bg-[#141414] px-3 py-1.5 rounded-lg border border-[#1A1D1A] hover:border-[#2A2F2A] transition-colors relative z-10">
                <div
                  className="w-4 h-4 rounded-[4px] flex items-center justify-center"
                  style={{ backgroundColor: item.iconBg }}
                >
                  {item.icon}
                </div>
                <span className="text-[13px] text-[#E5E7EB] font-medium tracking-tight">
                  {item.label}
                </span>
              </div>
              <div 
                className="absolute inset-0 blur-xl opacity-10"
                style={{
                  background: item.lineColor,
                  transform: 'scale(1.2)',
                }}
              />
            </motion.div>
          ))}
        </div>

        {/* Center logo */}
        <motion.div
          className="relative w-32 h-40"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-[#4ADE80]/10 via-[#A78BFA]/10 to-[#60A5FA]/10 blur-3xl" />
          <div className="relative w-full h-full bg-[#141414] border border-[#1A1D1A] rounded-xl overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-[#4ADE80]/5 via-[#A78BFA]/5 to-[#60A5FA]/5" />
            <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-[#4ADE80] via-[#A78BFA] to-[#60A5FA]" />
            <motion.div 
              className="h-full flex items-center justify-center"
              animate={{ 
                scale: [1, 1.05, 1],
                opacity: [1, 0.8, 1]
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              <div className="w-16 h-16">
                <img 
                  src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTEyIDJMMiA3TDEyIDEyTDIyIDdMMTIgMloiIHN0cm9rZT0iI0ZGRiIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz4KPHBhdGggZD0iTTIgMTdMMTIgMjJMMjIgMTciIHN0cm9rZT0iI0ZGRiIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz4KPHBhdGggZD0iTTIgMTJMMTIgMTdMMjIgMTIiIHN0cm9rZT0iI0ZGRiIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz4KPC9zdmc+Cg==" 
                  alt="Height Logo"
                  className="w-full h-full text-white"
                />
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Right side items */}
        <div className="absolute right-24 top-1/2 -translate-y-1/2 space-y-4">
          {rightItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 + 0.3, duration: 0.5 }}
              className="relative"
            >
              <div className="flex items-center gap-2 text-sm bg-[#141414] px-3 py-1.5 rounded-lg border border-[#1A1D1A] hover:border-[#2A2F2A] transition-colors relative z-10">
                <span className="text-[13px] text-[#E5E7EB] font-medium tracking-tight">
                  {item}
                </span>
              </div>
              <div 
                className="absolute inset-0 blur-xl opacity-10"
                style={{
                  background: flowItems[index % flowItems.length].lineColor,
                  transform: 'scale(1.2)',
                }}
              />
            </motion.div>
          ))}
        </div>

        {/* SVG Lines */}
        <svg className="absolute inset-0 w-full h-full" style={{ zIndex: -1 }}>
          <defs>
            <linearGradient id="line-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="rgba(255, 255, 255, 0.2)" />
              <stop offset="100%" stopColor="rgba(255, 255, 255, 0)" />
            </linearGradient>
          </defs>
          {flowItems.map((item, index) => (
            <React.Fragment key={index}>
              <motion.path
                d={`M30% ${25 + index * 10}% Q 40% ${37.5 + index * 2}% 50% 50%`}
                stroke={item.lineColor}
                strokeWidth="1.5"
                fill="none"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 0.3 }}
                transition={{ delay: item.delay, duration: 1 }}
              />
              <motion.circle
                cx="0"
                cy="0"
                r="1.5"
                fill={item.lineColor}
                initial={{ opacity: 0 }}
                animate={{
                  opacity: [0, 1, 0],
                  offsetDistance: ["0%", "100%"],
                }}
                style={{
                  offsetPath: `path("M30% ${25 + index * 10}% Q 40% ${37.5 + index * 2}% 50% 50%")`,
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  delay: item.delay,
                }}
              />
            </React.Fragment>
          ))}
          {rightItems.map((_, index) => (
            <React.Fragment key={`right-${index}`}>
              <motion.path
                d={`M70% ${25 + index * 10}% Q 60% ${37.5 + index * 2}% 50% 50%`}
                stroke={flowItems[index % flowItems.length].lineColor}
                strokeWidth="1.5"
                fill="none"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 0.3 }}
                transition={{ delay: index * 0.1 + 0.3, duration: 1 }}
              />
              <motion.circle
                cx="0"
                cy="0"
                r="1.5"
                fill={flowItems[index % flowItems.length].lineColor}
                initial={{ opacity: 0 }}
                animate={{
                  opacity: [0, 1, 0],
                  offsetDistance: ["0%", "100%"],
                }}
                style={{
                  offsetPath: `path("M70% ${25 + index * 10}% Q 60% ${37.5 + index * 2}% 50% 50%")`,
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  delay: index * 0.1 + 0.3,
                }}
              />
            </React.Fragment>
          ))}
        </svg>

        {/* Background effects */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(74,222,128,0.02)_0%,transparent_70%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(167,139,250,0.02)_0%,transparent_70%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(96,165,250,0.02)_0%,transparent_70%)]" />
        </div>
      </div>
    </div>
  );
};

export default FlowVisualization;