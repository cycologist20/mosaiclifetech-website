import { Brain, Zap, Shield, Heart } from 'lucide-react';

const HealthStoriesSolution = () => {
  const features = [
    {
      icon: <Brain className="w-12 h-12 text-teal-600" />,
      title: "AI-Powered Analysis",
      description: "Advanced algorithms analyze vast amounts of health data to identify patterns, trends, and insights that human analysis might miss."
    },
    {
      icon: <Zap className="w-12 h-12 text-blue-600" />,
      title: "Instant Synthesis",
      description: "Transform months of medical records into coherent, chronological health narratives in minutes, not hours."
    },
    {
      icon: <Shield className="w-12 h-12 text-green-600" />,
      title: "FHIR Compliance",
      description: "Built on industry-standard FHIR protocols ensuring seamless integration with existing healthcare systems and maximum data interoperability."
    },
    {
      icon: <Heart className="w-12 h-12 text-red-600" />,
      title: "Caregiver-Focused",
      description: "Designed specifically for caregivers who need clear, actionable insights to make informed decisions about their loved ones' care."
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            Introducing Health Stories
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Our revolutionary platform transforms fragmented health data into comprehensive, 
            AI-generated narratives that empower caregivers with the complete picture they need.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
          {features.map((feature, index) => (
            <div key={index} className="flex items-start space-x-6">
              <div className="flex-shrink-0 p-3 bg-slate-50 rounded-xl">
                {feature.icon}
              </div>
              <div>
                <h3 className="text-2xl font-semibold text-slate-900 mb-3">
                  {feature.title}
                </h3>
                <p className="text-lg text-slate-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-r from-teal-600 to-blue-600 rounded-2xl p-12 text-white">
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-3xl md:text-4xl font-bold mb-6">
              From Data Chaos to Clear Narratives
            </h3>
            <p className="text-xl mb-8 text-teal-100 leading-relaxed">
              Health Stories doesn't just aggregate data—it understands it. Our AI creates meaningful, 
              chronological health narratives that reveal the story behind the numbers, helping caregivers 
              understand not just what happened, but why it matters for future care decisions.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div>
                <div className="text-4xl font-bold text-white mb-2">10x</div>
                <div className="text-teal-200">Faster Analysis</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-white mb-2">100%</div>
                <div className="text-teal-200">FHIR Compliant</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-white mb-2">24/7</div>
                <div className="text-teal-200">Available Insights</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HealthStoriesSolution;
