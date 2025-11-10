import { User } from 'lucide-react';

export default function About() {
  const founders = [
    {
      name: 'Teresa Younkin, MSHI',
      title: 'CEO',
      subtitle: 'Health Informaticist & AI Strategist',
      bio: 'HL7/Da Vinci and NCPDP contributor. Translating strategy into organizational change and clinical adoption. Expertise in bridging the gap between healthcare policy, technology standards, and practical implementation.',
    },
    {
      name: 'Jim Younkin, MBA',
      title: 'CTO',
      subtitle: 'Visionary Technologist & HIE Architect',
      bio: 'Founder and architect of the Keystone Health Information Exchange and leader of several ONC initiatives. Building resilient, scalable, and compliant Health IT infrastructure. Pioneer in health information exchange and interoperability solutions.',
    },
  ];

  return (
    <section id="about" className="pt-40 pb-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            40+ Years of Health IT, Interoperability, and AI Leadership
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {founders.map((founder) => (
            <div
              key={founder.name}
              className="bg-slate-50 rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
            >
              <div className="aspect-[4/3] bg-gradient-to-br from-slate-700 to-slate-900 flex items-center justify-center overflow-hidden">
                {founder.name === 'Teresa Younkin, MSHI' ? (
                  <img 
                    src="/Teresa Headshot WHA DC.png" 
                    alt="Teresa Younkin, MSHI - CEO"
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                  />
                ) : founder.name === 'Jim Younkin, MBA' ? (
                  <img 
                    src="/Jim Headshot.jpg" 
                    alt="Jim Younkin, MBA - CTO"
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                  />
                ) : (
                  <User className="w-32 h-32 text-slate-400" />
                )}
              </div>
              <div className="p-8">
                <div className="mb-2">
                  <h3 className="text-2xl font-bold text-slate-900">{founder.name}</h3>
                  <p className="text-teal-600 font-semibold text-lg">{founder.title}</p>
                </div>
                <p className="text-slate-700 font-medium mb-4">{founder.subtitle}</p>
                <p className="text-slate-600 leading-relaxed">{founder.bio}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center bg-slate-900 text-white p-12 rounded-lg">
          <p className="text-2xl md:text-3xl font-light leading-relaxed italic">
            "Our shared mission: to turn AI into a trusted tool that empowers healthcare teams, drives compliance, and delivers measurable results."
          </p>
        </div>
      </div>
    </section>
  );
}
