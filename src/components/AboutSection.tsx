
import React from 'react';
import { Award, Users, Clock, Target, CheckCircle, Quote } from 'lucide-react';

const AboutSection = () => {
  const stats = [
    { icon: Award, value: '15+', label: 'Years of Experience' },
    { icon: Users, value: '1000+', label: 'Happy Clients' },
    { icon: Clock, value: '500+', label: 'Projects Completed' },
    { icon: Target, value: '95%', label: 'Success Rate' }
  ];

  const values = [
    {
      title: 'Quality Excellence',
      description: 'We maintain the highest standards in every project, from design to completion.'
    },
    {
      title: 'Client-Centric Approach',
      description: 'Your vision and satisfaction are at the heart of everything we do.'
    },
    {
      title: 'Innovation & Technology',
      description: 'We leverage modern technology and innovative solutions for better results.'
    },
    {
      title: 'Timely Delivery',
      description: 'We respect deadlines and ensure projects are completed on schedule.'
    }
  ];

  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-white via-orange-50 to-white">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-flex items-center space-x-2 bg-orange-100 text-orange-800 px-4 py-2 rounded-full text-sm font-medium mb-4">
            <Users className="h-4 w-4" />
            <span>About Us</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Building Trust Through
            <span className="bg-gradient-to-r from-orange-500 to-orange-700 bg-clip-text text-transparent"> Excellence</span>
          </h2>
        </div>

        {/* Founder Section */}
        <div className="mb-20">
          <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">
            {/* Founder Image */}
            <div className="mb-8 lg:mb-0 animate-fade-in">
              <div className="relative">
                <img
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=800&q=80"
                  alt="Founder - EASHAA VAASTHU"
                  className="w-full max-w-md mx-auto lg:max-w-full rounded-3xl shadow-2xl"
                />
                <div className="absolute -bottom-6 -right-6 bg-gradient-to-r from-orange-500 to-orange-600 rounded-2xl p-6 shadow-xl">
                  <Quote className="h-8 w-8 text-white" />
                </div>
              </div>
            </div>

            {/* Founder Content */}
            <div className="animate-fade-in" style={{ animationDelay: '0.2s' }}>
              <h3 className="text-3xl font-bold text-gray-900 mb-4">Meet Our Founder</h3>
              <h4 className="text-xl text-orange-600 font-semibold mb-6">Architect & Visionary Leader</h4>
              
              <div className="bg-gradient-to-r from-orange-50 to-orange-100 rounded-2xl p-6 mb-6">
                <p className="text-gray-700 leading-relaxed italic">
                  "Architecture is not just about creating buildings; it's about crafting spaces that inspire, 
                  function beautifully, and stand the test of time. Every project we undertake is a commitment 
                  to excellence and a testament to our passion for creating extraordinary spaces."
                </p>
              </div>

              <p className="text-gray-600 leading-relaxed mb-6">
                With over 15 years of experience in architectural design and construction, our founder has led 
                EASHAA VAASTHU to become one of the most trusted names in the industry. His vision of combining 
                traditional craftsmanship with modern innovation has resulted in hundreds of successful projects 
                across residential and commercial sectors.
              </p>

              <div className="grid grid-cols-2 gap-4">
                <div className="text-center p-4 bg-white rounded-xl shadow-md">
                  <div className="text-2xl font-bold text-orange-600">B.Arch</div>
                  <div className="text-sm text-gray-600">Architecture Degree</div>
                </div>
                <div className="text-center p-4 bg-white rounded-xl shadow-md">
                  <div className="text-2xl font-bold text-orange-600">15+</div>
                  <div className="text-sm text-gray-600">Years Experience</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Company Story */}
        <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center mb-20">
          {/* Left Content */}
          <div className="animate-fade-in">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              Your Trusted Partner in Construction Excellence
            </h3>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              Eashaa Vaasthu has been at the forefront of architectural design and construction services 
              for over 15 years. We specialize in creating spaces that blend functionality with aesthetic 
              appeal, ensuring every project reflects our commitment to quality and innovation.
            </p>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              From residential homes to commercial complexes, our experienced team of architects and 
              engineers brings expertise, creativity, and meticulous attention to detail to every project. 
              We handle everything from initial design concepts to final construction, including all 
              necessary approvals and regulatory compliance.
            </p>

            {/* Mission Statement */}
            <div className="bg-gradient-to-r from-orange-50 to-orange-100 rounded-2xl p-6 mb-8">
              <h4 className="text-lg font-bold text-gray-900 mb-3">Our Mission</h4>
              <p className="text-gray-700">
                To transform architectural visions into reality while maintaining the highest standards 
                of quality, sustainability, and client satisfaction. We strive to create buildings that 
                not only meet today's needs but also stand the test of time.
              </p>
            </div>
          </div>

          {/* Right Content - Stats */}
          <div className="mt-12 lg:mt-0 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 text-center group hover:bg-gradient-to-br hover:from-orange-50 hover:to-orange-100"
                >
                  <div className="bg-gradient-to-r from-orange-500 to-orange-600 p-3 rounded-xl inline-flex mb-4 group-hover:scale-110 transition-transform duration-300">
                    <stat.icon className="h-6 w-6 text-white" />
                  </div>
                  <div className="text-3xl font-bold text-gray-900 mb-2">{stat.value}</div>
                  <div className="text-gray-600 text-sm">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Values Section */}
        <div className="animate-fade-in" style={{ animationDelay: '0.4s' }}>
          <h3 className="text-3xl font-bold text-gray-900 text-center mb-12">Our Core Values</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="text-center group animate-fade-in"
                style={{ animationDelay: `${0.6 + index * 0.1}s` }}
              >
                <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                  <div className="bg-gradient-to-r from-orange-100 to-orange-200 p-3 rounded-xl inline-flex mb-4 group-hover:from-orange-500 group-hover:to-orange-600 transition-all duration-300">
                    <CheckCircle className="h-6 w-6 text-orange-600 group-hover:text-white transition-colors duration-300" />
                  </div>
                  <h4 className="text-lg font-bold text-gray-900 mb-3 group-hover:text-orange-600 transition-colors duration-300">
                    {value.title}
                  </h4>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {value.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Team Section */}
        <div className="mt-20 text-center animate-fade-in" style={{ animationDelay: '0.8s' }}>
          <div className="bg-gradient-to-r from-gray-900 to-gray-800 rounded-3xl p-12 text-white">
            <h3 className="text-3xl font-bold mb-6">Meet Our Expert Team</h3>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Our team of experienced architects, engineers, and project managers brings together 
              decades of combined expertise to deliver exceptional results for every project.
            </p>
            <button className="bg-gradient-to-r from-orange-500 to-orange-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-orange-600 hover:to-orange-700 transition-all duration-300 transform hover:scale-105 shadow-lg">
              Meet the Team
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
