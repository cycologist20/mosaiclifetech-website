import { Database, Lock, Stethoscope, Users2 } from 'lucide-react';

const HealthStoriesPillars = () => {
  const pillars = [
    {
      icon: <Database className="w-16 h-16 text-teal-600" />,
      title: "Comprehensive Data Integration",
      description: "Seamlessly connects with EHRs, lab systems, imaging platforms, and wearable devices to create a unified health data repository.",
      features: [
        "FHIR R4 compliance for maximum interoperability",
        "Real-time data synchronization",
        "Support for 500+ healthcare data formats",
        "Cloud-native architecture for scalability"
      ]
    },
    {
      icon: <Lock className="w-16 h-16 text-blue-600" />,
      title: "Enterprise-Grade Security",
      description: "Built with healthcare's most stringent security requirements in mind, ensuring patient data remains protected at every level.",
      features: [
        "HIPAA compliant infrastructure",
        "End-to-end encryption",
        "Role-based access controls",
        "Audit trails for all data access"
      ]
    },
    {
      icon: <Stethoscope className="w-16 h-16 text-green-600" />,
      title: "Clinical Intelligence",
      description: "Advanced AI models trained on healthcare data to provide clinically relevant insights and recommendations.",
      features: [
        "Evidence-based pattern recognition",
        "Risk stratification algorithms",
        "Medication interaction analysis",
        "Care gap identification"
      ]
    },
    {
      icon: <Users2 className="w-16 h-16 text-purple-600" />,
      title: "Collaborative Care Platform",
      description: "Enables seamless communication and coordination among all members of the care team, including family caregivers.",
      features: [
        "Shared care plans and goals",
        "Real-time care team messaging",
        "Family caregiver dashboards",
        "Provider collaboration tools"
      ]
    }
  ];

  return (
    <section className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            Built on Four Core Pillars
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Health Stories is architected around the fundamental needs of modern healthcare: 
            integration, security, intelligence, and collaboration.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {pillars.map((pillar, index) => (
            <div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-center mb-6">
                <div className="p-4 bg-slate-50 rounded-xl mr-6">
                  {pillar.icon}
                </div>
                <h3 className="text-2xl font-bold text-slate-900">
                  {pillar.title}
                </h3>
              </div>
              
              <p className="text-lg text-slate-600 mb-6 leading-relaxed">
                {pillar.description}
              </p>
              
              <ul className="space-y-3">
                {pillar.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-slate-700">
                    <div className="w-2 h-2 bg-teal-600 rounded-full mr-3 flex-shrink-0"></div>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-slate-900 to-teal-900 rounded-2xl p-12 text-white">
            <h3 className="text-3xl font-bold mb-6">
              The Future of Healthcare Data is Here
            </h3>
            <p className="text-xl text-slate-200 max-w-4xl mx-auto leading-relaxed">
              Health Stories represents a paradigm shift in how we think about health data. 
              By combining cutting-edge AI with deep healthcare expertise, we're creating 
              a platform that doesn't just store information—it transforms it into actionable intelligence.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HealthStoriesPillars;
