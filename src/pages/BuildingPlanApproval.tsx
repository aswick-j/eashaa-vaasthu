
import React from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { FileCheck, Building2, CheckCircle, Clock, Users, ArrowRight, Star, MapPin, Phone, Mail } from 'lucide-react';

const BuildingPlanApproval = () => {
  const buildingPlanSteps = [
    'SALE Deed / SETTLEMENT Deed',
    'PARENT DOCUMENT',
    'Encumbrance certificate 16 YEARS',
    'PATTA /TSLR WITH CURRENT OWNER NAME',
    'LAYOUT COPY WITH SIGN / SITE REGULARISATION COPY',
    'PASSPORT SIZE PHOTO – 2 NOS',
    'SITE PHOTO TAKEN IN 4 CORNERS USING GPS APP',
    'VLT /PROPERTY TAX (UP TO DATE)',
    'ID Proof - Aadhar'
  ];

  const inspectionSteps = [
    'AE SITE INSPECTION',
    'ATPO SITE INSPECTION',
    'TPO SITE INSPECTION',
    'COMMISSIONER VERIFICATION'
  ];

  const finalSteps = [
    'PAYING FEES ONLINE',
    'GET APPROVAL'
  ];

  const recentWorks = [
    {
      id: 1,
      title: 'Modern Villa Approval',
      location: 'Coimbatore',
      area: '2,500 sq ft',
      type: 'Residential',
      status: 'Approved',
      image: 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&w=800&q=80',
      duration: '15 days'
    },
    {
      id: 2,
      title: 'Commercial Complex',
      location: 'Madukkarai',
      area: '15,000 sq ft',
      type: 'Commercial',
      status: 'Approved',
      image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80',
      duration: '20 days'
    },
    {
      id: 3,
      title: 'Duplex House Plan',
      location: 'Coimbatore Corporation',
      area: '3,200 sq ft',
      type: 'Residential',
      status: 'Approved',
      image: 'https://images.unsplash.com/photo-1570129477492-45c003edd2be?auto=format&fit=crop&w=800&q=80',
      duration: '12 days'
    }
  ];

  const testimonials = [
    {
      name: 'Rajesh Kumar',
      comment: 'Fast and efficient approval process. Highly recommended!',
      rating: 5,
      project: 'Villa Approval'
    },
    {
      name: 'Priya Sharma',
      comment: 'Professional service, handled all documentation perfectly.',
      rating: 5,
      project: 'Commercial Building'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-orange-50 to-slate-100">
      <Navigation />
      
      {/* Page Header */}
      <section className="pt-24 pb-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <div className="inline-flex items-center space-x-2 bg-orange-100 text-orange-800 px-6 py-3 rounded-full text-sm font-medium mb-6 shadow-lg">
            <FileCheck className="h-5 w-5" />
            <span>Building Plan Approval</span>
          </div>
          
          <h1 className="text-4xl lg:text-6xl font-bold mb-6 text-gray-900 leading-tight">
            Get Your Building Plan
            <span className="bg-gradient-to-r from-orange-500 to-orange-700 bg-clip-text text-transparent"> Approved</span>
          </h1>
          
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Fast-track your construction dreams with our streamlined approval process. We handle all documentation and regulatory requirements with 95% success rate.
          </p>

          {/* Success Metrics */}
          <div className="grid md:grid-cols-4 gap-6 max-w-4xl mx-auto mb-12">
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-orange-200/20">
              <div className="text-3xl font-bold text-orange-600 mb-2">95%</div>
              <div className="text-gray-600 text-sm">Success Rate</div>
            </div>
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-orange-200/20">
              <div className="text-3xl font-bold text-orange-600 mb-2">300+</div>
              <div className="text-gray-600 text-sm">Approvals Done</div>
            </div>
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-orange-200/20">
              <div className="text-3xl font-bold text-orange-600 mb-2">15</div>
              <div className="text-gray-600 text-sm">Avg. Days</div>
            </div>
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-orange-200/20">
              <div className="text-3xl font-bold text-orange-600 mb-2">15+</div>
              <div className="text-gray-600 text-sm">Years Experience</div>
            </div>
          </div>
        </div>
      </section>

      {/* Three Steps Process Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 bg-orange-100 text-orange-800 px-4 py-2 rounded-full text-sm font-medium mb-4">
              <FileCheck className="h-4 w-4" />
              <span>3 Simple Steps</span>
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Get Approved in
              <span className="bg-gradient-to-r from-orange-500 to-orange-700 bg-clip-text text-transparent"> 3 Easy Steps</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our systematic approach ensures your building plan approval is handled efficiently with complete transparency.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 mb-16">
            {/* Step 1: Documents Required */}
            <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-xl p-8 border border-orange-200/20 hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
              <div className="text-center mb-8">
                <div className="bg-gradient-to-r from-orange-500 to-orange-600 p-6 rounded-full inline-flex mb-4 transform hover:scale-110 transition-transform duration-300 w-20 h-20 items-center justify-center">
                  <span className="text-white text-2xl font-bold">1</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Document Preparation</h3>
                <p className="text-gray-600">Gather and prepare all required documents</p>
              </div>
              <div className="space-y-4">
                {buildingPlanSteps.map((step, index) => (
                  <div key={index} className="flex items-start space-x-3 p-3 bg-orange-50/60 rounded-lg hover:bg-orange-50 transition-colors duration-300">
                    <CheckCircle className="h-5 w-5 text-orange-500 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700 text-sm leading-relaxed">{step}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Step 2: Inspection Process */}
            <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-xl p-8 border border-orange-200/20 hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
              <div className="text-center mb-8">
                <div className="bg-gradient-to-r from-blue-500 to-blue-600 p-6 rounded-full inline-flex mb-4 transform hover:scale-110 transition-transform duration-300 w-20 h-20 items-center justify-center">
                  <span className="text-white text-2xl font-bold">2</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Official Submission</h3>
                <p className="text-gray-600">Submit and track your application</p>
              </div>
              <div className="space-y-4">
                {inspectionSteps.map((step, index) => (
                  <div key={index} className="flex items-start space-x-3 p-3 bg-blue-50/60 rounded-lg hover:bg-blue-50 transition-colors duration-300">
                    <Clock className="h-5 w-5 text-blue-500 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700 text-sm leading-relaxed">{step}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Step 3: Final Steps */}
            <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-xl p-8 border border-orange-200/20 hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
              <div className="text-center mb-8">
                <div className="bg-gradient-to-r from-green-500 to-green-600 p-6 rounded-full inline-flex mb-4 transform hover:scale-110 transition-transform duration-300 w-20 h-20 items-center justify-center">
                  <span className="text-white text-2xl font-bold">3</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Approval & Permits</h3>
                <p className="text-gray-600">Get your final approval and permits</p>
              </div>
              <div className="space-y-4">
                {finalSteps.map((step, index) => (
                  <div key={index} className="flex items-start space-x-3 p-3 bg-green-50/60 rounded-lg hover:bg-green-50 transition-colors duration-300">
                    <ArrowRight className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700 text-sm leading-relaxed">{step}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Enhanced Enquiry Section */}
          <div className="grid lg:grid-cols-2 gap-12 mb-16">
            {/* Content Section */}
            <div className="space-y-8">
              <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-xl p-8 border border-white/20">
                <div className="inline-flex items-center space-x-2 bg-orange-100 text-orange-800 px-4 py-2 rounded-full text-sm font-medium mb-6">
                  <Star className="h-4 w-4" />
                  <span>Why Choose Us</span>
                </div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Why Choose Our Services?</h2>
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="bg-orange-100 p-2 rounded-lg">
                      <CheckCircle className="h-5 w-5 text-orange-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Expert Documentation</h4>
                      <p className="text-gray-600 text-sm">Complete assistance with all required documents and paperwork.</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="bg-orange-100 p-2 rounded-lg">
                      <Clock className="h-5 w-5 text-orange-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Fast Processing</h4>
                      <p className="text-gray-600 text-sm">Average approval time of just 15 days with our efficient process.</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="bg-orange-100 p-2 rounded-lg">
                      <Star className="h-5 w-5 text-orange-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">95% Success Rate</h4>
                      <p className="text-gray-600 text-sm">Proven track record with hundreds of successful approvals.</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Testimonials */}
              <div className="space-y-4">
                {testimonials.map((testimonial, index) => (
                  <div key={index} className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-white/20">
                    <div className="flex items-center space-x-1 mb-2">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 text-orange-400 fill-current" />
                      ))}
                    </div>
                    <p className="text-gray-700 mb-3 italic">"{testimonial.comment}"</p>
                    <div className="text-sm">
                      <span className="font-semibold text-gray-900">{testimonial.name}</span>
                      <span className="text-gray-500"> - {testimonial.project}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Enhanced Enquiry Form */}
            <div className="bg-gradient-to-br from-orange-500 via-orange-600 to-orange-700 rounded-3xl shadow-2xl p-8 text-white relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-16 translate-x-16"></div>
              <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/10 rounded-full translate-y-12 -translate-x-12"></div>
              
              <div className="relative z-10">
                <div className="flex items-center space-x-3 mb-6">
                  <div className="bg-white/20 p-3 rounded-xl">
                    <Building2 className="h-6 w-6" />
                  </div>
                  <h3 className="text-2xl font-bold">Get Your Approval Started</h3>
                </div>
                
                <form className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <input
                        type="text"
                        placeholder="Your Name *"
                        className="w-full px-4 py-3 rounded-xl text-gray-900 bg-white/90 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-white focus:bg-white transition-all duration-200"
                      />
                    </div>
                    <div>
                      <input
                        type="tel"
                        placeholder="Phone Number *"
                        className="w-full px-4 py-3 rounded-xl text-gray-900 bg-white/90 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-white focus:bg-white transition-all duration-200"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <input
                      type="email"
                      placeholder="Email Address"
                      className="w-full px-4 py-3 rounded-xl text-gray-900 bg-white/90 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-white focus:bg-white transition-all duration-200"
                    />
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4">
                    <select className="w-full px-4 py-3 rounded-xl text-gray-900 bg-white/90 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-white focus:bg-white transition-all duration-200">
                      <option>Property Type</option>
                      <option>Residential</option>
                      <option>Commercial</option>
                      <option>Industrial</option>
                    </select>
                    <input
                      type="text"
                      placeholder="Plot Size (sq ft)"
                      className="w-full px-4 py-3 rounded-xl text-gray-900 bg-white/90 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-white focus:bg-white transition-all duration-200"
                    />
                  </div>
                  
                  <div>
                    <select className="w-full px-4 py-3 rounded-xl text-gray-900 bg-white/90 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-white focus:bg-white transition-all duration-200">
                      <option>Select Location</option>
                      <option>Coimbatore Corporation</option>
                      <option>Madukkarai Municipality</option>
                      <option>Union Panchayat</option>
                    </select>
                  </div>
                  
                  <div>
                    <textarea
                      placeholder="Project Details & Requirements"
                      rows={3}
                      className="w-full px-4 py-3 rounded-xl text-gray-900 bg-white/90 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-white focus:bg-white transition-all duration-200 resize-none"
                    ></textarea>
                  </div>
                  
                  <button className="w-full bg-white text-orange-600 px-6 py-4 rounded-xl font-bold text-lg hover:bg-gray-50 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                    Get Free Consultation
                  </button>
                </form>
                
                <div className="mt-6 text-center">
                  <p className="text-orange-100 text-sm">
                    ✓ Free consultation • ✓ Expert guidance • ✓ 95% success rate • ✓ Fast processing
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Recent Works */}
          <div>
            <div className="text-center mb-12 animate-fade-in">
              <div className="inline-flex items-center space-x-2 bg-orange-100 text-orange-800 px-4 py-2 rounded-full text-sm font-medium mb-4">
                <CheckCircle className="h-4 w-4" />
                <span>Success Stories</span>
              </div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Recent Successful
                <span className="bg-gradient-to-r from-orange-500 to-orange-700 bg-clip-text text-transparent"> Approvals</span>
              </h2>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {recentWorks.map((work) => (
                <div key={work.id} className="bg-white/80 backdrop-blur-sm rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 border border-orange-200/20">
                  <div className="relative h-48">
                    <img
                      src={work.image}
                      alt={work.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-4 right-4 bg-orange-500 text-white px-3 py-1 rounded-full text-sm font-medium flex items-center space-x-1">
                      <CheckCircle className="h-3 w-3" />
                      <span>{work.status}</span>
                    </div>
                    <div className="absolute bottom-4 left-4 bg-black/60 backdrop-blur-sm text-white px-3 py-1 rounded-full text-sm">
                      {work.duration}
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{work.title}</h3>
                    <div className="flex items-center space-x-2 text-gray-600 mb-2">
                      <MapPin className="h-4 w-4" />
                      <span className="text-sm">{work.location}</span>
                    </div>
                    <div className="flex justify-between items-center text-sm text-gray-600">
                      <span>{work.area}</span>
                      <span className="bg-orange-100 text-orange-800 px-2 py-1 rounded">{work.type}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default BuildingPlanApproval;
