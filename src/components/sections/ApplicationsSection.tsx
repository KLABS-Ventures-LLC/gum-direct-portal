import { Link } from "react-router-dom";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { Button } from "@/components/ui/button";
import {
  Wine, Droplets, Candy, Pill, Heart, CakeSlice, Factory, ArrowRight,
} from "lucide-react";

const applications = [
  { icon: Wine, name: "Beverages", description: "Citrus emulsions & soft drinks" },
  { icon: Droplets, name: "Emulsions", description: "Oil-in-water stabilization" },
  { icon: Candy, name: "Confectionery", description: "Glazing & coating" },
  { icon: Pill, name: "Supplements", description: "Encapsulation & binding" },
  { icon: Heart, name: "Pharma", description: "Coatings & excipients" },
  { icon: CakeSlice, name: "Bakery", description: "Texture & moisture" },
  { icon: Factory, name: "Industrial", description: "Adhesives & coatings" },
];

export function ApplicationsSection() {
  return (
    <section className="py-16 md:py-20 lg:py-24" style={{ backgroundColor: '#FFFDF8' }}>
      <div className="container-wide">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-16">
          <div className="max-w-2xl">
            <ScrollReveal>
              <span className="inline-block text-accent font-semibold text-sm uppercase tracking-widest mb-4">
                Applications
              </span>
            </ScrollReveal>
            <ScrollReveal delay={0.1}>
              <h2 className="text-display-md font-display font-bold text-foreground">
                Industrial Applications of Acacia Senegal{" "}
                <span className="text-accent">(E414)</span>
              </h2>
            </ScrollReveal>
          </div>
          <ScrollReveal delay={0.2}>
            <Button variant="outline" size="lg" asChild>
              <Link to="/applications">
                View All Applications
                <ArrowRight className="w-4 h-4" />
              </Link>
            </Button>
          </ScrollReveal>
        </div>

        {/* Applications Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-7 gap-4">
          {applications.map((app, index) => (
            <ScrollReveal key={app.name} delay={index * 0.05}>
              <Link to={`/applications#${app.name.toLowerCase()}`} className="group block h-full">
                <div className="h-full p-6 rounded-2xl border border-border text-center hover:border-accent/30 transition-all duration-500" style={{ backgroundColor: '#FFFFFF' }}>
                  <div className="w-14 h-14 mx-auto rounded-2xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-accent/10 group-hover:scale-110 transition-all duration-500">
                    <app.icon className="w-7 h-7 text-muted-foreground group-hover:text-accent transition-colors duration-300" />
                  </div>
                  <h3 className="font-display font-semibold text-foreground mb-1 group-hover:text-accent transition-colors">
                    {app.name}
                  </h3>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    {app.description}
                  </p>
                </div>
              </Link>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
