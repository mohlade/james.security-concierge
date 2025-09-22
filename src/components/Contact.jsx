import React, { useState } from 'react';
import { Phone, Mail, MapPin, Shield, Zap, Clock, Send, ArrowRight } from 'lucide-react';
import ContactForm from './ContactForm';

export default function Contact() {
  const [activeContact, setActiveContact] = useState(null);

  const contactInfo = [
    { 
      icon: Phone, 
      label: 'Phone', 
      value: '+44 (0) 79 8489 0730', 
      href: 'tel:+447984890730',
      description: 'Available during business hours'
    }, 
    { 
      icon: Mail, 
      label: 'Email', 
      value: 'admin@jamessecurity.co.uk', 
      href: 'mailto:admin@jamessecurity.co.uk',
      description: 'Response within 24 hours'
    }, 
    { 
      icon: MapPin, 
      label: 'Address', 
      value: 'James Security/Concierge Ltd\nRoom 206, Jhamat House\nBarking, London IG11', 
      href: null,
      description: 'By appointment only'
    }
  ];

  const businessHours = [
    { day: 'Monday - Friday', time: '9:00 AM - 6:00 PM' },
    { day: 'Saturday', time: '10:00 AM - 4:00 PM' },
    { day: 'Sunday', time: 'Emergency services only' }
  ];

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-orange-50 to-amber-50 dark:from-gray-800 dark:to-gray-900 relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-r from-orange-400/10 to-amber-400/10 rounded-full blur-3xl animate-float-slow"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-l from-orange-500/10 to-orange-600/10 rounded-full blur-3xl animate-float-reverse"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-r from-orange-300/5 to-amber-300/5 rounded-full blur-3xl animate-pulse-slow"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="group inline-flex items-center px-4 py-2 bg-gradient-to-r from-orange-100 to-amber-100 dark:from-gray-800 dark:to-gray-700 rounded-full text-orange-700 dark:text-orange-300 text-sm font-medium shadow-lg mb-6 hover:shadow-xl transition-all duration-300 transform hover:scale-105">
            <Phone size={16} className="mr-2 group-hover:rotate-12 transition-transform duration-300" />
            Get In Touch
          </div>
          
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 leading-tight">
            <span className="bg-gradient-to-r from-gray-900 to-gray-700 dark:from-white dark:to-gray-200 bg-clip-text text-transparent">
              Ready to Secure
            </span>
            <br />
            <span className="bg-gradient-to-r from-orange-500 to-orange-600 bg-clip-text text-transparent">
              Your Business?
            </span>
          </h2>
          
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Contact us today for a free consultation and custom quote. Our experts are ready to discuss your security needs and provide tailored solutions.
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Info & Business Hours */}
          <div className="space-y-8">
            {/* Contact Information */}
            <div className="relative">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 flex items-center gap-3">
                <div className="p-3 bg-gradient-to-r from-orange-500 to-orange-600 rounded-xl shadow-lg">
                  <Phone size={20} className="text-white" />
                </div>
                Contact Information
              </h3>
              
              <div className="space-y-4">
                {contactInfo.map((contact, i) => {
                  const Icon = contact.icon;
                  return (
                    <div
                      key={i}
                      onMouseEnter={() => setActiveContact(i)}
                      onMouseLeave={() => setActiveContact(null)}
                      className="group relative bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm rounded-2xl p-6 border border-white/50 dark:border-gray-700/50 hover:shadow-xl transition-all duration-500 transform hover:-translate-y-1 overflow-hidden"
                    >
                      {/* Active overlay */}
                      {activeContact === i && (
                        <div className="absolute inset-0 bg-gradient-to-br from-orange-500/10 to-amber-500/10 rounded-2xl"></div>
                      )}
                      
                      {/* Gradient overlay */}
                      <div className="absolute inset-0 bg-gradient-to-br from-orange-500/5 to-amber-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                      
                      <div className="relative z-10 flex items-start gap-4">
                        <div className={`
                          p-3 bg-gradient-to-r from-orange-500 to-orange-600 rounded-xl 
                          shadow-lg transition-all duration-300 flex-shrink-0
                          ${activeContact === i ? 'scale-110 ring-2 ring-white/20' : 'group-hover:scale-110'}
                        `}>
                          <Icon size={20} className="text-white" />
                        </div>
                        
                        <div className="flex-1 min-w-0">
                          <h4 className="font-semibold text-gray-900 dark:text-white mb-1 group-hover:text-orange-600 transition-colors">
                            {contact.label}
                          </h4>
                          
                          {contact.href ? (
                            <a 
                              href={contact.href}
                              className="group-hover:text-orange-600 dark:group-hover:text-orange-400 transition-colors text-gray-600 dark:text-gray-300 hover:underline block"
                              aria-label={`Contact us via ${contact.label.toLowerCase()}`}
                            >
                              {contact.value.split('\n').map((line, idx) => (
                                <span key={idx} className={idx > 0 ? 'block' : ''}>
                                  {line}
                                </span>
                              ))}
                            </a>
                          ) : (
                            <span className="text-gray-600 dark:text-gray-300 block whitespace-pre-line">
                              {contact.value}
                            </span>
                          )}
                          
                          <p className="text-xs text-gray-500 dark:text-gray-400 mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            {contact.description}
                          </p>
                        </div>
                      </div>
                      
                      {/* Animated underline */}
                      <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-orange-500 to-orange-600 opacity-0 group-hover:opacity-100 group-hover:w-full transition-all duration-500 ease-out"></div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Business Hours */}
            <div className="bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm rounded-2xl p-6 border border-white/50 dark:border-gray-700/50 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-orange-50/30 to-amber-50/30 dark:from-gray-800/20 dark:to-gray-700/20"></div>
              
              <div className="relative z-10">
                <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-3">
                  <div className="p-2 bg-gradient-to-r from-orange-500 to-orange-600 rounded-lg shadow-lg">
                    <Clock size={18} className="text-white" />
                  </div>
                  Business Hours
                </h4>
                
                <div className="space-y-4 text-gray-600 dark:text-gray-300">
                  {businessHours.map((hour, i) => (
                    <div key={i} className="flex justify-between items-center p-3 bg-white/50 dark:bg-gray-700/50 rounded-lg hover:bg-white/70 dark:hover:bg-gray-600/50 transition-colors duration-200">
                      <span className="font-medium">{hour.day}</span>
                      <span className={`font-semibold ${
                        i === 2 ? 'text-orange-600 dark:text-orange-400' : 'text-gray-800 dark:text-gray-200'
                      }`}>
                        {hour.time}
                      </span>
                    </div>
                  ))}
                  
                  <div className="pt-4 border-t border-orange-200/50 dark:border-orange-800/50 mt-4">
                    <p className="font-bold text-orange-600 dark:text-orange-400 flex items-center gap-2 text-sm">
                      <Zap size={16} className="animate-pulse" />
                      24/7 Emergency Response Available
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white/80 dark:bg-gray-900/80 backdrop-blur-md rounded-3xl p-8 shadow-2xl border border-orange-200/50 dark:border-orange-800/50 relative overflow-hidden">
            {/* Decorative elements */}
            <div className="absolute top-4 right-4 w-12 h-12 bg-gradient-to-r from-orange-400/20 to-orange-500/20 rounded-full animate-bounce-slow opacity-30"></div>
            <div className="absolute bottom-4 left-4 w-8 h-8 bg-gradient-to-r from-amber-400/20 to-orange-400/20 rounded-full animate-pulse-slow opacity-40"></div>
            
            <div className="relative z-10">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-3">
                <div className="p-2 bg-gradient-to-r from-orange-500 to-orange-600 rounded-lg shadow-lg">
                  <Send size={18} className="text-white" />
                </div>
                Send us a Message
              </h3>
              
              <div className="space-y-4 mb-6">
                <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-300">
                  <ArrowRight size={16} className="text-orange-500" />
                  <span>Free consultation within 24 hours</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-300">
                  <ArrowRight size={16} className="text-orange-500" />
                  <span>Custom security solutions</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-300">
                  <ArrowRight size={16} className="text-orange-500" />
                  <span>No obligation quote</span>
                </div>
              </div>
              
              <ContactForm />
            </div>
          </div>
        </div>

        {/* Quick Contact Cards */}
        <div className="mt-16 grid md:grid-cols-3 gap-6">
          {[
            {
              icon: Phone,
              title: 'Call Us Now',
              subtitle: 'Immediate assistance',
              action: 'Call +44 (0) 79 8489 0730',
              href: 'tel:+447984890730',
              color: 'from-blue-500 to-blue-600'
            },
            {
              icon: Mail,
              title: 'Email Us',
              subtitle: 'Detailed inquiries',
              action: 'Send Email',
              href: 'mailto:admin@jamessecurity.co.uk',
              color: 'from-green-500 to-green-600'
            },
            {
              icon: MapPin,
              title: 'Visit Us',
              subtitle: 'By appointment',
              action: 'Get Directions',
              href: 'https://www.google.com/maps/search/?api=1&query=James+Security+Concierge+Barking',
              color: 'from-purple-500 to-purple-600'
            }
          ].map((card, i) => {
            const Icon = card.icon;
            return (
              <a
                key={i}
                href={card.href}
                className="group relative bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-700 rounded-2xl p-6 text-center hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-200/50 dark:border-gray-600/50"
                target={card.href.includes('http') ? '_blank' : '_self'}
                rel={card.href.includes('http') ? 'noopener noreferrer' : ''}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-orange-500/5 to-amber-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                <div className="relative z-10 space-y-4">
                  <div className={`p-3 mx-auto w-fit bg-gradient-to-r ${card.color} rounded-xl shadow-lg group-hover:scale-110 transition-all duration-300`}>
                    <Icon size={24} className="text-white" />
                  </div>
                  
                  <div>
                    <h4 className="text-lg font-bold text-gray-900 dark:text-white group-hover:text-orange-600 transition-colors mb-1">
                      {card.title}
                    </h4>
                    <p className="text-sm text-gray-600 dark:text-gray-300">{card.subtitle}</p>
                  </div>
                  
                  <p className="font-semibold text-orange-600 dark:text-orange-400 text-sm group-hover:text-orange-700 dark:group-hover:text-orange-300 transition-colors">
                    {card.action}
                  </p>
                  
                  <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-orange-500 to-orange-600 opacity-0 group-hover:opacity-100 group-hover:w-16 transition-all duration-500 ease-out"></div>
                </div>
              </a>
            );
          })}
        </div>
      </div>

      <style jsx>{`
        @keyframes float-slow {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(180deg); }
        }
        
        @keyframes float-reverse {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-15px) rotate(-180deg); }
        }
        
        @keyframes pulse-slow {
          0%, 100% { transform: scale(1); opacity: 0.3; }
          50% { transform: scale(1.05); opacity: 0.5; }
        }
        
        @keyframes bounce-slow {
          0%, 100% { transform: translateY(-25%); }
          50% { transform: translateY(0); }
        }
      `}</style>
    </section>
  );
}