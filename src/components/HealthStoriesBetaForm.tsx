import { useState } from 'react';
import { Mail, User, Building, MessageSquare, CheckCircle } from 'lucide-react';

const HealthStoriesBetaForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    organization: '',
    role: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitError(null);

    try {
      // Get the API endpoint from environment variables
      const apiUrl = import.meta.env.VITE_FIREBASE_BETA_ENDPOINT;
      
      if (!apiUrl) {
        throw new Error('API endpoint not configured. Please contact support.');
      }

      // Validate required fields
      if (!formData.name || !formData.email || !formData.role) {
        throw new Error('Please fill in all required fields (Name, Email, and Role).');
      }

      // Submit to Firebase Cloud Function
      const response = await fetch(apiUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          organization: formData.organization,
          role: formData.role,
          message: formData.message,
          timestamp: new Date().toISOString(),
        }),
      });

      if (!response.ok) {
        const errorText = await response.text();
        throw new Error(errorText || `Server error: ${response.status}`);
      }

      const result = await response.json();
      console.log('Beta signup successful:', result);
      
      setIsSubmitted(true);
    } catch (error) {
      console.error('Beta signup error:', error);
      setSubmitError(error instanceof Error ? error.message : 'An unexpected error occurred. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <section id="beta-form" className="py-20 bg-gradient-to-br from-teal-600 to-blue-600">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div className="bg-white rounded-2xl p-12 shadow-2xl">
            <CheckCircle className="w-20 h-20 text-green-600 mx-auto mb-6" />
            <h2 className="text-4xl font-bold text-slate-900 mb-6">
              Thank You for Your Interest!
            </h2>
            <p className="text-xl text-slate-600 mb-8 leading-relaxed">
              We've received your beta program application and will be in touch soon with next steps. 
              Our team is excited to work with forward-thinking healthcare professionals like you.
            </p>
            <div className="bg-teal-50 p-6 rounded-xl">
              <p className="text-lg text-teal-800">
                <strong>What's Next?</strong> Our team will review your application and reach out within 48 hours 
                to discuss your specific needs and how Health Stories can transform your caregiving experience.
              </p>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="beta-form" className="py-20 bg-gradient-to-br from-teal-600 to-blue-600">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Join the Health Stories Beta Program
          </h2>
          <p className="text-xl text-teal-100 max-w-3xl mx-auto leading-relaxed">
            Be among the first to experience the future of healthcare data intelligence. 
            Limited spots available for our exclusive beta program.
          </p>
        </div>

        <div className="bg-white rounded-2xl p-8 md:p-12 shadow-2xl">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-sm font-semibold text-slate-700 mb-2">
                  Full Name *
                </label>
                <div className="relative">
                  <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-slate-400" />
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full pl-10 pr-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all duration-200"
                    placeholder="Enter your full name"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-slate-700 mb-2">
                  Email Address *
                </label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-slate-400" />
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full pl-10 pr-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all duration-200"
                    placeholder="Enter your email address"
                  />
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="organization" className="block text-sm font-semibold text-slate-700 mb-2">
                  Organization
                </label>
                <div className="relative">
                  <Building className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-slate-400" />
                  <input
                    type="text"
                    id="organization"
                    name="organization"
                    value={formData.organization}
                    onChange={handleInputChange}
                    className="w-full pl-10 pr-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all duration-200"
                    placeholder="Your organization or healthcare system"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="role" className="block text-sm font-semibold text-slate-700 mb-2">
                  Your Role
                </label>
                <select
                  id="role"
                  name="role"
                  value={formData.role}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all duration-200"
                >
                  <option value="">Select your role</option>
                  <option value="family-caregiver">Family Caregiver</option>
                  <option value="healthcare-provider">Healthcare Provider</option>
                  <option value="care-coordinator">Care Coordinator</option>
                  <option value="health-system-admin">Health System Administrator</option>
                  <option value="technology-leader">Technology Leader</option>
                  <option value="other">Other</option>
                </select>
              </div>
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-semibold text-slate-700 mb-2">
                Tell us about your caregiving challenges
              </label>
              <div className="relative">
                <MessageSquare className="absolute left-3 top-3 w-5 h-5 text-slate-400" />
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleInputChange}
                  className="w-full pl-10 pr-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all duration-200 resize-none"
                  placeholder="Describe your current challenges with health data management and how Health Stories could help..."
                />
              </div>
            </div>

            <div className="bg-teal-50 p-6 rounded-xl">
              <h4 className="font-semibold text-teal-900 mb-3">Beta Program Benefits:</h4>
              <ul className="space-y-2 text-teal-800">
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-teal-600 rounded-full mr-3"></div>
                  Early access to Health Stories platform
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-teal-600 rounded-full mr-3"></div>
                  Direct input on feature development
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-teal-600 rounded-full mr-3"></div>
                  Dedicated support from our team
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-teal-600 rounded-full mr-3"></div>
                  Preferred pricing for full platform access
                </li>
              </ul>
            </div>

            {submitError && (
              <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                <div className="flex items-center">
                  <div className="w-4 h-4 bg-red-500 rounded-full mr-3 flex-shrink-0"></div>
                  <p className="text-red-800 text-sm">{submitError}</p>
                </div>
              </div>
            )}

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-teal-600 hover:bg-teal-700 disabled:bg-teal-400 text-white font-semibold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 disabled:scale-100 shadow-lg hover:shadow-xl"
            >
              {isSubmitting ? 'Submitting Application...' : 'Apply for Beta Access'}
            </button>

            <p className="text-sm text-slate-500 text-center">
              By submitting this form, you agree to our privacy policy and terms of service. 
              We'll only use your information to communicate about the Health Stories beta program.
            </p>
          </form>
        </div>
      </div>
    </section>
  );
};

export default HealthStoriesBetaForm;
