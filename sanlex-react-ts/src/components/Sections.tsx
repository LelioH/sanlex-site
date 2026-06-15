import type { SVGProps } from "react";
import config from "../site.config";
import { waUrl, ig } from "../lib/links";

const WaIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M12 2a10 10 0 0 0-8.5 15.3L2 22l4.8-1.5A10 10 0 1 0 12 2zm5.6 14.2c-.2.6-1.2 1.2-1.7 1.2-.4 0-1 .1-3.2-.8-2.7-1.1-4.4-3.9-4.5-4.1-.1-.2-1.1-1.4-1.1-2.7 0-1.3.7-1.9.9-2.2.2-.2.5-.3.7-.3h.5c.2 0 .4 0 .6.5l.8 1.9c.1.2 0 .4-.1.6l-.4.5c-.2.2-.3.3-.1.6.2.3.9 1.4 1.9 2.3 1.3 1.1 2.3 1.4 2.6 1.6.2.1.4.1.6-.1l.7-.9c.2-.2.4-.2.6-.1l1.8.9c.3.1.4.2.5.3.1.2.1.6-.1 1.1z" />
  </svg>
);

const handle = (url: string) => "@" + url.replace(/.*instagram\.com\//, "").replace(/\/$/, "");

export function Atacado() {
  const a = config.atacado;
  return (
    <section className="section" id="atacado" style={{ paddingTop: 0 }}>
      <div className="wrap">
        <div className="atacado">
          <div>
            <span className="eyebrow">{a.eyebrow}</span>
            <h2>{a.title}</h2>
            <p>{a.text}</p>
            <div className="atacado-list" style={{ marginTop: 24 }}>
              {a.bullets.map((b, i) => (
                <div className="it" key={i}>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M20 6 9 17l-5-5" /></svg>
                  <span><b>{b.strong}</b>{b.rest}</span>
                </div>
              ))}
            </div>
            <a
              className="btn btn-light"
              href={waUrl(config.atacado.whatsappMessage)}
              target="_blank" rel="noopener noreferrer"
            >
              {a.cta}<WaIcon width="18" height="18" />
            </a>
          </div>
          <div className="quote-box">
            <span className="q">“{a.quote}”</span>
            <span className="a">{a.quoteAuthor}</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export function About() {
  const a = config.about;
  return (
    <section className="section" id="sobre" style={{ paddingTop: 0 }}>
      <div className="wrap about">
        <div className="about-art" aria-hidden="true">
          {a.image
            ? <img src={a.image} alt="" />
            : <div className="seal"><b>{a.sealNumber}</b><span>{a.sealLabel}</span></div>}
        </div>
        <div>
          <span className="eyebrow">{a.eyebrow}</span>
          <h2>{a.title}</h2>
          {a.paragraphs.map((p, i) => <p key={i}>{p}</p>)}
          <div className="stats">
            {a.stats.map((s, i) => (
              <div key={i}><strong>{s.value}</strong><span>{s.label}</span></div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export function FollowCTA() {
  const f = config.follow;
  return (
    <section className="section" id="contato" style={{ paddingTop: 0 }}>
      <div className="wrap">
        <div className="followcta">
          <span className="eyebrow">{f.eyebrow}</span>
          <h2>{f.title}</h2>
          <p>{f.text}</p>
          <div className="follow-links">
            <a className="btn btn-primary" href={ig.main} target="_blank" rel="noopener noreferrer">{handle(ig.main)}</a>
            <a className="btn btn-ghost" href={ig.secondary} target="_blank" rel="noopener noreferrer">{handle(ig.secondary)}</a>
            <a className="btn btn-wa" style={{ width: "auto" }} href={waUrl()} target="_blank" rel="noopener noreferrer">
              {config.contact.whatsappLabel}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
