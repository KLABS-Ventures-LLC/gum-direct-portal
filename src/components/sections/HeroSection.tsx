import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { ArrowRight } from "lucide-react";

export function HeroSection() {
  return (
    <section className="bg-background pt-32 pb-20 md:pt-40 md:pb-28 lg:pt-48 lg:pb-36">
      <div className="container-wide">
        <div className="max-w-4xl mx-auto text-center">
          <ScrollReveal>
            <span className="inline-block text-accent font-semibold text-sm uppercase tracking-widest mb-6">
              UK-Based Supply • Global Standards
            </span>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <h1 className="text-display-xl font-display font-bold text-foreground mb-6">
              Premium{" "}
              <span className="text-accent">Acacia Gum</span>
              <br />
              Direct From Sudan
            </h1>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <p className="text-xl md:text-2xl text-muted-foreground mb-10 max-w-2xl mx-auto leading-relaxed">
              High-purity spray-dried gum arabic. Food-grade certified with
              full traceability and batch testing.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={0.3}>
            <div className="flex flex-wrap justify-center gap-4 mb-16">
              <Button variant="accent" size="xl" asChild>
                <Link to="/contact?type=sample">
                  Order Sample
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </Button>
              <Button variant="outline" size="xl" asChild>
                <Link to="/contact?type=quote">Request Quote</Link>
              </Button>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.4}>
            <div className="flex flex-wrap justify-center items-center gap-x-12 gap-y-4 pt-8 border-t border-border">
              {[
                { value: "99%+", label: "Purity" },
                { value: "25+", label: "Countries" },
                { value: "500t", label: "Annual Capacity" },
              ].map((stat) => (
                <div key={stat.label} className="text-center">
                  <div className="text-3xl font-display font-bold text-primary">{stat.value}</div>
                  <div className="text-sm text-muted-foreground uppercase tracking-wider">{stat.label}</div>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
