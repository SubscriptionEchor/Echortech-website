import React, { useState, useRef } from 'react';
import Layout from './components/Layout';
import { Plus, Minus } from 'lucide-react';
import Hero from "./assets/images/hero-main.png";

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
      // Get pill and viewport dimensions
      const rect = pill.getBoundingClientRect();
      const viewportWidth = window.innerWidth;
      const viewportHeight = window.innerHeight;
      
      // Video card dimensions (assuming 300px width and aspect ratio 3:4)
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
      if (y < 20) {
        y = 20;
      }
      
      setCardPosition({ x, y });
      setActiveVideo(pills[index].text);
    }
  };

  const pills: PillData[] = [
    {
      text: "AI & ML",
      color: "bg-[#4ADE80]",
      position: "absolute top-[15%] left-[15%]",
      delay: 0,
      videoUrl: "https://cdn.prod.website-files.com/66bc64513c57e27bbe6bcd9c%2F66f45966f7cb7f7510e88350_Weem-transcode.mp4"
    },
    {
      text: "Web3",
      color: "bg-[#FFE14D]",
      position: "absolute top-[38%] left-[28%]",
      delay: 0.2,
      videoUrl: "https://cdn.prod.website-files.com/66bc64513c57e27bbe6bcd9c%2F66f45966f7cb7f7510e88350_Weem-transcode.mp4"
    },
    {
      text: "Cloud Native",
      color: "bg-[#818CF8]",
      position: "absolute top-[62%] left-[12%]",
      delay: 0.4,
      videoUrl: "https://cdn.prod.website-files.com/66bc64513c57e27bbe6bcd9c%2F66f45966f7cb7f7510e88350_Weem-transcode.mp4"
    },
    {
      text: "DevOps",
      color: "bg-[#F472B6]",
      position: "absolute top-[28%] left-[48%]",
      delay: 0.6,
      videoUrl: "https://cdn.prod.website-files.com/66bc64513c57e27bbe6bcd9c%2F66f45966f7cb7f7510e88350_Weem-transcode.mp4"
    },
    {
      text: "Edge Computing",
      color: "bg-[#FB923C]",
      position: "absolute top-[85%] left-[38%]",
      delay: 0.8,
      videoUrl: "https://cdn.prod.website-files.com/66bc64513c57e27bbe6bcd9c%2F66f45966f7cb7f7510e88350_Weem-transcode.mp4"
    },
    {
      text: "Smart Contracts",
      color: "bg-[#22D3EE]",
      position: "absolute top-[15%] right-[15%]",
      delay: 1.0,
      videoUrl: "https://cdn.prod.website-files.com/66bc64513c57e27bbe6bcd9c%2F66f45966f7cb7f7510e88350_Weem-transcode.mp4"
    },
    {
      text: "DeFi",
      color: "bg-[#A78BFA]",
      position: "absolute top-[62%] right-[18%]",
      delay: 1.2,
      videoUrl: "https://cdn.prod.website-files.com/66bc64513c57e27bbe6bcd9c%2F66f45966f7cb7f7510e88350_Weem-transcode.mp4"
    },
    {
      text: "Custom CRM",
      color: "bg-[#60A5FA]",
      position: "absolute top-[38%] right-[25%]",
      delay: 1.4,
      videoUrl: "https://cdn.prod.website-files.com/66bc64513c57e27bbe6bcd9c%2F66f45966f7cb7f7510e88350_Weem-transcode.mp4"
    },
    {
      text: "E-commerce",
      color: "bg-[#F472B6]",
      position: "absolute top-[85%] right-[28%]",
      delay: 1.6,
      videoUrl: "https://cdn.prod.website-files.com/66bc64513c57e27bbe6bcd9c%2F66f45966f7cb7f7510e88350_Weem-transcode.mp4"
    },
    {
      text: "Data Analytics",
      color: "bg-[#34D399]",
      position: "absolute top-[50%] right-[42%]",
      delay: 1.8,
      videoUrl: "https://cdn.prod.website-files.com/66bc64513c57e27bbe6bcd9c%2F66f45966f7cb7f7510e88350_Weem-transcode.mp4"
    },
    {
      text: "SaaS Platform",
      color: "bg-[#38BDF8]",
      position: "absolute top-[72%] left-[58%]",
      delay: 2.0,
      videoUrl: "https://cdn.prod.website-files.com/66bc64513c57e27bbe6bcd9c%2F66f45966f7cb7f7510e88350_Weem-transcode.mp4"
    }
  ];

  return (
    <Layout>
      <div className="relative">
        {/* Hero Section */}
        <section className="relative min-h-[50vh] flex items-center justify-center overflow-hidden z-10">
          <DotMatrix />
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center space-y-6">
              <StatsChip text="5 LEGENDS BOOKED LAST MONTH" className="mb-6" />
              
              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-5xl md:text-7xl font-bold text-white leading-tight tracking-tight"
              >
                World-class brands
                <br />
                for tech founders.
              </motion.h1>

              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="flex flex-col sm:flex-row items-center justify-center gap-4"
              >
                <motion.a
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  href="#pricing"
                  className="group inline-flex items-center px-6 py-3 rounded-lg bg-white text-black hover:bg-gray-100 transition-colors"
                >
                  STARTING AT $1000
                  <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                </motion.a>
                
                <motion.a
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  href="#work"
                  className="group inline-flex items-center px-6 py-3 rounded-lg bg-gray-800 text-white hover:bg-gray-700 transition-colors"
                >
                  VIEW WORK
                  <MoveUpRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                </motion.a>
              </motion.div>
            </div>
          </div>
        </section>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="-mt-20 relative"
        >
          <div className="relative after:absolute after:inset-0 after:bg-gradient-to-b after:from-black/60 after:via-transparent after:to-black/60">
            <img
              src={Hero}
              alt="Hero illustration"
              className="w-full h-auto opacity-85 contrast-75 saturate-75"
            />
          </div>
        </motion.div>
      </div>

      {/* Tools Section */}
      <section className="py-24 bg-black/80 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl font-bold text-white mb-4"
            >
              Industry-Leading Tools
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-gray-400 max-w-2xl mx-auto"
            >
              We leverage cutting-edge technologies and tools to deliver exceptional results
            </motion.p>
          </div>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="grid grid-cols-3 md:grid-cols-6 lg:grid-cols-8 gap-6 items-center justify-items-center"
          >
            {[
              {
                name: "VS Code",
                url: "https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/visualstudiocode.svg"
              },
              {
                name: "Figma",
                url: "https://raw.githubusercontent.com/simple-icons/simple-icons/develop/icons/figma.svg"
              },
              {
                name: "Docker",
                url: "https://raw.githubusercontent.com/simple-icons/simple-icons/develop/icons/docker.svg"
              },
              {
                name: "Kubernetes",
                url: "https://raw.githubusercontent.com/simple-icons/simple-icons/develop/icons/kubernetes.svg"
              },
              {
                name: "ChatGPT",
                url: "https://raw.githubusercontent.com/simple-icons/simple-icons/develop/icons/openai.svg"
              },
              {
                name: "TensorFlow",
                url: "https://raw.githubusercontent.com/simple-icons/simple-icons/develop/icons/tensorflow.svg"
              },
              {
                name: "PyTorch",
                url: "https://raw.githubusercontent.com/simple-icons/simple-icons/develop/icons/pytorch.svg"
              },
              {
                name: "Hugging Face",
                url: "https://raw.githubusercontent.com/simple-icons/simple-icons/develop/icons/huggingface.svg"
              },
              {
                name: "Ethereum",
                url: "https://raw.githubusercontent.com/simple-icons/simple-icons/develop/icons/ethereum.svg"
              },
              {
                name: "Solidity",
                url: "https://raw.githubusercontent.com/simple-icons/simple-icons/develop/icons/solidity.svg"
              },
              {
                name: "Web3.js",
                url: "https://raw.githubusercontent.com/simple-icons/simple-icons/develop/icons/web3dotjs.svg"
              },
              {
                name: "Polygon",
                url: "https://raw.githubusercontent.com/simple-icons/simple-icons/develop/icons/polygon.svg"
              },
              {
                name: "GitHub",
                url: "https://raw.githubusercontent.com/simple-icons/simple-icons/develop/icons/github.svg"
              },
              {
                name: "AWS",
                url: "https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/amazonaws.svg"
              },
              {
                name: "Azure",
                url: "https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/microsoftazure.svg"
              },
              {
                name: "Google Cloud",
                url: "https://raw.githubusercontent.com/simple-icons/simple-icons/develop/icons/googlecloud.svg"
              }
            ].map((tool, index) => (
              <motion.div
                key={tool.name}
                whileHover={{ scale: 1.1 }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ 
                  opacity: 1, 
                  y: 0,
                  transition: {
                    delay: index * 0.1,
                    duration: 0.5,
                    ease: "easeOut"
                  }
                }}
                animate={{
                  y: [0, -8, 0],
                  transition: {
                    duration: 3,
                    repeat: Infinity,
                    repeatType: "reverse",
                    ease: "easeInOut",
                    delay: index * 0.2
                  }
                }}
                viewport={{ once: true }}
                className="relative group w-full"
              >
                <motion.div
                  className="aspect-square w-full max-w-[80px] mx-auto flex items-center justify-center p-4 rounded-lg bg-gray-900/50 border border-gray-800 backdrop-blur-sm transition-all duration-300"
                  whileHover={{
                    borderColor: "rgba(99, 102, 241, 0.5)",
                    backgroundColor: "rgba(17, 24, 39, 0.7)",
                    transition: { duration: 0.2 }
                  }}
                >
                  <img
                    src={tool.url}
                    alt={tool.name}
                    className="w-8 h-8 object-contain filter invert brightness-75 group-hover:brightness-100 transition-all"
                  />
                </motion.div>
                <motion.div 
                  className="absolute -bottom-3 left-1/2 -translate-x-1/2 whitespace-nowrap"
                  initial={{ opacity: 0, y: -5 }}
                  animate={{ opacity: 0 }}
                  whileHover={{ opacity: 1, y: 8 }}
                  transition={{ duration: 0.2 }}
                >
                  <span className="px-2 py-1 text-xs bg-gray-800 text-gray-200 rounded-md shadow-lg">{tool.name}</span>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Floating Buttons Section */}
      <section className="min-h-screen bg-black relative overflow-hidden flex items-center justify-center">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(99,102,241,0.08)_0%,rgba(0,0,0,0.95)_100%)]" />
          <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(0,0,0,0.8)_0%,transparent_50%,rgba(0,0,0,0.8)_100%)]" />
        </div>
        <div className="relative w-full max-w-[1600px] mx-auto px-4">
          <div className="relative h-[80vh] flex items-center justify-center">
            {pills.map((pill, index) => (
              <div key={index} className={`${pill.position} w-fit`}>
                <motion.div
                  ref={el => pillRefs.current[index] = el}
                  onHoverStart={() => handlePillHover(index)}
                  onHoverEnd={() => setActiveVideo(null)}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ 
                    opacity: 1,
                    y: [0, -15, 0],
                    x: [0, index % 3 === 0 ? 5 : index % 3 === 1 ? -5 : 0, 0],
                    rotate: [0, index % 2 === 0 ? 2 : -2, 0],
                    transition: {
                      y: {
                        duration: 4,
                        repeat: Infinity,
                        repeatType: "reverse",
                        ease: [0.4, 0, 0.2, 1],
                        delay: index * 0.3
                      },
                      x: {
                        duration: 3.5,
                        repeat: Infinity,
                        repeatType: "reverse",
                        ease: [0.4, 0, 0.2, 1],
                        delay: index * 0.4
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
                  className="relative hover:z-10 will-change-transform"
                >
                  <div className={`rounded-full ${pill.color} pl-3 pr-6 py-2 flex items-center gap-3 shadow-lg backdrop-blur-sm`}>
                    <div className="bg-black/90 rounded-full p-1.5">
                      <ArrowRight className="w-4 h-4 text-white" />
                    </div>
                    <span className="text-xl font-medium text-black">
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

      {/* Features Section */}
      <section className="py-24 bg-[#0C0D0C] relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-medium text-[#C3FFA6] mb-20"
          >
            Features
          </motion.h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-1">
            {[
              {
                icon: <Monitor className="w-10 h-10 text-[#C3FFA6]" />,
                title: "Flexible Environments",
                description: "Bring your own image or build one in Python, scale resources as needed, and leverage state-of-the-art GPUs like H100s & A100s for high-performance computing."
              },
              {
                icon: <Boxes className="w-10 h-10 text-[#C3FFA6]" />,
                title: "Seamless Integrations",
                description: "Export function logs to Datadog or any OpenTelemetry-compatible provider, and easily mount cloud storage from major providers (S3, R2 etc.)."
              },
              {
                icon: <Database className="w-10 h-10 text-[#C3FFA6]" />,
                title: "Data Storage",
                description: "Manage data effortlessly with storage solutions (network volumes, key-value stores and queues). Provision storage types and interact with them using familiar Python syntax."
              },
              {
                icon: <Clock className="w-10 h-10 text-[#C3FFA6]" />,
                title: "Job Scheduling",
                description: "Take control of your workloads with powerful scheduling. Set up cron jobs, retries, and timeouts, or use batching to optimize resource usage."
              },
              {
                icon: <Globe className="w-10 h-10 text-[#C3FFA6]" />,
                title: "Web Endpoints",
                description: "Deploy and manage web services with ease. Create custom domains, set up streaming and websockets, and serve functions as secure HTTPS endpoints."
              },
              {
                icon: <Bug className="w-10 h-10 text-[#C3FFA6]" />,
                title: "Built-In Debugging",
                description: "Troubleshoot efficiently with built-in debugging tools. Use the modal shell for interactive debugging and set breakpoints to pinpoint issues quickly."
              }
            ].map((feature, index) => (
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
                className="relative group"
              >
                <div className="p-8 rounded-none border-[0.5px] border-[#2A2F2A] h-full transition-all duration-300 hover:bg-[#1A1D1A]">
                  <div className="mb-8">{feature.icon}</div>
                  <h3 className="text-xl font-medium text-white mb-4">
                    {feature.title}
                  </h3>
                  <p className="text-[#8A8F8A] leading-relaxed text-sm">
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            ))}
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
                question: "How do I get access to Blitzit?",
                answer: "You can get access to Blitzit by signing up on our website. Once registered, you'll receive immediate access to our platform and all its features."
              },
              {
                question: "Is Blitzit only for Desktop? Is there a mobile app version?",
                answer: "Blitzit is available for both desktop and mobile devices. You can access it through any modern web browser on desktop, and we also offer native mobile apps for iOS and Android."
              },
              {
                question: "How many machines can I install Blitzit on?",
                answer: "With a standard license, you can install Blitzit on up to 3 devices simultaneously. Enterprise licenses offer unlimited device installations."
              },
              {
                question: "Is Blitzit a free app?",
                answer: "Blitzit offers both free and premium tiers. The free tier includes essential features, while premium tiers unlock advanced capabilities and increased usage limits."
              },
              {
                question: "How can I buy Blitzit?",
                answer: "You can purchase Blitzit directly through our website. We offer monthly and annual subscription plans, as well as lifetime licenses for individual developers and teams."
              },
              {
                question: "How do I activate my account if I bought a lifetime option online?",
                answer: "After purchasing a lifetime license, you'll receive an activation code via email. Simply log in to your account and enter the code in the 'License Management' section to activate."
              },
              {
                question: "Can I integrate Blitzit with other apps?",
                answer: "Yes, Blitzit offers extensive integration capabilities through our API and native integrations with popular development tools and services."
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