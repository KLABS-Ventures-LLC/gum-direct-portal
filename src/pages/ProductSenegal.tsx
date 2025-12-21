import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { Section, SectionHeader } from "@/components/ui/section";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { Button } from "@/components/ui/button";
import {
  Star,
  ArrowRight,
  Download,
  Package,
  CheckCircle,
  Wine,
  Droplets,
  Candy,
  Pill,
} from "lucide-react";

const features = [
  "99%+ purity rating",
  "Superior emulsification properties",
  "Low viscosity for easy handling",
  "Excellent solubility",
  "Neutral taste and odor",
  "E414 compliant",
];

const specifications = [
  { label: "Origin", value: "Sudan (Acacia Senegal)" },
  { label: "Processing", value: "Spray-dried" },
  { label: "Purity", value: "≥99%" },
  { label: "Moisture", value: "≤10%" },
  { label: "Ash Content", value: "≤4%" },
  { label: "Particle Size", value: "Fine powder (<250μm)" },
  { label: "Solubility", value: "Completely soluble in water" },
  { label: "pH (1% solution)", value: "4.0 - 5.0" },
];

const applications = [
  { icon: Wine, name: "Beverages", desc: "Citrus emulsions, flavor oils, soft drinks" },
  { icon: Droplets, name: "Emulsions", desc: "Oil-in-water stabilization" },
  { icon: Candy, name: "Confectionery", desc: "Glazing, film forming" },
  { icon: Pill, name: "Pharmaceuticals", desc: "Coatings, encapsulation" },
];

export default function ProductSenegal() {
  return (
    <>
      <Helmet>
        <title>Spray-Dried Acacia Senegal | Premium Gum Arabic | GumDirect</title>
        <meta
          name="description"
          content="Premium spray-dried Acacia Senegal gum arabic. The gold standard for beverages, emulsions, and confectionery. 99%+ purity, food-grade, UK stock available."
        />
      </Helmet>

      <Layout>
        {/* Hero */}
        <section className="pt-32 pb-16 gradient-primary text-primary-foreground">
          <div className="container-wide">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <ScrollReveal direction="left">
                <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/20 text-accent-light text-sm font-medium mb-6">
                  <Star className="w-4 h-4" />
                  Premium Grade
                </span>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6">
                  Spray-Dried Acacia Senegal
                </h1>
                <p className="text-xl text-primary-foreground/80 mb-8">
                  The gold standard in gum arabic. Superior emulsification properties,
                  exceptional purity, and consistent quality for demanding applications.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Button variant="hero" size="lg" asChild>
                    <Link to="/contact?type=sample&product=senegal">
                      <Package className="w-5 h-5" />
                      Order Sample
                    </Link>
                  </Button>
                  <Button variant="hero-outline" size="lg" asChild>
                    <Link to="/contact?type=quote&product=senegal">
                      Request Quote
                      <ArrowRight className="w-5 h-5" />
                    </Link>
                  </Button>
                </div>
              </ScrollReveal>

              <ScrollReveal direction="right">
                <div className="bg-primary-foreground/10 backdrop-blur-sm rounded-2xl p-8 border border-primary-foreground/20">
                  <h3 className="font-display font-semibold text-xl mb-6">Key Features</h3>
                  <div className="space-y-4">
                    {features.map((feature) => (
                      <div key={feature} className="flex items-center gap-3">
                        <CheckCircle className="w-5 h-5 text-accent flex-shrink-0" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>

        {/* Applications */}
        <Section variant="default">
          <SectionHeader
            title="Applications"
            subtitle="Ideal for applications requiring the highest quality emulsification and stabilization"
          />
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {applications.map((app, index) => (
              <ScrollReveal key={app.name} delay={index * 0.1}>
                <div className="p-6 rounded-2xl bg-card border border-border hover:border-primary/20 transition-all duration-300 card-hover text-center">
                  <div className="w-14 h-14 mx-auto rounded-xl gradient-primary flex items-center justify-center mb-4">
                    <app.icon className="w-7 h-7 text-primary-foreground" />
                  </div>
                  <h3 className="font-display font-semibold text-lg mb-2">{app.name}</h3>
                  <p className="text-muted-foreground text-sm">{app.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </Section>

        {/* Specifications */}
        <Section variant="muted">
          <SectionHeader
            title="Technical Specifications"
            subtitle="Detailed product specifications for Acacia Senegal spray-dried powder"
          />
          <div className="max-w-3xl mx-auto">
            <ScrollReveal>
              <div className="bg-card rounded-2xl border border-border overflow-hidden">
                <table className="w-full">
                  <tbody>
                    {specifications.map((spec, index) => (
                      <tr
                        key={spec.label}
                        className={index % 2 === 0 ? "bg-secondary/30" : ""}
                      >
                        <td className="px-6 py-4 font-medium text-foreground">
                          {spec.label}
                        </td>
                        <td className="px-6 py-4 text-muted-foreground text-right">
                          {spec.value}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <div className="mt-8 flex flex-wrap justify-center gap-4">
                <Button variant="outline" asChild>
                  <a href="/spec-sheet-senegal.pdf" download>
                    <Download className="w-4 h-4" />
                    Download Spec Sheet
                  </a>
                </Button>
                <Button variant="default" asChild>
                  <Link to="/contact?type=coa">Request COA/SDS</Link>
                </Button>
              </div>
            </ScrollReveal>
          </div>
        </Section>

        {/* CTA */}
        <Section variant="accent">
          <div className="text-center max-w-2xl mx-auto">
            <ScrollReveal>
              <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
                Ready to Order?
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Get a 1kg sample or request a quote for your bulk requirements.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Button size="lg" variant="accent" asChild>
                  <Link to="/contact?type=sample&product=senegal">Order Sample</Link>
                </Button>
                <Button size="lg" variant="default" asChild>
                  <Link to="/contact?type=quote&product=senegal">Request Quote</Link>
                </Button>
              </div>
            </ScrollReveal>
          </div>
        </Section>
      </Layout>
    </>
  );
}
