import React from 'react';
import { motion } from 'framer-motion';
import { Plus, Minus, Search, ArrowRight, MessageCircle, Mail, Phone } from 'lucide-react';
import Layout from '../components/Layout';

const FAQ = () => {
  const [searchQuery, setSearchQuery] = React.useState('');
  const [activeCategory, setActiveCategory] = React.useState('all');

  const categories = [
    { id: 'all', name: 'All Questions' },
    { id: 'getting-started', name: 'Getting Started' },
    { id: 'pricing', name: 'Pricing & Plans' },
    { id: 'features', name: 'Features' },
    { id: 'security', name: 'Security' },
    { id: 'integrations', name: 'Integrations' },
    { id: 'enterprise', name: 'Enterprise' },
  ];

  const faqs = {
    'getting-started': [
      {
        question: "How do I get started with Blitzit?",
        answer: "Getting started with Blitzit is easy. Simply sign up on our website, and you'll get immediate access to our platform. We offer a guided onboarding process that will help you set up your workspace and invite team members."
      },
      {
        question: "What are the system requirements?",
        answer: "Blitzit works on any modern web browser (Chrome, Firefox, Safari, Edge). For desktop apps, we support Windows 10+, macOS 10.14+, and major Linux distributions. Mobile apps require iOS 13+ or Android 8+."
      },
      {
        question: "Can I import data from other tools?",
        answer: "Yes, Blitzit supports importing data from various tools including Jira, Trello, Asana, and GitHub. Our import wizard will guide you through the process while maintaining your data structure."
      }
    ],
    'pricing': [
      {
        question: "What pricing plans are available?",
        answer: "We offer flexible pricing plans: Free (for individuals), Pro ($10/user/month), Team ($25/user/month), and Enterprise (custom pricing). Each plan includes different features and capabilities to suit your needs."
      },
      {
        question: "Is there a free trial for paid plans?",
        answer: "Yes, all paid plans come with a 14-day free trial. No credit card is required to start the trial, and you can upgrade, downgrade, or cancel at any time."
      },
      {
        question: "Do you offer discounts for non-profits or education?",
        answer: "Yes, we offer special pricing for non-profit organizations and educational institutions. Contact our sales team for more information about these discounts."
      }
    ],
    'features': [
      {
        question: "What are the key features of Blitzit?",
        answer: "Blitzit offers real-time collaboration, automated workflows, custom dashboards, advanced analytics, API access, and integrations with popular tools. Our platform is designed to streamline your development process end-to-end."
      },
      {
        question: "Do you support custom workflows?",
        answer: "Yes, Blitzit allows you to create custom workflows that match your team's processes. You can define stages, automate transitions, and set up triggers for various actions."
      },
      {
        question: "Is there a limit to the number of projects?",
        answer: "The number of projects depends on your plan. Free plans include up to 3 projects, while paid plans offer unlimited projects. Enterprise plans include additional project management features."
      }
    ],
    'security': [
      {
        question: "How do you handle data security?",
        answer: "We take security seriously. All data is encrypted in transit and at rest using industry-standard encryption. We maintain SOC 2 Type II compliance and regularly undergo security audits."
      },
      {
        question: "Can I enable two-factor authentication?",
        answer: "Yes, we strongly recommend enabling two-factor authentication (2FA). We support various 2FA methods including authenticator apps, SMS, and hardware security keys."
      },
      {
        question: "Where is my data stored?",
        answer: "Your data is stored in secure, enterprise-grade data centers. We offer data residency options for Enterprise customers, allowing you to choose your data storage location."
      }
    ],
    'integrations': [
      {
        question: "What integrations are available?",
        answer: "Blitzit integrates with popular tools like GitHub, GitLab, Slack, Microsoft Teams, Google Workspace, and more. We also offer a robust API for custom integrations."
      },
      {
        question: "Can I build custom integrations?",
        answer: "Yes, our API and webhooks allow you to build custom integrations. We provide detailed documentation and SDKs in multiple programming languages."
      },
      {
        question: "Do you support SSO integration?",
        answer: "Yes, Enterprise plans include SSO support for major providers including Okta, Azure AD, and Google Workspace. We support both SAML 2.0 and OAuth 2.0."
      }
    ],
    'enterprise': [
      {
        question: "What's included in Enterprise plans?",
        answer: "Enterprise plans include advanced security features, dedicated support, custom contracts, SLA guarantees, SSO integration, audit logs, and custom data retention policies."
      },
      {
        question: "Do you offer professional services?",
        answer: "Yes, we offer professional services including custom implementation, training, and consulting. Our team will help ensure successful deployment and adoption."
      },
      {
        question: "What kind of support do Enterprise customers get?",
        answer: "Enterprise customers receive 24/7 priority support, a dedicated customer success manager, and guaranteed response times. We also offer on-site training and quarterly business reviews."
      }
    ]
  };

  const filteredFaqs = React.useMemo(() => {
    const allFaqs = Object.values(faqs).flat();
    const filtered = activeCategory === 'all' 
      ? allFaqs 
      : faqs[activeCategory] || [];

    if (!searchQuery) return filtered;

    return filtered.filter(faq => 
      faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }, [activeCategory, searchQuery]);

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-[50vh] flex items-center justify-center overflow-hidden">
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
              How can we help you?
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="max-w-2xl mx-auto"
            >
              <div className="relative">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search for answers..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full px-12 py-4 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-12 bg-[#0C0D0C] border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-4 justify-center">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-colors ${
                  activeCategory === category.id
                    ? 'bg-blue-500 text-white'
                    : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Content Section */}
      <section className="py-24 bg-[#0C0D0C]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-6"
          >
            {filteredFaqs.length > 0 ? (
              filteredFaqs.map((faq, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ 
                    opacity: 1,
                    y: 0,
                    transition: {
                      delay: index * 0.1,
                      duration: 0.5
                    }
                  }}
                  className="group"
                >
                  <details className="group">
                    <summary className="flex items-center justify-between cursor-pointer p-6 rounded-lg bg-[#141414] border border-[#1A1D1A] hover:border-[#2A2F2A] transition-colors">
                      <span className="text-white font-medium pr-6">{faq.question}</span>
                      <span className="relative flex-shrink-0 ml-1.5 w-5 h-5">
                        <Plus className="absolute inset-0 w-5 h-5 opacity-100 group-open:opacity-0 transition-opacity" />
                        <Minus className="absolute inset-0 w-5 h-5 opacity-0 group-open:opacity-100 transition-opacity" />
                      </span>
                    </summary>
                    <div className="px-6 pb-6 pt-4">
                      <p className="text-gray-400 leading-relaxed">{faq.answer}</p>
                    </div>
                  </details>
                </motion.div>
              ))
            ) : (
              <div className="text-center py-12">
                <p className="text-gray-400">No results found for your search.</p>
              </div>
            )}
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-24 bg-[#0C0D0C] border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-medium text-white mb-4">
              Still have questions?
            </h2>
            <p className="text-gray-400">
              Can't find what you're looking for? We're here to help.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: <MessageCircle className="w-6 h-6" />,
                title: "Live Chat",
                description: "Chat with our support team",
                action: "Start chat",
                color: "bg-purple-500"
              },
              {
                icon: <Mail className="w-6 h-6" />,
                title: "Email Support",
                description: "Get help via email",
                action: "Send email",
                color: "bg-blue-500"
              },
              {
                icon: <Phone className="w-6 h-6" />,
                title: "Phone Support",
                description: "Call our support team",
                action: "Call now",
                color: "bg-green-500"
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
                <div className="p-8 rounded-2xl bg-[#141414] border border-[#1A1D1A] hover:border-[#2A2F2A] transition-colors">
                  <div className={`w-12 h-12 ${item.color} rounded-lg flex items-center justify-center mb-6`}>
                    {item.icon}
                  </div>
                  <h3 className="text-xl font-medium text-white mb-2">
                    {item.title}
                  </h3>
                  <p className="text-gray-400 mb-6">
                    {item.description}
                  </p>
                  <button className="flex items-center text-white font-medium hover:opacity-80 transition-opacity">
                    {item.action}
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default FAQ;