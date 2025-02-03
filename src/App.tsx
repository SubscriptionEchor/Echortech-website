import React, { useState, useRef } from 'react';
import Layout from './components/Layout';
import { Plus, Minus } from 'lucide-react';
import Hero from "./assets/images/hero-main.svg";

import { 
  ArrowRight, 
  MoveUpRight, 
  Monitor,
  Boxes,
  Database,
  Clock,
  Globe,
  Bug
} from 'lucide-react';
import { motion } from 'framer-motion';
import DotMatrix from './components/DotMatrix';
import StatsChip from './components/StatsChip';
import VideoCard from './components/VideoCard';

interface PillData {
  text: string;
  color: string;
  position: string;
  delay: number;
  videoUrl: string;
}

function App() {
  const [activeVideo, setActiveVideo] = useState<string | null>(null);
  const [cardPosition, setCardPosition] = useState({ x: 0, y: 0 });
  const pillRefs = useRef<(HTMLDivElement | null)[]>([]);

  const handlePillHover = (index: number) => {
    const pill = pillRefs.current[index];
    if (pill) {
      // Get pill dimensions and position
      const rect = pill.getBoundingClientRect();
      const viewportWidth = window.innerWidth;
      const viewportHeight = window.innerHeight;
      
      // Card dimensions
      const cardWidth = 300;
      const cardHeight = 400;
      
      // Calculate initial position (20px offset from pill)
      let x = rect.right + 20;
      let y = rect.top;
      
      // Adjust x position if it would go off-screen
      if (x + cardWidth > viewportWidth - 20) {
        x = rect.left - cardWidth - 20; // Place on the left side of the pill
      }
      
      // Adjust y position if it would go off-screen
      if (y + cardHeight > viewportHeight - 20) {
        y = viewportHeight - cardHeight - 20;
      }
      
      // Ensure minimum top spacing
      if (y < 20) {
        y = 20;
      }
      
      setCardPosition({ x, y });
      setActiveVideo(pills[index].text);
    }
  };

  const pills: PillData[] = [
    {
      text: "AI Bots",
      color: "bg-[#4ADE80]", 
      position: "absolute top-[10%] left-[5%]",
      delay: 0,
      videoUrl: "https://cdn.prod.website-files.com/66bc64513c57e27bbe6bcd9c%2F66f45966f7cb7f7510e88350_Weem-transcode.mp4"
    },
    {
      text: "NLP",
      color: "bg-[#818CF8]",
      position: "absolute top-[10%] left-[28%]",
      delay: 0.4,
      videoUrl: "https://cdn.prod.website-files.com/66bc64513c57e27bbe6bcd9c%2F66f45966f7cb7f7510e88350_Weem-transcode.mp4"
    },
    {
      text: "AI Analytics",
      color: "bg-[#F472B6]",
      position: "absolute top-[10%] left-[51%]",
      delay: 0.6,
      videoUrl: "https://cdn.prod.website-files.com/66bc64513c57e27bbe6bcd9c%2F66f45966f7cb7f7510e88350_Weem-transcode.mp4"
    },
    {
      text: "Speech AI",
      color: "bg-[#A78BFA]",
      position: "absolute top-[10%] left-[74%]",
      delay: 1.2,
      videoUrl: "https://cdn.prod.website-files.com/66bc64513c57e27bbe6bcd9c%2F66f45966f7cb7f7510e88350_Weem-transcode.mp4"
    },
    {
      text: "RL AI",
      color: "bg-[#34D399]",
      position: "absolute top-[30%] left-[5%]",
      delay: 1.8,
      videoUrl: "https://cdn.prod.website-files.com/66bc64513c57e27bbe6bcd9c%2F66f45966f7cb7f7510e88350_Weem-transcode.mp4"
    },
    {
      text: "dApps",
      color: "bg-[#38BDF8]",
      position: "absolute top-[30%] left-[28%]",
      delay: 2.0,
      videoUrl: "https://cdn.prod.website-files.com/66bc64513c57e27bbe6bcd9c%2F66f45966f7cb7f7510e88350_Weem-transcode.mp4"
    },
    {
      text: "Smart Contracts",
      color: "bg-[#F43F5E]",
      position: "absolute top-[30%] left-[51%]",
      delay: 2.2,
      videoUrl: "https://cdn.prod.website-files.com/66bc64513c57e27bbe6bcd9c%2F66f45966f7cb7f7510e88350_Weem-transcode.mp4"
    },
    {
      text: "Web3 Gaming",
      color: "bg-[#EC4899]",
      position: "absolute top-[30%] left-[74%]",
      delay: 2.6,
      videoUrl: "https://cdn.prod.website-files.com/66bc64513c57e27bbe6bcd9c%2F66f45966f7cb7f7510e88350_Weem-transcode.mp4"
    },
    {
      text: "DeFi",
      color: "bg-[#10B981]",
      position: "absolute top-[50%] left-[5%]",
      delay: 2.8,
      videoUrl: "https://cdn.prod.website-files.com/66bc64513c57e27bbe6bcd9c%2F66f45966f7cb7f7510e88350_Weem-transcode.mp4"
    },
    {
      text: "NFT Market",
      color: "bg-[#14B8A6]",
      position: "absolute top-[50%] left-[28%]",
      delay: 3.2,
      videoUrl: "https://cdn.prod.website-files.com/66bc64513c57e27bbe6bcd9c%2F66f45966f7cb7f7510e88350_Weem-transcode.mp4"
    },
    {
      text: "Computer Vision",
      color: "bg-[#FB923C]",
      position: "absolute top-[50%] left-[51%]",
      delay: 3.4,
      videoUrl: "https://cdn.prod.website-files.com/66bc64513c57e27bbe6bcd9c%2F66f45966f7cb7f7510e88350_Weem-transcode.mp4"
    },
    {
      text: "Deep Learning",
      color: "bg-[#22D3EE]",
      position: "absolute top-[50%] left-[74%]",
      delay: 3.6,
      videoUrl: "https://cdn.prod.website-files.com/66bc64513c57e27bbe6bcd9c%2F66f45966f7cb7f7510e88350_Weem-transcode.mp4"
    },
    {
      text: "Blockchain Security",
      color: "bg-[#60A5FA]",
      position: "absolute top-[70%] left-[5%]",
      delay: 3.8,
      videoUrl: "https://cdn.prod.website-files.com/66bc64513c57e27bbe6bcd9c%2F66f45966f7cb7f7510e88350_Weem-transcode.mp4"
    },
    {
      text: "Data Mining",
      color: "bg-[#F472B6]",
      position: "absolute top-[70%] left-[28%]",
      delay: 4.0,
      videoUrl: "https://cdn.prod.website-files.com/66bc64513c57e27bbe6bcd9c%2F66f45966f7cb7f7510e88350_Weem-transcode.mp4"
    },
    {
      text: "Machine Learning",
      color: "bg-[#34D399]",
      position: "absolute top-[70%] left-[51%]",
      delay: 4.2,
      videoUrl: "https://cdn.prod.website-files.com/66bc64513c57e27bbe6bcd9c%2F66f45966f7cb7f7510e88350_Weem-transcode.mp4"
    },
    {
      text: "Neural Networks",
      color: "bg-[#A78BFA]",
      position: "absolute top-[70%] left-[74%]",
      delay: 4.4,
      videoUrl: "https://cdn.prod.website-files.com/66bc64513c57e27bbe6bcd9c%2F66f45966f7cb7f7510e88350_Weem-transcode.mp4"
    }
  ];

  return (
    <Layout>
     <main className="min-h-screen bg-black text-white">
        {/* Header Text */}
        <div className="text-center pt-16 pb-8 px-4">
          <div className="text-sm text-gray-400 mb-2">AI + Product Design Agency // Hyderabad</div>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-bold mb-8 max-w-5xl mx-auto leading-[1.1]"
          >
            UX-First Design Agency
            <br />
            for B2B + AI Companies
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-lg space-x-2"
          >
            <span>We launch</span>
            <span className="text-[#4ADE80]">MVPs</span>
            <span>redefine</span>
            <span className="text-[#4ADE80]">existing products</span>
            <span>& continuously dive into</span>
            <span className="text-[#4ADE80]">customer development</span>
          </motion.p>
        </div>

        {/* Video/Image Section */}
        <div className="relative max-w-6xl mx-auto px-4 pt-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="relative rounded-2xl overflow-hidden aspect-video bg-[#1A1A1A] group"
          >
            <video
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-cover"
            >
              <source src="https://lazarev.kiev.ua/la24/la-reel--min.mp4" type="video/mp4" />
            </video>
          </motion.div>
        </div>
      </main>

      {/* Who We Are Section */}
      <section className="py-32 bg-black relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left Column - Logo and Visual */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="relative aspect-square rounded-3xl bg-gradient-to-br from-blue-50/5 to-blue-100/5 p-12 overflow-hidden border border-white/5">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(99,102,241,0.08)_0%,transparent_100%)]" />
                <div className="relative h-full flex flex-col justify-between">
                  {/* Logo */}
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-200/20 to-blue-500/20 flex items-center justify-center">
                      <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-200 to-blue-500" />
                    </div>
                    <h3 className="text-3xl font-medium bg-gradient-to-r from-blue-200 to-blue-500 bg-clip-text text-transparent">
                      eloqwnt
                    </h3>
                  </div>
                  
                  {/* Abstract Elements */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="relative w-64 h-64">
                      {[...Array(5)].map((_, i) => (
                        <motion.div
                          key={i}
                          className="absolute w-full h-full rounded-full border border-blue-200/10"
                          style={{
                            transform: `scale(${1 - i * 0.15}) rotate(${i * 15}deg)`
                          }}
                          animate={{
                            rotate: [0, 360],
                            scale: [1 - i * 0.15, 1 - i * 0.1, 1 - i * 0.15]
                          }}
                          transition={{
                            duration: 20 + i * 5,
                            repeat: Infinity,
                            ease: "linear"
                          }}
                        />
                      ))}
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-24 h-24 rounded-full bg-gradient-to-br from-blue-200/20 to-blue-500/20 flex items-center justify-center">
                          <div className="w-16 h-16 rounded-full bg-gradient-to-br from-blue-200/40 to-blue-500/40" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Right Column - Content */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-5xl md:text-6xl font-medium text-white leading-tight"
              >
                We are design-first creative studio
              </motion.h2>
              
              <div className="space-y-6">
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 }}
                  className="text-xl text-gray-300 leading-relaxed"
                >
                  We believe in the power of purposeful design to solve real business challenges. Every line, color, and interaction is crafted with intent, creating experiences that connect and drive impact. Our mission is to turn ideas into strategic, visual solutions that resonate deeply and support our clients' goals.
                </motion.p>

                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                  className="text-xl text-gray-300 leading-relaxed"
                >
                  At Eloqwnt, design isn't just a visual; it's an influential tool that helps brands achieve lasting success.
                </motion.p>
              </div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
              >
                <motion.a
                  href="/about"
                  whileHover={{ gap: '1rem' }}
                  className="inline-flex items-center gap-2 px-8 py-4 bg-white text-black rounded-full font-medium transition-all duration-300"
                >
                  About us
                  <div className="w-5 h-5 rounded-full bg-gradient-to-br from-blue-200 to-blue-500" />
                </motion.a>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Works Section */}
      <section className="py-32 bg-black relative">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(99,102,241,0.08)_0%,transparent_100%)]" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-8 mb-16"
          >
            <div className="flex items-center justify-between">
              <h2 className="text-4xl md:text-5xl font-medium text-white">
                Selected Works
              </h2>
              <motion.a
                href="/works"
                whileHover={{ gap: '1rem' }}
                className="hidden md:inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors"
              >
                View All Works
                <ArrowRight className="w-5 h-5" />
              </motion.a>
            </div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: "AI-Powered Analytics Platform",
                category: "AI & Machine Learning",
                image: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?auto=format&fit=crop&q=80&w=2232",
                gradient: "from-purple-500/20 to-blue-500/20",
                year: "2024"
              },
              {
                title: "DeFi Trading Protocol",
                category: "Blockchain",
                image: "https://images.unsplash.com/photo-1639762681057-408e52192e55?auto=format&fit=crop&q=80&w=2232",
                gradient: "from-emerald-500/20 to-blue-500/20",
                year: "2024"
              },
              {
                title: "NFT Marketplace",
                category: "Web3",
                image: "https://images.unsplash.com/photo-1639762681286-667bed832b47?auto=format&fit=crop&q=80&w=2232",
                gradient: "from-pink-500/20 to-purple-500/20",
                year: "2023"
              },
              {
                title: "Smart Contract Platform",
                category: "Blockchain",
                image: "https://images.unsplash.com/photo-1639762681723-85440c947dc6?auto=format&fit=crop&q=80&w=2232",
                gradient: "from-blue-500/20 to-cyan-500/20",
                year: "2023"
              }
            ].map((work, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ 
                  opacity: 1,
                  y: 0,
                  transition: {
                    delay: index * 0.1,
                    duration: 0.5
                  }
                }}
                viewport={{ once: true }}
                className="group relative"
              >
                <div className="relative aspect-[4/3] rounded-2xl overflow-hidden">
                  {/* Background Image */}
                  <div className="absolute inset-0">
                    <img
                      src={work.image}
                      alt={work.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-black/50" />
                    <div className={`absolute inset-0 bg-gradient-to-br ${work.gradient} opacity-40`} />
                  </div>

                  {/* Content Overlay */}
                  <div className="absolute inset-0 p-8 flex flex-col justify-between">
                    <div className="flex items-center justify-between">
                      <span className="px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm text-sm text-white">
                        {work.category}
                      </span>
                      <span className="text-white/80 text-sm">
                        {work.year}
                      </span>
                    </div>

                    <div className="space-y-4">
                      <h3 className="text-2xl font-medium text-white">
                        {work.title}
                      </h3>
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="flex items-center gap-2"
                      >
                        <span className="text-white/80">View Case Study</span>
                        <motion.div
                          className="w-8 h-8 rounded-full bg-white flex items-center justify-center"
                          whileHover={{ scale: 1.1 }}
                        >
                          <ArrowRight className="w-4 h-4 text-black" />
                        </motion.div>
                      </motion.div>
                    </div>
                  </div>

                  {/* Hover Effects */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-12 text-center md:hidden"
          >
            <motion.a
              href="/works"
              whileHover={{ gap: '1rem' }}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors"
            >
              View All Works
              <ArrowRight className="w-5 h-5" />
            </motion.a>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-32 bg-black relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(99,102,241,0.08)_0%,rgba(0,0,0,0.95)_100%)]" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-8 mb-20"
          >
            <h2 className="text-4xl md:text-5xl font-medium text-[#C3FFA6]">
              Our Solutions
            </h2>
            <p className="text-xl text-gray-300 max-w-4xl">
              Whether you need to design your first MVP to get funding, redesign your product to improve business 
              metrics, or get a remote design team to grow faster - our product designers are here to help.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                label: "FOR STARTUPS",
                title: "MVP Design",
                description: "Create a digital product, attract investors and new clients",
                gradient: "from-[#E4D7FF] to-[#D7DEFF]",
                icon: "https://framerusercontent.com/images/psdpn5uV0mzKkOD5mWiPfZ3mo.png"
              },
              {
                label: "FOR STARTUPS & EXISTING COMPANIES",
                title: "Product Redesign",
                description: "Get a fresh look, improved user experience, or enhanced functionality",
                gradient: "from-[#E9D7FF] to-[#D7E4FF]",
                icon: "https://framerusercontent.com/images/PIlOMNJgWkDXjuZ6YhFXLCFaA.png"
              },
              {
                label: "FOR EXISTING COMPANIES",
                title: "Team Extension",
                description: "Expand your team with our dedicated and talented design experts",
                gradient: "from-[#EBFFB0] to-[#D0FF94]",
                icon: "https://framerusercontent.com/images/Ry1tKKT9ztEVxDPwxjGWkFn4.png"
              }
            ].map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ 
                  opacity: 1,
                  y: 0,
                  transition: {
                    delay: index * 0.1,
                    duration: 0.5
                  }
                }}
                viewport={{ once: true }}
                className="group relative"
              >
                <div className={`p-8 rounded-3xl bg-gradient-to-br ${service.gradient} h-full transition-all duration-300`}>
                  <div className="space-y-6">
                    <div className="flex justify-between items-start">
                      <span className="text-sm font-medium text-black/80">
                        {service.label}
                      </span>
                      <img 
                        src={service.icon} 
                        alt={service.title}
                        className="w-12 h-12 object-contain"
                      />
                    </div>
                    
                    <div className="space-y-4">
                      <h3 className="text-3xl font-bold text-black">
                        {service.title}
                      </h3>
                      <p className="text-black/80">
                        {service.description}
                      </p>
                    </div>

                    <motion.a
                      href="#"
                      whileHover={{ gap: '1rem' }}
                      className="inline-flex items-center gap-2 px-6 py-3 bg-black text-white rounded-full font-medium transition-all duration-300"
                    >
                      Explore
                      <ArrowRight className="w-5 h-5" />
                    </motion.a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
          
      {/* Pills Grid */}
      <section className="py-24 bg-black relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mt-24">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="space-y-4 mb-16"
            >
              <h3 className="text-2xl text-white font-medium">
                Explore Our Technologies
              </h3>
              <p className="text-gray-400">
                Discover our comprehensive range of cutting-edge solutions and technologies
              </p>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {pills.map((pill, index) => (
              <div key={index} className="w-full">
                <motion.div
                  ref={el => pillRefs.current[index] = el}
                  onHoverStart={() => handlePillHover(index)}
                  onHoverEnd={() => setActiveVideo(null)}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ 
                    opacity: 1,
                    y: [0, -8, 0],
                    rotate: [0, index % 2 === 0 ? 2 : -2, 0],
                    transition: {
                      y: {
                        duration: 3,
                        repeat: Infinity,
                        repeatType: "reverse",
                        ease: [0.4, 0, 0.2, 1],
                        delay: index * 0.3
                      },
                      rotate: {
                        duration: 5,
                        repeat: Infinity,
                        repeatType: "reverse",
                        ease: [0.4, 0, 0.2, 1],
                        delay: index * 0.2
                      },
                      opacity: {
                        duration: 0.5,
                        delay: pill.delay
                      }
                    }
                  }}
                  className="relative hover:z-10 will-change-transform w-full"
                >
                  <div className={`rounded-full ${pill.color} pl-3 pr-6 py-2 flex items-center gap-3 shadow-lg backdrop-blur-sm w-full justify-between`}>
                    <div className="bg-black/90 rounded-full p-1.5">
                      <ArrowRight className="w-4 h-4 text-white" />
                    </div>
                    <span className="text-base sm:text-lg lg:text-xl font-medium text-black flex-1 text-center">
                      {pill.text}
                    </span>
                  </div>
                  <div className="absolute inset-0 rounded-full blur-xl opacity-50" 
                    style={{
                      background: pill.color,
                      transform: 'scale(0.85)',
                      filter: 'blur(20px)'
                    }}
                  >
                  </div>
                  <div className="absolute -inset-1 rounded-full opacity-10"
                    style={{
                      background: `radial-gradient(circle at center, ${pill.color}, transparent 70%)`
                    }}
                  >
                  </div>
                  <motion.div
                    className="absolute -inset-3"
                    animate={{
                      background: [
                        'radial-gradient(circle at center, rgba(255,255,255,0.1) 0%, transparent 50%)',
                        'radial-gradient(circle at center, rgba(255,255,255,0) 0%, transparent 50%)'
                      ],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      repeatType: "reverse"
                    }}
                  >
                  </motion.div>
                  <div 
                    className="absolute -inset-[1px] rounded-full"
                    style={{
                      background: `linear-gradient(45deg, transparent, ${pill.color}22, transparent)`
                    }}
                  >
                  </div>
                  <div className="absolute -z-10 blur-3xl opacity-20 rounded-full"
                    style={{
                      background: pill.color,
                      width: '150%',
                      height: '150%',
                      top: '-25%',
                      left: '-25%',
                      filter: 'blur(50px)'
                    }}
                  >
                  </div>
                  <div className="absolute -z-10 blur-2xl opacity-10 rounded-full"
                    style={{
                      background: pill.color,
                      width: '200%',
                      height: '200%',
                      top: '-50%',
                      left: '-50%',
                      filter: 'blur(80px)'
                    }}
                  >
                  </div>
                  <div 
                    className="absolute inset-0 rounded-full opacity-20"
                    style={{
                      background: `radial-gradient(circle at 30% 50%, ${pill.color}, transparent)`
                    }}
                  >
                  </div>
                  <div className="absolute top-0 left-0 w-full h-full rounded-full"
                    style={{
                      background: `linear-gradient(45deg, transparent, ${pill.color}11, transparent)`,
                      transform: 'rotate(45deg)'
                    }}
                  >
                  </div>
                  <div className="absolute top-0 left-0 w-full h-full rounded-full"
                    style={{
                      background: `linear-gradient(to right, transparent, ${pill.color}0A, transparent)`,
                      animation: 'shine 2s linear infinite'
                    }}
                  >
                  </div>
                </motion.div>
              </div>
            ))}
            </div>

            {pills.map((pill, index) => (
              <VideoCard
                key={index}
                title={pill.text}
                videoUrl={pill.videoUrl}
                isVisible={activeVideo === pill.text}
                onClose={() => setActiveVideo(null)}
                position={cardPosition}
              />
            ))}
            <style>
              {`
                @keyframes shine {
                  from {
                    transform: translateX(-100%);
                  }
                  to {
                    transform: translateX(100%);
                  }
                }
              `}
            </style>
          </div>
        </div>
      </section>

        {/* Height Introduction Section */}
        <section className="py-24 bg-[#0C0D0C] relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative aspect-square"
            >
              <div className="grid grid-cols-3 gap-3 p-8 bg-[#141414] rounded-2xl border border-[#2A2F2A]">
                {[
                  { icon: "📄", title: "Live project brief", status: "On" },
                  { icon: "🔍", title: "Project checkup", status: "On" },
                  { icon: "✓", title: "Close stale tasks", status: "On" },
                  { icon: "🔄", title: "Detect dependencies", status: "On" },
                  { icon: "🐛", title: "Bug triage", status: "On" },
                  { icon: "🤖", title: "Auto-fill attributes", status: "On" },
                  { icon: "👥", title: "Team standup", status: "On" },
                  { icon: "🔄", title: "De-duplicate", status: "On" },
                  { icon: "🤝", title: "Auto-team", status: "On" },
                  { icon: "📢", title: "Task broadcast", status: "On" },
                  { icon: "✏️", title: "Refine task name", status: "On" },
                  { icon: "💬", title: "Chat updates", status: "On" }
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ 
                      opacity: 1,
                      y: 0,
                      transition: {
                        delay: index * 0.1,
                        duration: 0.5
                      }
                    }}
                    viewport={{ once: true }}
                    className="bg-[#1A1D1A] p-4 rounded-lg border border-[#2A2F2A] hover:border-[#C3FFA6]/30 transition-colors"
                  >
                    <div className="text-2xl mb-2">{item.icon}</div>
                    <div className="text-sm text-white font-medium mb-1">{item.title}</div>
                    <div className="text-xs text-[#C3FFA6]">{item.status}</div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <h2 className="text-4xl md:text-5xl font-medium text-white">
                Introducing Height
              </h2>
              
              <p className="text-xl text-gray-400 leading-relaxed">
                Designed and built for teams who design and build, Height is a collaboration tool with{' '}
                <span className="text-white font-medium">
                  autonomous project management capabilities
                </span>.
              </p>

              <p className="text-gray-400 leading-relaxed">
                Height automates the manual legwork that product teams have to do to give you the space to{' '}
                <span className="italic">actually</span> build together, not just manage tasks.
              </p>

              <p className="text-gray-400 leading-relaxed">
                We're building features to clear away everyday toils, starting with backlog upkeep, spec updates, and bug triage.
              </p>

              <p className="text-gray-400 leading-relaxed">
                It's time to rewrite the project management playbook, and we're inviting you to join us.
              </p>

              <motion.a
                href="#"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center px-6 py-3 bg-[#1A1D1A] text-white rounded-lg border border-[#2A2F2A] hover:border-[#C3FFA6]/30 transition-colors"
              >
                View autonomous features
                <ArrowRight className="ml-2 h-5 w-5" />
              </motion.a>
            </motion.div>
          </div>
        </div>
      </section>

         {/* Data Standard Section */}
         <section className="py-24 bg-[#0C0D0C] relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-24">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-6xl md:text-[80px] font-medium text-white mb-6 leading-[1.1] tracking-tight"
            >
              A new standard
              <br />
              for data work
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-[#A1A1AA] text-xl"
            >
              Hex helps 1,000s of teams do more with their data.
            </motion.p>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {[
              {
                logo: "https://framerusercontent.com/images/nXLK1wAp5ZD7QYaXiRz8kZbmE.png",
                title: "Rapid exploration on-demand",
                description: "StubHub realigned its analytics stack with Hex for speed and quality.",
                bgColor: "bg-[#6B46C1]"
              },
              {
                logo: "https://framerusercontent.com/images/QVKF2PqQba3U5UZTOXJTYgbw8.png",
                title: "Operationalized data science",
                description: "ClickUp used Hex to turn a data science churn project into a cross-functional, customer-saving program.",
                bgColor: "bg-[#0EA5E9]"
              },
              {
                logo: "https://framerusercontent.com/images/BAXywubxN8sAhfJg9YqGVpvpzg.png",
                title: "One place for insights",
                description: "Notion made Hex the one place for everyone, from data science to CX and sales, to make decisions with data.",
                bgColor: "bg-[#171717]"
              },
              {
                logo: "https://framerusercontent.com/images/Hg2OUW6aQ0EjgwuqRrVQ3W9ho.png",
                title: "Empowering exploration",
                description: "Modern Treasury uses Hex to enable Engineering, Product, and Design teams to explore on their own.",
                bgColor: "bg-[#059669]"
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ 
                  opacity: 1,
                  y: 0,
                  transition: {
                    delay: index * 0.1 + 0.4,
                    duration: 0.5
                  }
                }}
                viewport={{ once: true }}
                className="group relative"
              >
                <div className="p-6 rounded-2xl bg-[#141414] border border-[#2A2F2A] h-full transition-all duration-300 hover:border-[#3F3F3F]">
                  <div className={`w-24 h-12 rounded-lg ${item.bgColor} mb-8 p-3 flex items-center justify-center`}>
                    <img
                      src={item.logo}
                      alt={item.title}
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <h3 className="text-xl font-medium text-white mb-4">
                    {item.title}
                  </h3>
                  <p className="text-[#A1A1AA] text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 bg-[#0C0D0C] relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-20"
          >
            <span className="inline-block px-4 py-2 rounded-full bg-white/5 text-white/80 text-sm mb-6">
              Client Testimonials
            </span>
            <h2 className="text-4xl md:text-5xl font-medium text-white mb-6">
              Trusted by Industry Leaders
            </h2>
            <p className="text-xl text-gray-400">
              See what our clients have to say about their experience working with us
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "Sarah Chen",
                role: "CTO at TechFlow",
                image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&q=80&w=200&h=200",
                testimonial: "The AI solutions provided by the team have transformed our business operations. The attention to detail and technical expertise were outstanding.",
                company: {
                  logo: "https://framerusercontent.com/images/nXLK1wAp5ZD7QYaXiRz8kZbmE.png",
                  background: "bg-purple-500/10"
                }
              },
              {
                name: "Michael Rodriguez",
                role: "Founder at BlockChain Ventures",
                image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=200&h=200",
                testimonial: "Their blockchain expertise helped us launch our DeFi platform ahead of schedule. The team's technical knowledge and problem-solving abilities are exceptional.",
                company: {
                  logo: "https://framerusercontent.com/images/QVKF2PqQba3U5UZTOXJTYgbw8.png",
                  background: "bg-blue-500/10"
                }
              },
              {
                name: "Emily Watson",
                role: "Product Director at DataSense",
                image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=200&h=200",
                testimonial: "The machine learning models developed by the team have significantly improved our data analytics capabilities. Their expertise in AI is truly remarkable.",
                company: {
                  logo: "https://framerusercontent.com/images/BAXywubxN8sAhfJg9YqGVpvpzg.png",
                  background: "bg-emerald-500/10"
                }
              },
              {
                name: "David Kim",
                role: "CEO at SmartContract Solutions",
                image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200&h=200",
                testimonial: "Their smart contract development and auditing services are top-notch. They helped us create a secure and efficient blockchain infrastructure.",
                company: {
                  logo: "https://framerusercontent.com/images/Hg2OUW6aQ0EjgwuqRrVQ3W9ho.png",
                  background: "bg-indigo-500/10"
                }
              },
              {
                name: "Lisa Zhang",
                role: "Head of Innovation at FutureTech",
                image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=200&h=200",
                testimonial: "The team's expertise in both AI and blockchain helped us create innovative solutions that set us apart in the market.",
                company: {
                  logo: "https://framerusercontent.com/images/nXLK1wAp5ZD7QYaXiRz8kZbmE.png",
                  background: "bg-rose-500/10"
                }
              },
              {
                name: "James Wilson",
                role: "CTO at Web3 Innovations",
                image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=200&h=200",
                testimonial: "Their deep understanding of Web3 technologies helped us build a revolutionary NFT marketplace. The team's dedication to quality is unmatched.",
                company: {
                  logo: "https://framerusercontent.com/images/QVKF2PqQba3U5UZTOXJTYgbw8.png",
                  background: "bg-cyan-500/10"
                }
              }
            ].map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ 
                  opacity: 1,
                  y: 0,
                  transition: {
                    delay: index * 0.1,
                    duration: 0.5
                  }
                }}
                viewport={{ once: true }}
                className="relative group rounded-2xl bg-[#141414] p-8 border border-[#2A2F2A] hover:border-white/20 transition-all duration-300"
              >
                <div className="flex flex-col h-full">
                  <div className={`w-12 h-12 rounded-lg ${testimonial.company.background} p-2 mb-8`}>
                    <img
                      src={testimonial.company.logo}
                      alt="Company logo"
                      className="w-full h-full object-contain"
                    />
                  </div>
                  
                  <p className="text-gray-300 leading-relaxed mb-8 flex-grow text-lg">
                    "{testimonial.testimonial}"
                  </p>
                  
                  <div className="flex items-center gap-4">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full object-cover"
                    />
                    <div>
                      <h4 className="text-white font-medium text-lg">{testimonial.name}</h4>
                      <p className="text-gray-400 text-sm">{testimonial.role}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>


       {/* FAQ Section */}
       <section className="py-24 bg-[#0C0D0C] relative">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-medium text-white mb-4">
              Frequently asked questions
            </h2>
            <p className="text-gray-400">
              Don't see your answer? Get in touch via our communities.{' '}
              <a href="#" className="text-purple-400 hover:text-purple-300">Discord</a>
              {' '}/{' '}
              <a href="#" className="text-purple-400 hover:text-purple-300">Facebook</a>
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-3"
          >
            {[
              {
                question: "How long does it take to get started?",
                answer: "We can start working on your project within 48 hours of initial contact. Our streamlined onboarding process ensures we can quickly understand your needs and begin delivering value. After the initial consultation, we'll provide you with a detailed timeline and project roadmap."
              },
              {
                question: "What is your typical working process?",
                answer: "Our process typically involves four key phases: Discovery (understanding your needs and objectives), Planning (creating detailed specifications and timelines), Development (iterative implementation with regular feedback), and Launch (deployment and support). We maintain transparent communication throughout and provide regular updates on progress."
              },
              {
                question: "How do you usually start new collaborations?",
                answer: "We begin with a detailed consultation to understand your project requirements, goals, and vision. This is followed by a comprehensive proposal outlining scope, timeline, and deliverables. Once aligned, we set up project management tools and communication channels to ensure smooth collaboration."
              },
              {
                question: "Do you guys work with big companies only? We're an early-stage startup?",
                answer: "We work with companies of all sizes, from early-stage startups to enterprise organizations. Our flexible engagement models are designed to accommodate different scales and budgets. For startups, we offer specialized packages that focus on essential features and rapid deployment to help you get to market quickly."
              },
              {
                question: "How long it will take to get an estimate from you?",
                answer: "We typically provide initial estimates within 2-3 business days after our first detailed discussion. For more complex projects, we might need up to 5 days to provide a comprehensive quote. We ensure our estimates are thorough and accurate to avoid surprises later."
              },
              {
                question: "What's the average project duration?",
                answer: "Project duration varies based on complexity and scope. Typical MVPs take 2-3 months, while full-scale applications might take 4-6 months. We can also work on shorter engagements for specific features or improvements. We'll provide a detailed timeline during the estimation phase."
              }
            ].map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ 
                  opacity: 1,
                  y: 0,
                  transition: {
                    delay: index * 0.1,
                    duration: 0.5
                  }
                }}
                viewport={{ once: true }}
                className="group"
              >
                <details className="group">
                  <summary className="flex items-center justify-between cursor-pointer p-4 rounded-lg bg-[#141414] border border-[#1A1D1A] hover:border-[#2A2F2A] transition-colors">
                    <span className="text-white font-medium">{faq.question}</span>
                    <span className="relative flex-shrink-0 ml-1.5 w-5 h-5">
                      <Plus className="absolute inset-0 w-5 h-5 opacity-100 group-open:opacity-0 transition-opacity" />
                      <Minus className="absolute inset-0 w-5 h-5 opacity-0 group-open:opacity-100 transition-opacity" />
                    </span>
                  </summary>
                  <div className="px-4 pb-4 pt-2">
                    <p className="text-gray-400">{faq.answer}</p>
                  </div>
                </details>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </Layout>
  );
}

export default App;