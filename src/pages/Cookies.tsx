import { Layout } from "@/components/layout/Layout";
import { Helmet } from "react-helmet-async";

export default function Cookies() {
  return (
    <Layout>
      <Helmet>
        <title>Cookie Policy | GumDirect</title>
        <meta name="description" content="GumDirect Ltd Cookie Policy — how we use cookies and similar technologies on our website." />
      </Helmet>

      <div className="bg-muted/30 border-b border-border">
        <div className="container-wide py-16 md:py-20">
          <h1 className="text-display-md font-display font-bold text-primary">Cookie Policy</h1>
          <p className="text-muted-foreground mt-2">GumDirect Ltd · Last updated: 25 February 2026</p>
        </div>
      </div>

      <div className="container-wide py-12 md:py-16 max-w-3xl">
        <div className="prose prose-neutral max-w-none space-y-8 text-foreground/80 leading-relaxed">

          <section>
            <h2 className="text-xl font-display font-bold text-primary mb-3">1. Introduction</h2>
            <p>This Cookie Policy explains how GumDirect Ltd ("GumDirect", "we", "us", or "our") uses cookies and similar technologies on www.gumdirect.co.uk ("Website").</p>
            <p>By continuing to browse or use our Website, you agree to the use of cookies in accordance with this policy, unless you disable them via your browser or cookie settings.</p>
          </section>

          <section>
            <h2 className="text-xl font-display font-bold text-primary mb-3">2. What Are Cookies?</h2>
            <p>Cookies are small text files placed on your device when you visit a website. They help websites function properly and improve user experience by remembering preferences and collecting usage data.</p>
            <p>Cookies may be:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Session cookies (deleted when you close your browser)</li>
              <li>Persistent cookies (stored for a set period)</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-display font-bold text-primary mb-3">3. Types of Cookies We Use</h2>

            <h3 className="text-lg font-semibold text-foreground mt-4 mb-2">3.1 Essential Cookies</h3>
            <p>These cookies are necessary for the Website to function correctly. They enable:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Page navigation</li>
              <li>Form submission</li>
              <li>Security features</li>
              <li>Basic website functionality</li>
            </ul>
            <p>The Website cannot function properly without these cookies.</p>

            <h3 className="text-lg font-semibold text-foreground mt-4 mb-2">3.2 Analytics Cookies</h3>
            <p>We may use analytics tools (such as Google Analytics) to collect information about:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li>How visitors use our Website</li>
              <li>Pages visited</li>
              <li>Time spent on pages</li>
              <li>Traffic sources</li>
              <li>Browser and device type</li>
            </ul>
            <p>This data is anonymised and used to improve website performance.</p>

            <h3 className="text-lg font-semibold text-foreground mt-4 mb-2">3.3 Functional Cookies</h3>
            <p>These cookies may store:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li>User preferences</li>
              <li>Session settings</li>
              <li>Language settings</li>
            </ul>
            <p>They enhance usability but are not strictly necessary.</p>
          </section>

          <section>
            <h2 className="text-xl font-display font-bold text-primary mb-3">4. Cookies We Do Not Use</h2>
            <p>We do not:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Sell cookie data</li>
              <li>Use cookies for third-party behavioural advertising</li>
              <li>Track users across unrelated websites</li>
            </ul>
            <p>If tracking tools are added in the future, this policy will be updated accordingly.</p>
          </section>

          <section>
            <h2 className="text-xl font-display font-bold text-primary mb-3">5. Managing Cookies</h2>
            <p>You can control cookies through:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Your browser settings</li>
              <li>Cookie consent banner (if implemented)</li>
            </ul>
            <p>Most browsers allow you to:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li>View stored cookies</li>
              <li>Delete cookies</li>
              <li>Block cookies</li>
              <li>Restrict third-party cookies</li>
            </ul>
            <p>Please note that disabling essential cookies may affect Website functionality.</p>
          </section>

          <section>
            <h2 className="text-xl font-display font-bold text-primary mb-3">6. Third-Party Cookies</h2>
            <p>Some third-party services embedded on the Website (such as analytics providers) may set their own cookies. We do not control these cookies.</p>
            <p>Please refer to the relevant third-party privacy policies for further information.</p>
          </section>

          <section>
            <h2 className="text-xl font-display font-bold text-primary mb-3">7. Changes to This Policy</h2>
            <p>We may update this Cookie Policy from time to time. Any changes will be posted on this page with an updated revision date.</p>
          </section>

          <section>
            <h2 className="text-xl font-display font-bold text-primary mb-3">8. Contact</h2>
            <p>If you have any questions regarding this Cookie Policy, please contact:</p>
            <p>GumDirect Ltd<br/>Email: <a href="mailto:info@gumdirect.co.uk" className="text-accent hover:underline">info@gumdirect.co.uk</a></p>
          </section>

        </div>
      </div>
    </Layout>
  );
}
