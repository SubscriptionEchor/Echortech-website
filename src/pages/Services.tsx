import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Code, Palette, Bot, Database, Lock, Braces } from 'lucide-react';
import Layout from '../components/Layout';

const services = [
  {
    icon: <Bot className="w-8 h-8" />,
    title: "AI & Machine Learning",
    description: "Custom AI solutions including LLMs, computer vision & NLP models. We help businesses leverage artificial intelligence to automate processes and gain insights.",
    link: "/services/ai"
  },
  {
    icon: <Braces className="w-8 h-8" />,
    title: "Web3 Development",
    description: "Building decentralized applications, smart contracts, and blockchain solutions. From DeFi to NFTs, we're at the forefront of Web3 innovation.",
    link: "/services/web3"
  },
  {
    icon: <Code className="w-8 h-8" />,
    title: "Full-Stack Development",
    description: "End-to-end development solutions, from frontend and backend to cloud infrastructure, ensuring seamless integration and optimal performance.",
    link: "/services/development"
  },
  {
    icon: <Palette className="w-8 h-8" />,
    title: "UX/UI Design",
    description: "Creating intuitive and beautiful user experiences through research-driven design. We focus on user-centered design principles to deliver engaging interfaces.",
    link: "/services/design"
  },
  {
    icon: <Database className="w-8 h-8" />,
    title: "Cloud Solutions",
    description: "Scalable cloud infrastructure and DevOps practices. We help businesses migrate, optimize, and manage their cloud presence effectively.",
    link: "/services/cloud"
  },
  {
    icon: <Lock className="w-8 h-8" />,
    title: "Security & Auditing",
    description: "Comprehensive security audits and implementations. We ensure your applications are protected against vulnerabilities and comply with standards.",
    link: "/services/security"
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

        {/* Services Grid */}
        <section className="py-32 relative">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              {services.map((service, index) => (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                  className="group relative"
                >
                  <div className="relative">
                    <a 
                      href={service.link}
                      className="block relative p-8 h-full transition-all duration-300"
                    >
                      <div className="flex flex-col h-full">
                        <div className="mb-8 text-[#4ADE80]">
                          {service.icon}
                        </div>
                        
                        <h3 className="text-3xl font-light text-white mb-6 tracking-tight">
                          {service.title}
                        </h3>
                        
                        <p className="text-gray-400/80 text-lg mb-6 leading-relaxed">
                          {service.description}
                        </p>
                        
                        <button className="w-fit px-8 py-4 rounded-full border border-white/10 text-white hover:bg-white/5 transition-all duration-300 text-sm font-medium">
                          Find out more
                        </button>
                      </div>
                    </a>
                  </div>
                </motion.div>
              ))}
            </div>
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