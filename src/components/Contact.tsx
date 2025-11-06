import { Mail, Linkedin, MapPin } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-slate-50">
      <div className="max-w-4xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            Let's Build the Future Together
          </h2>
          <p className="text-xl text-slate-600">
            Ready to transform AI strategy into compliant reality?
          </p>
        </div>

        <div className="bg-white p-10 rounded-lg shadow-lg">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">
            <div className="text-center">
              <div className="w-12 h-12 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Mail className="w-6 h-6 text-teal-600" />
              </div>
              <h3 className="font-semibold text-slate-900 mb-2">Email</h3>
              <p className="text-slate-600">teresa@mosaiclifetech.com</p>
              <p className="text-slate-600">jim@mosaiclifetech.com</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Linkedin className="w-6 h-6 text-teal-600" />
              </div>
              <h3 className="font-semibold text-slate-900 mb-2">Connect</h3>
              <a href="https://www.linkedin.com/in/teresayounkin" target="_blank" rel="noopener noreferrer" className="text-slate-600 hover:text-teal-600 transition-colors block">
                linkedin.com/in/teresayounkin
              </a>
              <a href="https://www.linkedin.com/in/jimryounkin/" target="_blank" rel="noopener noreferrer" className="text-slate-600 hover:text-teal-600 transition-colors block">
                linkedin.com/in/jimryounkin
              </a>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="w-6 h-6 text-teal-600" />
              </div>
              <h3 className="font-semibold text-slate-900 mb-2">Location</h3>
              <p className="text-slate-600">Chesapeake, VA</p>
            </div>
          </div>

          <div className="text-center">
            <button className="bg-teal-600 text-white px-10 py-4 rounded-md hover:bg-teal-700 transition-colors text-lg font-medium shadow-lg hover:shadow-xl">
              Schedule a Consultation
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
