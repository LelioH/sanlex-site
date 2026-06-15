import config, { themes } from "../site.config";
import { waUrl } from "../lib/links";
import { useStore } from "../store/StoreContext";

export function WhatsAppFloat() {
  return (
    <a
      className="wa-float"
      aria-label="Falar no WhatsApp"
      href={waUrl(config.contact.whatsappFloatMessage)}
      target="_blank" rel="noopener noreferrer"
    >
      <svg viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2a10 10 0 0 0-8.5 15.3L2 22l4.8-1.5A10 10 0 1 0 12 2zm5.6 14.2c-.2.6-1.2 1.2-1.7 1.2-.4 0-1 .1-3.2-.8-2.7-1.1-4.4-3.9-4.5-4.1-.1-.2-1.1-1.4-1.1-2.7 0-1.3.7-1.9.9-2.2.2-.2.5-.3.7-.3h.5c.2 0 .4 0 .6.5l.8 1.9c.1.2 0 .4-.1.6l-.4.5c-.2.2-.3.3-.1.6.2.3.9 1.4 1.9 2.3 1.3 1.1 2.3 1.4 2.6 1.6.2.1.4.1.6-.1l.7-.9c.2-.2.4-.2.6-.1l1.8.9c.3.1.4.2.5.3.1.2.1.6-.1 1.1z" />
      </svg>
    </a>
  );
}

export function Toast() {
  const { toast } = useStore();
  return (
    <div className={"toast" + (toast ? " show" : "")}>
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4"><path d="M20 6 9 17l-5-5" /></svg>
      <span>{toast?.text}</span>
    </div>
  );
}

interface ThemeSwitcherProps {
  value: string;
  onChange: (id: string) => void;
}

/* Seletor de tema por época (preview ao vivo).
   Esconda em produção: settings.showThemeSwitcher = false */
export function ThemeSwitcher({ value, onChange }: ThemeSwitcherProps) {
  if (!config.settings.showThemeSwitcher) return null;
  return (
    <div className="theme-switch">
      <label htmlFor="theme">Tema</label>
      <select id="theme" value={value} onChange={(e) => onChange(e.target.value)}>
        {Object.entries(themes).map(([id, t]) => (
          <option key={id} value={id}>{t.name}</option>
        ))}
      </select>
    </div>
  );
}
