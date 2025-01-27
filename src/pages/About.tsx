import React from 'react';
import { motion } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';
import Layout from '../components/Layout';

const About = () => {
  return (
    <Layout>
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-b from-[#0A1A2F] via-[#0A1A2F]/80 to-[#0A1A2F]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,100,255,0.15)_0%,transparent_100%)]" />
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center space-y-8"
          >
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-sm font-medium tracking-wider text-blue-300 uppercase"
            >
              ENTERPRISE
            </motion.span>
            
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-5xl md:text-7xl font-medium tracking-tight text-white max-w-4xl mx-auto leading-[1.1]"
            >
              Securely scale your
              <br />
              creative workflow.
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-xl text-gray-300 max-w-2xl mx-auto"
            >
              Connect your teams, stakeholders, and creative assets on a fast, secure cloud
              collaboration platform to accelerate your content velocity.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-4"
            >
              <a
                href="#"
                className="px-6 py-3 rounded-lg bg-gray-700 text-white hover:bg-gray-600 transition-colors"
              >
                Chat with an Expert
              </a>
              <a
                href="tel:877-702-3623"
                className="px-6 py-3 rounded-lg bg-gray-800 text-white hover:bg-gray-700 transition-colors flex items-center gap-2"
              >
                877-702-3623
                <span className="inline-block w-4 h-4 text-xs bg-blue-500 rounded-full flex items-center justify-center">
                  ↗
                </span>
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Results Section */}
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-b from-[#0A1A2F] to-black" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,100,255,0.05)_0%,transparent_100%)]" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center space-y-4"
          >
            <motion.span
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-sm font-medium tracking-wider text-blue-300 uppercase"
            >
              RETURN ON INVESTMENT
            </motion.span>
            
            <div className="space-y-2">
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="text-5xl md:text-7xl font-medium tracking-tight text-white"
              >
                Results you can see.
              </motion.h2>
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                className="text-5xl md:text-7xl font-medium tracking-tight text-gray-500"
              >
                And measure.
              </motion.h2>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16"
            >
              {[
                {
                  category: "WORKFLOW MANAGEMENT",
                  value: "3.6x",
                  description: "faster creative workflow"
                },
                {
                  category: "PRODUCTIVITY",
                  value: "3x",
                  description: "faster file uploads"
                },
                {
                  category: "REVIEW & APPROVAL",
                  value: "2.7x",
                  description: "faster review cycles"
                }
              ].map((stat, index) => (
                <motion.div
                  key={stat.category}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.6 + index * 0.1 }}
                  className="relative group"
                >
                  <div className="bg-[#111]/80 backdrop-blur-sm rounded-2xl p-8 border border-gray-800 hover:border-gray-700 transition-colors">
                    <div className="text-sm text-gray-400 mb-6 font-medium tracking-wider">
                      {stat.category}
                    </div>
                    <div className="text-6xl font-medium text-white mb-4">
                      {stat.value}
                    </div>
                    <div className="text-gray-400">
                      {stat.description}
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Crafting Section */}
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-black" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,100,255,0.02)_0%,transparent_100%)]" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            {/* Left Column */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-4xl md:text-6xl font-medium tracking-tight text-white leading-[1.1]"
              >
                We're crafting the project planning tool for teams that care about quality
              </motion.h2>
            </motion.div>

            {/* Right Column */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <p className="text-gray-300 text-lg leading-relaxed">
                Computers used to be magical. But much of that magic has been lost over time, replaced by subpar tools and practices that slow teams down and hold back great work. Frustrated with the status quo, we decided to build something better. Something that teams would actually enjoy using. We named it Linear to signify progress.
              </p>
              
              <p className="text-gray-300 text-lg leading-relaxed">
                What started as a simple issue tracker, has since evolved into a powerful project and issue tracking system that streamlines workflows across the entire product development process. We don't think of Linear as just a better "tool", but as a better "way" to build software.
              </p>
              
              <p className="text-gray-300 text-lg leading-relaxed">
                Today, thousands of teams around the globe — from early-stage startups to public companies — use Linear to build their products. Linear helps them to focus on what they do best: Crafting software experiences that feel magical again.
              </p>
            </motion.div>
          </div>

          {/* Team Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-32"
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
              {/* Left Column */}
              <div className="space-y-8">
                <h3 className="text-4xl md:text-5xl font-medium tracking-tight text-white">
                  We care deeply about the quality of our work
                </h3>
                <p className="text-gray-300 text-lg leading-relaxed">
                  Linear has always been a fully remote company. Today, our small but mighty team is distributed across North America and Europe. What unites us is relentless focus, fast execution, and our passion for software craftsmanship. We are all makers at heart and care deeply about the quality of our work, down to the smallest detail.
                </p>
                <motion.a
                  href="#"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center px-6 py-3 bg-gray-800 text-white rounded-lg hover:bg-gray-700 transition-colors"
                >
                  We're hiring
                  <span className="ml-2">→</span>
                </motion.a>
              </div>

              {/* Right Column - Team Image */}
              <div className="relative aspect-[4/3] rounded-xl overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=1920"
                  alt="Team members"
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Meet Our Team Section */}
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-black" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,100,255,0.02)_0%,transparent_100%)]" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start mb-24">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-6xl font-medium tracking-tight text-white leading-[1.1]"
            >
              Meet our team
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-gray-300 text-lg leading-relaxed"
            >
              Our small but growing team has helped create, design, and build some of the most popular productivity tools in existence at companies like Google, Dropbox, and LinkedIn.
            </motion.p>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8"
          >
            {[
              {
                name: "Zach Lloyd",
                role: "Founder, CEO",
                image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200&h=200",
                socials: ["linkedin", "twitter"]
              },
              {
                name: "Zach Bai",
                role: "Software Engineer",
                image: "https://images.unsplash.com/photo-1519345182560-3f2917c472ef?auto=format&fit=crop&q=80&w=200&h=200",
                socials: ["linkedin", "twitter"]
              },
              {
                name: "Andy Carlson",
                role: "Software Engineer",
                image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=200&h=200",
                socials: ["linkedin", "twitter"]
              },
              {
                name: "Hong Yi Chen",
                role: "Growth Product Manager",
                image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=200&h=200",
                socials: ["linkedin", "twitter"]
              },
              {
                name: "Eric Chen",
                role: "Growth Manager",
                image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=200&h=200",
                socials: ["linkedin"]
              },
              {
                name: "Kevin Chevalier",
                role: "Software Engineer",
                image: "https://images.unsplash.com/photo-1519345182560-3f2917c472ef?auto=format&fit=crop&q=80&w=200&h=200",
                socials: ["linkedin"]
              },
              {
                name: "Aloke Desai",
                role: "Software Engineer",
                image: "https://images.unsplash.com/photo-1463453091185-61582044d556?auto=format&fit=crop&q=80&w=200&h=200",
                socials: ["linkedin", "twitter"]
              },
              {
                name: "Erik Eliason",
                role: "Head of Growth",
                image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=200&h=200",
                socials: ["linkedin"]
              },
              {
                name: "Day Fisher",
                role: "Software Engineer",
                image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200&h=200",
                socials: ["linkedin"]
              },
              {
                name: "Tess Garvey",
                role: "Culture & Community Manager",
                image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=200&h=200",
                socials: ["linkedin"]
              },
              {
                name: "Suraj Gupta",
                role: "Software Engineer",
                image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=200&h=200",
                socials: ["linkedin"]
              },
              {
                name: "Ian Hodge",
                role: "Software Engineer",
                image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=200&h=200",
                socials: ["linkedin", "twitter"]
              },
              {
                name: "Roland Huang",
                role: "Software Engineer",
                image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=200&h=200",
                socials: ["linkedin"]
              },
              {
                name: "Rob Jones",
                role: "Senior Product Designer",
                image: "https://images.unsplash.com/photo-1519345182560-3f2917c472ef?auto=format&fit=crop&q=80&w=200&h=200",
                socials: ["linkedin"]
              },
              {
                name: "Seikun Kambashi",
                role: "Software Engineer",
                image: "https://images.unsplash.com/photo-1463453091185-61582044d556?auto=format&fit=crop&q=80&w=200&h=200",
                socials: ["linkedin"]
              }
            ].map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group relative"
              >
                <div className="relative aspect-square rounded-lg overflow-hidden mb-4">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover transition-all duration-300 group-hover:scale-105 filter grayscale group-hover:grayscale-0"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                </div>
                <h3 className="text-lg font-medium text-white mb-1">{member.name}</h3>
                <p className="text-sm text-gray-400 mb-3">{member.role}</p>
                <div className="flex gap-2">
                  {member.socials.includes("linkedin") && (
                    <a
                      href="#"
                      className="p-1.5 rounded-md bg-gray-800 text-gray-400 hover:bg-gray-700 hover:text-white transition-colors"
                    >
                      <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                      </svg>
                    </a>
                  )}
                  {member.socials.includes("twitter") && (
                    <a
                      href="#"
                      className="p-1.5 rounded-md bg-gray-800 text-gray-400 hover:bg-gray-700 hover:text-white transition-colors"
                    >
                      <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                      </svg>
                    </a>
                  )}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Bootstrapped Company Section */}
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-black" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,100,255,0.02)_0%,transparent_100%)]" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center space-y-12"
          >
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-6xl font-medium tracking-tight text-white leading-[1.1]"
            >
              Built with independence
              <br />
              and a clear vision
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-xl text-gray-400 max-w-3xl mx-auto"
            >
              Unlike traditional startups, we're proud to be a fully bootstrapped company.
              This independence allows us to focus solely on our vision and our customers,
              not external pressures or expectations.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto"
            >
              {[
                {
                  title: "Self-funded",
                  description: "100% bootstrapped, maintaining full control over our direction and decisions"
                },
                {
                  title: "Customer First",
                  description: "Focused on delivering value to customers, not satisfying investors"
                },
                {
                  title: "Long-term Vision",
                  description: "Building for sustainable growth, not quick exits or short-term gains"
                }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="relative group"
                >
                  <div className="p-6 rounded-2xl bg-[#111]/80 backdrop-blur-sm border border-gray-800 hover:border-gray-700 transition-colors h-full">
                    <h3 className="text-xl font-medium text-white mb-4">{item.title}</h3>
                    <p className="text-gray-400 text-sm leading-relaxed">{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="pt-12"
            >
              <div className="bg-[#111]/80 backdrop-blur-sm border border-gray-800 rounded-2xl p-8 max-w-3xl mx-auto">
                <div className="flex flex-col md:flex-row items-center gap-6">
                  <div className="relative w-24 h-24 rounded-full overflow-hidden flex-shrink-0">
                    <img
                      src="https://images.unsplash.com/photo-1556157382-97eda2d62296?auto=format&fit=crop&q=80&w=200&h=200"
                      alt="Founder"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="text-left">
                    <h3 className="text-xl font-medium text-white mb-2">Michael Chen</h3>
                    <p className="text-blue-300 text-sm mb-4">Founder & CEO</p>
                    <p className="text-gray-400 leading-relaxed">
                      "Our independence is our strength. Being bootstrapped means we can focus on what truly matters:
                      building exceptional products that our customers love, without compromising our vision or values."
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
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
              <a href="#" className="text-purple-300 hover:text-purple-200 underline">Discord</a>
              {' '}/{' '}
              <a href="#" className="text-purple-300 hover:text-purple-200 underline">Facebook</a>
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
};

export default About;