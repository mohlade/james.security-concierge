import React from 'react';

export default function SectorCard({ sector, onEnter, onLeave }) {
  const Icon = sector.icon;
  
  return (
    <div 
      onMouseEnter={onEnter}
      onMouseLeave={onLeave}
      className="group relative bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl p-6 text-center hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 border border-white/50 dark:border-gray-700/50 hover:border-orange-200 dark:hover:border-orange-800"
    >
      {/* Hover overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-orange-500/5 to-amber-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
      
      <div className="relative z-10">
        <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-orange-500 to-orange-600 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-all duration-300 shadow-lg hover:shadow-xl">
          <Icon size={28} className="text-white" />
        </div>
        
        <h4 className="font-bold text-lg text-gray-900 dark:text-white mb-3 group-hover:text-orange-600 transition-all duration-300 transform group-hover:scale-[1.02]">
          {sector.name}
        </h4>
        
        <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:translate-y-0 group-hover:scale-[1.01] max-w-[200px] mx-auto">
          {sector.description}
        </p>
        
        {/* Subtle underline animation */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-orange-500 to-orange-600 rounded-full opacity-0 group-hover:opacity-100 group-hover:w-16 transition-all duration-500 ease-out"></div>
      </div>
    </div>
  );
}