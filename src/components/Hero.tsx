import { ChevronDown } from 'lucide-react';

export default function Hero() {
  const scrollToServices = () => {
    const element = document.querySelector('#services');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden" style={{ backgroundColor: '#E0E0E0' }}>
      {/* Subtle network pattern overlay - very light */}
      <div className="absolute inset-0" style={{
        backgroundImage: `url('/image_36c204.jpg')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        opacity: '0.05'
      }}></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 text-center pt-20">
        <h1 className="text-4xl md:text-5xl lg:text-6xl mb-6 leading-tight" style={{ color: '#2A5B69', fontWeight: '500', letterSpacing: '-0.025em' }}>
          Empowering Healthcare Through{' '}
          <span style={{ color: '#2A5B69', fontWeight: '500' }}>Trusted AI</span>{' '}
          From Strategy to Execution
        </h1>

        <p className="text-xl md:text-2xl mb-12 max-w-4xl mx-auto leading-relaxed" style={{ color: '#2A5B69', fontWeight: '400', opacity: '0.8' }}>
          We are the specialized implementation and governance engine that transforms AI exploration into confident, compliant reality for the public sector and enterprise healthcare.
        </p>

        <button
          onClick={scrollToServices}
          className="text-white px-10 py-4 rounded-md transition-all text-lg font-medium tracking-wide shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
          style={{ backgroundColor: '#E89A3C' }}
          onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#d4881f'}
          onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#E89A3C'}
        >
          Start the Conversation
        </button>

        <button
          onClick={scrollToServices}
          className="absolute bottom-12 left-1/2 transform -translate-x-1/2 animate-bounce" style={{ color: '#2A5B69' }}
        >
          <ChevronDown size={32} />
        </button>
      </div>
    </section>
  );
}
