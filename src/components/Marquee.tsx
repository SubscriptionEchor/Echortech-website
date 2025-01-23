import React from 'react';
import { ArrowRight } from 'lucide-react';

const announcements = [
  "🔗 Latest Blockchain Solutions Deployed",
  "🤖 Advanced AI Models Now Available",
  "💎 Smart Contract Audits: 100% Success Rate",
  "🧠 New AI Integration Services Launched",
  "⚡ Web3 Development Services: 30% Growth"
];

const Marquee: React.FC = () => {
  return (
    <div className="bg-gradient-to-r from-purple-900/50 via-black to-blue-900/50 border-b border-gray-800">
      <div className="relative flex overflow-x-hidden">
        <div className="animate-marquee whitespace-nowrap py-2 flex items-center">
          {announcements.map((text, i) => (
            <span key={i} className="text-sm text-gray-200 flex items-center mx-8 hover:text-indigo-400 transition-colors">
              {text}
              <ArrowRight className="ml-2 h-4 w-4" />
            </span>
          ))}
          {announcements.map((text, i) => (
            <span key={`repeat-${i}`} className="text-sm text-gray-200 flex items-center mx-8 hover:text-indigo-400 transition-colors">
              {text}
              <ArrowRight className="ml-2 h-4 w-4" />
            </span>
          ))}
        </div>
        <div className="absolute top-0 animate-marquee2 whitespace-nowrap py-2 flex items-center">
          {announcements.map((text, i) => (
            <span key={i} className="text-sm text-gray-200 flex items-center mx-8 hover:text-indigo-400 transition-colors">
              {text}
              <ArrowRight className="ml-2 h-4 w-4" />
            </span>
          ))}
          {announcements.map((text, i) => (
            <span key={`repeat-${i}`} className="text-sm text-gray-200 flex items-center mx-8 hover:text-indigo-400 transition-colors">
              {text}
              <ArrowRight className="ml-2 h-4 w-4" />
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Marquee;