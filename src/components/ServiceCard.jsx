import React from 'react';
import { CheckCircle, ArrowRight } from 'lucide-react';

export default function ServiceCard({ service, isActive = false, onEnter, onLeave }) {
  const Icon = service.icon;
  
  return (
    <div 
      onMouseEnter={onEnter} 
      onMouseLeave={onLeave} 
      className={`
        group relative bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg 
        transition-all duration-500 transform 
        border border-gray-100 dark:border-gray-700
        ${
          isActive 
            ? 'ring-2 ring-orange-500/30 shadow-xl shadow-orange-500/10 translate-y-0 scale-[1.02]' 
            : 'hover:shadow-2xl hover:-translate-y-3 hover:border-orange-200 dark:hover:border-orange-800'
        }
      `}
    >
      {/* Active state overlay */}
      {isActive && (
        <div className="absolute inset-0 bg-gradient-to-br from-orange-500/10 to-amber-500/10 rounded-2xl"></div>
      )}
      
      {/* Hover overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-orange-500/5 to-amber-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      
      <div className="relative z-10">
        <div className={`
          w-16 h-16 bg-gradient-to-r from-orange-500 to-orange-600 rounded-2xl 
          flex items-center justify-center mb-6 shadow-lg transition-all duration-300
          ${isActive ? 'scale-110 ring-2 ring-white/20' : 'group-hover:scale-110'}
        `}>
          <Icon size={28} className="text-white" />
        </div>

        <h3 className={`
          text-xl font-bold mb-4 transition-all duration-300
          ${isActive 
            ? 'text-orange-600 dark:text-orange-400 scale-105' 
            : 'text-gray-900 dark:text-white group-hover:text-orange-600'
          }
        `}>
          {service.title}
        </h3>
        
        <p className={`
          text-gray-600 dark:text-gray-300 mb-6 leading-relaxed transition-opacity duration-300
          ${isActive ? 'opacity-100' : 'opacity-90'}
        `}>
          {service.description}
        </p>

        <div className="space-y-2 mb-6">
          {service.features.map((f, idx) => (
            <div 
              key={idx} 
              className={`
                flex items-center gap-2 text-sm transition-all duration-200
                ${isActive 
                  ? 'text-gray-700 dark:text-gray-200 text-base font-medium' 
                  : 'text-gray-500 dark:text-gray-400'
                }
              `}
            >
              <CheckCircle 
                size={isActive ? 18 : 16} 
                className={`
                  ${isActive ? 'text-orange-600 scale-110' : 'text-orange-500'}
                `} 
              />
              {f}
            </div>
          ))}
        </div>

        <div className="mt-6 pt-4 border-t border-gray-100 dark:border-gray-700">
          <button className={`
            flex items-center gap-2 text-orange-600 dark:text-orange-400 font-semibold 
            transition-all duration-300 hover:gap-3
            ${isActive 
              ? 'text-orange-700 dark:text-orange-300 scale-105' 
              : 'hover:text-orange-700 dark:hover:text-orange-300'
            }
          `}>
            Learn More 
            <ArrowRight 
              size={16} 
              className={`
                ml-1 transition-transform duration-300
                ${isActive ? 'translate-x-1 scale-110' : 'group-hover:translate-x-1'}
              `} 
            />
          </button>
        </div>
      </div>
    </div>
  );
}