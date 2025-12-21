import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { Section, SectionHeader } from "@/components/ui/section";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { Button } from "@/components/ui/button";
import {
  Zap,
  ArrowRight,
  Download,
  CheckCircle,
  Candy,
  Factory,
  Printer,
  Paintbrush,
} from "lucide-react";

const features = [
  "Cost-effective solution",
  "Excellent binding properties",
  "High yield formulations",
  "Consistent batch quality",
  "Industrial-grade specifications",
  "E414 compliant",
];

const specifications = [
  { label: "Origin", value: "Sudan (Acacia Seyal)" },
  { label: "Processing", value: "Spray-dried" },
  { label: "Purity", value: "≥95%" },
  { label: "Moisture", value: "≤12%" },
  { label: "Ash Content", value: "≤5%" },
  { label: "Particle Size", value: "Fine powder (<250μm)" },
  { label: "Solubility", value: "Soluble in water" },
  { label: "pH (1% solution)", value: "4.5 - 5.5" },
];

const applications = [
  { icon: Candy, name: "Confectionery", desc: "Glazing, binding, texture" },
  { icon: Factory, name: "Industrial", desc: "Adhesives, textiles" },
  { icon: Printer, name: "Printing", desc: "Lithography, inks" },
  { icon: Paintbrush, name: "Coatings", desc: "Protective coatings" },
];

export default function ProductSeyal() {
  return (
    <>
      <Helmet>
        <title>Spray-Dried Acacia Seyal | Industrial Grade Gum Arabic | GumDirect</title>
        <meta
          name="description"
          content="Cost-effective spray-dried Acacia Seyal gum arabic. Excellent for confectionery and industrial applications. UK stock available, consistent quality."
        />
      </Helmet>

      <Layout>
        {/* Hero */}
        <section className="pt-32 pb-16 gradient-primary text-primary-foreground">
          <div className="container-wide">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <ScrollReveal direction="left">
                <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/20 text-accent-light text-sm font-medium mb-6">
                  <Zap className="w-4 h-4" />
                  Industrial Grade
                </span>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6">
                  Spray-Dried Acacia Seyal
                </h1>
                <p className="text-xl text-primary-foreground/80 mb-8">
                  Cost-effective gum arabic solution with excellent binding properties.
                  Ideal for confectionery and industrial applications.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Button variant="hero" size="lg" asChild>
                    <Link to="/contact?type=quote&product=seyal">
                      Request Quote
                      <ArrowRight className="w-5 h-5" />
                    </Link>
                  </Button>
                  <Button variant="hero-outline" size="lg" asChild>
                    <a href="/spec-sheet-seyal.pdf" download>
                      <Download className="w-5 h-5" />
                      Download Spec Sheet
                    </a>
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
            subtitle="Versatile solution for confectionery and industrial use cases"
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
            subtitle="Detailed product specifications for Acacia Seyal spray-dried powder"
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
                  <a href="/spec-sheet-seyal.pdf" download>
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
                Request a Quote
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Contact us for pricing on bulk orders of Acacia Seyal.
              </p>
              <Button size="lg" variant="default" asChild>
                <Link to="/contact?type=quote&product=seyal">
                  Get Quote
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
