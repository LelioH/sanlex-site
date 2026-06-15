import config from "../site.config";

export function Announcement() {
  return (
    <div className="announce" dangerouslySetInnerHTML={{ __html: config.announcement }} />
  );
}

export function Marquee() {
  const items = [...config.marquee, ...config.marquee];
  return (
    <div className="benefits" aria-hidden="true">
      <div className="bn-track">
        {items.map((t, i) => (
          <span key={i}><i>✦</i>{t}</span>
        ))}
      </div>
    </div>
  );
}
