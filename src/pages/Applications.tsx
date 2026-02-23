import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { Button } from "@/components/ui/button";
import {
  Wine,
  Droplets,
  Candy,
  Pill,
  Heart,
  CakeSlice,
  Factory,
  ArrowRight,
  Star,
} from "lucide-react";

const applications = [
  {
    icon: Wine,
    name: "Beverages",
    description:
      "Acacia gum is widely used as an emulsifier and stabilizer in citrus-based beverages, soft drinks, and flavor concentrates. It ensures consistent flavor distribution and prevents separation.",
    uses: ["Citrus oil emulsions", "Cloud agents", "Flavor encapsulation", "Wine clarification"],
    recommended: "Acacia Senegal",
    recommendedLink: "/products/acacia-senegal",
  },
  {
    icon: Droplets,
    name: "Emulsions",
    description:
      "Superior emulsification properties make acacia gum ideal for creating stable oil-in-water emulsions. Essential for flavor and fragrance industries.",
    uses: ["Essential oil emulsions", "Flavor concentrates", "Fragrance formulations", "Spray-dried flavors"],
    recommended: "Acacia Senegal",
    recommendedLink: "/products/acacia-senegal",
  },
  {
    icon: Candy,
    name: "Confectionery",
    description:
      "Essential ingredient for glazing, coating, and binding. Provides excellent film-forming properties and prevents sugar crystallization.",
    uses: ["Hard candy glazing", "Soft candy binding", "Chocolate panning", "Gummy texturing"],
    recommended: "Acacia Senegal",
    recommendedLink: "/products/acacia-senegal",
  },
  {
    icon: Pill,
    name: "Dietary Supplements",
    description:
      "Used as a prebiotic fiber source and encapsulating agent for vitamins and minerals. Excellent tableting properties.",
    uses: ["Tablet binding", "Microencapsulation", "Fiber supplementation", "Powder blending"],
    recommended: "Acacia Senegal",
    recommendedLink: "/products/acacia-senegal",
  },
  {
    icon: Heart,
    name: "Pharmaceuticals",
    description:
      "Pharmaceutical-grade acacia gum serves as an excipient for tablet coatings, suspensions, and emulsions.",
    uses: ["Tablet film coating", "Suspension stabilizer", "Emulsion base", "Controlled release"],
    recommended: "Acacia Senegal",
    recommendedLink: "/products/acacia-senegal",
  },
  {
    icon: CakeSlice,
    name: "Bakery",
    description:
      "Enhances texture and moisture retention in baked goods. Acts as an egg replacer and provides excellent glazing.",
    uses: ["Egg replacement", "Glaze formulation", "Moisture retention", "Fiber enrichment"],
    recommended: "Acacia Senegal",
    recommendedLink: "/products/acacia-senegal",
  },
  {
    icon: Factory,
    name: "Industrial",
    description:
      "Versatile industrial applications including adhesives, lithography, textiles, and coatings.",
    uses: ["Lithographic printing", "Textile sizing", "Industrial adhesives", "Protective coatings"],
    recommended: "Acacia Senegal",
    recommendedLink: "/products/acacia-senegal",
  },
];

export default function Applications() {
  return (
    <>
      <Helmet>
        <title>Acacia Gum Applications | Beverages, Confectionery, Pharma | GumDirect</title>
        <meta
          name="description"
          content="Discover acacia gum applications across beverages, emulsions, confectionery, supplements, pharmaceuticals, bakery, and industrial sectors."
        />
      </Helmet>

      <Layout>
        {/* Hero */}
        <section className="relative pt-32 pb-20 overflow-hidden">
          
          <div className="absolute bottom-0 right-0 w-[800px] h-[400px] rounded-full bg-accent/5 blur-[150px]" />
          
          <div className="relative container-wide">
            <div className="max-w-3xl">
              <ScrollReveal>
                <span className="inline-block text-accent font-semibold text-sm uppercase tracking-widest mb-6">
                  Applications
                </span>
              </ScrollReveal>
              <ScrollReveal delay={0.1}>
                <h1 className="text-display-lg font-display font-bold text-primary mb-6">
                  Versatile solutions across industries
                </h1>
              </ScrollReveal>
              <ScrollReveal delay={0.2}>
                <p className="text-xl lg:text-2xl text-foreground/70 leading-relaxed">
                  Discover how our premium acacia gum can enhance your products across 
                  beverages, confectionery, pharmaceuticals, and more.
                </p>
              </ScrollReveal>
            </div>
          </div>
        </section>

        {/* Applications List */}
        <section className="relative py-16 md:py-20 lg:py-24 overflow-hidden bg-secondary">
          
          <div className="relative container-wide">
            <div className="space-y-8">
              {applications.map((app, index) => (
                <ScrollReveal key={app.name} delay={index * 0.05}>
                  <div 
                    id={app.name.toLowerCase()}
                    className="group bg-card rounded-3xl border border-border p-8 lg:p-10 hover:border-accent/20 hover:shadow-elevated transition-all duration-500"
                  >
                    <div className="grid lg:grid-cols-12 gap-8">
                      <div className="lg:col-span-8">
                        <div className="flex items-start gap-5 mb-6">
                          <div className="w-16 h-16 rounded-2xl gradient-primary flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-500">
                            <app.icon className="w-8 h-8 text-primary-foreground" />
                          </div>
                          <div>
                            <h2 className="text-2xl lg:text-3xl font-display font-bold text-foreground mb-2">
                              {app.name}
                            </h2>
                            <p className="text-muted-foreground leading-relaxed">
                              {app.description}
                            </p>
                          </div>
                        </div>
                        
                        <div className="flex flex-wrap gap-2 ml-0 lg:ml-[84px]">
                          {app.uses.map((use) => (
                            <span
                              key={use}
                              className="px-4 py-2 rounded-full bg-background text-foreground text-sm"
                            >
                              {use}
                            </span>
                          ))}
                        </div>
                      </div>

                      <div className="lg:col-span-4 lg:border-l lg:border-border lg:pl-8">
                        <div className="bg-accent/5 rounded-2xl p-6 border border-accent/10">
                          <div className="flex items-center gap-2 mb-3">
                            <Star className="w-4 h-4 text-accent" />
                            <span className="text-sm font-medium text-muted-foreground uppercase tracking-wider">
                              Recommended
                            </span>
                          </div>
                          <p className="text-xl font-display font-bold text-accent mb-4">
                            {app.recommended}
                          </p>
                          <Button variant="outline" size="sm" asChild>
                            <Link to={app.recommendedLink}>
                              View Product
                              <ArrowRight className="w-4 h-4" />
                            </Link>
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 md:py-20 lg:py-24 bg-foreground">
          <div className="container-wide text-center">
            <ScrollReveal>
              <h2 className="text-display-md font-display font-bold text-background mb-6">
                Need technical guidance?
              </h2>
              <p className="text-xl text-background/60 mb-10 max-w-2xl mx-auto">
                Our team can help you select the right product for your specific application requirements.
              </p>
              <Button variant="hero" size="xl" asChild>
                <Link to="/contact">
                  Contact Us
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </Button>
            </ScrollReveal>
          </div>
        </section>
      </Layout>
    </>
  );
}
