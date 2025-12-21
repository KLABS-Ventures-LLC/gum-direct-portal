import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { Section, SectionHeader } from "@/components/ui/section";
import {
  Wine,
  Droplets,
  Candy,
  Pill,
  Heart,
  CakeSlice,
  Factory,
} from "lucide-react";

const applications = [
  {
    icon: Wine,
    name: "Beverages",
    description: "Stabilizer for citrus emulsions, flavor oils, and soft drinks",
  },
  {
    icon: Droplets,
    name: "Emulsions",
    description: "Superior emulsification for oils, flavors, and essential oils",
  },
  {
    icon: Candy,
    name: "Confectionery",
    description: "Glazing agent, film former, and texture modifier for candies",
  },
  {
    icon: Pill,
    name: "Supplements",
    description: "Encapsulation, tablet binding, and prebiotic fiber source",
  },
  {
    icon: Heart,
    name: "Pharma",
    description: "Pharmaceutical coatings, suspensions, and excipient applications",
  },
  {
    icon: CakeSlice,
    name: "Bakery",
    description: "Egg replacement, glaze, and texture improvement in baked goods",
  },
  {
    icon: Factory,
    name: "Industrial",
    description: "Adhesives, lithography, inks, and textile applications",
  },
];

export function ApplicationsSection() {
  return (
    <Section variant="default" id="applications">
      <SectionHeader
        title="Applications"
        subtitle="Versatile solutions across multiple industries"
      />

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-7 gap-4 lg:gap-6">
        {applications.map((app, index) => (
          <ScrollReveal key={app.name} delay={index * 0.05}>
            <div className="group p-6 rounded-2xl bg-card border border-border hover:border-accent/30 hover:bg-accent/5 transition-all duration-300 text-center h-full">
              <div className="w-14 h-14 mx-auto rounded-xl bg-secondary flex items-center justify-center mb-4 group-hover:bg-accent/10 group-hover:scale-110 transition-all duration-300">
                <app.icon className="w-7 h-7 text-muted-foreground group-hover:text-accent transition-colors" />
              </div>
              <h3 className="font-display font-semibold text-foreground mb-2">
                {app.name}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {app.description}
              </p>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </Section>
  );
}
