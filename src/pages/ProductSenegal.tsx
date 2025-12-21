import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
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
        <section className="relative pt-32 pb-20 lg:pb-32 overflow-hidden">
          <div className="absolute inset-0 gradient-hero" />
          <div className="absolute top-1/3 right-0 w-[600px] h-[600px] rounded-full bg-accent/15 blur-[120px]" />
          
          <div className="relative container-wide">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              <div>
                <ScrollReveal>
                  <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/20 backdrop-blur-sm border border-accent/30 mb-8">
                    <Star className="w-4 h-4 text-accent" />
                    <span className="text-accent text-sm font-semibold">Premium Grade</span>
                  </div>
                </ScrollReveal>
                
                <ScrollReveal delay={0.1}>
                  <h1 className="text-display-lg font-display font-bold text-primary-foreground mb-6">
                    Acacia Senegal
                  </h1>
                </ScrollReveal>
                
                <ScrollReveal delay={0.2}>
                  <p className="text-xl lg:text-2xl text-primary-foreground/70 mb-10 leading-relaxed">
                    The gold standard in gum arabic. Superior emulsification properties,
                    exceptional purity, and consistent quality for demanding applications.
                  </p>
                </ScrollReveal>
                
                <ScrollReveal delay={0.3}>
                  <div className="flex flex-wrap gap-4">
                    <Button variant="hero" size="xl" asChild>
                      <Link to="/contact?type=sample&product=senegal">
                        <Package className="w-5 h-5" />
                        Order Sample
                      </Link>
                    </Button>
                    <Button variant="hero-outline" size="xl" asChild>
                      <Link to="/contact?type=quote&product=senegal">
                        Request Quote
                        <ArrowRight className="w-5 h-5" />
                      </Link>
                    </Button>
                  </div>
                </ScrollReveal>
              </div>

              <ScrollReveal direction="right" delay={0.2}>
                <div className="relative">
                  <div className="bg-primary-foreground/10 backdrop-blur-xl rounded-3xl p-8 lg:p-10 border border-primary-foreground/20 shadow-elevated">
                    <h3 className="font-display font-bold text-xl text-primary-foreground mb-8">Key Features</h3>
                    <div className="space-y-5">
                      {features.map((feature, index) => (
                        <div key={feature} className="flex items-center gap-4">
                          <div className="w-8 h-8 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0">
                            <CheckCircle className="w-4 h-4 text-accent" />
                          </div>
                          <span className="text-primary-foreground/90">{feature}</span>
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
        <section className="relative py-24 md:py-32 overflow-hidden">
          <div className="absolute inset-0 gradient-mesh" />
          <div className="relative container-wide">
            <div className="max-w-2xl mb-16">
              <ScrollReveal>
                <span className="text-accent font-semibold text-sm uppercase tracking-widest mb-4 block">
                  Applications
                </span>
              </ScrollReveal>
              <ScrollReveal delay={0.1}>
                <h2 className="text-display-sm font-display font-bold text-foreground">
                  Ideal for high-quality formulations
                </h2>
              </ScrollReveal>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {applications.map((app, index) => (
                <ScrollReveal key={app.name} delay={index * 0.1}>
                  <div className="group h-full p-8 rounded-3xl bg-card border border-border hover:border-accent/30 hover:shadow-elevated transition-all duration-500 text-center">
                    <div className="w-16 h-16 mx-auto rounded-2xl gradient-primary flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500">
                      <app.icon className="w-8 h-8 text-primary-foreground" />
                    </div>
                    <h3 className="font-display font-bold text-xl mb-3">{app.name}</h3>
                    <p className="text-muted-foreground">{app.desc}</p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* Specifications */}
        <section className="py-24 md:py-32 bg-foreground">
          <div className="container-wide">
            <div className="max-w-2xl mb-16">
              <ScrollReveal>
                <span className="text-accent font-semibold text-sm uppercase tracking-widest mb-4 block">
                  Technical Data
                </span>
              </ScrollReveal>
              <ScrollReveal delay={0.1}>
                <h2 className="text-display-sm font-display font-bold text-background">
                  Product Specifications
                </h2>
              </ScrollReveal>
            </div>
            
            <div className="grid lg:grid-cols-2 gap-8 lg:gap-16">
              <ScrollReveal>
                <div className="rounded-3xl overflow-hidden border border-background/10">
                  <table className="w-full">
                    <tbody>
                      {specifications.map((spec, index) => (
                        <tr key={spec.label} className={index % 2 === 0 ? "bg-background/5" : "bg-transparent"}>
                          <td className="px-6 py-5 font-medium text-background">{spec.label}</td>
                          <td className="px-6 py-5 text-background/60 text-right">{spec.value}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </ScrollReveal>

              <ScrollReveal delay={0.2}>
                <div className="h-full flex flex-col justify-center">
                  <h3 className="text-2xl font-display font-bold text-background mb-6">
                    Need Documentation?
                  </h3>
                  <p className="text-background/60 mb-8 leading-relaxed">
                    Download our specification sheet or request COA and SDS documents 
                    for your specific requirements.
                  </p>
                  <div className="flex flex-wrap gap-4">
                    <Button variant="hero" asChild>
                      <a href="/spec-sheet-senegal.pdf" download>
                        <Download className="w-4 h-4" />
                        Spec Sheet
                      </a>
                    </Button>
                    <Button variant="hero-outline" asChild>
                      <Link to="/contact?type=coa">Request COA/SDS</Link>
                    </Button>
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
}
