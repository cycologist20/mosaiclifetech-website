import { Building2, Landmark, HeartPulse } from 'lucide-react';

export default function CollaborativeNetwork() {
  const partners = [
    {
      icon: Building2,
      title: 'Premier Management Consultancies',
      description: 'Serve as the specialized AI Implementation and Governance Engine for premier national consulting firms, bridging their strategic advisory with technical execution.',
    },
    {
      icon: Landmark,
      title: 'Government & Public Sector Agencies',
      description: 'Support federal and state HHS initiatives, leading high-visibility projects in AI integration, interoperability modernization, and complex public data infrastructure.',
    },
    {
      icon: HeartPulse,
      title: 'Health Systems & Payers',
      description: 'Partner with AMCs, IDNs, and payers to operationalize AI governance, manage FHIR data pipelines, and develop high-value, standards-based applications (Da Vinci, NCPDP).',
    },
  ];

  return (
    <section id="network" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            The Implementation Engine for the Nation's Most Trusted Partners
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {partners.map((partner) => (
            <div
              key={partner.title}
              className="text-center p-8 border-2 border-slate-200 rounded-lg hover:border-teal-600 transition-all duration-300"
            >
              <div className="flex justify-center mb-6">
                <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center">
                  <partner.icon className="w-8 h-8 text-teal-600" />
                </div>
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">
                {partner.title}
              </h3>
              <p className="text-slate-600 leading-relaxed">
                {partner.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
