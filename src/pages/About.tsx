import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { Button } from "@/components/ui/button";
import { ArrowRight, Globe, Users, TrendingUp, Award, Target, Heart } from "lucide-react";

const values = [
  {
    icon: Award,
    title: "Quality First",
    description: "We never compromise on quality. Every batch meets our rigorous standards.",
  },
  {
    icon: Users,
    title: "Customer Partnership",
    description: "Long-term relationships built on trust, understanding, and mutual growth.",
  },
  {
    icon: Globe,
    title: "Sustainable Sourcing",
    description: "Direct sourcing supports local communities while ensuring traceability.",
  },
  {
    icon: TrendingUp,
    title: "Continuous Improvement",
    description: "Constant investment in processes, facilities, and our team.",
  },
  {
    icon: Target,
    title: "Precision",
    description: "Meticulous attention to specifications and customer requirements.",
  },
  {
    icon: Heart,
    title: "Integrity",
    description: "Transparent, honest dealings in every business relationship.",
  },
];

const stats = [
  { value: "15+", label: "Years Experience" },
  { value: "25+", label: "Countries Served" },
  { value: "500+", label: "Tonnes Annually" },
  { value: "98%", label: "Customer Retention" },
];

const timeline = [
  { year: "2008", event: "Founded in London with a focus on quality gum arabic supply" },
  { year: "2012", event: "Expanded to serve 10+ countries across Europe" },
  { year: "2016", event: "Achieved HACCP and ISO 22000 certification" },
  { year: "2020", event: "Opened UK warehouse for faster domestic delivery" },
  { year: "2024", event: "Now serving 25+ countries with 500+ tonnes annually" },
];

