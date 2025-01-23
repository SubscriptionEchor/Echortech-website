import React from 'react';
import Layout from './components/Layout';
import { 
  ArrowRight, 
  MoveUpRight, 
  CheckCircle, 
  Users, 
  Building2, 
  Phone, 
  MessageSquare 
} from 'lucide-react';
import { motion } from 'framer-motion';
import DotMatrix from './components/DotMatrix';
import StatsChip from './components/StatsChip';

function App() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <DotMatrix />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-8">
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

      {/* Features Section */}
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">Why Choose Us</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              We bring years of experience and expertise to help your business succeed
              in today's competitive landscape.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: <CheckCircle className="h-8 w-8 text-indigo-500" />,
                title: 'Expert Solutions',
                description:
                  'Tailored solutions designed to meet your specific business needs and goals.',
              },
              {
                icon: <Users className="h-8 w-8 text-indigo-500" />,
                title: 'Dedicated Team',
                description:
                  'A team of experienced professionals committed to your success.',
              },
              {
                icon: <Building2 className="h-8 w-8 text-indigo-500" />,
                title: 'Industry Experience',
                description:
                  'Deep understanding of various industries and their unique challenges.',
              },
            ].map((feature, index) => (
              <div
                key={index}
                className="p-6 rounded-lg bg-gray-900/50 hover:bg-gray-800/50 transition-colors backdrop-blur-sm border border-gray-800"
              >
                <div className="mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold text-white mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-400">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-black relative">
        <div className="absolute inset-0 bg-gradient-to-r from-indigo-600/20 to-purple-600/20 backdrop-blur-sm"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
            Contact us today to learn how we can help you achieve your business goals
            with our expert solutions and services.
          </p>
          <div className="flex justify-center gap-6">
            <a
              href="/contact"
              className="inline-flex items-center px-6 py-3 rounded-lg bg-white text-indigo-600 hover:bg-gray-100 transition-colors"
            >
              <Phone className="mr-2 h-5 w-5" />
              Contact Sales
            </a>
            <a
              href="/about"
              className="inline-flex items-center px-6 py-3 rounded-lg bg-indigo-500 text-white hover:bg-indigo-400 transition-colors"
            >
              <MessageSquare className="mr-2 h-5 w-5" />
              Learn More
            </a>
          </div>
        </div>
      </section>
    </Layout>
  );
}

export default App;