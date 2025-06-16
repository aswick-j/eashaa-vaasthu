import React, { useState } from 'react';
import { FileCheck, Building2, MapPin, Clock, CheckCircle, ArrowRight } from 'lucide-react';

const PlanApprovalSection = () => {
  const [activeTab, setActiveTab] = useState('panchayat');

  const approvalTypes = [
    {
      id: 'panchayat',
      title: 'Panchayat Approval',
      icon: MapPin,
      timeline: '15-30 Days',
      description: 'For residential and small commercial projects in rural and semi-urban areas.',
      requirements: [
        'Site survey and documentation',
        'Structural drawings and plans',
        'Soil test reports',
        'Environmental clearance documents',
        'Land ownership certificates'
      ],
      process: [
        'Initial consultation and site visit',
        'Document preparation and verification',
        'Plan submission to Panchayat office',
        'Review and approval process',
        'Permit issuance and handover'
      ]
    },
    {
      id: 'municipality',
      title: 'Municipality Approval',
      icon: Building2,
      timeline: '30-45 Days',
      description: 'For projects in municipal corporation limits and urban areas.',
      requirements: [
        'Detailed architectural drawings',
        'Structural engineering reports',
        'Fire safety compliance certificates',
        'Parking and access compliance',
        'Utility connection approvals'
      ],
      process: [
        'Pre-submission consultation',
        'Technical drawing preparation',
        'Municipal authority submission',
        'Technical review and compliance check',
        'Final approval and permit'
      ]
    },
    {
      id: 'corporation',
      title: 'Corporation Approval',
      icon: Building2,
      timeline: '45-60 Days',
      description: 'For large commercial and industrial projects in corporation areas.',
      requirements: [
        'Comprehensive project reports',
        'Environmental impact assessments',
        'Traffic impact studies',
        'Building safety certifications',
        'Public hearing documentation'
      ],
      process: [
        'Project feasibility study',
        'Detailed documentation preparation',
        'Corporation office submission',
        'Multi-department review process',
        'Final clearance and permits'
      ]
    }
  ];

  const activeApproval = approvalTypes.find(type => type.id === activeTab);

  return (
    <section id="approvals" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-50 via-orange-50 to-slate-100">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-flex items-center space-x-2 bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-medium mb-4">
            <FileCheck className="h-4 w-4" />
            <span>Plan Approvals</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Streamlined
            <span className="bg-gradient-to-r from-green-500 to-green-700 bg-clip-text text-transparent"> Approval Process</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Navigate complex approval processes with confidence. We handle all paperwork, 
            compliance requirements, and regulatory procedures for your construction projects.
          </p>
        </div>

        {/* Approval Type Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {approvalTypes.map((type) => (
            <button
              key={type.id}
              onClick={() => setActiveTab(type.id)}
              className={`flex items-center space-x-2 px-6 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 ${
                activeTab === type.id
                  ? 'bg-gradient-to-r from-green-500 to-green-600 text-white shadow-lg'
                  : 'bg-white text-gray-700 hover:bg-green-50 shadow-md'
              }`}
            >
              <type.icon className="h-5 w-5" />
              <span>{type.title}</span>
            </button>
          ))}
        </div>

        {/* Active Approval Details */}
        {activeApproval && (
          <div className="bg-white rounded-3xl shadow-2xl overflow-hidden animate-fade-in">
            <div className="lg:grid lg:grid-cols-2">
              {/* Left Side - Overview */}
              <div className="p-8 lg:p-12 bg-gradient-to-br from-green-50 to-green-100">
                <div className="flex items-center space-x-3 mb-6">
                  <div className="bg-gradient-to-r from-green-500 to-green-600 p-3 rounded-xl">
                    <activeApproval.icon className="h-8 w-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900">{activeApproval.title}</h3>
                    <div className="flex items-center space-x-2 text-green-600">
                      <Clock className="h-4 w-4" />
                      <span className="text-sm font-medium">{activeApproval.timeline}</span>
                    </div>
                  </div>
                </div>

                <p className="text-gray-700 text-lg mb-8 leading-relaxed">
                  {activeApproval.description}
                </p>

                {/* Requirements */}
                <div className="mb-8">
                  <h4 className="text-lg font-bold text-gray-900 mb-4">Required Documents</h4>
                  <div className="space-y-3">
                    {activeApproval.requirements.map((req, index) => (
                      <div key={index} className="flex items-start space-x-3">
                        <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">{req}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <button className="bg-gradient-to-r from-green-500 to-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-green-600 hover:to-green-700 transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center space-x-2">
                  <span>Start Application</span>
                  <ArrowRight className="h-5 w-5" />
                </button>
              </div>

              {/* Right Side - Process */}
              <div className="p-8 lg:p-12">
                <h4 className="text-2xl font-bold text-gray-900 mb-8">Approval Process</h4>
                <div className="space-y-6">
                  {activeApproval.process.map((step, index) => (
                    <div key={index} className="flex items-start space-x-4 group">
                      <div className="flex-shrink-0">
                        <div className="w-10 h-10 bg-gradient-to-r from-green-500 to-green-600 text-white rounded-full flex items-center justify-center font-bold text-sm group-hover:scale-110 transition-transform duration-300">
                          {index + 1}
                        </div>
                      </div>
                      <div className="flex-grow">
                        <div className="bg-gray-50 rounded-lg p-4 group-hover:bg-green-50 transition-colors duration-300">
                          <p className="text-gray-800 font-medium">{step}</p>
                        </div>
                        {index < activeApproval.process.length - 1 && (
                          <div className="w-px h-6 bg-gray-300 ml-5 my-2"></div>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Statistics */}
        <div className="grid md:grid-cols-3 gap-8 mt-16">
          <div className="text-center bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="text-4xl font-bold text-green-600 mb-2">95%</div>
            <div className="text-gray-600">Approval Success Rate</div>
          </div>
          <div className="text-center bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="text-4xl font-bold text-blue-600 mb-2">300+</div>
            <div className="text-gray-600">Approvals Completed</div>
          </div>
          <div className="text-center bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="text-4xl font-bold text-orange-600 mb-2">30</div>
            <div className="text-gray-600">Average Days</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PlanApprovalSection;
