import { Layout } from "@/components/layout/Layout";
import { Helmet } from "react-helmet-async";

export default function Privacy() {
  return (
    <Layout>
      <Helmet>
        <title>Privacy Policy | GumDirect</title>
        <meta name="description" content="GumDirect Ltd Privacy Policy — how we collect, use, and protect your personal information." />
      </Helmet>

      <div className="bg-muted/30 border-b border-border">
        <div className="container-wide py-16 md:py-20">
          <h1 className="text-display-md font-display font-bold text-primary">Privacy Policy</h1>
          <p className="text-muted-foreground mt-2">GumDirect Ltd · Last updated: 25 February 2026</p>
        </div>
      </div>

      <div className="container-wide py-12 md:py-16 max-w-3xl">
        <div className="prose prose-neutral max-w-none space-y-8 text-foreground/80 leading-relaxed">

          <section>
            <h2 className="text-xl font-display font-bold text-primary mb-3">1. Introduction</h2>
            <p>GumDirect Ltd ("GumDirect", "we", "us", or "our") is committed to protecting and respecting your privacy.</p>
            <p>This Privacy Policy explains how we collect, use, and protect personal information when you visit our website (www.gumdirect.co.uk), submit inquiries, request samples, or engage with us in a business capacity.</p>
            <p>We process personal data in accordance with the UK General Data Protection Regulation (UK GDPR) and the Data Protection Act 2018.</p>
          </section>

          <section>
            <h2 className="text-xl font-display font-bold text-primary mb-3">2. Who We Are</h2>
            <p>GumDirect Ltd<br/>Registered in England &amp; Wales<br/>Company No: 16390184<br/>Registered Office: London, United Kingdom<br/>Email: info@gumdirect.co.uk</p>
            <p>GumDirect Ltd is the data controller for the purposes described in this policy.</p>
          </section>

          <section>
            <h2 className="text-xl font-display font-bold text-primary mb-3">3. Information We Collect</h2>
            <p>We may collect and process the following types of information:</p>
            <h3 className="text-lg font-semibold text-foreground mt-4 mb-2">Information You Provide Directly</h3>
            <ul className="list-disc pl-6 space-y-1">
              <li>Full name</li>
              <li>Company name</li>
              <li>Email address</li>
              <li>Telephone number</li>
              <li>Job title</li>
              <li>Product interests</li>
              <li>Inquiry details</li>
              <li>Any information submitted through contact or quotation forms</li>
            </ul>
            <h3 className="text-lg font-semibold text-foreground mt-4 mb-2">Technical Data</h3>
            <p>When you visit our website, we may automatically collect:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li>IP address</li>
              <li>Browser type and version</li>
              <li>Time zone setting</li>
              <li>Operating system</li>
              <li>Pages visited</li>
              <li>Referring URLs</li>
            </ul>
            <p>This information is collected through cookies and analytics tools.</p>
          </section>

          <section>
            <h2 className="text-xl font-display font-bold text-primary mb-3">4. How We Use Your Information</h2>
            <p>We use your information to:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Respond to inquiries and quotation requests</li>
              <li>Process sample requests</li>
              <li>Provide technical documentation (COA, SDS, specifications)</li>
              <li>Communicate regarding business relationships</li>
              <li>Improve our website and services</li>
              <li>Comply with legal and regulatory obligations</li>
            </ul>
            <p>We do not sell personal data to third parties.</p>
          </section>

          <section>
            <h2 className="text-xl font-display font-bold text-primary mb-3">5. Legal Basis for Processing</h2>
            <p>Under UK GDPR, we rely on the following lawful bases:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Legitimate interests (business communications and B2B engagement)</li>
              <li>Consent (where required for marketing communications)</li>
              <li>Contractual necessity (where processing is required to supply products or services)</li>
              <li>Legal obligation (where required by law)</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-display font-bold text-primary mb-3">6. Data Sharing</h2>
            <p>We may share data with:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Service providers (website hosting, email providers)</li>
              <li>Professional advisers (legal, accounting)</li>
              <li>Regulatory authorities where required by law</li>
            </ul>
            <p>All third-party processors are required to respect the security of your personal data and process it in accordance with the law.</p>
          </section>

          <section>
            <h2 className="text-xl font-display font-bold text-primary mb-3">7. International Transfers</h2>
            <p>If personal data is transferred outside the United Kingdom, we ensure appropriate safeguards are in place in accordance with UK GDPR requirements.</p>
          </section>

          <section>
            <h2 className="text-xl font-display font-bold text-primary mb-3">8. Data Retention</h2>
            <p>We retain business contact information for as long as necessary to:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Respond to inquiries</li>
              <li>Maintain business relationships</li>
              <li>Comply with legal or accounting obligations</li>
            </ul>
            <p>When data is no longer required, it is securely deleted.</p>
          </section>

          <section>
            <h2 className="text-xl font-display font-bold text-primary mb-3">9. Data Security</h2>
            <p>We implement appropriate technical and organizational measures to protect personal data from:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Unauthorized access</li>
              <li>Loss</li>
              <li>Misuse</li>
              <li>Alteration</li>
            </ul>
            <p>However, no online transmission can be guaranteed to be completely secure.</p>
          </section>

          <section>
            <h2 className="text-xl font-display font-bold text-primary mb-3">10. Your Rights</h2>
            <p>Under UK GDPR, you have the right to:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Access your personal data</li>
              <li>Request correction of inaccurate data</li>
              <li>Request erasure (where applicable)</li>
              <li>Restrict processing</li>
              <li>Object to processing</li>
              <li>Request data portability</li>
            </ul>
            <p>To exercise any of these rights, contact: <a href="mailto:info@gumdirect.co.uk" className="text-accent hover:underline">info@gumdirect.co.uk</a></p>
            <p>You also have the right to lodge a complaint with the UK Information Commissioner's Office (ICO).</p>
          </section>

          <section>
            <h2 className="text-xl font-display font-bold text-primary mb-3">11. Cookies</h2>
            <p>Our website uses cookies to:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Improve functionality</li>
              <li>Analyse website traffic</li>
              <li>Enhance user experience</li>
            </ul>
            <p>You may control cookies through your browser settings.</p>
          </section>

          <section>
            <h2 className="text-xl font-display font-bold text-primary mb-3">12. Third-Party Links</h2>
            <p>Our website may contain links to third-party websites. We are not responsible for the privacy practices of those websites.</p>
          </section>

          <section>
            <h2 className="text-xl font-display font-bold text-primary mb-3">13. Updates to This Policy</h2>
            <p>We may update this Privacy Policy from time to time. Any updates will be posted on this page with a revised "Last updated" date.</p>
          </section>

        </div>
      </div>
    </Layout>
  );
}
