import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { Shield, Truck, FlaskConical, CheckCircle } from "lucide-react";

const features = [
{
  icon: FlaskConical,
  title: "Spray-Dried Precision",
  description: "Advanced UK spray-drying ensures consistent particle size, high solubility and stable performance across applications."
},
{
  icon: Shield,
  title: "Certified & Compliant",
  description: "HACCP and ISO 22000 aligned processing with Halal and Kosher certification options available."
},
{
  icon: Truck,
  title: "UK Stock & Distribution",
  description: "Fast delivery from our UK warehouse to reduce lead times and strengthen supply continuity."
},
{
  icon: CheckCircle,
  title: "Batch-Level Testing",
  description: "Every batch supplied with COA documentation and full traceability from origin to delivery."
}];


export function WhatWeDoSection() {
  return (
    <section className="py-16 md:py-20 lg:py-24" style={{ backgroundColor: '#FFFDF8' }}>
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
              UK-Processed Acacia Senegal for{" "}
              <span className="text-accent">Industrial Applications</span>
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={0.2}>
            <p className="text-xl text-muted-foreground leading-relaxed">We source high-grade Acacia Senegal from Sudan and process it in the UK using advanced spray-drying technology to meet international food safety and quality standards.


            </p>
          </ScrollReveal>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {features.map((feature, index) =>
          <ScrollReveal key={feature.title} delay={index * 0.1}>
              <div className="group relative h-full">
                <div className="relative h-full p-8 lg:p-10 rounded-3xl border border-border group-hover:border-accent/20 transition-all duration-500 shadow-card" style={{ backgroundColor: '#FFFFFF' }}>
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
          )}
        </div>
      </div>
    </section>);

}