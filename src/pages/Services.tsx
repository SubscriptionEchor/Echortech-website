import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Bot, Cpu, ScrollText, Blocks, Globe, Zap, ArrowUpRight } from 'lucide-react';
import Layout from '../components/Layout';

const serviceCategories = [
  {
    title: "AI & ML",
    services: [
      {
        icon: <Bot className="w-8 h-8" />,
        title: "Custom AI Solutions",
        description: "LLMs, Computer Vision & NLP models. We develop cutting-edge AI solutions tailored to your specific business needs.",
        link: "/services/ai/custom-solutions"
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
          
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="max-w-[1400px] mx-auto"
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

          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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

        {/* Testimonial Section */}
        <section className="relative py-40 overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-black" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,100,255,0.02)_0%,transparent_100%)]" />
          </div>

          <motion.div
            className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <div className="flex flex-col items-center text-center gap-12">
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

        {/* Services Categories */}
        <section className="py-40">
          <div className="container mx-auto px-4 max-w-[1600px]">
            {serviceCategories.map((category, categoryIndex) => (
              <div key={category.title} className="mb-24 last:mb-0">
                <motion.h2
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: categoryIndex * 0.1 }}
                  className="text-[#4ADE80] text-sm font-medium tracking-wider uppercase mb-12"
                >
                  {category.title}
                </motion.h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 xl:gap-12">
                  {category.services.map((service, serviceIndex) => (
                    <motion.div
                      key={service.title}
                      initial={{ opacity: 0, y: 40 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: (categoryIndex * 0.2) + (serviceIndex * 0.1) }}
                      className="group relative"
                    >
                      <div className="relative rounded-2xl bg-gradient-to-b from-white/5 to-transparent p-[1px] backdrop-blur-3xl">
                        <a 
                          href={service.link}
                          className="block relative rounded-2xl bg-black/50 backdrop-blur-xl p-8 h-full transition-all duration-300"
                        >
                          <div className="flex flex-col h-full">
                            <div className="mb-8 text-[#4ADE80]">
                              {service.icon}
                            </div>
                            
                            <h3 className="text-2xl xl:text-3xl font-light text-white mb-4">
                              {service.title}
                            </h3>
                            
                            <p className="text-gray-400/80 text-base xl:text-lg mb-8 leading-relaxed font-light">
                              {service.description}
                            </p>
                            
                            <div className="mt-auto">
                              <button className="group/btn w-fit px-6 py-3 xl:px-8 xl:py-4 rounded-full border border-white/10 text-white hover:bg-white/5 transition-all duration-300 text-sm xl:text-base font-medium inline-flex items-center gap-2">
                                Learn more
                                <ArrowUpRight className="w-4 h-4 transition-transform group-hover/btn:rotate-45" />
                              </button>
                            </div>
                          </div>
                        </a>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Let's chat section */}
        <div className="relative py-40 overflow-hidden flex flex-col items-center justify-center">
          <div className="absolute inset-0 w-full whitespace-nowrap text-[8vw] font-light text-white pointer-events-none select-none flex items-center">
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