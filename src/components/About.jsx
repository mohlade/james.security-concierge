import React, { useState, useEffect } from 'react';
import { Shield, UserCheck, Star, CheckCircle, ArrowRight } from 'lucide-react';

export default function About() {
  const [stats, setStats] = useState([
    { value: '0', label: 'Satisfied Clients', icon: UserCheck },
    { value: '0', label: 'Support Available', icon: Shield },
    { value: '0', label: 'Years Experience', icon: Star },
    { value: '0', label: 'Licensed & Insured', icon: CheckCircle }
  ]);

  const targetStats = [
    { value: '500+', label: 'Satisfied Clients', icon: UserCheck },
    { value: '24/7', label: 'Support Available', icon: Shield },
    { value: '1+', label: 'Years Experience', icon: Star },
    { value: '100%', label: 'Licensed & Insured', icon: CheckCircle }
  ];

  // Animated counter effect
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            animateStats();
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.5 }
    );

    const statsContainer = document.querySelector('#stats-container');
    if (statsContainer) {
      observer.observe(statsContainer);
    }

    return () => observer.disconnect();
  }, []);

  const animateStats = () => {
    stats.forEach((stat, index) => {
      const targetValue = targetStats[index].value;
      const duration = index === 0 ? 2000 : 1500; // Longer for the first stat (500+)
      
      let start = 0;
      const increment = targetValue.includes('+') || targetValue.includes('%') ? 1 : 1;
      const timer = setInterval(() => {
        start += increment;
        if (
          (targetValue.includes('+') && start >= 500) ||
          (targetValue.includes('%') && start >= 100) ||
          (targetValue === '24/7' && start >= 1) ||
          (targetValue.includes('+') && start >= 10)
        ) {
          clearInterval(timer);
          setStats(prev => {
            const newStats = [...prev];
            newStats[index] = { ...newStats[index], value: targetValue };
            return newStats;
          });
        } else {
          setStats(prev => {
            const newStats = [...prev];
            newStats[index] = { ...newStats[index], value: start.toLocaleString() };
            return newStats;
          });
        }
      }, duration / 500);
    });
  };

  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-900 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-l from-orange-100/50 to-transparent dark:from-orange-900/20 rounded-full blur-3xl animate-float-slow"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-gradient-to-r from-amber-100/30 to-transparent dark:from-amber-900/20 rounded-full blur-3xl animate-float-reverse"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content Section */}
          <div className="space-y-8">
            <div className="group inline-flex items-center px-4 py-2 bg-gradient-to-r from-orange-100 to-amber-100 dark:from-gray-800 dark:to-gray-700 rounded-full text-orange-700 dark:text-orange-300 text-sm font-medium shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
              <Shield size={16} className="mr-2 group-hover:rotate-12 transition-transform duration-300" />
              Why Choose Us
            </div>
            
            <div className="space-y-4">
              <h2 className="text-4xl lg:text-5xl font-bold leading-tight">
                <span className="bg-gradient-to-r from-gray-900 to-gray-700 dark:from-white dark:to-gray-200 bg-clip-text text-transparent">
                  Excellence in
                </span>
                <br />
                <span className="bg-gradient-to-r from-orange-500 to-orange-600 bg-clip-text text-transparent">
                  Security Services
                </span>
              </h2>
              
              <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed max-w-lg">
                With years of experience in the security industry, we've built a reputation for reliability, professionalism, and excellence. Our team is committed to providing the highest standard of service across all sectors with innovative solutions and cutting-edge technology.
              </p>
            </div>

            {/* Animated Stats */}
            <div id="stats-container" className="grid grid-cols-2 gap-6">
              {stats.map((stat, i) => {
                const Icon = stat.icon;
                return (
                  <div 
                    key={i} 
                    className="group relative bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm rounded-2xl p-6 hover:shadow-xl transition-all duration-500 transform hover:-translate-y-1 border border-white/50 dark:border-gray-700/50 overflow-hidden"
                  >
                    {/* Gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-br from-orange-50 to-amber-50 dark:from-gray-800/20 dark:to-gray-700/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    
                    <div className="relative z-10">
                      <div className="flex items-start gap-3 mb-4">
                        <div className="p-2 bg-gradient-to-r from-orange-500 to-orange-600 rounded-lg shadow-lg group-hover:scale-110 transition-all duration-300 flex-shrink-0">
                          <Icon size={20} className="text-white" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <h3 className="text-3xl lg:text-4xl font-bold bg-gradient-to-r from-orange-500 to-orange-600 bg-clip-text text-transparent group-hover:scale-[1.02] transition-transform duration-300">
                            {stat.value}
                          </h3>
                        </div>
                      </div>
                      <p className="text-gray-600 dark:text-gray-300 font-medium text-sm leading-tight group-hover:text-gray-800 dark:group-hover:text-gray-200 transition-colors duration-300">
                        {stat.label}
                      </p>
                      
                      {/* Animated underline */}
                      <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-orange-500 to-orange-600 rounded-full opacity-0 group-hover:opacity-100 group-hover:w-full transition-all duration-500 ease-out"></div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* CTA Button */}
            <div className="pt-4">
              <a 
                href="#contact"
                className="group inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
              >
                Learn Our Story
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform duration-300" />
              </a>
            </div>
          </div>

          {/* Quote Section */}
          <div className="relative">
            <div className="bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm rounded-3xl p-8 shadow-2xl border border-white/50 dark:border-gray-700/50 relative overflow-hidden">
              {/* Quote overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-orange-50/30 to-amber-50/30 dark:from-gray-800/20 dark:to-gray-700/20"></div>
              
              <div className="relative z-10 text-center space-y-6">
                <div className="relative">
                  <div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-r from-orange-500 to-orange-600 rounded-2xl flex items-center justify-center shadow-xl transform hover:scale-110 transition-all duration-300 cursor-pointer">
                    <Shield size={40} className="text-white drop-shadow-md" />
                  </div>
                </div>
                
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Our Commitment</h3>
                  <blockquote className="text-gray-600 dark:text-gray-300 leading-relaxed italic text-lg max-w-2xl mx-auto">
                    "We are dedicated to providing exceptional security and concierge services that exceed our clients' expectations. Your safety and satisfaction are our top priorities, backed by years of expertise and innovative solutions."
                  </blockquote>
                </div>
                
                <div className="space-y-3">
                  <div className="flex justify-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star 
                        key={i} 
                        size={20} 
                        className="text-orange-400 fill-orange-400 animate-pulse" 
                        style={{ animationDelay: `${i * 0.1}s` }}
                      />
                    ))}
                  </div>
                  <p className="text-sm text-orange-600 dark:text-orange-400 font-semibold tracking-wide">
                    5-Star Customer Satisfaction
                  </p>
                </div>
              </div>
            </div>

            {/* Floating decorative elements */}
            <div className="absolute -top-4 -right-4 w-12 h-12 bg-gradient-to-r from-orange-400/20 to-orange-500/20 rounded-full animate-bounce-slow"></div>
            <div className="absolute -bottom-4 -left-4 w-8 h-8 bg-gradient-to-r from-amber-400/20 to-orange-400/20 rounded-full animate-pulse-slow"></div>
            <div className="absolute top-1/2 right-2 w-4 h-4 bg-orange-300/30 rounded-full animate-ping opacity-60"></div>
          </div>
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
        @keyframes bounce-slow {
          0%, 100% { transform: translateY(-25%); }
          50% { transform: translateY(0); }
        }
        @keyframes pulse-slow {
          0%, 100% { opacity: 0.3; transform: scale(1); }
          50% { opacity: 0.6; transform: scale(1.1); }
        }
      `}</style>
    </section>
  );
}