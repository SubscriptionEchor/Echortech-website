import React, { useEffect } from 'react';
import { NavItem } from '../types';
import { Menu, X, ChevronDown, ArrowRight } from 'lucide-react';
import { useLocation, Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

interface DropdownItem {
  title: string;
  description: string;
  icon?: string;
}

interface NavItem {
  title: string;
  href: string;
  dropdown?: {
    type: 'services' | 'industries';
    items: {
      category?: string;
      items: DropdownItem[];
    }[];
  };
}

const navigation: NavItem[] = [
  { title: 'Works', href: '/works' },
  { 
    title: 'Services',
    href: '/services',
    dropdown: {
      type: 'services',
      items: [
        {
          category: 'AI & ML',
          items: [
            { 
              title: 'Custom AI Solutions', 
              description: 'LLMs, Computer Vision & NLP models',
              icon: '🧠'
            },
            { 
              title: 'AI Integration', 
              description: 'Seamless AI implementation for your business',
              icon: '🤖'
            }
          ]
        },
        {
          category: 'BLOCKCHAIN',
          items: [
            { 
              title: 'Smart Contracts', 
              description: 'Secure & audited contract development',
              icon: '📜'
            },
            { 
              title: 'DeFi Platforms', 
              description: 'Custom DeFi & Web3 solutions',
              icon: '⛓️'
            }
          ]
        },
        {
          category: 'DEVELOPMENT',
          items: [
            { 
              title: 'Web & Mobile', 
              description: 'Full-stack apps with modern tech',
              icon: '🌐'
            },
            { 
              title: 'API & Backend', 
              description: 'Scalable & secure architectures',
              icon: '⚡'
            }
          ]
        }
      ]
    }
  },

  { title: 'About', href: '/about' },
];

export default function Layout({ children }: { children: React.ReactNode }) {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [activeDropdown, setActiveDropdown] = React.useState<string | null>(null);
  const [activeMobileDropdown, setActiveMobileDropdown] = React.useState<string | null>(null);
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
    setIsMenuOpen(false);
    setActiveMobileDropdown(null);
  }, [location.pathname]);

  const handleMouseEnter = (title: string) => {
    setActiveDropdown(title);
  };

  const handleMouseLeave = () => {
    setActiveDropdown(null);
  };

  const toggleMobileDropdown = (title: string) => {
    setActiveMobileDropdown(activeMobileDropdown === title ? null : title);
  };
  return (
    <div className="min-h-screen bg-black text-gray-100">
      <nav className="bg-black/50 backdrop-blur-lg fixed w-full z-50 border-b border-white/10 overflow-x-clip">
        <div className="container mx-auto px-4 relative">
          <div className="flex items-center justify-between h-16">
            <div className="flex-shrink-0">
              <a href="/" className="block">
                <img 
                  src="/src/assets/images/echor-nav-logo.svg" 
                  alt="Echor" 
                  className="h-8 w-auto"
                />
              </a>
            </div>
            <div className="hidden md:block flex-1">
              <div className="ml-10 flex items-baseline space-x-4">
                {navigation.map((item) => (
                  <div
                    key={item.href}
                    className="relative"
                    onMouseEnter={() => handleMouseEnter(item.title)}
                    onMouseLeave={handleMouseLeave}
                  >
                    <Link
                      to={item.href}
                      className={`px-3 py-2 inline-flex items-center text-sm font-medium tracking-wide transition-colors ${
                        location.pathname === item.href
                          ? 'text-white'
                          : 'text-gray-300 hover:text-white'
                      }`}
                    >
                      {item.title}
                      {item.dropdown && (
                        <ChevronDown className={`ml-1 h-4 w-4 transition-transform ${
                          activeDropdown === item.title ? 'rotate-180' : ''
                        }`} />
                      )}
                    </Link>

                    <AnimatePresence>
                      {item.dropdown && activeDropdown === item.title && (
                        <motion.div
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 10 }}
                          transition={{ duration: 0.15 }}
                          className="absolute left-0 top-full mt-1 w-[280px] bg-black/95 backdrop-blur-xl rounded-2xl shadow-2xl border border-white/10"
                          style={{ zIndex: 50 }}
                        >
                          <div className="p-2">
                            {item.dropdown.items.map((section, idx) => (
                              <div key={idx} className="space-y-1">
                                {section.category && (
                                  <h3 className="text-xs font-medium text-[#4ADE80] tracking-wider uppercase px-3 py-2">
                                    {section.category}
                                  </h3>
                                )}
                                <div>
                                  {section.items.map((dropdownItem, itemIdx) => (
                                    <a
                                      key={itemIdx}
                                      href="#"
                                      className="group flex items-center gap-3 rounded-lg px-3 py-2 transition-all duration-200 hover:bg-white/5"
                                    >
                                      {dropdownItem.icon && (
                                        <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center text-base">
                                          {dropdownItem.icon}
                                        </div>
                                      )}
                                      <div className="flex-1">
                                        <p className="text-sm font-medium text-white group-hover:text-[#4ADE80] transition-colors">
                                           {dropdownItem.title}
                                        </p>
                                        <p className="text-xs text-white/50 group-hover:text-white/70 transition-colors">
                                           {dropdownItem.description}
                                        </p>
                                      </div>
                                    </a>
                                  ))}
                                </div>
                              </div>
                            ))}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ))}
              </div>
            </div>
            <div className="flex items-center gap-4">
              <a
                href="/contact"
                className="hidden md:inline-flex items-center px-4 py-2 rounded-full bg-white text-black hover:bg-gray-100 transition-colors text-sm font-medium"
              >
                Contact Us
              </a>
              <div className="md:hidden">
                <button
                  onClick={() => setIsMenuOpen(!isMenuOpen)}
                  className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white"
                >
                  {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                </button>
              </div>
            </div>
          </div>
        </div>
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-4 pt-2 pb-3 space-y-2 max-h-[80vh] overflow-y-auto">
              {navigation.map((item) => (
                <div key={item.href} className="space-y-2">
                  <div className="flex items-center justify-between">
                    {item.dropdown ? (
                      <button
                        onClick={() => toggleMobileDropdown(item.title)}
                        className="flex items-center justify-between w-full py-2 text-base font-medium text-gray-300 hover:text-white"
                      >
                        {item.title}
                        <ChevronDown className={`ml-1 h-4 w-4 transition-transform ${
                          activeMobileDropdown === item.title ? 'rotate-180' : ''
                        }`} />
                      </button>
                    ) : (
                      <Link
                        to={item.href}
                        className="block py-2 text-base font-medium text-gray-300 hover:text-white"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        {item.title}
                      </Link>
                    )}
                  </div>

                  {item.dropdown && activeMobileDropdown === item.title && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      className="pl-4 space-y-6"
                    >
                      {item.dropdown.items.map((section, idx) => (
                        <div key={idx} className="space-y-4">
                          {section.category && (
                            <h3 className="text-sm font-medium text-[#4ADE80] tracking-wider uppercase pt-2">
                              {section.category}
                            </h3>
                          )}
                          <div className="space-y-4">
                            {section.items.map((dropdownItem, itemIdx) => (
                              <a
                                key={itemIdx}
                                href="#"
                                className="group block space-y-1 rounded-xl p-3 transition-all duration-200 hover:bg-white/5 border border-transparent hover:border-white/10"
                                onClick={() => setIsMenuOpen(false)}
                              >
                                <p className="text-base font-medium text-white group-hover:text-[#4ADE80] transition-colors">
                                  {dropdownItem.title}
                                </p>
                                <p className="text-sm text-white/50 group-hover:text-white/70 transition-colors">
                                  {dropdownItem.description}
                                </p>
                              </a>
                            ))}
                          </div>
                        </div>
                      ))}
                      <div className="py-4 mt-4 border-t border-white/10">
                        <div className="space-y-3">
                          <p className="text-sm font-medium text-white">Need help choosing?</p>
                          <p className="text-sm text-white/60">We'll help you find the right solution</p>
                          <Link
                            to="/contact"
                            className="inline-flex items-center px-4 py-2 rounded-full bg-white text-black hover:bg-gray-100 transition-colors text-sm font-medium"
                            onClick={() => setIsMenuOpen(false)}
                          >
                            Contact Us
                            <ArrowRight className="ml-2 w-4 h-4" />
                          </Link>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </div>
              ))}
              <Link
                to="/contact"
                className="block py-2 text-base font-medium text-gray-300 hover:text-white"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact Us
              </Link>
            </div>
          </div>
        )}
      </nav>

      <main className="pt-16">{children}</main>

      <footer className="bg-black mt-auto py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {/* Call Section */}
            <div className="space-y-4">
              <h3 className="text-white text-lg font-normal">Call</h3>
              <a href="tel:+37253999974" className="text-gray-500 hover:text-white transition-colors">
                +372 5399 9974
              </a>
            </div>

            {/* Write Section */}
            <div className="space-y-4">
              <h3 className="text-white text-lg font-normal">Write</h3>
              <div className="space-y-2">
                <a href="mailto:hello@ronasit.com" className="block text-gray-500 hover:text-white transition-colors">
                  hello@ronasit.com
                </a>
                <a href="#" className="block text-gray-500 hover:text-white transition-colors">
                  Telegram
                </a>
                <a href="#" className="block text-gray-500 hover:text-white transition-colors">
                  Whatsapp
                </a>
              </div>
            </div>

            {/* Legal Address Section */}
            <div className="space-y-4">
              <h3 className="text-white text-lg font-normal">Legal Address</h3>
              <div className="space-y-1">
                <p className="text-gray-500">10151</p>
                <p className="text-gray-500">Ahtri 12</p>
                <p className="text-gray-500">Tallinn, Estonia</p>
              </div>
            </div>
          </div>

          {/* Bottom Section */}
          <div className="mt-24 flex flex-col md:flex-row justify-between items-start gap-8">
            <p className="text-gray-500 text-sm">
              © 2025 Ronas IT — Software development company.<br />
              All rights reserved.
            </p>
            <div className="flex items-center gap-8">
              <a href="#" className="text-gray-500 hover:text-white text-sm transition-colors">
                Public Offer Agreement
              </a>
              <a href="#" className="text-gray-500 hover:text-white text-sm transition-colors">
                Privacy Policy
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}