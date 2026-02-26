import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  Download,
  Package,
  CheckCircle,
} from "lucide-react";

const features = [
  "≥99% Purity",
  "Superior Emulsification Performance",
  "Low Viscosity",
  "High Solubility",
  "Neutral Taste & Odour",
  "E414 Compliant",
];

const specifications = [
  { label: "Origin", value: "Sudan (Acacia Senegal)", notes: "—" },
  { label: "Processing", value: "Spray-dried", notes: "UK facility" },
  { label: "Purity", value: "≥99%", notes: "Dry basis" },
  { label: "Moisture", value: "≤10%", notes: "—" },
  { label: "Ash Content", value: "≤4%", notes: "—" },
  { label: "Particle Size", value: "Fine powder (<250 µm)", notes: "—" },
  { label: "pH (1% solution)", value: "4.0 – 5.0", notes: "—" },
];

const applicationBlocks = [
  {
    title: "Beverages",
    description: "Designed for citrus emulsions and flavour oil stabilization in soft drinks. Provides stable cloud systems and prevents ring formation.",
  },
  {
    title: "Emulsions",
    description: "Effective oil-in-water emulsifier with low viscosity and high solubility. Suitable for beverage emulsions and encapsulated flavours.",
  },
  {
    title: "Confectionery",
    description: "Used in glazing and film formation. Enhances coating adhesion and improves shine and surface stability.",
  },
  {
    title: "Pharmaceuticals & Nutraceuticals",
    description: "Acts as binder, encapsulation agent and coating component. Neutral taste and compliant with food and pharma-grade standards.",
  },
];

