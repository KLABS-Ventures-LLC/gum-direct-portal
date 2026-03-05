import { Layout } from "@/components/layout/Layout";
import { Helmet } from "react-helmet-async";

export default function Terms() {
  return (
    <Layout>
      <Helmet>
        <title>Terms of Service | GumDirect</title>
        <meta name="description" content="GumDirect Ltd Terms of Service — terms governing your use of our website." />
      </Helmet>

      <div className="bg-muted/30 border-b border-border">
        <div className="container-wide py-16 md:py-20">
          <h1 className="text-display-md font-display font-bold text-primary">Terms of Service</h1>
          <p className="text-muted-foreground mt-2">GumDirect Ltd · Last updated: 25 February 2026</p>
        </div>
      </div>

      <div className="container-wide py-12 md:py-16 max-w-3xl">
        <div className="prose prose-neutral max-w-none space-y-8 text-foreground/80 leading-relaxed">

          <section>
            <h2 className="text-xl font-display font-bold text-primary mb-3">1. Introduction</h2>
            <p>These Terms of Service ("Terms") govern your use of the website www.gumdirect.co.uk ("Website") operated by GumDirect Ltd ("GumDirect", "we", "us", or "our").</p>
            <p>By accessing or using this Website, you agree to be bound by these Terms. If you do not agree, you should not use this Website.</p>
          </section>

          <section>
            <h2 className="text-xl font-display font-bold text-primary mb-3">2. Company Information</h2>
            <p>GumDirect Ltd<br/>Registered in England &amp; Wales<br/>Company No: 16390184<br/>Registered Office: London, United Kingdom<br/>Email: info@gumdirect.co.uk</p>
          </section>

          <section>
            <h2 className="text-xl font-display font-bold text-primary mb-3">3. Use of Website</h2>
            <p>This Website is intended for business-to-business (B2B) use only.</p>
            <p>You agree:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li>To use the Website for lawful purposes only</li>
              <li>Not to misuse or interfere with Website functionality</li>
              <li>Not to attempt unauthorized access to systems or data</li>
              <li>Not to reproduce, copy, or distribute content without permission</li>
            </ul>
            <p>We reserve the right to suspend or restrict access where misuse is suspected.</p>
          </section>

          <section>
            <h2 className="text-xl font-display font-bold text-primary mb-3">4. Product Information</h2>
            <p>All product descriptions, technical data, specifications, and documentation provided on this Website are for general informational purposes only.</p>
            <p>While we aim to ensure accuracy:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Product specifications may vary between batches</li>
              <li>Technical data sheets (TDS) contain indicative values</li>
              <li>Certificates of Analysis (COA) are batch-specific</li>
              <li>Information does not constitute a binding specification unless agreed in writing</li>
            </ul>
            <p>Customers are responsible for verifying product suitability for their intended application.</p>
          </section>

          <section>
            <h2 className="text-xl font-display font-bold text-primary mb-3">5. Samples &amp; Orders</h2>
            <p>Any request for samples or quotations submitted through this Website does not constitute a binding contract.</p>
            <p>All commercial transactions are subject to:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Formal quotation</li>
              <li>Written confirmation</li>
              <li>Separate supply agreement where applicable</li>
            </ul>
            <p>We reserve the right to refuse sample or supply requests at our discretion.</p>
          </section>

          <section>
            <h2 className="text-xl font-display font-bold text-primary mb-3">6. Pricing &amp; Quotations</h2>
            <p>Prices displayed (including sample pricing) are subject to change without notice.</p>
            <p>Formal quotations issued by GumDirect are:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Time-limited</li>
              <li>Subject to availability</li>
              <li>Subject to final written confirmation</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-display font-bold text-primary mb-3">7. Limitation of Liability</h2>
            <p>To the fullest extent permitted by law, GumDirect Ltd shall not be liable for:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Indirect or consequential losses</li>
              <li>Loss of profit, revenue, or business</li>
              <li>Formulation failure or product incompatibility</li>
              <li>Regulatory non-compliance in customer applications</li>
            </ul>
            <p>Customers must independently validate product performance and regulatory compliance within their own systems.</p>
            <p>Nothing in these Terms excludes liability for:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Death or personal injury caused by negligence</li>
              <li>Fraud or fraudulent misrepresentation</li>
              <li>Any liability that cannot be excluded under UK law</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-display font-bold text-primary mb-3">8. Intellectual Property</h2>
            <p>All content on this Website, including text, graphics, logos, technical materials, and branding, is the property of GumDirect Ltd and may not be reproduced without written permission.</p>
          </section>

          <section>
            <h2 className="text-xl font-display font-bold text-primary mb-3">9. Regulatory Responsibility</h2>
            <p>It is the responsibility of the customer to ensure:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Compliance with local laws and regulations</li>
              <li>Proper product testing</li>
              <li>Suitability for intended use</li>
              <li>Labelling and marketing compliance</li>
            </ul>
            <p>Product documentation provided by GumDirect does not replace regulatory review by the customer.</p>
          </section>

          <section>
            <h2 className="text-xl font-display font-bold text-primary mb-3">10. Website Availability</h2>
            <p>We aim to maintain uninterrupted access to the Website but do not guarantee that it will always be available or error-free.</p>
            <p>We reserve the right to modify or withdraw the Website and update content without notice.</p>
          </section>

          <section>
            <h2 className="text-xl font-display font-bold text-primary mb-3">11. Third-Party Links</h2>
            <p>The Website may contain links to third-party websites. We are not responsible for their content or privacy practices.</p>
          </section>

          <section>
            <h2 className="text-xl font-display font-bold text-primary mb-3">12. Governing Law</h2>
            <p>These Terms are governed by the laws of England and Wales.</p>
            <p>Any disputes arising in connection with these Terms shall be subject to the exclusive jurisdiction of the courts of England and Wales.</p>
          </section>

          <section>
            <h2 className="text-xl font-display font-bold text-primary mb-3">13. Changes to These Terms</h2>
            <p>We may update these Terms from time to time. Updated versions will be published on this page with a revised "Last updated" date.</p>
          </section>

        </div>
      </div>
    </Layout>
  );
}
