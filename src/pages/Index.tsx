
import React from 'react';
import Navigation from '../components/Navigation';
import HeroSection from '../components/HeroSection';
import ServicesOverview from '../components/ServicesOverview';
import WhyChooseUsSection from '../components/WhyChooseUsSection';
import ProjectsGallery from '../components/ProjectsGallery';
import TestimonialsSection from '../components/TestimonialsSection';
import ContactSection from '../components/ContactSection';
import Footer from '../components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-orange-50 to-slate-100">
      <Navigation />
      <HeroSection />
      <ServicesOverview />
      <WhyChooseUsSection />
      <ProjectsGallery />
      <TestimonialsSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
