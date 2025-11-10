import { Shield, Map, Code, CheckCircle } from 'lucide-react';

export default function Services() {
  const services = [
    {
      icon: Shield,
      title: 'AI Readiness & Assessments',
      description: 'Federal (ONC, CMS) and ethical AI standards alignment. Comprehensive evaluation of your organization\'s readiness to adopt and govern AI technologies.',
    },
    {
      icon: Map,
      title: 'Strategy & Roadmap Development',
      description: 'FHIR-native solutions and governance frameworks designed for operational ROI. Strategic planning that bridges vision with executable implementation.',
    },
    {
      icon: Code,
      title: 'Solution Design & Implementation',
      description: 'Building and deploying SMART-on-FHIR and LLM-integrated solutions. From architecture to production deployment with full compliance.',
    },
    {
      icon: CheckCircle,
      title: 'Independent Verification & Validation',
      description: 'Objective oversight and assurance against Federal standards and high-stakes risk. Unbiased IV&V that ensures integrity and compliance.',
    },
  ];

  return (
    <section id="services" className="pt-40 pb-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            Our Focus: Closing the Gap Between AI Strategy and Enterprise Adoption
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service) => (
            <div
              key={service.title}
              className="bg-white p-8 rounded-lg shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-200 hover:border-teal-500 group"
            >
              <div className="mb-6">
                <service.icon className="w-12 h-12 text-teal-600 group-hover:scale-110 transition-transform duration-300" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-4 leading-tight">
                {service.title}
              </h3>
              <p className="text-slate-600 leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
