
import React from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Building2, Home, Users, CheckCircle, Star, ArrowRight } from 'lucide-react';

const FloorPlan = () => {
  const specialties = [
    {
      icon: Building2,
      title: "Vaasthu Compliant Designs",
      description: "All our designs follow Vaasthu Shastra principles for greater stability and prosperity"
    },
    {
      icon: Home,
      title: "Complete Construction Plans",
      description: "Comprehensive diagrams needed for construction with professional architectural details"
    },
    {
      icon: Users,
      title: "Expert Designers",
      description: "Well-trained professionals who can design any plan regardless of size or complexity"
    }
  ];

  const services = [
    "Single Floor House Plans",
    "Duplex House Designs", 
    "Modern House Plans",
    "Building Design Plans",
    "Home Plan Design",
    "Neighborhood Design",
    "Craftsman-Inspired Designs",
    "Custom Floor Plans"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-orange-50 to-slate-100">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative pt-20 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 bg-orange-100 px-4 py-2 rounded-full mb-6">
              <Building2 className="h-5 w-5 text-orange-600" />
              <span className="text-orange-800 font-medium">Floor Plan Design Services</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-orange-600 to-orange-800 bg-clip-text text-transparent">
                Floor Plan Designers
              </span>
              <br />
              <span className="text-gray-800">in Coimbatore</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Create your dream home with our expert floor plan design services. We specialize in 
              Vaasthu-compliant designs that bring stability and prosperity to your living space.
            </p>
          </div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                Your Home Building Destiny Starts Here
              </h2>
              <p className="text-gray-600 mb-6 leading-relaxed">
                There are many companies that specialize in creating home designs and plans for building new homes, 
                but not all of them are going to necessarily meet your needs. You need to realize that you are the 
                creator of your own home building destiny.
              </p>
              <p className="text-gray-600 mb-8 leading-relaxed">
                You have to find the best home planner that you like best based on the sample designs that they have. 
                When you build a home, you want to make sure that it's exactly what you want. We, Eashaa Vaasthu will 
                get you the best home plan according to your needs.
              </p>
              <Button className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105">
                Start Your Project
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-r from-orange-500 to-orange-600 p-8 rounded-2xl shadow-2xl">
                <div className="bg-white p-6 rounded-xl">
                  <div className="flex items-center space-x-3 mb-4">
                    <Star className="h-6 w-6 text-orange-500" />
                    <span className="font-semibold text-gray-800">Why Choose Us?</span>
                  </div>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      <span>Expert Floor Plan Design</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      <span>Vaasthu Compliant Solutions</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      <span>Professional Architects</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      <span>Custom Design Solutions</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Eashaa Vaasthu Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Why Eashaa Vaasthu?</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-orange-500 to-orange-600 mx-auto rounded-full"></div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300">
              <CardHeader>
                <CardTitle className="text-xl text-gray-800">Your Dream Home Platform</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 leading-relaxed">
                  Eashaa Vaasthu is your home for one of the best online collections of house plan designs, 
                  home plan design, building design, home designs, duplex house, and modern house plans, 
                  single floor house plan from top designers in your city. Make your dream home a reality.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300">
              <CardHeader>
                <CardTitle className="text-xl text-gray-800">Comprehensive Services</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 leading-relaxed">
                  Eashaa Vaasthu allows you to cater a range of services to developers all over the city and 
                  known for the craftsman-inspired Home/House plan designers, we provide a wide range of 
                  services from building plans for full neighborhood design.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Services Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
            {services.map((service, index) => (
              <div 
                key={index}
                className="bg-gradient-to-r from-orange-50 to-orange-100 p-4 rounded-lg border border-orange-200 hover:shadow-md transition-all duration-300"
              >
                <span className="text-orange-700 font-medium">{service}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Speciality Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Our Speciality</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-orange-500 to-orange-600 mx-auto rounded-full mb-6"></div>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 mb-12">
            {specialties.map((specialty, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 group">
                <CardHeader className="text-center">
                  <div className="bg-gradient-to-r from-orange-500 to-orange-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <specialty.icon className="h-8 w-8 text-white" />
                  </div>
                  <CardTitle className="text-xl text-gray-800">{specialty.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 text-center leading-relaxed">{specialty.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="bg-gradient-to-r from-orange-50 to-orange-100 p-8 rounded-2xl border border-orange-200">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">Vaasthu Shastra Excellence</h3>
            <p className="text-gray-600 leading-relaxed mb-6">
              Eashaa Vaasthu, as the name suggests, gives utmost importance to Vaasthu Shastra and its influence 
              on human beings. Undisputedly a house, an apartment or a commercial place prepared as per the 
              principals of Vaasthu achieves greater stability and glory since it is in tune with the elements 
              of Nature. As an extension of our service we provide Vaasthu compliant solutions for our esteemed customers.
            </p>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-gray-800 mb-2">Complete Construction Plans</h4>
                <p className="text-gray-600 text-sm">
                  Our home/house plan includes all of the diagrams generally needed for construction, except for 
                  site particular information and heating or cooling specifications.
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-800 mb-2">Professional Expertise</h4>
                <p className="text-gray-600 text-sm">
                  Our architectural designer is a professional who uses his/her artistic skill to design a 
                  construction plan for a building. Our well-trained designers are able to design any plan 
                  regardless of the size or complexity of the building.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-orange-500 to-orange-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to Design Your Dream Home?</h2>
          <p className="text-orange-100 mb-8 text-lg">
            Contact us today for a consultation and let's bring your vision to life with our expert floor plan design services.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-white text-orange-600 hover:bg-orange-50 px-8 py-3 rounded-lg font-semibold transition-all duration-300">
              Get Free Consultation
            </Button>
            <Button variant="outline" className="border-white text-white hover:bg-white hover:text-orange-600 px-8 py-3 rounded-lg font-semibold transition-all duration-300">
              View Sample Designs
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default FloorPlan;
