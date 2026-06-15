import config from "../site.config";
import { waUrl, ig } from "../lib/links";

export default function Footer() {
  const c = config.contact;
  const lastIdx = config.footer.columns.length - 1;
  return (
    <footer className="ftr">
      <div className="wrap">
        <div className="ftr-grid">
          <div>
            <a href="#top" className="brand">
              {config.brand.name}<span className="dot" />
              <small dangerouslySetInnerHTML={{ __html: config.brand.badge.replace(/ /g, "&nbsp;") }} />
            </a>
            <p>{config.footer.blurb}</p>
          </div>

          {config.footer.columns.map((col, i) => (
            <div key={i}>
              <h4>{col.title}</h4>
              <ul>
                {col.links.map((l, j) => <li key={j}><a href={l.href}>{l.label}</a></li>)}
                {i === lastIdx && (
                  <>
                    <li><a href={ig.main} target="_blank" rel="noopener noreferrer">Instagram</a></li>
                    <li><a href={ig.secondary} target="_blank" rel="noopener noreferrer">{config.contact.instagramSecondaryLabel}</a></li>
                  </>
                )}
              </ul>
            </div>
          ))}

          <div>
            <h4>{config.footer.contactTitle}</h4>
            <ul>
              <li><a href={waUrl()} target="_blank" rel="noopener noreferrer">WhatsApp</a></li>
              <li><a href="#">{c.addressLine}</a></li>
              <li><a href="#">{c.city}</a></li>
              <li><a href="#">{c.hours}</a></li>
            </ul>
          </div>
        </div>

        <div className="ftr-bottom">
          <span>© {new Date().getFullYear()} {config.brand.legalName} · CNPJ {c.cnpj}</span>
          <span>{config.footer.tagline}</span>
        </div>
      </div>
    </footer>
  );
}
