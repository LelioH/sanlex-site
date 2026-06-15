import type { CSSProperties } from "react";
import config from "../site.config";
import { waUrl } from "../lib/links";

export default function Hero() {
  const h = config.hero;
  const satinStyle: CSSProperties | undefined = h.image
    ? { backgroundImage: `linear-gradient(rgba(251,246,242,.35),rgba(251,246,242,.35)), url(${h.image})` }
    : undefined;

  return (
    <section className="hero">
      <div className={"hero-satin" + (h.image ? " has-photo" : "")} style={satinStyle} aria-hidden="true" />
      <div className="wrap hero-in">
        <div className="hero-copy">
          <span className="eyebrow">{h.eyebrow}</span>
          <h1>{h.title} <em>{h.titleEmphasis}</em></h1>
          <p className="lede">{h.lede}</p>
          <div className="hero-cta">
            <a href={h.ctaPrimary.href} className="btn btn-primary">
              {h.ctaPrimary.label}
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 12h14M13 6l6 6-6 6" />
              </svg>
            </a>
            <a href={h.ctaSecondary.href} className="btn btn-ghost">{h.ctaSecondary.label}</a>
          </div>
          <div className="hero-meta">
            {h.stats.map((s, i) => (
              <div key={i}><strong>{s.value}</strong><span>{s.label}</span></div>
            ))}
          </div>
        </div>

        <div className={"hero-art" + (h.heroImage ? " has-model" : "")}>
          {h.heroImage ? (
            <img src={h.heroImage} alt="" className="hero-model" aria-hidden="true" />
          ) : (
            <div className="hero-tag">
              <span className="lbl">{h.tagCard.label}</span>
              <h3>{h.tagCard.product}</h3>
              <div className="swatches">
                {h.tagCard.swatches.map((c, i) => (
                  <span key={i} className="sw" style={{ background: c }} />
                ))}
              </div>
              <div className="row"><span>{h.tagCard.ref}</span><b>{h.tagCard.price}</b></div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
