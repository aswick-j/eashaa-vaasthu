
import React from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { FileCheck, Building2, CheckCircle, Clock, Users, ArrowRight, Star, MapPin, Phone, Mail, ExternalLink } from 'lucide-react';

const PlanSanction = () => {
  const buildingApprovalSteps = [
    {
      title: 'Architectural Planning',
      description: 'Hire a professional architect or engineer to create the architectural plan for your house or we can draft plan according to your requirements.',
      icon: Building2
    },
    {
      title: 'Document Preparation',
      description: 'Gather necessary documents including property ownership documents, land use certificates, NOCs from relevant authorities, and other required paperwork.',
      icon: FileCheck
    },
    {
      title: 'Visit Municipal Corporation',
      description: 'Visit the local Municipal Corporation office or respective local authority responsible for issuing construction permits. In Coimbatore, approach the CCMC.',
      icon: Users
    }
  ];

  const approvalProcessSteps = [
    {
      step: '4',
      title: 'Application Submission',
      description: 'Submit required documents, including architectural plan, along with completed application form. Pay applicable fees for processing the construction permit.'
    },
    {
      step: '5',
      title: 'Scrutiny of Plans',
      description: 'Plans undergo thorough scrutiny process to check compliance with building codes, setbacks, and regulations. May involve multiple reviews until plans are satisfactory.'
    },
    {
      step: '6',
      title: 'Site Inspection',
      description: 'Authorities conduct site inspection to verify ground realities and ensure proposed construction aligns with approved plans.'
    },
    {
      step: '7',
      title: 'Payment of Fees',
      description: 'Pay necessary fees including plan approval fees, development charges, and other applicable charges based on area, size, and type of construction.'
    },
    {
      step: '8',
      title: 'Approval & Building Permit',
      description: 'If plans and site inspection meet required standards, authorities grant building permit - official document allowing construction commencement.'
    },
    {
      step: '9',
      title: 'Commence Construction',
      description: 'Begin construction process as per approved plans and regulations. Ensure regular inspections by local authorities at various stages.'
    }
  ];

  const faqData = [
    {
      question: 'What are the fees for building plan approval in Coimbatore Corporation?',
      answer: 'The fees for building plan approval in Coimbatore Corporation vary depending on the type of building, the size of the building, and the location of the building. The fees are also subject to change from time to time.'
    },
    {
      question: 'Can you get Permission for House Construction in Coimbatore?',
      answer: 'Yes, you can obtain permission for house construction in Coimbatore by following the necessary procedures and submitting the required documents to the appropriate authorities. The specific process and requirements may vary depending on the location and nature of the construction.'
    },
    {
      question: 'What types of buildings can get approval?',
      answer: 'We can get Stilt+3 or GF+3 or 10000 Sft for residential Building and for Commercial Building we can get approval upto 2000 sft in Coimbatore corporation.'
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
            <span>Plan Sanction</span>
          </div>
          
          <h1 className="text-4xl lg:text-6xl font-bold mb-6 text-gray-900 leading-tight">
            House Construction
            <span className="bg-gradient-to-r from-orange-500 to-orange-700 bg-clip-text text-transparent"> Permission</span>
          </h1>
          
          <p className="text-xl text-gray-600 mb-8 max-w-4xl mx-auto">
            Are you considering building your dream house in the vibrant city of Coimbatore/Madukkarai municipalities/Union panchayats of Madukkarai? Navigate through the permission process smoothly with our comprehensive guide and expert assistance.
          </p>

          {/* Success Metrics */}
          <div className="grid md:grid-cols-4 gap-6 max-w-4xl mx-auto mb-12">
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-orange-200/20">
              <div className="text-3xl font-bold text-orange-600 mb-2">100%</div>
              <div className="text-gray-600 text-sm">Legal Compliance</div>
            </div>
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-orange-200/20">
              <div className="text-3xl font-bold text-orange-600 mb-2">500+</div>
              <div className="text-gray-600 text-sm">Sanctions Done</div>
            </div>
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-orange-200/20">
              <div className="text-3xl font-bold text-orange-600 mb-2">20</div>
              <div className="text-gray-600 text-sm">Avg. Days</div>
            </div>
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-orange-200/20">
              <div className="text-3xl font-bold text-orange-600 mb-2">15+</div>
              <div className="text-gray-600 text-sm">Years Experience</div>
            </div>
          </div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-xl p-8 border border-orange-200/20 mb-16">
            <div className="text-center mb-8">
              <div className="inline-flex items-center space-x-2 bg-orange-100 text-orange-800 px-4 py-2 rounded-full text-sm font-medium mb-4">
                <Building2 className="h-4 w-4" />
                <span>Understanding the Process</span>
              </div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Building Approval Process</h2>
            </div>
            
            <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed">
              <p className="mb-6">
                The process of obtaining permission for the construction of a house in Coimbatore can be daunting, but with the right knowledge and guidance, you can navigate through it smoothly. To obtain permission for house construction in Coimbatore, you will need to follow the necessary procedures and submit the required documents to the appropriate authorities.
              </p>
              
              <p className="mb-6">
                The specific process and requirements may vary depending on the location and nature of the construction. It is advisable to consult with a local architect, engineer, or legal expert who is familiar with the regulations and can guide you through the process.
              </p>
              
              <div className="bg-orange-50 p-6 rounded-xl border-l-4 border-orange-500">
                <p className="font-semibold text-orange-800 mb-2">Important Note:</p>
                <p className="text-orange-700">
                  Remember to ensure compliance with local building codes, zoning regulations, and any other legal requirements. It's important to obtain the necessary permits and approvals to ensure the construction is legal and by the applicable laws.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Initial Steps Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 bg-orange-100 text-orange-800 px-4 py-2 rounded-full text-sm font-medium mb-4">
              <CheckCircle className="h-4 w-4" />
              <span>Initial Steps</span>
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Getting
              <span className="bg-gradient-to-r from-orange-500 to-orange-700 bg-clip-text text-transparent"> Started</span>
            </h2>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 mb-16">
            {buildingApprovalSteps.map((step, index) => (
              <div key={index} className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-xl p-8 border border-orange-200/20 hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
                <div className="text-center mb-6">
                  <div className="bg-gradient-to-r from-orange-500 to-orange-600 p-6 rounded-full inline-flex mb-4 transform hover:scale-110 transition-transform duration-300 w-20 h-20 items-center justify-center">
                    <step.icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">{step.title}</h3>
                </div>
                <p className="text-gray-600 leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Detailed Process Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 bg-orange-100 text-orange-800 px-4 py-2 rounded-full text-sm font-medium mb-4">
              <Clock className="h-4 w-4" />
              <span>Step by Step</span>
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Complete
              <span className="bg-gradient-to-r from-orange-500 to-orange-700 bg-clip-text text-transparent"> Process</span>
            </h2>
          </div>

          <div className="space-y-6">
            {approvalProcessSteps.map((step, index) => (
              <div key={index} className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg p-6 border border-orange-200/20 hover:shadow-xl transition-all duration-300">
                <div className="flex items-start space-x-4">
                  <div className="bg-gradient-to-r from-orange-500 to-orange-600 text-white rounded-full w-12 h-12 flex items-center justify-center font-bold text-lg flex-shrink-0">
                    {step.step}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{step.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{step.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Important Notes */}
          <div className="mt-12 grid lg:grid-cols-2 gap-8">
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg p-6 border border-orange-200/20">
              <div className="flex items-center space-x-3 mb-4">
                <div className="bg-orange-100 p-2 rounded-lg">
                  <Building2 className="h-5 w-5 text-orange-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900">Building Limits</h3>
              </div>
              <p className="text-gray-600">
                We can get Stilt+3 or GF+3 or 10000 Sft for residential Building and for Commercial Building we can get approval upto 2000 sft in Coimbatore corporation.
              </p>
            </div>
            
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg p-6 border border-orange-200/20">
              <div className="flex items-center space-x-3 mb-4">
                <div className="bg-orange-100 p-2 rounded-lg">
                  <ExternalLink className="h-5 w-5 text-orange-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900">Online Portal</h3>
              </div>
              <p className="text-gray-600 mb-3">
                Use the official online portal to get permissions:
              </p>
              <a 
                href="https://onlineppa.tn.gov.in/SWP-web" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 text-orange-600 hover:text-orange-700 font-medium"
              >
                <span>Visit Portal</span>
                <ExternalLink className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center space-x-2 bg-orange-100 text-orange-800 px-4 py-2 rounded-full text-sm font-medium mb-4">
              <Star className="h-4 w-4" />
              <span>FAQ</span>
            </div>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Frequently Asked
              <span className="bg-gradient-to-r from-orange-500 to-orange-700 bg-clip-text text-transparent"> Questions</span>
            </h2>
          </div>

          <div className="space-y-6">
            {faqData.map((faq, index) => (
              <div key={index} className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg p-6 border border-orange-200/20">
                <h3 className="text-lg font-bold text-gray-900 mb-3">{faq.question}</h3>
                <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-br from-orange-500 via-orange-600 to-orange-700 rounded-3xl shadow-2xl p-8 text-white text-center relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-16 translate-x-16"></div>
            <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/10 rounded-full translate-y-12 -translate-x-12"></div>
            
            <div className="relative z-10">
              <div className="flex items-center justify-center space-x-3 mb-6">
                <div className="bg-white/20 p-3 rounded-xl">
                  <FileCheck className="h-6 w-6" />
                </div>
                <h3 className="text-3xl font-bold">Need Help with Plan Sanction?</h3>
              </div>
              
              <p className="text-xl text-orange-100 mb-8 max-w-2xl mx-auto">
                Get expert guidance for your house construction permission process. We handle all documentation and regulatory requirements.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-white text-orange-600 px-8 py-4 rounded-xl font-bold text-lg hover:bg-gray-50 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                  Get Expert Consultation
                </button>
                <button className="border-2 border-white text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-white hover:text-orange-600 transition-all duration-300">
                  Download Checklist
                </button>
              </div>
              
              <div className="mt-8 text-center">
                <p className="text-orange-100 text-sm">
                  ✓ Expert guidance • ✓ Complete documentation • ✓ Legal compliance • ✓ Fast processing
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

export default PlanSanction;
