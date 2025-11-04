import { ChevronDown } from 'lucide-react';

export default function Hero() {
  const scrollToServices = () => {
    const element = document.querySelector('#services');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}></div>
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-6 lg:px-8 text-center pt-20">
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
          Empowering Healthcare Through{' '}
          <span className="text-teal-400">Trusted AI</span>
          <br />
          From Strategy to Execution
        </h1>

        <p className="text-xl md:text-2xl text-slate-300 mb-12 max-w-4xl mx-auto leading-relaxed">
          We are the specialized implementation and governance engine that transforms AI exploration into confident, compliant reality for the public sector and enterprise healthcare.
        </p>

        <button
          onClick={scrollToServices}
          className="bg-teal-600 text-white px-10 py-4 rounded-md hover:bg-teal-700 transition-all text-lg font-medium tracking-wide shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
        >
          Start the Conversation
        </button>

        <button
          onClick={scrollToServices}
          className="absolute bottom-12 left-1/2 transform -translate-x-1/2 text-white animate-bounce"
        >
          <ChevronDown size={32} />
        </button>
      </div>
    </section>
  );
}
