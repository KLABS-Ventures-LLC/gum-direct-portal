import { Link } from "react-router-dom";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { Button } from "@/components/ui/button";
import { ArrowRight, Package, CheckCircle } from "lucide-react";

const features = [
  "≥99% Purity",
  "Food Grade (E414)",
  "Sudan Origin",
  "COA Provided",
];

export function ProductsSection() {
  return (
    <section className="py-16 md:py-20 lg:py-24 bg-secondary">
      <div className="container-wide">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-16 md:mb-24">
          <div className="max-w-2xl">
            <ScrollReveal>
              <span className="inline-block text-accent font-semibold text-sm uppercase tracking-widest mb-4">
                Our Product
              </span>
            </ScrollReveal>
            <ScrollReveal delay={0.1}>
              <h2 className="text-display-md font-display font-bold text-foreground mb-6">
                Spray-Dried Acacia Senegal{" "}
                <span className="text-accent">(E414)</span>
              </h2>
            </ScrollReveal>
            <ScrollReveal delay={0.2}>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Spray-dried Acacia Senegal powder — the gold standard for food, beverage,
                and pharmaceutical applications. Now available as a convenient 1 kg sample.
              </p>
            </ScrollReveal>
          </div>
        </div>

        {/* Single Product Card */}
        <ScrollReveal>
          <div className="relative max-w-4xl mx-auto">
            <div className="relative rounded-3xl overflow-hidden bg-card border border-border p-8 lg:p-12 shadow-card">
              <div className="grid lg:grid-cols-2 gap-10 lg:gap-12 items-center">
                {/* Product Info */}
                <div>
                  <span className="text-sm font-medium text-muted-foreground uppercase tracking-wider">
                    The Gold Standard
                  </span>
                  <h3 className="text-3xl lg:text-4xl font-display font-bold text-foreground mt-2 mb-4">
                    Acacia Senegal Spray-Dried Powder
                  </h3>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    Highest purity gum arabic with superior emulsification properties.
                    Ideal for beverages, confectionery, and pharmaceutical applications.
                  </p>

                  {/* Features - Vertical Bullet Format */}
                  <div className="space-y-3 mb-8">
                    {features.map((feature) => (
                      <div key={feature} className="flex items-center gap-3">
                        <div className="w-6 h-6 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0">
                          <CheckCircle className="w-3.5 h-3.5 text-accent" />
                        </div>
                        <span className="text-foreground/80">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Pricing Card */}
                <div className="bg-background rounded-2xl p-8 border border-border">
                  <div className="text-center mb-8">
                    <span className="text-sm font-semibold text-foreground uppercase tracking-wider">
                      Technical Evaluation Sample – 1kg
                    </span>
                    <div className="mt-3 mb-2">
                      <span className="text-5xl font-display font-bold text-foreground">£34.99</span>
                    </div>
                    <p className="text-sm text-muted-foreground italic">
                      For commercial evaluation purposes only.
                    </p>
                    <p className="text-muted-foreground mt-1">
                      Delivery Included (UK Only)
                    </p>
                  </div>

                  <div className="space-y-3">
                    <Button variant="accent" size="lg" className="w-full" asChild>
                      <Link to="/contact?type=sample&product=senegal">
                        <Package className="w-5 h-5" />
                        Request Technical Sample
                      </Link>
                    </Button>
                    <Button variant="outline" size="lg" className="w-full" asChild>
                      <Link to="/products/acacia-senegal">
                        View Technical Specifications
                        <ArrowRight className="w-4 h-4" />
                      </Link>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}