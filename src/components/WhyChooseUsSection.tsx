
import React from 'react';
import { Shield, Clock, Award, HeartHandshake, Lightbulb, Users } from 'lucide-react';

const WhyChooseUsSection = () => {
  const features = [
    {
      icon: Shield,
      title: 'Trusted Expertise',
      description: 'Over 15 years of proven excellence in architectural design and construction services.',
      gradient: 'from-orange-500 to-orange-600'
    },
    {
      icon: Clock,
      title: 'Timely Delivery',
      description: 'We respect your time and ensure all projects are completed within the agreed timeline.',
      gradient: 'from-blue-500 to-blue-600'
    },
    {
      icon: Award,
      title: 'Quality Assurance',
      description: 'Rigorous quality control measures ensure superior results in every project.',
      gradient: 'from-green-500 to-green-600'
    },
    {
      icon: HeartHandshake,
      title: 'Client-Centric',
      description: 'Your satisfaction is our priority. We work closely with you throughout the process.',
      gradient: 'from-purple-500 to-purple-600'
    },
    {
      icon: Lightbulb,
      title: 'Innovative Solutions',
      description: 'We bring creative and modern solutions to traditional construction challenges.',
      gradient: 'from-teal-500 to-teal-600'
    },
    {
      icon: Users,
      title: 'Expert Team',
      description: 'Skilled architects, engineers, and craftsmen dedicated to excellence.',
      gradient: 'from-indigo-500 to-indigo-600'
    }
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-50 via-orange-50 to-slate-100">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-flex items-center space-x-2 bg-orange-100 text-orange-800 px-4 py-2 rounded-full text-sm font-medium mb-4">
            <Award className="h-4 w-4" />
            <span>Why Choose Us</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Why EASHAA VAASTHU is Your
            <span className="bg-gradient-to-r from-orange-500 to-orange-700 bg-clip-text text-transparent"> Best Choice</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We combine years of experience, innovative design, and unwavering commitment to quality 
            to deliver exceptional results that exceed your expectations.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 animate-fade-in border border-white/20"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Icon */}
              <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-r ${feature.gradient} mb-6 transform group-hover:scale-110 transition-transform duration-300`}>
                <feature.icon className="h-8 w-8 text-white" />
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-orange-600 transition-colors duration-300">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16 animate-fade-in" style={{ animationDelay: '0.8s' }}>
          <div className="bg-gradient-to-r from-orange-500 to-orange-600 rounded-3xl p-8 text-white shadow-2xl">
            <h3 className="text-2xl font-bold mb-4">Ready to Start Your Dream Project?</h3>
            <p className="text-orange-100 mb-6 max-w-2xl mx-auto">
              Join hundreds of satisfied clients who have trusted us with their architectural and construction needs.
            </p>
            <button className="bg-white text-orange-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-50 transition-all duration-300 transform hover:scale-105 shadow-lg">
              Get Free Consultation
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUsSection;
