import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { TrendingUp, BadgeCheck, Clock, Users, Globe, Headphones, CheckCircle } from "lucide-react";

const benefits = [
  { icon: TrendingUp, title: "Controlled Supply Chain", description: "Direct sourcing with full visibility from origin to delivery" },
  { icon: BadgeCheck, title: "Batch-Tested Quality", description: "Every batch tested and certified with COA" },
  { icon: Clock, title: "UK Warehouse & Rapid Dispatch", description: "UK stock for fast fulfillment" },
  { icon: Users, title: "Technical Support", description: "Expert guidance on applications" },
  { icon: Globe, title: "International Compliance Standards", description: "Global food safety compliance" },
  { icon: Headphones, title: "Dedicated Account Management", description: "Personal account management" },
];

const bulletPoints = [
  "Controlled supply chain",
  "Consistent spray-drying process",
  "Certified compliance",
  "Technical documentation provided",
];

export function WhyGumDirectSection() {
  return (
    <section className="py-24 md:py-32 lg:py-40 bg-background">
      <div className="container-wide">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Left Panel */}
          <ScrollReveal direction="left">
            <div className="relative rounded-3xl bg-primary p-10 lg:p-12 overflow-hidden">
              <div className="relative">
                <h3 className="text-3xl lg:text-4xl font-display font-bold text-primary-foreground mb-4">
                  UK Processing Capability
                </h3>
                <p className="text-primary-foreground/80 leading-relaxed mb-8">
                  Spray-dried in the UK under certified food safety systems with full documentation and batch-level traceability.
                </p>

                <div className="space-y-4 pt-8 border-t border-primary-foreground/20">
                  {bulletPoints.map((point) => (
                    <div key={point} className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-accent flex-shrink-0" />
                      <span className="text-primary-foreground/90">{point}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* Benefits */}
          <div>
            <ScrollReveal direction="right">
              <span className="inline-block text-accent font-semibold text-sm uppercase tracking-widest mb-4">
                Why GumDirect
              </span>
              <h2 className="text-display-md font-display font-bold text-foreground mb-12">
                Reliable UK Processing &{" "}
                <span className="text-accent">Global Supply</span>
              </h2>
            </ScrollReveal>

            <div className="grid sm:grid-cols-2 gap-6">
              {benefits.map((benefit, index) => (
                <ScrollReveal key={benefit.title} delay={index * 0.08} direction="right">
                  <div className="group flex gap-4">
                    <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                      <benefit.icon className="w-6 h-6 text-primary group-hover:text-primary-foreground transition-colors" />
                    </div>
                    <div>
                      <h4 className="font-display font-semibold text-foreground mb-1">
                        {benefit.title}
                      </h4>
                      <p className="text-sm text-muted-foreground">
                        {benefit.description}
                      </p>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
