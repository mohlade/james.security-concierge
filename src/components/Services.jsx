import React, { useState } from 'react';
import { Shield, UserCheck, Bell, Video, Car, Key, HardHat, GraduationCap } from 'lucide-react';
import ServiceCard from './ServiceCard';

export default function Services() {
  const [activeService, setActiveService] = useState(null);

  const services = [
    {
      icon: UserCheck,
      title: 'Manned Guarding',
      description: 'Professional security personnel providing round-the-clock protection and peace of mind for your premises.',
      features: ['24/7 Coverage', 'Trained Professionals', 'Emergency Response']
    },
    {
      icon: Bell,
      title: 'Concierge Services',
      description: 'Premium front-of-house services including reception, visitor management, and customer assistance.',
      features: ['Reception Services', 'Visitor Management', 'Customer Support']
    },
    {
      icon: Video,
      title: 'CCTV & Monitoring',
      description: 'Advanced surveillance systems with 24/7 monitoring and rapid response capabilities.',
      features: ['HD Surveillance', 'Real-time Monitoring', 'Cloud Storage']
    },
    {
      icon: Car,
      title: 'Mobile Patrols',
      description: 'Regular security patrols and rapid response services covering multiple locations efficiently.',
      features: ['GPS Tracking', 'Scheduled Patrols', 'Incident Reports']
    },
    {
      icon: Key,
      title: 'Access Control',
      description: 'Sophisticated entry systems and keyholding services ensuring authorized access only.',
      features: ['Biometric Systems', 'Key Management', 'Entry Logs']
    },
    {
      icon: HardHat,
      title: 'Construction Security',
      description: 'Specialized security solutions for construction sites, protecting assets and ensuring safety compliance.',
      features: ['Site Protection', 'Asset Security', 'Safety Compliance']
    },
    {
      icon: GraduationCap,
      title: 'Student Accommodation',
      description: 'Specialized security services for university housing and student residences, ensuring a safe and secure living environment.',
      features: ['24/7 Student Safety', 'Campus Patrols', 'Emergency Support', 'Parental Reporting']
    }
  ];

  return (
    <section id="services" className="py-20 bg-white dark:bg-gray-900 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-orange-50/50 to-amber-50/50 dark:from-gray-800/20 dark:to-gray-900/20"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-orange-100 to-amber-100 dark:from-gray-800 dark:to-gray-700 rounded-full text-orange-700 dark:text-orange-300 text-sm font-medium shadow-lg mb-6">
            <Shield size={16} className="mr-2" />
            Our Expertise
          </div>
          
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-gray-900 to-gray-700 dark:from-white dark:to-gray-200 bg-clip-text text-transparent">
              Comprehensive Security
            </span>
            <br />
            <span className="bg-gradient-to-r from-orange-500 to-orange-600 bg-clip-text text-transparent">
              Solutions
            </span>
          </h2>
          
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
            We offer comprehensive security and concierge solutions designed to meet the unique needs of your business with cutting-edge technology and expert personnel.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((s, i) => (
            <ServiceCard 
              key={i} 
              service={s}
              isActive={activeService === i}
              onEnter={() => setActiveService(i)} 
              onLeave={() => setActiveService(null)} 
            />
          ))}
        </div>
      </div>
    </section>
  );
}