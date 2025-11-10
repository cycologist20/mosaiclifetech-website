interface FooterProps {
  onNavigateToSection?: (section: string) => void;
}

export default function Footer({ onNavigateToSection }: FooterProps) {
  const navLinks = [
    { label: 'Services', href: '#services' },
    { label: 'Collaborative Network', href: '#network' },
    { label: 'KnowMyHealth', href: '#knowmyhealth' },
    { label: 'About Us', href: '#about' },
  ];

  const scrollToSection = (href: string) => {
    if (onNavigateToSection) {
      // We're on the vision page, navigate back to main page and scroll to section
      onNavigateToSection(href);
    } else {
      // We're on the main page, scroll normally
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <footer className="bg-slate-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          <div>
            <h3 className="text-2xl font-bold mb-4">Mosaic Life Tech</h3>
            <p className="text-slate-400 max-w-md">
              Empowering Healthcare Through Trusted AI: From Strategy to Execution.
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <nav className="flex flex-col space-y-2">
              {navLinks.map((link) => (
                <button
                  key={link.href}
                  onClick={() => scrollToSection(link.href)}
                  className="text-slate-400 hover:text-white transition-colors text-left"
                >
                  {link.label}
                </button>
              ))}
            </nav>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8 text-center text-slate-400 text-sm">
          <p>Copyright &copy; 2025 Mosaic Life Tech, LLC. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
