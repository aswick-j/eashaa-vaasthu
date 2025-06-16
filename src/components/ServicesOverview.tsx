
import React from 'react';
import { Building2, FileCheck, Hammer, Compass, Home, Building } from 'lucide-react';

const ServicesOverview = () => {
  const services = [
    {
      icon: Compass,
      title: 'Architectural Design',
      description: 'Innovative and functional architectural designs tailored to your needs and preferences.',
      gradient: 'from-blue-500 to-blue-600'
    },
    {
      icon: FileCheck,
      title: 'Plan Approvals',
      description: 'Complete assistance with Panchayat, Municipality, and Corporation plan approvals.',
      gradient: 'from-green-500 to-green-600'
    },
    {
      icon: Hammer,
      title: 'Construction Services',
      description: 'Quality construction with experienced teams and premium materials.',
      gradient: 'from-orange-500 to-orange-600'
    },
    {
      icon: Home,
      title: 'Residential Projects',
      description: 'Custom homes designed and built to create your perfect living space.',
      gradient: 'from-purple-500 to-purple-600'
    },
    {
      icon: Building,
      title: 'Commercial Projects',
      description: 'Professional commercial spaces that enhance your business presence.',
      gradient: 'from-red-500 to-red-600'
    },
    {
      icon: Building2,
      title: 'Project Management',
      description: 'End-to-end project management ensuring timely delivery and quality results.',
      gradient: 'from-teal-500 to-teal-600'
    }
  ];

  return (
    <section id="services" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-flex items-center space-x-2 bg-orange-100 text-orange-800 px-4 py-2 rounded-full text-sm font-medium mb-4">
            <Building2 className="h-4 w-4" />
            <span>Our Services</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Comprehensive Building
            <span className="bg-gradient-to-r from-orange-500 to-orange-700 bg-clip-text text-transparent"> Solutions</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From initial design concepts to final construction, we provide complete building services 
            that bring your vision to life with expertise and precision.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 animate-fade-in border border-gray-100"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Icon */}
              <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-r ${service.gradient} mb-6 transform group-hover:scale-110 transition-transform duration-300`}>
                <service.icon className="h-8 w-8 text-white" />
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-orange-600 transition-colors duration-300">
                {service.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {service.description}
              </p>

              {/* Hover Effect Border */}
              <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-orange-200 transition-colors duration-300"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesOverview;
