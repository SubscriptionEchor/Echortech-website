import React from 'react';
import { NavItem } from '../types';
import { Menu, X } from 'lucide-react';
import Marquee from './Marquee';

const navigation: NavItem[] = [
  { title: 'Home', href: '/' },
  { title: 'About', href: '/about' },
  { title: 'Services', href: '/services' },
  { title: 'Contact', href: '/contact' },
  { title: 'FAQ', href: '/faq' },
];

export default function Layout({ children }: { children: React.ReactNode }) {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <div className="min-h-screen bg-black text-gray-100">
      <Marquee />
      <nav className="bg-gray-800/50 backdrop-blur-lg fixed w-full z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                {navigation.map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    className="px-3 py-2 rounded-md text-sm font-medium tracking-wide text-gray-300 hover:text-white hover:bg-gray-700 transition-colors"
                  >
                    {item.title}
                  </a>
                ))}
              </div>
            </div>
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
              >
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {navigation.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-gray-700"
                >
                  {item.title}
                </a>
              ))}
            </div>
          </div>
        )}
      </nav>

      <main className="pt-16">{children}</main>

      <footer className="bg-[#0C0D0C] border-t border-[#1A1D1A] mt-auto py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row justify-between">
            {/* Logo and Made with text */}
            <div className="mb-12 lg:mb-0">
              <img src="/src/assets/images/echor-nav-logo.svg" alt="Hex" className="h-8 w-auto mb-4" />
              <div className="flex items-center gap-2 text-[#71717A] text-sm">
                <span>Made with</span>
                <span className="text-[#F43F5E]">♥</span>
                <span>on</span>
                <span className="text-[#3B82F6]">🌍</span>
              </div>
            </div>

            {/* Navigation Columns */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 lg:gap-16">
              {/* Company Column */}
              <div>
                <h3 className="text-[#F4F4F5] font-medium mb-4 text-sm tracking-wide uppercase">Company</h3>
                <ul className="space-y-3">
                  {['Careers', 'Customers', 'Media kit', 'Newsroom'].map((item) => (
                    <li key={item}>
                      <a href="#" className="text-[#A1A1AA] hover:text-white text-sm transition-colors">
                        {item}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Product Column */}
              <div>
                <h3 className="text-[#F4F4F5] font-medium mb-4 text-sm tracking-wide uppercase">Product</h3>
                <ul className="space-y-3">
                  {[
                    'Notebooks',
                    'Explore',
                    'Hex Magic',
                    'Enterprise',
                    'For Teams',
                    'App Builder',
                    'Pricing',
                    'Integrations',
                    'Security'
                  ].map((item) => (
                    <li key={item}>
                      <a href="#" className="text-[#A1A1AA] hover:text-white text-sm transition-colors">
                        {item}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Resources Column */}
              <div>
                <h3 className="text-[#F4F4F5] font-medium mb-4 text-sm tracking-wide uppercase">Resources</h3>
                <ul className="space-y-3">
                  {[
                    'Blog',
                    'Docs',
                    'Quickstart',
                    'Resources',
                    'Templates',
                    'Changelog',
                    'Trust Center'
                  ].map((item) => (
                    <li key={item}>
                      <a href="#" className="text-[#A1A1AA] hover:text-white text-sm transition-colors">
                        {item}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Contact Column */}
              <div>
                <h3 className="text-[#F4F4F5] font-medium mb-4 text-sm tracking-wide uppercase">Contact</h3>
                <ul className="space-y-3">
                  {['Support', 'Sales', 'Twitter', 'Email us'].map((item) => (
                    <li key={item}>
                      <a href="#" className="text-[#A1A1AA] hover:text-white text-sm transition-colors">
                        {item}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Bottom Section */}
          <div className="mt-16 pt-8 border-t border-[#27272A] flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-[#71717A] text-sm">
              © {new Date().getFullYear()} Hex Technologies Inc.
            </div>
            <div className="flex items-center gap-6">
              <a href="#" className="text-[#71717A] hover:text-white text-sm transition-colors">
                Privacy policy
              </a>
              <a href="#" className="text-[#71717A] hover:text-white text-sm transition-colors">
                Terms & conditions
              </a>
              <a href="#" className="text-[#71717A] hover:text-white text-sm transition-colors">
                Modern slavery statement
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}