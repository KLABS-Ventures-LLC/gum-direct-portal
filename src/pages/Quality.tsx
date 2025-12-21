import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { Section, SectionHeader } from "@/components/ui/section";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { Button } from "@/components/ui/button";
import {
  ShieldCheck,
  Award,
  FileCheck,
  Leaf,
  FileText,
  MapPin,
  ArrowRight,
  CheckCircle,
} from "lucide-react";

const certifications = [
  {
    icon: ShieldCheck,
    name: "HACCP Certified",
    description:
      "Our facilities and processes are HACCP certified, ensuring systematic preventive approach to food safety from biological, chemical, and physical hazards.",
    status: "Certified",
  },
  {
    icon: Award,
    name: "ISO 22000",
    description:
      "International standard for food safety management systems, demonstrating our ability to control food safety hazards to ensure safe products.",
    status: "Certified",
  },
  {
    icon: FileCheck,
    name: "Halal Certification",
    description:
      "Product certification available upon request. Our acacia gum products meet Halal requirements for Muslim consumers.",
    status: "Available",
  },
  {
    icon: FileCheck,
    name: "Kosher Certification",
    description:
      "Product certification available upon request. Products meet Kosher dietary requirements and are suitable for Jewish consumers.",
    status: "Available",
  },
  {
    icon: Leaf,
    name: "Non-GMO Verified",
    description:
      "Our acacia gum is 100% natural and non-GMO verified. Harvested from wild acacia trees with no genetic modification.",
    status: "Verified",
  },
  {
    icon: FileText,
    name: "COA/SDS Documentation",
    description:
      "Certificate of Analysis and Safety Data Sheets available for every batch. Request documentation for your specific requirements.",
    status: "On Request",
  },
  {
    icon: MapPin,
    name: "Full Traceability",
    description:
      "Complete traceability from source to delivery. Every batch can be traced back to its origin in Sudan.",
    status: "Standard",
  },
];

const qualityPoints = [
  "Rigorous incoming material inspection",
  "In-process quality monitoring",
  "Finished product testing",
  "Third-party laboratory verification",
  "Continuous improvement programs",
  "Staff training and certification",
];

export default function Quality() {
  return (
    <>
      <Helmet>
        <title>Quality & Certifications | HACCP, ISO, Halal, Kosher | GumDirect</title>
        <meta
          name="description"
          content="GumDirect quality standards and certifications. HACCP certified, ISO 22000, Halal, Kosher, Non-GMO verified. Full traceability and COA available."
        />
      </Helmet>

      <Layout>
        {/* Hero */}
        <section className="pt-32 pb-16 gradient-primary text-primary-foreground">
          <div className="container-wide text-center">
            <ScrollReveal>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6">
                Quality & Certifications
              </h1>
              <p className="text-xl text-primary-foreground/80 max-w-3xl mx-auto">
                Committed to the highest standards of quality, safety, and compliance
                throughout our supply chain.
              </p>
            </ScrollReveal>
          </div>
        </section>

        {/* Certifications */}
        <Section variant="default">
          <SectionHeader
            title="Our Certifications"
            subtitle="Industry-recognized certifications ensuring product quality and safety"
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {certifications.map((cert, index) => (
              <ScrollReveal key={cert.name} delay={index * 0.05}>
                <div className="h-full bg-card rounded-2xl border border-border p-6 hover:border-primary/20 transition-all duration-300 card-hover">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-12 h-12 rounded-lg gradient-primary flex items-center justify-center flex-shrink-0">
                      <cert.icon className="w-6 h-6 text-primary-foreground" />
                    </div>
                    <div>
                      <h3 className="font-display font-semibold text-lg">
                        {cert.name}
                      </h3>
                      <span className="inline-block px-2 py-0.5 rounded-full bg-accent/10 text-accent text-xs font-medium mt-1">
                        {cert.status}
                      </span>
                    </div>
                  </div>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {cert.description}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </Section>

        {/* Quality Assurance */}
        <Section variant="muted">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <ScrollReveal direction="left">
              <SectionHeader
                title="Quality Assurance"
                subtitle="Our comprehensive quality management system ensures consistent product excellence"
                align="left"
              />
              <div className="space-y-4">
                {qualityPoints.map((point, index) => (
                  <div key={point} className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                    <span className="text-foreground">{point}</span>
                  </div>
                ))}
              </div>
            </ScrollReveal>

            <ScrollReveal direction="right">
              <div className="bg-card rounded-2xl border border-border p-8">
                <h3 className="font-display font-semibold text-xl mb-4">
                  Request Documentation
                </h3>
                <p className="text-muted-foreground mb-6">
                  Need COA, SDS, or certification documents? Contact us with your
                  specific requirements and we'll provide the necessary documentation.
                </p>
                <Button variant="default" asChild>
                  <Link to="/contact?type=coa">
                    Request COA/SDS
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </Button>
              </div>
            </ScrollReveal>
          </div>
        </Section>

        {/* CTA */}
        <Section variant="accent">
          <div className="text-center max-w-2xl mx-auto">
            <ScrollReveal>
              <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
                Questions About Quality?
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Our team is ready to answer your quality and compliance questions.
              </p>
              <Button size="lg" variant="default" asChild>
                <Link to="/contact">
                  Contact Us
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </Button>
            </ScrollReveal>
          </div>
        </Section>
      </Layout>
    </>
  );
}
