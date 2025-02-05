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
          category: 'STRATEGY',
          items: [
            { title: 'Product Discovery', description: 'Research & product architecture' },
            { title: 'Proof of Concept', description: 'Validate your idea & viability' },
            { title: 'UX Audit', description: 'Make your product competitive' },
            { title: 'UI Concept', description: 'Define the unique style & visual' },
            { title: 'Pitch Deck', description: 'Winning investor presentation' }
          ]
        },
        {
          category: 'DESIGN',
          items: [
            { title: 'UI/UX Design', description: 'Web & Mobile App Design' },
            { title: 'Website Design', description: 'Custom Websites, Landing page' },
            { title: 'Mobile Design', description: 'User-friendly applications' },
            { title: 'Brand Identity', description: 'Logo, Typography, Color' },
            { title: 'Graphic Design', description: 'Illustrations, Icons, Social media' }
          ]
        },
        {
          category: 'DEVELOPMENT',
          items: [
            { title: 'Webflow Development', description: 'Site builder solutions' },
            { title: 'Landing page', description: 'High-converting website' },
            { title: 'Web Development', description: 'Front-End & Back-End Development' },
            { title: 'Mobile Development', description: 'IOS, Android, Cross-platform' },
            { title: 'DevOps', description: 'QA, Manual testing, Engineering' }
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
                          className="absolute left-0 top-full mt-1 w-screen max-w-[90rem] max-h-[calc(100vh-5rem)] bg-black/95 backdrop-blur-xl rounded-2xl shadow-2xl border border-white/10 overflow-y-auto"
                          style={{ zIndex: 50 }}
                        >
                          <div className={`grid ${item.dropdown.type === 'industries' ? 'grid-cols-1 md:grid-cols-2' : 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3'} gap-4 md:gap-8 lg:gap-12 p-4 md:p-6 lg:p-8 overflow-y-auto`}>
                            {item.dropdown.items.map((section, idx) => (
                              <div key={idx} className="space-y-6">
                                {section.category && (
                                  <h3 className="text-sm font-medium text-[#4ADE80] tracking-wider uppercase">
                                    {section.category}
                                  </h3>
                                )}
                                <div className="space-y-4">
                                  {section.items.map((dropdownItem, itemIdx) => (
                                    <a
                                      key={itemIdx}
                                      href="#"
                                      className="group flex items-start gap-2 md:gap-4 rounded-xl p-3 md:p-4 transition-all duration-200 hover:bg-white/5 relative border border-transparent hover:border-white/10"
                                    >
                                      <div className="flex-1">
                                        <p className="text-base md:text-lg font-medium text-white group-hover:text-[#4ADE80] transition-colors">
                                           {dropdownItem.title}
                                        </p>
                                        <p className="mt-1 md:mt-2 text-xs md:text-sm text-white/50 group-hover:text-white/70 transition-colors line-clamp-2">
                                           {dropdownItem.description}
                                        </p>
                                      </div>
                                      <div className="flex-shrink-0 opacity-0 group-hover:opacity-100 transition-opacity absolute right-3 top-1/2 -translate-y-1/2">
                                        <ArrowRight className="w-5 h-5 text-[#4ADE80]" />
                                      </div>
                                    </a>
                                  ))}
                                </div>
                              </div>
                            ))}
                          </div>
                          <div className="mt-2 md:mt-4 p-4 md:p-6 bg-white/5 border-t border-white/10">
                            <div className="flex items-center justify-between">
                              <div>
                                <p className="text-xs md:text-sm font-medium text-white">Need help choosing?</p>
                                <p className="text-xs md:text-sm text-white/60">We'll help you find the right solution</p>
                              </div>
                              <a
                                href="/contact"
                                className="inline-flex items-center px-3 md:px-4 py-1.5 md:py-2 rounded-full bg-white text-black hover:bg-gray-100 transition-colors text-xs md:text-sm font-medium"
                              >
                                Contact Us
                                <ArrowRight className="ml-2 w-4 h-4" />
                              </a>
                            </div>
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