import type { Metadata } from 'next';
import StaticPage from '@/components/StaticPage';

export const metadata: Metadata = {
  title: 'Contact — Ndiidii Scents',
  description: 'Reach Ndiidii Scents — questions, special requests, or a scent you cannot find.',
};

export default function ContactPage() {
  return (
    <StaticPage
      eyebrow="Contact"
      title="Talk to us"
      intro="Questions, special requests, or a scent you can't find — reach us on any channel below. We typically reply within 1–2 business days."
    >
      <div className="page-contacts">
        <a className="page-contact" href="mailto:hello@ndiidii.com">
          <span className="page-contact__label">Email</span>
          <span className="page-contact__value">hello@ndiidii.com</span>
        </a>
        <a className="page-contact" href="https://wa.me/" target="_blank" rel="noopener noreferrer">
          <span className="page-contact__label">WhatsApp</span>
          <span className="page-contact__value">Message us</span>
        </a>
        <a className="page-contact" href="https://instagram.com/" target="_blank" rel="noopener noreferrer">
          <span className="page-contact__label">Instagram</span>
          <span className="page-contact__value">DM us</span>
        </a>
        <a className="page-contact" href="https://x.com/" target="_blank" rel="noopener noreferrer">
          <span className="page-contact__label">X (Twitter)</span>
          <span className="page-contact__value">Follow us</span>
        </a>
      </div>

      <p style={{ marginTop: 28 }}>
        For order-specific help, include your order reference if you have one — it helps us help you faster.
      </p>
    </StaticPage>
  );
}
