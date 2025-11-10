import { Heart, Database, Brain, Shield } from 'lucide-react';

interface KnowMyHealthProps {
  onLearnMore?: () => void;
}

export default function KnowMyHealth({ onLearnMore }: KnowMyHealthProps) {
  const features = [
    { icon: Heart, text: 'Born from personal caregiving experience' },
    { icon: Database, text: 'FHIR-based health record aggregation' },
    { icon: Brain, text: 'AI-powered health insights' },
    { icon: Shield, text: 'Enterprise-grade governance' },
  ];

  return (
    <section id="knowmyhealth" className="py-24 bg-gradient-to-br from-slate-900 to-slate-800 text-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="inline-block bg-teal-600 text-white px-4 py-1 rounded-full text-sm font-medium mb-6">
              Flagship Product
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              KnowMyHealth: Our Flagship Product for The Caregiver Economy
            </h2>
            <p className="text-xl text-slate-300 mb-8 leading-relaxed">
              An AI-powered co-pilot born from the personal caregiving journey, designed to aggregate fragmented health records and use AI to replace caregiver anxiety with clarity and control.
            </p>
            <p className="text-lg text-slate-300 mb-10 leading-relaxed">
              The platform is built on the same FHIR interoperability and governance-first design principles that secure our enterprise consulting clients.
            </p>

            <div className="grid grid-cols-2 gap-6 mb-10">
              {features.map((feature) => (
                <div key={feature.text} className="flex items-start space-x-3">
                  <feature.icon className="w-6 h-6 text-teal-400 flex-shrink-0 mt-1" />
                  <span className="text-slate-300">{feature.text}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <button 
                onClick={onLearnMore}
                className="bg-teal-600 text-white px-8 py-3 rounded-md hover:bg-teal-700 transition-colors font-medium"
              >
                Learn More
              </button>
              <button className="border-2 border-white text-white px-8 py-3 rounded-md hover:bg-white hover:text-slate-900 transition-colors font-medium">
                Partner with Us
              </button>
            </div>
          </div>

          <div className="relative">
            <div className="aspect-square bg-gradient-to-br from-teal-600 to-teal-800 rounded-2xl shadow-2xl flex items-center justify-center">
              <div className="text-center p-8">
                <Heart className="w-24 h-24 text-white mx-auto mb-6" />
                <p className="text-2xl font-bold text-white">
                  Empowering Caregivers
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
