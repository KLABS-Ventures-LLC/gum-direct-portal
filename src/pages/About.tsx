import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { Button } from "@/components/ui/button";
import { ArrowRight, Globe, Users, TrendingUp, Award, Target, Heart, CheckCircle } from "lucide-react";

const values = [
  {
    icon: Award,
    title: "Quality First",
    description: "We operate strict quality control protocols at every stage — from sourcing to final dispatch.",
  },
  {
    icon: Users,
    title: "Customer Partnership",
    description: "We work closely with manufacturers to align product specifications, documentation, and delivery schedules.",
  },
  {
    icon: Globe,
    title: "Sustainable Sourcing",
    description: "Direct sourcing from Sudan ensures traceability while supporting responsible supply chain practices.",
  },
  {
    icon: TrendingUp,
    title: "Continuous Improvement",
    description: "We regularly review processes, supplier standards, and quality systems to maintain consistency.",
  },
  {
    icon: Target,
    title: "Precision",
    description: "Every batch is produced and documented according to agreed technical specifications.",
  },
  {
    icon: Heart,
    title: "Integrity",
    description: "Clear documentation, transparent communication, and reliable commitments define our approach.",
  },
];

const credibilityPoints = [
  "Direct sourcing partnerships in Sudan",
  "UK-based distribution and stock availability",
  "Batch-level traceability",
  "International compliance alignment",
  "Scalable supply volumes",
];

const supplyChainPoints = [
  "Direct sourcing partnerships in Sudan",
  "Controlled spray-drying and quality monitoring",
  "UK-based warehousing and stock availability",
  "Batch-level documentation and traceability",
  "International compliance alignment",
];

export default function About() {
  return (
    <>
      <Helmet>
        <title>About GumDirect | Premium Gum Arabic Supplier UK</title>
        <meta
          name="description"
          content="GumDirect is a UK-based supplier of premium spray-dried acacia gum. Direct from Sudan, processed to global food standards."
        />
      </Helmet>

      <Layout>
        {/* Hero */}
        <section className="relative pt-32 pb-20 lg:pb-32 overflow-hidden">
          
          <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full bg-accent/5 blur-[150px]" />
          
          <div className="relative container-wide">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <ScrollReveal>
                  <span className="inline-block text-accent font-semibold text-sm uppercase tracking-widest mb-6">
                    About Us
                  </span>
                </ScrollReveal>
                <ScrollReveal delay={0.1}>
                  <h1 className="text-display-lg font-display font-bold text-primary mb-6">
                    UK-Based Supply of Premium Acacia Senegal
                  </h1>
                </ScrollReveal>
                <ScrollReveal delay={0.2}>
                  <p className="text-xl lg:text-2xl text-foreground/70 leading-relaxed">
                    GumDirect is a UK-registered supplier of spray-dried Acacia Senegal, directly sourced from Sudan and distributed with full traceability and compliance to international food safety standards.
                  </p>
                </ScrollReveal>
              </div>

              <ScrollReveal direction="right" delay={0.2}>
                <div className="bg-secondary/30 rounded-3xl p-8 lg:p-10 border border-border">
                  <h3 className="font-display font-bold text-xl text-primary mb-6">Operational Credentials</h3>
                  <div className="space-y-4">
                    {credibilityPoints.map((point) => (
                      <div key={point} className="flex items-start gap-3">
                        <div className="w-8 h-8 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                          <CheckCircle className="w-4 h-4 text-accent" />
                        </div>
                        <span className="text-foreground/80 text-lg">{point}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>

        {/* Supply Chain */}
        <section className="relative py-16 md:py-20 lg:py-24 overflow-hidden" style={{ backgroundColor: '#FFFDF8' }}>
          
          <div className="relative container-wide">
            <div className="max-w-3xl mx-auto">
              <ScrollReveal>
                <span className="text-accent font-semibold text-sm uppercase tracking-widest mb-4 block">
                  Supply Chain
                </span>
              </ScrollReveal>
              <ScrollReveal delay={0.1}>
                <h2 className="text-display-md font-display font-bold text-foreground mb-8">
                  Our Supply Chain Model
                </h2>
              </ScrollReveal>
              <div className="space-y-5">
                {supplyChainPoints.map((point, index) => (
                  <ScrollReveal key={point} delay={index * 0.08}>
                    <div className="flex items-start gap-4 bg-white rounded-2xl p-5 border border-border">
                      <div className="w-10 h-10 rounded-full gradient-primary flex items-center justify-center flex-shrink-0">
                        <span className="text-primary-foreground font-display font-bold text-sm">{index + 1}</span>
                      </div>
                      <span className="text-foreground text-lg leading-relaxed pt-1.5">{point}</span>
                    </div>
                  </ScrollReveal>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Operational Principles */}
        <section className="py-16 md:py-20 lg:py-24 bg-foreground">
          <div className="container-wide">
            <div className="max-w-2xl mb-16">
              <ScrollReveal>
                <span className="text-accent font-semibold text-sm uppercase tracking-widest mb-4 block">
                  Operational Principles
                </span>
              </ScrollReveal>
              <ScrollReveal delay={0.1}>
                <h2 className="text-display-md font-display font-bold text-background">
                  The principles that guide everything we do
                </h2>
              </ScrollReveal>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {values.map((value, index) => (
                <ScrollReveal key={value.title} delay={index * 0.08}>
                  <div className="group h-full bg-background/5 rounded-3xl border border-background/10 p-8 hover:bg-background/10 transition-all duration-500">
                    <div className="w-14 h-14 rounded-2xl gradient-accent flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500">
                      <value.icon className="w-7 h-7 text-accent-foreground" />
                    </div>
                    <h3 className="font-display font-bold text-xl text-background mb-3">
                      {value.title}
                    </h3>
                    <p className="text-background/60 leading-relaxed">
                      {value.description}
                    </p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="relative py-16 md:py-20 lg:py-24 overflow-hidden" style={{ backgroundColor: '#FFFDF8' }}>
          <div className="relative container-wide text-center">
            <ScrollReveal>
              <h2 className="text-display-md font-display font-bold text-foreground mb-6">
                Ready to discuss your requirements?
              </h2>
              <p className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto">
                Speak with our team to receive pricing, documentation, and technical guidance tailored to your application.
              </p>
              <Button size="xl" variant="accent" asChild>
                <Link to="/contact?type=quote">
                  Request Quote
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
