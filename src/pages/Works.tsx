import React from 'react';
import Layout from '../components/Layout';
import { Mail, ArrowUpRight, ChevronDown } from 'lucide-react';
import { motion, useScroll, useTransform, useSpring, MotionValue } from 'framer-motion';

const useParallax = (value: MotionValue<number>, distance: number) => {
  return useTransform(value, [0, 1], [-distance, distance]);
};

interface Project {
  title: string;
  description: string;
  image: string;
  category: string;
  year: string;
}

const projects: Project[] = [
  {
    title: "PuntoPago",
    description: "Super App in Latin America",
    image: "https://cuberto.com/assets/projects/puntopago/cover@2x.jpg",
    category: "Mobile App",
    year: "2024"
  },
  {
    title: "Kzero",
    description: "A digital healthcare transformation",
    image: "https://cuberto.com/assets/projects/kzero/cover@2x.jpg",
    category: "Web Platform",
    year: "2023"
  },
  {
    title: "FlipaClip",
    description: "The best tool for step-motion animation",
    image: "https://cuberto.com/assets/projects/flipaclip/cover@2x.jpg",
    category: "Web App",
    year: "2024"
  },
  {
    title: "Riyadh",
    description: "Official website of Riyadh, Saudi Arabia's capital",
    image: "https://cuberto.com/assets/projects/riyadh/cover@2x.jpg",
    category: "Web Platform",
    year: "2023"
  },
  {
    title: "Zelt",
    description: "HR management platform",
    image: "https://cuberto.com/assets/projects/zelt/cover@2x.jpg",
    category: "SaaS",
    year: "2024"
  }
];

const Works = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const scrollToProjects = () => {
    const projectsSection = document.getElementById('projects-section');
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <Layout>
      <div className="min-h-screen bg-black selection:bg-white/20">
        {/* Progress Bar */}
        <motion.div
          className="fixed top-0 left-0 right-0 h-1 bg-white/20 origin-[0%] z-50"
          style={{ scaleX }}
        />

        {/* Hero Section */}
        <section className="min-h-screen relative flex flex-col justify-between py-32">
          <div className="absolute inset-0">
            <div className="absolute inset-0">
              <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(0,0,0,0.8),transparent_50%)]" />
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(99,102,241,0.02)_0%,transparent_100%)]" />
            </div>
          </div>
          
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ 
                duration: 0.8,
                type: "spring",
                stiffness: 100,
                damping: 20
              }}
              className="space-y-4"
            >
              <h1 className="text-[12vw] sm:text-[10vw] md:text-[8vw] font-light text-white/80 leading-[0.9] tracking-[-0.02em]">
                projects
              </h1>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ 
                delay: 0.3,
                duration: 0.8,
                type: "spring",
                stiffness: 100,
                damping: 20
              }}
              className="mt-32 max-w-4xl"
            >
              <p
                className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extralight text-white/60 leading-[1.2] tracking-[-0.02em]"
              >
                I help startups and series A—D teams to establish a strong connection between their product and customers
              </p>
            </motion.div>
          </div>

          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.button
              onClick={scrollToProjects}
              type="button"
              initial={{ opacity: 0 }}
              animate={{ 
                opacity: 1,
                y: [0, 10, 0],
                transition: {
                  repeat: Infinity,
                  duration: 2
                }
              }}
              transition={{ delay: 0.4 }}
              whileHover={{ y: 5 }}
              className="flex items-center gap-4 text-white/60 hover:text-white/80 transition-colors group cursor-pointer w-auto"
            >
              <div className="flex items-center gap-4">
                <div className="h-px w-12 bg-current" />
                <span className="text-sm font-light tracking-wide">Scroll to explore</span>
                <ChevronDown className="w-4 h-4 animate-bounce" />
              </div>
            </motion.button>
          </div>
        </section>

        {/* Projects Grid */}
        <section id="projects-section" className="py-16 scroll-mt-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 sm:gap-16">
              {projects.map((project, index) => (
                <motion.div
                  key={project.title}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ 
                    once: true,
                    margin: "-100px"
                  }}
                  transition={{ 
                    duration: 0.8,
                    type: "spring",
                    bounce: 0.2
                  }}
                  className={`group relative flex flex-col ${
                    index % 2 === 1 ? 'sm:mt-48' : ''
                  }`}
                >
                  <div className="relative rounded-2xl bg-gradient-to-b from-white/5 to-transparent p-[1px] backdrop-blur-3xl h-full">
                    <a href="#" className="block relative rounded-2xl bg-black overflow-hidden h-full">
                      {/* Image Container */}
                      <div className="relative overflow-hidden rounded-2xl bg-[#141414]">
                        <motion.img
                          src={project.image}
                          alt={project.title}
                          className="w-full aspect-square object-cover opacity-90"
                          whileHover={{ 
                            scale: 1.05,
                            transition: {
                              duration: 0.6,
                              ease: [0.33, 1, 0.68, 1]
                            }
                          }}
                          transition={{ duration: 0.6, ease: [0.33, 1, 0.68, 1] }}
                        />
                        <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors" />
                      </div>

                      {/* Project Content */}
                      <div className="p-4 sm:p-6">
                        <h2 className="text-2xl font-normal text-white mb-2 tracking-[-0.02em]">
                          {project.title}
                        </h2>
                        <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-2 text-gray-400 text-sm">
                          <span className="text-gray-400 line-clamp-1">{project.description}</span>
                          <div className="hidden sm:flex items-center gap-2">
                            <span>·</span>
                            <span>{project.category}</span>
                            <span>·</span>
                            <span>{project.year}</span>
                          </div>
                          <div className="flex items-center gap-2 sm:hidden text-xs opacity-60">
                            <span>{project.category}</span>
                            <span>·</span>
                            <span>{project.year}</span>
                          </div>
                        </div>
                      </div>
                    </a>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Let's chat section */}
        <div className="relative py-20 sm:py-32 overflow-hidden flex flex-col items-center justify-center">
          <div className="absolute inset-0 w-full whitespace-nowrap text-[10vw] sm:text-[8vw] font-normal text-white pointer-events-none select-none flex items-center">
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
              whileTap={{ 
                scale: 0.95,
                transition: {
                  type: "spring",
                  stiffness: 400
                }
              }}
              className="w-24 h-24 sm:w-32 sm:h-32 rounded-full bg-white flex items-center justify-center group transition-all duration-300 hover:shadow-[0_0_50px_rgba(255,255,255,0.3)] mx-auto"
            >
              <Mail className="w-6 h-6 sm:w-8 sm:h-8 text-black transition-transform duration-300 group-hover:scale-110" />
            </motion.button>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Works;