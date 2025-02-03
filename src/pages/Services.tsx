import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Code2, Rocket, Zap, Scale, PlaySquare, Clock, Box } from 'lucide-react';
import Layout from '../components/Layout';

const Services = () => {
  const projects = [
    {
      category: "AI & Machine Learning",
      achievements: [
        "Developed predictive analytics platform reducing forecast errors by 45%",
        "Built custom NLP models for automated content moderation",
        "Implemented real-time AI-powered fraud detection system"
      ]
    },
    {
      category: "Blockchain Solutions",
      achievements: [
        "Created high-performance DEX with $10M+ daily volume",
        "Developed secure NFT marketplace with advanced trading features",
        "Implemented cross-chain bridge supporting multiple networks"
      ]
    },
    {
      category: "Web3 Applications",
      achievements: [
        "Built decentralized social platform with 100K+ users",
        "Developed DeFi lending protocol with innovative yield strategies",
        "Created DAO governance system with multiple proposal types"
      ]
    }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-b from-black via-black/90 to-black" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(99,102,241,0.08)_0%,transparent_100%)]" />
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center space-y-8"
          >
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-sm font-medium tracking-wider text-indigo-400 uppercase"
            >
              Web3 • AI • Blockchain
            </motion.span>
            
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-5xl md:text-7xl font-medium tracking-tight text-white max-w-4xl mx-auto leading-[1.1]"
            >
              Building the future of
              <br />
              digital innovation
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-xl text-gray-400 max-w-2xl mx-auto"
            >
              We combine cutting-edge technologies with expert development
              to create solutions that define the next generation of the internet.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-4"
            >
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="/contact"
                className="group inline-flex items-center px-8 py-4 rounded-full bg-white text-black hover:bg-gray-100 transition-colors"
              >
                Start a Project
                <ArrowUpRight className="ml-2 h-5 w-5 transition-transform group-hover:rotate-45" />
              </motion.a>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Generative AI Section */}
      <section className="py-32 bg-black relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left Column */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <span className="text-sm font-medium tracking-wider text-gray-400 uppercase">
                Use Cases
              </span>
              
              <h2 className="text-4xl md:text-6xl font-medium tracking-tight leading-tight">
                <span className="text-[#4ADE80]">Generative AI Inference</span>{' '}
                <span className="text-white">that scales with you</span>
              </h2>
              
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="#examples"
                className="inline-flex items-center px-6 py-3 rounded-lg bg-white/10 text-white hover:bg-white/20 transition-colors"
              >
                View Examples
              </motion.a>

              <div className="space-y-8 pt-8">
                {[
                  {
                    icon: <Zap className="w-5 h-5 text-[#4ADE80]" />,
                    title: "Fast cold boots",
                    description: "Load gigabytes of weights in seconds with our optimized container file system."
                  },
                  {
                    icon: <Code2 className="w-5 h-5 text-[#4ADE80]" />,
                    title: "Bring your own code",
                    description: "Deploy anything from custom models to popular frameworks."
                  },
                  {
                    icon: <Scale className="w-5 h-5 text-[#4ADE80]" />,
                    title: "Seamless autoscaling",
                    description: "Handle bursty and unpredictable load by scaling to thousands of GPUs and back down to zero."
                  }
                ].map((feature, index) => (
                  <motion.div
                    key={feature.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-start gap-4"
                  >
                    <div className="p-2 rounded-lg bg-white/5">
                      {feature.icon}
                    </div>
                    <div>
                      <h3 className="text-white font-medium mb-2">
                        {feature.title}
                      </h3>
                      <p className="text-gray-400 leading-relaxed">
                        {feature.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Right Column */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="rounded-2xl overflow-hidden bg-[#0EA5E9]/20 backdrop-blur-sm border border-[#0EA5E9]/20">
                <div className="p-4">
                  <div className="flex items-center gap-2 bg-white/10 rounded-full px-4 py-2 mb-4">
                    <input
                      type="text"
                      placeholder="Type an image prompt (e.g. blue tulips)"
                      className="w-full bg-transparent text-white placeholder-gray-400 focus:outline-none"
                    />
                    <button className="px-4 py-1 rounded-full bg-black text-white text-sm">
                      Generate
                    </button>
                  </div>
                  <div className="aspect-square rounded-lg overflow-hidden">
                    <img
                      src="https://images.unsplash.com/photo-1582794543139-8ac9cb0f7b11?auto=format&fit=crop&q=80&w=2574"
                      alt="AI Generated Tulips"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>
              <div className="absolute -inset-4 -z-10 bg-gradient-to-r from-[#4ADE80]/20 via-[#0EA5E9]/20 to-[#4ADE80]/20 blur-2xl opacity-50" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Fine-tuning Section */}
      <section className="py-32 bg-black relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left Column - 3D Illustration */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative w-full h-[600px]"
            >
              <div className="relative w-full h-full">
                <div className="absolute top-[10%] left-1/2 -translate-x-1/2 w-64 h-64 grid grid-cols-2 gap-4">
                  {[...Array(4)].map((_, i) => (
                    <motion.div
                      key={`top-${i}`}
                      initial={{ y: 0 }}
                      animate={{ y: [0, -10, 0] }}
                      transition={{
                        duration: 3,
                        delay: i * 0.2,
                        repeat: Infinity,
                        repeatType: "reverse"
                      }}
                      className="w-28 h-28 bg-gradient-to-br from-[#4ADE80] to-[#4ADE80]/50 rounded-lg shadow-xl"
                      style={{ transform: "perspective(1000px) rotateX(45deg)" }}
                    />
                  ))}
                </div>
                
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-64 -rotate-12">
                  <div className="w-full h-full bg-gray-900/80 backdrop-blur-sm rounded-lg border border-gray-800 p-4">
                    <pre className="text-xs text-gray-400">
                      <code>{`from transformers import AutoModel

def fine_tune(model, data):
    optimizer = AdamW(
        model.parameters(),
        lr=3e-5
    )
    
    model.train()
    for epoch in range(num_epochs):
        for batch in data:
            outputs = model(**batch)
            loss = outputs.loss
            loss.backward()`}</code>
                    </pre>
                  </div>
                </div>

                <div className="absolute bottom-[10%] left-1/2 -translate-x-1/2 w-64 h-64 grid grid-cols-2 gap-4">
                  {[...Array(4)].map((_, i) => (
                    <motion.div
                      key={`bottom-${i}`}
                      initial={{ y: 0 }}
                      animate={{ y: [0, 10, 0] }}
                      transition={{
                        duration: 3,
                        delay: i * 0.2,
                        repeat: Infinity,
                        repeatType: "reverse"
                      }}
                      className="w-28 h-28 bg-gradient-to-br from-[#4ADE80]/80 to-[#4ADE80]/30 rounded-lg shadow-xl"
                      style={{ transform: "perspective(1000px) rotateX(45deg)" }}
                    />
                  ))}
                </div>

                <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-transparent to-black/80 pointer-events-none" />
              </div>
            </motion.div>

            {/* Right Column - Content */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <h2 className="text-4xl md:text-6xl font-medium tracking-tight leading-tight">
                <span className="text-[#4ADE80]">Fine-tuning</span>{' '}
                <span className="text-white">and training without managing infrastructure</span>
              </h2>
              
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="#examples"
                className="inline-flex items-center px-6 py-3 rounded-lg bg-white/10 text-white hover:bg-white/20 transition-colors"
              >
                View Examples
              </motion.a>

              <div className="space-y-8 pt-8">
                {[
                  {
                    icon: <PlaySquare className="w-5 h-5 text-[#4ADE80]" />,
                    title: "Start training immediately",
                    description: "Provision Nvidia A100 and H100 GPUs in seconds. Your drivers and custom packages are already there."
                  },
                  {
                    icon: <Clock className="w-5 h-5 text-[#4ADE80]" />,
                    title: "Never wait in line",
                    description: "Run as many experiments as you need to, in parallel. Stop paying for idle GPUs when you're done."
                  },
                  {
                    icon: <Box className="w-5 h-5 text-[#4ADE80]" />,
                    title: "Cloud storage",
                    description: "Mount weights and data in distributed volumes, then access them wherever they're needed."
                  }
                ].map((feature, index) => (
                  <motion.div
                    key={feature.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-start gap-4"
                  >
                    <div className="p-2 rounded-lg bg-white/5">
                      {feature.icon}
                    </div>
                    <div>
                      <h3 className="text-white font-medium mb-2">
                        {feature.title}
                      </h3>
                      <p className="text-gray-400 leading-relaxed">
                        {feature.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Modal Capabilities Section */}
      <section className="py-32 bg-black relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-6 mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-6xl font-medium tracking-tight text-white"
            >
              Build anything with Modal
            </motion.h2>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-6 gap-4">
            {[
              {
                name: "Language Models",
                color: "from-emerald-500/20 to-emerald-500/10",
                highlight: "emerald"
              },
              {
                name: "Image, Video, 3D",
                color: "from-yellow-500/20 to-yellow-500/10",
                highlight: "yellow"
              },
              {
                name: "Audio Processing",
                color: "from-cyan-500/20 to-cyan-500/10",
                highlight: "cyan"
              },
              {
                name: "Fine-Tuning",
                color: "from-green-500/20 to-green-500/10",
                highlight: "green"
              },
              {
                name: "Batch Processing",
                color: "from-amber-500/20 to-amber-500/10",
                highlight: "amber"
              },
              {
                name: "Sandboxed",
                color: "from-gray-500/20 to-gray-500/10",
                highlight: "gray"
              }
            ].map((capability, index) => (
              <motion.div
                key={capability.name}
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
                className="col-span-1"
              >
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className={`relative group rounded-2xl bg-gradient-to-b ${capability.color} p-4 h-full border border-${capability.highlight}-500/20 hover:border-${capability.highlight}-500/40 transition-colors`}
                >
                  <div className="flex items-center justify-between">
                    <span className="text-white font-medium">{capability.name}</span>
                    <ArrowUpRight className={`w-4 h-4 text-${capability.highlight}-500/70 group-hover:text-${capability.highlight}-500 transition-colors`} />
                  </div>
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-t from-black/20 to-transparent pointer-events-none" />
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Modal Examples Showcase */}
      <section className="py-32 bg-black relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-12">
            <h2 className="text-4xl font-medium text-white">Examples</h2>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-4 py-2 rounded-lg bg-white/10 text-white text-sm hover:bg-white/20 transition-colors"
            >
              View all
            </motion.button>
          </div>

          <div className="relative group">
            <div className="flex gap-6 overflow-x-auto pb-8 -mx-4 px-4 snap-x snap-mandatory scrollbar-hide">
              {[
                {
                  title: "Deploy an OpenAI-compatible LLM service",
                  description: "Run large language models with a drop-in replacement for the OpenAI API.",
                  image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&q=80&w=800",
                  gradient: "from-emerald-500/20 to-emerald-800/20"
                },
                {
                  title: "Custom pet art from Flux with Hugging Face and Gradio",
                  description: "Fine-tune an image generation model on pictures of your pet.",
                  image: "https://images.unsplash.com/photo-1548199973-03cce0bbc87b?auto=format&fit=crop&q=80&w=800",
                  gradient: "from-cyan-500/20 to-cyan-800/20"
                },
                {
                  title: "Run llama.cpp",
                  description: "Run DeepSeek-R1 and Phi-4 on llama.cpp",
                  image: "https://images.unsplash.com/photo-1522139137660-4248e04955b8?auto=format&fit=crop&q=80&w=800",
                  gradient: "from-lime-500/20 to-lime-800/20"
                },
                {
                  title: "Voice chat with LLMs",
                  description: "Build an interactive voice chat app.",
                  image: "https://images.unsplash.com/photo-1507146153580-69a1fe6d8aa1?auto=format&fit=crop&q=80&w=800",
                  gradient: "from-green-500/20 to-green-800/20"
                },
                {
                  title: "Serve diffusion models",
                  description: "Serve Flux on Modal with a number of optimizations for blazingly fast inference.",
                  image: "https://images.unsplash.com/photo-1519999482648-25049ddd37b1?auto=format&fit=crop&q=80&w=800",
                  gradient: "from-emerald-500/20 to-emerald-800/20"
                }
              ].map((example, index) => (
                <motion.div
                  key={example.title}
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
                  className="relative flex-shrink-0 w-full sm:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] snap-start group cursor-pointer"
                >
                  <div className={`relative aspect-[4/3] rounded-2xl overflow-hidden bg-gradient-to-br ${example.gradient}`}>
                    <img
                      src={example.image}
                      alt={example.title}
                      className="absolute inset-0 w-full h-full object-cover mix-blend-overlay opacity-50"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                    <div className="relative h-full p-6 flex flex-col justify-end">
                      <h3 className="text-xl font-medium text-white mb-2">
                        {example.title}
                      </h3>
                      <p className="text-gray-300 text-sm">
                        {example.description}
                      </p>
                      <motion.div
                        initial={{ opacity: 0 }}
                        whileHover={{ opacity: 1 }}
                        className="absolute top-4 right-4"
                      >
                        <ArrowUpRight className="w-5 h-5 text-white" />
                      </motion.div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
            
            <div className="absolute right-4 top-1/2 -translate-y-1/2 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
              <button 
                onClick={() => document.querySelector('.scrollbar-hide')?.scrollBy({ left: -300, behavior: 'smooth' })}
                className="p-2 rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors backdrop-blur-sm"
              >
                <ArrowUpRight className="w-5 h-5 rotate-[-135deg]" />
              </button>
              <button 
                onClick={() => document.querySelector('.scrollbar-hide')?.scrollBy({ left: 300, behavior: 'smooth' })}
                className="p-2 rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors backdrop-blur-sm"
              >
                <ArrowUpRight className="w-5 h-5 rotate-45" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Project Showcase */}
      <section className="py-32 bg-black relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="text-4xl font-medium text-white mb-4">
              Our Impact
            </h2>
            <p className="text-xl text-gray-400">
              Transforming industries through innovative solutions
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="relative"
              >
                <div className="p-8 rounded-2xl bg-white/5 border border-white/10 h-full">
                  <h3 className="text-xl font-medium text-white mb-6">
                    {project.category}
                  </h3>
                  <ul className="space-y-4">
                    {project.achievements.map((achievement, i) => (
                      <li key={i} className="flex items-start gap-3 text-gray-400">
                        <Rocket className="w-5 h-5 text-indigo-400 flex-shrink-0 mt-1" />
                        <span>{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Brand Showcase Section */}
      <section className="py-32 bg-black relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left Column - Content */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#4ADE80]/10 border border-[#4ADE80]/20">
                <span className="w-2 h-2 rounded-full bg-[#4ADE80]" />
                <span className="text-[#4ADE80] text-sm font-medium">Case Study</span>
              </div>
              
              <h2 className="text-4xl md:text-6xl font-medium tracking-tight leading-tight">
                <span className="text-white">AlphaCircuit</span>{' '}
                <span className="text-[#4ADE80]">Brand Identity</span>
              </h2>
              
              <p className="text-xl text-gray-400 leading-relaxed">
                A comprehensive brand and website redesign for a leading backend engineering firm, focusing on technical excellence and innovation.
              </p>

              <div className="flex flex-wrap gap-4">
                {[
                  "Brand Strategy",
                  "Visual Identity",
                  "Website Design",
                  "UI/UX",
                  "Development"
                ].map((tag) => (
                  <span
                    key={tag}
                    className="px-4 py-2 rounded-full bg-white/5 text-white/80 text-sm border border-white/10"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>

            {/* Right Column - Brand Showcase */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              {/* Logo Showcase */}
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-[#111] p-12 flex items-center justify-center border border-white/10"
              >
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(74,222,128,0.08)_0%,transparent_100%)]" />
                <div className="relative flex flex-col items-center gap-4">
                  <div className="text-4xl font-medium text-white flex items-center gap-2">
                    AlphaCircuit
                    <div className="w-8 h-8 bg-[#4ADE80] rounded-sm transform rotate-45" />
                  </div>
                  <div className="text-gray-400 text-sm tracking-wide">
                    Backend Engineering Firm
                  </div>
                </div>
              </motion.div>

              {/* Website Mockups */}
              <div className="grid grid-cols-2 gap-6">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="aspect-square rounded-2xl overflow-hidden bg-[#111] p-6 border border-white/10 relative group"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-[#4ADE80]/5 to-transparent" />
                  <div className="h-full w-full bg-[#0A0A0A] rounded-lg overflow-hidden relative">
                    <div className="absolute inset-x-0 top-0 h-1 bg-[#4ADE80]/20" />
                    <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_40%,rgba(74,222,128,0.1)_60%)]" />
                  </div>
                </motion.div>

                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="aspect-square rounded-2xl overflow-hidden bg-[#111] p-6 border border-white/10 relative group"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-[#4ADE80]/5 to-transparent" />
                  <div className="relative h-full flex items-center justify-center">
                    <div className="w-24 h-24 bg-[#0A0A0A] rounded-lg shadow-2xl transform rotate-45 relative overflow-hidden">
                      <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_40%,rgba(74,222,128,0.1)_60%)]" />
                      <div className="absolute inset-x-0 top-0 h-1 bg-[#4ADE80]/20" />
                    </div>
                  </div>
                </motion.div>
              </div>

              {/* Website Preview */}
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="aspect-video rounded-2xl overflow-hidden bg-[#111] p-6 border border-white/10 relative"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-[#4ADE80]/5 to-transparent" />
                <div className="h-full w-full bg-[#0A0A0A] rounded-lg overflow-hidden relative">
                  <div className="absolute inset-x-0 top-0 h-1 bg-[#4ADE80]/20" />
                  <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_40%,rgba(74,222,128,0.1)_60%)]" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-[#4ADE80] text-sm">Website Preview</div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Services;