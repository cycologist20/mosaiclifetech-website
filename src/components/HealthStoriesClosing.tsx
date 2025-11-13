import { ArrowRight, Heart, Shield, Zap } from 'lucide-react';

const HealthStoriesClosing = () => {
  const scrollToBetaForm = () => {
    const element = document.getElementById('beta-form');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="py-20 bg-gradient-to-br from-slate-900 via-slate-800 to-teal-900 text-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Transform Healthcare Data?
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
            Join the healthcare revolution. Be part of a community that's redefining 
            how we understand and use health information to improve lives.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="text-center p-8 bg-white/10 rounded-xl backdrop-blur-sm">
            <Heart className="w-12 h-12 text-red-400 mx-auto mb-4" />
            <h3 className="text-2xl font-semibold mb-4">For Caregivers</h3>
            <p className="text-slate-300 leading-relaxed">
              Spend less time searching for information and more time providing care. 
              Get the complete health story you need to make confident decisions.
            </p>
          </div>

          <div className="text-center p-8 bg-white/10 rounded-xl backdrop-blur-sm">
            <Shield className="w-12 h-12 text-green-400 mx-auto mb-4" />
            <h3 className="text-2xl font-semibold mb-4">For Providers</h3>
            <p className="text-slate-300 leading-relaxed">
              Access comprehensive patient narratives that reveal patterns and insights 
              you might otherwise miss. Improve outcomes with better information.
            </p>
          </div>

          <div className="text-center p-8 bg-white/10 rounded-xl backdrop-blur-sm">
            <Zap className="w-12 h-12 text-yellow-400 mx-auto mb-4" />
            <h3 className="text-2xl font-semibold mb-4">For Organizations</h3>
            <p className="text-slate-300 leading-relaxed">
              Unlock the value of your health data with AI-powered insights that drive 
              better care coordination and improved patient outcomes.
            </p>
          </div>
        </div>

        <div className="bg-gradient-to-r from-teal-600 to-blue-600 rounded-2xl p-12 text-center">
          <h3 className="text-3xl md:text-4xl font-bold mb-6">
            The Future of Healthcare Starts Now
          </h3>
          <p className="text-xl text-teal-100 mb-8 max-w-4xl mx-auto leading-relaxed">
            Health Stories isn't just another healthcare technology—it's a fundamental shift 
            toward intelligent, narrative-driven care. By transforming data into stories, 
            we're helping healthcare professionals and caregivers see the person behind the patient.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button
              onClick={scrollToBetaForm}
              className="inline-flex items-center px-8 py-4 bg-white text-teal-600 font-semibold rounded-lg hover:bg-teal-50 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              Join the Beta Program
              <ArrowRight className="ml-2 w-5 h-5" />
            </button>
            
            <a
              href="mailto:teresa@mosaiclifetech.com"
              className="inline-flex items-center px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-teal-600 transition-all duration-300"
            >
              Contact Our Team
            </a>
          </div>
        </div>

        <div className="mt-16 text-center">
          <p className="text-lg text-slate-400 mb-4">
            Questions about Health Stories or our beta program?
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center text-slate-300">
            <a href="mailto:teresa@mosaiclifetech.com" className="hover:text-white transition-colors">
              teresa@mosaiclifetech.com
            </a>
            <span className="hidden sm:inline">•</span>
            <a href="mailto:jim@mosaiclifetech.com" className="hover:text-white transition-colors">
              jim@mosaiclifetech.com
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HealthStoriesClosing;
