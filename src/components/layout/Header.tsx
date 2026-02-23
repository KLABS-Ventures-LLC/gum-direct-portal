import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const navigation = [
  { name: "Products", href: "/products" },
  { name: "Applications", href: "/applications" },
  { name: "Quality", href: "/quality" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
];

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
        isScrolled
          ? "bg-background/95 backdrop-blur-sm shadow-soft py-3"
          : "bg-transparent py-5"
      )}
    >
      <nav className="container-wide">
        <div className="flex items-center justify-between">
          {/* Logo - Text only */}
          <Link to="/" className="flex items-center group">
            <span className="font-display font-bold text-2xl leading-none tracking-tight">
              <span className="text-primary">Gum</span>
              <span className="text-accent">Direct</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={cn(
                  "px-4 py-2 text-sm font-medium transition-all duration-300 rounded-full",
                  location.pathname === item.href
                    ? "text-accent bg-accent/10"
                    : "text-foreground/70 hover:text-foreground hover:bg-muted"
                )}
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <Button variant="outline" size="sm" asChild>
              <Link to="/contact?type=sample">Get Sample</Link>
            </Button>
            <Button variant="accent" size="sm" asChild>
              <Link to="/contact?type=quote">Request Quote</Link>
            </Button>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="lg:hidden p-2 rounded-xl text-foreground hover:bg-muted transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        <div className={cn(
          "lg:hidden overflow-hidden transition-all duration-500",
          isMobileMenuOpen ? "max-h-[400px] opacity-100 mt-4" : "max-h-0 opacity-0"
        )}>
          <div className="bg-card rounded-2xl border border-border p-4 shadow-soft">
            <div className="space-y-1">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={cn(
                    "block px-4 py-3 text-base font-medium rounded-xl transition-colors",
                    location.pathname === item.href
                      ? "text-accent bg-accent/10"
                      : "text-muted-foreground hover:text-foreground hover:bg-muted"
                  )}
                >
                  {item.name}
                </Link>
              ))}
            </div>
            <div className="mt-4 pt-4 border-t border-border space-y-2">
              <Button variant="outline" className="w-full" asChild>
                <Link to="/contact?type=sample">Get Sample</Link>
              </Button>
              <Button variant="accent" className="w-full" asChild>
                <Link to="/contact?type=quote">Request Quote</Link>
              </Button>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}
