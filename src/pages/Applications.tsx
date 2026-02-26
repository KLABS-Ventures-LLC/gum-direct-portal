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
import { applicationDetails } from "@/data/applicationDetails";

const slugMap: Record<string, string> = {
  "Beverages": "beverages",
  "Emulsions": "emulsions",
  "Confectionery": "confectionery",
  "Dietary Supplements": "supplements",
  "Pharmaceuticals": "pharmaceuticals",
  "Bakery": "bakery",
  "Industrial": "industrial",
};

const applications = [
  {
    icon: Wine,
    name: "Beverages",
    functionalRole: applicationDetails.beverages.hero.subtitle,
    benefits: applicationDetails.beverages.solution.items,
    uses: applicationDetails.beverages.technical.suitableFor,
  },
  {
    icon: Droplets,
    name: "Emulsions",
    functionalRole: applicationDetails.emulsions.hero.subtitle,
    benefits: applicationDetails.emulsions.solution.items,
    uses: applicationDetails.emulsions.technical.suitableFor,
  },
  {
    icon: Candy,
    name: "Confectionery",
    functionalRole: applicationDetails.confectionery.hero.subtitle,
    benefits: applicationDetails.confectionery.solution.items,
    uses: applicationDetails.confectionery.technical.suitableFor,
  },
  {
    icon: Pill,
    name: "Dietary Supplements",
    functionalRole: applicationDetails.supplements.hero.subtitle,
    benefits: applicationDetails.supplements.solution.items,
    uses: applicationDetails.supplements.technical.suitableFor,
  },
  {
    icon: Heart,
    name: "Pharmaceuticals",
    functionalRole: applicationDetails.pharmaceuticals.hero.subtitle,
    benefits: applicationDetails.pharmaceuticals.solution.items,
    uses: applicationDetails.pharmaceuticals.technical.suitableFor,
  },
  {
    icon: CakeSlice,
    name: "Bakery",
    functionalRole: applicationDetails.bakery.hero.subtitle,
    benefits: applicationDetails.bakery.solution.items,
    uses: applicationDetails.bakery.technical.suitableFor,
  },
  {
    icon: Factory,
    name: "Industrial",
    functionalRole: applicationDetails.industrial.hero.subtitle,
    benefits: applicationDetails.industrial.solution.items,
    uses: applicationDetails.industrial.technical.suitableFor,
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
                  <Link
                    to={`/applications/${slugMap[app.name]}`}
                    id={app.name.toLowerCase()}
                    className="group block bg-white rounded-3xl border border-border p-8 lg:p-10 hover:border-accent/20 hover:shadow-elevated hover:bg-accent/5 transition-all duration-500"
                  >
                    <div className="grid lg:grid-cols-12 gap-8">
                      <div className="lg:col-span-8">
                        <div className="flex items-start gap-5 mb-6">
                          <div className="w-16 h-16 rounded-2xl gradient-primary flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-500">
                            <app.icon className="w-8 h-8 text-primary-foreground" />
                          </div>
                          <div>
                            <h2 className="text-2xl lg:text-3xl font-display font-bold text-foreground mb-3">
                              {app.name}
                              <ArrowRight className="inline w-5 h-5 ml-2 opacity-0 group-hover:opacity-100 transition-opacity" />
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

                      <div className="lg:col-span-4 lg:border-l lg:border-border lg:pl-8 flex items-center">
                        <div className="bg-background rounded-2xl p-6 border border-border w-full text-center">
                          <p className="text-lg font-display font-bold text-foreground mb-2">
                            Learn More
                          </p>
                          <p className="text-sm text-muted-foreground mb-4">
                            Explore formulation details, technical specs & documentation
                          </p>
                          <span className="inline-flex items-center gap-2 text-sm font-semibold text-accent group-hover:gap-3 transition-all">
                            Read More About {app.name}
                            <ArrowRight className="w-4 h-4" />
                          </span>
                        </div>
                      </div>
                    </div>
                  </Link>
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
