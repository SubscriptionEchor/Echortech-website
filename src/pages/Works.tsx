import React from 'react';
import { motion } from 'framer-motion';
import Layout from '../components/Layout';
import { ArrowUpRight, Filter, ArrowRight } from 'lucide-react';

interface WorkCard {
  title: string;
  image: string;
  year: string;
  category: string;
  industry?: string;
  services?: string[];
}

const works: WorkCard[] = [
  {
    title: "Culinary Canvas",
    image: "https://images.unsplash.com/photo-1555421689-491a97ff2040?auto=format&fit=crop&q=80&w=2000",
    year: "2024",
    category: "Web design",
    services: ["UI/UX Design", "Web Development", "Branding"]
  },
  {
    title: "Fintech Flow",
    image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&q=80&w=2000",
    year: "2023",
    category: "Mobile app",
    industry: "Fintech",
    services: ["Mobile Development", "UI/UX Design", "Backend Development"]
  },
  {
    title: "Health Hub",
    industry: "Healthcare",
    image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=2000",
    year: "2023",
    category: "Web platform",
    services: ["Web Development", "UI/UX Design", "DevOps"]
  },
  {
    title: "Crypto Clarity",
    industry: "Web3",
    image: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?auto=format&fit=crop&q=80&w=2000",
    year: "2024",
    category: "Web3 app",
    services: ["Blockchain Development", "Smart Contracts", "Frontend Development"]
  },
  {
    title: "Urban Move",
    industry: "Transportation",
    image: "https://images.unsplash.com/photo-1556122071-e404eaedb77f?auto=format&fit=crop&q=80&w=2000",
    year: "2023",
    category: "Mobile app",
    services: ["Mobile Development", "UI/UX Design", "Backend Development"]
  }
];

const categories = ["All", "Web", "Mobile", "Web3", "Branding"];
const industries = ["All Industries", "Fintech", "Healthcare", "Transportation", "Web3"];
const Works = () => {
  const [selectedCategory, setSelectedCategory] = React.useState("All");
  const [selectedIndustry, setSelectedIndustry] = React.useState("All Industries");

  return (
    <Layout>
      <section className="pt-32 pb-24 bg-black relative">
        {/* Background gradient */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(99,102,241,0.08)_0%,transparent_100%)]" />
        </div>

        <div className="max-w-[90rem] mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header Section */}
          <div className="mb-16">
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-[#4ADE80] text-sm font-medium tracking-wider uppercase mb-4 block"
            >
              Our Portfolio
            </motion.span>
            
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-5xl md:text-7xl font-medium text-white mb-6"
            >
              Selected Works
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-xl text-gray-400 max-w-2xl"
            >
              Explore our portfolio of innovative digital solutions across various industries
            </motion.p>
          </div>

          {/* Filters */}
          <div className="flex flex-col md:flex-row gap-6 mb-16">
            <div className="flex items-center gap-4">
              <Filter className="w-5 h-5 text-gray-400" />
              <div className="flex flex-wrap gap-2">
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`px-4 py-2 rounded-full text-sm transition-colors ${
                      selectedCategory === category
                        ? 'bg-white text-black'
                        : 'bg-white/5 text-white hover:bg-white/10'
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>
            
            <div className="flex items-center gap-4">
              <div className="flex flex-wrap gap-2">
                {industries.map((industry) => (
                  <button
                    key={industry}
                    onClick={() => setSelectedIndustry(industry)}
                    className={`px-4 py-2 rounded-full text-sm transition-colors ${
                      selectedIndustry === industry
                        ? 'bg-[#4ADE80] text-black'
                        : 'bg-white/5 text-white hover:bg-white/10'
                    }`}
                  >
                    {industry}
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-32">
            {works.map((work, index) => (
              <motion.div
                key={work.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="group relative rounded-[2rem] bg-gradient-to-b from-white/5 to-transparent p-[1px] backdrop-blur-3xl"
              >
                <a href="#" className="block relative rounded-[2rem] bg-black overflow-hidden">
                  {/* Image Container */}
                  <div className="relative overflow-hidden rounded-[20px] bg-[#141414]">
                    <motion.img
                      src={work.image}
                      alt={work.title}
                      className="w-full aspect-[1.91/1] object-cover opacity-90"
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.6, ease: [0.33, 1, 0.68, 1] }}
                    />
                  </div>

                  {/* Content */}
                  <div className="p-8">
                    <h2 className="text-[2.5rem] font-normal text-white mb-2 tracking-[-0.02em]">
                      {work.title}
                    </h2>
                    <div className="flex items-center gap-2 text-gray-400 text-lg mb-6">
                      <span>{work.category}</span>
                      <span>·</span>
                      <span>{work.year}</span>
                    </div>
                    
                    {/* Services */}
                    {work.services && (
                      <div className="flex flex-wrap gap-2">
                        {work.services.map((service) => (
                          <span
                            key={service}
                            className="px-3 py-1 rounded-full bg-white/5 text-white/80 text-sm"
                          >
                            {service}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                  
                  {/* Industry Label */}
                  {work.industry && (
                    <div className="absolute top-6 left-6 px-4 py-2 rounded-full bg-black/30 backdrop-blur-sm text-white text-sm">
                      {work.industry}
                    </div>
                  )}
                  
                  {/* See Case Button */}
                  <div className="absolute top-6 right-6">
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="px-5 py-2.5 rounded-full bg-white text-black text-base font-normal hover:bg-gray-100 transition-colors flex items-center gap-2"
                    >
                      See case
                      <ArrowUpRight className="w-4 h-4" />
                    </motion.button>
                  </div>
                </a>
              </motion.div>
            ))}
          </div>
          
          {/* Contact CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-32 text-center"
          >
            <h2 className="text-3xl md:text-4xl font-medium text-white mb-6">
              Ready to start your project?
            </h2>
            <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
              Let's discuss your project and see how we can help you achieve your goals
            </p>
            <motion.a
              href="/contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center px-8 py-4 rounded-full bg-white text-black hover:bg-gray-100 transition-colors text-lg font-medium"
            >
              Start a Project
              <ArrowRight className="ml-2 w-5 h-5" />
            </motion.a>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Works;