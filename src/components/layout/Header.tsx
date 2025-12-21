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
          ? "bg-card/90 backdrop-blur-xl shadow-soft py-3"
          : "bg-transparent py-5"
      )}
    >
      <nav className="container-wide">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group">
            <div className="relative">
              <div className="w-11 h-11 rounded-2xl gradient-primary flex items-center justify-center transform group-hover:scale-105 transition-transform duration-300">
                <span className="text-primary-foreground font-display font-bold text-xl">G</span>
              </div>
              <div className="absolute -inset-1 rounded-2xl bg-accent/20 blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10" />
            </div>
            <div className="flex flex-col">
              <span className={cn(
                "font-display font-bold text-xl leading-none transition-colors duration-300",
                isScrolled ? "text-foreground" : "text-primary-foreground"
              )}>
                GumDirect
              </span>
              <span className={cn(
                "text-[10px] uppercase tracking-[0.2em] font-medium transition-colors duration-300",
                isScrolled ? "text-muted-foreground" : "text-primary-foreground/60"
              )}>
                Premium Acacia Gum
              </span>
            </div>
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
                    ? isScrolled 
                      ? "text-primary bg-primary/10"
                      : "text-accent bg-accent/10"
                    : isScrolled
                      ? "text-muted-foreground hover:text-foreground hover:bg-muted"
                      : "text-primary-foreground/80 hover:text-primary-foreground hover:bg-primary-foreground/10"
                )}
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <Button 
              variant={isScrolled ? "outline" : "hero-outline"} 
              size="sm" 
              asChild
            >
              <Link to="/contact?type=sample">Get Sample</Link>
            </Button>
            <Button 
              variant={isScrolled ? "accent" : "hero"} 
              size="sm" 
              asChild
            >
              <Link to="/contact?type=quote">Request Quote</Link>
            </Button>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className={cn(
              "lg:hidden p-2 rounded-xl transition-colors",
              isScrolled 
                ? "text-foreground hover:bg-muted" 
                : "text-primary-foreground hover:bg-primary-foreground/10"
            )}
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
          <div className="bg-card/95 backdrop-blur-xl rounded-2xl border border-border p-4 shadow-elevated">
            <div className="space-y-1">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={cn(
                    "block px-4 py-3 text-base font-medium rounded-xl transition-colors",
                    location.pathname === item.href
                      ? "text-primary bg-primary/10"
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
