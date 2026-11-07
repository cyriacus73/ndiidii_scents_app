import type { Metadata } from 'next';
import StaticPage from '@/components/StaticPage';

export const metadata: Metadata = {
  title: 'About — Ndiidii Scents',
  description: 'Ndiidii Scents: Middle Eastern perfume decants, curated by tier and built one collection at a time.',
};

export default function AboutPage() {
  return (
    <StaticPage
      eyebrow="Our story"
      title="Quiet luxury, poured exactly."
      intro="Ndiidii Scents brings the most sought-after Middle Eastern fragrances within reach — one considered decant at a time."
    >
      <h2 className="serif">What we do</h2>
      <p>
        We source fragrances from the houses defining modern Middle Eastern perfumery — Lattafa, Armaf, Afnan,
        Fragrance World, Maison Alhambra and more — and pour them as <strong>decants</strong>: smaller,
        affordable bottles of the same full-strength fragrance. A decant lets you own a wardrobe of scents
        instead of a single signature.
      </p>

      <h2 className="serif">The tier system</h2>
      <p>
        Perfumes are organised into three tiers, each a curated set of four decants. Pick the tier that fits
        you, then choose every scent yourself — or let us surprise you.
      </p>
      <ul>
        <li><strong>Tier One</strong> — ₦50,000 per set of 4 decants</li>
        <li><strong>Tier Two</strong> — ₦40,000 per set of 4 decants</li>
        <li><strong>Tier Three</strong> — ₦30,000 per set of 4 decants</li>
      </ul>

      <h2 className="serif">Beyond decants</h2>
      <p>
        We also offer <strong>perfume oils</strong> — alcohol-free, skin-warm alternatives in roller and spray
        formats — and <strong>curated discovery sets</strong> of four 10ml decants for exploring a house
        you&apos;ve been meaning to try.
      </p>

      <h2 className="serif">What we believe</h2>
      <p>Quiet over loud. Considered curation over impulse. Restraint in design, packaging, and service.</p>
    </StaticPage>
  );
}
