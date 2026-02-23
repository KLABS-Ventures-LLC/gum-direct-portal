import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { Shield, Truck, FlaskConical, CheckCircle } from "lucide-react";

const features = [
  {
    icon: FlaskConical,
    title: "Premium Spray-Dried",
    description: "Advanced spray-drying technology for consistent quality, superior solubility, and optimal particle size.",
  },
  {
    icon: Shield,
    title: "Food-Grade Certified",
    description: "HACCP, ISO 22000, with Halal and Kosher certifications available. Full compliance guaranteed.",
  },
  {
    icon: Truck,
    title: "UK Stock Available",
    description: "Fast delivery from our UK warehouse. Reduce lead times and streamline your supply chain.",
  },
  {
    icon: CheckCircle,
    title: "Batch Tested",
    description: "Every batch tested with COA provided. Complete traceability from Sudan to delivery.",
  },
];

export function WhatWeDoSection() {
  return (
    <section className="py-24 md:py-32 lg:py-40 bg-background">
      <div className="container-wide">
        {/* Header */}
        <div className="max-w-3xl mb-16 md:mb-24">
          <ScrollReveal>
            <span className="inline-block text-accent font-semibold text-sm uppercase tracking-widest mb-4">
              What We Do
            </span>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <h2 className="text-display-md font-display font-bold text-foreground mb-6">
              Premium gum arabic,{" "}
              <span className="text-accent">sourced responsibly</span>
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={0.2}>
            <p className="text-xl text-muted-foreground leading-relaxed">
              We source the finest acacia gum directly from Sudan and process it to
              meet the most demanding international food safety standards.
            </p>
          </ScrollReveal>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {features.map((feature, index) => (
            <ScrollReveal key={feature.title} delay={index * 0.1}>
              <div className="group relative h-full">
                <div className="relative h-full p-8 lg:p-10 rounded-3xl bg-card border border-border group-hover:border-accent/20 transition-all duration-500 shadow-card">
                  <div className="flex items-start gap-6">
                    <div className="flex-shrink-0 w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
                      <feature.icon className="w-7 h-7 text-primary" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-display font-bold text-foreground mb-3">
                        {feature.title}
                      </h3>
                      <p className="text-muted-foreground leading-relaxed">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
