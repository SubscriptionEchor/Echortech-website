import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Bot, Cpu, ScrollText, Blocks, Globe, Zap, ArrowUpRight, Search, BarChart3, ArrowRight } from 'lucide-react';
import Layout from '../components/Layout';

const serviceCategories = [
  {
    title: "AI & ML",
    services: [
      {
        icon: <Bot className="w-8 h-8" />,
        title: "Custom AI Solutions",
        description: "LLMs, Computer Vision & NLP models. We develop cutting-edge AI solutions tailored to your specific business needs.",
        link: "#custom-solutions"
      },
      {
        icon: <Cpu className="w-8 h-8" />,
        title: "AI Integration",
        description: "Seamless AI implementation for your business. We help integrate AI capabilities into your existing systems and workflows.",
        link: "/services/ai/integration"
      }
    ]
  },
  {
    title: "BLOCKCHAIN",
    services: [
      {
        icon: <ScrollText className="w-8 h-8" />,
        title: "Smart Contracts",
        description: "Secure & audited contract development. We create reliable and efficient smart contracts for your blockchain applications.",
        link: "/services/blockchain/smart-contracts"
      },
      {
        icon: <Blocks className="w-8 h-8" />,
        title: "DeFi Platforms",
        description: "Custom DeFi & Web3 solutions. We build decentralized platforms that revolutionize financial services.",
        link: "/services/blockchain/defi"
      }
    ]
  },
  {
    title: "DEVELOPMENT",
    services: [
      {
        icon: <Globe className="w-8 h-8" />,
        title: "Web & Mobile",
        description: "Full-stack apps with modern tech. We create responsive and scalable applications for web and mobile platforms.",
        link: "/services/development/web-mobile"
      },
      {
        icon: <Zap className="w-8 h-8" />,
        title: "API & Backend",
        description: "Scalable & secure architectures. We design and implement robust backend systems that power your applications.",
        link: "/services/development/api-backend"
      }
    ]
  }
];

