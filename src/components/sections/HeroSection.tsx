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
      <div className="absolute inset-0 bg-foreground/50" />

      <div className="container-wide relative z-10">
        <div className="max-w-5xl mx-auto text-center pt-[137px] pb-[64px]">
          <ScrollReveal>
            <span className="inline-block text-secondary font-semibold text-sm uppercase tracking-widest mb-6">
              UK-Based Supply • Global Standards
            </span>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <h1 className="md:text-4xl font-display font-bold text-background mb-6 lg:text-8xl text-6xl">
              Premium{" "}
              <span className="text-accent">Acacia Gum</span>
              <br />
              Direct From Sudan
            </h1>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <p className="text-lg md:text-xl text-background/80 mb-10 max-w-2xl mx-auto leading-relaxed">
              High-purity spray-dried gum arabic. Food-grade certified with
              full traceability and batch testing.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={0.3}>
            <div className="flex flex-wrap justify-center gap-4 mb-16">
              <Button variant="accent" size="xl" asChild>
                <Link to="/contact?type=sample">
                  Order Sample
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </Button>
              <Button variant="outline" size="xl" className="border-background/30 text-background hover:bg-background/10" asChild>
                <Link to="/contact?type=quote">Request Quote</Link>
              </Button>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.4}>
            <div className="flex flex-wrap justify-center items-center gap-x-12 gap-y-4 pt-8 border-t border-background/20">
              {[
              { value: "99%+", label: "Purity" },
              { value: "25+", label: "Countries" },
              { value: "500t", label: "Annual Capacity" }].
              map((stat) =>
              <div key={stat.label} className="text-center">
                  <div className="text-3xl font-display font-bold text-secondary">{stat.value}</div>
                  <div className="text-sm text-background/70 uppercase tracking-wider">{stat.label}</div>
                </div>
              )}
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>);

}