import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { Download, ArrowRight } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={heroBg}
          alt="Premium acacia gum powder"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/85 to-primary/70" />
      </div>

      {/* Content */}
      <div className="relative container-wide pt-32 pb-20">
        <div className="max-w-3xl">
          <ScrollReveal>
            <span className="inline-block px-4 py-2 rounded-full bg-accent/20 text-accent-light text-sm font-medium mb-6">
              UK-Based Supply • Global Standards
            </span>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-display font-bold text-primary-foreground leading-tight mb-6">
              High-Purity Spray-Dried{" "}
              <span className="text-gradient">Acacia Gum</span>
            </h1>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <p className="text-xl md:text-2xl text-primary-foreground/80 mb-8 max-w-2xl">
              Direct from Sudan • Processed to Global Food Standards • 
              Full Traceability & Batch Testing
            </p>
          </ScrollReveal>

          <ScrollReveal delay={0.3}>
            <div className="flex flex-wrap gap-4">
              <Button variant="hero" size="xl" asChild>
                <Link to="/contact?type=sample">
                  Order Sample (1 kg)
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </Button>
              <Button variant="hero-outline" size="xl" asChild>
                <Link to="/contact?type=quote">Request Bulk Quote</Link>
              </Button>
              <Button variant="ghost" size="lg" className="text-primary-foreground/80 hover:text-primary-foreground hover:bg-primary-foreground/10" asChild>
                <a href="/product-sheet.pdf" download>
                  <Download className="w-5 h-5" />
                  Download Product Sheet
                </a>
              </Button>
            </div>
          </ScrollReveal>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 rounded-full border-2 border-primary-foreground/30 flex items-start justify-center p-2">
          <div className="w-1.5 h-3 rounded-full bg-primary-foreground/50 animate-pulse" />
        </div>
      </div>
    </section>
  );
}
