import React from 'react';
import { 
  Shield, 
  Star, 
  ArrowRight, 
  Phone, 
  Mail, 
  MapPin, 
  Zap, 
  Clock, 
  Facebook, 
  Twitter, 
  Linkedin, 
  Instagram 
} from 'lucide-react';

export default function Footer() {
  const services = [
    'Manned Guarding',
    'Concierge Services', 
    'CCTV & Monitoring',
    'Mobile Patrols',
    'Access Control',
    'Construction Security'
  ];

  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Services', href: '#services' },
    { name: 'Sectors', href: '#sectors' },
    { name: 'About', href: '#about' },
    { name: 'Contact', href: '#contact' }
  ];

  const legalLinks = [
    { name: 'Privacy Policy', href: '/privacy' },
    { name: 'Terms of Service', href: '/terms' },
    { name: 'Cookie Policy', href: '/cookies' }
  ];

  return (
    <footer className="bg-gray-900 text-white relative overflow-hidden">
      {/* Animated background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div 
          className="absolute inset-0 animate-subtle-pattern"
          style={{ 
            backgroundImage: `radial-gradient(circle at 25px 25px, #f97316 2px, transparent 0)`, 
            backgroundSize: '50px 50px' 
          }}
        />
      </div>

      {/* Main Footer Content */}
      <div className="relative z-10 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            {/* Company Info */}
            <div className="md:col-span-2 space-y-6">
              <div className="group flex items-center gap-3">
                <div className="p-3 bg-gradient-to-r from-orange-500 to-orange-600 rounded-2xl shadow-lg group-hover:scale-110 transition-all duration-300">
                  <Shield size={32} className="text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold bg-gradient-to-r from-orange-400 to-orange-500 bg-clip-text text-transparent">
                    James Security & Concierge
                  </h3>
                  <p className="text-gray-400 text-sm">Professional Security Solutions</p>
                </div>
              </div>

              <p className="text-gray-400 leading-relaxed max-w-md opacity-90">
                Professional security and concierge services you can trust. Protecting what matters most to you with cutting-edge technology and expert personnel across all sectors.
              </p>

              {/* Rating */}
              <div className="flex items-center gap-2">
                {[...Array(5)].map((_, i) => (
                  <Star 
                    key={i} 
                    size={16} 
                    className="text-orange-400 fill-orange-400" 
                    style={{ animationDelay: `${i * 0.1}s` }}
                  />
                ))}
                <span className="text-gray-400 text-sm ml-2 font-medium">5-Star Service</span>
              </div>

              {/* Social Media */}
              <div className="flex space-x-4 pt-4">
                {[
                  { icon: Facebook, href: 'https://facebook.com', color: 'hover:text-blue-400' },
                  { icon: Twitter, href: 'https://twitter.com', color: 'hover:text-sky-400' },
                  { icon: Linkedin, href: 'https://linkedin.com', color: 'hover:text-blue-600' },
                  { icon: Instagram, href: 'https://instagram.com', color: 'hover:text-pink-400' }
                ].map((social, i) => {
                  const Icon = social.icon;
                  return (
                    <a
                      key={i}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`
                        group p-2 rounded-lg bg-gray-800 hover:bg-gray-700 
                        transition-all duration-300 transform hover:scale-110 
                        ${social.color} opacity-70 hover:opacity-100
                      `}
                      aria-label={`Follow us on ${Icon.displayName || social.href}`}
                    >
                      <Icon size={18} className="group-hover:rotate-12 transition-transform" />
                    </a>
                  );
                })}
              </div>
            </div>

            {/* Services */}
            <div className="space-y-6">
              <h3 className="text-lg font-bold mb-6 text-orange-400 flex items-center gap-2">
                <Zap size={18} className="animate-pulse" />
                Services
              </h3>
              <ul className="space-y-3 text-gray-400">
                {services.map((service, i) => (
                  <li key={i} className="group">
                    <a 
                      href="#services" 
                      className="flex items-center gap-2 hover:text-orange-400 transition-all duration-300 transform group-hover:translate-x-2"
                    >
                      <ArrowRight 
                        size={12} 
                        className="group-hover:translate-x-1 transition-transform opacity-0 group-hover:opacity-100" 
                      />
                      <span className="transition-colors">{service}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Quick Contact */}
            <div className="space-y-6">
              <h3 className="text-lg font-bold mb-6 text-orange-400 flex items-center gap-2">
                <Phone size={18} />
                Quick Contact
              </h3>
              
              <div className="space-y-4 text-gray-400">
                {/* Phone */}
                <a 
                  href="tel:+447984890730"
                  className="group flex items-center gap-3 p-3 rounded-lg bg-gray-800 hover:bg-gray-700 transition-all duration-300 transform hover:scale-105"
                >
                  <div className="p-2 bg-orange-500/20 rounded-lg group-hover:bg-orange-500/30 transition-colors">
                    <Phone size={16} className="text-orange-400" />
                  </div>
                  <div>
                    <div className="text-sm font-medium text-white group-hover:text-orange-400 transition-colors">
                      Phone
                    </div>
                    <div className="text-sm">+44 (0) 79 8489 0730</div>
                  </div>
                </a>

                {/* Email */}
                <a 
                  href="mailto:admin@jamessecurity.co.uk"
                  className="group flex items-center gap-3 p-3 rounded-lg bg-gray-800 hover:bg-gray-700 transition-all duration-300 transform hover:scale-105"
                >
                  <div className="p-2 bg-orange-500/20 rounded-lg group-hover:bg-orange-500/30 transition-colors">
                    <Mail size={16} className="text-orange-400" />
                  </div>
                  <div>
                    <div className="text-sm font-medium text-white group-hover:text-orange-400 transition-colors">
                      Email
                    </div>
                    <div className="text-sm">admin@jamessecurity.co.uk</div>
                  </div>
                </a>

                {/* Address */}
                <div className="group flex items-start gap-3 p-3 rounded-lg bg-gray-800 hover:bg-gray-700 transition-all duration-300 transform hover:scale-105 cursor-default">
                  <div className="p-2 bg-orange-500/20 rounded-lg mt-1">
                    <MapPin size={16} className="text-orange-400" />
                  </div>
                  <div className="flex-1">
                    <div className="text-sm font-medium text-white">Address</div>
                    <div className="text-sm leading-relaxed">
                      James Security/Concierge Ltd<br />
                      Room 206, Jhamat House<br />
                      Barking, London IG11
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            {/* Quick Links */}
            <div className="flex flex-wrap justify-center md:justify-start gap-4 text-sm text-gray-400">
              {quickLinks.map((link, i) => (
                <a
                  key={i}
                  href={link.href}
                  className="group hover:text-orange-400 transition-colors duration-300 flex items-center gap-1"
                >
                  {link.name}
                  <ArrowRight size={10} className="opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                </a>
              ))}
            </div>

            {/* Business Hours */}
            <div className="text-center text-sm text-gray-400">
              <div className="flex items-center justify-center gap-2 mb-2">
                <Clock size={16} className="text-orange-400" />
                <span>Mon-Fri 9AM-6PM | 24/7 Emergency</span>
              </div>
            </div>

            {/* Legal Links */}
            <div className="flex flex-wrap justify-center md:justify-end gap-4 text-sm text-gray-400">
              {legalLinks.map((link, i) => (
                <a
                  key={i}
                  href={link.href}
                  className="group hover:text-orange-400 transition-colors duration-300"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>

          {/* Copyright */}
          <div className="pt-6 mt-6 border-t border-gray-800 text-center text-xs text-gray-500">
            <p>&copy; {new Date().getFullYear()} James Security & Concierge Ltd. All rights reserved.</p>
            <p className="mt-1">Licensed and regulated security professionals</p>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes subtle-pattern {
          0%, 100% { 
            transform: translateX(0) translateY(0) rotate(0deg); 
          }
          25% { 
            transform: translateX(-10px) translateY(-5px) rotate(90deg); 
          }
          50% { 
            transform: translateX(-5px) translateY(-10px) rotate(180deg); 
          }
          75% { 
            transform: translateX(5px) translateY(-5px) rotate(270deg); 
          }
        }

        .star-shimmer {
          position: relative;
          overflow: hidden;
        }

        .star-shimmer::after {
          content: '';
          position: absolute;
          top: -50%;
          left: -50%;
          width: 200%;
          height: 200%;
          background: linear-gradient(45deg, transparent, rgba(255, 165, 0, 0.1), transparent);
          transform: rotate(45deg);
          animation: shimmer 3s infinite;
        }

        @keyframes shimmer {
          0% { transform: translateX(-100%) translateY(-100%) rotate(45deg); }
          100% { transform: translateX(100%) translateY(100%) rotate(45deg); }
        }
      `}</style>
    </footer>
  );
}