import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { TrendingUp, Users, Clock, BadgeCheck, Headphones, Globe } from "lucide-react";

const benefits = [
  { icon: TrendingUp, title: "Direct Sourcing", description: "Eliminate middlemen with our direct supply chain" },
  { icon: BadgeCheck, title: "Guaranteed Quality", description: "Every batch tested and certified" },
  { icon: Clock, title: "Fast Delivery", description: "UK stock for rapid fulfillment" },
  { icon: Users, title: "Technical Support", description: "Expert guidance on applications" },
  { icon: Globe, title: "Global Standards", description: "International food safety compliance" },
  { icon: Headphones, title: "Dedicated Service", description: "Personal account management" },
];

export function WhyGumDirectSection() {
  return (
    <section className="py-24 md:py-32 lg:py-40 bg-background">
      <div className="container-wide">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Stats Card */}
          <ScrollReveal direction="left">
            <div className="relative rounded-3xl bg-primary p-10 lg:p-12 overflow-hidden">
              <div className="relative">
                <div className="mb-10">
                  <span className="text-8xl lg:text-9xl font-display font-bold text-primary-foreground/20">15+</span>
                  <p className="text-2xl text-primary-foreground -mt-4">Years of Experience</p>
                </div>

                <div className="space-y-6 pt-8 border-t border-primary-foreground/20">
                  {[
                    { label: "Countries Served", value: "25+" },
                    { label: "Tonnes Annually", value: "500+" },
                    { label: "Customer Retention", value: "98%" },
                  ].map((stat) => (
                    <div key={stat.label} className="flex justify-between items-center">
                      <span className="text-primary-foreground/60">{stat.label}</span>
                      <span className="text-3xl font-display font-bold text-accent">{stat.value}</span>
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
                Your trusted partner for{" "}
                <span className="text-accent">premium gum arabic</span>
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
