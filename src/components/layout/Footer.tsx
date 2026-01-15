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
            <div className="flex items-center gap-2">
              <img src="/images/mosaic-logo.png" alt="Mosaic Life Tech" className="h-8 w-auto" />
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
              href="mailto:support@mosaiclifetech.com"
              className="text-muted-foreground hover:text-primary transition-colors"
              aria-label="Email us"
            >
              <Mail className="h-5 w-5" />
            </a>
            <a
              href="https://linkedin.com/in/teresayounkin"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
              aria-label="Teresa on LinkedIn"
            >
              <Linkedin className="h-5 w-5" />
            </a>
            <a
              href="https://linkedin.com/in/jimryounkin"
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

export default Footer;
