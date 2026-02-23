import { Helmet } from "react-helmet-async";
import { useSearchParams } from "react-router-dom";
import { useState } from "react";
import { Layout } from "@/components/layout/Layout";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue } from
"@/components/ui/select";
import { Mail, Phone, MapPin, Send, CheckCircle, Clock, ArrowRight } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const contactInfo = [
{
  icon: Mail,
  label: "Email",
  value: "info@gumdirect.com",
  href: "mailto:info@gumdirect.com"
},
{
  icon: Phone,
  label: "Phone",
  value: "+44 (0) 123 456 7890",
  href: "tel:+441234567890"
},
{
  icon: MapPin,
  label: "Address",
  value: "GumDirect Ltd, London, UK",
  href: null
},
{
  icon: Clock,
  label: "Hours",
  value: "Mon-Fri: 9AM - 5PM GMT",
  href: null
}];


const inquiryTypes = [
{ value: "sample", label: "Order Sample (1 kg)" },
{ value: "quote", label: "Request Bulk Quote" },
{ value: "coa", label: "Request COA/SDS" },
{ value: "datasheet", label: "Request Product Data Sheet" },
{ value: "general", label: "General Inquiry" }];


const products = [
{ value: "senegal", label: "Acacia Senegal (Premium)" },
{ value: "unsure", label: "Not Sure Yet" }];


