import React from 'react';
import { Zap, ArrowRight, Shield, ConciergeBell, Star } from 'lucide-react';

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-white via-orange-50 to-amber-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-700 relative overflow-hidden">
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
      `}</style>
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16">
          {/* Left Content */}
          <div className="lg:w-1/2 text-center lg:text-left">
            <div className="inline-flex items-center bg-orange-100 dark:bg-orange-900/20 px-4 py-2 rounded-full text-orange-600 dark:text-orange-400 font-semibold mb-6">
              <Zap size={16} className="mr-2" />
              Premium Security Solutions
            </div>

            <h1 className="text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight">
              <span className="bg-gradient-to-r from-gray-900 to-gray-700 dark:from-white dark:to-gray-200 bg-clip-text text-transparent">
                Professional
              </span>
              <br />
              <span className="bg-gradient-to-r from-orange-500 to-orange-600 bg-clip-text text-transparent">
                Security & Concierge
              </span>
              <br />
              <span className="bg-gradient-to-r from-gray-900 to-gray-700 dark:from-white dark:to-gray-200 bg-clip-text text-transparent">
                Services
              </span>
            </h1>

            <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed max-w-2xl mt-6">
  Partnering with forward-thinking organizations across corporate, educational, healthcare, and residential sectors, James Security & Concierge provides integrated security and concierge solutions engineered for operational excellence. Our full-spectrum services encompass strategic risk assessment, advanced technological deployments including biometric access control and AI-enhanced surveillance, and white-glove concierge support that elevates the client experience. With over a decade of proven expertise, we deliver measurable security outcomes while maintaining seamless operational continuity for your organization.
</p>

            <div className="flex flex-col sm:flex-row gap-4 mt-8">
              <a
                href="#contact"
                className="group px-8 py-4 bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white rounded-xl font-semibold transition-all duration-300 text-center shadow-lg hover:shadow-xl transform hover:scale-105 flex items-center justify-center"
              >
                Get Quote
                <ArrowRight size={20} className="ml-2 group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="#services"
                className="group px-8 py-4 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border-2 border-orange-500 text-orange-600 dark:text-orange-400 hover:bg-orange-500 hover:text-white rounded-xl font-semibold transition-all duration-300 text-center shadow-lg hover:shadow-xl transform hover:scale-105"
              >
                Our Services
              </a>
            </div>
          </div>

          {/* Right Side with Floating Elements */}
          <div className="relative lg:w-1/2">
            <div className="absolute top-10 right-10 bg-white/90 dark:bg-gray-800/90 backdrop-blur-md border border-orange-200/50 dark:border-orange-800/50 rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:scale-105 animate-float">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-gradient-to-r from-orange-500 to-orange-600 rounded-xl">
                  <Shield size={24} className="text-white" />
                </div>
                <div>
                  <span className="text-gray-900 dark:text-white font-semibold block">24/7 Security</span>
                  <span className="text-orange-600 dark:text-orange-400 text-sm">Always Protected</span>
                </div>
              </div>
            </div>

            <div className="absolute bottom-20 left-5 bg-white/90 dark:bg-gray-800/90 backdrop-blur-md border border-orange-200/50 dark:border-orange-800/50 rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:scale-105 animate-float">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-gradient-to-r from-orange-500 to-orange-600 rounded-xl">
                  <ConciergeBell size={24} className="text-white" />
                </div>
                <div>
                  <span className="text-gray-900 dark:text-white font-semibold block">Premium Service</span>
                  <span className="text-orange-600 dark:text-orange-400 text-sm">Excellence Guaranteed</span>
                </div>
              </div>
            </div>

            <div className="absolute top-1/2 right-0 bg-white/90 dark:bg-gray-800/90 backdrop-blur-md border border-orange-200/50 dark:border-orange-800/50 rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:scale-105 animate-float">
              <div className="text-center">
                <div className="text-3xl font-bold bg-gradient-to-r from-orange-500 to-orange-600 bg-clip-text text-transparent">100+</div>
                <div className="text-gray-600 dark:text-gray-300 text-sm font-medium">Happy Clients</div>
                <div className="flex justify-center mt-2">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={12} className="text-orange-400" />
                  ))}
                </div>
              </div>
            </div>

            <div className="w-96 h-96 bg-gradient-to-r from-orange-400/20 to-amber-500/20 rounded-full blur-3xl animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;