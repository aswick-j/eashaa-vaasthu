
import React, { useState, useEffect } from 'react';
import { ArrowRight, CheckCircle, Building2, Users, Award, ChevronLeft, ChevronRight, FileCheck } from 'lucide-react';

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      title: "Building Plan Approval",
      subtitle: "Get approved in just 3 simple steps",
      description: "Fast-track your construction dreams with our streamlined approval process. We handle all documentation and regulatory requirements.",
      image: "https://images.unsplash.com/photo-1487958449943-2429e8be8625?auto=format&fit=crop&w=1920&q=80",
      steps: ["Document Preparation", "Official Submission", "Approval & Permits"]
    },
    {
      title: "Expert Architectural Design",
      subtitle: "Creating stunning buildings with precision",
      description: "From concept to completion, we deliver exceptional architectural solutions that bring your vision to life.",
      image: "https://images.unsplash.com/photo-1449157291145-7efd050a4d0e?auto=format&fit=crop&w=1920&q=80"
    },
    {
      title: "Quality Construction Services",
      subtitle: "Building your dreams into reality",
      description: "End-to-end construction management with the highest quality standards and timely delivery.",
      image: "https://images.unsplash.com/photo-1459767129954-1b1c1f9b9ace?auto=format&fit=crop&w=1920&q=80"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [slides.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <section id="home" className="relative h-screen overflow-hidden">
      {/* Background Images */}
      <div className="absolute inset-0">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentSlide ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <img
              src={slide.image}
              alt={`Slide ${index + 1}`}
              className="w-full h-full object-cover"
            />
            {/* Black shade overlay */}
            <div className="absolute inset-0 bg-black/60"></div>
          </div>
        ))}
      </div>

      {/* Carousel Controls */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 z-20 bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white p-3 rounded-full transition-all duration-300"
      >
        <ChevronLeft className="h-6 w-6" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 z-20 bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white p-3 rounded-full transition-all duration-300"
      >
        <ChevronRight className="h-6 w-6" />
      </button>

      {/* Carousel Indicators */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 z-20 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentSlide ? 'bg-orange-500' : 'bg-white/50'
            }`}
          />
        ))}
      </div>

      {/* Content */}
      <div className="absolute inset-0 z-10 flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="text-center text-white">
            <div className="inline-flex items-center space-x-2 bg-orange-500/20 backdrop-blur-sm text-orange-300 px-4 py-2 rounded-full text-sm font-medium mb-6">
              {currentSlide === 0 ? (
                <>
                  <FileCheck className="h-4 w-4" />
                  <span>Fast Plan Approvals</span>
                </>
              ) : (
                <>
                  <Award className="h-4 w-4" />
                  <span>Trusted Construction Partners</span>
                </>
              )}
            </div>
            
            <h1 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight">
              {slides[currentSlide].title}
            </h1>
            
            <p className="text-xl text-orange-300 mb-4 font-medium">
              {slides[currentSlide].subtitle}
            </p>
            
            <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
              {slides[currentSlide].description}
            </p>

            {/* 3 Steps for Building Plan Approval */}
            {currentSlide === 0 && slides[currentSlide].steps && (
              <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-8 mb-8">
                {slides[currentSlide].steps.map((step, index) => (
                  <div key={index} className="flex items-center space-x-3 bg-white/10 backdrop-blur-sm rounded-lg px-4 py-2">
                    <div className="bg-orange-500 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold">
                      {index + 1}
                    </div>
                    <span className="text-white font-medium">{step}</span>
                  </div>
                ))}
              </div>
            )}

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              {currentSlide === 0 ? (
                <a 
                  href="/building-plan-approval"
                  className="bg-gradient-to-r from-orange-500 to-orange-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-orange-600 hover:to-orange-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center justify-center space-x-2"
                >
                  <span>Explore Plan Approval</span>
                  <ArrowRight className="h-5 w-5" />
                </a>
              ) : (
                <>
                  <button className="bg-gradient-to-r from-orange-500 to-orange-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-orange-600 hover:to-orange-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center justify-center space-x-2">
                    <span>Start Your Project</span>
                    <ArrowRight className="h-5 w-5" />
                  </button>
                  <button className="border-2 border-orange-400 text-orange-300 px-8 py-4 rounded-lg font-semibold hover:bg-orange-400/10 transition-all duration-300 flex items-center justify-center space-x-2">
                    <span>View Our Work</span>
                  </button>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
