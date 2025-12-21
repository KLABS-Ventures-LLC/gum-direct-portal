import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { Section, SectionHeader } from "@/components/ui/section";
import {
  TrendingUp,
  Users,
  Clock,
  BadgeCheck,
  Headphones,
  Globe,
} from "lucide-react";

const benefits = [
  {
    icon: TrendingUp,
    title: "Direct Sourcing",
    description: "Eliminate middlemen with our direct-from-Sudan supply chain",
  },
  {
    icon: BadgeCheck,
    title: "Guaranteed Quality",
    description: "Every batch tested and certified to meet strict specifications",
  },
  {
    icon: Clock,
    title: "Fast Delivery",
    description: "UK-based stock for rapid fulfillment and reduced lead times",
  },
  {
    icon: Users,
    title: "Technical Support",
    description: "Expert guidance on product selection and applications",
  },
  {
    icon: Globe,
    title: "Global Standards",
    description: "Compliant with international food safety regulations",
  },
  {
    icon: Headphones,
    title: "Dedicated Service",
    description: "Personal account management for seamless ordering",
  },
];

export function WhyGumDirectSection() {
  return (
    <Section variant="default" id="why-gumdirect">
      <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        <div>
          <ScrollReveal direction="left">
            <SectionHeader
              title="Why GumDirect?"
              subtitle="Your trusted partner for premium gum arabic supply"
              align="left"
            />
          </ScrollReveal>

          <div className="space-y-6">
            {benefits.map((benefit, index) => (
              <ScrollReveal key={benefit.title} delay={index * 0.1} direction="left">
                <div className="flex gap-4 group">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                    <benefit.icon className="w-6 h-6 text-primary group-hover:text-primary-foreground transition-colors" />
                  </div>
                  <div>
                    <h4 className="font-display font-semibold text-foreground mb-1">
                      {benefit.title}
                    </h4>
                    <p className="text-muted-foreground">
                      {benefit.description}
                    </p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>

        <ScrollReveal direction="right">
          <div className="relative">
            <div className="aspect-square rounded-2xl gradient-primary p-8 lg:p-12">
              <div className="h-full flex flex-col justify-center text-primary-foreground">
                <div className="mb-8">
                  <span className="text-6xl lg:text-8xl font-display font-bold">15+</span>
                  <p className="text-xl text-primary-foreground/80 mt-2">Years of Experience</p>
                </div>
                <div className="space-y-4 border-t border-primary-foreground/20 pt-8">
                  <div className="flex justify-between items-center">
                    <span className="text-primary-foreground/70">Countries Served</span>
                    <span className="text-2xl font-display font-bold">25+</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-primary-foreground/70">Tonnes Annually</span>
                    <span className="text-2xl font-display font-bold">500+</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-primary-foreground/70">Customer Retention</span>
                    <span className="text-2xl font-display font-bold">98%</span>
                  </div>
                </div>
              </div>
            </div>
            {/* Decorative elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 rounded-2xl bg-accent/20 -z-10" />
            <div className="absolute -bottom-4 -left-4 w-32 h-32 rounded-2xl bg-secondary -z-10" />
          </div>
        </ScrollReveal>
      </div>
    </Section>
  );
}
