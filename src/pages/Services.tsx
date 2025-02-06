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
        <section className="pt-32 pb-24 relative">
          <div className="absolute inset-0">
            <div className="absolute inset-0" />
          </div>
          
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="max-w-4xl"
            >
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className="text-6xl sm:text-8xl font-light text-white mb-12 leading-[1.1] tracking-[-0.02em]"
              >
                Services
              </motion.h1>
              
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className="text-xl text-gray-400/80 max-w-3xl leading-relaxed"
              >
                From AI development to blockchain solutions; innovative design to technical consultancy, 
                we have services to empower every business and every vision.
              </motion.p>
            </motion.div>
          </div>
        </section>

        {/* Services Categories */}
        <section className="py-16">
          <div className="container mx-auto px-4">
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

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
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
                            
                            <h3 className="text-2xl font-medium text-white mb-4">
                              {service.title}
                            </h3>
                            
                            <p className="text-gray-400/80 text-base mb-8 leading-relaxed">
                              {service.description}
                            </p>
                            
                            <div className="mt-auto">
                              <button className="group/btn w-fit px-6 py-3 rounded-full border border-white/10 text-white hover:bg-white/5 transition-all duration-300 text-sm font-medium inline-flex items-center gap-2">
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
        <div className="relative py-32 overflow-hidden flex flex-col items-center justify-center">
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