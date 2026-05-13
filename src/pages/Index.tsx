import { SEO } from "@/components/SEO";
import { Layout } from "@/components/layout/Layout";
import { HeroSection } from "@/components/sections/HeroSection";
import { VideoSection } from "@/components/sections/VideoSection";
import { WhatWeDoSection } from "@/components/sections/WhatWeDoSection";
import { ProductsSection } from "@/components/sections/ProductsSection";
import { ApplicationsSection } from "@/components/sections/ApplicationsSection";
import { CertificationsSection } from "@/components/sections/CertificationsSection";
import { WhyGumDirectSection } from "@/components/sections/WhyGumDirectSection";

const Index = () => {
  return (
    <>
      <SEO
        title="GumDirect | Premium Acacia Gum UK Supplier"
        description="Premium spray-dried acacia gum direct from Sudan. UK-based supplier of food-grade gum arabic with HACCP certification, full traceability, and batch testing."
        path="/"
      />

      <Layout>
        <HeroSection />
        <VideoSection />
        <WhatWeDoSection />
        <ProductsSection />
        <ApplicationsSection />
        <CertificationsSection />
        <WhyGumDirectSection />
      </Layout>
    </>
  );
};

export default Index;
