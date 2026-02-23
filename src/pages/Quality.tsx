import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
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
    description: "Systematic preventive approach to food safety from biological, chemical, and physical hazards.",
    status: "Certified",
    highlight: true,
  },
  {
    icon: Award,
    name: "ISO 22000",
    description: "International standard for food safety management systems.",
    status: "Certified",
    highlight: true,
  },
  {
    icon: FileCheck,
    name: "Halal Certification",
    description: "Product certification available upon request for Muslim consumers.",
    status: "Available",
    highlight: false,
  },
  {
    icon: FileCheck,
    name: "Kosher Certification",
    description: "Products meet Kosher dietary requirements.",
    status: "Available",
    highlight: false,
  },
  {
    icon: Leaf,
    name: "Non-GMO Verified",
    description: "100% natural, harvested from wild acacia trees with no genetic modification.",
    status: "Verified",
    highlight: false,
  },
  {
    icon: FileText,
    name: "COA/SDS Documentation",
    description: "Certificate of Analysis and Safety Data Sheets for every batch.",
    status: "On Request",
    highlight: false,
  },
  {
    icon: MapPin,
    name: "Full Traceability",
    description: "Complete traceability from source in Sudan to delivery.",
    status: "Standard",
    highlight: false,
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
        <section className="relative pt-32 pb-20 overflow-hidden">
          
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-accent/5 blur-[180px]" />
          
          <div className="relative container-wide">
            <div className="max-w-3xl">
              <ScrollReveal>
                <span className="inline-block text-accent font-semibold text-sm uppercase tracking-widest mb-6">
                  Quality & Certifications
                </span>
              </ScrollReveal>
              <ScrollReveal delay={0.1}>
                <h1 className="text-display-lg font-display font-bold text-primary mb-6">
                  Committed to excellence
                </h1>
              </ScrollReveal>
              <ScrollReveal delay={0.2}>
                <p className="text-xl lg:text-2xl text-foreground/70 leading-relaxed">
                  The highest standards of quality, safety, and compliance throughout 
                  our entire supply chain.
                </p>
              </ScrollReveal>
            </div>
          </div>
        </section>

        {/* Certifications */}
        <section className="relative py-24 md:py-32 overflow-hidden bg-secondary">
          
          <div className="relative container-wide">
            <div className="max-w-2xl mb-16">
              <ScrollReveal>
                <span className="text-accent font-semibold text-sm uppercase tracking-widest mb-4 block">
                  Certifications
                </span>
              </ScrollReveal>
              <ScrollReveal delay={0.1}>
                <h2 className="text-display-md font-display font-bold text-foreground">
                  Industry-recognized standards
                </h2>
              </ScrollReveal>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {certifications.map((cert, index) => (
                <ScrollReveal key={cert.name} delay={index * 0.05}>
                  <div className={`group h-full rounded-3xl p-8 transition-all duration-500 ${
                    cert.highlight 
                      ? "bg-gradient-to-br from-accent/10 via-accent/5 to-transparent border-2 border-accent/30 hover:border-accent/50" 
                      : "bg-card border border-border hover:border-accent/20"
                  } hover:shadow-elevated`}>
                    <div className="flex items-start gap-4 mb-4">
                      <div className={`w-14 h-14 rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-500 ${
                        cert.highlight ? "gradient-accent" : "gradient-primary"
                      }`}>
                        <cert.icon className={`w-7 h-7 ${cert.highlight ? "text-accent-foreground" : "text-primary-foreground"}`} />
                      </div>
                      <div>
                        <h3 className="font-display font-bold text-lg text-foreground">
                          {cert.name}
                        </h3>
                        <span className={`inline-block px-3 py-1 rounded-full text-xs font-semibold mt-2 ${
                          cert.highlight 
                            ? "bg-accent/20 text-accent" 
                            : "bg-secondary text-secondary-foreground"
                        }`}>
                          {cert.status}
                        </span>
                      </div>
                    </div>
                    <p className="text-muted-foreground leading-relaxed">
                      {cert.description}
                    </p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* Quality Assurance */}
        <section className="py-24 md:py-32 bg-foreground">
          <div className="container-wide">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <ScrollReveal>
                  <span className="text-accent font-semibold text-sm uppercase tracking-widest mb-4 block">
                    Quality Assurance
                  </span>
                </ScrollReveal>
                <ScrollReveal delay={0.1}>
                  <h2 className="text-display-md font-display font-bold text-background mb-8">
                    Comprehensive quality management
                  </h2>
                </ScrollReveal>
                
                <div className="space-y-5">
                  {qualityPoints.map((point, index) => (
                    <ScrollReveal key={point} delay={index * 0.08}>
                      <div className="flex items-center gap-4">
                        <div className="w-10 h-10 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0">
                          <CheckCircle className="w-5 h-5 text-accent" />
                        </div>
                        <span className="text-background/80 text-lg">{point}</span>
                      </div>
                    </ScrollReveal>
                  ))}
                </div>
              </div>

              <ScrollReveal direction="right">
                <div className="bg-background/5 rounded-3xl p-10 border border-background/10">
                  <h3 className="text-2xl font-display font-bold text-background mb-4">
                    Request Documentation
                  </h3>
                  <p className="text-background/60 mb-8 leading-relaxed">
                    Need COA, SDS, or certification documents? Contact us with your 
                    specific requirements and we'll provide the necessary documentation.
                  </p>
                  <Button variant="hero" size="lg" asChild>
                    <Link to="/contact?type=coa">
                      Request COA/SDS
                      <ArrowRight className="w-5 h-5" />
                    </Link>
                  </Button>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
}
