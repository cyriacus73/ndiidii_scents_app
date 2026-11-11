import type { Metadata } from 'next';
import StaticPage from '@/components/StaticPage';

export const metadata: Metadata = {
  title: 'About — Ndiidii Scents',
  description: 'Ndiidii Scents: a legacy of love, built on authentic Middle Eastern perfumes and decants.',
};

export default function AboutPage() {
  return (
    <StaticPage
      eyebrow="Our story"
      title="A legacy of love"
      intro="Ndiidii Scents began with a mother's endless curiosity about perfume."
    >
      <p>
        My mum was endlessly curious about perfume. She never settled on one signature scent — she loved the
        exploring: trying something new, discovering a fragrance that suited a mood, and building a collection
        as varied as she was. For her, a perfume was a small celebration of being alive.
      </p>
      <p>
        Sadly, we lost her. On the first anniversary of her passing, I wanted to do something that carried her
        spirit forward — and Ndiidii Scents was born. It is a legacy of love, built on the thing she loved most.
      </p>

      <h2 className="serif">Why we exist</h2>
      <p>
        Middle Eastern perfumes are some of the most beautiful in the world — rich oud, warm amber, soft musk,
        and layers of vanilla and spice. But a full bottle is a big commitment, and many of us have been there:
        you buy a bottle on hype or a description, and it just isn&apos;t you.
      </p>
      <p>
        The money is spent, the bottle sits unused, and the disappointment makes you wary of trying again. We
        call that the <strong>heartbreak of blind buying</strong> — and we created Ndiidii Scents to avert it.
      </p>

      <h2 className="serif">How it works</h2>
      <p>
        Explore our collection of over 1,000 original Middle Eastern perfumes from brands including Lattafa,
        Rayhaan, Gissah, Assaf, Maison Asrar, Khadlaj and more, then choose four fragrances — delivered in 10ml
        decant bottles in a beautifully packaged box. Wear them to the office, on date nights, at special
        occasions and weddings, to the gym — and find out which ones truly feel like yours before investing in
        a full bottle.
      </p>
      <p>Not sure where to start?</p>
      <p>
        Our curated discovery sets do the choosing for you, grouping fragrances by mood, occasion and style.
        They are ideal for first-timers, for gifting, and for anyone who finds a thousand options a little
        overwhelming.
      </p>
      <p>Every tier comes as a box of 4 × 10ml decants, and we deliver nationwide across Nigeria.</p>

      <h2 className="serif">Our promise to you</h2>
      <ul>
        <li>
          <strong>100% original, authentic fragrances.</strong> We decant only genuine Middle Eastern perfumes
          — no imitations, no shortcuts.
        </li>
        <li>
          <strong>Careful packaging.</strong> Your decants arrive together in a presentation box, ready to
          enjoy or to gift.
        </li>
        <li>
          <strong>Honest guidance.</strong> Our discovery sets and fragrance notes help you choose with
          confidence.
        </li>
        <li>
          <strong>Discovery without the risk.</strong> Explore at a fraction of the cost of a full bottle.
        </li>
      </ul>

      <p>
        Every box carries a little of my mum&apos;s curiosity — and her belief that there is always another
        fragrance worth falling in love with.
      </p>
      <p>Welcome to Ndiidii Scents. Let&apos;s find your next signature scent. ❤️</p>
    </StaticPage>
  );
}
