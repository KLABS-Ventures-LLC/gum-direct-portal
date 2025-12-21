import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { Section, SectionHeader } from "@/components/ui/section";
import { Shield, Truck, FlaskConical, CheckCircle } from "lucide-react";

const features = [
  {
    icon: FlaskConical,
    title: "Premium Spray-Dried Gum",
    description:
      "High-purity acacia gum processed using advanced spray-drying technology for consistent quality and solubility.",
  },
  {
    icon: Shield,
    title: "Food-Grade Certified",
    description:
      "Meets global food safety standards with HACCP certification, ISO compliance, and Halal/Kosher options.",
  },
  {
    icon: Truck,
    title: "UK Stock Available",
    description:
      "Fast delivery from our UK warehouse. Reduce lead times and simplify your supply chain logistics.",
  },
  {
    icon: CheckCircle,
    title: "Batch Tested & Traceable",
    description:
      "Every batch is tested with full COA available. Complete traceability from source to delivery.",
  },
];

export function WhatWeDoSection() {
  return (
    <Section variant="default" id="what-we-do">
      <SectionHeader
        title="What We Do"
        subtitle="Premium gum arabic sourced directly from Sudan, processed to the highest international standards"
      />

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
        {features.map((feature, index) => (
          <ScrollReveal key={feature.title} delay={index * 0.1}>
            <div className="group p-6 lg:p-8 rounded-2xl bg-card border border-border hover:border-primary/20 transition-all duration-300 card-hover h-full">
              <div className="w-14 h-14 rounded-xl gradient-primary flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <feature.icon className="w-7 h-7 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-display font-semibold text-foreground mb-3">
                {feature.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </Section>
  );
}