export default function Contact() {
  const [searchParams] = useSearchParams();
  const { toast } = useToast();
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const defaultType = searchParams.get("type") || "general";
  const defaultProduct = searchParams.get("product") || "";

  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    inquiryType: defaultType,
    product: defaultProduct,
    quantity: "",
    message: ""
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch(
        "https://services.leadconnectorhq.com/hooks/SkSvke1CC1EmduOo6QFL/webhook-trigger/90556b25-a2b6-47c1-aea3-caab2850c8e7",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            name: formData.name,
            company: formData.company,
            email: formData.email,
            phone: formData.phone,
            inquiryType: formData.inquiryType,
            product: formData.product,
            quantity: formData.quantity,
            message: formData.message
          })
        }
      );

      if (!response.ok) {
        throw new Error("Failed to submit");
      }

      setIsSubmitted(true);
      toast({
        title: "Message Sent!",
        description: "We'll get back to you within 24 hours."
      });
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to send message. Please try again.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  if (isSubmitted) {
    return (
      <>
        <Helmet>
          <title>Thank You | GumDirect</title>
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
                  We've received your message and will get back to you within 24 business hours.
                </p>
                <Button variant="default" size="lg" onClick={() => setIsSubmitted(false)}>
                  Send Another Message
                  <ArrowRight className="w-5 h-5" />
                </Button>
              </ScrollReveal>
            </div>
          </section>
        </Layout>
      </>);

  }

  return (
    <>
      <Helmet>
        <title>Contact Us | Get a Quote | GumDirect</title>
        <meta
          name="description"
          content="Contact GumDirect for samples, quotes, or inquiries about our premium acacia gum products." />

      </Helmet>

      <Layout>
        {/* Hero */}
        <section className="relative pt-32 pb-20 overflow-hidden">
          
          <div className="absolute bottom-0 left-1/4 w-[600px] h-[300px] rounded-full bg-accent/5 blur-[120px]" />
          
          <div className="relative container-wide">
            <div className="max-w-2xl">
              <ScrollReveal>
                <span className="inline-block text-accent font-semibold text-sm uppercase tracking-widest mb-6">
                  Contact Us
                </span>
              </ScrollReveal>
              <ScrollReveal delay={0.1}>
                <h1 className="text-display-lg font-display font-bold mb-6 text-primary">
                  Let's talk
                </h1>
              </ScrollReveal>
              <ScrollReveal delay={0.2}>
                <p className="text-xl lg:text-2xl leading-relaxed text-gray-950">
                  Ready to get started? Send us a message and we'll respond within 24 hours.
                </p>
              </ScrollReveal>
            </div>
          </div>
        </section>

        {/* Contact Form & Info */}
        <section className="relative py-24 md:py-32 overflow-hidden bg-secondary">
          
          <div className="relative container-wide">
            <div className="grid lg:grid-cols-12 gap-12 lg:gap-16">
              {/* Contact Info */}
              <div className="lg:col-span-4">
                <ScrollReveal direction="left">
                  <h2 className="text-2xl font-display font-bold mb-8">Get in Touch</h2>
                  
                  <div className="space-y-6 mb-10">
                    {contactInfo.map((info) =>
                    <div key={info.label} className="flex gap-4 group">
                        <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                          <info.icon className="w-5 h-5 text-primary group-hover:text-primary-foreground transition-colors" />
                        </div>
                        <div>
                          <h4 className="font-semibold text-foreground mb-1">{info.label}</h4>
                          {info.href ?
                        <a href={info.href} className="text-muted-foreground hover:text-accent transition-colors">
                              {info.value}
                            </a> :

                        <p className="text-muted-foreground">{info.value}</p>
                        }
                        </div>
                      </div>
                    )}
                  </div>

                  <div className="p-6 rounded-2xl bg-accent/5 border border-accent/10">
                    <h4 className="font-display font-semibold mb-2">Quick Response</h4>
                    <p className="text-sm text-muted-foreground">
                      We aim to respond to all inquiries within 24 business hours.
                    </p>
                  </div>
                </ScrollReveal>
              </div>

              {/* Form */}
              <div className="lg:col-span-8">
                <ScrollReveal direction="right">
                  <form onSubmit={handleSubmit} className="bg-card rounded-3xl border border-border p-8 lg:p-10 shadow-card">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="name" className="text-sm font-medium">Full Name *</Label>
                        <Input
                          id="name"
                          required
                          placeholder="John Smith"
                          value={formData.name}
                          onChange={(e) => handleChange("name", e.target.value)}
                          className="h-12 rounded-xl border-border bg-background" />

                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="company" className="text-sm font-medium">Company</Label>
                        <Input
                          id="company"
                          placeholder="Your Company Ltd"
                          value={formData.company}
                          onChange={(e) => handleChange("company", e.target.value)}
                          className="h-12 rounded-xl border-border bg-background" />

                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="email" className="text-sm font-medium">Email Address *</Label>
                        <Input
                          id="email"
                          type="email"
                          required
                          placeholder="john@company.com"
                          value={formData.email}
                          onChange={(e) => handleChange("email", e.target.value)}
                          className="h-12 rounded-xl border-border bg-background" />

                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="phone" className="text-sm font-medium">Phone Number</Label>
                        <Input
                          id="phone"
                          type="tel"
                          placeholder="+44 123 456 7890"
                          value={formData.phone}
                          onChange={(e) => handleChange("phone", e.target.value)}
                          className="h-12 rounded-xl border-border bg-background" />

                      </div>

                      <div className="space-y-2">
                        <Label className="text-sm font-medium">Inquiry Type *</Label>
                        <Select value={formData.inquiryType} onValueChange={(value) => handleChange("inquiryType", value)}>
                          <SelectTrigger className="h-12 rounded-xl border-border bg-background">
                            <SelectValue placeholder="Select inquiry type" />
                          </SelectTrigger>
                          <SelectContent>
                            {inquiryTypes.map((type) =>
                            <SelectItem key={type.value} value={type.value}>{type.label}</SelectItem>
                            )}
                          </SelectContent>
                        </Select>
                      </div>

                      <div className="space-y-2">
                        <Label className="text-sm font-medium">Product Interest</Label>
                        <Select value={formData.product} onValueChange={(value) => handleChange("product", value)}>
                          <SelectTrigger className="h-12 rounded-xl border-border bg-background">
                            <SelectValue placeholder="Select product" />
                          </SelectTrigger>
                          <SelectContent>
                            {products.map((product) =>
                            <SelectItem key={product.value} value={product.value}>{product.label}</SelectItem>
                            )}
                          </SelectContent>
                        </Select>
                      </div>

                      {(formData.inquiryType === "quote" || formData.inquiryType === "sample") &&
                      <div className="space-y-2 md:col-span-2">
                          <Label htmlFor="quantity" className="text-sm font-medium">
                            {formData.inquiryType === "sample" ? "Sample Quantity" : "Estimated Quantity"}
                          </Label>
                          <Input
                          id="quantity"
                          placeholder={formData.inquiryType === "sample" ? "1 kg" : "e.g., 500 kg per month"}
                          value={formData.quantity}
                          onChange={(e) => handleChange("quantity", e.target.value)}
                          className="h-12 rounded-xl border-border bg-background" />

                        </div>
                      }

                      <div className="space-y-2 md:col-span-2">
                        <Label htmlFor="message" className="text-sm font-medium">Message</Label>
                        <Textarea
                          id="message"
                          rows={5}
                          placeholder="Tell us about your requirements..."
                          value={formData.message}
                          onChange={(e) => handleChange("message", e.target.value)}
                          className="rounded-xl border-border bg-background resize-none" />

                      </div>
                    </div>

                    <Button type="submit" size="xl" variant="accent" className="mt-8 w-full md:w-auto" disabled={isSubmitting}>
                      {isSubmitting ? "Sending..." :
                      <>
                          Send Message
                          <Send className="w-5 h-5" />
                        </>
                      }
                    </Button>
                  </form>
                </ScrollReveal>
              </div>
            </div>
          </div>
        </section>
      </Layout>
    </>);

}