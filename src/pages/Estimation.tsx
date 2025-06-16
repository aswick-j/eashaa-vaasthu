
import React from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { Calculator, Building2, CheckCircle, DollarSign, FileText, ArrowRight, Home, Users, TrendingUp, Phone, Mail, MapPin } from 'lucide-react';

const Estimation = () => {
  const features = [
    {
      id: 1,
      title: 'Fast & Accurate',
      description: 'Get precise building cost estimates using advanced algorithms and real-time market data.',
      icon: TrendingUp
    },
    {
      id: 2,
      title: 'Market Survey Based',
      description: 'Our estimates are based on comprehensive market surveys and current material prices.',
      icon: FileText
    },
    {
      id: 3,
      title: 'Detailed Breakdown',
      description: 'Receive individual price details for each component of your construction project.',
      icon: Calculator
    }
  ];

  const estimationTypes = [
    {
      id: 1,
      title: 'Residential Buildings',
      description: 'Complete cost estimation for houses, villas, and apartment buildings.',
      features: ['Individual Houses', 'Villa Projects', 'Apartment Buildings', 'Duplex Homes'],
      image: 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 2,
      title: 'Commercial Buildings',
      description: 'Comprehensive cost analysis for commercial and industrial projects.',
      features: ['Office Buildings', 'Retail Spaces', 'Warehouses', 'Industrial Units'],
      image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80'
    }
  ];

  const serviceHighlights = [
    'Free quotations from reliable professionals',
    'Up to 2-3 quotation options available',
    'Advanced pricing algorithms',
    'Real-time market data integration',
    'Detailed component-wise breakdown',
    'Bank loan documentation support'
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-orange-50 to-slate-100">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-orange-500/10 to-blue-500/10"></div>
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-orange-100 to-orange-200 text-orange-800 px-6 py-3 rounded-full text-sm font-medium mb-8 shadow-lg">
            <Calculator className="h-5 w-5" />
            <span>Professional Building Estimation</span>
          </div>
          <h1 className="text-5xl lg:text-7xl font-bold text-gray-900 mb-8 leading-tight">
            Building Estimation
            <span className="bg-gradient-to-r from-orange-500 to-orange-700 bg-clip-text text-transparent block">
              & Costing Services
            </span>
          </h1>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed mb-12">
            Get extraordinary building estimation services with fast and accurate cost estimation for your building projects. 
            Perfect for bank loan applications and budget planning with professional expertise.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <button className="bg-gradient-to-r from-orange-500 to-orange-600 text-white px-10 py-5 rounded-xl font-semibold hover:from-orange-600 hover:to-orange-700 transition-all duration-300 transform hover:scale-105 shadow-xl flex items-center justify-center space-x-3 text-lg">
              <Calculator className="h-6 w-6" />
              <span>Get Free Estimate</span>
            </button>
            <button className="bg-white text-orange-600 px-10 py-5 rounded-xl font-semibold hover:bg-orange-50 transition-all duration-300 border-2 border-orange-200 hover:border-orange-300 flex items-center justify-center space-x-3 text-lg shadow-xl">
              <FileText className="h-6 w-6" />
              <span>Download Sample</span>
            </button>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 mb-20">
            {/* Content Section */}
            <div className="bg-white rounded-3xl shadow-2xl p-10 hover:shadow-3xl transition-shadow duration-500">
              <div className="mb-8">
                <h2 className="text-4xl font-bold text-gray-900 mb-6">Why Choose Our Estimation Services?</h2>
                <div className="w-20 h-1 bg-gradient-to-r from-orange-500 to-orange-600 rounded-full"></div>
              </div>
              <div className="space-y-8">
                <p className="text-gray-700 leading-relaxed text-lg">
                  Whether you are building a house or any other commercial building, you just come to our online platform 
                  to get the extraordinary range of building estimation services. We are specialized in providing fast and 
                  accurate cost estimation of your building in order to provide a personalized quotation for each and every customer.
                </p>
                <p className="text-gray-700 leading-relaxed text-lg">
                  With the huge options available nowadays, choosing the right painting, flooring, wood work and tiling for 
                  your new house construction which suits your taste and budget has become a very difficult task. Before 
                  concluding all these things, it is essential to calculate the actual cost of your building.
                </p>
                <div className="grid grid-cols-2 gap-6 mt-10">
                  <div className="text-center p-6 bg-gradient-to-br from-orange-50 to-orange-100 rounded-2xl shadow-lg">
                    <div className="text-3xl font-bold text-orange-600 mb-2">500+</div>
                    <div className="text-sm text-gray-600 font-medium">Projects Estimated</div>
                  </div>
                  <div className="text-center p-6 bg-gradient-to-br from-green-50 to-green-100 rounded-2xl shadow-lg">
                    <div className="text-3xl font-bold text-green-600 mb-2">98%</div>
                    <div className="text-sm text-gray-600 font-medium">Accuracy Rate</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Enquiry Box */}
            <div className="bg-gradient-to-br from-orange-500 to-orange-600 rounded-3xl shadow-2xl p-10 text-white relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-16 translate-x-16"></div>
              <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/10 rounded-full translate-y-12 -translate-x-12"></div>
              <div className="relative z-10">
                <h3 className="text-3xl font-bold mb-8">Get Your Free Estimation</h3>
                <form className="space-y-6">
                  <div>
                    <input
                      type="text"
                      placeholder="Your Name"
                      className="w-full px-6 py-4 rounded-xl text-gray-900 focus:outline-none focus:ring-2 focus:ring-white/50 font-medium"
                    />
                  </div>
                  <div>
                    <input
                      type="tel"
                      placeholder="Phone Number"
                      className="w-full px-6 py-4 rounded-xl text-gray-900 focus:outline-none focus:ring-2 focus:ring-white/50 font-medium"
                    />
                  </div>
                  <div>
                    <input
                      type="email"
                      placeholder="Email Address"
                      className="w-full px-6 py-4 rounded-xl text-gray-900 focus:outline-none focus:ring-2 focus:ring-white/50 font-medium"
                    />
                  </div>
                  <div>
                    <select className="w-full px-6 py-4 rounded-xl text-gray-900 focus:outline-none focus:ring-2 focus:ring-white/50 font-medium">
                      <option>Select Building Type</option>
                      <option>Residential</option>
                      <option>Commercial</option>
                      <option>Industrial</option>
                    </select>
                  </div>
                  <div>
                    <input
                      type="text"
                      placeholder="Plot Size (Sq Ft)"
                      className="w-full px-6 py-4 rounded-xl text-gray-900 focus:outline-none focus:ring-2 focus:ring-white/50 font-medium"
                    />
                  </div>
                  <div>
                    <textarea
                      placeholder="Additional Requirements"
                      rows={4}
                      className="w-full px-6 py-4 rounded-xl text-gray-900 focus:outline-none focus:ring-2 focus:ring-white/50 font-medium resize-none"
                    ></textarea>
                  </div>
                  <button className="w-full bg-white text-orange-600 px-8 py-4 rounded-xl font-bold hover:bg-gray-100 transition-colors duration-300 text-lg shadow-lg">
                    Get Free Estimation
                  </button>
                </form>
              </div>
            </div>
          </div>

          {/* Features Section */}
          <div className="mb-20">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Estimation Features</h2>
              <div className="w-24 h-1 bg-gradient-to-r from-orange-500 to-orange-600 rounded-full mx-auto"></div>
            </div>
            <div className="grid md:grid-cols-3 gap-10">
              {features.map((feature) => (
                <div key={feature.id} className="bg-white rounded-3xl shadow-xl p-10 hover:shadow-2xl transition-all duration-500 text-center group hover:-translate-y-2">
                  <div className="bg-gradient-to-r from-orange-500 to-orange-600 p-6 rounded-3xl w-20 h-20 mx-auto mb-8 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <feature.icon className="h-10 w-10 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">{feature.title}</h3>
                  <p className="text-gray-600 leading-relaxed text-lg">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Home Construction Cost Estimator Section */}
          <div className="bg-white rounded-3xl shadow-2xl p-12 mb-20 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-orange-100 to-orange-200 rounded-full -translate-y-20 translate-x-20"></div>
            <div className="grid lg:grid-cols-2 gap-12 items-center relative z-10">
              <div>
                <h2 className="text-4xl font-bold text-gray-900 mb-8">Home / House Construction Cost Estimator</h2>
                <div className="w-20 h-1 bg-gradient-to-r from-orange-500 to-orange-600 rounded-full mb-8"></div>
                <p className="text-gray-700 leading-relaxed mb-8 text-lg">
                  We provide an excellent home construction cost estimator with advanced features to calculate building 
                  estimation and costing using pricing information from market surveys and complex algorithms used by our estimator.
                </p>
                <p className="text-gray-700 leading-relaxed mb-10 text-lg">
                  The result from our online estimator will include individual price details from each and every component 
                  of your construction project to ensure you have to spend this estimated amount for the entire building project.
                </p>
                <div className="space-y-4">
                  {serviceHighlights.map((highlight, index) => (
                    <div key={index} className="flex items-center space-x-4">
                      <CheckCircle className="h-6 w-6 text-orange-500 flex-shrink-0" />
                      <span className="text-gray-700 text-lg">{highlight}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-3xl p-10 shadow-xl">
                <div className="text-center mb-8">
                  <Home className="h-20 w-20 text-orange-600 mx-auto mb-6" />
                  <h3 className="text-2xl font-bold text-gray-900">Quick Calculator</h3>
                </div>
                <div className="space-y-6">
                  <div className="flex justify-between items-center p-4 bg-white rounded-xl shadow-md">
                    <span className="text-gray-700 font-medium">Basic Rate (per sq ft)</span>
                    <span className="font-bold text-orange-600 text-lg">₹1,200 - ₹1,800</span>
                  </div>
                  <div className="flex justify-between items-center p-4 bg-white rounded-xl shadow-md">
                    <span className="text-gray-700 font-medium">Standard Rate (per sq ft)</span>
                    <span className="font-bold text-orange-600 text-lg">₹1,500 - ₹2,200</span>
                  </div>
                  <div className="flex justify-between items-center p-4 bg-white rounded-xl shadow-md">
                    <span className="text-gray-700 font-medium">Premium Rate (per sq ft)</span>
                    <span className="font-bold text-orange-600 text-lg">₹2,000 - ₹3,000</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Estimation Types */}
          <div className="mb-20">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Estimation Services</h2>
              <div className="w-24 h-1 bg-gradient-to-r from-orange-500 to-orange-600 rounded-full mx-auto"></div>
            </div>
            <div className="grid md:grid-cols-2 gap-10">
              {estimationTypes.map((type) => (
                <div key={type.id} className="bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 group hover:-translate-y-2">
                  <div className="relative h-64">
                    <img
                      src={type.image}
                      alt={type.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                    <div className="absolute bottom-6 left-6 text-white">
                      <h3 className="text-2xl font-bold">{type.title}</h3>
                    </div>
                  </div>
                  <div className="p-8">
                    <p className="text-gray-600 mb-8 text-lg leading-relaxed">{type.description}</p>
                    <div className="space-y-3">
                      {type.features.map((feature, index) => (
                        <div key={index} className="flex items-center space-x-3">
                          <CheckCircle className="h-5 w-5 text-orange-500" />
                          <span className="text-gray-700 font-medium">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Important Note */}
          <div className="bg-gradient-to-r from-orange-50 to-orange-100 rounded-3xl p-10 border-l-8 border-orange-500 shadow-xl">
            <div className="flex items-start space-x-6">
              <div className="bg-orange-500 p-4 rounded-2xl flex-shrink-0">
                <FileText className="h-8 w-8 text-white" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Important Note</h3>
                <p className="text-gray-700 leading-relaxed text-lg">
                  This estimation of a building with plan will be used as a reference to make important choices and 
                  obtain a rough understanding of the prices involved in your constructions. As customization is the 
                  main factor driving prices, the actual costs of your building project may vary from our estimated 
                  cost according to the ever-changing market values of different construction materials.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Estimation;
