import type { Metadata } from 'next';
import StaticPage from '@/components/StaticPage';

export const metadata: Metadata = {
  title: 'Shipping & Delivery — Ndiidii Scents',
  description: 'Delivery across Nigeria — ₦2,500 flat, free on orders over ₦150,000.',
};

export default function ShippingPage() {
  return (
    <StaticPage
      eyebrow="Delivery"
      title="Shipping & delivery"
      intro="We deliver across Nigeria — straightforward fees, no surprises."
    >
      <h2 className="serif">Delivery fees</h2>
      <p>
        Delivery is a flat <strong>₦2,500</strong> per order, and <strong>free on orders over ₦150,000</strong>.
      </p>

      <h2 className="serif">Where we deliver</h2>
      <p>We deliver to all 36 states and the Federal Capital Territory.</p>

      <h2 className="serif">When your order ships</h2>
      <p>
        Once payment is confirmed, your order is prepared for dispatch. Delivery timelines vary by destination
        and are confirmed when your order ships.
      </p>

      <h2 className="serif">Questions about an order</h2>
      <p>
        If anything about your delivery needs attention, reach us through the{' '}
        <a href="/contact">contact page</a> and we&apos;ll sort it out.
      </p>
    </StaticPage>
  );
}
