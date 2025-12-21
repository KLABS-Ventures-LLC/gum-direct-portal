import { Link } from "react-router-dom";
import { Mail, Phone, MapPin } from "lucide-react";

const footerLinks = {
  products: [
    { name: "Acacia Senegal", href: "/products/acacia-senegal" },
    { name: "Acacia Seyal", href: "/products/acacia-seyal" },
  ],
  company: [
    { name: "About Us", href: "/about" },
    { name: "Quality & Certifications", href: "/quality" },
    { name: "Applications", href: "/applications" },
    { name: "Contact", href: "/contact" },
  ],
  resources: [
    { name: "Request COA/SDS", href: "/contact?type=coa" },
    { name: "Product Data Sheets", href: "/contact?type=datasheet" },
    { name: "Request Quote", href: "/contact?type=quote" },
  ],
};

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container-wide section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <Link to="/" className="flex items-center gap-2 mb-6">
              <div className="w-10 h-10 rounded-lg bg-primary-foreground/10 flex items-center justify-center">
                <span className="text-primary-foreground font-display font-bold text-xl">G</span>
              </div>
              <span className="font-display font-bold text-xl">GumDirect</span>
            </Link>
            <p className="text-primary-foreground/70 mb-6 max-w-sm">
              Premium spray-dried acacia gum, direct from Sudan, processed to
              global food standards. UK-based supply with full traceability.
            </p>
            <div className="space-y-3">
              <a
                href="mailto:info@gumdirect.com"
                className="flex items-center gap-3 text-primary-foreground/70 hover:text-primary-foreground transition-colors"
              >
                <Mail className="w-5 h-5" />
                <span>info@gumdirect.com</span>
              </a>
              <a
                href="tel:+441onal-2345678"
                className="flex items-center gap-3 text-primary-foreground/70 hover:text-primary-foreground transition-colors"
              >
                <Phone className="w-5 h-5" />
                <span>+44 (0) 123 456 7890</span>
              </a>
              <div className="flex items-start gap-3 text-primary-foreground/70">
                <MapPin className="w-5 h-5 mt-0.5" />
                <span>
                  GumDirect Ltd
                  <br />
                  London, United Kingdom
                </span>
              </div>
            </div>
          </div>

          {/* Products */}
          <div>
            <h4 className="font-display font-semibold mb-4">Products</h4>
            <ul className="space-y-3">
              {footerLinks.products.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-primary-foreground/70 hover:text-primary-foreground transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-display font-semibold mb-4">Company</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-primary-foreground/70 hover:text-primary-foreground transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="font-display font-semibold mb-4">Resources</h4>
            <ul className="space-y-3">
              {footerLinks.resources.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-primary-foreground/70 hover:text-primary-foreground transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-primary-foreground/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-primary-foreground/60 text-sm">
            © {new Date().getFullYear()} GumDirect Ltd. All rights reserved.
          </p>
          <div className="flex items-center gap-6 text-sm">
            <Link
              to="/privacy"
              className="text-primary-foreground/60 hover:text-primary-foreground transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              to="/terms"
              className="text-primary-foreground/60 hover:text-primary-foreground transition-colors"
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
