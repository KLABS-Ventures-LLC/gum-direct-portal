import { useParams, Navigate, Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { Layout } from "@/components/layout/Layout";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { Button } from "@/components/ui/button";
import { applicationDetails } from "@/data/applicationDetails";
import {
  ArrowRight,
  AlertTriangle,
  CheckCircle2,
  FlaskConical,
  FileCheck,
  ShieldCheck,
} from "lucide-react";

export default function ApplicationDetail() {
  const { id } = useParams<{ id: string }>();
  const data = id ? applicationDetails[id] : undefined;

  if (!data) {
    return <Navigate to="/applications" replace />;
  }

  return (
    <>
      <Helmet>
        <title>{data.hero.title} | GumDirect</title>
        <meta name="description" content={data.hero.subtitle} />
      </Helmet>

      <Layout>
        {/* 1 — Hero */}
        <section className="relative pt-32 pb-20 overflow-hidden">
          <div className="absolute top-20 right-0 w-[600px] h-[600px] rounded-full bg-accent/5 blur-[150px]" />
          <div className="relative container-wide">
            <div className="max-w-3xl">
              <ScrollReveal>
                <span className="inline-block text-accent font-semibold text-sm uppercase tracking-widest mb-6">
                  {data.hero.label}
                </span>
              </ScrollReveal>
              <ScrollReveal delay={0.1}>
                <h1 className="text-display-lg font-display font-bold text-primary mb-6">
                  {data.hero.title}
                </h1>
              </ScrollReveal>
              <ScrollReveal delay={0.15}>
                <p className="text-xl lg:text-2xl text-foreground/70 leading-relaxed mb-4">
                  {data.hero.subtitle}
                </p>
              </ScrollReveal>
              <ScrollReveal delay={0.2}>
                <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                  {data.hero.description}
                </p>
              </ScrollReveal>
              <ScrollReveal delay={0.25}>
                <Button variant="accent" size="xl" asChild>
                  <Link to="/contact?type=quote">
                    Request Quote
                    <ArrowRight className="w-5 h-5" />
                  </Link>
                </Button>
              </ScrollReveal>
            </div>
          </div>
        </section>

        {/* 2 — Industry Challenges */}
        <section className="section-padding overflow-hidden" style={{ backgroundColor: "#FFFDF8" }}>
          <div className="container-wide">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
              <ScrollReveal direction="left">
                <div className="flex items-center gap-3 mb-4">
                  <AlertTriangle className="w-6 h-6 text-accent" />
                  <h2 className="text-display-sm font-display font-bold text-primary">
                    {data.challenges.heading}
                  </h2>
                </div>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  {data.challenges.intro}
                </p>
              </ScrollReveal>

              <ScrollReveal direction="right">
                <ul className="space-y-4 mb-6">
                  {data.challenges.items.map((item) => (
                    <li key={item} className="flex items-start gap-3 text-foreground">
                      <span className="mt-1.5 w-2 h-2 rounded-full bg-accent flex-shrink-0" />
                      <span className="leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
                <p className="text-muted-foreground italic leading-relaxed">
                  {data.challenges.closing}
                </p>
              </ScrollReveal>
            </div>
          </div>
        </section>

        {/* 3 — Technical Solution */}
        <section className="section-padding overflow-hidden bg-background">
          <div className="container-wide">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
              <ScrollReveal direction="left">
                <div className="flex items-start gap-3 mb-4">
                  <FlaskConical className="w-6 h-6 text-primary mt-1.5 flex-shrink-0" />
                  <h2 className="text-display-sm font-display font-bold text-primary">
                    {data.solution.heading}
                  </h2>
                </div>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  {data.solution.intro}
                </p>
              </ScrollReveal>

              <ScrollReveal direction="right">
                <ul className="space-y-4 mb-6">
                  {data.solution.items.map((item) => (
                    <li key={item} className="flex items-start gap-3 text-foreground">
                      <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                      <span className="leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
                <p className="text-muted-foreground italic leading-relaxed">
                  {data.solution.closing}
                </p>
              </ScrollReveal>
            </div>
          </div>
        </section>

        {/* 4 — Technical Suitability */}
        <section className="section-padding overflow-hidden" style={{ backgroundColor: "#FFFDF8" }}>
          <div className="container-wide">
            <ScrollReveal>
              <div className="flex items-center gap-3 mb-4">
                <ShieldCheck className="w-6 h-6 text-accent" />
                <h2 className="text-display-sm font-display font-bold text-primary">
                  {data.technical.heading}
                </h2>
              </div>
              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                {data.technical.intro}
              </p>
            </ScrollReveal>

            <div className="grid md:grid-cols-2 gap-10">
              <ScrollReveal delay={0.1}>
                <ul className="space-y-3">
                  {data.technical.specs.map((spec) => (
                    <li key={spec} className="flex items-start gap-3 text-foreground">
                      <CheckCircle2 className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                      <span className="leading-relaxed">{spec}</span>
                    </li>
                  ))}
                </ul>
              </ScrollReveal>

              <ScrollReveal delay={0.15}>
                <p className="text-sm font-semibold text-primary uppercase tracking-wider mb-4">
                  Suitable for
                </p>
                <div className="flex flex-wrap gap-2">
                  {data.technical.suitableFor.map((tag) => (
                    <span
                      key={tag}
                      className="px-4 py-2 rounded-full bg-background text-foreground text-sm border border-border"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>

        {/* 5 — Compliance & Documentation */}
        <section className="section-padding overflow-hidden bg-background">
          <div className="container-wide">
            <ScrollReveal>
              <div className="flex items-center gap-3 mb-4">
                <FileCheck className="w-6 h-6 text-primary" />
                <h2 className="text-display-sm font-display font-bold text-primary">
                  {data.compliance.heading}
                </h2>
              </div>
              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                {data.compliance.intro}
              </p>
            </ScrollReveal>

            <ScrollReveal delay={0.1}>
              <ul className="space-y-4 mb-6 max-w-2xl">
                {data.compliance.items.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-foreground">
                    <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
              <p className="text-muted-foreground italic leading-relaxed">
                {data.compliance.closing}
              </p>
            </ScrollReveal>
          </div>
        </section>

        {/* 6 — Final CTA */}
        <section className="section-padding overflow-hidden" style={{ backgroundColor: "#FFFDF8" }}>
          <div className="container-wide text-center">
            <ScrollReveal>
              <h2 className="text-display-md font-display font-bold text-primary mb-6">
                {data.cta.heading}
              </h2>
              <p className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto">
                {data.cta.description}
              </p>
              <Button variant="accent" size="xl" asChild>
                <Link to="/contact?type=quote">
                  Request Quote
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </Button>
            </ScrollReveal>
          </div>
        </section>
      </Layout>
    </>
  );
}
