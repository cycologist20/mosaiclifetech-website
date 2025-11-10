import { CheckCircle } from 'lucide-react';

export default function KnowMyHealthVision() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: '#E0E0E0' }}>
      {/* Section 1: Hero */}
      <section className="pt-48 pb-24 bg-gradient-to-b from-slate-50 to-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl mb-6 leading-tight" style={{ color: '#2A5B69', fontWeight: '600' }}>
            From Caregiver Confusion<br />to Advocate's Clarity
          </h1>
          <p className="text-xl md:text-2xl mb-12 max-w-4xl mx-auto leading-relaxed" style={{ color: '#2A5B69', opacity: '0.8' }}>
            KnowMyHealth is the AI-powered co-pilot we're building for the 48 million Americans 
            caring for a loved one. We're turning information overload into clarity and action.
          </p>
        </div>
      </section>

      {/* Section 2: The Caregiver's Reality */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-12 text-center">
            If You're a Caregiver, This Probably Sounds Familiar.
          </h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <p className="text-lg leading-relaxed text-slate-600">
                Being a caregiver for an aging parent means you're not just a son or daughter—you're 
                a care coordinator, a medical interpreter, and an advocate, all without the right tools. 
                The burden is immense:
              </p>
              <ul className="space-y-4">
                <li className="flex gap-3">
                  <span className="font-bold text-xl" style={{ color: '#E89A3C' }}>•</span>
                  <div>
                    <strong style={{ color: '#2A5B69' }}>Fragmented Information:</strong>
                    <span className="text-slate-600"> Your parent's medical history is scattered across 
                    dozens of disconnected patient portals, from civilian hospitals to the VA.</span>
                  </div>
                </li>
                <li className="flex gap-3">
                  <span className="font-bold text-xl" style={{ color: '#E89A3C' }}>•</span>
                  <div>
                    <strong style={{ color: '#2A5B69' }}>Communication Gaps:</strong>
                    <span className="text-slate-600"> You're trying to explain what the specialist said 
                    to the primary care doctor, or your parent struggles to recall critical instructions 
                    after a stressful appointment.</span>
                  </div>
                </li>
                <li className="flex gap-3">
                  <span className="font-bold text-xl" style={{ color: '#E89A3C' }}>•</span>
                  <div>
                    <strong style={{ color: '#2A5B69' }}>Information Overload:</strong>
                    <span className="text-slate-600"> You're handed an After-Visit Summary (AVS) full of 
                    complex medical jargon and are left to figure out what's truly important.</span>
                  </div>
                </li>
                <li className="flex gap-3">
                  <span className="font-bold text-xl" style={{ color: '#E89A3C' }}>•</span>
                  <div>
                    <strong style={{ color: '#2A5B69' }}>Remote Care Crisis:</strong>
                    <span className="text-slate-600"> You're trying to manage all of this from a distance, 
                    unable to effectively intervene in critical moments.</span>
                  </div>
                </li>
              </ul>
            </div>
            <div className="flex items-center justify-center">
              <div className="w-full max-w-md">
                <img 
                  src="/kitchen-table-crisis.png" 
                  alt="Caregiver managing medical paperwork at kitchen table" 
                  className="w-full h-auto rounded-lg shadow-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: The Core Insight */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-8">
            Bridging the Gap Between Heart and Data
          </h2>
          <p className="text-lg leading-relaxed text-slate-600 mb-8">
            We've spent decades in Health IT and informatics, and we've lived this journey ourselves. 
            We've learned that caregiving breaks down at a simple, critical point:
          </p>
          <blockquote className="border-l-4 pl-6 py-4 my-8 bg-white rounded-r-lg" style={{ borderColor: '#E89A3C' }}>
            <p className="text-2xl md:text-3xl font-semibold italic" style={{ color: '#2A5B69' }}>
              "Doctors need structured data. Patients need to feel heard."
            </p>
          </blockquote>
          <p className="text-lg leading-relaxed text-slate-600">
            KnowMyHealth is being built to be this bridge. It's designed to use the structured data 
            to empower the human story.
          </p>
        </div>
      </section>

      {/* Section 4: The KnowMyHealth Vision */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-12 text-center">
            Your Single Source of Truth
          </h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="flex items-center justify-center order-2 md:order-1">
              <div className="w-full max-w-md">
                <img 
                  src="/portal-fatigue.png" 
                  alt="Multiple healthcare portals showing the complexity of fragmented health data" 
                  className="w-full h-auto rounded-lg shadow-lg"
                />
              </div>
            </div>
            <div className="space-y-6 order-1 md:order-2">
              <p className="text-lg leading-relaxed text-slate-600">
                Our mission is to build a single, intuitive platform that gives you clarity and control. 
                This is the long-term vision we are working toward:
              </p>
              <ul className="space-y-4">
                <li className="flex gap-3">
                  <CheckCircle className="w-6 h-6 text-teal-600 flex-shrink-0 mt-1" />
                  <div>
                    <strong style={{ color: '#2A5B69' }}>One Secure Login:</strong>
                    <span className="text-slate-600"> Securely connect to all your loved one's providers 
                    (like Epic, Cerner, and more) from one place.</span>
                  </div>
                </li>
                <li className="flex gap-3">
                  <CheckCircle className="w-6 h-6 text-teal-600 flex-shrink-0 mt-1" />
                  <div>
                    <strong style={{ color: '#2A5B69' }}>A Unified Dashboard:</strong>
                    <span className="text-slate-600"> See a single, unified list of your parent's active 
                    conditions, medications, and allergies—no more "portal fatigue".</span>
                  </div>
                </li>
                <li className="flex gap-3">
                  <CheckCircle className="w-6 h-6 text-teal-600 flex-shrink-0 mt-1" />
                  <div>
                    <strong style={{ color: '#2A5B69' }}>AI-Powered Clarity:</strong>
                    <span className="text-slate-600"> Get simple, plain-English answers without digging, 
                    from AVS summaries to an AI co-pilot for your questions.</span>
                  </div>
                </li>
                <li className="flex gap-3">
                  <CheckCircle className="w-6 h-6 text-teal-600 flex-shrink-0 mt-1" />
                  <div>
                    <strong style={{ color: '#2A5B69' }}>True Peace of Mind:</strong>
                    <span className="text-slate-600"> Finally, have the confidence that you are the most 
                    effective and informed advocate for your parent's health.</span>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Section 5: Call-to-Action */}
      <section className="py-24 bg-slate-100">
        <div className="max-w-3xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6" style={{ color: '#2A5B69' }}>
            Our Journey Starts with Your Story
          </h2>
          <p className="text-lg md:text-xl leading-relaxed mb-8" style={{ color: '#2A5B69', opacity: '0.8' }}>
            Building the complete KnowMyHealth platform is a massive undertaking. But our journey 
            begins today with a crucial first step—a new tool designed to solve the "storytelling" 
            part of the problem.
          </p>
          <button
            className="text-white px-10 py-4 rounded-md transition-colors text-lg font-medium tracking-wide shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
            style={{ backgroundColor: '#E89A3C' }}
            onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#d4881f'}
            onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#E89A3C'}
          >
            Coming Soon: HealthStories
          </button>
        </div>
      </section>
    </div>
  );
}
