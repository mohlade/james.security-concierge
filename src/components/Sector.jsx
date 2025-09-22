import React, { useState } from 'react';
import { Building, GraduationCap, Hospital, ShoppingCart, Factory, Bed, Home, Landmark } from 'lucide-react';
import SectorCard from './SectorCard';

export default function Sectors() {
  const [activeSector, setActiveSector] = useState(null);

  const sectors = [
    { icon: Building, name: 'Corporate', description: 'Office buildings and business centers' },
    { icon: GraduationCap, name: 'Education', description: 'Schools, universities, and campuses' },
    { icon: Hospital, name: 'Healthcare', description: 'Hospitals and medical facilities' },
    { icon: ShoppingCart, name: 'Retail', description: 'Shopping centers and stores' },
    { icon: Factory, name: 'Industrial', description: 'Manufacturing and warehouses' },
    { icon: Bed, name: 'Hospitality', description: 'Hotels and entertainment venues' },
    { icon: Home, name: 'Residential', description: 'Apartment complexes and housing' },
    { icon: Landmark, name: 'Government', description: 'Public buildings and facilities' }
  ];

  return (
    <section id="sectors" className="py-20 bg-gradient-to-br from-orange-50 to-amber-50 dark:from-gray-800 dark:to-gray-900 relative overflow-hidden">
      {/* Animated background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div 
          className="absolute inset-0 animate-subtle-pattern"
          style={{ 
            backgroundImage: `radial-gradient(circle at 25px 25px, #f97316 2px, transparent 0)`, 
            backgroundSize: '50px 50px' 
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-orange-100 to-amber-100 dark:from-gray-800 dark:to-gray-700 rounded-full text-orange-700 dark:text-orange-300 text-sm font-medium shadow-lg mb-6 transform hover:scale-105 transition-transform duration-300">
            <Building size={16} className="mr-2" />
            Industries We Serve
          </div>
          
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 leading-tight">
            <span className="bg-gradient-to-r from-gray-900 to-gray-700 dark:from-white dark:to-gray-200 bg-clip-text text-transparent">
              Trusted Across
            </span>
            <br />
            <span className="bg-gradient-to-r from-orange-500 to-orange-600 bg-clip-text text-transparent">
              All Sectors
            </span>
          </h2>
          
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Our expertise spans across diverse industries, providing tailored security solutions for each sector's unique requirements and compliance needs.
          </p>
        </div>

        {/* Sectors Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {sectors.map((sector, i) => (
            <SectorCard
              key={i}
              sector={sector}
              isActive={activeSector === i}
              onEnter={() => setActiveSector(i)}
              onLeave={() => setActiveSector(null)}
            />
          ))}
        </div>

        {/* Stats Row */}
        <div className="mt-16 grid md:grid-cols-4 gap-6">
          <div className="text-center p-6 bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm rounded-2xl border border-white/50 dark:border-gray-700/50">
            <div className="text-3xl font-bold bg-gradient-to-r from-orange-500 to-orange-600 bg-clip-text text-transparent mb-2">
              8+
            </div>
            <div className="text-gray-600 dark:text-gray-300 text-sm font-medium">Sectors Served</div>
          </div>
          
          <div className="text-center p-6 bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm rounded-2xl border border-white/50 dark:border-gray-700/50">
            <div className="text-3xl font-bold bg-gradient-to-r from-orange-500 to-orange-600 bg-clip-text text-transparent mb-2">
              500+
            </div>
            <div className="text-gray-600 dark:text-gray-300 text-sm font-medium">Happy Clients</div>
          </div>
          
          <div className="text-center p-6 bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm rounded-2xl border border-white/50 dark:border-gray-700/50">
            <div className="text-3xl font-bold bg-gradient-to-r from-orange-500 to-orange-600 bg-clip-text text-transparent mb-2">
              24/7
            </div>
            <div className="text-gray-600 dark:text-gray-300 text-sm font-medium">Coverage</div>
          </div>
          
          <div className="text-center p-6 bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm rounded-2xl border border-white/50 dark:border-gray-700/50">
            <div className="text-3xl font-bold bg-gradient-to-r from-orange-500 to-orange-600 bg-clip-text text-transparent mb-2">
              1+
            </div>
            <div className="text-gray-600 dark:text-gray-300 text-sm font-medium">Years Experience</div>
          </div>
        </div>
      </div>
    </section>
  );
}