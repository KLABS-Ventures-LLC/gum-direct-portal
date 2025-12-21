import { Helmet } from "react-helmet-async";
import { Layout } from "@/components/layout/Layout";
import { HeroSection } from "@/components/sections/HeroSection";
import { WhatWeDoSection } from "@/components/sections/WhatWeDoSection";
import { ProductsSection } from "@/components/sections/ProductsSection";
import { ApplicationsSection } from "@/components/sections/ApplicationsSection";
import { CertificationsSection } from "@/components/sections/CertificationsSection";
import { WhyGumDirectSection } from "@/components/sections/WhyGumDirectSection";

const Index = () => {
  return (
    <>
      <Helmet>
        <title>GumDirect | Premium Spray-Dried Acacia Gum (Gum Arabic) UK Supplier</title>
        <meta
          name="description"
          content="Premium spray-dried acacia gum direct from Sudan. UK-based supplier of food-grade gum arabic with HACCP certification, full traceability, and batch testing."
        />
      </Helmet>

      <Layout>
        <HeroSection />
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
