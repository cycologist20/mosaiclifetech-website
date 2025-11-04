import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Services', href: '#services' },
    { label: 'Collaborative Network', href: '#network' },
    { label: 'KnowMyHealth', href: '#knowmyhealth' },
    { label: 'About Us', href: '#about' },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? 'bg-white shadow-md py-4' : 'bg-transparent py-6'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <a href="#" className="text-2xl font-bold text-slate-900">
                Mosaic Life Tech
              </a>
            </div>

            <nav className="hidden lg:flex items-center space-x-8">
              {navLinks.map((link) => (
                <button
                  key={link.href}
                  onClick={() => scrollToSection(link.href)}
                  className="text-slate-700 hover:text-slate-900 transition-colors text-sm font-medium tracking-wide"
                >
                  {link.label}
                </button>
              ))}
            </nav>

            <button
              onClick={() => scrollToSection('#contact')}
              className="hidden lg:block bg-teal-600 text-white px-6 py-2.5 rounded-md hover:bg-teal-700 transition-colors text-sm font-medium tracking-wide"
            >
              Contact for Partnership
            </button>

            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden text-slate-900"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </header>

      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-white lg:hidden">
          <div className="flex flex-col items-center justify-center h-full space-y-8">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => scrollToSection(link.href)}
                className="text-2xl text-slate-900 hover:text-teal-600 transition-colors"
              >
                {link.label}
              </button>
            ))}
            <button
              onClick={() => scrollToSection('#contact')}
              className="bg-teal-600 text-white px-8 py-3 rounded-md hover:bg-teal-700 transition-colors text-lg"
            >
              Contact for Partnership
            </button>
          </div>
        </div>
      )}
    </>
  );
}
