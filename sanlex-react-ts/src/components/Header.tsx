import { useState, useEffect } from "react";
import config from "../site.config";
import { useStore } from "../store/StoreContext";

function Brand({ className }: { className?: string }) {
  const { brand } = config;
  if (brand.logo) {
    return (
      <a href="#top" className={"brand brand--logo " + (className ?? "")} aria-label={brand.name}>
        <img src={brand.logo} alt={brand.name} className="brand-logo" />
      </a>
    );
  }
  return (
    <a href="#top" className={"brand " + (className ?? "")} aria-label={brand.name}>
      {brand.name}
      <span className="dot" />
      <small dangerouslySetInnerHTML={{ __html: brand.badge.replace(/ /g, "&nbsp;") }} />
    </a>
  );
}

export default function Header() {
  const { openDrawer, cartCount, favCount } = useStore();
  const [scrolled, setScrolled] = useState(false);
  const [menu, setMenu] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") setMenu(false); };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, []);

  return (
    <>
      <header className={"hdr" + (scrolled ? " scrolled" : "")}>
        <div className="wrap hdr-in">
          <Brand />
          <nav className="nav" aria-label="Principal">
            {config.nav.map((n) => <a key={n.href} href={n.href}>{n.label}</a>)}
          </nav>
          <div className="hdr-icons">
            <button className="iconbtn" aria-label="Favoritos" onClick={() => openDrawer("fav")}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7">
                <path d="M12 21s-7.5-4.8-9.7-9.3C.8 8.4 2.3 5 5.7 5c2 0 3.4 1.2 4.3 2.6C10.9 6.2 12.3 5 14.3 5c3.4 0 4.9 3.4 3.4 6.7C19.5 16.2 12 21 12 21z" />
              </svg>
              <span className={"badge" + (favCount > 0 ? " show" : "")}>{favCount}</span>
            </button>
            <button className="iconbtn" aria-label="Sacola de compras" onClick={() => openDrawer("cart")}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7">
                <path d="M6 8h12l-1 12H7L6 8z" /><path d="M9 8V6a3 3 0 0 1 6 0v2" />
              </svg>
              <span className={"badge" + (cartCount > 0 ? " show" : "")}>{cartCount}</span>
            </button>
            <button className="iconbtn menu-toggle" aria-label="Abrir menu" onClick={() => setMenu(true)}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                <path d="M4 7h16M4 12h16M4 17h16" />
              </svg>
            </button>
          </div>
        </div>
      </header>

      <nav className={"mnav" + (menu ? " open" : "")} aria-label="Menu móvel">
        <button className="mnav-close" aria-label="Fechar menu" onClick={() => setMenu(false)}>✕</button>
        {config.nav.map((n) => (
          <a key={n.href} href={n.href} onClick={() => setMenu(false)}>{n.label}</a>
        ))}
      </nav>
    </>
  );
}
