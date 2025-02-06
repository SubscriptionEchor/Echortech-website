import Hero from "./assets/images/hero-main.svg";
import React, { useState, useRef } from "react";
import Layout from "./components/Layout";
import { Plus, Minus, Mail, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

interface PillData {
  text: string;
  color: string;
  position: string;
  delay: number;
  videoUrl: string;
}

const App = () => {
  const [activeVideo, setActiveVideo] = useState<string | null>(null);
  const [cardPosition, setCardPosition] = useState({ x: 0, y: 0 });
  const pillRefs = useRef<(HTMLDivElement | null)[]>([]);

  // ✅ FIX: Closing curly brace for handleEmailClick function
  const handleEmailClick = () => {
    window.location.href = "mailto:hi@echortech.com";
  };

  const handlePillHover = (index: number) => {
    const pill = pillRefs.current[index];
    if (pill) {
      const rect = pill.getBoundingClientRect();
      const viewportWidth = window.innerWidth;
      const viewportHeight = window.innerHeight;

      const cardWidth = 300;
      const cardHeight = 400;

      let x = rect.right + 20;
      let y = rect.top;

      if (x + cardWidth > viewportWidth - 20) {
        x = rect.left - cardWidth - 20;
      }

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
      text: "AI Bots",
      color: "bg-[#4ADE80]",
      position: "absolute top-[10%] left-[5%]",
      delay: 0,
      videoUrl:
        "https://cdn.prod.website-files.com/66bc64513c57e27bbe6bcd9c%2F66f45966f7cb7f7510e88350_Weem-transcode.mp4",
    },
    {
      text: "NLP",
      color: "bg-[#818CF8]",
      position: "absolute top-[10%] left-[28%]",
      delay: 0.4,
      videoUrl:
        "https://cdn.prod.website-files.com/66bc64513c57e27bbe6bcd9c%2F66f45966f7cb7f7510e88350_Weem-transcode.mp4",
    },
  ];

  return (
    <Layout>
      <main className="min-h-screen bg-black text-white">
        {/* Header Text */}
        <div className="text-center pt-32 pb-16 px-4">
          <div className="text-sm text-gray-400 mb-2">
            AI + Product Design Agency // Hyderabad
          </div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ 
              duration: 0.8,
              type: "spring",
              stiffness: 100,
              damping: 20
            }}
            className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-light text-white/80 leading-[1.1] tracking-[-0.02em] mb-12"
          >
            UX-First Design Agency
            <br />
            for B2B + AI Companies
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ 
              delay: 0.3,
              duration: 0.8,
              type: "spring",
              stiffness: 100,
              damping: 20
            }}
            className="text-lg sm:text-xl md:text-2xl font-light text-white/60 leading-relaxed space-x-2 max-w-3xl mx-auto"
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
        <div className="container mx-auto px-4 pt-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="relative rounded-2xl overflow-hidden aspect-video bg-[#1A1A1A] group w-full"
          >
            <video
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-cover"
            >
              <source
                src="https://lazarev.kiev.ua/la24/la-reel--min.mp4"
                type="video/mp4"
              />
            </video>
          </motion.div>
        </div>
      </main>

      {/* Who We Are Section */}
      <section className="py-32 bg-black relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(99,102,241,0.08)_0%,transparent_100%)]" />
        </div>

        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-5xl mx-auto text-center space-y-12"
          >
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-2xl md:text-4xl font-normal tracking-wide text-white/90 leading-[1.6] max-w-4xl mx-auto"
            >
              As a full-service UX design agency, we work directly with our
              clients to define, design, and No-Code develop cutting-edge user
              experiences across all brand platforms and touchpoints.
            </motion.h2>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="pt-6"
            >
              <motion.a
                href="/contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center px-6 py-3 bg-white text-black rounded-full text-base font-medium hover:bg-gray-100 transition-colors"
              >
                Let's Collaborate
                <ArrowRight className="ml-2 w-5 h-5" />
              </motion.a>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Work Section */}
      <section className="py-32 bg-black relative overflow-hidden">
        <div className="relative">
          <div className="overflow-hidden w-full">
            <div className="flex gap-8 animate-scroll">
              {[...Array(2)]
                .map(() => [
                  {
                    image:
                      "https://www.framer.com/creators-assets/_next/image/?url=https%3A%2F%2Fy4pdgnepgswqffpt.public.blob.vercel-storage.com%2Ftemplates%2F49627%2Fassistance-sJgMxFgkriNNw8cUwybQr7XxC4Sk9o&w=640&q=100",
                  },
                  {
                    image:
                      "https://www.framer.com/creators-assets/_next/image/?url=https%3A%2F%2Fy4pdgnepgswqffpt.public.blob.vercel-storage.com%2Ftemplates%2F49627%2Fassistance-sJgMxFgkriNNw8cUwybQr7XxC4Sk9o&w=640&q=100",
                  },
                  {
                    image:
                      "https://www.framer.com/creators-assets/_next/image/?url=https%3A%2F%2Fy4pdgnepgswqffpt.public.blob.vercel-storage.com%2Ftemplates%2F49627%2Fassistance-sJgMxFgkriNNw8cUwybQr7XxC4Sk9o&w=640&q=100",
                  },
                  {
                    image:
                      "https://www.framer.com/creators-assets/_next/image/?url=https%3A%2F%2Fy4pdgnepgswqffpt.public.blob.vercel-storage.com%2Ftemplates%2F49627%2Fassistance-sJgMxFgkriNNw8cUwybQr7XxC4Sk9o&w=640&q=100",
                  },
                ])
                .flat()
                .map((work, index) => (
                  <div
                    key={index}
                    className="relative flex-shrink-0 w-[400px] group cursor-pointer"
                  >
                    <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-black/20">
                      <img
                        src={work.image}
                        alt="Project"
                        className="absolute inset-0 w-full h-full object-cover transition-all duration-500 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 opacity-0 group-hover:opacity-100 transition-all duration-500" />
                      <div className="absolute inset-0 bg-blue-500/20 mix-blend-overlay opacity-0 group-hover:opacity-100 transition-all duration-500" />
                      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-center justify-center">
                        <span className="px-6 py-2 bg-white/10 backdrop-blur-sm rounded-lg text-white border border-white/20 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500">
                          View Project
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-32 bg-black relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8 mb-20"
          >
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-4xl md:text-5xl font-medium text-white"
            >
              Our Solutions
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-xl text-white max-w-4xl"
            >
              Whether you need to design your first MVP to get funding, redesign
              your product to improve business metrics, or get a remote design
              team to grow faster - our product designers are here to help.
            </motion.p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                label: "FOR STARTUPS",
                title: "MVP Design",
                description:
                  "Create a digital product, attract investors and new clients",
                gradient: "from-[#E4D7FF] to-[#D7DEFF]",
                icon: "https://framerusercontent.com/images/psdpn5uV0mzKkOD5mWiPfZ3mo.png",
              },
              {
                label: "FOR STARTUPS & EXISTING COMPANIES",
                title: "Product Redesign",
                description:
                  "Get a fresh look, improved user experience, or enhanced functionality",
                gradient: "from-[#E9D7FF] to-[#D7E4FF]",
                icon: "https://framerusercontent.com/images/PIlOMNJgWkDXjuZ6YhFXLCFaA.png",
              },
              {
                label: "FOR EXISTING COMPANIES",
                title: "Team Extension",
                description:
                  "Expand your team with our dedicated and talented design experts",
                gradient: "from-[#EBFFB0] to-[#D0FF94]",
                icon: "https://framerusercontent.com/images/Ry1tKKT9ztEVxDPwxjGWkFn4.png",
              },
            ].map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                  transition: {
                    delay: index * 0.1,
                    duration: 0.6,
                  },
                }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
                className="group relative transform transition-all duration-300"
              >
                <div
                  className={`p-8 rounded-3xl bg-gradient-to-br ${
                    service.gradient
                  } h-full transition-all duration-300 hover:shadow-2xl hover:shadow-${
                    service.gradient.split("-")[2]
                  }/20`}
                >
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
                      <p className="text-black/80">{service.description}</p>
                    </div>

                    <motion.a
                      href="#"
                      whileHover={{ gap: "1rem" }}
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
        {/* Design Section */}
        <div className="py-40 bg-black relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-16">
            <div className="grid grid-cols-1 lg:grid-cols-[300px,1fr] xl:grid-cols-[400px,1fr] gap-8 lg:gap-20 xl:gap-40">
              <div className="flex items-start">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                >
                  <div className="space-y-2 sm:space-y-4">
                    <span className="text-white/40 text-sm font-medium tracking-wider uppercase block">
                      01
                    </span>
                    <h2 className="text-4xl sm:text-5xl lg:text-[5.5rem] font-medium tracking-tight text-white leading-none">
                      Design
                    </h2>
                  </div>
                </motion.div>
              </div>

              {/* Right Side - Content */}
              <div className="space-y-20 lg:space-y-40">
                {/* Description and Button */}
                <div className="space-y-8 pt-[0.65rem]">
                  <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-xl text-white/80 font-light max-w-2xl leading-relaxed mt-2"
                  >
                    We work hard to create eye-catching and intuitive interface
                    designs that provide users with an enjoyable experience.
                  </motion.p>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                  >
                    <a
                      href="/works"
                      className="inline-flex items-center justify-center px-8 py-3 border border-white/20 rounded-full hover:bg-white/5 transition-all duration-300 group"
                    >
                      <span className="text-white text-sm font-medium">
                        View More
                      </span>
                    </a>
                  </motion.div>
                </div>
                {/* Services Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 lg:gap-16">
                  {/* Websites and Platforms */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="space-y-6 max-w-xl"
                  >
                    <h3 className="text-[1.75rem] font-medium text-white leading-tight min-h-[4.5rem]">
                      Websites and
                      <br />
                      Platforms
                    </h3>
                    <p className="text-base text-white/60 leading-relaxed">
                      We are ready to work on projects of any complexity and
                      size. With our software development company's profound
                      design experience, we can create both one-page sites and
                      complex admin panels with several dashboards.
                    </p>
                  </motion.div>

                  {/* Mobile Apps */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 }}
                    className="space-y-6 max-w-xl"
                  >
                    <h3 className="text-[1.75rem] font-light text-white leading-tight min-h-[4.5rem]">
                      Mobile Apps
                    </h3>
                    <p className="text-base text-white/60 leading-relaxed font-light">
                      We create interfaces that are not only good-looking, but
                      also simple and easy to use. We also follow platform
                      guidelines to make sure the design runs on every screen.
                    </p>
                  </motion.div>

                  {/* Strategy and Branding */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                    className="space-y-6 max-w-xl"
                  >
                    <h3 className="text-[1.75rem] font-light text-white leading-tight min-h-[4.5rem]">
                      Strategy and
                      <br />
                      Branding
                    </h3>
                    <p className="text-base text-white/60 leading-relaxed font-light">
                      We develop logos, corporate identities, user manuals,
                      mockups, and souvenirs consistent with your brand's style
                      and mission.
                    </p>
                  </motion.div>

                  {/* Design Concept */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 }}
                    className="space-y-6 max-w-xl"
                  >
                    <h3 className="text-[1.75rem] font-light text-white leading-tight min-h-[4.5rem]">
                      Design
                      <br />
                      Concept
                    </h3>
                    <p className="text-base text-white/60 leading-relaxed font-light">
                      We will create a design concept that will become a solid
                      foundation for the future digital product. Well-built
                      design concepts help to turn awesome business ideas into
                      attractive and eye-catching apps and sites.
                    </p>
                  </motion.div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Development Section */}
        <div className="py-40 bg-black relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-16">
            <div className="grid grid-cols-1 lg:grid-cols-[300px,1fr] xl:grid-cols-[400px,1fr] gap-8 lg:gap-20 xl:gap-40">
              <div className="flex items-start">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                >
                  <div className="space-y-2 sm:space-y-4">
                    <span className="text-white/40 text-base font-light tracking-wide block">
                      02
                    </span>
                    <h2 className="text-4xl sm:text-5xl lg:text-[5.5rem] font-light tracking-tight text-white leading-none">
                      Development
                    </h2>
                  </div>
                </motion.div>
              </div>

              {/* Right Side - Content */}
              <div className="space-y-20 lg:space-y-40">
                {/* Description and Button */}
                <div className="space-y-8 pt-[0.65rem]">
                  <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-lg text-white/80 font-light max-w-2xl leading-relaxed mt-2"
                  >
                    We build scalable, high-performance applications using
                    cutting-edge technologies and best practices in software
                    development.
                  </motion.p>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                  >
                    <a
                      href="/works"
                      className="inline-flex items-center justify-center px-8 py-3 border border-white/20 rounded-full hover:bg-white/5 transition-all duration-300 group"
                    >
                      <span className="text-white text-sm font-light">
                        View More
                      </span>
                    </a>
                  </motion.div>
                </div>
                {/* Services Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 lg:gap-16">
                  {/* AI & Machine Learning */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="space-y-6 max-w-xl relative group"
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-[#4ADE80]/10 to-transparent rounded-3xl -m-6 p-6 opacity-0 group-hover:opacity-100 transition-opacity" />
                    <h3 className="text-[1.75rem] font-light text-white leading-tight min-h-[4.5rem]">
                      AI & Machine
                      <br />
                      Learning
                    </h3>
                    <p className="text-base text-white/60 leading-relaxed font-light relative">
                      We specialize in developing cutting-edge AI solutions,
                      from machine learning models to natural language
                      processing systems, helping businesses automate and
                      innovate.
                    </p>
                  </motion.div>

                  {/* Web3 Development */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 }}
                    className="space-y-6 max-w-xl relative group"
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-[#A78BFA]/10 to-transparent rounded-3xl -m-6 p-6 opacity-0 group-hover:opacity-100 transition-opacity" />
                    <h3 className="text-[1.75rem] font-light text-white leading-tight min-h-[4.5rem]">
                      Web3
                      <br />
                      Development
                    </h3>
                    <p className="text-base text-white/60 leading-relaxed font-light relative">
                      We build decentralized applications, smart contracts, and
                      Web3 platforms using the latest blockchain technologies
                      and security best practices.
                    </p>
                  </motion.div>

                  {/* Blockchain Solutions */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                    className="space-y-6 max-w-xl relative group"
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-[#60A5FA]/10 to-transparent rounded-3xl -m-6 p-6 opacity-0 group-hover:opacity-100 transition-opacity" />
                    <h3 className="text-[1.75rem] font-light text-white leading-tight min-h-[4.5rem]">
                      Blockchain
                      <br />
                      Solutions
                    </h3>
                    <p className="text-base text-white/60 leading-relaxed font-light relative">
                      We develop custom blockchain solutions including DeFi
                      protocols, NFT marketplaces, and enterprise blockchain
                      applications with a focus on scalability and security.
                    </p>
                  </motion.div>

                  {/* Full-Stack Development */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 }}
                    className="space-y-6 max-w-xl"
                  >
                    <h3 className="text-[1.75rem] font-light text-white leading-tight min-h-[4.5rem]">
                      Full-Stack
                      <br />
                      Development
                    </h3>
                    <p className="text-base text-white/60 leading-relaxed font-light">
                      We deliver end-to-end development solutions, from frontend
                      and backend to cloud infrastructure, ensuring seamless
                      integration and optimal performance.
                    </p>
                  </motion.div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Maintenance Section */}
        <div className="py-40 bg-black relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-16">
            <div className="grid grid-cols-1 lg:grid-cols-[300px,1fr] xl:grid-cols-[400px,1fr] gap-8 lg:gap-20 xl:gap-40">
              <div className="flex items-start">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                >
                  <div className="space-y-2 sm:space-y-4">
                    <span className="text-white/40 text-base font-light tracking-wide block">
                      03
                    </span>
                    <h2 className="text-4xl sm:text-5xl lg:text-[5.5rem] font-light tracking-tight text-white leading-none">
                      Maintenance
                    </h2>
                  </div>
                </motion.div>
              </div>

              {/* Right Side - Content */}
              <div className="space-y-20 lg:space-y-40">
                {/* Description and Button */}
                <div className="space-y-8 pt-[0.65rem]">
                  <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-lg text-white/80 font-light max-w-2xl leading-relaxed mt-2"
                  >
                    We provide comprehensive maintenance and support services to
                    ensure your applications remain secure, performant, and
                    up-to-date.
                  </motion.p>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                  >
                    <a
                      href="/works"
                      className="inline-flex items-center justify-center px-8 py-3 border border-white/20 rounded-full hover:bg-white/5 transition-all duration-300 group"
                    >
                      <span className="text-white text-sm font-light">
                        View More
                      </span>
                    </a>
                  </motion.div>
                </div>
                {/* Services Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 lg:gap-16">
                  {/* Technical Support */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="space-y-6 max-w-xl"
                  >
                    <h3 className="text-[1.75rem] font-light text-white leading-tight min-h-[4.5rem]">
                      Technical
                      <br />
                      Support
                    </h3>
                    <p className="text-base text-white/60 leading-relaxed font-light">
                      We provide 24/7 technical support to address any issues
                      that arise, ensuring minimal downtime and maximum user
                      satisfaction.
                    </p>
                  </motion.div>

                  {/* Performance Optimization */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 }}
                    className="space-y-6 max-w-xl"
                  >
                    <h3 className="text-[1.75rem] font-light text-white leading-tight min-h-[4.5rem]">
                      Performance
                      <br />
                      Optimization
                    </h3>
                    <p className="text-base text-white/60 leading-relaxed font-light">
                      We continuously monitor and optimize your applications to
                      ensure they perform at their best, handling increased
                      loads and user demands.
                    </p>
                  </motion.div>

                  {/* Security Updates */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                    className="space-y-6 max-w-xl"
                  >
                    <h3 className="text-[1.75rem] font-light text-white leading-tight min-h-[4.5rem]">
                      Security
                      <br />
                      Updates
                    </h3>
                    <p className="text-base text-white/60 leading-relaxed font-light">
                      We keep your applications secure with regular security
                      audits, updates, and patches to protect against the latest
                      vulnerabilities.
                    </p>
                  </motion.div>

                  {/* Feature Enhancement */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 }}
                    className="space-y-6 max-w-xl"
                  >
                    <h3 className="text-[1.75rem] font-light text-white leading-tight min-h-[4.5rem]">
                      Feature
                      <br />
                      Enhancement
                    </h3>
                    <p className="text-base text-white/60 leading-relaxed font-light">
                      We continuously improve your applications with new
                      features and enhancements based on user feedback and
                      evolving business needs.
                    </p>
                  </motion.div>
                </div>
              </div>
            </div>
          </div>
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
              See what our clients have to say about their experience working
              with us
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "Sarah Chen",
                role: "CTO at TechFlow",
                image:
                  "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&q=80&w=200&h=200",
                testimonial:
                  "The AI solutions provided by the team have transformed our business operations. The attention to detail and technical expertise were outstanding.",
                company: {
                  logo: "https://framerusercontent.com/images/nXLK1wAp5ZD7QYaXiRz8kZbmE.png",
                  background: "bg-purple-500/10",
                },
              },
              {
                name: "Michael Rodriguez",
                role: "Founder at BlockChain Ventures",
                image:
                  "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=200&h=200",
                testimonial:
                  "Their blockchain expertise helped us launch our DeFi platform ahead of schedule. The team's technical knowledge and problem-solving abilities are exceptional.",
                company: {
                  logo: "https://framerusercontent.com/images/QVKF2PqQba3U5UZTOXJTYgbw8.png",
                  background: "bg-blue-500/10",
                },
              },
              {
                name: "Emily Watson",
                role: "Product Director at DataSense",
                image:
                  "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=200&h=200",
                testimonial:
                  "The machine learning models developed by the team have significantly improved our data analytics capabilities. Their expertise in AI is truly remarkable.",
                company: {
                  logo: "https://framerusercontent.com/images/BAXywubxN8sAhfJg9YqGVpvpzg.png",
                  background: "bg-emerald-500/10",
                },
              },
              {
                name: "David Kim",
                role: "CEO at SmartContract Solutions",
                image:
                  "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200&h=200",
                testimonial:
                  "Their smart contract development and auditing services are top-notch. They helped us create a secure and efficient blockchain infrastructure.",
                company: {
                  logo: "https://framerusercontent.com/images/Hg2OUW6aQ0EjgwuqRrVQ3W9ho.png",
                  background: "bg-indigo-500/10",
                },
              },
              {
                name: "Lisa Zhang",
                role: "Head of Innovation at FutureTech",
                image:
                  "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=200&h=200",
                testimonial:
                  "The team's expertise in both AI and blockchain helped us create innovative solutions that set us apart in the market.",
                company: {
                  logo: "https://framerusercontent.com/images/nXLK1wAp5ZD7QYaXiRz8kZbmE.png",
                  background: "bg-rose-500/10",
                },
              },
              {
                name: "James Wilson",
                role: "CTO at Web3 Innovations",
                image:
                  "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=200&h=200",
                testimonial:
                  "Their deep understanding of Web3 technologies helped us build a revolutionary NFT marketplace. The team's dedication to quality is unmatched.",
                company: {
                  logo: "https://framerusercontent.com/images/QVKF2PqQba3U5UZTOXJTYgbw8.png",
                  background: "bg-cyan-500/10",
                },
              },
            ].map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                  transition: {
                    delay: index * 0.1,
                    duration: 0.5,
                  },
                }}
                viewport={{ once: true }}
                className="relative group rounded-2xl bg-[#141414] p-8 border border-[#2A2F2A] hover:border-white/20 transition-all duration-300"
              >
                <div className="flex flex-col h-full">
                  <div
                    className={`w-12 h-12 rounded-lg ${testimonial.company.background} p-2 mb-8`}
                  >
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
                      <h4 className="text-white font-medium text-lg">
                        {testimonial.name}
                      </h4>
                      <p className="text-gray-400 text-sm">
                        {testimonial.role}
                      </p>
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
              Don't see your answer? Get in touch via our communities.{" "}
              <a href="#" className="text-purple-400 hover:text-purple-300">
                Discord
              </a>{" "}
              /{" "}
              <a href="#" className="text-purple-400 hover:text-purple-300">
                Facebook
              </a>
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
                answer:
                  "We can start working on your project within 48 hours of initial contact. Our streamlined onboarding process ensures we can quickly understand your needs and begin delivering value. After the initial consultation, we'll provide you with a detailed timeline and project roadmap.",
              },
              {
                question: "What is your typical working process?",
                answer:
                  "Our process typically involves four key phases: Discovery (understanding your needs and objectives), Planning (creating detailed specifications and timelines), Development (iterative implementation with regular feedback), and Launch (deployment and support). We maintain transparent communication throughout and provide regular updates on progress.",
              },
              {
                question: "How do you usually start new collaborations?",
                answer:
                  "We begin with a detailed consultation to understand your project requirements, goals, and vision. This is followed by a comprehensive proposal outlining scope, timeline, and deliverables. Once aligned, we set up project management tools and communication channels to ensure smooth collaboration.",
              },
              {
                question:
                  "Do you guys work with big companies only? We're an early-stage startup?",
                answer:
                  "We work with companies of all sizes, from early-stage startups to enterprise organizations. Our flexible engagement models are designed to accommodate different scales and budgets. For startups, we offer specialized packages that focus on essential features and rapid deployment to help you get to market quickly.",
              },
              {
                question: "How long it will take to get an estimate from you?",
                answer:
                  "We typically provide initial estimates within 2-3 business days after our first detailed discussion. For more complex projects, we might need up to 5 days to provide a comprehensive quote. We ensure our estimates are thorough and accurate to avoid surprises later.",
              },
              {
                question: "What's the average project duration?",
                answer:
                  "Project duration varies based on complexity and scope. Typical MVPs take 2-3 months, while full-scale applications might take 4-6 months. We can also work on shorter engagements for specific features or improvements. We'll provide a detailed timeline during the estimation phase.",
              },
            ].map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                  transition: {
                    delay: index * 0.1,
                    duration: 0.5,
                  },
                }}
                viewport={{ once: true }}
                className="group"
              >
                <details className="group">
                  <summary className="flex items-center justify-between cursor-pointer p-4 rounded-lg bg-[#141414] border border-[#1A1D1A] hover:border-[#2A2F2A] transition-colors">
                    <span className="text-white font-medium">
                      {faq.question}
                    </span>
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

      {/* Let's chat section */}
      {/* Let's chat section */}
      <div className="relative py-32 overflow-hidden flex flex-col items-center justify-center">
        <div className="absolute inset-0 w-full whitespace-nowrap text-[8vw] font-normal text-white pointer-events-none select-none flex items-center">
          <div className="animate-marquee text-center">
            Let's chat — hi@echortech.com — Let's chat — hi@echortech.com —
          </div>
        </div>

        <div className="relative z-10 flex items-center justify-center">
          <motion.button
            onClick={handleEmailClick}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="w-32 h-32 rounded-full bg-white flex items-center justify-center group transition-all duration-300 hover:shadow-[0_0_50px_rgba(255,255,255,0.3)] mx-auto"
          >
            <Mail className="w-8 h-8 text-black transition-transform duration-300 group-hover:scale-110" />
          </motion.button>
        </div>
      </div>
    </Layout>
  );
};

export default App;