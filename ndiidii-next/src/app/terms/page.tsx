import type { Metadata } from 'next';
import StaticPage from '@/components/StaticPage';

export const metadata: Metadata = {
  title: 'Terms & Conditions — Ndiidii Scents',
  description: 'Terms of sale for Ndiidii Scents — products, pricing, delivery and gift cards.',
};

export default function TermsPage() {
  return (
    <StaticPage eyebrow="Legal" title="Terms & Conditions" intro="The terms that apply when you shop with Ndiidii Scents.">
      <p><em>Last updated: November 2026.</em></p>

      <h2 className="serif">1. Agreement to these terms</h2>
      <p>
        By placing an order on this site you agree to these terms. If you do not agree, please do not use the
        site. These terms are between you and Ndiidii Scents (&quot;we&quot;, &quot;us&quot;, &quot;our&quot;).
      </p>

      <h2 className="serif">2. Our products</h2>
      <p>We sell Middle Eastern fragrances in the following forms:</p>
      <ul>
        <li><strong>Decant sets</strong> — curated sets of four decants, organised into three tiers.</li>
        <li><strong>Full bottles</strong> — full-size bottles, priced per fragrance.</li>
        <li><strong>Perfume oils</strong> — alcohol-free sets of four, in Designer or Niche collections.</li>
        <li><strong>Discovery sets</strong> — curated sets of four 10ml decants.</li>
        <li><strong>Gift cards</strong> — prepaid store credit.</li>
      </ul>
      <p>
        Decants are decanted from authentic full bottles of the fragrance named. We are independent of the
        fragrance houses whose products we decant.
      </p>

      <h2 className="serif">3. Orders</h2>
      <p>
        A decant set is finalised only when it contains four selections. An order is placed when you submit the
        checkout form and complete payment. We confirm your order once payment is verified.
      </p>

      <h2 className="serif">4. Pricing & payment</h2>
      <p>
        All prices are in Nigerian Naira (₦) and include VAT at the standard rate (7.5%), applied at checkout.
        Payment is processed by Paystack; we accept Visa and Mastercard. We never store your card details.
      </p>

      <h2 className="serif">5. Delivery</h2>
      <p>
        Delivery is a flat ₦2,500, free on orders over ₦150,000. We deliver to all 36 states and the Federal
        Capital Territory. Delivery timelines vary by destination and are confirmed when your order ships.
      </p>

      <h2 className="serif">6. Gift cards</h2>
      <p>
        Gift cards are sold in fixed denominations from ₦20,000 to ₦150,000 and carry no expiry. They are
        bearer instruments — anyone holding the code can spend its balance, so treat the code like cash. Gift
        cards cannot be exchanged for cash and are non-refundable.
      </p>

      <h2 className="serif">7. Returns & refunds</h2>
      <p>
        We do not currently accept returns or exchanges. All sales are final. If an order arrives damaged or
        incorrect, contact us and we will make it right.
      </p>

      <h2 className="serif">8. Availability & accuracy</h2>
      <p>
        We work to keep product information and prices accurate. Where a product is unavailable or a price is
        listed in error, we will contact you before completing the order and offer a correction or a
        cancellation and refund.
      </p>

      <h2 className="serif">9. Intellectual property</h2>
      <p>
        All content on this site — text, images, branding and design — is our property. Fragrance and brand
        names referenced belong to their respective owners and are used only to identify the products we decant.
      </p>

      <h2 className="serif">10. Limitation of liability</h2>
      <p>
        To the fullest extent permitted by law, our liability for any claim arising from a purchase is limited
        to the amount you paid for that order.
      </p>

      <h2 className="serif">11. Governing law</h2>
      <p>These terms are governed by the laws of the Federal Republic of Nigeria.</p>

      <h2 className="serif">12. Changes to these terms</h2>
      <p>
        We may update these terms from time to time. The version posted here at the time of your order applies
        to that order.
      </p>

      <h2 className="serif">13. Contact</h2>
      <p>
        Questions about these terms? Reach us through the <a href="/contact">contact page</a>.
      </p>
    </StaticPage>
  );
}
