import { AlertTriangle, FileX, Clock, Users } from 'lucide-react';

const HealthStoriesProblem = () => {
  const problems = [
    {
      icon: <FileX className="w-8 h-8 text-red-600" />,
      title: "Fragmented Health Records",
      description: "Medical information scattered across multiple systems, providers, and formats makes it nearly impossible to get a complete picture of a patient's health journey."
    },
    {
      icon: <Clock className="w-8 h-8 text-orange-600" />,
      title: "Time-Intensive Research",
      description: "Caregivers spend countless hours trying to piece together medical histories, often missing critical connections that could impact care decisions."
    },
    {
      icon: <AlertTriangle className="w-8 h-8 text-yellow-600" />,
      title: "Missed Critical Insights",
      description: "Important patterns, trends, and correlations in health data go unnoticed, potentially leading to suboptimal care outcomes."
    },
    {
      icon: <Users className="w-8 h-8 text-blue-600" />,
      title: "Communication Barriers",
      description: "Difficulty sharing comprehensive health narratives with healthcare teams, family members, and other caregivers involved in patient care."
    }
  ];

  return (
    <section className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            The Challenge Caregivers Face
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            In today's complex healthcare landscape, caregivers struggle with disconnected information that makes it difficult to provide the best possible care.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {problems.map((problem, index) => (
            <div key={index} className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="mb-6">
                {problem.icon}
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-4">
                {problem.title}
              </h3>
              <p className="text-slate-600 leading-relaxed">
                {problem.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-gradient-to-r from-red-50 to-orange-50 p-8 rounded-xl border-l-4 border-red-500">
          <div className="flex items-start space-x-4">
            <AlertTriangle className="w-8 h-8 text-red-600 flex-shrink-0 mt-1" />
            <div>
              <h3 className="text-2xl font-semibold text-slate-900 mb-3">
                The Cost of Fragmentation
              </h3>
              <p className="text-lg text-slate-700 leading-relaxed">
                When health information exists in silos, caregivers can't see the full story. This leads to repeated tests, 
                missed diagnoses, medication errors, and ultimately, compromised patient outcomes. The emotional toll on 
                families navigating complex care decisions without complete information is immeasurable.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HealthStoriesProblem;
