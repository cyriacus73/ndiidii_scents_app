import type { Metadata } from 'next';
import StaticPage from '@/components/StaticPage';

export const metadata: Metadata = {
  title: 'FAQ — Ndiidii Scents',
  description: 'Answers about decants, tiers, oils, delivery and gift cards at Ndiidii Scents.',
};

export default function FaqPage() {
  return (
    <StaticPage eyebrow="Help" title="Frequently asked questions" intro="Everything you need to know, in one place.">
      <h3 className="serif">What is a decant?</h3>
      <p>
        A decant is a smaller portion of a fragrance poured from its original bottle into a smaller bottle —
        the same full-strength perfume, in a smaller size and price. Our sets are built from 4 decants each.
      </p>

      <h3 className="serif">How do the tiers work?</h3>
      <p>
        Perfumes are grouped into three tiers, each a curated set of four decants: Tier One (₦50,000), Tier Two
        (₦40,000) and Tier Three (₦30,000).
      </p>

      <h3 className="serif">Can I choose my own scents?</h3>
      <p>
        Yes. Hand-pick every scent in your set, or choose &quot;Surprise Me&quot; and we&apos;ll curate a
        selection for you.
      </p>

      <h3 className="serif">What are perfume oils?</h3>
      <p>
        Alcohol-free, skin-warm fragrances sold as sets of 4. Choose a Designer or Niche collection, then a
        bottle format: 5ml roller, 10ml spray, or 10ml roller.
      </p>

      <h3 className="serif">What is a discovery set?</h3>
      <p>A curated set of four 10ml decants (₦40,000) — a guided way to explore a house before committing.</p>

      <h3 className="serif">Do you sell full bottles?</h3>
      <p>
        Yes. Full bottles are available alongside decants, with the price shown on each fragrance&apos;s page.
      </p>

      <h3 className="serif">How much is delivery?</h3>
      <p>Delivery is a flat ₦2,500, free on orders over ₦150,000. We deliver to all 36 states and the FCT.</p>

      <h3 className="serif">What payment methods do you accept?</h3>
      <p>Cards (Visa, Mastercard) via Paystack — secure, and you&apos;re redirected back to us to confirm.</p>

      <h3 className="serif">How do gift cards work?</h3>
      <p>
        Buy a card (₦20,000–₦150,000), receive a code, and apply it at checkout to deduct from your total.
        Codes don&apos;t expire — keep them safe, as they work like cash.
      </p>
    </StaticPage>
  );
}
