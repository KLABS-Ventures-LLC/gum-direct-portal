import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { ShieldCheck, Award, FileCheck, Leaf, FileText, MapPin } from "lucide-react";

const certifications = [
  { icon: ShieldCheck, name: "HACCP", status: "Certified" },
  { icon: Award, name: "ISO 22000", status: "Certified" },
  { icon: FileCheck, name: "Halal", status: "Available" },
  { icon: FileCheck, name: "Kosher", status: "Available" },
  { icon: Leaf, name: "Non-GMO", status: "Verified" },
  { icon: FileText, name: "COA/SDS", status: "On Request" },
  { icon: MapPin, name: "Traceability", status: "Full" },
];

export function CertificationsSection() {
  return (
    <section className="relative py-20 md:py-24 bg-secondary/50 overflow-hidden">
      <div className="container-wide">
        <ScrollReveal>
          <div className="text-center mb-12">
            <span className="text-accent font-semibold text-sm uppercase tracking-widest">
              Quality Assured
            </span>
          </div>
        </ScrollReveal>

        {/* Certifications Row */}
        <div className="flex flex-wrap justify-center gap-4 lg:gap-6">
          {certifications.map((cert, index) => (
            <ScrollReveal key={cert.name} delay={index * 0.05}>
              <div className="group flex items-center gap-4 px-6 py-4 rounded-2xl bg-card border border-border hover:border-primary/20 hover:shadow-medium transition-all duration-500">
                <div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                  <cert.icon className="w-5 h-5 text-primary group-hover:text-primary-foreground transition-colors" />
                </div>
                <div>
                  <h4 className="font-display font-semibold text-foreground text-sm">
                    {cert.name}
                  </h4>
                  <p className="text-xs text-muted-foreground">
                    {cert.status}
                  </p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
