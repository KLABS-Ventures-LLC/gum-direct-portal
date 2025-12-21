import { Link } from "react-router-dom";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { Section } from "@/components/ui/section";
import { Button } from "@/components/ui/button";
import { ArrowRight, Package, FileText } from "lucide-react";

export function CTASection() {
  return (
    <Section variant="accent" className="relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-accent/10 blur-3xl -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-64 h-64 rounded-full bg-primary/5 blur-3xl translate-y-1/2 -translate-x-1/2" />

      <div className="relative text-center max-w-3xl mx-auto">
        <ScrollReveal>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-foreground mb-6">
            Ready to Get Started?
          </h2>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <p className="text-lg md:text-xl text-muted-foreground mb-10">
            Request a sample to test our premium acacia gum, or get a quote for
            your bulk requirements. Our team is here to help.
          </p>
        </ScrollReveal>

        <ScrollReveal delay={0.2}>
          <div className="flex flex-wrap justify-center gap-4">
            <Button size="xl" variant="accent" asChild>
              <Link to="/contact?type=sample">
                <Package className="w-5 h-5" />
                Order Sample (1 kg)
              </Link>
            </Button>
            <Button size="xl" variant="default" asChild>
              <Link to="/contact?type=quote">
                Request Bulk Quote
                <ArrowRight className="w-5 h-5" />
              </Link>
            </Button>
            <Button size="lg" variant="ghost" asChild>
              <a href="/product-sheet.pdf" download>
                <FileText className="w-5 h-5" />
                Download Spec Sheet
              </a>
            </Button>
          </div>
        </ScrollReveal>
      </div>
    </Section>
  );
}