export default function ProductSenegal() {
  return (
    <>
      <Helmet>
        <title>Acacia Senegal Spray-Dried Powder (E414) – 1 kg Sample | GumDirect</title>
        <meta
          name="description"
          content="Food-grade spray-dried Acacia Senegal (E414) processed in the UK. 1 kg technical evaluation sample for £34.99 with UK delivery included."
        />
      </Helmet>

      <Layout>
        {/* Hero */}
        <section className="relative pt-32 pb-20 lg:pb-32 overflow-hidden">
          <div className="absolute top-1/3 right-0 w-[600px] h-[600px] rounded-full bg-accent/5 blur-[120px]" />

          <div className="relative container-wide">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              <div>
                <ScrollReveal delay={0.1}>
                  <h1 className="text-display-lg font-display font-bold text-primary mb-2">
                    Acacia Senegal Spray-Dried Powder
                  </h1>
                  <span className="text-2xl font-display font-semibold text-muted-foreground">(E414)</span>
                </ScrollReveal>

                <ScrollReveal delay={0.15}>
                  <p className="text-xl lg:text-2xl text-foreground/70 mt-6 mb-4 leading-relaxed">
                    Food-grade spray-dried Acacia Senegal (E414) processed in the UK for beverage, confectionery, nutraceutical and pharmaceutical applications.
                  </p>
                </ScrollReveal>

                <ScrollReveal delay={0.2}>
                  <div className="bg-secondary rounded-2xl p-6 mb-8 border border-border inline-block">
                    <p className="text-sm font-semibold text-foreground uppercase tracking-wider mb-2">
                      Technical Evaluation Sample – 1kg
                    </p>
                    <div className="flex items-baseline gap-3 mb-1">
                      <span className="text-4xl font-display font-bold text-primary">£34.99</span>
                    </div>
                    <p className="text-accent font-medium">UK Delivery Included</p>
                    <p className="text-sm text-muted-foreground italic mt-2">
                      For commercial evaluation purposes only.
                    </p>
                  </div>
                </ScrollReveal>

                <ScrollReveal delay={0.3}>
                  <div className="flex flex-wrap gap-4">
                    <Button variant="hero" size="xl" asChild>
                      <Link to="/contact?type=sample&product=senegal">
                        <Package className="w-5 h-5" />
                        Request Technical Sample
                      </Link>
                    </Button>
                    <Button variant="hero-outline" size="xl" asChild>
                      <Link to="/contact?type=quote&product=senegal">
                        Request Bulk Quote
                        <ArrowRight className="w-5 h-5" />
                      </Link>
                    </Button>
                  </div>
                </ScrollReveal>
              </div>

              <ScrollReveal direction="right" delay={0.2}>
                <div className="relative">
                  <div className="bg-secondary rounded-3xl p-8 lg:p-10 border border-border shadow-elevated">
                    <h3 className="font-display font-bold text-xl text-primary mb-8">Technical Characteristics</h3>
                    <div className="space-y-5">
                      {features.map((feature) => (
                        <div key={feature} className="flex items-center gap-4">
                          <div className="w-8 h-8 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0">
                            <CheckCircle className="w-4 h-4 text-accent" />
                          </div>
                          <span className="text-foreground/80">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="absolute -bottom-6 -left-6 w-24 h-24 rounded-2xl bg-accent shadow-glow -z-10" />
                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>

        {/* Applications */}
        <section className="relative py-16 md:py-20 lg:py-24 overflow-hidden bg-secondary">
          <div className="relative container-wide">
            <div className="max-w-2xl mb-16">
              <ScrollReveal>
                <span className="text-accent font-semibold text-sm uppercase tracking-widest mb-4 block">
                  Applications
                </span>
              </ScrollReveal>
              <ScrollReveal delay={0.1}>
                <h2 className="text-display-md font-display font-bold text-foreground">
                  Application Performance
                </h2>
              </ScrollReveal>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {applicationBlocks.map((app, index) => (
                <ScrollReveal key={app.title} delay={index * 0.1}>
                  <div className="h-full p-8 rounded-3xl border border-border transition-all duration-500" style={{ backgroundColor: '#FFFFFF' }}>
                    <h3 className="font-display font-bold text-xl text-primary mb-3">{app.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{app.description}</p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* Specifications */}
        <section className="py-16 md:py-20 lg:py-24" style={{ backgroundColor: '#FFFDF8' }}>
          <div className="container-wide">
            <div className="max-w-2xl mb-16">
              <ScrollReveal>
                <span className="text-accent font-semibold text-sm uppercase tracking-widest mb-4 block">
                  Technical Data
                </span>
              </ScrollReveal>
              <ScrollReveal delay={0.1}>
                <h2 className="text-display-md font-display font-bold text-foreground">
                  Product Specifications
                </h2>
              </ScrollReveal>
            </div>

            <ScrollReveal>
              <div className="rounded-2xl overflow-hidden border border-border mb-16" style={{ backgroundColor: '#FFFFFF' }}>
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-border bg-secondary/50">
                      <th className="px-6 py-4 text-left font-display font-semibold text-foreground text-sm uppercase tracking-wider">Parameter</th>
                      <th className="px-6 py-4 text-left font-display font-semibold text-foreground text-sm uppercase tracking-wider">Specification</th>
                      <th className="px-6 py-4 text-left font-display font-semibold text-foreground text-sm uppercase tracking-wider">Notes / Basis</th>
                    </tr>
                  </thead>
                  <tbody>
                    {specifications.map((spec, index) => (
                      <tr key={spec.label} className={index % 2 === 0 ? "bg-secondary/20" : ""}>
                        <td className="px-6 py-4 font-medium text-foreground">{spec.label}</td>
                        <td className="px-6 py-4 text-muted-foreground">{spec.value}</td>
                        <td className="px-6 py-4 text-muted-foreground">{spec.notes}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <div className="max-w-2xl">
                <h3 className="text-2xl font-display font-bold text-foreground mb-4">
                  Documentation & Compliance
                </h3>
                <p className="text-muted-foreground mb-8 leading-relaxed">
                  Specification sheet, COA and SDS available upon request.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Button variant="accent" size="lg" asChild>
                    <a href="/spec-sheet-senegal.pdf" download>
                      <Download className="w-4 h-4" />
                      Download Spec Sheet
                    </a>
                  </Button>
                  <Button variant="outline" size="lg" className="border-primary text-primary hover:bg-primary/10" asChild>
                    <Link to="/contact?type=coa">Request COA / SDS</Link>
                  </Button>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </section>
      </Layout>
    </>
  );
}
