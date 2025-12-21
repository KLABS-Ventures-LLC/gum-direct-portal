import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { Section, SectionHeader } from "@/components/ui/section";
import {
  ShieldCheck,
  Award,
  FileCheck,
  Leaf,
  FileText,
  MapPin,
} from "lucide-react";

const certifications = [
  { icon: ShieldCheck, name: "HACCP", description: "Hazard Analysis Critical Control Points" },
  { icon: Award, name: "ISO Certified", description: "International Quality Standards" },
  { icon: FileCheck, name: "Halal", description: "Product certification available" },
  { icon: FileCheck, name: "Kosher", description: "Product certification available" },
  { icon: Leaf, name: "Non-GMO", description: "100% Natural, Non-GMO verified" },
  { icon: FileText, name: "COA/SDS", description: "Available on request" },
  { icon: MapPin, name: "Traceability", description: "Full batch traceability" },
];

export function CertificationsSection() {
  return (
    <Section variant="muted" id="certifications">
      <SectionHeader
        title="Quality & Certifications"
        subtitle="Committed to the highest standards of quality, safety, and compliance"
      />

      <div className="flex flex-wrap justify-center gap-4 lg:gap-6">
        {certifications.map((cert, index) => (
          <ScrollReveal key={cert.name} delay={index * 0.05}>
            <div className="group flex items-center gap-4 px-6 py-4 rounded-xl bg-card border border-border hover:border-primary/20 transition-all duration-300">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                <cert.icon className="w-6 h-6 text-primary group-hover:text-primary-foreground transition-colors" />
              </div>
              <div>
                <h4 className="font-display font-semibold text-foreground">
                  {cert.name}
                </h4>
                <p className="text-sm text-muted-foreground">
                  {cert.description}
                </p>
              </div>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </Section>
  );
}
