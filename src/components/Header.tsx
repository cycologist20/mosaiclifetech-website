import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';

interface HeaderProps {
  onBackToMain?: () => void;
  onNavigateToSection?: (section: string) => void;
}

export default function Header({ onBackToMain, onNavigateToSection }: HeaderProps) {
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
    { label: 'Health Stories', href: '/health-stories', isRoute: true },
    { label: 'About Us', href: '#about' },
  ];

  const scrollToSection = (href: string) => {
    if (onNavigateToSection) {
      // We're on the vision page, navigate back to main page and scroll to section
      onNavigateToSection(href);
      setIsMobileMenuOpen(false);
    } else {
      // We're on the main page, scroll normally
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
        setIsMobileMenuOpen(false);
      }
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? 'bg-white shadow-md py-2' : 'py-3'
        }`}
        style={{ backgroundColor: isScrolled ? '#ffffff' : '#E0E0E0' }}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <Link to="/" className="flex items-center">
                <img 
                  src="/Mosaic Life Tech  Logo2.svg" 
                  alt="Mosaic Life Tech Logo" 
                  className="h-48 sm:h-60 md:h-30 lg:h-36 w-auto logo-hover"
                />
              </Link>
            </div>

            <nav className="hidden lg:flex items-center space-x-8">
              {navLinks.map((link) => (
                link.isRoute ? (
                  <Link
                    key={link.href}
                    to={link.href}
                    className="transition-colors text-base font-medium tracking-wide"
                    style={{ color: '#2d2d2d', fontWeight: '600' }}
                    onMouseEnter={(e) => (e.currentTarget as HTMLElement).style.color = '#1a1a1a'}
                    onMouseLeave={(e) => (e.currentTarget as HTMLElement).style.color = '#2d2d2d'}
                  >
                    {link.label}
                  </Link>
                ) : (
                  <button
                    key={link.href}
                    onClick={() => scrollToSection(link.href)}
                    className="transition-colors text-base font-medium tracking-wide"
                    style={{ color: '#2d2d2d', fontWeight: '600' }}
                    onMouseEnter={(e) => (e.currentTarget as HTMLElement).style.color = '#1a1a1a'}
                    onMouseLeave={(e) => (e.currentTarget as HTMLElement).style.color = '#2d2d2d'}
                  >
                    {link.label}
                  </button>
                )
              ))}
            </nav>

{onBackToMain ? (
              <button
                onClick={onBackToMain}
                className="hidden lg:block text-white px-6 py-2.5 rounded-md transition-colors text-base font-medium tracking-wide"
                style={{ backgroundColor: '#2A5B69' }}
                onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#1e4a54'}
                onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#2A5B69'}
              >
                ← Back to Main Site
              </button>
            ) : (
              <button
                onClick={() => scrollToSection('#contact')}
                className="hidden lg:block text-white px-6 py-2.5 rounded-md transition-colors text-base font-medium tracking-wide"
                style={{ backgroundColor: '#E89A3C' }}
                onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#d4881f'}
                onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#E89A3C'}
              >
                Contact for Partnership
              </button>
            )}

            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden"
              style={{ color: '#1a1a1a' }}
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </header>

      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-40 lg:hidden" style={{ backgroundColor: '#E0E0E0' }}>
          <div className="flex flex-col items-center justify-center h-full space-y-8">
            {navLinks.map((link) => (
              link.isRoute ? (
                <Link
                  key={link.href}
                  to={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-2xl transition-colors"
                  style={{ color: '#1a1a1a', fontWeight: '700' }}
                  onMouseEnter={(e) => (e.currentTarget as HTMLElement).style.color = '#2A5B69'}
                  onMouseLeave={(e) => (e.currentTarget as HTMLElement).style.color = '#1a1a1a'}
                >
                  {link.label}
                </Link>
              ) : (
                <button
                  key={link.href}
                  onClick={() => scrollToSection(link.href)}
                  className="text-2xl transition-colors"
                  style={{ color: '#1a1a1a', fontWeight: '700' }}
                  onMouseEnter={(e) => (e.currentTarget as HTMLElement).style.color = '#2A5B69'}
                  onMouseLeave={(e) => (e.currentTarget as HTMLElement).style.color = '#1a1a1a'}
                >
                  {link.label}
                </button>
              )
            ))}
{onBackToMain ? (
              <button
                onClick={onBackToMain}
                className="text-white px-8 py-3 rounded-md transition-colors text-lg"
                style={{ backgroundColor: '#2A5B69' }}
                onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#1e4a54'}
                onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#2A5B69'}
              >
                ← Back to Main Site
              </button>
            ) : (
              <button
                onClick={() => scrollToSection('#contact')}
                className="text-white px-8 py-3 rounded-md transition-colors text-lg"
                style={{ backgroundColor: '#E89A3C' }}
                onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#d4881f'}
                onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#E89A3C'}
              >
                Contact for Partnership
              </button>
            )}
          </div>
        </div>
      )}
    </>
  );
}
