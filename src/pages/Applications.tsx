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
  Package,
} from "lucide-react";

const applications = [
  {
    icon: Wine,
    name: "Beverages",
    functionalRole:
      "Acts as a primary emulsifier and stabiliser for citrus oil systems and flavour concentrates in soft drinks and juice-based beverages.",
    benefits: [
      "Stable citrus cloud systems with minimal separation",
      "Effective flavour oil encapsulation",
      "Prevents ring formation in bottled beverages",
      "Compatible with acidic pH environments",
    ],
    uses: ["Citrus oil emulsions", "Cloud agents", "Flavour encapsulation", "Wine clarification"],
  },
  {
    icon: Droplets,
    name: "Emulsions",
    functionalRole:
      "Functions as a natural oil-in-water emulsifier with low viscosity and high solubility, suitable for flavour and fragrance systems.",
    benefits: [
      "Low interfacial tension for fine droplet formation",
      "Long-term emulsion stability",
      "Suitable for spray-drying applications",
      "Compatible with a wide range of oils",
    ],
    uses: ["Essential oil emulsions", "Flavour concentrates", "Fragrance formulations", "Spray-dried flavours"],
  },
  {
    icon: Candy,
    name: "Confectionery",
    functionalRole:
      "Provides film-forming and adhesion properties for glazing, coating and binding in sugar and chocolate confectionery.",
    benefits: [
      "Uniform film formation for glossy coatings",
      "Improved coating adhesion and durability",
      "Prevents sugar crystallisation",
      "Enhances surface stability and shine",
    ],
    uses: ["Hard candy glazing", "Soft candy binding", "Chocolate panning", "Gummy texturing"],
  },
  {
    icon: Pill,
    name: "Dietary Supplements",
    functionalRole:
      "Serves as a prebiotic fibre source, tableting binder and microencapsulation agent for vitamins and minerals.",
    benefits: [
      "Effective tablet binding with clean release",
      "Microencapsulation of sensitive actives",
      "Soluble dietary fibre contribution",
      "Neutral taste profile for powder blends",
    ],
    uses: ["Tablet binding", "Microencapsulation", "Fibre supplementation", "Powder blending"],
  },
  {
    icon: Heart,
    name: "Pharmaceuticals",
    functionalRole:
      "Used as an excipient for tablet film coatings, suspension stabilisation and emulsion formulation in pharmaceutical systems.",
    benefits: [
      "Controlled-release film coating capability",
      "Suspension stabilisation without viscosity increase",
      "Biocompatible and well-tolerated",
      "Compliant with pharmacopoeia standards",
    ],
    uses: ["Tablet film coating", "Suspension stabiliser", "Emulsion base", "Controlled release"],
  },
  {
    icon: CakeSlice,
    name: "Bakery",
    functionalRole:
      "Enhances moisture retention, acts as an egg replacer and provides glazing functionality in baked goods.",
    benefits: [
      "Improved moisture retention in finished products",
      "Effective egg replacement in select formulations",
      "Clean-label fibre enrichment",
      "Consistent glaze formation",
    ],
    uses: ["Egg replacement", "Glaze formulation", "Moisture retention", "Fibre enrichment"],
  },
  {
    icon: Factory,
    name: "Industrial",
    functionalRole:
      "Applied in adhesives, lithographic printing, textile sizing and protective coatings for industrial use.",
    benefits: [
      "Strong adhesive bonding in speciality applications",
      "Consistent sizing performance in textiles",
      "Effective binder for lithographic inks",
      "Film-forming capability for protective coatings",
    ],
    uses: ["Lithographic printing", "Textile sizing", "Industrial adhesives", "Protective coatings"],
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
                  Functional Performance Across Industries
                </h1>
              </ScrollReveal>
              <ScrollReveal delay={0.2}>
                <p className="text-xl lg:text-2xl text-foreground/70 leading-relaxed">
                  Spray-dried Acacia Senegal designed for emulsification, encapsulation, film formation and stabilization in food, beverage, nutraceutical and pharmaceutical systems.
                </p>
              </ScrollReveal>
            </div>
          </div>
        </section>

        {/* Applications List */}
        <section className="relative py-16 md:py-20 lg:py-24 overflow-hidden" style={{ backgroundColor: '#FFFDF8' }}>
          
          <div className="relative container-wide">
            <div className="space-y-8">
              {applications.map((app, index) => (
                <ScrollReveal key={app.name} delay={index * 0.05}>
                  <div 
                    id={app.name.toLowerCase()}
                    className="group bg-white rounded-3xl border border-border p-8 lg:p-10 hover:border-accent/20 hover:shadow-elevated transition-all duration-500"
                  >
                    <div className="grid lg:grid-cols-12 gap-8">
                      <div className="lg:col-span-8">
                        <div className="flex items-start gap-5 mb-6">
                          <div className="w-16 h-16 rounded-2xl gradient-primary flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-500">
                            <app.icon className="w-8 h-8 text-primary-foreground" />
                          </div>
                          <div>
                            <h2 className="text-2xl lg:text-3xl font-display font-bold text-foreground mb-3">
                              {["Beverages", "Emulsions", "Confectionery"].includes(app.name) ? (
                                <Link to={`/applications/${app.name.toLowerCase()}`} className="hover:text-accent transition-colors">
                                  {app.name}
                                  <ArrowRight className="inline w-5 h-5 ml-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                                </Link>
                              ) : (
                                app.name
                              )}
                            </h2>
                            <div className="mb-4">
                              <p className="text-sm font-semibold text-primary uppercase tracking-wider mb-1">Functional Role</p>
                              <p className="text-muted-foreground leading-relaxed">
                                {app.functionalRole}
                              </p>
                            </div>
                            <div>
                              <p className="text-sm font-semibold text-primary uppercase tracking-wider mb-2">Performance Benefits</p>
                              <ul className="space-y-1.5">
                                {app.benefits.map((benefit) => (
                                  <li key={benefit} className="flex items-start gap-2 text-muted-foreground text-sm leading-relaxed">
                                    <span className="text-accent mt-1">•</span>
                                    {benefit}
                                  </li>
                                ))}
                              </ul>
                            </div>
                          </div>
                        </div>
                        
                        <div className="ml-0 lg:ml-[84px]">
                          <p className="text-sm font-semibold text-primary uppercase tracking-wider mb-2">Typical Applications</p>
                          <div className="flex flex-wrap gap-2">
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
                      </div>

                      <div className="lg:col-span-4 lg:border-l lg:border-border lg:pl-8 flex items-start">
                        <div className="bg-background rounded-2xl p-6 border border-border w-full">
                          <p className="text-sm font-medium text-muted-foreground uppercase tracking-wider mb-3">
                            Available Grade
                          </p>
                          <p className="text-lg font-display font-bold text-primary mb-4">
                            Spray-Dried Acacia Senegal
                          </p>
                          <Button variant="outline" size="sm" asChild>
                            <Link to="/products/acacia-senegal">
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
        <section className="py-16 md:py-20 lg:py-24 bg-background">
          <div className="container-wide text-center">
            <ScrollReveal>
              <h2 className="text-display-md font-display font-bold text-primary mb-6">
                Discuss your application requirements
              </h2>
              <p className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto">
                Our technical team can assist with emulsification systems, encapsulation performance, dosage guidance and regulatory documentation tailored to your formulation.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Button variant="accent" size="xl" asChild>
                  <Link to="/contact">
                    Request Technical Consultation
                    <ArrowRight className="w-5 h-5" />
                  </Link>
                </Button>
                <Button variant="outline" size="xl" asChild>
                  <Link to="/contact?type=sample&product=senegal">
                    <Package className="w-5 h-5" />
                    Order 1kg Sample
                  </Link>
                </Button>
              </div>
            </ScrollReveal>
          </div>
        </section>
      </Layout>
    </>
  );
}
