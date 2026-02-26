import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { ShieldCheck, Award, FileCheck, Leaf, FileText, MapPin } from "lucide-react";

const certifications = [
  { icon: ShieldCheck, name: "HACCP", status: "Certified" },
  { icon: Award, name: "ISO 22000", status: "Certified" },
  { icon: FileCheck, name: "Halal Certification", status: "Available" },
  { icon: FileCheck, name: "Kosher Certification", status: "Available" },
  { icon: Leaf, name: "Non-GMO", status: "Compliant" },
  { icon: FileText, name: "COA & SDS", status: "Available Upon Request" },
  { icon: MapPin, name: "Batch Traceability", status: "Full" },
];

export function CertificationsSection() {
  return (
    <section className="py-16 md:py-20 lg:py-24" style={{ backgroundColor: '#FFFDF8' }}>
      <div className="container-wide">
        <ScrollReveal>
          <div className="text-center mb-12">
            <span className="text-accent font-semibold text-sm uppercase tracking-widest">
              Quality Assured
            </span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-primary mt-4">
              Quality & Regulatory Compliance
            </h2>
            <p className="text-muted-foreground mt-4 max-w-2xl mx-auto leading-relaxed">
              All products are processed under certified food safety systems with complete documentation and batch-level traceability.
            </p>
          </div>
        </ScrollReveal>

        {/* Certifications Row */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 lg:gap-6">
          {certifications.map((cert, index) => (
            <ScrollReveal key={cert.name} delay={index * 0.05}>
              <div className="group flex items-center gap-4 px-6 py-4 rounded-2xl border border-border hover:border-primary/20 transition-all duration-500" style={{ backgroundColor: '#FFFFFF' }}>
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
