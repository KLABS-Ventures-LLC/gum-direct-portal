import { Link } from "react-router-dom";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { Section, SectionHeader } from "@/components/ui/section";
import { Button } from "@/components/ui/button";
import { ArrowRight, Star, Zap } from "lucide-react";

const products = [
  {
    id: "acacia-senegal",
    name: "Spray-Dried Acacia Senegal",
    badge: "Premium",
    badgeIcon: Star,
    description:
      "The gold standard in gum arabic. Highest purity with superior emulsification properties. Ideal for beverages, confectionery, and pharmaceutical applications.",
    features: ["99%+ Purity", "Low Viscosity", "Superior Solubility", "Food-Grade"],
    href: "/products/acacia-senegal",
  },
  {
    id: "acacia-seyal",
    name: "Spray-Dried Acacia Seyal",
    badge: "Industrial",
    badgeIcon: Zap,
    description:
      "Cost-effective solution for industrial and confectionery applications. Excellent binding properties with consistent performance.",
    features: ["High Yield", "Cost Effective", "Strong Binding", "Industrial Grade"],
    href: "/products/acacia-seyal",
  },
];

export function ProductsSection() {
  return (
    <Section variant="muted" id="products">
      <SectionHeader
        title="Our Products"
        subtitle="Two grades of premium spray-dried acacia gum to meet your specific requirements"
      />

      <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
        {products.map((product, index) => (
          <ScrollReveal key={product.id} delay={index * 0.15}>
            <div className="group relative bg-card rounded-2xl overflow-hidden border border-border hover:border-primary/20 transition-all duration-300 card-hover h-full">
              {/* Badge */}
              <div className="absolute top-6 right-6 z-10">
                <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-accent/10 text-accent text-sm font-medium">
                  <product.badgeIcon className="w-4 h-4" />
                  {product.badge}
                </span>
              </div>

              <div className="p-8 lg:p-10">
                <h3 className="text-2xl lg:text-3xl font-display font-bold text-foreground mb-4 pr-24">
                  {product.name}
                </h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {product.description}
                </p>

                {/* Features */}
                <div className="flex flex-wrap gap-2 mb-8">
                  {product.features.map((feature) => (
                    <span
                      key={feature}
                      className="px-3 py-1 rounded-full bg-secondary text-secondary-foreground text-sm"
                    >
                      {feature}
                    </span>
                  ))}
                </div>

                <Button variant="outline" asChild>
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
    </Section>
  );
}
