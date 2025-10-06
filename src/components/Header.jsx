import React, { useState, useEffect } from 'react';
import { X, Menu } from 'lucide-react';
// Logo import removed

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
        ? 'bg-white/95 backdrop-blur-md shadow-lg border-b border-orange-200/20'
        : 'bg-white/80 backdrop-blur-sm'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <nav className="flex items-center justify-between h-16">
          {/* Logo Section - Text Only */}
          <div className="flex items-center relative group">
            <a href="#home" className="flex items-center">
              <h1 className="text-2xl font-bold bg-gradient-to-r from-orange-500 to-orange-600 bg-clip-text text-transparent">
                JAMES.
              </h1>
              <p className="text-sm text-orange-600 -mt-1 font-medium ml-2">
                Security/Concierge
              </p>
            </a>
            <div className="absolute -inset-2 bg-gradient-to-r from-orange-500/10 to-orange-600/10 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>
          </div>

          <ul className="hidden md:flex items-center space-x-8">
            {['Home', 'Services', 'Sectors', 'About', 'Contact'].map((item, index) => (
              <li key={index}>
                <a
                  href={`#${item.toLowerCase()}`}
                  className="relative text-gray-700 hover:text-orange-600 transition-colors duration-300 py-2 px-1 group"
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
            className="md:hidden p-2 rounded-xl bg-gradient-to-r from-orange-100 to-orange-200 text-orange-600 hover:from-orange-200 hover:to-orange-300 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
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
          <div className="py-4 bg-white/95 backdrop-blur-md rounded-b-xl border-t border-orange-200/20">
            {['Home', 'Services', 'Sectors', 'About', 'Contact'].map((item, index) => (
              <a
                key={index}
                href={`#${item.toLowerCase()}`}
                onClick={() => setIsMobileMenuOpen(false)}
                className="block px-4 py-3 text-gray-700 hover:text-orange-600 hover:bg-orange-50 transition-all duration-300"
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