import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Upload, ArrowRight, Mail, MessageSquare, Phone } from 'lucide-react';
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
      {/* Hero Section */}
      <section className="relative min-h-[40vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-b from-[#0A1A2F] via-[#0A1A2F]/80 to-[#0A1A2F]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,100,255,0.15)_0%,transparent_100%)]" />
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center space-y-8"
          >
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-5xl md:text-7xl font-medium tracking-tight text-white max-w-4xl mx-auto leading-[1.1]"
            >
              Let's create something
              <br />
              amazing together
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-xl text-gray-300 max-w-2xl mx-auto"
            >
              Have a project in mind? We'd love to hear about it. Tell us what you're
              looking for and we'll help you achieve it.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-12 bg-[#0C0D0C] border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: <Mail className="w-6 h-6" />,
                title: "Email us",
                description: "contact@company.com",
                color: "bg-blue-500"
              },
              {
                icon: <MessageSquare className="w-6 h-6" />,
                title: "Live chat",
                description: "Chat with our team",
                color: "bg-purple-500"
              },
              {
                icon: <Phone className="w-6 h-6" />,
                title: "Call us",
                description: "+1 (555) 000-0000",
                color: "bg-green-500"
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="relative group"
              >
                <div className="p-6 rounded-2xl bg-[#141414] border border-[#1A1D1A] hover:border-[#2A2F2A] transition-colors">
                  <div className={`w-12 h-12 ${item.color} rounded-lg flex items-center justify-center mb-4`}>
                    {item.icon}
                  </div>
                  <h3 className="text-xl font-medium text-white mb-2">
                    {item.title}
                  </h3>
                  <p className="text-gray-400">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-24 bg-[#0C0D0C]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-8"
          >
            {/* Name Field */}
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                Your name
              </label>
              <input
                type="text"
                id="name"
                required
                value={formData.name}
                onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                className="w-full px-4 py-3 bg-[#141414] border border-gray-800 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                placeholder="John Doe"
              />
            </div>

            {/* Email Field */}
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                required
                value={formData.email}
                onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                className="w-full px-4 py-3 bg-[#141414] border border-gray-800 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                placeholder="john@example.com"
              />
            </div>

            {/* Service Type Field */}
            <div>
              <label htmlFor="serviceType" className="block text-sm font-medium text-gray-300 mb-2">
                I am interested in
              </label>
              <select
                id="serviceType"
                required
                value={formData.serviceType}
                onChange={(e) => setFormData(prev => ({ ...prev, serviceType: e.target.value }))}
                className="w-full px-4 py-3 bg-[#141414] border border-gray-800 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
              >
                <option value="">Select a service</option>
                {serviceTypes.map((type) => (
                  <option key={type} value={type}>{type}</option>
                ))}
              </select>
            </div>

            {/* Project Details Field */}
            <div>
              <label htmlFor="projectDetails" className="block text-sm font-medium text-gray-300 mb-2">
                Tell us about the project
              </label>
              <textarea
                id="projectDetails"
                required
                value={formData.projectDetails}
                onChange={(e) => setFormData(prev => ({ ...prev, projectDetails: e.target.value }))}
                rows={6}
                className="w-full px-4 py-3 bg-[#141414] border border-gray-800 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors resize-none"
                placeholder="Please share any relevant details about your project..."
              />
            </div>

            {/* Budget Field */}
            <div>
              <label htmlFor="budget" className="block text-sm font-medium text-gray-300 mb-2">
                Project budget in USD
              </label>
              <select
                id="budget"
                required
                value={formData.budget}
                onChange={(e) => setFormData(prev => ({ ...prev, budget: e.target.value }))}
                className="w-full px-4 py-3 bg-[#141414] border border-gray-800 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
              >
                <option value="">Select budget range</option>
                {budgetRanges.map((range) => (
                  <option key={range} value={range}>{range}</option>
                ))}
              </select>
            </div>

            {/* File Upload Field */}
            <div>
              <label htmlFor="file" className="block text-sm font-medium text-gray-300 mb-2">
                Add attachment
              </label>
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
                  className="flex items-center justify-center w-full px-4 py-3 bg-[#141414] border border-gray-800 rounded-lg text-white hover:bg-gray-800 transition-colors cursor-pointer group"
                >
                  <Upload className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
                  <span className="text-sm">
                    {formData.file ? formData.file.name : 'Choose a file'}
                  </span>
                </label>
                <p className="mt-2 text-xs text-gray-500">
                  Accepted file types: PDF, DOC, DOCX, TXT, PNG, JPG (max 10MB)
                </p>
              </div>
            </div>

            {/* GDPR Consent */}
            <div className="space-y-4">
              <div className="flex items-start">
                <input
                  type="checkbox"
                  id="gdprConsent"
                  required
                  checked={formData.gdprConsent}
                  onChange={(e) => setFormData(prev => ({ ...prev, gdprConsent: e.target.checked }))}
                  className="mt-1 h-4 w-4 rounded border-gray-800 bg-[#141414] text-blue-500 focus:ring-blue-500"
                />
                <label htmlFor="gdprConsent" className="ml-3 text-sm text-gray-400">
                  I consent to having this website store my submitted information so they can respond
                  to my inquiry. View our{' '}
                  <a href="/privacy-policy" className="text-blue-400 hover:text-blue-300 underline">
                    privacy policy
                  </a>
                  {' '}and{' '}
                  <a href="/terms" className="text-blue-400 hover:text-blue-300 underline">
                    terms of service
                  </a>
                  {' '}to learn more about how we use your data.
                </label>
              </div>
            </div>

            {/* Submit Button */}
            <motion.button
              type="submit"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full flex items-center justify-center px-8 py-4 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors font-medium"
            >
              Send Request
              <ArrowRight className="ml-2 w-5 h-5" />
            </motion.button>
          </motion.form>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;