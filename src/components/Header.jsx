import React, { useState, useEffect } from 'react';
import { X, Menu } from 'lucide-react';
import Logo from '../assets/Logo.jpg';

const Header = () => {
  const [scrollY, setScrollY] = useState(0);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const toggleMobile = () => setIsMobileMenuOpen((s) => !s);

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      scrollY > 50
        ? 'bg-gray-900/95 backdrop-blur-md shadow-lg border-b border-orange-200/20'
        : 'bg-gray-900/90 backdrop-blur-sm'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <nav className="flex items-center justify-between h-16">
          {/* Logo Section */}
          <div className="flex items-center relative group">
            <a href="#home" className="flex items-center">
              <img 
                src={Logo} 
                alt="James Security & Concierge Logo"
                className="h-12 w-auto max-h-14 object-contain group-hover:scale-105 transition-transform duration-300"
                loading="lazy"
              />
            </a>
            <div className="absolute -inset-2 bg-gradient-to-r from-orange-500/10 to-orange-600/10 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>
          </div>

          <ul className="hidden md:flex items-center space-x-8">
            {['Home', 'Services', 'Sectors', 'About', 'Contact'].map((item, index) => (
              <li key={index}>
                <a
                  href={`#${item.toLowerCase()}`}
                  className="relative text-gray-300 hover:text-orange-600 transition-colors duration-300 py-2 px-1 group"
                >
                  {item}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-orange-500 to-orange-600 group-hover:w-full transition-all duration-300"></span>
                </a>
              </li>
            ))}
          </ul>

          {/* Mobile menu button only */}
          <button
            onClick={toggleMobile}
            className="md:hidden p-2 rounded-xl bg-gray-800/90 text-gray-300 hover:bg-orange-600 hover:text-white transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 backdrop-blur-sm border border-gray-700/50"
          >
            {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </nav>

        {/* Mobile Menu */}
        <div
          className={`md:hidden transition-all duration-300 overflow-hidden ${
            isMobileMenuOpen ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0'
          }`}
        >
          <div className="py-4 bg-gray-900/95 backdrop-blur-md rounded-b-xl border-t border-orange-200/20">
            {['Home', 'Services', 'Sectors', 'About', 'Contact'].map((item, index) => (
              <a
                key={index}
                href={`#${item.toLowerCase()}`}
                onClick={() => setIsMobileMenuOpen(false)}
                className="block px-4 py-3 text-gray-300 hover:text-orange-600 hover:bg-orange-500/10 transition-all duration-300"
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;