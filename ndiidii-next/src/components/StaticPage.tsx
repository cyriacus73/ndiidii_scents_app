/**
 * Shared shell for static / informational pages (About, Contact, legal, FAQ).
 * Renders the centered eyebrow + title + intro, then the body at a readable
 * prose width. Header/footer come from the root layout.
 */
export default function StaticPage({
  eyebrow,
  title,
  intro,
  children,
}: {
  eyebrow?: string;
  title: string;
  intro?: string;
  children: React.ReactNode;
}) {
  return (
    <section className="page">
      <div className="container">
        <header className="page__head">
          {eyebrow && <p className="eyebrow page__eyebrow">{eyebrow}</p>}
          <h1 className="serif page__title">{title}</h1>
          {intro && <p className="page__intro">{intro}</p>}
        </header>
        <div className="page__body">{children}</div>
      </div>
    </section>
  );
}
