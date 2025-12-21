import { Helmet } from "react-helmet-async";
import { useSearchParams } from "react-router-dom";
import { useState } from "react";
import { Layout } from "@/components/layout/Layout";
import { Section } from "@/components/ui/section";
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
  SelectValue,
} from "@/components/ui/select";
import { Mail, Phone, MapPin, Send, CheckCircle } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "info@gumdirect.com",
    href: "mailto:info@gumdirect.com",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+44 (0) 123 456 7890",
    href: "tel:+441234567890",
  },
  {
    icon: MapPin,
    label: "Address",
    value: "GumDirect Ltd\nLondon, United Kingdom",
    href: null,
  },
];

const inquiryTypes = [
  { value: "sample", label: "Order Sample (1 kg)" },
  { value: "quote", label: "Request Bulk Quote" },
  { value: "coa", label: "Request COA/SDS" },
  { value: "datasheet", label: "Request Product Data Sheet" },
  { value: "general", label: "General Inquiry" },
];

const products = [
  { value: "senegal", label: "Acacia Senegal (Premium)" },
  { value: "seyal", label: "Acacia Seyal (Industrial)" },
  { value: "both", label: "Both Products" },
  { value: "unsure", label: "Not Sure Yet" },
];

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
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500));

    setIsSubmitting(false);
    setIsSubmitted(true);

    toast({
      title: "Message Sent!",
      description: "We'll get back to you within 24 hours.",
    });
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
          <section className="pt-32 pb-16 min-h-screen flex items-center">
            <div className="container-wide text-center">
              <ScrollReveal>
                <div className="w-20 h-20 mx-auto rounded-full gradient-primary flex items-center justify-center mb-8">
                  <CheckCircle className="w-10 h-10 text-primary-foreground" />
                </div>
                <h1 className="text-4xl md:text-5xl font-display font-bold mb-4">
                  Thank You!
                </h1>
                <p className="text-xl text-muted-foreground mb-8 max-w-md mx-auto">
                  We've received your message and will get back to you within 24
                  business hours.
                </p>
                <Button variant="default" onClick={() => setIsSubmitted(false)}>
                  Send Another Message
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
        <title>Contact Us | Get a Quote | GumDirect</title>
        <meta
          name="description"
          content="Contact GumDirect for samples, quotes, or inquiries about our premium acacia gum products. UK-based supplier with fast response times."
        />
      </Helmet>

      <Layout>
        {/* Hero */}
        <section className="pt-32 pb-16 gradient-primary text-primary-foreground">
          <div className="container-wide text-center">
            <ScrollReveal>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6">
                Contact Us
              </h1>
              <p className="text-xl text-primary-foreground/80 max-w-2xl mx-auto">
                Ready to get started? Send us a message and we'll respond within
                24 hours.
              </p>
            </ScrollReveal>
          </div>
        </section>

        {/* Contact Form & Info */}
        <Section variant="default">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Contact Info */}
            <div className="lg:col-span-1">
              <ScrollReveal direction="left">
                <h2 className="text-2xl font-display font-bold mb-6">
                  Get in Touch
                </h2>
                <div className="space-y-6">
                  {contactInfo.map((info) => (
                    <div key={info.label} className="flex gap-4">
                      <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <info.icon className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground mb-1">
                          {info.label}
                        </h4>
                        {info.href ? (
                          <a
                            href={info.href}
                            className="text-muted-foreground hover:text-primary transition-colors"
                          >
                            {info.value}
                          </a>
                        ) : (
                          <p className="text-muted-foreground whitespace-pre-line">
                            {info.value}
                          </p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-10 p-6 rounded-2xl bg-secondary/50 border border-border">
                  <h4 className="font-display font-semibold mb-2">
                    Business Hours
                  </h4>
                  <p className="text-muted-foreground text-sm">
                    Monday - Friday: 9:00 AM - 5:00 PM GMT
                    <br />
                    Saturday - Sunday: Closed
                  </p>
                </div>
              </ScrollReveal>
            </div>

            {/* Form */}
            <div className="lg:col-span-2">
              <ScrollReveal direction="right">
                <form
                  onSubmit={handleSubmit}
                  className="bg-card rounded-2xl border border-border p-8"
                >
                  <div className="grid md:grid-cols-2 gap-6">
                    {/* Name */}
                    <div className="space-y-2">
                      <Label htmlFor="name">Full Name *</Label>
                      <Input
                        id="name"
                        required
                        placeholder="John Smith"
                        value={formData.name}
                        onChange={(e) => handleChange("name", e.target.value)}
                      />
                    </div>

                    {/* Company */}
                    <div className="space-y-2">
                      <Label htmlFor="company">Company</Label>
                      <Input
                        id="company"
                        placeholder="Your Company Ltd"
                        value={formData.company}
                        onChange={(e) => handleChange("company", e.target.value)}
                      />
                    </div>

                    {/* Email */}
                    <div className="space-y-2">
                      <Label htmlFor="email">Email Address *</Label>
                      <Input
                        id="email"
                        type="email"
                        required
                        placeholder="john@company.com"
                        value={formData.email}
                        onChange={(e) => handleChange("email", e.target.value)}
                      />
                    </div>

                    {/* Phone */}
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone Number</Label>
                      <Input
                        id="phone"
                        type="tel"
                        placeholder="+44 123 456 7890"
                        value={formData.phone}
                        onChange={(e) => handleChange("phone", e.target.value)}
                      />
                    </div>

                    {/* Inquiry Type */}
                    <div className="space-y-2">
                      <Label>Inquiry Type *</Label>
                      <Select
                        value={formData.inquiryType}
                        onValueChange={(value) =>
                          handleChange("inquiryType", value)
                        }
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="Select inquiry type" />
                        </SelectTrigger>
                        <SelectContent>
                          {inquiryTypes.map((type) => (
                            <SelectItem key={type.value} value={type.value}>
                              {type.label}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>

                    {/* Product */}
                    <div className="space-y-2">
                      <Label>Product Interest</Label>
                      <Select
                        value={formData.product}
                        onValueChange={(value) => handleChange("product", value)}
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="Select product" />
                        </SelectTrigger>
                        <SelectContent>
                          {products.map((product) => (
                            <SelectItem key={product.value} value={product.value}>
                              {product.label}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>

                    {/* Quantity */}
                    {(formData.inquiryType === "quote" ||
                      formData.inquiryType === "sample") && (
                      <div className="space-y-2 md:col-span-2">
                        <Label htmlFor="quantity">
                          {formData.inquiryType === "sample"
                            ? "Sample Quantity (default: 1 kg)"
                            : "Estimated Quantity (e.g., 100 kg/month)"}
                        </Label>
                        <Input
                          id="quantity"
                          placeholder={
                            formData.inquiryType === "sample"
                              ? "1 kg"
                              : "e.g., 500 kg per month"
                          }
                          value={formData.quantity}
                          onChange={(e) =>
                            handleChange("quantity", e.target.value)
                          }
                        />
                      </div>
                    )}

                    {/* Message */}
                    <div className="space-y-2 md:col-span-2">
                      <Label htmlFor="message">Message</Label>
                      <Textarea
                        id="message"
                        rows={5}
                        placeholder="Tell us about your requirements, application, or any questions you have..."
                        value={formData.message}
                        onChange={(e) => handleChange("message", e.target.value)}
                      />
                    </div>
                  </div>

                  <Button
                    type="submit"
                    size="lg"
                    className="mt-6 w-full md:w-auto"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      "Sending..."
                    ) : (
                      <>
                        Send Message
                        <Send className="w-4 h-4" />
                      </>
                    )}
                  </Button>
                </form>
              </ScrollReveal>
            </div>
          </div>
        </Section>
      </Layout>
    </>
  );
}
