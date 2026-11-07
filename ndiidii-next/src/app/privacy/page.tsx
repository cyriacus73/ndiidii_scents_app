import type { Metadata } from 'next';
import StaticPage from '@/components/StaticPage';

export const metadata: Metadata = {
  title: 'Privacy Policy — Ndiidii Scents',
  description: 'How Ndiidii Scents collects, uses and protects your personal information.',
};

export default function PrivacyPage() {
  return (
    <StaticPage eyebrow="Legal" title="Privacy Policy" intro="How we collect, use and protect your information.">
      <p><em>Last updated: November 2026.</em></p>

      <h2 className="serif">1. Overview</h2>
      <p>
        Ndiidii Scents respects your privacy. This policy explains what information we collect, why, and your
        rights under the Nigeria Data Protection Act (NDPA) and the earlier Nigeria Data Protection Regulation
        (NDPR).
      </p>

      <h2 className="serif">2. Information we collect</h2>
      <p>When you place an order or contact us, we collect:</p>
      <ul>
        <li>Your name, email address and phone number.</li>
        <li>Your delivery address (name, address, city, state).</li>
        <li>Order details and any messages or notes you provide.</li>
      </ul>

      <h2 className="serif">3. How we use your information</h2>
      <p>We use your information to:</p>
      <ul>
        <li>Process and deliver your orders.</li>
        <li>Contact you about your order, if needed.</li>
        <li>Respond to enquiries.</li>
        <li>Improve the store, where permitted.</li>
      </ul>
      <p>We do not sell your personal information.</p>

      <h2 className="serif">4. Payment information</h2>
      <p>
        Payments are processed by Paystack, our payment partner. We never see or store your card number —
        Paystack handles the transaction and returns only the outcome to us.
      </p>

      <h2 className="serif">5. Who we share information with</h2>
      <p>We share your information only as needed to run the store, including with:</p>
      <ul>
        <li><strong>Paystack</strong> — to process payments.</li>
        <li><strong>Delivery partners</strong> — to deliver your order.</li>
        <li><strong>Service providers</strong> — hosting and data storage.</li>
      </ul>

      <h2 className="serif">6. Data retention</h2>
      <p>
        We keep order and account information only as long as needed to fulfil orders, meet our legal
        obligations and resolve disputes.
      </p>

      <h2 className="serif">7. Your rights</h2>
      <p>You have the right to:</p>
      <ul>
        <li>Access the personal information we hold about you.</li>
        <li>Ask us to correct inaccurate information.</li>
        <li>Ask us to delete your information, where the law allows.</li>
        <li>Object to certain processing.</li>
      </ul>
      <p>To exercise any of these rights, contact us through the <a href="/contact">contact page</a>.</p>

      <h2 className="serif">8. Cookies</h2>
      <p>
        The site uses minimal cookies to remember your cart and preferences. We do not run advertising trackers.
      </p>

      <h2 className="serif">9. Security</h2>
      <p>
        We take reasonable measures to protect your information. No method of transmission over the internet is
        completely secure, and we cannot guarantee absolute security.
      </p>

      <h2 className="serif">10. Third-party links</h2>
      <p>
        Our site may link to external sites. We are not responsible for the privacy practices of those sites.
      </p>

      <h2 className="serif">11. Changes to this policy</h2>
      <p>We may update this policy from time to time. Changes are posted on this page.</p>

      <h2 className="serif">12. Contact</h2>
      <p>
        Questions about this policy? Reach us through the <a href="/contact">contact page</a>.
      </p>
    </StaticPage>
  );
}
