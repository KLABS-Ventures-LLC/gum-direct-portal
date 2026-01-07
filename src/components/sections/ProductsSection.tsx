import { Link } from "react-router-dom";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { Button } from "@/components/ui/button";
import { ArrowRight, Star, Package, CheckCircle } from "lucide-react";

const features = [
  "99%+ purity rating",
  "Superior emulsification",
  "E414 compliant",
  "UK delivery included",
];

export function ProductsSection() {
  return (
    <section className="relative py-24 md:py-32 lg:py-40 bg-foreground overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-0 left-1/4 w-[600px] h-[600px] rounded-full bg-primary/10 blur-[150px]" />
      <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] rounded-full bg-accent/10 blur-[120px]" />
      
      <div className="relative container-wide">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-16 md:mb-24">
          <div className="max-w-2xl">
            <ScrollReveal>
              <span className="inline-block text-accent font-semibold text-sm uppercase tracking-widest mb-4">
                Our Product
              </span>
            </ScrollReveal>
            <ScrollReveal delay={0.1}>
              <h2 className="text-display-md font-display font-bold text-background mb-6">
                Premium Gum Arabic
              </h2>
            </ScrollReveal>
            <ScrollReveal delay={0.2}>
              <p className="text-xl text-background/60 leading-relaxed">
                Spray-dried Acacia Senegal powder — the gold standard for food, beverage, 
                and pharmaceutical applications. Now available as a convenient 1 kg sample.
              </p>
            </ScrollReveal>
          </div>
        </div>

        {/* Single Product Card */}
        <ScrollReveal>
          <div className="relative max-w-4xl mx-auto">
            <div className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-accent/20 via-accent/10 to-transparent border border-accent/30 p-8 lg:p-12">
              {/* Badge */}
              <div className="absolute top-6 right-6 z-10">
                <span className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-sm font-semibold bg-accent text-accent-foreground shadow-glow">
                  <Star className="w-4 h-4" />
                  Premium Grade
                </span>
              </div>

              <div className="grid lg:grid-cols-2 gap-10 lg:gap-12 items-center">
                {/* Product Info */}
                <div>
                  <span className="text-sm font-medium text-background/40 uppercase tracking-wider">
                    The Gold Standard
                  </span>
                  <h3 className="text-3xl lg:text-4xl font-display font-bold text-background mt-2 mb-4">
                    Acacia Senegal Spray-Dried Powder
                  </h3>
                  <p className="text-background/60 mb-6 leading-relaxed">
                    Highest purity gum arabic with superior emulsification properties. 
                    Ideal for beverages, confectionery, and pharmaceutical applications.
                  </p>

                  {/* Features */}
                  <div className="space-y-3 mb-8">
                    {features.map((feature) => (
                      <div key={feature} className="flex items-center gap-3">
                        <div className="w-6 h-6 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0">
                          <CheckCircle className="w-3.5 h-3.5 text-accent" />
                        </div>
                        <span className="text-background/80">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Pricing Card */}
                <div className="bg-background/10 backdrop-blur-sm rounded-2xl p-8 border border-background/10">
                  <div className="text-center mb-8">
                    <span className="text-sm font-medium text-background/50 uppercase tracking-wider">
                      1 kg Sample
                    </span>
                    <div className="mt-3 mb-2">
                      <span className="text-5xl font-display font-bold text-background">£34.99</span>
                    </div>
                    <p className="text-background/60">
                      Delivery Included (UK Only)
                    </p>
                  </div>

                  {/* Specs */}
                  <div className="grid grid-cols-3 gap-4 mb-8 p-4 rounded-xl bg-background/5">
                    <div className="text-center">
                      <div className="text-lg font-display font-bold text-background">≥99%</div>
                      <div className="text-xs text-background/40 uppercase tracking-wider">Purity</div>
                    </div>
                    <div className="text-center">
                      <div className="text-lg font-display font-bold text-background">Food</div>
                      <div className="text-xs text-background/40 uppercase tracking-wider">Grade</div>
                    </div>
                    <div className="text-center">
                      <div className="text-lg font-display font-bold text-background">Sudan</div>
                      <div className="text-xs text-background/40 uppercase tracking-wider">Origin</div>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <Button variant="hero" size="lg" className="w-full" asChild>
                      <Link to="/contact?type=sample&product=senegal">
                        <Package className="w-5 h-5" />
                        Order Sample
                      </Link>
                    </Button>
                    <Button variant="hero-outline" size="lg" className="w-full" asChild>
                      <Link to="/products/acacia-senegal">
                        View Full Details
                        <ArrowRight className="w-4 h-4" />
                      </Link>
                    </Button>
                  </div>
                </div>
              </div>
            </div>

            {/* Decorative element */}
            <div className="absolute -bottom-6 -left-6 w-24 h-24 rounded-2xl bg-accent shadow-glow -z-10" />
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
