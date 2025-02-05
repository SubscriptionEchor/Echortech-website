import React from 'react';
import { motion } from 'framer-motion';
import { Mail } from 'lucide-react';
import Layout from '../components/Layout';

const Services = () => {  
  return (
    <Layout>
      <div className="min-h-screen bg-black">
        {/* Let's chat section */}
        <div className="relative py-32 overflow-hidden flex flex-col items-center justify-center">
          <div className="absolute inset-0 w-full whitespace-nowrap text-[8vw] font-normal text-white pointer-events-none select-none flex items-center">
            <div className="animate-marquee text-center">
              Let's chat — hi@echortech.com — Let's chat — hi@echortech.com —
            </div>
          </div>

          <div className="relative z-10 flex items-center justify-center">
            <motion.button
              onClick={() => window.location.href = "mailto:hi@echortech.com"}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="w-32 h-32 rounded-full bg-white flex items-center justify-center group transition-all duration-300 hover:shadow-[0_0_50px_rgba(255,255,255,0.3)] mx-auto"
            >
              <Mail className="w-8 h-8 text-black transition-transform duration-300 group-hover:scale-110" />
            </motion.button>
          </div>
        </div>
      </div>
    </Layout>
  );
};
export default Services;