type HeroProps = {
  kicker: string;
  title: string;
  summary: string;
  primaryLabel?: string;
  primaryHref?: string;
};

export function Hero({ kicker, title, summary, primaryLabel, primaryHref }: HeroProps) {
  return (
    <section className="hero">
      <div className="container hero-grid">
        <div className="hero-copy">
          <p className="kicker">{kicker}</p>
          <h1>{title}</h1>
          <p>{summary}</p>
          {primaryLabel && primaryHref ? (
            <a className="button primary" href={primaryHref}>
              {primaryLabel}
            </a>
          ) : null}
        </div>
        <div className="hero-visual" aria-hidden="true">
          <div className="visual-card">
            <span>Story</span>
            <strong>Worlds in progress</strong>
            <small>Reading first. Design once. Reuse forever.</small>
          </div>
        </div>
      </div>
    </section>
  );
}
