import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, ArrowUpRight } from "lucide-react";

const footerLinks = {
  products: [
    { name: "Acacia Senegal", href: "/products/acacia-senegal" },
  ],
  company: [
    { name: "About Us", href: "/about" },
    { name: "Quality", href: "/quality" },
    { name: "Applications", href: "/applications" },
    { name: "Contact", href: "/contact" },
  ],
};

export function Footer() {
  return (
    <footer className="relative overflow-hidden">
      {/* Top CTA Section */}
      <div className="gradient-primary">
        <div className="container-wide py-16 md:py-20">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="text-center md:text-left">
              <h3 className="text-display-sm text-primary-foreground mb-2">
                Ready to get started?
              </h3>
              <p className="text-primary-foreground/70 text-lg">
                Request a sample or get a quote for your requirements.
              </p>
            </div>
            <div className="flex flex-wrap gap-4">
              <Link
                to="/contact?type=sample"
                className="inline-flex items-center gap-2 px-6 py-3 bg-primary-foreground text-primary font-semibold rounded-full hover:bg-primary-foreground/90 transition-all shadow-elevated"
              >
                Get Sample
                <ArrowUpRight className="w-4 h-4" />
              </Link>
              <Link
                to="/contact?type=quote"
                className="inline-flex items-center gap-2 px-6 py-3 border-2 border-primary-foreground/30 text-primary-foreground font-medium rounded-full hover:bg-primary-foreground/10 transition-all"
              >
                Request Quote
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="bg-foreground text-background">
        <div className="container-wide py-16 md:py-20">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8">
            {/* Brand Column */}
            <div className="lg:col-span-5">
              <Link to="/" className="inline-flex items-center gap-3 mb-6">
                <div className="w-11 h-11 rounded-2xl bg-primary flex items-center justify-center">
                  <span className="text-primary-foreground font-display font-bold text-xl">G</span>
                </div>
                <div className="flex flex-col">
                  <span className="font-display font-bold text-xl leading-none">GumDirect</span>
                  <span className="text-[10px] uppercase tracking-[0.2em] text-background/50">
                    Premium Acacia Gum
                  </span>
                </div>
              </Link>
              <p className="text-background/60 mb-8 max-w-sm text-sm leading-relaxed">
                Premium spray-dried acacia gum sourced directly from Sudan. 
                UK-based supply with full traceability and batch certification.
              </p>
              <div className="space-y-3">
                <a
                  href="mailto:info@gumdirect.com"
                  className="flex items-center gap-3 text-background/60 hover:text-accent transition-colors text-sm"
                >
                  <Mail className="w-4 h-4" />
                  info@gumdirect.com
                </a>
                <a
                  href="tel:+441234567890"
                  className="flex items-center gap-3 text-background/60 hover:text-accent transition-colors text-sm"
                >
                  <Phone className="w-4 h-4" />
                  +44 (0) 123 456 7890
                </a>
                <div className="flex items-start gap-3 text-background/60 text-sm">
                  <MapPin className="w-4 h-4 mt-0.5" />
                  <span>London, United Kingdom</span>
                </div>
              </div>
            </div>

            {/* Products */}
            <div className="lg:col-span-2">
              <h4 className="font-display font-semibold text-sm uppercase tracking-wider mb-6 text-background/40">
                Products
              </h4>
              <ul className="space-y-3">
                {footerLinks.products.map((link) => (
                  <li key={link.name}>
                    <Link
                      to={link.href}
                      className="text-background/60 hover:text-accent transition-colors text-sm"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company */}
            <div className="lg:col-span-2">
              <h4 className="font-display font-semibold text-sm uppercase tracking-wider mb-6 text-background/40">
                Company
              </h4>
              <ul className="space-y-3">
                {footerLinks.company.map((link) => (
                  <li key={link.name}>
                    <Link
                      to={link.href}
                      className="text-background/60 hover:text-accent transition-colors text-sm"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Certifications */}
            <div className="lg:col-span-3">
              <h4 className="font-display font-semibold text-sm uppercase tracking-wider mb-6 text-background/40">
                Certifications
              </h4>
              <div className="flex flex-wrap gap-2">
                {["HACCP", "ISO 22000", "Halal", "Kosher", "Non-GMO"].map((cert) => (
                  <span
                    key={cert}
                    className="px-3 py-1.5 text-xs font-medium rounded-full bg-background/10 text-background/70"
                  >
                    {cert}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="mt-16 pt-8 border-t border-background/10 flex flex-col md:flex-row justify-between items-center gap-4 text-sm">
            <p className="text-background/40">
              © {new Date().getFullYear()} GumDirect Ltd. All rights reserved.
            </p>
            <div className="flex items-center gap-6">
              <Link to="/privacy" className="text-background/40 hover:text-background/70 transition-colors">
                Privacy Policy
              </Link>
              <Link to="/terms" className="text-background/40 hover:text-background/70 transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
