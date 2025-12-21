import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const navigation = [
  { name: "Home", href: "/" },
  {
    name: "Products",
    href: "/products",
    children: [
      { name: "Acacia Senegal", href: "/products/acacia-senegal" },
      { name: "Acacia Seyal", href: "/products/acacia-seyal" },
    ],
  },
  { name: "Applications", href: "/applications" },
  { name: "Quality", href: "/quality" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
];

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
    setOpenDropdown(null);
  }, [location.pathname]);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled
          ? "bg-card/95 backdrop-blur-md shadow-soft"
          : "bg-transparent"
      )}
    >
      <nav className="container-wide">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 group">
            <div className="w-10 h-10 rounded-lg gradient-primary flex items-center justify-center">
              <span className="text-primary-foreground font-display font-bold text-xl">G</span>
            </div>
            <span className="font-display font-bold text-xl text-foreground group-hover:text-primary transition-colors">
              GumDirect
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {navigation.map((item) => (
              <div
                key={item.name}
                className="relative"
                onMouseEnter={() => item.children && setOpenDropdown(item.name)}
                onMouseLeave={() => setOpenDropdown(null)}
              >
                <Link
                  to={item.href}
                  className={cn(
                    "flex items-center gap-1 text-sm font-medium transition-colors py-2",
                    location.pathname === item.href
                      ? "text-primary"
                      : "text-muted-foreground hover:text-foreground"
                  )}
                >
                  {item.name}
                  {item.children && (
                    <ChevronDown className="w-4 h-4 transition-transform" />
                  )}
                </Link>

                {/* Dropdown */}
                {item.children && openDropdown === item.name && (
                  <div className="absolute top-full left-0 pt-2 animate-fade-in">
                    <div className="bg-card rounded-lg shadow-medium border border-border p-2 min-w-[200px]">
                      {item.children.map((child) => (
                        <Link
                          key={child.name}
                          to={child.href}
                          className="block px-4 py-2 text-sm rounded-md text-muted-foreground hover:text-foreground hover:bg-secondary transition-colors"
                        >
                          {child.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <Button variant="outline" size="sm" asChild>
              <Link to="/contact?type=sample">Order Sample</Link>
            </Button>
            <Button size="sm" asChild>
              <Link to="/contact?type=quote">Request Quote</Link>
            </Button>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="lg:hidden p-2 text-foreground"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden bg-card border-t border-border animate-fade-in">
            <div className="py-4 space-y-2">
              {navigation.map((item) => (
                <div key={item.name}>
                  <Link
                    to={item.href}
                    className={cn(
                      "block px-4 py-3 text-base font-medium transition-colors",
                      location.pathname === item.href
                        ? "text-primary bg-primary/5"
                        : "text-muted-foreground hover:text-foreground hover:bg-secondary"
                    )}
                  >
                    {item.name}
                  </Link>
                  {item.children && (
                    <div className="pl-8 space-y-1">
                      {item.children.map((child) => (
                        <Link
                          key={child.name}
                          to={child.href}
                          className="block px-4 py-2 text-sm text-muted-foreground hover:text-foreground"
                        >
                          {child.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              <div className="pt-4 px-4 space-y-2">
                <Button variant="outline" className="w-full" asChild>
                  <Link to="/contact?type=sample">Order Sample</Link>
                </Button>
                <Button className="w-full" asChild>
                  <Link to="/contact?type=quote">Request Quote</Link>
                </Button>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
