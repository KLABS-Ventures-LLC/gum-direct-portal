import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { Section, SectionHeader } from "@/components/ui/section";
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
} from "lucide-react";

const applications = [
  {
    icon: Wine,
    name: "Beverages",
    description:
      "Acacia gum is widely used as an emulsifier and stabilizer in citrus-based beverages, soft drinks, and flavor concentrates. It ensures consistent flavor distribution and prevents separation of oil and water phases.",
    uses: [
      "Citrus oil emulsions",
      "Cloud agents for soft drinks",
      "Flavor encapsulation",
      "Wine clarification",
    ],
    recommended: "Acacia Senegal",
  },
  {
    icon: Droplets,
    name: "Emulsions",
    description:
      "Superior emulsification properties make acacia gum ideal for creating stable oil-in-water emulsions. Used extensively in flavor and fragrance industries for encapsulating volatile compounds.",
    uses: [
      "Essential oil emulsions",
      "Flavor concentrates",
      "Fragrance formulations",
      "Spray-dried flavors",
    ],
    recommended: "Acacia Senegal",
  },
  {
    icon: Candy,
    name: "Confectionery",
    description:
      "Essential ingredient in confectionery for glazing, coating, and as a binding agent. Provides excellent film-forming properties and prevents sugar crystallization.",
    uses: [
      "Hard candy glazing",
      "Soft candy binding",
      "Chocolate panning",
      "Gummy texturing",
    ],
    recommended: "Acacia Seyal",
  },
  {
    icon: Pill,
    name: "Dietary Supplements",
    description:
      "Used as a prebiotic fiber source and encapsulating agent for vitamins and minerals. Provides excellent tableting properties and controlled release characteristics.",
    uses: [
      "Tablet binding",
      "Microencapsulation",
      "Fiber supplementation",
      "Powder blending",
    ],
    recommended: "Acacia Senegal",
  },
  {
    icon: Heart,
    name: "Pharmaceuticals",
    description:
      "Pharmaceutical-grade acacia gum serves as an excipient for tablet coatings, suspensions, and emulsions. Meets stringent purity requirements for drug formulations.",
    uses: [
      "Tablet film coating",
      "Suspension stabilizer",
      "Emulsion base",
      "Controlled release",
    ],
    recommended: "Acacia Senegal",
  },
  {
    icon: CakeSlice,
    name: "Bakery",
    description:
      "Enhances texture and moisture retention in baked goods. Acts as an egg replacer and provides excellent glazing for pastries and bread products.",
    uses: [
      "Egg replacement",
      "Glaze formulation",
      "Moisture retention",
      "Fiber enrichment",
    ],
    recommended: "Acacia Senegal",
  },
  {
    icon: Factory,
    name: "Industrial",
    description:
      "Versatile industrial applications including adhesives, lithography, textiles, and coatings. Provides excellent binding and film-forming properties.",
    uses: [
      "Lithographic printing",
      "Textile sizing",
      "Industrial adhesives",
      "Protective coatings",
    ],
    recommended: "Acacia Seyal",
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
        <section className="pt-32 pb-16 gradient-primary text-primary-foreground">
          <div className="container-wide text-center">
            <ScrollReveal>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6">
                Applications
              </h1>
              <p className="text-xl text-primary-foreground/80 max-w-3xl mx-auto">
                Versatile solutions across multiple industries. Discover how our
                premium acacia gum can enhance your products.
              </p>
            </ScrollReveal>
          </div>
        </section>

        {/* Applications Grid */}
        <Section variant="default">
          <div className="space-y-12">
            {applications.map((app, index) => (
              <ScrollReveal key={app.name} delay={index * 0.05}>
                <div className="bg-card rounded-2xl border border-border p-8 lg:p-10 hover:border-primary/20 transition-all duration-300">
                  <div className="grid lg:grid-cols-3 gap-8">
                    <div className="lg:col-span-2">
                      <div className="flex items-center gap-4 mb-4">
                        <div className="w-14 h-14 rounded-xl gradient-primary flex items-center justify-center">
                          <app.icon className="w-7 h-7 text-primary-foreground" />
                        </div>
                        <h2 className="text-2xl lg:text-3xl font-display font-bold">
                          {app.name}
                        </h2>
                      </div>
                      <p className="text-muted-foreground mb-6 leading-relaxed">
                        {app.description}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {app.uses.map((use) => (
                          <span
                            key={use}
                            className="px-3 py-1 rounded-full bg-secondary text-secondary-foreground text-sm"
                          >
                            {use}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="lg:border-l lg:border-border lg:pl-8">
                      <div className="bg-secondary/50 rounded-xl p-6">
                        <h4 className="font-display font-semibold mb-2">
                          Recommended Product
                        </h4>
                        <p className="text-accent font-medium mb-4">
                          {app.recommended}
                        </p>
                        <Button variant="outline" size="sm" asChild>
                          <Link
                            to={`/products/${app.recommended.toLowerCase().replace(" ", "-")}`}
                          >
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
        </Section>

        {/* CTA */}
        <Section variant="accent">
          <div className="text-center max-w-2xl mx-auto">
            <ScrollReveal>
              <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
                Need Technical Guidance?
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Our team can help you select the right product for your specific
                application requirements.
              </p>
              <Button size="lg" variant="default" asChild>
                <Link to="/contact">
                  Contact Us
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </Button>
            </ScrollReveal>
          </div>
        </Section>
      </Layout>
    </>
  );
}
