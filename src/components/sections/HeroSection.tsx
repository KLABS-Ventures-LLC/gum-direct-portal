import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { ArrowRight } from "lucide-react";

export function HeroSection() {
  return (
    <section className="relative min-h-[80vh] flex items-center overflow-hidden">
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover">

        <source src="/videos/hero-bg.mp4" type="video/mp4" />
      </video>

      {/* Overlay */}
      <div className="absolute inset-0" style={{ backgroundColor: 'rgba(255, 253, 248, 0.55)' }} />

      <div className="container-wide relative z-10">
        <div className="max-w-5xl mx-auto text-center pt-[137px] pb-[64px]">
          <ScrollReveal>
            <span className="inline-block font-semibold text-sm uppercase tracking-widest mb-6 text-primary">UK PROCESSED • BATCH TESTED • FULL TRACEABILITY

            </span>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
             <h1 className="md:text-4xl font-display font-bold text-primary mb-6 lg:text-8xl text-6xl">
               Spray-Dried{" "}
               <span className="text-accent">Acacia Senegal</span> (E414)
             </h1>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <p className="text-lg md:text-xl text-primary/80 mb-10 max-w-2xl mx-auto leading-relaxed">
              High-purity spray-dried gum arabic. Food-grade certified with
              full traceability and batch testing.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={0.3}>
            <div className="flex flex-wrap justify-center gap-4 mb-16">
              <Button variant="accent" size="xl" asChild>
                <Link to="/contact?type=quote">
                  Request Quote
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </Button>
              <Button variant="outline" size="xl" className="border-primary text-primary hover:bg-primary/10 bg-transparent" asChild>
                <Link to="/contact">Download Technical Data Sheet</Link>
              </Button>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.4}>
            <div className="flex flex-wrap justify-center items-center gap-x-10 gap-y-4 pt-8 border-t border-primary/20">
              {["99%+ Purity", "UK Processed", "Batch Tested"].map((item) =>
              <div key={item} className="flex items-center gap-2 text-primary text-lg font-medium">
                  <span className="text-secondary font-bold">✔</span>
                  <span>{item}</span>
                </div>
              )}
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>);

}