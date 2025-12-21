import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { Section, SectionHeader } from "@/components/ui/section";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { Button } from "@/components/ui/button";
import { ArrowRight, Globe, Users, TrendingUp, Award } from "lucide-react";

const values = [
  {
    icon: Award,
    title: "Quality First",
    description:
      "We never compromise on quality. Every batch meets our rigorous standards before leaving our facility.",
  },
  {
    icon: Users,
    title: "Customer Partnership",
    description:
      "We build long-term relationships with our customers, understanding their needs and growing together.",
  },
  {
    icon: Globe,
    title: "Sustainable Sourcing",
    description:
      "Direct sourcing from Sudan supports local communities while ensuring product authenticity and traceability.",
  },
  {
    icon: TrendingUp,
    title: "Continuous Improvement",
    description:
      "We constantly invest in our processes, facilities, and team to deliver better products and service.",
  },
];

const stats = [
  { value: "15+", label: "Years Experience" },
  { value: "25+", label: "Countries Served" },
  { value: "500+", label: "Tonnes Annually" },
  { value: "98%", label: "Customer Retention" },
];

export default function About() {
  return (
    <>
      <Helmet>
        <title>About GumDirect | Premium Gum Arabic Supplier UK</title>
        <meta
          name="description"
          content="GumDirect is a UK-based supplier of premium spray-dried acacia gum. Direct from Sudan, processed to global food standards. Learn about our story and values."
        />
      </Helmet>

      <Layout>
        {/* Hero */}
        <section className="pt-32 pb-16 gradient-primary text-primary-foreground">
          <div className="container-wide">
            <div className="max-w-3xl">
              <ScrollReveal>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6">
                  About GumDirect
                </h1>
                <p className="text-xl text-primary-foreground/80">
                  Your trusted partner for premium gum arabic. We connect Sudan's
                  finest acacia gum with manufacturers worldwide.
                </p>
              </ScrollReveal>
            </div>
          </div>
        </section>

        {/* Story */}
        <Section variant="default">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <ScrollReveal direction="left">
              <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
                Our Story
              </h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  GumDirect was founded with a simple mission: to provide the
                  highest quality acacia gum directly from its source in Sudan to
                  manufacturers around the world.
                </p>
                <p>
                  With over 15 years of experience in the gum arabic industry, we've
                  built strong relationships with Sudanese suppliers and developed
                  rigorous quality control processes to ensure consistent excellence.
                </p>
                <p>
                  Our UK-based operations allow us to offer fast, reliable delivery
                  across Europe while maintaining the personal service and technical
                  expertise that sets us apart.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="right">
              <div className="grid grid-cols-2 gap-4">
                {stats.map((stat, index) => (
                  <div
                    key={stat.label}
                    className="bg-card rounded-2xl border border-border p-6 text-center card-hover"
                  >
                    <span className="block text-4xl lg:text-5xl font-display font-bold text-primary mb-2">
                      {stat.value}
                    </span>
                    <span className="text-muted-foreground text-sm">
                      {stat.label}
                    </span>
                  </div>
                ))}
              </div>
            </ScrollReveal>
          </div>
        </Section>

        {/* Values */}
        <Section variant="muted">
          <SectionHeader
            title="Our Values"
            subtitle="The principles that guide everything we do"
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <ScrollReveal key={value.title} delay={index * 0.1}>
                <div className="h-full bg-card rounded-2xl border border-border p-6 hover:border-primary/20 transition-all duration-300 card-hover">
                  <div className="w-12 h-12 rounded-lg gradient-primary flex items-center justify-center mb-4">
                    <value.icon className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <h3 className="font-display font-semibold text-lg mb-2">
                    {value.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {value.description}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </Section>

        {/* CTA */}
        <Section variant="accent">
          <div className="text-center max-w-2xl mx-auto">
            <ScrollReveal>
              <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
                Ready to Work With Us?
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Get in touch to discuss your requirements or request a sample.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Button size="lg" variant="accent" asChild>
                  <Link to="/contact?type=sample">Order Sample</Link>
                </Button>
                <Button size="lg" variant="default" asChild>
                  <Link to="/contact">
                    Contact Us
                    <ArrowRight className="w-5 h-5" />
                  </Link>
                </Button>
              </div>
            </ScrollReveal>
          </div>
        </Section>
      </Layout>
    </>
  );
}
