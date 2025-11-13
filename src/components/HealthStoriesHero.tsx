import { ArrowRight } from 'lucide-react';

const HealthStoriesHero = () => {
  const scrollToBetaForm = () => {
    const element = document.getElementById('beta-form');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-slate-800 to-teal-900">
      <div className="absolute inset-0 bg-black/20"></div>
      
      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center text-white">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
          Health Stories
        </h1>
        <p className="text-xl md:text-2xl mb-4 text-slate-200 max-w-3xl mx-auto leading-relaxed">
          Empowering caregivers with AI-driven insights from comprehensive health data
        </p>
        <p className="text-lg md:text-xl mb-8 text-slate-300 max-w-2xl mx-auto">
          Transform fragmented health information into meaningful narratives that guide better care decisions
        </p>
        
        <button
          onClick={scrollToBetaForm}
          className="inline-flex items-center px-8 py-4 bg-teal-600 hover:bg-teal-700 text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
        >
          Join the Beta Program
          <ArrowRight className="ml-2 w-5 h-5" />
        </button>
      </div>
    </section>
  );
};

export default HealthStoriesHero;
