import { Helmet } from "react-helmet-async";
import { useState } from "react";
import { Layout } from "@/components/layout/Layout";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { CheckCircle, Lock, Package, ArrowRight } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const whatYouReceive = [
  "1kg spray-dried Acacia Senegal",
  "Packed in sealed laboratory-grade bag",
  "Batch identification number",
  "Certificate of Analysis (COA)",
  "Technical Data Sheet (TDS)",
];

const dispatchInfo = [
  "Dispatched within 2–3 working days",
  "UK delivery included in price",
  "International shipping available upon request",
  "Tracking information provided after dispatch",
];

export default function OrderSample() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const [formData, setFormData] = useState({
    companyName: "",
    contactName: "",
    email: "",
    phone: "",
    deliveryAddress: "",
    application: "",
  });

  const handleChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Placeholder — will be linked to Stripe
      await new Promise((resolve) => setTimeout(resolve, 1000));
      setIsSubmitted(true);
      toast({
        title: "Order Received",
        description: "You will be redirected to secure payment shortly.",
      });
    } catch {
      toast({
        title: "Error",
        description: "Something went wrong. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <>
        <Helmet>
          <title>Order Confirmed | GumDirect</title>
        </Helmet>
        <Layout>
          <section className="min-h-screen flex items-center justify-center pt-20">
            <div className="container-wide text-center py-32">
              <ScrollReveal>
                <div className="w-24 h-24 mx-auto rounded-full gradient-primary flex items-center justify-center mb-8 shadow-elevated">
                  <CheckCircle className="w-12 h-12 text-primary-foreground" />
                </div>
                <h1 className="text-display-md font-display font-bold mb-4">
                  Thank You!
                </h1>
                <p className="text-xl text-muted-foreground mb-10 max-w-md mx-auto">
                  Your order details have been received. Stripe payment integration coming soon.
                </p>
                <Button variant="default" size="lg" onClick={() => setIsSubmitted(false)}>
                  Place Another Order
                  <ArrowRight className="w-5 h-5" />
                </Button>
              </ScrollReveal>
            </div>
          </section>
        </Layout>
      </>
    );
  }

  return (
    <>
      <Helmet>
        <title>Order Technical Evaluation Sample | GumDirect</title>
        <meta
          name="description"
          content="Order a 1kg technical evaluation sample of spray-dried Acacia Senegal (E414) for £34.99 with UK delivery included."
        />
      </Helmet>

      <Layout>
        {/* Header */}
        <section className="relative pt-32 pb-16 overflow-hidden">
          <div className="absolute top-1/3 right-0 w-[600px] h-[600px] rounded-full bg-accent/5 blur-[120px]" />
          <div className="relative container-wide">
            <div className="max-w-3xl">
              <ScrollReveal>
                <span className="inline-block text-accent font-semibold text-sm uppercase tracking-widest mb-4">
                  Technical Evaluation Sample
                </span>
              </ScrollReveal>
              <ScrollReveal delay={0.1}>
                <h1 className="text-display-lg font-display font-bold text-primary mb-2">
                  Spray-Dried Acacia Senegal{" "}
                  <span className="text-accent">(E414)</span>
                </h1>
              </ScrollReveal>
              <ScrollReveal delay={0.15}>
                <p className="text-xl text-foreground/70 mt-4 leading-relaxed">
                  1kg laboratory sample for formulation and technical evaluation.
                  <br />
                  UK delivery included.
                </p>
              </ScrollReveal>
              <ScrollReveal delay={0.2}>
                <div className="mt-8 flex flex-wrap items-baseline gap-4">
                  <span className="text-5xl font-display font-bold text-primary">£34.99</span>
                  <span className="text-muted-foreground text-lg">(Incl. UK delivery)</span>
                </div>
                <div className="mt-4 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/20">
                  <Package className="w-4 h-4 text-accent" />
                  <span className="text-sm font-medium text-foreground">
                    Next Production Batch: Early May 2026 — Samples will be dispatched from this batch.
                  </span>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>

        {/* Info Sections + Form */}
        <section className="relative pb-16 md:pb-24 overflow-hidden" style={{ backgroundColor: '#FFFDF8' }}>
          <div className="relative container-wide">
            <div className="grid lg:grid-cols-12 gap-12 lg:gap-16">
              {/* Left: Info */}
              <div className="lg:col-span-5 space-y-10">
                {/* What You Will Receive */}
                <ScrollReveal>
                  <div className="p-6 rounded-2xl bg-background border border-border">
                    <h3 className="font-display font-bold text-lg text-primary mb-4">What You Will Receive</h3>
                    <ul className="space-y-3">
                      {whatYouReceive.map((item) => (
                        <li key={item} className="flex items-start gap-3">
                          <CheckCircle className="w-4 h-4 text-accent mt-1 flex-shrink-0" />
                          <span className="text-foreground/80 text-sm">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </ScrollReveal>

                {/* Intended Use */}
                <ScrollReveal delay={0.1}>
                  <div className="p-6 rounded-2xl bg-background border border-border">
                    <h3 className="font-display font-bold text-lg text-primary mb-3">Intended Use</h3>
                    <p className="text-foreground/70 text-sm leading-relaxed">
                      This sample is supplied strictly for laboratory, technical evaluation, and formulation testing purposes.
                    </p>
                    <p className="text-foreground/70 text-sm mt-2 font-medium">Not intended for resale.</p>
                  </div>
                </ScrollReveal>

                {/* Dispatch & Delivery */}
                <ScrollReveal delay={0.2}>
                  <div className="p-6 rounded-2xl bg-background border border-border">
                    <h3 className="font-display font-bold text-lg text-primary mb-4">Dispatch & Delivery</h3>
                    <ul className="space-y-3">
                      {dispatchInfo.map((item) => (
                        <li key={item} className="flex items-start gap-3">
                          <CheckCircle className="w-4 h-4 text-accent mt-1 flex-shrink-0" />
                          <span className="text-foreground/80 text-sm">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </ScrollReveal>
              </div>

              {/* Right: Form */}
              <div className="lg:col-span-7">
                <ScrollReveal direction="right">
                  <form onSubmit={handleSubmit} className="bg-background rounded-3xl border border-border p-8 lg:p-10 shadow-card">
                    <h3 className="font-display font-bold text-xl text-primary mb-6">Order Details</h3>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="companyName" className="text-sm font-medium">Company Name *</Label>
                        <Input
                          id="companyName"
                          required
                          placeholder="Your Company Ltd"
                          value={formData.companyName}
                          onChange={(e) => handleChange("companyName", e.target.value)}
                          className="h-12 rounded-xl border-border bg-background"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="contactName" className="text-sm font-medium">Contact Name *</Label>
                        <Input
                          id="contactName"
                          required
                          placeholder="John Smith"
                          value={formData.contactName}
                          onChange={(e) => handleChange("contactName", e.target.value)}
                          className="h-12 rounded-xl border-border bg-background"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email" className="text-sm font-medium">Email *</Label>
                        <Input
                          id="email"
                          type="email"
                          required
                          placeholder="john@company.com"
                          value={formData.email}
                          onChange={(e) => handleChange("email", e.target.value)}
                          className="h-12 rounded-xl border-border bg-background"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="phone" className="text-sm font-medium">Phone</Label>
                        <Input
                          id="phone"
                          type="tel"
                          placeholder="+44 123 456 7890"
                          value={formData.phone}
                          onChange={(e) => handleChange("phone", e.target.value)}
                          className="h-12 rounded-xl border-border bg-background"
                        />
                      </div>
                      <div className="space-y-2 md:col-span-2">
                        <Label htmlFor="deliveryAddress" className="text-sm font-medium">Delivery Address *</Label>
                        <Textarea
                          id="deliveryAddress"
                          required
                          rows={3}
                          placeholder="Full delivery address including postcode"
                          value={formData.deliveryAddress}
                          onChange={(e) => handleChange("deliveryAddress", e.target.value)}
                          className="rounded-xl border-border bg-background resize-none"
                        />
                      </div>
                      <div className="space-y-2 md:col-span-2">
                        <Label htmlFor="application" className="text-sm font-medium">Application</Label>
                        <Input
                          id="application"
                          placeholder="e.g., Beverage emulsion, confectionery coating"
                          value={formData.application}
                          onChange={(e) => handleChange("application", e.target.value)}
                          className="h-12 rounded-xl border-border bg-background"
                        />
                      </div>
                    </div>

                    <Button
                      type="submit"
                      size="xl"
                      variant="accent"
                      className="mt-8 w-full"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        "Processing..."
                      ) : (
                        <>
                          <Lock className="w-5 h-5" />
                          Proceed to Secure Payment
                        </>
                      )}
                    </Button>

                    <p className="text-xs text-muted-foreground text-center mt-4 leading-relaxed">
                      All commercial supply is subject to formal quotation and written confirmation.
                    </p>
                  </form>
                </ScrollReveal>
              </div>
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
}
