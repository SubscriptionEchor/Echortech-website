import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Upload, ArrowUpRight } from 'lucide-react';
import Layout from '../components/Layout';

const serviceTypes = [
  "Site from scratch",
  "UX/UI Design",
  "Product Design",
  "Webflow Site",
  "Motion Design",
  "Branding",
  "Mobile Development"
];

const budgetRanges = [
  "Less than $5,000",
  "$5,000 - $10,000",
  "$10,000 - $25,000",
  "$25,000 - $50,000",
  "$50,000+"
];

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    serviceType: '',
    projectDetails: '',
    budget: '',
    file: null as File | null,
    gdprConsent: false
  });

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFormData(prev => ({ ...prev, file: e.target.files![0] }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  return (
    <Layout>
      <section className="min-h-screen py-24 bg-black flex items-center relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[linear-gradient(to_bottom,transparent,rgba(0,0,0,0.8))]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(99,102,241,0.08)_0%,transparent_100%)]" />
        </div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-16 relative"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ 
                duration: 0.8,
                type: "spring",
                stiffness: 100,
                damping: 20
              }}
              className="text-[12vw] sm:text-[10vw] md:text-[8vw] font-light text-white/80 leading-[0.9] tracking-[-0.02em] mb-8"
            >
              Hey! Tell us all
              <br />
              the things 👋
            </motion.h1>
          </motion.div>

          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ 
              delay: 0.3,
              duration: 0.8,
              type: "spring",
              stiffness: 100,
              damping: 20
            }}
            className="space-y-12"
          >
            <div className="relative space-y-12">
            {/* Service Type Field */}
            <div>
              <p className="text-2xl text-white/80 mb-8">I'm interested in...</p>
              <div className="flex flex-wrap gap-3">
                {serviceTypes.map((type) => (
                  <button
                    key={type}
                    type="button"
                    onClick={() => setFormData(prev => ({ ...prev, serviceType: type }))}
                    className={`px-6 py-3 rounded-full border text-sm transition-all ${
                      formData.serviceType === type
                        ? 'border-white text-white bg-white/5'
                        : 'border-white/10 text-white/60 hover:border-white/30'
                    }`}
                  >
                    {type}
                  </button>
                ))}
              </div>
            </div>

            {/* Name Field */}
            <div>
              <label htmlFor="name" className="sr-only">
                Your name
              </label>
              <input
                type="text"
                id="name"
                required
                value={formData.name}
                onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                className="w-full px-0 py-8 bg-transparent border-0 border-b border-white/10 text-white placeholder-white/40 focus:outline-none focus:border-white/30 text-2xl transition-all mb-8"
                placeholder="Your name"
              />
            </div>

            {/* Email Field */}
            <div>
              <label htmlFor="email" className="sr-only">
                Email
              </label>
              <input
                type="email"
                id="email"
                required
                value={formData.email}
                onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                className="w-full px-0 py-6 bg-transparent border-0 border-b border-white/10 text-white placeholder-white/40 focus:outline-none focus:border-white/30 text-xl transition-all mb-4"
                placeholder="Email"
              />
            </div>

            {/* Project Details Field */}
            <div>
              <label htmlFor="projectDetails" className="sr-only">
                Tell us about the project
              </label>
              <textarea
                id="projectDetails"
                required
                value={formData.projectDetails}
                onChange={(e) => setFormData(prev => ({ ...prev, projectDetails: e.target.value }))}
                rows={3}
                className="w-full px-0 py-6 bg-transparent border-0 border-b border-white/10 text-white placeholder-white/40 focus:outline-none focus:border-white/30 text-xl transition-all resize-none mb-4"
                placeholder="Tell us about your project"
              />
            </div>

            {/* Budget Field */}
            <div>
              <p className="text-xl text-white/80 mb-6">Project budget (USD)</p>
              <div className="flex flex-wrap gap-3">
                {budgetRanges.map((range) => (
                  <button
                    key={range}
                    type="button"
                    onClick={() => setFormData(prev => ({ ...prev, budget: range }))}
                    className={`px-6 py-3 rounded-full border text-sm transition-all ${
                      formData.budget === range
                        ? 'border-white text-white'
                        : 'border-white/10 text-white/60 hover:border-white/30'
                    }`}
                  >
                    {range}
                  </button>
                ))}
              </div>
            </div>

            {/* File Upload Field */}
            <div>
              <div className="relative">
                <input
                  type="file"
                  id="file"
                  onChange={handleFileChange}
                  className="hidden"
                  accept=".pdf,.doc,.docx,.txt,.png,.jpg,.jpeg"
                />
                <label
                  htmlFor="file"
                  className="inline-flex items-center gap-2 text-white/60 hover:text-white cursor-pointer transition-colors group"
                >
                  <Upload className="w-4 h-4" />
                  <span className="text-sm">
                    {formData.file ? formData.file.name : 'Add attachment'}
                  </span>
                </label>
              </div>
            </div>

            {/* Submit Button */}
            <motion.button
              type="submit"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center gap-2 text-white font-medium bg-white/10 hover:bg-white/20 px-6 py-3 rounded-full transition-all border border-white/20 hover:border-white/30"
            >
              Send Request
              <ArrowUpRight className="w-5 h-5 group-hover:rotate-45 transition-transform" />
            </motion.button>
            </div>
          </motion.form>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="mt-24 pt-12 border-t border-white/20"
          >
            <p className="text-sm text-white/60 uppercase tracking-wider mb-8 font-medium">Social media and contacts</p>
            <div className="space-y-6">
              {[
                { label: 'Instagram', href: 'https://instagram.com/yourusername' },
                { label: 'LinkedIn', href: 'https://linkedin.com/in/yourusername' },
                { label: 'Dribbble', href: 'https://dribbble.com/yourusername' },
                { label: 'GitHub', href: 'https://github.com/yourusername' }
              ].map((social) => (
                <div key={social.label} className="relative group">
                  <a
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full"
                  >
                    <div className="flex items-center justify-between text-white/80 group-hover:text-white transition-colors py-2">
                      <span className="text-lg font-medium">{social.label}</span>
                      <ArrowUpRight className="w-5 h-5 transform group-hover:rotate-45 transition-all" />
                    </div>
                  </a>
                  <div className="absolute inset-0 cursor-pointer" onClick={() => window.open(social.href, '_blank', 'noopener,noreferrer')} />
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;