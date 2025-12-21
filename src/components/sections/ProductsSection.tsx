import { Link } from "react-router-dom";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { Button } from "@/components/ui/button";
import { ArrowRight, Star, Zap } from "lucide-react";

const products = [
  {
    id: "acacia-senegal",
    name: "Acacia Senegal",
    badge: "Premium",
    badgeIcon: Star,
    tagline: "The Gold Standard",
    description: "Highest purity gum arabic with superior emulsification properties. Ideal for beverages, confectionery, and pharmaceutical applications.",
    specs: [
      { label: "Purity", value: "≥99%" },
      { label: "Grade", value: "Food-Grade" },
      { label: "Origin", value: "Sudan" },
    ],
    features: ["Superior Emulsification", "Low Viscosity", "Excellent Solubility"],
    href: "/products/acacia-senegal",
    accent: true,
  },
  {
    id: "acacia-seyal",
    name: "Acacia Seyal",
    badge: "Industrial",
    badgeIcon: Zap,
    tagline: "Cost-Effective Solution",
    description: "Excellent binding properties and consistent quality for confectionery and industrial applications. High yield formulations.",
    specs: [
      { label: "Purity", value: "≥95%" },
      { label: "Grade", value: "Industrial" },
      { label: "Origin", value: "Sudan" },
    ],
    features: ["Strong Binding", "High Yield", "Consistent Quality"],
    href: "/products/acacia-seyal",
    accent: false,
  },
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
                Our Products
              </span>
            </ScrollReveal>
            <ScrollReveal delay={0.1}>
              <h2 className="text-display-md font-display font-bold text-background mb-6">
                Two grades of excellence
              </h2>
            </ScrollReveal>
            <ScrollReveal delay={0.2}>
              <p className="text-xl text-background/60 leading-relaxed">
                Premium spray-dried acacia gum to meet your specific requirements, 
                from high-purity pharmaceutical applications to cost-effective industrial solutions.
              </p>
            </ScrollReveal>
          </div>
          <ScrollReveal delay={0.3}>
            <Button variant="hero-outline" size="lg" asChild className="self-start">
              <Link to="/products">
                View All Products
                <ArrowRight className="w-4 h-4" />
              </Link>
            </Button>
          </ScrollReveal>
        </div>

        {/* Products Grid */}
        <div className="grid lg:grid-cols-2 gap-8">
          {products.map((product, index) => (
            <ScrollReveal key={product.id} delay={index * 0.15}>
              <div className={`group relative h-full rounded-3xl overflow-hidden ${
                product.accent 
                  ? "bg-gradient-to-br from-accent/20 via-accent/10 to-transparent border border-accent/30" 
                  : "bg-background/5 border border-background/10"
              }`}>
                {/* Badge */}
                <div className="absolute top-6 right-6 z-10">
                  <span className={`inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-sm font-semibold ${
                    product.accent 
                      ? "bg-accent text-accent-foreground shadow-glow" 
                      : "bg-background/10 text-background/80"
                  }`}>
                    <product.badgeIcon className="w-4 h-4" />
                    {product.badge}
                  </span>
                </div>

                <div className="p-8 lg:p-10">
                  <span className="text-sm font-medium text-background/40 uppercase tracking-wider">
                    {product.tagline}
                  </span>
                  <h3 className="text-3xl lg:text-4xl font-display font-bold text-background mt-2 mb-4">
                    {product.name}
                  </h3>
                  <p className="text-background/60 mb-8 leading-relaxed max-w-lg">
                    {product.description}
                  </p>

                  {/* Specs */}
                  <div className="grid grid-cols-3 gap-4 mb-8 p-4 rounded-2xl bg-background/5">
                    {product.specs.map((spec) => (
                      <div key={spec.label} className="text-center">
                        <div className="text-lg font-display font-bold text-background">{spec.value}</div>
                        <div className="text-xs text-background/40 uppercase tracking-wider">{spec.label}</div>
                      </div>
                    ))}
                  </div>

                  {/* Features */}
                  <div className="flex flex-wrap gap-2 mb-8">
                    {product.features.map((feature) => (
                      <span
                        key={feature}
                        className="px-4 py-2 rounded-full bg-background/10 text-background/80 text-sm"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>

                  <Button 
                    variant={product.accent ? "hero" : "hero-outline"} 
                    size="lg"
                    asChild
                  >
                    <Link to={product.href}>
                      Learn More
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </Button>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
