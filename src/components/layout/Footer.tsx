import { Link } from "react-router-dom";
import { Linkedin, Mail } from "lucide-react";

const footerLinks = [
  { name: "What We Do", href: "/what-we-do" },
  { name: "Who We Help", href: "/who-we-help" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
];

export function Footer() {
  return (
    <footer className="border-t border-border bg-card">
      <div className="container-wide section-padding-sm">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Logo and Copyright */}
          <div className="flex flex-col gap-1">
            <div className="flex items-center gap-3">
              <MosaicLogoSmall />
              <span className="text-sm font-semibold text-foreground">MOSAIC LIFE TECH</span>
            </div>
            <p className="text-sm italic text-muted-foreground/80">
              Healthcare AI. Governed with clarity.
            </p>
            <div className="text-xs text-muted-foreground mt-1">
              © {new Date().getFullYear()} Mosaic Life Tech, LLC
            </div>
          </div>

          {/* Navigation Links */}
          <nav className="flex flex-wrap justify-center gap-6">
            {footerLinks.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                className="text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* Contact Info */}
          <div className="flex items-center gap-4">
            <a
              href="mailto:info@mosaiclifetech.com"
              className="text-muted-foreground hover:text-primary transition-colors"
              aria-label="Email us"
            >
              <Mail className="h-5 w-5" />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
              aria-label="Teresa on LinkedIn"
            >
              <Linkedin className="h-5 w-5" />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
              aria-label="Jim on LinkedIn"
            >
              <Linkedin className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

function MosaicLogoSmall() {
  return (
    <svg width="24" height="24" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="2" y="2" width="8" height="8" rx="1" fill="#2D9B9B"/>
      <rect x="12" y="2" width="8" height="8" rx="1" fill="#E8974C"/>
      <rect x="22" y="2" width="8" height="8" rx="1" fill="#1A3A4A"/>
      <rect x="2" y="12" width="8" height="8" rx="1" fill="#E8974C"/>
      <rect x="12" y="12" width="8" height="8" rx="1" fill="#1A3A4A"/>
      <rect x="22" y="12" width="8" height="8" rx="1" fill="#2D9B9B"/>
      <rect x="2" y="22" width="8" height="8" rx="1" fill="#1A3A4A"/>
      <rect x="12" y="22" width="8" height="8" rx="1" fill="#2D9B9B"/>
      <rect x="22" y="22" width="8" height="8" rx="1" fill="#E8974C"/>
    </svg>
  );
}

export default Footer;
