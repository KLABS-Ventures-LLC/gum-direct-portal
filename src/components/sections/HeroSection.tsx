import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { ArrowRight, ArrowDown, Sparkles } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src={heroBg}
          alt=""
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-primary-dark/95 via-primary/90 to-primary-light/85" />
        {/* Decorative elements */}
        <div className="absolute top-1/4 right-1/4 w-[600px] h-[600px] rounded-full bg-accent/10 blur-[120px]" />
        <div className="absolute bottom-1/4 left-1/4 w-[400px] h-[400px] rounded-full bg-primary-light/20 blur-[100px]" />
      </div>

      <div className="relative container-wide w-full">
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center min-h-screen py-32">
          {/* Content */}
          <div className="lg:col-span-7 xl:col-span-6">
            <ScrollReveal>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/20 backdrop-blur-sm border border-accent/30 mb-8">
                <Sparkles className="w-4 h-4 text-accent" />
                <span className="text-accent text-sm font-medium">UK-Based Supply • Global Standards</span>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.1}>
              <h1 className="text-display-xl font-display font-bold text-primary-foreground mb-6">
                Premium{" "}
                <span className="text-gradient">Acacia Gum</span>
                <br />
                Direct From Sudan
              </h1>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <p className="text-xl md:text-2xl text-primary-foreground/70 mb-10 max-w-xl leading-relaxed">
                High-purity spray-dried gum arabic. Food-grade certified with 
                full traceability and batch testing.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={0.3}>
              <div className="flex flex-wrap gap-4 mb-12">
                <Button variant="hero" size="xl" asChild>
                  <Link to="/contact?type=sample">
                    Order Sample
                    <ArrowRight className="w-5 h-5" />
                  </Link>
                </Button>
                <Button variant="hero-outline" size="xl" asChild>
                  <Link to="/contact?type=quote">Request Quote</Link>
                </Button>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.4}>
              <div className="flex flex-wrap items-center gap-x-8 gap-y-4 pt-8 border-t border-primary-foreground/10">
                {[
                  { value: "99%+", label: "Purity" },
                  { value: "25+", label: "Countries" },
                  { value: "500t", label: "Annual Capacity" },
                ].map((stat) => (
                  <div key={stat.label} className="text-center">
                    <div className="text-3xl font-display font-bold text-accent">{stat.value}</div>
                    <div className="text-sm text-primary-foreground/50 uppercase tracking-wider">{stat.label}</div>
                  </div>
                ))}
              </div>
            </ScrollReveal>
          </div>

          {/* Visual Element */}
          <div className="hidden lg:flex lg:col-span-5 xl:col-span-6 justify-end">
            <ScrollReveal direction="right" delay={0.2}>
              <div className="relative">
                {/* Main card */}
                <div className="relative w-[380px] xl:w-[440px] bg-primary-foreground/10 backdrop-blur-xl rounded-3xl border border-primary-foreground/20 p-8 shadow-elevated">
                  <div className="absolute -top-3 -right-3 px-4 py-1.5 rounded-full bg-accent text-accent-foreground text-sm font-semibold shadow-glow">
                    Premium Grade
                  </div>
                  
                  <h3 className="text-2xl font-display font-bold text-primary-foreground mb-6">
                    Acacia Senegal
                  </h3>
                  
                  <div className="space-y-4 mb-8">
                    {[
                      "Superior emulsification",
                      "99%+ purity rating",
                      "Low viscosity",
                      "Excellent solubility",
                      "E414 compliant",
                    ].map((feature) => (
                      <div key={feature} className="flex items-center gap-3">
                        <div className="w-2 h-2 rounded-full bg-accent" />
                        <span className="text-primary-foreground/80">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <Button variant="hero" className="w-full" asChild>
                    <Link to="/products/acacia-senegal">
                      View Product
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </Button>
                </div>

                {/* Floating accent card */}
                <div className="absolute -bottom-8 -left-8 w-48 bg-accent rounded-2xl p-5 shadow-glow animate-float">
                  <div className="text-accent-foreground">
                    <div className="text-3xl font-display font-bold">15+</div>
                    <div className="text-sm opacity-80">Years Experience</div>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-primary-foreground/40">
        <span className="text-xs uppercase tracking-widest">Scroll</span>
        <ArrowDown className="w-4 h-4 animate-bounce" />
      </div>
    </section>
  );
}