const Services = () => {
  return (
    <Layout>
      <div className="min-h-screen bg-black">
        {/* Hero Section */}
        <section className="pt-40 pb-32 relative">
          <div className="absolute inset-0">
            <div className="absolute inset-0" />
          </div>
          
          <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="w-full"
            >
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-light text-white/80 leading-[1.1] tracking-[-0.02em] mb-12"
              >
                Services
              </motion.h1>
              
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className="text-lg sm:text-xl md:text-2xl xl:text-3xl font-light text-white/60 leading-relaxed max-w-4xl xl:max-w-5xl"
              >
                From AI development to blockchain solutions; innovative design to technical consultancy, 
                we have services to empower every business and every vision.
              </motion.p>
            </motion.div>
          </div>
        </section>

        {/* What We Do Section */}
        <section className="relative py-40 overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-black" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,100,255,0.02)_0%,transparent_100%)]" />
          </div>

          <div className="relative z-10 max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 xl:gap-24 items-start">
              {/* Left Column */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="space-y-8"
              >
                <motion.span
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  className="text-sm text-[#4ADE80] tracking-wider uppercase"
                >
                  WHAT WE DO
                </motion.span>
                
                <div className="space-y-4">
                  {[
                    'Brand Identity',
                    'Brand Strategy',
                    'Visual Identities',
                    'Web Strategy',
                    'Web Design',
                    'Web Development',
                    'Product Strategy',
                    'Product Design',
                    'Design Support'
                  ].map((service, index) => (
                    <motion.div
                      key={service}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      className="group"
                    >
                      <h3 className="text-3xl sm:text-4xl md:text-5xl xl:text-6xl font-light text-white group-hover:text-[#4ADE80] transition-colors duration-300 cursor-pointer leading-[1.1]">
                        {service}
                      </h3>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              {/* Right Column - Video */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="relative lg:sticky lg:top-24 xl:top-32"
              >
                <div className="relative rounded-2xl overflow-hidden bg-[#141414] border border-[#1A1D1A] aspect-[4/3]">
                  <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-full object-cover"
                  >
                    <source
                      src="https://framerusercontent.com/assets/AVIHD0z16SJz3u3yduZYEYNNSU.mp4"
                      type="video/mp4"
                    />
                  </video>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* AI Single-shot Retrieval Section */}
        <section id="custom-solutions" className="relative py-40 overflow-hidden scroll-mt-20">
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-black" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,100,255,0.02)_0%,transparent_100%)]" />
          </div>

          <div className="relative z-10 max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 xl:gap-24">
              {/* Left Column */}
              <div className="space-y-8">
                <motion.span
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  className="text-sm text-[#4ADE80] tracking-wider uppercase font-medium"
                >
                  CUSTOM AI SOLUTIONS
                </motion.span>

                <motion.h2
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="text-4xl sm:text-5xl md:text-6xl xl:text-7xl font-light text-white leading-[1.1] tracking-[-0.02em]"
                >
                  Transform your business with custom AI solutions
                </motion.h2>

                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 }}
                  className="text-lg text-white/60 max-w-2xl leading-relaxed"
                >
                  From intelligent automation to predictive analytics, we develop tailored AI solutions that drive innovation and efficiency. Our expertise spans machine learning, deep learning, and natural language processing.
                </motion.p>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                  className="grid grid-cols-1 sm:grid-cols-2 gap-8 pt-8"
                >
                  <div className="space-y-6">
                    <div className="w-12 h-12 rounded-lg bg-[#141414] border border-[#1A1D1A] flex items-center justify-center">
                      <Bot className="w-6 h-6 text-[#4ADE80]" />
                    </div>
                    <h3 className="text-lg text-white font-light">Custom LLMs and AI models tailored to your specific business requirements and use cases</h3>
                  </div>

                  <div className="space-y-6">
                    <div className="w-12 h-12 rounded-lg bg-[#141414] border border-[#1A1D1A] flex items-center justify-center">
                      <Cpu className="w-6 h-6 text-[#4ADE80]" />
                    </div>
                    <h3 className="text-lg text-white font-light">End-to-end AI implementation from data preparation to model deployment and monitoring</h3>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 }}
                  className="pt-8"
                >
                  <a
                    href="#"
                    className="inline-flex items-center gap-2 text-white hover:text-[#4ADE80] transition-colors group"
                  >
                    <span className="text-lg font-light">Explore AI Solutions</span>
                    <ArrowRight className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" />
                  </a>
                </motion.div>
              </div>

              {/* Right Column - Code Preview */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="relative lg:sticky lg:top-24 xl:top-32"
              >
                <div className="relative rounded-2xl overflow-hidden">
                  <img
                    src="https://images.contentstack.io/v3/assets/bltac01ee6daa3a1e14/blt6844981b9ff7dcdd/672b58fd6292935698743f90/vector-database.png?width=1536&disable=upscale&auto=webp"
                    alt="Vector Database Visualization"
                    className="w-full h-auto rounded-2xl"
                  />
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* AI Integration Section */}
        <section id="ai-integration" className="relative py-40 overflow-hidden scroll-mt-20">
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-[#0C0D0C]" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,100,255,0.02)_0%,transparent_100%)]" />
          </div>

          <div className="relative z-10 max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 xl:gap-24">
              {/* Image Column - Now First */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="relative lg:sticky lg:top-24 xl:top-32"
              >
                <img
                  src="https://images.contentstack.io/v3/assets/bltac01ee6daa3a1e14/blt6844981b9ff7dcdd/672b58fd6292935698743f90/vector-database.png?width=1536&disable=upscale&auto=webp"
                  alt="Data Architecture Visualization"
                  className="w-full h-auto rounded-2xl"
                />
              </motion.div>

              {/* Left Column */}
              <div className="space-y-8 lg:pt-12">
                <motion.span
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  className="inline-block text-sm text-[#4ADE80] tracking-wider uppercase font-medium"
                >
                  AI INTEGRATION
                </motion.span>

                <motion.h2
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="text-4xl sm:text-5xl md:text-6xl xl:text-7xl font-light text-white leading-[1] tracking-[-0.02em]"
                >
                  Seamless AI Integration for Your Business
                </motion.h2>

                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                  className="text-lg text-white/60 max-w-2xl leading-relaxed font-light"
                >
                  Transform your existing systems with powerful AI capabilities. We help businesses integrate and leverage artificial intelligence to enhance operations, improve decision-making, and drive innovation.
                </motion.p>

                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 }}
                  className="text-lg text-white/60 max-w-2xl leading-relaxed font-light"
                >
                  Our expert team ensures smooth integration of AI models into your workflow, with minimal disruption to your existing processes while maximizing the impact on your business outcomes.
                </motion.p>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 }}
                  className="grid grid-cols-1 sm:grid-cols-2 gap-8 pt-8"
                >
                  <div className="space-y-6">
                    <div className="w-12 h-12 rounded-lg bg-[#141414] border border-[#1A1D1A] flex items-center justify-center">
                      <BarChart3 className="w-6 h-6 text-[#4ADE80]" />
                    </div>
                    <h3 className="text-base text-white/80 font-light leading-relaxed">Seamless integration with existing systems and workflows for maximum efficiency</h3>
                  </div>

                  <div className="space-y-6">
                    <div className="w-12 h-12 rounded-lg bg-[#141414] border border-[#1A1D1A] flex items-center justify-center">
                      <Search className="w-6 h-6 text-[#4ADE80]" />
                    </div>
                    <h3 className="text-base text-white/80 font-light leading-relaxed">Real-time monitoring and optimization of AI model performance</h3>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5 }}
                  className="pt-8"
                >
                  <a
                    href="#"
                    className="inline-flex items-center gap-2 px-6 py-3 text-white bg-white/5 hover:bg-white/10 rounded-full border border-white/10 hover:border-white/20 transition-all duration-300 group"
                  >
                    <span className="text-lg font-light">Explore AI Integration</span>
                    <ArrowRight className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" />
                  </a>
                </motion.div>
              </div>
            </div>
          </div>
        </section>

        {/* Smart Contracts Section */}
        <section id="smart-contracts" className="relative py-40 overflow-hidden scroll-mt-20">
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-black" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,100,255,0.02)_0%,transparent_100%)]" />
          </div>

          <div className="relative z-10 max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 xl:gap-24">
              {/* Left Column */}
              <div className="space-y-8">
                <motion.span
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  className="text-sm text-[#4ADE80] tracking-wider uppercase font-medium"
                >
                  SMART CONTRACTS
                </motion.span>

                <motion.h2
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="text-4xl sm:text-5xl md:text-6xl xl:text-7xl font-light text-white leading-[1.1] tracking-[-0.02em]"
                >
                  Secure & Audited Smart Contract Development
                </motion.h2>

                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 }}
                  className="text-lg text-white/60 max-w-2xl leading-relaxed"
                >
                  We develop secure, efficient, and audited smart contracts for various blockchain platforms. Our expertise spans Ethereum, Solana, and other major networks, ensuring your decentralized applications are built on a solid foundation.
                </motion.p>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                  className="grid grid-cols-1 sm:grid-cols-2 gap-8 pt-8"
                >
                  <div className="space-y-6">
                    <div className="w-12 h-12 rounded-lg bg-[#141414] border border-[#1A1D1A] flex items-center justify-center">
                      <ScrollText className="w-6 h-6 text-[#4ADE80]" />
                    </div>
                    <h3 className="text-lg text-white font-light">Comprehensive security audits and testing to ensure contract reliability</h3>
                  </div>

                  <div className="space-y-6">
                    <div className="w-12 h-12 rounded-lg bg-[#141414] border border-[#1A1D1A] flex items-center justify-center">
                      <Blocks className="w-6 h-6 text-[#4ADE80]" />
                    </div>
                    <h3 className="text-lg text-white font-light">Gas optimization and efficient contract design for cost-effective operations</h3>
                  </div>
                </motion.div>
              </div>

              {/* Right Column */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="relative lg:sticky lg:top-24 xl:top-32"
              >
                <div className="relative rounded-2xl overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1639762681485-074b7f938ba0?auto=format&fit=crop&q=80&w=2232&ixlib=rb-4.0.3"
                    alt="Smart Contract Development"
                    className="w-full h-auto rounded-2xl"
                  />
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* DeFi Platforms Section */}
        <section id="defi-platforms" className="relative py-40 overflow-hidden scroll-mt-20">
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-[#0C0D0C]" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,100,255,0.02)_0%,transparent_100%)]" />
          </div>

          <div className="relative z-10 max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 xl:gap-24">
              {/* Image Column - First */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="relative lg:sticky lg:top-24 xl:top-32"
              >
                <img
                  src="https://images.unsplash.com/photo-1621761191319-c6fb62004040?auto=format&fit=crop&q=80&w=2232&ixlib=rb-4.0.3"
                  alt="DeFi Platform Development"
                  className="w-full h-auto rounded-2xl"
                />
              </motion.div>

              {/* Content Column */}
              <div className="space-y-8 lg:pt-12">
                <motion.span
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  className="text-sm text-[#4ADE80] tracking-wider uppercase font-medium"
                >
                  DEFI PLATFORMS
                </motion.span>

                <motion.h2
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="text-4xl sm:text-5xl md:text-6xl xl:text-7xl font-light text-white leading-[1.1] tracking-[-0.02em]"
                >
                  Revolutionary DeFi Solutions
                </motion.h2>

                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 }}
                  className="text-lg text-white/60 max-w-2xl leading-relaxed"
                >
                  Build the future of finance with our comprehensive DeFi development services. From decentralized exchanges to lending platforms, we create secure and efficient DeFi solutions that drive innovation in the financial sector.
                </motion.p>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                  className="grid grid-cols-1 sm:grid-cols-2 gap-8 pt-8"
                >
                  <div className="space-y-6">
                    <div className="w-12 h-12 rounded-lg bg-[#141414] border border-[#1A1D1A] flex items-center justify-center">
                      <Blocks className="w-6 h-6 text-[#4ADE80]" />
                    </div>
                    <h3 className="text-lg text-white font-light">Custom DeFi protocol development with advanced security features</h3>
                  </div>

                  <div className="space-y-6">
                    <div className="w-12 h-12 rounded-lg bg-[#141414] border border-[#1A1D1A] flex items-center justify-center">
                      <ArrowUpRight className="w-6 h-6 text-[#4ADE80]" />
                    </div>
                    <h3 className="text-lg text-white font-light">Scalable architecture for high-volume trading and lending operations</h3>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </section>

        {/* Web & Mobile Section */}
        <section id="web-mobile" className="relative py-40 overflow-hidden scroll-mt-20">
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-black" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,100,255,0.02)_0%,transparent_100%)]" />
          </div>

          <div className="relative z-10 max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 xl:gap-24">
              {/* Left Column */}
              <div className="space-y-8">
                <motion.span
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  className="text-sm text-[#4ADE80] tracking-wider uppercase font-medium"
                >
                  WEB & MOBILE
                </motion.span>

                <motion.h2
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="text-4xl sm:text-5xl md:text-6xl xl:text-7xl font-light text-white leading-[1.1] tracking-[-0.02em]"
                >
                  Full-Stack Development Excellence
                </motion.h2>

                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 }}
                  className="text-lg text-white/60 max-w-2xl leading-relaxed"
                >
                  Create exceptional digital experiences with our full-stack web and mobile development services. We build responsive, scalable, and user-friendly applications that engage users and drive business growth.
                </motion.p>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                  className="grid grid-cols-1 sm:grid-cols-2 gap-8 pt-8"
                >
                  <div className="space-y-6">
                    <div className="w-12 h-12 rounded-lg bg-[#141414] border border-[#1A1D1A] flex items-center justify-center">
                      <Globe className="w-6 h-6 text-[#4ADE80]" />
                    </div>
                    <h3 className="text-lg text-white font-light">Modern web applications with cutting-edge technologies and frameworks</h3>
                  </div>

                  <div className="space-y-6">
                    <div className="w-12 h-12 rounded-lg bg-[#141414] border border-[#1A1D1A] flex items-center justify-center">
                      <Zap className="w-6 h-6 text-[#4ADE80]" />
                    </div>
                    <h3 className="text-lg text-white font-light">Native and cross-platform mobile apps for iOS and Android</h3>
                  </div>
                </motion.div>
              </div>

              {/* Right Column */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="relative lg:sticky lg:top-24 xl:top-32"
              >
                <div className="relative rounded-2xl overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=2232&ixlib=rb-4.0.3"
                    alt="Web Development"
                    className="w-full h-auto rounded-2xl"
                  />
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* API & Backend Section */}
        <section id="api-backend" className="relative py-40 overflow-hidden scroll-mt-20">
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-[#0C0D0C]" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,100,255,0.02)_0%,transparent_100%)]" />
          </div>

          <div className="relative z-10 max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 xl:gap-24">
              {/* Image Column - First */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="relative lg:sticky lg:top-24 xl:top-32"
              >
                <img
                  src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&q=80&w=2232&ixlib=rb-4.0.3"
                  alt="Backend Development"
                  className="w-full h-auto rounded-2xl"
                />
              </motion.div>

              {/* Content Column */}
              <div className="space-y-8 lg:pt-12">
                <motion.span
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  className="text-sm text-[#4ADE80] tracking-wider uppercase font-medium"
                >
                  API & BACKEND
                </motion.span>

                <motion.h2
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="text-4xl sm:text-5xl md:text-6xl xl:text-7xl font-light text-white leading-[1.1] tracking-[-0.02em]"
                >
                  Robust Backend Infrastructure
                </motion.h2>

                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 }}
                  className="text-lg text-white/60 max-w-2xl leading-relaxed"
                >
                  Power your applications with scalable and secure backend solutions. We design and implement robust APIs and server architectures that ensure high performance, reliability, and seamless integration.
                </motion.p>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                  className="grid grid-cols-1 sm:grid-cols-2 gap-8 pt-8"
                >
                  <div className="space-y-6">
                    <div className="w-12 h-12 rounded-lg bg-[#141414] border border-[#1A1D1A] flex items-center justify-center">
                      <Zap className="w-6 h-6 text-[#4ADE80]" />
                    </div>
                    <h3 className="text-lg text-white font-light">RESTful and GraphQL APIs with comprehensive documentation</h3>
                  </div>

                  <div className="space-y-6">
                    <div className="w-12 h-12 rounded-lg bg-[#141414] border border-[#1A1D1A] flex items-center justify-center">
                      <Globe className="w-6 h-6 text-[#4ADE80]" />
                    </div>
                    <h3 className="text-lg text-white font-light">Microservices architecture for scalable and maintainable systems</h3>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonial Section */}
        <section className="relative py-40 overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-black" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,100,255,0.02)_0%,transparent_100%)]" />
          </div>

          <motion.div
            className="relative z-10 max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <div className="flex flex-col items-center text-center gap-12 max-w-4xl mx-auto">
              {/* Logo */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="flex justify-center w-full"
              >
                <img
                  src="https://www.warp.dev/static/image/r/w=1920,q=50,format=auto/launch_darkly_482664c6eb.svg"
                  alt="LaunchDarkly"
                  className="h-8 mx-auto"
                />
              </motion.div>

              {/* Content */}
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-3xl sm:text-4xl md:text-5xl font-light text-white leading-[1.1] tracking-[-0.02em] text-center mx-auto"
              >
                Warp keeps me in flow.
              </motion.h2>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-lg text-gray-400/80 max-w-2xl leading-relaxed text-center mx-auto"
              >
                Warp has been the one tool I've continuously reached for time and time again. It's helped me level up my skills as a developer, and it keeps me in the flow thanks to the ability to ask questions right from the command line.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="flex flex-col items-center gap-4"
              >
                <img
                  src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=120&h=120"
                  alt="Erin Mikail Staples"
                  className="w-14 h-14 rounded-full object-cover"
                />
                <div className="text-center">
                  <h3 className="text-white text-base font-medium">Erin Mikail Staples</h3>
                  <p className="text-gray-400 text-sm">Developer Experience Engineer at LaunchDarkly</p>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </section>

        {/* Let's chat section */}
        <div className="relative py-40 overflow-hidden flex flex-col items-center justify-center">
          <div className="absolute inset-0 w-full max-w-[1600px] mx-auto whitespace-nowrap text-[8vw] font-light text-white pointer-events-none select-none flex items-center">
            <div className="flex animate-marquee">
              Let's chat — hi@echortech.com — Let's chat — hi@echortech.com —
            </div>
            <div className="flex animate-marquee2">
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