export default function About() {
  return (
    <>
      <Helmet>
        <title>About GumDirect | Premium Gum Arabic Supplier UK</title>
        <meta
          name="description"
          content="GumDirect is a UK-based supplier of premium spray-dried acacia gum. Direct from Sudan, processed to global food standards."
        />
      </Helmet>

      <Layout>
        {/* Hero */}
        <section className="relative pt-32 pb-20 lg:pb-32 overflow-hidden">
          <div className="absolute inset-0 gradient-hero" />
          <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full bg-accent/15 blur-[150px]" />
          
          <div className="relative container-wide">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <ScrollReveal>
                  <span className="inline-block text-accent font-semibold text-sm uppercase tracking-widest mb-6">
                    About Us
                  </span>
                </ScrollReveal>
                <ScrollReveal delay={0.1}>
                  <h1 className="text-display-lg font-display font-bold text-primary-foreground mb-6">
                    Your trusted partner for premium gum arabic
                  </h1>
                </ScrollReveal>
                <ScrollReveal delay={0.2}>
                  <p className="text-xl text-primary-foreground/70 leading-relaxed">
                    We connect Sudan's finest acacia gum with manufacturers worldwide, 
                    delivering quality, reliability, and expertise.
                  </p>
                </ScrollReveal>
              </div>

              <ScrollReveal direction="right" delay={0.2}>
                <div className="grid grid-cols-2 gap-4">
                  {stats.map((stat, index) => (
                    <div
                      key={stat.label}
                      className="bg-primary-foreground/10 backdrop-blur-sm rounded-2xl p-6 border border-primary-foreground/20 text-center"
                    >
                      <span className="block text-4xl lg:text-5xl font-display font-bold text-accent mb-2">
                        {stat.value}
                      </span>
                      <span className="text-primary-foreground/60 text-sm uppercase tracking-wider">
                        {stat.label}
                      </span>
                    </div>
                  ))}
                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>

        {/* Story */}
        <section className="relative py-24 md:py-32 overflow-hidden">
          <div className="absolute inset-0 gradient-mesh" />
          
          <div className="relative container-wide">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <ScrollReveal>
                  <span className="text-accent font-semibold text-sm uppercase tracking-widest mb-4 block">
                    Our Story
                  </span>
                </ScrollReveal>
                <ScrollReveal delay={0.1}>
                  <h2 className="text-display-sm font-display font-bold text-foreground mb-8">
                    From Sudan to the world
                  </h2>
                </ScrollReveal>
                <div className="space-y-6 text-muted-foreground leading-relaxed">
                  <ScrollReveal delay={0.2}>
                    <p>
                      GumDirect was founded with a simple mission: to provide the highest 
                      quality acacia gum directly from its source in Sudan to manufacturers 
                      around the world.
                    </p>
                  </ScrollReveal>
                  <ScrollReveal delay={0.3}>
                    <p>
                      With over 15 years of experience in the gum arabic industry, we've 
                      built strong relationships with Sudanese suppliers and developed 
                      rigorous quality control processes to ensure consistent excellence.
                    </p>
                  </ScrollReveal>
                  <ScrollReveal delay={0.4}>
                    <p>
                      Our UK-based operations allow us to offer fast, reliable delivery 
                      across Europe while maintaining the personal service and technical 
                      expertise that sets us apart.
                    </p>
                  </ScrollReveal>
                </div>
              </div>

              <ScrollReveal direction="right">
                <div className="relative">
                  <div className="bg-card rounded-3xl border border-border p-8">
                    <h3 className="font-display font-bold text-xl mb-8">Our Journey</h3>
                    <div className="space-y-6">
                      {timeline.map((item, index) => (
                        <div key={item.year} className="flex gap-4">
                          <div className="flex flex-col items-center">
                            <div className="w-12 h-12 rounded-full gradient-primary flex items-center justify-center text-primary-foreground font-display font-bold text-sm">
                              {item.year.slice(-2)}
                            </div>
                            {index < timeline.length - 1 && (
                              <div className="w-px h-full bg-border mt-2" />
                            )}
                          </div>
                          <div className="pb-6">
                            <span className="text-accent font-semibold">{item.year}</span>
                            <p className="text-muted-foreground mt-1">{item.event}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="absolute -bottom-6 -left-6 w-32 h-32 rounded-2xl bg-accent/20 -z-10" />
                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="py-24 md:py-32 bg-foreground">
          <div className="container-wide">
            <div className="max-w-2xl mb-16">
              <ScrollReveal>
                <span className="text-accent font-semibold text-sm uppercase tracking-widest mb-4 block">
                  Our Values
                </span>
              </ScrollReveal>
              <ScrollReveal delay={0.1}>
                <h2 className="text-display-sm font-display font-bold text-background">
                  The principles that guide everything we do
                </h2>
              </ScrollReveal>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {values.map((value, index) => (
                <ScrollReveal key={value.title} delay={index * 0.08}>
                  <div className="group h-full bg-background/5 rounded-3xl border border-background/10 p-8 hover:bg-background/10 transition-all duration-500">
                    <div className="w-14 h-14 rounded-2xl gradient-accent flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500">
                      <value.icon className="w-7 h-7 text-accent-foreground" />
                    </div>
                    <h3 className="font-display font-bold text-xl text-background mb-3">
                      {value.title}
                    </h3>
                    <p className="text-background/60 leading-relaxed">
                      {value.description}
                    </p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="relative py-24 md:py-32 overflow-hidden">
          <div className="absolute inset-0 gradient-mesh" />
          <div className="relative container-wide text-center">
            <ScrollReveal>
              <h2 className="text-display-sm font-display font-bold text-foreground mb-6">
                Ready to work with us?
              </h2>
              <p className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto">
                Get in touch to discuss your requirements or request a sample.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Button size="xl" variant="accent" asChild>
                  <Link to="/contact?type=sample">Order Sample</Link>
                </Button>
                <Button size="xl" variant="default" asChild>
                  <Link to="/contact">
                    Contact Us
                    <ArrowRight className="w-5 h-5" />
                  </Link>
                </Button>
              </div>
            </ScrollReveal>
          </div>
        </section>
      </Layout>
    </>
  );
}
